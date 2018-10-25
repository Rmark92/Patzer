# Patzer

Play the live version [here](http://ryan-mark.xyz/Patzer/)

### Features:

**Chess Rules**

Patzer adheres to most standard chess rules, including promotions, castling, en passant, and draw by threefold repetition.

**Board Representation**

The board is represented by a set of 8 [bitboards](https://www.chessprogramming.org/Bitboards),
one for each piece type and color. Compared to an array-based representation, bitboards use less memory and typically allow for faster board manipulation and analysis via bitwise operations. Since Javascript doesn't support bitwise operations for 64-bit integers, each [bitboard object](https://github.com/Rmark92/Patzer/blob/master/js/bitboard/bitboard.js) consists of high 32 bits and low 32 bits.

**Move Search**

The move search implements the [negamax algorithm](https://www.chessprogramming.org/Negamax) with [Alpha-Beta pruning](https://www.chessprogramming.org/Alpha-Beta). In order to mitigate the [horizon effect](https://www.chessprogramming.org/Horizon_Effect), the main search is followed by a [quiescence search](https://www.chessprogramming.org/Quiescence_Search) that exhausts all tactical moves so that only quiet positions are evaluated. A [transposition table](https://www.chessprogramming.org/Transposition_Table) is used to store the results of previously explored positions, which are uniquely identified by a signed 32-bit [zobrist hash](https://www.chessprogramming.org/Zobrist_Hashing). The search is time-limited through an [iterative deepening](https://www.chessprogramming.org/Iterative_Deepening) process that increments the max search depth for each iteration. In addition to the obvious benefits of adjusting the search for UI preferences and complexity of the current position, iterative deepening delivers the large advantage of better [move ordering](https://www.chessprogramming.org/Move_Ordering) when the max depth is higher and more costly.

**Move Evaluation**

Positions are evaluated with a relatively simple scoring mechanism. It takes into account material and position, which is scored based on static [piece-square tables](https://www.chessprogramming.org/Simplified_Evaluation_Function#Piece-Square_Tables) .

**UI**

The UI provides options for player color, AI thinking time, unmaking moves, and choosing the AI move on the player's turn.
