const BitBoard = require('../../bitboards/bitboard');
const GlobMasks = require('../../bitboards/masks/global.js');

function north(positions) {
  return positions.shiftLeft(8);
}

function south(positions) {
  return positions.shiftRight(8);
}

function east(positions) {
  return positions.shiftLeft(1).and(GlobMasks.EAST_OF_COL[0]);
}

function west(positions) {
  return positions.shiftRight(1).and(GlobMasks.EAST_OF_COL[6]);
}

function excludeLeft(numCols) {
  let res = GlobMasks.FULL_BOARD;
  let idx = 0;
  while (idx < numCols) {
    res = res.xor(GlobMasks.COLS[idx]);
    idx++;
  }

  return res;
}

function excludeRight(numCols) {
  let res = GlobMasks.FULL_BOARD;
  let idx = 7;
  while ((7 - idx) < numCols) {
    res = res.xor(GlobMasks.COLS[idx]);
    idx--;
  }

  return res;
}

function stepMove(initial, noSo, eaWe) {
  let positions = initial;

  if (noSo > 0) {
    positions = positions.shiftLeft(noSo * 8);
  } else {
    positions = positions.shiftRight(noSo * -8);
  }

  if (eaWe > 0) {
    positions = positions.shiftLeft(eaWe).and(excludeLeft(eaWe));
  } else {
    positions = positions.shiftRight(-eaWe);
    positions = positions.and(excludeRight(-eaWe));
  }

  return positions;
}

module.exports = stepMove;
