const BBMasks = require('./masks.js');

const notAFile = BBMasks.COLS[0].not();
const notABFile = notAFile.xor(BBMasks.COLS[1]);
const notHFile = BBMasks.COLS[7].not();
const notGHFile = notHFile.xor(BBMasks.COLS[6]);

function north(positions) {
  return positions.shiftLeft(8);
}

function south(positions) {
  return positions.shiftRight(8);
}

function east(positions) {
  return positions.shiftLeft(1).and(notAFile);
}

function west(positions) {
  return positions.shiftRight(1).and(notHFile);
}

function excludeLeft(numCols) {
  let res = BBMasks.FULL_BOARD;
  let idx = 0;
  while (idx < numCols) {
    res = res.xor(BBMasks.COLS[idx]);
    idx++;
  }

  return res;
}

function excludeRight(numCols) {
  let res = BBMasks.FULL_BOARD;
  let idx = 7;
  while ((7 - idx) < numCols) {
    res = res.xor(BBMasks.COLS[idx]);
    idx--;
  }

  return res;
}

function move(initial, noSo, eaWe) {
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

module.exports = {
  north, south, east, west,
  move
};
