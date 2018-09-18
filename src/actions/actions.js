export const makeMove = (moveLocation) => ({
  type: 'MOVE',
  payload: moveLocation,
});

export const resetMoves = (moves) => ({
  type: 'RESETMOVES',
  payload: moves,
});