const { PieceConv, PTypes,
        Colors, eachPieceType } = require('../../pieces');
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
  const pieces = createEmptyPiecesBBs();

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

function parseFen(fenStr) {
  const [ positions,
          turnLetter,
          castleRightsStr,
          epSq,
          halfMoveClock,
          fullMoveClock ] = fenStr.split(' ');

  return {
    pieces: fenPositionsToPieceBBs(positions),
    turn: turnLetter === 'w' ? Colors.WHITE : Colors.BLACK,
    castleRights: parseCastlingRightsStr(castleRightsStr),
    epBB: parseEpStr(epSq),
    halfMoveClock: parseInt(halfMoveClock),
    fullMoveClock: parseInt(fullMoveClock)
  };
}

function fenPositionsToPieceBBs(positions) {
  const rowStrs = positions.split('/');

  const pieceBBs = createEmptyPiecesBBs();

  let pos = 0;
  rowStrs.forEach((rowStr) => {
    rowStr.split('').forEach((char) => {
      if (/[0-9]/.test(char)) {
        pos += parseInt(char);
      } else {
        pieceBBs[PieceConv.letterToType(char)].setBit(pos);
        pieceBBs[PieceConv.letterToColor(char)].setBit(pos);
        pos++;
      }
    });
  });

  return pieceBBs;
}

function parseCastlingRightsStr(castleRightsStr) {
  const rightsPos = ['q', 'k', 'Q', 'K'];

  return rightsPos.reduce((res, rightsLetter, pos) => {
    if (castleRightsStr.includes(rightsLetter)) {
      return (res ^ (1 << pos));
    }
  }, 0);
}

function parseEpStr(epStr) {
  if (/\d+/.test(epStr)) {
    return BitBoard.fromPos(parseInt(epStr));
  } else {
    return new BitBoard();
  }
}

function createEmptyPiecesBBs() {
  const pieces = [];

  eachPieceType((type) => {
    pieces[type] = new BitBoard();
  });

  Object.values(Colors).forEach((color) => {
    pieces[color] = new BitBoard();
  });

  return pieces;
}

module.exports = { parseFen, pieceSetsToArray, pieceSetsFromArray };
