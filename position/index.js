const { BitBoard, BBMasks } = require('../bitboards');
const { Move, MoveTypes } = require('../moves');
const generatePieceSets = require('./utils/generate_piece_sets.js');
const { Pawns, Knight, Bishop,
        Rook, King, Queen,
        PieceTypes, Colors } = require('../pieces');

class Position {
  constructor(pieces = generatePieceSets(), turn = Colors.WHITE, prevMoves = []) {
    this.pieces = pieces;
    this.prevMoves = prevMoves;

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
    this.addPawnMoveSet(pawnSinglePushes, 8 * Pawns.DIRS[this.turn], MoveTypes.QUIET, moves);

    const pawnDoublePushes = Pawns.doublePush(this.turn, pawnsPos, notOccupied);
    this.addPawnMoveSet(pawnDoublePushes, 16 * Pawns.DIRS[this.turn], MoveTypes.DBL_PPUSH, moves);

    let oppPositions = this.getOppPieces().or(this.epBB);

    const pawnLeftAttacks = Pawns.attacksLeft(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnLeftAttacks, 7 * Pawns.DIRS[this.turn], MoveTypes.CAPT, moves);

    const pawnRightAttacks = Pawns.attacksRight(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnRightAttacks, 9 * Pawns.DIRS[this.turn], MoveTypes.CAPT, moves);
  }

  addPromos(from, to, isCapt, moves) {
    console.log(moves);
    let promos;
    if (isCapt) {
      promos = [MoveTypes.NPROMO_CAPT, MoveTypes.BPROMO_CAPT,
                MoveTypes.RPROMO_CAPT, MoveTypes.QPROMO_CAPT];
    } else {
      promos = [MoveTypes.NPROMO, MoveTypes.BPROMO,
                MoveTypes.RPROMO, MoveTypes.QPROMO];
    }

    promos.forEach((promoType) => moves.push(new Move(from, to, promoType)));
  }

  addPawnMoveSet(newPositions, shiftAmt, type, moves) {
    let from;

    newPositions.forEach1Bit((pos) => {
      from = pos - shiftAmt;
      if (type === MoveTypes.CAPT && this.epBB.hasSetBit(pos)) {
        moves.push(new Move(from, pos, MoveTypes.EP_CAPT));
      } else if (Pawns.PROMO_MASKS[this.turn].hasSetBit(pos)) {
        this.addPromos(from, pos, type === MoveTypes.CAPT, moves);
      } else {
        moves.push(new Move(from, pos, type));
      }
    });
  }

  addNormalMoveSet(newPositions, startPos, moves) {
    let newPos;
    let newMove;
    let type;

    newPositions.forEach1Bit((pos) => {
      type = this.getOppPieces().hasSetBit(pos) ? MoveTypes.CAPT : MoveTypes.QUIET;
      moves.push(new Move(startPos, pos, type));
    });
  }

  addNormalMoves(moves) {
    const notOwnPieces = this.getTurnPieces().not();

    const knightsPos = this.getTurnPieceSet(PieceTypes.KNIGHTS);
    let knightMoves;
    knightsPos.forEach1Bit((pos) => {
      knightMoves = Knight.moves(pos, notOwnPieces);
      this.addNormalMoveSet(knightMoves, pos, moves);
    });

    const bishopsPos = this.getTurnPieceSet(PieceTypes.BISHOPS);
    let bishopMoves;
    bishopsPos.forEach1Bit((pos) => {
      bishopMoves = Bishop.moves(pos, this.getOccupied(), notOwnPieces);
      this.addNormalMoveSet(bishopMoves, pos, moves);
    });

    const rooksPos = this.getTurnPieceSet(PieceTypes.ROOKS);
    let rookMoves;
    rooksPos.forEach1Bit((pos) => {
      rookMoves = Rook.moves(pos, this.getOccupied(), notOwnPieces);
      this.addNormalMoveSet(rookMoves, pos, moves);
    });

    const queenPos = this.getTurnPieceSet(PieceTypes.QUEENS).bitScanForward();
    if (queenPos !== null) {
      const queenMoves = Queen.moves(queenPos, this.getOccupied(), notOwnPieces);
      queenMoves.render();
      this.addNormalMoveSet(queenMoves, queenPos, moves);
    }
  }

