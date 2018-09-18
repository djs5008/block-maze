export const exampleAction = (sampleData) => ({
  type: 'EXAMPLE',
  payload: sampleData,
});

export const makeMove = (moveLocation) => ({
  type: 'MOVE',
  payload: moveLocation,
});