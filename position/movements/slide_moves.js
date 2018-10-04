const BitBoard = require('../../bitboards/bitboard');
const { SLIDE_MOVES } = require('../../bitboards/masks/positional.js');

function findPosRayUnblocked(pos, occupied, dir) {
  const posBB = new BitBoard();
  const dirBB = SLIDE_MOVES[pos][dir];
  const blocking = dirBB.and(occupied);
  let blockingPos;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = blocking.bitScanForward();
    return dirBB.xor(SLIDE_MOVES[blockingPos][dir]);
  }
}

function findNegRayUnblocked(pos, occupied, dir) {
  const posBB = new BitBoard();
  const dirBB = SLIDE_MOVES[pos][dir];
  const blocking = dirBB.and(occupied);
  let blockingPos;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = blocking.bitScanReverse();
    return dirBB.xor(SLIDE_MOVES[blockingPos][dir]);
  }
}

function horizVert(pos, occupied, notOwnPieces) {
  let res = findPosRayUnblocked(pos, occupied, 'north');
  res = res.or(findPosRayUnblocked(pos, occupied, 'east'));
  res = res.or(findNegRayUnblocked(pos, occupied, 'south'));
  res = res.or(findNegRayUnblocked(pos, occupied, 'west'));

  return res.and(notOwnPieces);
}

function diag(pos, occupied, notOwnPieces) {
  let res = findPosRayUnblocked(pos, occupied, 'noea');
  res = res.or(findPosRayUnblocked(pos, occupied, 'nowe'));
  res = res.or(findNegRayUnblocked(pos, occupied, 'soea'));
  res = res.or(findNegRayUnblocked(pos, occupied, 'sowe'));

  return res.and(notOwnPieces);
}

module.exports = {
  horizVert,
  diag
};
