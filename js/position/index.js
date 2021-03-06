const { BitBoard, BBMasks } = require('../bitboard');

const { Move, MoveTypes } = require('../move');

const { PUtils, PTypes,
        Colors, Dirs,
        eachPieceType, PieceConv } = require('../pieces');

const { piecePosHashKeys,
        epPosHashKeys,
        castleHashKeys,
        turnHashKeys } = require('./zhash_constants.js');

// We initialize our position with a FEN string so that it's easy to
// recreate a particular position. Since just one position object is created during
// our game, this is mainly helpful for testing/debugging purposes
// More about FEN here: https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation

const defaultFenStr = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

class Position {
  constructor(fenStr = defaultFenStr) {
    const [ positions,
            turnLetter,
            castleRightsStr,
            epSq,
            halfMoveClock,
            fullMoveClock ] = fenStr.split(' ');

    this.pieces = this.fenPositionsToPieceBBs(positions);
    this.castleRights = this.parseCastleRightsStr(castleRightsStr);
    this.epBB = this.parseEpStr(epSq);
    this.halfMoveClock = parseInt(halfMoveClock);
    this.fullMoveClock = parseInt(fullMoveClock);
    const turn = turnLetter === 'w' ? Colors.WHITE : Colors.BLACK;

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

  fenPositionsToPieceBBs(positions) {
    const rowStrs = positions.split('/');

    const pieceBBs = this.createEmptyPiecesBBs();

    let pos = 0;
    rowStrs.forEach((rowStr) => {
      rowStr.split('').forEach((char) => {
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

  createEmptyPiecesBBs() {
    const pieces = [];

    eachPieceType((type) => {
      pieces[type] = new BitBoard();
    });

    Object.values(Colors).forEach((color) => {
      pieces[color] = new BitBoard();
    });

    return pieces;
  }

  parseCastleRightsStr(castleRightsStr) {
    const rightsPos = ['q', 'k', 'Q', 'K'];

    return rightsPos.reduce((res, rightsLetter, pos) => {
      if (castleRightsStr.includes(rightsLetter)) {
        return (res ^ (1 << pos));
      }
    }, 0);
  }

  parseEpStr(epStr) {
    if (/\d+/.test(epStr)) {
      return BitBoard.fromPos(parseInt(epStr));
    } else {
      return new BitBoard();
    }
  }

  createPTypesLocations() {
    let pos;
    const res = [];

    for (pos = 0; pos < 64; pos++) {
      res[pos] = this.getPieceAt(pos);
    }

    return res;
  }

  getPieceAt(pos) {
    const types = Object.values(PTypes);

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

  createPiecesPosHash() {
    let val = 0;

    let pType;
    const whitesPos = this.pieces[Colors.WHITE];
    whitesPos.dup().pop1Bits((pos) => {
      pType = this.pTypesLocations[pos];
      val ^= piecePosHashKeys[pos][pType][Colors.WHITE];
    });

    const blacksPos = this.pieces[Colors.BLACK];
    blacksPos.dup().pop1Bits((pos) => {
      pType = this.pTypesLocations[pos];
      val ^= piecePosHashKeys[pos][pType][Colors.BLACK];
    });

    return val;
  }

  createStateHash() {
    let val = 0;
    this.epBB.dup().pop1Bits((pos) => {
      val ^= epPosHashKeys[pos];
    });

    let castleRightsPos;
    for (castleRightsPos = 0; castleRightsPos < 4; castleRightsPos++) {
      if ((this.castleRights & (1 << castleRightsPos)) >>> 0) {
        val ^= castleHashKeys[castleRightsPos];
      }
    }

    return val;
  }

  getHash() {
    return this.pPosHash ^ this.stateHash ^ turnHashKeys[this.turn];
  }

  setTurn(turn, opp) {
    this.turn = turn;
    this.opp = opp;
  }

  swapTurn() {
    this.setTurn(this.opp, this.turn);
  }

  getOtherColor(color) {
    return color ^ Colors.BLACK;
  }

  // generates all pseudo legal moves, ie moves that may put the king
  // in check but are otherwise legal
  generatePseudoMoves(includeQuiet = true, checkNSDraw = true) {
    const moves = [];
    if (checkNSDraw && this.isNonStalemateDraw()) { return moves; }
    this.addPawnMoves(moves, includeQuiet);
    this.addNormalMoves(moves, includeQuiet);
    this.addKingMoves(moves, includeQuiet);

    return moves;
  }

  // generates moves with a filter for whether the move puts the king in check,
  // used for the UI but not the AI move search
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

  isNonStalemateDraw() {
    return this.isMoveLimitExceeded() || this.isThreefoldRepetition();
  }

  isThreefoldRepetition() {
    return this.positionCounts[this.getHash()] === 3;
  }

  isMoveLimitExceeded() {
    return this.halfMoveClock >= 50;
  }

  addPawnMoves(moves, includeQuiet) {
    const pawnsPos = this.getColorPieceSet(this.turn, PTypes.PAWNS);

    if (includeQuiet) {
      const notOccupied = this.getOccupied().not();

      const pawnSinglePushes = PUtils[PTypes.PAWNS].singlePush(this.turn, pawnsPos, notOccupied);
      this.addPawnMoveSet(pawnSinglePushes, 8 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves);

      const pawnDoublePushes = PUtils[PTypes.PAWNS].doublePush(this.turn, pawnsPos, notOccupied);
      this.addPawnMoveSet(pawnDoublePushes, 16 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves, false, true);
    }

    let oppPositions = this.pieces[this.opp].or(this.epBB);

    const pawnLeftAttacks = PUtils[PTypes.PAWNS].attacksLeft(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnLeftAttacks, 7 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves, true);

    const pawnRightAttacks = PUtils[PTypes.PAWNS].attacksRight(this.turn, pawnsPos, oppPositions);
    this.addPawnMoveSet(pawnRightAttacks, 9 * PUtils[PTypes.PAWNS].DIRS[this.turn], moves, true);
  }

  addNormalMoves(moves, includeQuiet) {
    const occupied = this.getOccupied();
    const notOwnPieces = this.getNotOccupiedBy(this.turn);

    const knightsPos = this.getColorPieceSet(this.turn, PTypes.KNIGHTS);
    let knightMoves;
    knightsPos.dup().pop1Bits((pos) => {
      knightMoves = PUtils[PTypes.KNIGHTS].moves(pos, notOwnPieces);
      this.addNormalMoveSet(knightMoves, pos, PTypes.KNIGHTS, moves, includeQuiet);
    });

    let positions;
    let destinations;
    [PTypes.BISHOPS, PTypes.ROOKS, PTypes.QUEENS].forEach((slidingType) => {
      positions = this.getColorPieceSet(this.turn, slidingType);
      positions.dup().pop1Bits((pos) => {
        destinations = PUtils[slidingType].moves(pos, occupied, notOwnPieces);
        this.addNormalMoveSet(destinations, pos, slidingType, moves, includeQuiet);
      });
    });
  }

  addKingMoves(moves, includeQuiet) {
      const notOwnPieces = this.getNotOccupiedBy(this.turn);
      const kingPos = this.getColorPieceSet(this.turn, PTypes.KINGS).bitScanForward();

      const normalMoves = PUtils[PTypes.KINGS].moves(kingPos, notOwnPieces);
      this.addNormalMoveSet(normalMoves, kingPos, PTypes.KINGS, moves, includeQuiet);

      if (includeQuiet) {
        this.addCastleMoves(moves);
      }
  }

  // note: unlike other pieces, we map pawn movements from the set of all existing pawns
  // rather than each pawn individually, so the function takes a shift amount to determine
  // the location of the individual pawn that moved to a new position
  addPawnMoveSet(newPositions, shiftAmt, moves, isCapture, isDblPush) {
    let from;
    let captured = null;

    newPositions.pop1Bits((pos) => {
      from = pos - shiftAmt;
      if (isDblPush) {
        moves.push(new Move(from, pos, MoveTypes.DBL_PPUSH, PTypes.PAWNS));
      } else if (isCapture && this.epBB.hasSetBit(pos)) {
        moves.push(new Move(from, pos, MoveTypes.EP_CAPT, PTypes.PAWNS));
      } else {
        if (isCapture) { captured = this.pTypesLocations[pos]; }

        if (PUtils[PTypes.PAWNS].PROMO_MASKS[this.turn].hasSetBit(pos)) {
          this.addPromos(from, pos, moves, captured);
        } else {
          moves.push(new Move(from, pos, MoveTypes.NORMAL, PTypes.PAWNS, captured));
        }
      }
    });
  }

  addPromos(from, to, moves, captured) {
    [MoveTypes.NPROMO, MoveTypes.BPROMO,
     MoveTypes.RPROMO, MoveTypes.QPROMO].forEach((promoType) => {
       moves.push(new Move(from, to, promoType, PTypes.PAWNS, captured));
     });
  }

  addNormalMoveSet(newPositions, startPos, pieceType, moves, includeQuiet) {
    let newPos;
    let newMove;
    let captType;

    newPositions.pop1Bits((pos) => {
      captType = this.pieces[this.opp].hasSetBit(pos) ? this.pTypesLocations[pos] : null;
      if (includeQuiet || captType) {
        moves.push(new Move(startPos, pos, MoveTypes.NORMAL, pieceType, captType));
      }
    });
  }

  addCastleMoves(moves) {
    const turnCastleRights = this.getCastleRights(this.turn);
    const startPos = PUtils[PTypes.KINGS].INIT_POS[this.turn];
    const notOccupied = this.getOccupied().not();

    if ((turnCastleRights & 0b1) && PUtils[PTypes.KINGS].canCastle(this.turn, Dirs.WEST, notOccupied)) {
      moves.push(new Move(startPos, startPos - 2, MoveTypes.CSTL_QUEEN, PTypes.KINGS));
    }

    if ((turnCastleRights & 0b10) && PUtils[PTypes.KINGS].canCastle(this.turn, Dirs.EAST, notOccupied)) {
      moves.push(new Move(startPos, startPos + 2, MoveTypes.CSTL_KING, PTypes.KINGS));
    }
  }

  // returns 2bit value for the color's castling rights
  // left bit => king-side rights
  // right bit => queen-side rights
  getCastleRights(color) {
    return color === Colors.WHITE ? this.castleRights & 0b11 : this.castleRights >>> 2;
  }

  getColorPieceSet(color, pieceType) {
    return this.pieces[color].and(this.pieces[pieceType]);
  }

  getOccupied() {
    return this.pieces[Colors.WHITE].or(this.pieces[Colors.BLACK]);
  }

  getNotOccupiedBy(color) {
    return this.pieces[color].not();
  }

  makeMove(move) {
    const moveData = move.getData();

    let isLegal;
    this.testMove(moveData, (testsLegal) => {
      isLegal = testsLegal;
      return !isLegal;
    });

    if (!isLegal) { return false; }
    this.setNewState(moveData);
    this.execMoveType(moveData.from, moveData.to, moveData.type);

    this.prevMoves.push(move);
    this.swapTurn();
    this.addPositionCount();

    return true;
  }

  testMove(moveData, cb) {
    if (moveData.captPieceType) {
      this.clearPieceAt(moveData.to, this.opp, moveData.captPieceType);
    }

    if (moveData.isPromo) {
      this.clearPieceAt(moveData.from, this.turn, PTypes.PAWNS);
    } else {
      this.movePiece(moveData.from, moveData.to, this.turn, moveData.pieceType);
    }

    const undo = cb(this.testsLegal(moveData));
    if (!undo) { return; }

    if (moveData.isPromo) {
      this.setPieceAt(moveData.from, this.turn, PTypes.PAWNS);
    } else {
      this.movePiece(moveData.to, moveData.from, this.turn, moveData.pieceType);
    }

    if (moveData.captPieceType) {
      this.setPieceAt(moveData.to, this.opp, moveData.captPieceType);
    }
  }

  testsLegal(moveData) {
    if (moveData.isCastle) {
      return this.isLegalCastle(moveData.from, moveData.type);
    } else {
      return !this.inCheck(this.turn);
    }
  }

  // to make sure we aren't sliding through check
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

  inCheck(color) {
    const kingPos = this.getColorPieceSet(color, PTypes.KINGS).bitScanForward();
    return this.isAttacked(kingPos, color);
  }

  isAttacked(pos, color) {
    const posBB = BitBoard.fromPos(pos);
    const occupied = this.getOccupied();
    const oppColor = this.getOtherColor(color);
    const pawns = this.getColorPieceSet(oppColor, PTypes.PAWNS);

    const queenBB = this.getColorPieceSet(oppColor, PTypes.QUEENS);
    return (!PUtils[PTypes.PAWNS].attacksLeft(oppColor, pawns, posBB).isZero() ||
            !PUtils[PTypes.PAWNS].attacksRight(oppColor, pawns, posBB).isZero() ||
            !PUtils[PTypes.KNIGHTS].moves(pos, this.getColorPieceSet(oppColor, PTypes.KNIGHTS)).isZero() ||
            !PUtils[PTypes.BISHOPS].moves(pos, occupied, this.getColorPieceSet(oppColor, PTypes.BISHOPS).or(queenBB)).isZero() ||
            !PUtils[PTypes.ROOKS].moves(pos, occupied, this.getColorPieceSet(oppColor, PTypes.ROOKS).or(queenBB)).isZero() ||
            !PUtils[PTypes.KINGS].moves(pos, this.getColorPieceSet(oppColor, PTypes.KINGS)).isZero());
  }

  setNewState(moveData) {
    this.addPrevState();

    this.adjustCastleRights(moveData);
    this.setNewEpState();
    this.updateClock(moveData);
  }

  // adds the current state values to the prevStates array
  // used for move unmaking purposes
  addPrevState() {
    const state = { epBB: this.epBB,
                    castleRights: this.castleRights,
                    stateHash: this.stateHash,
                    halfMoveClock: this.halfMoveClock,
                    fullMoveClock: this.fullMoveClock
                  };
    this.prevStates.push(state);
  }

  adjustCastleRights(moveData) {
    const turnCastleRights = this.getCastleRights(this.turn);
    let dir;
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

  clearCastleRights(color, dir) {
    let clearRightsPos = 0;
    if (color === Colors.BLACK) { clearRightsPos += 2; }
    if (dir === Dirs.EAST) { clearRightsPos += 1; }

    let clearRightsMask = 1 << clearRightsPos;
    if (clearRightsMask & this.castleRights) {
      this.castleRights = (this.castleRights & (~clearRightsMask)) >>> 0;
      this.stateHash ^= castleHashKeys[clearRightsPos];
    }
  }

  setNewEpState() {
    const epPos = this.epBB.bitScanForward();
    if (epPos !== null) { this.stateHash ^= epPosHashKeys[epPos]; }
    this.epBB = new BitBoard();
  }

  updateClock(moveData) {
    if (this.turn === Colors.BLACK) {
      this.fullMoveClock++;
    }

    if (moveData.captPieceType || moveData.pieceType === PTypes.PAWNS) {
      this.halfMoveClock = 0;
    } else {
      this.halfMoveClock++;
    }
  }

  execMoveType(from, to, type) {
    switch(type) {
      case MoveTypes.NORMAL:
        return;
      case MoveTypes.DBL_PPUSH:
        let epPos = to + (-PUtils[PTypes.PAWNS].DIRS[this.turn] * 8);
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
        let capturedPos = to - (PUtils[PTypes.PAWNS].DIRS[this.turn] * 8);
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

  addPositionCount() {
    const currHash = this.getHash();
    if (!this.positionCounts[currHash]) {
      this.positionCounts[currHash] = 1;
    } else {
      this.positionCounts[currHash] += 1;
    }
  }

  unmakePrevMove() {
    const prevMove = this.prevMoves.pop();
    if (!prevMove) { return false; }

    this.subtractPositionCount();
    this.swapTurn();

    const moveData = prevMove.getData();

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

  restorePrevState() {
    const prevState = this.prevStates.pop();
    this.epBB = prevState.epBB;
    this.castleRights = prevState.castleRights;
    this.stateHash = prevState.stateHash;
    this.halfMoveClock = prevState.halfMoveClock;
    this.fullMoveClock = prevState.fullMoveClock;
  }

  subtractPositionCount() {
    const currHash = this.getHash();
    this.positionCounts[currHash] -= 1;
    if (this.positionCounts[currHash] <= 0) {
      delete this.positionCounts[currHash];
    }
  }

  reverseMoveType(from, to, type) {
    switch(type) {
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
        let capturedPos = to - (PUtils[PTypes.PAWNS].DIRS[this.turn] * 8);
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

  movePiece(from, to, color, pieceType) {
    this.clearPieceAt(from, color, pieceType);
    this.setPieceAt(to, color, pieceType);
  }

  setPieceAt(pos, color, pieceType) {
    this.pieces[color].setBit(pos);
    this.pieces[pieceType].setBit(pos);
    this.pTypesLocations[pos] = pieceType;
    this.pPosHash ^= piecePosHashKeys[pos][pieceType][color];
  }

  clearPieceAt(pos, color, pieceType) {
    this.pieces[color].clearBit(pos);
    this.pieces[pieceType].clearBit(pos);
    this.pTypesLocations[pos] = null;
    this.pPosHash ^= piecePosHashKeys[pos][pieceType][color];
  }
}

module.exports = Position;
