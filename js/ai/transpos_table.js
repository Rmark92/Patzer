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
      return 'upperbound';
    } else if (score >= beta) {
      return 'lowerbound';
    } else {
      return 'exact';
    }
  }
}

module.exports = TransposTable;
