const { BitBoard, BBMasks, BBfromPieceArray } = require('../bitboards');
const { WhitePawns, BlackPawns,
        Knight, Bishop, Rook,
        King, Queen
      } = require('../pieces');

const WHITE = 'white';
const BLACK = 'black';

class Position {
  constructor(pieces, turn) {
    this.pieces = pieces || BBfromPieceArray();
    this.turn = turn || WHITE;
    this.turnPieces = this.turnColorPieces();
    this.oppPieces = this.otherColorPieces();
    this.notOwnPieces = this.turnPieces.not();
    this.occupied = this.turnPieces.or(this.oppPieces);
  }

  colorPieces(color) {
    return color === WHITE ? this.pieces.whitePieces : this.pieces.blackPieces;
  }

  turnColorPieceSet(pieceType) {
    return this.turnPieces.and(this.pieces[pieceType]);
  }

  otherColorPieces() {
    return this.turn === WHITE ? this.pieces.blackPieces : this.pieces.whitePieces;
  }

  turnColorPieces() {
    return this.turn === WHITE ? this.pieces.whitePieces : this.pieces.blackPieces;
  }

  generateMoves() {
    let pawnMoves;
    const pawnsPos = this.turnColorPieceSet('pawns');

    if (this.turn === WHITE) {
      pawnMoves = WhitePawns.attacks(pawnsPos, this.oppPieces).or(WhitePawns.pushes(pawnsPos, this.oppPieces));
    } else {
      pawnMoves = BlackPawns.attacks(pawnsPos, this.occupied).or(BlackPawns.pushes(pawnsPos, this.occupied));
    }

    const knightsPos = this.turnColorPieceSet('knights');
    let knightsMoves = new BitBoard();
    knightsPos.forEach1Bit((pos) => {
      knightsMoves = knightsMoves.or(Knight.moves(pos, this.notOwnPieces));
    });

    const bishopsPos = this.turnColorPieceSet('bishops');
    let bishopsMoves = new BitBoard();
    bishopsPos.forEach1Bit((pos) => {
      bishopsMoves = bishopsMoves.or(Bishop.moves(pos, this.occupied, this.notOwnPieces));
    });

    const rooksPos = this.turnColorPieceSet('rooks');
    let rooksMoves = new BitBoard();
    rooksPos.forEach1Bit((pos) => {
      rooksMoves = rooksMoves.or(Rook.moves(pos, this.occupied, this.notOwnPieces));
    });

    const queensPos = this.turnColorPieceSet('queens');
    let queensMoves = new BitBoard();
    queensPos.forEach1Bit((pos) => {
      queensMoves = queensMoves.or(Queen.moves(pos, this.occupied, this.notOwnPieces));
    });

    const kingsPos = this.turnColorPieceSet('kings');
    let kingsMoves = new BitBoard();
    kingsPos.forEach1Bit((pos) => {
      kingsMoves = kingsMoves.or(King.moves(pos, this.notOwnPieces));
    });

    pawnMoves.render();
    knightsMoves.render();
    bishopsMoves.render();
    rooksMoves.render();
    queensMoves.render();
    kingsMoves.render();
  }


}

let pos = new Position();
pos.generateMoves();

module.exports = Position;
