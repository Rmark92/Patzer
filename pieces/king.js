const { BBMasks } = require('../bitboard');
const Dirs = require('./movements/dir_constants.js');
const { KING_MOVES, SLIDE_MOVES } = require('./movements/masks.js');
const { Colors } = require('./constants.js');

const INIT_POS = {
  [Colors.BLACK]: 60,
  [Colors.WHITE]: 4
};

// const CastleDirs = {
//   [Dirs.EAST]: 1,
//   [Dirs.WEST]: -1
// };

const King = {
  value: 100,
  INIT_POS,
  moves: (position, notOwnPieces) => {
    return KING_MOVES[position].and(notOwnPieces);
  },
  canCastle: (color, dir, notOccupied) => {
    const castleSlide = SLIDE_MOVES[INIT_POS[color]][dir].and(notOccupied);
    if (dir === Dirs.EAST) {
      return castleSlide.popCount() === 2;
    } else {
      return castleSlide.popCount() === 3;
    }
  }
};

module.exports = King;
