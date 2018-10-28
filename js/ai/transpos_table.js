const SCORE_TYPES = {
  EXACT: 'exact',
  UPPERBOUND: 'upperbound',
  LOWERBOUND: 'lowerbound'
};

class TransposTable {
  constructor() {
    this.table = {};
  }

  getEntry(key) {
    return this.table[key] || null;
  }

  storeEntry(score, bestMove, alpha, beta, depth, key) {
    this.table[key] = {
      score,
      bestMove,
      type: this.determineScoreType(score, alpha, beta),
      depth,
      key
    };
  }

  determineScoreType(score, alpha, beta) {
    if (score <= alpha) {
      return SCORE_TYPES.UPPERBOUND;
    } else if (score >= beta) {
      return SCORE_TYPES.LOWERBOUND;
    } else {
      return SCORE_TYPES.EXACT;
    }
  }
}

module.exports = { TransposTable, TABLE_SCORE_TYPES: SCORE_TYPES };
