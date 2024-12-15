/* eslint-disable react/prop-types */
import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, timeRemaining, onReset}, ref) {
  
  const dialogRef = useRef();
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - (timeRemaining /(targetTime * 1000))) * 100 );
  useImperativeHandle(ref, () => {
      return {
        open() {
          dialogRef.current.showModal();
        }
      };
    });

  return (
    <dialog ref={dialogRef} className="result-modal">
      {timeRemaining <= 0 && <h2>You Lost!</h2>}
      {timeRemaining > 0 && <h2>Your Score: {score}</h2>}
      <p>
        Your target time was <strong>{targetTime} Seconds.</strong>
      </p>
      <p>
        You stop the timer with <strong>{formattedTimeRemaining} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;