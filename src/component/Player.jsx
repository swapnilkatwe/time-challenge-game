import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function inputEventHandler(value) {
      setEnteredPlayerName(value);
  }

  function buttonHandler() {
    setIsSubmitted(true)
  }
    return(
        <section id="player">
        <h2>Welcome {isSubmitted ? enteredPlayerName : "unknown entity"}</h2>
        <p>
          <input type="text" onChange={(event)=> inputEventHandler(event.target.value)} value={enteredPlayerName}/>
          <button onClick={buttonHandler}>Set Name</button>
        </p>
      </section>
    );
}