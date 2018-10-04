const BitBoard = require('./bitboard.js');

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

function piecesBBsFromArray(piecesArr) {
  let pos;
  piecesArr = piecesArr || defaultPieces;

  const pieces = {
    white: newPieceSet(),
    black: newPieceSet()
  };

  function assignPiece(i) {
    switch (piecesArr[i]) {
      case 'p':
        pieces.white.pawns = pieces.white.pawns.setBit(i);
        return;
      case 'n':
        pieces.white.knights = pieces.white.knights.setBit(i);
        return;
      case 'b':
        pieces.white.bishops = pieces.white.bishops.setBit(i);
        return;
      case 'r':
        pieces.white.rooks = pieces.white.rooks.setBit(i);
        return;
      case 'q':
        pieces.white.queen = pieces.white.queen.setBit(i);
        return;
      case 'k':
        pieces.white.king = pieces.white.king.setBit(i);
        return;
      case 'P':
        pieces.black.pawns = pieces.black.pawns.setBit(i);
        return;
      case 'N':
        pieces.black.knights = pieces.black.knights.setBit(i);
        return;
      case 'B':
        pieces.black.bishops = pieces.black.bishops.setBit(i);
        return;
      case 'R':
        pieces.black.rooks = pieces.black.rooks.setBit(i);
        return;
      case 'Q':
        pieces.black.queen = pieces.black.queen.setBit(i);
        return;
      case 'K':
        pieces.black.king = pieces.black.king.setBit(i);
        return;
      }
  }

  for (pos = 0; pos < 64; pos++) {
    assignPiece(pos);
  }

  return pieces;
}

let pieces = piecesBBsFromArray();
Object.keys(pieces).forEach((color) => {
  console.log(color);
  Object.keys(pieces[color]).forEach(type => {
    console.log(type);
    pieces[color][type].render();
  });
});
