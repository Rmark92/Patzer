const { BitBoard, BBMasks } = require('../bitboards');

const { Move, MoveTypes } = require('../moves');

const { Pawns, Knight, Bishop,
        Rook, King, Queen,
        PieceTypes, Colors } = require('../pieces');

const { pieceSetsToArray,
        pieceSetsFromArray } = require('./utils/array_conversions.js');

class Position {
  constructor(pieces = pieceSetsFromArray(), turn = Colors.WHITE, prevMoves = []) {
    this.pieces = pieces;
    this.prevMoves = prevMoves;
    this.prevStates = [];

    // castling rights represented by 16bit int
    // bKing bQueen wKing wQueen
    this.castlingRights = 0xf;
    this.epBB = new BitBoard();

    this.setTurn(turn);
  }

  setTurn(turn, opp) {
    this.turn = turn;
    this.opp = opp || this.getOppColor(turn);
  }

  swapTurn() {
    this.setTurn(this.opp, this.turn);
  }

  getOppColor(color) {
    return color === Colors.WHITE ? Colors.BLACK : Colors.WHITE;
  }

  getTurnPieces() {
    return this.pieces[this.turn];
  }

  getOppPieces() {
    return this.pieces[this.opp];
  }

  getOccupied() {
    return this.getTurnPieces().or(this.getOppPieces());
  }

  getTurnPieceSet(pieceType) {
    return this.getTurnPieces().and(this.pieces[pieceType]);
  }

  getOppPieceSet(pieceType) {
    return this.getOppPieces().and(this.pieces[pieceType]);
  }

  getTurnCastleRights() {
    return this.turn === Colors.WHITE ? this.castlingRights & 0b11 : this.castlingRights >>> 2;
  }

  isAttacked(pos) {
    const posBB = BitBoard.fromPos(pos);
    const oppPawns = this.getOppPieceSet(PieceTypes.PAWNS);

    return (!Pawns.leftAttacks(this.turn, oppPawns, posBB).isZero() ||
            !Pawns.rightAttacks(this.turn, oppPawns, posBB).isZero() ||
            !Knight.moves(pos, this.getOppPieceSet(PieceTypes.KNIGHTS)).isZero() ||
            !Bishop.moves(pos, this.occupied, this.getOppPieceSet(PieceTypes.BISHOPS)).isZero() ||
            !Rook.moves(pos, this.occupied, this.getOppPieceSet(PieceTypes.ROOKS)).isZero() ||
            !Queen.moves(pos, this.occupied, this.getOppPieceSet(PieceTypes.QUEENS)).isZero() ||
            !King.moves(pos, this.getOppPieceSet(PieceTypes.KINGS)).isZero());
  }

  inCheck() {
    const kingPos = this.getTurnPieceSet(PieceTypes.KINGS).bitScanForward();
    return this.isAttacked(kingPos);
  }

  addPawnMoves(moves) {
    const pawnsPos = this.getTurnPieceSet(PieceTypes.PAWNS);
    const notOccupied = this.getOccupied().not();

    const pawnSinglePushes = Pawns.singlePush(this.turn, pawnsPos, notOccupied);
    this.addPawnMoveSet(pawnSinglePushes, 8 * Pawns.DIRS[this.turn], MoveTypes.NORMAL, moves);

    const pawnDoublePushes = Pawns.doublePush(this.turn, pawnsPos, notOccupied);
    this.addPawnMoveSet(pawnDoublePushes, 16 * Pawns.DIRS[this.turn], MoveTypes.DBL_PPUSH, moves);

    let oppPositions = this.getOppPieces().or(this.epBB);

    const pawnLeftAttacks = Pawns.attacksLeft(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnLeftAttacks, 7 * Pawns.DIRS[this.turn], MoveTypes.CAPT, moves);

    const pawnRightAttacks = Pawns.attacksRight(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnRightAttacks, 9 * Pawns.DIRS[this.turn], MoveTypes.CAPT, moves);
  }

  addPromos(from, to, isCapt, moves) {
    const captType = isCapt ? this.getPieceAt(to) : null;
    [MoveTypes.NPROMO, MoveTypes.BPROMO,
     MoveTypes.RPROMO, MoveTypes.QPROMO].forEach((promoType) => {
       moves.push(new Move(from, to, promoType, PieceTypes.PAWNS, captType));
     });
  }

