import "./App.css";
import Player from "./component/Player";
import TimerChallenge from "./component/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={2} />
        <TimerChallenge title="Hard" targetTime={5} />
        <TimerChallenge title="Super Mario" targetTime={7} />
      </div>
    </>
  );
}

export default App;
