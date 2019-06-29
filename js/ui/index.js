const Position = require('../position');
const AI = require('../ai');
const { PTypes, Colors, PieceTypeHTML } = require('../pieces');
const { MoveTypes } = require('../move');
const Util = require('./util.js');
const { ColsFiles, FilesCols,
        RowsRanks, RanksRows,
        Selectors, GameStatus } = require('./constants.js');

class UI {
  constructor() {
    this.ai = new AI();
  }

  run() {
    this.setupButtons();
    this.reset();
  }

  reset() {
    $('#board').empty();
    $('#move-history').empty();
    $('.ai-stats-header').text(`AI Stats`);
    $('.move-stats td').empty();
    this.position = new Position();
    const playerColor = $('input[name="color-option"]:checked').val();
    this.playerColor = parseInt(playerColor);
    const aiThinkingTime = parseFloat($('#ai-time-val').text()) * 1000;
    this.ai.setThinkingTime(aiThinkingTime);
    this.drawBoard();
    this.playNextTurn();
  }

  setupButtons() {
    $('#unmake').click((event) => {
      if ($(event.currentTarget).hasClass('active')) {
        this.unmakePlayerMove();
        this.playNextTurn();
      }
    });

    $('#auto').click((event) => {
      if ($(event.currentTarget).hasClass('active')) {
        this.aiMove();
      }
    });

    $('#ai-time-slider').slider({
      value: this.ai.thinkingTime / 1000,
      min: Math.round(Math.log(.01) * 1000) / 1000,
      max: Math.round(Math.log(30) * 1000) / 1000,
      step: 0.01,
      slide: (event, ui) => {
        const val = Math.round(Math.pow(Math.E, ui.value) * 1000);
        $('#ai-time-val').text(Util.formatTime(val));
      }
    });

    $('#new-game').click((event) => {
      if ($(event.currentTarget).hasClass('active')) {
        this.reset();
      }
    });

    $('#ai-time-val').text(Util.formatTime(this.ai.thinkingTime));
  }

  deactivateBtns() {
    $('.clickable').removeClass('active');
  }

  activateBtns() {
    $('.clickable').addClass('active');
    if (this.position.prevMoves.length === 0) {
      $('#unmake').removeClass('active');
    }
  }

  resetStatus() {
    this.currMoves = this.position.generateLegalMoves();

    if (this.currMoves.length === 0) {
      if (this.position.isThreefoldRepetition()) {
        this.status = GameStatus.ThreeFoldRep;
      } else if (this.position.isMoveLimitExceeded()) {
        this.status = GameStatus.MoveLimitExc;
      } else if (this.position.inCheck(this.position.turn)) {
        this.status = GameStatus.Checkmate;
      } else {
        this.status = GameStatus.Stalemate;
      }
      this.activateBtns();
      $('#auto').removeClass('active');
    } else {
      if (this.position.turn === this.playerColor) {
        this.status = GameStatus.PlayerTurn;
      } else {
        this.status = GameStatus.AITurn;
      }
    }

    const statusEl = $('.status-header');

    statusEl.text(this.status);
  }

  unmakePlayerMove() {
    this.position.unmakePrevMove();
    this.shiftFromMovesList();
    if (this.position.turn !== this.playerColor) {
      this.position.unmakePrevMove();
      this.shiftFromMovesList();
    }
  }

  playNextTurn() {
    this.updatePieces();

    if (this.position.turn === this.playerColor) {
      this.setupPlayerMove();
    } else {
      this.aiMove();
    }
  }

  populateStatsTable(moveStr, moveStats) {
    $('.ai-stats-header').text(`AI Stats (${moveStr})`);
    $('.depth-stat').text(moveStats.depth);
    $('.runtime-stat').text(moveStats.runTime || 'N/A');
    $('.explored-stat').text(moveStats.exploredPositions);
    $('.main-search-stat').text(moveStats.mainSearchNodes);
    $('.qsearch-stat').text(moveStats.qSearchNodes);
    $('.ttable-hit-stat').text(moveStats.tTableHits);
  }

  createMoveItem(moveData) {
    const moveItem = $('<tr class="move-item"></tr>');
    const moveStr = Util.formatMove(moveData.move, moveData.color);

    moveItem.append($(`<td class="move-str">${moveStr}</td>`));

    if (moveData.stats) {
      moveItem.addClass('stats-view-link clickable');
      moveItem.click(() => this.populateStatsTable(moveStr, moveData.stats));
    }

    return moveItem;
  }

  addToMovesList(moveData) {
    const movesHistory = $('#move-history');
    const newMoveItem = this.createMoveItem(moveData);
    movesHistory.prepend(newMoveItem);
  }

