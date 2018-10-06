// https://www.chessprogramming.org/Encoding_Moves#From-To_Based
// require('../string_contants.js');

const Decode = ['QUIET', 'DBL_PPUSH',
                'CSTL_KING', 'CSTL_QUEEN',
                'CAPT', 'EP_CAPT',
                'NPROMO', 'BPROMO',
                'RPROMO', 'QPROMO',
                'NPROMO_CAPT', 'BPROMO_CAPT',
                'RPROMO_CAPT', 'QPROMO_CAPT'];

const Encode = Decode.reduce((res, type, idx) => {
  res[type] = idx;
  return res;
}, {});

module.exports = { Encode, Decode };
