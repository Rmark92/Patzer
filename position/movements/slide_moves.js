const BitBoard = require('../../bitboards/bitboard');
const { SLIDE_MOVES } = require('../../bitboards/masks/positional.js');

const isPosRay = {
  'north': true,
  'east': true,
  'noea': true,
  'nowe': true,
  'south': false,
  'west': false,
  'soea': false,
  'sowe': false
};

function findUnblocked(pos, occupied, dir) {
  const posBB = new BitBoard();
  const dirBB = SLIDE_MOVES[pos][dir];
  const blocking = dirBB.and(occupied);
  let blockingPos;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = isPosRay[dir] ? blocking.bitScanForward() : blocking.bitScanReverse();
    return dirBB.xor(SLIDE_MOVES[blockingPos][dir]);
  }
}

function horizVert(pos, occupied, notOwnPieces) {
  return ['north', 'south', 'east', 'west'].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

function diag(pos, occupied, notOwnPieces) {
  return ['noea', 'nowe', 'soea', 'sowe'].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

module.exports = {
  horizVert,
  diag
};
