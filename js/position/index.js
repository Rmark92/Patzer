const { BitBoard, BBMasks } = require('../bitboard');

const { Move, MoveTypes } = require('../move');

const { Pawns, Knight, Bishop,
        Rook, King, Queen,
        PieceTypes, Colors, Dirs } = require('../pieces');

const { pieceSetsToArray,
        pieceSetsFromArray } = require('./utils/array_conversions.js');

class Position {
  constructor(pieces = pieceSetsFromArray(), turn = Colors.WHITE, prevMoves = []) {
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

  setTurn(turn, opp) {
    this.turn = turn;
    this.opp = opp || this.getOtherColor(turn);
  }

  swapTurn() {
    this.setTurn(this.opp, this.turn);
  }

  getOtherColor(color) {
    return color ^ Colors.BLACK;
  }

  // generates all pseudo legal moves, ie moves that may put the king
  // in check but are otherwise legal
  // why do this: our ai move search generates all moves for a position
  // and then considers each move individually. some of those moves
  // will not be considered due to pruning cutoffs, so it's more efficient
  // to only check for full legality of moves that we actually consider
  generatePseudoMoves(includeQuiet = true) {
    const moves = [];
    this.addPawnMoves(moves, includeQuiet);
    this.addNormalMoves(moves, includeQuiet);
    this.addKingMoves(moves, includeQuiet);

    return moves;
  }

  // generates moves with a filter for whether the move puts the king in check
  // mainly used to determine checkmate or stalemate
  generateLegalMoves() {
    const pseudoMoves = this.generatePseudoMoves();
    let moveData;
    let isLegal;

    const legals = [];
    return pseudoMoves.filter((pseudoMove) => {
      moveData = pseudoMove.getData();

      this.testMove(moveData, (testsLegal) => {
        isLegal = testsLegal;
        return true;
      });

      return isLegal;
    });
  }

  // inserts pawn moves into the moves array
  addPawnMoves(moves, includeQuiet) {
    const pawnsPos = this.getColorPieceSet(this.turn, PieceTypes.PAWNS);

    if (includeQuiet) {
      const notOccupied = this.getOccupied().not();

      const pawnSinglePushes = Pawns.singlePush(this.turn, pawnsPos, notOccupied);
      this.addPawnMoveSet(pawnSinglePushes, 8 * Pawns.DIRS[this.turn], moves);

      const pawnDoublePushes = Pawns.doublePush(this.turn, pawnsPos, notOccupied);
      this.addPawnMoveSet(pawnDoublePushes, 16 * Pawns.DIRS[this.turn], moves, false, true);
    }

    let oppPositions = this.pieces[this.opp].or(this.epBB);

    const pawnLeftAttacks = Pawns.attacksLeft(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnLeftAttacks, 7 * Pawns.DIRS[this.turn], moves, true);

    const pawnRightAttacks = Pawns.attacksRight(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnRightAttacks, 9 * Pawns.DIRS[this.turn], moves, true);
  }

  // takes a new position set for pawns and adds each corresponding move
  // to the moves array, with special handling for en passants, promotions and double pushes

  // note: unlike other pieces, we map pawn movements from the set of all existing pawns
  // rather than each pawn individually, so the function takes a shift amount to determine
  // the location of the individual pawn that moved to a new position
  addPawnMoveSet(newPositions, shiftAmt, moves, isCapture, isDblPush) {
    let from;
    let captured = null;

    newPositions.forEach1Bit((pos) => {
      from = pos - shiftAmt;
      if (isDblPush) {
        moves.push(new Move(from, pos, MoveTypes.DBL_PPUSH, PieceTypes.PAWNS));
      } else if (isCapture && this.epBB.hasSetBit(pos)) {
        moves.push(new Move(from, pos, MoveTypes.EP_CAPT, PieceTypes.PAWNS));
      } else {
        if (isCapture) { captured = this.getPieceAt(pos); }

        if (Pawns.PROMO_MASKS[this.turn].hasSetBit(pos)) {
          this.addPromos(from, pos, moves, captured);
        } else {
          moves.push(new Move(from, pos, MoveTypes.NORMAL, PieceTypes.PAWNS, captured));
        }
      }
    });
  }

  // adds a move to the moves array for each possible promotion type

  // side note: I was curious about why you'd ever promote to rook or bishop
  // and the reason is if promoting to a queen results in stalemate
  addPromos(from, to, moves, captured) {
    [MoveTypes.NPROMO, MoveTypes.BPROMO,
     MoveTypes.RPROMO, MoveTypes.QPROMO].forEach((promoType) => {
       moves.push(new Move(from, to, promoType, PieceTypes.PAWNS, captured));
     });
  }

  // adds moves to the moves array for all pieces that don't
  // have 'special' moves, ie not pawns or kings
  addNormalMoves(moves, includeQuiet) {
    const occupied = this.getOccupied();
    const notOwnPieces = this.getNotOccupiedBy(this.turn);

    const knightsPos = this.getColorPieceSet(this.turn, PieceTypes.KNIGHTS);
    let knightMoves;
    knightsPos.forEach1Bit((pos) => {
      knightMoves = Knight.moves(pos, notOwnPieces);
      this.addNormalMoveSet(knightMoves, pos, PieceTypes.KNIGHTS, moves, includeQuiet);
    });

    const bishopsPos = this.getColorPieceSet(this.turn, PieceTypes.BISHOPS);
    let bishopMoves;
    bishopsPos.forEach1Bit((pos) => {
      bishopMoves = Bishop.moves(pos, occupied, notOwnPieces);
      this.addNormalMoveSet(bishopMoves, pos, PieceTypes.BISHOPS, moves, includeQuiet);
    });

    const rooksPos = this.getColorPieceSet(this.turn, PieceTypes.ROOKS);
    let rookMoves;
    rooksPos.forEach1Bit((pos) => {
      rookMoves = Rook.moves(pos, occupied, notOwnPieces);
      this.addNormalMoveSet(rookMoves, pos, PieceTypes.ROOKS, moves, includeQuiet);
    });

    const queenPos = this.getColorPieceSet(this.turn, PieceTypes.QUEENS).bitScanForward();
    if (queenPos !== null) {
      const queenMoves = Queen.moves(queenPos, occupied, notOwnPieces);
      this.addNormalMoveSet(queenMoves, queenPos, PieceTypes.QUEENS, moves, includeQuiet);
    }
  }

  // adds available king moves to the moves array
  addKingMoves(moves, includeQuiet) {
      const notOwnPieces = this.getNotOccupiedBy(this.turn);
      const kingPos = this.getColorPieceSet(this.turn, PieceTypes.KINGS).bitScanForward();

      // for testing purposes...
      if (kingPos === null) { return; }

      const normalMoves = King.moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, PieceTypes.KINGS, moves, includeQuiet);

      if (includeQuiet) {
        this.addCastleMoves(moves);
      }
  }

