const { horizVert } = require('../position/movements/slide_moves.js');

const Rook = {
  value: 5,
  moves: (position, occupied) => {
    return horizVert(position, occupied);
  },
};

module.exports = Rook;
