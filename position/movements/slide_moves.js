const BitBoard = require('../bitboard');
const { SLIDE_MOVES } = require('../../bitboards/masks/positional.js');

function findUnblocked(pos, occupied, dir) {
  const posBB = new BitBoard();
  const dirBB = SLIDE_MOVES[pos][dir];
  const blocking = dirBB.and(occupied);
  let blockingPos;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = posBB.lessThan(blocking) ? blocking.bitScanReverse() : blocking.bitScanForward();
    return dirBB.xor(SLIDE_MOVES[blockingPos][dir]);
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

diag(46, new BitBoard()).render();

module.exports = {
  horizVert,
  diag
};
