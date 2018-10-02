const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;

const WhiteKing = {
  initialPositions: BitBoard.fromPositions([4]),
  moves: (positions) => {

  },
  value: 100
};

const BlackKing = {
  initialPositions: BitBoard.fromPositions([60]),
  moves: (positions) => {

  },
  value: 100
};

module.exports = { WhiteKing, BlackKing };
