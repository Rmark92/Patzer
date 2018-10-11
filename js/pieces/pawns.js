const stepMove = require('./movements/step_move.js');
const { BBMasks } = require('../bitboard');
const { Colors } = require('./constants.js');

const DIRS = {
  [Colors.WHITE]: 1,
  [Colors.BLACK]: -1
};

const INIT_MASKS = {
  [Colors.WHITE]: BBMasks.ROWS[1],
  [Colors.BLACK]: BBMasks.ROWS[6]
};

const Pawns = {
  value: 100,
  positionValues: [
		0, 0, 0, 0, 0, 0, 0, 0,
		50, 50, 50, 50, 50, 50, 50, 50,
		10, 10, 20, 30, 30, 20, 10, 10,
		5, 5, 10, 25, 25, 10, 5, 5,
		0, 0, 0, 20, 20, 0, 0, 0,
		5, -5, -10, 0, 0, -10, -5, 5,
		5, 10, 10, -20, -20, 10, 10, 5,
		0, 0, 0, 0, 0, 0, 0, 0
	],
  DIRS,
  PROMO_MASKS: { [Colors.WHITE]: BBMasks.ROWS[7],
                 [Colors.BLACK]: BBMasks.ROWS[0]
               },
  attacksLeft: (color, positions, oppPieces) => {
    return stepMove(positions, DIRS[color], -DIRS[color]).and(oppPieces);
  },
  attacksRight: (color, positions, oppPieces) => {
    return stepMove(positions, DIRS[color], DIRS[color]).and(oppPieces);
  },
  singlePush: (color, positions, notOccupied) => {
    return stepMove(positions, DIRS[color], 0).and(notOccupied);
  },
  doublePush: (color, positions, notOccupied) => {
    const onePush = stepMove(positions.and(INIT_MASKS[color]), DIRS[color], 0).and(notOccupied);
    return stepMove(onePush, DIRS[color], 0).and(notOccupied);
  }
};

module.exports = Pawns;
