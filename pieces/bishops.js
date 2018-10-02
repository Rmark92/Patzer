const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;

const WhiteBishops = {
  initialPositions: BitBoard.fromPositions([1, 6]),
  moves: (positions) => {

  },
  value: 3
};

const BlackBishops = {
  initialPositions: BitBoard.fromPositions([57, 62]),
  moves: (positions) => {

  },
  value: 3
};

module.exports = { WhiteBishops, BlackBishops };
