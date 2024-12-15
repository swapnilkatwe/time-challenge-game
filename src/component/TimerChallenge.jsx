/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef(); //use UseRef to store value for component behind the scene so that value dont get lost when component reRenders.
  const dialogRef = useRef();
  
  function handleStart() {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      dialogRef.current.open();

    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
    <ResultModal ref={dialogRef} targetTime={targetTime} result="Lost" />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {targetTime > 1 ? "Seconds" : "Second"}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "inactive"}
        </p>
      </div>
    </>
  );
}
