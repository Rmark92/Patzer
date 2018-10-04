const stepMove = require('../position/movements/step_move.js');
const { BBMasks } = require('../bitboards');

const WhitePawns = {
  value: 1,
  attacks: (positions, oppPieces) => {
    return (stepMove(positions, 1, -1).and(oppPieces)).or(stepMove(positions, 1, 1).and(oppPieces));
  },
  pushes: (positions, occupied) => {
    const notOccupied = occupied.not();
    const singleStep = stepMove(positions, 1, 0);
    const doubleStep = stepMove(positions.and(BBMasks.ROWS[1]), 2, 0);
    return singleStep.or(doubleStep).and(notOccupied);
  },
};

const BlackPawns = {
  value: 1,
  intialRowMask: BBMasks.ROWS[6],
  attacks: (positions, oppPieces) => {
    return (stepMove(positions, -1, -1).and(oppPieces)).or(stepMove(positions, -1, 1).and(oppPieces));
  },
  pushes: (positions, occupied) => {
    const notOccupied = occupied.not();
    const singleStep = stepMove(positions, -1, 0);
    const doubleStep = stepMove(positions.and(BBMasks.ROWS[6]), -2, 0);
    return singleStep.or(doubleStep).and(notOccupied);
  }
};

module.exports = { WhitePawns, BlackPawns };
