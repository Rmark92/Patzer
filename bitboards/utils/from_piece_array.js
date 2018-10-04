const BitBoard = require('../bitboard');

const defaultPieces = [
"r", "n", "b", "q", "k", "b", "n", "r",
"p", "p", "p", "p", "p", "p", "p", "p",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
" ", " ", " ", " ", " ", " ", " ", " ",
"P", "P", "P", "P", "P", "P", "P", "P",
"R", "N", "B", "Q", "K", "B", "N", "R"
];

function newPieceSet() {
  return {
    pawns: new BitBoard(),
    knights: new BitBoard(),
    bishops: new BitBoard(),
    rooks: new BitBoard(),
    queen: new BitBoard(),
    king: new BitBoard(),
  };
}

function fromPieceArray(piecesArr) {
  let pos;
  piecesArr = piecesArr || defaultPieces;

  const pieces = {
    pawns: new BitBoard(),
    knights: new BitBoard(),
    bishops: new BitBoard(),
    rooks: new BitBoard(),
    queens: new BitBoard(),
    kings: new BitBoard(),
    whitePieces: new BitBoard(),
    blackPieces: new BitBoard()
  };

  function assignPiece(i) {
    switch (piecesArr[i].toLowerCase()) {
      case 'p':
        pieces.pawns = pieces.pawns.setBit(i);
        break;
      case 'n':
        pieces.knights = pieces.knights.setBit(i);
        break;
      case 'b':
        pieces.bishops = pieces.bishops.setBit(i);
        break;
      case 'r':
        pieces.rooks = pieces.rooks.setBit(i);
        break;
      case 'q':
        pieces.queens = pieces.queens.setBit(i);
        break;
      case 'k':
        pieces.kings = pieces.kings.setBit(i);
        break;
      default:
        return;
    }

    if (piecesArr[i].toLowerCase() === piecesArr[i]) {
      pieces.whitePieces = pieces.whitePieces.setBit(i);
    } else {
      pieces.blackPieces = pieces.blackPieces.setBit(i);
    }

  }

  for (pos = 0; pos < 64; pos++) {
    assignPiece(pos);
  }

  return pieces;
}

module.exports = fromPieceArray;
