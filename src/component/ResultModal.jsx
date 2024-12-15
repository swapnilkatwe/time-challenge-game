/* eslint-disable react/prop-types */
import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
      return {
        open() {
          dialogRef.current.showModal();
        }
      };
    });

  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>You {result}!</h2>
      <p>
        Your target time was <strong>{targetTime} Seconds.</strong>
      </p>
      <p>
        You stop the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;