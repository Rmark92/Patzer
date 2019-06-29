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

const PieceTypeHTML = {
  [Colors.BLACK]: {
    [Types.PAWNS]: "&#9823;",
    [Types.KNIGHTS]: "&#9822;",
    [Types.BISHOPS]: "&#9821;",
    [Types.ROOKS]: "&#9820;",
    [Types.QUEENS]: "&#9819;",
    [Types.KINGS]: "&#9818;"
  },
  [Colors.WHITE]: {
    [Types.PAWNS]: "&#9817;",
    [Types.KNIGHTS]: "&#9816;",
    [Types.BISHOPS]: "&#9815;",
    [Types.ROOKS]: "&#9814;",
    [Types.QUEENS]: "&#9813;",
    [Types.KINGS]: "&#9812;"
  }
};

module.exports = { Types, Colors, PieceTypeLetters, PieceTypeHTML };
