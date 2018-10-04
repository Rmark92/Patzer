const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;
const BBMovements = BitBoardIndex.movements;

function generateKnightMovements() {
  const knightDirs = [[1, 2], [1, -2],
                      [2, 1], [2, -1],
                      [-1, 2], [-1, -2],
                      [-2, 1], [-2, -1]];
  const res = [];
  let pos = 0;
  let initial;
  let posRes;

  const addMove = (currRes, dir) => {
    return currRes.or(BBMovements.move(initial, dir[0], dir[1]));
  };

  while (pos < 64) {
    initial = new BitBoard().setBit(pos);
    posRes = knightDirs.reduce((currRes, dir) => addMove(currRes, dir), new BitBoard());
    res.push(posRes);
    pos++;
  }

  return res;
}

const knightMovements = generateKnightMovements();
knightMovements.forEach((bBoard) => bBoard.render() );

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
