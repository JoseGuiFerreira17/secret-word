/* eslint-disable react/prop-types */
import "./Game.css";

function Game({ verifyLetter }) {
  return (
    <div>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
}

export default Game;