  addPawnMoveSet(newPositions, shiftAmt, type, moves) {
    let from;

    newPositions.forEach1Bit((pos) => {
      from = pos - shiftAmt;
      if (type === MoveTypes.CAPT && this.epBB.hasSetBit(pos)) {
        moves.push(new Move(from, pos, MoveTypes.EP_CAPT, PieceTypes.PAWNS));
      } else if (Pawns.PROMO_MASKS[this.turn].hasSetBit(pos)) {
        this.addPromos(from, pos, type === MoveTypes.CAPT, moves);
      } else {
        moves.push(new Move(from, pos, type, PieceTypes.PAWNS));
      }
    });
  }

  addNormalMoveSet(newPositions, startPos, pieceType, moves) {
    let newPos;
    let newMove;
    let captType;

    newPositions.forEach1Bit((pos) => {
      captType = this.getOppPieces().hasSetBit(pos) ? this.getPieceAt(pos) : null;
      moves.push(new Move(startPos, pos, MoveTypes.NORMAL, pieceType, captType));
    });
  }

  addNormalMoves(moves) {
    const notOwnPieces = this.getTurnPieces().not();

    const knightsPos = this.getTurnPieceSet(PieceTypes.KNIGHTS);
    let knightMoves;
    knightsPos.forEach1Bit((pos) => {
      knightMoves = Knight.moves(pos, notOwnPieces);
      this.addNormalMoveSet(knightMoves, pos, PieceTypes.KNIGHTS, moves);
    });

    const bishopsPos = this.getTurnPieceSet(PieceTypes.BISHOPS);
    let bishopMoves;
    bishopsPos.forEach1Bit((pos) => {
      bishopMoves = Bishop.moves(pos, this.getOccupied(), notOwnPieces);
      this.addNormalMoveSet(bishopMoves, pos, PieceTypes.BISHOPS, moves);
    });

    const rooksPos = this.getTurnPieceSet(PieceTypes.ROOKS);
    let rookMoves;
    rooksPos.forEach1Bit((pos) => {
      rookMoves = Rook.moves(pos, this.getOccupied(), notOwnPieces);
      this.addNormalMoveSet(rookMoves, pos, PieceTypes.ROOKS, moves);
    });

    const queenPos = this.getTurnPieceSet(PieceTypes.QUEENS).bitScanForward();
    if (queenPos !== null) {
      const queenMoves = Queen.moves(queenPos, this.getOccupied(), notOwnPieces);
      queenMoves.render();
      this.addNormalMoveSet(queenMoves, queenPos, PieceTypes.QUEENS, moves);
    }
  }

  addCastleMoves(moves) {
    const turnCastleRights = this.getTurnCastleRights();
    const startPos = King.INIT_POS[this.turn];

    let castleSlide;

    if (turnCastleRights & 0b1) {
      castleSlide = King.castleSlide(this.turn, 'west', this.getOccupied());
      if (castleSlide.popCount() === 3) {
        moves.push(new Move(startPos, startPos - 2, MoveTypes.CSTL_QUEEN, PieceTypes.KINGS));
      }
    }

    if (turnCastleRights & 0b10) {
      castleSlide = King.castleSlide(this.turn, 'east', this.getOccupied());
      if (castleSlide.popCount() === 2) {
        moves.push(new Move(startPos, startPos + 2, MoveTypes.CSTL_KING, PieceTypes.KINGS));
      }
    }
  }

  addKingMoves(moves) {
      const notOwnPieces = this.getTurnPieces().not();
      const kingPos = this.getTurnPieceSet(PieceTypes.KINGS).bitScanForward();

      // for testing purposes...
      if (kingPos === null) { return; }

      const normalMoves = King.moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, PieceTypes.KINGS, moves);

