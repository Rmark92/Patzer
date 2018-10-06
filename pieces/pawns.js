const stepMove = require('../position/movements/step_move.js');
const { BBMasks } = require('../bitboards');
const { Colors } = require('./constants.js');

const DIRS = {
  [Colors.WHITE]: 1,
  [Colors.BLACK]: -1
};

const Pawns = {
  value: 1,
  DIRS,
  promoRow: (color) => color === Colors.WHITE ? BBMasks.ROWS[7] : BBMasks.ROWS[0],
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
    const initMask = color === Colors.WHITE ? BBMasks.ROWS[1] : BBMasks.ROWS[6];
    return stepMove(positions.and(initMask), 2 * DIRS[color], 0).and(notOccupied);
  }
};

// const WhitePawns = {
//   value: 1,
//   promoRow: BBMasks.ROWS[7],
//   attacksLeft: (positions, oppPieces) => {
//     return stepMove(positions, 1, -1).and(oppPieces);
//   },
//   attacksRight: (positions, oppPieces) => {
//     return stepMove(positions, 1, 1).and(oppPieces);
//   },
//   singlePush: (positions, notOccupied) => {
//     return stepMove(positions, 1, 0).and(notOccupied);
//   },
//   doublePush: (positions, notOccupied) => {
//     return stepMove(positions.and(BBMasks.ROWS[1]), 2, 0).and(notOccupied);
//   }
// };
//
// const BlackPawns = {
//   value: 1,
//   promoRow: BBMasks.ROWS[0],
//   attacksLeft: (positions, oppPieces) => {
//     return stepMove(positions, -1, -1).and(oppPieces);
//   },
//   attacksRight: (positions, oppPieces) => {
//     return stepMove(positions, -1, 1).and(oppPieces);
//   },
//   attacks
//   pushes: (positions, occupied) => {
//     const notOccupied = occupied.not();
//     const singleStep = stepMove(positions, -1, 0);
//     const doubleStep = stepMove(positions.and(BBMasks.ROWS[6]), -2, 0);
//     return singleStep.or(doubleStep).and(notOccupied);
//   }
// };

// module.exports = { WhitePawns, BlackPawns };

module.exports = Pawns;
