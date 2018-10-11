const { BBMasks } = require('../bitboard');
const Dirs = require('./movements/dir_constants.js');
const { KING_MOVES, SLIDE_MOVES } = require('./movements/masks.js');
const { Colors } = require('./constants.js');

const INIT_POS = {
  [Colors.BLACK]: 60,
  [Colors.WHITE]: 4
};

const King = {
  value: 40000,
  positionValues:	[
		-30, -40, -40, -50, -50, -40, -40, -30,
		-30, -40, -40, -50, -50, -40, -40, -30,
		-30, -40, -40, -50, -50, -40, -40, -30,
		-30, -40, -40, -50, -50, -40, -40, -30,
		-20, -30, -30, -40, -40, -30, -30, -20,
		-10, -20, -20, -20, -20, -20, -20, -10,
		 20, 20, 0, 0, 0, 0, 20, 20,
		 20, 30, 10, 0, 0, 10, 30, 20
	],
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
