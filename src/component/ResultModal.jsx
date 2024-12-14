/* eslint-disable react/prop-types */
export default function ResultModal({result, targetTime}) {
  return (
    <dialog className="result-modal" open>
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
}
