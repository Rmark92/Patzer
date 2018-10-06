const Int32Utils = require('./int32_utils.js');

//56 57 58 59 60 61 62 63
//48 49 50 51 52 53 54 55  ^
//40 41 42 43 44 45 46 47  |
//32 33 34 35 36 37 38 39 HIGH
//24 25 26 27 28 29 30 31 LOW
//16 17 18 19 20 21 22 23  |
// 8  9 10 11 12 13 14 15  v
// 0  1  2  3  4  5  6  7

class BitBoard {
  constructor(low, high) {
    this.low = (low || 0) >>> 0;
    this.high = (high || 0) >>> 0;
  }

  and(other) {
    return new BitBoard(this.low & other.low, this.high & other.high);
  }

  or(other) {
    return new BitBoard(this.low | other.low, this.high | other.high);
  }

  xor(other) {
    return new BitBoard(this.low ^ other.low, this.high ^ other.high);
  }

  not() {
    return new BitBoard(~this.low, ~this.high);
  }

  equals(other) {
    return (this.low === other.low && this.high === other.high);
  }

  greaterThan(other) {
    return (this.high > other.high || this.low > other.low);
  }

  lessThan(other) {
    return (this.high < other.high || this.low < other.low);
  }

  isZero() {
    return (this.high === 0 && this.low === 0);
  }

  shiftRight(numBits) {
    let newLowBits, newHighBits;

    if (numBits <= 0) {
      return new BitBoard(this.low, this.high);
    } else if (numBits > 63) {
      return new BitBoard();
    } else if (numBits >= 32) {
      newLowBits = this.high >>> (numBits - 32);
      newHighBits = 0;
    } else {
      newLowBits = (this.low >>> numBits) | (this.high << (32 - numBits));
      newHighBits = this.high >>> numBits;
    }

    return new BitBoard(newLowBits, newHighBits);
  }

  shiftLeft(numBits) {
    let newLowBits, newHighBits;

    if (numBits <= 0) {
      return new BitBoard(this.low, this.high);
    } else if (numBits > 63) {
      return new BitBoard();
    } else if (numBits >= 32) {
      newLowBits = 0;
      newHighBits = (this.low << (numBits - 32)) >>> 0;
    } else {
      newLowBits = (this.low << numBits) >>> 0;
      newHighBits =  ((this.low >>> (32 - numBits)) | (this.high << numBits)) >>> 0;
    }

    return new BitBoard(newLowBits, newHighBits);
  }

  popCount() {
      return [this.low, this.high].reduce((count, int32) => {
        return count + Int32Utils.popCount(int32);
      }, 0);
  }

  setBit(pos) {
    if (pos >= 32 && pos < 64) {
      this.high = (this.high | Math.pow(2, pos - 32)) >>> 0;
    } else if (pos >= 0 && pos < 32) {
      this.low = (this.low | Math.pow(2, pos)) >>> 0;
    }
  }

  clearBit(pos) {
    if (pos >= 32 && pos < 64) {
      this.high = (this.high ^ Math.pow(2, pos - 32)) >>> 0;
    } else if (pos >= 0 && pos < 32) {
      this.low = (this.low ^ Math.pow(2, pos)) >>> 0;
    }
  }

  bitScanForward() {
    if (this.low) {
      return Int32Utils.bitScanForward(this.low);
    } else if (this.high) {
      return Int32Utils.bitScanForward(this.high) + 32;
    } else {
      return null;
    }
  }

  hasSetBit(pos) {
    if (pos < 32) {
      return Boolean(this.low & Math.pow(2, pos));
    } else {
      return Boolean(this.high & Math.pow(2, pos - 32));
    }
  }

  bitScanReverse() {
    if (this.high) {
      return Int32Utils.bitScanReverse(this.high) + 32;
    } else if (this.low) {
      return Int32Utils.bitScanReverse(this.low);
    } else {
      return null;
    }
  }

  forEach1Bit(cb) {
    let newLowBits = this.low;
    let newHighBits = this.high;

    while (newLowBits) {
      cb(Int32Utils.bitScanForward(newLowBits));
      newLowBits = Int32Utils.clearLeastSigBit(newLowBits);
    }

    while (newHighBits) {
      cb(Int32Utils.bitScanForward(newHighBits) + 32);
      newHighBits = Int32Utils.clearLeastSigBit(newHighBits);
    }
  }

  static fromPos(pos) {
    const res = new BitBoard();
    res.setBit(pos);

    return res;
  }

  static fromPositions(positions) {
    const res = new BitBoard();

    positions.forEach((pos) => {
      res.setBit(pos);
    });

    return res;
  }

  static fromCol(colNum) {
    const res = new BitBoard();
    if (colNum < 0 || colNum > 7) { return res; }
    let pos = colNum;

    while (pos < 64) {
      res.setBit(pos);
      pos += 8;
    }

    return res;
  }

  static fromRow(rowNum) {
    const res = new BitBoard();
    if (rowNum < 0 || rowNum > 7) { return res; }

    let pos = rowNum * 8;
    let posMax = pos + 7;

    while (pos <= posMax) {
      res.setBit(pos);
      pos++;
    }

    return res;
  }

  static upperRightDiag(startPos) {
    const res = BitBoard.fromPos(startPos);
    if (startPos < 0 || startPos > 63) { return res; }
    let pos = startPos + 9;

    while (pos < 64 && pos % 8 !== 0) {
      res.setBit(pos);
      pos += 9;
    }

    return res;
  }

  static upperLeftDiag(startPos) {
    const res = new BitBoard();
    if (startPos < 0 || startPos > 63) { return res; }
    let pos = startPos;

    while (pos < 64 && pos % 8 !== 0) {
      res.setBit(pos);
      pos += 7;
    }

    if (pos < 64) {
      res.setBit(pos);
    }

    return res;
  }

  render() {
    let row = '';
    let pow = 63;
    let posVal;
    console.log('------');
    while (pow >= 32) {
      posVal = (Math.pow(2, pow - 32) & this.high) === 0 ? '0' : '1';
      row = posVal + row;
      if (row.length === 8) {
        console.log(row);
        row = '';
      }
      pow--;
    }

    while (pow >= 0) {
      posVal = (Math.pow(2, pow) & this.low) === 0 ? '0' : '1';
      row = posVal + row;
      if (row.length === 8) {
        console.log(row);
        row = '';
      }
      pow--;
    }
    console.log('------');
  }
}


module.exports = BitBoard;
