const Colors = {
  WHITE: 0,
  BLACK: 1
};

const Types = {
  PAWNS: 2,
  KNIGHTS: 3,
  BISHOPS: 4,
  ROOKS: 5,
  QUEENS: 6,
  KINGS: 7
};

const PieceTypeLetters = {
  [Types.PAWNS]: 'p',
  [Types.KNIGHTS]: 'n',
  [Types.BISHOPS]: 'b',
  [Types.ROOKS]: 'r',
  [Types.QUEENS]: 'q',
  [Types.KINGS]: 'k',
};

module.exports = { Types, Colors, PieceTypeLetters };
