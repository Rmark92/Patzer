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
          } else {
            newPiece.html(PieceTypeHTML[Colors.BLACK][pieceType]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmE2YzJhMWRkNmYyZmQ5OGY0YjUiLCJ3ZWJwYWNrOi8vLy4vanMvYml0Ym9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9tb3ZlbWVudHMvbWFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iaXRib2FyZC9iaXRib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3ZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9tb3ZlbWVudHMvc3RlcF9tb3ZlLmpzIiwid2VicGFjazovLy8uL2pzL3VpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYml0Ym9hcmQvaW50MzJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iaXRib2FyZC9tYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3ZlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvcGF3bnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2tuaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvYmlzaG9wLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9yb29rLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9xdWVlbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMva2luZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2VhY2hfcGllY2VfdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wb3NpdGlvbi96aGFzaF9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvbW92ZV9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvdHJhbnNwb3NfdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkva2lsbGVyX21vdmVfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9haS9wZXJmX21vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdWkvdXRpbC5qcyJdLCJuYW1lcyI6WyJCaXRCb2FyZCIsInJlcXVpcmUiLCJNYXNrcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJCQk1hc2tzIiwiQ29uc3RhbnRzIiwiUGF3bnMiLCJLbmlnaHQiLCJCaXNob3AiLCJSb29rIiwiUXVlZW4iLCJLaW5nIiwiUGllY2VDb252IiwiZWFjaFBpZWNlVHlwZSIsIkRpcnMiLCJQVXRpbHMiLCJUeXBlcyIsIlBBV05TIiwiS05JR0hUUyIsIkJJU0hPUFMiLCJST09LUyIsIlFVRUVOUyIsIktJTkdTIiwiUFR5cGVzIiwiQ29sb3JzIiwiUGllY2VUeXBlSFRNTCIsIldISVRFIiwiQkxBQ0siLCJQaWVjZVR5cGVMZXR0ZXJzIiwiRElSUyIsInN0ZXBNb3ZlIiwiZ2VuZXJhdGVTdGVwQml0Qm9hcmRzIiwiZGlycyIsInJlcyIsInBvcyIsImluaXRpYWwiLCJwb3NSZXMiLCJhZGRNb3ZlIiwiY3VyclJlcyIsImRpciIsIm9yIiwiZnJvbVBvcyIsInJlZHVjZSIsInB1c2giLCJLTklHSFRfTU9WRVMiLCJLSU5HX01PVkVTIiwiU0xJREVfTU9WRVMiLCJtb3ZlcyIsImNvbElkeCIsInJvd0lkeCIsImRpYWdJZHgiLCJhbnRpRGlhZ0lkeCIsIk1hdGgiLCJmbG9vciIsIk5PUlRIIiwiQ09MUyIsImFuZCIsIk5PUlRIX09GX1JPVyIsIlNPVVRIIiwiU09VVEhfT0ZfUk9XIiwiRUFTVCIsIlJPV1MiLCJFQVNUX09GX0NPTCIsIldFU1QiLCJXRVNUX09GX0NPTCIsIk5PRUEiLCJESUFHUyIsIlNPV0UiLCJOT1dFIiwiQU5USV9ESUFHUyIsIlNPRUEiLCJpc1Bvc1JheSIsImZpbmRVbmJsb2NrZWQiLCJvY2N1cGllZCIsImRpckJCIiwiYmxvY2tpbmciLCJibG9ja2luZ1BvcyIsImlzWmVybyIsImJpdFNjYW5Gb3J3YXJkIiwiYml0U2NhblJldmVyc2UiLCJ4b3IiLCJob3JpelZlcnQiLCJub3RPd25QaWVjZXMiLCJkaWFnIiwiSW50MzJVdGlscyIsImxvdyIsImhpZ2giLCJvdGhlciIsIm51bUJpdHMiLCJuZXdMb3dCaXRzIiwibmV3SGlnaEJpdHMiLCJjb3VudCIsImludDMyIiwicG9wQ291bnQzMiIsImJpdFNjYW5Gb3J3YXJkMzIiLCJCb29sZWFuIiwiYml0U2NhblJldmVyc2UzMiIsImNiIiwiY2xlYXJMZWFzdFNpZ0JpdDMyIiwicm93IiwicG93IiwicG9zVmFsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNldEJpdCIsInBvc2l0aW9ucyIsImZvckVhY2giLCJjb2xOdW0iLCJyb3dOdW0iLCJwb3NNYXgiLCJzdGFydFBvcyIsIk1vdmUiLCJmcm9tIiwidG8iLCJ0eXBlIiwicGllY2UiLCJjYXB0UGllY2UiLCJ2YWwiLCJnZXRGcm9tIiwiZ2V0VG8iLCJnZXRUeXBlIiwicGllY2VUeXBlIiwiZ2V0UGllY2UiLCJjYXB0UGllY2VUeXBlIiwiZ2V0Q2FwdFBpZWNlIiwiaXNQcm9tbyIsImlzQ2FzdGxlIiwiTlBST01PIiwiQlBST01PIiwiUlBST01PIiwiUVBST01PIiwiaW5jbHVkZXMiLCJDU1RMX0tJTkciLCJDU1RMX1FVRUVOIiwibmV3TW92ZSIsIk1vdmVUeXBlcyIsIm5vU28iLCJlYVdlIiwic2hpZnRMZWZ0Iiwic2hpZnRSaWdodCIsIkNvbHNGaWxlcyIsIkZpbGVzQ29scyIsImZpbGUiLCJjb2wiLCJSb3dzUmFua3MiLCJSYW5rc1Jvd3MiLCJyYW5rIiwiR2FtZVN0YXR1cyIsIlRocmVlRm9sZFJlcCIsIk1vdmVMaW1pdEV4YyIsIkNoZWNrbWF0ZSIsIlN0YWxlbWF0ZSIsIlBsYXllclR1cm4iLCJBSVR1cm4iLCJTZWxlY3RvcnMiLCJCT0FSRF9JRCIsIlBJRUNFX0NMQVNTIiwiU1FVQVJFX0NMQVNTIiwiUkFOS19DTEFTUyIsIkZJTEVfQ0xBU1MiLCJVSSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidWkiLCJydW4iLCJQb3NpdGlvbiIsIkFJIiwiVXRpbCIsImFpIiwic2V0dXBCdXR0b25zIiwicmVzZXQiLCJlbXB0eSIsInRleHQiLCJwb3NpdGlvbiIsInBsYXllckNvbG9yIiwicGFyc2VJbnQiLCJhaVRoaW5raW5nVGltZSIsInBhcnNlRmxvYXQiLCJzZXRUaGlua2luZ1RpbWUiLCJkcmF3Qm9hcmQiLCJwbGF5TmV4dFR1cm4iLCJjbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhc0NsYXNzIiwidW5tYWtlUGxheWVyTW92ZSIsImFpTW92ZSIsInNsaWRlciIsInZhbHVlIiwidGhpbmtpbmdUaW1lIiwibWluIiwicm91bmQiLCJtYXgiLCJzdGVwIiwic2xpZGUiLCJFIiwiZm9ybWF0VGltZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwcmV2TW92ZXMiLCJjdXJyTW92ZXMiLCJnZW5lcmF0ZUxlZ2FsTW92ZXMiLCJpc1RocmVlZm9sZFJlcGV0aXRpb24iLCJzdGF0dXMiLCJpc01vdmVMaW1pdEV4Y2VlZGVkIiwiaW5DaGVjayIsInR1cm4iLCJhY3RpdmF0ZUJ0bnMiLCJzdGF0dXNFbCIsInVubWFrZVByZXZNb3ZlIiwic2hpZnRGcm9tTW92ZXNMaXN0IiwidXBkYXRlUGllY2VzIiwic2V0dXBQbGF5ZXJNb3ZlIiwibW92ZVN0ciIsIm1vdmVTdGF0cyIsImRlcHRoIiwicnVuVGltZSIsImV4cGxvcmVkUG9zaXRpb25zIiwibWFpblNlYXJjaE5vZGVzIiwicVNlYXJjaE5vZGVzIiwidFRhYmxlSGl0cyIsIm1vdmVEYXRhIiwibW92ZUl0ZW0iLCJmb3JtYXRNb3ZlIiwibW92ZSIsImNvbG9yIiwiYXBwZW5kIiwic3RhdHMiLCJwb3B1bGF0ZVN0YXRzVGFibGUiLCJtb3Zlc0hpc3RvcnkiLCJuZXdNb3ZlSXRlbSIsImNyZWF0ZU1vdmVJdGVtIiwicHJlcGVuZCIsInJlbW92ZSIsIm5ld1JvdyIsImZpbGVSYW5rIiwibmV3U3F1YXJlIiwic3F1YXJlQ29sb3IiLCJpc0RhcmtTcXVhcmUiLCJib2FyZCIsIm5ld1JhbmtSb3ciLCJyb3dzUmFua3MiLCJzbGljZSIsInJldmVyc2UiLCJnZW5lcmF0ZVNxdWFyZSIsImdlbmVyYXRlRmlsZUhlYWRlciIsInBpZWNlVHlwZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwaWVjZXMiLCJuZXdQaWVjZSIsImR1cCIsInBvcDFCaXRzIiwiaGFzU2V0Qml0IiwiaHRtbCIsImZpbGVSYW5rRnJvbVBvcyIsImFkZFRvTW92ZXNMaXN0IiwibWFrZU1vdmUiLCJkZWFjdGl2YXRlQnRucyIsInJlc2V0U3RhdHVzIiwiaXNHYW1lT3ZlciIsInNldFRpbWVvdXQiLCJhaU1vdmVEYXRhIiwiY2hvb3NlTW92ZSIsImFuaW1hdGVNb3ZlIiwicGVyZm9ybWFuY2UiLCJwaWVjZUVsIiwiY2FwdE9mZnNldCIsIm9mZnNldCIsImNzcyIsImxlZnQiLCJ0b3AiLCJmYWRlT3V0Iiwib2xkT2Zmc2V0IiwiYXBwZW5kVG8iLCJuZXdPZmZzZXQiLCJhbmltUGllY2UiLCJjbG9uZSIsImhpZGUiLCJhbmltYXRlIiwic2hvdyIsIm1vdmVzRGF0YSIsIm1hcCIsImdldERhdGEiLCJtb3ZlRnJvbVRvcyIsIm1vdmVUb0Zyb21zIiwiYWN0aXZhdGVEcmFnZ2FibGVQaWVjZXMiLCJhY3RpdmF0ZURyb3BwYWJsZVNxdWFyZXMiLCJmcm9tRmlsZVJhbmsiLCJrZXlzIiwiZHJhZ2dhYmxlIiwiY29udGFpbm1lbnQiLCJyZXZlcnQiLCJyZXZlcnREdXJhdGlvbiIsIm1vdXNlZW50ZXIiLCJ0b1BvcyIsIm1vdXNlbGVhdmUiLCJkZXN0U3EiLCJvcmlnaW5TcXVhcmUiLCJvcmlnaW5Qb3MiLCJzZWxlY3RlZE1vdmUiLCJkcm9wcGFibGUiLCJhY2NlcHQiLCJwYXJlbnQiLCJhdHRyIiwicG9zRnJvbUZpbGVSYW5rIiwiZHJvcCIsIm1ha2VQbGF5ZXJNb3ZlIiwiY2hpbGRyZW4iLCJzZWxlY3RlZE1vdmVzIiwiZmlsdGVyIiwiY3JlYXRlUHJvbW9XaW5kb3ciLCJwcm9tb01vdmVzIiwicHJvbW9EaXYiLCJwcm9tb1BpZWNlcyIsImNyZWF0ZVByb21vUGllY2VzIiwicHJvbW9XaW5Sb3ciLCJQcm9tb3NQVHlwZXMiLCJuZXdQcm9tb1BpZWNlIiwicHJvbW9Nb3ZlIiwiY3JlYXRlUHJvbW9QaWVjZSIsInBUeXBlIiwicHJvbW9QaWVjZSIsInBpZWNlUG9zSGFzaEtleXMiLCJlcFBvc0hhc2hLZXlzIiwiY2FzdGxlSGFzaEtleXMiLCJ0dXJuSGFzaEtleXMiLCJkZWZhdWx0RmVuU3RyIiwiZmVuU3RyIiwic3BsaXQiLCJ0dXJuTGV0dGVyIiwiY2FzdGxlUmlnaHRzU3RyIiwiZXBTcSIsImhhbGZNb3ZlQ2xvY2siLCJmdWxsTW92ZUNsb2NrIiwiZmVuUG9zaXRpb25zVG9QaWVjZUJCcyIsImNhc3RsZVJpZ2h0cyIsInBhcnNlQ2FzdGxlUmlnaHRzU3RyIiwiZXBCQiIsInBhcnNlRXBTdHIiLCJwcmV2U3RhdGVzIiwicFR5cGVzTG9jYXRpb25zIiwiY3JlYXRlUFR5cGVzTG9jYXRpb25zIiwicFBvc0hhc2giLCJjcmVhdGVQaWVjZXNQb3NIYXNoIiwic3RhdGVIYXNoIiwiY3JlYXRlU3RhdGVIYXNoIiwic2V0VHVybiIsImdldE90aGVyQ29sb3IiLCJwb3NpdGlvbkNvdW50cyIsImFkZFBvc2l0aW9uQ291bnQiLCJyb3dTdHJzIiwicGllY2VCQnMiLCJjcmVhdGVFbXB0eVBpZWNlc0JCcyIsInJvd1N0ciIsImNoYXIiLCJ0ZXN0IiwibGV0dGVyVG9UeXBlIiwibGV0dGVyVG9Db2xvciIsInJpZ2h0c1BvcyIsInJpZ2h0c0xldHRlciIsImVwU3RyIiwiZ2V0UGllY2VBdCIsInR5cGVzIiwiaWR4Iiwid2hpdGVzUG9zIiwiYmxhY2tzUG9zIiwiY2FzdGxlUmlnaHRzUG9zIiwib3BwIiwiaW5jbHVkZVF1aWV0IiwiY2hlY2tOU0RyYXciLCJpc05vblN0YWxlbWF0ZURyYXciLCJhZGRQYXduTW92ZXMiLCJhZGROb3JtYWxNb3ZlcyIsImFkZEtpbmdNb3ZlcyIsInBzZXVkb01vdmVzIiwiZ2VuZXJhdGVQc2V1ZG9Nb3ZlcyIsImlzTGVnYWwiLCJsZWdhbHMiLCJwc2V1ZG9Nb3ZlIiwidGVzdE1vdmUiLCJ0ZXN0c0xlZ2FsIiwiZ2V0SGFzaCIsInBhd25zUG9zIiwiZ2V0Q29sb3JQaWVjZVNldCIsIm5vdE9jY3VwaWVkIiwiZ2V0T2NjdXBpZWQiLCJub3QiLCJwYXduU2luZ2xlUHVzaGVzIiwic2luZ2xlUHVzaCIsImFkZFBhd25Nb3ZlU2V0IiwicGF3bkRvdWJsZVB1c2hlcyIsImRvdWJsZVB1c2giLCJvcHBQb3NpdGlvbnMiLCJwYXduTGVmdEF0dGFja3MiLCJhdHRhY2tzTGVmdCIsInBhd25SaWdodEF0dGFja3MiLCJhdHRhY2tzUmlnaHQiLCJnZXROb3RPY2N1cGllZEJ5Iiwia25pZ2h0c1BvcyIsImtuaWdodE1vdmVzIiwiYWRkTm9ybWFsTW92ZVNldCIsImRlc3RpbmF0aW9ucyIsInNsaWRpbmdUeXBlIiwia2luZ1BvcyIsIm5vcm1hbE1vdmVzIiwiYWRkQ2FzdGxlTW92ZXMiLCJuZXdQb3NpdGlvbnMiLCJzaGlmdEFtdCIsImlzQ2FwdHVyZSIsImlzRGJsUHVzaCIsImNhcHR1cmVkIiwiREJMX1BQVVNIIiwiRVBfQ0FQVCIsIlBST01PX01BU0tTIiwiYWRkUHJvbW9zIiwiTk9STUFMIiwicHJvbW9UeXBlIiwibmV3UG9zIiwiY2FwdFR5cGUiLCJ0dXJuQ2FzdGxlUmlnaHRzIiwiZ2V0Q2FzdGxlUmlnaHRzIiwiSU5JVF9QT1MiLCJjYW5DYXN0bGUiLCJzZXROZXdTdGF0ZSIsImV4ZWNNb3ZlVHlwZSIsInN3YXBUdXJuIiwiY2xlYXJQaWVjZUF0IiwibW92ZVBpZWNlIiwidW5kbyIsInNldFBpZWNlQXQiLCJpc0xlZ2FsQ2FzdGxlIiwiY2FzdGxlVHlwZSIsImlzQXR0YWNrZWQiLCJwb3NCQiIsIm9wcENvbG9yIiwicGF3bnMiLCJxdWVlbkJCIiwiYWRkUHJldlN0YXRlIiwiYWRqdXN0Q2FzdGxlUmlnaHRzIiwic2V0TmV3RXBTdGF0ZSIsInVwZGF0ZUNsb2NrIiwic3RhdGUiLCJjbGVhckNhc3RsZVJpZ2h0cyIsImNsZWFyUmlnaHRzUG9zIiwiY2xlYXJSaWdodHNNYXNrIiwiZXBQb3MiLCJjYXB0dXJlZFBvcyIsImN1cnJIYXNoIiwicHJldk1vdmUiLCJwb3AiLCJzdWJ0cmFjdFBvc2l0aW9uQ291bnQiLCJyZXZlcnNlTW92ZVR5cGUiLCJyZXN0b3JlUHJldlN0YXRlIiwicHJldlN0YXRlIiwiY2xlYXJCaXQiLCJnZW5lcmF0ZU1TQlRhYmxlIiwiaW50IiwibG9nMiIsIm1vc3RTaWdCaXRUYWJsZSIsIkZVTExfQk9BUkQiLCJjb2xzIiwiZnJvbUNvbCIsInJvd3MiLCJmcm9tUm93IiwiZGlhZ3MiLCJ1cHBlclJpZ2h0RGlhZyIsImFudGlEaWFncyIsInVwcGVyTGVmdERpYWciLCJiYiIsInR5cGVzQXJyIiwiSU5JVF9NQVNLUyIsInBvc2l0aW9uVmFsdWVzIiwib3BwUGllY2VzIiwib25lUHVzaCIsImNhc3RsZVNsaWRlIiwicG9wQ291bnQiLCJwaWVjZVRvTGV0dGVyIiwidG9VcHBlckNhc2UiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsInJhbmRTaWduZWQzMkJpdCIsInBvc2l0aXZlIiwicmFuZG9tIiwibmV3UG9zS2V5cyIsImFkZFBUeXBlS2V5cyIsInJpZ2h0c0lkeCIsIk1vdmVTZWFyY2giLCJwcmV2UGVyZm9ybWFuY2UiLCJhdmFpbGFibGVNb3ZlcyIsIm1vdmVTZWFyY2giLCJiZXN0TW92ZSIsImZpbmRCZXN0IiwicGVyZlJlc3VsdHMiLCJnZXRQZXJmb3JtYW5jZSIsIlRyYW5zcG9zVGFibGUiLCJUQUJMRV9TQ09SRV9UWVBFUyIsIktpbGxlck1vdmVMaXN0IiwiUGVyZk1vbml0b3IiLCJFQVJMWV9FWElUIiwiaW5pdEF2YWlsYWJsZSIsInRyYW5zUG9zVGFibGUiLCJraWxsZXJNb3ZlTGlzdCIsInBlcmZNb25pdG9yIiwic2V0U3RhcnRUaW1lIiwiZW5kVGltZSIsIkRhdGUiLCJub3ciLCJtYXhEZXB0aCIsImFkZFNsb3QiLCJuZWdhTWF4IiwiSW5maW5pdHkiLCJzZXREZXB0aCIsInNldEVuZFRpbWUiLCJwcmludFJlc3VsdHMiLCJjdXJyTm9kZUVudHJ5IiwiZ2V0RW50cnkiLCJnZXRSZXN1bHRzIiwiYWxwaGEiLCJiZXRhIiwibG9nUXVpZXNjZW50Tm9kZSIsInN0YW5kUGF0VmFsIiwiZXZhbHVhdGUiLCJjYWxjdWxhdGVNb3ZlT3JkZXJTY29yZSIsInNjb3JlIiwic29ydE1vdmVzIiwibW92ZUlkeCIsInF1aWVzY2VuY2VTZWFyY2giLCJwcmV2QWxwaGEiLCJlbnRyeSIsImxvZ1RhYmxlSGl0IiwiRVhBQ1QiLCJMT1dFUkJPVU5EIiwiVVBQRVJCT1VORCIsImxvZ01haW5TZWFyY2hOb2RlIiwicHJldkJlc3RNb3ZlIiwic2libGluZ0tpbGxlck1vdmVzIiwiZ2V0U2libGluZ01vdmVzIiwiY2FuTW92ZSIsInJlc3VsdCIsImJlc3RTY29yZSIsInN0b3JlRW50cnkiLCJjYWxjdWxhdGVTY29yZSIsImNyZWF0ZU1vdmVTY29yZXMiLCJzb3J0IiwibW92ZUEiLCJtb3ZlQiIsIm1vdmVTY29yZSIsIm1hdGVyaWFsU2NvcmUiLCJzY29yZU1hdGVyaWFsIiwicGllY2VQb3NpdGlvblNjb3JlIiwic2NvcmVQaWVjZVBvc2l0aW9ucyIsInBpZWNlUG9zaXRpb25zIiwiU0NPUkVfVFlQRVMiLCJ0YWJsZSIsImtleSIsImRldGVybWluZVNjb3JlVHlwZSIsImxpc3QiLCJtYXhQZXJMZXZlbCIsIkFycmF5IiwiZGlzdEZyb21Sb290IiwidGFibGVIaXRzIiwic3RhcnRUaW1lIiwicGFyc2VN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QUFDRDs7QUFFRCxTQUFPQSxRQUFRaGQsTUFBUixHQUFpQmdkLFFBQVFFLE9BQVIsQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBL0MsRUFBa0Q7QUFDaERGLGNBQVVBLFFBQVFwVSxLQUFSLENBQWMsQ0FBZCxFQUFpQm9VLFFBQVFoZCxNQUFSLEdBQWlCLENBQWxDLENBQVY7QUFDRDs7QUFFRCxTQUFPZ2QsT0FBUDtBQUNEOztBQUVEdGpCLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmdULGtDQURlO0FBRWZsRCxrQ0FGZTtBQUdmakIsNEJBSGU7QUFJZmYsd0JBSmU7QUFLZm9WLGdDQUxlO0FBTWYvVztBQU5lLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhNmMyYTFkZDZmMmZkOThmNGI1IiwiY29uc3QgQml0Qm9hcmQgPSByZXF1aXJlKCcuL2JpdGJvYXJkLmpzJyk7XG5jb25zdCBNYXNrcyA9IHJlcXVpcmUoJy4vbWFza3MuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJpdEJvYXJkLFxuICBCQk1hc2tzOiBNYXNrcyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iaXRib2FyZC9pbmRleC5qcyIsIi8vIGNvbnN0IHsgV2hpdGVQYXducywgQmxhY2tQYXducyB9ID0gcmVxdWlyZSgnLi9wYXducy5qcycpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcbmNvbnN0IFBhd25zID0gcmVxdWlyZSgnLi9wYXducy5qcycpO1xuY29uc3QgS25pZ2h0ID0gcmVxdWlyZSgnLi9rbmlnaHQuanMnKTtcbmNvbnN0IEJpc2hvcCA9IHJlcXVpcmUoJy4vYmlzaG9wLmpzJyk7XG5jb25zdCBSb29rID0gcmVxdWlyZSgnLi9yb29rLmpzJyk7XG5jb25zdCBRdWVlbiA9IHJlcXVpcmUoJy4vcXVlZW4uanMnKTtcbmNvbnN0IEtpbmcgPSByZXF1aXJlKCcuL2tpbmcuanMnKTtcbmNvbnN0IFBpZWNlQ29udiA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMuanMnKTtcbmNvbnN0IGVhY2hQaWVjZVR5cGUgPSByZXF1aXJlKCcuL2VhY2hfcGllY2VfdHlwZS5qcycpO1xuY29uc3QgRGlycyA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL2Rpcl9jb25zdGFudHMuanMnKTtcblxuY29uc3QgUFV0aWxzID0ge1xuICBbQ29uc3RhbnRzLlR5cGVzLlBBV05TXTogUGF3bnMsXG4gIFtDb25zdGFudHMuVHlwZXMuS05JR0hUU106IEtuaWdodCxcbiAgW0NvbnN0YW50cy5UeXBlcy5CSVNIT1BTXTogQmlzaG9wLFxuICBbQ29uc3RhbnRzLlR5cGVzLlJPT0tTXTogUm9vayxcbiAgW0NvbnN0YW50cy5UeXBlcy5RVUVFTlNdOiBRdWVlbixcbiAgW0NvbnN0YW50cy5UeXBlcy5LSU5HU106IEtpbmdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBQVHlwZXM6IENvbnN0YW50cy5UeXBlcyxcbiAgQ29sb3JzOiBDb25zdGFudHMuQ29sb3JzLFxuICBQaWVjZVR5cGVIVE1MOiBDb25zdGFudHMuUGllY2VUeXBlSFRNTCxcbiAgUFV0aWxzLFxuICBlYWNoUGllY2VUeXBlLFxuICBEaXJzLFxuICBQaWVjZUNvbnZcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvaW5kZXguanMiLCJjb25zdCBDb2xvcnMgPSB7XG4gIFdISVRFOiAwLFxuICBCTEFDSzogMVxufTtcblxuY29uc3QgVHlwZXMgPSB7XG4gIFBBV05TOiAyLFxuICBLTklHSFRTOiAzLFxuICBCSVNIT1BTOiA0LFxuICBST09LUzogNSxcbiAgUVVFRU5TOiA2LFxuICBLSU5HUzogN1xufTtcblxuY29uc3QgUGllY2VUeXBlTGV0dGVycyA9IHtcbiAgW1R5cGVzLlBBV05TXTogJ3AnLFxuICBbVHlwZXMuS05JR0hUU106ICduJyxcbiAgW1R5cGVzLkJJU0hPUFNdOiAnYicsXG4gIFtUeXBlcy5ST09LU106ICdyJyxcbiAgW1R5cGVzLlFVRUVOU106ICdxJyxcbiAgW1R5cGVzLktJTkdTXTogJ2snLFxufTtcblxuY29uc3QgUGllY2VUeXBlSFRNTCA9IHtcbiAgW0NvbG9ycy5CTEFDS106IHtcbiAgICBbVHlwZXMuUEFXTlNdOiBcIiYjOTgyMztcIixcbiAgICBbVHlwZXMuS05JR0hUU106IFwiJiM5ODIyO1wiLFxuICAgIFtUeXBlcy5CSVNIT1BTXTogXCImIzk4MjE7XCIsXG4gICAgW1R5cGVzLlJPT0tTXTogXCImIzk4MjA7XCIsXG4gICAgW1R5cGVzLlFVRUVOU106IFwiJiM5ODE5O1wiLFxuICAgIFtUeXBlcy5LSU5HU106IFwiJiM5ODE4O1wiXG4gIH0sXG4gIFtDb2xvcnMuV0hJVEVdOiB7XG4gICAgW1R5cGVzLlBBV05TXTogXCImIzk4MTc7XCIsXG4gICAgW1R5cGVzLktOSUdIVFNdOiBcIiYjOTgxNjtcIixcbiAgICBbVHlwZXMuQklTSE9QU106IFwiJiM5ODE1O1wiLFxuICAgIFtUeXBlcy5ST09LU106IFwiJiM5ODE0O1wiLFxuICAgIFtUeXBlcy5RVUVFTlNdOiBcIiYjOTgxMztcIixcbiAgICBbVHlwZXMuS0lOR1NdOiBcIiYjOTgxMjtcIlxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgVHlwZXMsIENvbG9ycywgUGllY2VUeXBlTGV0dGVycywgUGllY2VUeXBlSFRNTCB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2NvbnN0YW50cy5qcyIsImNvbnN0IERJUlMgPSB7XG4gICdOT1JUSCc6IDAsXG4gICdTT1VUSCc6IDEsXG4gICdFQVNUJzogMixcbiAgJ1dFU1QnOiAzLFxuICAnTk9FQSc6IDQsXG4gICdOT1dFJzogNSxcbiAgJ1NPRUEnOiA2LFxuICAnU09XRSc6IDdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRElSUztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9tb3ZlbWVudHMvZGlyX2NvbnN0YW50cy5qcyIsImNvbnN0IHsgQml0Qm9hcmQsIEJCTWFza3MgfSA9IHJlcXVpcmUoJy4uLy4uL2JpdGJvYXJkJyk7XG5jb25zdCBEaXJzID0gcmVxdWlyZSgnLi9kaXJfY29uc3RhbnRzLmpzJyk7XG5jb25zdCBzdGVwTW92ZSA9IHJlcXVpcmUoJy4vc3RlcF9tb3ZlLmpzJyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RlcEJpdEJvYXJkcyhkaXJzKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBsZXQgcG9zID0gMDtcbiAgbGV0IGluaXRpYWw7XG4gIGxldCBwb3NSZXM7XG5cbiAgY29uc3QgYWRkTW92ZSA9IChjdXJyUmVzLCBkaXIpID0+IHtcbiAgICByZXR1cm4gY3VyclJlcy5vcihzdGVwTW92ZShpbml0aWFsLCBkaXJbMF0sIGRpclsxXSkpO1xuICB9O1xuXG4gIHdoaWxlIChwb3MgPCA2NCkge1xuICAgIGluaXRpYWwgPSBCaXRCb2FyZC5mcm9tUG9zKHBvcyk7XG4gICAgcG9zUmVzID0gZGlycy5yZWR1Y2UoKGN1cnJSZXMsIGRpcikgPT4gYWRkTW92ZShjdXJyUmVzLCBkaXIpLCBuZXcgQml0Qm9hcmQoKSk7XG4gICAgcmVzLnB1c2gocG9zUmVzKTtcbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmNvbnN0IEtOSUdIVF9NT1ZFUyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXJzID0gW1sxLCAyXSwgWzEsIC0yXSxcbiAgICAgICAgICAgICAgICBbMiwgMV0sIFsyLCAtMV0sXG4gICAgICAgICAgICAgICAgWy0xLCAyXSwgWy0xLCAtMl0sXG4gICAgICAgICAgICAgICAgWy0yLCAxXSwgWy0yLCAtMV1dO1xuXG4gIHJldHVybiBnZW5lcmF0ZVN0ZXBCaXRCb2FyZHMoZGlycyk7XG59KCk7XG5cbmNvbnN0IEtJTkdfTU9WRVMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGlycyA9IFtbMSwgMF0sIFsxLCAxXSxcbiAgICAgICAgICAgICAgICBbMSwgLTFdLFstMSwgMF0sXG4gICAgICAgICAgICAgICAgWy0xLCAxXSwgWy0xLCAtMV0sXG4gICAgICAgICAgICAgICAgWzAsIC0xXSwgWzAsIDFdXTtcblxuICByZXR1cm4gZ2VuZXJhdGVTdGVwQml0Qm9hcmRzKGRpcnMpO1xufSgpO1xuXG5jb25zdCBTTElERV9NT1ZFUyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcG9zID0gMDtcbiAgY29uc3QgcmVzID0gW107XG4gIGxldCBtb3ZlcztcbiAgbGV0IGNvbElkeDtcbiAgbGV0IHJvd0lkeDtcbiAgbGV0IGRpYWdJZHg7XG4gIGxldCBhbnRpRGlhZ0lkeDtcblxuICB3aGlsZSAocG9zIDwgNjQpIHtcbiAgICBtb3ZlcyA9IHt9O1xuICAgIHJvd0lkeCA9IE1hdGguZmxvb3IocG9zIC8gOCk7XG4gICAgY29sSWR4ID0gcG9zICUgODtcbiAgICBkaWFnSWR4ID0gKHBvcyA8IHJvd0lkeCAqIDkpID8gKHBvcyAlIDkpIC0gMiA6IChwb3MgJSA5KSArIDc7XG4gICAgaWYgKHBvcyA9PT0gNjMpIHtcbiAgICAgIGFudGlEaWFnSWR4ID0gMTQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFudGlEaWFnSWR4ID0gKHBvcyA8IChyb3dJZHggKyAxKSAqIDcpID8gKHBvcyAlIDcpIDogKHBvcyAlIDcpICsgNztcbiAgICB9XG4gICAgbW92ZXNbRGlycy5OT1JUSF0gPSBCQk1hc2tzLkNPTFNbY29sSWR4XS5hbmQoQkJNYXNrcy5OT1JUSF9PRl9ST1dbcm93SWR4XSk7XG4gICAgbW92ZXNbRGlycy5TT1VUSF0gPSBCQk1hc2tzLkNPTFNbY29sSWR4XS5hbmQoQkJNYXNrcy5TT1VUSF9PRl9ST1dbcm93SWR4XSk7XG4gICAgbW92ZXNbRGlycy5FQVNUXSA9IEJCTWFza3MuUk9XU1tyb3dJZHhdLmFuZChCQk1hc2tzLkVBU1RfT0ZfQ09MW2NvbElkeF0pO1xuICAgIG1vdmVzW0RpcnMuV0VTVF0gPSBCQk1hc2tzLlJPV1Nbcm93SWR4XS5hbmQoQkJNYXNrcy5XRVNUX09GX0NPTFtjb2xJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLk5PRUFdID0gQkJNYXNrcy5ESUFHU1tkaWFnSWR4XS5hbmQoQkJNYXNrcy5OT1JUSF9PRl9ST1dbcm93SWR4XSk7XG4gICAgbW92ZXNbRGlycy5TT1dFXSA9IEJCTWFza3MuRElBR1NbZGlhZ0lkeF0uYW5kKEJCTWFza3MuU09VVEhfT0ZfUk9XW3Jvd0lkeF0pO1xuICAgIG1vdmVzW0RpcnMuTk9XRV0gPSBCQk1hc2tzLkFOVElfRElBR1NbYW50aURpYWdJZHhdLmFuZChCQk1hc2tzLk5PUlRIX09GX1JPV1tyb3dJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLlNPRUFdID0gQkJNYXNrcy5BTlRJX0RJQUdTW2FudGlEaWFnSWR4XS5hbmQoQkJNYXNrcy5TT1VUSF9PRl9ST1dbcm93SWR4XSk7XG4gICAgcmVzLnB1c2gobW92ZXMpO1xuICAgIHBvcysrO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtOSUdIVF9NT1ZFUyxcbiAgS0lOR19NT1ZFUyxcbiAgU0xJREVfTU9WRVMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL21vdmVtZW50cy9tYXNrcy5qcyIsImNvbnN0IHsgQml0Qm9hcmQsIEJCTWFza3MgfSA9IHJlcXVpcmUoJy4uLy4uL2JpdGJvYXJkJyk7XG5jb25zdCB7IFNMSURFX01PVkVTIH0gPSByZXF1aXJlKCcuL21hc2tzLmpzJyk7XG5jb25zdCBEaXJzID0gcmVxdWlyZSgnLi9kaXJfY29uc3RhbnRzLmpzJyk7XG5cbmNvbnN0IGlzUG9zUmF5ID0ge1xuICBbRGlycy5OT1JUSF06IHRydWUsXG4gIFtEaXJzLkVBU1RdOiB0cnVlLFxuICBbRGlycy5OT0VBXTogdHJ1ZSxcbiAgW0RpcnMuTk9XRV06IHRydWUsXG4gIFtEaXJzLlNPVVRIXTogZmFsc2UsXG4gIFtEaXJzLldFU1RdOiBmYWxzZSxcbiAgW0RpcnMuU09FQV06IGZhbHNlLFxuICBbRGlycy5TT1dFXTogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGZpbmRVbmJsb2NrZWQocG9zLCBvY2N1cGllZCwgZGlyKSB7XG4gIGNvbnN0IGRpckJCID0gU0xJREVfTU9WRVNbcG9zXVtkaXJdO1xuICBjb25zdCBibG9ja2luZyA9IGRpckJCLmFuZChvY2N1cGllZCk7XG4gIGxldCBibG9ja2luZ1BvcztcblxuICBpZiAoYmxvY2tpbmcuaXNaZXJvKCkpIHtcbiAgICByZXR1cm4gZGlyQkI7XG4gIH0gZWxzZSB7XG4gICAgYmxvY2tpbmdQb3MgPSBpc1Bvc1JheVtkaXJdID8gYmxvY2tpbmcuYml0U2NhbkZvcndhcmQoKSA6IGJsb2NraW5nLmJpdFNjYW5SZXZlcnNlKCk7XG4gICAgcmV0dXJuIGRpckJCLnhvcihTTElERV9NT1ZFU1tibG9ja2luZ1Bvc11bZGlyXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG9yaXpWZXJ0KHBvcywgb2NjdXBpZWQsIG5vdE93blBpZWNlcykge1xuICByZXR1cm4gW0RpcnMuTk9SVEgsIERpcnMuU09VVEgsIERpcnMuRUFTVCwgRGlycy5XRVNUXS5yZWR1Y2UoKHJlcywgZGlyKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5vcihmaW5kVW5ibG9ja2VkKHBvcywgb2NjdXBpZWQsIGRpcikpO1xuICB9LCBuZXcgQml0Qm9hcmQoKSkuYW5kKG5vdE93blBpZWNlcyk7XG59XG5cbmZ1bmN0aW9uIGRpYWcocG9zLCBvY2N1cGllZCwgbm90T3duUGllY2VzKSB7XG4gIHJldHVybiBbRGlycy5OT0VBLCBEaXJzLk5PV0UsIERpcnMuU09FQSwgRGlycy5TT1dFXS5yZWR1Y2UoKHJlcywgZGlyKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5vcihmaW5kVW5ibG9ja2VkKHBvcywgb2NjdXBpZWQsIGRpcikpO1xuICB9LCBuZXcgQml0Qm9hcmQoKSkuYW5kKG5vdE93blBpZWNlcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBob3JpelZlcnQsXG4gIGRpYWdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvbW92ZW1lbnRzL3NsaWRlX21vdmVzLmpzIiwiY29uc3QgSW50MzJVdGlscyA9IHJlcXVpcmUoJy4vaW50MzJVdGlscy5qcycpO1xuLy8gQSBzdGFuZGFyZCA4eDggY2hlc3MgYm9hcmQgY2FuIGJlIHJlcHJlc2VudGVkIGJ5IGEgNjRiaXQgaW50ZWdlciAoYml0Ym9hcmQpLFxuLy8gaW4gd2hpY2ggYSAxIG1lYW5zIHRoZSBwb3NpdGlvbiBpcyBvY2N1cGllZCwgYSAwIG1lYW5zIGl0J3MgZW1wdHlcblxuLy8gV2UgdXNlIHNldmVyYWwgb2YgdGhlc2UgYml0Ym9hcmRzIHRvIHJlcHJlc2VudCBhIGNoZXNzIHBvc2l0aW9uXG4vLyBmb3IgZXhhbXBsZSwgdGhlIGN1cnJlbnQgc2V0IG9mIHBpZWNlcyBpcyByZXByZXNlbnRlZCBieSBhIGJpdGJvYXJkXG4vLyBmb3IgZWFjaCBwaWVjZSB0eXBlIGFuZCBjb2xvclxuXG4vLyBTaW5jZSBKYXZhc2NyaXB0IGRvZXNuJ3Qgc3VwcG9ydCBiaXR3aXNlIG9wZXJhdGlvbnMgZm9yIDY0Yml0IGludGVnZXJzLFxuLy8gd2UgaW1wbGVtZW50IG1vc3Qgb2YgdGhvc2Ugb3BlcmF0aW9ucyBoZXJlLCBzZXBhcmF0aW5nIHRoZSA2NGJpdCBpbnRcbi8vIGludG8gaXRzIGxvdyAzMmJpdCBhbmQgaGlnaCAzMmJpdCBjb21wb25lbnRzXG5cbi8vNTYgNTcgNTggNTkgNjAgNjEgNjIgNjNcbi8vNDggNDkgNTAgNTEgNTIgNTMgNTQgNTUgIF5cbi8vNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgIHxcbi8vMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgSElHSFxuLy8yNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSBMT1dcbi8vMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgIHxcbi8vIDggIDkgMTAgMTEgMTIgMTMgMTQgMTUgIHZcbi8vIDAgIDEgIDIgIDMgIDQgIDUgIDYgIDdcblxuY2xhc3MgQml0Qm9hcmQge1xuICBjb25zdHJ1Y3Rvcihsb3csIGhpZ2gpIHtcbiAgICB0aGlzLmxvdyA9IChsb3cgfHwgMCkgPj4+IDA7XG4gICAgdGhpcy5oaWdoID0gKGhpZ2ggfHwgMCkgPj4+IDA7XG4gIH1cblxuICBhbmQob3RoZXIpIHtcbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKHRoaXMubG93ICYgb3RoZXIubG93LCB0aGlzLmhpZ2ggJiBvdGhlci5oaWdoKTtcbiAgfVxuXG4gIG9yKG90aGVyKSB7XG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh0aGlzLmxvdyB8IG90aGVyLmxvdywgdGhpcy5oaWdoIHwgb3RoZXIuaGlnaCk7XG4gIH1cblxuICB4b3Iob3RoZXIpIHtcbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKHRoaXMubG93IF4gb3RoZXIubG93LCB0aGlzLmhpZ2ggXiBvdGhlci5oaWdoKTtcbiAgfVxuXG4gIG5vdCgpIHtcbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKH50aGlzLmxvdywgfnRoaXMuaGlnaCk7XG4gIH1cblxuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gKHRoaXMubG93ID09PSBvdGhlci5sb3cgJiYgdGhpcy5oaWdoID09PSBvdGhlci5oaWdoKTtcbiAgfVxuXG4gIGdyZWF0ZXJUaGFuKG90aGVyKSB7XG4gICAgcmV0dXJuICh0aGlzLmhpZ2ggPiBvdGhlci5oaWdoIHx8IHRoaXMubG93ID4gb3RoZXIubG93KTtcbiAgfVxuXG4gIGxlc3NUaGFuKG90aGVyKSB7XG4gICAgcmV0dXJuICh0aGlzLmhpZ2ggPCBvdGhlci5oaWdoIHx8IHRoaXMubG93IDwgb3RoZXIubG93KTtcbiAgfVxuXG4gIGlzWmVybygpIHtcbiAgICByZXR1cm4gKHRoaXMuaGlnaCA9PT0gMCAmJiB0aGlzLmxvdyA9PT0gMCk7XG4gIH1cblxuICBzaGlmdFJpZ2h0KG51bUJpdHMpIHtcbiAgICBsZXQgbmV3TG93Qml0cywgbmV3SGlnaEJpdHM7XG5cbiAgICBpZiAobnVtQml0cyA8PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEJpdEJvYXJkKHRoaXMubG93LCB0aGlzLmhpZ2gpO1xuICAgIH0gZWxzZSBpZiAobnVtQml0cyA+IDYzKSB7XG4gICAgICByZXR1cm4gbmV3IEJpdEJvYXJkKCk7XG4gICAgfSBlbHNlIGlmIChudW1CaXRzID49IDMyKSB7XG4gICAgICBuZXdMb3dCaXRzID0gdGhpcy5oaWdoID4+PiAobnVtQml0cyAtIDMyKTtcbiAgICAgIG5ld0hpZ2hCaXRzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TG93Qml0cyA9ICh0aGlzLmxvdyA+Pj4gbnVtQml0cykgfCAodGhpcy5oaWdoIDw8ICgzMiAtIG51bUJpdHMpKTtcbiAgICAgIG5ld0hpZ2hCaXRzID0gdGhpcy5oaWdoID4+PiBudW1CaXRzO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQml0Qm9hcmQobmV3TG93Qml0cywgbmV3SGlnaEJpdHMpO1xuICB9XG5cbiAgc2hpZnRMZWZ0KG51bUJpdHMpIHtcbiAgICBsZXQgbmV3TG93Qml0cywgbmV3SGlnaEJpdHM7XG5cbiAgICBpZiAobnVtQml0cyA8PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEJpdEJvYXJkKHRoaXMubG93LCB0aGlzLmhpZ2gpO1xuICAgIH0gZWxzZSBpZiAobnVtQml0cyA+IDYzKSB7XG4gICAgICByZXR1cm4gbmV3IEJpdEJvYXJkKCk7XG4gICAgfSBlbHNlIGlmIChudW1CaXRzID49IDMyKSB7XG4gICAgICBuZXdMb3dCaXRzID0gMDtcbiAgICAgIG5ld0hpZ2hCaXRzID0gKHRoaXMubG93IDw8IChudW1CaXRzIC0gMzIpKSA+Pj4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TG93Qml0cyA9ICh0aGlzLmxvdyA8PCBudW1CaXRzKSA+Pj4gMDtcbiAgICAgIG5ld0hpZ2hCaXRzID0gICgodGhpcy5sb3cgPj4+ICgzMiAtIG51bUJpdHMpKSB8ICh0aGlzLmhpZ2ggPDwgbnVtQml0cykpID4+PiAwO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQml0Qm9hcmQobmV3TG93Qml0cywgbmV3SGlnaEJpdHMpO1xuICB9XG5cbiAgcG9wQ291bnQoKSB7XG4gICAgICByZXR1cm4gW3RoaXMubG93LCB0aGlzLmhpZ2hdLnJlZHVjZSgoY291bnQsIGludDMyKSA9PiB7XG4gICAgICAgIHJldHVybiBjb3VudCArIEludDMyVXRpbHMucG9wQ291bnQzMihpbnQzMik7XG4gICAgICB9LCAwKTtcbiAgfVxuXG4gIHNldEJpdChwb3MpIHtcbiAgICBpZiAocG9zID49IDMyICYmIHBvcyA8IDY0KSB7XG4gICAgICB0aGlzLmhpZ2ggPSAodGhpcy5oaWdoIHwgKDEgPDwgKHBvcyAtIDMyKSkpID4+PiAwO1xuICAgIH0gZWxzZSBpZiAocG9zID49IDAgJiYgcG9zIDwgMzIpIHtcbiAgICAgIHRoaXMubG93ID0gKHRoaXMubG93IHwgKDEgPDwgcG9zKSkgPj4+IDA7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJCaXQocG9zKSB7XG4gICAgaWYgKHBvcyA+PSAzMikge1xuICAgICAgdGhpcy5oaWdoID0gKHRoaXMuaGlnaCAmIH4oMSA8PCAocG9zIC0gMzIpKSkgPj4+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG93ID0gKHRoaXMubG93ICYgfigxIDw8IHBvcykpID4+PiAwO1xuICAgIH1cbiAgfVxuXG4gIGJpdFNjYW5Gb3J3YXJkKCkge1xuICAgIGlmICh0aGlzLmxvdykge1xuICAgICAgcmV0dXJuIEludDMyVXRpbHMuYml0U2NhbkZvcndhcmQzMih0aGlzLmxvdyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhpZ2gpIHtcbiAgICAgIHJldHVybiBJbnQzMlV0aWxzLmJpdFNjYW5Gb3J3YXJkMzIodGhpcy5oaWdoKSArIDMyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBoYXNTZXRCaXQocG9zKSB7XG4gICAgaWYgKHBvcyA8IDMyKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmxvdyAmICgxIDw8IHBvcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmhpZ2ggJiAoMSA8PCAocG9zIC0gMzIpKSk7XG4gICAgfVxuICB9XG5cbiAgYml0U2NhblJldmVyc2UoKSB7XG4gICAgaWYgKHRoaXMuaGlnaCkge1xuICAgICAgcmV0dXJuIEludDMyVXRpbHMuYml0U2NhblJldmVyc2UzMih0aGlzLmhpZ2gpICsgMzI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvdykge1xuICAgICAgcmV0dXJuIEludDMyVXRpbHMuYml0U2NhblJldmVyc2UzMih0aGlzLmxvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHBvcDFCaXRzKGNiKSB7XG4gICAgd2hpbGUgKHRoaXMubG93KSB7XG4gICAgICBjYihJbnQzMlV0aWxzLmJpdFNjYW5Gb3J3YXJkMzIodGhpcy5sb3cpKTtcbiAgICAgIHRoaXMubG93ID0gSW50MzJVdGlscy5jbGVhckxlYXN0U2lnQml0MzIodGhpcy5sb3cpO1xuICAgIH1cblxuICAgIHdoaWxlICh0aGlzLmhpZ2gpIHtcbiAgICAgIGNiKEludDMyVXRpbHMuYml0U2NhbkZvcndhcmQzMih0aGlzLmhpZ2gpICsgMzIpO1xuICAgICAgdGhpcy5oaWdoID0gSW50MzJVdGlscy5jbGVhckxlYXN0U2lnQml0MzIodGhpcy5oaWdoKTtcbiAgICB9XG4gIH1cblxuICBkdXAoKSB7XG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZCh0aGlzLmxvdywgdGhpcy5oaWdoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zKHBvcykge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBCaXRCb2FyZCgpO1xuICAgIHJlcy5zZXRCaXQocG9zKTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCByZXMgPSBuZXcgQml0Qm9hcmQoKTtcblxuICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb3MpID0+IHtcbiAgICAgIHJlcy5zZXRCaXQocG9zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbChjb2xOdW0pIHtcbiAgICBjb25zdCByZXMgPSBuZXcgQml0Qm9hcmQoKTtcbiAgICBpZiAoY29sTnVtIDwgMCB8fCBjb2xOdW0gPiA3KSB7IHJldHVybiByZXM7IH1cbiAgICBsZXQgcG9zID0gY29sTnVtO1xuXG4gICAgd2hpbGUgKHBvcyA8IDY0KSB7XG4gICAgICByZXMuc2V0Qml0KHBvcyk7XG4gICAgICBwb3MgKz0gODtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb3cocm93TnVtKSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEJpdEJvYXJkKCk7XG4gICAgaWYgKHJvd051bSA8IDAgfHwgcm93TnVtID4gNykgeyByZXR1cm4gcmVzOyB9XG5cbiAgICBsZXQgcG9zID0gcm93TnVtICogODtcbiAgICBsZXQgcG9zTWF4ID0gcG9zICsgNztcblxuICAgIHdoaWxlIChwb3MgPD0gcG9zTWF4KSB7XG4gICAgICByZXMuc2V0Qml0KHBvcyk7XG4gICAgICBwb3MrKztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc3RhdGljIHVwcGVyUmlnaHREaWFnKHN0YXJ0UG9zKSB7XG4gICAgY29uc3QgcmVzID0gQml0Qm9hcmQuZnJvbVBvcyhzdGFydFBvcyk7XG4gICAgaWYgKHN0YXJ0UG9zIDwgMCB8fCBzdGFydFBvcyA+IDYzKSB7IHJldHVybiByZXM7IH1cbiAgICBsZXQgcG9zID0gc3RhcnRQb3MgKyA5O1xuXG4gICAgd2hpbGUgKHBvcyA8IDY0ICYmIHBvcyAlIDggIT09IDApIHtcbiAgICAgIHJlcy5zZXRCaXQocG9zKTtcbiAgICAgIHBvcyArPSA5O1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgdXBwZXJMZWZ0RGlhZyhzdGFydFBvcykge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBCaXRCb2FyZCgpO1xuICAgIGlmIChzdGFydFBvcyA8IDAgfHwgc3RhcnRQb3MgPiA2MykgeyByZXR1cm4gcmVzOyB9XG4gICAgbGV0IHBvcyA9IHN0YXJ0UG9zO1xuXG4gICAgd2hpbGUgKHBvcyA8IDY0ICYmIHBvcyAlIDggIT09IDApIHtcbiAgICAgIHJlcy5zZXRCaXQocG9zKTtcbiAgICAgIHBvcyArPSA3O1xuICAgIH1cblxuICAgIGlmIChwb3MgPCA2NCkge1xuICAgICAgcmVzLnNldEJpdChwb3MpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJvdyA9ICcnO1xuICAgIGxldCBwb3cgPSA2MztcbiAgICBsZXQgcG9zVmFsO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0nKTtcbiAgICB3aGlsZSAocG93ID49IDMyKSB7XG4gICAgICBwb3NWYWwgPSAoTWF0aC5wb3coMiwgcG93IC0gMzIpICYgdGhpcy5oaWdoKSA9PT0gMCA/ICcwJyA6ICcxJztcbiAgICAgIHJvdyA9IHBvc1ZhbCArIHJvdztcbiAgICAgIGlmIChyb3cubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgIHJvdyA9ICcnO1xuICAgICAgfVxuICAgICAgcG93LS07XG4gICAgfVxuXG4gICAgd2hpbGUgKHBvdyA+PSAwKSB7XG4gICAgICBwb3NWYWwgPSAoTWF0aC5wb3coMiwgcG93KSAmIHRoaXMubG93KSA9PT0gMCA/ICcwJyA6ICcxJztcbiAgICAgIHJvdyA9IHBvc1ZhbCArIHJvdztcbiAgICAgIGlmIChyb3cubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgIHJvdyA9ICcnO1xuICAgICAgfVxuICAgICAgcG93LS07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0nKTtcbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQml0Qm9hcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iaXRib2FyZC9iaXRib2FyZC5qcyIsImNvbnN0IHsgVHlwZXMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmNsYXNzIE1vdmUge1xuICBjb25zdHJ1Y3Rvcihmcm9tLCB0bywgdHlwZSwgcGllY2UsIGNhcHRQaWVjZSkge1xuICAgIHRoaXMudmFsID0gKCgodHlwZSAmIDB4ZikgPDwgMTgpID4+PiAwKSB8XG4gICAgICAgICAgICAgICAoKCgoY2FwdFBpZWNlIHx8IDApICYgMHg3KSA8PCAxNSkgPj4+IDApIHxcbiAgICAgICAgICAgICAgICgoKHBpZWNlICYgMHg3KSA8PCAxMikgPj4+IDApIHxcbiAgICAgICAgICAgICAgICgoKGZyb20gJiAweDNmKSA8PCA2KSA+Pj4gMCkgfFxuICAgICAgICAgICAgICAgKCh0byAmIDB4M2YpID4+PiAwKSA+Pj4gMDtcbiAgfVxuXG4gIC8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gIHN0YXRpYyBmcm9tVmFsKHZhbCkge1xuICAgIGNvbnN0IG5ld01vdmUgPSBuZXcgTW92ZSgwLCAwLCAwLCAwLCAwKTtcbiAgICBuZXdNb3ZlLnZhbCA9IHZhbDtcbiAgICByZXR1cm4gbmV3TW92ZTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IHRoaXMuZ2V0RnJvbSgpLFxuICAgICAgdG86IHRoaXMuZ2V0VG8oKSxcbiAgICAgIHR5cGU6IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgcGllY2VUeXBlOiB0aGlzLmdldFBpZWNlKCksXG4gICAgICBjYXB0UGllY2VUeXBlOiB0aGlzLmdldENhcHRQaWVjZSgpLFxuICAgICAgaXNQcm9tbzogdGhpcy5pc1Byb21vKCksXG4gICAgICBpc0Nhc3RsZTogdGhpcy5pc0Nhc3RsZSgpXG4gICAgfTtcbiAgfVxuXG4gIGdldEZyb20oKSB7XG4gICAgcmV0dXJuICh0aGlzLnZhbCA+Pj4gNikgJiAweDNmO1xuICB9XG5cbiAgZ2V0VG8oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsICYgMHgzZjtcbiAgfVxuXG4gIGdldFBpZWNlKCkge1xuICAgIHJldHVybiAodGhpcy52YWwgPj4+IDEyKSAmIDB4NztcbiAgfVxuXG4gIGdldENhcHRQaWVjZSgpIHtcbiAgICByZXR1cm4gKHRoaXMudmFsID4+PiAxNSkgJiAweDc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbCA+Pj4gMTg7XG4gIH1cblxuICBpc1Byb21vKCkge1xuICAgIHJldHVybiBbVHlwZXMuTlBST01PLCBUeXBlcy5CUFJPTU8sXG4gICAgICAgICAgICBUeXBlcy5SUFJPTU8sIFR5cGVzLlFQUk9NT10uaW5jbHVkZXModGhpcy5nZXRUeXBlKCkpO1xuICB9XG5cbiAgaXNDYXN0bGUoKSB7XG4gICAgcmV0dXJuIFtUeXBlcy5DU1RMX0tJTkcsIFR5cGVzLkNTVExfUVVFRU5dLmluY2x1ZGVzKHRoaXMuZ2V0VHlwZSgpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgTW92ZSwgTW92ZVR5cGVzOiBUeXBlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbW92ZS9pbmRleC5qcyIsImNvbnN0IHsgQml0Qm9hcmQsIEJCTWFza3MgfSA9IHJlcXVpcmUoJy4uLy4uL2JpdGJvYXJkJyk7XG5cbmZ1bmN0aW9uIHN0ZXBNb3ZlKGluaXRpYWwsIG5vU28sIGVhV2UpIHtcbiAgbGV0IHBvc2l0aW9ucyA9IGluaXRpYWw7XG5cbiAgaWYgKG5vU28gPiAwKSB7XG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zLnNoaWZ0TGVmdChub1NvICogOCk7XG4gIH0gZWxzZSBpZiAobm9TbyA8IDApe1xuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5zaGlmdFJpZ2h0KG5vU28gKiAtOCk7XG4gIH1cblxuICBpZiAoZWFXZSA+IDApIHtcbiAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnMuc2hpZnRMZWZ0KGVhV2UpLmFuZChCQk1hc2tzLkVBU1RfT0ZfQ09MW2VhV2UgLSAxXSk7XG4gIH0gZWxzZSBpZiAoZWFXZSA8IDApe1xuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5zaGlmdFJpZ2h0KC1lYVdlKS5hbmQoQkJNYXNrcy5XRVNUX09GX0NPTFtlYVdlICsgOF0pO1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGVwTW92ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9tb3ZlbWVudHMvc3RlcF9tb3ZlLmpzIiwiY29uc3QgQ29sc0ZpbGVzID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcblxuY29uc3QgRmlsZXNDb2xzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBDb2xzRmlsZXMucmVkdWNlKChyZXMsIGZpbGUsIGNvbCkgPT4ge1xuICAgIHJlc1tmaWxlXSA9IGNvbDtcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG59KCk7XG5cbmNvbnN0IFJvd3NSYW5rcyA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4J107XG5cbmNvbnN0IFJhbmtzUm93cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gUm93c1JhbmtzLnJlZHVjZSgocmVzLCByYW5rLCByb3cpID0+IHtcbiAgICByZXNbcmFua10gPSByb3c7XG4gICAgcmV0dXJuIHJlcztcbiAgfSwge30pO1xufSgpO1xuXG5jb25zdCBHYW1lU3RhdHVzID0ge1xuICBUaHJlZUZvbGRSZXA6ICdEcmF3IC0gVGhyZWVmb2xkIFJlcGV0aXRpb24nLFxuICBNb3ZlTGltaXRFeGM6ICdEcmF3IC0gTW92ZSBMaW1pdCBFeGNlZWRlZCAoNTApJyxcbiAgQ2hlY2ttYXRlOiAnQ2hlY2ttYXRlJyxcbiAgU3RhbGVtYXRlOiAnU3RhbGVtYXRlJyxcbiAgUGxheWVyVHVybjogJ1BsYXllciBUdXJuJyxcbiAgQUlUdXJuOiAnQUkgVHVybidcbn07XG5cbmNvbnN0IFNlbGVjdG9ycyA9IHtcbiAgQk9BUkRfSUQ6IFwiI2JvYXJkXCIsXG4gIFBJRUNFX0NMQVNTOiAncGllY2UnLFxuICBTUVVBUkVfQ0xBU1M6ICdzcXVhcmUnLFxuICBSQU5LX0NMQVNTOiAncmFuaycsXG4gIEZJTEVfQ0xBU1M6ICdmaWxlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IENvbHNGaWxlcywgRmlsZXNDb2xzLCBSb3dzUmFua3MsIFJhbmtzUm93cywgU2VsZWN0b3JzLCBHYW1lU3RhdHVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy91aS9jb25zdGFudHMuanMiLCJjb25zdCBVSSA9IHJlcXVpcmUoJy4vdWknKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHVpID0gbmV3IFVJKCk7XG4gIHVpLnJ1bigpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9hcHAuanMiLCJjb25zdCBQb3NpdGlvbiA9IHJlcXVpcmUoJy4uL3Bvc2l0aW9uJyk7XG5jb25zdCBBSSA9IHJlcXVpcmUoJy4uL2FpJyk7XG5jb25zdCB7IFBUeXBlcywgQ29sb3JzLCBQaWVjZVR5cGVIVE1MIH0gPSByZXF1aXJlKCcuLi9waWVjZXMnKTtcbmNvbnN0IHsgTW92ZVR5cGVzIH0gPSByZXF1aXJlKCcuLi9tb3ZlJyk7XG5jb25zdCBVdGlsID0gcmVxdWlyZSgnLi91dGlsLmpzJyk7XG5jb25zdCB7IENvbHNGaWxlcywgRmlsZXNDb2xzLFxuICAgICAgICBSb3dzUmFua3MsIFJhbmtzUm93cyxcbiAgICAgICAgU2VsZWN0b3JzLCBHYW1lU3RhdHVzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5jbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWkgPSBuZXcgQUkoKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICB0aGlzLnNldHVwQnV0dG9ucygpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgICQoJyNib2FyZCcpLmVtcHR5KCk7XG4gICAgJCgnI21vdmUtaGlzdG9yeScpLmVtcHR5KCk7XG4gICAgJCgnLmFpLXN0YXRzLWhlYWRlcicpLnRleHQoYEFJIFN0YXRzYCk7XG4gICAgJCgnLm1vdmUtc3RhdHMgdGQnKS5lbXB0eSgpO1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oKTtcbiAgICBjb25zdCBwbGF5ZXJDb2xvciA9ICQoJ2lucHV0W25hbWU9XCJjb2xvci1vcHRpb25cIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgIHRoaXMucGxheWVyQ29sb3IgPSBwYXJzZUludChwbGF5ZXJDb2xvcik7XG4gICAgY29uc3QgYWlUaGlua2luZ1RpbWUgPSBwYXJzZUZsb2F0KCQoJyNhaS10aW1lLXZhbCcpLnRleHQoKSkgKiAxMDAwO1xuICAgIHRoaXMuYWkuc2V0VGhpbmtpbmdUaW1lKGFpVGhpbmtpbmdUaW1lKTtcbiAgICB0aGlzLmRyYXdCb2FyZCgpO1xuICAgIHRoaXMucGxheU5leHRUdXJuKCk7XG4gIH1cblxuICBzZXR1cEJ1dHRvbnMoKSB7XG4gICAgJCgnI3VubWFrZScpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMudW5tYWtlUGxheWVyTW92ZSgpO1xuICAgICAgICB0aGlzLnBsYXlOZXh0VHVybigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2F1dG8nKS5jbGljaygoZXZlbnQpID0+IHtcbiAgICAgIGlmICgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLmFpTW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2FpLXRpbWUtc2xpZGVyJykuc2xpZGVyKHtcbiAgICAgIHZhbHVlOiB0aGlzLmFpLnRoaW5raW5nVGltZSAvIDEwMDAsXG4gICAgICBtaW46IE1hdGgucm91bmQoTWF0aC5sb2coLjAxKSAqIDEwMDApIC8gMTAwMCxcbiAgICAgIG1heDogTWF0aC5yb3VuZChNYXRoLmxvZygzMCkgKiAxMDAwKSAvIDEwMDAsXG4gICAgICBzdGVwOiAwLjAxLFxuICAgICAgc2xpZGU6IChldmVudCwgdWkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gTWF0aC5yb3VuZChNYXRoLnBvdyhNYXRoLkUsIHVpLnZhbHVlKSAqIDEwMDApO1xuICAgICAgICAkKCcjYWktdGltZS12YWwnKS50ZXh0KFV0aWwuZm9ybWF0VGltZSh2YWwpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNuZXctZ2FtZScpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNhaS10aW1lLXZhbCcpLnRleHQoVXRpbC5mb3JtYXRUaW1lKHRoaXMuYWkudGhpbmtpbmdUaW1lKSk7XG4gIH1cblxuICBkZWFjdGl2YXRlQnRucygpIHtcbiAgICAkKCcuY2xpY2thYmxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG5cbiAgYWN0aXZhdGVCdG5zKCkge1xuICAgICQoJy5jbGlja2FibGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ucHJldk1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJCgnI3VubWFrZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICByZXNldFN0YXR1cygpIHtcbiAgICB0aGlzLmN1cnJNb3ZlcyA9IHRoaXMucG9zaXRpb24uZ2VuZXJhdGVMZWdhbE1vdmVzKCk7XG5cbiAgICBpZiAodGhpcy5jdXJyTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi5pc1RocmVlZm9sZFJlcGV0aXRpb24oKSkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuVGhyZWVGb2xkUmVwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLmlzTW92ZUxpbWl0RXhjZWVkZWQoKSkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuTW92ZUxpbWl0RXhjO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uLmluQ2hlY2sodGhpcy5wb3NpdGlvbi50dXJuKSkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuQ2hlY2ttYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBHYW1lU3RhdHVzLlN0YWxlbWF0ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWN0aXZhdGVCdG5zKCk7XG4gICAgICAkKCcjYXV0bycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24udHVybiA9PT0gdGhpcy5wbGF5ZXJDb2xvcikge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuUGxheWVyVHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5BSVR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzRWwgPSAkKCcuc3RhdHVzLWhlYWRlcicpO1xuXG4gICAgc3RhdHVzRWwudGV4dCh0aGlzLnN0YXR1cyk7XG4gIH1cblxuICB1bm1ha2VQbGF5ZXJNb3ZlKCkge1xuICAgIHRoaXMucG9zaXRpb24udW5tYWtlUHJldk1vdmUoKTtcbiAgICB0aGlzLnNoaWZ0RnJvbU1vdmVzTGlzdCgpO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnR1cm4gIT09IHRoaXMucGxheWVyQ29sb3IpIHtcbiAgICAgIHRoaXMucG9zaXRpb24udW5tYWtlUHJldk1vdmUoKTtcbiAgICAgIHRoaXMuc2hpZnRGcm9tTW92ZXNMaXN0KCk7XG4gICAgfVxuICB9XG5cbiAgcGxheU5leHRUdXJuKCkge1xuICAgIHRoaXMudXBkYXRlUGllY2VzKCk7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbi50dXJuID09PSB0aGlzLnBsYXllckNvbG9yKSB7XG4gICAgICB0aGlzLnNldHVwUGxheWVyTW92ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFpTW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBvcHVsYXRlU3RhdHNUYWJsZShtb3ZlU3RyLCBtb3ZlU3RhdHMpIHtcbiAgICAkKCcuYWktc3RhdHMtaGVhZGVyJykudGV4dChgQUkgU3RhdHMgKCR7bW92ZVN0cn0pYCk7XG4gICAgJCgnLmRlcHRoLXN0YXQnKS50ZXh0KG1vdmVTdGF0cy5kZXB0aCk7XG4gICAgJCgnLnJ1bnRpbWUtc3RhdCcpLnRleHQobW92ZVN0YXRzLnJ1blRpbWUgfHwgJ04vQScpO1xuICAgICQoJy5leHBsb3JlZC1zdGF0JykudGV4dChtb3ZlU3RhdHMuZXhwbG9yZWRQb3NpdGlvbnMpO1xuICAgICQoJy5tYWluLXNlYXJjaC1zdGF0JykudGV4dChtb3ZlU3RhdHMubWFpblNlYXJjaE5vZGVzKTtcbiAgICAkKCcucXNlYXJjaC1zdGF0JykudGV4dChtb3ZlU3RhdHMucVNlYXJjaE5vZGVzKTtcbiAgICAkKCcudHRhYmxlLWhpdC1zdGF0JykudGV4dChtb3ZlU3RhdHMudFRhYmxlSGl0cyk7XG4gIH1cblxuICBjcmVhdGVNb3ZlSXRlbShtb3ZlRGF0YSkge1xuICAgIGNvbnN0IG1vdmVJdGVtID0gJCgnPHRyIGNsYXNzPVwibW92ZS1pdGVtXCI+PC90cj4nKTtcbiAgICBjb25zdCBtb3ZlU3RyID0gVXRpbC5mb3JtYXRNb3ZlKG1vdmVEYXRhLm1vdmUsIG1vdmVEYXRhLmNvbG9yKTtcblxuICAgIG1vdmVJdGVtLmFwcGVuZCgkKGA8dGQgY2xhc3M9XCJtb3ZlLXN0clwiPiR7bW92ZVN0cn08L3RkPmApKTtcblxuICAgIGlmIChtb3ZlRGF0YS5zdGF0cykge1xuICAgICAgbW92ZUl0ZW0uYWRkQ2xhc3MoJ3N0YXRzLXZpZXctbGluayBjbGlja2FibGUnKTtcbiAgICAgIG1vdmVJdGVtLmNsaWNrKCgpID0+IHRoaXMucG9wdWxhdGVTdGF0c1RhYmxlKG1vdmVTdHIsIG1vdmVEYXRhLnN0YXRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVJdGVtO1xuICB9XG5cbiAgYWRkVG9Nb3Zlc0xpc3QobW92ZURhdGEpIHtcbiAgICBjb25zdCBtb3Zlc0hpc3RvcnkgPSAkKCcjbW92ZS1oaXN0b3J5Jyk7XG4gICAgY29uc3QgbmV3TW92ZUl0ZW0gPSB0aGlzLmNyZWF0ZU1vdmVJdGVtKG1vdmVEYXRhKTtcbiAgICBtb3Zlc0hpc3RvcnkucHJlcGVuZChuZXdNb3ZlSXRlbSk7XG4gIH1cblxuICBzaGlmdEZyb21Nb3Zlc0xpc3QoKSB7XG4gICAgJChcIi5tb3ZlLWl0ZW06Zmlyc3RcIikucmVtb3ZlKCk7XG4gIH1cblxuICBnZW5lcmF0ZUZpbGVIZWFkZXIoKSB7XG4gICAgY29uc3QgbmV3Um93ID0gJCgnPHRyPjwvdHI+Jyk7XG4gICAgbmV3Um93LmFwcGVuZChgPHRoPmApO1xuICAgIENvbHNGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBuZXdSb3cuYXBwZW5kKGA8dGggY2xhc3M9XCJmaWxlXCI+JHtmaWxlfTwvdGg+YCk7XG4gICAgfSk7XG4gICAgbmV3Um93LmFwcGVuZChgPHRoPmApO1xuXG4gICAgcmV0dXJuIG5ld1JvdztcbiAgfVxuXG4gIGdlbmVyYXRlU3F1YXJlKGZpbGUsIHJhbmspIHtcbiAgICBjb25zdCBmaWxlUmFuayA9IGZpbGUgKyByYW5rO1xuXG4gICAgY29uc3QgbmV3U3F1YXJlID0gJChgPHRkIGlkPVwiJHtmaWxlUmFua31cIj48L3RkPmApO1xuXG4gICAgY29uc3Qgc3F1YXJlQ29sb3IgPSBVdGlsLmlzRGFya1NxdWFyZShmaWxlUmFuaykgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgIG5ld1NxdWFyZS5hZGRDbGFzcyhzcXVhcmVDb2xvciArIFwiIHNxdWFyZVwiKTtcblxuICAgIHJldHVybiBuZXdTcXVhcmU7XG4gIH1cblxuICBkcmF3Qm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSAkKCcjYm9hcmQnKTtcblxuICAgIGxldCBuZXdSYW5rUm93O1xuICAgIGNvbnN0IHJvd3NSYW5rcyA9IHRoaXMucGxheWVyQ29sb3IgPT09IENvbG9ycy5XSElURSA/IFJvd3NSYW5rcyA6IFJvd3NSYW5rcy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByb3dzUmFua3MuZm9yRWFjaCgocmFuaykgPT4ge1xuICAgICAgbmV3UmFua1JvdyA9ICQoJzx0cj4nKTtcbiAgICAgIG5ld1JhbmtSb3cuYXBwZW5kKGA8dGggY2xhc3M9XCJyYW5rXCI+JHtyYW5rfTwvdGg+YCk7XG4gICAgICBDb2xzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICBuZXdSYW5rUm93LmFwcGVuZCh0aGlzLmdlbmVyYXRlU3F1YXJlKGZpbGUsIHJhbmspKTtcbiAgICAgIH0pO1xuICAgICAgbmV3UmFua1Jvdy5hcHBlbmQoYDx0aCBjbGFzcz1cInJhbmtcIj4ke3Jhbmt9PC90aD5gKTtcbiAgICAgIGJvYXJkLnByZXBlbmQobmV3UmFua1Jvdyk7XG4gICAgfSk7XG5cbiAgICBib2FyZC5wcmVwZW5kKHRoaXMuZ2VuZXJhdGVGaWxlSGVhZGVyKCkpO1xuICAgIGJvYXJkLmFwcGVuZCh0aGlzLmdlbmVyYXRlRmlsZUhlYWRlcigpKTtcbiAgfVxuXG4gIHVwZGF0ZVBpZWNlcygpIHtcbiAgICAkKCcucGllY2UnKS5yZW1vdmUoKTtcbiAgICBjb25zdCBwaWVjZVR5cGVzID0gT2JqZWN0LnZhbHVlcyhQVHlwZXMpO1xuICAgIGNvbnN0IHBpZWNlcyA9IHRoaXMucG9zaXRpb24ucGllY2VzO1xuICAgIGxldCBmaWxlUmFuaztcbiAgICBsZXQgbmV3UGllY2U7XG5cbiAgICBwaWVjZVR5cGVzLmZvckVhY2goKHBpZWNlVHlwZSkgPT4ge1xuICAgICAgcGllY2VzW3BpZWNlVHlwZV0uZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgICBuZXdQaWVjZSA9ICQoYDxkaXYgY2xhc3M9XCJwaWVjZVwiPjxkaXY+YCk7XG4gICAgICAgIGlmIChwaWVjZXNbQ29sb3JzLldISVRFXS5oYXNTZXRCaXQocG9zKSkge1xuICAgICAgICAgIG5ld1BpZWNlLmh0bWwoUGllY2VUeXBlSFRNTFtDb2xvcnMuV0hJVEVdW3BpZWNlVHlwZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1BpZWNlLmh0bWwoUGllY2VUeXBlSFRNTFtDb2xvcnMuQkxBQ0tdW3BpZWNlVHlwZV0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVSYW5rID0gVXRpbC5maWxlUmFua0Zyb21Qb3MocG9zKTtcbiAgICAgICAgJChgIyR7ZmlsZVJhbmt9YCkuYXBwZW5kKG5ld1BpZWNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZU1vdmUobW92ZSwgc3RhdHMpIHtcbiAgICB0aGlzLmFkZFRvTW92ZXNMaXN0KHsgbW92ZSwgY29sb3I6IHRoaXMucG9zaXRpb24udHVybiwgc3RhdHMgfSk7XG4gICAgaWYgKHN0YXRzKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlU3RhdHNUYWJsZShVdGlsLmZvcm1hdE1vdmUobW92ZSwgdGhpcy5wb3NpdGlvbi50dXJuKSwgc3RhdHMpO1xuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uLm1ha2VNb3ZlKG1vdmUpO1xuICAgIHRoaXMucGxheU5leHRUdXJuKCk7XG4gIH1cblxuICBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiAhW0dhbWVTdGF0dXMuQUlUdXJuLCBHYW1lU3RhdHVzLlBsYXllclR1cm5dLmluY2x1ZGVzKHRoaXMuc3RhdHVzKTtcbiAgfVxuXG4gIGFpTW92ZSgpIHtcbiAgICB0aGlzLmRlYWN0aXZhdGVCdG5zKCk7XG4gICAgdGhpcy5yZXNldFN0YXR1cygpO1xuICAgIGlmICh0aGlzLmlzR2FtZU92ZXIoKSkgeyByZXR1cm47IH1cblxuICAgICQoJ21haW4nKS5hZGRDbGFzcygnd2FpdGluZycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYWlNb3ZlRGF0YSA9IHRoaXMuYWkuY2hvb3NlTW92ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmN1cnJNb3Zlcyk7XG4gICAgICB0aGlzLmFuaW1hdGVNb3ZlKGFpTW92ZURhdGEubW92ZSwgKCkgPT4ge1xuICAgICAgICAkKCdtYWluJykucmVtb3ZlQ2xhc3MoJ3dhaXRpbmcnKTtcbiAgICAgICAgdGhpcy5tYWtlTW92ZShhaU1vdmVEYXRhLm1vdmUsIGFpTW92ZURhdGEucGVyZm9ybWFuY2UpO1xuICAgICAgfSk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGFuaW1hdGVNb3ZlKG1vdmUsIGNiKSB7XG4gICAgY29uc3QgcGllY2VFbCA9ICQoYCMke1V0aWwuZmlsZVJhbmtGcm9tUG9zKG1vdmUuZ2V0RnJvbSgpKX0gLnBpZWNlYCk7XG4gICAgY29uc3QgbmV3U3F1YXJlID0gJChgIyR7VXRpbC5maWxlUmFua0Zyb21Qb3MobW92ZS5nZXRUbygpKX1gKTtcblxuICAgIGlmIChtb3ZlLmdldENhcHRQaWVjZSgpKSB7XG4gICAgICBjb25zdCBjYXB0UGllY2UgPSAkKGAjJHtVdGlsLmZpbGVSYW5rRnJvbVBvcyhtb3ZlLmdldFRvKCkpfSAucGllY2VgKTtcbiAgICAgIGNvbnN0IGNhcHRPZmZzZXQgPSBjYXB0UGllY2Uub2Zmc2V0KCk7XG4gICAgICBjYXB0UGllY2UuY3NzKHtcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgJ2xlZnQnOiBjYXB0T2Zmc2V0LmxlZnQsXG4gICAgICAgICd0b3AnOiBjYXB0T2Zmc2V0LnRvcFxuICAgICAgfSk7XG4gICAgICBjYXB0UGllY2UuZmFkZU91dCg0NTApO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZE9mZnNldCA9IHBpZWNlRWwub2Zmc2V0KCk7XG4gICAgcGllY2VFbC5hcHBlbmRUbyhuZXdTcXVhcmUpO1xuICAgIGNvbnN0IG5ld09mZnNldCA9IHBpZWNlRWwub2Zmc2V0KCk7XG5cbiAgICBjb25zdCBhbmltUGllY2UgPSBwaWVjZUVsLmNsb25lKCkuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICBhbmltUGllY2UuY3NzKHtcbiAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAnbGVmdCc6IG9sZE9mZnNldC5sZWZ0LFxuICAgICAgJ3RvcCc6IG9sZE9mZnNldC50b3AsXG4gICAgICAnei1pbmRleCc6IDEwMDBcbiAgICB9KTtcbiAgICBwaWVjZUVsLmhpZGUoKTtcblxuICAgIGFuaW1QaWVjZS5hbmltYXRlKHsndG9wJzogbmV3T2Zmc2V0LnRvcCwgJ2xlZnQnOiBuZXdPZmZzZXQubGVmdH0sIDQ1MCwgZnVuY3Rpb24oKXtcbiAgICAgIHBpZWNlRWwuc2hvdygpO1xuICAgICAgYW5pbVBpZWNlLnJlbW92ZSgpO1xuICAgICAgY2IoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwUGxheWVyTW92ZSgpIHtcbiAgICB0aGlzLmFjdGl2YXRlQnRucygpO1xuICAgIHRoaXMucmVzZXRTdGF0dXMoKTtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKCkpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBtb3Zlc0RhdGEgPSB0aGlzLmN1cnJNb3Zlcy5tYXAoKG1vdmUpID0+IG1vdmUuZ2V0RGF0YSgpKTtcbiAgICBjb25zdCBtb3ZlRnJvbVRvcyA9IHt9O1xuICAgIGNvbnN0IG1vdmVUb0Zyb21zID0ge307XG5cbiAgICBtb3Zlc0RhdGEuZm9yRWFjaCgobW92ZURhdGEpID0+IHtcbiAgICAgIG1vdmVGcm9tVG9zW21vdmVEYXRhLmZyb21dID0gbW92ZUZyb21Ub3NbbW92ZURhdGEuZnJvbV0gfHwgW107XG4gICAgICBtb3ZlRnJvbVRvc1ttb3ZlRGF0YS5mcm9tXS5wdXNoKG1vdmVEYXRhLnRvKTtcblxuICAgICAgbW92ZVRvRnJvbXNbbW92ZURhdGEudG9dID0gbW92ZVRvRnJvbXNbbW92ZURhdGEudG9dIHx8IFtdO1xuICAgICAgbW92ZVRvRnJvbXNbbW92ZURhdGEudG9dLnB1c2gobW92ZURhdGEuZnJvbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFjdGl2YXRlRHJhZ2dhYmxlUGllY2VzKG1vdmVGcm9tVG9zKTtcbiAgICB0aGlzLmFjdGl2YXRlRHJvcHBhYmxlU3F1YXJlcyhtb3ZlVG9Gcm9tcyk7XG4gIH1cblxuICBhY3RpdmF0ZURyYWdnYWJsZVBpZWNlcyhtb3ZlRnJvbVRvcykge1xuICAgIGxldCBmcm9tRmlsZVJhbms7XG4gICAgbGV0IHBpZWNlRWw7XG5cbiAgICBPYmplY3Qua2V5cyhtb3ZlRnJvbVRvcykuZm9yRWFjaCgoZnJvbVBvcykgPT4ge1xuICAgICAgZnJvbUZpbGVSYW5rID0gVXRpbC5maWxlUmFua0Zyb21Qb3MoZnJvbVBvcyk7XG4gICAgICBwaWVjZUVsID0gJChgIyR7ZnJvbUZpbGVSYW5rfSAucGllY2VgKTtcbiAgICAgIHBpZWNlRWwuZHJhZ2dhYmxlKHtcbiAgICAgICAgY29udGFpbm1lbnQ6ICQoJyNib2FyZCcpLFxuICAgICAgICByZXZlcnQ6ICdpbnZhbGlkJyxcbiAgICAgICAgcmV2ZXJ0RHVyYXRpb246IDMwMFxuICAgICAgfSk7XG5cbiAgICAgIHBpZWNlRWwubW91c2VlbnRlcigoKSA9PiB7XG4gICAgICAgIGlmIChwaWVjZUVsLmhhc0NsYXNzKCd1aS1kcmFnZ2FibGUnKSkge1xuICAgICAgICAgIG1vdmVGcm9tVG9zW2Zyb21Qb3NdLmZvckVhY2goKHRvUG9zKSA9PiB7XG4gICAgICAgICAgICAkKGAjJHtVdGlsLmZpbGVSYW5rRnJvbVBvcyh0b1Bvcyl9YCkuYWRkQ2xhc3MoJ2Nhbi1tb3ZlLXRvJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwaWVjZUVsLm1vdXNlbGVhdmUoKCkgPT4ge1xuICAgICAgICAkKCcuc3F1YXJlJykucmVtb3ZlQ2xhc3MoJ2Nhbi1tb3ZlLXRvJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlRHJvcHBhYmxlU3F1YXJlcyhtb3ZlVG9Gcm9tcykge1xuICAgIGxldCBkZXN0U3E7XG4gICAgbGV0IG9yaWdpblNxdWFyZTtcbiAgICBsZXQgb3JpZ2luUG9zO1xuICAgIGxldCBzZWxlY3RlZE1vdmU7XG5cbiAgICBPYmplY3Qua2V5cyhtb3ZlVG9Gcm9tcykuZm9yRWFjaCgodG9Qb3MpID0+IHtcbiAgICAgIGRlc3RTcSA9ICQoYCMke1V0aWwuZmlsZVJhbmtGcm9tUG9zKHRvUG9zKX1gKTtcbiAgICAgIGRlc3RTcS5kcm9wcGFibGUoe1xuICAgICAgICBhY2NlcHQ6IChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICBvcmlnaW5TcXVhcmUgPSAkKGRyYWdnYWJsZSkucGFyZW50KCkuYXR0cignaWQnKTtcbiAgICAgICAgICBpZiAoIW9yaWdpblNxdWFyZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICBvcmlnaW5Qb3MgPSBVdGlsLnBvc0Zyb21GaWxlUmFuayhvcmlnaW5TcXVhcmUpO1xuICAgICAgICAgIHJldHVybiBtb3ZlVG9Gcm9tc1t0b1Bvc10uaW5jbHVkZXMob3JpZ2luUG9zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZHJvcDogKGV2ZW50LCB1aSkgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVBsYXllck1vdmUodWkuZHJhZ2dhYmxlLCBwYXJzZUludCh0b1BvcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VQbGF5ZXJNb3ZlKHBpZWNlLCB0b1Bvcykge1xuICAgIGNvbnN0IG9yaWdpblNxdWFyZSA9ICQocGllY2UpLnBhcmVudCgpO1xuICAgIHBpZWNlLnJlbW92ZSgpO1xuXG4gICAgJCgnLnVpLWRyYWdnYWJsZScpLmRyYWdnYWJsZSgnZGVzdHJveScpO1xuICAgICQoJy51aS1kcm9wcGFibGUnKS5kcm9wcGFibGUoJ2Rlc3Ryb3knKTtcbiAgICAkKCcuc3F1YXJlJykucmVtb3ZlQ2xhc3MoJ2Nhbi1tb3ZlLXRvJyk7XG4gICAgdGhpcy5kZWFjdGl2YXRlQnRucygpO1xuXG4gICAgY29uc3Qgb3JpZ2luUG9zID0gVXRpbC5wb3NGcm9tRmlsZVJhbmsoJChvcmlnaW5TcXVhcmUpLmF0dHIoJ2lkJykpO1xuICAgIGNvbnN0IGRlc3RTcSA9ICQoYCMke1V0aWwuZmlsZVJhbmtGcm9tUG9zKHRvUG9zKX1gKTtcbiAgICBkZXN0U3EuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkTW92ZXMgPSB0aGlzLmN1cnJNb3Zlcy5maWx0ZXIoKG1vdmUpID0+IHtcbiAgICAgIHJldHVybiBtb3ZlLmdldEZyb20oKSA9PT0gb3JpZ2luUG9zICYmXG4gICAgICAgICAgICAgbW92ZS5nZXRUbygpID09PSB0b1BvcztcbiAgICB9KTtcblxuICAgIGlmIChzZWxlY3RlZE1vdmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5wbGF5ZXJDb2xvciA9PT0gQ29sb3JzLldISVRFID8gJ3doaXRlJyA6ICdibGFjayc7XG4gICAgICB0aGlzLmNyZWF0ZVByb21vV2luZG93KGRlc3RTcSwgc2VsZWN0ZWRNb3ZlcywgY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2VsZWN0ZWRNb3ZlID0gc2VsZWN0ZWRNb3Zlc1swXTtcbiAgICAgIHRoaXMubWFrZU1vdmUoc2VsZWN0ZWRNb3ZlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVQcm9tb1dpbmRvdyhkZXN0U3EsIHByb21vTW92ZXMsIGNvbG9yKSB7XG4gICAgY29uc3QgcHJvbW9EaXYgPSAkKFwiPGRpdiBjbGFzcz0ncHJvbW8td2luZG93Jz48L2Rpdj5cIik7XG4gICAgY29uc3QgcHJvbW9QaWVjZXMgPSB0aGlzLmNyZWF0ZVByb21vUGllY2VzKHByb21vTW92ZXMsIGNvbG9yKTtcblxuICAgIGxldCBwcm9tb1dpblJvdyA9ICQoXCI8ZGl2IGNsYXNzPSdwcm9tby13aW5kb3ctcm93Jz48L2Rpdj5cIik7XG4gICAgcHJvbW9XaW5Sb3cuYXBwZW5kKHByb21vUGllY2VzLnNsaWNlKDAsIDIpKTtcbiAgICBwcm9tb0Rpdi5hcHBlbmQocHJvbW9XaW5Sb3cpO1xuXG4gICAgcHJvbW9XaW5Sb3cgPSAkKFwiPGRpdiBjbGFzcz0ncHJvbW8td2luZG93LXJvdyc+PC9kaXY+XCIpO1xuICAgIHByb21vV2luUm93LmFwcGVuZChwcm9tb1BpZWNlcy5zbGljZSgyKSk7XG4gICAgcHJvbW9EaXYuYXBwZW5kKHByb21vV2luUm93KTtcblxuICAgIGRlc3RTcS5hcHBlbmQocHJvbW9EaXYpO1xuICB9XG5cbiAgY3JlYXRlUHJvbW9QaWVjZXMocHJvbW9Nb3ZlcywgY29sb3IpIHtcbiAgICBjb25zdCBQcm9tb3NQVHlwZXMgPSB7XG4gICAgICBbTW92ZVR5cGVzLk5QUk9NT106IFBUeXBlcy5LTklHSFRTLFxuICAgICAgW01vdmVUeXBlcy5CUFJPTU9dOiBQVHlwZXMuQklTSE9QUyxcbiAgICAgIFtNb3ZlVHlwZXMuUlBST01PXTogUFR5cGVzLlJPT0tTLFxuICAgICAgW01vdmVUeXBlcy5RUFJPTU9dOiBQVHlwZXMuUVVFRU5TXG4gICAgfTtcblxuICAgIGNvbnN0IHByb21vUGllY2VzID0gW107XG4gICAgbGV0IG5ld1Byb21vUGllY2U7XG5cbiAgICBwcm9tb01vdmVzLmZvckVhY2goKHByb21vTW92ZSkgPT4ge1xuICAgICAgbmV3UHJvbW9QaWVjZSA9IHRoaXMuY3JlYXRlUHJvbW9QaWVjZShwcm9tb01vdmUsIFByb21vc1BUeXBlc1twcm9tb01vdmUuZ2V0VHlwZSgpXSwgY29sb3IpO1xuICAgICAgcHJvbW9QaWVjZXMucHVzaChuZXdQcm9tb1BpZWNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9tb1BpZWNlcztcbiAgfVxuXG4gIGNyZWF0ZVByb21vUGllY2UobW92ZSwgcFR5cGUsIGNvbG9yKSB7XG4gICAgY29uc3QgcHJvbW9QaWVjZSA9ICQoYDxkaXYgY2xhc3M9J3Byb21vLXBpZWNlIHBpZWNlICR7Y29sb3J9J1wiPiR7UGllY2VUeXBlSFRNTFtwVHlwZV19PC9kaXY+YCk7XG4gICAgcHJvbW9QaWVjZS5jbGljaygoKSA9PiB7XG4gICAgICAkKCcucHJvbW8td2luZG93JykucmVtb3ZlKCk7XG4gICAgICB0aGlzLm1ha2VNb3ZlKG1vdmUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21vUGllY2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVSTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3VpL2luZGV4LmpzIiwiY29uc3QgeyBCaXRCb2FyZCwgQkJNYXNrcyB9ID0gcmVxdWlyZSgnLi4vYml0Ym9hcmQnKTtcblxuY29uc3QgeyBNb3ZlLCBNb3ZlVHlwZXMgfSA9IHJlcXVpcmUoJy4uL21vdmUnKTtcblxuY29uc3QgeyBQVXRpbHMsIFBUeXBlcyxcbiAgICAgICAgQ29sb3JzLCBEaXJzLFxuICAgICAgICBlYWNoUGllY2VUeXBlLCBQaWVjZUNvbnYgfSA9IHJlcXVpcmUoJy4uL3BpZWNlcycpO1xuXG5jb25zdCB7IHBpZWNlUG9zSGFzaEtleXMsXG4gICAgICAgIGVwUG9zSGFzaEtleXMsXG4gICAgICAgIGNhc3RsZUhhc2hLZXlzLFxuICAgICAgICB0dXJuSGFzaEtleXMgfSA9IHJlcXVpcmUoJy4vemhhc2hfY29uc3RhbnRzLmpzJyk7XG5cbi8vIFdlIGluaXRpYWxpemUgb3VyIHBvc2l0aW9uIHdpdGggYSBGRU4gc3RyaW5nIHNvIHRoYXQgaXQncyBlYXN5IHRvXG4vLyByZWNyZWF0ZSBhIHBhcnRpY3VsYXIgcG9zaXRpb24uIFNpbmNlIGp1c3Qgb25lIHBvc2l0aW9uIG9iamVjdCBpcyBjcmVhdGVkIGR1cmluZ1xuLy8gb3VyIGdhbWUsIHRoaXMgaXMgbWFpbmx5IGhlbHBmdWwgZm9yIHRlc3RpbmcvZGVidWdnaW5nIHB1cnBvc2VzXG4vLyBNb3JlIGFib3V0IEZFTiBoZXJlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Gb3JzeXRoJUUyJTgwJTkzRWR3YXJkc19Ob3RhdGlvblxuXG5jb25zdCBkZWZhdWx0RmVuU3RyID0gXCJybmJxa2Juci9wcHBwcHBwcC84LzgvOC84L1BQUFBQUFBQL1JOQlFLQk5SIHcgS1FrcSAtIDAgMVwiO1xuXG5jbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZlblN0ciA9IGRlZmF1bHRGZW5TdHIpIHtcbiAgICBjb25zdCBbIHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHR1cm5MZXR0ZXIsXG4gICAgICAgICAgICBjYXN0bGVSaWdodHNTdHIsXG4gICAgICAgICAgICBlcFNxLFxuICAgICAgICAgICAgaGFsZk1vdmVDbG9jayxcbiAgICAgICAgICAgIGZ1bGxNb3ZlQ2xvY2sgXSA9IGZlblN0ci5zcGxpdCgnICcpO1xuXG4gICAgdGhpcy5waWVjZXMgPSB0aGlzLmZlblBvc2l0aW9uc1RvUGllY2VCQnMocG9zaXRpb25zKTtcbiAgICB0aGlzLmNhc3RsZVJpZ2h0cyA9IHRoaXMucGFyc2VDYXN0bGVSaWdodHNTdHIoY2FzdGxlUmlnaHRzU3RyKTtcbiAgICB0aGlzLmVwQkIgPSB0aGlzLnBhcnNlRXBTdHIoZXBTcSk7XG4gICAgdGhpcy5oYWxmTW92ZUNsb2NrID0gcGFyc2VJbnQoaGFsZk1vdmVDbG9jayk7XG4gICAgdGhpcy5mdWxsTW92ZUNsb2NrID0gcGFyc2VJbnQoZnVsbE1vdmVDbG9jayk7XG4gICAgY29uc3QgdHVybiA9IHR1cm5MZXR0ZXIgPT09ICd3JyA/IENvbG9ycy5XSElURSA6IENvbG9ycy5CTEFDSztcblxuICAgIHRoaXMucHJldk1vdmVzID0gW107XG4gICAgdGhpcy5wcmV2U3RhdGVzID0gW107XG5cbiAgICAvLyBjYWNoZSBmb3IgcXVpY2sgbG9va3VwIGJ5IGJvYXJkIHBvc2l0aW9uXG4gICAgdGhpcy5wVHlwZXNMb2NhdGlvbnMgPSB0aGlzLmNyZWF0ZVBUeXBlc0xvY2F0aW9ucygpO1xuXG4gICAgLy8gd2Ugc2VwYXJhdGUgb3VyIGhhc2hlZCB2YWx1ZXMgaW50byBwaWVjZSBwb3NpdGlvbiBoYXNoZXNcbiAgICAvLyBhbmQgc3RhdGUgaGFzaGVzIGZvciBzaW1wbGVyIGludGVncmF0aW9uIHdpdGggb3VyIG1vdmUgbWFraW5nL3VubWFraW5nIHByb2Nlc3NcbiAgICAvLyB0aGV5IGFyZSB4b3InZCB0byByZXByZXNlbnQgdGhlIGNvbXBsZXRlIHBvc2l0aW9uXG4gICAgdGhpcy5wUG9zSGFzaCA9IHRoaXMuY3JlYXRlUGllY2VzUG9zSGFzaCgpO1xuICAgIHRoaXMuc3RhdGVIYXNoID0gdGhpcy5jcmVhdGVTdGF0ZUhhc2goKTtcblxuICAgIHRoaXMuc2V0VHVybih0dXJuLCB0aGlzLmdldE90aGVyQ29sb3IodHVybikpO1xuXG4gICAgdGhpcy5wb3NpdGlvbkNvdW50cyA9IHt9O1xuICAgIHRoaXMuYWRkUG9zaXRpb25Db3VudCgpO1xuICB9XG5cbiAgZmVuUG9zaXRpb25zVG9QaWVjZUJCcyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCByb3dTdHJzID0gcG9zaXRpb25zLnNwbGl0KCcvJyk7XG5cbiAgICBjb25zdCBwaWVjZUJCcyA9IHRoaXMuY3JlYXRlRW1wdHlQaWVjZXNCQnMoKTtcblxuICAgIGxldCBwb3MgPSAwO1xuICAgIHJvd1N0cnMuZm9yRWFjaCgocm93U3RyKSA9PiB7XG4gICAgICByb3dTdHIuc3BsaXQoJycpLmZvckVhY2goKGNoYXIpID0+IHtcbiAgICAgICAgaWYgKC9bMC05XS8udGVzdChjaGFyKSkge1xuICAgICAgICAgIHBvcyArPSBwYXJzZUludChjaGFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaWVjZUJCc1tQaWVjZUNvbnYubGV0dGVyVG9UeXBlKGNoYXIpXS5zZXRCaXQocG9zKTtcbiAgICAgICAgICBwaWVjZUJCc1tQaWVjZUNvbnYubGV0dGVyVG9Db2xvcihjaGFyKV0uc2V0Qml0KHBvcyk7XG4gICAgICAgICAgcG9zKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBpZWNlQkJzO1xuICB9XG5cbiAgY3JlYXRlRW1wdHlQaWVjZXNCQnMoKSB7XG4gICAgY29uc3QgcGllY2VzID0gW107XG5cbiAgICBlYWNoUGllY2VUeXBlKCh0eXBlKSA9PiB7XG4gICAgICBwaWVjZXNbdHlwZV0gPSBuZXcgQml0Qm9hcmQoKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC52YWx1ZXMoQ29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT4ge1xuICAgICAgcGllY2VzW2NvbG9yXSA9IG5ldyBCaXRCb2FyZCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBpZWNlcztcbiAgfVxuXG4gIHBhcnNlQ2FzdGxlUmlnaHRzU3RyKGNhc3RsZVJpZ2h0c1N0cikge1xuICAgIGNvbnN0IHJpZ2h0c1BvcyA9IFsncScsICdrJywgJ1EnLCAnSyddO1xuXG4gICAgcmV0dXJuIHJpZ2h0c1Bvcy5yZWR1Y2UoKHJlcywgcmlnaHRzTGV0dGVyLCBwb3MpID0+IHtcbiAgICAgIGlmIChjYXN0bGVSaWdodHNTdHIuaW5jbHVkZXMocmlnaHRzTGV0dGVyKSkge1xuICAgICAgICByZXR1cm4gKHJlcyBeICgxIDw8IHBvcykpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgcGFyc2VFcFN0cihlcFN0cikge1xuICAgIGlmICgvXFxkKy8udGVzdChlcFN0cikpIHtcbiAgICAgIHJldHVybiBCaXRCb2FyZC5mcm9tUG9zKHBhcnNlSW50KGVwU3RyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQml0Qm9hcmQoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVQVHlwZXNMb2NhdGlvbnMoKSB7XG4gICAgbGV0IHBvcztcbiAgICBjb25zdCByZXMgPSBbXTtcblxuICAgIGZvciAocG9zID0gMDsgcG9zIDwgNjQ7IHBvcysrKSB7XG4gICAgICByZXNbcG9zXSA9IHRoaXMuZ2V0UGllY2VBdChwb3MpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBnZXRQaWVjZUF0KHBvcykge1xuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LnZhbHVlcyhQVHlwZXMpO1xuXG4gICAgbGV0IGlkeDtcbiAgICBsZXQgdHlwZTtcblxuICAgIGZvciAoaWR4ID0gMDsgaWR4IDwgdHlwZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgdHlwZSA9IHR5cGVzW2lkeF07XG4gICAgICBpZiAodGhpcy5waWVjZXNbdHlwZV0uaGFzU2V0Qml0KHBvcykpIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjcmVhdGVQaWVjZXNQb3NIYXNoKCkge1xuICAgIGxldCB2YWwgPSAwO1xuXG4gICAgbGV0IHBUeXBlO1xuICAgIGNvbnN0IHdoaXRlc1BvcyA9IHRoaXMucGllY2VzW0NvbG9ycy5XSElURV07XG4gICAgd2hpdGVzUG9zLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgIHBUeXBlID0gdGhpcy5wVHlwZXNMb2NhdGlvbnNbcG9zXTtcbiAgICAgIHZhbCBePSBwaWVjZVBvc0hhc2hLZXlzW3Bvc11bcFR5cGVdW0NvbG9ycy5XSElURV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBibGFja3NQb3MgPSB0aGlzLnBpZWNlc1tDb2xvcnMuQkxBQ0tdO1xuICAgIGJsYWNrc1Bvcy5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICBwVHlwZSA9IHRoaXMucFR5cGVzTG9jYXRpb25zW3Bvc107XG4gICAgICB2YWwgXj0gcGllY2VQb3NIYXNoS2V5c1twb3NdW3BUeXBlXVtDb2xvcnMuQkxBQ0tdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGNyZWF0ZVN0YXRlSGFzaCgpIHtcbiAgICBsZXQgdmFsID0gMDtcbiAgICB0aGlzLmVwQkIuZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgdmFsIF49IGVwUG9zSGFzaEtleXNbcG9zXTtcbiAgICB9KTtcblxuICAgIGxldCBjYXN0bGVSaWdodHNQb3M7XG4gICAgZm9yIChjYXN0bGVSaWdodHNQb3MgPSAwOyBjYXN0bGVSaWdodHNQb3MgPCA0OyBjYXN0bGVSaWdodHNQb3MrKykge1xuICAgICAgaWYgKCh0aGlzLmNhc3RsZVJpZ2h0cyAmICgxIDw8IGNhc3RsZVJpZ2h0c1BvcykpID4+PiAwKSB7XG4gICAgICAgIHZhbCBePSBjYXN0bGVIYXNoS2V5c1tjYXN0bGVSaWdodHNQb3NdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBnZXRIYXNoKCkge1xuICAgIHJldHVybiB0aGlzLnBQb3NIYXNoIF4gdGhpcy5zdGF0ZUhhc2ggXiB0dXJuSGFzaEtleXNbdGhpcy50dXJuXTtcbiAgfVxuXG4gIHNldFR1cm4odHVybiwgb3BwKSB7XG4gICAgdGhpcy50dXJuID0gdHVybjtcbiAgICB0aGlzLm9wcCA9IG9wcDtcbiAgfVxuXG4gIHN3YXBUdXJuKCkge1xuICAgIHRoaXMuc2V0VHVybih0aGlzLm9wcCwgdGhpcy50dXJuKTtcbiAgfVxuXG4gIGdldE90aGVyQ29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gY29sb3IgXiBDb2xvcnMuQkxBQ0s7XG4gIH1cblxuICAvLyBnZW5lcmF0ZXMgYWxsIHBzZXVkbyBsZWdhbCBtb3ZlcywgaWUgbW92ZXMgdGhhdCBtYXkgcHV0IHRoZSBraW5nXG4gIC8vIGluIGNoZWNrIGJ1dCBhcmUgb3RoZXJ3aXNlIGxlZ2FsXG4gIGdlbmVyYXRlUHNldWRvTW92ZXMoaW5jbHVkZVF1aWV0ID0gdHJ1ZSwgY2hlY2tOU0RyYXcgPSB0cnVlKSB7XG4gICAgY29uc3QgbW92ZXMgPSBbXTtcbiAgICBpZiAoY2hlY2tOU0RyYXcgJiYgdGhpcy5pc05vblN0YWxlbWF0ZURyYXcoKSkgeyByZXR1cm4gbW92ZXM7IH1cbiAgICB0aGlzLmFkZFBhd25Nb3Zlcyhtb3ZlcywgaW5jbHVkZVF1aWV0KTtcbiAgICB0aGlzLmFkZE5vcm1hbE1vdmVzKG1vdmVzLCBpbmNsdWRlUXVpZXQpO1xuICAgIHRoaXMuYWRkS2luZ01vdmVzKG1vdmVzLCBpbmNsdWRlUXVpZXQpO1xuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGVzIG1vdmVzIHdpdGggYSBmaWx0ZXIgZm9yIHdoZXRoZXIgdGhlIG1vdmUgcHV0cyB0aGUga2luZyBpbiBjaGVjayxcbiAgLy8gdXNlZCBmb3IgdGhlIFVJIGJ1dCBub3QgdGhlIEFJIG1vdmUgc2VhcmNoXG4gIGdlbmVyYXRlTGVnYWxNb3ZlcygpIHtcbiAgICBjb25zdCBwc2V1ZG9Nb3ZlcyA9IHRoaXMuZ2VuZXJhdGVQc2V1ZG9Nb3ZlcygpO1xuICAgIGxldCBtb3ZlRGF0YTtcbiAgICBsZXQgaXNMZWdhbDtcblxuICAgIGNvbnN0IGxlZ2FscyA9IFtdO1xuICAgIHJldHVybiBwc2V1ZG9Nb3Zlcy5maWx0ZXIoKHBzZXVkb01vdmUpID0+IHtcbiAgICAgIG1vdmVEYXRhID0gcHNldWRvTW92ZS5nZXREYXRhKCk7XG5cbiAgICAgIHRoaXMudGVzdE1vdmUobW92ZURhdGEsICh0ZXN0c0xlZ2FsKSA9PiB7XG4gICAgICAgIGlzTGVnYWwgPSB0ZXN0c0xlZ2FsO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaXNMZWdhbDtcbiAgICB9KTtcbiAgfVxuXG4gIGlzTm9uU3RhbGVtYXRlRHJhdygpIHtcbiAgICByZXR1cm4gdGhpcy5pc01vdmVMaW1pdEV4Y2VlZGVkKCkgfHwgdGhpcy5pc1RocmVlZm9sZFJlcGV0aXRpb24oKTtcbiAgfVxuXG4gIGlzVGhyZWVmb2xkUmVwZXRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkNvdW50c1t0aGlzLmdldEhhc2goKV0gPT09IDM7XG4gIH1cblxuICBpc01vdmVMaW1pdEV4Y2VlZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmhhbGZNb3ZlQ2xvY2sgPj0gNTA7XG4gIH1cblxuICBhZGRQYXduTW92ZXMobW92ZXMsIGluY2x1ZGVRdWlldCkge1xuICAgIGNvbnN0IHBhd25zUG9zID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KHRoaXMudHVybiwgUFR5cGVzLlBBV05TKTtcblxuICAgIGlmIChpbmNsdWRlUXVpZXQpIHtcbiAgICAgIGNvbnN0IG5vdE9jY3VwaWVkID0gdGhpcy5nZXRPY2N1cGllZCgpLm5vdCgpO1xuXG4gICAgICBjb25zdCBwYXduU2luZ2xlUHVzaGVzID0gUFV0aWxzW1BUeXBlcy5QQVdOU10uc2luZ2xlUHVzaCh0aGlzLnR1cm4sIHBhd25zUG9zLCBub3RPY2N1cGllZCk7XG4gICAgICB0aGlzLmFkZFBhd25Nb3ZlU2V0KHBhd25TaW5nbGVQdXNoZXMsIDggKiBQVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0sIG1vdmVzKTtcblxuICAgICAgY29uc3QgcGF3bkRvdWJsZVB1c2hlcyA9IFBVdGlsc1tQVHlwZXMuUEFXTlNdLmRvdWJsZVB1c2godGhpcy50dXJuLCBwYXduc1Bvcywgbm90T2NjdXBpZWQpO1xuICAgICAgdGhpcy5hZGRQYXduTW92ZVNldChwYXduRG91YmxlUHVzaGVzLCAxNiAqIFBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSwgbW92ZXMsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgb3BwUG9zaXRpb25zID0gdGhpcy5waWVjZXNbdGhpcy5vcHBdLm9yKHRoaXMuZXBCQik7XG5cbiAgICBjb25zdCBwYXduTGVmdEF0dGFja3MgPSBQVXRpbHNbUFR5cGVzLlBBV05TXS5hdHRhY2tzTGVmdCh0aGlzLnR1cm4sIHBhd25zUG9zLCBvcHBQb3NpdGlvbnMpO1xuICAgIHRoaXMuYWRkUGF3bk1vdmVTZXQocGF3bkxlZnRBdHRhY2tzLCA3ICogUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dLCBtb3ZlcywgdHJ1ZSk7XG5cbiAgICBjb25zdCBwYXduUmlnaHRBdHRhY2tzID0gUFV0aWxzW1BUeXBlcy5QQVdOU10uYXR0YWNrc1JpZ2h0KHRoaXMudHVybiwgcGF3bnNQb3MsIG9wcFBvc2l0aW9ucyk7XG4gICAgdGhpcy5hZGRQYXduTW92ZVNldChwYXduUmlnaHRBdHRhY2tzLCA5ICogUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dLCBtb3ZlcywgdHJ1ZSk7XG4gIH1cblxuICBhZGROb3JtYWxNb3Zlcyhtb3ZlcywgaW5jbHVkZVF1aWV0KSB7XG4gICAgY29uc3Qgb2NjdXBpZWQgPSB0aGlzLmdldE9jY3VwaWVkKCk7XG4gICAgY29uc3Qgbm90T3duUGllY2VzID0gdGhpcy5nZXROb3RPY2N1cGllZEJ5KHRoaXMudHVybik7XG5cbiAgICBjb25zdCBrbmlnaHRzUG9zID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KHRoaXMudHVybiwgUFR5cGVzLktOSUdIVFMpO1xuICAgIGxldCBrbmlnaHRNb3ZlcztcbiAgICBrbmlnaHRzUG9zLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgIGtuaWdodE1vdmVzID0gUFV0aWxzW1BUeXBlcy5LTklHSFRTXS5tb3Zlcyhwb3MsIG5vdE93blBpZWNlcyk7XG4gICAgICB0aGlzLmFkZE5vcm1hbE1vdmVTZXQoa25pZ2h0TW92ZXMsIHBvcywgUFR5cGVzLktOSUdIVFMsIG1vdmVzLCBpbmNsdWRlUXVpZXQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHBvc2l0aW9ucztcbiAgICBsZXQgZGVzdGluYXRpb25zO1xuICAgIFtQVHlwZXMuQklTSE9QUywgUFR5cGVzLlJPT0tTLCBQVHlwZXMuUVVFRU5TXS5mb3JFYWNoKChzbGlkaW5nVHlwZSkgPT4ge1xuICAgICAgcG9zaXRpb25zID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KHRoaXMudHVybiwgc2xpZGluZ1R5cGUpO1xuICAgICAgcG9zaXRpb25zLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgICAgZGVzdGluYXRpb25zID0gUFV0aWxzW3NsaWRpbmdUeXBlXS5tb3Zlcyhwb3MsIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpO1xuICAgICAgICB0aGlzLmFkZE5vcm1hbE1vdmVTZXQoZGVzdGluYXRpb25zLCBwb3MsIHNsaWRpbmdUeXBlLCBtb3ZlcywgaW5jbHVkZVF1aWV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkS2luZ01vdmVzKG1vdmVzLCBpbmNsdWRlUXVpZXQpIHtcbiAgICAgIGNvbnN0IG5vdE93blBpZWNlcyA9IHRoaXMuZ2V0Tm90T2NjdXBpZWRCeSh0aGlzLnR1cm4pO1xuICAgICAgY29uc3Qga2luZ1BvcyA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldCh0aGlzLnR1cm4sIFBUeXBlcy5LSU5HUykuYml0U2NhbkZvcndhcmQoKTtcblxuICAgICAgY29uc3Qgbm9ybWFsTW92ZXMgPSBQVXRpbHNbUFR5cGVzLktJTkdTXS5tb3ZlcyhraW5nUG9zLCBub3RPd25QaWVjZXMpO1xuICAgICAgdGhpcy5hZGROb3JtYWxNb3ZlU2V0KG5vcm1hbE1vdmVzLCBraW5nUG9zLCBQVHlwZXMuS0lOR1MsIG1vdmVzLCBpbmNsdWRlUXVpZXQpO1xuXG4gICAgICBpZiAoaW5jbHVkZVF1aWV0KSB7XG4gICAgICAgIHRoaXMuYWRkQ2FzdGxlTW92ZXMobW92ZXMpO1xuICAgICAgfVxuICB9XG5cbiAgLy8gbm90ZTogdW5saWtlIG90aGVyIHBpZWNlcywgd2UgbWFwIHBhd24gbW92ZW1lbnRzIGZyb20gdGhlIHNldCBvZiBhbGwgZXhpc3RpbmcgcGF3bnNcbiAgLy8gcmF0aGVyIHRoYW4gZWFjaCBwYXduIGluZGl2aWR1YWxseSwgc28gdGhlIGZ1bmN0aW9uIHRha2VzIGEgc2hpZnQgYW1vdW50IHRvIGRldGVybWluZVxuICAvLyB0aGUgbG9jYXRpb24gb2YgdGhlIGluZGl2aWR1YWwgcGF3biB0aGF0IG1vdmVkIHRvIGEgbmV3IHBvc2l0aW9uXG4gIGFkZFBhd25Nb3ZlU2V0KG5ld1Bvc2l0aW9ucywgc2hpZnRBbXQsIG1vdmVzLCBpc0NhcHR1cmUsIGlzRGJsUHVzaCkge1xuICAgIGxldCBmcm9tO1xuICAgIGxldCBjYXB0dXJlZCA9IG51bGw7XG5cbiAgICBuZXdQb3NpdGlvbnMucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgZnJvbSA9IHBvcyAtIHNoaWZ0QW10O1xuICAgICAgaWYgKGlzRGJsUHVzaCkge1xuICAgICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKGZyb20sIHBvcywgTW92ZVR5cGVzLkRCTF9QUFVTSCwgUFR5cGVzLlBBV05TKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQ2FwdHVyZSAmJiB0aGlzLmVwQkIuaGFzU2V0Qml0KHBvcykpIHtcbiAgICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShmcm9tLCBwb3MsIE1vdmVUeXBlcy5FUF9DQVBULCBQVHlwZXMuUEFXTlMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0NhcHR1cmUpIHsgY2FwdHVyZWQgPSB0aGlzLnBUeXBlc0xvY2F0aW9uc1twb3NdOyB9XG5cbiAgICAgICAgaWYgKFBVdGlsc1tQVHlwZXMuUEFXTlNdLlBST01PX01BU0tTW3RoaXMudHVybl0uaGFzU2V0Qml0KHBvcykpIHtcbiAgICAgICAgICB0aGlzLmFkZFByb21vcyhmcm9tLCBwb3MsIG1vdmVzLCBjYXB0dXJlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShmcm9tLCBwb3MsIE1vdmVUeXBlcy5OT1JNQUwsIFBUeXBlcy5QQVdOUywgY2FwdHVyZWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkUHJvbW9zKGZyb20sIHRvLCBtb3ZlcywgY2FwdHVyZWQpIHtcbiAgICBbTW92ZVR5cGVzLk5QUk9NTywgTW92ZVR5cGVzLkJQUk9NTyxcbiAgICAgTW92ZVR5cGVzLlJQUk9NTywgTW92ZVR5cGVzLlFQUk9NT10uZm9yRWFjaCgocHJvbW9UeXBlKSA9PiB7XG4gICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShmcm9tLCB0bywgcHJvbW9UeXBlLCBQVHlwZXMuUEFXTlMsIGNhcHR1cmVkKSk7XG4gICAgIH0pO1xuICB9XG5cbiAgYWRkTm9ybWFsTW92ZVNldChuZXdQb3NpdGlvbnMsIHN0YXJ0UG9zLCBwaWVjZVR5cGUsIG1vdmVzLCBpbmNsdWRlUXVpZXQpIHtcbiAgICBsZXQgbmV3UG9zO1xuICAgIGxldCBuZXdNb3ZlO1xuICAgIGxldCBjYXB0VHlwZTtcblxuICAgIG5ld1Bvc2l0aW9ucy5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICBjYXB0VHlwZSA9IHRoaXMucGllY2VzW3RoaXMub3BwXS5oYXNTZXRCaXQocG9zKSA/IHRoaXMucFR5cGVzTG9jYXRpb25zW3Bvc10gOiBudWxsO1xuICAgICAgaWYgKGluY2x1ZGVRdWlldCB8fCBjYXB0VHlwZSkge1xuICAgICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKHN0YXJ0UG9zLCBwb3MsIE1vdmVUeXBlcy5OT1JNQUwsIHBpZWNlVHlwZSwgY2FwdFR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZENhc3RsZU1vdmVzKG1vdmVzKSB7XG4gICAgY29uc3QgdHVybkNhc3RsZVJpZ2h0cyA9IHRoaXMuZ2V0Q2FzdGxlUmlnaHRzKHRoaXMudHVybik7XG4gICAgY29uc3Qgc3RhcnRQb3MgPSBQVXRpbHNbUFR5cGVzLktJTkdTXS5JTklUX1BPU1t0aGlzLnR1cm5dO1xuICAgIGNvbnN0IG5vdE9jY3VwaWVkID0gdGhpcy5nZXRPY2N1cGllZCgpLm5vdCgpO1xuXG4gICAgaWYgKCh0dXJuQ2FzdGxlUmlnaHRzICYgMGIxKSAmJiBQVXRpbHNbUFR5cGVzLktJTkdTXS5jYW5DYXN0bGUodGhpcy50dXJuLCBEaXJzLldFU1QsIG5vdE9jY3VwaWVkKSkge1xuICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShzdGFydFBvcywgc3RhcnRQb3MgLSAyLCBNb3ZlVHlwZXMuQ1NUTF9RVUVFTiwgUFR5cGVzLktJTkdTKSk7XG4gICAgfVxuXG4gICAgaWYgKCh0dXJuQ2FzdGxlUmlnaHRzICYgMGIxMCkgJiYgUFV0aWxzW1BUeXBlcy5LSU5HU10uY2FuQ2FzdGxlKHRoaXMudHVybiwgRGlycy5FQVNULCBub3RPY2N1cGllZCkpIHtcbiAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoc3RhcnRQb3MsIHN0YXJ0UG9zICsgMiwgTW92ZVR5cGVzLkNTVExfS0lORywgUFR5cGVzLktJTkdTKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmV0dXJucyAyYml0IHZhbHVlIGZvciB0aGUgY29sb3IncyBjYXN0bGluZyByaWdodHNcbiAgLy8gbGVmdCBiaXQgPT4ga2luZy1zaWRlIHJpZ2h0c1xuICAvLyByaWdodCBiaXQgPT4gcXVlZW4tc2lkZSByaWdodHNcbiAgZ2V0Q2FzdGxlUmlnaHRzKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yID09PSBDb2xvcnMuV0hJVEUgPyB0aGlzLmNhc3RsZVJpZ2h0cyAmIDBiMTEgOiB0aGlzLmNhc3RsZVJpZ2h0cyA+Pj4gMjtcbiAgfVxuXG4gIGdldENvbG9yUGllY2VTZXQoY29sb3IsIHBpZWNlVHlwZSkge1xuICAgIHJldHVybiB0aGlzLnBpZWNlc1tjb2xvcl0uYW5kKHRoaXMucGllY2VzW3BpZWNlVHlwZV0pO1xuICB9XG5cbiAgZ2V0T2NjdXBpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGllY2VzW0NvbG9ycy5XSElURV0ub3IodGhpcy5waWVjZXNbQ29sb3JzLkJMQUNLXSk7XG4gIH1cblxuICBnZXROb3RPY2N1cGllZEJ5KGNvbG9yKSB7XG4gICAgcmV0dXJuIHRoaXMucGllY2VzW2NvbG9yXS5ub3QoKTtcbiAgfVxuXG4gIG1ha2VNb3ZlKG1vdmUpIHtcbiAgICBjb25zdCBtb3ZlRGF0YSA9IG1vdmUuZ2V0RGF0YSgpO1xuXG4gICAgbGV0IGlzTGVnYWw7XG4gICAgdGhpcy50ZXN0TW92ZShtb3ZlRGF0YSwgKHRlc3RzTGVnYWwpID0+IHtcbiAgICAgIGlzTGVnYWwgPSB0ZXN0c0xlZ2FsO1xuICAgICAgcmV0dXJuICFpc0xlZ2FsO1xuICAgIH0pO1xuXG4gICAgaWYgKCFpc0xlZ2FsKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHRoaXMuc2V0TmV3U3RhdGUobW92ZURhdGEpO1xuICAgIHRoaXMuZXhlY01vdmVUeXBlKG1vdmVEYXRhLmZyb20sIG1vdmVEYXRhLnRvLCBtb3ZlRGF0YS50eXBlKTtcblxuICAgIHRoaXMucHJldk1vdmVzLnB1c2gobW92ZSk7XG4gICAgdGhpcy5zd2FwVHVybigpO1xuICAgIHRoaXMuYWRkUG9zaXRpb25Db3VudCgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0ZXN0TW92ZShtb3ZlRGF0YSwgY2IpIHtcbiAgICBpZiAobW92ZURhdGEuY2FwdFBpZWNlVHlwZSkge1xuICAgICAgdGhpcy5jbGVhclBpZWNlQXQobW92ZURhdGEudG8sIHRoaXMub3BwLCBtb3ZlRGF0YS5jYXB0UGllY2VUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAobW92ZURhdGEuaXNQcm9tbykge1xuICAgICAgdGhpcy5jbGVhclBpZWNlQXQobW92ZURhdGEuZnJvbSwgdGhpcy50dXJuLCBQVHlwZXMuUEFXTlMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVQaWVjZShtb3ZlRGF0YS5mcm9tLCBtb3ZlRGF0YS50bywgdGhpcy50dXJuLCBtb3ZlRGF0YS5waWVjZVR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuZG8gPSBjYih0aGlzLnRlc3RzTGVnYWwobW92ZURhdGEpKTtcbiAgICBpZiAoIXVuZG8pIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAobW92ZURhdGEuaXNQcm9tbykge1xuICAgICAgdGhpcy5zZXRQaWVjZUF0KG1vdmVEYXRhLmZyb20sIHRoaXMudHVybiwgUFR5cGVzLlBBV05TKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlUGllY2UobW92ZURhdGEudG8sIG1vdmVEYXRhLmZyb20sIHRoaXMudHVybiwgbW92ZURhdGEucGllY2VUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAobW92ZURhdGEuY2FwdFBpZWNlVHlwZSkge1xuICAgICAgdGhpcy5zZXRQaWVjZUF0KG1vdmVEYXRhLnRvLCB0aGlzLm9wcCwgbW92ZURhdGEuY2FwdFBpZWNlVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdGVzdHNMZWdhbChtb3ZlRGF0YSkge1xuICAgIGlmIChtb3ZlRGF0YS5pc0Nhc3RsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNMZWdhbENhc3RsZShtb3ZlRGF0YS5mcm9tLCBtb3ZlRGF0YS50eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF0aGlzLmluQ2hlY2sodGhpcy50dXJuKTtcbiAgICB9XG4gIH1cblxuICAvLyB0byBtYWtlIHN1cmUgd2UgYXJlbid0IHNsaWRpbmcgdGhyb3VnaCBjaGVja1xuICBpc0xlZ2FsQ2FzdGxlKHBvcywgY2FzdGxlVHlwZSkge1xuICAgIGNvbnN0IGRpciA9IGNhc3RsZVR5cGUgPT09IE1vdmVUeXBlcy5DU1RMX0tJTkcgPyAxIDogLTE7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIHdoaWxlIChjb3VudCA8PSAyKSB7XG4gICAgICBpZiAodGhpcy5pc0F0dGFja2VkKHBvcywgdGhpcy50dXJuKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGNvdW50Kys7XG4gICAgICBwb3MgKz0gZGlyO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5DaGVjayhjb2xvcikge1xuICAgIGNvbnN0IGtpbmdQb3MgPSB0aGlzLmdldENvbG9yUGllY2VTZXQoY29sb3IsIFBUeXBlcy5LSU5HUykuYml0U2NhbkZvcndhcmQoKTtcbiAgICByZXR1cm4gdGhpcy5pc0F0dGFja2VkKGtpbmdQb3MsIGNvbG9yKTtcbiAgfVxuXG4gIGlzQXR0YWNrZWQocG9zLCBjb2xvcikge1xuICAgIGNvbnN0IHBvc0JCID0gQml0Qm9hcmQuZnJvbVBvcyhwb3MpO1xuICAgIGNvbnN0IG9jY3VwaWVkID0gdGhpcy5nZXRPY2N1cGllZCgpO1xuICAgIGNvbnN0IG9wcENvbG9yID0gdGhpcy5nZXRPdGhlckNvbG9yKGNvbG9yKTtcbiAgICBjb25zdCBwYXducyA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldChvcHBDb2xvciwgUFR5cGVzLlBBV05TKTtcblxuICAgIGNvbnN0IHF1ZWVuQkIgPSB0aGlzLmdldENvbG9yUGllY2VTZXQob3BwQ29sb3IsIFBUeXBlcy5RVUVFTlMpO1xuICAgIHJldHVybiAoIVBVdGlsc1tQVHlwZXMuUEFXTlNdLmF0dGFja3NMZWZ0KG9wcENvbG9yLCBwYXducywgcG9zQkIpLmlzWmVybygpIHx8XG4gICAgICAgICAgICAhUFV0aWxzW1BUeXBlcy5QQVdOU10uYXR0YWNrc1JpZ2h0KG9wcENvbG9yLCBwYXducywgcG9zQkIpLmlzWmVybygpIHx8XG4gICAgICAgICAgICAhUFV0aWxzW1BUeXBlcy5LTklHSFRTXS5tb3Zlcyhwb3MsIHRoaXMuZ2V0Q29sb3JQaWVjZVNldChvcHBDb2xvciwgUFR5cGVzLktOSUdIVFMpKS5pc1plcm8oKSB8fFxuICAgICAgICAgICAgIVBVdGlsc1tQVHlwZXMuQklTSE9QU10ubW92ZXMocG9zLCBvY2N1cGllZCwgdGhpcy5nZXRDb2xvclBpZWNlU2V0KG9wcENvbG9yLCBQVHlwZXMuQklTSE9QUykub3IocXVlZW5CQikpLmlzWmVybygpIHx8XG4gICAgICAgICAgICAhUFV0aWxzW1BUeXBlcy5ST09LU10ubW92ZXMocG9zLCBvY2N1cGllZCwgdGhpcy5nZXRDb2xvclBpZWNlU2V0KG9wcENvbG9yLCBQVHlwZXMuUk9PS1MpLm9yKHF1ZWVuQkIpKS5pc1plcm8oKSB8fFxuICAgICAgICAgICAgIVBVdGlsc1tQVHlwZXMuS0lOR1NdLm1vdmVzKHBvcywgdGhpcy5nZXRDb2xvclBpZWNlU2V0KG9wcENvbG9yLCBQVHlwZXMuS0lOR1MpKS5pc1plcm8oKSk7XG4gIH1cblxuICBzZXROZXdTdGF0ZShtb3ZlRGF0YSkge1xuICAgIHRoaXMuYWRkUHJldlN0YXRlKCk7XG5cbiAgICB0aGlzLmFkanVzdENhc3RsZVJpZ2h0cyhtb3ZlRGF0YSk7XG4gICAgdGhpcy5zZXROZXdFcFN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVDbG9jayhtb3ZlRGF0YSk7XG4gIH1cblxuICAvLyBhZGRzIHRoZSBjdXJyZW50IHN0YXRlIHZhbHVlcyB0byB0aGUgcHJldlN0YXRlcyBhcnJheVxuICAvLyB1c2VkIGZvciBtb3ZlIHVubWFraW5nIHB1cnBvc2VzXG4gIGFkZFByZXZTdGF0ZSgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHsgZXBCQjogdGhpcy5lcEJCLFxuICAgICAgICAgICAgICAgICAgICBjYXN0bGVSaWdodHM6IHRoaXMuY2FzdGxlUmlnaHRzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZUhhc2g6IHRoaXMuc3RhdGVIYXNoLFxuICAgICAgICAgICAgICAgICAgICBoYWxmTW92ZUNsb2NrOiB0aGlzLmhhbGZNb3ZlQ2xvY2ssXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxNb3ZlQ2xvY2s6IHRoaXMuZnVsbE1vdmVDbG9ja1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICB0aGlzLnByZXZTdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICBhZGp1c3RDYXN0bGVSaWdodHMobW92ZURhdGEpIHtcbiAgICBjb25zdCB0dXJuQ2FzdGxlUmlnaHRzID0gdGhpcy5nZXRDYXN0bGVSaWdodHModGhpcy50dXJuKTtcbiAgICBsZXQgZGlyO1xuICAgIGlmIChtb3ZlRGF0YS5waWVjZVR5cGUgPT09IFBUeXBlcy5LSU5HUyAmJiB0dXJuQ2FzdGxlUmlnaHRzKSB7XG4gICAgICB0aGlzLmNsZWFyQ2FzdGxlUmlnaHRzKHRoaXMudHVybiwgRGlycy5FQVNUKTtcbiAgICAgIHRoaXMuY2xlYXJDYXN0bGVSaWdodHModGhpcy50dXJuLCBEaXJzLldFU1QpO1xuICAgIH0gZWxzZSBpZiAobW92ZURhdGEucGllY2VUeXBlID09PSBQVHlwZXMuUk9PS1MgJiYgdHVybkNhc3RsZVJpZ2h0cykge1xuICAgICAgZGlyID0gbW92ZURhdGEuZnJvbSA+IFBVdGlsc1tQVHlwZXMuS0lOR1NdLklOSVRfUE9TW3RoaXMudHVybl0gPyBEaXJzLkVBU1QgOiBEaXJzLldFU1Q7XG4gICAgICB0aGlzLmNsZWFyQ2FzdGxlUmlnaHRzKHRoaXMudHVybiwgZGlyKTtcbiAgICB9XG5cbiAgICBpZiAobW92ZURhdGEuY2FwdFBpZWNlVHlwZSA9PT0gUFR5cGVzLlJPT0tTICYmIHRoaXMuZ2V0Q2FzdGxlUmlnaHRzKHRoaXMub3BwKSkge1xuICAgICAgZGlyID0gbW92ZURhdGEudG8gPiBQVXRpbHNbUFR5cGVzLktJTkdTXS5JTklUX1BPU1t0aGlzLm9wcF0gPyBEaXJzLkVBU1QgOiBEaXJzLldFU1Q7XG4gICAgICB0aGlzLmNsZWFyQ2FzdGxlUmlnaHRzKHRoaXMub3BwLCBkaXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQ2FzdGxlUmlnaHRzKGNvbG9yLCBkaXIpIHtcbiAgICBsZXQgY2xlYXJSaWdodHNQb3MgPSAwO1xuICAgIGlmIChjb2xvciA9PT0gQ29sb3JzLkJMQUNLKSB7IGNsZWFyUmlnaHRzUG9zICs9IDI7IH1cbiAgICBpZiAoZGlyID09PSBEaXJzLkVBU1QpIHsgY2xlYXJSaWdodHNQb3MgKz0gMTsgfVxuXG4gICAgbGV0IGNsZWFyUmlnaHRzTWFzayA9IDEgPDwgY2xlYXJSaWdodHNQb3M7XG4gICAgaWYgKGNsZWFyUmlnaHRzTWFzayAmIHRoaXMuY2FzdGxlUmlnaHRzKSB7XG4gICAgICB0aGlzLmNhc3RsZVJpZ2h0cyA9ICh0aGlzLmNhc3RsZVJpZ2h0cyAmICh+Y2xlYXJSaWdodHNNYXNrKSkgPj4+IDA7XG4gICAgICB0aGlzLnN0YXRlSGFzaCBePSBjYXN0bGVIYXNoS2V5c1tjbGVhclJpZ2h0c1Bvc107XG4gICAgfVxuICB9XG5cbiAgc2V0TmV3RXBTdGF0ZSgpIHtcbiAgICBjb25zdCBlcFBvcyA9IHRoaXMuZXBCQi5iaXRTY2FuRm9yd2FyZCgpO1xuICAgIGlmIChlcFBvcyAhPT0gbnVsbCkgeyB0aGlzLnN0YXRlSGFzaCBePSBlcFBvc0hhc2hLZXlzW2VwUG9zXTsgfVxuICAgIHRoaXMuZXBCQiA9IG5ldyBCaXRCb2FyZCgpO1xuICB9XG5cbiAgdXBkYXRlQ2xvY2sobW92ZURhdGEpIHtcbiAgICBpZiAodGhpcy50dXJuID09PSBDb2xvcnMuQkxBQ0spIHtcbiAgICAgIHRoaXMuZnVsbE1vdmVDbG9jaysrO1xuICAgIH1cblxuICAgIGlmIChtb3ZlRGF0YS5jYXB0UGllY2VUeXBlIHx8IG1vdmVEYXRhLnBpZWNlVHlwZSA9PT0gUFR5cGVzLlBBV05TKSB7XG4gICAgICB0aGlzLmhhbGZNb3ZlQ2xvY2sgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbGZNb3ZlQ2xvY2srKztcbiAgICB9XG4gIH1cblxuICBleGVjTW92ZVR5cGUoZnJvbSwgdG8sIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuTk9STUFMOlxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIE1vdmVUeXBlcy5EQkxfUFBVU0g6XG4gICAgICAgIGxldCBlcFBvcyA9IHRvICsgKC1QVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0gKiA4KTtcbiAgICAgICAgdGhpcy5lcEJCID0gQml0Qm9hcmQuZnJvbVBvcyhlcFBvcyk7XG4gICAgICAgIHRoaXMuc3RhdGVIYXNoIF49IGVwUG9zSGFzaEtleXNbZXBQb3NdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkNTVExfS0lORzpcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UoZnJvbSArIDMsIGZyb20gKyAxLCB0aGlzLnR1cm4sIFBUeXBlcy5ST09LUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuQ1NUTF9RVUVFTjpcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UoZnJvbSAtIDQsIGZyb20gLSAxLCB0aGlzLnR1cm4sIFBUeXBlcy5ST09LUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuRVBfQ0FQVDpcbiAgICAgICAgbGV0IGNhcHR1cmVkUG9zID0gdG8gLSAoUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dICogOCk7XG4gICAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KGNhcHR1cmVkUG9zLCB0aGlzLm9wcCwgUFR5cGVzLlBBV05TKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5OUFJPTU86XG4gICAgICAgIHRoaXMuc2V0UGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuS05JR0hUUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuQlBST01POlxuICAgICAgICB0aGlzLnNldFBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLkJJU0hPUFMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLlJQUk9NTzpcbiAgICAgICAgdGhpcy5zZXRQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5ST09LUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuUVBST01POlxuICAgICAgICB0aGlzLnNldFBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLlFVRUVOUyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGFkZFBvc2l0aW9uQ291bnQoKSB7XG4gICAgY29uc3QgY3Vyckhhc2ggPSB0aGlzLmdldEhhc2goKTtcbiAgICBpZiAoIXRoaXMucG9zaXRpb25Db3VudHNbY3Vyckhhc2hdKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uQ291bnRzW2N1cnJIYXNoXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zaXRpb25Db3VudHNbY3Vyckhhc2hdICs9IDE7XG4gICAgfVxuICB9XG5cbiAgdW5tYWtlUHJldk1vdmUoKSB7XG4gICAgY29uc3QgcHJldk1vdmUgPSB0aGlzLnByZXZNb3Zlcy5wb3AoKTtcbiAgICBpZiAoIXByZXZNb3ZlKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgdGhpcy5zdWJ0cmFjdFBvc2l0aW9uQ291bnQoKTtcbiAgICB0aGlzLnN3YXBUdXJuKCk7XG5cbiAgICBjb25zdCBtb3ZlRGF0YSA9IHByZXZNb3ZlLmdldERhdGEoKTtcblxuICAgIHRoaXMucmV2ZXJzZU1vdmVUeXBlKG1vdmVEYXRhLmZyb20sIG1vdmVEYXRhLnRvLCBtb3ZlRGF0YS50eXBlKTtcbiAgICB0aGlzLnJlc3RvcmVQcmV2U3RhdGUoKTtcblxuICAgIGlmIChtb3ZlRGF0YS5pc1Byb21vKSB7XG4gICAgICB0aGlzLnNldFBpZWNlQXQobW92ZURhdGEuZnJvbSwgdGhpcy50dXJuLCBQVHlwZXMuUEFXTlMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVQaWVjZShtb3ZlRGF0YS50bywgbW92ZURhdGEuZnJvbSwgdGhpcy50dXJuLCBtb3ZlRGF0YS5waWVjZVR5cGUpO1xuICAgIH1cblxuXG4gICAgaWYgKG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0UGllY2VBdChtb3ZlRGF0YS50bywgdGhpcy5vcHAsIG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVzdG9yZVByZXZTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2U3RhdGUgPSB0aGlzLnByZXZTdGF0ZXMucG9wKCk7XG4gICAgdGhpcy5lcEJCID0gcHJldlN0YXRlLmVwQkI7XG4gICAgdGhpcy5jYXN0bGVSaWdodHMgPSBwcmV2U3RhdGUuY2FzdGxlUmlnaHRzO1xuICAgIHRoaXMuc3RhdGVIYXNoID0gcHJldlN0YXRlLnN0YXRlSGFzaDtcbiAgICB0aGlzLmhhbGZNb3ZlQ2xvY2sgPSBwcmV2U3RhdGUuaGFsZk1vdmVDbG9jaztcbiAgICB0aGlzLmZ1bGxNb3ZlQ2xvY2sgPSBwcmV2U3RhdGUuZnVsbE1vdmVDbG9jaztcbiAgfVxuXG4gIHN1YnRyYWN0UG9zaXRpb25Db3VudCgpIHtcbiAgICBjb25zdCBjdXJySGFzaCA9IHRoaXMuZ2V0SGFzaCgpO1xuICAgIHRoaXMucG9zaXRpb25Db3VudHNbY3Vyckhhc2hdIC09IDE7XG4gICAgaWYgKHRoaXMucG9zaXRpb25Db3VudHNbY3Vyckhhc2hdIDw9IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBvc2l0aW9uQ291bnRzW2N1cnJIYXNoXTtcbiAgICB9XG4gIH1cblxuICByZXZlcnNlTW92ZVR5cGUoZnJvbSwgdG8sIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuTk9STUFMOlxuICAgICAgY2FzZSBNb3ZlVHlwZXMuREJMX1BQVVNIOlxuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIE1vdmVUeXBlcy5DU1RMX0tJTkc6XG4gICAgICAgIHRoaXMubW92ZVBpZWNlKGZyb20gKyAxLCBmcm9tICsgMywgdGhpcy50dXJuLCBQVHlwZXMuUk9PS1MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkNTVExfUVVFRU46XG4gICAgICAgIHRoaXMubW92ZVBpZWNlKGZyb20gLSAxLCBmcm9tIC0gNCwgdGhpcy50dXJuLCBQVHlwZXMuUk9PS1MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkVQX0NBUFQ6XG4gICAgICAgIGxldCBjYXB0dXJlZFBvcyA9IHRvIC0gKFBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSAqIDgpO1xuICAgICAgICB0aGlzLnNldFBpZWNlQXQoY2FwdHVyZWRQb3MsIHRoaXMub3BwLCBQVHlwZXMuUEFXTlMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLk5QUk9NTzpcbiAgICAgICAgdGhpcy5jbGVhclBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLktOSUdIVFMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkJQUk9NTzpcbiAgICAgICAgdGhpcy5jbGVhclBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLkJJU0hPUFMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLlJQUk9NTzpcbiAgICAgICAgdGhpcy5jbGVhclBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLlJPT0tTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5RUFJPTU86XG4gICAgICAgIHRoaXMuY2xlYXJQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5RVUVFTlMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBtb3ZlUGllY2UoZnJvbSwgdG8sIGNvbG9yLCBwaWVjZVR5cGUpIHtcbiAgICB0aGlzLmNsZWFyUGllY2VBdChmcm9tLCBjb2xvciwgcGllY2VUeXBlKTtcbiAgICB0aGlzLnNldFBpZWNlQXQodG8sIGNvbG9yLCBwaWVjZVR5cGUpO1xuICB9XG5cbiAgc2V0UGllY2VBdChwb3MsIGNvbG9yLCBwaWVjZVR5cGUpIHtcbiAgICB0aGlzLnBpZWNlc1tjb2xvcl0uc2V0Qml0KHBvcyk7XG4gICAgdGhpcy5waWVjZXNbcGllY2VUeXBlXS5zZXRCaXQocG9zKTtcbiAgICB0aGlzLnBUeXBlc0xvY2F0aW9uc1twb3NdID0gcGllY2VUeXBlO1xuICAgIHRoaXMucFBvc0hhc2ggXj0gcGllY2VQb3NIYXNoS2V5c1twb3NdW3BpZWNlVHlwZV1bY29sb3JdO1xuICB9XG5cbiAgY2xlYXJQaWVjZUF0KHBvcywgY29sb3IsIHBpZWNlVHlwZSkge1xuICAgIHRoaXMucGllY2VzW2NvbG9yXS5jbGVhckJpdChwb3MpO1xuICAgIHRoaXMucGllY2VzW3BpZWNlVHlwZV0uY2xlYXJCaXQocG9zKTtcbiAgICB0aGlzLnBUeXBlc0xvY2F0aW9uc1twb3NdID0gbnVsbDtcbiAgICB0aGlzLnBQb3NIYXNoIF49IHBpZWNlUG9zSGFzaEtleXNbcG9zXVtwaWVjZVR5cGVdW2NvbG9yXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcG9zaXRpb24vaW5kZXguanMiLCJmdW5jdGlvbiBnZW5lcmF0ZU1TQlRhYmxlKG1heCkge1xuICBsZXQgcmVzID0gW107XG4gIGxldCBpbnQ7XG4gIGZvciAoaW50ID0gMTsgaW50IDw9IG1heDsgaW50KyspIHtcbiAgICByZXNbaW50XSA9IE1hdGguZmxvb3IoTWF0aC5sb2cyKGludCkpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuY29uc3QgbW9zdFNpZ0JpdFRhYmxlID0gZ2VuZXJhdGVNU0JUYWJsZSgyNTUpO1xuXG5mdW5jdGlvbiBwb3BDb3VudDMyKGludCkge1xuXHRpbnQgLT0gKGludCA+Pj4gMSkgJiAweDU1NTU1NTU1O1xuXHRpbnQgPSAoaW50ICYgMHgzMzMzMzMzMykgKyAoKGludCA+Pj4gMikgJiAweDMzMzMzMzMzKTtcblx0cmV0dXJuICgoaW50ICsgKGludCA+Pj4gNCkgJiAweEYwRjBGMEYpICogMHgxMDEwMTAxKSA+Pj4gMjQ7XG59XG5cbmZ1bmN0aW9uIGJpdFNjYW5Gb3J3YXJkMzIoaW50KSB7XG4gIHJldHVybiBwb3BDb3VudDMyKChpbnQgJiAtaW50KSAtIDEpO1xufVxuXG5mdW5jdGlvbiBiaXRTY2FuUmV2ZXJzZTMyKGludCkge1xuICBsZXQgcmVzID0gMDtcbiAgaWYgKGludCA+IDB4RkZGRikge1xuICAgIGludCA+Pj49IDE2O1xuICAgIHJlcyArPSAxNjtcbiAgfVxuXG4gIGlmIChpbnQgPiAweEZGKSB7XG4gICAgaW50ID4+Pj0gODtcbiAgICByZXMgKz0gODtcbiAgfVxuXG4gIHJldHVybiByZXMgKyBtb3N0U2lnQml0VGFibGVbaW50XTtcbn1cblxuZnVuY3Rpb24gY2xlYXJMZWFzdFNpZ0JpdDMyKGludCkge1xuICByZXR1cm4gKGludCAmIChpbnQgLSAxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwb3BDb3VudDMyLFxuICBiaXRTY2FuRm9yd2FyZDMyLFxuICBiaXRTY2FuUmV2ZXJzZTMyLFxuICBjbGVhckxlYXN0U2lnQml0MzJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iaXRib2FyZC9pbnQzMlV0aWxzLmpzIiwiY29uc3QgQml0Qm9hcmQgPSByZXF1aXJlKCcuL2JpdGJvYXJkLmpzJyk7XG5cbi8vIHRoaXMgZmlsZSBpbmNsdWRlcyBzdGF0aWMgc2V0cyBvZiBiaXRib2FyZHMgdGhhdFxuLy8gYXJlIGNvbW1vbmx5IHVzZWQgdGhyb3VnaG91dCB0aGUgcHJvZ3JhbVxuXG5jb25zdCBGVUxMX0JPQVJEID0gbmV3IEJpdEJvYXJkKCkubm90KCk7XG5cbmNvbnN0IENPTFMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGNvbElkeCA9IDA7XG4gIGxldCBjb2xzID0gW107XG4gIHdoaWxlIChjb2xJZHggPCA4KSB7XG4gICAgY29scy5wdXNoKEJpdEJvYXJkLmZyb21Db2woY29sSWR4KSk7XG4gICAgY29sSWR4Kys7XG4gIH1cblxuICByZXR1cm4gY29scztcbn0oKTtcblxuXG5jb25zdCBST1dTID0gZnVuY3Rpb24oKSB7XG4gIGxldCByb3dJZHggPSAwO1xuICBsZXQgcm93cyA9IFtdO1xuICB3aGlsZSAocm93SWR4IDwgOCkge1xuICAgIHJvd3MucHVzaChCaXRCb2FyZC5mcm9tUm93KHJvd0lkeCkpO1xuICAgIHJvd0lkeCsrO1xuICB9XG5cbiAgcmV0dXJuIHJvd3M7XG59KCk7XG5cblxuY29uc3QgRElBR1MgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGlhZ3MgPSBbXTtcbiAgbGV0IHBvcyA9IDU2O1xuXG4gIHdoaWxlIChwb3MgPj0gMCkge1xuICAgIGRpYWdzLnB1c2goQml0Qm9hcmQudXBwZXJSaWdodERpYWcocG9zKSk7XG4gICAgcG9zIC09IDg7XG4gIH1cblxuICBwb3MgPSAxO1xuXG4gIHdoaWxlIChwb3MgPCA4KSB7XG4gICAgZGlhZ3MucHVzaChCaXRCb2FyZC51cHBlclJpZ2h0RGlhZyhwb3MpKTtcbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiBkaWFncztcbn0oKTtcblxuXG5jb25zdCBBTlRJX0RJQUdTID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFudGlEaWFncyA9IFtdO1xuICBsZXQgcG9zID0gMDtcblxuICB3aGlsZSAocG9zIDwgOCkge1xuICAgIGFudGlEaWFncy5wdXNoKEJpdEJvYXJkLnVwcGVyTGVmdERpYWcocG9zKSk7XG4gICAgcG9zKys7XG4gIH1cblxuICBwb3MgPSAxNTtcbiAgd2hpbGUgKHBvcyA8IDY0KSB7XG4gICAgYW50aURpYWdzLnB1c2goQml0Qm9hcmQudXBwZXJMZWZ0RGlhZyhwb3MpKTtcbiAgICBwb3MgKz0gODtcbiAgfVxuXG4gIHJldHVybiBhbnRpRGlhZ3M7XG59KCk7XG5cbmNvbnN0IE5PUlRIX09GX1JPVyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgbGV0IGJiID0gRlVMTF9CT0FSRDtcbiAgbGV0IGlkeCA9IDA7XG5cbiAgd2hpbGUgKGlkeCA8PSA3KSB7XG4gICAgYmIgPSBiYi54b3IoUk9XU1tpZHhdKTtcbiAgICByZXMucHVzaChiYik7XG4gICAgaWR4Kys7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5jb25zdCBTT1VUSF9PRl9ST1cgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGxldCBiYiA9IG5ldyBCaXRCb2FyZCgpO1xuICBsZXQgaWR4ID0gMDtcblxuICB3aGlsZSAoaWR4IDw9IDcpIHtcbiAgICByZXMucHVzaChiYik7XG4gICAgYmIgPSBiYi5vcihST1dTW2lkeF0pO1xuICAgIGlkeCsrO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxuY29uc3QgRUFTVF9PRl9DT0wgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGxldCBiYiA9IEZVTExfQk9BUkQ7XG4gIGxldCBpZHggPSAwO1xuXG4gIHdoaWxlIChpZHggPD0gNykge1xuICAgIGJiID0gYmIueG9yKENPTFNbaWR4XSk7XG4gICAgcmVzLnB1c2goYmIpO1xuICAgIGlkeCsrO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxuY29uc3QgV0VTVF9PRl9DT0wgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGxldCBiYiA9IG5ldyBCaXRCb2FyZCgpO1xuICBsZXQgaWR4ID0gMDtcblxuICB3aGlsZSAoaWR4IDw9IDcpIHtcbiAgICByZXMucHVzaChiYik7XG4gICAgYmIgPSBiYi5vcihDT0xTW2lkeF0pO1xuICAgIGlkeCsrO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZVTExfQk9BUkQsXG4gIENPTFMsXG4gIFJPV1MsXG4gIERJQUdTLFxuICBBTlRJX0RJQUdTLFxuICBOT1JUSF9PRl9ST1csXG4gIFNPVVRIX09GX1JPVyxcbiAgRUFTVF9PRl9DT0wsXG4gIFdFU1RfT0ZfQ09MXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYml0Ym9hcmQvbWFza3MuanMiLCIvLyBodHRwczovL3d3dy5jaGVzc3Byb2dyYW1taW5nLm9yZy9FbmNvZGluZ19Nb3ZlcyNGcm9tLVRvX0Jhc2VkXG4vLyByZXF1aXJlKCcuLi9zdHJpbmdfY29udGFudHMuanMnKTtcblxuY29uc3QgdHlwZXNBcnIgPSBbJ05PUk1BTCcsICdEQkxfUFBVU0gnLFxuICAgICAgICAgICAgICAgICAgJ0NTVExfS0lORycsICdDU1RMX1FVRUVOJyxcbiAgICAgICAgICAgICAgICAgICdFUF9DQVBUJywgJ05QUk9NTycsXG4gICAgICAgICAgICAgICAgICAnQlBST01PJywnUlBST01PJywgJ1FQUk9NTyddO1xuXG5jb25zdCBUeXBlcyA9IHR5cGVzQXJyLnJlZHVjZSgocmVzLCB0eXBlLCBpZHgpID0+IHtcbiAgcmVzW3R5cGVdID0gaWR4O1xuICByZXR1cm4gcmVzO1xufSwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgVHlwZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vdmUvY29uc3RhbnRzLmpzIiwiY29uc3Qgc3RlcE1vdmUgPSByZXF1aXJlKCcuL21vdmVtZW50cy9zdGVwX21vdmUuanMnKTtcbmNvbnN0IHsgQkJNYXNrcyB9ID0gcmVxdWlyZSgnLi4vYml0Ym9hcmQnKTtcbmNvbnN0IHsgQ29sb3JzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5jb25zdCBESVJTID0ge1xuICBbQ29sb3JzLldISVRFXTogMSxcbiAgW0NvbG9ycy5CTEFDS106IC0xXG59O1xuXG5jb25zdCBJTklUX01BU0tTID0ge1xuICBbQ29sb3JzLldISVRFXTogQkJNYXNrcy5ST1dTWzFdLFxuICBbQ29sb3JzLkJMQUNLXTogQkJNYXNrcy5ST1dTWzZdXG59O1xuXG5jb25zdCBQYXducyA9IHtcbiAgdmFsdWU6IDEwMCxcbiAgcG9zaXRpb25WYWx1ZXM6IFtcblx0XHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHRcdDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCxcblx0XHQxMCwgMTAsIDIwLCAzMCwgMzAsIDIwLCAxMCwgMTAsXG5cdFx0NSwgNSwgMTAsIDI1LCAyNSwgMTAsIDUsIDUsXG5cdFx0MCwgMCwgMCwgMjAsIDIwLCAwLCAwLCAwLFxuXHRcdDUsIC01LCAtMTAsIDAsIDAsIC0xMCwgLTUsIDUsXG5cdFx0NSwgMTAsIDEwLCAtMjAsIC0yMCwgMTAsIDEwLCA1LFxuXHRcdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcblx0XSxcbiAgRElSUyxcbiAgUFJPTU9fTUFTS1M6IHsgW0NvbG9ycy5XSElURV06IEJCTWFza3MuUk9XU1s3XSxcbiAgICAgICAgICAgICAgICAgW0NvbG9ycy5CTEFDS106IEJCTWFza3MuUk9XU1swXVxuICAgICAgICAgICAgICAgfSxcbiAgYXR0YWNrc0xlZnQ6IChjb2xvciwgcG9zaXRpb25zLCBvcHBQaWVjZXMpID0+IHtcbiAgICByZXR1cm4gc3RlcE1vdmUocG9zaXRpb25zLCBESVJTW2NvbG9yXSwgLURJUlNbY29sb3JdKS5hbmQob3BwUGllY2VzKTtcbiAgfSxcbiAgYXR0YWNrc1JpZ2h0OiAoY29sb3IsIHBvc2l0aW9ucywgb3BwUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIHN0ZXBNb3ZlKHBvc2l0aW9ucywgRElSU1tjb2xvcl0sIERJUlNbY29sb3JdKS5hbmQob3BwUGllY2VzKTtcbiAgfSxcbiAgc2luZ2xlUHVzaDogKGNvbG9yLCBwb3NpdGlvbnMsIG5vdE9jY3VwaWVkKSA9PiB7XG4gICAgcmV0dXJuIHN0ZXBNb3ZlKHBvc2l0aW9ucywgRElSU1tjb2xvcl0sIDApLmFuZChub3RPY2N1cGllZCk7XG4gIH0sXG4gIGRvdWJsZVB1c2g6IChjb2xvciwgcG9zaXRpb25zLCBub3RPY2N1cGllZCkgPT4ge1xuICAgIGNvbnN0IG9uZVB1c2ggPSBzdGVwTW92ZShwb3NpdGlvbnMuYW5kKElOSVRfTUFTS1NbY29sb3JdKSwgRElSU1tjb2xvcl0sIDApLmFuZChub3RPY2N1cGllZCk7XG4gICAgcmV0dXJuIHN0ZXBNb3ZlKG9uZVB1c2gsIERJUlNbY29sb3JdLCAwKS5hbmQobm90T2NjdXBpZWQpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhd25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL3Bhd25zLmpzIiwiY29uc3QgeyBLTklHSFRfTU9WRVMgfSA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL21hc2tzLmpzJyk7XG5cbmNvbnN0IEtuaWdodCA9IHtcbiAgdmFsdWU6IDMyNSxcbiAgcG9zaXRpb25WYWx1ZXM6IFtcblx0XHQtNTAsIC00MCwgLTMwLCAtMzAsIC0zMCwgLTMwLCAtNDAsIC01MCxcblx0XHQtNDAsIC0yMCwgMCwgMCwgMCwgMCwgLTIwLCAtNDAsXG5cdFx0LTMwLCAwLCAxMCwgMTUsIDE1LCAxMCwgMCwgLTMwLFxuXHRcdC0zMCwgNSwgMTUsIDIwLCAyMCwgMTUsIDUsIC0zMCxcblx0XHQtMzAsIDAsIDE1LCAyMCwgMjAsIDE1LCAwLCAtMzAsXG5cdFx0LTMwLCA1LCAxMCwgMTUsIDE1LCAxMCwgNSwgLTMwLFxuXHRcdC00MCwgLTIwLCAwLCA1LCA1LCAwLCAtMjAsIC00MCxcblx0XHQtNTAsIC00MCwgLTMwLCAtMzAsIC0zMCwgLTMwLCAtNDAsIC01MFxuXHRdLFxuICBtb3ZlczogKHBvc2l0aW9uLCBub3RPd25QaWVjZXMpID0+IHtcbiAgICByZXR1cm4gS05JR0hUX01PVkVTW3Bvc2l0aW9uXS5hbmQobm90T3duUGllY2VzKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBLbmlnaHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMva25pZ2h0LmpzIiwiY29uc3QgeyBkaWFnIH0gPSByZXF1aXJlKCcuL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcycpO1xuXG5jb25zdCBCaXNob3AgPSB7XG4gIHZhbHVlOiAzMjUsXG4gIHBvc2l0aW9uVmFsdWVzOiBbXG5cdFx0LTIwLCAtMTAsIC0xMCwgLTEwLCAtMTAsIC0xMCwgLTEwLCAtMjAsXG5cdFx0LTEwLCAwLCAwLCAwLCAwLCAwLCAwLCAtMTAsXG5cdFx0LTEwLCAwLCA1LCAxMCwgMTAsIDUsIDAsIC0xMCxcblx0XHQtMTAsIDUsIDUsIDEwLCAxMCwgNSwgNSwgLTEwLFxuXHRcdC0xMCwgMCwgMTAsIDEwLCAxMCwgMTAsIDAsIC0xMCxcblx0XHQtMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIC0xMCxcblx0XHQtMTAsIDUsIDAsIDAsIDAsIDAsIDUsIC0xMCxcblx0XHQtMjAsIC0xMCwgLTEwLCAtMTAsIC0xMCwgLTEwLCAtMTAsIC0yMFxuXHRdLFxuICBtb3ZlczogKHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIGRpYWcocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJpc2hvcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9iaXNob3AuanMiLCJjb25zdCB7IGhvcml6VmVydCB9ID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvc2xpZGVfbW92ZXMuanMnKTtcblxuY29uc3QgUm9vayA9IHtcbiAgdmFsdWU6IDUwMCxcbiAgcG9zaXRpb25WYWx1ZXM6XHRbXG5cdFx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0XHQ1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LFxuXHRcdC01LCAwLCAwLCAwLCAwLCAwLCAwLCAtNSxcblx0XHQtNSwgMCwgMCwgMCwgMCwgMCwgMCwgLTUsXG5cdFx0LTUsIDAsIDAsIDAsIDAsIDAsIDAsIC01LFxuXHRcdC01LCAwLCAwLCAwLCAwLCAwLCAwLCAtNSxcblx0XHQtNSwgMCwgMCwgMCwgMCwgMCwgMCwgLTUsXG5cdFx0MCwgMCwgMCwgNSwgNSwgMCwgMCwgMFxuXHRdLFxuICBtb3ZlczogKHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIGhvcml6VmVydChwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcyk7XG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvcm9vay5qcyIsImNvbnN0IHsgZGlhZywgaG9yaXpWZXJ0IH0gPSByZXF1aXJlKCcuL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcycpO1xuXG5jb25zdCBRdWVlbiA9IHtcbiAgdmFsdWU6IDEwNTAsXG4gIHBvc2l0aW9uVmFsdWVzOiBbXG5cdFx0LTIwLCAtMTAsIC0xMCwgLTUsIC01LCAtMTAsIC0xMCwgLTIwLFxuXHRcdC0xMCwgMCwgMCwgMCwgMCwgMCwgMCwgLTEwLFxuXHRcdC0xMCwgMCwgNSwgNSwgNSwgNSwgMCwgLTEwLFxuXHRcdC01LCAwLCA1LCA1LCA1LCA1LCAwLCAtNSxcblx0XHQwLCAwLCA1LCA1LCA1LCA1LCAwLCAtNSxcblx0XHQtMTAsIDUsIDUsIDUsIDUsIDUsIDAsIC0xMCxcblx0XHQtMTAsIDAsIDUsIDAsIDAsIDAsIDAsIC0xMCxcblx0XHQtMjAsIC0xMCwgLTEwLCAtNSwgLTUsIC0xMCwgLTEwLCAtMjBcblx0XSxcbiAgbW92ZXM6IChwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcykgPT4ge1xuICAgIHJldHVybiBkaWFnKHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKS5vcihob3JpelZlcnQocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9xdWVlbi5qcyIsImNvbnN0IHsgQkJNYXNrcyB9ID0gcmVxdWlyZSgnLi4vYml0Ym9hcmQnKTtcbmNvbnN0IERpcnMgPSByZXF1aXJlKCcuL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzJyk7XG5jb25zdCB7IEtJTkdfTU9WRVMsIFNMSURFX01PVkVTIH0gPSByZXF1aXJlKCcuL21vdmVtZW50cy9tYXNrcy5qcycpO1xuY29uc3QgeyBDb2xvcnMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmNvbnN0IElOSVRfUE9TID0ge1xuICBbQ29sb3JzLkJMQUNLXTogNjAsXG4gIFtDb2xvcnMuV0hJVEVdOiA0XG59O1xuXG5jb25zdCBLaW5nID0ge1xuICB2YWx1ZTogNDAwMDAsXG4gIHBvc2l0aW9uVmFsdWVzOlx0W1xuXHRcdC0zMCwgLTQwLCAtNDAsIC01MCwgLTUwLCAtNDAsIC00MCwgLTMwLFxuXHRcdC0zMCwgLTQwLCAtNDAsIC01MCwgLTUwLCAtNDAsIC00MCwgLTMwLFxuXHRcdC0zMCwgLTQwLCAtNDAsIC01MCwgLTUwLCAtNDAsIC00MCwgLTMwLFxuXHRcdC0zMCwgLTQwLCAtNDAsIC01MCwgLTUwLCAtNDAsIC00MCwgLTMwLFxuXHRcdC0yMCwgLTMwLCAtMzAsIC00MCwgLTQwLCAtMzAsIC0zMCwgLTIwLFxuXHRcdC0xMCwgLTIwLCAtMjAsIC0yMCwgLTIwLCAtMjAsIC0yMCwgLTEwLFxuXHRcdCAyMCwgMjAsIDAsIDAsIDAsIDAsIDIwLCAyMCxcblx0XHQgMjAsIDMwLCAxMCwgMCwgMCwgMTAsIDMwLCAyMFxuXHRdLFxuICBJTklUX1BPUyxcbiAgbW92ZXM6IChwb3NpdGlvbiwgbm90T3duUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIEtJTkdfTU9WRVNbcG9zaXRpb25dLmFuZChub3RPd25QaWVjZXMpO1xuICB9LFxuICBjYW5DYXN0bGU6IChjb2xvciwgZGlyLCBub3RPY2N1cGllZCkgPT4ge1xuICAgIGNvbnN0IGNhc3RsZVNsaWRlID0gU0xJREVfTU9WRVNbSU5JVF9QT1NbY29sb3JdXVtkaXJdLmFuZChub3RPY2N1cGllZCk7XG4gICAgaWYgKGRpciA9PT0gRGlycy5FQVNUKSB7XG4gICAgICByZXR1cm4gY2FzdGxlU2xpZGUucG9wQ291bnQoKSA9PT0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNhc3RsZVNsaWRlLnBvcENvdW50KCkgPT09IDM7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMva2luZy5qcyIsImNvbnN0IHsgVHlwZXMsIENvbG9ycywgUGllY2VUeXBlTGV0dGVycyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuZnVuY3Rpb24gcGllY2VUb0xldHRlcih0eXBlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09IENvbG9ycy5XSElURSkge1xuICAgIHJldHVybiBQaWVjZVR5cGVMZXR0ZXJzW3R5cGVdO1xuICB9IGVsc2UgaWYgKGNvbG9yID09PSBDb2xvcnMuQkxBQ0spIHtcbiAgICByZXR1cm4gUGllY2VUeXBlTGV0dGVyc1t0eXBlXS50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxldHRlclRvQ29sb3IobGV0dGVyKSB7XG4gIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKSA9PT0gbGV0dGVyID8gQ29sb3JzLkJMQUNLIDogQ29sb3JzLldISVRFO1xufVxuXG5mdW5jdGlvbiBsZXR0ZXJUb1R5cGUobGV0dGVyKSB7XG4gIGNvbnN0IHBpZWNlVHlwZXMgPSBPYmplY3QudmFsdWVzKFR5cGVzKTtcbiAgbGV0IHBpZWNlVHlwZTtcbiAgbGV0IGlkeDtcblxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IHBpZWNlVHlwZXMubGVuZ3RoOyBpZHgrKykge1xuICAgIGlmIChQaWVjZVR5cGVMZXR0ZXJzW3BpZWNlVHlwZXNbaWR4XV0gPT09IGxldHRlci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBwaWVjZVR5cGUgPSBwaWVjZVR5cGVzW2lkeF07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGllY2VUeXBlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcGllY2VUb0xldHRlciwgbGV0dGVyVG9Db2xvciwgbGV0dGVyVG9UeXBlIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvY29udmVyc2lvbnMuanMiLCJjb25zdCB7IFR5cGVzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5mdW5jdGlvbiBlYWNoUGllY2VUeXBlKGNiKSB7XG4gIGxldCB0eXBlO1xuICBmb3IgKHR5cGUgPSBUeXBlcy5QQVdOUzsgdHlwZSA8PSBUeXBlcy5LSU5HUzsgdHlwZSsrKSB7XG4gICAgY2IodHlwZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlYWNoUGllY2VUeXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2VhY2hfcGllY2VfdHlwZS5qcyIsImNvbnN0IHsgUFR5cGVzLCBQVXRpbHMsIENvbG9ycywgZWFjaFBpZWNlVHlwZSB9ID0gcmVxdWlyZSgnLi4vcGllY2VzJyk7XG5cbi8vIHdlIHN0b3JlIHpvYnJpc3QgaGFzaCB2YWx1ZXMgYXMgc2lnbmVkIDMyYml0IGludGVnZXJzXG5cbmZ1bmN0aW9uIHJhbmRTaWduZWQzMkJpdCgpIHtcbiAgY29uc3QgcG9zaXRpdmUgPSBbdHJ1ZSwgZmFsc2VdW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgaWYgKHBvc2l0aXZlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNYXRoLnBvdygyLCAzMSkgLSAxKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoTWF0aC5wb3coMiwgMzEpKSk7XG4gIH1cbn1cblxuY29uc3QgcGllY2VQb3NIYXNoS2V5cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcmVzID0gW107XG4gIGxldCBwb3M7XG4gIGxldCBuZXdQb3NLZXlzO1xuXG4gIGNvbnN0IGFkZFBUeXBlS2V5cyA9IChwVHlwZSkgPT4ge1xuICAgIHJlc1twb3NdW3BUeXBlXSA9IHt9O1xuICAgIHJlc1twb3NdW3BUeXBlXVtDb2xvcnMuV0hJVEVdID0gcmFuZFNpZ25lZDMyQml0KCk7XG4gICAgcmVzW3Bvc11bcFR5cGVdW0NvbG9ycy5CTEFDS10gPSByYW5kU2lnbmVkMzJCaXQoKTtcbiAgfTtcblxuICBmb3IgKHBvcyA9IDA7IHBvcyA8IDY0OyBwb3MrKykge1xuICAgIHJlc1twb3NdID0ge307XG4gICAgZWFjaFBpZWNlVHlwZSgocFR5cGUpID0+IGFkZFBUeXBlS2V5cyhwVHlwZSkpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxuY29uc3QgZXBQb3NIYXNoS2V5cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcmVzID0ge307XG4gIGxldCBwb3M7XG5cbiAgLy8gY2FuIG9ubHkgZW4gcGFzc2FudCBvbnRvIDNyZCBvciA2dGggcm93XG4gIGZvciAocG9zID0gMTY7IHBvcyA8PSAyMzsgcG9zKyspIHtcbiAgICByZXNbcG9zXSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuICB9XG5cbiAgZm9yIChwb3MgPSA0MDsgcG9zIDw9IDQ3OyBwb3MrKykge1xuICAgIHJlc1twb3NdID0gcmFuZFNpZ25lZDMyQml0KCk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5jb25zdCBjYXN0bGVIYXNoS2V5cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcmVzID0gW107XG4gIGxldCByaWdodHNJZHg7XG5cbiAgZm9yIChyaWdodHNJZHggPSAwOyByaWdodHNJZHggPCA0OyByaWdodHNJZHgrKykge1xuICAgIHJlc1tyaWdodHNJZHhdID0gcmFuZFNpZ25lZDMyQml0KCk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5jb25zdCB0dXJuSGFzaEtleXMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIHJlc1tDb2xvcnMuV0hJVEVdID0gcmFuZFNpZ25lZDMyQml0KCk7XG4gIHJlc1tDb2xvcnMuQkxBQ0tdID0gcmFuZFNpZ25lZDMyQml0KCk7XG5cbiAgcmV0dXJuIHJlcztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHBpZWNlUG9zSGFzaEtleXMsIGVwUG9zSGFzaEtleXMsIGNhc3RsZUhhc2hLZXlzLCB0dXJuSGFzaEtleXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3Bvc2l0aW9uL3poYXNoX2NvbnN0YW50cy5qcyIsImNvbnN0IE1vdmVTZWFyY2ggPSByZXF1aXJlKCcuL21vdmVfc2VhcmNoLmpzJyk7XG5cbmNsYXNzIEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aGlua2luZ1RpbWUgPSAxMDAwO1xuICAgIHRoaXMucHJldlBlcmZvcm1hbmNlID0gbnVsbDtcbiAgfVxuXG4gIHNldFRoaW5raW5nVGltZSh0aGlua2luZ1RpbWUpIHtcbiAgICB0aGlzLnRoaW5raW5nVGltZSA9IHRoaW5raW5nVGltZTtcbiAgfVxuXG4gIGNob29zZU1vdmUocG9zaXRpb24sIGF2YWlsYWJsZU1vdmVzKSB7XG4gICAgY29uc3QgbW92ZVNlYXJjaCA9IG5ldyBNb3ZlU2VhcmNoKHBvc2l0aW9uLCBhdmFpbGFibGVNb3Zlcyk7XG4gICAgY29uc3QgYmVzdE1vdmUgPSBtb3ZlU2VhcmNoLmZpbmRCZXN0KHRoaXMudGhpbmtpbmdUaW1lKTtcbiAgICBjb25zdCBwZXJmUmVzdWx0cyA9IG1vdmVTZWFyY2guZ2V0UGVyZm9ybWFuY2UoKTtcblxuICAgIHJldHVybiB7IG1vdmU6IGJlc3RNb3ZlLCBwZXJmb3JtYW5jZTogcGVyZlJlc3VsdHMgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFJO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYWkvaW5kZXguanMiLCJjb25zdCB7IFBUeXBlcywgUFV0aWxzLFxuICAgICAgICBDb2xvcnMsIERpcnMsXG4gICAgICAgIGVhY2hQaWVjZVR5cGUgfSA9IHJlcXVpcmUoJy4uL3BpZWNlcycpO1xuY29uc3QgeyBUcmFuc3Bvc1RhYmxlLCBUQUJMRV9TQ09SRV9UWVBFUyB9ID0gcmVxdWlyZSgnLi90cmFuc3Bvc190YWJsZS5qcycpO1xuY29uc3QgS2lsbGVyTW92ZUxpc3QgPSByZXF1aXJlKCcuL2tpbGxlcl9tb3ZlX2xpc3QuanMnKTtcbmNvbnN0IFBlcmZNb25pdG9yID0gcmVxdWlyZSgnLi9wZXJmX21vbml0b3IuanMnKTtcblxuY29uc3QgRUFSTFlfRVhJVCA9ICdlYXJseSBleGl0JztcblxuY2xhc3MgTW92ZVNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBpbml0QXZhaWxhYmxlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuaW5pdEF2YWlsYWJsZSA9IGluaXRBdmFpbGFibGU7XG4gICAgdGhpcy50cmFuc1Bvc1RhYmxlID0gbmV3IFRyYW5zcG9zVGFibGUoKTtcbiAgICB0aGlzLmtpbGxlck1vdmVMaXN0ID0gbmV3IEtpbGxlck1vdmVMaXN0KCk7XG4gICAgdGhpcy5wZXJmTW9uaXRvciA9IG5ldyBQZXJmTW9uaXRvcigpO1xuICB9XG5cbiAgZmluZEJlc3QodGhpbmtpbmdUaW1lKSB7XG4gICAgdGhpcy5wZXJmTW9uaXRvci5zZXRTdGFydFRpbWUoKTtcbiAgICB0aGlzLmVuZFRpbWUgPSBEYXRlLm5vdygpICsgdGhpbmtpbmdUaW1lO1xuXG4gICAgdGhpcy5tYXhEZXB0aCA9IDE7XG4gICAgd2hpbGUgKERhdGUubm93KCkgPCB0aGlzLmVuZFRpbWUgJiYgdGhpcy5tYXhEZXB0aCA8IDMwKSB7XG4gICAgICB0aGlzLmtpbGxlck1vdmVMaXN0LmFkZFNsb3QoKTtcbiAgICAgIHRoaXMubmVnYU1heCh0aGlzLm1heERlcHRoLCAtSW5maW5pdHksIEluZmluaXR5KTtcbiAgICAgIHRoaXMubWF4RGVwdGgrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhEZXB0aCA+PSAzMCkge1xuICAgICAgY29uc29sZS5sb2coJ0FwcHJvYWNoaW5nIGRyYXcuLi4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnBlcmZNb25pdG9yLmRlcHRoKSB7IHRoaXMucGVyZk1vbml0b3Iuc2V0RGVwdGgodGhpcy5tYXhEZXB0aCAtIDEpOyB9XG4gICAgICB0aGlzLnBlcmZNb25pdG9yLnNldEVuZFRpbWUoKTtcbiAgICAgIHRoaXMucGVyZk1vbml0b3IucHJpbnRSZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3Vyck5vZGVFbnRyeSA9IHRoaXMudHJhbnNQb3NUYWJsZS5nZXRFbnRyeSh0aGlzLnBvc2l0aW9uLmdldEhhc2goKSk7XG4gICAgaWYgKGN1cnJOb2RlRW50cnkgJiYgY3Vyck5vZGVFbnRyeS5iZXN0TW92ZSkge1xuICAgICAgcmV0dXJuIGN1cnJOb2RlRW50cnkuYmVzdE1vdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRBdmFpbGFibGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5pbml0QXZhaWxhYmxlLmxlbmd0aCldO1xuICAgIH1cbiAgfVxuXG4gIGdldFBlcmZvcm1hbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnBlcmZNb25pdG9yLmdldFJlc3VsdHMoKTtcbiAgfVxuXG4gIHF1aWVzY2VuY2VTZWFyY2goYWxwaGEsIGJldGEpIHtcbiAgICBpZiAoRGF0ZS5ub3coKSA+IHRoaXMuZW5kVGltZSkge1xuICAgICAgdGhpcy5wZXJmTW9uaXRvci5zZXREZXB0aCh0aGlzLm1heERlcHRoIC0gMSk7XG4gICAgICByZXR1cm4gRUFSTFlfRVhJVDtcbiAgICB9XG4gICAgdGhpcy5wZXJmTW9uaXRvci5sb2dRdWllc2NlbnROb2RlKCk7XG4gICAgY29uc3Qgc3RhbmRQYXRWYWwgPSB0aGlzLmV2YWx1YXRlKCk7XG5cbiAgICBpZiAoc3RhbmRQYXRWYWwgPj0gYmV0YSkge1xuICAgICAgcmV0dXJuIGJldGE7XG4gICAgfSBlbHNlIGlmIChzdGFuZFBhdFZhbCA+IGFscGhhKSB7XG4gICAgICBhbHBoYSA9IHN0YW5kUGF0VmFsO1xuICAgIH1cblxuICAgIGxldCBpbkNoZWNrID0gdGhpcy5wb3NpdGlvbi5pbkNoZWNrKHRoaXMucG9zaXRpb24udHVybik7XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVNb3ZlT3JkZXJTY29yZShtb3ZlKSB7XG4gICAgICBsZXQgc2NvcmUgPSBtb3ZlLmdldENhcHRQaWVjZSgpPyAoKDEgKyBtb3ZlLmdldENhcHRQaWVjZSgpKSAvICgxICsgbW92ZS5nZXRQaWVjZSgpKSk6IDA7XG4gICAgICBzY29yZSA9IHNjb3JlICogMTAgKyBtb3ZlLmdldFBpZWNlKCk7XG4gICAgICBzY29yZSA9IHNjb3JlICogMTAgKyBtb3ZlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHNjb3JlO1xuICAgIH1cblxuICAgIC8vIGluY2x1ZGUgcXVpZXQgbW92ZXMgKGllIG5vbiBjYXB0dXJlcykgb25seSBpZiB0aGUga2luZyBpcyBpbiBjaGVjaztcbiAgICBjb25zdCBtb3ZlcyA9IHRoaXMuc29ydE1vdmVzKHRoaXMucG9zaXRpb24uZ2VuZXJhdGVQc2V1ZG9Nb3ZlcyhpbkNoZWNrKSwgY2FsY3VsYXRlTW92ZU9yZGVyU2NvcmUpO1xuXG4gICAgbGV0IG1vdmVJZHg7XG4gICAgbGV0IHNjb3JlO1xuXG4gICAgZm9yIChtb3ZlSWR4ID0gMDsgbW92ZUlkeCA8IG1vdmVzLmxlbmd0aDsgbW92ZUlkeCsrKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi5tYWtlTW92ZShtb3Zlc1ttb3ZlSWR4XSkpIHtcbiAgICAgICAgc2NvcmUgPSAtdGhpcy5xdWllc2NlbmNlU2VhcmNoKC1iZXRhLCAtYWxwaGEpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnVubWFrZVByZXZNb3ZlKCk7XG5cbiAgICAgICAgaWYgKHNjb3JlID49IGJldGEpIHsgcmV0dXJuIGJldGE7IH1cbiAgICAgICAgaWYgKHNjb3JlID4gYWxwaGEpIHsgYWxwaGEgPSBzY29yZTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbHBoYTtcbiAgfVxuXG4gIG5lZ2FNYXgoZGVwdGgsIGFscGhhLCBiZXRhKSB7XG4gICAgaWYgKERhdGUubm93KCkgPiB0aGlzLmVuZFRpbWUpIHtcbiAgICAgIHRoaXMucGVyZk1vbml0b3Iuc2V0RGVwdGgodGhpcy5tYXhEZXB0aCAtIDEpO1xuICAgICAgcmV0dXJuIEVBUkxZX0VYSVQ7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldkFscGhhID0gYWxwaGE7XG4gICAgY29uc3QgY3Vyckhhc2ggPSB0aGlzLnBvc2l0aW9uLmdldEhhc2goKTtcbiAgICBjb25zdCBlbnRyeSA9IHRoaXMudHJhbnNQb3NUYWJsZS5nZXRFbnRyeShjdXJySGFzaCk7XG4gICAgaWYgKGVudHJ5ICYmIGVudHJ5LmRlcHRoID49IGRlcHRoKSB7XG4gICAgICB0aGlzLnBlcmZNb25pdG9yLmxvZ1RhYmxlSGl0KCk7XG4gICAgICBzd2l0Y2ggKGVudHJ5LnR5cGUpIHtcbiAgICAgICAgY2FzZSBUQUJMRV9TQ09SRV9UWVBFUy5FWEFDVDpcbiAgICAgICAgICByZXR1cm4gZW50cnkuc2NvcmU7XG4gICAgICAgIGNhc2UgVEFCTEVfU0NPUkVfVFlQRVMuTE9XRVJCT1VORDpcbiAgICAgICAgICBhbHBoYSA9IE1hdGgubWF4KGFscGhhLCBlbnRyeS5zY29yZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVEFCTEVfU0NPUkVfVFlQRVMuVVBQRVJCT1VORDpcbiAgICAgICAgICBiZXRhID0gTWF0aC5taW4oYmV0YSwgZW50cnkuc2NvcmUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGFscGhhID49IGJldGEpIHsgcmV0dXJuIGVudHJ5LnNjb3JlOyB9XG4gICAgfVxuXG4gICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWllc2NlbmNlU2VhcmNoKGFscGhhLCBiZXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLnBlcmZNb25pdG9yLmxvZ01haW5TZWFyY2hOb2RlKCk7XG5cbiAgICBsZXQgcHJldkJlc3RNb3ZlID0gKGVudHJ5ICYmIGVudHJ5LmJlc3RNb3ZlKSA/IGVudHJ5LmJlc3RNb3ZlIDogbnVsbDtcbiAgICBjb25zdCBzaWJsaW5nS2lsbGVyTW92ZXMgPSB0aGlzLmtpbGxlck1vdmVMaXN0LmdldFNpYmxpbmdNb3Zlcyh0aGlzLm1heERlcHRoIC0gZGVwdGgpO1xuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlTW92ZU9yZGVyU2NvcmUobW92ZSkge1xuICAgICAgaWYgKHByZXZCZXN0TW92ZSAmJiBtb3ZlLnZhbCA9PT0gcHJldkJlc3RNb3ZlLnZhbCkge1xuICAgICAgICByZXR1cm4gMTAwMDA7XG4gICAgICB9XG4gICAgICBsZXQgc2NvcmUgPSBtb3ZlLmdldENhcHRQaWVjZSgpID8gKCgxICsgbW92ZS5nZXRDYXB0UGllY2UoKSkgLyAoMSArIG1vdmUuZ2V0UGllY2UoKSkgKyAxKTogMDtcbiAgICAgIHNjb3JlID0gc2NvcmUgKiAxMCArIChzaWJsaW5nS2lsbGVyTW92ZXMuaW5jbHVkZXMobW92ZS52YWwpID8gMSA6IDApO1xuICAgICAgc2NvcmUgPSBzY29yZSAqIDEwICsgbW92ZS5nZXRQaWVjZSgpO1xuICAgICAgc2NvcmUgPSBzY29yZSAqIDEwICsgbW92ZS5nZXRUeXBlKCk7XG5cbiAgICAgIHJldHVybiBzY29yZTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlcyA9IHRoaXMuc29ydE1vdmVzKHRoaXMucG9zaXRpb24uZ2VuZXJhdGVQc2V1ZG9Nb3ZlcygpLCBjYWxjdWxhdGVNb3ZlT3JkZXJTY29yZSk7XG5cbiAgICBsZXQgbW92ZUlkeDtcbiAgICBsZXQgY2FuTW92ZSA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IHNjb3JlO1xuICAgIGxldCBiZXN0U2NvcmUgPSAtSW5maW5pdHk7XG4gICAgbGV0IGJlc3RNb3ZlID0gbnVsbDtcblxuICAgIGZvciAobW92ZUlkeCA9IDA7IG1vdmVJZHggPCBtb3Zlcy5sZW5ndGg7IG1vdmVJZHgrKykge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24ubWFrZU1vdmUobW92ZXNbbW92ZUlkeF0pKSB7XG4gICAgICAgIGNhbk1vdmUgPSB0cnVlO1xuICAgICAgICByZXN1bHQgPSB0aGlzLm5lZ2FNYXgoZGVwdGggLSAxLCAtYmV0YSwgLWFscGhhKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi51bm1ha2VQcmV2TW92ZSgpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT09IEVBUkxZX0VYSVQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgc2NvcmUgPSAtcmVzdWx0O1xuICAgICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgICBiZXN0TW92ZSA9IG1vdmVzW21vdmVJZHhdO1xuXG4gICAgICAgICAgaWYgKGJlc3RTY29yZSA+PSBiZXRhKSB7XG4gICAgICAgICAgICB0aGlzLmtpbGxlck1vdmVMaXN0LmFkZE1vdmUodGhpcy5tYXhEZXB0aCAtIGRlcHRoLCBtb3Zlc1ttb3ZlSWR4XSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYmVzdFNjb3JlID4gYWxwaGEpIHtcbiAgICAgICAgICAgIGFscGhhID0gYmVzdFNjb3JlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2FuTW92ZSkge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24uaW5DaGVjayh0aGlzLnBvc2l0aW9uLnR1cm4pKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IC1QVXRpbHNbUFR5cGVzLktJTkdTXS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlc3RTY29yZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc1Bvc1RhYmxlLnN0b3JlRW50cnkoYmVzdFNjb3JlLCBiZXN0TW92ZSwgcHJldkFscGhhLCBiZXRhLCBkZXB0aCwgY3Vyckhhc2gpO1xuICAgIHJldHVybiBiZXN0U2NvcmU7XG4gIH1cblxuICBzb3J0TW92ZXMobW92ZXMsIGNhbGN1bGF0ZVNjb3JlKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlTW92ZVNjb3JlcygpIHtcbiAgICAgIHJldHVybiBtb3Zlcy5tYXAoKG1vdmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbW92ZTogbW92ZSwgc2NvcmU6IGNhbGN1bGF0ZVNjb3JlKG1vdmUpIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlTW92ZVNjb3JlcygpLnNvcnQoKG1vdmVBLCBtb3ZlQikgPT4gbW92ZUIuc2NvcmUgLSBtb3ZlQS5zY29yZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobW92ZVNjb3JlKSA9PiBtb3ZlU2NvcmUubW92ZSk7XG4gIH1cblxuICBldmFsdWF0ZSgpIHtcbiAgICBsZXQgbWF0ZXJpYWxTY29yZSA9IHRoaXMuc2NvcmVNYXRlcmlhbCh0aGlzLnBvc2l0aW9uLnR1cm4pIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVNYXRlcmlhbCh0aGlzLnBvc2l0aW9uLm9wcCk7XG5cbiAgICBsZXQgcGllY2VQb3NpdGlvblNjb3JlID0gdGhpcy5zY29yZVBpZWNlUG9zaXRpb25zKHRoaXMucG9zaXRpb24udHVybikgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlUGllY2VQb3NpdGlvbnModGhpcy5wb3NpdGlvbi5vcHApO1xuXG4gICAgcmV0dXJuIG1hdGVyaWFsU2NvcmUgKyBwaWVjZVBvc2l0aW9uU2NvcmU7XG4gIH1cblxuICBzY29yZU1hdGVyaWFsKGNvbG9yKSB7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBlYWNoUGllY2VUeXBlKChwaWVjZVR5cGUpID0+IHtcbiAgICAgIHNjb3JlICs9IHRoaXMucG9zaXRpb24uZ2V0Q29sb3JQaWVjZVNldChjb2xvciwgcGllY2VUeXBlKS5wb3BDb3VudCgpICpcbiAgICAgICAgICAgICAgIFBVdGlsc1twaWVjZVR5cGVdLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG5cbiAgc2NvcmVQaWVjZVBvc2l0aW9ucyhjb2xvcikge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgbGV0IHBpZWNlUG9zaXRpb25zO1xuICAgIGVhY2hQaWVjZVR5cGUoKHBpZWNlVHlwZSkgPT4ge1xuICAgICAgcGllY2VQb3NpdGlvbnMgPSB0aGlzLnBvc2l0aW9uLmdldENvbG9yUGllY2VTZXQoY29sb3IsIHBpZWNlVHlwZSk7XG4gICAgICBwaWVjZVBvc2l0aW9ucy5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICAgIHNjb3JlICs9IFBVdGlsc1twaWVjZVR5cGVdLnBvc2l0aW9uVmFsdWVzW2NvbG9yID8gcG9zIDogNTYgXiBwb3NdO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3ZlU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYWkvbW92ZV9zZWFyY2guanMiLCJjb25zdCBTQ09SRV9UWVBFUyA9IHtcbiAgRVhBQ1Q6ICdleGFjdCcsXG4gIFVQUEVSQk9VTkQ6ICd1cHBlcmJvdW5kJyxcbiAgTE9XRVJCT1VORDogJ2xvd2VyYm91bmQnXG59O1xuXG5jbGFzcyBUcmFuc3Bvc1RhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YWJsZSA9IHt9O1xuICB9XG5cbiAgZ2V0RW50cnkoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVba2V5XSB8fCBudWxsO1xuICB9XG5cbiAgc3RvcmVFbnRyeShzY29yZSwgYmVzdE1vdmUsIGFscGhhLCBiZXRhLCBkZXB0aCwga2V5KSB7XG4gICAgdGhpcy50YWJsZVtrZXldID0ge1xuICAgICAgc2NvcmUsXG4gICAgICBiZXN0TW92ZSxcbiAgICAgIHR5cGU6IHRoaXMuZGV0ZXJtaW5lU2NvcmVUeXBlKHNjb3JlLCBhbHBoYSwgYmV0YSksXG4gICAgICBkZXB0aCxcbiAgICAgIGtleVxuICAgIH07XG4gIH1cblxuICBkZXRlcm1pbmVTY29yZVR5cGUoc2NvcmUsIGFscGhhLCBiZXRhKSB7XG4gICAgaWYgKHNjb3JlIDw9IGFscGhhKSB7XG4gICAgICByZXR1cm4gU0NPUkVfVFlQRVMuVVBQRVJCT1VORDtcbiAgICB9IGVsc2UgaWYgKHNjb3JlID49IGJldGEpIHtcbiAgICAgIHJldHVybiBTQ09SRV9UWVBFUy5MT1dFUkJPVU5EO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU0NPUkVfVFlQRVMuRVhBQ1Q7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBUcmFuc3Bvc1RhYmxlLCBUQUJMRV9TQ09SRV9UWVBFUzogU0NPUkVfVFlQRVMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FpL3RyYW5zcG9zX3RhYmxlLmpzIiwiY2xhc3MgS2lsbGVyTW92ZUxpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB0aGlzLm1heFBlckxldmVsID0gMjtcbiAgfVxuXG4gIGFkZFNsb3QoKSB7XG4gICAgdGhpcy5saXN0LnB1c2gobmV3IEFycmF5KHRoaXMubWF4UGVyTGV2ZWwpKTtcbiAgfVxuXG4gIGFkZE1vdmUoZGlzdEZyb21Sb290LCBtb3ZlKSB7XG4gICAgY29uc3Qgc2libGluZ0tpbGxlck1vdmVzID0gdGhpcy5saXN0W2Rpc3RGcm9tUm9vdF07XG4gICAgaWYgKHNpYmxpbmdLaWxsZXJNb3Zlcy5pbmNsdWRlcyhtb3ZlLnZhbCkpIHsgcmV0dXJuOyB9XG5cbiAgICBsZXQgaWR4O1xuICAgIGZvciAoaWR4ID0gc2libGluZ0tpbGxlck1vdmVzLmxlbmd0aCAtIDI7IGlkeCA+PSAwOyBpZHgtLSkge1xuICAgICAgc2libGluZ0tpbGxlck1vdmVzW2lkeCArIDFdID0gc2libGluZ0tpbGxlck1vdmVzW2lkeF07XG4gICAgfVxuXG4gICAgc2libGluZ0tpbGxlck1vdmVzWzBdID0gbW92ZS52YWw7XG4gIH1cblxuICBnZXRTaWJsaW5nTW92ZXMoZGlzdEZyb21Sb290KSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFtkaXN0RnJvbVJvb3RdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2lsbGVyTW92ZUxpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9haS9raWxsZXJfbW92ZV9saXN0LmpzIiwiY2xhc3MgUGVyZk1vbml0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW5TZWFyY2hOb2RlcyA9IDA7XG4gICAgdGhpcy5xU2VhcmNoTm9kZXMgPSAwO1xuICAgIHRoaXMudGFibGVIaXRzID0gMDtcbiAgfVxuXG4gIHNldFN0YXJ0VGltZSgpIHtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBzZXRFbmRUaW1lKCkge1xuICAgIHRoaXMuZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBzZXREZXB0aChkZXB0aCkge1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgfVxuXG4gIHByaW50UmVzdWx0cygpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tJyk7XG5cbiAgICBpZiAodGhpcy5zdGFydFRpbWUgJiYgdGhpcy5lbmRUaW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUnVuIFRpbWU6ICR7dGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYERlcHRoOiAgJHt0aGlzLmRlcHRofWApO1xuICAgIGNvbnNvbGUubG9nKGBUb3RhbCBFeHBsb3JlZCBQb3NpdGlvbnM6ICR7dGhpcy5xU2VhcmNoTm9kZXMgKyB0aGlzLm1haW5TZWFyY2hOb2Rlc31gKTtcbiAgICBjb25zb2xlLmxvZyhgTWFpbiBTZWFyY2ggTm9kZXM6ICR7dGhpcy5tYWluU2VhcmNoTm9kZXN9YCk7XG4gICAgY29uc29sZS5sb2coYFF1aWVzY2VudCBTZWFyY2ggTm9kZXM6ICR7dGhpcy5xU2VhcmNoTm9kZXN9YCk7XG4gICAgY29uc29sZS5sb2coYFRhYmxlIEhpdHM6ICR7dGhpcy50YWJsZUhpdHN9YCk7XG5cbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tJyk7XG4gIH1cblxuICBsb2dUYWJsZUhpdCgpIHtcbiAgICB0aGlzLnRhYmxlSGl0cysrO1xuICB9XG5cbiAgbG9nTWFpblNlYXJjaE5vZGUoKSB7XG4gICAgdGhpcy5tYWluU2VhcmNoTm9kZXMrKztcbiAgfVxuXG4gIGxvZ1F1aWVzY2VudE5vZGUoKSB7XG4gICAgdGhpcy5xU2VhcmNoTm9kZXMrKztcbiAgfVxuXG4gIGdldFJlc3VsdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJ1blRpbWU6IHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgZGVwdGg6IHRoaXMuZGVwdGgsXG4gICAgICBleHBsb3JlZFBvc2l0aW9uczogdGhpcy5xU2VhcmNoTm9kZXMgKyB0aGlzLm1haW5TZWFyY2hOb2RlcyxcbiAgICAgIG1haW5TZWFyY2hOb2RlczogdGhpcy5tYWluU2VhcmNoTm9kZXMsXG4gICAgICBxU2VhcmNoTm9kZXM6IHRoaXMucVNlYXJjaE5vZGVzLFxuICAgICAgdFRhYmxlSGl0czogdGhpcy50YWJsZUhpdHNcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyZk1vbml0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9haS9wZXJmX21vbml0b3IuanMiLCJjb25zdCB7IFBpZWNlQ29udiwgQ29sb3JzIH0gPSByZXF1aXJlKCcuLi9waWVjZXMnKTtcbmNvbnN0IHsgQ29sc0ZpbGVzLCBGaWxlc0NvbHMsXG4gICAgICAgIFJvd3NSYW5rcywgUmFua3NSb3dzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5mdW5jdGlvbiBwb3NGcm9tRmlsZVJhbmsoZmlsZVJhbmspIHtcbiAgY29uc3QgW2ZpbGUsIHJhbmtdID0gZmlsZVJhbmsuc3BsaXQoJycpO1xuICByZXR1cm4gKFJhbmtzUm93c1tyYW5rXSAqIDgpICsgRmlsZXNDb2xzW2ZpbGVdO1xufVxuXG5mdW5jdGlvbiBmaWxlUmFua0Zyb21Qb3MocG9zKSB7XG4gIHJldHVybiBDb2xzRmlsZXNbcG9zICUgOF0gKyAoUm93c1JhbmtzW01hdGguZmxvb3IocG9zIC8gOCldKTtcbn1cblxuLy8gaWYgdGhlIHJvdyBhbmQgY29sIGFyZSBlaXRoZXIgYm90aCBldmVuIG9yIGJvdGggb2RkXG5mdW5jdGlvbiBpc0RhcmtTcXVhcmUoZmlsZVJhbmspIHtcbiAgY29uc3QgW2ZpbGUsIHJhbmtdID0gZmlsZVJhbmsuc3BsaXQoJycpO1xuICBjb25zdCByb3cgPSBSYW5rc1Jvd3NbcmFua107XG4gIGNvbnN0IGNvbCA9IEZpbGVzQ29sc1tmaWxlXTtcbiAgcmV0dXJuIChyb3cgJSAyID09PSAwICYmIGNvbCAlIDIgPT09IDApIHx8XG4gICAgICAgICAocm93ICUgMiA9PT0gMSAmJiBjb2wgJSAyID09PSAxKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TW92ZShtb3ZlLCBjb2xvcikge1xuICByZXR1cm4gYCR7UGllY2VDb252LnBpZWNlVG9MZXR0ZXIobW92ZS5nZXRQaWVjZSgpLCBjb2xvcil9OmAgK1xuICAgICAgICAgYCR7ZmlsZVJhbmtGcm9tUG9zKG1vdmUuZ2V0RnJvbSgpKX0tPmAgK1xuICAgICAgICAgYCR7ZmlsZVJhbmtGcm9tUG9zKG1vdmUuZ2V0VG8oKSl9YDtcbn1cblxuZnVuY3Rpb24gcGFyc2VNb3ZlU3RhdHMobW92ZVN0YXRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb3ZlU3RhdHMpXG4gICAgICAgICAgICAgICAubWFwKChrZXkpID0+IGAke2tleX06ICR7bW92ZVN0YXRzW2tleV19YClcbiAgICAgICAgICAgICAgIC5qb2luKFwiPGJyLz5cIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobWlsbGlzZWNzKSB7XG4gIGxldCB0aW1lU3RyID0gKG1pbGxpc2VjcyAvIDEwMDApLnRvU3RyaW5nKCk7XG4gIGlmICh0aW1lU3RyLmluZGV4T2YoJy4nKSA9PSAtMSkgdGltZVN0ciArPSAnLic7XG5cbiAgd2hpbGUgKHRpbWVTdHIubGVuZ3RoIDwgdGltZVN0ci5pbmRleE9mKCcuJykgKyAzKSB7XG4gICAgdGltZVN0ciArPSAnMCc7XG4gIH1cblxuICB3aGlsZSAodGltZVN0ci5sZW5ndGggPiB0aW1lU3RyLmluZGV4T2YoJy4nKSArIDMpIHtcbiAgICB0aW1lU3RyID0gdGltZVN0ci5zbGljZSgwLCB0aW1lU3RyLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIHRpbWVTdHI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwb3NGcm9tRmlsZVJhbmssXG4gIGZpbGVSYW5rRnJvbVBvcyxcbiAgaXNEYXJrU3F1YXJlLFxuICBmb3JtYXRNb3ZlLFxuICBwYXJzZU1vdmVTdGF0cyxcbiAgZm9ybWF0VGltZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3VpL3V0aWwuanMiXSwic291cmNlUm9vdCI6IiJ9