const { PTypes, PUtils,
        Colors, Dirs,
        eachPieceType } = require('../pieces');
const { TransposTable, TABLE_SCORE_TYPES } = require('./transpos_table.js');
const KillerMoveList = require('./killer_move_list.js');
const PerfMonitor = require('./perf_monitor.js');

const EARLY_EXIT = 'early exit';

class MoveSearch {
  constructor(position, initAvailable) {
    this.position = position;
    this.initAvailable = initAvailable;
    this.transPosTable = new TransposTable();
    this.killerMoveList = new KillerMoveList();
    this.perfMonitor = new PerfMonitor();
  }

  findBest(thinkingTime) {
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
      if (!this.perfMonitor.depth) { this.perfMonitor.setDepth(this.maxDepth - 1); }
      this.perfMonitor.setEndTime();
      this.perfMonitor.printResults();
    }

    const currNodeEntry = this.transPosTable.getEntry(this.position.getHash());
    if (currNodeEntry && currNodeEntry.bestMove) {
      return currNodeEntry.bestMove;
    } else {
      return this.initAvailable[Math.floor(Math.random() * this.initAvailable.length)];
    }
  }

  getPerformance() {
    return this.perfMonitor.getResults();
  }

  quiescenceSearch(alpha, beta) {
    if (Date.now() > this.endTime) {
      this.perfMonitor.setDepth(this.maxDepth - 1);
      return EARLY_EXIT;
    }
    this.perfMonitor.logQuiescentNode();
    const standPatVal = this.evaluate();

    if (standPatVal >= beta) {
      return beta;
    } else if (standPatVal > alpha) {
      alpha = standPatVal;
    }

    let inCheck = this.position.inCheck(this.position.turn);

    function calculateMoveOrderScore(move) {
      let score = move.getCaptPiece()? ((1 + move.getCaptPiece()) / (1 + move.getPiece())): 0;
      score = score * 10 + move.getPiece();
      score = score * 10 + move.getType();

      return score;
    }

    // include quiet moves (ie non captures) only if the king is in check;
    const moves = this.sortMoves(this.position.generatePseudoMoves(inCheck), calculateMoveOrderScore);

    let moveIdx;
    let score;

    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (this.position.makeMove(moves[moveIdx])) {
        score = -this.quiescenceSearch(-beta, -alpha);
        this.position.unmakePrevMove();

        if (score >= beta) { return beta; }
        if (score > alpha) { alpha = score; }
      }
    }

    return alpha;
  }

  negaMax(depth, alpha, beta) {
    if (Date.now() > this.endTime) {
      this.perfMonitor.setDepth(this.maxDepth - 1);
      return EARLY_EXIT;
    }

    const prevAlpha = alpha;
    const currHash = this.position.getHash();
    const entry = this.transPosTable.getEntry(currHash);
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
      if (alpha >= beta) { return entry.score; }
    }

    if (depth === 0) {
      return this.quiescenceSearch(alpha, beta);
    }

    this.perfMonitor.logMainSearchNode();

    let prevBestMove = (entry && entry.bestMove) ? entry.bestMove : null;
    const siblingKillerMoves = this.killerMoveList.getSiblingMoves(this.maxDepth - depth);

    function calculateMoveOrderScore(move) {
      if (prevBestMove && move.val === prevBestMove.val) {
        return 10000;
      }
      let score = move.getCaptPiece() ? ((1 + move.getCaptPiece()) / (1 + move.getPiece()) + 1): 0;
      score = score * 10 + (siblingKillerMoves.includes(move.val) ? 1 : 0);
      score = score * 10 + move.getPiece();
      score = score * 10 + move.getType();

      return score;
    }

    const moves = this.sortMoves(this.position.generatePseudoMoves(), calculateMoveOrderScore);

    let moveIdx;
    let canMove = false;
    let result;
    let score;
    let bestScore = -Infinity;
    let bestMove = null;

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

  sortMoves(moves, calculateScore) {
    function createMoveScores() {
      return moves.map((move) => {
        return { move: move, score: calculateScore(move) };
      });
    }

    return createMoveScores().sort((moveA, moveB) => moveB.score - moveA.score)
                             .map((moveScore) => moveScore.move);
  }

  evaluate() {
    let materialScore = this.scoreMaterial(this.position.turn) -
                        this.scoreMaterial(this.position.opp);

    let piecePositionScore = this.scorePiecePositions(this.position.turn) -
                             this.scorePiecePositions(this.position.opp);

    return materialScore + piecePositionScore;
  }

  scoreMaterial(color) {
    let score = 0;
    eachPieceType((pieceType) => {
      score += this.position.getColorPieceSet(color, pieceType).popCount() *
               PUtils[pieceType].value;
    });

    return score;
  }

  scorePiecePositions(color) {
    let score = 0;
    let piecePositions;
    eachPieceType((pieceType) => {
      piecePositions = this.position.getColorPieceSet(color, pieceType);
      piecePositions.dup().pop1Bits((pos) => {
        score += PUtils[pieceType].positionValues[color ? pos : 56 ^ pos];
      });
    });

    return score;
  }
}

module.exports = MoveSearch;
