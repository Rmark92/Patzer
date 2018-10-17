const { PTypes, PUtils,
        Colors, Dirs,
        eachPieceType } = require('../pieces');

class AI {
  constructor() {

  }

  scoreMaterial(position, color) {
    let score = 0;
    eachPieceType((pieceType) => {
      score += position.getColorPieceSet(color, pieceType).popCount() *
               PUtils[pieceType].value;
    });

    return score;
  }

  scorePiecePositions(position, color) {
    let score = 0;
    let piecePositions;
    eachPieceType((pieceType) => {
      piecePositions = position.getColorPieceSet(color, pieceType);
      piecePositions.dup().pop1Bits((pos) => {
        score += PUtils[pieceType].positionValues[color ? pos : 56 ^ pos];
      });
    });

    return score;
  }

  evaluate(position) {
    let materialScore = this.scoreMaterial(position, position.turn) -
                        this.scoreMaterial(position, position.opp);

    let piecePositionScore = this.scorePiecePositions(position, position.turn) -
                             this.scorePiecePositions(position, position.opp);

    return materialScore + piecePositionScore;
  }

  chooseMove(position) {
    // const moves = position.generateLegalMoves();
    // const move = moves[Math.floor(Math.random() * moves.length)];
    // position.makeMove(move);
    let startTime = new Date();
    this.maxDepth = 4;
    this.movesMade = position.prevMoves.length;
    this.negaMax(position, this.maxDepth, -Infinity, Infinity);
    console.log('RUN TIME:');
    console.log(new Date() - startTime);
    return this.bestMove;
    // position.makeMove(this.bestMove);
  }

  quiescenceSearch(position, alpha, beta) {
    // for testing purposes...
    if (position.prevMoves.length - this.movesMade > 20) {
      console.log('over 20 moves deep!');
    }
    const standPatVal = this.evaluate(position);

    if (standPatVal >= beta) {
      return beta;
    } else if (standPatVal > alpha) {
      alpha = standPatVal;
    }

    let inCheck = position.inCheck(position.turn);
    // include quiet moves (ie non captures) only if the king is in check;
    const moves = this.sortMoves(position.generatePseudoMoves(inCheck));
    let moveIdx;
    let score;

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
      return this.quiescenceSearch(position, alpha, beta);
    }

    const moves = this.sortMoves(position.generatePseudoMoves());
    let moveIdx;
    let canMove = false;
    let score;

    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (position.makeMove(moves[moveIdx])) {
        canMove = true;
        score = -this.negaMax(position, depth - 1, -beta, -alpha);
        position.unmakePrevMove();
        if (score > alpha) {
          alpha = score;
          if (depth === this.maxDepth) { this.bestMove = moves[moveIdx]; }
        }
        if (alpha >= beta) { break; }
      }
    }

    if (!canMove) {
      if (position.inCheck(position.turn)) {
        return -PUtils[PTypes.KINGS].value;
      } else {
        return 0;
      }
    } else {
      return alpha;
    }
  }

  sortMoves(moves) {
    function calculateScore(move) {
      let score = move.getCaptPiece()? ((1 + move.getCaptPiece()) / (1 + move.getPiece())): 0;
    	score = score * 6 + move.getPiece();
    	score = score * 16 + move.getType();
    	score = score * 64 + move.getTo();
    	score = score * 64 + move.getFrom();

      return score;
    }

    moves.sort((moveA, moveB) => calculateScore(moveB) - calculateScore(moveA));
    return moves;
  }
}

module.exports = AI;
