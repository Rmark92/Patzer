const { horizVert } = require('../position/movements/slide_moves.js');

const Rook = {
  value: 5,
  moves: (position, occupied, notOwnPieces) => {
    return horizVert(position, occupied, notOwnPieces);
  },
};

module.exports = Rook;
