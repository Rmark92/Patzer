const Pawns = require('./pawns.js');
const Knights = require('./knights.js');
const Bishops = require('./bishops.js');
const Rooks = require('./rooks.js');
const Queens = require('./queens.js');
const Kings = require('./kings.js');

module.exports = {
  WhitePawns: Pawns.WhitePawns,
  BlackPawns: Pawns.BlackPawns,
  WhiteKnights: Knights.WhiteKnights,
  BlackKnights: Knights.BlackKnights,
  WhiteBishops: Bishops.WhiteBishops,
  BlackBishops: Bishops.BlackBishops,
  WhiteRooks: Rooks.WhiteRooks,
  BlackRooks: Rooks.BlackRooks,
  WhiteQueen: Queens.WhiteQueen,
  BlackQueen: Queens.BlackQueen,
  WhiteKing: Kings.WhiteKing,
  BlackKing: Kings.BlackKing
};
