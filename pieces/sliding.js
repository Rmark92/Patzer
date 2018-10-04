const BitBoardIndex = require('../bitboards');
const BitBoard = BitBoardIndex.BitBoard;
const BBMasks = BitBoardIndex.masks;
const BBMovements = BitBoardIndex.movements;

function generateSlidingMovements() {
  let pos = 0;
  const res = [];
  let movements;
  let colIdx;
  let rowIdx;
  let diagIdx;
  let antiDiagIdx;

  while (pos < 64) {
    movements = {};
    rowIdx = Math.floor(pos / 8);
    colIdx = pos % 8;
    diagIdx = (pos < rowIdx * 9) ? (pos % 9) - 2 : (pos % 9) + 7;
    if (pos === 63) {
      antiDiagIdx = 14;
    } else {
      antiDiagIdx = (pos < (rowIdx + 1) * 7) ? (pos % 7) : (pos % 7) + 7;
    }
    movements.north = BBMasks.COLS[colIdx].and(BBMasks.NORTH_OF[rowIdx]);
    movements.south = BBMasks.COLS[colIdx].and(BBMasks.SOUTH_OF[rowIdx]);
    movements.east = BBMasks.ROWS[rowIdx].and(BBMasks.EAST_OF[colIdx]);
    movements.west = BBMasks.ROWS[rowIdx].and(BBMasks.WEST_OF[colIdx]);
    movements.noea = BBMasks.DIAGS[diagIdx].and(BBMasks.NORTH_OF[rowIdx]);
    movements.sowe = BBMasks.DIAGS[diagIdx].and(BBMasks.SOUTH_OF[rowIdx]);
    movements.nowe = BBMasks.ANTI_DIAGS[antiDiagIdx].and(BBMasks.NORTH_OF[rowIdx]);
    movements.soea = BBMasks.ANTI_DIAGS[antiDiagIdx].and(BBMasks.SOUTH_OF[rowIdx]);
    res.push(movements);
    pos++;
  }

  return res;
}

const slidingMovements = generateSlidingMovements();
Object.values(slidingMovements[63]).forEach((dirbb) => dirbb.render());

function findUnblocked(pos, occupied, dir) {
  const posBB = new BitBoard();
  const dirBB = slidingMovements[pos][dir];
  const blocking = dirBB.and(occupied);
  let blockingPos;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = posBB.lessThan(blocking) ? blocking.bitScanReverse() : blocking.bitScanForward();
    return dirBB.xor(slidingMovements[blockingPos][dir]);
  }
}

function horizVert(pos, occupied) {
  return ['north', 'east', 'south', 'west'].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard());
}

function diag(pos, occupied) {
  return ['noea', 'sowe', 'nowe', 'soea'].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard());
}

module.exports = {
  horizVert,
  diag
};
