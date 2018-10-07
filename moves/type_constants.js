// https://www.chessprogramming.org/Encoding_Moves#From-To_Based
// require('../string_contants.js');

const typesArr = ['NORMAL', 'DBL_PPUSH',
                  'CSTL_KING', 'CSTL_QUEEN',
                  'EP_CAPT', 'NPROMO',
                  'BPROMO','RPROMO', 'QPROMO'];

const Types = typesArr.reduce((res, type, idx) => {
  res[type] = idx;
  return res;
}, {});

const PromoMask = (0b1111 << 18) >>> 0;

module.exports = { Types, PromoMask };
