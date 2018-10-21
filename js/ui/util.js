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

function formatMove(move, color) {
  return `${PieceConv.pieceToLetter(move.getPiece(), color)}:` +
         `${fileRankFromPos(move.getFrom())}->` +
         `${fileRankFromPos(move.getTo())}`;
}

function parseMoveStats(moveStats) {
  return Object.keys(moveStats)
               .map((key) => `${key}: ${moveStats[key]}`)
               .join("<br/>");
}

function formatTime(millisecs) {
  let timeStr = (millisecs / 1000).toString();
  if (timeStr.indexOf('.') == -1) timeStr += '.';

  while (timeStr.length < timeStr.indexOf('.') + 3) {
    timeStr += '0';
  }

  while (timeStr.length > timeStr.indexOf('.') + 3) {
    timeStr = timeStr.slice(0, timeStr.length - 1);
  }

  return timeStr;
}

module.exports = {
  posFromFileRank,
  fileRankFromPos,
  isDarkSquare,
  formatMove,
  parseMoveStats,
  formatTime
};
