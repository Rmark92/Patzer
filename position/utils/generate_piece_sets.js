const { BitBoard } = require('../../bitboards');
const { PieceTypes, Colors } = require('../../pieces');

const defaultPieces = [
"r", "n", "b", "q", "k", "b", "n", "r",
// " ", "p", "p", "p", "p", "p", "p", "p",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
"p", "P", "P", "P", "P", "P", "P", "P",
" ", "N", "B", "Q", "K", "B", "N", "R"
];

function generatePieceSets(piecesArr) {
  let pos;
  piecesArr = piecesArr || defaultPieces;

  const pieces = {
    [PieceTypes.PAWNS]: new BitBoard(),
    [PieceTypes.KNIGHTS]: new BitBoard(),
    [PieceTypes.BISHOPS]: new BitBoard(),
    [PieceTypes.ROOKS]: new BitBoard(),
    [PieceTypes.QUEENS]: new BitBoard(),
    [PieceTypes.KINGS]: new BitBoard(),
    [Colors.WHITE]: new BitBoard(),
    [Colors.BLACK]: new BitBoard()
  };

  function assignPiece(i) {
    switch (piecesArr[i].toLowerCase()) {
      case 'p':
        pieces[PieceTypes.PAWNS].setBit(i);
        break;
      case 'n':
        pieces[PieceTypes.KNIGHTS].setBit(i);
        break;
      case 'b':
        pieces[PieceTypes.BISHOPS].setBit(i);
        break;
      case 'r':
        pieces[PieceTypes.ROOKS].setBit(i);
        break;
      case 'q':
        pieces[PieceTypes.QUEENS].setBit(i);
        break;
      case 'k':
        pieces[PieceTypes.KINGS].setBit(i);
        break;
      default:
        return;
    }

    if (piecesArr[i].toLowerCase() === piecesArr[i]) {
      pieces[Colors.WHITE].setBit(i);
    } else {
      pieces[Colors.BLACK].setBit(i);
    }

  }

  for (pos = 0; pos < 64; pos++) {
    assignPiece(pos);
  }

  return pieces;
}

module.exports = generatePieceSets;
