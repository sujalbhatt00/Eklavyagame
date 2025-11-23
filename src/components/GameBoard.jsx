import React, { useState } from "react";
import Tile from "./Tile";
import { mergeAtCell } from "../utils/mergeLogic";

const emptyGrid = () => Array.from({ length: 4 }, () => Array(4).fill(null));

export default function GameBoard({ onScore, popNext, keep, setKeep }) {
  const [grid, setGrid] = useState(emptyGrid);

  const placeAndMerge = (r, c, value) => {
    setGrid((prev) => {
      const next = prev.map((row) => [...row]);
      next[r][c] = value;
      const { newGrid, deltaScore } = mergeAtCell(next, r, c);
      onScore(deltaScore);
      return newGrid;
    });
  };

  const handleDrop = (e, r, c) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const value = Number(data);
    if (!Number.isFinite(value)) return;
    placeAndMerge(r, c, value);
  };

  const autoPlaceNext = () => {
    const val = popNext();
    // place into first empty cell (simple fallback)
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (!grid[i][j]) {
          placeAndMerge(i, j, val);
          return;
        }
      }
    }
  };

  return (
    <div className="board-wrap">
      <div className="grid" role="grid" aria-label="game grid">
        {grid.map((row, r) => (
          <div className="row" key={r}>
            {row.map((cell, c) => (
              <div
                key={c}
                className={"cell" + (cell ? " filled" : "")}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, r, c)}
              >
                {cell ? <Tile value={cell} /> : <div className="placeholder" />}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="board-actions">
        <button className="btn" onClick={autoPlaceNext}>Take Next (auto-place)</button>
        <div className="hint">Drag a tile from Next into any cell. Merge happens on contact.</div>
      </div>
    </div>
  );
}
