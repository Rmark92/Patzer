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

Todo: [Magic Bitboards](https://www.chessprogramming.org/Magic_Bitboards)

#### Move Generation
Using bitboards, pawn move destinations can be generated on the set of all existing pawns with just one bitwise operation. Other pieces make use of precomputed arrays that map their position to a bitboard of possible destinations. We then make minor adjustments to these destination bitboards based on other pieces on the board. As an example, below is the code for sliding move generation:

```javascript
const SLIDE_MOVES = function() {
  let pos = 0;
  const res = [];
  let moves;
  let colIdx;
  let rowIdx;
  let diagIdx;
  let antiDiagIdx;

  while (pos < 64) {
    moves = {};
    rowIdx = Math.floor(pos / 8);
    colIdx = pos % 8;
    diagIdx = (pos < rowIdx * 9) ? (pos % 9) - 2 : (pos % 9) + 7;
    if (pos === 63) {
      antiDiagIdx = 14;
    } else {
      antiDiagIdx = (pos < (rowIdx + 1) * 7) ? (pos % 7) : (pos % 7) + 7;
    }
    moves[Dirs.NORTH] = BBMasks.COLS[colIdx].and(BBMasks.NORTH_OF_ROW[rowIdx]);
    moves[Dirs.SOUTH] = BBMasks.COLS[colIdx].and(BBMasks.SOUTH_OF_ROW[rowIdx]);
    moves[Dirs.EAST] = BBMasks.ROWS[rowIdx].and(BBMasks.EAST_OF_COL[colIdx]);
    moves[Dirs.WEST] = BBMasks.ROWS[rowIdx].and(BBMasks.WEST_OF_COL[colIdx]);
    moves[Dirs.NOEA] = BBMasks.DIAGS[diagIdx].and(BBMasks.NORTH_OF_ROW[rowIdx]);
    moves[Dirs.SOWE] = BBMasks.DIAGS[diagIdx].and(BBMasks.SOUTH_OF_ROW[rowIdx]);
    moves[Dirs.NOWE] = BBMasks.ANTI_DIAGS[antiDiagIdx].and(BBMasks.NORTH_OF_ROW[rowIdx]);
    moves[Dirs.SOEA] = BBMasks.ANTI_DIAGS[antiDiagIdx].and(BBMasks.SOUTH_OF_ROW[rowIdx]);
    res.push(moves);
    pos++;
  }

  return res;
}();

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


### Move Search

The move search implements the [negamax algorithm](https://www.chessprogramming.org/Negamax) with [Alpha-Beta pruning](https://www.chessprogramming.org/Alpha-Beta). In order to mitigate the [horizon effect](https://www.chessprogramming.org/Horizon_Effect), the main search is followed by a [quiescence search](https://www.chessprogramming.org/Quiescence_Search) that exhausts all sequences of captures and check evasions so that only quiet positions are evaluated. A [transposition table](https://www.chessprogramming.org/Transposition_Table) is used to store the results of previously explored positions, which are uniquely identified by a signed 32-bit [zobrist hash](https://www.chessprogramming.org/Zobrist_Hashing). The search is time-limited through an [iterative deepening](https://www.chessprogramming.org/Iterative_Deepening) process that increments the max search depth for each iteration. In addition to the obvious benefits of adjusting the search for UI preferences and complexity of the current position, iterative deepening delivers the large advantage of better [move ordering](https://www.chessprogramming.org/Move_Ordering) for higher and more costly max depths.

Todo: [Killer Heuristic](https://www.chessprogramming.org/Killer_Heuristic), [Aspiration Windows](https://www.chessprogramming.org/Aspiration_Windows)

### Move Evaluation

Leaf node positions are evaluated with a relatively simple heuristic that accounts for material and piece location. The material score is a sum of existing pieces weighted by type, and piece location is scored based on static [piece-square tables](https://www.chessprogramming.org/Simplified_Evaluation_Function#Piece-Square_Tables).

Todo: [Pawn Structure](https://www.chessprogramming.org/Pawn_Structure), [Mobility](https://www.chessprogramming.org/Mobility), different heuristics for each [game phase](https://www.chessprogramming.org/Game_Phases)
