const BitBoard = require('../bitboard');
const GlobMasks = require('./global.js');
const stepMove = require('../../position/movements/step_move.js');

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
  let movements;
  let colIdx;
  let rowIdx;
  let diagIdx;
  let antiDiagIdx;

  while (pos < 64) {
    movements = {};
    rowIdx = Math.floor(pos / 8);
    colIdx = pos % 8;
    diagIdx = (pos < rowIdx * 9) ? (pos % 9) - 2 : (pos % 9) + 7;
    if (pos === 63) {
      antiDiagIdx = 14;
    } else {
      antiDiagIdx = (pos < (rowIdx + 1) * 7) ? (pos % 7) : (pos % 7) + 7;
    }
    movements.north = GlobMasks.COLS[colIdx].and(GlobMasks.NORTH_OF_ROW[rowIdx]);
    movements.south = GlobMasks.COLS[colIdx].and(GlobMasks.SOUTH_OF_ROW[rowIdx]);
    movements.east = GlobMasks.ROWS[rowIdx].and(GlobMasks.EAST_OF_COL[colIdx]);
    movements.west = GlobMasks.ROWS[rowIdx].and(GlobMasks.WEST_OF_COL[colIdx]);
    movements.noea = GlobMasks.DIAGS[diagIdx].and(GlobMasks.NORTH_OF_ROW[rowIdx]);
    movements.sowe = GlobMasks.DIAGS[diagIdx].and(GlobMasks.SOUTH_OF_ROW[rowIdx]);
    movements.nowe = GlobMasks.ANTI_DIAGS[antiDiagIdx].and(GlobMasks.NORTH_OF_ROW[rowIdx]);
    movements.soea = GlobMasks.ANTI_DIAGS[antiDiagIdx].and(GlobMasks.SOUTH_OF_ROW[rowIdx]);
    res.push(movements);
    pos++;
  }

  return res;
}();

module.exports = {
  KNIGHT_MOVES,
  KING_MOVES,
  SLIDE_MOVES
};
