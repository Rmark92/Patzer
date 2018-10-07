const { BitBoard, BBMasks } = require('../../bitboard');

function stepMove(initial, noSo, eaWe) {
  let positions = initial;

  if (noSo > 0) {
    positions = positions.shiftLeft(noSo * 8);
  } else if (noSo < 0){
    positions = positions.shiftRight(noSo * -8);
  }

  if (eaWe > 0) {
    positions = positions.shiftLeft(eaWe).and(BBMasks.EAST_OF_COL[eaWe - 1]);
  } else if (eaWe < 0){
    positions = positions.shiftRight(-eaWe).and(BBMasks.WEST_OF_COL[eaWe + 8]);
  }

  return positions;
}

module.exports = stepMove;
