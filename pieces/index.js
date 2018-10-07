// const { WhitePawns, BlackPawns } = require('./pawns.js');
const Constants = require('./constants.js');
const Pawns = require('./pawns.js');
const Knight = require('./knight.js');
const Bishop = require('./bishop.js');
const Rook = require('./rook.js');
const Queen = require('./queen.js');
const King = require('./king.js');
const PieceConv = require('./conversions.js');

module.exports = {
  PieceTypes: Constants.Types,
  Colors: Constants.Colors,
  Pawns,
  Knight,
  Bishop,
  Rook,
  Queen,
  King,
  PieceConv
};
