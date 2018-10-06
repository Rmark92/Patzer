const Types = require('./type_constants.js');

class Move {
  constructor(from, to, type) {
    this.val = ((Types.Encode[type] & 0xf)<<12) | ((from & 0x3f)<<6) | (to & 0x3f);
  }

  getFrom() {
    return (this.val >>> 6) & 0x3f;
  }

  getTo() {
    return this.val & 0x3f;
  }

  getType() {
    return Types.Decode[this.val >>> 12];
  }
}

module.exports = { Move, MoveTypes: Types.Encode };
