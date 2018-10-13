const { Pawns, Knight, Bishop,
        Rook, King, Queen,
        PieceTypes, Colors, Dirs } = require('../pieces');

class AI {
  constructor() {

  }

  // sumPawnScore(position, color, notOccupied, oppPositions) {
  //   let sum = 0;
  //
  //   const pawnsPos = position.getColorPieceSet(color, PieceTypes.PAWNS);
  //
  //   pawnsPos.dup().pop1Bits((pos) => {
  //     sum += Pawns.value;
  //     sum += Pawns.positionValues[color ? (pos ^ 56) : pos];
  //   });
  //
  //   sum += Pawns.singlePush(color, pawnsPos, notOccupied).popCount();
  //   sum += Pawns.doublePush(color, pawnsPos, notOccupied).popCount();
  //   sum += Pawns.attacksLeft(color, pawnsPos, oppPositions).popCount();
  //   sum += Pawns.attacksRight(color, pawnsPos, oppPositions).popCount();
  //
  //   return sum;
  // }
  //
  // sumSteppingPieceScore(position, color, pieceType, pieceConstant, notOwnPieces) {
  //   let sum = 0;
  //
  //   const pieces = position.getColorPieceSet(color, pieceType);
  //
  //   pieces.dup().pop1Bits((pos) => {
  //     sum += pieceConstant.value;
  //     sum += pieceConstant.positionValues[color ? (pos ^ 56) : pos];
  //     sum += pieceConstant.moves(pos, notOwnPieces).popCount();
  //   });
  //
  //   return sum;
  // }
  //
  // sumSlidingPieceScore(position, color, pieceType, pieceConstant, occupied, notOwnPieces) {
  //   let sum = 0;
  //
  //   const pieces = position.getColorPieceSet(color, pieceType);
  //
  //   pieces.dup().pop1Bits((pos) => {
  //     sum += pieceConstant.value;
  //     sum += pieceConstant.positionValues[color ? (pos ^ 56) : pos];
  //     sum += pieceConstant.moves(pos, occupied, notOwnPieces).popCount();
  //   });
  //
  //   return sum;
  // }
  //
  sumPieceSetScore(piecePositions, pieceConstant, color) {
    let sum = 0;
    piecePositions.dup().pop1Bits((pos) => {
      sum += pieceConstant.value;
      sum += pieceConstant.positionValues[color ? (pos ^ 56) : pos];
    });

    return sum;
  }

  sumPieceScore(pos, pieceConstant, color) {
    let sum = 0;

    if (pos !== null) {
      sum += pieceConstant.value;
      sum += pieceConstant.positionValues[color ? (pos ^ 56) : pos];
    }

    return sum;
  }

  evaluate(position) {
    let sum = 0;

    const turnPawns = position.getColorPieceSet(position.turn, PieceTypes.PAWNS);
    sum += this.sumPieceSetScore(turnPawns, Pawns, position.turn);

    const turnKnights = position.getColorPieceSet(position.turn, PieceTypes.KNIGHTS);
    sum += this.sumPieceSetScore(turnKnights, Knight, position.turn);

    const turnBishops = position.getColorPieceSet(position.turn, PieceTypes.BISHOPS);
    sum += this.sumPieceSetScore(turnBishops, Bishop, position.turn);

    const turnRooks = position.getColorPieceSet(position.turn, PieceTypes.ROOKS);
    sum += this.sumPieceSetScore(turnRooks, Rook, position.turn);

    const turnQueenPos = position.getColorPieceSet(position.turn, PieceTypes.QUEENS).bitScanForward();
    sum += this.sumPieceScore(turnQueenPos, Queen, position.turn);

    const turnKingPos = position.getColorPieceSet(position.turn, PieceTypes.KINGS).bitScanForward();
    sum += this.sumPieceScore(turnKingPos, King, position.turn);

    const oppPawns = position.getColorPieceSet(position.opp, PieceTypes.PAWNS);
    sum -= this.sumPieceSetScore(oppPawns, Pawns, position.opp);

    const oppKnights = position.getColorPieceSet(position.opp, PieceTypes.KNIGHTS);
    sum -= this.sumPieceSetScore(oppKnights, Knight, position.opp);

    const oppBishops = position.getColorPieceSet(position.opp, PieceTypes.BISHOPS);
    sum -= this.sumPieceSetScore(oppBishops, Bishop, position.opp);

    const oppRooks = position.getColorPieceSet(position.opp, PieceTypes.ROOKS);
    sum -= this.sumPieceSetScore(oppRooks, Rook, position.opp);

    const oppQueenPos = position.getColorPieceSet(position.opp, PieceTypes.QUEENS).bitScanForward();
    sum -= this.sumPieceScore(oppQueenPos, Queen, position.turn);

    const oppKingPos = position.getColorPieceSet(position.opp, PieceTypes.KINGS).bitScanForward();
    sum -= this.sumPieceScore(oppKingPos, King, position.opp);

    return sum;
  }

