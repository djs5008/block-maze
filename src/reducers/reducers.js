let defaultState = {
  gameState: {
    boardSize: {
      width: 5,
      height: 4,
    },
    start: { x: 3, y: 2 },    // Start of the puzzle
    blanks: [                 // "blank" areas of the puzzle
      {x:4, y:1}, 
      {x:2, y:2} 
    ],
    moves: [                  // Moves the player has made (including start)
      { x: 3, y: 2 }
    ],
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