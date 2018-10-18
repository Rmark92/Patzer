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
    this.transPosTable = {};
    this.maxDepth = 4;
    this.exploredNodes = 0;
    this.movesMade = position.prevMoves.length;
    this.negaMax(position, this.maxDepth, -Infinity, Infinity);
    console.log('RUN TIME:');
    console.log(new Date() - startTime);
    console.log('Explored Nodes:');
    console.log(this.exploredNodes);
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
    const prevAlpha = alpha;
    const currHash = position.getHash();
    const entry = this.transPosTable[currHash];
    if (entry && entry.depth >= depth) {
      // console.log('found');
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
      this.exploredNodes++;
      return this.quiescenceSearch(position, alpha, beta);
    }

    const moves = this.sortMoves(position.generatePseudoMoves());
    let moveIdx;
    let canMove = false;
    let score = -Infinity;

    for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
      if (position.makeMove(moves[moveIdx])) {
        canMove = true;
        score = Math.max(score, -this.negaMax(position, depth - 1, -beta, -alpha));
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
        score = -PUtils[PTypes.KINGS].value;
      } else {
        score = 0;
      }
    }


    this.storeResult(score, prevAlpha, beta, depth, currHash);
    return score;
  }

  storeResult(score, alpha, beta, depth, hash) {
    this.transPosTable[hash] = {
      score,
      type: this.determineScoreType(score, alpha, beta),
      depth,
      hash
    };
  }

  determineScoreType(score, alpha, beta) {
    if (score <= alpha) {
      return 'upperbound';
    } else if (score >= beta) {
      return 'lowerbound';
    } else {
      return 'exact';
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
