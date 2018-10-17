const { Types } = require('./constants.js');

function eachPieceType(cb) {
  let type;
  for (type = Types.PAWNS; type <= Types.KINGS; type++) {
    cb(type);
  }
}

module.exports = eachPieceType;
