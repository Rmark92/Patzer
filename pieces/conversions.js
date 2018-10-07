const { Types, Colors, PieceTypeLetters } = require('./constants.js');

function pieceToLetter(type, color) {
  if (color === Colors.WHITE) { return PieceTypeLetters[type]; }
  else { return PieceTypeLetters[type].toUpperCase(); }
}

function letterToColor(letter) {
  return letter.toUpperCase() === letter ? Colors.BLACK : Colors.WHITE;
}

function letterToType(letter) {
  const pieceTypes = Object.values(Types);
  let pieceType;
  let idx;

  for (idx = 0; idx < pieceTypes.length; idx++) {
    if (PieceTypeLetters[pieceTypes[idx]] === letter.toLowerCase()) {
      pieceType = pieceTypes[idx];
      break;
    }
  }

  return pieceType;
}

module.exports = { pieceToLetter, letterToColor, letterToType };
