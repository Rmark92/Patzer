const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;
const BBMovements = BitBoardIndex.movements;

const notAFile = BBMasks.COLS[0].not();
const notHFile = BBMasks.COLS[7].not();

const WhitePawns = {
  initialPositions: BitBoard.fromRow(1),
  attacks: (positions) => {
    return (BBMovements.move(positions, 1, -1)).or(BBMovements.move(positions, 1, 1));
  },
  pushes: (positions) => {
    return BBMovements.move(positions, 1, 0).or(BBMovements.move(positions, 2, 0));
  },
  value: 1
};

const BlackPawns = {
  initialPositions: BitBoard.fromRow(6),
  attacks: (positions) => {
    return (BBMovements.move(positions, -1, -1)).or(BBMovements.move(positions, -1, 1));
  },
  pushes: (positions) => {
    return (BBMovements.move(positions, -1, 0)).or(BBMovements.move(positions, -2, 0));
  },
  value: 1
};

module.exports = { WhitePawns, BlackPawns};