  addCastleMoves(moves) {
    const turnCastleRights = this.getTurnCastleRights();
    const startPos = King.INIT_POS[this.turn];

    let castleSlide;

    if (turnCastleRights & 0b1) {
      castleSlide = King.castleSlide(this.turn, 'west', this.getOccupied());
      if (castleSlide.popCount() === 3) {
        moves.push(new Move(startPos, startPos - 2, MoveTypes.CSTL_QUEEN));
      }
    }

    if (turnCastleRights & 0b10) {
      castleSlide = King.castleSlide(this.turn, 'east', this.getOccupied());
      if (castleSlide.popCount() === 2) {

        moves.push(new Move(startPos, startPos + 2, MoveTypes.CSTL_KING));
      }
    }
  }

  addKingMoves(moves) {
      const notOwnPieces = this.getTurnPieces().not();
      const kingPos = this.getTurnPieceSet(PieceTypes.KINGS).bitScanForward();

      // for testing purposes...
      if (kingPos === null) { return; }

      const normalMoves = King.moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, moves);

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

  handleMoveType(from, to, type) {
    switch(type) {
      case MoveTypes.QUIET:
        return;
      case MoveTypes.DBL_PPUSH:
        let epPos = to + (-Pawns.DIRS[this.turn] * 8);
        this.epBB = BitBoard.fromPos(epPos);
        break;
      case MoveTypes.CSTL_KING:
        this.pieces[PieceTypes.ROOKS].clearBit(from + 3);
        this.pieces[this.turn].clearBit(from + 3);
        this.pieces[PieceTypes.ROOKS].setBit(from + 1);
        this.pieces[this.turn].setBit(from + 1);
        break;
      case MoveTypes.CSTL_QUEEN:
        this.pieces[PieceTypes.ROOKS].clearBit(from - 4);
        this.pieces[this.turn].clearBit(from - 4);
        this.pieces[PieceTypes.ROOKS].setBit(from - 1);
        this.pieces[this.turn].setBit(from - 1);
        break;
      case MoveTypes.CAPT:
        this.pieces[this.opp].clearBit(to);
        break;
      case MoveTypes.EP_CAPT:
        let capturedPos = to - (Pawns.DIRS[this.turn] * 8);
        this.pieces[PieceTypes.PAWNS].clearBit(capturedPos);
        this.pieces[this.opp].clearBit(capturedPos);
        break;
      case MoveTypes.NPROMO:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.KNIGHTS].setBit(to);
        break;
      case MoveTypes.BPROMO:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.BISHOPS].setBit(to);
        break;
      case MoveTypes.RPROMO:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.ROOKS].setBit(to);
        break;
      case MoveTypes.QPROMO:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.QUEENS].setBit(to);
        break;
      case MoveTypes.NPROMO_CAPT:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.KNIGHTS].setBit(to);
        this.pieces[this.opp].clearBit(to);
        break;
      case MoveTypes.BPROMO_CAPT:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.BISHOPS].setBit(to);
        this.pieces[this.opp].clearBit(to);
        break;
      case MoveTypes.RPROMO_CAPT:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.ROOKS].setBit(to);
        this.pieces[this.opp].clearBit(to);
        break;
      case MoveTypes.QPROMO_CAPT:
        this.pieces[PieceTypes.PAWNS].clearBit(to);
        this.pieces[PieceTypes.QUEENS].setBit(to);
        this.pieces[this.opp].clearBit(to);
        break;
    }
  }

  makeMove(move) {
    const from = move.getFrom();
    const to = move.getTo();
    const type = move.getType();

    let pieceType = this.getPieceAt(from);
    this.pieces[pieceType].setBit(to);
    this.pieces[pieceType].clearBit(from);
    this.pieces[this.turn].setBit(to);
    this.pieces[this.turn].clearBit(from);


    this.epBB = new BitBoard();
    this.handleMoveType(from, to, type);
    this.swapTurn();
  }

  render() {
    Object.keys(this.pieces).forEach((boardType) => {
      console.log(boardType);
      this.pieces[boardType].render();
    });
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
  pos.pieces[Colors.WHITE].render();
  pos.pieces[Colors.BLACK].render();
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
