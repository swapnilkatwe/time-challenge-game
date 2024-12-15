/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
  const timerIsActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  const timer = useRef(); //use UseRef to store value for component behind the scene so that value dont get lost when component reRenders.
  const dialogRef = useRef();

  if (timerRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaining((previousTime) => previousTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  function resetTimer() {
    setTimerRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        timeRemaining={timerRemaining}
        onReset={resetTimer}
      />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {targetTime > 1 ? "Seconds" : "Second"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "inactive"}
        </p>
      </div>
    </>
  );
}
