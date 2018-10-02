const BitBoardIndex = require('./bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;
const {
  WhitePawns, BlackPawns,
  WhiteKnights, BlackKnights,
  WhiteBishops, BlackBishops,
  WhiteRooks, BlackRooks,
  WhiteQueen, BlackQueen,
  WhiteKing, BlackKing
} = require('./pieces');

const WHITE = 'white';
const BLACK = 'black';

class Position {
  constructor(turn, pieces) {
    this.turn = WHITE;
    this.pieces = pieces;
  }

  getColorPieces(color) {
    return Object.values(this.pieces[color])
                 .reduce((allPieces, pieceSet) => allPieces.or(pieceSet) );
  }

  static newGame() {
    const pieces = {};

    pieces[WHITE] = {
      pawns: WhitePawns.initialPositions,
      knights: WhiteKnights.initialPositions,
      bishops: WhiteBishops.initialPositions,
      rooks: WhiteRooks.initialPositions,
      queen: WhiteQueen.initialPositions,
      king: WhiteKing.initialPositions,
    };

    pieces[BLACK] = {
      pawns: BlackPawns.initialPositions,
      knights: BlackKnights.initialPositions,
      bishops: BlackBishops.initialPositions,
      rooks: BlackRooks.initialPositions,
      queen: BlackQueen.initialPositions,
      king: BlackKing.initialPositions
    };

    return new Position(WHITE, pieces);
  }
}

let pos = Position.newGame();
WhitePawns.attacks(pos.pieces[WHITE].pawns).render();
WhitePawns.pushes(pos.pieces[WHITE].pawns).render();
BlackPawns.attacks(pos.pieces[BLACK].pawns).render();
BlackPawns.pushes(pos.pieces[BLACK].pawns).render();
//
// let colorSet;
// [WHITE, BLACK].forEach((color) => {
//   console.log(color);
//   colorSet = pos.pieces[color];
//   Object.keys(colorSet).forEach((pieceSet) => {
//     console.log(pieceSet);
//     colorSet[pieceSet].render();
//   });
// });
