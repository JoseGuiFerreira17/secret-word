/* eslint-disable react/prop-types */
import "./Game.css";

function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((l, i) =>
          guessedLetters.includes(l) ? (
            <span key={i} className="letter">
              {l}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar a letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button type="submit" onClick={verifyLetter}>
            Jogar
          </button>
        </form>
        <div className="wrongLetterContainer">
          <p>Letras já utilizadas:</p>
          {wrongLetters.map((l, i) => (
            <span key={i}>{l}, </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