  shiftFromMovesList() {
    $(".move-item:first").remove();
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
    const rowsRanks = this.playerColor === Colors.WHITE ? RowsRanks : RowsRanks.slice().reverse();
    rowsRanks.forEach((rank) => {
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
    const pieceTypes = Object.values(PTypes);
    const pieces = this.position.pieces;
    let fileRank;
    let newPiece;

    pieceTypes.forEach((pieceType) => {
      pieces[pieceType].dup().pop1Bits((pos) => {
        newPiece = $(`<div class="piece"><div>`);
        if (pieces[Colors.WHITE].hasSetBit(pos)) {
          newPiece.html(PieceTypeHTML[Colors.WHITE][pieceType]);
        } else {
          newPiece.html(PieceTypeHTML[Colors.BLACK][pieceType]);
        }
        fileRank = Util.fileRankFromPos(pos);
        $(`#${fileRank}`).append(newPiece);
      });
    });
  }

  makeMove(move, stats) {
    this.addToMovesList({ move, color: this.position.turn, stats });
    if (stats) {
      this.populateStatsTable(Util.formatMove(move, this.position.turn), stats);
    }
    this.position.makeMove(move);
    this.playNextTurn();
  }

  isGameOver() {
    return ![GameStatus.AITurn, GameStatus.PlayerTurn].includes(this.status);
  }

  aiMove() {
    this.deactivateBtns();
    this.resetStatus();
    if (this.isGameOver()) { return; }

    $('main').addClass('waiting');
    setTimeout(() => {
      const aiMoveData = this.ai.chooseMove(this.position, this.currMoves);
      this.animateMove(aiMoveData.move, () => {
        $('main').removeClass('waiting');
        this.makeMove(aiMoveData.move, aiMoveData.performance);
      });
    }, 100);
  }

  animateMove(move, cb) {
    const pieceEl = $(`#${Util.fileRankFromPos(move.getFrom())} .piece`);
    const newSquare = $(`#${Util.fileRankFromPos(move.getTo())}`);

    if (move.getCaptPiece()) {
      const captPiece = $(`#${Util.fileRankFromPos(move.getTo())} .piece`);
      const captOffset = captPiece.offset();
      captPiece.css({
        'position': 'absolute',
        'left': captOffset.left,
        'top': captOffset.top
      });
      captPiece.fadeOut(450);
    }

    const oldOffset = pieceEl.offset();
    pieceEl.appendTo(newSquare);
    const newOffset = pieceEl.offset();

    const animPiece = pieceEl.clone().appendTo('body');
    animPiece.css({
      'position': 'absolute',
      'left': oldOffset.left,
      'top': oldOffset.top,
      'z-index': 1000
    });
    pieceEl.hide();

    animPiece.animate({'top': newOffset.top, 'left': newOffset.left}, 450, function(){
      pieceEl.show();
      animPiece.remove();
      cb();
    });
  }

  setupPlayerMove() {
    this.activateBtns();
    this.resetStatus();
    if (this.isGameOver()) { return; }

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
        if (pieceEl.hasClass('ui-draggable')) {
          moveFromTos[fromPos].forEach((toPos) => {
            $(`#${Util.fileRankFromPos(toPos)}`).addClass('can-move-to');
          });
        }
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
          this.makePlayerMove(ui.draggable, parseInt(toPos));
        }
      });
    });
  }

  makePlayerMove(piece, toPos) {
    const originSquare = $(piece).parent();
    piece.remove();

    $('.ui-draggable').draggable('destroy');
    $('.ui-droppable').droppable('destroy');
    $('.square').removeClass('can-move-to');
    this.deactivateBtns();

    const originPos = Util.posFromFileRank($(originSquare).attr('id'));
    const destSq = $(`#${Util.fileRankFromPos(toPos)}`);
    destSq.children().remove();

    const selectedMoves = this.currMoves.filter((move) => {
      return move.getFrom() === originPos &&
             move.getTo() === toPos;
    });

    if (selectedMoves.length > 1) {
      const color = this.playerColor === Colors.WHITE ? 'white' : 'black';
      this.createPromoWindow(destSq, selectedMoves, color);
    } else {
      let selectedMove = selectedMoves[0];
      this.makeMove(selectedMove);
    }
  }

  createPromoWindow(destSq, promoMoves, color) {
    const promoDiv = $("<div class='promo-window'></div>");
    const promoPieces = this.createPromoPieces(promoMoves, color);

    let promoWinRow = $("<div class='promo-window-row'></div>");
    promoWinRow.append(promoPieces.slice(0, 2));
    promoDiv.append(promoWinRow);

    promoWinRow = $("<div class='promo-window-row'></div>");
    promoWinRow.append(promoPieces.slice(2));
    promoDiv.append(promoWinRow);

    destSq.append(promoDiv);
  }

  createPromoPieces(promoMoves, color) {
    const PromosPTypes = {
      [MoveTypes.NPROMO]: PTypes.KNIGHTS,
      [MoveTypes.BPROMO]: PTypes.BISHOPS,
      [MoveTypes.RPROMO]: PTypes.ROOKS,
      [MoveTypes.QPROMO]: PTypes.QUEENS
    };

    const promoPieces = [];
    let newPromoPiece;

    promoMoves.forEach((promoMove) => {
      newPromoPiece = this.createPromoPiece(promoMove, PromosPTypes[promoMove.getType()], color);
      promoPieces.push(newPromoPiece);
    });

    return promoPieces;
  }

  createPromoPiece(move, pType, color) {
    const promoPiece = $(`<div class='promo-piece piece ${color}'">${PieceTypeHTML[pType]}</div>`);
    promoPiece.click(() => {
      $('.promo-window').remove();
      this.makeMove(move);
    });

    return promoPiece;
  }
}

module.exports = UI;