  // evaluate(position) {
  //   let sum = 0;
  //
  //   const turnPieces = position.pieces[position.turn];
  //   const oppPieces = position.pieces[position.opp];
  //   const notTurnPieces = position.getNotOccupiedBy(position.turn);
  //   const notOppPieces = position.getNotOccupiedBy(position.opp);
  //   const occupied = position.getOccupied();
  //   const notOccupied = occupied.not();
  //
  //   sum += this.sumPawnScore(position, position.turn, notOccupied, oppPieces);
  //   sum -= this.sumPawnScore(position, position.opp, notOccupied, turnPieces);
  //
  //   sum += this.sumSteppingPieceScore(position, position.turn, PieceTypes.KNIGHTS, Knight, notTurnPieces);
  //   sum -= this.sumSteppingPieceScore(position, position.opp, PieceTypes.KNIGHTS, Knight, notOppPieces);
  //
  //   sum += this.sumSlidingPieceScore(position, position.turn, PieceTypes.BISHOPS, Bishop, occupied, notTurnPieces);
  //   sum -= this.sumSlidingPieceScore(position, position.opp, PieceTypes.BISHOPS, Bishop, occupied, notOppPieces);
  //
  //   sum += this.sumSlidingPieceScore(position, position.turn, PieceTypes.ROOKS, Rook, occupied, notTurnPieces);
  //   sum -= this.sumSlidingPieceScore(position, position.opp, PieceTypes.ROOKS, Rook, occupied, notOppPieces);
  //
  //   sum += this.sumSlidingPieceScore(position, position.turn, PieceTypes.QUEENS, Queen, occupied, notTurnPieces);
  //   sum -= this.sumSlidingPieceScore(position, position.opp, PieceTypes.QUEENS, Queen, occupied, notOppPieces);
  //
  //   sum += this.sumSteppingPieceScore(position, position.turn, PieceTypes.KINGS, King, notTurnPieces);
  //   sum -= this.sumSteppingPieceScore(position, position.opp, PieceTypes.KINGS, King, notOppPieces);
  //
  //   return sum;
  // }

  makeMove(position) {
    // const moves = position.generateLegalMoves();
    // const move = moves[Math.floor(Math.random() * moves.length)];
    // position.makeMove(move);
    this.maxDepth = 4;
    this.negaMax(position, this.maxDepth, -Infinity, Infinity);
    position.makeMove(this.bestMove);
  }

  quiescenceSearch(position, alpha, beta) {
    const standPatVal = this.evaluate(position);

    if (standPatVal >= beta) {
      return beta;
    } else if (alpha < standPatVal) {
      alpha = standPatVal;
    }

    const moves = position.generatePseudoMoves(position.inCheck(position.turn));
    this.sortMoves(moves);
    let moveIdx;
    let score;

    // if (inCheck) { position.renderBoardArr(); }
    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (position.makeMove(moves[moveIdx])) {
        score = -this.quiescenceSearch(position, -beta, -alpha);
        position.unmakePrevMove();

        if (score >= beta) { return beta; }
        if (score > alpha) { alpha = score; }
      }
    }

    return alpha;
  }

  negaMax(position, depth, alpha, beta) {
    if (depth === 0) {
      // return this.evaluate(position);
      return this.quiescenceSearch(position, alpha, beta);
    }

    const moves = position.generatePseudoMoves();
    this.sortMoves(moves);
    let moveIdx;
    let canMove = false;
    let score;
    let bestScore = -Infinity;

    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (position.makeMove(moves[moveIdx])) {
        canMove = true;
        score = -this.negaMax(position, depth - 1, -beta, -alpha);
        position.unmakePrevMove();
        if (score > bestScore) {
          bestScore = score;
          if (bestScore > alpha) { alpha = bestScore; }
          if (depth === this.maxDepth) { this.bestMove = moves[moveIdx]; }
        }
        if (alpha >= beta) { break; }
      }
    }

    if (!canMove) {
      if (position.inCheck(position.turn)) {
        return -King.value;
      } else {
        return 0;
      }
    } else {
      return bestScore;
    }
  }

  sortMoves(moves) {
    function calculateScore(move) {
      let score = move.getCaptPiece();
      score = score * 10 + move.getPiece();
      score = score * 10 + move.getType();
    }

    moves.sort((moveA, moveB) => {
      return calculateScore(moveA) > calculateScore(moveB) ? -1 : 1;
    });
  }
}

module.exports = AI;
