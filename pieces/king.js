const { BBMasks } = require('../bitboard');
const { KING_MOVES } = require('./movements/constants.js');
const { Colors } = require('./constants.js');

const INIT_POS = {
  [Colors.BLACK]: 60,
  [Colors.WHITE]: 4
};

const King = {
  value: 100,
  INIT_POS,
  moves: (position, notOwnPieces) => {
    return KING_MOVES[position].and(notOwnPieces);
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
