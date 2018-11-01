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

var Int32Utils = __webpack_require__(32);
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
var AI = __webpack_require__(26);

var _require = __webpack_require__(1),
    PTypes = _require.PTypes,
    Colors = _require.Colors,
    PieceTypeHTML = _require.PieceTypeHTML;

var _require2 = __webpack_require__(7),
    MoveTypes = _require2.MoveTypes;

var Util = __webpack_require__(31);

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

    // generates moves with a filter for whether the move puts the king in check
    // mainly used to determine checkmate or stalemate

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

    // inserts pawn moves into the moves array

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

    // takes a new position set for pawns and adds each corresponding move
    // to the moves array, with special handling for en passants, promotions and double pushes

    // note: unlike other pieces, we map pawn movements from the set of all existing pawns
    // rather than each pawn individually, so the function takes a shift amount to determine
    // the location of the individual pawn that moved to a new position

  }, {
    key: 'addPawnMoveSet',
    value: function addPawnMoveSet(newPositions, shiftAmt, moves, isCapture, isDblPush) {
      var _this3 = this;

      var from = void 0;
      var captured = null;

      newPositions.pop1Bits(function (pos) {
        from = pos - shiftAmt;
        if (isDblPush) {
          moves.push(new Move(from, pos, MoveTypes.DBL_PPUSH, PTypes.PAWNS));
        } else if (isCapture && _this3.epBB.hasSetBit(pos)) {
          moves.push(new Move(from, pos, MoveTypes.EP_CAPT, PTypes.PAWNS));
        } else {
          if (isCapture) {
            captured = _this3.pTypesLocations[pos];
          }

          if (PUtils[PTypes.PAWNS].PROMO_MASKS[_this3.turn].hasSetBit(pos)) {
            _this3.addPromos(from, pos, moves, captured);
          } else {
            moves.push(new Move(from, pos, MoveTypes.NORMAL, PTypes.PAWNS, captured));
          }
        }
      });
    }

    // adds a move to the moves array for each possible promotion type

    // side note: I was curious about why you'd ever promote to rook or bishop
    // and the reason is if promoting to a queen results in stalemate

  }, {
    key: 'addPromos',
    value: function addPromos(from, to, moves, captured) {
      [MoveTypes.NPROMO, MoveTypes.BPROMO, MoveTypes.RPROMO, MoveTypes.QPROMO].forEach(function (promoType) {
        moves.push(new Move(from, to, promoType, PTypes.PAWNS, captured));
      });
    }

    // adds moves to the moves array for all pieces that don't
    // have 'special' moves, ie not pawns or kings

  }, {
    key: 'addNormalMoves',
    value: function addNormalMoves(moves, includeQuiet) {
      var _this4 = this;

      var occupied = this.getOccupied();
      var notOwnPieces = this.getNotOccupiedBy(this.turn);

      var knightsPos = this.getColorPieceSet(this.turn, PTypes.KNIGHTS);
      var knightMoves = void 0;
      knightsPos.dup().pop1Bits(function (pos) {
        knightMoves = PUtils[PTypes.KNIGHTS].moves(pos, notOwnPieces);
        _this4.addNormalMoveSet(knightMoves, pos, PTypes.KNIGHTS, moves, includeQuiet);
      });

      var bishopsPos = this.getColorPieceSet(this.turn, PTypes.BISHOPS);
      var bishopMoves = void 0;
      bishopsPos.dup().pop1Bits(function (pos) {
        bishopMoves = PUtils[PTypes.BISHOPS].moves(pos, occupied, notOwnPieces);
        _this4.addNormalMoveSet(bishopMoves, pos, PTypes.BISHOPS, moves, includeQuiet);
      });

      var rooksPos = this.getColorPieceSet(this.turn, PTypes.ROOKS);
      var rookMoves = void 0;
      rooksPos.dup().pop1Bits(function (pos) {
        rookMoves = PUtils[PTypes.ROOKS].moves(pos, occupied, notOwnPieces);
        _this4.addNormalMoveSet(rookMoves, pos, PTypes.ROOKS, moves, includeQuiet);
      });

      var queensPos = this.getColorPieceSet(this.turn, PTypes.QUEENS);
      var queenMoves = void 0;
      queensPos.dup().pop1Bits(function (pos) {
        queenMoves = PUtils[PTypes.QUEENS].moves(pos, occupied, notOwnPieces);
        _this4.addNormalMoveSet(queenMoves, pos, PTypes.QUEENS, moves, includeQuiet);
      });
    }

    // adds available king moves to the moves array

  }, {
    key: 'addKingMoves',
    value: function addKingMoves(moves, includeQuiet) {
      var notOwnPieces = this.getNotOccupiedBy(this.turn);
      var kingPos = this.getColorPieceSet(this.turn, PTypes.KINGS).bitScanForward();

      // for testing purposes...
      if (kingPos === null) {
        return;
      }

      var normalMoves = PUtils[PTypes.KINGS].moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, PTypes.KINGS, moves, includeQuiet);

      if (includeQuiet) {
        this.addCastleMoves(moves);
      }
    }

    // takes a BB of possible new positions for a single
    // piece and adds each corresponding move to the moves array

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

    // adds available castling moves to the moves array

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

    // returns a BB with occupied positions for a given color and piece type

  }, {
    key: 'getColorPieceSet',
    value: function getColorPieceSet(color, pieceType) {
      return this.pieces[color].and(this.pieces[pieceType]);
    }

    // returns a BB of all occupied positions

  }, {
    key: 'getOccupied',
    value: function getOccupied() {
      return this.pieces[Colors.WHITE].or(this.pieces[Colors.BLACK]);
    }

    // returns a BB of all positions that this color does not occupy

  }, {
    key: 'getNotOccupiedBy',
    value: function getNotOccupiedBy(color) {
      return this.pieces[color].not();
    }

    // returns the piece type that occupies the given position
    // if no piece is found, returns null

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

    // makes a specified move if it's legal, updating the current position
    // returns true if the move is made, false otherwise

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

    // makes the piece movements needed to determine
    // if the move is legal, sends a boolean for the legality
    // to the callback and undoes the piece movements if the callback
    // returns true

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

    // returns boolean for whether or not move is legal
    // based on the current position

  }, {
    key: 'testsLegal',
    value: function testsLegal(moveData) {
      if (moveData.isCastle) {
        return this.isLegalCastle(moveData.from, moveData.type);
      } else {
        return !this.inCheck(this.turn);
      }
    }
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

    // returns boolean for whether the provided color's king is in check

  }, {
    key: 'inCheck',
    value: function inCheck(color) {
      var kingPos = this.getColorPieceSet(color, PTypes.KINGS).bitScanForward();
      return this.isAttacked(kingPos, color);
    }

    // returns boolean for whether any opponent color piece is attacking the provided position

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

    // makes adjustments to the castling rights
    // if a rook or king is moved

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

    // makes special adjustments to the position based on the move type

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

    // unmakes the previous move, updating the current position

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

    // unmakes special adjustments to the position based on the move type

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

    // moves piece from one position to another

  }, {
    key: 'movePiece',
    value: function movePiece(from, to, color, pieceType) {
      this.clearPieceAt(from, color, pieceType);
      this.setPieceAt(to, color, pieceType);
    }

    // marks the given color and pieceType BBs as occupied at the specified position

  }, {
    key: 'setPieceAt',
    value: function setPieceAt(pos, color, pieceType) {
      this.pieces[color].setBit(pos);
      this.pieces[pieceType].setBit(pos);
      this.pTypesLocations[pos] = pieceType;
      this.pPosHash ^= piecePosHashKeys[pos][pieceType][color];
    }

    // marks the given color and pieceType BBs as unoccupied at the specified position

  }, {
    key: 'clearPieceAt',
    value: function clearPieceAt(pos, color, pieceType) {
      this.pieces[color].clearBit(pos);
      this.pieces[pieceType].clearBit(pos);
      this.pTypesLocations[pos] = null;
      this.pPosHash ^= piecePosHashKeys[pos][pieceType][color];
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
  }]);

  return Position;
}();

module.exports = Position;

/***/ }),
/* 13 */,
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
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MoveSearch = __webpack_require__(27);

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
/* 27 */
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

var _require2 = __webpack_require__(28),
    TransposTable = _require2.TransposTable,
    TABLE_SCORE_TYPES = _require2.TABLE_SCORE_TYPES;

var KillerMoveList = __webpack_require__(29);
var PerfMonitor = __webpack_require__(30);

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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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

/***/ }),
/* 32 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map