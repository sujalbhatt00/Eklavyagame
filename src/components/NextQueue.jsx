import React from "react";
import Tile from "./Tile";

export default function NextQueue({ queue }) {
  return (
    <div className="next-queue-box">
      <div className="queue-horizontal">
        {queue.map((val, idx) => (
          <div className="queue-item" key={idx}>
            <Tile value={val} />
          </div>
        ))}
      </div>
    </div>
  );
}