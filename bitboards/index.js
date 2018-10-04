const BitBoard = require('./bitboard');
const masks = require('./masks');
const fromPieceArray = require('./utils/from_piece_array.js');

module.exports = {
  BitBoard,
  BBMasks: masks,
  BBfromPieceArray: fromPieceArray
};
