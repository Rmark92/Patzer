const BitBoard = require('../../bitboards/bitboard');
const GlobMasks = require('../../bitboards/masks/global.js');

function stepMove(initial, noSo, eaWe) {
  let positions = initial;

  if (noSo > 0) {
    positions = positions.shiftLeft(noSo * 8);
  } else if (noSo < 0){
    positions = positions.shiftRight(noSo * -8);
  }

  if (eaWe > 0) {
    positions = positions.shiftLeft(eaWe).and(GlobMasks.EAST_OF_COL[eaWe - 1]);
  } else if (eaWe < 0){
    positions = positions.shiftRight(-eaWe).and(GlobMasks.WEST_OF_COL[eaWe + 8]);
  }

  return positions;
}

module.exports = stepMove;
