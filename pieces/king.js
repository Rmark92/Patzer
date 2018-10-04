const { KING_MOVES } = require('../bitboards/masks/positional.js');

const King = {
  value: 100,
  moves: (position, occupied) => {
    return KING_MOVES[position];
  }
};

module.exports = King;
