const { KNIGHT_MOVES } = require('../bitboards/masks/positional.js');

const Knight = {
  value: 3,
  moves: (position, occupied) => {
    return KNIGHT_MOVES[position].and(occupied.not());
  }
};

module.exports = Knight;
