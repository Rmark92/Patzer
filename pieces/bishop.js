const { diag } = require('../position/movements/slide_moves.js');

const Bishop = {
  value: 3,
  moves: (position, occupied, notOwnPieces) => {
    return diag(position, occupied, notOwnPieces);
  }
};

module.exports = Bishop;
