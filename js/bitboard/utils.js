function popCount32(int) {
  let count = 0;

  while (int) {
    count++;
    int &= (int - 1);
  }

  return count;
}

function bitScanForward32(int) {
  return popCount32((int & -int) - 1);
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

function bitScanReverse32(int) {
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

function clearLeastSigBit32(int) {
  return (int & (int - 1));
}

module.exports = {
  popCount32,
  bitScanForward32,
  bitScanReverse32,
  clearLeastSigBit32
};
