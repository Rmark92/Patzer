class KillerMoveList {
  constructor() {
    this.list = [];
    this.maxPerLevel = 2;
  }

  addSlot() {
    this.list.push(new Array(this.maxPerLevel));
  }

  addMove(distFromRoot, move) {
    const siblingKillerMoves = this.list[distFromRoot];
    if (siblingKillerMoves.includes(move.val)) { return; }

    let idx;
    for (idx = siblingKillerMoves.length - 2; idx >= 0; idx--) {
      siblingKillerMoves[idx + 1] = siblingKillerMoves[idx];
    }

    siblingKillerMoves[0] = move.val;
  }

  getSiblingMoves(distFromRoot) {
    return this.list[distFromRoot];
  }
}

module.exports = KillerMoveList;
