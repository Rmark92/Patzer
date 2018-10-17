// const { WhitePawns, BlackPawns } = require('./pawns.js');
const Constants = require('./constants.js');
const Pawns = require('./pawns.js');
const Knight = require('./knight.js');
const Bishop = require('./bishop.js');
const Rook = require('./rook.js');
const Queen = require('./queen.js');
const King = require('./king.js');
const PieceConv = require('./conversions.js');
const eachPieceType = require('./each_piece_type.js');
const Dirs = require('./movements/dir_constants.js');

const PUtils = {
  [Constants.Types.PAWNS]: Pawns,
  [Constants.Types.KNIGHTS]: Knight,
  [Constants.Types.BISHOPS]: Bishop,
  [Constants.Types.ROOKS]: Rook,
  [Constants.Types.QUEENS]: Queen,
  [Constants.Types.KINGS]: King
};

module.exports = {
  PTypes: Constants.Types,
  Colors: Constants.Colors,
  PieceTypeHTML: Constants.PieceTypeHTML,
  PUtils,
  eachPieceType,
  Dirs,
  PieceConv
};
