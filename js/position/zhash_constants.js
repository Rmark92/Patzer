const { BitBoard } = require('../bitboard');
const { PTypes, PUtils, Colors, eachPieceType } = require('../pieces');

// we store zobrist hash values in a bitboard object to enable bitwise operations
// on values larger than 32bits. if we just used 32bits, we'd likely see hashing collisions
// Note: the max safe integer in javascript is 2**53 - 1;
function randNum() {
  const num = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  return BitBoard.fromNumber(num);
}

const piecePosHashKeys = function() {
  let res = [];
  let pos;
  let newPosKeys;

  const addPTypeKeys = (pType) => {
    res[pos][pType] = {};
    res[pos][pType][Colors.WHITE] = randNum();
    res[pos][pType][Colors.BLACK] = randNum();
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
    res[pos] = randNum();
  }

  for (pos = 40; pos <= 47; pos++) {
    res[pos] = randNum();
  }

  return res;
}();

const castleHashKeys = function() {
  let res = [];
  let rightsIdx;

  for (rightsIdx = 0; rightsIdx < 4; rightsIdx++) {
    res[rightsIdx] = randNum();
  }

  return res;
}();

const turnHashKeys = function() {
  const res = [];
  res[Colors.WHITE] = randNum();
  res[Colors.BLACK] = randNum();

  return res;
}();

module.exports = { piecePosHashKeys, epPosHashKeys, castleHashKeys, turnHashKeys };
