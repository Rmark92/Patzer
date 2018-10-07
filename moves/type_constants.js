// https://www.chessprogramming.org/Encoding_Moves#From-To_Based
// require('../string_contants.js');

const Decode = ['NORMAL', 'DBL_PPUSH',
                'CSTL_KING', 'CSTL_QUEEN',
                'EP_CAPT', 'NPROMO',
                'BPROMO','RPROMO', 'QPROMO'];

const Encode = Decode.reduce((res, type, idx) => {
  res[type] = idx;
  return res;
}, {});

module.exports = { Encode, Decode };
