export function mergeAtCell(grid, r, c) {
  const value = grid[r][c];
  let deltaScore = 0;
  let merged = false;

  // Directions: up, down, left, right
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  directions.forEach(([dr, dc]) => {
    const nr = r + dr;
    const nc = c + dc;
    if (
      nr >= 0 && nr < grid.length &&
      nc >= 0 && nc < grid[0].length &&
      grid[nr][nc] === value && value !== null
    ) {
      grid[r][c] = value * 2;
      grid[nr][nc] = null;
      deltaScore += value * 2;
      merged = true;
    }
  });

  return {
    newGrid: grid,
    deltaScore: merged ? deltaScore : 0
  };
}