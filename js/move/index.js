const { Types } = require('./constants.js');

class Move {
  constructor(from, to, type, piece, captPiece) {
    this.val = (((type & 0xf) << 18) >>> 0) |
               ((((captPiece || 0) & 0x7) << 15) >>> 0) |
               (((piece & 0x7) << 12) >>> 0) |
               (((from & 0x3f) << 6) >>> 0) |
               ((to & 0x3f) >>> 0) >>> 0;
  }

  // for testing purposes
  static fromVal(val) {
    const newMove = new Move(0, 0, 0, 0, 0);
    newMove.val = val;
    return newMove;
  }

  getData() {
    return {
      from: this.getFrom(),
      to: this.getTo(),
      type: this.getType(),
      pieceType: this.getPiece(),
      captPieceType: this.getCaptPiece(),
      isPromo: this.isPromo(),
      isCastle: this.isCastle()
    };
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

  isPromo() {
    return [Types.NPROMO, Types.BPROMO,
            Types.RPROMO, Types.QPROMO].includes(this.getType());
  }

  isCastle() {
    return [Types.CSTL_KING, Types.CSTL_QUEEN].includes(this.getType());
  }
}

module.exports = { Move, MoveTypes: Types };
