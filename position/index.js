const { BitBoard, BBMasks, BBfromPieceArray } = require('../bitboards');
const { WhitePawns, BlackPawns,
        Knight, Bishop, Rook,
        King, Queen
      } = require('../pieces');

const WHITE = 'white';
const BLACK = 'black';

class Position {
  constructor(pieces = BBfromPieceArray(), turn = WHITE, prevMoves = []) {
    this.pieces = pieces;
    this.prevMoves = prevMoves;
    this.setTurn(turn);
  }

  setTurn(turn, opp) {
    this.turn = turn;
    this.opp = opp || this.getOppColor();
    this.notOwnPieces = this.getTurnPieces().not();
    this.occupied = this.getTurnPieces().or(this.getOppPieces());
  }

  swapTurn() {
    this.setTurn(this.opp, this.turn);
  }

  getOppColor() {
    return this.turn == WHITE ? BLACK : WHITE;
  }

  getTurnPieces() {
    return this.pieces[this.turn];
  }

  getOppPieces() {
    return this.pieces[this.opp];
  }

  getTurnPieceSet(pieceType) {
    return this.getTurnPieces().and(this.pieces[pieceType]);
  }

  getOppPieceSet(pieceType) {
    return this.getOppPieces().and(this.pieces[pieceType]);
  }

  isAttacked(pos) {
    const oppPawns = this.turn === WHITE ? BlackPawns : WhitePawns;
    const posBB = new BitBoard().setBit(pos);

    return (!oppPawns.attacks(this.getOppPieceSet('pawns'), posBB).isZero() ||
            !Knight.moves(pos, this.getOppPieceSet('knights')).isZero() ||
            !Bishop.moves(pos, this.occupied, this.getOppPieceSet('bishops')).isZero() ||
            !Rook.moves(pos, this.occupied, this.getOppPieceSet('rooks')).isZero() ||
            !Queen.moves(pos, this.occupied, this.getOppPieceSet('queens')).isZero() ||
            !King.moves(pos, this.getOppPieceSet('kings')).isZero());
  }

  kingInCheck() {
    const kingPos = this.getTurnPieceSet('kings').bitScanForward();
    return this.isAttacked(kingPos);
  }

  generateMoves() {
    let pawnMoves;
    const pawnsPos = this.getTurnPieceSet('pawns');

    if (this.turn === WHITE) {
      pawnMoves = WhitePawns.attacks(pawnsPos, this.getOppPieces()).or(WhitePawns.pushes(pawnsPos, this.getOppPieces()));
    } else {
      pawnMoves = BlackPawns.attacks(pawnsPos, this.occupied).or(BlackPawns.pushes(pawnsPos, this.occupied));
    }

    const knightsPos = this.getTurnPieceSet('knights');
    let knightsMoves = new BitBoard();
    knightsPos.forEach1Bit((pos) => {
      knightsMoves = knightsMoves.or(Knight.moves(pos, this.notOwnPieces));
    });

    const bishopsPos = this.getTurnPieceSet('bishops');
    let bishopsMoves = new BitBoard();
    bishopsPos.forEach1Bit((pos) => {
      bishopsMoves = bishopsMoves.or(Bishop.moves(pos, this.occupied, this.notOwnPieces));
    });

    const rooksPos = this.getTurnPieceSet('rooks');
    let rooksMoves = new BitBoard();
    rooksPos.forEach1Bit((pos) => {
      rooksMoves = rooksMoves.or(Rook.moves(pos, this.occupied, this.notOwnPieces));
    });

    const queensPos = this.getTurnPieceSet('queens');
    let queensMoves = new BitBoard();
    queensPos.forEach1Bit((pos) => {
      queensMoves = queensMoves.or(Queen.moves(pos, this.occupied, this.notOwnPieces));
    });

    const kingsPos = this.getTurnPieceSet('kings');
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
console.log(pos.kingInCheck());
// pos.generateMoves();

module.exports = Position;
