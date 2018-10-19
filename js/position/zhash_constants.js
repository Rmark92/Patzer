const { PTypes, PUtils, Colors, eachPieceType } = require('../pieces');

// we store zobrist hash values in a bitboard object to enable bitwise operations
// on values larger than 32bits. if we just used 32bits, we'd likely see hashing collisions
// Note: the max safe integer in javascript is 2**53 - 1;

function randSigned32Bit() {
  const positive = [true, false][Math.floor(Math.random() * 2)];
  if (positive) {
    return Math.floor(Math.random() * (Math.pow(2, 31) - 1));
  } else {
    return -Math.floor(Math.random() * (Math.pow(2, 31)));
  }
}

const piecePosHashKeys = function() {
  let res = [];
  let pos;
  let newPosKeys;

  const addPTypeKeys = (pType) => {
    res[pos][pType] = {};
    res[pos][pType][Colors.WHITE] = randSigned32Bit();
    res[pos][pType][Colors.BLACK] = randSigned32Bit();
  };

  for (pos = 0; pos < 64; pos++) {
    res[pos] = {};
    eachPieceType((pType) => addPTypeKeys(pType));
  }

  return res;
}();

const epPosHashKeys = function() {
  let res = {};
  let pos;

  // can only en passant onto 3rd or 6th row
  for (pos = 16; pos <= 23; pos++) {
    res[pos] = randSigned32Bit();
  }

  for (pos = 40; pos <= 47; pos++) {
    res[pos] = randSigned32Bit();
  }

  return res;
}();

const castleHashKeys = function() {
  let res = [];
  let rightsIdx;

  for (rightsIdx = 0; rightsIdx < 4; rightsIdx++) {
    res[rightsIdx] = randSigned32Bit();
  }

  return res;
}();

const turnHashKeys = function() {
  const res = [];
  res[Colors.WHITE] = randSigned32Bit();
  res[Colors.BLACK] = randSigned32Bit();

  return res;
}();

module.exports = { piecePosHashKeys, epPosHashKeys, castleHashKeys, turnHashKeys };
