export const randomTile = () => {
  const pool = [2, 3, 4, 5, 6, 8, 9];
  return pool[Math.floor(Math.random() * pool.length)];
};

export const initQueue = () => [randomTile(), randomTile(), randomTile()];
