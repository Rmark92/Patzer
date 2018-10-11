const { horizVert } = require('./movements/slide_moves.js');

const Rook = {
  value: 500,
  positionValues:	[
		0, 0, 0, 0, 0, 0, 0, 0,
		5, 10, 10, 10, 10, 10, 10, 5,
		-5, 0, 0, 0, 0, 0, 0, -5,
		-5, 0, 0, 0, 0, 0, 0, -5,
		-5, 0, 0, 0, 0, 0, 0, -5,
		-5, 0, 0, 0, 0, 0, 0, -5,
		-5, 0, 0, 0, 0, 0, 0, -5,
		0, 0, 0, 5, 5, 0, 0, 0
	],
  moves: (position, occupied, notOwnPieces) => {
    return horizVert(position, occupied, notOwnPieces);
  },
};

module.exports = Rook;
