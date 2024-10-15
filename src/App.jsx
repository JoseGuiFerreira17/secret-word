import "./App.css";

import { useCallback, useEffect, useState } from "react";

import { wordsList } from "./data/words";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedcategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndcategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    const { word, category } = pickWordAndcategory();

    let letters = word.split("");
    letters = letters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedcategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }, [pickWordAndcategory]);

  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
      return;
    }

    if (letters.includes(normalizeLetter)) {
      setGuessedLetters([...guessedLetters, normalizeLetter]);
    } else {
      setWrongLetters([...wrongLetters, normalizeLetter]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterState = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterState();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => (actualScore += 100));
      clearLetterState();
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const retry = () => {
    setGuesses(3);
    setScore(0);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedCategory={pickedCategory}
          pickedWord={pickedWord}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
