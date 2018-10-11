const { diag, horizVert } = require('./movements/slide_moves.js');

const Queen = {
  value: 1050,
  positionValues: [
		-20, -10, -10, -5, -5, -10, -10, -20,
		-10, 0, 0, 0, 0, 0, 0, -10,
		-10, 0, 5, 5, 5, 5, 0, -10,
		-5, 0, 5, 5, 5, 5, 0, -5,
		0, 0, 5, 5, 5, 5, 0, -5,
		-10, 5, 5, 5, 5, 5, 0, -10,
		-10, 0, 5, 0, 0, 0, 0, -10,
		-20, -10, -10, -5, -5, -10, -10, -20
	],
  moves: (position, occupied, notOwnPieces) => {
    return diag(position, occupied, notOwnPieces).or(horizVert(position, occupied, notOwnPieces));
  }
};

module.exports = Queen;
