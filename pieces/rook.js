const { horizVert } = require('./movements/slide_moves.js');

const Rook = {
  value: 5,
  moves: (position, occupied, notOwnPieces) => {
    return horizVert(position, occupied, notOwnPieces);
  },
};

module.exports = Rook;
