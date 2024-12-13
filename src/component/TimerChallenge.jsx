/* eslint-disable react/prop-types */

import { useState, useRef } from "react"

export default function TimerChallenge({title, targetTime}) {
    
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef(); // Use ref to store value for component behind the scene so that value dont get lost when component reRenders.

    function handleStart() {
        setTimerStarted(true);

      timer.current = setTimeout(() => {
            setTimerExpired(true);    
        }, targetTime * 1000);
        
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    return(
        <div className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
            {targetTime} {targetTime > 1 ? "Seconds" : "Second"}
            </p>
            <p>{timerExpired && "You Lost!"}</p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Time is running..." : "inactive"}
            </p>
        </div>
    );
}