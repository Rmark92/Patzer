const { PTypes, PUtils,
        Colors, Dirs,
        eachPieceType } = require('../pieces');

const TransposTable = require('./transpos_table');

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
    let startTime = new Date();
    this.transPosTable = new TransposTable();
    this.maxDepth = 4;
    this.movesMade = position.prevMoves.length;
    this.transPosHits = 0;
    this.qTTableHits = 0;
    this.negaMax(position, this.maxDepth, -Infinity, Infinity);
    console.log('RUN TIME:');
    console.log(new Date() - startTime);
    console.log('TRANSPOS HITS:');
    console.log(this.transPosHits);
    // console.log('Explored Nodes:');
    // console.log(this.exploredNodes);
    return this.transPosTable.getEntry(position.getHash()).bestMove;
  }

  quiescenceSearch(position, alpha, beta) {
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
    const prevAlpha = alpha;
    const currHash = position.getHash();
    const entry = this.transPosTable.getEntry(currHash);
    if (entry && entry.depth >= depth) {
      this.transPosHits++;
      switch (entry.type) {
        case 'exact':
          return entry.score;
        case 'lowerbound':
          alpha = Math.max(alpha, entry.score);
          break;
        case 'upperbound':
          beta = Math.min(beta, entry.score);
          break;
      }

      if (alpha >= beta) { return entry.score; }
    }

    if (depth === 0) {
      return this.quiescenceSearch(position, alpha, beta);
    }

    let prevBestMove;
    if (entry && entry.bestMove) {
      prevBestMove = entry.bestMove;
    }

    const moves = this.sortMoves(position.generatePseudoMoves(), prevBestMove);
    let moveIdx;
    let canMove = false;
    let score;
    let bestScore = -Infinity;
    let bestMove = null;

    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (position.makeMove(moves[moveIdx])) {
        canMove = true;
        score = -this.negaMax(position, depth - 1, -beta, -alpha);
        position.unmakePrevMove();
        if (score > bestScore) {
          bestScore = score;
          bestMove = moves[moveIdx];
          if (score > alpha) {
            alpha = score;
          }
        }
        if (alpha >= beta) { break; }
      }
    }

    if (!canMove) {
      if (position.inCheck(position.turn)) {
        bestScore = -PUtils[PTypes.KINGS].value;
      } else {
        bestScore = 0;
      }
    }


    this.transPosTable.storeEntry(bestScore, bestMove, prevAlpha, beta, depth, currHash);
    return bestScore;
  }

  sortMoves(moves, prevBestMove) {
    function calculateScore(move) {
      if (prevBestMove && move.val === prevBestMove.val) {
        return 10000000;
      }
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
