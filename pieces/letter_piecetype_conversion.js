const { Types, Colors, PieceTypeLetters } = require('../../constants');

function generateLetter(type, color) {
  if (color === Colors.WHITE) { return PieceTypeLetters[type]; }
  else { return PieceTypeLetters[type].toUpperCase(); }
}

function generatePieceTypeAndColor(letter) {
  const color = letter.toUpperCase() === letter ? Colors.BLACK : Colors.WHITE;
  const pieceTypes = Object.values(Types);
  let pieceType;
  let idx;

  for (idx = 0; idx < pieceTypes.length; idx++) {
    if (PieceTypeLetters[pieceTypes[idx]] === letter.toLowerCase()) {
      pieceType = pieceTypes[idx];
      break;
    }
  }

  if (pieceType) {
    return { type: pieceType, color };
  } else {
    return null;
  }
}
