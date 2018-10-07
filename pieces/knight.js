const { KNIGHT_MOVES } = require('./movements/constants.js');

const Knight = {
  value: 3,
  moves: (position, notOwnPieces) => {
    return KNIGHT_MOVES[position].and(notOwnPieces);
  }
};

module.exports = Knight;
