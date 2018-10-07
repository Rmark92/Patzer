const { Conversions, PieceTypes, Colors } = require('../../pieces');
const { BitBoard } = require('../../bitboards');

const xx = "_";

const WP = Conversions.pieceToLetter(PieceTypes.PAWNS, Colors.WHITE);
const WN = Conversions.pieceToLetter(PieceTypes.KNIGHTS, Colors.WHITE);
const WB = Conversions.pieceToLetter(PieceTypes.BISHOPS, Colors.WHITE);
const WR = Conversions.pieceToLetter(PieceTypes.ROOKS, Colors.WHITE);
const WQ = Conversions.pieceToLetter(PieceTypes.QUEENS, Colors.WHITE);
const WK = Conversions.pieceToLetter(PieceTypes.KINGS, Colors.WHITE);

const BP = Conversions.pieceToLetter(PieceTypes.PAWNS, Colors.BLACK);
const BN = Conversions.pieceToLetter(PieceTypes.KNIGHTS, Colors.BLACK);
const BB = Conversions.pieceToLetter(PieceTypes.BISHOPS, Colors.BLACK);
const BR = Conversions.pieceToLetter(PieceTypes.ROOKS, Colors.BLACK);
const BQ = Conversions.pieceToLetter(PieceTypes.QUEENS, Colors.BLACK);
const BK = Conversions.pieceToLetter(PieceTypes.KINGS, Colors.BLACK);


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
        res[pos] = Conversions.pieceToLetter(type, Colors.WHITE);
      } else {
        res[pos] = Conversions.pieceToLetter(type, Colors.BLACK);
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
      type = Conversions.letterToType(array[pos]);
      color = Conversions.letterToColor(array[pos]);
      pieces[type].setBit(pos);
      pieces[color].setBit(pos);
    }
  }

  return pieces;
}

module.exports = { pieceSetsToArray, pieceSetsFromArray };
