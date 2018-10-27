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

Here's the BitBoard class with some of its functionality:

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
Using bitboards, pawn move destinations can be generated on the set of all existing pawns with just one bitwise operation. Other pieces make use of precomputed arrays that map their position to a bitboard of possible destinations. We then make minor adjustments to these destination bitboards based on other pieces on the board. As an example, below is the code for sliding move generation:

```javascript
// Note: SLIDE_MOVES is a precomputed array of objects,
// with the array index corresponding to the board position.
// The objects contain keys for each direction, and the values
// are bitboards identifying sliding destinations in that direction.
// For example, this would be the bitboard for northeast from position 27:

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
  const epPos = this.epBB.bitScanForward();
  if (epPos !== null) { this.stateHash ^= epPosHashKeys[epPos]; }
  this.epBB = new BitBoard();

  // handles special move types like castling, promotions, etc.
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

The move search implements the [negamax algorithm](https://www.chessprogramming.org/Negamax) with [Alpha-Beta pruning](https://www.chessprogramming.org/Alpha-Beta). In order to mitigate the [horizon effect](https://www.chessprogramming.org/Horizon_Effect), the main search is followed by a [quiescence search](https://www.chessprogramming.org/Quiescence_Search) that exhausts all sequences of captures and check evasions so that only quiet positions are evaluated. A [transposition table](https://www.chessprogramming.org/Transposition_Table) is used to store the results of previously explored positions, which are uniquely identified by a signed 32-bit [zobrist hash](https://www.chessprogramming.org/Zobrist_Hashing). The search is time-limited through an [iterative deepening](https://www.chessprogramming.org/Iterative_Deepening) process that increments the max search depth for each iteration. In addition to the obvious benefits of adjusting the search for UI preferences and complexity of the current position, iterative deepening delivers the large advantage of better [move ordering](https://www.chessprogramming.org/Move_Ordering) for higher and more costly max depths.

Todo: [Killer Heuristic](https://www.chessprogramming.org/Killer_Heuristic), [Aspiration Windows](https://www.chessprogramming.org/Aspiration_Windows)

### Move Evaluation

Leaf node positions are evaluated with a relatively simple heuristic that accounts for material and piece location. The material score is a sum of existing pieces weighted by type, and piece location is scored based on static [piece-square tables](https://www.chessprogramming.org/Simplified_Evaluation_Function#Piece-Square_Tables).

Todo: [Pawn Structure](https://www.chessprogramming.org/Pawn_Structure), [Mobility](https://www.chessprogramming.org/Mobility), different heuristics for each [game phase](https://www.chessprogramming.org/Game_Phases)
