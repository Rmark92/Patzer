const BitBoard = require('./bitboard.js');

const fullBoard = new BitBoard().not();
const columns = BitBoard.allCols();
const rows = BitBoard.allRows();

const notAFile = columns[0].not();
const notHFile = columns[7].not();

const WhitePawns = {
  initialPositions: BitBoard.fromRow(1),
  attacks: (positions) => {
    return (positions.shiftLeft(7).and(notHFile)).or(positions.shiftLeft(9).and(notAFile));
  },
  pushes: (positions) => {
    return (positions.shiftLeft(8).or(positions.shiftLeft(16)));
  },
  value: 1
};

const BlackPawns = {
  initialPositions: BitBoard.fromRow(6),
  attacks: (positions) => {
    return (positions.shiftRight(7).and(notAFile)).or(positions.shiftRight(9).and(notHFile));
  },
  pushes: (positions) => {
    return (positions.shiftRight(8).or(positions.shiftRight(16)));
  },
  value: 1
};

const WhiteRooks = {
  initialPositions: BitBoard.fromPositions([0, 7]),
  moves: (positions) => {

  },
  value: 5
};

const BlackRooks = {
  initialPositions: BitBoard.fromPositions([56, 63]),
  moves: (positions) => {

  },
  value: 5
};

const WhiteBishops = {
  initialPositions: BitBoard.fromPositions([1, 6]),
  moves: (positions) => {

  },
  value: 3
};

const BlackBishops = {
  initialPositions: BitBoard.fromPositions([57, 62]),
  moves: (positions) => {

  },
  value: 3
};

const WhiteKnights = {
  initialPositions: BitBoard.fromPositions([2, 5]),
  moves: (positions) => {

  },
  value: 3
};

const BlackKnights = {
  initialPositions: BitBoard.fromPositions([58, 61]),
  moves: (positions) => {

  },
  value: 3
};

const WhiteQueen = {
  initialPositions: BitBoard.fromPositions([3]),
  moves: (positions) => {

  },
  value: 9
};

const BlackQueen = {
  initialPositions: BitBoard.fromPositions([59]),
  moves: (positions) => {

  },
  value: 9
};

const WhiteKing = {
  initialPositions: BitBoard.fromPositions([4]),
  moves: (positions) => {

  },
  value: 100
};

const BlackKing = {
  initialPositions: BitBoard.fromPositions([60]),
  moves: (positions) => {

  },
  value: 100
};

module.exports = {
  WhitePawns, BlackPawns,
  WhiteKnights, BlackKnights,
  WhiteBishops, BlackBishops,
  WhiteRooks, BlackRooks,
  WhiteQueen, BlackQueen,
  WhiteKing, BlackKing
};
