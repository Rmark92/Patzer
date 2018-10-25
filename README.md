# Patzer

Play the live version [here](http://ryan-mark.xyz/Patzer/)

## Implementation Summary:

### Chess Rules

Patzer adheres to most standard chess rules, including promotions, castling, en passant, and draw by threefold repetition.

Todo: Insufficient material draw, Move limit draw

### Board Representation

The board is represented by a set of 8 [bitboards](https://www.chessprogramming.org/Bitboards),
one for each piece type and color. Compared to an array-based representation, bitboards use less memory and typically allow for faster board manipulation and analysis via bitwise operations. Since Javascript doesn't support bitwise operations for 64-bit integers, each [bitboard object](./js/bitboard/bitboard.js) consists of high 32 bits and low 32 bits.

Todo: [Magic Bitboards](https://www.chessprogramming.org/Magic_Bitboards)

### Move Search

The move search implements the [negamax algorithm](https://www.chessprogramming.org/Negamax) with [Alpha-Beta pruning](https://www.chessprogramming.org/Alpha-Beta). In order to mitigate the [horizon effect](https://www.chessprogramming.org/Horizon_Effect), the main search is followed by a [quiescence search](https://www.chessprogramming.org/Quiescence_Search) that exhausts all tactical moves so that only quiet positions are evaluated. A [transposition table](https://www.chessprogramming.org/Transposition_Table) is used to store the results of previously explored positions, which are uniquely identified by a signed 32-bit [zobrist hash](https://www.chessprogramming.org/Zobrist_Hashing). The search is time-limited through an [iterative deepening](https://www.chessprogramming.org/Iterative_Deepening) process that increments the max search depth for each iteration. In addition to the obvious benefits of adjusting the search for UI preferences and complexity of the current position, iterative deepening delivers the large advantage of better [move ordering](https://www.chessprogramming.org/Move_Ordering) for higher and more costly max depths.

Todo: [Killer Heuristic](https://www.chessprogramming.org/Killer_Heuristic), [Aspiration Windows](https://www.chessprogramming.org/Aspiration_Windows)

### Move Evaluation

Leaf node positions are evaluated with a relatively simple heuristic that accounts for material and piece location. The material score is a sum of existing pieces weighted by type, and piece location is scored based on static [piece-square tables](https://www.chessprogramming.org/Simplified_Evaluation_Function#Piece-Square_Tables).

Todo: [Pawn Structure](https://www.chessprogramming.org/Pawn_Structure), [Mobility](https://www.chessprogramming.org/Mobility), different heuristics for each [game phase](https://www.chessprogramming.org/Game_Phases)

### UI

The jQuery-based UI allows the user to make a move by dragging a piece to its destination and renders an animation for AI moves. It also provides options for player color, AI thinking time, unmaking moves, and choosing the AI move on the player's turn.

Todo: mobile compatibility
