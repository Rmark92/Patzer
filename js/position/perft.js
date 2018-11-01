function perft(position, depth) {
  if (depth === 0) { return 1; }

  let nodeCount = 0;
  const moves = position.generatePseudoMoves(true, false);
  let moveIdx;

  for (moveIdx = 0; moveIdx < moves.length; moveIdx++) {
    if (position.makeMove(moves[moveIdx])) {
      nodeCount += perft(position, depth - 1);
      position.unmakePrevMove();
    }
  }

  return nodeCount;
}

module.exports = perft;
