export const createGrid = () => {
  const rows = 5;
  const columns = 5;
  const newGrid = [];

  for (let i = 0; i < rows; i++) {
    newGrid[i] = [];
    for (let j = 0; j < columns; j++) {
      newGrid[i][j] = "";
    }
  }

  return newGrid;
};
