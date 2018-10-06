const Types = require('./type_constants.js');

class Move {
  constructor(from, to, type) {
    this.val = (((type & 0xf) << 12) >>> 0) |
               (((from & 0x3f) << 6) >>> 0) |
               ((to & 0x3f) >>> 0) >>> 0;
  }

  getFrom() {
    return (this.val >>> 6) & 0x3f;
  }

  getTo() {
    return this.val & 0x3f;
  }

  getType() {
    return this.val >>> 12;
  }
}

module.exports = { Move, MoveTypes: Types.Encode };
