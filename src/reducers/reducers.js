let defaultState = {
  gameState: {
    start: { x: 3, y: 2 },    // Start of the puzzle
    blanks: [ 
      {x:4, y:1}, 
      {x:2, y:2} 
    ],                        // "blank" areas of the puzzle
    moves: [],                // Moves the player has made
    movesLeft: [],            // Possible moves the player can make currently
  },
};

const reducers = (state = defaultState, action) => {
  let payload = action.payload;
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...state,
        exampleProp1: payload,
      };
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
    default: return state;
  }
};

export default reducers;