  // takes a BB of possible new positions for a single
  // piece and adds each corresponding move to the moves array
  addNormalMoveSet(newPositions, startPos, pieceType, moves, includeQuiet) {
    let newPos;
    let newMove;
    let captType;

    newPositions.forEach1Bit((pos) => {
      captType = this.pieces[this.opp].hasSetBit(pos) ? this.getPieceAt(pos) : null;
      if (includeQuiet || captType) {
        moves.push(new Move(startPos, pos, MoveTypes.NORMAL, pieceType, captType));
      }
    });
  }

  // adds available castling moves to the moves array
  addCastleMoves(moves) {
    const turnCastleRights = this.getCastleRights(this.turn);
    const startPos = King.INIT_POS[this.turn];
    const notOccupied = this.getOccupied().not();

    if ((turnCastleRights & 0b1) && King.canCastle(this.turn, Dirs.WEST, notOccupied)) {
      moves.push(new Move(startPos, startPos - 2, MoveTypes.CSTL_QUEEN, PieceTypes.KINGS));
    }

    if ((turnCastleRights & 0b10) && King.canCastle(this.turn, Dirs.EAST, notOccupied)) {
      moves.push(new Move(startPos, startPos + 2, MoveTypes.CSTL_KING, PieceTypes.KINGS));
    }
  }

  // returns 2bit value for the color's castling rights
  // left bit => king-side rights
  // right bit => queen-side rights
  getCastleRights(color) {
    return color === Colors.WHITE ? this.castleRights & 0b11 : this.castleRights >>> 2;
  }

  // returns a BB with occupied positions for a given color and piece type
  getColorPieceSet(color, pieceType) {
    return this.pieces[color].and(this.pieces[pieceType]);
  }

  // returns a BB of all occupied positions
  getOccupied() {
    return this.pieces[Colors.WHITE].or(this.pieces[Colors.BLACK]);
  }

  // returns a BB of all positions that this color does not occupy
  getNotOccupiedBy(color) {
    return this.pieces[color].not();
  }

