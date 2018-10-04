function popCount(int) {
  let count = 0;

  while (int) {
    count++;
    int &= (int - 1);
  }

  return count;
}

function bitScanForward(int) {
  return popCount((int & -int) - 1);
}

function generateMSBTable(max) {
  let res = [];
  let int;
  for (int = 1; int <= max; int++) {
    res[int] = Math.floor(Math.log2(int));
  }

  return res;
}

const mostSigBitTable = generateMSBTable(255);

function bitScanReverse(int) {
  let res = 0;
  if (int > 0xFFFF) {
    int >>>= 16;
    res += 16;
  }

  if (int > 0xFF) {
    int >>>= 8;
    res += 8;
  }

  return res + mostSigBitTable[int];
}

module.exports = {
  popCount,
  bitScanForward,
  bitScanReverse
};
