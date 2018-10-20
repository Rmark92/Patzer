const { PieceConv, Colors } = require('../pieces');
const { ColsFiles, FilesCols,
        RowsRanks, RanksRows } = require('./constants.js');

function posFromFileRank(fileRank) {
  const [file, rank] = fileRank.split('');
  return (RanksRows[rank] * 8) + FilesCols[file];
}

function fileRankFromPos(pos) {
  return ColsFiles[pos % 8] + (RowsRanks[Math.floor(pos / 8)]);
}

// if the row and col are either both even or both odd
function isDarkSquare(fileRank) {
  const [file, rank] = fileRank.split('');
  const row = RanksRows[rank];
  const col = FilesCols[file];
  return (row % 2 === 0 && col % 2 === 0) ||
         (row % 2 === 1 && col % 2 === 1);
}

function formatMoves(moveList) {
  let color;
  return moveList.map((move, idx) => {
    color = (idx % 2 === 0) ? Colors.WHITE : Colors.BLACK;
    return `${PieceConv.pieceToLetter(move.getPiece(), color)} ` +
           `${fileRankFromPos(move.getFrom())} -> ` +
           `${fileRankFromPos(move.getTo())}`;
  });
}

module.exports = {
  posFromFileRank,
  fileRankFromPos,
  isDarkSquare,
  formatMoves
};