  // returns the piece type that occupies the given position
  // if no piece is found, returns null
  getPieceAt(pos) {
    const types = Object.values(PieceTypes);

    let idx;
    let type;

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
  makeMove(move) {
    const moveData = move.getData();

    let isLegal;
    this.testMove(moveData, (testsLegal) => {
      isLegal = testsLegal;
      return !isLegal;
    });

    if (!isLegal) { return false; }

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
  testMove(moveData, cb) {
    if (moveData.captPieceType) {
      this.clearPieceAt(moveData.to, this.opp, moveData.captPieceType);
    }

    if (moveData.isPromo) {
      this.clearPieceAt(moveData.from, this.turn, PieceTypes.PAWNS);
    } else {
      this.movePiece(moveData.from, moveData.to, this.turn, moveData.pieceType);
    }

    const undo = cb(this.testsLegal(moveData));
    if (!undo) { return; }

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
  testsLegal(moveData) {
    if (moveData.isCastle) {
      return this.isLegalCastle(moveData.from, moveData.type);
    } else {
      return !this.inCheck(this.turn);
    }
  }

  isLegalCastle(pos, castleType) {
    const dir = castleType === MoveTypes.CSTL_KING ? 1 : -1;
    let count = 0;

    while (count <= 2) {
      if (this.isAttacked(pos, this.turn)) { return false; }
      count++;
      pos += dir;
    }

    return true;
  }

  // returns boolean for whether the provided color's king is in check
  inCheck(color) {
    const kingPos = this.getColorPieceSet(color, PieceTypes.KINGS).bitScanForward();
    if (!kingPos) { console.log(this.prevMoves); }
    return this.isAttacked(kingPos, color);
  }


  // returns boolean for whether any opponent color piece is attacking the provided position
  isAttacked(pos, color) {
    const posBB = BitBoard.fromPos(pos);
    const occupied = this.getOccupied();
    const oppColor = this.getOtherColor(color);
    const pawns = this.getColorPieceSet(oppColor, PieceTypes.PAWNS);

    return (!Pawns.attacksLeft(oppColor, pawns, posBB).isZero() ||
            !Pawns.attacksRight(oppColor, pawns, posBB).isZero() ||
            !Knight.moves(pos, this.getColorPieceSet(oppColor, PieceTypes.KNIGHTS)).isZero() ||
            !Bishop.moves(pos, occupied, this.getColorPieceSet(oppColor, PieceTypes.BISHOPS)).isZero() ||
            !Rook.moves(pos, occupied, this.getColorPieceSet(oppColor, PieceTypes.ROOKS)).isZero() ||
            !Queen.moves(pos, occupied, this.getColorPieceSet(oppColor, PieceTypes.QUEENS)).isZero() ||
            !King.moves(pos, this.getColorPieceSet(oppColor, PieceTypes.KINGS)).isZero());
  }

  // unmakes the previous move, updating the current position
  unmakePrevMove() {
    const prevMove = this.prevMoves.pop();
    if (!prevMove) { return false; }
    this.swapTurn();
    const moveData = prevMove.getData();

    this.reverseMoveType(moveData.from, moveData.to, moveData.type);

    const prevState = this.prevStates.pop();
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
  adjustCastleRights(pieceType, from) {
    if (pieceType === PieceTypes.KINGS) {
      let clearCastleRightsMask = this.turn === Colors.WHITE ? 0b1100 : 0b11;
      this.castleRights &= clearCastleRightsMask;
    } else if (pieceType === PieceTypes.ROOKS) {
      let clearCastlePos = 0;
      if (from > King.INIT_POS[this.turn]) { clearCastlePos++; }
      if (this.turn === Colors.BLACK) { clearCastlePos += 2; }
      this.castleRights &= ~Math.pow(2, clearCastlePos);
    }
  }

  // adds the current state values to the prevStates array
  // used for move unmaking purposes
  addPrevState() {
    const state = { epBB: this.epBB, castleRights: this.castleRights };
    this.prevStates.push(state);
  }

  // makes special adjustments to the position based on the move type
  execMoveType(from, to, type) {
    switch(type) {
      case MoveTypes.NORMAL:
        return;
      case MoveTypes.DBL_PPUSH:
        let epPos = to + (-Pawns.DIRS[this.turn] * 8);
        this.epBB = BitBoard.fromPos(epPos);
        break;
      case MoveTypes.CSTL_KING:
        this.movePiece(from + 3, from + 1, this.turn, PieceTypes.ROOKS);
        break;
      case MoveTypes.CSTL_QUEEN:
        this.movePiece(from - 4, from - 1, this.turn, PieceTypes.ROOKS);
        break;
      case MoveTypes.EP_CAPT:
        let capturedPos = to - (Pawns.DIRS[this.turn] * 8);
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
  reverseMoveType(from, to, type) {
    switch(type) {
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
        let capturedPos = to - (Pawns.DIRS[this.turn] * 8);
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
  movePiece(from, to, color, pieceType) {
    this.clearPieceAt(from, color, pieceType);
    this.setPieceAt(to, color, pieceType);
  }

  // marks the given color and pieceType BBs as occupied at the specified position
  setPieceAt(pos, color, pieceType) {
    this.pieces[color].setBit(pos);
    this.pieces[pieceType].setBit(pos);
  }

  // marks the given color and pieceType BBs as unoccupied at the specified position
  clearPieceAt(pos, color, pieceType) {
    this.pieces[color].clearBit(pos);
    this.pieces[pieceType].clearBit(pos);
  }

  // renders BBs for all piece sets
  renderPieceSets() {
    Object.keys(this.pieces).forEach((boardType) => {
      console.log(boardType);
      this.pieces[boardType].render();
    });
  }

  getBoardArr() {
    return pieceSetsToArray(this.pieces);
  }

  // renders the board for the current position
  renderBoardArr() {
    const boardArr = pieceSetsToArray(this.pieces);

    let pos;
    let rowStr = '';
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
}

module.exports = Position;
