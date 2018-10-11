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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BitBoard = __webpack_require__(6);
var Masks = __webpack_require__(13);

module.exports = {
  BitBoard: BitBoard,
  BBMasks: Masks
};

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const { WhitePawns, BlackPawns } = require('./pawns.js');
var Constants = __webpack_require__(1);
var Pawns = __webpack_require__(16);
var Knight = __webpack_require__(17);
var Bishop = __webpack_require__(18);
var Rook = __webpack_require__(19);
var Queen = __webpack_require__(20);
var King = __webpack_require__(21);
var PieceConv = __webpack_require__(22);
var Dirs = __webpack_require__(2);

module.exports = {
  PieceTypes: Constants.Types,
  Colors: Constants.Colors,
  PieceTypeHTML: Constants.PieceTypeHTML,
  Dirs: Dirs,
  Pawns: Pawns,
  Knight: Knight,
  Bishop: Bishop,
  Rook: Rook,
  Queen: Queen,
  King: King,
  PieceConv: PieceConv
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    BitBoard = _require.BitBoard,
    BBMasks = _require.BBMasks;

var Dirs = __webpack_require__(2);
var stepMove = __webpack_require__(7);

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
    BitBoard = _require.BitBoard;

var _require2 = __webpack_require__(4),
    SLIDE_MOVES = _require2.SLIDE_MOVES;

var Dirs = __webpack_require__(2);

var isPosRay = (_isPosRay = {}, _defineProperty(_isPosRay, Dirs.NORTH, true), _defineProperty(_isPosRay, Dirs.EAST, true), _defineProperty(_isPosRay, Dirs.NOEA, true), _defineProperty(_isPosRay, Dirs.NOWE, true), _defineProperty(_isPosRay, Dirs.SOUTH, false), _defineProperty(_isPosRay, Dirs.WEST, false), _defineProperty(_isPosRay, Dirs.SOEA, false), _defineProperty(_isPosRay, Dirs.SOWE, false), _isPosRay);

function findUnblocked(pos, occupied, dir) {
  var posBB = new BitBoard();
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

var Utils = __webpack_require__(12);
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
        return count + Utils.popCount32(int32);
      }, 0);
    }
  }, {
    key: 'setBit',
    value: function setBit(pos) {
      if (pos >= 32 && pos < 64) {
        this.high = (this.high | Math.pow(2, pos - 32)) >>> 0;
      } else if (pos >= 0 && pos < 32) {
        this.low = (this.low | Math.pow(2, pos)) >>> 0;
      }
    }
  }, {
    key: 'clearBit',
    value: function clearBit(pos) {
      if (pos >= 32 && pos < 64) {
        this.high = (this.high & ~Math.pow(2, pos - 32)) >>> 0;
      } else if (pos >= 0 && pos < 32) {
        this.low = (this.low & ~Math.pow(2, pos)) >>> 0;
      }
    }
  }, {
    key: 'bitScanForward',
    value: function bitScanForward() {
      if (this.low) {
        return Utils.bitScanForward32(this.low);
      } else if (this.high) {
        return Utils.bitScanForward32(this.high) + 32;
      } else {
        return null;
      }
    }
  }, {
    key: 'hasSetBit',
    value: function hasSetBit(pos) {
      if (pos < 32) {
        return Boolean(this.low & Math.pow(2, pos));
      } else {
        return Boolean(this.high & Math.pow(2, pos - 32));
      }
    }
  }, {
    key: 'bitScanReverse',
    value: function bitScanReverse() {
      if (this.high) {
        return Utils.bitScanReverse32(this.high) + 32;
      } else if (this.low) {
        return Utils.bitScanReverse32(this.low);
      } else {
        return null;
      }
    }
  }, {
    key: 'forEach1Bit',
    value: function forEach1Bit(cb) {
      var newLowBits = this.low;
      var newHighBits = this.high;

      while (newLowBits) {
        cb(Utils.bitScanForward32(newLowBits));
        newLowBits = Utils.clearLeastSigBit32(newLowBits);
      }

      while (newHighBits) {
        cb(Utils.bitScanForward32(newHighBits) + 32);
        newHighBits = Utils.clearLeastSigBit32(newHighBits);
      }
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
/* 8 */
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

var Selectors = {
  BOARD_ID: "#board",
  PIECE_CLASS: 'piece',
  SQUARE_CLASS: 'square',
  RANK_CLASS: 'rank',
  FILE_CLASS: 'file'
};

// const PieceCharsToHTML = []{
//   'k': '&#9812;',
//   'q':
//
// };

module.exports = { ColsFiles: ColsFiles, FilesCols: FilesCols, RowsRanks: RowsRanks, RanksRows: RanksRows, Selectors: Selectors };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UI = __webpack_require__(10);

$(document).ready(function () {
  var ui = new UI();
  ui.run();
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = __webpack_require__(11);
var AI = __webpack_require__(24);

var _require = __webpack_require__(3),
    PieceTypes = _require.PieceTypes,
    Colors = _require.Colors,
    PieceTypeHTML = _require.PieceTypeHTML;

var Util = __webpack_require__(25);

var _require2 = __webpack_require__(8),
    ColsFiles = _require2.ColsFiles,
    FilesCols = _require2.FilesCols,
    RowsRanks = _require2.RowsRanks,
    RanksRows = _require2.RanksRows,
    Selectors = _require2.Selectors;

var UI = function () {
  function UI() {
    _classCallCheck(this, UI);

    this.position = new Position();
    this.playerColor = Colors.BLACK;
    this.ai = new AI();
    this.currMoves = this.position.generateLegalMoves();
    this.makePlayerMove = this.makePlayerMove.bind(this);
  }

  _createClass(UI, [{
    key: 'run',
    value: function run() {
      this.drawBoard();
      this.playNextTurn();
    }
  }, {
    key: 'playNextTurn',
    value: function playNextTurn() {
      this.updatePieces();
      this.currMoves = this.position.generateLegalMoves();
      if (this.currMoves.length === 0) {
        return;
      }

      if (this.position.turn === this.playerColor) {
        this.setupPlayerMove();
      } else {
        this.aiMove();
      }
    }
  }, {
    key: 'reset',
    value: function reset() {}
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
      var _this = this;

      var table = $('<table>');

      var newRankRow = void 0;
      RowsRanks.forEach(function (rank) {
        newRankRow = $('<tr>');
        newRankRow.append('<th class="rank">' + rank + '</th>');
        ColsFiles.forEach(function (file) {
          newRankRow.append(_this.generateSquare(file, rank));
        });
        newRankRow.append('<th class="rank">' + rank + '</th>');
        table.prepend(newRankRow);
      });

      table.prepend(this.generateFileHeader());
      table.append(this.generateFileHeader());
      $('#board').append(table);
    }
  }, {
    key: 'updatePieces',
    value: function updatePieces() {
      $('.piece').remove();
      $('.square').removeClass('ui-droppable ui-draggable can-move-to');
      var pieceTypes = Object.values(PieceTypes);
      var pieces = this.position.pieces;
      var fileRank = void 0;
      var newPiece = void 0;

      pieceTypes.forEach(function (pieceType) {
        pieces[pieceType].forEach1Bit(function (pos) {
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
    key: 'aiMove',
    value: function aiMove() {
      this.ai.makeMove(this.position, this.currMoves);
      this.playNextTurn();
    }
  }, {
    key: 'pieceMoveEvent',
    value: function pieceMoveEvent() {}
  }, {
    key: 'makePlayerMove',
    value: function makePlayerMove(fromPos, toPos) {
      console.log('make move called');
      var selectedMove = this.currMoves.filter(function (move) {
        return move.getFrom() === fromPos && move.getTo() === toPos;
      })[0];
      if (selectedMove) {
        this.position.makeMove(selectedMove);
        this.playNextTurn();
      } else {
        this.updatePieces();
        this.setupPlayerMove();
      }
    }
  }, {
    key: 'setupPlayerMove',
    value: function setupPlayerMove() {
      var _this2 = this;

      var moves = this.position.generateLegalMoves();
      var movesData = moves.map(function (move) {
        return move.getData();
      });
      var moveFromTos = {};

      movesData.forEach(function (moveData) {
        moveFromTos[moveData.from] = moveFromTos[moveData.from] || [];
        moveFromTos[moveData.from].push(moveData.to);
      });

      var fromFileRank = void 0;
      var toFileRank = void 0;
      var droppedPieceSource = void 0;
      var selectedMoves = void 0;

      Object.keys(moveFromTos).forEach(function (fromPos) {
        fromFileRank = Util.fileRankFromPos(fromPos);
        $('#' + fromFileRank + ' .piece').draggable();
        $('#' + fromFileRank + ' .piece').mouseenter(function () {
          console.log('in here');
          moveFromTos[fromPos].forEach(function (toPos) {
            $('#' + Util.fileRankFromPos(toPos)).addClass('can-move-to');
          });
        });

        $('#' + fromFileRank + ' .piece').mouseleave(function () {
          moveFromTos[fromPos].forEach(function (toPos) {
            $('#' + Util.fileRankFromPos(toPos)).removeClass('can-move-to');
          });
        });

        moveFromTos[fromPos].forEach(function (toPos) {
          $('#' + Util.fileRankFromPos(toPos)).droppable({
            drop: function drop(event, ui) {
              droppedPieceSource = $(ui.draggable).parent().attr('id');
              _this2.makePlayerMove(Util.posFromFileRank(droppedPieceSource), toPos);
            }
          });
        });
      });
    }
  }]);

  return UI;
}();

module.exports = UI;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    BitBoard = _require.BitBoard,
    BBMasks = _require.BBMasks;

var _require2 = __webpack_require__(14),
    Move = _require2.Move,
    MoveTypes = _require2.MoveTypes;

var _require3 = __webpack_require__(3),
    Pawns = _require3.Pawns,
    Knight = _require3.Knight,
    Bishop = _require3.Bishop,
    Rook = _require3.Rook,
    King = _require3.King,
    Queen = _require3.Queen,
    PieceTypes = _require3.PieceTypes,
    Colors = _require3.Colors,
    Dirs = _require3.Dirs;

var _require4 = __webpack_require__(23),
    pieceSetsToArray = _require4.pieceSetsToArray,
    pieceSetsFromArray = _require4.pieceSetsFromArray;

var Position = function () {
  function Position() {
    var pieces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pieceSetsFromArray();
    var turn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Colors.WHITE;
    var prevMoves = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Position);

    this.pieces = pieces;
    this.prevMoves = prevMoves;

    // castling rights represented by 4bit int
    // in the following order (left bit to right):
    // bKing bQueen wKing wQueen
    this.castleRights = 0xf;

    // the en passant BB will either be empty
    // or have one position marked that indicates
    // the destination of an en passant attack
    this.epBB = new BitBoard();

    // holds previous state info (castling rights, en passant)
    // for move reversal purposes
    this.prevStates = [];

    this.setTurn(turn);
  }

  _createClass(Position, [{
    key: 'setTurn',
    value: function setTurn(turn, opp) {
      this.turn = turn;
      this.opp = opp || this.getOtherColor(turn);
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
    // why do this: our ai move search generates all moves for a position
    // and then considers each move individually. some of those moves
    // will not be considered due to pruning cutoffs, so it's more efficient
    // to only check for full legality of moves that we actually consider

  }, {
    key: 'generatePseudoMoves',
    value: function generatePseudoMoves() {
      var moves = [];
      this.addPawnMoves(moves);
      this.addNormalMoves(moves);
      this.addKingMoves(moves);

      return moves;
    }

    // generates moves with a filter for whether the move puts the king in check
    // mainly used to determine checkmate or stalemate

  }, {
    key: 'generateLegalMoves',
    value: function generateLegalMoves() {
      var _this = this;

      var pseudoMoves = this.generatePseudoMoves();
      var moveData = void 0;
      var isLegal = void 0;

      var legals = [];
      return pseudoMoves.filter(function (pseudoMove) {
        moveData = pseudoMove.getData();

        _this.testMove(moveData, function (testsLegal) {
          isLegal = testsLegal;
          return true;
        });

        return isLegal;
      });
    }

    // inserts pawn moves into the moves array

  }, {
    key: 'addPawnMoves',
    value: function addPawnMoves(moves) {
      var pawnsPos = this.getColorPieceSet(this.turn, PieceTypes.PAWNS);
      var notOccupied = this.getOccupied().not();

      var pawnSinglePushes = Pawns.singlePush(this.turn, pawnsPos, notOccupied);
      this.addPawnMoveSet(pawnSinglePushes, 8 * Pawns.DIRS[this.turn], moves);

      var pawnDoublePushes = Pawns.doublePush(this.turn, pawnsPos, notOccupied);
      this.addPawnMoveSet(pawnDoublePushes, 16 * Pawns.DIRS[this.turn], moves, false, true);

      var oppPositions = this.pieces[this.opp].or(this.epBB);

      var pawnLeftAttacks = Pawns.attacksLeft(this.turn, pawnsPos, oppPositions);
      this.addPawnMoveSet(pawnLeftAttacks, 7 * Pawns.DIRS[this.turn], moves, true);

      var pawnRightAttacks = Pawns.attacksRight(this.turn, pawnsPos, oppPositions);
      this.addPawnMoveSet(pawnRightAttacks, 9 * Pawns.DIRS[this.turn], moves, true);
    }

    // takes a new position set for pawns and adds each corresponding move
    // to the moves array, with special handling for en passants, promotions and double pushes

    // note: unlike other pieces, we map pawn movements from the set of all existing pawns
    // rather than each pawn individually, so the function takes a shift amount to determine
    // the location of the individual pawn that moved to a new position

  }, {
    key: 'addPawnMoveSet',
    value: function addPawnMoveSet(newPositions, shiftAmt, moves, isCapture, isDblPush) {
      var _this2 = this;

      var from = void 0;
      var captured = null;

      newPositions.forEach1Bit(function (pos) {
        from = pos - shiftAmt;
        if (isDblPush) {
          moves.push(new Move(from, pos, MoveTypes.DBL_PPUSH, PieceTypes.PAWNS));
        } else if (isCapture && _this2.epBB.hasSetBit(pos)) {
          moves.push(new Move(from, pos, MoveTypes.EP_CAPT, PieceTypes.PAWNS));
        } else {
          if (isCapture) {
            captured = _this2.getPieceAt(pos);
          }

          if (Pawns.PROMO_MASKS[_this2.turn].hasSetBit(pos)) {
            _this2.addPromos(from, pos, moves, captured);
          } else {
            moves.push(new Move(from, pos, MoveTypes.NORMAL, PieceTypes.PAWNS, captured));
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
        moves.push(new Move(from, to, promoType, PieceTypes.PAWNS, captured));
      });
    }

    // adds moves to the moves array for all pieces that don't
    // have 'special' moves, ie not pawns or kings

  }, {
    key: 'addNormalMoves',
    value: function addNormalMoves(moves) {
      var _this3 = this;

      var occupied = this.getOccupied();
      var notOwnPieces = this.getNotOccupiedBy(this.turn);

      var knightsPos = this.getColorPieceSet(this.turn, PieceTypes.KNIGHTS);
      var knightMoves = void 0;
      knightsPos.forEach1Bit(function (pos) {
        knightMoves = Knight.moves(pos, notOwnPieces);
        _this3.addNormalMoveSet(knightMoves, pos, PieceTypes.KNIGHTS, moves);
      });

      var bishopsPos = this.getColorPieceSet(this.turn, PieceTypes.BISHOPS);
      var bishopMoves = void 0;
      bishopsPos.forEach1Bit(function (pos) {
        bishopMoves = Bishop.moves(pos, occupied, notOwnPieces);
        _this3.addNormalMoveSet(bishopMoves, pos, PieceTypes.BISHOPS, moves);
      });

      var rooksPos = this.getColorPieceSet(this.turn, PieceTypes.ROOKS);
      var rookMoves = void 0;
      rooksPos.forEach1Bit(function (pos) {
        rookMoves = Rook.moves(pos, occupied, notOwnPieces);
        _this3.addNormalMoveSet(rookMoves, pos, PieceTypes.ROOKS, moves);
      });

      var queenPos = this.getColorPieceSet(this.turn, PieceTypes.QUEENS).bitScanForward();
      if (queenPos !== null) {
        var queenMoves = Queen.moves(queenPos, occupied, notOwnPieces);
        this.addNormalMoveSet(queenMoves, queenPos, PieceTypes.QUEENS, moves);
      }
    }

    // adds available king moves to the moves array

  }, {
    key: 'addKingMoves',
    value: function addKingMoves(moves) {
      var notOwnPieces = this.getNotOccupiedBy(this.turn);
      var kingPos = this.getColorPieceSet(this.turn, PieceTypes.KINGS).bitScanForward();

      // for testing purposes...
      if (kingPos === null) {
        return;
      }

      var normalMoves = King.moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, PieceTypes.KINGS, moves);

      this.addCastleMoves(moves);
    }

    // takes a BB of possible new positions for a single
    // piece and adds each corresponding move to the moves array

  }, {
    key: 'addNormalMoveSet',
    value: function addNormalMoveSet(newPositions, startPos, pieceType, moves) {
      var _this4 = this;

      var newPos = void 0;
      var newMove = void 0;
      var captType = void 0;

      newPositions.forEach1Bit(function (pos) {
        captType = _this4.pieces[_this4.opp].hasSetBit(pos) ? _this4.getPieceAt(pos) : null;
        moves.push(new Move(startPos, pos, MoveTypes.NORMAL, pieceType, captType));
      });
    }

    // adds available castling moves to the moves array

  }, {
    key: 'addCastleMoves',
    value: function addCastleMoves(moves) {
      var turnCastleRights = this.getCastleRights(this.turn);
      var startPos = King.INIT_POS[this.turn];
      var notOccupied = this.getOccupied().not();

      if (turnCastleRights & 1 && King.canCastle(this.turn, Dirs.WEST, notOccupied)) {
        moves.push(new Move(startPos, startPos - 2, MoveTypes.CSTL_QUEEN, PieceTypes.KINGS));
      }

      if (turnCastleRights & 2 && King.canCastle(this.turn, Dirs.EAST, notOccupied)) {
        moves.push(new Move(startPos, startPos + 2, MoveTypes.CSTL_KING, PieceTypes.KINGS));
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
      var types = Object.values(PieceTypes);

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

      this.addPrevState();

      this.adjustCastleRights(moveData.pieceType, moveData.from);
      this.epBB = new BitBoard();

      this.execMoveType(moveData.from, moveData.to, moveData.type);

      this.prevMoves.push(move);
      this.swapTurn();

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
        this.clearPieceAt(moveData.from, this.turn, PieceTypes.PAWNS);
      } else {
        this.movePiece(moveData.from, moveData.to, this.turn, moveData.pieceType);
      }

      var undo = cb(this.testsLegal(moveData));
      if (!undo) {
        return;
      }

      if (moveData.isPromo) {
        this.setPieceAt(moveData.from, this.turn, PieceTypes.PAWNS);
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
      var kingPos = this.getColorPieceSet(color, PieceTypes.KINGS).bitScanForward();
      return this.isAttacked(kingPos, color);
    }

    // returns boolean for whether any opponent color piece is attacking the provided position

  }, {
    key: 'isAttacked',
    value: function isAttacked(pos, color) {
      var posBB = BitBoard.fromPos(pos);
      var occupied = this.getOccupied();
      var oppColor = this.getOtherColor(color);
      var pawns = this.getColorPieceSet(oppColor, PieceTypes.PAWNS);

      return !Pawns.attacksLeft(oppColor, pawns, posBB).isZero() || !Pawns.attacksRight(oppColor, pawns, posBB).isZero() || !Knight.moves(pos, this.getColorPieceSet(oppColor, PieceTypes.KNIGHTS)).isZero() || !Bishop.moves(pos, occupied, this.getColorPieceSet(oppColor, PieceTypes.BISHOPS)).isZero() || !Rook.moves(pos, occupied, this.getColorPieceSet(oppColor, PieceTypes.ROOKS)).isZero() || !Queen.moves(pos, occupied, this.getColorPieceSet(oppColor, PieceTypes.QUEENS)).isZero() || !King.moves(pos, this.getColorPieceSet(oppColor, PieceTypes.KINGS)).isZero();
    }

    // unmakes the previous move, updating the current position

  }, {
    key: 'unmakePrevMove',
    value: function unmakePrevMove() {
      var prevMove = this.prevMoves.pop();
      if (!prevMove) {
        return false;
      }
      this.swapTurn();
      var moveData = prevMove.getData();

      this.reverseMoveType(moveData.from, moveData.to, moveData.type);

      var prevState = this.prevStates.pop();
      this.epBB = prevState.epBB;
      this.castleRights = prevState.castleRights;

      this.movePiece(moveData.to, moveData.from, this.turn, moveData.pieceType);

      if (moveData.captPieceType) {
        this.setPieceAt(moveData.to, this.opp, moveData.captPieceType);
      }

      return true;
    }

    // makes adjustments to the castling rights
    // if a rook or king is moved

  }, {
    key: 'adjustCastleRights',
    value: function adjustCastleRights(pieceType, from) {
      if (pieceType === PieceTypes.KINGS) {
        var clearCastleRightsMask = this.turn === Colors.WHITE ? 12 : 3;
        this.castleRights &= clearCastleRightsMask;
      } else if (pieceType === PieceTypes.ROOKS) {
        var clearCastlePos = 0;
        if (from > King.INIT_POS[this.turn]) {
          clearCastlePos++;
        }
        if (this.turn === Colors.BLACK) {
          clearCastlePos += 2;
        }
        this.castleRights &= ~Math.pow(2, clearCastlePos);
      }
    }

    // adds the current state values to the prevStates array
    // used for move unmaking purposes

  }, {
    key: 'addPrevState',
    value: function addPrevState() {
      var state = { epBB: this.epBB, castleRights: this.castleRights };
      this.prevStates.push(state);
    }

    // makes special adjustments to the position based on the move type

  }, {
    key: 'execMoveType',
    value: function execMoveType(from, to, type) {
      switch (type) {
        case MoveTypes.NORMAL:
          return;
        case MoveTypes.DBL_PPUSH:
          var epPos = to + -Pawns.DIRS[this.turn] * 8;
          this.epBB = BitBoard.fromPos(epPos);
          break;
        case MoveTypes.CSTL_KING:
          this.movePiece(from + 3, from + 1, this.turn, PieceTypes.ROOKS);
          break;
        case MoveTypes.CSTL_QUEEN:
          this.movePiece(from - 4, from - 1, this.turn, PieceTypes.ROOKS);
          break;
        case MoveTypes.EP_CAPT:
          var capturedPos = to - Pawns.DIRS[this.turn] * 8;
          this.clearPieceAt(capturedPos, this.opp, PieceTypes.PAWNS);
          break;
        case MoveTypes.NPROMO:
          this.setPieceAt(to, this.turn, PieceTypes.KNIGHTS);
          break;
        case MoveTypes.BPROMO:
          this.setPieceAt(to, this.turn, PieceTypes.BISHOPS);
          break;
        case MoveTypes.RPROMO:
          this.setPieceAt(to, this.turn, PieceTypes.ROOKS);
          break;
        case MoveTypes.QPROMO:
          this.setPieceAt(to, this.turn, PieceTypes.QUEENS);
          break;
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
          this.movePiece(from + 1, from + 3, this.turn, PieceTypes.ROOKS);
          break;
        case MoveTypes.CSTL_QUEEN:
          this.movePiece(from - 1, from - 4, this.turn, PieceTypes.ROOKS);
          break;
        case MoveTypes.EP_CAPT:
          var capturedPos = to - Pawns.DIRS[this.turn] * 8;
          this.setPieceAt(capturedPos, this.opp, PieceTypes.PAWNS);
          break;
        case MoveTypes.NPROMO:
          this.clearPieceAt(to, this.turn, PieceTypes.KNIGHTS);
          break;
        case MoveTypes.BPROMO:
          this.clearPieceAt(to, this.turn, PieceTypes.BISHOPS);
          break;
        case MoveTypes.RPROMO:
          this.clearPieceAt(to, this.turn, PieceTypes.ROOKS);
          break;
        case MoveTypes.QPROMO:
          this.clearPieceAt(to, this.turn, PieceTypes.QUEENS);
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
    }

    // marks the given color and pieceType BBs as unoccupied at the specified position

  }, {
    key: 'clearPieceAt',
    value: function clearPieceAt(pos, color, pieceType) {
      this.pieces[color].clearBit(pos);
      this.pieces[pieceType].clearBit(pos);
    }

    // renders BBs for all piece sets

  }, {
    key: 'renderPieceSets',
    value: function renderPieceSets() {
      var _this5 = this;

      Object.keys(this.pieces).forEach(function (boardType) {
        console.log(boardType);
        _this5.pieces[boardType].render();
      });
    }
  }, {
    key: 'getBoardArr',
    value: function getBoardArr() {
      return pieceSetsToArray(this.pieces);
    }

    // renders the board for the current position

  }, {
    key: 'renderBoardArr',
    value: function renderBoardArr() {
      var boardArr = pieceSetsToArray(this.pieces);

      var pos = void 0;
      var rowStr = '';
      console.log("\n");
      for (pos = 63; pos >= 0; pos--) {
        rowStr = boardArr[pos] + rowStr;
        if (pos % 8 === 0) {
          console.log(rowStr);
          rowStr = '';
        }
      }
      console.log("\n");
    }
  }]);

  return Position;
}();

module.exports = Position;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function popCount32(int) {
  var count = 0;

  while (int) {
    count++;
    int &= int - 1;
  }

  return count;
}

function bitScanForward32(int) {
  return popCount32((int & -int) - 1);
}

function generateMSBTable(max) {
  var res = [];
  var int = void 0;
  for (int = 1; int <= max; int++) {
    res[int] = Math.floor(Math.log2(int));
  }

  return res;
}

var mostSigBitTable = generateMSBTable(255);

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
/* 13 */
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
/* 14 */
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
  }]);

  return Move;
}();

module.exports = { Move: Move, MoveTypes: Types };

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

var stepMove = __webpack_require__(7);

var _require = __webpack_require__(0),
    BBMasks = _require.BBMasks;

var _require2 = __webpack_require__(1),
    Colors = _require2.Colors;

var DIRS = (_DIRS = {}, _defineProperty(_DIRS, Colors.WHITE, 1), _defineProperty(_DIRS, Colors.BLACK, -1), _DIRS);

var INIT_MASKS = (_INIT_MASKS = {}, _defineProperty(_INIT_MASKS, Colors.WHITE, BBMasks.ROWS[1]), _defineProperty(_INIT_MASKS, Colors.BLACK, BBMasks.ROWS[6]), _INIT_MASKS);

var Pawns = {
  value: 1,
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
  value: 3,
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
  value: 3,
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
  value: 5,
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
  value: 9,
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

var Dirs = __webpack_require__(2);

var _require2 = __webpack_require__(4),
    KING_MOVES = _require2.KING_MOVES,
    SLIDE_MOVES = _require2.SLIDE_MOVES;

var _require3 = __webpack_require__(1),
    Colors = _require3.Colors;

var INIT_POS = (_INIT_POS = {}, _defineProperty(_INIT_POS, Colors.BLACK, 60), _defineProperty(_INIT_POS, Colors.WHITE, 4), _INIT_POS);

// const CastleDirs = {
//   [Dirs.EAST]: 1,
//   [Dirs.WEST]: -1
// };

var King = {
  value: 100,
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


var _require = __webpack_require__(1),
    Types = _require.Types,
    Colors = _require.Colors,
    PieceTypeLetters = _require.PieceTypeLetters;

function pieceToLetter(type, color) {
  if (color === Colors.WHITE) {
    return PieceTypeLetters[type];
  } else {
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


var _require = __webpack_require__(3),
    PieceConv = _require.PieceConv,
    PieceTypes = _require.PieceTypes,
    Colors = _require.Colors;

var _require2 = __webpack_require__(0),
    BitBoard = _require2.BitBoard;

var xx = "_";

var WP = PieceConv.pieceToLetter(PieceTypes.PAWNS, Colors.WHITE);
var WN = PieceConv.pieceToLetter(PieceTypes.KNIGHTS, Colors.WHITE);
var WB = PieceConv.pieceToLetter(PieceTypes.BISHOPS, Colors.WHITE);
var WR = PieceConv.pieceToLetter(PieceTypes.ROOKS, Colors.WHITE);
var WQ = PieceConv.pieceToLetter(PieceTypes.QUEENS, Colors.WHITE);
var WK = PieceConv.pieceToLetter(PieceTypes.KINGS, Colors.WHITE);

var BP = PieceConv.pieceToLetter(PieceTypes.PAWNS, Colors.BLACK);
var BN = PieceConv.pieceToLetter(PieceTypes.KNIGHTS, Colors.BLACK);
var BB = PieceConv.pieceToLetter(PieceTypes.BISHOPS, Colors.BLACK);
var BR = PieceConv.pieceToLetter(PieceTypes.ROOKS, Colors.BLACK);
var BQ = PieceConv.pieceToLetter(PieceTypes.QUEENS, Colors.BLACK);
var BK = PieceConv.pieceToLetter(PieceTypes.KINGS, Colors.BLACK);

var defaultBoardArr = [WR, WN, WB, WQ, WK, WB, WN, WR, WP, WP, WP, WP, WP, WP, WP, WP, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, xx, BP, BP, BP, BP, BP, BP, BP, BP, BR, BN, BB, BQ, BK, BB, BN, BR];

function createEmptyBoardArr() {
  var res = [];

  var count = 0;
  while (count <= 64) {
    res.push(xx);
    count++;
  }

  return res;
}

function pieceSetsToArray(pieces) {
  var res = createEmptyBoardArr();

  var pieceTypes = Object.values(PieceTypes);
  pieceTypes.forEach(function (type) {
    pieces[type].forEach1Bit(function (pos) {
      if (pieces[Colors.WHITE].hasSetBit(pos)) {
        res[pos] = PieceConv.pieceToLetter(type, Colors.WHITE);
      } else {
        res[pos] = PieceConv.pieceToLetter(type, Colors.BLACK);
      }
    });
  });

  return res;
}

function pieceSetsFromArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBoardArr;

  var pieces = {};

  Object.values(PieceTypes).forEach(function (type) {
    pieces[type] = new BitBoard();
  });

  Object.values(Colors).forEach(function (color) {
    pieces[color] = new BitBoard();
  });

  var pos = void 0;
  var type = void 0;
  var color = void 0;
  for (pos = 0; pos < array.length; pos++) {
    if (array[pos] !== xx) {
      type = PieceConv.letterToType(array[pos]);
      color = PieceConv.letterToColor(array[pos]);
      pieces[type].setBit(pos);
      pieces[color].setBit(pos);
    }
  }

  return pieces;
}

module.exports = { pieceSetsToArray: pieceSetsToArray, pieceSetsFromArray: pieceSetsFromArray };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AI = function () {
  function AI() {
    _classCallCheck(this, AI);
  }

  _createClass(AI, [{
    key: "reset",
    value: function reset() {}
  }, {
    key: "makeMove",
    value: function makeMove(position, moves) {
      var chosen = moves[Math.floor(moves.length * Math.random())];
      position.makeMove(chosen);
    }
  }]);

  return AI;
}();

module.exports = AI;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(8),
    ColsFiles = _require.ColsFiles,
    FilesCols = _require.FilesCols,
    RowsRanks = _require.RowsRanks,
    RanksRows = _require.RanksRows;

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

module.exports = {
  posFromFileRank: posFromFileRank,
  fileRankFromPos: fileRankFromPos,
  isDarkSquare: isDarkSquare
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map