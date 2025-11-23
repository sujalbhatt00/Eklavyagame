import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import NextQueue from "./components/NextQueue";
import Controls from "./components/Controls";
import Footer from "./components/Footer";
import { randomTile, initQueue } from "./utils/gameUtils";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => Number(localStorage.getItem("best") || 0));
  const [queue, setQueue] = useState(initQueue());
  const [keep, setKeep] = useState(null);
  const [trashCount, setTrashCount] = useState(10);
  const [boardKey, setBoardKey] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    localStorage.setItem("best", String(best));
  }, [best]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [paused, boardKey]);

  const updateScore = amount => {
    setScore(s => {
      const next = s + amount;
      if (next > best) setBest(next);
      return next;
    });
  };

  const popNextTile = () => {
    const [first, ...rest] = queue;
    setQueue([...rest, randomTile()]);
    return first;
  };

  const restart = () => {
    setScore(0);
    setQueue(initQueue());
    setKeep(null);
    setTrashCount(10);
    setSeconds(0);
    setPaused(false);
    setBoardKey(k => k + 1);
  };

  const timerText = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="page-scale-wrapper">
      <div className="app-bg">
        <header className="topbar-container">
          <div className="left-controls">
            <button className="left-circle-btn" onClick={() => setPaused(p => !p)}>
              <img
                src={paused ? "/assets/play.png" : "/assets/pause.png"}
                className="left-circle-icon"
              />
            </button>
          </div>

          <div className="center-title">
            <h1 className="title-text">JUST DIVIDE</h1>
            <div className="timer-block">
              <img src="/assets/timer.png" className="timer-icon" />
              <span className="timer-text">{timerText}</span>
            </div>
          </div>

          <div className="right-controls">
            <button className="help-btn">
              <img src="/assets/help.png" className="help-icon" />
            </button>
          </div>
        </header>

        <div className="cat-header-bar">
          <div className="cat-header">
            <img src="/assets/Cat.png" className="cat-img" />
            <div className="level-score-on-cat">
              <div className="level-box-on-cat">LEVEL 1</div>
              <div className="score-box-on-cat">SCORE {score}</div>
            </div>
          </div>
        </div>

        <div className="subtitle">
          DIVIDE WITH THE NUMBERS TO SOLVE THE ROWS AND COLUMNS.
        </div>

        <main className="main-layout">
          <div className="left-panel">
            <div className="board-panel">
              <GameBoard
                key={boardKey}
                onScore={updateScore}
                popNext={popNextTile}
                keep={keep}
                setKeep={setKeep}
              />
            </div>
          </div>

          <div className="right-panel">
            <div className="side-panel">
              <div className="next-queue-box">
                <NextQueue queue={queue} />
              </div>

              <div className="controls-column">
                <Controls
                  keep={keep}
                  setKeep={setKeep}
                  trashCount={trashCount}
                  setTrashCount={setTrashCount}
                  popNext={popNextTile}
                  restart={restart}
                />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
