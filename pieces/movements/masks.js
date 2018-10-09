const { BitBoard, BBMasks } = require('../../bitboard');
const Dirs = require('./dir_constants.js');
const stepMove = require('./step_move.js');

function generateStepBitBoards(dirs) {
  const res = [];
  let pos = 0;
  let initial;
  let posRes;

  const addMove = (currRes, dir) => {
    return currRes.or(stepMove(initial, dir[0], dir[1]));
  };

  while (pos < 64) {
    initial = BitBoard.fromPos(pos);
    posRes = dirs.reduce((currRes, dir) => addMove(currRes, dir), new BitBoard());
    res.push(posRes);
    pos++;
  }

  return res;
}

const KNIGHT_MOVES = function() {
  const dirs = [[1, 2], [1, -2],
                [2, 1], [2, -1],
                [-1, 2], [-1, -2],
                [-2, 1], [-2, -1]];

  return generateStepBitBoards(dirs);
}();

const KING_MOVES = function() {
  const dirs = [[1, 0], [1, 1],
                [1, -1],[-1, 0],
                [-1, 1], [-1, -1],
                [0, -1], [0, 1]];

  return generateStepBitBoards(dirs);
}();

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

module.exports = {
  KNIGHT_MOVES,
  KING_MOVES,
  SLIDE_MOVES,
};
