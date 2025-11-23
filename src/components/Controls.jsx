import React from "react";

export default function Controls({ keep, setKeep, trashCount, setTrashCount, popNext, restart }) {
  return (
    <div className="controls">
      <div className="keep">
        <h4>
          <img src="/assets/Placement_Box.png" alt="Keep" style={{width:32,verticalAlign:'middle'}} /> Keep
        </h4>
        <div className="keep-box">{keep ? <div className="small">{keep}</div> : <small>Empty</small>}</div>
        <div className="keep-actions">
          <button onClick={() => setKeep(popNext())}>Store Next</button>
          <button onClick={() => setKeep(null)}>Use/Clear</button>
        </div>
      </div>

      <div className="trash">
        <h4>
          <img src="/assets/red.png" alt="Trash" style={{width:32,verticalAlign:'middle'}} /> Trash ({trashCount})
        </h4>
        <button onClick={() => setTrashCount((c) => Math.max(0, c - 1))} disabled={trashCount <= 0}>
          Trash Next
        </button>
      </div>

      <div className="misc">
        <button className="danger" onClick={restart}>Restart</button>
      </div>
    </div>
  );
}