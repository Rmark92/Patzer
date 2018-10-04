const { KING_MOVES } = require('../bitboards/masks/positional.js');

const King = {
  value: 100,
  moves: (position, notOwnPieces) => {
    return KING_MOVES[position].and(notOwnPieces);
  }
};

module.exports = King;
