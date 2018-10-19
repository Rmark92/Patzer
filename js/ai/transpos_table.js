class TransposTable {
  constructor() {
    // this.size = 10000;
    this.size = 10000;
    this.table = new Array(this.size);
  }

  getEntry(key) {
    const index = key % this.size;
    if (this.table[index] && this.table[index].key === key) {
      return this.table[index];
    } else {
      return null;
    }
  }
  //
  // storeEntry(score, bestMove, alpha, beta, depth, key) {
  //   const index = key % this.size;
  //   if (this.table[index] && this.table[index].depth > depth) {
  //     return;
  //   } else {
  //     this.table[index] = {
  //       score,
  //       bestMove,
  //       type: this.determineScoreType(score, alpha, beta),
  //       depth,
  //       key
  //     };
  //   }
  // }
  //
  // determineScoreType(score, alpha, beta) {
  //   if (score <= alpha) {
  //     return 'upperbound';
  //   } else if (score >= beta) {
  //     return 'lowerbound';
  //   } else {
  //     return 'exact';
  //   }
  // }
}

class AlphaBetaTTable extends TransposTable {
  storeEntry(score, bestMove, alpha, beta, depth, key) {
    const index = key % this.size;
    if (this.table[index] && this.table[index].depth > depth) {
      return;
    } else {
      this.table[index] = {
        score,
        bestMove,
        type: this.determineScoreType(score, alpha, beta),
        depth,
        key
      };
    }
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

class EvalTTable extends TransposTable {
  storeEntry(score, key) {
    const index = key % this.size;
    this.table[index] = {
      score,
      key
    };
  }
}

module.exports = { TransposTable, AlphaBetaTTable, EvalTTable };
