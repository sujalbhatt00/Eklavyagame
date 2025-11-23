import React from "react";

export default function Tile({ value }) {
  return (
    <div
      className={"tile tile-" + value}
      draggable
      onDragStart={(e) => e.dataTransfer.setData("text/plain", String(value))}
    >
      {value}
    </div>
  );
}
