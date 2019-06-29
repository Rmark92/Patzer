/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BitBoard = __webpack_require__(6);
var Masks = __webpack_require__(14);

module.exports = {
  BitBoard: BitBoard,
  BBMasks: Masks
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PUtils;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const { WhitePawns, BlackPawns } = require('./pawns.js');
var Constants = __webpack_require__(2);
var Pawns = __webpack_require__(16);
var Knight = __webpack_require__(17);
var Bishop = __webpack_require__(18);
var Rook = __webpack_require__(19);
var Queen = __webpack_require__(20);
var King = __webpack_require__(21);
var PieceConv = __webpack_require__(22);
var eachPieceType = __webpack_require__(23);
var Dirs = __webpack_require__(3);

var PUtils = (_PUtils = {}, _defineProperty(_PUtils, Constants.Types.PAWNS, Pawns), _defineProperty(_PUtils, Constants.Types.KNIGHTS, Knight), _defineProperty(_PUtils, Constants.Types.BISHOPS, Bishop), _defineProperty(_PUtils, Constants.Types.ROOKS, Rook), _defineProperty(_PUtils, Constants.Types.QUEENS, Queen), _defineProperty(_PUtils, Constants.Types.KINGS, King), _PUtils);

module.exports = {
  PTypes: Constants.Types,
  Colors: Constants.Colors,
  PieceTypeHTML: Constants.PieceTypeHTML,
  PUtils: PUtils,
  eachPieceType: eachPieceType,
  Dirs: Dirs,
  PieceConv: PieceConv
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PieceTypeLetters, _Colors$BLACK, _Colors$WHITE, _PieceTypeHTML;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Colors = {
  WHITE: 0,
  BLACK: 1
};

var Types = {
  PAWNS: 2,
  KNIGHTS: 3,
  BISHOPS: 4,
  ROOKS: 5,
  QUEENS: 6,
  KINGS: 7
};

var PieceTypeLetters = (_PieceTypeLetters = {}, _defineProperty(_PieceTypeLetters, Types.PAWNS, 'p'), _defineProperty(_PieceTypeLetters, Types.KNIGHTS, 'n'), _defineProperty(_PieceTypeLetters, Types.BISHOPS, 'b'), _defineProperty(_PieceTypeLetters, Types.ROOKS, 'r'), _defineProperty(_PieceTypeLetters, Types.QUEENS, 'q'), _defineProperty(_PieceTypeLetters, Types.KINGS, 'k'), _PieceTypeLetters);

var PieceTypeHTML = (_PieceTypeHTML = {}, _defineProperty(_PieceTypeHTML, Colors.BLACK, (_Colors$BLACK = {}, _defineProperty(_Colors$BLACK, Types.PAWNS, "&#9823;"), _defineProperty(_Colors$BLACK, Types.KNIGHTS, "&#9822;"), _defineProperty(_Colors$BLACK, Types.BISHOPS, "&#9821;"), _defineProperty(_Colors$BLACK, Types.ROOKS, "&#9820;"), _defineProperty(_Colors$BLACK, Types.QUEENS, "&#9819;"), _defineProperty(_Colors$BLACK, Types.KINGS, "&#9818;"), _Colors$BLACK)), _defineProperty(_PieceTypeHTML, Colors.WHITE, (_Colors$WHITE = {}, _defineProperty(_Colors$WHITE, Types.PAWNS, "&#9817;"), _defineProperty(_Colors$WHITE, Types.KNIGHTS, "&#9816;"), _defineProperty(_Colors$WHITE, Types.BISHOPS, "&#9815;"), _defineProperty(_Colors$WHITE, Types.ROOKS, "&#9814;"), _defineProperty(_Colors$WHITE, Types.QUEENS, "&#9813;"), _defineProperty(_Colors$WHITE, Types.KINGS, "&#9812;"), _Colors$WHITE)), _PieceTypeHTML);

module.exports = { Types: Types, Colors: Colors, PieceTypeLetters: PieceTypeLetters, PieceTypeHTML: PieceTypeHTML };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DIRS = {
  'NORTH': 0,
  'SOUTH': 1,
  'EAST': 2,
  'WEST': 3,
  'NOEA': 4,
  'NOWE': 5,
  'SOEA': 6,
  'SOWE': 7
};

module.exports = DIRS;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    BitBoard = _require.BitBoard,
    BBMasks = _require.BBMasks;

var Dirs = __webpack_require__(3);
var stepMove = __webpack_require__(8);

function generateStepBitBoards(dirs) {
  var res = [];
  var pos = 0;
  var initial = void 0;
  var posRes = void 0;

  var addMove = function addMove(currRes, dir) {
    return currRes.or(stepMove(initial, dir[0], dir[1]));
  };

  while (pos < 64) {
    initial = BitBoard.fromPos(pos);
    posRes = dirs.reduce(function (currRes, dir) {
      return addMove(currRes, dir);
    }, new BitBoard());
    res.push(posRes);
    pos++;
  }

  return res;
}

var KNIGHT_MOVES = function () {
  var dirs = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

  return generateStepBitBoards(dirs);
}();

var KING_MOVES = function () {
  var dirs = [[1, 0], [1, 1], [1, -1], [-1, 0], [-1, 1], [-1, -1], [0, -1], [0, 1]];

  return generateStepBitBoards(dirs);
}();

var SLIDE_MOVES = function () {
  var pos = 0;
  var res = [];
  var moves = void 0;
  var colIdx = void 0;
  var rowIdx = void 0;
  var diagIdx = void 0;
  var antiDiagIdx = void 0;

  while (pos < 64) {
    moves = {};
    rowIdx = Math.floor(pos / 8);
    colIdx = pos % 8;
    diagIdx = pos < rowIdx * 9 ? pos % 9 - 2 : pos % 9 + 7;
    if (pos === 63) {
      antiDiagIdx = 14;
    } else {
      antiDiagIdx = pos < (rowIdx + 1) * 7 ? pos % 7 : pos % 7 + 7;
    }
    moves[Dirs.NORTH] = BBMasks.COLS[colIdx].and(BBMasks.NORTH_OF_ROW[rowIdx]);
    moves[Dirs.SOUTH] = BBMasks.COLS[colIdx].and(BBMasks.SOUTH_OF_ROW[rowIdx]);
    moves[Dirs.EAST] = BBMasks.ROWS[rowIdx].and(BBMasks.EAST_OF_COL[colIdx]);
    moves[Dirs.WEST] = BBMasks.ROWS[rowIdx].and(BBMasks.WEST_OF_COL[colIdx]);
    moves[Dirs.NOEA] = BBMasks.DIAGS[diagIdx].and(BBMasks.NORTH_OF_ROW[rowIdx]);
    moves[Dirs.SOWE] = BBMasks.DIAGS[diagIdx].and(BBMasks.SOUTH_OF_ROW[rowIdx]);
    moves[Dirs.NOWE] = BBMasks.ANTI_DIAGS[antiDiagIdx].and(BBMasks.NORTH_OF_ROW[rowIdx]);
    moves[Dirs.SOEA] = BBMasks.ANTI_DIAGS[antiDiagIdx].and(BBMasks.SOUTH_OF_ROW[rowIdx]);
    res.push(moves);
    pos++;
  }

  return res;
}();

module.exports = {
  KNIGHT_MOVES: KNIGHT_MOVES,
  KING_MOVES: KING_MOVES,
  SLIDE_MOVES: SLIDE_MOVES
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isPosRay;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(0),
    BitBoard = _require.BitBoard,
    BBMasks = _require.BBMasks;

var _require2 = __webpack_require__(4),
    SLIDE_MOVES = _require2.SLIDE_MOVES;

var Dirs = __webpack_require__(3);

var isPosRay = (_isPosRay = {}, _defineProperty(_isPosRay, Dirs.NORTH, true), _defineProperty(_isPosRay, Dirs.EAST, true), _defineProperty(_isPosRay, Dirs.NOEA, true), _defineProperty(_isPosRay, Dirs.NOWE, true), _defineProperty(_isPosRay, Dirs.SOUTH, false), _defineProperty(_isPosRay, Dirs.WEST, false), _defineProperty(_isPosRay, Dirs.SOEA, false), _defineProperty(_isPosRay, Dirs.SOWE, false), _isPosRay);

function findUnblocked(pos, occupied, dir) {
  var dirBB = SLIDE_MOVES[pos][dir];
  var blocking = dirBB.and(occupied);
  var blockingPos = void 0;

  if (blocking.isZero()) {
    return dirBB;
  } else {
    blockingPos = isPosRay[dir] ? blocking.bitScanForward() : blocking.bitScanReverse();
    return dirBB.xor(SLIDE_MOVES[blockingPos][dir]);
  }
}

function horizVert(pos, occupied, notOwnPieces) {
  return [Dirs.NORTH, Dirs.SOUTH, Dirs.EAST, Dirs.WEST].reduce(function (res, dir) {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

function diag(pos, occupied, notOwnPieces) {
  return [Dirs.NOEA, Dirs.NOWE, Dirs.SOEA, Dirs.SOWE].reduce(function (res, dir) {
    return res.or(findUnblocked(pos, occupied, dir));
  }, new BitBoard()).and(notOwnPieces);
}

module.exports = {
  horizVert: horizVert,
  diag: diag
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Int32Utils = __webpack_require__(13);
// A standard 8x8 chess board can be represented by a 64bit integer (bitboard),
// in which a 1 means the position is occupied, a 0 means it's empty

// We use several of these bitboards to represent a chess position
// for example, the current set of pieces is represented by a bitboard
// for each piece type and color

// Since Javascript doesn't support bitwise operations for 64bit integers,
// we implement most of those operations here, separating the 64bit int
// into its low 32bit and high 32bit components

//56 57 58 59 60 61 62 63
//48 49 50 51 52 53 54 55  ^
//40 41 42 43 44 45 46 47  |
//32 33 34 35 36 37 38 39 HIGH
//24 25 26 27 28 29 30 31 LOW
//16 17 18 19 20 21 22 23  |
// 8  9 10 11 12 13 14 15  v
// 0  1  2  3  4  5  6  7

var BitBoard = function () {
  function BitBoard(low, high) {
    _classCallCheck(this, BitBoard);

    this.low = (low || 0) >>> 0;
    this.high = (high || 0) >>> 0;
  }

  _createClass(BitBoard, [{
    key: 'and',
    value: function and(other) {
      return new BitBoard(this.low & other.low, this.high & other.high);
    }
  }, {
    key: 'or',
    value: function or(other) {
      return new BitBoard(this.low | other.low, this.high | other.high);
    }
  }, {
    key: 'xor',
    value: function xor(other) {
      return new BitBoard(this.low ^ other.low, this.high ^ other.high);
    }
  }, {
    key: 'not',
    value: function not() {
      return new BitBoard(~this.low, ~this.high);
    }
  }, {
    key: 'equals',
    value: function equals(other) {
      return this.low === other.low && this.high === other.high;
    }
  }, {
    key: 'greaterThan',
    value: function greaterThan(other) {
      return this.high > other.high || this.low > other.low;
    }
  }, {
    key: 'lessThan',
    value: function lessThan(other) {
      return this.high < other.high || this.low < other.low;
    }
  }, {
    key: 'isZero',
    value: function isZero() {
      return this.high === 0 && this.low === 0;
    }
  }, {
    key: 'shiftRight',
    value: function shiftRight(numBits) {
      var newLowBits = void 0,
          newHighBits = void 0;

      if (numBits <= 0) {
        return new BitBoard(this.low, this.high);
      } else if (numBits > 63) {
        return new BitBoard();
      } else if (numBits >= 32) {
        newLowBits = this.high >>> numBits - 32;
        newHighBits = 0;
      } else {
        newLowBits = this.low >>> numBits | this.high << 32 - numBits;
        newHighBits = this.high >>> numBits;
      }

      return new BitBoard(newLowBits, newHighBits);
    }
  }, {
    key: 'shiftLeft',
    value: function shiftLeft(numBits) {
      var newLowBits = void 0,
          newHighBits = void 0;

      if (numBits <= 0) {
        return new BitBoard(this.low, this.high);
      } else if (numBits > 63) {
        return new BitBoard();
      } else if (numBits >= 32) {
        newLowBits = 0;
        newHighBits = this.low << numBits - 32 >>> 0;
      } else {
        newLowBits = this.low << numBits >>> 0;
        newHighBits = (this.low >>> 32 - numBits | this.high << numBits) >>> 0;
      }

      return new BitBoard(newLowBits, newHighBits);
    }
  }, {
    key: 'popCount',
    value: function popCount() {
      return [this.low, this.high].reduce(function (count, int32) {
        return count + Int32Utils.popCount32(int32);
      }, 0);
    }
  }, {
    key: 'setBit',
    value: function setBit(pos) {
      if (pos >= 32 && pos < 64) {
        this.high = (this.high | 1 << pos - 32) >>> 0;
      } else if (pos >= 0 && pos < 32) {
        this.low = (this.low | 1 << pos) >>> 0;
      }
    }
  }, {
    key: 'clearBit',
    value: function clearBit(pos) {
      if (pos >= 32) {
        this.high = (this.high & ~(1 << pos - 32)) >>> 0;
      } else {
        this.low = (this.low & ~(1 << pos)) >>> 0;
      }
    }
  }, {
    key: 'bitScanForward',
    value: function bitScanForward() {
      if (this.low) {
        return Int32Utils.bitScanForward32(this.low);
      } else if (this.high) {
        return Int32Utils.bitScanForward32(this.high) + 32;
      } else {
        return null;
      }
    }
  }, {
    key: 'hasSetBit',
    value: function hasSetBit(pos) {
      if (pos < 32) {
        return Boolean(this.low & 1 << pos);
      } else {
        return Boolean(this.high & 1 << pos - 32);
      }
    }
  }, {
    key: 'bitScanReverse',
    value: function bitScanReverse() {
      if (this.high) {
        return Int32Utils.bitScanReverse32(this.high) + 32;
      } else if (this.low) {
        return Int32Utils.bitScanReverse32(this.low);
      } else {
        return null;
      }
    }
  }, {
    key: 'pop1Bits',
    value: function pop1Bits(cb) {
      while (this.low) {
        cb(Int32Utils.bitScanForward32(this.low));
        this.low = Int32Utils.clearLeastSigBit32(this.low);
      }

      while (this.high) {
        cb(Int32Utils.bitScanForward32(this.high) + 32);
        this.high = Int32Utils.clearLeastSigBit32(this.high);
      }
    }
  }, {
    key: 'dup',
    value: function dup() {
      return new BitBoard(this.low, this.high);
    }
  }, {
    key: 'render',
    value: function render() {
      var row = '';
      var pow = 63;
      var posVal = void 0;
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
  }], [{
    key: 'fromPos',
    value: function fromPos(pos) {
      var res = new BitBoard();
      res.setBit(pos);

      return res;
    }
  }, {
    key: 'fromPositions',
    value: function fromPositions(positions) {
      var res = new BitBoard();

      positions.forEach(function (pos) {
        res.setBit(pos);
      });

      return res;
    }
  }, {
    key: 'fromCol',
    value: function fromCol(colNum) {
      var res = new BitBoard();
      if (colNum < 0 || colNum > 7) {
        return res;
      }
      var pos = colNum;

      while (pos < 64) {
        res.setBit(pos);
        pos += 8;
      }

      return res;
    }
  }, {
    key: 'fromRow',
    value: function fromRow(rowNum) {
      var res = new BitBoard();
      if (rowNum < 0 || rowNum > 7) {
        return res;
      }

      var pos = rowNum * 8;
      var posMax = pos + 7;

      while (pos <= posMax) {
        res.setBit(pos);
        pos++;
      }

      return res;
    }
  }, {
    key: 'upperRightDiag',
    value: function upperRightDiag(startPos) {
      var res = BitBoard.fromPos(startPos);
      if (startPos < 0 || startPos > 63) {
        return res;
      }
      var pos = startPos + 9;

      while (pos < 64 && pos % 8 !== 0) {
        res.setBit(pos);
        pos += 9;
      }

      return res;
    }
  }, {
    key: 'upperLeftDiag',
    value: function upperLeftDiag(startPos) {
      var res = new BitBoard();
      if (startPos < 0 || startPos > 63) {
        return res;
      }
      var pos = startPos;

      while (pos < 64 && pos % 8 !== 0) {
        res.setBit(pos);
        pos += 7;
      }

      if (pos < 64) {
        res.setBit(pos);
      }

      return res;
    }
  }]);

  return BitBoard;
}();

module.exports = BitBoard;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(15),
    Types = _require.Types;

var Move = function () {
  function Move(from, to, type, piece, captPiece) {
    _classCallCheck(this, Move);

    this.val = (type & 0xf) << 18 >>> 0 | ((captPiece || 0) & 0x7) << 15 >>> 0 | (piece & 0x7) << 12 >>> 0 | (from & 0x3f) << 6 >>> 0 | (to & 0x3f) >>> 0 >>> 0;
  }

  // for testing purposes


  _createClass(Move, [{
    key: 'getData',
    value: function getData() {
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
  }, {
    key: 'getFrom',
    value: function getFrom() {
      return this.val >>> 6 & 0x3f;
    }
  }, {
    key: 'getTo',
    value: function getTo() {
      return this.val & 0x3f;
    }
  }, {
    key: 'getPiece',
    value: function getPiece() {
      return this.val >>> 12 & 0x7;
    }
  }, {
    key: 'getCaptPiece',
    value: function getCaptPiece() {
      return this.val >>> 15 & 0x7;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.val >>> 18;
    }
  }, {
    key: 'isPromo',
    value: function isPromo() {
      return [Types.NPROMO, Types.BPROMO, Types.RPROMO, Types.QPROMO].includes(this.getType());
    }
  }, {
    key: 'isCastle',
    value: function isCastle() {
      return [Types.CSTL_KING, Types.CSTL_QUEEN].includes(this.getType());
    }
  }], [{
    key: 'fromVal',
    value: function fromVal(val) {
      var newMove = new Move(0, 0, 0, 0, 0);
      newMove.val = val;
      return newMove;
    }
  }]);

  return Move;
}();

module.exports = { Move: Move, MoveTypes: Types };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    BitBoard = _require.BitBoard,
    BBMasks = _require.BBMasks;

function stepMove(initial, noSo, eaWe) {
  var positions = initial;

  if (noSo > 0) {
    positions = positions.shiftLeft(noSo * 8);
  } else if (noSo < 0) {
    positions = positions.shiftRight(noSo * -8);
  }

  if (eaWe > 0) {
    positions = positions.shiftLeft(eaWe).and(BBMasks.EAST_OF_COL[eaWe - 1]);
  } else if (eaWe < 0) {
    positions = positions.shiftRight(-eaWe).and(BBMasks.WEST_OF_COL[eaWe + 8]);
  }

  return positions;
}

module.exports = stepMove;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ColsFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var FilesCols = function () {
  return ColsFiles.reduce(function (res, file, col) {
    res[file] = col;
    return res;
  }, {});
}();

var RowsRanks = ['1', '2', '3', '4', '5', '6', '7', '8'];

var RanksRows = function () {
  return RowsRanks.reduce(function (res, rank, row) {
    res[rank] = row;
    return res;
  }, {});
}();

var GameStatus = {
  ThreeFoldRep: 'Draw - Threefold Repetition',
  MoveLimitExc: 'Draw - Move Limit Exceeded (50)',
  Checkmate: 'Checkmate',
  Stalemate: 'Stalemate',
  PlayerTurn: 'Player Turn',
  AITurn: 'AI Turn'
};

var Selectors = {
  BOARD_ID: "#board",
  PIECE_CLASS: 'piece',
  SQUARE_CLASS: 'square',
  RANK_CLASS: 'rank',
  FILE_CLASS: 'file'
};

module.exports = { ColsFiles: ColsFiles, FilesCols: FilesCols, RowsRanks: RowsRanks, RanksRows: RanksRows, Selectors: Selectors, GameStatus: GameStatus };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UI = __webpack_require__(11);

$(document).ready(function () {
  var ui = new UI();
  ui.run();
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = __webpack_require__(12);
var AI = __webpack_require__(25);

var _require = __webpack_require__(1),
    PTypes = _require.PTypes,
    Colors = _require.Colors,
    PieceTypeHTML = _require.PieceTypeHTML;

var _require2 = __webpack_require__(7),
    MoveTypes = _require2.MoveTypes;

var Util = __webpack_require__(30);

var _require3 = __webpack_require__(9),
    ColsFiles = _require3.ColsFiles,
    FilesCols = _require3.FilesCols,
    RowsRanks = _require3.RowsRanks,
    RanksRows = _require3.RanksRows,
    Selectors = _require3.Selectors,
    GameStatus = _require3.GameStatus;

var UI = function () {
  function UI() {
    _classCallCheck(this, UI);

    this.ai = new AI();
  }

  _createClass(UI, [{
    key: 'run',
    value: function run() {
      this.setupButtons();
      this.reset();
    }
  }, {
    key: 'reset',
    value: function reset() {
      $('#board').empty();
      $('#move-history').empty();
      $('.ai-stats-header').text('AI Stats');
      $('.move-stats td').empty();
      this.position = new Position();
      var playerColor = $('input[name="color-option"]:checked').val();
      this.playerColor = parseInt(playerColor);
      var aiThinkingTime = parseFloat($('#ai-time-val').text()) * 1000;
      this.ai.setThinkingTime(aiThinkingTime);
      this.drawBoard();
      this.playNextTurn();
    }
  }, {
    key: 'setupButtons',
    value: function setupButtons() {
      var _this = this;

      $('#unmake').click(function (event) {
        if ($(event.currentTarget).hasClass('active')) {
          _this.unmakePlayerMove();
          _this.playNextTurn();
        }
      });

      $('#auto').click(function (event) {
        if ($(event.currentTarget).hasClass('active')) {
          _this.aiMove();
        }
      });

      $('#ai-time-slider').slider({
        value: this.ai.thinkingTime / 1000,
        min: Math.round(Math.log(.01) * 1000) / 1000,
        max: Math.round(Math.log(30) * 1000) / 1000,
        step: 0.01,
        slide: function slide(event, ui) {
          var val = Math.round(Math.pow(Math.E, ui.value) * 1000);
          $('#ai-time-val').text(Util.formatTime(val));
        }
      });

      $('#new-game').click(function (event) {
        if ($(event.currentTarget).hasClass('active')) {
          _this.reset();
        }
      });

      $('#ai-time-val').text(Util.formatTime(this.ai.thinkingTime));
    }
  }, {
    key: 'deactivateBtns',
    value: function deactivateBtns() {
      $('.clickable').removeClass('active');
    }
  }, {
    key: 'activateBtns',
    value: function activateBtns() {
      $('.clickable').addClass('active');
      if (this.position.prevMoves.length === 0) {
        $('#unmake').removeClass('active');
      }
    }
  }, {
    key: 'resetStatus',
    value: function resetStatus() {
      this.currMoves = this.position.generateLegalMoves();

      if (this.currMoves.length === 0) {
        if (this.position.isThreefoldRepetition()) {
          this.status = GameStatus.ThreeFoldRep;
        } else if (this.position.isMoveLimitExceeded()) {
          this.status = GameStatus.MoveLimitExc;
        } else if (this.position.inCheck(this.position.turn)) {
          this.status = GameStatus.Checkmate;
        } else {
          this.status = GameStatus.Stalemate;
        }
        this.activateBtns();
        $('#auto').removeClass('active');
      } else {
        if (this.position.turn === this.playerColor) {
          this.status = GameStatus.PlayerTurn;
        } else {
          this.status = GameStatus.AITurn;
        }
      }

      var statusEl = $('.status-header');

      statusEl.text(this.status);
    }
  }, {
    key: 'unmakePlayerMove',
    value: function unmakePlayerMove() {
      this.position.unmakePrevMove();
      this.shiftFromMovesList();
      if (this.position.turn !== this.playerColor) {
        this.position.unmakePrevMove();
        this.shiftFromMovesList();
      }
    }
  }, {
    key: 'playNextTurn',
    value: function playNextTurn() {
      this.updatePieces();

      if (this.position.turn === this.playerColor) {
        this.setupPlayerMove();
      } else {
        this.aiMove();
      }
    }
  }, {
    key: 'populateStatsTable',
    value: function populateStatsTable(moveStr, moveStats) {
      $('.ai-stats-header').text('AI Stats (' + moveStr + ')');
      $('.depth-stat').text(moveStats.depth);
      $('.runtime-stat').text(moveStats.runTime || 'N/A');
      $('.explored-stat').text(moveStats.exploredPositions);
      $('.main-search-stat').text(moveStats.mainSearchNodes);
      $('.qsearch-stat').text(moveStats.qSearchNodes);
      $('.ttable-hit-stat').text(moveStats.tTableHits);
    }
  }, {
    key: 'createMoveItem',
    value: function createMoveItem(moveData) {
      var _this2 = this;

      var moveItem = $('<tr class="move-item"></tr>');
      var moveStr = Util.formatMove(moveData.move, moveData.color);

      moveItem.append($('<td class="move-str">' + moveStr + '</td>'));

      if (moveData.stats) {
        moveItem.addClass('stats-view-link clickable');
        moveItem.click(function () {
          return _this2.populateStatsTable(moveStr, moveData.stats);
        });
      }

      return moveItem;
    }
  }, {
    key: 'addToMovesList',
    value: function addToMovesList(moveData) {
      var movesHistory = $('#move-history');
      var newMoveItem = this.createMoveItem(moveData);
      movesHistory.prepend(newMoveItem);
    }
  }, {
    key: 'shiftFromMovesList',
    value: function shiftFromMovesList() {
      $(".move-item:first").remove();
    }
  }, {
    key: 'generateFileHeader',
    value: function generateFileHeader() {
      var newRow = $('<tr></tr>');
      newRow.append('<th>');
      ColsFiles.forEach(function (file) {
        newRow.append('<th class="file">' + file + '</th>');
      });
      newRow.append('<th>');

      return newRow;
    }
  }, {
    key: 'generateSquare',
    value: function generateSquare(file, rank) {
      var fileRank = file + rank;

      var newSquare = $('<td id="' + fileRank + '"></td>');

      var squareColor = Util.isDarkSquare(fileRank) ? 'dark' : 'light';
      newSquare.addClass(squareColor + " square");

      return newSquare;
    }
  }, {
    key: 'drawBoard',
    value: function drawBoard() {
      var _this3 = this;

      var board = $('#board');

      var newRankRow = void 0;
      var rowsRanks = this.playerColor === Colors.WHITE ? RowsRanks : RowsRanks.slice().reverse();
      rowsRanks.forEach(function (rank) {
        newRankRow = $('<tr>');
        newRankRow.append('<th class="rank">' + rank + '</th>');
        ColsFiles.forEach(function (file) {
          newRankRow.append(_this3.generateSquare(file, rank));
        });
        newRankRow.append('<th class="rank">' + rank + '</th>');
        board.prepend(newRankRow);
      });

      board.prepend(this.generateFileHeader());
      board.append(this.generateFileHeader());
    }
  }, {
    key: 'updatePieces',
    value: function updatePieces() {
      $('.piece').remove();
      var pieceTypes = Object.values(PTypes);
      var pieces = this.position.pieces;
      var fileRank = void 0;
      var newPiece = void 0;

      pieceTypes.forEach(function (pieceType) {
        pieces[pieceType].dup().pop1Bits(function (pos) {
          newPiece = $('<div class="piece"><div>');
          if (pieces[Colors.WHITE].hasSetBit(pos)) {
            newPiece.html(PieceTypeHTML[Colors.WHITE][pieceType]);
            newPiece.addClass('white');
          } else {
            newPiece.html(PieceTypeHTML[Colors.BLACK][pieceType]);
            newPiece.addClass('black');
          }
          fileRank = Util.fileRankFromPos(pos);
          $('#' + fileRank).append(newPiece);
        });
      });
    }
  }, {
    key: 'makeMove',
    value: function makeMove(move, stats) {
      this.addToMovesList({ move: move, color: this.position.turn, stats: stats });
      if (stats) {
        this.populateStatsTable(Util.formatMove(move, this.position.turn), stats);
      }
      this.position.makeMove(move);
      this.playNextTurn();
    }
  }, {
    key: 'isGameOver',
    value: function isGameOver() {
      return ![GameStatus.AITurn, GameStatus.PlayerTurn].includes(this.status);
    }
  }, {
    key: 'aiMove',
    value: function aiMove() {
      var _this4 = this;

      this.deactivateBtns();
      this.resetStatus();
      if (this.isGameOver()) {
        return;
      }

      $('main').addClass('waiting');
      setTimeout(function () {
        var aiMoveData = _this4.ai.chooseMove(_this4.position, _this4.currMoves);
        _this4.animateMove(aiMoveData.move, function () {
          $('main').removeClass('waiting');
          _this4.makeMove(aiMoveData.move, aiMoveData.performance);
        });
      }, 100);
    }
  }, {
    key: 'animateMove',
    value: function animateMove(move, cb) {
      var pieceEl = $('#' + Util.fileRankFromPos(move.getFrom()) + ' .piece');
      var newSquare = $('#' + Util.fileRankFromPos(move.getTo()));

      if (move.getCaptPiece()) {
        var captPiece = $('#' + Util.fileRankFromPos(move.getTo()) + ' .piece');
        var captOffset = captPiece.offset();
        captPiece.css({
          'position': 'absolute',
          'left': captOffset.left,
          'top': captOffset.top
        });
        captPiece.fadeOut(450);
      }

      var oldOffset = pieceEl.offset();
      pieceEl.appendTo(newSquare);
      var newOffset = pieceEl.offset();

      var animPiece = pieceEl.clone().appendTo('body');
      animPiece.css({
        'position': 'absolute',
        'left': oldOffset.left,
        'top': oldOffset.top,
        'z-index': 1000
      });
      pieceEl.hide();

      animPiece.animate({ 'top': newOffset.top, 'left': newOffset.left }, 450, function () {
        pieceEl.show();
        animPiece.remove();
        cb();
      });
    }
  }, {
    key: 'setupPlayerMove',
    value: function setupPlayerMove() {
      this.activateBtns();
      this.resetStatus();
      if (this.isGameOver()) {
        return;
      }

      var movesData = this.currMoves.map(function (move) {
        return move.getData();
      });
      var moveFromTos = {};
      var moveToFroms = {};

      movesData.forEach(function (moveData) {
        moveFromTos[moveData.from] = moveFromTos[moveData.from] || [];
        moveFromTos[moveData.from].push(moveData.to);

        moveToFroms[moveData.to] = moveToFroms[moveData.to] || [];
        moveToFroms[moveData.to].push(moveData.from);
      });

      this.activateDraggablePieces(moveFromTos);
      this.activateDroppableSquares(moveToFroms);
    }
  }, {
    key: 'activateDraggablePieces',
    value: function activateDraggablePieces(moveFromTos) {
      var fromFileRank = void 0;
      var pieceEl = void 0;

      Object.keys(moveFromTos).forEach(function (fromPos) {
        fromFileRank = Util.fileRankFromPos(fromPos);
        pieceEl = $('#' + fromFileRank + ' .piece');
        pieceEl.draggable({
          containment: $('#board'),
          revert: 'invalid',
          revertDuration: 300
        });

        pieceEl.mouseenter(function () {
          if (pieceEl.hasClass('ui-draggable')) {
            moveFromTos[fromPos].forEach(function (toPos) {
              $('#' + Util.fileRankFromPos(toPos)).addClass('can-move-to');
            });
          }
        });

        pieceEl.mouseleave(function () {
          $('.square').removeClass('can-move-to');
        });
      });
    }
  }, {
    key: 'activateDroppableSquares',
    value: function activateDroppableSquares(moveToFroms) {
      var _this5 = this;

      var destSq = void 0;
      var originSquare = void 0;
      var originPos = void 0;
      var selectedMove = void 0;

      Object.keys(moveToFroms).forEach(function (toPos) {
        destSq = $('#' + Util.fileRankFromPos(toPos));
        destSq.droppable({
          accept: function accept(draggable) {
            originSquare = $(draggable).parent().attr('id');
            if (!originSquare) {
              return false;
            }
            originPos = Util.posFromFileRank(originSquare);
            return moveToFroms[toPos].includes(originPos);
          },
          drop: function drop(event, ui) {
            _this5.makePlayerMove(ui.draggable, parseInt(toPos));
          }
        });
      });
    }
  }, {
    key: 'makePlayerMove',
    value: function makePlayerMove(piece, toPos) {
      var originSquare = $(piece).parent();
      piece.remove();

      $('.ui-draggable').draggable('destroy');
      $('.ui-droppable').droppable('destroy');
      $('.square').removeClass('can-move-to');
      this.deactivateBtns();

      var originPos = Util.posFromFileRank($(originSquare).attr('id'));
      var destSq = $('#' + Util.fileRankFromPos(toPos));
      destSq.children().remove();

      var selectedMoves = this.currMoves.filter(function (move) {
        return move.getFrom() === originPos && move.getTo() === toPos;
      });

      if (selectedMoves.length > 1) {
        var color = this.playerColor === Colors.WHITE ? 'white' : 'black';
        this.createPromoWindow(destSq, selectedMoves, color);
      } else {
        var selectedMove = selectedMoves[0];
        this.makeMove(selectedMove);
      }
    }
  }, {
    key: 'createPromoWindow',
    value: function createPromoWindow(destSq, promoMoves, color) {
      var promoDiv = $("<div class='promo-window'></div>");
      var promoPieces = this.createPromoPieces(promoMoves, color);

      var promoWinRow = $("<div class='promo-window-row'></div>");
      promoWinRow.append(promoPieces.slice(0, 2));
      promoDiv.append(promoWinRow);

      promoWinRow = $("<div class='promo-window-row'></div>");
      promoWinRow.append(promoPieces.slice(2));
      promoDiv.append(promoWinRow);

      destSq.append(promoDiv);
    }
  }, {
    key: 'createPromoPieces',
    value: function createPromoPieces(promoMoves, color) {
      var _PromosPTypes,
          _this6 = this;

      var PromosPTypes = (_PromosPTypes = {}, _defineProperty(_PromosPTypes, MoveTypes.NPROMO, PTypes.KNIGHTS), _defineProperty(_PromosPTypes, MoveTypes.BPROMO, PTypes.BISHOPS), _defineProperty(_PromosPTypes, MoveTypes.RPROMO, PTypes.ROOKS), _defineProperty(_PromosPTypes, MoveTypes.QPROMO, PTypes.QUEENS), _PromosPTypes);

      var promoPieces = [];
      var newPromoPiece = void 0;

      promoMoves.forEach(function (promoMove) {
        newPromoPiece = _this6.createPromoPiece(promoMove, PromosPTypes[promoMove.getType()], color);
        promoPieces.push(newPromoPiece);
      });

      return promoPieces;
    }
  }, {
    key: 'createPromoPiece',
    value: function createPromoPiece(move, pType, color) {
      var _this7 = this;

      var promoPiece = $('<div class=\'promo-piece piece ' + color + '\'">' + PieceTypeHTML[pType] + '</div>');
      promoPiece.click(function () {
        $('.promo-window').remove();
        _this7.makeMove(move);
      });

      return promoPiece;
    }
  }]);

  return UI;
}();

module.exports = UI;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    BitBoard = _require.BitBoard,
    BBMasks = _require.BBMasks;

var _require2 = __webpack_require__(7),
    Move = _require2.Move,
    MoveTypes = _require2.MoveTypes;

var _require3 = __webpack_require__(1),
    PUtils = _require3.PUtils,
    PTypes = _require3.PTypes,
    Colors = _require3.Colors,
    Dirs = _require3.Dirs,
    eachPieceType = _require3.eachPieceType,
    PieceConv = _require3.PieceConv;

var _require4 = __webpack_require__(24),
    piecePosHashKeys = _require4.piecePosHashKeys,
    epPosHashKeys = _require4.epPosHashKeys,
    castleHashKeys = _require4.castleHashKeys,
    turnHashKeys = _require4.turnHashKeys;

// We initialize our position with a FEN string so that it's easy to
// recreate a particular position. Since just one position object is created during
// our game, this is mainly helpful for testing/debugging purposes
// More about FEN here: https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation

var defaultFenStr = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

var Position = function () {
  function Position() {
    var fenStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFenStr;

    _classCallCheck(this, Position);

    var _fenStr$split = fenStr.split(' '),
        _fenStr$split2 = _slicedToArray(_fenStr$split, 6),
        positions = _fenStr$split2[0],
        turnLetter = _fenStr$split2[1],
        castleRightsStr = _fenStr$split2[2],
        epSq = _fenStr$split2[3],
        halfMoveClock = _fenStr$split2[4],
        fullMoveClock = _fenStr$split2[5];

    this.pieces = this.fenPositionsToPieceBBs(positions);
    this.castleRights = this.parseCastleRightsStr(castleRightsStr);
    this.epBB = this.parseEpStr(epSq);
    this.halfMoveClock = parseInt(halfMoveClock);
    this.fullMoveClock = parseInt(fullMoveClock);
    var turn = turnLetter === 'w' ? Colors.WHITE : Colors.BLACK;

    this.prevMoves = [];
    this.prevStates = [];

    // cache for quick lookup by board position
    this.pTypesLocations = this.createPTypesLocations();

    // we separate our hashed values into piece position hashes
    // and state hashes for simpler integration with our move making/unmaking process
    // they are xor'd to represent the complete position
    this.pPosHash = this.createPiecesPosHash();
    this.stateHash = this.createStateHash();

    this.setTurn(turn, this.getOtherColor(turn));

    this.positionCounts = {};
    this.addPositionCount();
  }

  _createClass(Position, [{
    key: 'fenPositionsToPieceBBs',
    value: function fenPositionsToPieceBBs(positions) {
      var rowStrs = positions.split('/');

      var pieceBBs = this.createEmptyPiecesBBs();

      var pos = 0;
      rowStrs.forEach(function (rowStr) {
        rowStr.split('').forEach(function (char) {
          if (/[0-9]/.test(char)) {
            pos += parseInt(char);
          } else {
            pieceBBs[PieceConv.letterToType(char)].setBit(pos);
            pieceBBs[PieceConv.letterToColor(char)].setBit(pos);
            pos++;
          }
        });
      });

      return pieceBBs;
    }
  }, {
    key: 'createEmptyPiecesBBs',
    value: function createEmptyPiecesBBs() {
      var pieces = [];

      eachPieceType(function (type) {
        pieces[type] = new BitBoard();
      });

      Object.values(Colors).forEach(function (color) {
        pieces[color] = new BitBoard();
      });

      return pieces;
    }
  }, {
    key: 'parseCastleRightsStr',
    value: function parseCastleRightsStr(castleRightsStr) {
      var rightsPos = ['q', 'k', 'Q', 'K'];

      return rightsPos.reduce(function (res, rightsLetter, pos) {
        if (castleRightsStr.includes(rightsLetter)) {
          return res ^ 1 << pos;
        }
      }, 0);
    }
  }, {
    key: 'parseEpStr',
    value: function parseEpStr(epStr) {
      if (/\d+/.test(epStr)) {
        return BitBoard.fromPos(parseInt(epStr));
      } else {
        return new BitBoard();
      }
    }
  }, {
    key: 'createPTypesLocations',
    value: function createPTypesLocations() {
      var pos = void 0;
      var res = [];

      for (pos = 0; pos < 64; pos++) {
        res[pos] = this.getPieceAt(pos);
      }

      return res;
    }
  }, {
    key: 'getPieceAt',
    value: function getPieceAt(pos) {
      var types = Object.values(PTypes);

      var idx = void 0;
      var type = void 0;

      for (idx = 0; idx < types.length; idx++) {
        type = types[idx];
        if (this.pieces[type].hasSetBit(pos)) {
          return type;
        }
      }

      return null;
    }
  }, {
    key: 'createPiecesPosHash',
    value: function createPiecesPosHash() {
      var _this = this;

      var val = 0;

      var pType = void 0;
      var whitesPos = this.pieces[Colors.WHITE];
      whitesPos.dup().pop1Bits(function (pos) {
        pType = _this.pTypesLocations[pos];
        val ^= piecePosHashKeys[pos][pType][Colors.WHITE];
      });

      var blacksPos = this.pieces[Colors.BLACK];
      blacksPos.dup().pop1Bits(function (pos) {
        pType = _this.pTypesLocations[pos];
        val ^= piecePosHashKeys[pos][pType][Colors.BLACK];
      });

      return val;
    }
  }, {
    key: 'createStateHash',
    value: function createStateHash() {
      var val = 0;
      this.epBB.dup().pop1Bits(function (pos) {
        val ^= epPosHashKeys[pos];
      });

      var castleRightsPos = void 0;
      for (castleRightsPos = 0; castleRightsPos < 4; castleRightsPos++) {
        if ((this.castleRights & 1 << castleRightsPos) >>> 0) {
          val ^= castleHashKeys[castleRightsPos];
        }
      }

      return val;
    }
  }, {
    key: 'getHash',
    value: function getHash() {
      return this.pPosHash ^ this.stateHash ^ turnHashKeys[this.turn];
    }
  }, {
    key: 'setTurn',
    value: function setTurn(turn, opp) {
      this.turn = turn;
      this.opp = opp;
    }
  }, {
    key: 'swapTurn',
    value: function swapTurn() {
      this.setTurn(this.opp, this.turn);
    }
  }, {
    key: 'getOtherColor',
    value: function getOtherColor(color) {
      return color ^ Colors.BLACK;
    }

    // generates all pseudo legal moves, ie moves that may put the king
    // in check but are otherwise legal

  }, {
    key: 'generatePseudoMoves',
    value: function generatePseudoMoves() {
      var includeQuiet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var checkNSDraw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var moves = [];
      if (checkNSDraw && this.isNonStalemateDraw()) {
        return moves;
      }
      this.addPawnMoves(moves, includeQuiet);
      this.addNormalMoves(moves, includeQuiet);
      this.addKingMoves(moves, includeQuiet);

      return moves;
    }

    // generates moves with a filter for whether the move puts the king in check,
    // used for the UI but not the AI move search

  }, {
    key: 'generateLegalMoves',
    value: function generateLegalMoves() {
      var _this2 = this;

      var pseudoMoves = this.generatePseudoMoves();
      var moveData = void 0;
      var isLegal = void 0;

      var legals = [];
      return pseudoMoves.filter(function (pseudoMove) {
        moveData = pseudoMove.getData();

        _this2.testMove(moveData, function (testsLegal) {
          isLegal = testsLegal;
          return true;
        });

        return isLegal;
      });
    }
  }, {
    key: 'isNonStalemateDraw',
    value: function isNonStalemateDraw() {
      return this.isMoveLimitExceeded() || this.isThreefoldRepetition();
    }
  }, {
    key: 'isThreefoldRepetition',
    value: function isThreefoldRepetition() {
      return this.positionCounts[this.getHash()] === 3;
    }
  }, {
    key: 'isMoveLimitExceeded',
    value: function isMoveLimitExceeded() {
      return this.halfMoveClock >= 50;
    }
  }, {
    key: 'addPawnMoves',
    value: function addPawnMoves(moves, includeQuiet) {
      var pawnsPos = this.getColorPieceSet(this.turn, PTypes.PAWNS);

      if (includeQuiet) {
        var notOccupied = this.getOccupied().not();

        var pawnSinglePushes = PUtils[PTypes.PAWNS].singlePush(this.turn, pawnsPos, notOccupied);
        this.addPawnMoveSet(pawnSinglePushes, 8 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves);

        var pawnDoublePushes = PUtils[PTypes.PAWNS].doublePush(this.turn, pawnsPos, notOccupied);
        this.addPawnMoveSet(pawnDoublePushes, 16 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves, false, true);
      }

      var oppPositions = this.pieces[this.opp].or(this.epBB);

      var pawnLeftAttacks = PUtils[PTypes.PAWNS].attacksLeft(this.turn, pawnsPos, oppPositions);
      this.addPawnMoveSet(pawnLeftAttacks, 7 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves, true);

      var pawnRightAttacks = PUtils[PTypes.PAWNS].attacksRight(this.turn, pawnsPos, oppPositions);
      this.addPawnMoveSet(pawnRightAttacks, 9 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves, true);
    }
  }, {
    key: 'addNormalMoves',
    value: function addNormalMoves(moves, includeQuiet) {
      var _this3 = this;

      var occupied = this.getOccupied();
      var notOwnPieces = this.getNotOccupiedBy(this.turn);

      var knightsPos = this.getColorPieceSet(this.turn, PTypes.KNIGHTS);
      var knightMoves = void 0;
      knightsPos.dup().pop1Bits(function (pos) {
        knightMoves = PUtils[PTypes.KNIGHTS].moves(pos, notOwnPieces);
        _this3.addNormalMoveSet(knightMoves, pos, PTypes.KNIGHTS, moves, includeQuiet);
      });

      var positions = void 0;
      var destinations = void 0;
      [PTypes.BISHOPS, PTypes.ROOKS, PTypes.QUEENS].forEach(function (slidingType) {
        positions = _this3.getColorPieceSet(_this3.turn, slidingType);
        positions.dup().pop1Bits(function (pos) {
          destinations = PUtils[slidingType].moves(pos, occupied, notOwnPieces);
          _this3.addNormalMoveSet(destinations, pos, slidingType, moves, includeQuiet);
        });
      });
    }
  }, {
    key: 'addKingMoves',
    value: function addKingMoves(moves, includeQuiet) {
      var notOwnPieces = this.getNotOccupiedBy(this.turn);
      var kingPos = this.getColorPieceSet(this.turn, PTypes.KINGS).bitScanForward();

      var normalMoves = PUtils[PTypes.KINGS].moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, PTypes.KINGS, moves, includeQuiet);

      if (includeQuiet) {
        this.addCastleMoves(moves);
      }
    }

    // note: unlike other pieces, we map pawn movements from the set of all existing pawns
    // rather than each pawn individually, so the function takes a shift amount to determine
    // the location of the individual pawn that moved to a new position

  }, {
    key: 'addPawnMoveSet',
    value: function addPawnMoveSet(newPositions, shiftAmt, moves, isCapture, isDblPush) {
      var _this4 = this;

      var from = void 0;
      var captured = null;

      newPositions.pop1Bits(function (pos) {
        from = pos - shiftAmt;
        if (isDblPush) {
          moves.push(new Move(from, pos, MoveTypes.DBL_PPUSH, PTypes.PAWNS));
        } else if (isCapture && _this4.epBB.hasSetBit(pos)) {
          moves.push(new Move(from, pos, MoveTypes.EP_CAPT, PTypes.PAWNS));
        } else {
          if (isCapture) {
            captured = _this4.pTypesLocations[pos];
          }

          if (PUtils[PTypes.PAWNS].PROMO_MASKS[_this4.turn].hasSetBit(pos)) {
            _this4.addPromos(from, pos, moves, captured);
          } else {
            moves.push(new Move(from, pos, MoveTypes.NORMAL, PTypes.PAWNS, captured));
          }
        }
      });
    }
  }, {
    key: 'addPromos',
    value: function addPromos(from, to, moves, captured) {
      [MoveTypes.NPROMO, MoveTypes.BPROMO, MoveTypes.RPROMO, MoveTypes.QPROMO].forEach(function (promoType) {
        moves.push(new Move(from, to, promoType, PTypes.PAWNS, captured));
      });
    }
  }, {
    key: 'addNormalMoveSet',
    value: function addNormalMoveSet(newPositions, startPos, pieceType, moves, includeQuiet) {
      var _this5 = this;

      var newPos = void 0;
      var newMove = void 0;
      var captType = void 0;

      newPositions.pop1Bits(function (pos) {
        captType = _this5.pieces[_this5.opp].hasSetBit(pos) ? _this5.pTypesLocations[pos] : null;
        if (includeQuiet || captType) {
          moves.push(new Move(startPos, pos, MoveTypes.NORMAL, pieceType, captType));
        }
      });
    }
  }, {
    key: 'addCastleMoves',
    value: function addCastleMoves(moves) {
      var turnCastleRights = this.getCastleRights(this.turn);
      var startPos = PUtils[PTypes.KINGS].INIT_POS[this.turn];
      var notOccupied = this.getOccupied().not();

      if (turnCastleRights & 1 && PUtils[PTypes.KINGS].canCastle(this.turn, Dirs.WEST, notOccupied)) {
        moves.push(new Move(startPos, startPos - 2, MoveTypes.CSTL_QUEEN, PTypes.KINGS));
      }

      if (turnCastleRights & 2 && PUtils[PTypes.KINGS].canCastle(this.turn, Dirs.EAST, notOccupied)) {
        moves.push(new Move(startPos, startPos + 2, MoveTypes.CSTL_KING, PTypes.KINGS));
      }
    }

    // returns 2bit value for the color's castling rights
    // left bit => king-side rights
    // right bit => queen-side rights

  }, {
    key: 'getCastleRights',
    value: function getCastleRights(color) {
      return color === Colors.WHITE ? this.castleRights & 3 : this.castleRights >>> 2;
    }
  }, {
    key: 'getColorPieceSet',
    value: function getColorPieceSet(color, pieceType) {
      return this.pieces[color].and(this.pieces[pieceType]);
    }
  }, {
    key: 'getOccupied',
    value: function getOccupied() {
      return this.pieces[Colors.WHITE].or(this.pieces[Colors.BLACK]);
    }
  }, {
    key: 'getNotOccupiedBy',
    value: function getNotOccupiedBy(color) {
      return this.pieces[color].not();
    }
  }, {
    key: 'makeMove',
    value: function makeMove(move) {
      var moveData = move.getData();

      var isLegal = void 0;
      this.testMove(moveData, function (testsLegal) {
        isLegal = testsLegal;
        return !isLegal;
      });

      if (!isLegal) {
        return false;
      }
      this.setNewState(moveData);
      this.execMoveType(moveData.from, moveData.to, moveData.type);

      this.prevMoves.push(move);
      this.swapTurn();
      this.addPositionCount();

      return true;
    }
  }, {
    key: 'testMove',
    value: function testMove(moveData, cb) {
      if (moveData.captPieceType) {
        this.clearPieceAt(moveData.to, this.opp, moveData.captPieceType);
      }

      if (moveData.isPromo) {
        this.clearPieceAt(moveData.from, this.turn, PTypes.PAWNS);
      } else {
        this.movePiece(moveData.from, moveData.to, this.turn, moveData.pieceType);
      }

      var undo = cb(this.testsLegal(moveData));
      if (!undo) {
        return;
      }

      if (moveData.isPromo) {
        this.setPieceAt(moveData.from, this.turn, PTypes.PAWNS);
      } else {
        this.movePiece(moveData.to, moveData.from, this.turn, moveData.pieceType);
      }

      if (moveData.captPieceType) {
        this.setPieceAt(moveData.to, this.opp, moveData.captPieceType);
      }
    }
  }, {
    key: 'testsLegal',
    value: function testsLegal(moveData) {
      if (moveData.isCastle) {
        return this.isLegalCastle(moveData.from, moveData.type);
      } else {
        return !this.inCheck(this.turn);
      }
    }

    // to make sure we aren't sliding through check

  }, {
    key: 'isLegalCastle',
    value: function isLegalCastle(pos, castleType) {
      var dir = castleType === MoveTypes.CSTL_KING ? 1 : -1;
      var count = 0;

      while (count <= 2) {
        if (this.isAttacked(pos, this.turn)) {
          return false;
        }
        count++;
        pos += dir;
      }

      return true;
    }
  }, {
    key: 'inCheck',
    value: function inCheck(color) {
      var kingPos = this.getColorPieceSet(color, PTypes.KINGS).bitScanForward();
      return this.isAttacked(kingPos, color);
    }
  }, {
    key: 'isAttacked',
    value: function isAttacked(pos, color) {
      var posBB = BitBoard.fromPos(pos);
      var occupied = this.getOccupied();
      var oppColor = this.getOtherColor(color);
      var pawns = this.getColorPieceSet(oppColor, PTypes.PAWNS);

      var queenBB = this.getColorPieceSet(oppColor, PTypes.QUEENS);
      return !PUtils[PTypes.PAWNS].attacksLeft(oppColor, pawns, posBB).isZero() || !PUtils[PTypes.PAWNS].attacksRight(oppColor, pawns, posBB).isZero() || !PUtils[PTypes.KNIGHTS].moves(pos, this.getColorPieceSet(oppColor, PTypes.KNIGHTS)).isZero() || !PUtils[PTypes.BISHOPS].moves(pos, occupied, this.getColorPieceSet(oppColor, PTypes.BISHOPS).or(queenBB)).isZero() || !PUtils[PTypes.ROOKS].moves(pos, occupied, this.getColorPieceSet(oppColor, PTypes.ROOKS).or(queenBB)).isZero() || !PUtils[PTypes.KINGS].moves(pos, this.getColorPieceSet(oppColor, PTypes.KINGS)).isZero();
    }
  }, {
    key: 'setNewState',
    value: function setNewState(moveData) {
      this.addPrevState();

      this.adjustCastleRights(moveData);
      this.setNewEpState();
      this.updateClock(moveData);
    }

    // adds the current state values to the prevStates array
    // used for move unmaking purposes

  }, {
    key: 'addPrevState',
    value: function addPrevState() {
      var state = { epBB: this.epBB,
        castleRights: this.castleRights,
        stateHash: this.stateHash,
        halfMoveClock: this.halfMoveClock,
        fullMoveClock: this.fullMoveClock
      };
      this.prevStates.push(state);
    }
  }, {
    key: 'adjustCastleRights',
    value: function adjustCastleRights(moveData) {
      var turnCastleRights = this.getCastleRights(this.turn);
      var dir = void 0;
      if (moveData.pieceType === PTypes.KINGS && turnCastleRights) {
        this.clearCastleRights(this.turn, Dirs.EAST);
        this.clearCastleRights(this.turn, Dirs.WEST);
      } else if (moveData.pieceType === PTypes.ROOKS && turnCastleRights) {
        dir = moveData.from > PUtils[PTypes.KINGS].INIT_POS[this.turn] ? Dirs.EAST : Dirs.WEST;
        this.clearCastleRights(this.turn, dir);
      }

      if (moveData.captPieceType === PTypes.ROOKS && this.getCastleRights(this.opp)) {
        dir = moveData.to > PUtils[PTypes.KINGS].INIT_POS[this.opp] ? Dirs.EAST : Dirs.WEST;
        this.clearCastleRights(this.opp, dir);
      }
    }
  }, {
    key: 'clearCastleRights',
    value: function clearCastleRights(color, dir) {
      var clearRightsPos = 0;
      if (color === Colors.BLACK) {
        clearRightsPos += 2;
      }
      if (dir === Dirs.EAST) {
        clearRightsPos += 1;
      }

      var clearRightsMask = 1 << clearRightsPos;
      if (clearRightsMask & this.castleRights) {
        this.castleRights = (this.castleRights & ~clearRightsMask) >>> 0;
        this.stateHash ^= castleHashKeys[clearRightsPos];
      }
    }
  }, {
    key: 'setNewEpState',
    value: function setNewEpState() {
      var epPos = this.epBB.bitScanForward();
      if (epPos !== null) {
        this.stateHash ^= epPosHashKeys[epPos];
      }
      this.epBB = new BitBoard();
    }
  }, {
    key: 'updateClock',
    value: function updateClock(moveData) {
      if (this.turn === Colors.BLACK) {
        this.fullMoveClock++;
      }

      if (moveData.captPieceType || moveData.pieceType === PTypes.PAWNS) {
        this.halfMoveClock = 0;
      } else {
        this.halfMoveClock++;
      }
    }
  }, {
    key: 'execMoveType',
    value: function execMoveType(from, to, type) {
      switch (type) {
        case MoveTypes.NORMAL:
          return;
        case MoveTypes.DBL_PPUSH:
          var epPos = to + -PUtils[PTypes.PAWNS].DIRS[this.turn] * 8;
          this.epBB = BitBoard.fromPos(epPos);
          this.stateHash ^= epPosHashKeys[epPos];
          break;
        case MoveTypes.CSTL_KING:
          this.movePiece(from + 3, from + 1, this.turn, PTypes.ROOKS);
          break;
        case MoveTypes.CSTL_QUEEN:
          this.movePiece(from - 4, from - 1, this.turn, PTypes.ROOKS);
          break;
        case MoveTypes.EP_CAPT:
          var capturedPos = to - PUtils[PTypes.PAWNS].DIRS[this.turn] * 8;
          this.clearPieceAt(capturedPos, this.opp, PTypes.PAWNS);
          break;
        case MoveTypes.NPROMO:
          this.setPieceAt(to, this.turn, PTypes.KNIGHTS);
          break;
        case MoveTypes.BPROMO:
          this.setPieceAt(to, this.turn, PTypes.BISHOPS);
          break;
        case MoveTypes.RPROMO:
          this.setPieceAt(to, this.turn, PTypes.ROOKS);
          break;
        case MoveTypes.QPROMO:
          this.setPieceAt(to, this.turn, PTypes.QUEENS);
          break;
      }
    }
  }, {
    key: 'addPositionCount',
    value: function addPositionCount() {
      var currHash = this.getHash();
      if (!this.positionCounts[currHash]) {
        this.positionCounts[currHash] = 1;
      } else {
        this.positionCounts[currHash] += 1;
      }
    }
  }, {
    key: 'unmakePrevMove',
    value: function unmakePrevMove() {
      var prevMove = this.prevMoves.pop();
      if (!prevMove) {
        return false;
      }

      this.subtractPositionCount();
      this.swapTurn();

      var moveData = prevMove.getData();

      this.reverseMoveType(moveData.from, moveData.to, moveData.type);
      this.restorePrevState();

      if (moveData.isPromo) {
        this.setPieceAt(moveData.from, this.turn, PTypes.PAWNS);
      } else {
        this.movePiece(moveData.to, moveData.from, this.turn, moveData.pieceType);
      }

      if (moveData.captPieceType) {
        this.setPieceAt(moveData.to, this.opp, moveData.captPieceType);
      }

      return true;
    }
  }, {
    key: 'restorePrevState',
    value: function restorePrevState() {
      var prevState = this.prevStates.pop();
      this.epBB = prevState.epBB;
      this.castleRights = prevState.castleRights;
      this.stateHash = prevState.stateHash;
      this.halfMoveClock = prevState.halfMoveClock;
      this.fullMoveClock = prevState.fullMoveClock;
    }
  }, {
    key: 'subtractPositionCount',
    value: function subtractPositionCount() {
      var currHash = this.getHash();
      this.positionCounts[currHash] -= 1;
      if (this.positionCounts[currHash] <= 0) {
        delete this.positionCounts[currHash];
      }
    }
  }, {
    key: 'reverseMoveType',
    value: function reverseMoveType(from, to, type) {
      switch (type) {
        case MoveTypes.NORMAL:
        case MoveTypes.DBL_PPUSH:
          return;
        case MoveTypes.CSTL_KING:
          this.movePiece(from + 1, from + 3, this.turn, PTypes.ROOKS);
          break;
        case MoveTypes.CSTL_QUEEN:
          this.movePiece(from - 1, from - 4, this.turn, PTypes.ROOKS);
          break;
        case MoveTypes.EP_CAPT:
          var capturedPos = to - PUtils[PTypes.PAWNS].DIRS[this.turn] * 8;
          this.setPieceAt(capturedPos, this.opp, PTypes.PAWNS);
          break;
        case MoveTypes.NPROMO:
          this.clearPieceAt(to, this.turn, PTypes.KNIGHTS);
          break;
        case MoveTypes.BPROMO:
          this.clearPieceAt(to, this.turn, PTypes.BISHOPS);
          break;
        case MoveTypes.RPROMO:
          this.clearPieceAt(to, this.turn, PTypes.ROOKS);
          break;
        case MoveTypes.QPROMO:
          this.clearPieceAt(to, this.turn, PTypes.QUEENS);
          break;
      }
    }
  }, {
    key: 'movePiece',
    value: function movePiece(from, to, color, pieceType) {
      this.clearPieceAt(from, color, pieceType);
      this.setPieceAt(to, color, pieceType);
    }
  }, {
    key: 'setPieceAt',
    value: function setPieceAt(pos, color, pieceType) {
      this.pieces[color].setBit(pos);
      this.pieces[pieceType].setBit(pos);
      this.pTypesLocations[pos] = pieceType;
      this.pPosHash ^= piecePosHashKeys[pos][pieceType][color];
    }
  }, {
    key: 'clearPieceAt',
    value: function clearPieceAt(pos, color, pieceType) {
      this.pieces[color].clearBit(pos);
      this.pieces[pieceType].clearBit(pos);
      this.pTypesLocations[pos] = null;
      this.pPosHash ^= piecePosHashKeys[pos][pieceType][color];
    }
  }]);

  return Position;
}();

module.exports = Position;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateMSBTable(max) {
  var res = [];
  var int = void 0;
  for (int = 1; int <= max; int++) {
    res[int] = Math.floor(Math.log2(int));
  }

  return res;
}

var mostSigBitTable = generateMSBTable(255);

function popCount32(int) {
  int -= int >>> 1 & 0x55555555;
  int = (int & 0x33333333) + (int >>> 2 & 0x33333333);
  return (int + (int >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
}

function bitScanForward32(int) {
  return popCount32((int & -int) - 1);
}

function bitScanReverse32(int) {
  var res = 0;
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
  return int & int - 1;
}

module.exports = {
  popCount32: popCount32,
  bitScanForward32: bitScanForward32,
  bitScanReverse32: bitScanReverse32,
  clearLeastSigBit32: clearLeastSigBit32
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BitBoard = __webpack_require__(6);

// this file includes static sets of bitboards that
// are commonly used throughout the program

var FULL_BOARD = new BitBoard().not();

var COLS = function () {
  var colIdx = 0;
  var cols = [];
  while (colIdx < 8) {
    cols.push(BitBoard.fromCol(colIdx));
    colIdx++;
  }

  return cols;
}();

var ROWS = function () {
  var rowIdx = 0;
  var rows = [];
  while (rowIdx < 8) {
    rows.push(BitBoard.fromRow(rowIdx));
    rowIdx++;
  }

  return rows;
}();

var DIAGS = function () {
  var diags = [];
  var pos = 56;

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
}();

var ANTI_DIAGS = function () {
  var antiDiags = [];
  var pos = 0;

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
}();

var NORTH_OF_ROW = function () {
  var res = [];
  var bb = FULL_BOARD;
  var idx = 0;

  while (idx <= 7) {
    bb = bb.xor(ROWS[idx]);
    res.push(bb);
    idx++;
  }

  return res;
}();

var SOUTH_OF_ROW = function () {
  var res = [];
  var bb = new BitBoard();
  var idx = 0;

  while (idx <= 7) {
    res.push(bb);
    bb = bb.or(ROWS[idx]);
    idx++;
  }

  return res;
}();

var EAST_OF_COL = function () {
  var res = [];
  var bb = FULL_BOARD;
  var idx = 0;

  while (idx <= 7) {
    bb = bb.xor(COLS[idx]);
    res.push(bb);
    idx++;
  }

  return res;
}();

var WEST_OF_COL = function () {
  var res = [];
  var bb = new BitBoard();
  var idx = 0;

  while (idx <= 7) {
    res.push(bb);
    bb = bb.or(COLS[idx]);
    idx++;
  }

  return res;
}();

module.exports = {
  FULL_BOARD: FULL_BOARD,
  COLS: COLS,
  ROWS: ROWS,
  DIAGS: DIAGS,
  ANTI_DIAGS: ANTI_DIAGS,
  NORTH_OF_ROW: NORTH_OF_ROW,
  SOUTH_OF_ROW: SOUTH_OF_ROW,
  EAST_OF_COL: EAST_OF_COL,
  WEST_OF_COL: WEST_OF_COL
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.chessprogramming.org/Encoding_Moves#From-To_Based
// require('../string_contants.js');

var typesArr = ['NORMAL', 'DBL_PPUSH', 'CSTL_KING', 'CSTL_QUEEN', 'EP_CAPT', 'NPROMO', 'BPROMO', 'RPROMO', 'QPROMO'];

var Types = typesArr.reduce(function (res, type, idx) {
                  res[type] = idx;
                  return res;
}, {});

module.exports = { Types: Types };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DIRS, _INIT_MASKS, _PROMO_MASKS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stepMove = __webpack_require__(8);

var _require = __webpack_require__(0),
    BBMasks = _require.BBMasks;

var _require2 = __webpack_require__(2),
    Colors = _require2.Colors;

var DIRS = (_DIRS = {}, _defineProperty(_DIRS, Colors.WHITE, 1), _defineProperty(_DIRS, Colors.BLACK, -1), _DIRS);

var INIT_MASKS = (_INIT_MASKS = {}, _defineProperty(_INIT_MASKS, Colors.WHITE, BBMasks.ROWS[1]), _defineProperty(_INIT_MASKS, Colors.BLACK, BBMasks.ROWS[6]), _INIT_MASKS);

var Pawns = {
  value: 100,
  positionValues: [0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30, 20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5, -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0],
  DIRS: DIRS,
  PROMO_MASKS: (_PROMO_MASKS = {}, _defineProperty(_PROMO_MASKS, Colors.WHITE, BBMasks.ROWS[7]), _defineProperty(_PROMO_MASKS, Colors.BLACK, BBMasks.ROWS[0]), _PROMO_MASKS),
  attacksLeft: function attacksLeft(color, positions, oppPieces) {
    return stepMove(positions, DIRS[color], -DIRS[color]).and(oppPieces);
  },
  attacksRight: function attacksRight(color, positions, oppPieces) {
    return stepMove(positions, DIRS[color], DIRS[color]).and(oppPieces);
  },
  singlePush: function singlePush(color, positions, notOccupied) {
    return stepMove(positions, DIRS[color], 0).and(notOccupied);
  },
  doublePush: function doublePush(color, positions, notOccupied) {
    var onePush = stepMove(positions.and(INIT_MASKS[color]), DIRS[color], 0).and(notOccupied);
    return stepMove(onePush, DIRS[color], 0).and(notOccupied);
  }
};

module.exports = Pawns;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(4),
    KNIGHT_MOVES = _require.KNIGHT_MOVES;

var Knight = {
		value: 325,
		positionValues: [-50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30, 0, 10, 15, 15, 10, 0, -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20, 20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0, 5, 5, 0, -20, -40, -50, -40, -30, -30, -30, -30, -40, -50],
		moves: function moves(position, notOwnPieces) {
				return KNIGHT_MOVES[position].and(notOwnPieces);
		}
};

module.exports = Knight;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    diag = _require.diag;

var Bishop = {
		value: 325,
		positionValues: [-20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 10, 10, 5, 0, -10, -10, 5, 5, 10, 10, 5, 5, -10, -10, 0, 10, 10, 10, 10, 0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0, 5, -10, -20, -10, -10, -10, -10, -10, -10, -20],
		moves: function moves(position, occupied, notOwnPieces) {
				return diag(position, occupied, notOwnPieces);
		}
};

module.exports = Bishop;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    horizVert = _require.horizVert;

var Rook = {
		value: 500,
		positionValues: [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 5, 5, 0, 0, 0],
		moves: function moves(position, occupied, notOwnPieces) {
				return horizVert(position, occupied, notOwnPieces);
		}
};

module.exports = Rook;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    diag = _require.diag,
    horizVert = _require.horizVert;

var Queen = {
		value: 1050,
		positionValues: [-20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5, 5, 5, 5, 0, -10, -5, 0, 5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5, 5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10, -5, -5, -10, -10, -20],
		moves: function moves(position, occupied, notOwnPieces) {
				return diag(position, occupied, notOwnPieces).or(horizVert(position, occupied, notOwnPieces));
		}
};

module.exports = Queen;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _INIT_POS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(0),
    BBMasks = _require.BBMasks;

var Dirs = __webpack_require__(3);

var _require2 = __webpack_require__(4),
    KING_MOVES = _require2.KING_MOVES,
    SLIDE_MOVES = _require2.SLIDE_MOVES;

var _require3 = __webpack_require__(2),
    Colors = _require3.Colors;

var INIT_POS = (_INIT_POS = {}, _defineProperty(_INIT_POS, Colors.BLACK, 60), _defineProperty(_INIT_POS, Colors.WHITE, 4), _INIT_POS);

var King = {
  value: 40000,
  positionValues: [-30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20, -20, -20, -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20],
  INIT_POS: INIT_POS,
  moves: function moves(position, notOwnPieces) {
    return KING_MOVES[position].and(notOwnPieces);
  },
  canCastle: function canCastle(color, dir, notOccupied) {
    var castleSlide = SLIDE_MOVES[INIT_POS[color]][dir].and(notOccupied);
    if (dir === Dirs.EAST) {
      return castleSlide.popCount() === 2;
    } else {
      return castleSlide.popCount() === 3;
    }
  }
};

module.exports = King;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(2),
    Types = _require.Types,
    Colors = _require.Colors,
    PieceTypeLetters = _require.PieceTypeLetters;

function pieceToLetter(type, color) {
  if (color === Colors.WHITE) {
    return PieceTypeLetters[type];
  } else if (color === Colors.BLACK) {
    return PieceTypeLetters[type].toUpperCase();
  }
}

function letterToColor(letter) {
  return letter.toUpperCase() === letter ? Colors.BLACK : Colors.WHITE;
}

function letterToType(letter) {
  var pieceTypes = Object.values(Types);
  var pieceType = void 0;
  var idx = void 0;

  for (idx = 0; idx < pieceTypes.length; idx++) {
    if (PieceTypeLetters[pieceTypes[idx]] === letter.toLowerCase()) {
      pieceType = pieceTypes[idx];
      break;
    }
  }

  return pieceType;
}

module.exports = { pieceToLetter: pieceToLetter, letterToColor: letterToColor, letterToType: letterToType };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(2),
    Types = _require.Types;

function eachPieceType(cb) {
  var type = void 0;
  for (type = Types.PAWNS; type <= Types.KINGS; type++) {
    cb(type);
  }
}

module.exports = eachPieceType;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(1),
    PTypes = _require.PTypes,
    PUtils = _require.PUtils,
    Colors = _require.Colors,
    eachPieceType = _require.eachPieceType;

// we store zobrist hash values as signed 32bit integers

function randSigned32Bit() {
  var positive = [true, false][Math.floor(Math.random() * 2)];
  if (positive) {
    return Math.floor(Math.random() * (Math.pow(2, 31) - 1));
  } else {
    return -Math.floor(Math.random() * Math.pow(2, 31));
  }
}

var piecePosHashKeys = function () {
  var res = [];
  var pos = void 0;
  var newPosKeys = void 0;

  var addPTypeKeys = function addPTypeKeys(pType) {
    res[pos][pType] = {};
    res[pos][pType][Colors.WHITE] = randSigned32Bit();
    res[pos][pType][Colors.BLACK] = randSigned32Bit();
  };

  for (pos = 0; pos < 64; pos++) {
    res[pos] = {};
    eachPieceType(function (pType) {
      return addPTypeKeys(pType);
    });
  }

  return res;
}();

var epPosHashKeys = function () {
  var res = {};
  var pos = void 0;

  // can only en passant onto 3rd or 6th row
  for (pos = 16; pos <= 23; pos++) {
    res[pos] = randSigned32Bit();
  }

  for (pos = 40; pos <= 47; pos++) {
    res[pos] = randSigned32Bit();
  }

  return res;
}();

var castleHashKeys = function () {
  var res = [];
  var rightsIdx = void 0;

  for (rightsIdx = 0; rightsIdx < 4; rightsIdx++) {
    res[rightsIdx] = randSigned32Bit();
  }

  return res;
}();

var turnHashKeys = function () {
  var res = [];
  res[Colors.WHITE] = randSigned32Bit();
  res[Colors.BLACK] = randSigned32Bit();

  return res;
}();

module.exports = { piecePosHashKeys: piecePosHashKeys, epPosHashKeys: epPosHashKeys, castleHashKeys: castleHashKeys, turnHashKeys: turnHashKeys };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MoveSearch = __webpack_require__(26);

var AI = function () {
  function AI() {
    _classCallCheck(this, AI);

    this.thinkingTime = 1000;
    this.prevPerformance = null;
  }

  _createClass(AI, [{
    key: 'setThinkingTime',
    value: function setThinkingTime(thinkingTime) {
      this.thinkingTime = thinkingTime;
    }
  }, {
    key: 'chooseMove',
    value: function chooseMove(position, availableMoves) {
      var moveSearch = new MoveSearch(position, availableMoves);
      var bestMove = moveSearch.findBest(this.thinkingTime);
      var perfResults = moveSearch.getPerformance();

      return { move: bestMove, performance: perfResults };
    }
  }]);

  return AI;
}();

module.exports = AI;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(1),
    PTypes = _require.PTypes,
    PUtils = _require.PUtils,
    Colors = _require.Colors,
    Dirs = _require.Dirs,
    eachPieceType = _require.eachPieceType;

var _require2 = __webpack_require__(27),
    TransposTable = _require2.TransposTable,
    TABLE_SCORE_TYPES = _require2.TABLE_SCORE_TYPES;

var KillerMoveList = __webpack_require__(28);
var PerfMonitor = __webpack_require__(29);

var EARLY_EXIT = 'early exit';

var MoveSearch = function () {
  function MoveSearch(position, initAvailable) {
    _classCallCheck(this, MoveSearch);

    this.position = position;
    this.initAvailable = initAvailable;
    this.transPosTable = new TransposTable();
    this.killerMoveList = new KillerMoveList();
    this.perfMonitor = new PerfMonitor();
  }

  _createClass(MoveSearch, [{
    key: 'findBest',
    value: function findBest(thinkingTime) {
      this.perfMonitor.setStartTime();
      this.endTime = Date.now() + thinkingTime;

      this.maxDepth = 1;
      while (Date.now() < this.endTime && this.maxDepth < 30) {
        this.killerMoveList.addSlot();
        this.negaMax(this.maxDepth, -Infinity, Infinity);
        this.maxDepth++;
      }

      if (this.maxDepth >= 30) {
        console.log('Approaching draw...');
      } else {
        if (!this.perfMonitor.depth) {
          this.perfMonitor.setDepth(this.maxDepth - 1);
        }
        this.perfMonitor.setEndTime();
        this.perfMonitor.printResults();
      }

      var currNodeEntry = this.transPosTable.getEntry(this.position.getHash());
      if (currNodeEntry && currNodeEntry.bestMove) {
        return currNodeEntry.bestMove;
      } else {
        return this.initAvailable[Math.floor(Math.random() * this.initAvailable.length)];
      }
    }
  }, {
    key: 'getPerformance',
    value: function getPerformance() {
      return this.perfMonitor.getResults();
    }
  }, {
    key: 'quiescenceSearch',
    value: function quiescenceSearch(alpha, beta) {
      if (Date.now() > this.endTime) {
        this.perfMonitor.setDepth(this.maxDepth - 1);
        return EARLY_EXIT;
      }
      this.perfMonitor.logQuiescentNode();
      var standPatVal = this.evaluate();

      if (standPatVal >= beta) {
        return beta;
      } else if (standPatVal > alpha) {
        alpha = standPatVal;
      }

      var inCheck = this.position.inCheck(this.position.turn);

      function calculateMoveOrderScore(move) {
        var score = move.getCaptPiece() ? (1 + move.getCaptPiece()) / (1 + move.getPiece()) : 0;
        score = score * 10 + move.getPiece();
        score = score * 10 + move.getType();

        return score;
      }

      // include quiet moves (ie non captures) only if the king is in check;
      var moves = this.sortMoves(this.position.generatePseudoMoves(inCheck), calculateMoveOrderScore);

      var moveIdx = void 0;
      var score = void 0;

      for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
        if (this.position.makeMove(moves[moveIdx])) {
          score = -this.quiescenceSearch(-beta, -alpha);
          this.position.unmakePrevMove();

          if (score >= beta) {
            return beta;
          }
          if (score > alpha) {
            alpha = score;
          }
        }
      }

      return alpha;
    }
  }, {
    key: 'negaMax',
    value: function negaMax(depth, alpha, beta) {
      if (Date.now() > this.endTime) {
        this.perfMonitor.setDepth(this.maxDepth - 1);
        return EARLY_EXIT;
      }

      var prevAlpha = alpha;
      var currHash = this.position.getHash();
      var entry = this.transPosTable.getEntry(currHash);
      if (entry && entry.depth >= depth) {
        this.perfMonitor.logTableHit();
        switch (entry.type) {
          case TABLE_SCORE_TYPES.EXACT:
            return entry.score;
          case TABLE_SCORE_TYPES.LOWERBOUND:
            alpha = Math.max(alpha, entry.score);
            break;
          case TABLE_SCORE_TYPES.UPPERBOUND:
            beta = Math.min(beta, entry.score);
            break;
        }
        if (alpha >= beta) {
          return entry.score;
        }
      }

      if (depth === 0) {
        return this.quiescenceSearch(alpha, beta);
      }

      this.perfMonitor.logMainSearchNode();

      var prevBestMove = entry && entry.bestMove ? entry.bestMove : null;
      var siblingKillerMoves = this.killerMoveList.getSiblingMoves(this.maxDepth - depth);

      function calculateMoveOrderScore(move) {
        if (prevBestMove && move.val === prevBestMove.val) {
          return 10000;
        }
        var score = move.getCaptPiece() ? (1 + move.getCaptPiece()) / (1 + move.getPiece()) + 1 : 0;
        score = score * 10 + (siblingKillerMoves.includes(move.val) ? 1 : 0);
        score = score * 10 + move.getPiece();
        score = score * 10 + move.getType();

        return score;
      }

      var moves = this.sortMoves(this.position.generatePseudoMoves(), calculateMoveOrderScore);

      var moveIdx = void 0;
      var canMove = false;
      var result = void 0;
      var score = void 0;
      var bestScore = -Infinity;
      var bestMove = null;

      for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
        if (this.position.makeMove(moves[moveIdx])) {
          canMove = true;
          result = this.negaMax(depth - 1, -beta, -alpha);
          this.position.unmakePrevMove();

          if (result === EARLY_EXIT) {
            return result;
          }

          score = -result;
          if (score > bestScore) {
            bestScore = score;
            bestMove = moves[moveIdx];

            if (bestScore >= beta) {
              this.killerMoveList.addMove(this.maxDepth - depth, moves[moveIdx]);
              break;
            }

            if (bestScore > alpha) {
              alpha = bestScore;
            }
          }
        }
      }

      if (!canMove) {
        if (this.position.inCheck(this.position.turn)) {
          bestScore = -PUtils[PTypes.KINGS].value;
        } else {
          bestScore = 0;
        }
      }

      this.transPosTable.storeEntry(bestScore, bestMove, prevAlpha, beta, depth, currHash);
      return bestScore;
    }
  }, {
    key: 'sortMoves',
    value: function sortMoves(moves, calculateScore) {
      function createMoveScores() {
        return moves.map(function (move) {
          return { move: move, score: calculateScore(move) };
        });
      }

      return createMoveScores().sort(function (moveA, moveB) {
        return moveB.score - moveA.score;
      }).map(function (moveScore) {
        return moveScore.move;
      });
    }
  }, {
    key: 'evaluate',
    value: function evaluate() {
      var materialScore = this.scoreMaterial(this.position.turn) - this.scoreMaterial(this.position.opp);

      var piecePositionScore = this.scorePiecePositions(this.position.turn) - this.scorePiecePositions(this.position.opp);

      return materialScore + piecePositionScore;
    }
  }, {
    key: 'scoreMaterial',
    value: function scoreMaterial(color) {
      var _this = this;

      var score = 0;
      eachPieceType(function (pieceType) {
        score += _this.position.getColorPieceSet(color, pieceType).popCount() * PUtils[pieceType].value;
      });

      return score;
    }
  }, {
    key: 'scorePiecePositions',
    value: function scorePiecePositions(color) {
      var _this2 = this;

      var score = 0;
      var piecePositions = void 0;
      eachPieceType(function (pieceType) {
        piecePositions = _this2.position.getColorPieceSet(color, pieceType);
        piecePositions.dup().pop1Bits(function (pos) {
          score += PUtils[pieceType].positionValues[color ? pos : 56 ^ pos];
        });
      });

      return score;
    }
  }]);

  return MoveSearch;
}();

module.exports = MoveSearch;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCORE_TYPES = {
  EXACT: 'exact',
  UPPERBOUND: 'upperbound',
  LOWERBOUND: 'lowerbound'
};

var TransposTable = function () {
  function TransposTable() {
    _classCallCheck(this, TransposTable);

    this.table = {};
  }

  _createClass(TransposTable, [{
    key: 'getEntry',
    value: function getEntry(key) {
      return this.table[key] || null;
    }
  }, {
    key: 'storeEntry',
    value: function storeEntry(score, bestMove, alpha, beta, depth, key) {
      this.table[key] = {
        score: score,
        bestMove: bestMove,
        type: this.determineScoreType(score, alpha, beta),
        depth: depth,
        key: key
      };
    }
  }, {
    key: 'determineScoreType',
    value: function determineScoreType(score, alpha, beta) {
      if (score <= alpha) {
        return SCORE_TYPES.UPPERBOUND;
      } else if (score >= beta) {
        return SCORE_TYPES.LOWERBOUND;
      } else {
        return SCORE_TYPES.EXACT;
      }
    }
  }]);

  return TransposTable;
}();

module.exports = { TransposTable: TransposTable, TABLE_SCORE_TYPES: SCORE_TYPES };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KillerMoveList = function () {
  function KillerMoveList() {
    _classCallCheck(this, KillerMoveList);

    this.list = [];
    this.maxPerLevel = 2;
  }

  _createClass(KillerMoveList, [{
    key: "addSlot",
    value: function addSlot() {
      this.list.push(new Array(this.maxPerLevel));
    }
  }, {
    key: "addMove",
    value: function addMove(distFromRoot, move) {
      var siblingKillerMoves = this.list[distFromRoot];
      if (siblingKillerMoves.includes(move.val)) {
        return;
      }

      var idx = void 0;
      for (idx = siblingKillerMoves.length - 2; idx >= 0; idx--) {
        siblingKillerMoves[idx + 1] = siblingKillerMoves[idx];
      }

      siblingKillerMoves[0] = move.val;
    }
  }, {
    key: "getSiblingMoves",
    value: function getSiblingMoves(distFromRoot) {
      return this.list[distFromRoot];
    }
  }]);

  return KillerMoveList;
}();

module.exports = KillerMoveList;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerfMonitor = function () {
  function PerfMonitor() {
    _classCallCheck(this, PerfMonitor);

    this.mainSearchNodes = 0;
    this.qSearchNodes = 0;
    this.tableHits = 0;
  }

  _createClass(PerfMonitor, [{
    key: 'setStartTime',
    value: function setStartTime() {
      this.startTime = new Date();
    }
  }, {
    key: 'setEndTime',
    value: function setEndTime() {
      this.endTime = new Date();
    }
  }, {
    key: 'setDepth',
    value: function setDepth(depth) {
      this.depth = depth;
    }
  }, {
    key: 'printResults',
    value: function printResults() {
      console.log('---------');

      if (this.startTime && this.endTime) {
        console.log('Run Time: ' + (this.endTime - this.startTime));
      }

      console.log('Depth:  ' + this.depth);
      console.log('Total Explored Positions: ' + (this.qSearchNodes + this.mainSearchNodes));
      console.log('Main Search Nodes: ' + this.mainSearchNodes);
      console.log('Quiescent Search Nodes: ' + this.qSearchNodes);
      console.log('Table Hits: ' + this.tableHits);

      console.log('---------');
    }
  }, {
    key: 'logTableHit',
    value: function logTableHit() {
      this.tableHits++;
    }
  }, {
    key: 'logMainSearchNode',
    value: function logMainSearchNode() {
      this.mainSearchNodes++;
    }
  }, {
    key: 'logQuiescentNode',
    value: function logQuiescentNode() {
      this.qSearchNodes++;
    }
  }, {
    key: 'getResults',
    value: function getResults() {
      return {
        runTime: this.endTime - this.startTime,
        depth: this.depth,
        exploredPositions: this.qSearchNodes + this.mainSearchNodes,
        mainSearchNodes: this.mainSearchNodes,
        qSearchNodes: this.qSearchNodes,
        tTableHits: this.tableHits
      };
    }
  }]);

  return PerfMonitor;
}();

module.exports = PerfMonitor;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(1),
    PieceConv = _require.PieceConv,
    Colors = _require.Colors;

var _require2 = __webpack_require__(9),
    ColsFiles = _require2.ColsFiles,
    FilesCols = _require2.FilesCols,
    RowsRanks = _require2.RowsRanks,
    RanksRows = _require2.RanksRows;

function posFromFileRank(fileRank) {
  var _fileRank$split = fileRank.split(''),
      _fileRank$split2 = _slicedToArray(_fileRank$split, 2),
      file = _fileRank$split2[0],
      rank = _fileRank$split2[1];

  return RanksRows[rank] * 8 + FilesCols[file];
}

function fileRankFromPos(pos) {
  return ColsFiles[pos % 8] + RowsRanks[Math.floor(pos / 8)];
}

// if the row and col are either both even or both odd
function isDarkSquare(fileRank) {
  var _fileRank$split3 = fileRank.split(''),
      _fileRank$split4 = _slicedToArray(_fileRank$split3, 2),
      file = _fileRank$split4[0],
      rank = _fileRank$split4[1];

  var row = RanksRows[rank];
  var col = FilesCols[file];
  return row % 2 === 0 && col % 2 === 0 || row % 2 === 1 && col % 2 === 1;
}

function formatMove(move, color) {
  return PieceConv.pieceToLetter(move.getPiece(), color) + ':' + (fileRankFromPos(move.getFrom()) + '->') + ('' + fileRankFromPos(move.getTo()));
}

function parseMoveStats(moveStats) {
  return Object.keys(moveStats).map(function (key) {
    return key + ': ' + moveStats[key];
  }).join("<br/>");
}

function formatTime(millisecs) {
  var timeStr = (millisecs / 1000).toString();
  if (timeStr.indexOf('.') == -1) timeStr += '.';

  while (timeStr.length < timeStr.indexOf('.') + 3) {
    timeStr += '0';
  }

  while (timeStr.length > timeStr.indexOf('.') + 3) {
    timeStr = timeStr.slice(0, timeStr.length - 1);
  }

  return timeStr;
}

module.exports = {
  posFromFileRank: posFromFileRank,
  fileRankFromPos: fileRankFromPos,
  isDarkSquare: isDarkSquare,
  formatMove: formatMove,
  parseMoveStats: parseMoveStats,
  formatTime: formatTime
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDFmNjU4YjgwM2UzNWZkMjgzZDUiLCJ3ZWJwYWNrOi8vLy4vanMvYml0Ym9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9tb3ZlbWVudHMvbWFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iaXRib2FyZC9iaXRib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3ZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9tb3ZlbWVudHMvc3RlcF9tb3ZlLmpzIiwid2VicGFjazovLy8uL2pzL3VpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYml0Ym9hcmQvaW50MzJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iaXRib2FyZC9tYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3ZlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvcGF3bnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2tuaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvYmlzaG9wLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9yb29rLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9xdWVlbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMva2luZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2VhY2hfcGllY2VfdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wb3NpdGlvbi96aGFzaF9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvbW92ZV9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvdHJhbnNwb3NfdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkva2lsbGVyX21vdmVfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9haS9wZXJmX21vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdWkvdXRpbC5qcyJdLCJuYW1lcyI6WyJCaXRCb2FyZCIsInJlcXVpcmUiLCJNYXNrcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJCQk1hc2tzIiwiQ29uc3RhbnRzIiwiUGF3bnMiLCJLbmlnaHQiLCJCaXNob3AiLCJSb29rIiwiUXVlZW4iLCJLaW5nIiwiUGllY2VDb252IiwiZWFjaFBpZWNlVHlwZSIsIkRpcnMiLCJQVXRpbHMiLCJUeXBlcyIsIlBBV05TIiwiS05JR0hUUyIsIkJJU0hPUFMiLCJST09LUyIsIlFVRUVOUyIsIktJTkdTIiwiUFR5cGVzIiwiQ29sb3JzIiwiUGllY2VUeXBlSFRNTCIsIldISVRFIiwiQkxBQ0siLCJQaWVjZVR5cGVMZXR0ZXJzIiwiRElSUyIsInN0ZXBNb3ZlIiwiZ2VuZXJhdGVTdGVwQml0Qm9hcmRzIiwiZGlycyIsInJlcyIsInBvcyIsImluaXRpYWwiLCJwb3NSZXMiLCJhZGRNb3ZlIiwiY3VyclJlcyIsImRpciIsIm9yIiwiZnJvbVBvcyIsInJlZHVjZSIsInB1c2giLCJLTklHSFRfTU9WRVMiLCJLSU5HX01PVkVTIiwiU0xJREVfTU9WRVMiLCJtb3ZlcyIsImNvbElkeCIsInJvd0lkeCIsImRpYWdJZHgiLCJhbnRpRGlhZ0lkeCIsIk1hdGgiLCJmbG9vciIsIk5PUlRIIiwiQ09MUyIsImFuZCIsIk5PUlRIX09GX1JPVyIsIlNPVVRIIiwiU09VVEhfT0ZfUk9XIiwiRUFTVCIsIlJPV1MiLCJFQVNUX09GX0NPTCIsIldFU1QiLCJXRVNUX09GX0NPTCIsIk5PRUEiLCJESUFHUyIsIlNPV0UiLCJOT1dFIiwiQU5USV9ESUFHUyIsIlNPRUEiLCJpc1Bvc1JheSIsImZpbmRVbmJsb2NrZWQiLCJvY2N1cGllZCIsImRpckJCIiwiYmxvY2tpbmciLCJibG9ja2luZ1BvcyIsImlzWmVybyIsImJpdFNjYW5Gb3J3YXJkIiwiYml0U2NhblJldmVyc2UiLCJ4b3IiLCJob3JpelZlcnQiLCJub3RPd25QaWVjZXMiLCJkaWFnIiwiSW50MzJVdGlscyIsImxvdyIsImhpZ2giLCJvdGhlciIsIm51bUJpdHMiLCJuZXdMb3dCaXRzIiwibmV3SGlnaEJpdHMiLCJjb3VudCIsImludDMyIiwicG9wQ291bnQzMiIsImJpdFNjYW5Gb3J3YXJkMzIiLCJCb29sZWFuIiwiYml0U2NhblJldmVyc2UzMiIsImNiIiwiY2xlYXJMZWFzdFNpZ0JpdDMyIiwicm93IiwicG93IiwicG9zVmFsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNldEJpdCIsInBvc2l0aW9ucyIsImZvckVhY2giLCJjb2xOdW0iLCJyb3dOdW0iLCJwb3NNYXgiLCJzdGFydFBvcyIsIk1vdmUiLCJmcm9tIiwidG8iLCJ0eXBlIiwicGllY2UiLCJjYXB0UGllY2UiLCJ2YWwiLCJnZXRGcm9tIiwiZ2V0VG8iLCJnZXRUeXBlIiwicGllY2VUeXBlIiwiZ2V0UGllY2UiLCJjYXB0UGllY2VUeXBlIiwiZ2V0Q2FwdFBpZWNlIiwiaXNQcm9tbyIsImlzQ2FzdGxlIiwiTlBST01PIiwiQlBST01PIiwiUlBST01PIiwiUVBST01PIiwiaW5jbHVkZXMiLCJDU1RMX0tJTkciLCJDU1RMX1FVRUVOIiwibmV3TW92ZSIsIk1vdmVUeXBlcyIsIm5vU28iLCJlYVdlIiwic2hpZnRMZWZ0Iiwic2hpZnRSaWdodCIsIkNvbHNGaWxlcyIsIkZpbGVzQ29scyIsImZpbGUiLCJjb2wiLCJSb3dzUmFua3MiLCJSYW5rc1Jvd3MiLCJyYW5rIiwiR2FtZVN0YXR1cyIsIlRocmVlRm9sZFJlcCIsIk1vdmVMaW1pdEV4YyIsIkNoZWNrbWF0ZSIsIlN0YWxlbWF0ZSIsIlBsYXllclR1cm4iLCJBSVR1cm4iLCJTZWxlY3RvcnMiLCJCT0FSRF9JRCIsIlBJRUNFX0NMQVNTIiwiU1FVQVJFX0NMQVNTIiwiUkFOS19DTEFTUyIsIkZJTEVfQ0xBU1MiLCJVSSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidWkiLCJydW4iLCJQb3NpdGlvbiIsIkFJIiwiVXRpbCIsImFpIiwic2V0dXBCdXR0b25zIiwicmVzZXQiLCJlbXB0eSIsInRleHQiLCJwb3NpdGlvbiIsInBsYXllckNvbG9yIiwicGFyc2VJbnQiLCJhaVRoaW5raW5nVGltZSIsInBhcnNlRmxvYXQiLCJzZXRUaGlua2luZ1RpbWUiLCJkcmF3Qm9hcmQiLCJwbGF5TmV4dFR1cm4iLCJjbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhc0NsYXNzIiwidW5tYWtlUGxheWVyTW92ZSIsImFpTW92ZSIsInNsaWRlciIsInZhbHVlIiwidGhpbmtpbmdUaW1lIiwibWluIiwicm91bmQiLCJtYXgiLCJzdGVwIiwic2xpZGUiLCJFIiwiZm9ybWF0VGltZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwcmV2TW92ZXMiLCJjdXJyTW92ZXMiLCJnZW5lcmF0ZUxlZ2FsTW92ZXMiLCJpc1RocmVlZm9sZFJlcGV0aXRpb24iLCJzdGF0dXMiLCJpc01vdmVMaW1pdEV4Y2VlZGVkIiwiaW5DaGVjayIsInR1cm4iLCJhY3RpdmF0ZUJ0bnMiLCJzdGF0dXNFbCIsInVubWFrZVByZXZNb3ZlIiwic2hpZnRGcm9tTW92ZXNMaXN0IiwidXBkYXRlUGllY2VzIiwic2V0dXBQbGF5ZXJNb3ZlIiwibW92ZVN0ciIsIm1vdmVTdGF0cyIsImRlcHRoIiwicnVuVGltZSIsImV4cGxvcmVkUG9zaXRpb25zIiwibWFpblNlYXJjaE5vZGVzIiwicVNlYXJjaE5vZGVzIiwidFRhYmxlSGl0cyIsIm1vdmVEYXRhIiwibW92ZUl0ZW0iLCJmb3JtYXRNb3ZlIiwibW92ZSIsImNvbG9yIiwiYXBwZW5kIiwic3RhdHMiLCJwb3B1bGF0ZVN0YXRzVGFibGUiLCJtb3Zlc0hpc3RvcnkiLCJuZXdNb3ZlSXRlbSIsImNyZWF0ZU1vdmVJdGVtIiwicHJlcGVuZCIsInJlbW92ZSIsIm5ld1JvdyIsImZpbGVSYW5rIiwibmV3U3F1YXJlIiwic3F1YXJlQ29sb3IiLCJpc0RhcmtTcXVhcmUiLCJib2FyZCIsIm5ld1JhbmtSb3ciLCJyb3dzUmFua3MiLCJzbGljZSIsInJldmVyc2UiLCJnZW5lcmF0ZVNxdWFyZSIsImdlbmVyYXRlRmlsZUhlYWRlciIsInBpZWNlVHlwZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwaWVjZXMiLCJuZXdQaWVjZSIsImR1cCIsInBvcDFCaXRzIiwiaGFzU2V0Qml0IiwiaHRtbCIsImZpbGVSYW5rRnJvbVBvcyIsImFkZFRvTW92ZXNMaXN0IiwibWFrZU1vdmUiLCJkZWFjdGl2YXRlQnRucyIsInJlc2V0U3RhdHVzIiwiaXNHYW1lT3ZlciIsInNldFRpbWVvdXQiLCJhaU1vdmVEYXRhIiwiY2hvb3NlTW92ZSIsImFuaW1hdGVNb3ZlIiwicGVyZm9ybWFuY2UiLCJwaWVjZUVsIiwiY2FwdE9mZnNldCIsIm9mZnNldCIsImNzcyIsImxlZnQiLCJ0b3AiLCJmYWRlT3V0Iiwib2xkT2Zmc2V0IiwiYXBwZW5kVG8iLCJuZXdPZmZzZXQiLCJhbmltUGllY2UiLCJjbG9uZSIsImhpZGUiLCJhbmltYXRlIiwic2hvdyIsIm1vdmVzRGF0YSIsIm1hcCIsImdldERhdGEiLCJtb3ZlRnJvbVRvcyIsIm1vdmVUb0Zyb21zIiwiYWN0aXZhdGVEcmFnZ2FibGVQaWVjZXMiLCJhY3RpdmF0ZURyb3BwYWJsZVNxdWFyZXMiLCJmcm9tRmlsZVJhbmsiLCJrZXlzIiwiZHJhZ2dhYmxlIiwiY29udGFpbm1lbnQiLCJyZXZlcnQiLCJyZXZlcnREdXJhdGlvbiIsIm1vdXNlZW50ZXIiLCJ0b1BvcyIsIm1vdXNlbGVhdmUiLCJkZXN0U3EiLCJvcmlnaW5TcXVhcmUiLCJvcmlnaW5Qb3MiLCJzZWxlY3RlZE1vdmUiLCJkcm9wcGFibGUiLCJhY2NlcHQiLCJwYXJlbnQiLCJhdHRyIiwicG9zRnJvbUZpbGVSYW5rIiwiZHJvcCIsIm1ha2VQbGF5ZXJNb3ZlIiwiY2hpbGRyZW4iLCJzZWxlY3RlZE1vdmVzIiwiZmlsdGVyIiwiY3JlYXRlUHJvbW9XaW5kb3ciLCJwcm9tb01vdmVzIiwicHJvbW9EaXYiLCJwcm9tb1BpZWNlcyIsImNyZWF0ZVByb21vUGllY2VzIiwicHJvbW9XaW5Sb3ciLCJQcm9tb3NQVHlwZXMiLCJuZXdQcm9tb1BpZWNlIiwicHJvbW9Nb3ZlIiwiY3JlYXRlUHJvbW9QaWVjZSIsInBUeXBlIiwicHJvbW9QaWVjZSIsInBpZWNlUG9zSGFzaEtleXMiLCJlcFBvc0hhc2hLZXlzIiwiY2FzdGxlSGFzaEtleXMiLCJ0dXJuSGFzaEtleXMiLCJkZWZhdWx0RmVuU3RyIiwiZmVuU3RyIiwic3BsaXQiLCJ0dXJuTGV0dGVyIiwiY2FzdGxlUmlnaHRzU3RyIiwiZXBTcSIsImhhbGZNb3ZlQ2xvY2siLCJmdWxsTW92ZUNsb2NrIiwiZmVuUG9zaXRpb25zVG9QaWVjZUJCcyIsImNhc3RsZVJpZ2h0cyIsInBhcnNlQ2FzdGxlUmlnaHRzU3RyIiwiZXBCQiIsInBhcnNlRXBTdHIiLCJwcmV2U3RhdGVzIiwicFR5cGVzTG9jYXRpb25zIiwiY3JlYXRlUFR5cGVzTG9jYXRpb25zIiwicFBvc0hhc2giLCJjcmVhdGVQaWVjZXNQb3NIYXNoIiwic3RhdGVIYXNoIiwiY3JlYXRlU3RhdGVIYXNoIiwic2V0VHVybiIsImdldE90aGVyQ29sb3IiLCJwb3NpdGlvbkNvdW50cyIsImFkZFBvc2l0aW9uQ291bnQiLCJyb3dTdHJzIiwicGllY2VCQnMiLCJjcmVhdGVFbXB0eVBpZWNlc0JCcyIsInJvd1N0ciIsImNoYXIiLCJ0ZXN0IiwibGV0dGVyVG9UeXBlIiwibGV0dGVyVG9Db2xvciIsInJpZ2h0c1BvcyIsInJpZ2h0c0xldHRlciIsImVwU3RyIiwiZ2V0UGllY2VBdCIsInR5cGVzIiwiaWR4Iiwid2hpdGVzUG9zIiwiYmxhY2tzUG9zIiwiY2FzdGxlUmlnaHRzUG9zIiwib3BwIiwiaW5jbHVkZVF1aWV0IiwiY2hlY2tOU0RyYXciLCJpc05vblN0YWxlbWF0ZURyYXciLCJhZGRQYXduTW92ZXMiLCJhZGROb3JtYWxNb3ZlcyIsImFkZEtpbmdNb3ZlcyIsInBzZXVkb01vdmVzIiwiZ2VuZXJhdGVQc2V1ZG9Nb3ZlcyIsImlzTGVnYWwiLCJsZWdhbHMiLCJwc2V1ZG9Nb3ZlIiwidGVzdE1vdmUiLCJ0ZXN0c0xlZ2FsIiwiZ2V0SGFzaCIsInBhd25zUG9zIiwiZ2V0Q29sb3JQaWVjZVNldCIsIm5vdE9jY3VwaWVkIiwiZ2V0T2NjdXBpZWQiLCJub3QiLCJwYXduU2luZ2xlUHVzaGVzIiwic2luZ2xlUHVzaCIsImFkZFBhd25Nb3ZlU2V0IiwicGF3bkRvdWJsZVB1c2hlcyIsImRvdWJsZVB1c2giLCJvcHBQb3NpdGlvbnMiLCJwYXduTGVmdEF0dGFja3MiLCJhdHRhY2tzTGVmdCIsInBhd25SaWdodEF0dGFja3MiLCJhdHRhY2tzUmlnaHQiLCJnZXROb3RPY2N1cGllZEJ5Iiwia25pZ2h0c1BvcyIsImtuaWdodE1vdmVzIiwiYWRkTm9ybWFsTW92ZVNldCIsImRlc3RpbmF0aW9ucyIsInNsaWRpbmdUeXBlIiwia2luZ1BvcyIsIm5vcm1hbE1vdmVzIiwiYWRkQ2FzdGxlTW92ZXMiLCJuZXdQb3NpdGlvbnMiLCJzaGlmdEFtdCIsImlzQ2FwdHVyZSIsImlzRGJsUHVzaCIsImNhcHR1cmVkIiwiREJMX1BQVVNIIiwiRVBfQ0FQVCIsIlBST01PX01BU0tTIiwiYWRkUHJvbW9zIiwiTk9STUFMIiwicHJvbW9UeXBlIiwibmV3UG9zIiwiY2FwdFR5cGUiLCJ0dXJuQ2FzdGxlUmlnaHRzIiwiZ2V0Q2FzdGxlUmlnaHRzIiwiSU5JVF9QT1MiLCJjYW5DYXN0bGUiLCJzZXROZXdTdGF0ZSIsImV4ZWNNb3ZlVHlwZSIsInN3YXBUdXJuIiwiY2xlYXJQaWVjZUF0IiwibW92ZVBpZWNlIiwidW5kbyIsInNldFBpZWNlQXQiLCJpc0xlZ2FsQ2FzdGxlIiwiY2FzdGxlVHlwZSIsImlzQXR0YWNrZWQiLCJwb3NCQiIsIm9wcENvbG9yIiwicGF3bnMiLCJxdWVlbkJCIiwiYWRkUHJldlN0YXRlIiwiYWRqdXN0Q2FzdGxlUmlnaHRzIiwic2V0TmV3RXBTdGF0ZSIsInVwZGF0ZUNsb2NrIiwic3RhdGUiLCJjbGVhckNhc3RsZVJpZ2h0cyIsImNsZWFyUmlnaHRzUG9zIiwiY2xlYXJSaWdodHNNYXNrIiwiZXBQb3MiLCJjYXB0dXJlZFBvcyIsImN1cnJIYXNoIiwicHJldk1vdmUiLCJwb3AiLCJzdWJ0cmFjdFBvc2l0aW9uQ291bnQiLCJyZXZlcnNlTW92ZVR5cGUiLCJyZXN0b3JlUHJldlN0YXRlIiwicHJldlN0YXRlIiwiY2xlYXJCaXQiLCJnZW5lcmF0ZU1TQlRhYmxlIiwiaW50IiwibG9nMiIsIm1vc3RTaWdCaXRUYWJsZSIsIkZVTExfQk9BUkQiLCJjb2xzIiwiZnJvbUNvbCIsInJvd3MiLCJmcm9tUm93IiwiZGlhZ3MiLCJ1cHBlclJpZ2h0RGlhZyIsImFudGlEaWFncyIsInVwcGVyTGVmdERpYWciLCJiYiIsInR5cGVzQXJyIiwiSU5JVF9NQVNLUyIsInBvc2l0aW9uVmFsdWVzIiwib3BwUGllY2VzIiwib25lUHVzaCIsImNhc3RsZVNsaWRlIiwicG9wQ291bnQiLCJwaWVjZVRvTGV0dGVyIiwidG9VcHBlckNhc2UiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsInJhbmRTaWduZWQzMkJpdCIsInBvc2l0aXZlIiwicmFuZG9tIiwibmV3UG9zS2V5cyIsImFkZFBUeXBlS2V5cyIsInJpZ2h0c0lkeCIsIk1vdmVTZWFyY2giLCJwcmV2UGVyZm9ybWFuY2UiLCJhdmFpbGFibGVNb3ZlcyIsIm1vdmVTZWFyY2giLCJiZXN0TW92ZSIsImZpbmRCZXN0IiwicGVyZlJlc3VsdHMiLCJnZXRQZXJmb3JtYW5jZSIsIlRyYW5zcG9zVGFibGUiLCJUQUJMRV9TQ09SRV9UWVBFUyIsIktpbGxlck1vdmVMaXN0IiwiUGVyZk1vbml0b3IiLCJFQVJMWV9FWElUIiwiaW5pdEF2YWlsYWJsZSIsInRyYW5zUG9zVGFibGUiLCJraWxsZXJNb3ZlTGlzdCIsInBlcmZNb25pdG9yIiwic2V0U3RhcnRUaW1lIiwiZW5kVGltZSIsIkRhdGUiLCJub3ciLCJtYXhEZXB0aCIsImFkZFNsb3QiLCJuZWdhTWF4IiwiSW5maW5pdHkiLCJzZXREZXB0aCIsInNldEVuZFRpbWUiLCJwcmludFJlc3VsdHMiLCJjdXJyTm9kZUVudHJ5IiwiZ2V0RW50cnkiLCJnZXRSZXN1bHRzIiwiYWxwaGEiLCJiZXRhIiwibG9nUXVpZXNjZW50Tm9kZSIsInN0YW5kUGF0VmFsIiwiZXZhbHVhdGUiLCJjYWxjdWxhdGVNb3ZlT3JkZXJTY29yZSIsInNjb3JlIiwic29ydE1vdmVzIiwibW92ZUlkeCIsInF1aWVzY2VuY2VTZWFyY2giLCJwcmV2QWxwaGEiLCJlbnRyeSIsImxvZ1RhYmxlSGl0IiwiRVhBQ1QiLCJMT1dFUkJPVU5EIiwiVVBQRVJCT1VORCIsImxvZ01haW5TZWFyY2hOb2RlIiwicHJldkJlc3RNb3ZlIiwic2libGluZ0tpbGxlck1vdmVzIiwiZ2V0U2libGluZ01vdmVzIiwiY2FuTW92ZSIsInJlc3VsdCIsImJlc3RTY29yZSIsInN0b3JlRW50cnkiLCJjYWxjdWxhdGVTY29yZSIsImNyZWF0ZU1vdmVTY29yZXMiLCJzb3J0IiwibW92ZUEiLCJtb3ZlQiIsIm1vdmVTY29yZSIsIm1hdGVyaWFsU2NvcmUiLCJzY29yZU1hdGVyaWFsIiwicGllY2VQb3NpdGlvblNjb3JlIiwic2NvcmVQaWVjZVBvc2l0aW9ucyIsInBpZWNlUG9zaXRpb25zIiwiU0NPUkVfVFlQRVMiLCJ0YWJsZSIsImtleSIsImRldGVybWluZVNjb3JlVHlwZSIsImxpc3QiLCJtYXhQZXJMZXZlbCIsIkFycmF5IiwiZGlzdEZyb21Sb290IiwidGFibGVIaXRzIiwic3RhcnRUaW1lIiwicGFyc2VN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QWlCZ2QsUUFBUUUsT0FBUixDQUFnQixHQUFoQixJQUF1QixDQUEvQyxFQUFrRDtBQUNoREYsZUFBVyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT0EsUUFBUWhkLE1BQVIsR0FBaUJnZCxRQUFRRSxPQUFSLENBQWdCLEdBQWhCLElBQXVCLENBQS9DLEVBQWtEO0FBQ2hERixjQUFVQSxRQUFRcFUsS0FBUixDQUFjLENBQWQsRUFBaUJvVSxRQUFRaGQsTUFBUixHQUFpQixDQUFsQyxDQUFWO0FBQ0Q7O0FBRUQsU0FBT2dkLE9BQVA7QUFDRDs7QUFFRHRqQixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZnVCxrQ0FEZTtBQUVmbEQsa0NBRmU7QUFHZmpCLDRCQUhlO0FBSWZmLHdCQUplO0FBS2ZvVixnQ0FMZTtBQU1mL1c7QUFOZSxDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMWY2NThiODAzZTM1ZmQyODNkNSIsImNvbnN0IEJpdEJvYXJkID0gcmVxdWlyZSgnLi9iaXRib2FyZC5qcycpO1xuY29uc3QgTWFza3MgPSByZXF1aXJlKCcuL21hc2tzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCaXRCb2FyZCxcbiAgQkJNYXNrczogTWFza3MsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYml0Ym9hcmQvaW5kZXguanMiLCIvLyBjb25zdCB7IFdoaXRlUGF3bnMsIEJsYWNrUGF3bnMgfSA9IHJlcXVpcmUoJy4vcGF3bnMuanMnKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5jb25zdCBQYXducyA9IHJlcXVpcmUoJy4vcGF3bnMuanMnKTtcbmNvbnN0IEtuaWdodCA9IHJlcXVpcmUoJy4va25pZ2h0LmpzJyk7XG5jb25zdCBCaXNob3AgPSByZXF1aXJlKCcuL2Jpc2hvcC5qcycpO1xuY29uc3QgUm9vayA9IHJlcXVpcmUoJy4vcm9vay5qcycpO1xuY29uc3QgUXVlZW4gPSByZXF1aXJlKCcuL3F1ZWVuLmpzJyk7XG5jb25zdCBLaW5nID0gcmVxdWlyZSgnLi9raW5nLmpzJyk7XG5jb25zdCBQaWVjZUNvbnYgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zLmpzJyk7XG5jb25zdCBlYWNoUGllY2VUeXBlID0gcmVxdWlyZSgnLi9lYWNoX3BpZWNlX3R5cGUuanMnKTtcbmNvbnN0IERpcnMgPSByZXF1aXJlKCcuL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzJyk7XG5cbmNvbnN0IFBVdGlscyA9IHtcbiAgW0NvbnN0YW50cy5UeXBlcy5QQVdOU106IFBhd25zLFxuICBbQ29uc3RhbnRzLlR5cGVzLktOSUdIVFNdOiBLbmlnaHQsXG4gIFtDb25zdGFudHMuVHlwZXMuQklTSE9QU106IEJpc2hvcCxcbiAgW0NvbnN0YW50cy5UeXBlcy5ST09LU106IFJvb2ssXG4gIFtDb25zdGFudHMuVHlwZXMuUVVFRU5TXTogUXVlZW4sXG4gIFtDb25zdGFudHMuVHlwZXMuS0lOR1NdOiBLaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUFR5cGVzOiBDb25zdGFudHMuVHlwZXMsXG4gIENvbG9yczogQ29uc3RhbnRzLkNvbG9ycyxcbiAgUGllY2VUeXBlSFRNTDogQ29uc3RhbnRzLlBpZWNlVHlwZUhUTUwsXG4gIFBVdGlscyxcbiAgZWFjaFBpZWNlVHlwZSxcbiAgRGlycyxcbiAgUGllY2VDb252XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2luZGV4LmpzIiwiY29uc3QgQ29sb3JzID0ge1xuICBXSElURTogMCxcbiAgQkxBQ0s6IDFcbn07XG5cbmNvbnN0IFR5cGVzID0ge1xuICBQQVdOUzogMixcbiAgS05JR0hUUzogMyxcbiAgQklTSE9QUzogNCxcbiAgUk9PS1M6IDUsXG4gIFFVRUVOUzogNixcbiAgS0lOR1M6IDdcbn07XG5cbmNvbnN0IFBpZWNlVHlwZUxldHRlcnMgPSB7XG4gIFtUeXBlcy5QQVdOU106ICdwJyxcbiAgW1R5cGVzLktOSUdIVFNdOiAnbicsXG4gIFtUeXBlcy5CSVNIT1BTXTogJ2InLFxuICBbVHlwZXMuUk9PS1NdOiAncicsXG4gIFtUeXBlcy5RVUVFTlNdOiAncScsXG4gIFtUeXBlcy5LSU5HU106ICdrJyxcbn07XG5cbmNvbnN0IFBpZWNlVHlwZUhUTUwgPSB7XG4gIFtDb2xvcnMuQkxBQ0tdOiB7XG4gICAgW1R5cGVzLlBBV05TXTogXCImIzk4MjM7XCIsXG4gICAgW1R5cGVzLktOSUdIVFNdOiBcIiYjOTgyMjtcIixcbiAgICBbVHlwZXMuQklTSE9QU106IFwiJiM5ODIxO1wiLFxuICAgIFtUeXBlcy5ST09LU106IFwiJiM5ODIwO1wiLFxuICAgIFtUeXBlcy5RVUVFTlNdOiBcIiYjOTgxOTtcIixcbiAgICBbVHlwZXMuS0lOR1NdOiBcIiYjOTgxODtcIlxuICB9LFxuICBbQ29sb3JzLldISVRFXToge1xuICAgIFtUeXBlcy5QQVdOU106IFwiJiM5ODE3O1wiLFxuICAgIFtUeXBlcy5LTklHSFRTXTogXCImIzk4MTY7XCIsXG4gICAgW1R5cGVzLkJJU0hPUFNdOiBcIiYjOTgxNTtcIixcbiAgICBbVHlwZXMuUk9PS1NdOiBcIiYjOTgxNDtcIixcbiAgICBbVHlwZXMuUVVFRU5TXTogXCImIzk4MTM7XCIsXG4gICAgW1R5cGVzLktJTkdTXTogXCImIzk4MTI7XCJcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IFR5cGVzLCBDb2xvcnMsIFBpZWNlVHlwZUxldHRlcnMsIFBpZWNlVHlwZUhUTUwgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9jb25zdGFudHMuanMiLCJjb25zdCBESVJTID0ge1xuICAnTk9SVEgnOiAwLFxuICAnU09VVEgnOiAxLFxuICAnRUFTVCc6IDIsXG4gICdXRVNUJzogMyxcbiAgJ05PRUEnOiA0LFxuICAnTk9XRSc6IDUsXG4gICdTT0VBJzogNixcbiAgJ1NPV0UnOiA3XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERJUlM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvbW92ZW1lbnRzL2Rpcl9jb25zdGFudHMuanMiLCJjb25zdCB7IEJpdEJvYXJkLCBCQk1hc2tzIH0gPSByZXF1aXJlKCcuLi8uLi9iaXRib2FyZCcpO1xuY29uc3QgRGlycyA9IHJlcXVpcmUoJy4vZGlyX2NvbnN0YW50cy5qcycpO1xuY29uc3Qgc3RlcE1vdmUgPSByZXF1aXJlKCcuL3N0ZXBfbW92ZS5qcycpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0ZXBCaXRCb2FyZHMoZGlycykge1xuICBjb25zdCByZXMgPSBbXTtcbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBpbml0aWFsO1xuICBsZXQgcG9zUmVzO1xuXG4gIGNvbnN0IGFkZE1vdmUgPSAoY3VyclJlcywgZGlyKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJSZXMub3Ioc3RlcE1vdmUoaW5pdGlhbCwgZGlyWzBdLCBkaXJbMV0pKTtcbiAgfTtcblxuICB3aGlsZSAocG9zIDwgNjQpIHtcbiAgICBpbml0aWFsID0gQml0Qm9hcmQuZnJvbVBvcyhwb3MpO1xuICAgIHBvc1JlcyA9IGRpcnMucmVkdWNlKChjdXJyUmVzLCBkaXIpID0+IGFkZE1vdmUoY3VyclJlcywgZGlyKSwgbmV3IEJpdEJvYXJkKCkpO1xuICAgIHJlcy5wdXNoKHBvc1Jlcyk7XG4gICAgcG9zKys7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5jb25zdCBLTklHSFRfTU9WRVMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGlycyA9IFtbMSwgMl0sIFsxLCAtMl0sXG4gICAgICAgICAgICAgICAgWzIsIDFdLCBbMiwgLTFdLFxuICAgICAgICAgICAgICAgIFstMSwgMl0sIFstMSwgLTJdLFxuICAgICAgICAgICAgICAgIFstMiwgMV0sIFstMiwgLTFdXTtcblxuICByZXR1cm4gZ2VuZXJhdGVTdGVwQml0Qm9hcmRzKGRpcnMpO1xufSgpO1xuXG5jb25zdCBLSU5HX01PVkVTID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpcnMgPSBbWzEsIDBdLCBbMSwgMV0sXG4gICAgICAgICAgICAgICAgWzEsIC0xXSxbLTEsIDBdLFxuICAgICAgICAgICAgICAgIFstMSwgMV0sIFstMSwgLTFdLFxuICAgICAgICAgICAgICAgIFswLCAtMV0sIFswLCAxXV07XG5cbiAgcmV0dXJuIGdlbmVyYXRlU3RlcEJpdEJvYXJkcyhkaXJzKTtcbn0oKTtcblxuY29uc3QgU0xJREVfTU9WRVMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHBvcyA9IDA7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBsZXQgbW92ZXM7XG4gIGxldCBjb2xJZHg7XG4gIGxldCByb3dJZHg7XG4gIGxldCBkaWFnSWR4O1xuICBsZXQgYW50aURpYWdJZHg7XG5cbiAgd2hpbGUgKHBvcyA8IDY0KSB7XG4gICAgbW92ZXMgPSB7fTtcbiAgICByb3dJZHggPSBNYXRoLmZsb29yKHBvcyAvIDgpO1xuICAgIGNvbElkeCA9IHBvcyAlIDg7XG4gICAgZGlhZ0lkeCA9IChwb3MgPCByb3dJZHggKiA5KSA/IChwb3MgJSA5KSAtIDIgOiAocG9zICUgOSkgKyA3O1xuICAgIGlmIChwb3MgPT09IDYzKSB7XG4gICAgICBhbnRpRGlhZ0lkeCA9IDE0O1xuICAgIH0gZWxzZSB7XG4gICAgICBhbnRpRGlhZ0lkeCA9IChwb3MgPCAocm93SWR4ICsgMSkgKiA3KSA/IChwb3MgJSA3KSA6IChwb3MgJSA3KSArIDc7XG4gICAgfVxuICAgIG1vdmVzW0RpcnMuTk9SVEhdID0gQkJNYXNrcy5DT0xTW2NvbElkeF0uYW5kKEJCTWFza3MuTk9SVEhfT0ZfUk9XW3Jvd0lkeF0pO1xuICAgIG1vdmVzW0RpcnMuU09VVEhdID0gQkJNYXNrcy5DT0xTW2NvbElkeF0uYW5kKEJCTWFza3MuU09VVEhfT0ZfUk9XW3Jvd0lkeF0pO1xuICAgIG1vdmVzW0RpcnMuRUFTVF0gPSBCQk1hc2tzLlJPV1Nbcm93SWR4XS5hbmQoQkJNYXNrcy5FQVNUX09GX0NPTFtjb2xJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLldFU1RdID0gQkJNYXNrcy5ST1dTW3Jvd0lkeF0uYW5kKEJCTWFza3MuV0VTVF9PRl9DT0xbY29sSWR4XSk7XG4gICAgbW92ZXNbRGlycy5OT0VBXSA9IEJCTWFza3MuRElBR1NbZGlhZ0lkeF0uYW5kKEJCTWFza3MuTk9SVEhfT0ZfUk9XW3Jvd0lkeF0pO1xuICAgIG1vdmVzW0RpcnMuU09XRV0gPSBCQk1hc2tzLkRJQUdTW2RpYWdJZHhdLmFuZChCQk1hc2tzLlNPVVRIX09GX1JPV1tyb3dJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLk5PV0VdID0gQkJNYXNrcy5BTlRJX0RJQUdTW2FudGlEaWFnSWR4XS5hbmQoQkJNYXNrcy5OT1JUSF9PRl9ST1dbcm93SWR4XSk7XG4gICAgbW92ZXNbRGlycy5TT0VBXSA9IEJCTWFza3MuQU5USV9ESUFHU1thbnRpRGlhZ0lkeF0uYW5kKEJCTWFza3MuU09VVEhfT0ZfUk9XW3Jvd0lkeF0pO1xuICAgIHJlcy5wdXNoKG1vdmVzKTtcbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBLTklHSFRfTU9WRVMsXG4gIEtJTkdfTU9WRVMsXG4gIFNMSURFX01PVkVTLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9tb3ZlbWVudHMvbWFza3MuanMiLCJjb25zdCB7IEJpdEJvYXJkLCBCQk1hc2tzIH0gPSByZXF1aXJlKCcuLi8uLi9iaXRib2FyZCcpO1xuY29uc3QgeyBTTElERV9NT1ZFUyB9ID0gcmVxdWlyZSgnLi9tYXNrcy5qcycpO1xuY29uc3QgRGlycyA9IHJlcXVpcmUoJy4vZGlyX2NvbnN0YW50cy5qcycpO1xuXG5jb25zdCBpc1Bvc1JheSA9IHtcbiAgW0RpcnMuTk9SVEhdOiB0cnVlLFxuICBbRGlycy5FQVNUXTogdHJ1ZSxcbiAgW0RpcnMuTk9FQV06IHRydWUsXG4gIFtEaXJzLk5PV0VdOiB0cnVlLFxuICBbRGlycy5TT1VUSF06IGZhbHNlLFxuICBbRGlycy5XRVNUXTogZmFsc2UsXG4gIFtEaXJzLlNPRUFdOiBmYWxzZSxcbiAgW0RpcnMuU09XRV06IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBmaW5kVW5ibG9ja2VkKHBvcywgb2NjdXBpZWQsIGRpcikge1xuICBjb25zdCBkaXJCQiA9IFNMSURFX01PVkVTW3Bvc11bZGlyXTtcbiAgY29uc3QgYmxvY2tpbmcgPSBkaXJCQi5hbmQob2NjdXBpZWQpO1xuICBsZXQgYmxvY2tpbmdQb3M7XG5cbiAgaWYgKGJsb2NraW5nLmlzWmVybygpKSB7XG4gICAgcmV0dXJuIGRpckJCO1xuICB9IGVsc2Uge1xuICAgIGJsb2NraW5nUG9zID0gaXNQb3NSYXlbZGlyXSA/IGJsb2NraW5nLmJpdFNjYW5Gb3J3YXJkKCkgOiBibG9ja2luZy5iaXRTY2FuUmV2ZXJzZSgpO1xuICAgIHJldHVybiBkaXJCQi54b3IoU0xJREVfTU9WRVNbYmxvY2tpbmdQb3NdW2Rpcl0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhvcml6VmVydChwb3MsIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpIHtcbiAgcmV0dXJuIFtEaXJzLk5PUlRILCBEaXJzLlNPVVRILCBEaXJzLkVBU1QsIERpcnMuV0VTVF0ucmVkdWNlKChyZXMsIGRpcikgPT4ge1xuICAgIHJldHVybiByZXMub3IoZmluZFVuYmxvY2tlZChwb3MsIG9jY3VwaWVkLCBkaXIpKTtcbiAgfSwgbmV3IEJpdEJvYXJkKCkpLmFuZChub3RPd25QaWVjZXMpO1xufVxuXG5mdW5jdGlvbiBkaWFnKHBvcywgb2NjdXBpZWQsIG5vdE93blBpZWNlcykge1xuICByZXR1cm4gW0RpcnMuTk9FQSwgRGlycy5OT1dFLCBEaXJzLlNPRUEsIERpcnMuU09XRV0ucmVkdWNlKChyZXMsIGRpcikgPT4ge1xuICAgIHJldHVybiByZXMub3IoZmluZFVuYmxvY2tlZChwb3MsIG9jY3VwaWVkLCBkaXIpKTtcbiAgfSwgbmV3IEJpdEJvYXJkKCkpLmFuZChub3RPd25QaWVjZXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaG9yaXpWZXJ0LFxuICBkaWFnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcyIsImNvbnN0IEludDMyVXRpbHMgPSByZXF1aXJlKCcuL2ludDMyVXRpbHMuanMnKTtcbi8vIEEgc3RhbmRhcmQgOHg4IGNoZXNzIGJvYXJkIGNhbiBiZSByZXByZXNlbnRlZCBieSBhIDY0Yml0IGludGVnZXIgKGJpdGJvYXJkKSxcbi8vIGluIHdoaWNoIGEgMSBtZWFucyB0aGUgcG9zaXRpb24gaXMgb2NjdXBpZWQsIGEgMCBtZWFucyBpdCdzIGVtcHR5XG5cbi8vIFdlIHVzZSBzZXZlcmFsIG9mIHRoZXNlIGJpdGJvYXJkcyB0byByZXByZXNlbnQgYSBjaGVzcyBwb3NpdGlvblxuLy8gZm9yIGV4YW1wbGUsIHRoZSBjdXJyZW50IHNldCBvZiBwaWVjZXMgaXMgcmVwcmVzZW50ZWQgYnkgYSBiaXRib2FyZFxuLy8gZm9yIGVhY2ggcGllY2UgdHlwZSBhbmQgY29sb3JcblxuLy8gU2luY2UgSmF2YXNjcmlwdCBkb2Vzbid0IHN1cHBvcnQgYml0d2lzZSBvcGVyYXRpb25zIGZvciA2NGJpdCBpbnRlZ2Vycyxcbi8vIHdlIGltcGxlbWVudCBtb3N0IG9mIHRob3NlIG9wZXJhdGlvbnMgaGVyZSwgc2VwYXJhdGluZyB0aGUgNjRiaXQgaW50XG4vLyBpbnRvIGl0cyBsb3cgMzJiaXQgYW5kIGhpZ2ggMzJiaXQgY29tcG9uZW50c1xuXG4vLzU2IDU3IDU4IDU5IDYwIDYxIDYyIDYzXG4vLzQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1ICBeXG4vLzQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3ICB8XG4vLzMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IEhJR0hcbi8vMjQgMjUgMjYgMjcgMjggMjkgMzAgMzEgTE9XXG4vLzE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzICB8XG4vLyA4ICA5IDEwIDExIDEyIDEzIDE0IDE1ICB2XG4vLyAwICAxICAyICAzICA0ICA1ICA2ICA3XG5cbmNsYXNzIEJpdEJvYXJkIHtcbiAgY29uc3RydWN0b3IobG93LCBoaWdoKSB7XG4gICAgdGhpcy5sb3cgPSAobG93IHx8IDApID4+PiAwO1xuICAgIHRoaXMuaGlnaCA9IChoaWdoIHx8IDApID4+PiAwO1xuICB9XG5cbiAgYW5kKG90aGVyKSB7XG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh0aGlzLmxvdyAmIG90aGVyLmxvdywgdGhpcy5oaWdoICYgb3RoZXIuaGlnaCk7XG4gIH1cblxuICBvcihvdGhlcikge1xuICAgIHJldHVybiBuZXcgQml0Qm9hcmQodGhpcy5sb3cgfCBvdGhlci5sb3csIHRoaXMuaGlnaCB8IG90aGVyLmhpZ2gpO1xuICB9XG5cbiAgeG9yKG90aGVyKSB7XG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh0aGlzLmxvdyBeIG90aGVyLmxvdywgdGhpcy5oaWdoIF4gb3RoZXIuaGlnaCk7XG4gIH1cblxuICBub3QoKSB7XG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh+dGhpcy5sb3csIH50aGlzLmhpZ2gpO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuICh0aGlzLmxvdyA9PT0gb3RoZXIubG93ICYmIHRoaXMuaGlnaCA9PT0gb3RoZXIuaGlnaCk7XG4gIH1cblxuICBncmVhdGVyVGhhbihvdGhlcikge1xuICAgIHJldHVybiAodGhpcy5oaWdoID4gb3RoZXIuaGlnaCB8fCB0aGlzLmxvdyA+IG90aGVyLmxvdyk7XG4gIH1cblxuICBsZXNzVGhhbihvdGhlcikge1xuICAgIHJldHVybiAodGhpcy5oaWdoIDwgb3RoZXIuaGlnaCB8fCB0aGlzLmxvdyA8IG90aGVyLmxvdyk7XG4gIH1cblxuICBpc1plcm8oKSB7XG4gICAgcmV0dXJuICh0aGlzLmhpZ2ggPT09IDAgJiYgdGhpcy5sb3cgPT09IDApO1xuICB9XG5cbiAgc2hpZnRSaWdodChudW1CaXRzKSB7XG4gICAgbGV0IG5ld0xvd0JpdHMsIG5ld0hpZ2hCaXRzO1xuXG4gICAgaWYgKG51bUJpdHMgPD0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh0aGlzLmxvdywgdGhpcy5oaWdoKTtcbiAgICB9IGVsc2UgaWYgKG51bUJpdHMgPiA2Mykge1xuICAgICAgcmV0dXJuIG5ldyBCaXRCb2FyZCgpO1xuICAgIH0gZWxzZSBpZiAobnVtQml0cyA+PSAzMikge1xuICAgICAgbmV3TG93Qml0cyA9IHRoaXMuaGlnaCA+Pj4gKG51bUJpdHMgLSAzMik7XG4gICAgICBuZXdIaWdoQml0cyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xvd0JpdHMgPSAodGhpcy5sb3cgPj4+IG51bUJpdHMpIHwgKHRoaXMuaGlnaCA8PCAoMzIgLSBudW1CaXRzKSk7XG4gICAgICBuZXdIaWdoQml0cyA9IHRoaXMuaGlnaCA+Pj4gbnVtQml0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKG5ld0xvd0JpdHMsIG5ld0hpZ2hCaXRzKTtcbiAgfVxuXG4gIHNoaWZ0TGVmdChudW1CaXRzKSB7XG4gICAgbGV0IG5ld0xvd0JpdHMsIG5ld0hpZ2hCaXRzO1xuXG4gICAgaWYgKG51bUJpdHMgPD0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh0aGlzLmxvdywgdGhpcy5oaWdoKTtcbiAgICB9IGVsc2UgaWYgKG51bUJpdHMgPiA2Mykge1xuICAgICAgcmV0dXJuIG5ldyBCaXRCb2FyZCgpO1xuICAgIH0gZWxzZSBpZiAobnVtQml0cyA+PSAzMikge1xuICAgICAgbmV3TG93Qml0cyA9IDA7XG4gICAgICBuZXdIaWdoQml0cyA9ICh0aGlzLmxvdyA8PCAobnVtQml0cyAtIDMyKSkgPj4+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0xvd0JpdHMgPSAodGhpcy5sb3cgPDwgbnVtQml0cykgPj4+IDA7XG4gICAgICBuZXdIaWdoQml0cyA9ICAoKHRoaXMubG93ID4+PiAoMzIgLSBudW1CaXRzKSkgfCAodGhpcy5oaWdoIDw8IG51bUJpdHMpKSA+Pj4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKG5ld0xvd0JpdHMsIG5ld0hpZ2hCaXRzKTtcbiAgfVxuXG4gIHBvcENvdW50KCkge1xuICAgICAgcmV0dXJuIFt0aGlzLmxvdywgdGhpcy5oaWdoXS5yZWR1Y2UoKGNvdW50LCBpbnQzMikgPT4ge1xuICAgICAgICByZXR1cm4gY291bnQgKyBJbnQzMlV0aWxzLnBvcENvdW50MzIoaW50MzIpO1xuICAgICAgfSwgMCk7XG4gIH1cblxuICBzZXRCaXQocG9zKSB7XG4gICAgaWYgKHBvcyA+PSAzMiAmJiBwb3MgPCA2NCkge1xuICAgICAgdGhpcy5oaWdoID0gKHRoaXMuaGlnaCB8ICgxIDw8IChwb3MgLSAzMikpKSA+Pj4gMDtcbiAgICB9IGVsc2UgaWYgKHBvcyA+PSAwICYmIHBvcyA8IDMyKSB7XG4gICAgICB0aGlzLmxvdyA9ICh0aGlzLmxvdyB8ICgxIDw8IHBvcykpID4+PiAwO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQml0KHBvcykge1xuICAgIGlmIChwb3MgPj0gMzIpIHtcbiAgICAgIHRoaXMuaGlnaCA9ICh0aGlzLmhpZ2ggJiB+KDEgPDwgKHBvcyAtIDMyKSkpID4+PiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvdyA9ICh0aGlzLmxvdyAmIH4oMSA8PCBwb3MpKSA+Pj4gMDtcbiAgICB9XG4gIH1cblxuICBiaXRTY2FuRm9yd2FyZCgpIHtcbiAgICBpZiAodGhpcy5sb3cpIHtcbiAgICAgIHJldHVybiBJbnQzMlV0aWxzLmJpdFNjYW5Gb3J3YXJkMzIodGhpcy5sb3cpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oaWdoKSB7XG4gICAgICByZXR1cm4gSW50MzJVdGlscy5iaXRTY2FuRm9yd2FyZDMyKHRoaXMuaGlnaCkgKyAzMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaGFzU2V0Qml0KHBvcykge1xuICAgIGlmIChwb3MgPCAzMikge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5sb3cgJiAoMSA8PCBwb3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5oaWdoICYgKDEgPDwgKHBvcyAtIDMyKSkpO1xuICAgIH1cbiAgfVxuXG4gIGJpdFNjYW5SZXZlcnNlKCkge1xuICAgIGlmICh0aGlzLmhpZ2gpIHtcbiAgICAgIHJldHVybiBJbnQzMlV0aWxzLmJpdFNjYW5SZXZlcnNlMzIodGhpcy5oaWdoKSArIDMyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb3cpIHtcbiAgICAgIHJldHVybiBJbnQzMlV0aWxzLmJpdFNjYW5SZXZlcnNlMzIodGhpcy5sb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwb3AxQml0cyhjYikge1xuICAgIHdoaWxlICh0aGlzLmxvdykge1xuICAgICAgY2IoSW50MzJVdGlscy5iaXRTY2FuRm9yd2FyZDMyKHRoaXMubG93KSk7XG4gICAgICB0aGlzLmxvdyA9IEludDMyVXRpbHMuY2xlYXJMZWFzdFNpZ0JpdDMyKHRoaXMubG93KTtcbiAgICB9XG5cbiAgICB3aGlsZSAodGhpcy5oaWdoKSB7XG4gICAgICBjYihJbnQzMlV0aWxzLmJpdFNjYW5Gb3J3YXJkMzIodGhpcy5oaWdoKSArIDMyKTtcbiAgICAgIHRoaXMuaGlnaCA9IEludDMyVXRpbHMuY2xlYXJMZWFzdFNpZ0JpdDMyKHRoaXMuaGlnaCk7XG4gICAgfVxuICB9XG5cbiAgZHVwKCkge1xuICAgIHJldHVybiBuZXcgQml0Qm9hcmQodGhpcy5sb3csIHRoaXMuaGlnaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvcyhwb3MpIHtcbiAgICBjb25zdCByZXMgPSBuZXcgQml0Qm9hcmQoKTtcbiAgICByZXMuc2V0Qml0KHBvcyk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEJpdEJvYXJkKCk7XG5cbiAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgICByZXMuc2V0Qml0KHBvcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db2woY29sTnVtKSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEJpdEJvYXJkKCk7XG4gICAgaWYgKGNvbE51bSA8IDAgfHwgY29sTnVtID4gNykgeyByZXR1cm4gcmVzOyB9XG4gICAgbGV0IHBvcyA9IGNvbE51bTtcblxuICAgIHdoaWxlIChwb3MgPCA2NCkge1xuICAgICAgcmVzLnNldEJpdChwb3MpO1xuICAgICAgcG9zICs9IDg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm93KHJvd051bSkge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBCaXRCb2FyZCgpO1xuICAgIGlmIChyb3dOdW0gPCAwIHx8IHJvd051bSA+IDcpIHsgcmV0dXJuIHJlczsgfVxuXG4gICAgbGV0IHBvcyA9IHJvd051bSAqIDg7XG4gICAgbGV0IHBvc01heCA9IHBvcyArIDc7XG5cbiAgICB3aGlsZSAocG9zIDw9IHBvc01heCkge1xuICAgICAgcmVzLnNldEJpdChwb3MpO1xuICAgICAgcG9zKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyB1cHBlclJpZ2h0RGlhZyhzdGFydFBvcykge1xuICAgIGNvbnN0IHJlcyA9IEJpdEJvYXJkLmZyb21Qb3Moc3RhcnRQb3MpO1xuICAgIGlmIChzdGFydFBvcyA8IDAgfHwgc3RhcnRQb3MgPiA2MykgeyByZXR1cm4gcmVzOyB9XG4gICAgbGV0IHBvcyA9IHN0YXJ0UG9zICsgOTtcblxuICAgIHdoaWxlIChwb3MgPCA2NCAmJiBwb3MgJSA4ICE9PSAwKSB7XG4gICAgICByZXMuc2V0Qml0KHBvcyk7XG4gICAgICBwb3MgKz0gOTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIHVwcGVyTGVmdERpYWcoc3RhcnRQb3MpIHtcbiAgICBjb25zdCByZXMgPSBuZXcgQml0Qm9hcmQoKTtcbiAgICBpZiAoc3RhcnRQb3MgPCAwIHx8IHN0YXJ0UG9zID4gNjMpIHsgcmV0dXJuIHJlczsgfVxuICAgIGxldCBwb3MgPSBzdGFydFBvcztcblxuICAgIHdoaWxlIChwb3MgPCA2NCAmJiBwb3MgJSA4ICE9PSAwKSB7XG4gICAgICByZXMuc2V0Qml0KHBvcyk7XG4gICAgICBwb3MgKz0gNztcbiAgICB9XG5cbiAgICBpZiAocG9zIDwgNjQpIHtcbiAgICAgIHJlcy5zZXRCaXQocG9zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCByb3cgPSAnJztcbiAgICBsZXQgcG93ID0gNjM7XG4gICAgbGV0IHBvc1ZhbDtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tJyk7XG4gICAgd2hpbGUgKHBvdyA+PSAzMikge1xuICAgICAgcG9zVmFsID0gKE1hdGgucG93KDIsIHBvdyAtIDMyKSAmIHRoaXMuaGlnaCkgPT09IDAgPyAnMCcgOiAnMSc7XG4gICAgICByb3cgPSBwb3NWYWwgKyByb3c7XG4gICAgICBpZiAocm93Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgICByb3cgPSAnJztcbiAgICAgIH1cbiAgICAgIHBvdy0tO1xuICAgIH1cblxuICAgIHdoaWxlIChwb3cgPj0gMCkge1xuICAgICAgcG9zVmFsID0gKE1hdGgucG93KDIsIHBvdykgJiB0aGlzLmxvdykgPT09IDAgPyAnMCcgOiAnMSc7XG4gICAgICByb3cgPSBwb3NWYWwgKyByb3c7XG4gICAgICBpZiAocm93Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3cpO1xuICAgICAgICByb3cgPSAnJztcbiAgICAgIH1cbiAgICAgIHBvdy0tO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnLS0tLS0tJyk7XG4gIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJpdEJvYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYml0Ym9hcmQvYml0Ym9hcmQuanMiLCJjb25zdCB7IFR5cGVzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5jbGFzcyBNb3ZlIHtcbiAgY29uc3RydWN0b3IoZnJvbSwgdG8sIHR5cGUsIHBpZWNlLCBjYXB0UGllY2UpIHtcbiAgICB0aGlzLnZhbCA9ICgoKHR5cGUgJiAweGYpIDw8IDE4KSA+Pj4gMCkgfFxuICAgICAgICAgICAgICAgKCgoKGNhcHRQaWVjZSB8fCAwKSAmIDB4NykgPDwgMTUpID4+PiAwKSB8XG4gICAgICAgICAgICAgICAoKChwaWVjZSAmIDB4NykgPDwgMTIpID4+PiAwKSB8XG4gICAgICAgICAgICAgICAoKChmcm9tICYgMHgzZikgPDwgNikgPj4+IDApIHxcbiAgICAgICAgICAgICAgICgodG8gJiAweDNmKSA+Pj4gMCkgPj4+IDA7XG4gIH1cblxuICAvLyBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICBzdGF0aWMgZnJvbVZhbCh2YWwpIHtcbiAgICBjb25zdCBuZXdNb3ZlID0gbmV3IE1vdmUoMCwgMCwgMCwgMCwgMCk7XG4gICAgbmV3TW92ZS52YWwgPSB2YWw7XG4gICAgcmV0dXJuIG5ld01vdmU7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmcm9tOiB0aGlzLmdldEZyb20oKSxcbiAgICAgIHRvOiB0aGlzLmdldFRvKCksXG4gICAgICB0eXBlOiB0aGlzLmdldFR5cGUoKSxcbiAgICAgIHBpZWNlVHlwZTogdGhpcy5nZXRQaWVjZSgpLFxuICAgICAgY2FwdFBpZWNlVHlwZTogdGhpcy5nZXRDYXB0UGllY2UoKSxcbiAgICAgIGlzUHJvbW86IHRoaXMuaXNQcm9tbygpLFxuICAgICAgaXNDYXN0bGU6IHRoaXMuaXNDYXN0bGUoKVxuICAgIH07XG4gIH1cblxuICBnZXRGcm9tKCkge1xuICAgIHJldHVybiAodGhpcy52YWwgPj4+IDYpICYgMHgzZjtcbiAgfVxuXG4gIGdldFRvKCkge1xuICAgIHJldHVybiB0aGlzLnZhbCAmIDB4M2Y7XG4gIH1cblxuICBnZXRQaWVjZSgpIHtcbiAgICByZXR1cm4gKHRoaXMudmFsID4+PiAxMikgJiAweDc7XG4gIH1cblxuICBnZXRDYXB0UGllY2UoKSB7XG4gICAgcmV0dXJuICh0aGlzLnZhbCA+Pj4gMTUpICYgMHg3O1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWwgPj4+IDE4O1xuICB9XG5cbiAgaXNQcm9tbygpIHtcbiAgICByZXR1cm4gW1R5cGVzLk5QUk9NTywgVHlwZXMuQlBST01PLFxuICAgICAgICAgICAgVHlwZXMuUlBST01PLCBUeXBlcy5RUFJPTU9dLmluY2x1ZGVzKHRoaXMuZ2V0VHlwZSgpKTtcbiAgfVxuXG4gIGlzQ2FzdGxlKCkge1xuICAgIHJldHVybiBbVHlwZXMuQ1NUTF9LSU5HLCBUeXBlcy5DU1RMX1FVRUVOXS5pbmNsdWRlcyh0aGlzLmdldFR5cGUoKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IE1vdmUsIE1vdmVUeXBlczogVHlwZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vdmUvaW5kZXguanMiLCJjb25zdCB7IEJpdEJvYXJkLCBCQk1hc2tzIH0gPSByZXF1aXJlKCcuLi8uLi9iaXRib2FyZCcpO1xuXG5mdW5jdGlvbiBzdGVwTW92ZShpbml0aWFsLCBub1NvLCBlYVdlKSB7XG4gIGxldCBwb3NpdGlvbnMgPSBpbml0aWFsO1xuXG4gIGlmIChub1NvID4gMCkge1xuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5zaGlmdExlZnQobm9TbyAqIDgpO1xuICB9IGVsc2UgaWYgKG5vU28gPCAwKXtcbiAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnMuc2hpZnRSaWdodChub1NvICogLTgpO1xuICB9XG5cbiAgaWYgKGVhV2UgPiAwKSB7XG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zLnNoaWZ0TGVmdChlYVdlKS5hbmQoQkJNYXNrcy5FQVNUX09GX0NPTFtlYVdlIC0gMV0pO1xuICB9IGVsc2UgaWYgKGVhV2UgPCAwKXtcbiAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnMuc2hpZnRSaWdodCgtZWFXZSkuYW5kKEJCTWFza3MuV0VTVF9PRl9DT0xbZWFXZSArIDhdKTtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RlcE1vdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvbW92ZW1lbnRzL3N0ZXBfbW92ZS5qcyIsImNvbnN0IENvbHNGaWxlcyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJ107XG5cbmNvbnN0IEZpbGVzQ29scyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gQ29sc0ZpbGVzLnJlZHVjZSgocmVzLCBmaWxlLCBjb2wpID0+IHtcbiAgICByZXNbZmlsZV0gPSBjb2w7XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xufSgpO1xuXG5jb25zdCBSb3dzUmFua3MgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCddO1xuXG5jb25zdCBSYW5rc1Jvd3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFJvd3NSYW5rcy5yZWR1Y2UoKHJlcywgcmFuaywgcm93KSA9PiB7XG4gICAgcmVzW3JhbmtdID0gcm93O1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn0oKTtcblxuY29uc3QgR2FtZVN0YXR1cyA9IHtcbiAgVGhyZWVGb2xkUmVwOiAnRHJhdyAtIFRocmVlZm9sZCBSZXBldGl0aW9uJyxcbiAgTW92ZUxpbWl0RXhjOiAnRHJhdyAtIE1vdmUgTGltaXQgRXhjZWVkZWQgKDUwKScsXG4gIENoZWNrbWF0ZTogJ0NoZWNrbWF0ZScsXG4gIFN0YWxlbWF0ZTogJ1N0YWxlbWF0ZScsXG4gIFBsYXllclR1cm46ICdQbGF5ZXIgVHVybicsXG4gIEFJVHVybjogJ0FJIFR1cm4nXG59O1xuXG5jb25zdCBTZWxlY3RvcnMgPSB7XG4gIEJPQVJEX0lEOiBcIiNib2FyZFwiLFxuICBQSUVDRV9DTEFTUzogJ3BpZWNlJyxcbiAgU1FVQVJFX0NMQVNTOiAnc3F1YXJlJyxcbiAgUkFOS19DTEFTUzogJ3JhbmsnLFxuICBGSUxFX0NMQVNTOiAnZmlsZSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBDb2xzRmlsZXMsIEZpbGVzQ29scywgUm93c1JhbmtzLCBSYW5rc1Jvd3MsIFNlbGVjdG9ycywgR2FtZVN0YXR1cyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdWkvY29uc3RhbnRzLmpzIiwiY29uc3QgVUkgPSByZXF1aXJlKCcuL3VpJyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCB1aSA9IG5ldyBVSSgpO1xuICB1aS5ydW4oKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiY29uc3QgUG9zaXRpb24gPSByZXF1aXJlKCcuLi9wb3NpdGlvbicpO1xuY29uc3QgQUkgPSByZXF1aXJlKCcuLi9haScpO1xuY29uc3QgeyBQVHlwZXMsIENvbG9ycywgUGllY2VUeXBlSFRNTCB9ID0gcmVxdWlyZSgnLi4vcGllY2VzJyk7XG5jb25zdCB7IE1vdmVUeXBlcyB9ID0gcmVxdWlyZSgnLi4vbW92ZScpO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoJy4vdXRpbC5qcycpO1xuY29uc3QgeyBDb2xzRmlsZXMsIEZpbGVzQ29scyxcbiAgICAgICAgUm93c1JhbmtzLCBSYW5rc1Jvd3MsXG4gICAgICAgIFNlbGVjdG9ycywgR2FtZVN0YXR1cyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFpID0gbmV3IEFJKCk7XG4gIH1cblxuICBydW4oKSB7XG4gICAgdGhpcy5zZXR1cEJ1dHRvbnMoKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICAkKCcjYm9hcmQnKS5lbXB0eSgpO1xuICAgICQoJyNtb3ZlLWhpc3RvcnknKS5lbXB0eSgpO1xuICAgICQoJy5haS1zdGF0cy1oZWFkZXInKS50ZXh0KGBBSSBTdGF0c2ApO1xuICAgICQoJy5tb3ZlLXN0YXRzIHRkJykuZW1wdHkoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCk7XG4gICAgY29uc3QgcGxheWVyQ29sb3IgPSAkKCdpbnB1dFtuYW1lPVwiY29sb3Itb3B0aW9uXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgICB0aGlzLnBsYXllckNvbG9yID0gcGFyc2VJbnQocGxheWVyQ29sb3IpO1xuICAgIGNvbnN0IGFpVGhpbmtpbmdUaW1lID0gcGFyc2VGbG9hdCgkKCcjYWktdGltZS12YWwnKS50ZXh0KCkpICogMTAwMDtcbiAgICB0aGlzLmFpLnNldFRoaW5raW5nVGltZShhaVRoaW5raW5nVGltZSk7XG4gICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICB0aGlzLnBsYXlOZXh0VHVybigpO1xuICB9XG5cbiAgc2V0dXBCdXR0b25zKCkge1xuICAgICQoJyN1bm1ha2UnKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICAgIGlmICgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLnVubWFrZVBsYXllck1vdmUoKTtcbiAgICAgICAgdGhpcy5wbGF5TmV4dFR1cm4oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNhdXRvJykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy5haU1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNhaS10aW1lLXNsaWRlcicpLnNsaWRlcih7XG4gICAgICB2YWx1ZTogdGhpcy5haS50aGlua2luZ1RpbWUgLyAxMDAwLFxuICAgICAgbWluOiBNYXRoLnJvdW5kKE1hdGgubG9nKC4wMSkgKiAxMDAwKSAvIDEwMDAsXG4gICAgICBtYXg6IE1hdGgucm91bmQoTWF0aC5sb2coMzApICogMTAwMCkgLyAxMDAwLFxuICAgICAgc3RlcDogMC4wMSxcbiAgICAgIHNsaWRlOiAoZXZlbnQsIHVpKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IE1hdGgucm91bmQoTWF0aC5wb3coTWF0aC5FLCB1aS52YWx1ZSkgKiAxMDAwKTtcbiAgICAgICAgJCgnI2FpLXRpbWUtdmFsJykudGV4dChVdGlsLmZvcm1hdFRpbWUodmFsKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjbmV3LWdhbWUnKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICAgIGlmICgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjYWktdGltZS12YWwnKS50ZXh0KFV0aWwuZm9ybWF0VGltZSh0aGlzLmFpLnRoaW5raW5nVGltZSkpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZUJ0bnMoKSB7XG4gICAgJCgnLmNsaWNrYWJsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgfVxuXG4gIGFjdGl2YXRlQnRucygpIHtcbiAgICAkKCcuY2xpY2thYmxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnByZXZNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICQoJyN1bm1ha2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5jdXJyTW92ZXMgPSB0aGlzLnBvc2l0aW9uLmdlbmVyYXRlTGVnYWxNb3ZlcygpO1xuXG4gICAgaWYgKHRoaXMuY3Vyck1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24uaXNUaHJlZWZvbGRSZXBldGl0aW9uKCkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBHYW1lU3RhdHVzLlRocmVlRm9sZFJlcDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi5pc01vdmVMaW1pdEV4Y2VlZGVkKCkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBHYW1lU3RhdHVzLk1vdmVMaW1pdEV4YztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3NpdGlvbi5pbkNoZWNrKHRoaXMucG9zaXRpb24udHVybikpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBHYW1lU3RhdHVzLkNoZWNrbWF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5TdGFsZW1hdGU7XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2YXRlQnRucygpO1xuICAgICAgJCgnI2F1dG8nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnR1cm4gPT09IHRoaXMucGxheWVyQ29sb3IpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBHYW1lU3RhdHVzLlBsYXllclR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuQUlUdXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1c0VsID0gJCgnLnN0YXR1cy1oZWFkZXInKTtcblxuICAgIHN0YXR1c0VsLnRleHQodGhpcy5zdGF0dXMpO1xuICB9XG5cbiAgdW5tYWtlUGxheWVyTW92ZSgpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnVubWFrZVByZXZNb3ZlKCk7XG4gICAgdGhpcy5zaGlmdEZyb21Nb3Zlc0xpc3QoKTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi50dXJuICE9PSB0aGlzLnBsYXllckNvbG9yKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uLnVubWFrZVByZXZNb3ZlKCk7XG4gICAgICB0aGlzLnNoaWZ0RnJvbU1vdmVzTGlzdCgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlOZXh0VHVybigpIHtcbiAgICB0aGlzLnVwZGF0ZVBpZWNlcygpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb24udHVybiA9PT0gdGhpcy5wbGF5ZXJDb2xvcikge1xuICAgICAgdGhpcy5zZXR1cFBsYXllck1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5haU1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBwb3B1bGF0ZVN0YXRzVGFibGUobW92ZVN0ciwgbW92ZVN0YXRzKSB7XG4gICAgJCgnLmFpLXN0YXRzLWhlYWRlcicpLnRleHQoYEFJIFN0YXRzICgke21vdmVTdHJ9KWApO1xuICAgICQoJy5kZXB0aC1zdGF0JykudGV4dChtb3ZlU3RhdHMuZGVwdGgpO1xuICAgICQoJy5ydW50aW1lLXN0YXQnKS50ZXh0KG1vdmVTdGF0cy5ydW5UaW1lIHx8ICdOL0EnKTtcbiAgICAkKCcuZXhwbG9yZWQtc3RhdCcpLnRleHQobW92ZVN0YXRzLmV4cGxvcmVkUG9zaXRpb25zKTtcbiAgICAkKCcubWFpbi1zZWFyY2gtc3RhdCcpLnRleHQobW92ZVN0YXRzLm1haW5TZWFyY2hOb2Rlcyk7XG4gICAgJCgnLnFzZWFyY2gtc3RhdCcpLnRleHQobW92ZVN0YXRzLnFTZWFyY2hOb2Rlcyk7XG4gICAgJCgnLnR0YWJsZS1oaXQtc3RhdCcpLnRleHQobW92ZVN0YXRzLnRUYWJsZUhpdHMpO1xuICB9XG5cbiAgY3JlYXRlTW92ZUl0ZW0obW92ZURhdGEpIHtcbiAgICBjb25zdCBtb3ZlSXRlbSA9ICQoJzx0ciBjbGFzcz1cIm1vdmUtaXRlbVwiPjwvdHI+Jyk7XG4gICAgY29uc3QgbW92ZVN0ciA9IFV0aWwuZm9ybWF0TW92ZShtb3ZlRGF0YS5tb3ZlLCBtb3ZlRGF0YS5jb2xvcik7XG5cbiAgICBtb3ZlSXRlbS5hcHBlbmQoJChgPHRkIGNsYXNzPVwibW92ZS1zdHJcIj4ke21vdmVTdHJ9PC90ZD5gKSk7XG5cbiAgICBpZiAobW92ZURhdGEuc3RhdHMpIHtcbiAgICAgIG1vdmVJdGVtLmFkZENsYXNzKCdzdGF0cy12aWV3LWxpbmsgY2xpY2thYmxlJyk7XG4gICAgICBtb3ZlSXRlbS5jbGljaygoKSA9PiB0aGlzLnBvcHVsYXRlU3RhdHNUYWJsZShtb3ZlU3RyLCBtb3ZlRGF0YS5zdGF0cykpO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlSXRlbTtcbiAgfVxuXG4gIGFkZFRvTW92ZXNMaXN0KG1vdmVEYXRhKSB7XG4gICAgY29uc3QgbW92ZXNIaXN0b3J5ID0gJCgnI21vdmUtaGlzdG9yeScpO1xuICAgIGNvbnN0IG5ld01vdmVJdGVtID0gdGhpcy5jcmVhdGVNb3ZlSXRlbShtb3ZlRGF0YSk7XG4gICAgbW92ZXNIaXN0b3J5LnByZXBlbmQobmV3TW92ZUl0ZW0pO1xuICB9XG5cbiAgc2hpZnRGcm9tTW92ZXNMaXN0KCkge1xuICAgICQoXCIubW92ZS1pdGVtOmZpcnN0XCIpLnJlbW92ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVGaWxlSGVhZGVyKCkge1xuICAgIGNvbnN0IG5ld1JvdyA9ICQoJzx0cj48L3RyPicpO1xuICAgIG5ld1Jvdy5hcHBlbmQoYDx0aD5gKTtcbiAgICBDb2xzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgbmV3Um93LmFwcGVuZChgPHRoIGNsYXNzPVwiZmlsZVwiPiR7ZmlsZX08L3RoPmApO1xuICAgIH0pO1xuICAgIG5ld1Jvdy5hcHBlbmQoYDx0aD5gKTtcblxuICAgIHJldHVybiBuZXdSb3c7XG4gIH1cblxuICBnZW5lcmF0ZVNxdWFyZShmaWxlLCByYW5rKSB7XG4gICAgY29uc3QgZmlsZVJhbmsgPSBmaWxlICsgcmFuaztcblxuICAgIGNvbnN0IG5ld1NxdWFyZSA9ICQoYDx0ZCBpZD1cIiR7ZmlsZVJhbmt9XCI+PC90ZD5gKTtcblxuICAgIGNvbnN0IHNxdWFyZUNvbG9yID0gVXRpbC5pc0RhcmtTcXVhcmUoZmlsZVJhbmspID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICBuZXdTcXVhcmUuYWRkQ2xhc3Moc3F1YXJlQ29sb3IgKyBcIiBzcXVhcmVcIik7XG5cbiAgICByZXR1cm4gbmV3U3F1YXJlO1xuICB9XG5cbiAgZHJhd0JvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gJCgnI2JvYXJkJyk7XG5cbiAgICBsZXQgbmV3UmFua1JvdztcbiAgICBjb25zdCByb3dzUmFua3MgPSB0aGlzLnBsYXllckNvbG9yID09PSBDb2xvcnMuV0hJVEUgPyBSb3dzUmFua3MgOiBSb3dzUmFua3Muc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgcm93c1JhbmtzLmZvckVhY2goKHJhbmspID0+IHtcbiAgICAgIG5ld1JhbmtSb3cgPSAkKCc8dHI+Jyk7XG4gICAgICBuZXdSYW5rUm93LmFwcGVuZChgPHRoIGNsYXNzPVwicmFua1wiPiR7cmFua308L3RoPmApO1xuICAgICAgQ29sc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgICAgbmV3UmFua1Jvdy5hcHBlbmQodGhpcy5nZW5lcmF0ZVNxdWFyZShmaWxlLCByYW5rKSk7XG4gICAgICB9KTtcbiAgICAgIG5ld1JhbmtSb3cuYXBwZW5kKGA8dGggY2xhc3M9XCJyYW5rXCI+JHtyYW5rfTwvdGg+YCk7XG4gICAgICBib2FyZC5wcmVwZW5kKG5ld1JhbmtSb3cpO1xuICAgIH0pO1xuXG4gICAgYm9hcmQucHJlcGVuZCh0aGlzLmdlbmVyYXRlRmlsZUhlYWRlcigpKTtcbiAgICBib2FyZC5hcHBlbmQodGhpcy5nZW5lcmF0ZUZpbGVIZWFkZXIoKSk7XG4gIH1cblxuICB1cGRhdGVQaWVjZXMoKSB7XG4gICAgJCgnLnBpZWNlJykucmVtb3ZlKCk7XG4gICAgY29uc3QgcGllY2VUeXBlcyA9IE9iamVjdC52YWx1ZXMoUFR5cGVzKTtcbiAgICBjb25zdCBwaWVjZXMgPSB0aGlzLnBvc2l0aW9uLnBpZWNlcztcbiAgICBsZXQgZmlsZVJhbms7XG4gICAgbGV0IG5ld1BpZWNlO1xuXG4gICAgcGllY2VUeXBlcy5mb3JFYWNoKChwaWVjZVR5cGUpID0+IHtcbiAgICAgIHBpZWNlc1twaWVjZVR5cGVdLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgICAgbmV3UGllY2UgPSAkKGA8ZGl2IGNsYXNzPVwicGllY2VcIj48ZGl2PmApO1xuICAgICAgICBpZiAocGllY2VzW0NvbG9ycy5XSElURV0uaGFzU2V0Qml0KHBvcykpIHtcbiAgICAgICAgICBuZXdQaWVjZS5odG1sKFBpZWNlVHlwZUhUTUxbQ29sb3JzLldISVRFXVtwaWVjZVR5cGVdKTtcbiAgICAgICAgICBuZXdQaWVjZS5hZGRDbGFzcygnd2hpdGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQaWVjZS5odG1sKFBpZWNlVHlwZUhUTUxbQ29sb3JzLkJMQUNLXVtwaWVjZVR5cGVdKTtcbiAgICAgICAgICBuZXdQaWVjZS5hZGRDbGFzcygnYmxhY2snKTtcbiAgICAgICAgfVxuICAgICAgICBmaWxlUmFuayA9IFV0aWwuZmlsZVJhbmtGcm9tUG9zKHBvcyk7XG4gICAgICAgICQoYCMke2ZpbGVSYW5rfWApLmFwcGVuZChuZXdQaWVjZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VNb3ZlKG1vdmUsIHN0YXRzKSB7XG4gICAgdGhpcy5hZGRUb01vdmVzTGlzdCh7IG1vdmUsIGNvbG9yOiB0aGlzLnBvc2l0aW9uLnR1cm4sIHN0YXRzIH0pO1xuICAgIGlmIChzdGF0cykge1xuICAgICAgdGhpcy5wb3B1bGF0ZVN0YXRzVGFibGUoVXRpbC5mb3JtYXRNb3ZlKG1vdmUsIHRoaXMucG9zaXRpb24udHVybiksIHN0YXRzKTtcbiAgICB9XG4gICAgdGhpcy5wb3NpdGlvbi5tYWtlTW92ZShtb3ZlKTtcbiAgICB0aGlzLnBsYXlOZXh0VHVybigpO1xuICB9XG5cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gIVtHYW1lU3RhdHVzLkFJVHVybiwgR2FtZVN0YXR1cy5QbGF5ZXJUdXJuXS5pbmNsdWRlcyh0aGlzLnN0YXR1cyk7XG4gIH1cblxuICBhaU1vdmUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlQnRucygpO1xuICAgIHRoaXMucmVzZXRTdGF0dXMoKTtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKCkpIHsgcmV0dXJuOyB9XG5cbiAgICAkKCdtYWluJykuYWRkQ2xhc3MoJ3dhaXRpbmcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGFpTW92ZURhdGEgPSB0aGlzLmFpLmNob29zZU1vdmUodGhpcy5wb3NpdGlvbiwgdGhpcy5jdXJyTW92ZXMpO1xuICAgICAgdGhpcy5hbmltYXRlTW92ZShhaU1vdmVEYXRhLm1vdmUsICgpID0+IHtcbiAgICAgICAgJCgnbWFpbicpLnJlbW92ZUNsYXNzKCd3YWl0aW5nJyk7XG4gICAgICAgIHRoaXMubWFrZU1vdmUoYWlNb3ZlRGF0YS5tb3ZlLCBhaU1vdmVEYXRhLnBlcmZvcm1hbmNlKTtcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBhbmltYXRlTW92ZShtb3ZlLCBjYikge1xuICAgIGNvbnN0IHBpZWNlRWwgPSAkKGAjJHtVdGlsLmZpbGVSYW5rRnJvbVBvcyhtb3ZlLmdldEZyb20oKSl9IC5waWVjZWApO1xuICAgIGNvbnN0IG5ld1NxdWFyZSA9ICQoYCMke1V0aWwuZmlsZVJhbmtGcm9tUG9zKG1vdmUuZ2V0VG8oKSl9YCk7XG5cbiAgICBpZiAobW92ZS5nZXRDYXB0UGllY2UoKSkge1xuICAgICAgY29uc3QgY2FwdFBpZWNlID0gJChgIyR7VXRpbC5maWxlUmFua0Zyb21Qb3MobW92ZS5nZXRUbygpKX0gLnBpZWNlYCk7XG4gICAgICBjb25zdCBjYXB0T2Zmc2V0ID0gY2FwdFBpZWNlLm9mZnNldCgpO1xuICAgICAgY2FwdFBpZWNlLmNzcyh7XG4gICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICdsZWZ0JzogY2FwdE9mZnNldC5sZWZ0LFxuICAgICAgICAndG9wJzogY2FwdE9mZnNldC50b3BcbiAgICAgIH0pO1xuICAgICAgY2FwdFBpZWNlLmZhZGVPdXQoNDUwKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRPZmZzZXQgPSBwaWVjZUVsLm9mZnNldCgpO1xuICAgIHBpZWNlRWwuYXBwZW5kVG8obmV3U3F1YXJlKTtcbiAgICBjb25zdCBuZXdPZmZzZXQgPSBwaWVjZUVsLm9mZnNldCgpO1xuXG4gICAgY29uc3QgYW5pbVBpZWNlID0gcGllY2VFbC5jbG9uZSgpLmFwcGVuZFRvKCdib2R5Jyk7XG4gICAgYW5pbVBpZWNlLmNzcyh7XG4gICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgJ2xlZnQnOiBvbGRPZmZzZXQubGVmdCxcbiAgICAgICd0b3AnOiBvbGRPZmZzZXQudG9wLFxuICAgICAgJ3otaW5kZXgnOiAxMDAwXG4gICAgfSk7XG4gICAgcGllY2VFbC5oaWRlKCk7XG5cbiAgICBhbmltUGllY2UuYW5pbWF0ZSh7J3RvcCc6IG5ld09mZnNldC50b3AsICdsZWZ0JzogbmV3T2Zmc2V0LmxlZnR9LCA0NTAsIGZ1bmN0aW9uKCl7XG4gICAgICBwaWVjZUVsLnNob3coKTtcbiAgICAgIGFuaW1QaWVjZS5yZW1vdmUoKTtcbiAgICAgIGNiKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cFBsYXllck1vdmUoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZUJ0bnMoKTtcbiAgICB0aGlzLnJlc2V0U3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3ZlcigpKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3QgbW92ZXNEYXRhID0gdGhpcy5jdXJyTW92ZXMubWFwKChtb3ZlKSA9PiBtb3ZlLmdldERhdGEoKSk7XG4gICAgY29uc3QgbW92ZUZyb21Ub3MgPSB7fTtcbiAgICBjb25zdCBtb3ZlVG9Gcm9tcyA9IHt9O1xuXG4gICAgbW92ZXNEYXRhLmZvckVhY2goKG1vdmVEYXRhKSA9PiB7XG4gICAgICBtb3ZlRnJvbVRvc1ttb3ZlRGF0YS5mcm9tXSA9IG1vdmVGcm9tVG9zW21vdmVEYXRhLmZyb21dIHx8IFtdO1xuICAgICAgbW92ZUZyb21Ub3NbbW92ZURhdGEuZnJvbV0ucHVzaChtb3ZlRGF0YS50byk7XG5cbiAgICAgIG1vdmVUb0Zyb21zW21vdmVEYXRhLnRvXSA9IG1vdmVUb0Zyb21zW21vdmVEYXRhLnRvXSB8fCBbXTtcbiAgICAgIG1vdmVUb0Zyb21zW21vdmVEYXRhLnRvXS5wdXNoKG1vdmVEYXRhLmZyb20pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hY3RpdmF0ZURyYWdnYWJsZVBpZWNlcyhtb3ZlRnJvbVRvcyk7XG4gICAgdGhpcy5hY3RpdmF0ZURyb3BwYWJsZVNxdWFyZXMobW92ZVRvRnJvbXMpO1xuICB9XG5cbiAgYWN0aXZhdGVEcmFnZ2FibGVQaWVjZXMobW92ZUZyb21Ub3MpIHtcbiAgICBsZXQgZnJvbUZpbGVSYW5rO1xuICAgIGxldCBwaWVjZUVsO1xuXG4gICAgT2JqZWN0LmtleXMobW92ZUZyb21Ub3MpLmZvckVhY2goKGZyb21Qb3MpID0+IHtcbiAgICAgIGZyb21GaWxlUmFuayA9IFV0aWwuZmlsZVJhbmtGcm9tUG9zKGZyb21Qb3MpO1xuICAgICAgcGllY2VFbCA9ICQoYCMke2Zyb21GaWxlUmFua30gLnBpZWNlYCk7XG4gICAgICBwaWVjZUVsLmRyYWdnYWJsZSh7XG4gICAgICAgIGNvbnRhaW5tZW50OiAkKCcjYm9hcmQnKSxcbiAgICAgICAgcmV2ZXJ0OiAnaW52YWxpZCcsXG4gICAgICAgIHJldmVydER1cmF0aW9uOiAzMDBcbiAgICAgIH0pO1xuXG4gICAgICBwaWVjZUVsLm1vdXNlZW50ZXIoKCkgPT4ge1xuICAgICAgICBpZiAocGllY2VFbC5oYXNDbGFzcygndWktZHJhZ2dhYmxlJykpIHtcbiAgICAgICAgICBtb3ZlRnJvbVRvc1tmcm9tUG9zXS5mb3JFYWNoKCh0b1BvcykgPT4ge1xuICAgICAgICAgICAgJChgIyR7VXRpbC5maWxlUmFua0Zyb21Qb3ModG9Qb3MpfWApLmFkZENsYXNzKCdjYW4tbW92ZS10bycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGllY2VFbC5tb3VzZWxlYXZlKCgpID0+IHtcbiAgICAgICAgJCgnLnNxdWFyZScpLnJlbW92ZUNsYXNzKCdjYW4tbW92ZS10bycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZURyb3BwYWJsZVNxdWFyZXMobW92ZVRvRnJvbXMpIHtcbiAgICBsZXQgZGVzdFNxO1xuICAgIGxldCBvcmlnaW5TcXVhcmU7XG4gICAgbGV0IG9yaWdpblBvcztcbiAgICBsZXQgc2VsZWN0ZWRNb3ZlO1xuXG4gICAgT2JqZWN0LmtleXMobW92ZVRvRnJvbXMpLmZvckVhY2goKHRvUG9zKSA9PiB7XG4gICAgICBkZXN0U3EgPSAkKGAjJHtVdGlsLmZpbGVSYW5rRnJvbVBvcyh0b1Bvcyl9YCk7XG4gICAgICBkZXN0U3EuZHJvcHBhYmxlKHtcbiAgICAgICAgYWNjZXB0OiAoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgb3JpZ2luU3F1YXJlID0gJChkcmFnZ2FibGUpLnBhcmVudCgpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgaWYgKCFvcmlnaW5TcXVhcmUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgb3JpZ2luUG9zID0gVXRpbC5wb3NGcm9tRmlsZVJhbmsob3JpZ2luU3F1YXJlKTtcbiAgICAgICAgICByZXR1cm4gbW92ZVRvRnJvbXNbdG9Qb3NdLmluY2x1ZGVzKG9yaWdpblBvcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRyb3A6IChldmVudCwgdWkpID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VQbGF5ZXJNb3ZlKHVpLmRyYWdnYWJsZSwgcGFyc2VJbnQodG9Qb3MpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBtYWtlUGxheWVyTW92ZShwaWVjZSwgdG9Qb3MpIHtcbiAgICBjb25zdCBvcmlnaW5TcXVhcmUgPSAkKHBpZWNlKS5wYXJlbnQoKTtcbiAgICBwaWVjZS5yZW1vdmUoKTtcblxuICAgICQoJy51aS1kcmFnZ2FibGUnKS5kcmFnZ2FibGUoJ2Rlc3Ryb3knKTtcbiAgICAkKCcudWktZHJvcHBhYmxlJykuZHJvcHBhYmxlKCdkZXN0cm95Jyk7XG4gICAgJCgnLnNxdWFyZScpLnJlbW92ZUNsYXNzKCdjYW4tbW92ZS10bycpO1xuICAgIHRoaXMuZGVhY3RpdmF0ZUJ0bnMoKTtcblxuICAgIGNvbnN0IG9yaWdpblBvcyA9IFV0aWwucG9zRnJvbUZpbGVSYW5rKCQob3JpZ2luU3F1YXJlKS5hdHRyKCdpZCcpKTtcbiAgICBjb25zdCBkZXN0U3EgPSAkKGAjJHtVdGlsLmZpbGVSYW5rRnJvbVBvcyh0b1Bvcyl9YCk7XG4gICAgZGVzdFNxLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBzZWxlY3RlZE1vdmVzID0gdGhpcy5jdXJyTW92ZXMuZmlsdGVyKChtb3ZlKSA9PiB7XG4gICAgICByZXR1cm4gbW92ZS5nZXRGcm9tKCkgPT09IG9yaWdpblBvcyAmJlxuICAgICAgICAgICAgIG1vdmUuZ2V0VG8oKSA9PT0gdG9Qb3M7XG4gICAgfSk7XG5cbiAgICBpZiAoc2VsZWN0ZWRNb3Zlcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBjb2xvciA9IHRoaXMucGxheWVyQ29sb3IgPT09IENvbG9ycy5XSElURSA/ICd3aGl0ZScgOiAnYmxhY2snO1xuICAgICAgdGhpcy5jcmVhdGVQcm9tb1dpbmRvdyhkZXN0U3EsIHNlbGVjdGVkTW92ZXMsIGNvbG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNlbGVjdGVkTW92ZSA9IHNlbGVjdGVkTW92ZXNbMF07XG4gICAgICB0aGlzLm1ha2VNb3ZlKHNlbGVjdGVkTW92ZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUHJvbW9XaW5kb3coZGVzdFNxLCBwcm9tb01vdmVzLCBjb2xvcikge1xuICAgIGNvbnN0IHByb21vRGl2ID0gJChcIjxkaXYgY2xhc3M9J3Byb21vLXdpbmRvdyc+PC9kaXY+XCIpO1xuICAgIGNvbnN0IHByb21vUGllY2VzID0gdGhpcy5jcmVhdGVQcm9tb1BpZWNlcyhwcm9tb01vdmVzLCBjb2xvcik7XG5cbiAgICBsZXQgcHJvbW9XaW5Sb3cgPSAkKFwiPGRpdiBjbGFzcz0ncHJvbW8td2luZG93LXJvdyc+PC9kaXY+XCIpO1xuICAgIHByb21vV2luUm93LmFwcGVuZChwcm9tb1BpZWNlcy5zbGljZSgwLCAyKSk7XG4gICAgcHJvbW9EaXYuYXBwZW5kKHByb21vV2luUm93KTtcblxuICAgIHByb21vV2luUm93ID0gJChcIjxkaXYgY2xhc3M9J3Byb21vLXdpbmRvdy1yb3cnPjwvZGl2PlwiKTtcbiAgICBwcm9tb1dpblJvdy5hcHBlbmQocHJvbW9QaWVjZXMuc2xpY2UoMikpO1xuICAgIHByb21vRGl2LmFwcGVuZChwcm9tb1dpblJvdyk7XG5cbiAgICBkZXN0U3EuYXBwZW5kKHByb21vRGl2KTtcbiAgfVxuXG4gIGNyZWF0ZVByb21vUGllY2VzKHByb21vTW92ZXMsIGNvbG9yKSB7XG4gICAgY29uc3QgUHJvbW9zUFR5cGVzID0ge1xuICAgICAgW01vdmVUeXBlcy5OUFJPTU9dOiBQVHlwZXMuS05JR0hUUyxcbiAgICAgIFtNb3ZlVHlwZXMuQlBST01PXTogUFR5cGVzLkJJU0hPUFMsXG4gICAgICBbTW92ZVR5cGVzLlJQUk9NT106IFBUeXBlcy5ST09LUyxcbiAgICAgIFtNb3ZlVHlwZXMuUVBST01PXTogUFR5cGVzLlFVRUVOU1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1BpZWNlcyA9IFtdO1xuICAgIGxldCBuZXdQcm9tb1BpZWNlO1xuXG4gICAgcHJvbW9Nb3Zlcy5mb3JFYWNoKChwcm9tb01vdmUpID0+IHtcbiAgICAgIG5ld1Byb21vUGllY2UgPSB0aGlzLmNyZWF0ZVByb21vUGllY2UocHJvbW9Nb3ZlLCBQcm9tb3NQVHlwZXNbcHJvbW9Nb3ZlLmdldFR5cGUoKV0sIGNvbG9yKTtcbiAgICAgIHByb21vUGllY2VzLnB1c2gobmV3UHJvbW9QaWVjZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbW9QaWVjZXM7XG4gIH1cblxuICBjcmVhdGVQcm9tb1BpZWNlKG1vdmUsIHBUeXBlLCBjb2xvcikge1xuICAgIGNvbnN0IHByb21vUGllY2UgPSAkKGA8ZGl2IGNsYXNzPSdwcm9tby1waWVjZSBwaWVjZSAke2NvbG9yfSdcIj4ke1BpZWNlVHlwZUhUTUxbcFR5cGVdfTwvZGl2PmApO1xuICAgIHByb21vUGllY2UuY2xpY2soKCkgPT4ge1xuICAgICAgJCgnLnByb21vLXdpbmRvdycpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5tYWtlTW92ZShtb3ZlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9tb1BpZWNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVUk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91aS9pbmRleC5qcyIsImNvbnN0IHsgQml0Qm9hcmQsIEJCTWFza3MgfSA9IHJlcXVpcmUoJy4uL2JpdGJvYXJkJyk7XG5cbmNvbnN0IHsgTW92ZSwgTW92ZVR5cGVzIH0gPSByZXF1aXJlKCcuLi9tb3ZlJyk7XG5cbmNvbnN0IHsgUFV0aWxzLCBQVHlwZXMsXG4gICAgICAgIENvbG9ycywgRGlycyxcbiAgICAgICAgZWFjaFBpZWNlVHlwZSwgUGllY2VDb252IH0gPSByZXF1aXJlKCcuLi9waWVjZXMnKTtcblxuY29uc3QgeyBwaWVjZVBvc0hhc2hLZXlzLFxuICAgICAgICBlcFBvc0hhc2hLZXlzLFxuICAgICAgICBjYXN0bGVIYXNoS2V5cyxcbiAgICAgICAgdHVybkhhc2hLZXlzIH0gPSByZXF1aXJlKCcuL3poYXNoX2NvbnN0YW50cy5qcycpO1xuXG4vLyBXZSBpbml0aWFsaXplIG91ciBwb3NpdGlvbiB3aXRoIGEgRkVOIHN0cmluZyBzbyB0aGF0IGl0J3MgZWFzeSB0b1xuLy8gcmVjcmVhdGUgYSBwYXJ0aWN1bGFyIHBvc2l0aW9uLiBTaW5jZSBqdXN0IG9uZSBwb3NpdGlvbiBvYmplY3QgaXMgY3JlYXRlZCBkdXJpbmdcbi8vIG91ciBnYW1lLCB0aGlzIGlzIG1haW5seSBoZWxwZnVsIGZvciB0ZXN0aW5nL2RlYnVnZ2luZyBwdXJwb3Nlc1xuLy8gTW9yZSBhYm91dCBGRU4gaGVyZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRm9yc3l0aCVFMiU4MCU5M0Vkd2FyZHNfTm90YXRpb25cblxuY29uc3QgZGVmYXVsdEZlblN0ciA9IFwicm5icWtibnIvcHBwcHBwcHAvOC84LzgvOC9QUFBQUFBQUC9STkJRS0JOUiB3IEtRa3EgLSAwIDFcIjtcblxuY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihmZW5TdHIgPSBkZWZhdWx0RmVuU3RyKSB7XG4gICAgY29uc3QgWyBwb3NpdGlvbnMsXG4gICAgICAgICAgICB0dXJuTGV0dGVyLFxuICAgICAgICAgICAgY2FzdGxlUmlnaHRzU3RyLFxuICAgICAgICAgICAgZXBTcSxcbiAgICAgICAgICAgIGhhbGZNb3ZlQ2xvY2ssXG4gICAgICAgICAgICBmdWxsTW92ZUNsb2NrIF0gPSBmZW5TdHIuc3BsaXQoJyAnKTtcblxuICAgIHRoaXMucGllY2VzID0gdGhpcy5mZW5Qb3NpdGlvbnNUb1BpZWNlQkJzKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5jYXN0bGVSaWdodHMgPSB0aGlzLnBhcnNlQ2FzdGxlUmlnaHRzU3RyKGNhc3RsZVJpZ2h0c1N0cik7XG4gICAgdGhpcy5lcEJCID0gdGhpcy5wYXJzZUVwU3RyKGVwU3EpO1xuICAgIHRoaXMuaGFsZk1vdmVDbG9jayA9IHBhcnNlSW50KGhhbGZNb3ZlQ2xvY2spO1xuICAgIHRoaXMuZnVsbE1vdmVDbG9jayA9IHBhcnNlSW50KGZ1bGxNb3ZlQ2xvY2spO1xuICAgIGNvbnN0IHR1cm4gPSB0dXJuTGV0dGVyID09PSAndycgPyBDb2xvcnMuV0hJVEUgOiBDb2xvcnMuQkxBQ0s7XG5cbiAgICB0aGlzLnByZXZNb3ZlcyA9IFtdO1xuICAgIHRoaXMucHJldlN0YXRlcyA9IFtdO1xuXG4gICAgLy8gY2FjaGUgZm9yIHF1aWNrIGxvb2t1cCBieSBib2FyZCBwb3NpdGlvblxuICAgIHRoaXMucFR5cGVzTG9jYXRpb25zID0gdGhpcy5jcmVhdGVQVHlwZXNMb2NhdGlvbnMoKTtcblxuICAgIC8vIHdlIHNlcGFyYXRlIG91ciBoYXNoZWQgdmFsdWVzIGludG8gcGllY2UgcG9zaXRpb24gaGFzaGVzXG4gICAgLy8gYW5kIHN0YXRlIGhhc2hlcyBmb3Igc2ltcGxlciBpbnRlZ3JhdGlvbiB3aXRoIG91ciBtb3ZlIG1ha2luZy91bm1ha2luZyBwcm9jZXNzXG4gICAgLy8gdGhleSBhcmUgeG9yJ2QgdG8gcmVwcmVzZW50IHRoZSBjb21wbGV0ZSBwb3NpdGlvblxuICAgIHRoaXMucFBvc0hhc2ggPSB0aGlzLmNyZWF0ZVBpZWNlc1Bvc0hhc2goKTtcbiAgICB0aGlzLnN0YXRlSGFzaCA9IHRoaXMuY3JlYXRlU3RhdGVIYXNoKCk7XG5cbiAgICB0aGlzLnNldFR1cm4odHVybiwgdGhpcy5nZXRPdGhlckNvbG9yKHR1cm4pKTtcblxuICAgIHRoaXMucG9zaXRpb25Db3VudHMgPSB7fTtcbiAgICB0aGlzLmFkZFBvc2l0aW9uQ291bnQoKTtcbiAgfVxuXG4gIGZlblBvc2l0aW9uc1RvUGllY2VCQnMocG9zaXRpb25zKSB7XG4gICAgY29uc3Qgcm93U3RycyA9IHBvc2l0aW9ucy5zcGxpdCgnLycpO1xuXG4gICAgY29uc3QgcGllY2VCQnMgPSB0aGlzLmNyZWF0ZUVtcHR5UGllY2VzQkJzKCk7XG5cbiAgICBsZXQgcG9zID0gMDtcbiAgICByb3dTdHJzLmZvckVhY2goKHJvd1N0cikgPT4ge1xuICAgICAgcm93U3RyLnNwbGl0KCcnKS5mb3JFYWNoKChjaGFyKSA9PiB7XG4gICAgICAgIGlmICgvWzAtOV0vLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICBwb3MgKz0gcGFyc2VJbnQoY2hhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGllY2VCQnNbUGllY2VDb252LmxldHRlclRvVHlwZShjaGFyKV0uc2V0Qml0KHBvcyk7XG4gICAgICAgICAgcGllY2VCQnNbUGllY2VDb252LmxldHRlclRvQ29sb3IoY2hhcildLnNldEJpdChwb3MpO1xuICAgICAgICAgIHBvcysrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwaWVjZUJCcztcbiAgfVxuXG4gIGNyZWF0ZUVtcHR5UGllY2VzQkJzKCkge1xuICAgIGNvbnN0IHBpZWNlcyA9IFtdO1xuXG4gICAgZWFjaFBpZWNlVHlwZSgodHlwZSkgPT4ge1xuICAgICAgcGllY2VzW3R5cGVdID0gbmV3IEJpdEJvYXJkKCk7XG4gICAgfSk7XG5cbiAgICBPYmplY3QudmFsdWVzKENvbG9ycykuZm9yRWFjaCgoY29sb3IpID0+IHtcbiAgICAgIHBpZWNlc1tjb2xvcl0gPSBuZXcgQml0Qm9hcmQoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwaWVjZXM7XG4gIH1cblxuICBwYXJzZUNhc3RsZVJpZ2h0c1N0cihjYXN0bGVSaWdodHNTdHIpIHtcbiAgICBjb25zdCByaWdodHNQb3MgPSBbJ3EnLCAnaycsICdRJywgJ0snXTtcblxuICAgIHJldHVybiByaWdodHNQb3MucmVkdWNlKChyZXMsIHJpZ2h0c0xldHRlciwgcG9zKSA9PiB7XG4gICAgICBpZiAoY2FzdGxlUmlnaHRzU3RyLmluY2x1ZGVzKHJpZ2h0c0xldHRlcikpIHtcbiAgICAgICAgcmV0dXJuIChyZXMgXiAoMSA8PCBwb3MpKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHBhcnNlRXBTdHIoZXBTdHIpIHtcbiAgICBpZiAoL1xcZCsvLnRlc3QoZXBTdHIpKSB7XG4gICAgICByZXR1cm4gQml0Qm9hcmQuZnJvbVBvcyhwYXJzZUludChlcFN0cikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEJpdEJvYXJkKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUFR5cGVzTG9jYXRpb25zKCkge1xuICAgIGxldCBwb3M7XG4gICAgY29uc3QgcmVzID0gW107XG5cbiAgICBmb3IgKHBvcyA9IDA7IHBvcyA8IDY0OyBwb3MrKykge1xuICAgICAgcmVzW3Bvc10gPSB0aGlzLmdldFBpZWNlQXQocG9zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZ2V0UGllY2VBdChwb3MpIHtcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC52YWx1ZXMoUFR5cGVzKTtcblxuICAgIGxldCBpZHg7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBmb3IgKGlkeCA9IDA7IGlkeCA8IHR5cGVzLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgIHR5cGUgPSB0eXBlc1tpZHhdO1xuICAgICAgaWYgKHRoaXMucGllY2VzW3R5cGVdLmhhc1NldEJpdChwb3MpKSB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY3JlYXRlUGllY2VzUG9zSGFzaCgpIHtcbiAgICBsZXQgdmFsID0gMDtcblxuICAgIGxldCBwVHlwZTtcbiAgICBjb25zdCB3aGl0ZXNQb3MgPSB0aGlzLnBpZWNlc1tDb2xvcnMuV0hJVEVdO1xuICAgIHdoaXRlc1Bvcy5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICBwVHlwZSA9IHRoaXMucFR5cGVzTG9jYXRpb25zW3Bvc107XG4gICAgICB2YWwgXj0gcGllY2VQb3NIYXNoS2V5c1twb3NdW3BUeXBlXVtDb2xvcnMuV0hJVEVdO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYmxhY2tzUG9zID0gdGhpcy5waWVjZXNbQ29sb3JzLkJMQUNLXTtcbiAgICBibGFja3NQb3MuZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgcFR5cGUgPSB0aGlzLnBUeXBlc0xvY2F0aW9uc1twb3NdO1xuICAgICAgdmFsIF49IHBpZWNlUG9zSGFzaEtleXNbcG9zXVtwVHlwZV1bQ29sb3JzLkJMQUNLXTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBjcmVhdGVTdGF0ZUhhc2goKSB7XG4gICAgbGV0IHZhbCA9IDA7XG4gICAgdGhpcy5lcEJCLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgIHZhbCBePSBlcFBvc0hhc2hLZXlzW3Bvc107XG4gICAgfSk7XG5cbiAgICBsZXQgY2FzdGxlUmlnaHRzUG9zO1xuICAgIGZvciAoY2FzdGxlUmlnaHRzUG9zID0gMDsgY2FzdGxlUmlnaHRzUG9zIDwgNDsgY2FzdGxlUmlnaHRzUG9zKyspIHtcbiAgICAgIGlmICgodGhpcy5jYXN0bGVSaWdodHMgJiAoMSA8PCBjYXN0bGVSaWdodHNQb3MpKSA+Pj4gMCkge1xuICAgICAgICB2YWwgXj0gY2FzdGxlSGFzaEtleXNbY2FzdGxlUmlnaHRzUG9zXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZ2V0SGFzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5wUG9zSGFzaCBeIHRoaXMuc3RhdGVIYXNoIF4gdHVybkhhc2hLZXlzW3RoaXMudHVybl07XG4gIH1cblxuICBzZXRUdXJuKHR1cm4sIG9wcCkge1xuICAgIHRoaXMudHVybiA9IHR1cm47XG4gICAgdGhpcy5vcHAgPSBvcHA7XG4gIH1cblxuICBzd2FwVHVybigpIHtcbiAgICB0aGlzLnNldFR1cm4odGhpcy5vcHAsIHRoaXMudHVybik7XG4gIH1cblxuICBnZXRPdGhlckNvbG9yKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yIF4gQ29sb3JzLkJMQUNLO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVzIGFsbCBwc2V1ZG8gbGVnYWwgbW92ZXMsIGllIG1vdmVzIHRoYXQgbWF5IHB1dCB0aGUga2luZ1xuICAvLyBpbiBjaGVjayBidXQgYXJlIG90aGVyd2lzZSBsZWdhbFxuICBnZW5lcmF0ZVBzZXVkb01vdmVzKGluY2x1ZGVRdWlldCA9IHRydWUsIGNoZWNrTlNEcmF3ID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1vdmVzID0gW107XG4gICAgaWYgKGNoZWNrTlNEcmF3ICYmIHRoaXMuaXNOb25TdGFsZW1hdGVEcmF3KCkpIHsgcmV0dXJuIG1vdmVzOyB9XG4gICAgdGhpcy5hZGRQYXduTW92ZXMobW92ZXMsIGluY2x1ZGVRdWlldCk7XG4gICAgdGhpcy5hZGROb3JtYWxNb3Zlcyhtb3ZlcywgaW5jbHVkZVF1aWV0KTtcbiAgICB0aGlzLmFkZEtpbmdNb3Zlcyhtb3ZlcywgaW5jbHVkZVF1aWV0KTtcblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIC8vIGdlbmVyYXRlcyBtb3ZlcyB3aXRoIGEgZmlsdGVyIGZvciB3aGV0aGVyIHRoZSBtb3ZlIHB1dHMgdGhlIGtpbmcgaW4gY2hlY2ssXG4gIC8vIHVzZWQgZm9yIHRoZSBVSSBidXQgbm90IHRoZSBBSSBtb3ZlIHNlYXJjaFxuICBnZW5lcmF0ZUxlZ2FsTW92ZXMoKSB7XG4gICAgY29uc3QgcHNldWRvTW92ZXMgPSB0aGlzLmdlbmVyYXRlUHNldWRvTW92ZXMoKTtcbiAgICBsZXQgbW92ZURhdGE7XG4gICAgbGV0IGlzTGVnYWw7XG5cbiAgICBjb25zdCBsZWdhbHMgPSBbXTtcbiAgICByZXR1cm4gcHNldWRvTW92ZXMuZmlsdGVyKChwc2V1ZG9Nb3ZlKSA9PiB7XG4gICAgICBtb3ZlRGF0YSA9IHBzZXVkb01vdmUuZ2V0RGF0YSgpO1xuXG4gICAgICB0aGlzLnRlc3RNb3ZlKG1vdmVEYXRhLCAodGVzdHNMZWdhbCkgPT4ge1xuICAgICAgICBpc0xlZ2FsID0gdGVzdHNMZWdhbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGlzTGVnYWw7XG4gICAgfSk7XG4gIH1cblxuICBpc05vblN0YWxlbWF0ZURyYXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNNb3ZlTGltaXRFeGNlZWRlZCgpIHx8IHRoaXMuaXNUaHJlZWZvbGRSZXBldGl0aW9uKCk7XG4gIH1cblxuICBpc1RocmVlZm9sZFJlcGV0aXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25Db3VudHNbdGhpcy5nZXRIYXNoKCldID09PSAzO1xuICB9XG5cbiAgaXNNb3ZlTGltaXRFeGNlZWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYWxmTW92ZUNsb2NrID49IDUwO1xuICB9XG5cbiAgYWRkUGF3bk1vdmVzKG1vdmVzLCBpbmNsdWRlUXVpZXQpIHtcbiAgICBjb25zdCBwYXduc1BvcyA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldCh0aGlzLnR1cm4sIFBUeXBlcy5QQVdOUyk7XG5cbiAgICBpZiAoaW5jbHVkZVF1aWV0KSB7XG4gICAgICBjb25zdCBub3RPY2N1cGllZCA9IHRoaXMuZ2V0T2NjdXBpZWQoKS5ub3QoKTtcblxuICAgICAgY29uc3QgcGF3blNpbmdsZVB1c2hlcyA9IFBVdGlsc1tQVHlwZXMuUEFXTlNdLnNpbmdsZVB1c2godGhpcy50dXJuLCBwYXduc1Bvcywgbm90T2NjdXBpZWQpO1xuICAgICAgdGhpcy5hZGRQYXduTW92ZVNldChwYXduU2luZ2xlUHVzaGVzLCA4ICogUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dLCBtb3Zlcyk7XG5cbiAgICAgIGNvbnN0IHBhd25Eb3VibGVQdXNoZXMgPSBQVXRpbHNbUFR5cGVzLlBBV05TXS5kb3VibGVQdXNoKHRoaXMudHVybiwgcGF3bnNQb3MsIG5vdE9jY3VwaWVkKTtcbiAgICAgIHRoaXMuYWRkUGF3bk1vdmVTZXQocGF3bkRvdWJsZVB1c2hlcywgMTYgKiBQVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0sIG1vdmVzLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbGV0IG9wcFBvc2l0aW9ucyA9IHRoaXMucGllY2VzW3RoaXMub3BwXS5vcih0aGlzLmVwQkIpO1xuXG4gICAgY29uc3QgcGF3bkxlZnRBdHRhY2tzID0gUFV0aWxzW1BUeXBlcy5QQVdOU10uYXR0YWNrc0xlZnQodGhpcy50dXJuLCBwYXduc1Bvcywgb3BwUG9zaXRpb25zKTtcbiAgICB0aGlzLmFkZFBhd25Nb3ZlU2V0KHBhd25MZWZ0QXR0YWNrcywgNyAqIFBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSwgbW92ZXMsIHRydWUpO1xuXG4gICAgY29uc3QgcGF3blJpZ2h0QXR0YWNrcyA9IFBVdGlsc1tQVHlwZXMuUEFXTlNdLmF0dGFja3NSaWdodCh0aGlzLnR1cm4sIHBhd25zUG9zLCBvcHBQb3NpdGlvbnMpO1xuICAgIHRoaXMuYWRkUGF3bk1vdmVTZXQocGF3blJpZ2h0QXR0YWNrcywgOSAqIFBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSwgbW92ZXMsIHRydWUpO1xuICB9XG5cbiAgYWRkTm9ybWFsTW92ZXMobW92ZXMsIGluY2x1ZGVRdWlldCkge1xuICAgIGNvbnN0IG9jY3VwaWVkID0gdGhpcy5nZXRPY2N1cGllZCgpO1xuICAgIGNvbnN0IG5vdE93blBpZWNlcyA9IHRoaXMuZ2V0Tm90T2NjdXBpZWRCeSh0aGlzLnR1cm4pO1xuXG4gICAgY29uc3Qga25pZ2h0c1BvcyA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldCh0aGlzLnR1cm4sIFBUeXBlcy5LTklHSFRTKTtcbiAgICBsZXQga25pZ2h0TW92ZXM7XG4gICAga25pZ2h0c1Bvcy5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICBrbmlnaHRNb3ZlcyA9IFBVdGlsc1tQVHlwZXMuS05JR0hUU10ubW92ZXMocG9zLCBub3RPd25QaWVjZXMpO1xuICAgICAgdGhpcy5hZGROb3JtYWxNb3ZlU2V0KGtuaWdodE1vdmVzLCBwb3MsIFBUeXBlcy5LTklHSFRTLCBtb3ZlcywgaW5jbHVkZVF1aWV0KTtcbiAgICB9KTtcblxuICAgIGxldCBwb3NpdGlvbnM7XG4gICAgbGV0IGRlc3RpbmF0aW9ucztcbiAgICBbUFR5cGVzLkJJU0hPUFMsIFBUeXBlcy5ST09LUywgUFR5cGVzLlFVRUVOU10uZm9yRWFjaCgoc2xpZGluZ1R5cGUpID0+IHtcbiAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldCh0aGlzLnR1cm4sIHNsaWRpbmdUeXBlKTtcbiAgICAgIHBvc2l0aW9ucy5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICAgIGRlc3RpbmF0aW9ucyA9IFBVdGlsc1tzbGlkaW5nVHlwZV0ubW92ZXMocG9zLCBvY2N1cGllZCwgbm90T3duUGllY2VzKTtcbiAgICAgICAgdGhpcy5hZGROb3JtYWxNb3ZlU2V0KGRlc3RpbmF0aW9ucywgcG9zLCBzbGlkaW5nVHlwZSwgbW92ZXMsIGluY2x1ZGVRdWlldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEtpbmdNb3Zlcyhtb3ZlcywgaW5jbHVkZVF1aWV0KSB7XG4gICAgICBjb25zdCBub3RPd25QaWVjZXMgPSB0aGlzLmdldE5vdE9jY3VwaWVkQnkodGhpcy50dXJuKTtcbiAgICAgIGNvbnN0IGtpbmdQb3MgPSB0aGlzLmdldENvbG9yUGllY2VTZXQodGhpcy50dXJuLCBQVHlwZXMuS0lOR1MpLmJpdFNjYW5Gb3J3YXJkKCk7XG5cbiAgICAgIGNvbnN0IG5vcm1hbE1vdmVzID0gUFV0aWxzW1BUeXBlcy5LSU5HU10ubW92ZXMoa2luZ1Bvcywgbm90T3duUGllY2VzKTtcbiAgICAgIHRoaXMuYWRkTm9ybWFsTW92ZVNldChub3JtYWxNb3Zlcywga2luZ1BvcywgUFR5cGVzLktJTkdTLCBtb3ZlcywgaW5jbHVkZVF1aWV0KTtcblxuICAgICAgaWYgKGluY2x1ZGVRdWlldCkge1xuICAgICAgICB0aGlzLmFkZENhc3RsZU1vdmVzKG1vdmVzKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vIG5vdGU6IHVubGlrZSBvdGhlciBwaWVjZXMsIHdlIG1hcCBwYXduIG1vdmVtZW50cyBmcm9tIHRoZSBzZXQgb2YgYWxsIGV4aXN0aW5nIHBhd25zXG4gIC8vIHJhdGhlciB0aGFuIGVhY2ggcGF3biBpbmRpdmlkdWFsbHksIHNvIHRoZSBmdW5jdGlvbiB0YWtlcyBhIHNoaWZ0IGFtb3VudCB0byBkZXRlcm1pbmVcbiAgLy8gdGhlIGxvY2F0aW9uIG9mIHRoZSBpbmRpdmlkdWFsIHBhd24gdGhhdCBtb3ZlZCB0byBhIG5ldyBwb3NpdGlvblxuICBhZGRQYXduTW92ZVNldChuZXdQb3NpdGlvbnMsIHNoaWZ0QW10LCBtb3ZlcywgaXNDYXB0dXJlLCBpc0RibFB1c2gpIHtcbiAgICBsZXQgZnJvbTtcbiAgICBsZXQgY2FwdHVyZWQgPSBudWxsO1xuXG4gICAgbmV3UG9zaXRpb25zLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgIGZyb20gPSBwb3MgLSBzaGlmdEFtdDtcbiAgICAgIGlmIChpc0RibFB1c2gpIHtcbiAgICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShmcm9tLCBwb3MsIE1vdmVUeXBlcy5EQkxfUFBVU0gsIFBUeXBlcy5QQVdOUykpO1xuICAgICAgfSBlbHNlIGlmIChpc0NhcHR1cmUgJiYgdGhpcy5lcEJCLmhhc1NldEJpdChwb3MpKSB7XG4gICAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoZnJvbSwgcG9zLCBNb3ZlVHlwZXMuRVBfQ0FQVCwgUFR5cGVzLlBBV05TKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNDYXB0dXJlKSB7IGNhcHR1cmVkID0gdGhpcy5wVHlwZXNMb2NhdGlvbnNbcG9zXTsgfVxuXG4gICAgICAgIGlmIChQVXRpbHNbUFR5cGVzLlBBV05TXS5QUk9NT19NQVNLU1t0aGlzLnR1cm5dLmhhc1NldEJpdChwb3MpKSB7XG4gICAgICAgICAgdGhpcy5hZGRQcm9tb3MoZnJvbSwgcG9zLCBtb3ZlcywgY2FwdHVyZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoZnJvbSwgcG9zLCBNb3ZlVHlwZXMuTk9STUFMLCBQVHlwZXMuUEFXTlMsIGNhcHR1cmVkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZFByb21vcyhmcm9tLCB0bywgbW92ZXMsIGNhcHR1cmVkKSB7XG4gICAgW01vdmVUeXBlcy5OUFJPTU8sIE1vdmVUeXBlcy5CUFJPTU8sXG4gICAgIE1vdmVUeXBlcy5SUFJPTU8sIE1vdmVUeXBlcy5RUFJPTU9dLmZvckVhY2goKHByb21vVHlwZSkgPT4ge1xuICAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoZnJvbSwgdG8sIHByb21vVHlwZSwgUFR5cGVzLlBBV05TLCBjYXB0dXJlZCkpO1xuICAgICB9KTtcbiAgfVxuXG4gIGFkZE5vcm1hbE1vdmVTZXQobmV3UG9zaXRpb25zLCBzdGFydFBvcywgcGllY2VUeXBlLCBtb3ZlcywgaW5jbHVkZVF1aWV0KSB7XG4gICAgbGV0IG5ld1BvcztcbiAgICBsZXQgbmV3TW92ZTtcbiAgICBsZXQgY2FwdFR5cGU7XG5cbiAgICBuZXdQb3NpdGlvbnMucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgY2FwdFR5cGUgPSB0aGlzLnBpZWNlc1t0aGlzLm9wcF0uaGFzU2V0Qml0KHBvcykgPyB0aGlzLnBUeXBlc0xvY2F0aW9uc1twb3NdIDogbnVsbDtcbiAgICAgIGlmIChpbmNsdWRlUXVpZXQgfHwgY2FwdFR5cGUpIHtcbiAgICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShzdGFydFBvcywgcG9zLCBNb3ZlVHlwZXMuTk9STUFMLCBwaWVjZVR5cGUsIGNhcHRUeXBlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRDYXN0bGVNb3Zlcyhtb3Zlcykge1xuICAgIGNvbnN0IHR1cm5DYXN0bGVSaWdodHMgPSB0aGlzLmdldENhc3RsZVJpZ2h0cyh0aGlzLnR1cm4pO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gUFV0aWxzW1BUeXBlcy5LSU5HU10uSU5JVF9QT1NbdGhpcy50dXJuXTtcbiAgICBjb25zdCBub3RPY2N1cGllZCA9IHRoaXMuZ2V0T2NjdXBpZWQoKS5ub3QoKTtcblxuICAgIGlmICgodHVybkNhc3RsZVJpZ2h0cyAmIDBiMSkgJiYgUFV0aWxzW1BUeXBlcy5LSU5HU10uY2FuQ2FzdGxlKHRoaXMudHVybiwgRGlycy5XRVNULCBub3RPY2N1cGllZCkpIHtcbiAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoc3RhcnRQb3MsIHN0YXJ0UG9zIC0gMiwgTW92ZVR5cGVzLkNTVExfUVVFRU4sIFBUeXBlcy5LSU5HUykpO1xuICAgIH1cblxuICAgIGlmICgodHVybkNhc3RsZVJpZ2h0cyAmIDBiMTApICYmIFBVdGlsc1tQVHlwZXMuS0lOR1NdLmNhbkNhc3RsZSh0aGlzLnR1cm4sIERpcnMuRUFTVCwgbm90T2NjdXBpZWQpKSB7XG4gICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKHN0YXJ0UG9zLCBzdGFydFBvcyArIDIsIE1vdmVUeXBlcy5DU1RMX0tJTkcsIFBUeXBlcy5LSU5HUykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybnMgMmJpdCB2YWx1ZSBmb3IgdGhlIGNvbG9yJ3MgY2FzdGxpbmcgcmlnaHRzXG4gIC8vIGxlZnQgYml0ID0+IGtpbmctc2lkZSByaWdodHNcbiAgLy8gcmlnaHQgYml0ID0+IHF1ZWVuLXNpZGUgcmlnaHRzXG4gIGdldENhc3RsZVJpZ2h0cyhjb2xvcikge1xuICAgIHJldHVybiBjb2xvciA9PT0gQ29sb3JzLldISVRFID8gdGhpcy5jYXN0bGVSaWdodHMgJiAwYjExIDogdGhpcy5jYXN0bGVSaWdodHMgPj4+IDI7XG4gIH1cblxuICBnZXRDb2xvclBpZWNlU2V0KGNvbG9yLCBwaWVjZVR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5waWVjZXNbY29sb3JdLmFuZCh0aGlzLnBpZWNlc1twaWVjZVR5cGVdKTtcbiAgfVxuXG4gIGdldE9jY3VwaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnBpZWNlc1tDb2xvcnMuV0hJVEVdLm9yKHRoaXMucGllY2VzW0NvbG9ycy5CTEFDS10pO1xuICB9XG5cbiAgZ2V0Tm90T2NjdXBpZWRCeShjb2xvcikge1xuICAgIHJldHVybiB0aGlzLnBpZWNlc1tjb2xvcl0ubm90KCk7XG4gIH1cblxuICBtYWtlTW92ZShtb3ZlKSB7XG4gICAgY29uc3QgbW92ZURhdGEgPSBtb3ZlLmdldERhdGEoKTtcblxuICAgIGxldCBpc0xlZ2FsO1xuICAgIHRoaXMudGVzdE1vdmUobW92ZURhdGEsICh0ZXN0c0xlZ2FsKSA9PiB7XG4gICAgICBpc0xlZ2FsID0gdGVzdHNMZWdhbDtcbiAgICAgIHJldHVybiAhaXNMZWdhbDtcbiAgICB9KTtcblxuICAgIGlmICghaXNMZWdhbCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB0aGlzLnNldE5ld1N0YXRlKG1vdmVEYXRhKTtcbiAgICB0aGlzLmV4ZWNNb3ZlVHlwZShtb3ZlRGF0YS5mcm9tLCBtb3ZlRGF0YS50bywgbW92ZURhdGEudHlwZSk7XG5cbiAgICB0aGlzLnByZXZNb3Zlcy5wdXNoKG1vdmUpO1xuICAgIHRoaXMuc3dhcFR1cm4oKTtcbiAgICB0aGlzLmFkZFBvc2l0aW9uQ291bnQoKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdGVzdE1vdmUobW92ZURhdGEsIGNiKSB7XG4gICAgaWYgKG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUpIHtcbiAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KG1vdmVEYXRhLnRvLCB0aGlzLm9wcCwgbW92ZURhdGEuY2FwdFBpZWNlVHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmVEYXRhLmlzUHJvbW8pIHtcbiAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KG1vdmVEYXRhLmZyb20sIHRoaXMudHVybiwgUFR5cGVzLlBBV05TKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlUGllY2UobW92ZURhdGEuZnJvbSwgbW92ZURhdGEudG8sIHRoaXMudHVybiwgbW92ZURhdGEucGllY2VUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmRvID0gY2IodGhpcy50ZXN0c0xlZ2FsKG1vdmVEYXRhKSk7XG4gICAgaWYgKCF1bmRvKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKG1vdmVEYXRhLmlzUHJvbW8pIHtcbiAgICAgIHRoaXMuc2V0UGllY2VBdChtb3ZlRGF0YS5mcm9tLCB0aGlzLnR1cm4sIFBUeXBlcy5QQVdOUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVBpZWNlKG1vdmVEYXRhLnRvLCBtb3ZlRGF0YS5mcm9tLCB0aGlzLnR1cm4sIG1vdmVEYXRhLnBpZWNlVHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0UGllY2VBdChtb3ZlRGF0YS50bywgdGhpcy5vcHAsIG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHRlc3RzTGVnYWwobW92ZURhdGEpIHtcbiAgICBpZiAobW92ZURhdGEuaXNDYXN0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzTGVnYWxDYXN0bGUobW92ZURhdGEuZnJvbSwgbW92ZURhdGEudHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhdGhpcy5pbkNoZWNrKHRoaXMudHVybik7XG4gICAgfVxuICB9XG5cbiAgLy8gdG8gbWFrZSBzdXJlIHdlIGFyZW4ndCBzbGlkaW5nIHRocm91Z2ggY2hlY2tcbiAgaXNMZWdhbENhc3RsZShwb3MsIGNhc3RsZVR5cGUpIHtcbiAgICBjb25zdCBkaXIgPSBjYXN0bGVUeXBlID09PSBNb3ZlVHlwZXMuQ1NUTF9LSU5HID8gMSA6IC0xO1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoY291bnQgPD0gMikge1xuICAgICAgaWYgKHRoaXMuaXNBdHRhY2tlZChwb3MsIHRoaXMudHVybikpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICBjb3VudCsrO1xuICAgICAgcG9zICs9IGRpcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluQ2hlY2soY29sb3IpIHtcbiAgICBjb25zdCBraW5nUG9zID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KGNvbG9yLCBQVHlwZXMuS0lOR1MpLmJpdFNjYW5Gb3J3YXJkKCk7XG4gICAgcmV0dXJuIHRoaXMuaXNBdHRhY2tlZChraW5nUG9zLCBjb2xvcik7XG4gIH1cblxuICBpc0F0dGFja2VkKHBvcywgY29sb3IpIHtcbiAgICBjb25zdCBwb3NCQiA9IEJpdEJvYXJkLmZyb21Qb3MocG9zKTtcbiAgICBjb25zdCBvY2N1cGllZCA9IHRoaXMuZ2V0T2NjdXBpZWQoKTtcbiAgICBjb25zdCBvcHBDb2xvciA9IHRoaXMuZ2V0T3RoZXJDb2xvcihjb2xvcik7XG4gICAgY29uc3QgcGF3bnMgPSB0aGlzLmdldENvbG9yUGllY2VTZXQob3BwQ29sb3IsIFBUeXBlcy5QQVdOUyk7XG5cbiAgICBjb25zdCBxdWVlbkJCID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KG9wcENvbG9yLCBQVHlwZXMuUVVFRU5TKTtcbiAgICByZXR1cm4gKCFQVXRpbHNbUFR5cGVzLlBBV05TXS5hdHRhY2tzTGVmdChvcHBDb2xvciwgcGF3bnMsIHBvc0JCKS5pc1plcm8oKSB8fFxuICAgICAgICAgICAgIVBVdGlsc1tQVHlwZXMuUEFXTlNdLmF0dGFja3NSaWdodChvcHBDb2xvciwgcGF3bnMsIHBvc0JCKS5pc1plcm8oKSB8fFxuICAgICAgICAgICAgIVBVdGlsc1tQVHlwZXMuS05JR0hUU10ubW92ZXMocG9zLCB0aGlzLmdldENvbG9yUGllY2VTZXQob3BwQ29sb3IsIFBUeXBlcy5LTklHSFRTKSkuaXNaZXJvKCkgfHxcbiAgICAgICAgICAgICFQVXRpbHNbUFR5cGVzLkJJU0hPUFNdLm1vdmVzKHBvcywgb2NjdXBpZWQsIHRoaXMuZ2V0Q29sb3JQaWVjZVNldChvcHBDb2xvciwgUFR5cGVzLkJJU0hPUFMpLm9yKHF1ZWVuQkIpKS5pc1plcm8oKSB8fFxuICAgICAgICAgICAgIVBVdGlsc1tQVHlwZXMuUk9PS1NdLm1vdmVzKHBvcywgb2NjdXBpZWQsIHRoaXMuZ2V0Q29sb3JQaWVjZVNldChvcHBDb2xvciwgUFR5cGVzLlJPT0tTKS5vcihxdWVlbkJCKSkuaXNaZXJvKCkgfHxcbiAgICAgICAgICAgICFQVXRpbHNbUFR5cGVzLktJTkdTXS5tb3Zlcyhwb3MsIHRoaXMuZ2V0Q29sb3JQaWVjZVNldChvcHBDb2xvciwgUFR5cGVzLktJTkdTKSkuaXNaZXJvKCkpO1xuICB9XG5cbiAgc2V0TmV3U3RhdGUobW92ZURhdGEpIHtcbiAgICB0aGlzLmFkZFByZXZTdGF0ZSgpO1xuXG4gICAgdGhpcy5hZGp1c3RDYXN0bGVSaWdodHMobW92ZURhdGEpO1xuICAgIHRoaXMuc2V0TmV3RXBTdGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlQ2xvY2sobW92ZURhdGEpO1xuICB9XG5cbiAgLy8gYWRkcyB0aGUgY3VycmVudCBzdGF0ZSB2YWx1ZXMgdG8gdGhlIHByZXZTdGF0ZXMgYXJyYXlcbiAgLy8gdXNlZCBmb3IgbW92ZSB1bm1ha2luZyBwdXJwb3Nlc1xuICBhZGRQcmV2U3RhdGUoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IGVwQkI6IHRoaXMuZXBCQixcbiAgICAgICAgICAgICAgICAgICAgY2FzdGxlUmlnaHRzOiB0aGlzLmNhc3RsZVJpZ2h0cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVIYXNoOiB0aGlzLnN0YXRlSGFzaCxcbiAgICAgICAgICAgICAgICAgICAgaGFsZk1vdmVDbG9jazogdGhpcy5oYWxmTW92ZUNsb2NrLFxuICAgICAgICAgICAgICAgICAgICBmdWxsTW92ZUNsb2NrOiB0aGlzLmZ1bGxNb3ZlQ2xvY2tcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgdGhpcy5wcmV2U3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgYWRqdXN0Q2FzdGxlUmlnaHRzKG1vdmVEYXRhKSB7XG4gICAgY29uc3QgdHVybkNhc3RsZVJpZ2h0cyA9IHRoaXMuZ2V0Q2FzdGxlUmlnaHRzKHRoaXMudHVybik7XG4gICAgbGV0IGRpcjtcbiAgICBpZiAobW92ZURhdGEucGllY2VUeXBlID09PSBQVHlwZXMuS0lOR1MgJiYgdHVybkNhc3RsZVJpZ2h0cykge1xuICAgICAgdGhpcy5jbGVhckNhc3RsZVJpZ2h0cyh0aGlzLnR1cm4sIERpcnMuRUFTVCk7XG4gICAgICB0aGlzLmNsZWFyQ2FzdGxlUmlnaHRzKHRoaXMudHVybiwgRGlycy5XRVNUKTtcbiAgICB9IGVsc2UgaWYgKG1vdmVEYXRhLnBpZWNlVHlwZSA9PT0gUFR5cGVzLlJPT0tTICYmIHR1cm5DYXN0bGVSaWdodHMpIHtcbiAgICAgIGRpciA9IG1vdmVEYXRhLmZyb20gPiBQVXRpbHNbUFR5cGVzLktJTkdTXS5JTklUX1BPU1t0aGlzLnR1cm5dID8gRGlycy5FQVNUIDogRGlycy5XRVNUO1xuICAgICAgdGhpcy5jbGVhckNhc3RsZVJpZ2h0cyh0aGlzLnR1cm4sIGRpcik7XG4gICAgfVxuXG4gICAgaWYgKG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUgPT09IFBUeXBlcy5ST09LUyAmJiB0aGlzLmdldENhc3RsZVJpZ2h0cyh0aGlzLm9wcCkpIHtcbiAgICAgIGRpciA9IG1vdmVEYXRhLnRvID4gUFV0aWxzW1BUeXBlcy5LSU5HU10uSU5JVF9QT1NbdGhpcy5vcHBdID8gRGlycy5FQVNUIDogRGlycy5XRVNUO1xuICAgICAgdGhpcy5jbGVhckNhc3RsZVJpZ2h0cyh0aGlzLm9wcCwgZGlyKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNhc3RsZVJpZ2h0cyhjb2xvciwgZGlyKSB7XG4gICAgbGV0IGNsZWFyUmlnaHRzUG9zID0gMDtcbiAgICBpZiAoY29sb3IgPT09IENvbG9ycy5CTEFDSykgeyBjbGVhclJpZ2h0c1BvcyArPSAyOyB9XG4gICAgaWYgKGRpciA9PT0gRGlycy5FQVNUKSB7IGNsZWFyUmlnaHRzUG9zICs9IDE7IH1cblxuICAgIGxldCBjbGVhclJpZ2h0c01hc2sgPSAxIDw8IGNsZWFyUmlnaHRzUG9zO1xuICAgIGlmIChjbGVhclJpZ2h0c01hc2sgJiB0aGlzLmNhc3RsZVJpZ2h0cykge1xuICAgICAgdGhpcy5jYXN0bGVSaWdodHMgPSAodGhpcy5jYXN0bGVSaWdodHMgJiAofmNsZWFyUmlnaHRzTWFzaykpID4+PiAwO1xuICAgICAgdGhpcy5zdGF0ZUhhc2ggXj0gY2FzdGxlSGFzaEtleXNbY2xlYXJSaWdodHNQb3NdO1xuICAgIH1cbiAgfVxuXG4gIHNldE5ld0VwU3RhdGUoKSB7XG4gICAgY29uc3QgZXBQb3MgPSB0aGlzLmVwQkIuYml0U2NhbkZvcndhcmQoKTtcbiAgICBpZiAoZXBQb3MgIT09IG51bGwpIHsgdGhpcy5zdGF0ZUhhc2ggXj0gZXBQb3NIYXNoS2V5c1tlcFBvc107IH1cbiAgICB0aGlzLmVwQkIgPSBuZXcgQml0Qm9hcmQoKTtcbiAgfVxuXG4gIHVwZGF0ZUNsb2NrKG1vdmVEYXRhKSB7XG4gICAgaWYgKHRoaXMudHVybiA9PT0gQ29sb3JzLkJMQUNLKSB7XG4gICAgICB0aGlzLmZ1bGxNb3ZlQ2xvY2srKztcbiAgICB9XG5cbiAgICBpZiAobW92ZURhdGEuY2FwdFBpZWNlVHlwZSB8fCBtb3ZlRGF0YS5waWVjZVR5cGUgPT09IFBUeXBlcy5QQVdOUykge1xuICAgICAgdGhpcy5oYWxmTW92ZUNsb2NrID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYWxmTW92ZUNsb2NrKys7XG4gICAgfVxuICB9XG5cbiAgZXhlY01vdmVUeXBlKGZyb20sIHRvLCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgTW92ZVR5cGVzLk5PUk1BTDpcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuREJMX1BQVVNIOlxuICAgICAgICBsZXQgZXBQb3MgPSB0byArICgtUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dICogOCk7XG4gICAgICAgIHRoaXMuZXBCQiA9IEJpdEJvYXJkLmZyb21Qb3MoZXBQb3MpO1xuICAgICAgICB0aGlzLnN0YXRlSGFzaCBePSBlcFBvc0hhc2hLZXlzW2VwUG9zXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5DU1RMX0tJTkc6XG4gICAgICAgIHRoaXMubW92ZVBpZWNlKGZyb20gKyAzLCBmcm9tICsgMSwgdGhpcy50dXJuLCBQVHlwZXMuUk9PS1MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkNTVExfUVVFRU46XG4gICAgICAgIHRoaXMubW92ZVBpZWNlKGZyb20gLSA0LCBmcm9tIC0gMSwgdGhpcy50dXJuLCBQVHlwZXMuUk9PS1MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkVQX0NBUFQ6XG4gICAgICAgIGxldCBjYXB0dXJlZFBvcyA9IHRvIC0gKFBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSAqIDgpO1xuICAgICAgICB0aGlzLmNsZWFyUGllY2VBdChjYXB0dXJlZFBvcywgdGhpcy5vcHAsIFBUeXBlcy5QQVdOUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuTlBST01POlxuICAgICAgICB0aGlzLnNldFBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLktOSUdIVFMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkJQUk9NTzpcbiAgICAgICAgdGhpcy5zZXRQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5CSVNIT1BTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5SUFJPTU86XG4gICAgICAgIHRoaXMuc2V0UGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuUk9PS1MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLlFQUk9NTzpcbiAgICAgICAgdGhpcy5zZXRQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5RVUVFTlMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBhZGRQb3NpdGlvbkNvdW50KCkge1xuICAgIGNvbnN0IGN1cnJIYXNoID0gdGhpcy5nZXRIYXNoKCk7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uQ291bnRzW2N1cnJIYXNoXSkge1xuICAgICAgdGhpcy5wb3NpdGlvbkNvdW50c1tjdXJySGFzaF0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvc2l0aW9uQ291bnRzW2N1cnJIYXNoXSArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHVubWFrZVByZXZNb3ZlKCkge1xuICAgIGNvbnN0IHByZXZNb3ZlID0gdGhpcy5wcmV2TW92ZXMucG9wKCk7XG4gICAgaWYgKCFwcmV2TW92ZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIHRoaXMuc3VidHJhY3RQb3NpdGlvbkNvdW50KCk7XG4gICAgdGhpcy5zd2FwVHVybigpO1xuXG4gICAgY29uc3QgbW92ZURhdGEgPSBwcmV2TW92ZS5nZXREYXRhKCk7XG5cbiAgICB0aGlzLnJldmVyc2VNb3ZlVHlwZShtb3ZlRGF0YS5mcm9tLCBtb3ZlRGF0YS50bywgbW92ZURhdGEudHlwZSk7XG4gICAgdGhpcy5yZXN0b3JlUHJldlN0YXRlKCk7XG5cbiAgICBpZiAobW92ZURhdGEuaXNQcm9tbykge1xuICAgICAgdGhpcy5zZXRQaWVjZUF0KG1vdmVEYXRhLmZyb20sIHRoaXMudHVybiwgUFR5cGVzLlBBV05TKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlUGllY2UobW92ZURhdGEudG8sIG1vdmVEYXRhLmZyb20sIHRoaXMudHVybiwgbW92ZURhdGEucGllY2VUeXBlKTtcbiAgICB9XG5cblxuICAgIGlmIChtb3ZlRGF0YS5jYXB0UGllY2VUeXBlKSB7XG4gICAgICB0aGlzLnNldFBpZWNlQXQobW92ZURhdGEudG8sIHRoaXMub3BwLCBtb3ZlRGF0YS5jYXB0UGllY2VUeXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc3RvcmVQcmV2U3RhdGUoKSB7XG4gICAgY29uc3QgcHJldlN0YXRlID0gdGhpcy5wcmV2U3RhdGVzLnBvcCgpO1xuICAgIHRoaXMuZXBCQiA9IHByZXZTdGF0ZS5lcEJCO1xuICAgIHRoaXMuY2FzdGxlUmlnaHRzID0gcHJldlN0YXRlLmNhc3RsZVJpZ2h0cztcbiAgICB0aGlzLnN0YXRlSGFzaCA9IHByZXZTdGF0ZS5zdGF0ZUhhc2g7XG4gICAgdGhpcy5oYWxmTW92ZUNsb2NrID0gcHJldlN0YXRlLmhhbGZNb3ZlQ2xvY2s7XG4gICAgdGhpcy5mdWxsTW92ZUNsb2NrID0gcHJldlN0YXRlLmZ1bGxNb3ZlQ2xvY2s7XG4gIH1cblxuICBzdWJ0cmFjdFBvc2l0aW9uQ291bnQoKSB7XG4gICAgY29uc3QgY3Vyckhhc2ggPSB0aGlzLmdldEhhc2goKTtcbiAgICB0aGlzLnBvc2l0aW9uQ291bnRzW2N1cnJIYXNoXSAtPSAxO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uQ291bnRzW2N1cnJIYXNoXSA8PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5wb3NpdGlvbkNvdW50c1tjdXJySGFzaF07XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJzZU1vdmVUeXBlKGZyb20sIHRvLCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgTW92ZVR5cGVzLk5PUk1BTDpcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkRCTF9QUFVTSDpcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuQ1NUTF9LSU5HOlxuICAgICAgICB0aGlzLm1vdmVQaWVjZShmcm9tICsgMSwgZnJvbSArIDMsIHRoaXMudHVybiwgUFR5cGVzLlJPT0tTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5DU1RMX1FVRUVOOlxuICAgICAgICB0aGlzLm1vdmVQaWVjZShmcm9tIC0gMSwgZnJvbSAtIDQsIHRoaXMudHVybiwgUFR5cGVzLlJPT0tTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5FUF9DQVBUOlxuICAgICAgICBsZXQgY2FwdHVyZWRQb3MgPSB0byAtIChQVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0gKiA4KTtcbiAgICAgICAgdGhpcy5zZXRQaWVjZUF0KGNhcHR1cmVkUG9zLCB0aGlzLm9wcCwgUFR5cGVzLlBBV05TKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5OUFJPTU86XG4gICAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5LTklHSFRTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5CUFJPTU86XG4gICAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5CSVNIT1BTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5SUFJPTU86XG4gICAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5ST09LUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuUVBST01POlxuICAgICAgICB0aGlzLmNsZWFyUGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuUVVFRU5TKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbW92ZVBpZWNlKGZyb20sIHRvLCBjb2xvciwgcGllY2VUeXBlKSB7XG4gICAgdGhpcy5jbGVhclBpZWNlQXQoZnJvbSwgY29sb3IsIHBpZWNlVHlwZSk7XG4gICAgdGhpcy5zZXRQaWVjZUF0KHRvLCBjb2xvciwgcGllY2VUeXBlKTtcbiAgfVxuXG4gIHNldFBpZWNlQXQocG9zLCBjb2xvciwgcGllY2VUeXBlKSB7XG4gICAgdGhpcy5waWVjZXNbY29sb3JdLnNldEJpdChwb3MpO1xuICAgIHRoaXMucGllY2VzW3BpZWNlVHlwZV0uc2V0Qml0KHBvcyk7XG4gICAgdGhpcy5wVHlwZXNMb2NhdGlvbnNbcG9zXSA9IHBpZWNlVHlwZTtcbiAgICB0aGlzLnBQb3NIYXNoIF49IHBpZWNlUG9zSGFzaEtleXNbcG9zXVtwaWVjZVR5cGVdW2NvbG9yXTtcbiAgfVxuXG4gIGNsZWFyUGllY2VBdChwb3MsIGNvbG9yLCBwaWVjZVR5cGUpIHtcbiAgICB0aGlzLnBpZWNlc1tjb2xvcl0uY2xlYXJCaXQocG9zKTtcbiAgICB0aGlzLnBpZWNlc1twaWVjZVR5cGVdLmNsZWFyQml0KHBvcyk7XG4gICAgdGhpcy5wVHlwZXNMb2NhdGlvbnNbcG9zXSA9IG51bGw7XG4gICAgdGhpcy5wUG9zSGFzaCBePSBwaWVjZVBvc0hhc2hLZXlzW3Bvc11bcGllY2VUeXBlXVtjb2xvcl07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3Bvc2l0aW9uL2luZGV4LmpzIiwiZnVuY3Rpb24gZ2VuZXJhdGVNU0JUYWJsZShtYXgpIHtcbiAgbGV0IHJlcyA9IFtdO1xuICBsZXQgaW50O1xuICBmb3IgKGludCA9IDE7IGludCA8PSBtYXg7IGludCsrKSB7XG4gICAgcmVzW2ludF0gPSBNYXRoLmZsb29yKE1hdGgubG9nMihpbnQpKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmNvbnN0IG1vc3RTaWdCaXRUYWJsZSA9IGdlbmVyYXRlTVNCVGFibGUoMjU1KTtcblxuZnVuY3Rpb24gcG9wQ291bnQzMihpbnQpIHtcblx0aW50IC09IChpbnQgPj4+IDEpICYgMHg1NTU1NTU1NTtcblx0aW50ID0gKGludCAmIDB4MzMzMzMzMzMpICsgKChpbnQgPj4+IDIpICYgMHgzMzMzMzMzMyk7XG5cdHJldHVybiAoKGludCArIChpbnQgPj4+IDQpICYgMHhGMEYwRjBGKSAqIDB4MTAxMDEwMSkgPj4+IDI0O1xufVxuXG5mdW5jdGlvbiBiaXRTY2FuRm9yd2FyZDMyKGludCkge1xuICByZXR1cm4gcG9wQ291bnQzMigoaW50ICYgLWludCkgLSAxKTtcbn1cblxuZnVuY3Rpb24gYml0U2NhblJldmVyc2UzMihpbnQpIHtcbiAgbGV0IHJlcyA9IDA7XG4gIGlmIChpbnQgPiAweEZGRkYpIHtcbiAgICBpbnQgPj4+PSAxNjtcbiAgICByZXMgKz0gMTY7XG4gIH1cblxuICBpZiAoaW50ID4gMHhGRikge1xuICAgIGludCA+Pj49IDg7XG4gICAgcmVzICs9IDg7XG4gIH1cblxuICByZXR1cm4gcmVzICsgbW9zdFNpZ0JpdFRhYmxlW2ludF07XG59XG5cbmZ1bmN0aW9uIGNsZWFyTGVhc3RTaWdCaXQzMihpbnQpIHtcbiAgcmV0dXJuIChpbnQgJiAoaW50IC0gMSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcG9wQ291bnQzMixcbiAgYml0U2NhbkZvcndhcmQzMixcbiAgYml0U2NhblJldmVyc2UzMixcbiAgY2xlYXJMZWFzdFNpZ0JpdDMyXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYml0Ym9hcmQvaW50MzJVdGlscy5qcyIsImNvbnN0IEJpdEJvYXJkID0gcmVxdWlyZSgnLi9iaXRib2FyZC5qcycpO1xuXG4vLyB0aGlzIGZpbGUgaW5jbHVkZXMgc3RhdGljIHNldHMgb2YgYml0Ym9hcmRzIHRoYXRcbi8vIGFyZSBjb21tb25seSB1c2VkIHRocm91Z2hvdXQgdGhlIHByb2dyYW1cblxuY29uc3QgRlVMTF9CT0FSRCA9IG5ldyBCaXRCb2FyZCgpLm5vdCgpO1xuXG5jb25zdCBDT0xTID0gZnVuY3Rpb24oKSB7XG4gIGxldCBjb2xJZHggPSAwO1xuICBsZXQgY29scyA9IFtdO1xuICB3aGlsZSAoY29sSWR4IDwgOCkge1xuICAgIGNvbHMucHVzaChCaXRCb2FyZC5mcm9tQ29sKGNvbElkeCkpO1xuICAgIGNvbElkeCsrO1xuICB9XG5cbiAgcmV0dXJuIGNvbHM7XG59KCk7XG5cblxuY29uc3QgUk9XUyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcm93SWR4ID0gMDtcbiAgbGV0IHJvd3MgPSBbXTtcbiAgd2hpbGUgKHJvd0lkeCA8IDgpIHtcbiAgICByb3dzLnB1c2goQml0Qm9hcmQuZnJvbVJvdyhyb3dJZHgpKTtcbiAgICByb3dJZHgrKztcbiAgfVxuXG4gIHJldHVybiByb3dzO1xufSgpO1xuXG5cbmNvbnN0IERJQUdTID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpYWdzID0gW107XG4gIGxldCBwb3MgPSA1NjtcblxuICB3aGlsZSAocG9zID49IDApIHtcbiAgICBkaWFncy5wdXNoKEJpdEJvYXJkLnVwcGVyUmlnaHREaWFnKHBvcykpO1xuICAgIHBvcyAtPSA4O1xuICB9XG5cbiAgcG9zID0gMTtcblxuICB3aGlsZSAocG9zIDwgOCkge1xuICAgIGRpYWdzLnB1c2goQml0Qm9hcmQudXBwZXJSaWdodERpYWcocG9zKSk7XG4gICAgcG9zKys7XG4gIH1cblxuICByZXR1cm4gZGlhZ3M7XG59KCk7XG5cblxuY29uc3QgQU5USV9ESUFHUyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhbnRpRGlhZ3MgPSBbXTtcbiAgbGV0IHBvcyA9IDA7XG5cbiAgd2hpbGUgKHBvcyA8IDgpIHtcbiAgICBhbnRpRGlhZ3MucHVzaChCaXRCb2FyZC51cHBlckxlZnREaWFnKHBvcykpO1xuICAgIHBvcysrO1xuICB9XG5cbiAgcG9zID0gMTU7XG4gIHdoaWxlIChwb3MgPCA2NCkge1xuICAgIGFudGlEaWFncy5wdXNoKEJpdEJvYXJkLnVwcGVyTGVmdERpYWcocG9zKSk7XG4gICAgcG9zICs9IDg7XG4gIH1cblxuICByZXR1cm4gYW50aURpYWdzO1xufSgpO1xuXG5jb25zdCBOT1JUSF9PRl9ST1cgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGxldCBiYiA9IEZVTExfQk9BUkQ7XG4gIGxldCBpZHggPSAwO1xuXG4gIHdoaWxlIChpZHggPD0gNykge1xuICAgIGJiID0gYmIueG9yKFJPV1NbaWR4XSk7XG4gICAgcmVzLnB1c2goYmIpO1xuICAgIGlkeCsrO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxuY29uc3QgU09VVEhfT0ZfUk9XID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBsZXQgYmIgPSBuZXcgQml0Qm9hcmQoKTtcbiAgbGV0IGlkeCA9IDA7XG5cbiAgd2hpbGUgKGlkeCA8PSA3KSB7XG4gICAgcmVzLnB1c2goYmIpO1xuICAgIGJiID0gYmIub3IoUk9XU1tpZHhdKTtcbiAgICBpZHgrKztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbmNvbnN0IEVBU1RfT0ZfQ09MID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBsZXQgYmIgPSBGVUxMX0JPQVJEO1xuICBsZXQgaWR4ID0gMDtcblxuICB3aGlsZSAoaWR4IDw9IDcpIHtcbiAgICBiYiA9IGJiLnhvcihDT0xTW2lkeF0pO1xuICAgIHJlcy5wdXNoKGJiKTtcbiAgICBpZHgrKztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbmNvbnN0IFdFU1RfT0ZfQ09MID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBsZXQgYmIgPSBuZXcgQml0Qm9hcmQoKTtcbiAgbGV0IGlkeCA9IDA7XG5cbiAgd2hpbGUgKGlkeCA8PSA3KSB7XG4gICAgcmVzLnB1c2goYmIpO1xuICAgIGJiID0gYmIub3IoQ09MU1tpZHhdKTtcbiAgICBpZHgrKztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBGVUxMX0JPQVJELFxuICBDT0xTLFxuICBST1dTLFxuICBESUFHUyxcbiAgQU5USV9ESUFHUyxcbiAgTk9SVEhfT0ZfUk9XLFxuICBTT1VUSF9PRl9ST1csXG4gIEVBU1RfT0ZfQ09MLFxuICBXRVNUX09GX0NPTFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2JpdGJvYXJkL21hc2tzLmpzIiwiLy8gaHR0cHM6Ly93d3cuY2hlc3Nwcm9ncmFtbWluZy5vcmcvRW5jb2RpbmdfTW92ZXMjRnJvbS1Ub19CYXNlZFxuLy8gcmVxdWlyZSgnLi4vc3RyaW5nX2NvbnRhbnRzLmpzJyk7XG5cbmNvbnN0IHR5cGVzQXJyID0gWydOT1JNQUwnLCAnREJMX1BQVVNIJyxcbiAgICAgICAgICAgICAgICAgICdDU1RMX0tJTkcnLCAnQ1NUTF9RVUVFTicsXG4gICAgICAgICAgICAgICAgICAnRVBfQ0FQVCcsICdOUFJPTU8nLFxuICAgICAgICAgICAgICAgICAgJ0JQUk9NTycsJ1JQUk9NTycsICdRUFJPTU8nXTtcblxuY29uc3QgVHlwZXMgPSB0eXBlc0Fyci5yZWR1Y2UoKHJlcywgdHlwZSwgaWR4KSA9PiB7XG4gIHJlc1t0eXBlXSA9IGlkeDtcbiAgcmV0dXJuIHJlcztcbn0sIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IFR5cGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tb3ZlL2NvbnN0YW50cy5qcyIsImNvbnN0IHN0ZXBNb3ZlID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvc3RlcF9tb3ZlLmpzJyk7XG5jb25zdCB7IEJCTWFza3MgfSA9IHJlcXVpcmUoJy4uL2JpdGJvYXJkJyk7XG5jb25zdCB7IENvbG9ycyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuY29uc3QgRElSUyA9IHtcbiAgW0NvbG9ycy5XSElURV06IDEsXG4gIFtDb2xvcnMuQkxBQ0tdOiAtMVxufTtcblxuY29uc3QgSU5JVF9NQVNLUyA9IHtcbiAgW0NvbG9ycy5XSElURV06IEJCTWFza3MuUk9XU1sxXSxcbiAgW0NvbG9ycy5CTEFDS106IEJCTWFza3MuUk9XU1s2XVxufTtcblxuY29uc3QgUGF3bnMgPSB7XG4gIHZhbHVlOiAxMDAsXG4gIHBvc2l0aW9uVmFsdWVzOiBbXG5cdFx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0XHQ1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsXG5cdFx0MTAsIDEwLCAyMCwgMzAsIDMwLCAyMCwgMTAsIDEwLFxuXHRcdDUsIDUsIDEwLCAyNSwgMjUsIDEwLCA1LCA1LFxuXHRcdDAsIDAsIDAsIDIwLCAyMCwgMCwgMCwgMCxcblx0XHQ1LCAtNSwgLTEwLCAwLCAwLCAtMTAsIC01LCA1LFxuXHRcdDUsIDEwLCAxMCwgLTIwLCAtMjAsIDEwLCAxMCwgNSxcblx0XHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXG5cdF0sXG4gIERJUlMsXG4gIFBST01PX01BU0tTOiB7IFtDb2xvcnMuV0hJVEVdOiBCQk1hc2tzLlJPV1NbN10sXG4gICAgICAgICAgICAgICAgIFtDb2xvcnMuQkxBQ0tdOiBCQk1hc2tzLlJPV1NbMF1cbiAgICAgICAgICAgICAgIH0sXG4gIGF0dGFja3NMZWZ0OiAoY29sb3IsIHBvc2l0aW9ucywgb3BwUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIHN0ZXBNb3ZlKHBvc2l0aW9ucywgRElSU1tjb2xvcl0sIC1ESVJTW2NvbG9yXSkuYW5kKG9wcFBpZWNlcyk7XG4gIH0sXG4gIGF0dGFja3NSaWdodDogKGNvbG9yLCBwb3NpdGlvbnMsIG9wcFBpZWNlcykgPT4ge1xuICAgIHJldHVybiBzdGVwTW92ZShwb3NpdGlvbnMsIERJUlNbY29sb3JdLCBESVJTW2NvbG9yXSkuYW5kKG9wcFBpZWNlcyk7XG4gIH0sXG4gIHNpbmdsZVB1c2g6IChjb2xvciwgcG9zaXRpb25zLCBub3RPY2N1cGllZCkgPT4ge1xuICAgIHJldHVybiBzdGVwTW92ZShwb3NpdGlvbnMsIERJUlNbY29sb3JdLCAwKS5hbmQobm90T2NjdXBpZWQpO1xuICB9LFxuICBkb3VibGVQdXNoOiAoY29sb3IsIHBvc2l0aW9ucywgbm90T2NjdXBpZWQpID0+IHtcbiAgICBjb25zdCBvbmVQdXNoID0gc3RlcE1vdmUocG9zaXRpb25zLmFuZChJTklUX01BU0tTW2NvbG9yXSksIERJUlNbY29sb3JdLCAwKS5hbmQobm90T2NjdXBpZWQpO1xuICAgIHJldHVybiBzdGVwTW92ZShvbmVQdXNoLCBESVJTW2NvbG9yXSwgMCkuYW5kKG5vdE9jY3VwaWVkKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXducztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9wYXducy5qcyIsImNvbnN0IHsgS05JR0hUX01PVkVTIH0gPSByZXF1aXJlKCcuL21vdmVtZW50cy9tYXNrcy5qcycpO1xuXG5jb25zdCBLbmlnaHQgPSB7XG4gIHZhbHVlOiAzMjUsXG4gIHBvc2l0aW9uVmFsdWVzOiBbXG5cdFx0LTUwLCAtNDAsIC0zMCwgLTMwLCAtMzAsIC0zMCwgLTQwLCAtNTAsXG5cdFx0LTQwLCAtMjAsIDAsIDAsIDAsIDAsIC0yMCwgLTQwLFxuXHRcdC0zMCwgMCwgMTAsIDE1LCAxNSwgMTAsIDAsIC0zMCxcblx0XHQtMzAsIDUsIDE1LCAyMCwgMjAsIDE1LCA1LCAtMzAsXG5cdFx0LTMwLCAwLCAxNSwgMjAsIDIwLCAxNSwgMCwgLTMwLFxuXHRcdC0zMCwgNSwgMTAsIDE1LCAxNSwgMTAsIDUsIC0zMCxcblx0XHQtNDAsIC0yMCwgMCwgNSwgNSwgMCwgLTIwLCAtNDAsXG5cdFx0LTUwLCAtNDAsIC0zMCwgLTMwLCAtMzAsIC0zMCwgLTQwLCAtNTBcblx0XSxcbiAgbW92ZXM6IChwb3NpdGlvbiwgbm90T3duUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIEtOSUdIVF9NT1ZFU1twb3NpdGlvbl0uYW5kKG5vdE93blBpZWNlcyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS25pZ2h0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2tuaWdodC5qcyIsImNvbnN0IHsgZGlhZyB9ID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvc2xpZGVfbW92ZXMuanMnKTtcblxuY29uc3QgQmlzaG9wID0ge1xuICB2YWx1ZTogMzI1LFxuICBwb3NpdGlvblZhbHVlczogW1xuXHRcdC0yMCwgLTEwLCAtMTAsIC0xMCwgLTEwLCAtMTAsIC0xMCwgLTIwLFxuXHRcdC0xMCwgMCwgMCwgMCwgMCwgMCwgMCwgLTEwLFxuXHRcdC0xMCwgMCwgNSwgMTAsIDEwLCA1LCAwLCAtMTAsXG5cdFx0LTEwLCA1LCA1LCAxMCwgMTAsIDUsIDUsIC0xMCxcblx0XHQtMTAsIDAsIDEwLCAxMCwgMTAsIDEwLCAwLCAtMTAsXG5cdFx0LTEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAtMTAsXG5cdFx0LTEwLCA1LCAwLCAwLCAwLCAwLCA1LCAtMTAsXG5cdFx0LTIwLCAtMTAsIC0xMCwgLTEwLCAtMTAsIC0xMCwgLTEwLCAtMjBcblx0XSxcbiAgbW92ZXM6IChwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcykgPT4ge1xuICAgIHJldHVybiBkaWFnKHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCaXNob3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvYmlzaG9wLmpzIiwiY29uc3QgeyBob3JpelZlcnQgfSA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL3NsaWRlX21vdmVzLmpzJyk7XG5cbmNvbnN0IFJvb2sgPSB7XG4gIHZhbHVlOiA1MDAsXG4gIHBvc2l0aW9uVmFsdWVzOlx0W1xuXHRcdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdFx0NSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSxcblx0XHQtNSwgMCwgMCwgMCwgMCwgMCwgMCwgLTUsXG5cdFx0LTUsIDAsIDAsIDAsIDAsIDAsIDAsIC01LFxuXHRcdC01LCAwLCAwLCAwLCAwLCAwLCAwLCAtNSxcblx0XHQtNSwgMCwgMCwgMCwgMCwgMCwgMCwgLTUsXG5cdFx0LTUsIDAsIDAsIDAsIDAsIDAsIDAsIC01LFxuXHRcdDAsIDAsIDAsIDUsIDUsIDAsIDAsIDBcblx0XSxcbiAgbW92ZXM6IChwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcykgPT4ge1xuICAgIHJldHVybiBob3JpelZlcnQocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpO1xuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb29rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL3Jvb2suanMiLCJjb25zdCB7IGRpYWcsIGhvcml6VmVydCB9ID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvc2xpZGVfbW92ZXMuanMnKTtcblxuY29uc3QgUXVlZW4gPSB7XG4gIHZhbHVlOiAxMDUwLFxuICBwb3NpdGlvblZhbHVlczogW1xuXHRcdC0yMCwgLTEwLCAtMTAsIC01LCAtNSwgLTEwLCAtMTAsIC0yMCxcblx0XHQtMTAsIDAsIDAsIDAsIDAsIDAsIDAsIC0xMCxcblx0XHQtMTAsIDAsIDUsIDUsIDUsIDUsIDAsIC0xMCxcblx0XHQtNSwgMCwgNSwgNSwgNSwgNSwgMCwgLTUsXG5cdFx0MCwgMCwgNSwgNSwgNSwgNSwgMCwgLTUsXG5cdFx0LTEwLCA1LCA1LCA1LCA1LCA1LCAwLCAtMTAsXG5cdFx0LTEwLCAwLCA1LCAwLCAwLCAwLCAwLCAtMTAsXG5cdFx0LTIwLCAtMTAsIC0xMCwgLTUsIC01LCAtMTAsIC0xMCwgLTIwXG5cdF0sXG4gIG1vdmVzOiAocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpID0+IHtcbiAgICByZXR1cm4gZGlhZyhwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcykub3IoaG9yaXpWZXJ0KHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlZW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvcXVlZW4uanMiLCJjb25zdCB7IEJCTWFza3MgfSA9IHJlcXVpcmUoJy4uL2JpdGJvYXJkJyk7XG5jb25zdCBEaXJzID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvZGlyX2NvbnN0YW50cy5qcycpO1xuY29uc3QgeyBLSU5HX01PVkVTLCBTTElERV9NT1ZFUyB9ID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvbWFza3MuanMnKTtcbmNvbnN0IHsgQ29sb3JzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5jb25zdCBJTklUX1BPUyA9IHtcbiAgW0NvbG9ycy5CTEFDS106IDYwLFxuICBbQ29sb3JzLldISVRFXTogNFxufTtcblxuY29uc3QgS2luZyA9IHtcbiAgdmFsdWU6IDQwMDAwLFxuICBwb3NpdGlvblZhbHVlczpcdFtcblx0XHQtMzAsIC00MCwgLTQwLCAtNTAsIC01MCwgLTQwLCAtNDAsIC0zMCxcblx0XHQtMzAsIC00MCwgLTQwLCAtNTAsIC01MCwgLTQwLCAtNDAsIC0zMCxcblx0XHQtMzAsIC00MCwgLTQwLCAtNTAsIC01MCwgLTQwLCAtNDAsIC0zMCxcblx0XHQtMzAsIC00MCwgLTQwLCAtNTAsIC01MCwgLTQwLCAtNDAsIC0zMCxcblx0XHQtMjAsIC0zMCwgLTMwLCAtNDAsIC00MCwgLTMwLCAtMzAsIC0yMCxcblx0XHQtMTAsIC0yMCwgLTIwLCAtMjAsIC0yMCwgLTIwLCAtMjAsIC0xMCxcblx0XHQgMjAsIDIwLCAwLCAwLCAwLCAwLCAyMCwgMjAsXG5cdFx0IDIwLCAzMCwgMTAsIDAsIDAsIDEwLCAzMCwgMjBcblx0XSxcbiAgSU5JVF9QT1MsXG4gIG1vdmVzOiAocG9zaXRpb24sIG5vdE93blBpZWNlcykgPT4ge1xuICAgIHJldHVybiBLSU5HX01PVkVTW3Bvc2l0aW9uXS5hbmQobm90T3duUGllY2VzKTtcbiAgfSxcbiAgY2FuQ2FzdGxlOiAoY29sb3IsIGRpciwgbm90T2NjdXBpZWQpID0+IHtcbiAgICBjb25zdCBjYXN0bGVTbGlkZSA9IFNMSURFX01PVkVTW0lOSVRfUE9TW2NvbG9yXV1bZGlyXS5hbmQobm90T2NjdXBpZWQpO1xuICAgIGlmIChkaXIgPT09IERpcnMuRUFTVCkge1xuICAgICAgcmV0dXJuIGNhc3RsZVNsaWRlLnBvcENvdW50KCkgPT09IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYXN0bGVTbGlkZS5wb3BDb3VudCgpID09PSAzO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2tpbmcuanMiLCJjb25zdCB7IFR5cGVzLCBDb2xvcnMsIFBpZWNlVHlwZUxldHRlcnMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmZ1bmN0aW9uIHBpZWNlVG9MZXR0ZXIodHlwZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSBDb2xvcnMuV0hJVEUpIHtcbiAgICByZXR1cm4gUGllY2VUeXBlTGV0dGVyc1t0eXBlXTtcbiAgfSBlbHNlIGlmIChjb2xvciA9PT0gQ29sb3JzLkJMQUNLKSB7XG4gICAgcmV0dXJuIFBpZWNlVHlwZUxldHRlcnNbdHlwZV0udG9VcHBlckNhc2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZXR0ZXJUb0NvbG9yKGxldHRlcikge1xuICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCkgPT09IGxldHRlciA/IENvbG9ycy5CTEFDSyA6IENvbG9ycy5XSElURTtcbn1cblxuZnVuY3Rpb24gbGV0dGVyVG9UeXBlKGxldHRlcikge1xuICBjb25zdCBwaWVjZVR5cGVzID0gT2JqZWN0LnZhbHVlcyhUeXBlcyk7XG4gIGxldCBwaWVjZVR5cGU7XG4gIGxldCBpZHg7XG5cbiAgZm9yIChpZHggPSAwOyBpZHggPCBwaWVjZVR5cGVzLmxlbmd0aDsgaWR4KyspIHtcbiAgICBpZiAoUGllY2VUeXBlTGV0dGVyc1twaWVjZVR5cGVzW2lkeF1dID09PSBsZXR0ZXIudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcGllY2VUeXBlID0gcGllY2VUeXBlc1tpZHhdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBpZWNlVHlwZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHBpZWNlVG9MZXR0ZXIsIGxldHRlclRvQ29sb3IsIGxldHRlclRvVHlwZSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2NvbnZlcnNpb25zLmpzIiwiY29uc3QgeyBUeXBlcyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuZnVuY3Rpb24gZWFjaFBpZWNlVHlwZShjYikge1xuICBsZXQgdHlwZTtcbiAgZm9yICh0eXBlID0gVHlwZXMuUEFXTlM7IHR5cGUgPD0gVHlwZXMuS0lOR1M7IHR5cGUrKykge1xuICAgIGNiKHR5cGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWFjaFBpZWNlVHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9lYWNoX3BpZWNlX3R5cGUuanMiLCJjb25zdCB7IFBUeXBlcywgUFV0aWxzLCBDb2xvcnMsIGVhY2hQaWVjZVR5cGUgfSA9IHJlcXVpcmUoJy4uL3BpZWNlcycpO1xuXG4vLyB3ZSBzdG9yZSB6b2JyaXN0IGhhc2ggdmFsdWVzIGFzIHNpZ25lZCAzMmJpdCBpbnRlZ2Vyc1xuXG5mdW5jdGlvbiByYW5kU2lnbmVkMzJCaXQoKSB7XG4gIGNvbnN0IHBvc2l0aXZlID0gW3RydWUsIGZhbHNlXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gIGlmIChwb3NpdGl2ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTWF0aC5wb3coMiwgMzEpIC0gMSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1hdGgucG93KDIsIDMxKSkpO1xuICB9XG59XG5cbmNvbnN0IHBpZWNlUG9zSGFzaEtleXMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHJlcyA9IFtdO1xuICBsZXQgcG9zO1xuICBsZXQgbmV3UG9zS2V5cztcblxuICBjb25zdCBhZGRQVHlwZUtleXMgPSAocFR5cGUpID0+IHtcbiAgICByZXNbcG9zXVtwVHlwZV0gPSB7fTtcbiAgICByZXNbcG9zXVtwVHlwZV1bQ29sb3JzLldISVRFXSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuICAgIHJlc1twb3NdW3BUeXBlXVtDb2xvcnMuQkxBQ0tdID0gcmFuZFNpZ25lZDMyQml0KCk7XG4gIH07XG5cbiAgZm9yIChwb3MgPSAwOyBwb3MgPCA2NDsgcG9zKyspIHtcbiAgICByZXNbcG9zXSA9IHt9O1xuICAgIGVhY2hQaWVjZVR5cGUoKHBUeXBlKSA9PiBhZGRQVHlwZUtleXMocFR5cGUpKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbmNvbnN0IGVwUG9zSGFzaEtleXMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHJlcyA9IHt9O1xuICBsZXQgcG9zO1xuXG4gIC8vIGNhbiBvbmx5IGVuIHBhc3NhbnQgb250byAzcmQgb3IgNnRoIHJvd1xuICBmb3IgKHBvcyA9IDE2OyBwb3MgPD0gMjM7IHBvcysrKSB7XG4gICAgcmVzW3Bvc10gPSByYW5kU2lnbmVkMzJCaXQoKTtcbiAgfVxuXG4gIGZvciAocG9zID0gNDA7IHBvcyA8PSA0NzsgcG9zKyspIHtcbiAgICByZXNbcG9zXSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxuY29uc3QgY2FzdGxlSGFzaEtleXMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHJlcyA9IFtdO1xuICBsZXQgcmlnaHRzSWR4O1xuXG4gIGZvciAocmlnaHRzSWR4ID0gMDsgcmlnaHRzSWR4IDwgNDsgcmlnaHRzSWR4KyspIHtcbiAgICByZXNbcmlnaHRzSWR4XSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxuY29uc3QgdHVybkhhc2hLZXlzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICByZXNbQ29sb3JzLldISVRFXSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuICByZXNbQ29sb3JzLkJMQUNLXSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0geyBwaWVjZVBvc0hhc2hLZXlzLCBlcFBvc0hhc2hLZXlzLCBjYXN0bGVIYXNoS2V5cywgdHVybkhhc2hLZXlzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wb3NpdGlvbi96aGFzaF9jb25zdGFudHMuanMiLCJjb25zdCBNb3ZlU2VhcmNoID0gcmVxdWlyZSgnLi9tb3ZlX3NlYXJjaC5qcycpO1xuXG5jbGFzcyBBSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGhpbmtpbmdUaW1lID0gMTAwMDtcbiAgICB0aGlzLnByZXZQZXJmb3JtYW5jZSA9IG51bGw7XG4gIH1cblxuICBzZXRUaGlua2luZ1RpbWUodGhpbmtpbmdUaW1lKSB7XG4gICAgdGhpcy50aGlua2luZ1RpbWUgPSB0aGlua2luZ1RpbWU7XG4gIH1cblxuICBjaG9vc2VNb3ZlKHBvc2l0aW9uLCBhdmFpbGFibGVNb3Zlcykge1xuICAgIGNvbnN0IG1vdmVTZWFyY2ggPSBuZXcgTW92ZVNlYXJjaChwb3NpdGlvbiwgYXZhaWxhYmxlTW92ZXMpO1xuICAgIGNvbnN0IGJlc3RNb3ZlID0gbW92ZVNlYXJjaC5maW5kQmVzdCh0aGlzLnRoaW5raW5nVGltZSk7XG4gICAgY29uc3QgcGVyZlJlc3VsdHMgPSBtb3ZlU2VhcmNoLmdldFBlcmZvcm1hbmNlKCk7XG5cbiAgICByZXR1cm4geyBtb3ZlOiBiZXN0TW92ZSwgcGVyZm9ybWFuY2U6IHBlcmZSZXN1bHRzIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBSTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FpL2luZGV4LmpzIiwiY29uc3QgeyBQVHlwZXMsIFBVdGlscyxcbiAgICAgICAgQ29sb3JzLCBEaXJzLFxuICAgICAgICBlYWNoUGllY2VUeXBlIH0gPSByZXF1aXJlKCcuLi9waWVjZXMnKTtcbmNvbnN0IHsgVHJhbnNwb3NUYWJsZSwgVEFCTEVfU0NPUkVfVFlQRVMgfSA9IHJlcXVpcmUoJy4vdHJhbnNwb3NfdGFibGUuanMnKTtcbmNvbnN0IEtpbGxlck1vdmVMaXN0ID0gcmVxdWlyZSgnLi9raWxsZXJfbW92ZV9saXN0LmpzJyk7XG5jb25zdCBQZXJmTW9uaXRvciA9IHJlcXVpcmUoJy4vcGVyZl9tb25pdG9yLmpzJyk7XG5cbmNvbnN0IEVBUkxZX0VYSVQgPSAnZWFybHkgZXhpdCc7XG5cbmNsYXNzIE1vdmVTZWFyY2gge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgaW5pdEF2YWlsYWJsZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmluaXRBdmFpbGFibGUgPSBpbml0QXZhaWxhYmxlO1xuICAgIHRoaXMudHJhbnNQb3NUYWJsZSA9IG5ldyBUcmFuc3Bvc1RhYmxlKCk7XG4gICAgdGhpcy5raWxsZXJNb3ZlTGlzdCA9IG5ldyBLaWxsZXJNb3ZlTGlzdCgpO1xuICAgIHRoaXMucGVyZk1vbml0b3IgPSBuZXcgUGVyZk1vbml0b3IoKTtcbiAgfVxuXG4gIGZpbmRCZXN0KHRoaW5raW5nVGltZSkge1xuICAgIHRoaXMucGVyZk1vbml0b3Iuc2V0U3RhcnRUaW1lKCk7XG4gICAgdGhpcy5lbmRUaW1lID0gRGF0ZS5ub3coKSArIHRoaW5raW5nVGltZTtcblxuICAgIHRoaXMubWF4RGVwdGggPSAxO1xuICAgIHdoaWxlIChEYXRlLm5vdygpIDwgdGhpcy5lbmRUaW1lICYmIHRoaXMubWF4RGVwdGggPCAzMCkge1xuICAgICAgdGhpcy5raWxsZXJNb3ZlTGlzdC5hZGRTbG90KCk7XG4gICAgICB0aGlzLm5lZ2FNYXgodGhpcy5tYXhEZXB0aCwgLUluZmluaXR5LCBJbmZpbml0eSk7XG4gICAgICB0aGlzLm1heERlcHRoKys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4RGVwdGggPj0gMzApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHByb2FjaGluZyBkcmF3Li4uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5wZXJmTW9uaXRvci5kZXB0aCkgeyB0aGlzLnBlcmZNb25pdG9yLnNldERlcHRoKHRoaXMubWF4RGVwdGggLSAxKTsgfVxuICAgICAgdGhpcy5wZXJmTW9uaXRvci5zZXRFbmRUaW1lKCk7XG4gICAgICB0aGlzLnBlcmZNb25pdG9yLnByaW50UmVzdWx0cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJOb2RlRW50cnkgPSB0aGlzLnRyYW5zUG9zVGFibGUuZ2V0RW50cnkodGhpcy5wb3NpdGlvbi5nZXRIYXNoKCkpO1xuICAgIGlmIChjdXJyTm9kZUVudHJ5ICYmIGN1cnJOb2RlRW50cnkuYmVzdE1vdmUpIHtcbiAgICAgIHJldHVybiBjdXJyTm9kZUVudHJ5LmJlc3RNb3ZlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbml0QXZhaWxhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaW5pdEF2YWlsYWJsZS5sZW5ndGgpXTtcbiAgICB9XG4gIH1cblxuICBnZXRQZXJmb3JtYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJmTW9uaXRvci5nZXRSZXN1bHRzKCk7XG4gIH1cblxuICBxdWllc2NlbmNlU2VhcmNoKGFscGhhLCBiZXRhKSB7XG4gICAgaWYgKERhdGUubm93KCkgPiB0aGlzLmVuZFRpbWUpIHtcbiAgICAgIHRoaXMucGVyZk1vbml0b3Iuc2V0RGVwdGgodGhpcy5tYXhEZXB0aCAtIDEpO1xuICAgICAgcmV0dXJuIEVBUkxZX0VYSVQ7XG4gICAgfVxuICAgIHRoaXMucGVyZk1vbml0b3IubG9nUXVpZXNjZW50Tm9kZSgpO1xuICAgIGNvbnN0IHN0YW5kUGF0VmFsID0gdGhpcy5ldmFsdWF0ZSgpO1xuXG4gICAgaWYgKHN0YW5kUGF0VmFsID49IGJldGEpIHtcbiAgICAgIHJldHVybiBiZXRhO1xuICAgIH0gZWxzZSBpZiAoc3RhbmRQYXRWYWwgPiBhbHBoYSkge1xuICAgICAgYWxwaGEgPSBzdGFuZFBhdFZhbDtcbiAgICB9XG5cbiAgICBsZXQgaW5DaGVjayA9IHRoaXMucG9zaXRpb24uaW5DaGVjayh0aGlzLnBvc2l0aW9uLnR1cm4pO1xuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlTW92ZU9yZGVyU2NvcmUobW92ZSkge1xuICAgICAgbGV0IHNjb3JlID0gbW92ZS5nZXRDYXB0UGllY2UoKT8gKCgxICsgbW92ZS5nZXRDYXB0UGllY2UoKSkgLyAoMSArIG1vdmUuZ2V0UGllY2UoKSkpOiAwO1xuICAgICAgc2NvcmUgPSBzY29yZSAqIDEwICsgbW92ZS5nZXRQaWVjZSgpO1xuICAgICAgc2NvcmUgPSBzY29yZSAqIDEwICsgbW92ZS5nZXRUeXBlKCk7XG5cbiAgICAgIHJldHVybiBzY29yZTtcbiAgICB9XG5cbiAgICAvLyBpbmNsdWRlIHF1aWV0IG1vdmVzIChpZSBub24gY2FwdHVyZXMpIG9ubHkgaWYgdGhlIGtpbmcgaXMgaW4gY2hlY2s7XG4gICAgY29uc3QgbW92ZXMgPSB0aGlzLnNvcnRNb3Zlcyh0aGlzLnBvc2l0aW9uLmdlbmVyYXRlUHNldWRvTW92ZXMoaW5DaGVjayksIGNhbGN1bGF0ZU1vdmVPcmRlclNjb3JlKTtcblxuICAgIGxldCBtb3ZlSWR4O1xuICAgIGxldCBzY29yZTtcblxuICAgIGZvciAobW92ZUlkeCA9IDA7IG1vdmVJZHggPCBtb3Zlcy5sZW5ndGg7IG1vdmVJZHgrKykge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ubWFrZU1vdmUobW92ZXNbbW92ZUlkeF0pKSB7XG4gICAgICAgIHNjb3JlID0gLXRoaXMucXVpZXNjZW5jZVNlYXJjaCgtYmV0YSwgLWFscGhhKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi51bm1ha2VQcmV2TW92ZSgpO1xuXG4gICAgICAgIGlmIChzY29yZSA+PSBiZXRhKSB7IHJldHVybiBiZXRhOyB9XG4gICAgICAgIGlmIChzY29yZSA+IGFscGhhKSB7IGFscGhhID0gc2NvcmU7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGE7XG4gIH1cblxuICBuZWdhTWF4KGRlcHRoLCBhbHBoYSwgYmV0YSkge1xuICAgIGlmIChEYXRlLm5vdygpID4gdGhpcy5lbmRUaW1lKSB7XG4gICAgICB0aGlzLnBlcmZNb25pdG9yLnNldERlcHRoKHRoaXMubWF4RGVwdGggLSAxKTtcbiAgICAgIHJldHVybiBFQVJMWV9FWElUO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZBbHBoYSA9IGFscGhhO1xuICAgIGNvbnN0IGN1cnJIYXNoID0gdGhpcy5wb3NpdGlvbi5nZXRIYXNoKCk7XG4gICAgY29uc3QgZW50cnkgPSB0aGlzLnRyYW5zUG9zVGFibGUuZ2V0RW50cnkoY3Vyckhhc2gpO1xuICAgIGlmIChlbnRyeSAmJiBlbnRyeS5kZXB0aCA+PSBkZXB0aCkge1xuICAgICAgdGhpcy5wZXJmTW9uaXRvci5sb2dUYWJsZUhpdCgpO1xuICAgICAgc3dpdGNoIChlbnRyeS50eXBlKSB7XG4gICAgICAgIGNhc2UgVEFCTEVfU0NPUkVfVFlQRVMuRVhBQ1Q6XG4gICAgICAgICAgcmV0dXJuIGVudHJ5LnNjb3JlO1xuICAgICAgICBjYXNlIFRBQkxFX1NDT1JFX1RZUEVTLkxPV0VSQk9VTkQ6XG4gICAgICAgICAgYWxwaGEgPSBNYXRoLm1heChhbHBoYSwgZW50cnkuc2NvcmUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRBQkxFX1NDT1JFX1RZUEVTLlVQUEVSQk9VTkQ6XG4gICAgICAgICAgYmV0YSA9IE1hdGgubWluKGJldGEsIGVudHJ5LnNjb3JlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChhbHBoYSA+PSBiZXRhKSB7IHJldHVybiBlbnRyeS5zY29yZTsgfVxuICAgIH1cblxuICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVpZXNjZW5jZVNlYXJjaChhbHBoYSwgYmV0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5wZXJmTW9uaXRvci5sb2dNYWluU2VhcmNoTm9kZSgpO1xuXG4gICAgbGV0IHByZXZCZXN0TW92ZSA9IChlbnRyeSAmJiBlbnRyeS5iZXN0TW92ZSkgPyBlbnRyeS5iZXN0TW92ZSA6IG51bGw7XG4gICAgY29uc3Qgc2libGluZ0tpbGxlck1vdmVzID0gdGhpcy5raWxsZXJNb3ZlTGlzdC5nZXRTaWJsaW5nTW92ZXModGhpcy5tYXhEZXB0aCAtIGRlcHRoKTtcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmVPcmRlclNjb3JlKG1vdmUpIHtcbiAgICAgIGlmIChwcmV2QmVzdE1vdmUgJiYgbW92ZS52YWwgPT09IHByZXZCZXN0TW92ZS52YWwpIHtcbiAgICAgICAgcmV0dXJuIDEwMDAwO1xuICAgICAgfVxuICAgICAgbGV0IHNjb3JlID0gbW92ZS5nZXRDYXB0UGllY2UoKSA/ICgoMSArIG1vdmUuZ2V0Q2FwdFBpZWNlKCkpIC8gKDEgKyBtb3ZlLmdldFBpZWNlKCkpICsgMSk6IDA7XG4gICAgICBzY29yZSA9IHNjb3JlICogMTAgKyAoc2libGluZ0tpbGxlck1vdmVzLmluY2x1ZGVzKG1vdmUudmFsKSA/IDEgOiAwKTtcbiAgICAgIHNjb3JlID0gc2NvcmUgKiAxMCArIG1vdmUuZ2V0UGllY2UoKTtcbiAgICAgIHNjb3JlID0gc2NvcmUgKiAxMCArIG1vdmUuZ2V0VHlwZSgpO1xuXG4gICAgICByZXR1cm4gc2NvcmU7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZXMgPSB0aGlzLnNvcnRNb3Zlcyh0aGlzLnBvc2l0aW9uLmdlbmVyYXRlUHNldWRvTW92ZXMoKSwgY2FsY3VsYXRlTW92ZU9yZGVyU2NvcmUpO1xuXG4gICAgbGV0IG1vdmVJZHg7XG4gICAgbGV0IGNhbk1vdmUgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBzY29yZTtcbiAgICBsZXQgYmVzdFNjb3JlID0gLUluZmluaXR5O1xuICAgIGxldCBiZXN0TW92ZSA9IG51bGw7XG5cbiAgICBmb3IgKG1vdmVJZHggPSAwOyBtb3ZlSWR4IDwgbW92ZXMubGVuZ3RoOyBtb3ZlSWR4KyspIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLm1ha2VNb3ZlKG1vdmVzW21vdmVJZHhdKSkge1xuICAgICAgICBjYW5Nb3ZlID0gdHJ1ZTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5uZWdhTWF4KGRlcHRoIC0gMSwgLWJldGEsIC1hbHBoYSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udW5tYWtlUHJldk1vdmUoKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBFQVJMWV9FWElUKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3JlID0gLXJlc3VsdDtcbiAgICAgICAgaWYgKHNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgYmVzdE1vdmUgPSBtb3Zlc1ttb3ZlSWR4XTtcblxuICAgICAgICAgIGlmIChiZXN0U2NvcmUgPj0gYmV0YSkge1xuICAgICAgICAgICAgdGhpcy5raWxsZXJNb3ZlTGlzdC5hZGRNb3ZlKHRoaXMubWF4RGVwdGggLSBkZXB0aCwgbW92ZXNbbW92ZUlkeF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJlc3RTY29yZSA+IGFscGhhKSB7XG4gICAgICAgICAgICBhbHBoYSA9IGJlc3RTY29yZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNhbk1vdmUpIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLmluQ2hlY2sodGhpcy5wb3NpdGlvbi50dXJuKSkge1xuICAgICAgICBiZXN0U2NvcmUgPSAtUFV0aWxzW1BUeXBlcy5LSU5HU10udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZXN0U2NvcmUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudHJhbnNQb3NUYWJsZS5zdG9yZUVudHJ5KGJlc3RTY29yZSwgYmVzdE1vdmUsIHByZXZBbHBoYSwgYmV0YSwgZGVwdGgsIGN1cnJIYXNoKTtcbiAgICByZXR1cm4gYmVzdFNjb3JlO1xuICB9XG5cbiAgc29ydE1vdmVzKG1vdmVzLCBjYWxjdWxhdGVTY29yZSkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vdmVTY29yZXMoKSB7XG4gICAgICByZXR1cm4gbW92ZXMubWFwKChtb3ZlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG1vdmU6IG1vdmUsIHNjb3JlOiBjYWxjdWxhdGVTY29yZShtb3ZlKSB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZU1vdmVTY29yZXMoKS5zb3J0KChtb3ZlQSwgbW92ZUIpID0+IG1vdmVCLnNjb3JlIC0gbW92ZUEuc2NvcmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKG1vdmVTY29yZSkgPT4gbW92ZVNjb3JlLm1vdmUpO1xuICB9XG5cbiAgZXZhbHVhdGUoKSB7XG4gICAgbGV0IG1hdGVyaWFsU2NvcmUgPSB0aGlzLnNjb3JlTWF0ZXJpYWwodGhpcy5wb3NpdGlvbi50dXJuKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlTWF0ZXJpYWwodGhpcy5wb3NpdGlvbi5vcHApO1xuXG4gICAgbGV0IHBpZWNlUG9zaXRpb25TY29yZSA9IHRoaXMuc2NvcmVQaWVjZVBvc2l0aW9ucyh0aGlzLnBvc2l0aW9uLnR1cm4pIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZVBpZWNlUG9zaXRpb25zKHRoaXMucG9zaXRpb24ub3BwKTtcblxuICAgIHJldHVybiBtYXRlcmlhbFNjb3JlICsgcGllY2VQb3NpdGlvblNjb3JlO1xuICB9XG5cbiAgc2NvcmVNYXRlcmlhbChjb2xvcikge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgZWFjaFBpZWNlVHlwZSgocGllY2VUeXBlKSA9PiB7XG4gICAgICBzY29yZSArPSB0aGlzLnBvc2l0aW9uLmdldENvbG9yUGllY2VTZXQoY29sb3IsIHBpZWNlVHlwZSkucG9wQ291bnQoKSAqXG4gICAgICAgICAgICAgICBQVXRpbHNbcGllY2VUeXBlXS52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzY29yZTtcbiAgfVxuXG4gIHNjb3JlUGllY2VQb3NpdGlvbnMoY29sb3IpIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGxldCBwaWVjZVBvc2l0aW9ucztcbiAgICBlYWNoUGllY2VUeXBlKChwaWVjZVR5cGUpID0+IHtcbiAgICAgIHBpZWNlUG9zaXRpb25zID0gdGhpcy5wb3NpdGlvbi5nZXRDb2xvclBpZWNlU2V0KGNvbG9yLCBwaWVjZVR5cGUpO1xuICAgICAgcGllY2VQb3NpdGlvbnMuZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgICBzY29yZSArPSBQVXRpbHNbcGllY2VUeXBlXS5wb3NpdGlvblZhbHVlc1tjb2xvciA/IHBvcyA6IDU2IF4gcG9zXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW92ZVNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FpL21vdmVfc2VhcmNoLmpzIiwiY29uc3QgU0NPUkVfVFlQRVMgPSB7XG4gIEVYQUNUOiAnZXhhY3QnLFxuICBVUFBFUkJPVU5EOiAndXBwZXJib3VuZCcsXG4gIExPV0VSQk9VTkQ6ICdsb3dlcmJvdW5kJ1xufTtcblxuY2xhc3MgVHJhbnNwb3NUYWJsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFibGUgPSB7fTtcbiAgfVxuXG4gIGdldEVudHJ5KGtleSkge1xuICAgIHJldHVybiB0aGlzLnRhYmxlW2tleV0gfHwgbnVsbDtcbiAgfVxuXG4gIHN0b3JlRW50cnkoc2NvcmUsIGJlc3RNb3ZlLCBhbHBoYSwgYmV0YSwgZGVwdGgsIGtleSkge1xuICAgIHRoaXMudGFibGVba2V5XSA9IHtcbiAgICAgIHNjb3JlLFxuICAgICAgYmVzdE1vdmUsXG4gICAgICB0eXBlOiB0aGlzLmRldGVybWluZVNjb3JlVHlwZShzY29yZSwgYWxwaGEsIGJldGEpLFxuICAgICAgZGVwdGgsXG4gICAgICBrZXlcbiAgICB9O1xuICB9XG5cbiAgZGV0ZXJtaW5lU2NvcmVUeXBlKHNjb3JlLCBhbHBoYSwgYmV0YSkge1xuICAgIGlmIChzY29yZSA8PSBhbHBoYSkge1xuICAgICAgcmV0dXJuIFNDT1JFX1RZUEVTLlVQUEVSQk9VTkQ7XG4gICAgfSBlbHNlIGlmIChzY29yZSA+PSBiZXRhKSB7XG4gICAgICByZXR1cm4gU0NPUkVfVFlQRVMuTE9XRVJCT1VORDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFNDT1JFX1RZUEVTLkVYQUNUO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgVHJhbnNwb3NUYWJsZSwgVEFCTEVfU0NPUkVfVFlQRVM6IFNDT1JFX1RZUEVTIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9haS90cmFuc3Bvc190YWJsZS5qcyIsImNsYXNzIEtpbGxlck1vdmVMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gICAgdGhpcy5tYXhQZXJMZXZlbCA9IDI7XG4gIH1cblxuICBhZGRTbG90KCkge1xuICAgIHRoaXMubGlzdC5wdXNoKG5ldyBBcnJheSh0aGlzLm1heFBlckxldmVsKSk7XG4gIH1cblxuICBhZGRNb3ZlKGRpc3RGcm9tUm9vdCwgbW92ZSkge1xuICAgIGNvbnN0IHNpYmxpbmdLaWxsZXJNb3ZlcyA9IHRoaXMubGlzdFtkaXN0RnJvbVJvb3RdO1xuICAgIGlmIChzaWJsaW5nS2lsbGVyTW92ZXMuaW5jbHVkZXMobW92ZS52YWwpKSB7IHJldHVybjsgfVxuXG4gICAgbGV0IGlkeDtcbiAgICBmb3IgKGlkeCA9IHNpYmxpbmdLaWxsZXJNb3Zlcy5sZW5ndGggLSAyOyBpZHggPj0gMDsgaWR4LS0pIHtcbiAgICAgIHNpYmxpbmdLaWxsZXJNb3Zlc1tpZHggKyAxXSA9IHNpYmxpbmdLaWxsZXJNb3Zlc1tpZHhdO1xuICAgIH1cblxuICAgIHNpYmxpbmdLaWxsZXJNb3Zlc1swXSA9IG1vdmUudmFsO1xuICB9XG5cbiAgZ2V0U2libGluZ01vdmVzKGRpc3RGcm9tUm9vdCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RbZGlzdEZyb21Sb290XTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtpbGxlck1vdmVMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYWkva2lsbGVyX21vdmVfbGlzdC5qcyIsImNsYXNzIFBlcmZNb25pdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluU2VhcmNoTm9kZXMgPSAwO1xuICAgIHRoaXMucVNlYXJjaE5vZGVzID0gMDtcbiAgICB0aGlzLnRhYmxlSGl0cyA9IDA7XG4gIH1cblxuICBzZXRTdGFydFRpbWUoKSB7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgc2V0RW5kVGltZSgpIHtcbiAgICB0aGlzLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgc2V0RGVwdGgoZGVwdGgpIHtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gIH1cblxuICBwcmludFJlc3VsdHMoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLScpO1xuXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lICYmIHRoaXMuZW5kVGltZSkge1xuICAgICAgY29uc29sZS5sb2coYFJ1biBUaW1lOiAke3RoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lfWApO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBEZXB0aDogICR7dGhpcy5kZXB0aH1gKTtcbiAgICBjb25zb2xlLmxvZyhgVG90YWwgRXhwbG9yZWQgUG9zaXRpb25zOiAke3RoaXMucVNlYXJjaE5vZGVzICsgdGhpcy5tYWluU2VhcmNoTm9kZXN9YCk7XG4gICAgY29uc29sZS5sb2coYE1haW4gU2VhcmNoIE5vZGVzOiAke3RoaXMubWFpblNlYXJjaE5vZGVzfWApO1xuICAgIGNvbnNvbGUubG9nKGBRdWllc2NlbnQgU2VhcmNoIE5vZGVzOiAke3RoaXMucVNlYXJjaE5vZGVzfWApO1xuICAgIGNvbnNvbGUubG9nKGBUYWJsZSBIaXRzOiAke3RoaXMudGFibGVIaXRzfWApO1xuXG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLScpO1xuICB9XG5cbiAgbG9nVGFibGVIaXQoKSB7XG4gICAgdGhpcy50YWJsZUhpdHMrKztcbiAgfVxuXG4gIGxvZ01haW5TZWFyY2hOb2RlKCkge1xuICAgIHRoaXMubWFpblNlYXJjaE5vZGVzKys7XG4gIH1cblxuICBsb2dRdWllc2NlbnROb2RlKCkge1xuICAgIHRoaXMucVNlYXJjaE5vZGVzKys7XG4gIH1cblxuICBnZXRSZXN1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBydW5UaW1lOiB0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIGRlcHRoOiB0aGlzLmRlcHRoLFxuICAgICAgZXhwbG9yZWRQb3NpdGlvbnM6IHRoaXMucVNlYXJjaE5vZGVzICsgdGhpcy5tYWluU2VhcmNoTm9kZXMsXG4gICAgICBtYWluU2VhcmNoTm9kZXM6IHRoaXMubWFpblNlYXJjaE5vZGVzLFxuICAgICAgcVNlYXJjaE5vZGVzOiB0aGlzLnFTZWFyY2hOb2RlcyxcbiAgICAgIHRUYWJsZUhpdHM6IHRoaXMudGFibGVIaXRzXG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcmZNb25pdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYWkvcGVyZl9tb25pdG9yLmpzIiwiY29uc3QgeyBQaWVjZUNvbnYsIENvbG9ycyB9ID0gcmVxdWlyZSgnLi4vcGllY2VzJyk7XG5jb25zdCB7IENvbHNGaWxlcywgRmlsZXNDb2xzLFxuICAgICAgICBSb3dzUmFua3MsIFJhbmtzUm93cyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuZnVuY3Rpb24gcG9zRnJvbUZpbGVSYW5rKGZpbGVSYW5rKSB7XG4gIGNvbnN0IFtmaWxlLCByYW5rXSA9IGZpbGVSYW5rLnNwbGl0KCcnKTtcbiAgcmV0dXJuIChSYW5rc1Jvd3NbcmFua10gKiA4KSArIEZpbGVzQ29sc1tmaWxlXTtcbn1cblxuZnVuY3Rpb24gZmlsZVJhbmtGcm9tUG9zKHBvcykge1xuICByZXR1cm4gQ29sc0ZpbGVzW3BvcyAlIDhdICsgKFJvd3NSYW5rc1tNYXRoLmZsb29yKHBvcyAvIDgpXSk7XG59XG5cbi8vIGlmIHRoZSByb3cgYW5kIGNvbCBhcmUgZWl0aGVyIGJvdGggZXZlbiBvciBib3RoIG9kZFxuZnVuY3Rpb24gaXNEYXJrU3F1YXJlKGZpbGVSYW5rKSB7XG4gIGNvbnN0IFtmaWxlLCByYW5rXSA9IGZpbGVSYW5rLnNwbGl0KCcnKTtcbiAgY29uc3Qgcm93ID0gUmFua3NSb3dzW3JhbmtdO1xuICBjb25zdCBjb2wgPSBGaWxlc0NvbHNbZmlsZV07XG4gIHJldHVybiAocm93ICUgMiA9PT0gMCAmJiBjb2wgJSAyID09PSAwKSB8fFxuICAgICAgICAgKHJvdyAlIDIgPT09IDEgJiYgY29sICUgMiA9PT0gMSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1vdmUobW92ZSwgY29sb3IpIHtcbiAgcmV0dXJuIGAke1BpZWNlQ29udi5waWVjZVRvTGV0dGVyKG1vdmUuZ2V0UGllY2UoKSwgY29sb3IpfTpgICtcbiAgICAgICAgIGAke2ZpbGVSYW5rRnJvbVBvcyhtb3ZlLmdldEZyb20oKSl9LT5gICtcbiAgICAgICAgIGAke2ZpbGVSYW5rRnJvbVBvcyhtb3ZlLmdldFRvKCkpfWA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTW92ZVN0YXRzKG1vdmVTdGF0cykge1xuICByZXR1cm4gT2JqZWN0LmtleXMobW92ZVN0YXRzKVxuICAgICAgICAgICAgICAgLm1hcCgoa2V5KSA9PiBgJHtrZXl9OiAke21vdmVTdGF0c1trZXldfWApXG4gICAgICAgICAgICAgICAuam9pbihcIjxici8+XCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjcykge1xuICBsZXQgdGltZVN0ciA9IChtaWxsaXNlY3MgLyAxMDAwKS50b1N0cmluZygpO1xuICBpZiAodGltZVN0ci5pbmRleE9mKCcuJykgPT0gLTEpIHRpbWVTdHIgKz0gJy4nO1xuXG4gIHdoaWxlICh0aW1lU3RyLmxlbmd0aCA8IHRpbWVTdHIuaW5kZXhPZignLicpICsgMykge1xuICAgIHRpbWVTdHIgKz0gJzAnO1xuICB9XG5cbiAgd2hpbGUgKHRpbWVTdHIubGVuZ3RoID4gdGltZVN0ci5pbmRleE9mKCcuJykgKyAzKSB7XG4gICAgdGltZVN0ciA9IHRpbWVTdHIuc2xpY2UoMCwgdGltZVN0ci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lU3RyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcG9zRnJvbUZpbGVSYW5rLFxuICBmaWxlUmFua0Zyb21Qb3MsXG4gIGlzRGFya1NxdWFyZSxcbiAgZm9ybWF0TW92ZSxcbiAgcGFyc2VNb3ZlU3RhdHMsXG4gIGZvcm1hdFRpbWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91aS91dGlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==