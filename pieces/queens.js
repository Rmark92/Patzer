const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;

const WhiteQueen = {
  initialPositions: BitBoard.fromPositions([3]),
  moves: (positions) => {

  },
  value: 9
};

const BlackQueen = {
  initialPositions: BitBoard.fromPositions([59]),
  moves: (positions) => {

  },
  value: 9
};

module.exports = { WhiteQueen, BlackQueen };
