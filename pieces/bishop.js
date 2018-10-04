const { diag } = require('../position/movements/slide_moves.js');

const Bishop = {
  value: 3,
  moves: (position, occupied) => {
    return diag(position, occupied);
  }
};

module.exports = Bishop;
