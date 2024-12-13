import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  
  const playerName = useRef();

  function buttonHandler() {
    setEnteredPlayerName(playerName.current.value);
  }
    return(
        <section id="player">
        <h2>Welcome { enteredPlayerName ?? "unknown entity"}</h2>
        <p>
          <input type="text" ref={playerName} />
          <button onClick={buttonHandler}>Set Name</button>
        </p>
      </section>
    );
}