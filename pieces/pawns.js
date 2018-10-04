const stepMove = require('../position/movements/step_move.js');

const WhitePawns = {
  value: 1,
  attacks: (positions, occupied) => {
    return (stepMove(positions, 1, -1).and(occupied)).or(stepMove(positions, 1, 1).and(occupied));
  },
  pushes: (positions, occupied) => {
    const notOccupied = occupied.not();
    return stepMove(positions, 1, 0).and(notOccupied).or(stepMove(positions, 2, 0).and(notOccupied));
  },
};

const BlackPawns = {
  value: 1,
  attacks: (positions, occupied) => {
    return (stepMove(positions, -1, -1).and(occupied)).or(stepMove(positions, -1, 1).and(occupied));
  },
  pushes: (positions, occupied) => {
    const notOccupied = occupied.not();
    return stepMove(positions, -1, 0).and(notOccupied).or(stepMove(positions, -2, 0).and(notOccupied));
  }
};

module.exports = { WhitePawns, BlackPawns };