      this.addCastleMoves(moves);
  }

  generateMoves(captsOnly = false) {
    const moves = [];
    this.addPawnMoves(moves, captsOnly);
    // this.addNormalMoves(moves, captsOnly);
    // this.addKingMoves(moves, captsOnly);

    return moves;
  }

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

  movePiece(from, to, color, pieceType) {
    this.clearPieceAt(from, color, pieceType);
    this.setPieceAt(to, color, pieceType);
  }

  setPieceAt(pos, color, pieceType) {
    this.pieces[color].setBit(pos);
    this.pieces[pieceType].setBit(pos);
  }

  clearPieceAt(pos, color, pieceType) {
    this.pieces[color].clearBit(pos);
    this.pieces[pieceType].clearBit(pos);
  }

  changePieceType(pos, fromPieceType, toPieceType) {
    this.pieces[fromPieceType].clearBit(pos);
    this.pieces[toPieceType].setBit(pos);
  }

  promote(pos, pieceType) {
    this.pieces[PieceTypes.PAWNS].clearBit(pos);
    this.pieces[pieceType].setBit(pos);
  }

  demote(pos, pieceType) {
    this.pieces[PieceTypes.PAWNS].clearBit(pos);
  }

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
        this.changePieceType(to, PieceTypes.PAWNS, PieceTypes.KNIGHTS);
        break;
      case MoveTypes.BPROMO:
        this.changePieceType(to, PieceTypes.PAWNS, PieceTypes.BISHOPS);
        break;
      case MoveTypes.RPROMO:
        this.changePieceType(to, PieceTypes.PAWNS, PieceTypes.ROOKS);
        break;
      case MoveTypes.QPROMO:
        this.changePieceType(to, PieceTypes.PAWNS, PieceTypes.QUEENS);
        break;
    }
  }

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

  testMove(move, cb) {
    this.makeMove(move);
    cb();
    this.unmakeMove();
  }

  handleCastleRights(pieceType, from) {
    let clearCastleRightsMask;
    if (pieceType === PieceTypes.KINGS) {
      clearCastleRightsMask = this.turn === Colors.WHITE ? 0b0 : 0b11;
      this.castleRights &= clearCastleRightsMask;
    } else if (pieceType === PieceTypes.ROOKS) {
      clearCastleRightsMask = (from < King.INIT_POS[this.turn]) ? 0b0 : 0b10;
      if (this.turn === Colors.BLACK) { clearCastleRightsMask <<= 2; }
      this.castleRights &= clearCastleRightsMask;
    }
  }

  addPrevState() {
    const state = { epBB: this.epBB, castleRights: this.castleRights };
    this.prevStates.push(state);
  }

  makeMove(move) {
    const from = move.getFrom();
    const to = move.getTo();
    const type = move.getType();
    const pieceType = move.getPiece();
    console.log('MAKE PIECE TYPE: ' +  pieceType);
    const captPieceType = move.getCaptPiece();

    this.addPrevState();

    if (captPieceType) {
      this.clearPieceAt(to, this.opp, captPieceType);
    }

    this.movePiece(from, to, this.turn, pieceType);

    this.handleCastleRights(pieceType, from);
    this.epBB = new BitBoard();

    this.execMoveType(from, to, type);

    this.prevMoves.push(move);
    this.swapTurn();
  }

  unmakePrevMove() {
    this.swapTurn();
    const move = this.prevMoves.pop();
    const from = move.getFrom();
    const to = move.getTo();
    const type = move.getType();
    const pieceType = move.getPiece();
    console.log('UNMAKE PIECE TYPE:' + pieceType);
    const captPieceType = move.getCaptPiece();

    this.reverseMoveType(from, to, type);

    const prevState = this.prevStates.pop();
    this.epBB = prevState.epBB;
    this.castleRights = prevState.castleRights;

    this.movePiece(to, from, this.turn, pieceType);

    if (captPieceType) {
      this.setPieceAt(to, this.opp, captPieceType);
    }
  }

  renderPieceSets() {
    Object.keys(this.pieces).forEach((boardType) => {
      console.log(boardType);
      this.pieces[boardType].render();
    });
  }

  renderBoardArr() {
    const boardArr = pieceSetsToArray(this.pieces);

    let pos;
    let rowStr = '';
    for (pos = 63; pos >= 0; pos--) {
      rowStr += boardArr[pos];
      if (pos % 8 === 0) {
        console.log(rowStr);
        rowStr = '';
      }
    }
  }
}


let pos = new Position();
const moves = pos.generateMoves();
let nextMoves;

console.log(moves);
console.log(moves.length);

moves.forEach((move) => {
  console.log('DEPT = 1');
  pos = new Position();
  console.log(move.getType());
  pos.makeMove(move);
  pos.renderBoardArr();
  pos.unmakePrevMove();
  pos.renderBoardArr();
  // nextMoves = pos.generateMoves();
  // nextMoves.forEach((nextMove) => {
  //   console.log('DEPT = 2');
  //   console.log(nextMove.getType());
  //   pos.makeMove(nextMove);
  //   pos.pieces[Colors.WHITE].render();
  //   pos.pieces[Colors.BLACK].render();
  // });
});

module.exports = Position;
