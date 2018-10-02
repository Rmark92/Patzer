const BitBoard = require('./bitboard.js');

const FULL_BOARD = new BitBoard().not();
const COLS = BitBoard.allCols();
const ROWS = BitBoard.allRows();

module.exports = {
  FULL_BOARD,
  COLS,
  ROWS
};
