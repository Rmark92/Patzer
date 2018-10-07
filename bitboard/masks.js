const BitBoard = require('./bitboard.js');

const FULL_BOARD = new BitBoard().not();

const COLS = function() {
  let colIdx = 0;
  let cols = [];
  while (colIdx < 8) {
    cols.push(BitBoard.fromCol(colIdx));
    colIdx++;
  }

  return cols;
}();


const ROWS = function() {
  let rowIdx = 0;
  let rows = [];
  while (rowIdx < 8) {
    rows.push(BitBoard.fromRow(rowIdx));
    rowIdx++;
  }

  return rows;
}();


const DIAGS = function() {
  const diags = [];
  let pos = 56;

  while (pos >= 0) {
    diags.push(BitBoard.upperRightDiag(pos));
    pos -= 8;
  }

  pos = 1;

  while (pos < 8) {
    diags.push(BitBoard.upperRightDiag(pos));
    pos++;
  }

  return diags;
}();


const ANTI_DIAGS = function() {
  const antiDiags = [];
  let pos = 0;

  while (pos < 8) {
    antiDiags.push(BitBoard.upperLeftDiag(pos));
    pos++;
  }

  pos = 15;
  while (pos < 64) {
    antiDiags.push(BitBoard.upperLeftDiag(pos));
    pos += 8;
  }

  return antiDiags;
}();

const NORTH_OF_ROW = function() {
  const res = [];
  let bb = FULL_BOARD;
  let idx = 0;

  while (idx <= 7) {
    bb = bb.xor(ROWS[idx]);
    res.push(bb);
    idx++;
  }

  return res;
}();

const SOUTH_OF_ROW = function() {
  const res = [];
  let bb = new BitBoard();
  let idx = 0;

  while (idx <= 7) {
    res.push(bb);
    bb = bb.or(ROWS[idx]);
    idx++;
  }

  return res;
}();

const EAST_OF_COL = function() {
  const res = [];
  let bb = FULL_BOARD;
  let idx = 0;

  while (idx <= 7) {
    bb = bb.xor(COLS[idx]);
    res.push(bb);
    idx++;
  }

  return res;
}();

const WEST_OF_COL = function() {
  const res = [];
  let bb = new BitBoard();
  let idx = 0;

  while (idx <= 7) {
    res.push(bb);
    bb = bb.or(COLS[idx]);
    idx++;
  }

  return res;
}();

module.exports = {
  FULL_BOARD,
  COLS,
  ROWS,
  DIAGS,
  ANTI_DIAGS,
  NORTH_OF_ROW,
  SOUTH_OF_ROW,
  EAST_OF_COL,
  WEST_OF_COL
};
