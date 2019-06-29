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


var _PieceTypeLetters, _PieceTypeHTML;

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

var PieceTypeHTML = (_PieceTypeHTML = {}, _defineProperty(_PieceTypeHTML, Types.PAWNS, '&#9823;'), _defineProperty(_PieceTypeHTML, Types.KNIGHTS, '&#9822;'), _defineProperty(_PieceTypeHTML, Types.BISHOPS, '&#9821;'), _defineProperty(_PieceTypeHTML, Types.ROOKS, '&#9820;'), _defineProperty(_PieceTypeHTML, Types.QUEENS, '&#9819;'), _defineProperty(_PieceTypeHTML, Types.KINGS, '&#9818;'), _PieceTypeHTML);

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
          newPiece = $('<div class="piece">' + PieceTypeHTML[pieceType] + '<div>');
          if (pieces[Colors.WHITE].hasSetBit(pos)) {
            newPiece.addClass('white');
          } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MxMWY1Y2Q1NDg3MjA1NDQzN2MiLCJ3ZWJwYWNrOi8vLy4vanMvYml0Ym9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9tb3ZlbWVudHMvbWFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iaXRib2FyZC9iaXRib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3ZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9tb3ZlbWVudHMvc3RlcF9tb3ZlLmpzIiwid2VicGFjazovLy8uL2pzL3VpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYml0Ym9hcmQvaW50MzJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9iaXRib2FyZC9tYXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb3ZlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvcGF3bnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2tuaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvYmlzaG9wLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9yb29rLmpzIiwid2VicGFjazovLy8uL2pzL3BpZWNlcy9xdWVlbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMva2luZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9waWVjZXMvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGllY2VzL2VhY2hfcGllY2VfdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wb3NpdGlvbi96aGFzaF9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvbW92ZV9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkvdHJhbnNwb3NfdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvYWkva2lsbGVyX21vdmVfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9haS9wZXJmX21vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdWkvdXRpbC5qcyJdLCJuYW1lcyI6WyJCaXRCb2FyZCIsInJlcXVpcmUiLCJNYXNrcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJCQk1hc2tzIiwiQ29uc3RhbnRzIiwiUGF3bnMiLCJLbmlnaHQiLCJCaXNob3AiLCJSb29rIiwiUXVlZW4iLCJLaW5nIiwiUGllY2VDb252IiwiZWFjaFBpZWNlVHlwZSIsIkRpcnMiLCJQVXRpbHMiLCJUeXBlcyIsIlBBV05TIiwiS05JR0hUUyIsIkJJU0hPUFMiLCJST09LUyIsIlFVRUVOUyIsIktJTkdTIiwiUFR5cGVzIiwiQ29sb3JzIiwiUGllY2VUeXBlSFRNTCIsIldISVRFIiwiQkxBQ0siLCJQaWVjZVR5cGVMZXR0ZXJzIiwiRElSUyIsInN0ZXBNb3ZlIiwiZ2VuZXJhdGVTdGVwQml0Qm9hcmRzIiwiZGlycyIsInJlcyIsInBvcyIsImluaXRpYWwiLCJwb3NSZXMiLCJhZGRNb3ZlIiwiY3VyclJlcyIsImRpciIsIm9yIiwiZnJvbVBvcyIsInJlZHVjZSIsInB1c2giLCJLTklHSFRfTU9WRVMiLCJLSU5HX01PVkVTIiwiU0xJREVfTU9WRVMiLCJtb3ZlcyIsImNvbElkeCIsInJvd0lkeCIsImRpYWdJZHgiLCJhbnRpRGlhZ0lkeCIsIk1hdGgiLCJmbG9vciIsIk5PUlRIIiwiQ09MUyIsImFuZCIsIk5PUlRIX09GX1JPVyIsIlNPVVRIIiwiU09VVEhfT0ZfUk9XIiwiRUFTVCIsIlJPV1MiLCJFQVNUX09GX0NPTCIsIldFU1QiLCJXRVNUX09GX0NPTCIsIk5PRUEiLCJESUFHUyIsIlNPV0UiLCJOT1dFIiwiQU5USV9ESUFHUyIsIlNPRUEiLCJpc1Bvc1JheSIsImZpbmRVbmJsb2NrZWQiLCJvY2N1cGllZCIsImRpckJCIiwiYmxvY2tpbmciLCJibG9ja2luZ1BvcyIsImlzWmVybyIsImJpdFNjYW5Gb3J3YXJkIiwiYml0U2NhblJldmVyc2UiLCJ4b3IiLCJob3JpelZlcnQiLCJub3RPd25QaWVjZXMiLCJkaWFnIiwiSW50MzJVdGlscyIsImxvdyIsImhpZ2giLCJvdGhlciIsIm51bUJpdHMiLCJuZXdMb3dCaXRzIiwibmV3SGlnaEJpdHMiLCJjb3VudCIsImludDMyIiwicG9wQ291bnQzMiIsImJpdFNjYW5Gb3J3YXJkMzIiLCJCb29sZWFuIiwiYml0U2NhblJldmVyc2UzMiIsImNiIiwiY2xlYXJMZWFzdFNpZ0JpdDMyIiwicm93IiwicG93IiwicG9zVmFsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNldEJpdCIsInBvc2l0aW9ucyIsImZvckVhY2giLCJjb2xOdW0iLCJyb3dOdW0iLCJwb3NNYXgiLCJzdGFydFBvcyIsIk1vdmUiLCJmcm9tIiwidG8iLCJ0eXBlIiwicGllY2UiLCJjYXB0UGllY2UiLCJ2YWwiLCJnZXRGcm9tIiwiZ2V0VG8iLCJnZXRUeXBlIiwicGllY2VUeXBlIiwiZ2V0UGllY2UiLCJjYXB0UGllY2VUeXBlIiwiZ2V0Q2FwdFBpZWNlIiwiaXNQcm9tbyIsImlzQ2FzdGxlIiwiTlBST01PIiwiQlBST01PIiwiUlBST01PIiwiUVBST01PIiwiaW5jbHVkZXMiLCJDU1RMX0tJTkciLCJDU1RMX1FVRUVOIiwibmV3TW92ZSIsIk1vdmVUeXBlcyIsIm5vU28iLCJlYVdlIiwic2hpZnRMZWZ0Iiwic2hpZnRSaWdodCIsIkNvbHNGaWxlcyIsIkZpbGVzQ29scyIsImZpbGUiLCJjb2wiLCJSb3dzUmFua3MiLCJSYW5rc1Jvd3MiLCJyYW5rIiwiR2FtZVN0YXR1cyIsIlRocmVlRm9sZFJlcCIsIk1vdmVMaW1pdEV4YyIsIkNoZWNrbWF0ZSIsIlN0YWxlbWF0ZSIsIlBsYXllclR1cm4iLCJBSVR1cm4iLCJTZWxlY3RvcnMiLCJCT0FSRF9JRCIsIlBJRUNFX0NMQVNTIiwiU1FVQVJFX0NMQVNTIiwiUkFOS19DTEFTUyIsIkZJTEVfQ0xBU1MiLCJVSSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidWkiLCJydW4iLCJQb3NpdGlvbiIsIkFJIiwiVXRpbCIsImFpIiwic2V0dXBCdXR0b25zIiwicmVzZXQiLCJlbXB0eSIsInRleHQiLCJwb3NpdGlvbiIsInBsYXllckNvbG9yIiwicGFyc2VJbnQiLCJhaVRoaW5raW5nVGltZSIsInBhcnNlRmxvYXQiLCJzZXRUaGlua2luZ1RpbWUiLCJkcmF3Qm9hcmQiLCJwbGF5TmV4dFR1cm4iLCJjbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhc0NsYXNzIiwidW5tYWtlUGxheWVyTW92ZSIsImFpTW92ZSIsInNsaWRlciIsInZhbHVlIiwidGhpbmtpbmdUaW1lIiwibWluIiwicm91bmQiLCJtYXgiLCJzdGVwIiwic2xpZGUiLCJFIiwiZm9ybWF0VGltZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwcmV2TW92ZXMiLCJjdXJyTW92ZXMiLCJnZW5lcmF0ZUxlZ2FsTW92ZXMiLCJpc1RocmVlZm9sZFJlcGV0aXRpb24iLCJzdGF0dXMiLCJpc01vdmVMaW1pdEV4Y2VlZGVkIiwiaW5DaGVjayIsInR1cm4iLCJhY3RpdmF0ZUJ0bnMiLCJzdGF0dXNFbCIsInVubWFrZVByZXZNb3ZlIiwic2hpZnRGcm9tTW92ZXNMaXN0IiwidXBkYXRlUGllY2VzIiwic2V0dXBQbGF5ZXJNb3ZlIiwibW92ZVN0ciIsIm1vdmVTdGF0cyIsImRlcHRoIiwicnVuVGltZSIsImV4cGxvcmVkUG9zaXRpb25zIiwibWFpblNlYXJjaE5vZGVzIiwicVNlYXJjaE5vZGVzIiwidFRhYmxlSGl0cyIsIm1vdmVEYXRhIiwibW92ZUl0ZW0iLCJmb3JtYXRNb3ZlIiwibW92ZSIsImNvbG9yIiwiYXBwZW5kIiwic3RhdHMiLCJwb3B1bGF0ZVN0YXRzVGFibGUiLCJtb3Zlc0hpc3RvcnkiLCJuZXdNb3ZlSXRlbSIsImNyZWF0ZU1vdmVJdGVtIiwicHJlcGVuZCIsInJlbW92ZSIsIm5ld1JvdyIsImZpbGVSYW5rIiwibmV3U3F1YXJlIiwic3F1YXJlQ29sb3IiLCJpc0RhcmtTcXVhcmUiLCJib2FyZCIsIm5ld1JhbmtSb3ciLCJyb3dzUmFua3MiLCJzbGljZSIsInJldmVyc2UiLCJnZW5lcmF0ZVNxdWFyZSIsImdlbmVyYXRlRmlsZUhlYWRlciIsInBpZWNlVHlwZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwaWVjZXMiLCJuZXdQaWVjZSIsImR1cCIsInBvcDFCaXRzIiwiaGFzU2V0Qml0IiwiZmlsZVJhbmtGcm9tUG9zIiwiYWRkVG9Nb3Zlc0xpc3QiLCJtYWtlTW92ZSIsImRlYWN0aXZhdGVCdG5zIiwicmVzZXRTdGF0dXMiLCJpc0dhbWVPdmVyIiwic2V0VGltZW91dCIsImFpTW92ZURhdGEiLCJjaG9vc2VNb3ZlIiwiYW5pbWF0ZU1vdmUiLCJwZXJmb3JtYW5jZSIsInBpZWNlRWwiLCJjYXB0T2Zmc2V0Iiwib2Zmc2V0IiwiY3NzIiwibGVmdCIsInRvcCIsImZhZGVPdXQiLCJvbGRPZmZzZXQiLCJhcHBlbmRUbyIsIm5ld09mZnNldCIsImFuaW1QaWVjZSIsImNsb25lIiwiaGlkZSIsImFuaW1hdGUiLCJzaG93IiwibW92ZXNEYXRhIiwibWFwIiwiZ2V0RGF0YSIsIm1vdmVGcm9tVG9zIiwibW92ZVRvRnJvbXMiLCJhY3RpdmF0ZURyYWdnYWJsZVBpZWNlcyIsImFjdGl2YXRlRHJvcHBhYmxlU3F1YXJlcyIsImZyb21GaWxlUmFuayIsImtleXMiLCJkcmFnZ2FibGUiLCJjb250YWlubWVudCIsInJldmVydCIsInJldmVydER1cmF0aW9uIiwibW91c2VlbnRlciIsInRvUG9zIiwibW91c2VsZWF2ZSIsImRlc3RTcSIsIm9yaWdpblNxdWFyZSIsIm9yaWdpblBvcyIsInNlbGVjdGVkTW92ZSIsImRyb3BwYWJsZSIsImFjY2VwdCIsInBhcmVudCIsImF0dHIiLCJwb3NGcm9tRmlsZVJhbmsiLCJkcm9wIiwibWFrZVBsYXllck1vdmUiLCJjaGlsZHJlbiIsInNlbGVjdGVkTW92ZXMiLCJmaWx0ZXIiLCJjcmVhdGVQcm9tb1dpbmRvdyIsInByb21vTW92ZXMiLCJwcm9tb0RpdiIsInByb21vUGllY2VzIiwiY3JlYXRlUHJvbW9QaWVjZXMiLCJwcm9tb1dpblJvdyIsIlByb21vc1BUeXBlcyIsIm5ld1Byb21vUGllY2UiLCJwcm9tb01vdmUiLCJjcmVhdGVQcm9tb1BpZWNlIiwicFR5cGUiLCJwcm9tb1BpZWNlIiwicGllY2VQb3NIYXNoS2V5cyIsImVwUG9zSGFzaEtleXMiLCJjYXN0bGVIYXNoS2V5cyIsInR1cm5IYXNoS2V5cyIsImRlZmF1bHRGZW5TdHIiLCJmZW5TdHIiLCJzcGxpdCIsInR1cm5MZXR0ZXIiLCJjYXN0bGVSaWdodHNTdHIiLCJlcFNxIiwiaGFsZk1vdmVDbG9jayIsImZ1bGxNb3ZlQ2xvY2siLCJmZW5Qb3NpdGlvbnNUb1BpZWNlQkJzIiwiY2FzdGxlUmlnaHRzIiwicGFyc2VDYXN0bGVSaWdodHNTdHIiLCJlcEJCIiwicGFyc2VFcFN0ciIsInByZXZTdGF0ZXMiLCJwVHlwZXNMb2NhdGlvbnMiLCJjcmVhdGVQVHlwZXNMb2NhdGlvbnMiLCJwUG9zSGFzaCIsImNyZWF0ZVBpZWNlc1Bvc0hhc2giLCJzdGF0ZUhhc2giLCJjcmVhdGVTdGF0ZUhhc2giLCJzZXRUdXJuIiwiZ2V0T3RoZXJDb2xvciIsInBvc2l0aW9uQ291bnRzIiwiYWRkUG9zaXRpb25Db3VudCIsInJvd1N0cnMiLCJwaWVjZUJCcyIsImNyZWF0ZUVtcHR5UGllY2VzQkJzIiwicm93U3RyIiwiY2hhciIsInRlc3QiLCJsZXR0ZXJUb1R5cGUiLCJsZXR0ZXJUb0NvbG9yIiwicmlnaHRzUG9zIiwicmlnaHRzTGV0dGVyIiwiZXBTdHIiLCJnZXRQaWVjZUF0IiwidHlwZXMiLCJpZHgiLCJ3aGl0ZXNQb3MiLCJibGFja3NQb3MiLCJjYXN0bGVSaWdodHNQb3MiLCJvcHAiLCJpbmNsdWRlUXVpZXQiLCJjaGVja05TRHJhdyIsImlzTm9uU3RhbGVtYXRlRHJhdyIsImFkZFBhd25Nb3ZlcyIsImFkZE5vcm1hbE1vdmVzIiwiYWRkS2luZ01vdmVzIiwicHNldWRvTW92ZXMiLCJnZW5lcmF0ZVBzZXVkb01vdmVzIiwiaXNMZWdhbCIsImxlZ2FscyIsInBzZXVkb01vdmUiLCJ0ZXN0TW92ZSIsInRlc3RzTGVnYWwiLCJnZXRIYXNoIiwicGF3bnNQb3MiLCJnZXRDb2xvclBpZWNlU2V0Iiwibm90T2NjdXBpZWQiLCJnZXRPY2N1cGllZCIsIm5vdCIsInBhd25TaW5nbGVQdXNoZXMiLCJzaW5nbGVQdXNoIiwiYWRkUGF3bk1vdmVTZXQiLCJwYXduRG91YmxlUHVzaGVzIiwiZG91YmxlUHVzaCIsIm9wcFBvc2l0aW9ucyIsInBhd25MZWZ0QXR0YWNrcyIsImF0dGFja3NMZWZ0IiwicGF3blJpZ2h0QXR0YWNrcyIsImF0dGFja3NSaWdodCIsImdldE5vdE9jY3VwaWVkQnkiLCJrbmlnaHRzUG9zIiwia25pZ2h0TW92ZXMiLCJhZGROb3JtYWxNb3ZlU2V0IiwiZGVzdGluYXRpb25zIiwic2xpZGluZ1R5cGUiLCJraW5nUG9zIiwibm9ybWFsTW92ZXMiLCJhZGRDYXN0bGVNb3ZlcyIsIm5ld1Bvc2l0aW9ucyIsInNoaWZ0QW10IiwiaXNDYXB0dXJlIiwiaXNEYmxQdXNoIiwiY2FwdHVyZWQiLCJEQkxfUFBVU0giLCJFUF9DQVBUIiwiUFJPTU9fTUFTS1MiLCJhZGRQcm9tb3MiLCJOT1JNQUwiLCJwcm9tb1R5cGUiLCJuZXdQb3MiLCJjYXB0VHlwZSIsInR1cm5DYXN0bGVSaWdodHMiLCJnZXRDYXN0bGVSaWdodHMiLCJJTklUX1BPUyIsImNhbkNhc3RsZSIsInNldE5ld1N0YXRlIiwiZXhlY01vdmVUeXBlIiwic3dhcFR1cm4iLCJjbGVhclBpZWNlQXQiLCJtb3ZlUGllY2UiLCJ1bmRvIiwic2V0UGllY2VBdCIsImlzTGVnYWxDYXN0bGUiLCJjYXN0bGVUeXBlIiwiaXNBdHRhY2tlZCIsInBvc0JCIiwib3BwQ29sb3IiLCJwYXducyIsInF1ZWVuQkIiLCJhZGRQcmV2U3RhdGUiLCJhZGp1c3RDYXN0bGVSaWdodHMiLCJzZXROZXdFcFN0YXRlIiwidXBkYXRlQ2xvY2siLCJzdGF0ZSIsImNsZWFyQ2FzdGxlUmlnaHRzIiwiY2xlYXJSaWdodHNQb3MiLCJjbGVhclJpZ2h0c01hc2siLCJlcFBvcyIsImNhcHR1cmVkUG9zIiwiY3Vyckhhc2giLCJwcmV2TW92ZSIsInBvcCIsInN1YnRyYWN0UG9zaXRpb25Db3VudCIsInJldmVyc2VNb3ZlVHlwZSIsInJlc3RvcmVQcmV2U3RhdGUiLCJwcmV2U3RhdGUiLCJjbGVhckJpdCIsImdlbmVyYXRlTVNCVGFibGUiLCJpbnQiLCJsb2cyIiwibW9zdFNpZ0JpdFRhYmxlIiwiRlVMTF9CT0FSRCIsImNvbHMiLCJmcm9tQ29sIiwicm93cyIsImZyb21Sb3ciLCJkaWFncyIsInVwcGVyUmlnaHREaWFnIiwiYW50aURpYWdzIiwidXBwZXJMZWZ0RGlhZyIsImJiIiwidHlwZXNBcnIiLCJJTklUX01BU0tTIiwicG9zaXRpb25WYWx1ZXMiLCJvcHBQaWVjZXMiLCJvbmVQdXNoIiwiY2FzdGxlU2xpZGUiLCJwb3BDb3VudCIsInBpZWNlVG9MZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsImxldHRlciIsInRvTG93ZXJDYXNlIiwicmFuZFNpZ25lZDMyQml0IiwicG9zaXRpdmUiLCJyYW5kb20iLCJuZXdQb3NLZXlzIiwiYWRkUFR5cGVLZXlzIiwicmlnaHRzSWR4IiwiTW92ZVNlYXJjaCIsInByZXZQZXJmb3JtYW5jZSIsImF2YWlsYWJsZU1vdmVzIiwibW92ZVNlYXJjaCIsImJlc3RNb3ZlIiwiZmluZEJlc3QiLCJwZXJmUmVzdWx0cyIsImdldFBlcmZvcm1hbmNlIiwiVHJhbnNwb3NUYWJsZSIsIlRBQkxFX1NDT1JFX1RZUEVTIiwiS2lsbGVyTW92ZUxpc3QiLCJQZXJmTW9uaXRvciIsIkVBUkxZX0VYSVQiLCJpbml0QXZhaWxhYmxlIiwidHJhbnNQb3NUYWJsZSIsImtpbGxlck1vdmVMaXN0IiwicGVyZk1vbml0b3IiLCJzZXRTdGFydFRpbWUiLCJlbmRUaW1lIiwiRGF0ZSIsIm5vdyIsIm1heERlcHRoIiwiYWRkU2xvdCIsIm5lZ2FNYXgiLCJJbmZpbml0eSIsInNldERlcHRoIiwic2V0RW5kVGltZSIsInByaW50UmVzdWx0cyIsImN1cnJOb2RlRW50cnkiLCJnZXRFbnRyeSIsImdldFJlc3VsdHMiLCJhbHBoYSIsImJldGEiLCJsb2dRdWllc2NlbnROb2RlIiwic3RhbmRQYXRWYWwiLCJldmFsdWF0ZSIsImNhbGN1bGF0ZU1vdmVPcmRlclNjb3JlIiwic2NvcmUiLCJzb3J0TW92ZXMiLCJtb3ZlSWR4IiwicXVpZXNjZW5jZVNlYXJjaCIsInByZXZBbHBoYSIsImVudHJ5IiwibG9nVGFibGVIaXQiLCJFWEFDVCIsIkxPV0VSQk9VTkQiLCJVUFBFUkJPVU5EIiwibG9nTWFpblNlYXJjaE5vZGUiLCJwcmV2QmVzdE1vdmUiLCJzaWJsaW5nS2lsbGVyTW92ZXMiLCJnZXRTaWJsaW5nTW92ZXMiLCJjYW5Nb3ZlIiwicmVzdWx0IiwiYmVzdFNjb3JlIiwic3RvcmVFbnRyeSIsImNhbGN1bGF0ZVNjb3JlIiwiY3JlYXRlTW92ZVNjb3JlcyIsInNvcnQiLCJtb3ZlQSIsIm1vdmVCIiwibW92ZVNjb3JlIiwibWF0ZXJpYWxTY29yZSIsInNjb3JlTWF0ZXJpYWwiLCJwaWVjZVBvc2l0aW9uU2NvcmUiLCJzY29yZVBpZWNlUG9zaXRpb25zIiwicGllY2VQb3NpdGlvbnMiLCJTQ09SRV9UWVBFUyIsInRhYmxlIiwia2V5IiwiZGV0ZXJtaW5lU2NvcmVUeXBlIiwibGlzdCIsIm1heFBlckxldmVsIiwiQXJyYXkiLCJkaXN0RnJvbVJvb3QiLCJ0YWJsZUhpdHMiLCJzdGFydFRpbWUiLCJwYXJzZU1vdmVTdGF0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LHdCQUplO0FBS2ZtVixnQ0FMZTtBQU1mOVc7QUFOZSxDQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYzExZjVjZDU0ODcyMDU0NDM3YyIsImNvbnN0IEJpdEJvYXJkID0gcmVxdWlyZSgnLi9iaXRib2FyZC5qcycpO1xuY29uc3QgTWFza3MgPSByZXF1aXJlKCcuL21hc2tzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCaXRCb2FyZCxcbiAgQkJNYXNrczogTWFza3MsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYml0Ym9hcmQvaW5kZXguanMiLCIvLyBjb25zdCB7IFdoaXRlUGF3bnMsIEJsYWNrUGF3bnMgfSA9IHJlcXVpcmUoJy4vcGF3bnMuanMnKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5jb25zdCBQYXducyA9IHJlcXVpcmUoJy4vcGF3bnMuanMnKTtcbmNvbnN0IEtuaWdodCA9IHJlcXVpcmUoJy4va25pZ2h0LmpzJyk7XG5jb25zdCBCaXNob3AgPSByZXF1aXJlKCcuL2Jpc2hvcC5qcycpO1xuY29uc3QgUm9vayA9IHJlcXVpcmUoJy4vcm9vay5qcycpO1xuY29uc3QgUXVlZW4gPSByZXF1aXJlKCcuL3F1ZWVuLmpzJyk7XG5jb25zdCBLaW5nID0gcmVxdWlyZSgnLi9raW5nLmpzJyk7XG5jb25zdCBQaWVjZUNvbnYgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zLmpzJyk7XG5jb25zdCBlYWNoUGllY2VUeXBlID0gcmVxdWlyZSgnLi9lYWNoX3BpZWNlX3R5cGUuanMnKTtcbmNvbnN0IERpcnMgPSByZXF1aXJlKCcuL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzJyk7XG5cbmNvbnN0IFBVdGlscyA9IHtcbiAgW0NvbnN0YW50cy5UeXBlcy5QQVdOU106IFBhd25zLFxuICBbQ29uc3RhbnRzLlR5cGVzLktOSUdIVFNdOiBLbmlnaHQsXG4gIFtDb25zdGFudHMuVHlwZXMuQklTSE9QU106IEJpc2hvcCxcbiAgW0NvbnN0YW50cy5UeXBlcy5ST09LU106IFJvb2ssXG4gIFtDb25zdGFudHMuVHlwZXMuUVVFRU5TXTogUXVlZW4sXG4gIFtDb25zdGFudHMuVHlwZXMuS0lOR1NdOiBLaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUFR5cGVzOiBDb25zdGFudHMuVHlwZXMsXG4gIENvbG9yczogQ29uc3RhbnRzLkNvbG9ycyxcbiAgUGllY2VUeXBlSFRNTDogQ29uc3RhbnRzLlBpZWNlVHlwZUhUTUwsXG4gIFBVdGlscyxcbiAgZWFjaFBpZWNlVHlwZSxcbiAgRGlycyxcbiAgUGllY2VDb252XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2luZGV4LmpzIiwiY29uc3QgQ29sb3JzID0ge1xuICBXSElURTogMCxcbiAgQkxBQ0s6IDFcbn07XG5cbmNvbnN0IFR5cGVzID0ge1xuICBQQVdOUzogMixcbiAgS05JR0hUUzogMyxcbiAgQklTSE9QUzogNCxcbiAgUk9PS1M6IDUsXG4gIFFVRUVOUzogNixcbiAgS0lOR1M6IDdcbn07XG5cbmNvbnN0IFBpZWNlVHlwZUxldHRlcnMgPSB7XG4gIFtUeXBlcy5QQVdOU106ICdwJyxcbiAgW1R5cGVzLktOSUdIVFNdOiAnbicsXG4gIFtUeXBlcy5CSVNIT1BTXTogJ2InLFxuICBbVHlwZXMuUk9PS1NdOiAncicsXG4gIFtUeXBlcy5RVUVFTlNdOiAncScsXG4gIFtUeXBlcy5LSU5HU106ICdrJyxcbn07XG5cbmNvbnN0IFBpZWNlVHlwZUhUTUwgPSB7XG4gIFtUeXBlcy5QQVdOU106ICcmIzk4MjM7JyxcbiAgW1R5cGVzLktOSUdIVFNdOiAnJiM5ODIyOycsXG4gIFtUeXBlcy5CSVNIT1BTXTogJyYjOTgyMTsnLFxuICBbVHlwZXMuUk9PS1NdOiAnJiM5ODIwOycsXG4gIFtUeXBlcy5RVUVFTlNdOiAnJiM5ODE5OycsXG4gIFtUeXBlcy5LSU5HU106ICcmIzk4MTg7Jyxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBUeXBlcywgQ29sb3JzLCBQaWVjZVR5cGVMZXR0ZXJzLCBQaWVjZVR5cGVIVE1MIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvY29uc3RhbnRzLmpzIiwiY29uc3QgRElSUyA9IHtcbiAgJ05PUlRIJzogMCxcbiAgJ1NPVVRIJzogMSxcbiAgJ0VBU1QnOiAyLFxuICAnV0VTVCc6IDMsXG4gICdOT0VBJzogNCxcbiAgJ05PV0UnOiA1LFxuICAnU09FQSc6IDYsXG4gICdTT1dFJzogN1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBESVJTO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL21vdmVtZW50cy9kaXJfY29uc3RhbnRzLmpzIiwiY29uc3QgeyBCaXRCb2FyZCwgQkJNYXNrcyB9ID0gcmVxdWlyZSgnLi4vLi4vYml0Ym9hcmQnKTtcbmNvbnN0IERpcnMgPSByZXF1aXJlKCcuL2Rpcl9jb25zdGFudHMuanMnKTtcbmNvbnN0IHN0ZXBNb3ZlID0gcmVxdWlyZSgnLi9zdGVwX21vdmUuanMnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGVwQml0Qm9hcmRzKGRpcnMpIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGxldCBwb3MgPSAwO1xuICBsZXQgaW5pdGlhbDtcbiAgbGV0IHBvc1JlcztcblxuICBjb25zdCBhZGRNb3ZlID0gKGN1cnJSZXMsIGRpcikgPT4ge1xuICAgIHJldHVybiBjdXJyUmVzLm9yKHN0ZXBNb3ZlKGluaXRpYWwsIGRpclswXSwgZGlyWzFdKSk7XG4gIH07XG5cbiAgd2hpbGUgKHBvcyA8IDY0KSB7XG4gICAgaW5pdGlhbCA9IEJpdEJvYXJkLmZyb21Qb3MocG9zKTtcbiAgICBwb3NSZXMgPSBkaXJzLnJlZHVjZSgoY3VyclJlcywgZGlyKSA9PiBhZGRNb3ZlKGN1cnJSZXMsIGRpciksIG5ldyBCaXRCb2FyZCgpKTtcbiAgICByZXMucHVzaChwb3NSZXMpO1xuICAgIHBvcysrO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuY29uc3QgS05JR0hUX01PVkVTID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpcnMgPSBbWzEsIDJdLCBbMSwgLTJdLFxuICAgICAgICAgICAgICAgIFsyLCAxXSwgWzIsIC0xXSxcbiAgICAgICAgICAgICAgICBbLTEsIDJdLCBbLTEsIC0yXSxcbiAgICAgICAgICAgICAgICBbLTIsIDFdLCBbLTIsIC0xXV07XG5cbiAgcmV0dXJuIGdlbmVyYXRlU3RlcEJpdEJvYXJkcyhkaXJzKTtcbn0oKTtcblxuY29uc3QgS0lOR19NT1ZFUyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaXJzID0gW1sxLCAwXSwgWzEsIDFdLFxuICAgICAgICAgICAgICAgIFsxLCAtMV0sWy0xLCAwXSxcbiAgICAgICAgICAgICAgICBbLTEsIDFdLCBbLTEsIC0xXSxcbiAgICAgICAgICAgICAgICBbMCwgLTFdLCBbMCwgMV1dO1xuXG4gIHJldHVybiBnZW5lcmF0ZVN0ZXBCaXRCb2FyZHMoZGlycyk7XG59KCk7XG5cbmNvbnN0IFNMSURFX01PVkVTID0gZnVuY3Rpb24oKSB7XG4gIGxldCBwb3MgPSAwO1xuICBjb25zdCByZXMgPSBbXTtcbiAgbGV0IG1vdmVzO1xuICBsZXQgY29sSWR4O1xuICBsZXQgcm93SWR4O1xuICBsZXQgZGlhZ0lkeDtcbiAgbGV0IGFudGlEaWFnSWR4O1xuXG4gIHdoaWxlIChwb3MgPCA2NCkge1xuICAgIG1vdmVzID0ge307XG4gICAgcm93SWR4ID0gTWF0aC5mbG9vcihwb3MgLyA4KTtcbiAgICBjb2xJZHggPSBwb3MgJSA4O1xuICAgIGRpYWdJZHggPSAocG9zIDwgcm93SWR4ICogOSkgPyAocG9zICUgOSkgLSAyIDogKHBvcyAlIDkpICsgNztcbiAgICBpZiAocG9zID09PSA2Mykge1xuICAgICAgYW50aURpYWdJZHggPSAxNDtcbiAgICB9IGVsc2Uge1xuICAgICAgYW50aURpYWdJZHggPSAocG9zIDwgKHJvd0lkeCArIDEpICogNykgPyAocG9zICUgNykgOiAocG9zICUgNykgKyA3O1xuICAgIH1cbiAgICBtb3Zlc1tEaXJzLk5PUlRIXSA9IEJCTWFza3MuQ09MU1tjb2xJZHhdLmFuZChCQk1hc2tzLk5PUlRIX09GX1JPV1tyb3dJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLlNPVVRIXSA9IEJCTWFza3MuQ09MU1tjb2xJZHhdLmFuZChCQk1hc2tzLlNPVVRIX09GX1JPV1tyb3dJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLkVBU1RdID0gQkJNYXNrcy5ST1dTW3Jvd0lkeF0uYW5kKEJCTWFza3MuRUFTVF9PRl9DT0xbY29sSWR4XSk7XG4gICAgbW92ZXNbRGlycy5XRVNUXSA9IEJCTWFza3MuUk9XU1tyb3dJZHhdLmFuZChCQk1hc2tzLldFU1RfT0ZfQ09MW2NvbElkeF0pO1xuICAgIG1vdmVzW0RpcnMuTk9FQV0gPSBCQk1hc2tzLkRJQUdTW2RpYWdJZHhdLmFuZChCQk1hc2tzLk5PUlRIX09GX1JPV1tyb3dJZHhdKTtcbiAgICBtb3Zlc1tEaXJzLlNPV0VdID0gQkJNYXNrcy5ESUFHU1tkaWFnSWR4XS5hbmQoQkJNYXNrcy5TT1VUSF9PRl9ST1dbcm93SWR4XSk7XG4gICAgbW92ZXNbRGlycy5OT1dFXSA9IEJCTWFza3MuQU5USV9ESUFHU1thbnRpRGlhZ0lkeF0uYW5kKEJCTWFza3MuTk9SVEhfT0ZfUk9XW3Jvd0lkeF0pO1xuICAgIG1vdmVzW0RpcnMuU09FQV0gPSBCQk1hc2tzLkFOVElfRElBR1NbYW50aURpYWdJZHhdLmFuZChCQk1hc2tzLlNPVVRIX09GX1JPV1tyb3dJZHhdKTtcbiAgICByZXMucHVzaChtb3Zlcyk7XG4gICAgcG9zKys7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgS05JR0hUX01PVkVTLFxuICBLSU5HX01PVkVTLFxuICBTTElERV9NT1ZFUyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvbW92ZW1lbnRzL21hc2tzLmpzIiwiY29uc3QgeyBCaXRCb2FyZCwgQkJNYXNrcyB9ID0gcmVxdWlyZSgnLi4vLi4vYml0Ym9hcmQnKTtcbmNvbnN0IHsgU0xJREVfTU9WRVMgfSA9IHJlcXVpcmUoJy4vbWFza3MuanMnKTtcbmNvbnN0IERpcnMgPSByZXF1aXJlKCcuL2Rpcl9jb25zdGFudHMuanMnKTtcblxuY29uc3QgaXNQb3NSYXkgPSB7XG4gIFtEaXJzLk5PUlRIXTogdHJ1ZSxcbiAgW0RpcnMuRUFTVF06IHRydWUsXG4gIFtEaXJzLk5PRUFdOiB0cnVlLFxuICBbRGlycy5OT1dFXTogdHJ1ZSxcbiAgW0RpcnMuU09VVEhdOiBmYWxzZSxcbiAgW0RpcnMuV0VTVF06IGZhbHNlLFxuICBbRGlycy5TT0VBXTogZmFsc2UsXG4gIFtEaXJzLlNPV0VdOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gZmluZFVuYmxvY2tlZChwb3MsIG9jY3VwaWVkLCBkaXIpIHtcbiAgY29uc3QgZGlyQkIgPSBTTElERV9NT1ZFU1twb3NdW2Rpcl07XG4gIGNvbnN0IGJsb2NraW5nID0gZGlyQkIuYW5kKG9jY3VwaWVkKTtcbiAgbGV0IGJsb2NraW5nUG9zO1xuXG4gIGlmIChibG9ja2luZy5pc1plcm8oKSkge1xuICAgIHJldHVybiBkaXJCQjtcbiAgfSBlbHNlIHtcbiAgICBibG9ja2luZ1BvcyA9IGlzUG9zUmF5W2Rpcl0gPyBibG9ja2luZy5iaXRTY2FuRm9yd2FyZCgpIDogYmxvY2tpbmcuYml0U2NhblJldmVyc2UoKTtcbiAgICByZXR1cm4gZGlyQkIueG9yKFNMSURFX01PVkVTW2Jsb2NraW5nUG9zXVtkaXJdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBob3JpelZlcnQocG9zLCBvY2N1cGllZCwgbm90T3duUGllY2VzKSB7XG4gIHJldHVybiBbRGlycy5OT1JUSCwgRGlycy5TT1VUSCwgRGlycy5FQVNULCBEaXJzLldFU1RdLnJlZHVjZSgocmVzLCBkaXIpID0+IHtcbiAgICByZXR1cm4gcmVzLm9yKGZpbmRVbmJsb2NrZWQocG9zLCBvY2N1cGllZCwgZGlyKSk7XG4gIH0sIG5ldyBCaXRCb2FyZCgpKS5hbmQobm90T3duUGllY2VzKTtcbn1cblxuZnVuY3Rpb24gZGlhZyhwb3MsIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpIHtcbiAgcmV0dXJuIFtEaXJzLk5PRUEsIERpcnMuTk9XRSwgRGlycy5TT0VBLCBEaXJzLlNPV0VdLnJlZHVjZSgocmVzLCBkaXIpID0+IHtcbiAgICByZXR1cm4gcmVzLm9yKGZpbmRVbmJsb2NrZWQocG9zLCBvY2N1cGllZCwgZGlyKSk7XG4gIH0sIG5ldyBCaXRCb2FyZCgpKS5hbmQobm90T3duUGllY2VzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhvcml6VmVydCxcbiAgZGlhZ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9tb3ZlbWVudHMvc2xpZGVfbW92ZXMuanMiLCJjb25zdCBJbnQzMlV0aWxzID0gcmVxdWlyZSgnLi9pbnQzMlV0aWxzLmpzJyk7XG4vLyBBIHN0YW5kYXJkIDh4OCBjaGVzcyBib2FyZCBjYW4gYmUgcmVwcmVzZW50ZWQgYnkgYSA2NGJpdCBpbnRlZ2VyIChiaXRib2FyZCksXG4vLyBpbiB3aGljaCBhIDEgbWVhbnMgdGhlIHBvc2l0aW9uIGlzIG9jY3VwaWVkLCBhIDAgbWVhbnMgaXQncyBlbXB0eVxuXG4vLyBXZSB1c2Ugc2V2ZXJhbCBvZiB0aGVzZSBiaXRib2FyZHMgdG8gcmVwcmVzZW50IGEgY2hlc3MgcG9zaXRpb25cbi8vIGZvciBleGFtcGxlLCB0aGUgY3VycmVudCBzZXQgb2YgcGllY2VzIGlzIHJlcHJlc2VudGVkIGJ5IGEgYml0Ym9hcmRcbi8vIGZvciBlYWNoIHBpZWNlIHR5cGUgYW5kIGNvbG9yXG5cbi8vIFNpbmNlIEphdmFzY3JpcHQgZG9lc24ndCBzdXBwb3J0IGJpdHdpc2Ugb3BlcmF0aW9ucyBmb3IgNjRiaXQgaW50ZWdlcnMsXG4vLyB3ZSBpbXBsZW1lbnQgbW9zdCBvZiB0aG9zZSBvcGVyYXRpb25zIGhlcmUsIHNlcGFyYXRpbmcgdGhlIDY0Yml0IGludFxuLy8gaW50byBpdHMgbG93IDMyYml0IGFuZCBoaWdoIDMyYml0IGNvbXBvbmVudHNcblxuLy81NiA1NyA1OCA1OSA2MCA2MSA2MiA2M1xuLy80OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSAgXlxuLy80MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyAgfFxuLy8zMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSBISUdIXG4vLzI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIExPV1xuLy8xNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAgfFxuLy8gOCAgOSAxMCAxMSAxMiAxMyAxNCAxNSAgdlxuLy8gMCAgMSAgMiAgMyAgNCAgNSAgNiAgN1xuXG5jbGFzcyBCaXRCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGxvdywgaGlnaCkge1xuICAgIHRoaXMubG93ID0gKGxvdyB8fCAwKSA+Pj4gMDtcbiAgICB0aGlzLmhpZ2ggPSAoaGlnaCB8fCAwKSA+Pj4gMDtcbiAgfVxuXG4gIGFuZChvdGhlcikge1xuICAgIHJldHVybiBuZXcgQml0Qm9hcmQodGhpcy5sb3cgJiBvdGhlci5sb3csIHRoaXMuaGlnaCAmIG90aGVyLmhpZ2gpO1xuICB9XG5cbiAgb3Iob3RoZXIpIHtcbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKHRoaXMubG93IHwgb3RoZXIubG93LCB0aGlzLmhpZ2ggfCBvdGhlci5oaWdoKTtcbiAgfVxuXG4gIHhvcihvdGhlcikge1xuICAgIHJldHVybiBuZXcgQml0Qm9hcmQodGhpcy5sb3cgXiBvdGhlci5sb3csIHRoaXMuaGlnaCBeIG90aGVyLmhpZ2gpO1xuICB9XG5cbiAgbm90KCkge1xuICAgIHJldHVybiBuZXcgQml0Qm9hcmQofnRoaXMubG93LCB+dGhpcy5oaWdoKTtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAodGhpcy5sb3cgPT09IG90aGVyLmxvdyAmJiB0aGlzLmhpZ2ggPT09IG90aGVyLmhpZ2gpO1xuICB9XG5cbiAgZ3JlYXRlclRoYW4ob3RoZXIpIHtcbiAgICByZXR1cm4gKHRoaXMuaGlnaCA+IG90aGVyLmhpZ2ggfHwgdGhpcy5sb3cgPiBvdGhlci5sb3cpO1xuICB9XG5cbiAgbGVzc1RoYW4ob3RoZXIpIHtcbiAgICByZXR1cm4gKHRoaXMuaGlnaCA8IG90aGVyLmhpZ2ggfHwgdGhpcy5sb3cgPCBvdGhlci5sb3cpO1xuICB9XG5cbiAgaXNaZXJvKCkge1xuICAgIHJldHVybiAodGhpcy5oaWdoID09PSAwICYmIHRoaXMubG93ID09PSAwKTtcbiAgfVxuXG4gIHNoaWZ0UmlnaHQobnVtQml0cykge1xuICAgIGxldCBuZXdMb3dCaXRzLCBuZXdIaWdoQml0cztcblxuICAgIGlmIChudW1CaXRzIDw9IDApIHtcbiAgICAgIHJldHVybiBuZXcgQml0Qm9hcmQodGhpcy5sb3csIHRoaXMuaGlnaCk7XG4gICAgfSBlbHNlIGlmIChudW1CaXRzID4gNjMpIHtcbiAgICAgIHJldHVybiBuZXcgQml0Qm9hcmQoKTtcbiAgICB9IGVsc2UgaWYgKG51bUJpdHMgPj0gMzIpIHtcbiAgICAgIG5ld0xvd0JpdHMgPSB0aGlzLmhpZ2ggPj4+IChudW1CaXRzIC0gMzIpO1xuICAgICAgbmV3SGlnaEJpdHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMb3dCaXRzID0gKHRoaXMubG93ID4+PiBudW1CaXRzKSB8ICh0aGlzLmhpZ2ggPDwgKDMyIC0gbnVtQml0cykpO1xuICAgICAgbmV3SGlnaEJpdHMgPSB0aGlzLmhpZ2ggPj4+IG51bUJpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZChuZXdMb3dCaXRzLCBuZXdIaWdoQml0cyk7XG4gIH1cblxuICBzaGlmdExlZnQobnVtQml0cykge1xuICAgIGxldCBuZXdMb3dCaXRzLCBuZXdIaWdoQml0cztcblxuICAgIGlmIChudW1CaXRzIDw9IDApIHtcbiAgICAgIHJldHVybiBuZXcgQml0Qm9hcmQodGhpcy5sb3csIHRoaXMuaGlnaCk7XG4gICAgfSBlbHNlIGlmIChudW1CaXRzID4gNjMpIHtcbiAgICAgIHJldHVybiBuZXcgQml0Qm9hcmQoKTtcbiAgICB9IGVsc2UgaWYgKG51bUJpdHMgPj0gMzIpIHtcbiAgICAgIG5ld0xvd0JpdHMgPSAwO1xuICAgICAgbmV3SGlnaEJpdHMgPSAodGhpcy5sb3cgPDwgKG51bUJpdHMgLSAzMikpID4+PiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMb3dCaXRzID0gKHRoaXMubG93IDw8IG51bUJpdHMpID4+PiAwO1xuICAgICAgbmV3SGlnaEJpdHMgPSAgKCh0aGlzLmxvdyA+Pj4gKDMyIC0gbnVtQml0cykpIHwgKHRoaXMuaGlnaCA8PCBudW1CaXRzKSkgPj4+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBCaXRCb2FyZChuZXdMb3dCaXRzLCBuZXdIaWdoQml0cyk7XG4gIH1cblxuICBwb3BDb3VudCgpIHtcbiAgICAgIHJldHVybiBbdGhpcy5sb3csIHRoaXMuaGlnaF0ucmVkdWNlKChjb3VudCwgaW50MzIpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvdW50ICsgSW50MzJVdGlscy5wb3BDb3VudDMyKGludDMyKTtcbiAgICAgIH0sIDApO1xuICB9XG5cbiAgc2V0Qml0KHBvcykge1xuICAgIGlmIChwb3MgPj0gMzIgJiYgcG9zIDwgNjQpIHtcbiAgICAgIHRoaXMuaGlnaCA9ICh0aGlzLmhpZ2ggfCAoMSA8PCAocG9zIC0gMzIpKSkgPj4+IDA7XG4gICAgfSBlbHNlIGlmIChwb3MgPj0gMCAmJiBwb3MgPCAzMikge1xuICAgICAgdGhpcy5sb3cgPSAodGhpcy5sb3cgfCAoMSA8PCBwb3MpKSA+Pj4gMDtcbiAgICB9XG4gIH1cblxuICBjbGVhckJpdChwb3MpIHtcbiAgICBpZiAocG9zID49IDMyKSB7XG4gICAgICB0aGlzLmhpZ2ggPSAodGhpcy5oaWdoICYgfigxIDw8IChwb3MgLSAzMikpKSA+Pj4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb3cgPSAodGhpcy5sb3cgJiB+KDEgPDwgcG9zKSkgPj4+IDA7XG4gICAgfVxuICB9XG5cbiAgYml0U2NhbkZvcndhcmQoKSB7XG4gICAgaWYgKHRoaXMubG93KSB7XG4gICAgICByZXR1cm4gSW50MzJVdGlscy5iaXRTY2FuRm9yd2FyZDMyKHRoaXMubG93KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGlnaCkge1xuICAgICAgcmV0dXJuIEludDMyVXRpbHMuYml0U2NhbkZvcndhcmQzMih0aGlzLmhpZ2gpICsgMzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGhhc1NldEJpdChwb3MpIHtcbiAgICBpZiAocG9zIDwgMzIpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubG93ICYgKDEgPDwgcG9zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaGlnaCAmICgxIDw8IChwb3MgLSAzMikpKTtcbiAgICB9XG4gIH1cblxuICBiaXRTY2FuUmV2ZXJzZSgpIHtcbiAgICBpZiAodGhpcy5oaWdoKSB7XG4gICAgICByZXR1cm4gSW50MzJVdGlscy5iaXRTY2FuUmV2ZXJzZTMyKHRoaXMuaGlnaCkgKyAzMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG93KSB7XG4gICAgICByZXR1cm4gSW50MzJVdGlscy5iaXRTY2FuUmV2ZXJzZTMyKHRoaXMubG93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcG9wMUJpdHMoY2IpIHtcbiAgICB3aGlsZSAodGhpcy5sb3cpIHtcbiAgICAgIGNiKEludDMyVXRpbHMuYml0U2NhbkZvcndhcmQzMih0aGlzLmxvdykpO1xuICAgICAgdGhpcy5sb3cgPSBJbnQzMlV0aWxzLmNsZWFyTGVhc3RTaWdCaXQzMih0aGlzLmxvdyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRoaXMuaGlnaCkge1xuICAgICAgY2IoSW50MzJVdGlscy5iaXRTY2FuRm9yd2FyZDMyKHRoaXMuaGlnaCkgKyAzMik7XG4gICAgICB0aGlzLmhpZ2ggPSBJbnQzMlV0aWxzLmNsZWFyTGVhc3RTaWdCaXQzMih0aGlzLmhpZ2gpO1xuICAgIH1cbiAgfVxuXG4gIGR1cCgpIHtcbiAgICByZXR1cm4gbmV3IEJpdEJvYXJkKHRoaXMubG93LCB0aGlzLmhpZ2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3MocG9zKSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEJpdEJvYXJkKCk7XG4gICAgcmVzLnNldEJpdChwb3MpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBCaXRCb2FyZCgpO1xuXG4gICAgcG9zaXRpb25zLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgcmVzLnNldEJpdChwb3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29sKGNvbE51bSkge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBCaXRCb2FyZCgpO1xuICAgIGlmIChjb2xOdW0gPCAwIHx8IGNvbE51bSA+IDcpIHsgcmV0dXJuIHJlczsgfVxuICAgIGxldCBwb3MgPSBjb2xOdW07XG5cbiAgICB3aGlsZSAocG9zIDwgNjQpIHtcbiAgICAgIHJlcy5zZXRCaXQocG9zKTtcbiAgICAgIHBvcyArPSA4O1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvdyhyb3dOdW0pIHtcbiAgICBjb25zdCByZXMgPSBuZXcgQml0Qm9hcmQoKTtcbiAgICBpZiAocm93TnVtIDwgMCB8fCByb3dOdW0gPiA3KSB7IHJldHVybiByZXM7IH1cblxuICAgIGxldCBwb3MgPSByb3dOdW0gKiA4O1xuICAgIGxldCBwb3NNYXggPSBwb3MgKyA3O1xuXG4gICAgd2hpbGUgKHBvcyA8PSBwb3NNYXgpIHtcbiAgICAgIHJlcy5zZXRCaXQocG9zKTtcbiAgICAgIHBvcysrO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzdGF0aWMgdXBwZXJSaWdodERpYWcoc3RhcnRQb3MpIHtcbiAgICBjb25zdCByZXMgPSBCaXRCb2FyZC5mcm9tUG9zKHN0YXJ0UG9zKTtcbiAgICBpZiAoc3RhcnRQb3MgPCAwIHx8IHN0YXJ0UG9zID4gNjMpIHsgcmV0dXJuIHJlczsgfVxuICAgIGxldCBwb3MgPSBzdGFydFBvcyArIDk7XG5cbiAgICB3aGlsZSAocG9zIDwgNjQgJiYgcG9zICUgOCAhPT0gMCkge1xuICAgICAgcmVzLnNldEJpdChwb3MpO1xuICAgICAgcG9zICs9IDk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHN0YXRpYyB1cHBlckxlZnREaWFnKHN0YXJ0UG9zKSB7XG4gICAgY29uc3QgcmVzID0gbmV3IEJpdEJvYXJkKCk7XG4gICAgaWYgKHN0YXJ0UG9zIDwgMCB8fCBzdGFydFBvcyA+IDYzKSB7IHJldHVybiByZXM7IH1cbiAgICBsZXQgcG9zID0gc3RhcnRQb3M7XG5cbiAgICB3aGlsZSAocG9zIDwgNjQgJiYgcG9zICUgOCAhPT0gMCkge1xuICAgICAgcmVzLnNldEJpdChwb3MpO1xuICAgICAgcG9zICs9IDc7XG4gICAgfVxuXG4gICAgaWYgKHBvcyA8IDY0KSB7XG4gICAgICByZXMuc2V0Qml0KHBvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcm93ID0gJyc7XG4gICAgbGV0IHBvdyA9IDYzO1xuICAgIGxldCBwb3NWYWw7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLScpO1xuICAgIHdoaWxlIChwb3cgPj0gMzIpIHtcbiAgICAgIHBvc1ZhbCA9IChNYXRoLnBvdygyLCBwb3cgLSAzMikgJiB0aGlzLmhpZ2gpID09PSAwID8gJzAnIDogJzEnO1xuICAgICAgcm93ID0gcG9zVmFsICsgcm93O1xuICAgICAgaWYgKHJvdy5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgY29uc29sZS5sb2cocm93KTtcbiAgICAgICAgcm93ID0gJyc7XG4gICAgICB9XG4gICAgICBwb3ctLTtcbiAgICB9XG5cbiAgICB3aGlsZSAocG93ID49IDApIHtcbiAgICAgIHBvc1ZhbCA9IChNYXRoLnBvdygyLCBwb3cpICYgdGhpcy5sb3cpID09PSAwID8gJzAnIDogJzEnO1xuICAgICAgcm93ID0gcG9zVmFsICsgcm93O1xuICAgICAgaWYgKHJvdy5sZW5ndGggPT09IDgpIHtcbiAgICAgICAgY29uc29sZS5sb2cocm93KTtcbiAgICAgICAgcm93ID0gJyc7XG4gICAgICB9XG4gICAgICBwb3ctLTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJy0tLS0tLScpO1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRCb2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2JpdGJvYXJkL2JpdGJvYXJkLmpzIiwiY29uc3QgeyBUeXBlcyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuY2xhc3MgTW92ZSB7XG4gIGNvbnN0cnVjdG9yKGZyb20sIHRvLCB0eXBlLCBwaWVjZSwgY2FwdFBpZWNlKSB7XG4gICAgdGhpcy52YWwgPSAoKCh0eXBlICYgMHhmKSA8PCAxOCkgPj4+IDApIHxcbiAgICAgICAgICAgICAgICgoKChjYXB0UGllY2UgfHwgMCkgJiAweDcpIDw8IDE1KSA+Pj4gMCkgfFxuICAgICAgICAgICAgICAgKCgocGllY2UgJiAweDcpIDw8IDEyKSA+Pj4gMCkgfFxuICAgICAgICAgICAgICAgKCgoZnJvbSAmIDB4M2YpIDw8IDYpID4+PiAwKSB8XG4gICAgICAgICAgICAgICAoKHRvICYgMHgzZikgPj4+IDApID4+PiAwO1xuICB9XG5cbiAgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgc3RhdGljIGZyb21WYWwodmFsKSB7XG4gICAgY29uc3QgbmV3TW92ZSA9IG5ldyBNb3ZlKDAsIDAsIDAsIDAsIDApO1xuICAgIG5ld01vdmUudmFsID0gdmFsO1xuICAgIHJldHVybiBuZXdNb3ZlO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogdGhpcy5nZXRGcm9tKCksXG4gICAgICB0bzogdGhpcy5nZXRUbygpLFxuICAgICAgdHlwZTogdGhpcy5nZXRUeXBlKCksXG4gICAgICBwaWVjZVR5cGU6IHRoaXMuZ2V0UGllY2UoKSxcbiAgICAgIGNhcHRQaWVjZVR5cGU6IHRoaXMuZ2V0Q2FwdFBpZWNlKCksXG4gICAgICBpc1Byb21vOiB0aGlzLmlzUHJvbW8oKSxcbiAgICAgIGlzQ2FzdGxlOiB0aGlzLmlzQ2FzdGxlKClcbiAgICB9O1xuICB9XG5cbiAgZ2V0RnJvbSgpIHtcbiAgICByZXR1cm4gKHRoaXMudmFsID4+PiA2KSAmIDB4M2Y7XG4gIH1cblxuICBnZXRUbygpIHtcbiAgICByZXR1cm4gdGhpcy52YWwgJiAweDNmO1xuICB9XG5cbiAgZ2V0UGllY2UoKSB7XG4gICAgcmV0dXJuICh0aGlzLnZhbCA+Pj4gMTIpICYgMHg3O1xuICB9XG5cbiAgZ2V0Q2FwdFBpZWNlKCkge1xuICAgIHJldHVybiAodGhpcy52YWwgPj4+IDE1KSAmIDB4NztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsID4+PiAxODtcbiAgfVxuXG4gIGlzUHJvbW8oKSB7XG4gICAgcmV0dXJuIFtUeXBlcy5OUFJPTU8sIFR5cGVzLkJQUk9NTyxcbiAgICAgICAgICAgIFR5cGVzLlJQUk9NTywgVHlwZXMuUVBST01PXS5pbmNsdWRlcyh0aGlzLmdldFR5cGUoKSk7XG4gIH1cblxuICBpc0Nhc3RsZSgpIHtcbiAgICByZXR1cm4gW1R5cGVzLkNTVExfS0lORywgVHlwZXMuQ1NUTF9RVUVFTl0uaW5jbHVkZXModGhpcy5nZXRUeXBlKCkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBNb3ZlLCBNb3ZlVHlwZXM6IFR5cGVzIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tb3ZlL2luZGV4LmpzIiwiY29uc3QgeyBCaXRCb2FyZCwgQkJNYXNrcyB9ID0gcmVxdWlyZSgnLi4vLi4vYml0Ym9hcmQnKTtcblxuZnVuY3Rpb24gc3RlcE1vdmUoaW5pdGlhbCwgbm9TbywgZWFXZSkge1xuICBsZXQgcG9zaXRpb25zID0gaW5pdGlhbDtcblxuICBpZiAobm9TbyA+IDApIHtcbiAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnMuc2hpZnRMZWZ0KG5vU28gKiA4KTtcbiAgfSBlbHNlIGlmIChub1NvIDwgMCl7XG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zLnNoaWZ0UmlnaHQobm9TbyAqIC04KTtcbiAgfVxuXG4gIGlmIChlYVdlID4gMCkge1xuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5zaGlmdExlZnQoZWFXZSkuYW5kKEJCTWFza3MuRUFTVF9PRl9DT0xbZWFXZSAtIDFdKTtcbiAgfSBlbHNlIGlmIChlYVdlIDwgMCl7XG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zLnNoaWZ0UmlnaHQoLWVhV2UpLmFuZChCQk1hc2tzLldFU1RfT0ZfQ09MW2VhV2UgKyA4XSk7XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb25zO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0ZXBNb3ZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL21vdmVtZW50cy9zdGVwX21vdmUuanMiLCJjb25zdCBDb2xzRmlsZXMgPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCddO1xuXG5jb25zdCBGaWxlc0NvbHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIENvbHNGaWxlcy5yZWR1Y2UoKHJlcywgZmlsZSwgY29sKSA9PiB7XG4gICAgcmVzW2ZpbGVdID0gY29sO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn0oKTtcblxuY29uc3QgUm93c1JhbmtzID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnXTtcblxuY29uc3QgUmFua3NSb3dzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBSb3dzUmFua3MucmVkdWNlKChyZXMsIHJhbmssIHJvdykgPT4ge1xuICAgIHJlc1tyYW5rXSA9IHJvdztcbiAgICByZXR1cm4gcmVzO1xuICB9LCB7fSk7XG59KCk7XG5cbmNvbnN0IEdhbWVTdGF0dXMgPSB7XG4gIFRocmVlRm9sZFJlcDogJ0RyYXcgLSBUaHJlZWZvbGQgUmVwZXRpdGlvbicsXG4gIE1vdmVMaW1pdEV4YzogJ0RyYXcgLSBNb3ZlIExpbWl0IEV4Y2VlZGVkICg1MCknLFxuICBDaGVja21hdGU6ICdDaGVja21hdGUnLFxuICBTdGFsZW1hdGU6ICdTdGFsZW1hdGUnLFxuICBQbGF5ZXJUdXJuOiAnUGxheWVyIFR1cm4nLFxuICBBSVR1cm46ICdBSSBUdXJuJ1xufTtcblxuY29uc3QgU2VsZWN0b3JzID0ge1xuICBCT0FSRF9JRDogXCIjYm9hcmRcIixcbiAgUElFQ0VfQ0xBU1M6ICdwaWVjZScsXG4gIFNRVUFSRV9DTEFTUzogJ3NxdWFyZScsXG4gIFJBTktfQ0xBU1M6ICdyYW5rJyxcbiAgRklMRV9DTEFTUzogJ2ZpbGUnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgQ29sc0ZpbGVzLCBGaWxlc0NvbHMsIFJvd3NSYW5rcywgUmFua3NSb3dzLCBTZWxlY3RvcnMsIEdhbWVTdGF0dXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3VpL2NvbnN0YW50cy5qcyIsImNvbnN0IFVJID0gcmVxdWlyZSgnLi91aScpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgY29uc3QgdWkgPSBuZXcgVUkoKTtcbiAgdWkucnVuKCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsImNvbnN0IFBvc2l0aW9uID0gcmVxdWlyZSgnLi4vcG9zaXRpb24nKTtcbmNvbnN0IEFJID0gcmVxdWlyZSgnLi4vYWknKTtcbmNvbnN0IHsgUFR5cGVzLCBDb2xvcnMsIFBpZWNlVHlwZUhUTUwgfSA9IHJlcXVpcmUoJy4uL3BpZWNlcycpO1xuY29uc3QgeyBNb3ZlVHlwZXMgfSA9IHJlcXVpcmUoJy4uL21vdmUnKTtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKCcuL3V0aWwuanMnKTtcbmNvbnN0IHsgQ29sc0ZpbGVzLCBGaWxlc0NvbHMsXG4gICAgICAgIFJvd3NSYW5rcywgUmFua3NSb3dzLFxuICAgICAgICBTZWxlY3RvcnMsIEdhbWVTdGF0dXMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5haSA9IG5ldyBBSSgpO1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHRoaXMuc2V0dXBCdXR0b25zKCk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgJCgnI2JvYXJkJykuZW1wdHkoKTtcbiAgICAkKCcjbW92ZS1oaXN0b3J5JykuZW1wdHkoKTtcbiAgICAkKCcuYWktc3RhdHMtaGVhZGVyJykudGV4dChgQUkgU3RhdHNgKTtcbiAgICAkKCcubW92ZS1zdGF0cyB0ZCcpLmVtcHR5KCk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbigpO1xuICAgIGNvbnN0IHBsYXllckNvbG9yID0gJCgnaW5wdXRbbmFtZT1cImNvbG9yLW9wdGlvblwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgdGhpcy5wbGF5ZXJDb2xvciA9IHBhcnNlSW50KHBsYXllckNvbG9yKTtcbiAgICBjb25zdCBhaVRoaW5raW5nVGltZSA9IHBhcnNlRmxvYXQoJCgnI2FpLXRpbWUtdmFsJykudGV4dCgpKSAqIDEwMDA7XG4gICAgdGhpcy5haS5zZXRUaGlua2luZ1RpbWUoYWlUaGlua2luZ1RpbWUpO1xuICAgIHRoaXMuZHJhd0JvYXJkKCk7XG4gICAgdGhpcy5wbGF5TmV4dFR1cm4oKTtcbiAgfVxuXG4gIHNldHVwQnV0dG9ucygpIHtcbiAgICAkKCcjdW5tYWtlJykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy51bm1ha2VQbGF5ZXJNb3ZlKCk7XG4gICAgICAgIHRoaXMucGxheU5leHRUdXJuKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjYXV0bycpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgaWYgKCQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuYWlNb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjYWktdGltZS1zbGlkZXInKS5zbGlkZXIoe1xuICAgICAgdmFsdWU6IHRoaXMuYWkudGhpbmtpbmdUaW1lIC8gMTAwMCxcbiAgICAgIG1pbjogTWF0aC5yb3VuZChNYXRoLmxvZyguMDEpICogMTAwMCkgLyAxMDAwLFxuICAgICAgbWF4OiBNYXRoLnJvdW5kKE1hdGgubG9nKDMwKSAqIDEwMDApIC8gMTAwMCxcbiAgICAgIHN0ZXA6IDAuMDEsXG4gICAgICBzbGlkZTogKGV2ZW50LCB1aSkgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSBNYXRoLnJvdW5kKE1hdGgucG93KE1hdGguRSwgdWkudmFsdWUpICogMTAwMCk7XG4gICAgICAgICQoJyNhaS10aW1lLXZhbCcpLnRleHQoVXRpbC5mb3JtYXRUaW1lKHZhbCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI25ldy1nYW1lJykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI2FpLXRpbWUtdmFsJykudGV4dChVdGlsLmZvcm1hdFRpbWUodGhpcy5haS50aGlua2luZ1RpbWUpKTtcbiAgfVxuXG4gIGRlYWN0aXZhdGVCdG5zKCkge1xuICAgICQoJy5jbGlja2FibGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIH1cblxuICBhY3RpdmF0ZUJ0bnMoKSB7XG4gICAgJCgnLmNsaWNrYWJsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi5wcmV2TW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAkKCcjdW5tYWtlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0U3RhdHVzKCkge1xuICAgIHRoaXMuY3Vyck1vdmVzID0gdGhpcy5wb3NpdGlvbi5nZW5lcmF0ZUxlZ2FsTW92ZXMoKTtcblxuICAgIGlmICh0aGlzLmN1cnJNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLmlzVGhyZWVmb2xkUmVwZXRpdGlvbigpKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5UaHJlZUZvbGRSZXA7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24uaXNNb3ZlTGltaXRFeGNlZWRlZCgpKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5Nb3ZlTGltaXRFeGM7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24uaW5DaGVjayh0aGlzLnBvc2l0aW9uLnR1cm4pKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5DaGVja21hdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEdhbWVTdGF0dXMuU3RhbGVtYXRlO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmF0ZUJ0bnMoKTtcbiAgICAgICQoJyNhdXRvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi50dXJuID09PSB0aGlzLnBsYXllckNvbG9yKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gR2FtZVN0YXR1cy5QbGF5ZXJUdXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBHYW1lU3RhdHVzLkFJVHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXNFbCA9ICQoJy5zdGF0dXMtaGVhZGVyJyk7XG5cbiAgICBzdGF0dXNFbC50ZXh0KHRoaXMuc3RhdHVzKTtcbiAgfVxuXG4gIHVubWFrZVBsYXllck1vdmUoKSB7XG4gICAgdGhpcy5wb3NpdGlvbi51bm1ha2VQcmV2TW92ZSgpO1xuICAgIHRoaXMuc2hpZnRGcm9tTW92ZXNMaXN0KCk7XG4gICAgaWYgKHRoaXMucG9zaXRpb24udHVybiAhPT0gdGhpcy5wbGF5ZXJDb2xvcikge1xuICAgICAgdGhpcy5wb3NpdGlvbi51bm1ha2VQcmV2TW92ZSgpO1xuICAgICAgdGhpcy5zaGlmdEZyb21Nb3Zlc0xpc3QoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5TmV4dFR1cm4oKSB7XG4gICAgdGhpcy51cGRhdGVQaWVjZXMoKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnR1cm4gPT09IHRoaXMucGxheWVyQ29sb3IpIHtcbiAgICAgIHRoaXMuc2V0dXBQbGF5ZXJNb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWlNb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgcG9wdWxhdGVTdGF0c1RhYmxlKG1vdmVTdHIsIG1vdmVTdGF0cykge1xuICAgICQoJy5haS1zdGF0cy1oZWFkZXInKS50ZXh0KGBBSSBTdGF0cyAoJHttb3ZlU3RyfSlgKTtcbiAgICAkKCcuZGVwdGgtc3RhdCcpLnRleHQobW92ZVN0YXRzLmRlcHRoKTtcbiAgICAkKCcucnVudGltZS1zdGF0JykudGV4dChtb3ZlU3RhdHMucnVuVGltZSB8fCAnTi9BJyk7XG4gICAgJCgnLmV4cGxvcmVkLXN0YXQnKS50ZXh0KG1vdmVTdGF0cy5leHBsb3JlZFBvc2l0aW9ucyk7XG4gICAgJCgnLm1haW4tc2VhcmNoLXN0YXQnKS50ZXh0KG1vdmVTdGF0cy5tYWluU2VhcmNoTm9kZXMpO1xuICAgICQoJy5xc2VhcmNoLXN0YXQnKS50ZXh0KG1vdmVTdGF0cy5xU2VhcmNoTm9kZXMpO1xuICAgICQoJy50dGFibGUtaGl0LXN0YXQnKS50ZXh0KG1vdmVTdGF0cy50VGFibGVIaXRzKTtcbiAgfVxuXG4gIGNyZWF0ZU1vdmVJdGVtKG1vdmVEYXRhKSB7XG4gICAgY29uc3QgbW92ZUl0ZW0gPSAkKCc8dHIgY2xhc3M9XCJtb3ZlLWl0ZW1cIj48L3RyPicpO1xuICAgIGNvbnN0IG1vdmVTdHIgPSBVdGlsLmZvcm1hdE1vdmUobW92ZURhdGEubW92ZSwgbW92ZURhdGEuY29sb3IpO1xuXG4gICAgbW92ZUl0ZW0uYXBwZW5kKCQoYDx0ZCBjbGFzcz1cIm1vdmUtc3RyXCI+JHttb3ZlU3RyfTwvdGQ+YCkpO1xuXG4gICAgaWYgKG1vdmVEYXRhLnN0YXRzKSB7XG4gICAgICBtb3ZlSXRlbS5hZGRDbGFzcygnc3RhdHMtdmlldy1saW5rIGNsaWNrYWJsZScpO1xuICAgICAgbW92ZUl0ZW0uY2xpY2soKCkgPT4gdGhpcy5wb3B1bGF0ZVN0YXRzVGFibGUobW92ZVN0ciwgbW92ZURhdGEuc3RhdHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZUl0ZW07XG4gIH1cblxuICBhZGRUb01vdmVzTGlzdChtb3ZlRGF0YSkge1xuICAgIGNvbnN0IG1vdmVzSGlzdG9yeSA9ICQoJyNtb3ZlLWhpc3RvcnknKTtcbiAgICBjb25zdCBuZXdNb3ZlSXRlbSA9IHRoaXMuY3JlYXRlTW92ZUl0ZW0obW92ZURhdGEpO1xuICAgIG1vdmVzSGlzdG9yeS5wcmVwZW5kKG5ld01vdmVJdGVtKTtcbiAgfVxuXG4gIHNoaWZ0RnJvbU1vdmVzTGlzdCgpIHtcbiAgICAkKFwiLm1vdmUtaXRlbTpmaXJzdFwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIGdlbmVyYXRlRmlsZUhlYWRlcigpIHtcbiAgICBjb25zdCBuZXdSb3cgPSAkKCc8dHI+PC90cj4nKTtcbiAgICBuZXdSb3cuYXBwZW5kKGA8dGg+YCk7XG4gICAgQ29sc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIG5ld1Jvdy5hcHBlbmQoYDx0aCBjbGFzcz1cImZpbGVcIj4ke2ZpbGV9PC90aD5gKTtcbiAgICB9KTtcbiAgICBuZXdSb3cuYXBwZW5kKGA8dGg+YCk7XG5cbiAgICByZXR1cm4gbmV3Um93O1xuICB9XG5cbiAgZ2VuZXJhdGVTcXVhcmUoZmlsZSwgcmFuaykge1xuICAgIGNvbnN0IGZpbGVSYW5rID0gZmlsZSArIHJhbms7XG5cbiAgICBjb25zdCBuZXdTcXVhcmUgPSAkKGA8dGQgaWQ9XCIke2ZpbGVSYW5rfVwiPjwvdGQ+YCk7XG5cbiAgICBjb25zdCBzcXVhcmVDb2xvciA9IFV0aWwuaXNEYXJrU3F1YXJlKGZpbGVSYW5rKSA/ICdkYXJrJyA6ICdsaWdodCc7XG4gICAgbmV3U3F1YXJlLmFkZENsYXNzKHNxdWFyZUNvbG9yICsgXCIgc3F1YXJlXCIpO1xuXG4gICAgcmV0dXJuIG5ld1NxdWFyZTtcbiAgfVxuXG4gIGRyYXdCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9ICQoJyNib2FyZCcpO1xuXG4gICAgbGV0IG5ld1JhbmtSb3c7XG4gICAgY29uc3Qgcm93c1JhbmtzID0gdGhpcy5wbGF5ZXJDb2xvciA9PT0gQ29sb3JzLldISVRFID8gUm93c1JhbmtzIDogUm93c1JhbmtzLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIHJvd3NSYW5rcy5mb3JFYWNoKChyYW5rKSA9PiB7XG4gICAgICBuZXdSYW5rUm93ID0gJCgnPHRyPicpO1xuICAgICAgbmV3UmFua1Jvdy5hcHBlbmQoYDx0aCBjbGFzcz1cInJhbmtcIj4ke3Jhbmt9PC90aD5gKTtcbiAgICAgIENvbHNGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgIG5ld1JhbmtSb3cuYXBwZW5kKHRoaXMuZ2VuZXJhdGVTcXVhcmUoZmlsZSwgcmFuaykpO1xuICAgICAgfSk7XG4gICAgICBuZXdSYW5rUm93LmFwcGVuZChgPHRoIGNsYXNzPVwicmFua1wiPiR7cmFua308L3RoPmApO1xuICAgICAgYm9hcmQucHJlcGVuZChuZXdSYW5rUm93KTtcbiAgICB9KTtcblxuICAgIGJvYXJkLnByZXBlbmQodGhpcy5nZW5lcmF0ZUZpbGVIZWFkZXIoKSk7XG4gICAgYm9hcmQuYXBwZW5kKHRoaXMuZ2VuZXJhdGVGaWxlSGVhZGVyKCkpO1xuICB9XG5cbiAgdXBkYXRlUGllY2VzKCkge1xuICAgICQoJy5waWVjZScpLnJlbW92ZSgpO1xuICAgIGNvbnN0IHBpZWNlVHlwZXMgPSBPYmplY3QudmFsdWVzKFBUeXBlcyk7XG4gICAgY29uc3QgcGllY2VzID0gdGhpcy5wb3NpdGlvbi5waWVjZXM7XG4gICAgbGV0IGZpbGVSYW5rO1xuICAgIGxldCBuZXdQaWVjZTtcblxuICAgIHBpZWNlVHlwZXMuZm9yRWFjaCgocGllY2VUeXBlKSA9PiB7XG4gICAgICBwaWVjZXNbcGllY2VUeXBlXS5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICAgIG5ld1BpZWNlID0gJChgPGRpdiBjbGFzcz1cInBpZWNlXCI+JHtQaWVjZVR5cGVIVE1MW3BpZWNlVHlwZV19PGRpdj5gKTtcbiAgICAgICAgaWYgKHBpZWNlc1tDb2xvcnMuV0hJVEVdLmhhc1NldEJpdChwb3MpKSB7XG4gICAgICAgICAgbmV3UGllY2UuYWRkQ2xhc3MoJ3doaXRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UGllY2UuYWRkQ2xhc3MoJ2JsYWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgZmlsZVJhbmsgPSBVdGlsLmZpbGVSYW5rRnJvbVBvcyhwb3MpO1xuICAgICAgICAkKGAjJHtmaWxlUmFua31gKS5hcHBlbmQobmV3UGllY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBtYWtlTW92ZShtb3ZlLCBzdGF0cykge1xuICAgIHRoaXMuYWRkVG9Nb3Zlc0xpc3QoeyBtb3ZlLCBjb2xvcjogdGhpcy5wb3NpdGlvbi50dXJuLCBzdGF0cyB9KTtcbiAgICBpZiAoc3RhdHMpIHtcbiAgICAgIHRoaXMucG9wdWxhdGVTdGF0c1RhYmxlKFV0aWwuZm9ybWF0TW92ZShtb3ZlLCB0aGlzLnBvc2l0aW9uLnR1cm4pLCBzdGF0cyk7XG4gICAgfVxuICAgIHRoaXMucG9zaXRpb24ubWFrZU1vdmUobW92ZSk7XG4gICAgdGhpcy5wbGF5TmV4dFR1cm4oKTtcbiAgfVxuXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuICFbR2FtZVN0YXR1cy5BSVR1cm4sIEdhbWVTdGF0dXMuUGxheWVyVHVybl0uaW5jbHVkZXModGhpcy5zdGF0dXMpO1xuICB9XG5cbiAgYWlNb3ZlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZUJ0bnMoKTtcbiAgICB0aGlzLnJlc2V0U3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3ZlcigpKSB7IHJldHVybjsgfVxuXG4gICAgJCgnbWFpbicpLmFkZENsYXNzKCd3YWl0aW5nJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBhaU1vdmVEYXRhID0gdGhpcy5haS5jaG9vc2VNb3ZlKHRoaXMucG9zaXRpb24sIHRoaXMuY3Vyck1vdmVzKTtcbiAgICAgIHRoaXMuYW5pbWF0ZU1vdmUoYWlNb3ZlRGF0YS5tb3ZlLCAoKSA9PiB7XG4gICAgICAgICQoJ21haW4nKS5yZW1vdmVDbGFzcygnd2FpdGluZycpO1xuICAgICAgICB0aGlzLm1ha2VNb3ZlKGFpTW92ZURhdGEubW92ZSwgYWlNb3ZlRGF0YS5wZXJmb3JtYW5jZSk7XG4gICAgICB9KTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgYW5pbWF0ZU1vdmUobW92ZSwgY2IpIHtcbiAgICBjb25zdCBwaWVjZUVsID0gJChgIyR7VXRpbC5maWxlUmFua0Zyb21Qb3MobW92ZS5nZXRGcm9tKCkpfSAucGllY2VgKTtcbiAgICBjb25zdCBuZXdTcXVhcmUgPSAkKGAjJHtVdGlsLmZpbGVSYW5rRnJvbVBvcyhtb3ZlLmdldFRvKCkpfWApO1xuXG4gICAgaWYgKG1vdmUuZ2V0Q2FwdFBpZWNlKCkpIHtcbiAgICAgIGNvbnN0IGNhcHRQaWVjZSA9ICQoYCMke1V0aWwuZmlsZVJhbmtGcm9tUG9zKG1vdmUuZ2V0VG8oKSl9IC5waWVjZWApO1xuICAgICAgY29uc3QgY2FwdE9mZnNldCA9IGNhcHRQaWVjZS5vZmZzZXQoKTtcbiAgICAgIGNhcHRQaWVjZS5jc3Moe1xuICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAnbGVmdCc6IGNhcHRPZmZzZXQubGVmdCxcbiAgICAgICAgJ3RvcCc6IGNhcHRPZmZzZXQudG9wXG4gICAgICB9KTtcbiAgICAgIGNhcHRQaWVjZS5mYWRlT3V0KDQ1MCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkT2Zmc2V0ID0gcGllY2VFbC5vZmZzZXQoKTtcbiAgICBwaWVjZUVsLmFwcGVuZFRvKG5ld1NxdWFyZSk7XG4gICAgY29uc3QgbmV3T2Zmc2V0ID0gcGllY2VFbC5vZmZzZXQoKTtcblxuICAgIGNvbnN0IGFuaW1QaWVjZSA9IHBpZWNlRWwuY2xvbmUoKS5hcHBlbmRUbygnYm9keScpO1xuICAgIGFuaW1QaWVjZS5jc3Moe1xuICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICdsZWZ0Jzogb2xkT2Zmc2V0LmxlZnQsXG4gICAgICAndG9wJzogb2xkT2Zmc2V0LnRvcCxcbiAgICAgICd6LWluZGV4JzogMTAwMFxuICAgIH0pO1xuICAgIHBpZWNlRWwuaGlkZSgpO1xuXG4gICAgYW5pbVBpZWNlLmFuaW1hdGUoeyd0b3AnOiBuZXdPZmZzZXQudG9wLCAnbGVmdCc6IG5ld09mZnNldC5sZWZ0fSwgNDUwLCBmdW5jdGlvbigpe1xuICAgICAgcGllY2VFbC5zaG93KCk7XG4gICAgICBhbmltUGllY2UucmVtb3ZlKCk7XG4gICAgICBjYigpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBQbGF5ZXJNb3ZlKCkge1xuICAgIHRoaXMuYWN0aXZhdGVCdG5zKCk7XG4gICAgdGhpcy5yZXNldFN0YXR1cygpO1xuICAgIGlmICh0aGlzLmlzR2FtZU92ZXIoKSkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IG1vdmVzRGF0YSA9IHRoaXMuY3Vyck1vdmVzLm1hcCgobW92ZSkgPT4gbW92ZS5nZXREYXRhKCkpO1xuICAgIGNvbnN0IG1vdmVGcm9tVG9zID0ge307XG4gICAgY29uc3QgbW92ZVRvRnJvbXMgPSB7fTtcblxuICAgIG1vdmVzRGF0YS5mb3JFYWNoKChtb3ZlRGF0YSkgPT4ge1xuICAgICAgbW92ZUZyb21Ub3NbbW92ZURhdGEuZnJvbV0gPSBtb3ZlRnJvbVRvc1ttb3ZlRGF0YS5mcm9tXSB8fCBbXTtcbiAgICAgIG1vdmVGcm9tVG9zW21vdmVEYXRhLmZyb21dLnB1c2gobW92ZURhdGEudG8pO1xuXG4gICAgICBtb3ZlVG9Gcm9tc1ttb3ZlRGF0YS50b10gPSBtb3ZlVG9Gcm9tc1ttb3ZlRGF0YS50b10gfHwgW107XG4gICAgICBtb3ZlVG9Gcm9tc1ttb3ZlRGF0YS50b10ucHVzaChtb3ZlRGF0YS5mcm9tKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYWN0aXZhdGVEcmFnZ2FibGVQaWVjZXMobW92ZUZyb21Ub3MpO1xuICAgIHRoaXMuYWN0aXZhdGVEcm9wcGFibGVTcXVhcmVzKG1vdmVUb0Zyb21zKTtcbiAgfVxuXG4gIGFjdGl2YXRlRHJhZ2dhYmxlUGllY2VzKG1vdmVGcm9tVG9zKSB7XG4gICAgbGV0IGZyb21GaWxlUmFuaztcbiAgICBsZXQgcGllY2VFbDtcblxuICAgIE9iamVjdC5rZXlzKG1vdmVGcm9tVG9zKS5mb3JFYWNoKChmcm9tUG9zKSA9PiB7XG4gICAgICBmcm9tRmlsZVJhbmsgPSBVdGlsLmZpbGVSYW5rRnJvbVBvcyhmcm9tUG9zKTtcbiAgICAgIHBpZWNlRWwgPSAkKGAjJHtmcm9tRmlsZVJhbmt9IC5waWVjZWApO1xuICAgICAgcGllY2VFbC5kcmFnZ2FibGUoe1xuICAgICAgICBjb250YWlubWVudDogJCgnI2JvYXJkJyksXG4gICAgICAgIHJldmVydDogJ2ludmFsaWQnLFxuICAgICAgICByZXZlcnREdXJhdGlvbjogMzAwXG4gICAgICB9KTtcblxuICAgICAgcGllY2VFbC5tb3VzZWVudGVyKCgpID0+IHtcbiAgICAgICAgaWYgKHBpZWNlRWwuaGFzQ2xhc3MoJ3VpLWRyYWdnYWJsZScpKSB7XG4gICAgICAgICAgbW92ZUZyb21Ub3NbZnJvbVBvc10uZm9yRWFjaCgodG9Qb3MpID0+IHtcbiAgICAgICAgICAgICQoYCMke1V0aWwuZmlsZVJhbmtGcm9tUG9zKHRvUG9zKX1gKS5hZGRDbGFzcygnY2FuLW1vdmUtdG8nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHBpZWNlRWwubW91c2VsZWF2ZSgoKSA9PiB7XG4gICAgICAgICQoJy5zcXVhcmUnKS5yZW1vdmVDbGFzcygnY2FuLW1vdmUtdG8nKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGVEcm9wcGFibGVTcXVhcmVzKG1vdmVUb0Zyb21zKSB7XG4gICAgbGV0IGRlc3RTcTtcbiAgICBsZXQgb3JpZ2luU3F1YXJlO1xuICAgIGxldCBvcmlnaW5Qb3M7XG4gICAgbGV0IHNlbGVjdGVkTW92ZTtcblxuICAgIE9iamVjdC5rZXlzKG1vdmVUb0Zyb21zKS5mb3JFYWNoKCh0b1BvcykgPT4ge1xuICAgICAgZGVzdFNxID0gJChgIyR7VXRpbC5maWxlUmFua0Zyb21Qb3ModG9Qb3MpfWApO1xuICAgICAgZGVzdFNxLmRyb3BwYWJsZSh7XG4gICAgICAgIGFjY2VwdDogKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIG9yaWdpblNxdWFyZSA9ICQoZHJhZ2dhYmxlKS5wYXJlbnQoKS5hdHRyKCdpZCcpO1xuICAgICAgICAgIGlmICghb3JpZ2luU3F1YXJlKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIG9yaWdpblBvcyA9IFV0aWwucG9zRnJvbUZpbGVSYW5rKG9yaWdpblNxdWFyZSk7XG4gICAgICAgICAgcmV0dXJuIG1vdmVUb0Zyb21zW3RvUG9zXS5pbmNsdWRlcyhvcmlnaW5Qb3MpO1xuICAgICAgICB9LFxuICAgICAgICBkcm9wOiAoZXZlbnQsIHVpKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlUGxheWVyTW92ZSh1aS5kcmFnZ2FibGUsIHBhcnNlSW50KHRvUG9zKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZVBsYXllck1vdmUocGllY2UsIHRvUG9zKSB7XG4gICAgY29uc3Qgb3JpZ2luU3F1YXJlID0gJChwaWVjZSkucGFyZW50KCk7XG4gICAgcGllY2UucmVtb3ZlKCk7XG5cbiAgICAkKCcudWktZHJhZ2dhYmxlJykuZHJhZ2dhYmxlKCdkZXN0cm95Jyk7XG4gICAgJCgnLnVpLWRyb3BwYWJsZScpLmRyb3BwYWJsZSgnZGVzdHJveScpO1xuICAgICQoJy5zcXVhcmUnKS5yZW1vdmVDbGFzcygnY2FuLW1vdmUtdG8nKTtcbiAgICB0aGlzLmRlYWN0aXZhdGVCdG5zKCk7XG5cbiAgICBjb25zdCBvcmlnaW5Qb3MgPSBVdGlsLnBvc0Zyb21GaWxlUmFuaygkKG9yaWdpblNxdWFyZSkuYXR0cignaWQnKSk7XG4gICAgY29uc3QgZGVzdFNxID0gJChgIyR7VXRpbC5maWxlUmFua0Zyb21Qb3ModG9Qb3MpfWApO1xuICAgIGRlc3RTcS5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRNb3ZlcyA9IHRoaXMuY3Vyck1vdmVzLmZpbHRlcigobW92ZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vdmUuZ2V0RnJvbSgpID09PSBvcmlnaW5Qb3MgJiZcbiAgICAgICAgICAgICBtb3ZlLmdldFRvKCkgPT09IHRvUG9zO1xuICAgIH0pO1xuXG4gICAgaWYgKHNlbGVjdGVkTW92ZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnBsYXllckNvbG9yID09PSBDb2xvcnMuV0hJVEUgPyAnd2hpdGUnIDogJ2JsYWNrJztcbiAgICAgIHRoaXMuY3JlYXRlUHJvbW9XaW5kb3coZGVzdFNxLCBzZWxlY3RlZE1vdmVzLCBjb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWxlY3RlZE1vdmUgPSBzZWxlY3RlZE1vdmVzWzBdO1xuICAgICAgdGhpcy5tYWtlTW92ZShzZWxlY3RlZE1vdmUpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVByb21vV2luZG93KGRlc3RTcSwgcHJvbW9Nb3ZlcywgY29sb3IpIHtcbiAgICBjb25zdCBwcm9tb0RpdiA9ICQoXCI8ZGl2IGNsYXNzPSdwcm9tby13aW5kb3cnPjwvZGl2PlwiKTtcbiAgICBjb25zdCBwcm9tb1BpZWNlcyA9IHRoaXMuY3JlYXRlUHJvbW9QaWVjZXMocHJvbW9Nb3ZlcywgY29sb3IpO1xuXG4gICAgbGV0IHByb21vV2luUm93ID0gJChcIjxkaXYgY2xhc3M9J3Byb21vLXdpbmRvdy1yb3cnPjwvZGl2PlwiKTtcbiAgICBwcm9tb1dpblJvdy5hcHBlbmQocHJvbW9QaWVjZXMuc2xpY2UoMCwgMikpO1xuICAgIHByb21vRGl2LmFwcGVuZChwcm9tb1dpblJvdyk7XG5cbiAgICBwcm9tb1dpblJvdyA9ICQoXCI8ZGl2IGNsYXNzPSdwcm9tby13aW5kb3ctcm93Jz48L2Rpdj5cIik7XG4gICAgcHJvbW9XaW5Sb3cuYXBwZW5kKHByb21vUGllY2VzLnNsaWNlKDIpKTtcbiAgICBwcm9tb0Rpdi5hcHBlbmQocHJvbW9XaW5Sb3cpO1xuXG4gICAgZGVzdFNxLmFwcGVuZChwcm9tb0Rpdik7XG4gIH1cblxuICBjcmVhdGVQcm9tb1BpZWNlcyhwcm9tb01vdmVzLCBjb2xvcikge1xuICAgIGNvbnN0IFByb21vc1BUeXBlcyA9IHtcbiAgICAgIFtNb3ZlVHlwZXMuTlBST01PXTogUFR5cGVzLktOSUdIVFMsXG4gICAgICBbTW92ZVR5cGVzLkJQUk9NT106IFBUeXBlcy5CSVNIT1BTLFxuICAgICAgW01vdmVUeXBlcy5SUFJPTU9dOiBQVHlwZXMuUk9PS1MsXG4gICAgICBbTW92ZVR5cGVzLlFQUk9NT106IFBUeXBlcy5RVUVFTlNcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbW9QaWVjZXMgPSBbXTtcbiAgICBsZXQgbmV3UHJvbW9QaWVjZTtcblxuICAgIHByb21vTW92ZXMuZm9yRWFjaCgocHJvbW9Nb3ZlKSA9PiB7XG4gICAgICBuZXdQcm9tb1BpZWNlID0gdGhpcy5jcmVhdGVQcm9tb1BpZWNlKHByb21vTW92ZSwgUHJvbW9zUFR5cGVzW3Byb21vTW92ZS5nZXRUeXBlKCldLCBjb2xvcik7XG4gICAgICBwcm9tb1BpZWNlcy5wdXNoKG5ld1Byb21vUGllY2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21vUGllY2VzO1xuICB9XG5cbiAgY3JlYXRlUHJvbW9QaWVjZShtb3ZlLCBwVHlwZSwgY29sb3IpIHtcbiAgICBjb25zdCBwcm9tb1BpZWNlID0gJChgPGRpdiBjbGFzcz0ncHJvbW8tcGllY2UgcGllY2UgJHtjb2xvcn0nXCI+JHtQaWVjZVR5cGVIVE1MW3BUeXBlXX08L2Rpdj5gKTtcbiAgICBwcm9tb1BpZWNlLmNsaWNrKCgpID0+IHtcbiAgICAgICQoJy5wcm9tby13aW5kb3cnKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMubWFrZU1vdmUobW92ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbW9QaWVjZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVJO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdWkvaW5kZXguanMiLCJjb25zdCB7IEJpdEJvYXJkLCBCQk1hc2tzIH0gPSByZXF1aXJlKCcuLi9iaXRib2FyZCcpO1xuXG5jb25zdCB7IE1vdmUsIE1vdmVUeXBlcyB9ID0gcmVxdWlyZSgnLi4vbW92ZScpO1xuXG5jb25zdCB7IFBVdGlscywgUFR5cGVzLFxuICAgICAgICBDb2xvcnMsIERpcnMsXG4gICAgICAgIGVhY2hQaWVjZVR5cGUsIFBpZWNlQ29udiB9ID0gcmVxdWlyZSgnLi4vcGllY2VzJyk7XG5cbmNvbnN0IHsgcGllY2VQb3NIYXNoS2V5cyxcbiAgICAgICAgZXBQb3NIYXNoS2V5cyxcbiAgICAgICAgY2FzdGxlSGFzaEtleXMsXG4gICAgICAgIHR1cm5IYXNoS2V5cyB9ID0gcmVxdWlyZSgnLi96aGFzaF9jb25zdGFudHMuanMnKTtcblxuLy8gV2UgaW5pdGlhbGl6ZSBvdXIgcG9zaXRpb24gd2l0aCBhIEZFTiBzdHJpbmcgc28gdGhhdCBpdCdzIGVhc3kgdG9cbi8vIHJlY3JlYXRlIGEgcGFydGljdWxhciBwb3NpdGlvbi4gU2luY2UganVzdCBvbmUgcG9zaXRpb24gb2JqZWN0IGlzIGNyZWF0ZWQgZHVyaW5nXG4vLyBvdXIgZ2FtZSwgdGhpcyBpcyBtYWlubHkgaGVscGZ1bCBmb3IgdGVzdGluZy9kZWJ1Z2dpbmcgcHVycG9zZXNcbi8vIE1vcmUgYWJvdXQgRkVOIGhlcmU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZvcnN5dGglRTIlODAlOTNFZHdhcmRzX05vdGF0aW9uXG5cbmNvbnN0IGRlZmF1bHRGZW5TdHIgPSBcInJuYnFrYm5yL3BwcHBwcHBwLzgvOC84LzgvUFBQUFBQUFAvUk5CUUtCTlIgdyBLUWtxIC0gMCAxXCI7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoZmVuU3RyID0gZGVmYXVsdEZlblN0cikge1xuICAgIGNvbnN0IFsgcG9zaXRpb25zLFxuICAgICAgICAgICAgdHVybkxldHRlcixcbiAgICAgICAgICAgIGNhc3RsZVJpZ2h0c1N0cixcbiAgICAgICAgICAgIGVwU3EsXG4gICAgICAgICAgICBoYWxmTW92ZUNsb2NrLFxuICAgICAgICAgICAgZnVsbE1vdmVDbG9jayBdID0gZmVuU3RyLnNwbGl0KCcgJyk7XG5cbiAgICB0aGlzLnBpZWNlcyA9IHRoaXMuZmVuUG9zaXRpb25zVG9QaWVjZUJCcyhwb3NpdGlvbnMpO1xuICAgIHRoaXMuY2FzdGxlUmlnaHRzID0gdGhpcy5wYXJzZUNhc3RsZVJpZ2h0c1N0cihjYXN0bGVSaWdodHNTdHIpO1xuICAgIHRoaXMuZXBCQiA9IHRoaXMucGFyc2VFcFN0cihlcFNxKTtcbiAgICB0aGlzLmhhbGZNb3ZlQ2xvY2sgPSBwYXJzZUludChoYWxmTW92ZUNsb2NrKTtcbiAgICB0aGlzLmZ1bGxNb3ZlQ2xvY2sgPSBwYXJzZUludChmdWxsTW92ZUNsb2NrKTtcbiAgICBjb25zdCB0dXJuID0gdHVybkxldHRlciA9PT0gJ3cnID8gQ29sb3JzLldISVRFIDogQ29sb3JzLkJMQUNLO1xuXG4gICAgdGhpcy5wcmV2TW92ZXMgPSBbXTtcbiAgICB0aGlzLnByZXZTdGF0ZXMgPSBbXTtcblxuICAgIC8vIGNhY2hlIGZvciBxdWljayBsb29rdXAgYnkgYm9hcmQgcG9zaXRpb25cbiAgICB0aGlzLnBUeXBlc0xvY2F0aW9ucyA9IHRoaXMuY3JlYXRlUFR5cGVzTG9jYXRpb25zKCk7XG5cbiAgICAvLyB3ZSBzZXBhcmF0ZSBvdXIgaGFzaGVkIHZhbHVlcyBpbnRvIHBpZWNlIHBvc2l0aW9uIGhhc2hlc1xuICAgIC8vIGFuZCBzdGF0ZSBoYXNoZXMgZm9yIHNpbXBsZXIgaW50ZWdyYXRpb24gd2l0aCBvdXIgbW92ZSBtYWtpbmcvdW5tYWtpbmcgcHJvY2Vzc1xuICAgIC8vIHRoZXkgYXJlIHhvcidkIHRvIHJlcHJlc2VudCB0aGUgY29tcGxldGUgcG9zaXRpb25cbiAgICB0aGlzLnBQb3NIYXNoID0gdGhpcy5jcmVhdGVQaWVjZXNQb3NIYXNoKCk7XG4gICAgdGhpcy5zdGF0ZUhhc2ggPSB0aGlzLmNyZWF0ZVN0YXRlSGFzaCgpO1xuXG4gICAgdGhpcy5zZXRUdXJuKHR1cm4sIHRoaXMuZ2V0T3RoZXJDb2xvcih0dXJuKSk7XG5cbiAgICB0aGlzLnBvc2l0aW9uQ291bnRzID0ge307XG4gICAgdGhpcy5hZGRQb3NpdGlvbkNvdW50KCk7XG4gIH1cblxuICBmZW5Qb3NpdGlvbnNUb1BpZWNlQkJzKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IHJvd1N0cnMgPSBwb3NpdGlvbnMuc3BsaXQoJy8nKTtcblxuICAgIGNvbnN0IHBpZWNlQkJzID0gdGhpcy5jcmVhdGVFbXB0eVBpZWNlc0JCcygpO1xuXG4gICAgbGV0IHBvcyA9IDA7XG4gICAgcm93U3Rycy5mb3JFYWNoKChyb3dTdHIpID0+IHtcbiAgICAgIHJvd1N0ci5zcGxpdCgnJykuZm9yRWFjaCgoY2hhcikgPT4ge1xuICAgICAgICBpZiAoL1swLTldLy50ZXN0KGNoYXIpKSB7XG4gICAgICAgICAgcG9zICs9IHBhcnNlSW50KGNoYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBpZWNlQkJzW1BpZWNlQ29udi5sZXR0ZXJUb1R5cGUoY2hhcildLnNldEJpdChwb3MpO1xuICAgICAgICAgIHBpZWNlQkJzW1BpZWNlQ29udi5sZXR0ZXJUb0NvbG9yKGNoYXIpXS5zZXRCaXQocG9zKTtcbiAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGllY2VCQnM7XG4gIH1cblxuICBjcmVhdGVFbXB0eVBpZWNlc0JCcygpIHtcbiAgICBjb25zdCBwaWVjZXMgPSBbXTtcblxuICAgIGVhY2hQaWVjZVR5cGUoKHR5cGUpID0+IHtcbiAgICAgIHBpZWNlc1t0eXBlXSA9IG5ldyBCaXRCb2FyZCgpO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhDb2xvcnMpLmZvckVhY2goKGNvbG9yKSA9PiB7XG4gICAgICBwaWVjZXNbY29sb3JdID0gbmV3IEJpdEJvYXJkKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGllY2VzO1xuICB9XG5cbiAgcGFyc2VDYXN0bGVSaWdodHNTdHIoY2FzdGxlUmlnaHRzU3RyKSB7XG4gICAgY29uc3QgcmlnaHRzUG9zID0gWydxJywgJ2snLCAnUScsICdLJ107XG5cbiAgICByZXR1cm4gcmlnaHRzUG9zLnJlZHVjZSgocmVzLCByaWdodHNMZXR0ZXIsIHBvcykgPT4ge1xuICAgICAgaWYgKGNhc3RsZVJpZ2h0c1N0ci5pbmNsdWRlcyhyaWdodHNMZXR0ZXIpKSB7XG4gICAgICAgIHJldHVybiAocmVzIF4gKDEgPDwgcG9zKSk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBwYXJzZUVwU3RyKGVwU3RyKSB7XG4gICAgaWYgKC9cXGQrLy50ZXN0KGVwU3RyKSkge1xuICAgICAgcmV0dXJuIEJpdEJvYXJkLmZyb21Qb3MocGFyc2VJbnQoZXBTdHIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBCaXRCb2FyZCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVBUeXBlc0xvY2F0aW9ucygpIHtcbiAgICBsZXQgcG9zO1xuICAgIGNvbnN0IHJlcyA9IFtdO1xuXG4gICAgZm9yIChwb3MgPSAwOyBwb3MgPCA2NDsgcG9zKyspIHtcbiAgICAgIHJlc1twb3NdID0gdGhpcy5nZXRQaWVjZUF0KHBvcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGdldFBpZWNlQXQocG9zKSB7XG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3QudmFsdWVzKFBUeXBlcyk7XG5cbiAgICBsZXQgaWR4O1xuICAgIGxldCB0eXBlO1xuXG4gICAgZm9yIChpZHggPSAwOyBpZHggPCB0eXBlcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICB0eXBlID0gdHlwZXNbaWR4XTtcbiAgICAgIGlmICh0aGlzLnBpZWNlc1t0eXBlXS5oYXNTZXRCaXQocG9zKSkge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNyZWF0ZVBpZWNlc1Bvc0hhc2goKSB7XG4gICAgbGV0IHZhbCA9IDA7XG5cbiAgICBsZXQgcFR5cGU7XG4gICAgY29uc3Qgd2hpdGVzUG9zID0gdGhpcy5waWVjZXNbQ29sb3JzLldISVRFXTtcbiAgICB3aGl0ZXNQb3MuZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgcFR5cGUgPSB0aGlzLnBUeXBlc0xvY2F0aW9uc1twb3NdO1xuICAgICAgdmFsIF49IHBpZWNlUG9zSGFzaEtleXNbcG9zXVtwVHlwZV1bQ29sb3JzLldISVRFXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJsYWNrc1BvcyA9IHRoaXMucGllY2VzW0NvbG9ycy5CTEFDS107XG4gICAgYmxhY2tzUG9zLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgIHBUeXBlID0gdGhpcy5wVHlwZXNMb2NhdGlvbnNbcG9zXTtcbiAgICAgIHZhbCBePSBwaWVjZVBvc0hhc2hLZXlzW3Bvc11bcFR5cGVdW0NvbG9ycy5CTEFDS107XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgY3JlYXRlU3RhdGVIYXNoKCkge1xuICAgIGxldCB2YWwgPSAwO1xuICAgIHRoaXMuZXBCQi5kdXAoKS5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICB2YWwgXj0gZXBQb3NIYXNoS2V5c1twb3NdO1xuICAgIH0pO1xuXG4gICAgbGV0IGNhc3RsZVJpZ2h0c1BvcztcbiAgICBmb3IgKGNhc3RsZVJpZ2h0c1BvcyA9IDA7IGNhc3RsZVJpZ2h0c1BvcyA8IDQ7IGNhc3RsZVJpZ2h0c1BvcysrKSB7XG4gICAgICBpZiAoKHRoaXMuY2FzdGxlUmlnaHRzICYgKDEgPDwgY2FzdGxlUmlnaHRzUG9zKSkgPj4+IDApIHtcbiAgICAgICAgdmFsIF49IGNhc3RsZUhhc2hLZXlzW2Nhc3RsZVJpZ2h0c1Bvc107XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGdldEhhc2goKSB7XG4gICAgcmV0dXJuIHRoaXMucFBvc0hhc2ggXiB0aGlzLnN0YXRlSGFzaCBeIHR1cm5IYXNoS2V5c1t0aGlzLnR1cm5dO1xuICB9XG5cbiAgc2V0VHVybih0dXJuLCBvcHApIHtcbiAgICB0aGlzLnR1cm4gPSB0dXJuO1xuICAgIHRoaXMub3BwID0gb3BwO1xuICB9XG5cbiAgc3dhcFR1cm4oKSB7XG4gICAgdGhpcy5zZXRUdXJuKHRoaXMub3BwLCB0aGlzLnR1cm4pO1xuICB9XG5cbiAgZ2V0T3RoZXJDb2xvcihjb2xvcikge1xuICAgIHJldHVybiBjb2xvciBeIENvbG9ycy5CTEFDSztcbiAgfVxuXG4gIC8vIGdlbmVyYXRlcyBhbGwgcHNldWRvIGxlZ2FsIG1vdmVzLCBpZSBtb3ZlcyB0aGF0IG1heSBwdXQgdGhlIGtpbmdcbiAgLy8gaW4gY2hlY2sgYnV0IGFyZSBvdGhlcndpc2UgbGVnYWxcbiAgZ2VuZXJhdGVQc2V1ZG9Nb3ZlcyhpbmNsdWRlUXVpZXQgPSB0cnVlLCBjaGVja05TRHJhdyA9IHRydWUpIHtcbiAgICBjb25zdCBtb3ZlcyA9IFtdO1xuICAgIGlmIChjaGVja05TRHJhdyAmJiB0aGlzLmlzTm9uU3RhbGVtYXRlRHJhdygpKSB7IHJldHVybiBtb3ZlczsgfVxuICAgIHRoaXMuYWRkUGF3bk1vdmVzKG1vdmVzLCBpbmNsdWRlUXVpZXQpO1xuICAgIHRoaXMuYWRkTm9ybWFsTW92ZXMobW92ZXMsIGluY2x1ZGVRdWlldCk7XG4gICAgdGhpcy5hZGRLaW5nTW92ZXMobW92ZXMsIGluY2x1ZGVRdWlldCk7XG5cbiAgICByZXR1cm4gbW92ZXM7XG4gIH1cblxuICAvLyBnZW5lcmF0ZXMgbW92ZXMgd2l0aCBhIGZpbHRlciBmb3Igd2hldGhlciB0aGUgbW92ZSBwdXRzIHRoZSBraW5nIGluIGNoZWNrLFxuICAvLyB1c2VkIGZvciB0aGUgVUkgYnV0IG5vdCB0aGUgQUkgbW92ZSBzZWFyY2hcbiAgZ2VuZXJhdGVMZWdhbE1vdmVzKCkge1xuICAgIGNvbnN0IHBzZXVkb01vdmVzID0gdGhpcy5nZW5lcmF0ZVBzZXVkb01vdmVzKCk7XG4gICAgbGV0IG1vdmVEYXRhO1xuICAgIGxldCBpc0xlZ2FsO1xuXG4gICAgY29uc3QgbGVnYWxzID0gW107XG4gICAgcmV0dXJuIHBzZXVkb01vdmVzLmZpbHRlcigocHNldWRvTW92ZSkgPT4ge1xuICAgICAgbW92ZURhdGEgPSBwc2V1ZG9Nb3ZlLmdldERhdGEoKTtcblxuICAgICAgdGhpcy50ZXN0TW92ZShtb3ZlRGF0YSwgKHRlc3RzTGVnYWwpID0+IHtcbiAgICAgICAgaXNMZWdhbCA9IHRlc3RzTGVnYWw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpc0xlZ2FsO1xuICAgIH0pO1xuICB9XG5cbiAgaXNOb25TdGFsZW1hdGVEcmF3KCkge1xuICAgIHJldHVybiB0aGlzLmlzTW92ZUxpbWl0RXhjZWVkZWQoKSB8fCB0aGlzLmlzVGhyZWVmb2xkUmVwZXRpdGlvbigpO1xuICB9XG5cbiAgaXNUaHJlZWZvbGRSZXBldGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQ291bnRzW3RoaXMuZ2V0SGFzaCgpXSA9PT0gMztcbiAgfVxuXG4gIGlzTW92ZUxpbWl0RXhjZWVkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFsZk1vdmVDbG9jayA+PSA1MDtcbiAgfVxuXG4gIGFkZFBhd25Nb3Zlcyhtb3ZlcywgaW5jbHVkZVF1aWV0KSB7XG4gICAgY29uc3QgcGF3bnNQb3MgPSB0aGlzLmdldENvbG9yUGllY2VTZXQodGhpcy50dXJuLCBQVHlwZXMuUEFXTlMpO1xuXG4gICAgaWYgKGluY2x1ZGVRdWlldCkge1xuICAgICAgY29uc3Qgbm90T2NjdXBpZWQgPSB0aGlzLmdldE9jY3VwaWVkKCkubm90KCk7XG5cbiAgICAgIGNvbnN0IHBhd25TaW5nbGVQdXNoZXMgPSBQVXRpbHNbUFR5cGVzLlBBV05TXS5zaW5nbGVQdXNoKHRoaXMudHVybiwgcGF3bnNQb3MsIG5vdE9jY3VwaWVkKTtcbiAgICAgIHRoaXMuYWRkUGF3bk1vdmVTZXQocGF3blNpbmdsZVB1c2hlcywgOCAqIFBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSwgbW92ZXMpO1xuXG4gICAgICBjb25zdCBwYXduRG91YmxlUHVzaGVzID0gUFV0aWxzW1BUeXBlcy5QQVdOU10uZG91YmxlUHVzaCh0aGlzLnR1cm4sIHBhd25zUG9zLCBub3RPY2N1cGllZCk7XG4gICAgICB0aGlzLmFkZFBhd25Nb3ZlU2V0KHBhd25Eb3VibGVQdXNoZXMsIDE2ICogUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dLCBtb3ZlcywgZmFsc2UsIHRydWUpO1xuICAgIH1cblxuICAgIGxldCBvcHBQb3NpdGlvbnMgPSB0aGlzLnBpZWNlc1t0aGlzLm9wcF0ub3IodGhpcy5lcEJCKTtcblxuICAgIGNvbnN0IHBhd25MZWZ0QXR0YWNrcyA9IFBVdGlsc1tQVHlwZXMuUEFXTlNdLmF0dGFja3NMZWZ0KHRoaXMudHVybiwgcGF3bnNQb3MsIG9wcFBvc2l0aW9ucyk7XG4gICAgdGhpcy5hZGRQYXduTW92ZVNldChwYXduTGVmdEF0dGFja3MsIDcgKiBQVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0sIG1vdmVzLCB0cnVlKTtcblxuICAgIGNvbnN0IHBhd25SaWdodEF0dGFja3MgPSBQVXRpbHNbUFR5cGVzLlBBV05TXS5hdHRhY2tzUmlnaHQodGhpcy50dXJuLCBwYXduc1Bvcywgb3BwUG9zaXRpb25zKTtcbiAgICB0aGlzLmFkZFBhd25Nb3ZlU2V0KHBhd25SaWdodEF0dGFja3MsIDkgKiBQVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0sIG1vdmVzLCB0cnVlKTtcbiAgfVxuXG4gIGFkZE5vcm1hbE1vdmVzKG1vdmVzLCBpbmNsdWRlUXVpZXQpIHtcbiAgICBjb25zdCBvY2N1cGllZCA9IHRoaXMuZ2V0T2NjdXBpZWQoKTtcbiAgICBjb25zdCBub3RPd25QaWVjZXMgPSB0aGlzLmdldE5vdE9jY3VwaWVkQnkodGhpcy50dXJuKTtcblxuICAgIGNvbnN0IGtuaWdodHNQb3MgPSB0aGlzLmdldENvbG9yUGllY2VTZXQodGhpcy50dXJuLCBQVHlwZXMuS05JR0hUUyk7XG4gICAgbGV0IGtuaWdodE1vdmVzO1xuICAgIGtuaWdodHNQb3MuZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAga25pZ2h0TW92ZXMgPSBQVXRpbHNbUFR5cGVzLktOSUdIVFNdLm1vdmVzKHBvcywgbm90T3duUGllY2VzKTtcbiAgICAgIHRoaXMuYWRkTm9ybWFsTW92ZVNldChrbmlnaHRNb3ZlcywgcG9zLCBQVHlwZXMuS05JR0hUUywgbW92ZXMsIGluY2x1ZGVRdWlldCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcG9zaXRpb25zO1xuICAgIGxldCBkZXN0aW5hdGlvbnM7XG4gICAgW1BUeXBlcy5CSVNIT1BTLCBQVHlwZXMuUk9PS1MsIFBUeXBlcy5RVUVFTlNdLmZvckVhY2goKHNsaWRpbmdUeXBlKSA9PiB7XG4gICAgICBwb3NpdGlvbnMgPSB0aGlzLmdldENvbG9yUGllY2VTZXQodGhpcy50dXJuLCBzbGlkaW5nVHlwZSk7XG4gICAgICBwb3NpdGlvbnMuZHVwKCkucG9wMUJpdHMoKHBvcykgPT4ge1xuICAgICAgICBkZXN0aW5hdGlvbnMgPSBQVXRpbHNbc2xpZGluZ1R5cGVdLm1vdmVzKHBvcywgb2NjdXBpZWQsIG5vdE93blBpZWNlcyk7XG4gICAgICAgIHRoaXMuYWRkTm9ybWFsTW92ZVNldChkZXN0aW5hdGlvbnMsIHBvcywgc2xpZGluZ1R5cGUsIG1vdmVzLCBpbmNsdWRlUXVpZXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRLaW5nTW92ZXMobW92ZXMsIGluY2x1ZGVRdWlldCkge1xuICAgICAgY29uc3Qgbm90T3duUGllY2VzID0gdGhpcy5nZXROb3RPY2N1cGllZEJ5KHRoaXMudHVybik7XG4gICAgICBjb25zdCBraW5nUG9zID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KHRoaXMudHVybiwgUFR5cGVzLktJTkdTKS5iaXRTY2FuRm9yd2FyZCgpO1xuXG4gICAgICBjb25zdCBub3JtYWxNb3ZlcyA9IFBVdGlsc1tQVHlwZXMuS0lOR1NdLm1vdmVzKGtpbmdQb3MsIG5vdE93blBpZWNlcyk7XG4gICAgICB0aGlzLmFkZE5vcm1hbE1vdmVTZXQobm9ybWFsTW92ZXMsIGtpbmdQb3MsIFBUeXBlcy5LSU5HUywgbW92ZXMsIGluY2x1ZGVRdWlldCk7XG5cbiAgICAgIGlmIChpbmNsdWRlUXVpZXQpIHtcbiAgICAgICAgdGhpcy5hZGRDYXN0bGVNb3Zlcyhtb3Zlcyk7XG4gICAgICB9XG4gIH1cblxuICAvLyBub3RlOiB1bmxpa2Ugb3RoZXIgcGllY2VzLCB3ZSBtYXAgcGF3biBtb3ZlbWVudHMgZnJvbSB0aGUgc2V0IG9mIGFsbCBleGlzdGluZyBwYXduc1xuICAvLyByYXRoZXIgdGhhbiBlYWNoIHBhd24gaW5kaXZpZHVhbGx5LCBzbyB0aGUgZnVuY3Rpb24gdGFrZXMgYSBzaGlmdCBhbW91bnQgdG8gZGV0ZXJtaW5lXG4gIC8vIHRoZSBsb2NhdGlvbiBvZiB0aGUgaW5kaXZpZHVhbCBwYXduIHRoYXQgbW92ZWQgdG8gYSBuZXcgcG9zaXRpb25cbiAgYWRkUGF3bk1vdmVTZXQobmV3UG9zaXRpb25zLCBzaGlmdEFtdCwgbW92ZXMsIGlzQ2FwdHVyZSwgaXNEYmxQdXNoKSB7XG4gICAgbGV0IGZyb207XG4gICAgbGV0IGNhcHR1cmVkID0gbnVsbDtcblxuICAgIG5ld1Bvc2l0aW9ucy5wb3AxQml0cygocG9zKSA9PiB7XG4gICAgICBmcm9tID0gcG9zIC0gc2hpZnRBbXQ7XG4gICAgICBpZiAoaXNEYmxQdXNoKSB7XG4gICAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoZnJvbSwgcG9zLCBNb3ZlVHlwZXMuREJMX1BQVVNILCBQVHlwZXMuUEFXTlMpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNDYXB0dXJlICYmIHRoaXMuZXBCQi5oYXNTZXRCaXQocG9zKSkge1xuICAgICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKGZyb20sIHBvcywgTW92ZVR5cGVzLkVQX0NBUFQsIFBUeXBlcy5QQVdOUykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzQ2FwdHVyZSkgeyBjYXB0dXJlZCA9IHRoaXMucFR5cGVzTG9jYXRpb25zW3Bvc107IH1cblxuICAgICAgICBpZiAoUFV0aWxzW1BUeXBlcy5QQVdOU10uUFJPTU9fTUFTS1NbdGhpcy50dXJuXS5oYXNTZXRCaXQocG9zKSkge1xuICAgICAgICAgIHRoaXMuYWRkUHJvbW9zKGZyb20sIHBvcywgbW92ZXMsIGNhcHR1cmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKGZyb20sIHBvcywgTW92ZVR5cGVzLk5PUk1BTCwgUFR5cGVzLlBBV05TLCBjYXB0dXJlZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRQcm9tb3MoZnJvbSwgdG8sIG1vdmVzLCBjYXB0dXJlZCkge1xuICAgIFtNb3ZlVHlwZXMuTlBST01PLCBNb3ZlVHlwZXMuQlBST01PLFxuICAgICBNb3ZlVHlwZXMuUlBST01PLCBNb3ZlVHlwZXMuUVBST01PXS5mb3JFYWNoKChwcm9tb1R5cGUpID0+IHtcbiAgICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKGZyb20sIHRvLCBwcm9tb1R5cGUsIFBUeXBlcy5QQVdOUywgY2FwdHVyZWQpKTtcbiAgICAgfSk7XG4gIH1cblxuICBhZGROb3JtYWxNb3ZlU2V0KG5ld1Bvc2l0aW9ucywgc3RhcnRQb3MsIHBpZWNlVHlwZSwgbW92ZXMsIGluY2x1ZGVRdWlldCkge1xuICAgIGxldCBuZXdQb3M7XG4gICAgbGV0IG5ld01vdmU7XG4gICAgbGV0IGNhcHRUeXBlO1xuXG4gICAgbmV3UG9zaXRpb25zLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgIGNhcHRUeXBlID0gdGhpcy5waWVjZXNbdGhpcy5vcHBdLmhhc1NldEJpdChwb3MpID8gdGhpcy5wVHlwZXNMb2NhdGlvbnNbcG9zXSA6IG51bGw7XG4gICAgICBpZiAoaW5jbHVkZVF1aWV0IHx8IGNhcHRUeXBlKSB7XG4gICAgICAgIG1vdmVzLnB1c2gobmV3IE1vdmUoc3RhcnRQb3MsIHBvcywgTW92ZVR5cGVzLk5PUk1BTCwgcGllY2VUeXBlLCBjYXB0VHlwZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FzdGxlTW92ZXMobW92ZXMpIHtcbiAgICBjb25zdCB0dXJuQ2FzdGxlUmlnaHRzID0gdGhpcy5nZXRDYXN0bGVSaWdodHModGhpcy50dXJuKTtcbiAgICBjb25zdCBzdGFydFBvcyA9IFBVdGlsc1tQVHlwZXMuS0lOR1NdLklOSVRfUE9TW3RoaXMudHVybl07XG4gICAgY29uc3Qgbm90T2NjdXBpZWQgPSB0aGlzLmdldE9jY3VwaWVkKCkubm90KCk7XG5cbiAgICBpZiAoKHR1cm5DYXN0bGVSaWdodHMgJiAwYjEpICYmIFBVdGlsc1tQVHlwZXMuS0lOR1NdLmNhbkNhc3RsZSh0aGlzLnR1cm4sIERpcnMuV0VTVCwgbm90T2NjdXBpZWQpKSB7XG4gICAgICBtb3Zlcy5wdXNoKG5ldyBNb3ZlKHN0YXJ0UG9zLCBzdGFydFBvcyAtIDIsIE1vdmVUeXBlcy5DU1RMX1FVRUVOLCBQVHlwZXMuS0lOR1MpKTtcbiAgICB9XG5cbiAgICBpZiAoKHR1cm5DYXN0bGVSaWdodHMgJiAwYjEwKSAmJiBQVXRpbHNbUFR5cGVzLktJTkdTXS5jYW5DYXN0bGUodGhpcy50dXJuLCBEaXJzLkVBU1QsIG5vdE9jY3VwaWVkKSkge1xuICAgICAgbW92ZXMucHVzaChuZXcgTW92ZShzdGFydFBvcywgc3RhcnRQb3MgKyAyLCBNb3ZlVHlwZXMuQ1NUTF9LSU5HLCBQVHlwZXMuS0lOR1MpKTtcbiAgICB9XG4gIH1cblxuICAvLyByZXR1cm5zIDJiaXQgdmFsdWUgZm9yIHRoZSBjb2xvcidzIGNhc3RsaW5nIHJpZ2h0c1xuICAvLyBsZWZ0IGJpdCA9PiBraW5nLXNpZGUgcmlnaHRzXG4gIC8vIHJpZ2h0IGJpdCA9PiBxdWVlbi1zaWRlIHJpZ2h0c1xuICBnZXRDYXN0bGVSaWdodHMoY29sb3IpIHtcbiAgICByZXR1cm4gY29sb3IgPT09IENvbG9ycy5XSElURSA/IHRoaXMuY2FzdGxlUmlnaHRzICYgMGIxMSA6IHRoaXMuY2FzdGxlUmlnaHRzID4+PiAyO1xuICB9XG5cbiAgZ2V0Q29sb3JQaWVjZVNldChjb2xvciwgcGllY2VUeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucGllY2VzW2NvbG9yXS5hbmQodGhpcy5waWVjZXNbcGllY2VUeXBlXSk7XG4gIH1cblxuICBnZXRPY2N1cGllZCgpIHtcbiAgICByZXR1cm4gdGhpcy5waWVjZXNbQ29sb3JzLldISVRFXS5vcih0aGlzLnBpZWNlc1tDb2xvcnMuQkxBQ0tdKTtcbiAgfVxuXG4gIGdldE5vdE9jY3VwaWVkQnkoY29sb3IpIHtcbiAgICByZXR1cm4gdGhpcy5waWVjZXNbY29sb3JdLm5vdCgpO1xuICB9XG5cbiAgbWFrZU1vdmUobW92ZSkge1xuICAgIGNvbnN0IG1vdmVEYXRhID0gbW92ZS5nZXREYXRhKCk7XG5cbiAgICBsZXQgaXNMZWdhbDtcbiAgICB0aGlzLnRlc3RNb3ZlKG1vdmVEYXRhLCAodGVzdHNMZWdhbCkgPT4ge1xuICAgICAgaXNMZWdhbCA9IHRlc3RzTGVnYWw7XG4gICAgICByZXR1cm4gIWlzTGVnYWw7XG4gICAgfSk7XG5cbiAgICBpZiAoIWlzTGVnYWwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdGhpcy5zZXROZXdTdGF0ZShtb3ZlRGF0YSk7XG4gICAgdGhpcy5leGVjTW92ZVR5cGUobW92ZURhdGEuZnJvbSwgbW92ZURhdGEudG8sIG1vdmVEYXRhLnR5cGUpO1xuXG4gICAgdGhpcy5wcmV2TW92ZXMucHVzaChtb3ZlKTtcbiAgICB0aGlzLnN3YXBUdXJuKCk7XG4gICAgdGhpcy5hZGRQb3NpdGlvbkNvdW50KCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRlc3RNb3ZlKG1vdmVEYXRhLCBjYikge1xuICAgIGlmIChtb3ZlRGF0YS5jYXB0UGllY2VUeXBlKSB7XG4gICAgICB0aGlzLmNsZWFyUGllY2VBdChtb3ZlRGF0YS50bywgdGhpcy5vcHAsIG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUpO1xuICAgIH1cblxuICAgIGlmIChtb3ZlRGF0YS5pc1Byb21vKSB7XG4gICAgICB0aGlzLmNsZWFyUGllY2VBdChtb3ZlRGF0YS5mcm9tLCB0aGlzLnR1cm4sIFBUeXBlcy5QQVdOUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVBpZWNlKG1vdmVEYXRhLmZyb20sIG1vdmVEYXRhLnRvLCB0aGlzLnR1cm4sIG1vdmVEYXRhLnBpZWNlVHlwZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5kbyA9IGNiKHRoaXMudGVzdHNMZWdhbChtb3ZlRGF0YSkpO1xuICAgIGlmICghdW5kbykgeyByZXR1cm47IH1cblxuICAgIGlmIChtb3ZlRGF0YS5pc1Byb21vKSB7XG4gICAgICB0aGlzLnNldFBpZWNlQXQobW92ZURhdGEuZnJvbSwgdGhpcy50dXJuLCBQVHlwZXMuUEFXTlMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVQaWVjZShtb3ZlRGF0YS50bywgbW92ZURhdGEuZnJvbSwgdGhpcy50dXJuLCBtb3ZlRGF0YS5waWVjZVR5cGUpO1xuICAgIH1cblxuICAgIGlmIChtb3ZlRGF0YS5jYXB0UGllY2VUeXBlKSB7XG4gICAgICB0aGlzLnNldFBpZWNlQXQobW92ZURhdGEudG8sIHRoaXMub3BwLCBtb3ZlRGF0YS5jYXB0UGllY2VUeXBlKTtcbiAgICB9XG4gIH1cblxuICB0ZXN0c0xlZ2FsKG1vdmVEYXRhKSB7XG4gICAgaWYgKG1vdmVEYXRhLmlzQ2FzdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0xlZ2FsQ2FzdGxlKG1vdmVEYXRhLmZyb20sIG1vdmVEYXRhLnR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gIXRoaXMuaW5DaGVjayh0aGlzLnR1cm4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRvIG1ha2Ugc3VyZSB3ZSBhcmVuJ3Qgc2xpZGluZyB0aHJvdWdoIGNoZWNrXG4gIGlzTGVnYWxDYXN0bGUocG9zLCBjYXN0bGVUeXBlKSB7XG4gICAgY29uc3QgZGlyID0gY2FzdGxlVHlwZSA9PT0gTW92ZVR5cGVzLkNTVExfS0lORyA/IDEgOiAtMTtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGNvdW50IDw9IDIpIHtcbiAgICAgIGlmICh0aGlzLmlzQXR0YWNrZWQocG9zLCB0aGlzLnR1cm4pKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgY291bnQrKztcbiAgICAgIHBvcyArPSBkaXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbkNoZWNrKGNvbG9yKSB7XG4gICAgY29uc3Qga2luZ1BvcyA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldChjb2xvciwgUFR5cGVzLktJTkdTKS5iaXRTY2FuRm9yd2FyZCgpO1xuICAgIHJldHVybiB0aGlzLmlzQXR0YWNrZWQoa2luZ1BvcywgY29sb3IpO1xuICB9XG5cbiAgaXNBdHRhY2tlZChwb3MsIGNvbG9yKSB7XG4gICAgY29uc3QgcG9zQkIgPSBCaXRCb2FyZC5mcm9tUG9zKHBvcyk7XG4gICAgY29uc3Qgb2NjdXBpZWQgPSB0aGlzLmdldE9jY3VwaWVkKCk7XG4gICAgY29uc3Qgb3BwQ29sb3IgPSB0aGlzLmdldE90aGVyQ29sb3IoY29sb3IpO1xuICAgIGNvbnN0IHBhd25zID0gdGhpcy5nZXRDb2xvclBpZWNlU2V0KG9wcENvbG9yLCBQVHlwZXMuUEFXTlMpO1xuXG4gICAgY29uc3QgcXVlZW5CQiA9IHRoaXMuZ2V0Q29sb3JQaWVjZVNldChvcHBDb2xvciwgUFR5cGVzLlFVRUVOUyk7XG4gICAgcmV0dXJuICghUFV0aWxzW1BUeXBlcy5QQVdOU10uYXR0YWNrc0xlZnQob3BwQ29sb3IsIHBhd25zLCBwb3NCQikuaXNaZXJvKCkgfHxcbiAgICAgICAgICAgICFQVXRpbHNbUFR5cGVzLlBBV05TXS5hdHRhY2tzUmlnaHQob3BwQ29sb3IsIHBhd25zLCBwb3NCQikuaXNaZXJvKCkgfHxcbiAgICAgICAgICAgICFQVXRpbHNbUFR5cGVzLktOSUdIVFNdLm1vdmVzKHBvcywgdGhpcy5nZXRDb2xvclBpZWNlU2V0KG9wcENvbG9yLCBQVHlwZXMuS05JR0hUUykpLmlzWmVybygpIHx8XG4gICAgICAgICAgICAhUFV0aWxzW1BUeXBlcy5CSVNIT1BTXS5tb3Zlcyhwb3MsIG9jY3VwaWVkLCB0aGlzLmdldENvbG9yUGllY2VTZXQob3BwQ29sb3IsIFBUeXBlcy5CSVNIT1BTKS5vcihxdWVlbkJCKSkuaXNaZXJvKCkgfHxcbiAgICAgICAgICAgICFQVXRpbHNbUFR5cGVzLlJPT0tTXS5tb3Zlcyhwb3MsIG9jY3VwaWVkLCB0aGlzLmdldENvbG9yUGllY2VTZXQob3BwQ29sb3IsIFBUeXBlcy5ST09LUykub3IocXVlZW5CQikpLmlzWmVybygpIHx8XG4gICAgICAgICAgICAhUFV0aWxzW1BUeXBlcy5LSU5HU10ubW92ZXMocG9zLCB0aGlzLmdldENvbG9yUGllY2VTZXQob3BwQ29sb3IsIFBUeXBlcy5LSU5HUykpLmlzWmVybygpKTtcbiAgfVxuXG4gIHNldE5ld1N0YXRlKG1vdmVEYXRhKSB7XG4gICAgdGhpcy5hZGRQcmV2U3RhdGUoKTtcblxuICAgIHRoaXMuYWRqdXN0Q2FzdGxlUmlnaHRzKG1vdmVEYXRhKTtcbiAgICB0aGlzLnNldE5ld0VwU3RhdGUoKTtcbiAgICB0aGlzLnVwZGF0ZUNsb2NrKG1vdmVEYXRhKTtcbiAgfVxuXG4gIC8vIGFkZHMgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWVzIHRvIHRoZSBwcmV2U3RhdGVzIGFycmF5XG4gIC8vIHVzZWQgZm9yIG1vdmUgdW5tYWtpbmcgcHVycG9zZXNcbiAgYWRkUHJldlN0YXRlKCkge1xuICAgIGNvbnN0IHN0YXRlID0geyBlcEJCOiB0aGlzLmVwQkIsXG4gICAgICAgICAgICAgICAgICAgIGNhc3RsZVJpZ2h0czogdGhpcy5jYXN0bGVSaWdodHMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlSGFzaDogdGhpcy5zdGF0ZUhhc2gsXG4gICAgICAgICAgICAgICAgICAgIGhhbGZNb3ZlQ2xvY2s6IHRoaXMuaGFsZk1vdmVDbG9jayxcbiAgICAgICAgICAgICAgICAgICAgZnVsbE1vdmVDbG9jazogdGhpcy5mdWxsTW92ZUNsb2NrXG4gICAgICAgICAgICAgICAgICB9O1xuICAgIHRoaXMucHJldlN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgfVxuXG4gIGFkanVzdENhc3RsZVJpZ2h0cyhtb3ZlRGF0YSkge1xuICAgIGNvbnN0IHR1cm5DYXN0bGVSaWdodHMgPSB0aGlzLmdldENhc3RsZVJpZ2h0cyh0aGlzLnR1cm4pO1xuICAgIGxldCBkaXI7XG4gICAgaWYgKG1vdmVEYXRhLnBpZWNlVHlwZSA9PT0gUFR5cGVzLktJTkdTICYmIHR1cm5DYXN0bGVSaWdodHMpIHtcbiAgICAgIHRoaXMuY2xlYXJDYXN0bGVSaWdodHModGhpcy50dXJuLCBEaXJzLkVBU1QpO1xuICAgICAgdGhpcy5jbGVhckNhc3RsZVJpZ2h0cyh0aGlzLnR1cm4sIERpcnMuV0VTVCk7XG4gICAgfSBlbHNlIGlmIChtb3ZlRGF0YS5waWVjZVR5cGUgPT09IFBUeXBlcy5ST09LUyAmJiB0dXJuQ2FzdGxlUmlnaHRzKSB7XG4gICAgICBkaXIgPSBtb3ZlRGF0YS5mcm9tID4gUFV0aWxzW1BUeXBlcy5LSU5HU10uSU5JVF9QT1NbdGhpcy50dXJuXSA/IERpcnMuRUFTVCA6IERpcnMuV0VTVDtcbiAgICAgIHRoaXMuY2xlYXJDYXN0bGVSaWdodHModGhpcy50dXJuLCBkaXIpO1xuICAgIH1cblxuICAgIGlmIChtb3ZlRGF0YS5jYXB0UGllY2VUeXBlID09PSBQVHlwZXMuUk9PS1MgJiYgdGhpcy5nZXRDYXN0bGVSaWdodHModGhpcy5vcHApKSB7XG4gICAgICBkaXIgPSBtb3ZlRGF0YS50byA+IFBVdGlsc1tQVHlwZXMuS0lOR1NdLklOSVRfUE9TW3RoaXMub3BwXSA/IERpcnMuRUFTVCA6IERpcnMuV0VTVDtcbiAgICAgIHRoaXMuY2xlYXJDYXN0bGVSaWdodHModGhpcy5vcHAsIGRpcik7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDYXN0bGVSaWdodHMoY29sb3IsIGRpcikge1xuICAgIGxldCBjbGVhclJpZ2h0c1BvcyA9IDA7XG4gICAgaWYgKGNvbG9yID09PSBDb2xvcnMuQkxBQ0spIHsgY2xlYXJSaWdodHNQb3MgKz0gMjsgfVxuICAgIGlmIChkaXIgPT09IERpcnMuRUFTVCkgeyBjbGVhclJpZ2h0c1BvcyArPSAxOyB9XG5cbiAgICBsZXQgY2xlYXJSaWdodHNNYXNrID0gMSA8PCBjbGVhclJpZ2h0c1BvcztcbiAgICBpZiAoY2xlYXJSaWdodHNNYXNrICYgdGhpcy5jYXN0bGVSaWdodHMpIHtcbiAgICAgIHRoaXMuY2FzdGxlUmlnaHRzID0gKHRoaXMuY2FzdGxlUmlnaHRzICYgKH5jbGVhclJpZ2h0c01hc2spKSA+Pj4gMDtcbiAgICAgIHRoaXMuc3RhdGVIYXNoIF49IGNhc3RsZUhhc2hLZXlzW2NsZWFyUmlnaHRzUG9zXTtcbiAgICB9XG4gIH1cblxuICBzZXROZXdFcFN0YXRlKCkge1xuICAgIGNvbnN0IGVwUG9zID0gdGhpcy5lcEJCLmJpdFNjYW5Gb3J3YXJkKCk7XG4gICAgaWYgKGVwUG9zICE9PSBudWxsKSB7IHRoaXMuc3RhdGVIYXNoIF49IGVwUG9zSGFzaEtleXNbZXBQb3NdOyB9XG4gICAgdGhpcy5lcEJCID0gbmV3IEJpdEJvYXJkKCk7XG4gIH1cblxuICB1cGRhdGVDbG9jayhtb3ZlRGF0YSkge1xuICAgIGlmICh0aGlzLnR1cm4gPT09IENvbG9ycy5CTEFDSykge1xuICAgICAgdGhpcy5mdWxsTW92ZUNsb2NrKys7XG4gICAgfVxuXG4gICAgaWYgKG1vdmVEYXRhLmNhcHRQaWVjZVR5cGUgfHwgbW92ZURhdGEucGllY2VUeXBlID09PSBQVHlwZXMuUEFXTlMpIHtcbiAgICAgIHRoaXMuaGFsZk1vdmVDbG9jayA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFsZk1vdmVDbG9jaysrO1xuICAgIH1cbiAgfVxuXG4gIGV4ZWNNb3ZlVHlwZShmcm9tLCB0bywgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5OT1JNQUw6XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkRCTF9QUFVTSDpcbiAgICAgICAgbGV0IGVwUG9zID0gdG8gKyAoLVBVdGlsc1tQVHlwZXMuUEFXTlNdLkRJUlNbdGhpcy50dXJuXSAqIDgpO1xuICAgICAgICB0aGlzLmVwQkIgPSBCaXRCb2FyZC5mcm9tUG9zKGVwUG9zKTtcbiAgICAgICAgdGhpcy5zdGF0ZUhhc2ggXj0gZXBQb3NIYXNoS2V5c1tlcFBvc107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuQ1NUTF9LSU5HOlxuICAgICAgICB0aGlzLm1vdmVQaWVjZShmcm9tICsgMywgZnJvbSArIDEsIHRoaXMudHVybiwgUFR5cGVzLlJPT0tTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5DU1RMX1FVRUVOOlxuICAgICAgICB0aGlzLm1vdmVQaWVjZShmcm9tIC0gNCwgZnJvbSAtIDEsIHRoaXMudHVybiwgUFR5cGVzLlJPT0tTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5FUF9DQVBUOlxuICAgICAgICBsZXQgY2FwdHVyZWRQb3MgPSB0byAtIChQVXRpbHNbUFR5cGVzLlBBV05TXS5ESVJTW3RoaXMudHVybl0gKiA4KTtcbiAgICAgICAgdGhpcy5jbGVhclBpZWNlQXQoY2FwdHVyZWRQb3MsIHRoaXMub3BwLCBQVHlwZXMuUEFXTlMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLk5QUk9NTzpcbiAgICAgICAgdGhpcy5zZXRQaWVjZUF0KHRvLCB0aGlzLnR1cm4sIFBUeXBlcy5LTklHSFRTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5CUFJPTU86XG4gICAgICAgIHRoaXMuc2V0UGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuQklTSE9QUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuUlBST01POlxuICAgICAgICB0aGlzLnNldFBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLlJPT0tTKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5RUFJPTU86XG4gICAgICAgIHRoaXMuc2V0UGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuUVVFRU5TKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgYWRkUG9zaXRpb25Db3VudCgpIHtcbiAgICBjb25zdCBjdXJySGFzaCA9IHRoaXMuZ2V0SGFzaCgpO1xuICAgIGlmICghdGhpcy5wb3NpdGlvbkNvdW50c1tjdXJySGFzaF0pIHtcbiAgICAgIHRoaXMucG9zaXRpb25Db3VudHNbY3Vyckhhc2hdID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3NpdGlvbkNvdW50c1tjdXJySGFzaF0gKz0gMTtcbiAgICB9XG4gIH1cblxuICB1bm1ha2VQcmV2TW92ZSgpIHtcbiAgICBjb25zdCBwcmV2TW92ZSA9IHRoaXMucHJldk1vdmVzLnBvcCgpO1xuICAgIGlmICghcHJldk1vdmUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICB0aGlzLnN1YnRyYWN0UG9zaXRpb25Db3VudCgpO1xuICAgIHRoaXMuc3dhcFR1cm4oKTtcblxuICAgIGNvbnN0IG1vdmVEYXRhID0gcHJldk1vdmUuZ2V0RGF0YSgpO1xuXG4gICAgdGhpcy5yZXZlcnNlTW92ZVR5cGUobW92ZURhdGEuZnJvbSwgbW92ZURhdGEudG8sIG1vdmVEYXRhLnR5cGUpO1xuICAgIHRoaXMucmVzdG9yZVByZXZTdGF0ZSgpO1xuXG4gICAgaWYgKG1vdmVEYXRhLmlzUHJvbW8pIHtcbiAgICAgIHRoaXMuc2V0UGllY2VBdChtb3ZlRGF0YS5mcm9tLCB0aGlzLnR1cm4sIFBUeXBlcy5QQVdOUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW92ZVBpZWNlKG1vdmVEYXRhLnRvLCBtb3ZlRGF0YS5mcm9tLCB0aGlzLnR1cm4sIG1vdmVEYXRhLnBpZWNlVHlwZSk7XG4gICAgfVxuXG5cbiAgICBpZiAobW92ZURhdGEuY2FwdFBpZWNlVHlwZSkge1xuICAgICAgdGhpcy5zZXRQaWVjZUF0KG1vdmVEYXRhLnRvLCB0aGlzLm9wcCwgbW92ZURhdGEuY2FwdFBpZWNlVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXN0b3JlUHJldlN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZTdGF0ZSA9IHRoaXMucHJldlN0YXRlcy5wb3AoKTtcbiAgICB0aGlzLmVwQkIgPSBwcmV2U3RhdGUuZXBCQjtcbiAgICB0aGlzLmNhc3RsZVJpZ2h0cyA9IHByZXZTdGF0ZS5jYXN0bGVSaWdodHM7XG4gICAgdGhpcy5zdGF0ZUhhc2ggPSBwcmV2U3RhdGUuc3RhdGVIYXNoO1xuICAgIHRoaXMuaGFsZk1vdmVDbG9jayA9IHByZXZTdGF0ZS5oYWxmTW92ZUNsb2NrO1xuICAgIHRoaXMuZnVsbE1vdmVDbG9jayA9IHByZXZTdGF0ZS5mdWxsTW92ZUNsb2NrO1xuICB9XG5cbiAgc3VidHJhY3RQb3NpdGlvbkNvdW50KCkge1xuICAgIGNvbnN0IGN1cnJIYXNoID0gdGhpcy5nZXRIYXNoKCk7XG4gICAgdGhpcy5wb3NpdGlvbkNvdW50c1tjdXJySGFzaF0gLT0gMTtcbiAgICBpZiAodGhpcy5wb3NpdGlvbkNvdW50c1tjdXJySGFzaF0gPD0gMCkge1xuICAgICAgZGVsZXRlIHRoaXMucG9zaXRpb25Db3VudHNbY3Vyckhhc2hdO1xuICAgIH1cbiAgfVxuXG4gIHJldmVyc2VNb3ZlVHlwZShmcm9tLCB0bywgdHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlIE1vdmVUeXBlcy5OT1JNQUw6XG4gICAgICBjYXNlIE1vdmVUeXBlcy5EQkxfUFBVU0g6XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgTW92ZVR5cGVzLkNTVExfS0lORzpcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UoZnJvbSArIDEsIGZyb20gKyAzLCB0aGlzLnR1cm4sIFBUeXBlcy5ST09LUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuQ1NUTF9RVUVFTjpcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UoZnJvbSAtIDEsIGZyb20gLSA0LCB0aGlzLnR1cm4sIFBUeXBlcy5ST09LUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuRVBfQ0FQVDpcbiAgICAgICAgbGV0IGNhcHR1cmVkUG9zID0gdG8gLSAoUFV0aWxzW1BUeXBlcy5QQVdOU10uRElSU1t0aGlzLnR1cm5dICogOCk7XG4gICAgICAgIHRoaXMuc2V0UGllY2VBdChjYXB0dXJlZFBvcywgdGhpcy5vcHAsIFBUeXBlcy5QQVdOUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuTlBST01POlxuICAgICAgICB0aGlzLmNsZWFyUGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuS05JR0hUUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuQlBST01POlxuICAgICAgICB0aGlzLmNsZWFyUGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuQklTSE9QUyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNb3ZlVHlwZXMuUlBST01POlxuICAgICAgICB0aGlzLmNsZWFyUGllY2VBdCh0bywgdGhpcy50dXJuLCBQVHlwZXMuUk9PS1MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTW92ZVR5cGVzLlFQUk9NTzpcbiAgICAgICAgdGhpcy5jbGVhclBpZWNlQXQodG8sIHRoaXMudHVybiwgUFR5cGVzLlFVRUVOUyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVQaWVjZShmcm9tLCB0bywgY29sb3IsIHBpZWNlVHlwZSkge1xuICAgIHRoaXMuY2xlYXJQaWVjZUF0KGZyb20sIGNvbG9yLCBwaWVjZVR5cGUpO1xuICAgIHRoaXMuc2V0UGllY2VBdCh0bywgY29sb3IsIHBpZWNlVHlwZSk7XG4gIH1cblxuICBzZXRQaWVjZUF0KHBvcywgY29sb3IsIHBpZWNlVHlwZSkge1xuICAgIHRoaXMucGllY2VzW2NvbG9yXS5zZXRCaXQocG9zKTtcbiAgICB0aGlzLnBpZWNlc1twaWVjZVR5cGVdLnNldEJpdChwb3MpO1xuICAgIHRoaXMucFR5cGVzTG9jYXRpb25zW3Bvc10gPSBwaWVjZVR5cGU7XG4gICAgdGhpcy5wUG9zSGFzaCBePSBwaWVjZVBvc0hhc2hLZXlzW3Bvc11bcGllY2VUeXBlXVtjb2xvcl07XG4gIH1cblxuICBjbGVhclBpZWNlQXQocG9zLCBjb2xvciwgcGllY2VUeXBlKSB7XG4gICAgdGhpcy5waWVjZXNbY29sb3JdLmNsZWFyQml0KHBvcyk7XG4gICAgdGhpcy5waWVjZXNbcGllY2VUeXBlXS5jbGVhckJpdChwb3MpO1xuICAgIHRoaXMucFR5cGVzTG9jYXRpb25zW3Bvc10gPSBudWxsO1xuICAgIHRoaXMucFBvc0hhc2ggXj0gcGllY2VQb3NIYXNoS2V5c1twb3NdW3BpZWNlVHlwZV1bY29sb3JdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9wb3NpdGlvbi9pbmRleC5qcyIsImZ1bmN0aW9uIGdlbmVyYXRlTVNCVGFibGUobWF4KSB7XG4gIGxldCByZXMgPSBbXTtcbiAgbGV0IGludDtcbiAgZm9yIChpbnQgPSAxOyBpbnQgPD0gbWF4OyBpbnQrKykge1xuICAgIHJlc1tpbnRdID0gTWF0aC5mbG9vcihNYXRoLmxvZzIoaW50KSk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5jb25zdCBtb3N0U2lnQml0VGFibGUgPSBnZW5lcmF0ZU1TQlRhYmxlKDI1NSk7XG5cbmZ1bmN0aW9uIHBvcENvdW50MzIoaW50KSB7XG5cdGludCAtPSAoaW50ID4+PiAxKSAmIDB4NTU1NTU1NTU7XG5cdGludCA9IChpbnQgJiAweDMzMzMzMzMzKSArICgoaW50ID4+PiAyKSAmIDB4MzMzMzMzMzMpO1xuXHRyZXR1cm4gKChpbnQgKyAoaW50ID4+PiA0KSAmIDB4RjBGMEYwRikgKiAweDEwMTAxMDEpID4+PiAyNDtcbn1cblxuZnVuY3Rpb24gYml0U2NhbkZvcndhcmQzMihpbnQpIHtcbiAgcmV0dXJuIHBvcENvdW50MzIoKGludCAmIC1pbnQpIC0gMSk7XG59XG5cbmZ1bmN0aW9uIGJpdFNjYW5SZXZlcnNlMzIoaW50KSB7XG4gIGxldCByZXMgPSAwO1xuICBpZiAoaW50ID4gMHhGRkZGKSB7XG4gICAgaW50ID4+Pj0gMTY7XG4gICAgcmVzICs9IDE2O1xuICB9XG5cbiAgaWYgKGludCA+IDB4RkYpIHtcbiAgICBpbnQgPj4+PSA4O1xuICAgIHJlcyArPSA4O1xuICB9XG5cbiAgcmV0dXJuIHJlcyArIG1vc3RTaWdCaXRUYWJsZVtpbnRdO1xufVxuXG5mdW5jdGlvbiBjbGVhckxlYXN0U2lnQml0MzIoaW50KSB7XG4gIHJldHVybiAoaW50ICYgKGludCAtIDEpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBvcENvdW50MzIsXG4gIGJpdFNjYW5Gb3J3YXJkMzIsXG4gIGJpdFNjYW5SZXZlcnNlMzIsXG4gIGNsZWFyTGVhc3RTaWdCaXQzMlxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2JpdGJvYXJkL2ludDMyVXRpbHMuanMiLCJjb25zdCBCaXRCb2FyZCA9IHJlcXVpcmUoJy4vYml0Ym9hcmQuanMnKTtcblxuLy8gdGhpcyBmaWxlIGluY2x1ZGVzIHN0YXRpYyBzZXRzIG9mIGJpdGJvYXJkcyB0aGF0XG4vLyBhcmUgY29tbW9ubHkgdXNlZCB0aHJvdWdob3V0IHRoZSBwcm9ncmFtXG5cbmNvbnN0IEZVTExfQk9BUkQgPSBuZXcgQml0Qm9hcmQoKS5ub3QoKTtcblxuY29uc3QgQ09MUyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgY29sSWR4ID0gMDtcbiAgbGV0IGNvbHMgPSBbXTtcbiAgd2hpbGUgKGNvbElkeCA8IDgpIHtcbiAgICBjb2xzLnB1c2goQml0Qm9hcmQuZnJvbUNvbChjb2xJZHgpKTtcbiAgICBjb2xJZHgrKztcbiAgfVxuXG4gIHJldHVybiBjb2xzO1xufSgpO1xuXG5cbmNvbnN0IFJPV1MgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHJvd0lkeCA9IDA7XG4gIGxldCByb3dzID0gW107XG4gIHdoaWxlIChyb3dJZHggPCA4KSB7XG4gICAgcm93cy5wdXNoKEJpdEJvYXJkLmZyb21Sb3cocm93SWR4KSk7XG4gICAgcm93SWR4Kys7XG4gIH1cblxuICByZXR1cm4gcm93cztcbn0oKTtcblxuXG5jb25zdCBESUFHUyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaWFncyA9IFtdO1xuICBsZXQgcG9zID0gNTY7XG5cbiAgd2hpbGUgKHBvcyA+PSAwKSB7XG4gICAgZGlhZ3MucHVzaChCaXRCb2FyZC51cHBlclJpZ2h0RGlhZyhwb3MpKTtcbiAgICBwb3MgLT0gODtcbiAgfVxuXG4gIHBvcyA9IDE7XG5cbiAgd2hpbGUgKHBvcyA8IDgpIHtcbiAgICBkaWFncy5wdXNoKEJpdEJvYXJkLnVwcGVyUmlnaHREaWFnKHBvcykpO1xuICAgIHBvcysrO1xuICB9XG5cbiAgcmV0dXJuIGRpYWdzO1xufSgpO1xuXG5cbmNvbnN0IEFOVElfRElBR1MgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYW50aURpYWdzID0gW107XG4gIGxldCBwb3MgPSAwO1xuXG4gIHdoaWxlIChwb3MgPCA4KSB7XG4gICAgYW50aURpYWdzLnB1c2goQml0Qm9hcmQudXBwZXJMZWZ0RGlhZyhwb3MpKTtcbiAgICBwb3MrKztcbiAgfVxuXG4gIHBvcyA9IDE1O1xuICB3aGlsZSAocG9zIDwgNjQpIHtcbiAgICBhbnRpRGlhZ3MucHVzaChCaXRCb2FyZC51cHBlckxlZnREaWFnKHBvcykpO1xuICAgIHBvcyArPSA4O1xuICB9XG5cbiAgcmV0dXJuIGFudGlEaWFncztcbn0oKTtcblxuY29uc3QgTk9SVEhfT0ZfUk9XID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBsZXQgYmIgPSBGVUxMX0JPQVJEO1xuICBsZXQgaWR4ID0gMDtcblxuICB3aGlsZSAoaWR4IDw9IDcpIHtcbiAgICBiYiA9IGJiLnhvcihST1dTW2lkeF0pO1xuICAgIHJlcy5wdXNoKGJiKTtcbiAgICBpZHgrKztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbmNvbnN0IFNPVVRIX09GX1JPVyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgbGV0IGJiID0gbmV3IEJpdEJvYXJkKCk7XG4gIGxldCBpZHggPSAwO1xuXG4gIHdoaWxlIChpZHggPD0gNykge1xuICAgIHJlcy5wdXNoKGJiKTtcbiAgICBiYiA9IGJiLm9yKFJPV1NbaWR4XSk7XG4gICAgaWR4Kys7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5jb25zdCBFQVNUX09GX0NPTCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgbGV0IGJiID0gRlVMTF9CT0FSRDtcbiAgbGV0IGlkeCA9IDA7XG5cbiAgd2hpbGUgKGlkeCA8PSA3KSB7XG4gICAgYmIgPSBiYi54b3IoQ09MU1tpZHhdKTtcbiAgICByZXMucHVzaChiYik7XG4gICAgaWR4Kys7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5jb25zdCBXRVNUX09GX0NPTCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgbGV0IGJiID0gbmV3IEJpdEJvYXJkKCk7XG4gIGxldCBpZHggPSAwO1xuXG4gIHdoaWxlIChpZHggPD0gNykge1xuICAgIHJlcy5wdXNoKGJiKTtcbiAgICBiYiA9IGJiLm9yKENPTFNbaWR4XSk7XG4gICAgaWR4Kys7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRlVMTF9CT0FSRCxcbiAgQ09MUyxcbiAgUk9XUyxcbiAgRElBR1MsXG4gIEFOVElfRElBR1MsXG4gIE5PUlRIX09GX1JPVyxcbiAgU09VVEhfT0ZfUk9XLFxuICBFQVNUX09GX0NPTCxcbiAgV0VTVF9PRl9DT0xcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9iaXRib2FyZC9tYXNrcy5qcyIsIi8vIGh0dHBzOi8vd3d3LmNoZXNzcHJvZ3JhbW1pbmcub3JnL0VuY29kaW5nX01vdmVzI0Zyb20tVG9fQmFzZWRcbi8vIHJlcXVpcmUoJy4uL3N0cmluZ19jb250YW50cy5qcycpO1xuXG5jb25zdCB0eXBlc0FyciA9IFsnTk9STUFMJywgJ0RCTF9QUFVTSCcsXG4gICAgICAgICAgICAgICAgICAnQ1NUTF9LSU5HJywgJ0NTVExfUVVFRU4nLFxuICAgICAgICAgICAgICAgICAgJ0VQX0NBUFQnLCAnTlBST01PJyxcbiAgICAgICAgICAgICAgICAgICdCUFJPTU8nLCdSUFJPTU8nLCAnUVBST01PJ107XG5cbmNvbnN0IFR5cGVzID0gdHlwZXNBcnIucmVkdWNlKChyZXMsIHR5cGUsIGlkeCkgPT4ge1xuICByZXNbdHlwZV0gPSBpZHg7XG4gIHJldHVybiByZXM7XG59LCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyBUeXBlcyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvbW92ZS9jb25zdGFudHMuanMiLCJjb25zdCBzdGVwTW92ZSA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL3N0ZXBfbW92ZS5qcycpO1xuY29uc3QgeyBCQk1hc2tzIH0gPSByZXF1aXJlKCcuLi9iaXRib2FyZCcpO1xuY29uc3QgeyBDb2xvcnMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmNvbnN0IERJUlMgPSB7XG4gIFtDb2xvcnMuV0hJVEVdOiAxLFxuICBbQ29sb3JzLkJMQUNLXTogLTFcbn07XG5cbmNvbnN0IElOSVRfTUFTS1MgPSB7XG4gIFtDb2xvcnMuV0hJVEVdOiBCQk1hc2tzLlJPV1NbMV0sXG4gIFtDb2xvcnMuQkxBQ0tdOiBCQk1hc2tzLlJPV1NbNl1cbn07XG5cbmNvbnN0IFBhd25zID0ge1xuICB2YWx1ZTogMTAwLFxuICBwb3NpdGlvblZhbHVlczogW1xuXHRcdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdFx0NTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLFxuXHRcdDEwLCAxMCwgMjAsIDMwLCAzMCwgMjAsIDEwLCAxMCxcblx0XHQ1LCA1LCAxMCwgMjUsIDI1LCAxMCwgNSwgNSxcblx0XHQwLCAwLCAwLCAyMCwgMjAsIDAsIDAsIDAsXG5cdFx0NSwgLTUsIC0xMCwgMCwgMCwgLTEwLCAtNSwgNSxcblx0XHQ1LCAxMCwgMTAsIC0yMCwgLTIwLCAxMCwgMTAsIDUsXG5cdFx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMFxuXHRdLFxuICBESVJTLFxuICBQUk9NT19NQVNLUzogeyBbQ29sb3JzLldISVRFXTogQkJNYXNrcy5ST1dTWzddLFxuICAgICAgICAgICAgICAgICBbQ29sb3JzLkJMQUNLXTogQkJNYXNrcy5ST1dTWzBdXG4gICAgICAgICAgICAgICB9LFxuICBhdHRhY2tzTGVmdDogKGNvbG9yLCBwb3NpdGlvbnMsIG9wcFBpZWNlcykgPT4ge1xuICAgIHJldHVybiBzdGVwTW92ZShwb3NpdGlvbnMsIERJUlNbY29sb3JdLCAtRElSU1tjb2xvcl0pLmFuZChvcHBQaWVjZXMpO1xuICB9LFxuICBhdHRhY2tzUmlnaHQ6IChjb2xvciwgcG9zaXRpb25zLCBvcHBQaWVjZXMpID0+IHtcbiAgICByZXR1cm4gc3RlcE1vdmUocG9zaXRpb25zLCBESVJTW2NvbG9yXSwgRElSU1tjb2xvcl0pLmFuZChvcHBQaWVjZXMpO1xuICB9LFxuICBzaW5nbGVQdXNoOiAoY29sb3IsIHBvc2l0aW9ucywgbm90T2NjdXBpZWQpID0+IHtcbiAgICByZXR1cm4gc3RlcE1vdmUocG9zaXRpb25zLCBESVJTW2NvbG9yXSwgMCkuYW5kKG5vdE9jY3VwaWVkKTtcbiAgfSxcbiAgZG91YmxlUHVzaDogKGNvbG9yLCBwb3NpdGlvbnMsIG5vdE9jY3VwaWVkKSA9PiB7XG4gICAgY29uc3Qgb25lUHVzaCA9IHN0ZXBNb3ZlKHBvc2l0aW9ucy5hbmQoSU5JVF9NQVNLU1tjb2xvcl0pLCBESVJTW2NvbG9yXSwgMCkuYW5kKG5vdE9jY3VwaWVkKTtcbiAgICByZXR1cm4gc3RlcE1vdmUob25lUHVzaCwgRElSU1tjb2xvcl0sIDApLmFuZChub3RPY2N1cGllZCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGF3bnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvcGF3bnMuanMiLCJjb25zdCB7IEtOSUdIVF9NT1ZFUyB9ID0gcmVxdWlyZSgnLi9tb3ZlbWVudHMvbWFza3MuanMnKTtcblxuY29uc3QgS25pZ2h0ID0ge1xuICB2YWx1ZTogMzI1LFxuICBwb3NpdGlvblZhbHVlczogW1xuXHRcdC01MCwgLTQwLCAtMzAsIC0zMCwgLTMwLCAtMzAsIC00MCwgLTUwLFxuXHRcdC00MCwgLTIwLCAwLCAwLCAwLCAwLCAtMjAsIC00MCxcblx0XHQtMzAsIDAsIDEwLCAxNSwgMTUsIDEwLCAwLCAtMzAsXG5cdFx0LTMwLCA1LCAxNSwgMjAsIDIwLCAxNSwgNSwgLTMwLFxuXHRcdC0zMCwgMCwgMTUsIDIwLCAyMCwgMTUsIDAsIC0zMCxcblx0XHQtMzAsIDUsIDEwLCAxNSwgMTUsIDEwLCA1LCAtMzAsXG5cdFx0LTQwLCAtMjAsIDAsIDUsIDUsIDAsIC0yMCwgLTQwLFxuXHRcdC01MCwgLTQwLCAtMzAsIC0zMCwgLTMwLCAtMzAsIC00MCwgLTUwXG5cdF0sXG4gIG1vdmVzOiAocG9zaXRpb24sIG5vdE93blBpZWNlcykgPT4ge1xuICAgIHJldHVybiBLTklHSFRfTU9WRVNbcG9zaXRpb25dLmFuZChub3RPd25QaWVjZXMpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtuaWdodDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9rbmlnaHQuanMiLCJjb25zdCB7IGRpYWcgfSA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL3NsaWRlX21vdmVzLmpzJyk7XG5cbmNvbnN0IEJpc2hvcCA9IHtcbiAgdmFsdWU6IDMyNSxcbiAgcG9zaXRpb25WYWx1ZXM6IFtcblx0XHQtMjAsIC0xMCwgLTEwLCAtMTAsIC0xMCwgLTEwLCAtMTAsIC0yMCxcblx0XHQtMTAsIDAsIDAsIDAsIDAsIDAsIDAsIC0xMCxcblx0XHQtMTAsIDAsIDUsIDEwLCAxMCwgNSwgMCwgLTEwLFxuXHRcdC0xMCwgNSwgNSwgMTAsIDEwLCA1LCA1LCAtMTAsXG5cdFx0LTEwLCAwLCAxMCwgMTAsIDEwLCAxMCwgMCwgLTEwLFxuXHRcdC0xMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgLTEwLFxuXHRcdC0xMCwgNSwgMCwgMCwgMCwgMCwgNSwgLTEwLFxuXHRcdC0yMCwgLTEwLCAtMTAsIC0xMCwgLTEwLCAtMTAsIC0xMCwgLTIwXG5cdF0sXG4gIG1vdmVzOiAocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpID0+IHtcbiAgICByZXR1cm4gZGlhZyhwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcyk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmlzaG9wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL2Jpc2hvcC5qcyIsImNvbnN0IHsgaG9yaXpWZXJ0IH0gPSByZXF1aXJlKCcuL21vdmVtZW50cy9zbGlkZV9tb3Zlcy5qcycpO1xuXG5jb25zdCBSb29rID0ge1xuICB2YWx1ZTogNTAwLFxuICBwb3NpdGlvblZhbHVlczpcdFtcblx0XHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHRcdDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsXG5cdFx0LTUsIDAsIDAsIDAsIDAsIDAsIDAsIC01LFxuXHRcdC01LCAwLCAwLCAwLCAwLCAwLCAwLCAtNSxcblx0XHQtNSwgMCwgMCwgMCwgMCwgMCwgMCwgLTUsXG5cdFx0LTUsIDAsIDAsIDAsIDAsIDAsIDAsIC01LFxuXHRcdC01LCAwLCAwLCAwLCAwLCAwLCAwLCAtNSxcblx0XHQwLCAwLCAwLCA1LCA1LCAwLCAwLCAwXG5cdF0sXG4gIG1vdmVzOiAocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpID0+IHtcbiAgICByZXR1cm4gaG9yaXpWZXJ0KHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9yb29rLmpzIiwiY29uc3QgeyBkaWFnLCBob3JpelZlcnQgfSA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL3NsaWRlX21vdmVzLmpzJyk7XG5cbmNvbnN0IFF1ZWVuID0ge1xuICB2YWx1ZTogMTA1MCxcbiAgcG9zaXRpb25WYWx1ZXM6IFtcblx0XHQtMjAsIC0xMCwgLTEwLCAtNSwgLTUsIC0xMCwgLTEwLCAtMjAsXG5cdFx0LTEwLCAwLCAwLCAwLCAwLCAwLCAwLCAtMTAsXG5cdFx0LTEwLCAwLCA1LCA1LCA1LCA1LCAwLCAtMTAsXG5cdFx0LTUsIDAsIDUsIDUsIDUsIDUsIDAsIC01LFxuXHRcdDAsIDAsIDUsIDUsIDUsIDUsIDAsIC01LFxuXHRcdC0xMCwgNSwgNSwgNSwgNSwgNSwgMCwgLTEwLFxuXHRcdC0xMCwgMCwgNSwgMCwgMCwgMCwgMCwgLTEwLFxuXHRcdC0yMCwgLTEwLCAtMTAsIC01LCAtNSwgLTEwLCAtMTAsIC0yMFxuXHRdLFxuICBtb3ZlczogKHBvc2l0aW9uLCBvY2N1cGllZCwgbm90T3duUGllY2VzKSA9PiB7XG4gICAgcmV0dXJuIGRpYWcocG9zaXRpb24sIG9jY3VwaWVkLCBub3RPd25QaWVjZXMpLm9yKGhvcml6VmVydChwb3NpdGlvbiwgb2NjdXBpZWQsIG5vdE93blBpZWNlcykpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZWVuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcGllY2VzL3F1ZWVuLmpzIiwiY29uc3QgeyBCQk1hc2tzIH0gPSByZXF1aXJlKCcuLi9iaXRib2FyZCcpO1xuY29uc3QgRGlycyA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL2Rpcl9jb25zdGFudHMuanMnKTtcbmNvbnN0IHsgS0lOR19NT1ZFUywgU0xJREVfTU9WRVMgfSA9IHJlcXVpcmUoJy4vbW92ZW1lbnRzL21hc2tzLmpzJyk7XG5jb25zdCB7IENvbG9ycyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMuanMnKTtcblxuY29uc3QgSU5JVF9QT1MgPSB7XG4gIFtDb2xvcnMuQkxBQ0tdOiA2MCxcbiAgW0NvbG9ycy5XSElURV06IDRcbn07XG5cbmNvbnN0IEtpbmcgPSB7XG4gIHZhbHVlOiA0MDAwMCxcbiAgcG9zaXRpb25WYWx1ZXM6XHRbXG5cdFx0LTMwLCAtNDAsIC00MCwgLTUwLCAtNTAsIC00MCwgLTQwLCAtMzAsXG5cdFx0LTMwLCAtNDAsIC00MCwgLTUwLCAtNTAsIC00MCwgLTQwLCAtMzAsXG5cdFx0LTMwLCAtNDAsIC00MCwgLTUwLCAtNTAsIC00MCwgLTQwLCAtMzAsXG5cdFx0LTMwLCAtNDAsIC00MCwgLTUwLCAtNTAsIC00MCwgLTQwLCAtMzAsXG5cdFx0LTIwLCAtMzAsIC0zMCwgLTQwLCAtNDAsIC0zMCwgLTMwLCAtMjAsXG5cdFx0LTEwLCAtMjAsIC0yMCwgLTIwLCAtMjAsIC0yMCwgLTIwLCAtMTAsXG5cdFx0IDIwLCAyMCwgMCwgMCwgMCwgMCwgMjAsIDIwLFxuXHRcdCAyMCwgMzAsIDEwLCAwLCAwLCAxMCwgMzAsIDIwXG5cdF0sXG4gIElOSVRfUE9TLFxuICBtb3ZlczogKHBvc2l0aW9uLCBub3RPd25QaWVjZXMpID0+IHtcbiAgICByZXR1cm4gS0lOR19NT1ZFU1twb3NpdGlvbl0uYW5kKG5vdE93blBpZWNlcyk7XG4gIH0sXG4gIGNhbkNhc3RsZTogKGNvbG9yLCBkaXIsIG5vdE9jY3VwaWVkKSA9PiB7XG4gICAgY29uc3QgY2FzdGxlU2xpZGUgPSBTTElERV9NT1ZFU1tJTklUX1BPU1tjb2xvcl1dW2Rpcl0uYW5kKG5vdE9jY3VwaWVkKTtcbiAgICBpZiAoZGlyID09PSBEaXJzLkVBU1QpIHtcbiAgICAgIHJldHVybiBjYXN0bGVTbGlkZS5wb3BDb3VudCgpID09PSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FzdGxlU2xpZGUucG9wQ291bnQoKSA9PT0gMztcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gS2luZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9raW5nLmpzIiwiY29uc3QgeyBUeXBlcywgQ29sb3JzLCBQaWVjZVR5cGVMZXR0ZXJzIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cy5qcycpO1xuXG5mdW5jdGlvbiBwaWVjZVRvTGV0dGVyKHR5cGUsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gQ29sb3JzLldISVRFKSB7XG4gICAgcmV0dXJuIFBpZWNlVHlwZUxldHRlcnNbdHlwZV07XG4gIH0gZWxzZSBpZiAoY29sb3IgPT09IENvbG9ycy5CTEFDSykge1xuICAgIHJldHVybiBQaWVjZVR5cGVMZXR0ZXJzW3R5cGVdLnRvVXBwZXJDYXNlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGV0dGVyVG9Db2xvcihsZXR0ZXIpIHtcbiAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpID09PSBsZXR0ZXIgPyBDb2xvcnMuQkxBQ0sgOiBDb2xvcnMuV0hJVEU7XG59XG5cbmZ1bmN0aW9uIGxldHRlclRvVHlwZShsZXR0ZXIpIHtcbiAgY29uc3QgcGllY2VUeXBlcyA9IE9iamVjdC52YWx1ZXMoVHlwZXMpO1xuICBsZXQgcGllY2VUeXBlO1xuICBsZXQgaWR4O1xuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgcGllY2VUeXBlcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgaWYgKFBpZWNlVHlwZUxldHRlcnNbcGllY2VUeXBlc1tpZHhdXSA9PT0gbGV0dGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHBpZWNlVHlwZSA9IHBpZWNlVHlwZXNbaWR4XTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwaWVjZVR5cGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwaWVjZVRvTGV0dGVyLCBsZXR0ZXJUb0NvbG9yLCBsZXR0ZXJUb1R5cGUgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3BpZWNlcy9jb252ZXJzaW9ucy5qcyIsImNvbnN0IHsgVHlwZXMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmZ1bmN0aW9uIGVhY2hQaWVjZVR5cGUoY2IpIHtcbiAgbGV0IHR5cGU7XG4gIGZvciAodHlwZSA9IFR5cGVzLlBBV05TOyB0eXBlIDw9IFR5cGVzLktJTkdTOyB0eXBlKyspIHtcbiAgICBjYih0eXBlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVhY2hQaWVjZVR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9waWVjZXMvZWFjaF9waWVjZV90eXBlLmpzIiwiY29uc3QgeyBQVHlwZXMsIFBVdGlscywgQ29sb3JzLCBlYWNoUGllY2VUeXBlIH0gPSByZXF1aXJlKCcuLi9waWVjZXMnKTtcblxuLy8gd2Ugc3RvcmUgem9icmlzdCBoYXNoIHZhbHVlcyBhcyBzaWduZWQgMzJiaXQgaW50ZWdlcnNcblxuZnVuY3Rpb24gcmFuZFNpZ25lZDMyQml0KCkge1xuICBjb25zdCBwb3NpdGl2ZSA9IFt0cnVlLCBmYWxzZV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICBpZiAocG9zaXRpdmUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1hdGgucG93KDIsIDMxKSAtIDEpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNYXRoLnBvdygyLCAzMSkpKTtcbiAgfVxufVxuXG5jb25zdCBwaWVjZVBvc0hhc2hLZXlzID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZXMgPSBbXTtcbiAgbGV0IHBvcztcbiAgbGV0IG5ld1Bvc0tleXM7XG5cbiAgY29uc3QgYWRkUFR5cGVLZXlzID0gKHBUeXBlKSA9PiB7XG4gICAgcmVzW3Bvc11bcFR5cGVdID0ge307XG4gICAgcmVzW3Bvc11bcFR5cGVdW0NvbG9ycy5XSElURV0gPSByYW5kU2lnbmVkMzJCaXQoKTtcbiAgICByZXNbcG9zXVtwVHlwZV1bQ29sb3JzLkJMQUNLXSA9IHJhbmRTaWduZWQzMkJpdCgpO1xuICB9O1xuXG4gIGZvciAocG9zID0gMDsgcG9zIDwgNjQ7IHBvcysrKSB7XG4gICAgcmVzW3Bvc10gPSB7fTtcbiAgICBlYWNoUGllY2VUeXBlKChwVHlwZSkgPT4gYWRkUFR5cGVLZXlzKHBUeXBlKSk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5jb25zdCBlcFBvc0hhc2hLZXlzID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZXMgPSB7fTtcbiAgbGV0IHBvcztcblxuICAvLyBjYW4gb25seSBlbiBwYXNzYW50IG9udG8gM3JkIG9yIDZ0aCByb3dcbiAgZm9yIChwb3MgPSAxNjsgcG9zIDw9IDIzOyBwb3MrKykge1xuICAgIHJlc1twb3NdID0gcmFuZFNpZ25lZDMyQml0KCk7XG4gIH1cblxuICBmb3IgKHBvcyA9IDQwOyBwb3MgPD0gNDc7IHBvcysrKSB7XG4gICAgcmVzW3Bvc10gPSByYW5kU2lnbmVkMzJCaXQoKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbmNvbnN0IGNhc3RsZUhhc2hLZXlzID0gZnVuY3Rpb24oKSB7XG4gIGxldCByZXMgPSBbXTtcbiAgbGV0IHJpZ2h0c0lkeDtcblxuICBmb3IgKHJpZ2h0c0lkeCA9IDA7IHJpZ2h0c0lkeCA8IDQ7IHJpZ2h0c0lkeCsrKSB7XG4gICAgcmVzW3JpZ2h0c0lkeF0gPSByYW5kU2lnbmVkMzJCaXQoKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59KCk7XG5cbmNvbnN0IHR1cm5IYXNoS2V5cyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgcmVzW0NvbG9ycy5XSElURV0gPSByYW5kU2lnbmVkMzJCaXQoKTtcbiAgcmVzW0NvbG9ycy5CTEFDS10gPSByYW5kU2lnbmVkMzJCaXQoKTtcblxuICByZXR1cm4gcmVzO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcGllY2VQb3NIYXNoS2V5cywgZXBQb3NIYXNoS2V5cywgY2FzdGxlSGFzaEtleXMsIHR1cm5IYXNoS2V5cyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvcG9zaXRpb24vemhhc2hfY29uc3RhbnRzLmpzIiwiY29uc3QgTW92ZVNlYXJjaCA9IHJlcXVpcmUoJy4vbW92ZV9zZWFyY2guanMnKTtcblxuY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRoaW5raW5nVGltZSA9IDEwMDA7XG4gICAgdGhpcy5wcmV2UGVyZm9ybWFuY2UgPSBudWxsO1xuICB9XG5cbiAgc2V0VGhpbmtpbmdUaW1lKHRoaW5raW5nVGltZSkge1xuICAgIHRoaXMudGhpbmtpbmdUaW1lID0gdGhpbmtpbmdUaW1lO1xuICB9XG5cbiAgY2hvb3NlTW92ZShwb3NpdGlvbiwgYXZhaWxhYmxlTW92ZXMpIHtcbiAgICBjb25zdCBtb3ZlU2VhcmNoID0gbmV3IE1vdmVTZWFyY2gocG9zaXRpb24sIGF2YWlsYWJsZU1vdmVzKTtcbiAgICBjb25zdCBiZXN0TW92ZSA9IG1vdmVTZWFyY2guZmluZEJlc3QodGhpcy50aGlua2luZ1RpbWUpO1xuICAgIGNvbnN0IHBlcmZSZXN1bHRzID0gbW92ZVNlYXJjaC5nZXRQZXJmb3JtYW5jZSgpO1xuXG4gICAgcmV0dXJuIHsgbW92ZTogYmVzdE1vdmUsIHBlcmZvcm1hbmNlOiBwZXJmUmVzdWx0cyB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQUk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9haS9pbmRleC5qcyIsImNvbnN0IHsgUFR5cGVzLCBQVXRpbHMsXG4gICAgICAgIENvbG9ycywgRGlycyxcbiAgICAgICAgZWFjaFBpZWNlVHlwZSB9ID0gcmVxdWlyZSgnLi4vcGllY2VzJyk7XG5jb25zdCB7IFRyYW5zcG9zVGFibGUsIFRBQkxFX1NDT1JFX1RZUEVTIH0gPSByZXF1aXJlKCcuL3RyYW5zcG9zX3RhYmxlLmpzJyk7XG5jb25zdCBLaWxsZXJNb3ZlTGlzdCA9IHJlcXVpcmUoJy4va2lsbGVyX21vdmVfbGlzdC5qcycpO1xuY29uc3QgUGVyZk1vbml0b3IgPSByZXF1aXJlKCcuL3BlcmZfbW9uaXRvci5qcycpO1xuXG5jb25zdCBFQVJMWV9FWElUID0gJ2Vhcmx5IGV4aXQnO1xuXG5jbGFzcyBNb3ZlU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGluaXRBdmFpbGFibGUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5pbml0QXZhaWxhYmxlID0gaW5pdEF2YWlsYWJsZTtcbiAgICB0aGlzLnRyYW5zUG9zVGFibGUgPSBuZXcgVHJhbnNwb3NUYWJsZSgpO1xuICAgIHRoaXMua2lsbGVyTW92ZUxpc3QgPSBuZXcgS2lsbGVyTW92ZUxpc3QoKTtcbiAgICB0aGlzLnBlcmZNb25pdG9yID0gbmV3IFBlcmZNb25pdG9yKCk7XG4gIH1cblxuICBmaW5kQmVzdCh0aGlua2luZ1RpbWUpIHtcbiAgICB0aGlzLnBlcmZNb25pdG9yLnNldFN0YXJ0VGltZSgpO1xuICAgIHRoaXMuZW5kVGltZSA9IERhdGUubm93KCkgKyB0aGlua2luZ1RpbWU7XG5cbiAgICB0aGlzLm1heERlcHRoID0gMTtcbiAgICB3aGlsZSAoRGF0ZS5ub3coKSA8IHRoaXMuZW5kVGltZSAmJiB0aGlzLm1heERlcHRoIDwgMzApIHtcbiAgICAgIHRoaXMua2lsbGVyTW92ZUxpc3QuYWRkU2xvdCgpO1xuICAgICAgdGhpcy5uZWdhTWF4KHRoaXMubWF4RGVwdGgsIC1JbmZpbml0eSwgSW5maW5pdHkpO1xuICAgICAgdGhpcy5tYXhEZXB0aCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heERlcHRoID49IDMwKSB7XG4gICAgICBjb25zb2xlLmxvZygnQXBwcm9hY2hpbmcgZHJhdy4uLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMucGVyZk1vbml0b3IuZGVwdGgpIHsgdGhpcy5wZXJmTW9uaXRvci5zZXREZXB0aCh0aGlzLm1heERlcHRoIC0gMSk7IH1cbiAgICAgIHRoaXMucGVyZk1vbml0b3Iuc2V0RW5kVGltZSgpO1xuICAgICAgdGhpcy5wZXJmTW9uaXRvci5wcmludFJlc3VsdHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyTm9kZUVudHJ5ID0gdGhpcy50cmFuc1Bvc1RhYmxlLmdldEVudHJ5KHRoaXMucG9zaXRpb24uZ2V0SGFzaCgpKTtcbiAgICBpZiAoY3Vyck5vZGVFbnRyeSAmJiBjdXJyTm9kZUVudHJ5LmJlc3RNb3ZlKSB7XG4gICAgICByZXR1cm4gY3Vyck5vZGVFbnRyeS5iZXN0TW92ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdEF2YWlsYWJsZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmluaXRBdmFpbGFibGUubGVuZ3RoKV07XG4gICAgfVxuICB9XG5cbiAgZ2V0UGVyZm9ybWFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyZk1vbml0b3IuZ2V0UmVzdWx0cygpO1xuICB9XG5cbiAgcXVpZXNjZW5jZVNlYXJjaChhbHBoYSwgYmV0YSkge1xuICAgIGlmIChEYXRlLm5vdygpID4gdGhpcy5lbmRUaW1lKSB7XG4gICAgICB0aGlzLnBlcmZNb25pdG9yLnNldERlcHRoKHRoaXMubWF4RGVwdGggLSAxKTtcbiAgICAgIHJldHVybiBFQVJMWV9FWElUO1xuICAgIH1cbiAgICB0aGlzLnBlcmZNb25pdG9yLmxvZ1F1aWVzY2VudE5vZGUoKTtcbiAgICBjb25zdCBzdGFuZFBhdFZhbCA9IHRoaXMuZXZhbHVhdGUoKTtcblxuICAgIGlmIChzdGFuZFBhdFZhbCA+PSBiZXRhKSB7XG4gICAgICByZXR1cm4gYmV0YTtcbiAgICB9IGVsc2UgaWYgKHN0YW5kUGF0VmFsID4gYWxwaGEpIHtcbiAgICAgIGFscGhhID0gc3RhbmRQYXRWYWw7XG4gICAgfVxuXG4gICAgbGV0IGluQ2hlY2sgPSB0aGlzLnBvc2l0aW9uLmluQ2hlY2sodGhpcy5wb3NpdGlvbi50dXJuKTtcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU1vdmVPcmRlclNjb3JlKG1vdmUpIHtcbiAgICAgIGxldCBzY29yZSA9IG1vdmUuZ2V0Q2FwdFBpZWNlKCk/ICgoMSArIG1vdmUuZ2V0Q2FwdFBpZWNlKCkpIC8gKDEgKyBtb3ZlLmdldFBpZWNlKCkpKTogMDtcbiAgICAgIHNjb3JlID0gc2NvcmUgKiAxMCArIG1vdmUuZ2V0UGllY2UoKTtcbiAgICAgIHNjb3JlID0gc2NvcmUgKiAxMCArIG1vdmUuZ2V0VHlwZSgpO1xuXG4gICAgICByZXR1cm4gc2NvcmU7XG4gICAgfVxuXG4gICAgLy8gaW5jbHVkZSBxdWlldCBtb3ZlcyAoaWUgbm9uIGNhcHR1cmVzKSBvbmx5IGlmIHRoZSBraW5nIGlzIGluIGNoZWNrO1xuICAgIGNvbnN0IG1vdmVzID0gdGhpcy5zb3J0TW92ZXModGhpcy5wb3NpdGlvbi5nZW5lcmF0ZVBzZXVkb01vdmVzKGluQ2hlY2spLCBjYWxjdWxhdGVNb3ZlT3JkZXJTY29yZSk7XG5cbiAgICBsZXQgbW92ZUlkeDtcbiAgICBsZXQgc2NvcmU7XG5cbiAgICBmb3IgKG1vdmVJZHggPSAwOyBtb3ZlSWR4IDwgbW92ZXMubGVuZ3RoOyBtb3ZlSWR4KyspIHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLm1ha2VNb3ZlKG1vdmVzW21vdmVJZHhdKSkge1xuICAgICAgICBzY29yZSA9IC10aGlzLnF1aWVzY2VuY2VTZWFyY2goLWJldGEsIC1hbHBoYSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udW5tYWtlUHJldk1vdmUoKTtcblxuICAgICAgICBpZiAoc2NvcmUgPj0gYmV0YSkgeyByZXR1cm4gYmV0YTsgfVxuICAgICAgICBpZiAoc2NvcmUgPiBhbHBoYSkgeyBhbHBoYSA9IHNjb3JlOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhO1xuICB9XG5cbiAgbmVnYU1heChkZXB0aCwgYWxwaGEsIGJldGEpIHtcbiAgICBpZiAoRGF0ZS5ub3coKSA+IHRoaXMuZW5kVGltZSkge1xuICAgICAgdGhpcy5wZXJmTW9uaXRvci5zZXREZXB0aCh0aGlzLm1heERlcHRoIC0gMSk7XG4gICAgICByZXR1cm4gRUFSTFlfRVhJVDtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2QWxwaGEgPSBhbHBoYTtcbiAgICBjb25zdCBjdXJySGFzaCA9IHRoaXMucG9zaXRpb24uZ2V0SGFzaCgpO1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy50cmFuc1Bvc1RhYmxlLmdldEVudHJ5KGN1cnJIYXNoKTtcbiAgICBpZiAoZW50cnkgJiYgZW50cnkuZGVwdGggPj0gZGVwdGgpIHtcbiAgICAgIHRoaXMucGVyZk1vbml0b3IubG9nVGFibGVIaXQoKTtcbiAgICAgIHN3aXRjaCAoZW50cnkudHlwZSkge1xuICAgICAgICBjYXNlIFRBQkxFX1NDT1JFX1RZUEVTLkVYQUNUOlxuICAgICAgICAgIHJldHVybiBlbnRyeS5zY29yZTtcbiAgICAgICAgY2FzZSBUQUJMRV9TQ09SRV9UWVBFUy5MT1dFUkJPVU5EOlxuICAgICAgICAgIGFscGhhID0gTWF0aC5tYXgoYWxwaGEsIGVudHJ5LnNjb3JlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUQUJMRV9TQ09SRV9UWVBFUy5VUFBFUkJPVU5EOlxuICAgICAgICAgIGJldGEgPSBNYXRoLm1pbihiZXRhLCBlbnRyeS5zY29yZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoYWxwaGEgPj0gYmV0YSkgeyByZXR1cm4gZW50cnkuc2NvcmU7IH1cbiAgICB9XG5cbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnF1aWVzY2VuY2VTZWFyY2goYWxwaGEsIGJldGEpO1xuICAgIH1cblxuICAgIHRoaXMucGVyZk1vbml0b3IubG9nTWFpblNlYXJjaE5vZGUoKTtcblxuICAgIGxldCBwcmV2QmVzdE1vdmUgPSAoZW50cnkgJiYgZW50cnkuYmVzdE1vdmUpID8gZW50cnkuYmVzdE1vdmUgOiBudWxsO1xuICAgIGNvbnN0IHNpYmxpbmdLaWxsZXJNb3ZlcyA9IHRoaXMua2lsbGVyTW92ZUxpc3QuZ2V0U2libGluZ01vdmVzKHRoaXMubWF4RGVwdGggLSBkZXB0aCk7XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVNb3ZlT3JkZXJTY29yZShtb3ZlKSB7XG4gICAgICBpZiAocHJldkJlc3RNb3ZlICYmIG1vdmUudmFsID09PSBwcmV2QmVzdE1vdmUudmFsKSB7XG4gICAgICAgIHJldHVybiAxMDAwMDtcbiAgICAgIH1cbiAgICAgIGxldCBzY29yZSA9IG1vdmUuZ2V0Q2FwdFBpZWNlKCkgPyAoKDEgKyBtb3ZlLmdldENhcHRQaWVjZSgpKSAvICgxICsgbW92ZS5nZXRQaWVjZSgpKSArIDEpOiAwO1xuICAgICAgc2NvcmUgPSBzY29yZSAqIDEwICsgKHNpYmxpbmdLaWxsZXJNb3Zlcy5pbmNsdWRlcyhtb3ZlLnZhbCkgPyAxIDogMCk7XG4gICAgICBzY29yZSA9IHNjb3JlICogMTAgKyBtb3ZlLmdldFBpZWNlKCk7XG4gICAgICBzY29yZSA9IHNjb3JlICogMTAgKyBtb3ZlLmdldFR5cGUoKTtcblxuICAgICAgcmV0dXJuIHNjb3JlO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmVzID0gdGhpcy5zb3J0TW92ZXModGhpcy5wb3NpdGlvbi5nZW5lcmF0ZVBzZXVkb01vdmVzKCksIGNhbGN1bGF0ZU1vdmVPcmRlclNjb3JlKTtcblxuICAgIGxldCBtb3ZlSWR4O1xuICAgIGxldCBjYW5Nb3ZlID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgc2NvcmU7XG4gICAgbGV0IGJlc3RTY29yZSA9IC1JbmZpbml0eTtcbiAgICBsZXQgYmVzdE1vdmUgPSBudWxsO1xuXG4gICAgZm9yIChtb3ZlSWR4ID0gMDsgbW92ZUlkeCA8IG1vdmVzLmxlbmd0aDsgbW92ZUlkeCsrKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi5tYWtlTW92ZShtb3Zlc1ttb3ZlSWR4XSkpIHtcbiAgICAgICAgY2FuTW92ZSA9IHRydWU7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMubmVnYU1heChkZXB0aCAtIDEsIC1iZXRhLCAtYWxwaGEpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnVubWFrZVByZXZNb3ZlKCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gRUFSTFlfRVhJVCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzY29yZSA9IC1yZXN1bHQ7XG4gICAgICAgIGlmIChzY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICAgIGJlc3RTY29yZSA9IHNjb3JlO1xuICAgICAgICAgIGJlc3RNb3ZlID0gbW92ZXNbbW92ZUlkeF07XG5cbiAgICAgICAgICBpZiAoYmVzdFNjb3JlID49IGJldGEpIHtcbiAgICAgICAgICAgIHRoaXMua2lsbGVyTW92ZUxpc3QuYWRkTW92ZSh0aGlzLm1heERlcHRoIC0gZGVwdGgsIG1vdmVzW21vdmVJZHhdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChiZXN0U2NvcmUgPiBhbHBoYSkge1xuICAgICAgICAgICAgYWxwaGEgPSBiZXN0U2NvcmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFjYW5Nb3ZlKSB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbi5pbkNoZWNrKHRoaXMucG9zaXRpb24udHVybikpIHtcbiAgICAgICAgYmVzdFNjb3JlID0gLVBVdGlsc1tQVHlwZXMuS0lOR1NdLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVzdFNjb3JlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zUG9zVGFibGUuc3RvcmVFbnRyeShiZXN0U2NvcmUsIGJlc3RNb3ZlLCBwcmV2QWxwaGEsIGJldGEsIGRlcHRoLCBjdXJySGFzaCk7XG4gICAgcmV0dXJuIGJlc3RTY29yZTtcbiAgfVxuXG4gIHNvcnRNb3Zlcyhtb3ZlcywgY2FsY3VsYXRlU2NvcmUpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVNb3ZlU2NvcmVzKCkge1xuICAgICAgcmV0dXJuIG1vdmVzLm1hcCgobW92ZSkgPT4ge1xuICAgICAgICByZXR1cm4geyBtb3ZlOiBtb3ZlLCBzY29yZTogY2FsY3VsYXRlU2NvcmUobW92ZSkgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVNb3ZlU2NvcmVzKCkuc29ydCgobW92ZUEsIG1vdmVCKSA9PiBtb3ZlQi5zY29yZSAtIG1vdmVBLnNjb3JlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChtb3ZlU2NvcmUpID0+IG1vdmVTY29yZS5tb3ZlKTtcbiAgfVxuXG4gIGV2YWx1YXRlKCkge1xuICAgIGxldCBtYXRlcmlhbFNjb3JlID0gdGhpcy5zY29yZU1hdGVyaWFsKHRoaXMucG9zaXRpb24udHVybikgLVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZU1hdGVyaWFsKHRoaXMucG9zaXRpb24ub3BwKTtcblxuICAgIGxldCBwaWVjZVBvc2l0aW9uU2NvcmUgPSB0aGlzLnNjb3JlUGllY2VQb3NpdGlvbnModGhpcy5wb3NpdGlvbi50dXJuKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVQaWVjZVBvc2l0aW9ucyh0aGlzLnBvc2l0aW9uLm9wcCk7XG5cbiAgICByZXR1cm4gbWF0ZXJpYWxTY29yZSArIHBpZWNlUG9zaXRpb25TY29yZTtcbiAgfVxuXG4gIHNjb3JlTWF0ZXJpYWwoY29sb3IpIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGVhY2hQaWVjZVR5cGUoKHBpZWNlVHlwZSkgPT4ge1xuICAgICAgc2NvcmUgKz0gdGhpcy5wb3NpdGlvbi5nZXRDb2xvclBpZWNlU2V0KGNvbG9yLCBwaWVjZVR5cGUpLnBvcENvdW50KCkgKlxuICAgICAgICAgICAgICAgUFV0aWxzW3BpZWNlVHlwZV0udmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cblxuICBzY29yZVBpZWNlUG9zaXRpb25zKGNvbG9yKSB7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBsZXQgcGllY2VQb3NpdGlvbnM7XG4gICAgZWFjaFBpZWNlVHlwZSgocGllY2VUeXBlKSA9PiB7XG4gICAgICBwaWVjZVBvc2l0aW9ucyA9IHRoaXMucG9zaXRpb24uZ2V0Q29sb3JQaWVjZVNldChjb2xvciwgcGllY2VUeXBlKTtcbiAgICAgIHBpZWNlUG9zaXRpb25zLmR1cCgpLnBvcDFCaXRzKChwb3MpID0+IHtcbiAgICAgICAgc2NvcmUgKz0gUFV0aWxzW3BpZWNlVHlwZV0ucG9zaXRpb25WYWx1ZXNbY29sb3IgPyBwb3MgOiA1NiBeIHBvc107XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzY29yZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdmVTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9haS9tb3ZlX3NlYXJjaC5qcyIsImNvbnN0IFNDT1JFX1RZUEVTID0ge1xuICBFWEFDVDogJ2V4YWN0JyxcbiAgVVBQRVJCT1VORDogJ3VwcGVyYm91bmQnLFxuICBMT1dFUkJPVU5EOiAnbG93ZXJib3VuZCdcbn07XG5cbmNsYXNzIFRyYW5zcG9zVGFibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhYmxlID0ge307XG4gIH1cblxuICBnZXRFbnRyeShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZVtrZXldIHx8IG51bGw7XG4gIH1cblxuICBzdG9yZUVudHJ5KHNjb3JlLCBiZXN0TW92ZSwgYWxwaGEsIGJldGEsIGRlcHRoLCBrZXkpIHtcbiAgICB0aGlzLnRhYmxlW2tleV0gPSB7XG4gICAgICBzY29yZSxcbiAgICAgIGJlc3RNb3ZlLFxuICAgICAgdHlwZTogdGhpcy5kZXRlcm1pbmVTY29yZVR5cGUoc2NvcmUsIGFscGhhLCBiZXRhKSxcbiAgICAgIGRlcHRoLFxuICAgICAga2V5XG4gICAgfTtcbiAgfVxuXG4gIGRldGVybWluZVNjb3JlVHlwZShzY29yZSwgYWxwaGEsIGJldGEpIHtcbiAgICBpZiAoc2NvcmUgPD0gYWxwaGEpIHtcbiAgICAgIHJldHVybiBTQ09SRV9UWVBFUy5VUFBFUkJPVU5EO1xuICAgIH0gZWxzZSBpZiAoc2NvcmUgPj0gYmV0YSkge1xuICAgICAgcmV0dXJuIFNDT1JFX1RZUEVTLkxPV0VSQk9VTkQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTQ09SRV9UWVBFUy5FWEFDVDtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IFRyYW5zcG9zVGFibGUsIFRBQkxFX1NDT1JFX1RZUEVTOiBTQ09SRV9UWVBFUyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYWkvdHJhbnNwb3NfdGFibGUuanMiLCJjbGFzcyBLaWxsZXJNb3ZlTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIHRoaXMubWF4UGVyTGV2ZWwgPSAyO1xuICB9XG5cbiAgYWRkU2xvdCgpIHtcbiAgICB0aGlzLmxpc3QucHVzaChuZXcgQXJyYXkodGhpcy5tYXhQZXJMZXZlbCkpO1xuICB9XG5cbiAgYWRkTW92ZShkaXN0RnJvbVJvb3QsIG1vdmUpIHtcbiAgICBjb25zdCBzaWJsaW5nS2lsbGVyTW92ZXMgPSB0aGlzLmxpc3RbZGlzdEZyb21Sb290XTtcbiAgICBpZiAoc2libGluZ0tpbGxlck1vdmVzLmluY2x1ZGVzKG1vdmUudmFsKSkgeyByZXR1cm47IH1cblxuICAgIGxldCBpZHg7XG4gICAgZm9yIChpZHggPSBzaWJsaW5nS2lsbGVyTW92ZXMubGVuZ3RoIC0gMjsgaWR4ID49IDA7IGlkeC0tKSB7XG4gICAgICBzaWJsaW5nS2lsbGVyTW92ZXNbaWR4ICsgMV0gPSBzaWJsaW5nS2lsbGVyTW92ZXNbaWR4XTtcbiAgICB9XG5cbiAgICBzaWJsaW5nS2lsbGVyTW92ZXNbMF0gPSBtb3ZlLnZhbDtcbiAgfVxuXG4gIGdldFNpYmxpbmdNb3ZlcyhkaXN0RnJvbVJvb3QpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0W2Rpc3RGcm9tUm9vdF07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLaWxsZXJNb3ZlTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FpL2tpbGxlcl9tb3ZlX2xpc3QuanMiLCJjbGFzcyBQZXJmTW9uaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpblNlYXJjaE5vZGVzID0gMDtcbiAgICB0aGlzLnFTZWFyY2hOb2RlcyA9IDA7XG4gICAgdGhpcy50YWJsZUhpdHMgPSAwO1xuICB9XG5cbiAgc2V0U3RhcnRUaW1lKCkge1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIHNldEVuZFRpbWUoKSB7XG4gICAgdGhpcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIHNldERlcHRoKGRlcHRoKSB7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICB9XG5cbiAgcHJpbnRSZXN1bHRzKCkge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0nKTtcblxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSAmJiB0aGlzLmVuZFRpbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBSdW4gVGltZTogJHt0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZX1gKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgRGVwdGg6ICAke3RoaXMuZGVwdGh9YCk7XG4gICAgY29uc29sZS5sb2coYFRvdGFsIEV4cGxvcmVkIFBvc2l0aW9uczogJHt0aGlzLnFTZWFyY2hOb2RlcyArIHRoaXMubWFpblNlYXJjaE5vZGVzfWApO1xuICAgIGNvbnNvbGUubG9nKGBNYWluIFNlYXJjaCBOb2RlczogJHt0aGlzLm1haW5TZWFyY2hOb2Rlc31gKTtcbiAgICBjb25zb2xlLmxvZyhgUXVpZXNjZW50IFNlYXJjaCBOb2RlczogJHt0aGlzLnFTZWFyY2hOb2Rlc31gKTtcbiAgICBjb25zb2xlLmxvZyhgVGFibGUgSGl0czogJHt0aGlzLnRhYmxlSGl0c31gKTtcblxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0nKTtcbiAgfVxuXG4gIGxvZ1RhYmxlSGl0KCkge1xuICAgIHRoaXMudGFibGVIaXRzKys7XG4gIH1cblxuICBsb2dNYWluU2VhcmNoTm9kZSgpIHtcbiAgICB0aGlzLm1haW5TZWFyY2hOb2RlcysrO1xuICB9XG5cbiAgbG9nUXVpZXNjZW50Tm9kZSgpIHtcbiAgICB0aGlzLnFTZWFyY2hOb2RlcysrO1xuICB9XG5cbiAgZ2V0UmVzdWx0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcnVuVGltZTogdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWUsXG4gICAgICBkZXB0aDogdGhpcy5kZXB0aCxcbiAgICAgIGV4cGxvcmVkUG9zaXRpb25zOiB0aGlzLnFTZWFyY2hOb2RlcyArIHRoaXMubWFpblNlYXJjaE5vZGVzLFxuICAgICAgbWFpblNlYXJjaE5vZGVzOiB0aGlzLm1haW5TZWFyY2hOb2RlcyxcbiAgICAgIHFTZWFyY2hOb2RlczogdGhpcy5xU2VhcmNoTm9kZXMsXG4gICAgICB0VGFibGVIaXRzOiB0aGlzLnRhYmxlSGl0c1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJmTW9uaXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FpL3BlcmZfbW9uaXRvci5qcyIsImNvbnN0IHsgUGllY2VDb252LCBDb2xvcnMgfSA9IHJlcXVpcmUoJy4uL3BpZWNlcycpO1xuY29uc3QgeyBDb2xzRmlsZXMsIEZpbGVzQ29scyxcbiAgICAgICAgUm93c1JhbmtzLCBSYW5rc1Jvd3MgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzLmpzJyk7XG5cbmZ1bmN0aW9uIHBvc0Zyb21GaWxlUmFuayhmaWxlUmFuaykge1xuICBjb25zdCBbZmlsZSwgcmFua10gPSBmaWxlUmFuay5zcGxpdCgnJyk7XG4gIHJldHVybiAoUmFua3NSb3dzW3JhbmtdICogOCkgKyBGaWxlc0NvbHNbZmlsZV07XG59XG5cbmZ1bmN0aW9uIGZpbGVSYW5rRnJvbVBvcyhwb3MpIHtcbiAgcmV0dXJuIENvbHNGaWxlc1twb3MgJSA4XSArIChSb3dzUmFua3NbTWF0aC5mbG9vcihwb3MgLyA4KV0pO1xufVxuXG4vLyBpZiB0aGUgcm93IGFuZCBjb2wgYXJlIGVpdGhlciBib3RoIGV2ZW4gb3IgYm90aCBvZGRcbmZ1bmN0aW9uIGlzRGFya1NxdWFyZShmaWxlUmFuaykge1xuICBjb25zdCBbZmlsZSwgcmFua10gPSBmaWxlUmFuay5zcGxpdCgnJyk7XG4gIGNvbnN0IHJvdyA9IFJhbmtzUm93c1tyYW5rXTtcbiAgY29uc3QgY29sID0gRmlsZXNDb2xzW2ZpbGVdO1xuICByZXR1cm4gKHJvdyAlIDIgPT09IDAgJiYgY29sICUgMiA9PT0gMCkgfHxcbiAgICAgICAgIChyb3cgJSAyID09PSAxICYmIGNvbCAlIDIgPT09IDEpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNb3ZlKG1vdmUsIGNvbG9yKSB7XG4gIHJldHVybiBgJHtQaWVjZUNvbnYucGllY2VUb0xldHRlcihtb3ZlLmdldFBpZWNlKCksIGNvbG9yKX06YCArXG4gICAgICAgICBgJHtmaWxlUmFua0Zyb21Qb3MobW92ZS5nZXRGcm9tKCkpfS0+YCArXG4gICAgICAgICBgJHtmaWxlUmFua0Zyb21Qb3MobW92ZS5nZXRUbygpKX1gO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1vdmVTdGF0cyhtb3ZlU3RhdHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1vdmVTdGF0cylcbiAgICAgICAgICAgICAgIC5tYXAoKGtleSkgPT4gYCR7a2V5fTogJHttb3ZlU3RhdHNba2V5XX1gKVxuICAgICAgICAgICAgICAgLmpvaW4oXCI8YnIvPlwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY3MpIHtcbiAgbGV0IHRpbWVTdHIgPSAobWlsbGlzZWNzIC8gMTAwMCkudG9TdHJpbmcoKTtcbiAgaWYgKHRpbWVTdHIuaW5kZXhPZignLicpID09IC0xKSB0aW1lU3RyICs9ICcuJztcblxuICB3aGlsZSAodGltZVN0ci5sZW5ndGggPCB0aW1lU3RyLmluZGV4T2YoJy4nKSArIDMpIHtcbiAgICB0aW1lU3RyICs9ICcwJztcbiAgfVxuXG4gIHdoaWxlICh0aW1lU3RyLmxlbmd0aCA+IHRpbWVTdHIuaW5kZXhPZignLicpICsgMykge1xuICAgIHRpbWVTdHIgPSB0aW1lU3RyLnNsaWNlKDAsIHRpbWVTdHIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gdGltZVN0cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBvc0Zyb21GaWxlUmFuayxcbiAgZmlsZVJhbmtGcm9tUG9zLFxuICBpc0RhcmtTcXVhcmUsXG4gIGZvcm1hdE1vdmUsXG4gIHBhcnNlTW92ZVN0YXRzLFxuICBmb3JtYXRUaW1lXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvdWkvdXRpbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=