const { diag, horizVert } = require('../position/movements/slide_moves.js');

const Queen = {
  value: 9,
  moves: (position, occupied, notOwnPieces) => {
    return diag(position, occupied, notOwnPieces).or(horizVert(position, occupied, notOwnPieces));
  }
};

module.exports = Queen;
