const { BBMasks } = require('../bitboards');
const INIT_POS = {
  'black': 60,
  'white': 4
};

const King = {
  value: 100,
  INIT_POS,
  moves: (position, notOwnPieces) => {
    return BBMasks.KING_MOVES[position].and(notOwnPieces);
  },
  castleSlide: (color, dir, occupied) => {
    const initRow = Math.floor(INIT_POS[color] / 8);
    const initCol = Math.floor(INIT_POS[color] % 8);
    const rowEmpties = occupied.not().and(BBMasks.ROWS[initRow]);

    if (dir === 'east') {
      return rowEmpties.and(BBMasks.EAST_OF_COL[initCol]);
    } else if (dir === 'west') {
      return rowEmpties.and(BBMasks.WEST_OF_COL[initCol]);
    }
  }
};

module.exports = King;
