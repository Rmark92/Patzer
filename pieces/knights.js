const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;
const BBMovements = BitBoardIndex.movements;

const WhiteKnights = {
  initialPositions: BitBoard.fromPositions([2, 5]),
  moves: (positions) => {

  },
  value: 3
};

const BlackKnights = {
  initialPositions: BitBoard.fromPositions([58, 61]),
  moves: (positions) => {

  },
  value: 3
};

module.exports = { WhiteKnights, BlackKnights };
