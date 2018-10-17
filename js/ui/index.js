const Position = require('../position');
const AI = require('../ai');
const { PTypes, Colors, PieceTypeHTML } = require('../pieces');
const Util = require('./util.js');
const { ColsFiles, FilesCols,
        RowsRanks, RanksRows,
        Selectors } = require('./constants.js');

class UI {
  constructor() {
    this.position = new Position();
    this.playerColor = Colors.WHITE;
    this.ai = new AI();
    this.currMoves = this.position.generateLegalMoves();
  }

  run() {
    this.drawBoard();
    this.playNextTurn();
  }

  playNextTurn() {
    this.updatePieces();
    this.currMoves = this.position.generateLegalMoves();
    if (this.currMoves.length === 0) {
      return;
    }

    if (this.position.turn === this.playerColor) {
      this.setupPlayerMove();
    } else {
      setTimeout(() => this.aiMove(), 0);
    }

  }

  reset() {

  }

  generateFileHeader() {
    const newRow = $('<tr></tr>');
    newRow.append(`<th>`);
    ColsFiles.forEach((file) => {
      newRow.append(`<th class="file">${file}</th>`);
    });
    newRow.append(`<th>`);

    return newRow;
  }

  generateSquare(file, rank) {
    const fileRank = file + rank;

    const newSquare = $(`<td id="${fileRank}"></td>`);

    const squareColor = Util.isDarkSquare(fileRank) ? 'dark' : 'light';
    newSquare.addClass(squareColor + " square");

    return newSquare;
  }

  drawBoard() {
    const board = $('#board');

    let newRankRow;
    RowsRanks.forEach((rank) => {
      newRankRow = $('<tr>');
      newRankRow.append(`<th class="rank">${rank}</th>`);
      ColsFiles.forEach((file) => {
        newRankRow.append(this.generateSquare(file, rank));
      });
      newRankRow.append(`<th class="rank">${rank}</th>`);
      board.prepend(newRankRow);
    });

    board.prepend(this.generateFileHeader());
    board.append(this.generateFileHeader());
  }

  updatePieces() {
    $('.piece').remove();
    $('.square').removeClass('ui-droppable ui-draggable can-move-to');
    const pieceTypes = Object.values(PTypes);
    const pieces = this.position.pieces;
    let fileRank;
    let newPiece;

    pieceTypes.forEach((pieceType) => {
      pieces[pieceType].dup().pop1Bits((pos) => {
        newPiece = $(`<div class="piece">${PieceTypeHTML[pieceType]}<div>`);
        if (pieces[Colors.WHITE].hasSetBit(pos)) {
          newPiece.addClass('white');
        } else {
          newPiece.addClass('black');
        }
        fileRank = Util.fileRankFromPos(pos);
        $(`#${fileRank}`).append(newPiece);
      });
    });
  }

  aiMove() {
    this.ai.makeMove(this.position, this.currMoves);
    this.playNextTurn();
  }

  setupPlayerMove() {
    const movesData = this.currMoves.map((move) => move.getData());
    const moveFromTos = {};
    const moveToFroms = {};

    movesData.forEach((moveData) => {
      moveFromTos[moveData.from] = moveFromTos[moveData.from] || [];
      moveFromTos[moveData.from].push(moveData.to);

      moveToFroms[moveData.to] = moveToFroms[moveData.to] || [];
      moveToFroms[moveData.to].push(moveData.from);
    });

    this.activateDraggablePieces(moveFromTos);
    this.activateDroppableSquares(moveToFroms);
  }

  activateDraggablePieces(moveFromTos) {
    let fromFileRank;
    let pieceEl;

    Object.keys(moveFromTos).forEach((fromPos) => {
      fromFileRank = Util.fileRankFromPos(fromPos);
      pieceEl = $(`#${fromFileRank} .piece`);
      pieceEl.draggable({
        containment: $('#board'),
        revert: 'invalid',
        revertDuration: 300
      });

      pieceEl.mouseenter(() => {
        moveFromTos[fromPos].forEach((toPos) => {
          $(`#${Util.fileRankFromPos(toPos)}`).addClass('can-move-to');
        });
      });

      pieceEl.mouseleave(() => {
        $('.square').removeClass('can-move-to');
      });
    });
  }

  activateDroppableSquares(moveToFroms) {
    let destSq;
    let originSquare;
    let originPos;
    let selectedMove;

    Object.keys(moveToFroms).forEach((toPos) => {
      destSq = $(`#${Util.fileRankFromPos(toPos)}`);
      destSq.droppable({
        accept: (draggable) => {
          originSquare = $(draggable).parent().attr('id');
          if (!originSquare) { return false; }
          originPos = Util.posFromFileRank(originSquare);
          return moveToFroms[toPos].includes(originPos);
        },
        drop: (event, ui) => {
          originSquare = $(ui.draggable).parent().attr('id');
          originPos = Util.posFromFileRank(originSquare);
          selectedMove = this.currMoves.filter((move) => {
            return move.getFrom() === originPos &&
                   move.getTo() === parseInt(toPos);
          })[0];
          this.position.makeMove(selectedMove);
          this.playNextTurn();
        }
      });
    });
  }
}

module.exports = UI;
