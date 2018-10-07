const { PieceConv, PieceTypes, Colors } = require('../../pieces');
const { BitBoard } = require('../../bitboard');

const xx = "_";

const WP = PieceConv.pieceToLetter(PieceTypes.PAWNS, Colors.WHITE);
const WN = PieceConv.pieceToLetter(PieceTypes.KNIGHTS, Colors.WHITE);
const WB = PieceConv.pieceToLetter(PieceTypes.BISHOPS, Colors.WHITE);
const WR = PieceConv.pieceToLetter(PieceTypes.ROOKS, Colors.WHITE);
const WQ = PieceConv.pieceToLetter(PieceTypes.QUEENS, Colors.WHITE);
const WK = PieceConv.pieceToLetter(PieceTypes.KINGS, Colors.WHITE);

const BP = PieceConv.pieceToLetter(PieceTypes.PAWNS, Colors.BLACK);
const BN = PieceConv.pieceToLetter(PieceTypes.KNIGHTS, Colors.BLACK);
const BB = PieceConv.pieceToLetter(PieceTypes.BISHOPS, Colors.BLACK);
const BR = PieceConv.pieceToLetter(PieceTypes.ROOKS, Colors.BLACK);
const BQ = PieceConv.pieceToLetter(PieceTypes.QUEENS, Colors.BLACK);
const BK = PieceConv.pieceToLetter(PieceTypes.KINGS, Colors.BLACK);


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

  const pieceTypes = Object.values(PieceTypes);
  pieceTypes.forEach((type) => {
    pieces[type].forEach1Bit((pos) => {
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

  Object.values(PieceTypes).forEach((type) => {
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
