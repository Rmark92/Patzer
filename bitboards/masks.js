const BitBoard = require('./bitboard.js');

const FULL_BOARD = new BitBoard().not();
const COLS = BitBoard.allCols();
const ROWS = BitBoard.allRows();
const DIAGS = BitBoard.allDiags();
const ANTI_DIAGS = BitBoard.allAntiDiags();
const NORTH_OF = generateNorthOf();
const SOUTH_OF = generateSouthOf();
const EAST_OF = generateEastOf();
const WEST_OF = generateWestOf();


function generateWestOf() {
  const res = [];
  let bb = new BitBoard();
  let idx = 0;

  while (idx <= 7) {
    res.push(bb);
    bb = bb.or(COLS[idx]);
    idx++;
  }

  return res;
}

function generateEastOf() {
  const res = [];
  let bb = FULL_BOARD;
  let idx = 0;

  while (idx <= 7) {
    bb = bb.xor(COLS[idx]);
    res.push(bb);
    idx++;
  }

  return res;
}

function generateNorthOf() {
  const res = [];
  let bb = FULL_BOARD;
  let idx = 0;

  while (idx <= 7) {
    bb = bb.xor(ROWS[idx]);
    res.push(bb);
    idx++;
  }

  return res;
}

function generateSouthOf() {
  const res = [];
  let bb = new BitBoard();
  let idx = 0;

  while (idx <= 7) {
    res.push(bb);
    bb = bb.or(ROWS[idx]);
    idx++;
  }

  return res;
}

module.exports = {
  FULL_BOARD,
  COLS,
  ROWS,
  DIAGS,
  ANTI_DIAGS,
  NORTH_OF,
  SOUTH_OF,
  EAST_OF,
  WEST_OF
};
