const { PieceConv, PTypes, Colors } = require('../../pieces');
const { BitBoard } = require('../../bitboard');

const xx = "_";

const WP = PieceConv.pieceToLetter(PTypes.PAWNS, Colors.WHITE);
const WN = PieceConv.pieceToLetter(PTypes.KNIGHTS, Colors.WHITE);
const WB = PieceConv.pieceToLetter(PTypes.BISHOPS, Colors.WHITE);
const WR = PieceConv.pieceToLetter(PTypes.ROOKS, Colors.WHITE);
const WQ = PieceConv.pieceToLetter(PTypes.QUEENS, Colors.WHITE);
const WK = PieceConv.pieceToLetter(PTypes.KINGS, Colors.WHITE);

const BP = PieceConv.pieceToLetter(PTypes.PAWNS, Colors.BLACK);
const BN = PieceConv.pieceToLetter(PTypes.KNIGHTS, Colors.BLACK);
const BB = PieceConv.pieceToLetter(PTypes.BISHOPS, Colors.BLACK);
const BR = PieceConv.pieceToLetter(PTypes.ROOKS, Colors.BLACK);
const BQ = PieceConv.pieceToLetter(PTypes.QUEENS, Colors.BLACK);
const BK = PieceConv.pieceToLetter(PTypes.KINGS, Colors.BLACK);

const defaultBoardArr = [
WR, WN, WB, WQ, WK, WB, WN, WR,
WP, WP, WP, WP, WP, WP, WP, WP,
xx, xx, xx, xx, xx, xx, xx, xx,
xx, xx, xx, xx, xx, xx, xx, xx,
xx, xx, xx, xx, xx, xx, xx, xx,
xx, xx, xx, xx, xx, xx, xx, xx,
BP, BP, BP, BP, BP, BP, BP, BP,
BR, BN, BB, BQ, BK, BB, BN, BR
];

function createEmptyBoardArr() {
  const res = [];

  let count = 0;
  while (count <= 64) {
    res.push(xx);
    count++;
  }

  return res;
}

function pieceSetsToArray(pieces) {
  const res = createEmptyBoardArr();

  const pieceTypes = Object.values(PTypes);
  pieceTypes.forEach((type) => {
    pieces[type].dup().pop1Bits((pos) => {
      if (pieces[Colors.WHITE].hasSetBit(pos)) {
        res[pos] = PieceConv.pieceToLetter(type, Colors.WHITE);
      } else {
        res[pos] = PieceConv.pieceToLetter(type, Colors.BLACK);
      }
    });
  });

  return res;
}

function pieceSetsFromArray(array = defaultBoardArr) {
  const pieces = {};

  Object.values(PTypes).forEach((type) => {
    pieces[type] = new BitBoard();
  });

  Object.values(Colors).forEach((color) => {
    pieces[color] = new BitBoard();
  });


  let pos;
  let type;
  let color;
  for (pos = 0; pos < array.length; pos++) {
    if (array[pos] !== xx) {
      type = PieceConv.letterToType(array[pos]);
      color = PieceConv.letterToColor(array[pos]);
      pieces[type].setBit(pos);
      pieces[color].setBit(pos);
    }
  }

  return pieces;
}

module.exports = { pieceSetsToArray, pieceSetsFromArray };
