const Types = require('./type_constants.js');

class Move {
  constructor(from, to, type, piece, captPiece) {
    console.log('MOVE DATA:');
    console.log(from, to, type, piece, captPiece);
    this.val = (((type & 0xf) << 18) >>> 0) |
               ((((captPiece || 0) & 0x7) << 15) >>> 0) |
               (((piece & 0x7) << 12) >>> 0) |
               (((from & 0x3f) << 6) >>> 0) |
               ((to & 0x3f) >>> 0) >>> 0;
  }

  getFrom() {
    return (this.val >>> 6) & 0x3f;
  }

  getTo() {
    return this.val & 0x3f;
  }

  getPiece() {
    return (this.val >>> 12) & 0x7;
  }

  getCaptPiece() {
    return (this.val >>> 15) & 0x7;
  }

  getType() {
    return this.val >>> 18;
  }
}

module.exports = { Move, MoveTypes: Types.Encode };
