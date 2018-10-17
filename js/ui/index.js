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

  makePlayerMove(fromPos, toPos) {
    const selectedMove = this.currMoves.filter((move) => {
      return move.getFrom() === fromPos &&
             move.getTo() === toPos;
    })[0];
    if (selectedMove) {
      this.position.makeMove(selectedMove);
      this.playNextTurn();
    } else {
      this.updatePieces();
      this.setupPlayerMove();
    }
  }

  setupPlayerMove() {
    const moves = this.position.generateLegalMoves();
    const movesData = moves.map((move) => move.getData());
    const moveFromTos = {};

    movesData.forEach((moveData) => {
      moveFromTos[moveData.from] = moveFromTos[moveData.from] || [];
      moveFromTos[moveData.from].push(moveData.to);
    });

    let fromFileRank;
    let toFileRank;
    let droppedPieceSource;
    let selectedMoves;

    Object.keys(moveFromTos).forEach((fromPos) => {
      fromFileRank = Util.fileRankFromPos(fromPos);
      $(`#${fromFileRank} .piece`).draggable({
        containment: $('#board')
      });

      $(`#${fromFileRank} .piece`).mouseenter(() => {
        moveFromTos[fromPos].forEach( (toPos) => {
          $(`#${Util.fileRankFromPos(toPos)}`).addClass('can-move-to');
        });
      });

      $(`#${fromFileRank} .piece`).mouseleave(() => {
        moveFromTos[fromPos].forEach( (toPos) => {
          $(`#${Util.fileRankFromPos(toPos)}`).removeClass('can-move-to');
        });
      });
    });

    $('.square').droppable({
      drop: (event, ui) => {
        droppedPieceSource = $(ui.draggable).parent().attr('id');
        this.makePlayerMove(Util.posFromFileRank(droppedPieceSource), Util.posFromFileRank($(event.target).attr('id')));
      }
    });
  }
}

module.exports = UI;
