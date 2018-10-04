const { diag, horizVert } = require('../position/movements/slide_moves.js');

const Queen = {
  value: 9,
  moves: (position, occupied) => {
    return diag(position, occupied).or(horizVert(position, occupied));
  }
};

module.exports = Queen;
