# Patzer

Play the live version [here](http://ryan-mark.xyz/Patzer/)

### Features:

**Chess Rules**

Patzer adheres to most standard chess rules, including promotions, castling, en passant, and draw by threefold repetition

**Board Representation**

The board is represented via sets of [bitboards](https://www.chessprogramming.org/Bitboards) ,
with a bitboard for each piece type and color. This allows for faster move generation and position evaluation. For example, all possible pawn destinations can be computed with just one bitwise operation. Since Javascript doesn't support bitwise operations for 64-bit integers, each [bitboard object](https://github.com/Rmark92/Patzer/blob/master/js/bitboard/bitboard.js) consists of high 32 bits and low 32 bits.

**Move Search**

The move search implements the [negamax algorithm](https://www.chessprogramming.org/Negamax) with [Alpha-Beta pruning](https://www.chessprogramming.org/Alpha-Beta), caching explored positions in a [transposition table](https://www.chessprogramming.org/Transposition_Table). In order to avoid the [horizon effect](https://www.chessprogramming.org/Horizon_Effect), the main search is followed by a [quiescence search](https://www.chessprogramming.org/Quiescence_Search) that exhausts all tactical moves so that only quiet positions are evaluated. The search is time-limited through an [iterative deepening](https://www.chessprogramming.org/Iterative_Deepening) process, which increments the max search depth for each iteration. Not only does iterative deepening make the search more dynamic, it also delivers the large added advantage of better move ordering at lower, more costly depth levels.

**Move Evaluation**

Positions are evaluated with a relatively simple scoring mechanism. It takes into account material and position, which is scored based on static [piece-square tables](https://www.chessprogramming.org/Simplified_Evaluation_Function#Piece-Square_Tables) .

**UI**

The UI provides options for player color, AI thinking time, unmaking moves, and choosing the AI move on the player's turn.
