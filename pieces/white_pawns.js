const BitBoardIndex = require('./bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;

const notAFile = BBMasks.COLS[0].not();
const notHFile = BBMasks.COLS[7].not();

const WhitePawns = {
  initialPositions: BitBoard.fromRow(1),
  attacks: (positions) => {
    return (positions.shiftLeft(7).and(notHFile)).or(positions.shiftLeft(9).and(notAFile));
  },
  pushes: (positions) => {
    return (positions.shiftLeft(8).or(positions.shiftLeft(16)));
  },
  value: 1
};

module.exports = WhitePawns;
