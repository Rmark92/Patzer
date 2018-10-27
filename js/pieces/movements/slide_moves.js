const { BitBoard, BBMasks } = require('../../bitboard');
const { SLIDE_MOVES } = require('./masks.js');
const Dirs = require('./dir_constants.js');

const isPosRay = {
  [Dirs.NORTH]: true,
  [Dirs.EAST]: true,
  [Dirs.NOEA]: true,
  [Dirs.NOWE]: true,
  [Dirs.SOUTH]: false,
  [Dirs.WEST]: false,
  [Dirs.SOEA]: false,
  [Dirs.SOWE]: false
};

function findUnblocked(pos, occupied, dir) {
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
  return [Dirs.NORTH, Dirs.SOUTH, Dirs.EAST, Dirs.WEST].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

function diag(pos, occupied, notOwnPieces) {
  return [Dirs.NOEA, Dirs.NOWE, Dirs.SOEA, Dirs.SOWE].reduce((res, dir) => {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

module.exports = {
  horizVert,
  diag
};
