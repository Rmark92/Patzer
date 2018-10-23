const ColsFiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const FilesCols = function() {
  return ColsFiles.reduce((res, file, col) => {
    res[file] = col;
    return res;
  }, {});
}();

const RowsRanks = ['1', '2', '3', '4', '5', '6', '7', '8'];

const RanksRows = function() {
  return RowsRanks.reduce((res, rank, row) => {
    res[rank] = row;
    return res;
  }, {});
}();

const GameStatus = {
  ThreeFoldRep: 'Draw - Threefold Repetition',
  // MoveLimitExc: 'Draw - Move Limit Exceeded (100)',
  Checkmate: 'Checkmate',
  Stalemate: 'Stalemate',
  PlayerTurn: 'Player Turn',
  AITurn: 'AI Turn'
};

const Selectors = {
  BOARD_ID: "#board",
  PIECE_CLASS: 'piece',
  SQUARE_CLASS: 'square',
  RANK_CLASS: 'rank',
  FILE_CLASS: 'file'
};

module.exports = { ColsFiles, FilesCols, RowsRanks, RanksRows, Selectors, GameStatus };
