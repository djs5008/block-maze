let defaultState = {
  gameState: {
    boardSize: {},            // Default size of the board
    start: {},                // Start of the puzzle
    blanks: [],               // "blank" areas of the puzzle
    moves: [],                // Moves the player has made (including start)
    movesLeft: [],            // Possible moves the player can make currently
  },
};

const reducers = (state = defaultState, action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        gameState: {
          ...state.gameState,
          moves: [
            ...state.gameState.moves,
            { x: payload.x, y: payload.y },
          ],
        }
      };
    case 'RESETMOVES':
      return {
        ...state,
        gameState: {
          ...state.gameState,
          moves: payload,
        }
      };
    case 'SETGAMESTATE':
      return {
        ...state,
        gameState: payload,
      }
    default: return state;
  }
};

export default reducers;