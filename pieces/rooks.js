const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;

const WhiteRooks = {
  initialPositions: BitBoard.fromPositions([0, 7]),
  moves: (positions) => {

  },
  value: 5
};

const BlackRooks = {
  initialPositions: BitBoard.fromPositions([56, 63]),
  moves: (positions) => {

  },
  value: 5
};

module.exports = { WhiteRooks, BlackRooks };
