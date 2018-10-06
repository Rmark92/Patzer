const stepMove = require('../position/movements/step_move.js');
const { BBMasks } = require('../bitboards');
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
  value: 1,
  DIRS,
  PROMO_MASKS: { [Colors.WHITE]: BBMasks.ROWS[7],
                 [Colors.BLACK]: BBMasks.ROWS[7]
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
    return stepMove(positions.and(INIT_MASKS[color]), 2 * DIRS[color], 0).and(notOccupied);
  }
};

module.exports = Pawns;
