class AI {
  constructor() {

  }

  reset() {

  }

  makeMove(position, moves) {
    const chosen = moves[Math.floor(moves.length * Math.random())];
    position.makeMove(chosen);
  }
}

module.exports = AI;
