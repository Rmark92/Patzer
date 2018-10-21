const MoveSearch = require('./move_search.js');

class AI {
  constructor() {
    this.thinkingTime = 1000;
    this.prevPerformance = null;
  }

  setThinkingTime(thinkingTime) {
    this.thinkingTime = thinkingTime;
  }

  chooseMove(position, availableMoves) {
    const moveSearch = new MoveSearch(position, availableMoves);
    const bestMove = moveSearch.findBest(this.thinkingTime);
    const perfResults = moveSearch.getPerformance();

    return { move: bestMove, performance: perfResults };
  }
}

module.exports = AI;
