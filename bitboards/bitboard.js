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
      return new BitBoard(this.low, this.high | Math.pow(2, pos - 32));
    } else if (pos >= 0 && pos < 64) {
      return new BitBoard(this.low | Math.pow(2, pos), this.high);
    } else {
      return new BitBoard(this.low, this.high);
    }
  }

  clearBit(pos) {
    if (pos >= 32 && pos < 64) {
      return new BitBoard(this.low, this.high ^ Math.pow(2, pos - 32));
    } else if (pos >= 0 && pos < 64) {
      return new BitBoard(this.low ^ Math.pow(2, pos), this.high);
    } else {
      return new BitBoard(this.low, this.high);
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

  bitScanReverse() {
    if (this.high) {
      return Int32Utils.bitScanReverse(this.high) + 32;
    } else if (this.low) {
      return Int32Utils.bitScanReverse(this.low);
    } else {
      return null;
    }
  }

  static fromPositions(positions) {
    return positions.reduce((res, pos) => {
      return res.setBit(pos);
    }, new BitBoard());
  }

  static fromCol(colNum) {
    let res = new BitBoard();
    if (colNum < 0 || colNum > 7) { return res; }
    let pos = colNum;

    while (pos < 64) {
      res = res.setBit(pos);
      pos += 8;
    }

    return res;
  }

  static fromRow(rowNum) {
    let res = new BitBoard();
    if (rowNum < 0 || rowNum > 7) { return res; }

    let pos = rowNum * 8;
    let posMax = pos + 7;

    while (pos <= posMax) {
      res = res.setBit(pos);
      pos++;
    }

    return res;
  }

  static allCols() {
    let colIdx = 0;
    let cols = [];
    while (colIdx < 8) {
      cols.push(BitBoard.fromCol(colIdx));
      colIdx++;
    }

    return cols;
  }

  static allRows() {
    let rowIdx = 0;
    let rows = [];
    while (rowIdx < 8) {
      rows.push(BitBoard.fromRow(rowIdx));
      rowIdx++;
    }

    return rows;
  }

  static upperRightDiag(startPos) {
    let bb = new BitBoard().setBit(startPos);
    let pos = startPos + 9;

    while (pos < 64 && pos % 8 !== 0) {
      bb = bb.or(new BitBoard().setBit(pos));
      pos += 9;
    }

    return bb;
  }

  static lowerLeftDiag(startPos) {
    let bb = new BitBoard().setBit(startPos);
    let pos = startPos - 9;

    while (pos >= 0 && pos % 8 !== 0) {
      bb = bb.or(new BitBoard().setBit(pos));
      pos -= 9;
    }

    return bb;
  }

  static lowerRightDiag(startPos) {
    let bb = new BitBoard().setBit(startPos);
    let pos = startPos - 7;

    while (pos >= 0 && pos % 8 !== 0) {
      bb = bb.or(new BitBoard().setBit(pos));
      pos -= 7;
    }

    return bb;
  }

  static upperLeftDiag(startPos) {
    let pos = startPos;
    let bb = new BitBoard();

    while (pos < 64 && pos % 8 !== 0) {
      bb = bb.or(new BitBoard().setBit(pos));
      pos += 7;
    }

    if (pos < 64) {
      bb = bb.or(new BitBoard().setBit(pos));
    }

    return bb;
  }

  static allDiags() {
    const diags = [];
    let pos = 56;

    while (pos >= 0) {
      diags.push(BitBoard.upperRightDiag(pos));
      pos -= 8;
    }

    pos = 1;

    while (pos < 8) {
      diags.push(BitBoard.upperRightDiag(pos));
      pos++;
    }

    return diags;
  }

  static allAntiDiags() {
    const antiDiags = [];
    let pos = 0;

    while (pos < 8) {
      antiDiags.push(BitBoard.upperLeftDiag(pos));
      pos++;
    }

    pos = 15;
    while (pos < 64) {
      antiDiags.push(BitBoard.upperLeftDiag(pos));
      pos += 8;
    }

    return antiDiags;
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
