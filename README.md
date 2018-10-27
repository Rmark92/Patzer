# Patzer

Patzer is a chess engine built with JavasScript.  It adheres to most standard chess rules, including promotions, castling, en passant, and draw by threefold repetition.

Play the live version [here](http://ryan-mark.xyz/Patzer/)

## Implementation Details:

### UI

The jQuery-based UI allows the user to make a move by dragging a piece to its destination and renders an animation for AI moves. It also provides options for player color, AI thinking time, unmaking moves, and choosing the AI move on the player's turn.

Todo: mobile compatibility

### Basic Gameplay

#### Board Representation
The board is represented by a set of 8 [bitboards](https://en.wikipedia.org/wiki/Bitboard),
one for each piece type and color. Compared to an array-based representation, bitboards use less memory and typically allow for faster board manipulation and analysis via bitwise operations. Since Javascript doesn't support bitwise operations for 64-bit integers, each [bitboard object](./js/bitboard/bitboard.js) consists of high 32 bits and low 32 bits.

Here are some key parts of the BitBoard class:

```javascript
//56 57 58 59 60 61 62 63
//48 49 50 51 52 53 54 55  ^
//40 41 42 43 44 45 46 47  |
//32 33 34 35 36 37 38 39 HIGH
//24 25 26 27 28 29 30 31 LOW
//16 17 18 19 20 21 22 23  |
// 8  9 10 11 12 13 14 15  v
// 0  1  2  3  4  5  6  7

class BitBoard {
  constructor(low, high) {
    this.low = (low || 0) >>> 0;
    this.high = (high || 0) >>> 0;
  }

  and(other) {
    return new BitBoard(this.low & other.low, this.high & other.high);
  }

  or(other) {
    return new BitBoard(this.low | other.low, this.high | other.high);
  }

  xor(other) {
    return new BitBoard(this.low ^ other.low, this.high ^ other.high);
  }

  not() {
    return new BitBoard(~this.low, ~this.high);
  }

  ...

  shiftRight(numBits) {
    let newLowBits, newHighBits;

    if (numBits <= 0) {
      return new BitBoard(this.low, this.high);
    } else if (numBits > 63) {
      return new BitBoard();
    } else if (numBits >= 32) {
      newLowBits = this.high >>> (numBits - 32);
      newHighBits = 0;
    } else {
      newLowBits = (this.low >>> numBits) | (this.high << (32 - numBits));
      newHighBits = this.high >>> numBits;
    }

    return new BitBoard(newLowBits, newHighBits);
  }

  ...

  // iteration that sends the position (0-63) to the callback
  pop1Bits(cb) {
    while (this.low) {
      cb(Utils.bitScanForward32(this.low));
      this.low = Utils.clearLeastSigBit32(this.low);
    }

    while (this.high) {
      cb(Utils.bitScanForward32(this.high) + 32);
      this.high = Utils.clearLeastSigBit32(this.high);
    }
  }

  ...
}  
```

Todo: [Magic Bitboards](https://www.chessprogramming.org/Magic_Bitboards)

#### Move Generation
Using bitboards, pawn move destinations can be generated on the set of all existing pawns with just one bitwise operation. Other pieces make use of precomputed arrays that map their position to a bitboard of possible destinations. We then make minor adjustments to these destination bitboards based on other pieces on the board. As an example, below is the code for generating sliding move destination bitboards:

```javascript
// Note: SLIDE_MOVES is a precomputed array of objects,
// with the array index corresponding to the board position.
// The objects contain keys for each direction, and the values
// are bitboards identifying sliding destinations in that direction.
// For example, this would be the bitboard for northeast from position 18:

// 00000001
// 00000010
// 00000100
// 00001000
// 00010000
// 00000000
// 00000000
// 00000000

const isPosRay = {
  [Dirs.NORTH]: true,
  [Dirs.EAST]: true,
  [Dirs.NOEA]: true,
  [Dirs.NOWE]: true,
  [Dirs.SOUTH]: false,
  [Dirs.WEST]: false,
  [Dirs.SOEA]: false,
  [Dirs.SOWE]: false
};

function findUnblocked(pos, occupied, dir) {
  const posBB = new BitBoard();
  const dirBB = SLIDE_MOVES[pos][dir];
  const blocking = dirBB.and(occupied);
  let blockingPos;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = isPosRay[dir] ? blocking.bitScanForward() : blocking.bitScanReverse();
    // exclude any destinations beyond the blocking position in the specified direction:
    return dirBB.xor(SLIDE_MOVES[blockingPos][dir]);
  }
}

function horizVert(pos, occupied, notOwnPieces) {
  return [Dirs.NORTH, Dirs.SOUTH, Dirs.EAST, Dirs.WEST].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

function diag(pos, occupied, notOwnPieces) {
  return [Dirs.NOEA, Dirs.NOWE, Dirs.SOEA, Dirs.SOWE].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}
```

Once we have our destination bitboards, we iterate over them to create [move objects](./js/move/index.js), which are added to an array of possible moves. Move objects store move information in 32bit integers, including details such as piece type, captured piece type, whether the move is a castle or promotion, etc. The primary move generation function generates moves without consideration for whether they put the king in check (pseudolegal).

#### Move Execution
The move making function takes a pseudolegal move object and tests it for full legality before actually executing it. The reasoning behind putting off the legality check until execution is that our ai move search generates all moves for a position and then attempts each move individually. If a move produces a pruning cutoff, its sibling moves won't be tried, so it's more efficient to only check for full legality of moves that we actually attempt.

Move execution updates the board and all other state information associated with a position. In order to save memory, all moves in the game and AI search are made on the same [position object](./js/position/index.js), so we also have a function to unmake a move and restore the previous state.

Here's the code for making and testing a move:
```javascript
// makes a specified move if it's legal, updating the current position
// returns true if the move is made, false otherwise
makeMove(move) {
  const moveData = move.getData();

  let isLegal;
  this.testMove(moveData, (testsLegal) => {
    isLegal = testsLegal;
    return !isLegal;
  });

  if (!isLegal) { return false; }
  this.addPrevState();

  this.adjustCastleRights(moveData.pieceType, moveData.from, moveData.captPieceType, moveData.to);
  this.setNewEpState();

  // handles special move types, like castling and promotions
  this.execMoveType(moveData.from, moveData.to, moveData.type);

  this.prevMoves.push(move);
  this.swapTurn();
  this.addPositionCount();

  return true;
}

// makes the piece movements needed to determine
// if the move is legal, sends a boolean for the legality
// to the callback and undoes the piece movements if the callback
// returns true
// Note: this function is also used as a filter to collect fully legal moves, in which case we only want
// to test that a move is legal and always undo the piece movements. for this reason, we make the
// piece movement reversal dependent on a callback
testMove(moveData, cb) {
  if (moveData.captPieceType) {
    this.clearPieceAt(moveData.to, this.opp, moveData.captPieceType);
  }

  if (moveData.isPromo) {
    this.clearPieceAt(moveData.from, this.turn, PTypes.PAWNS);
  } else {
    this.movePiece(moveData.from, moveData.to, this.turn, moveData.pieceType);
  }

  const undo = cb(this.testsLegal(moveData));
  if (!undo) { return; }

  if (moveData.isPromo) {
    this.setPieceAt(moveData.from, this.turn, PTypes.PAWNS);
  } else {
    this.movePiece(moveData.to, moveData.from, this.turn, moveData.pieceType);
  }

  if (moveData.captPieceType) {
    this.setPieceAt(moveData.to, this.opp, moveData.captPieceType);
  }
}
```

### Move Search

#### Main Search
The move search implements the [negamax algorithm](https://en.wikipedia.org/wiki/Negamax), which is a more concise version of the [minimax algorithm](https://en.wikipedia.org/wiki/Minimax) relying on an evaluation function such that `maximizingPlayerScore = -minimizingPlayerScore`.  It uses [Alpha-Beta pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning) to drastically reduce the number of nodes evaluated, and includes several optimizations to make this pruning mechanism more effective.

```javascript
negaMax(depth, alpha, beta) {

  ...

  if (depth === 0) {
    return this.quiescenceSearch(alpha, beta);
  }

  ...

  for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
    if (this.position.makeMove(moves[moveIdx])) {
      canMove = true;
      result = this.negaMax(depth - 1, -beta, -alpha);
      this.position.unmakePrevMove();

      if (result === 'early exit') {
        return result;
      }

      score = -result;
      if (score > bestScore) {
        bestScore = score;
        bestMove = moves[moveIdx];

        if (bestScore >= beta) {
          this.killerMoveList.addMove(this.maxDepth - depth, moves[moveIdx]);
          break;
        }

        if (bestScore > alpha) {
          alpha = bestScore;
        }
      }
    }
  }

  if (!canMove) {
    if (this.position.inCheck(this.position.turn)) {
      bestScore = -PUtils[PTypes.KINGS].value;
    } else {
      bestScore = 0;
    }
  }

  this.transPosTable.storeEntry(bestScore, bestMove, prevAlpha, beta, depth, currHash);
  return bestScore;
  }
}
```

#### Quiescence Search
If the search were terminated at a fixed depth, we'd run the risk of assigning a positive value to a leaf node position that would clearly prove to be detrimental over the following sequence of moves. For example, if our search concluded with a queen capturing a pawn, all else being equal, a positive value would be assigned to the move. The queen might be captured on the very next move, but this wouldn't be taken into account. In order to mitigate this [horizon effect](https://en.wikipedia.org/wiki/Horizon_effect), the main search is followed by a [quiescence search](https://en.wikipedia.org/wiki/Quiescence_search) that exhausts all sequences of captures and check evasions so that only quiet positions are evaluated.

#### Memoization
A [transposition table](https://en.wikipedia.org/wiki/Transposition_table) is used to store the results of previously explored positions, which are uniquely identified by a signed 32-bit [zobrist hash](https://en.wikipedia.org/wiki/Zobrist_hashing).

#### Iterative Deepening
The search is time-limited through an [iterative deepening](https://www.chessprogramming.org/Iterative_Deepening) process that increments the max search depth for each iteration. In addition to the obvious benefits of adjusting the search for UI preferences and complexity of the current position, iterative deepening delivers the large advantage of better move ordering for higher and more costly max depths.

```javascript
findBest(thinkingTime) {

  ...

  this.maxDepth = 1;
  while (Date.now() < this.endTime && this.maxDepth < 30) {
    this.killerMoveList.addSlot();
    this.negaMax(this.maxDepth, -Infinity, Infinity);
    this.maxDepth++;
  }

  ...
}

negaMax(depth, alpha, beta) {
  if (Date.now() > this.endTime) {
    this.perfMonitor.setDepth(this.maxDepth - 1);
    return 'early exit';
  }

  ...
}
quiescenceSearch(alpha, beta) {
  if (Date.now() > this.endTime) {
    this.perfMonitor.setDepth(this.maxDepth - 1);
    return 'early exit';
  }

  ...

}
```

#### Move Ordering
Alpha-Beta pruning is most effective when the best moves are considered first. If we were able to determine the best moves a priori there'd be no need for a search at all, so we make guesses based on available information, including (in order of priority):

1. Transposition table move: if a best move were found for the current position, it's a very strong candidate even if it was evaluated for a lower depth
2. Captures: captures are ranked based on `capturedPieceValue / capturingPieceValue`
3. Killer Moves: a killer move is a move that produced a pruning cutoff at the same distance from the root. If it produced a cutoff in a similar position, it will likely produce a cutoff in the current node
4. Other heuristics: piece type and move type. Pieces with higher value and move types like promotions, castling, etc take precedence

```javascript
function calculateMoveOrderScore(move) {
  if (prevBestMove && move.val === prevBestMove.val) {
    return 10000;
  }
  let score = move.getCaptPiece() ? ((1 + move.getCaptPiece()) / (1 + move.getPiece()) + 1): 0;
  score = score * 10 + (siblingKillerMoves.includes(move.val) ? 1 : 0);
  score = score * 10 + move.getPiece();
  score = score * 10 + move.getType();

  return score;
}
```

Todo: [Aspiration Windows](https://www.chessprogramming.org/Aspiration_Windows)

#### Move Evaluation
Leaf node positions are evaluated with a relatively simple heuristic that accounts for material and piece location. The material score is a sum of existing pieces weighted by type, and piece location is scored based on static [piece-square tables](https://www.chessprogramming.org/Simplified_Evaluation_Function#Piece-Square_Tables).

```javascript
evaluate() {
  let materialScore = this.scoreMaterial(this.position.turn) -
                      this.scoreMaterial(this.position.opp);

  let piecePositionScore = this.scorePiecePositions(this.position.turn) -
                           this.scorePiecePositions(this.position.opp);

  return materialScore + piecePositionScore;
}

scoreMaterial(color) {
  let score = 0;
  eachPieceType((pieceType) => {
    score += this.position.getColorPieceSet(color, pieceType).popCount() *
             PUtils[pieceType].value;
  });

  return score;
}

scorePiecePositions(color) {
  let score = 0;
  let piecePositions;
  eachPieceType((pieceType) => {
    piecePositions = this.position.getColorPieceSet(color, pieceType);
    piecePositions.dup().pop1Bits((pos) => {
      score += PUtils[pieceType].positionValues[color ? pos : 56 ^ pos];
    });
  });

  return score;
}
```

Todo: [Pawn Structure](https://www.chessprogramming.org/Pawn_Structure), [Mobility](https://www.chessprogramming.org/Mobility), different heuristics for each [game phase](https://www.chessprogramming.org/Game_Phases)
