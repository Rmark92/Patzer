const { PTypes, PUtils,
        Colors, Dirs,
        eachPieceType } = require('../pieces');
const TransposTable = require('./transpos_table');
const PerfMonitor = require('./perf_monitor');

class AI {
  constructor() {
    this.thinkingTime = 1000;
  }

  setThinkingTime(thinkingTime) {
    this.thinkingTime = thinkingTime;
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

  chooseMove(position, availableMoves) {
    this.perfMonitor = new PerfMonitor();
    this.transPosTable = new TransposTable();

    this.endTime = Date.now() + this.thinkingTime;
    this.perfMonitor.setStartTime();

    this.maxDepth = 1;
    while (Date.now() < this.endTime && this.maxDepth < 30) {
      this.negaMax(position, this.maxDepth, -Infinity, Infinity);
      this.maxDepth++;
    }

    if (this.maxDepth >= 30) {
      console.log('Approaching draw...');
    } else {
      if (!this.perfMonitor.depth) { this.perfMonitor.setDepth(this.maxDepth); }
      this.perfMonitor.setEndTime();
      this.perfMonitor.printResults();
    }

    const currNodeEntry = this.transPosTable.getEntry(position.getHash());
    if (currNodeEntry && currNodeEntry.bestMove) {
      return currNodeEntry.bestMove;
    } else {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    // return this.transPosTable.getEntry(position.getHash()).bestMove;
  }

  quiescenceSearch(position, alpha, beta) {
    if (Date.now() > this.endTime) {
      this.perfMonitor.setDepth(this.maxDepth - 1);
      return 'early exit';
    }
    this.perfMonitor.logQuiescentNode();
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
    if (Date.now() > this.endTime) {
      this.perfMonitor.setDepth(this.maxDepth - 1);
      return 'early exit';
    }

    const prevAlpha = alpha;
    const currHash = position.getHash();
    const entry = this.transPosTable.getEntry(currHash);
    if (entry && entry.depth >= depth) {
      this.perfMonitor.logTableHit();
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

    this.perfMonitor.logMainSearchNode();

    let prevBestMove = (entry && entry.bestMove) ? entry.bestMove : null;

    const moves = this.sortMoves(position.generatePseudoMoves(), prevBestMove);
    let moveIdx;
    let canMove = false;
    let result;
    let score;
    let bestScore = -Infinity;
    let bestMove = null;

    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (position.makeMove(moves[moveIdx])) {
        canMove = true;
        result = this.negaMax(position, depth - 1, -beta, -alpha);
        position.unmakePrevMove();
        if (result === 'early exit') {
          return result;
        }
        score = -result;
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
