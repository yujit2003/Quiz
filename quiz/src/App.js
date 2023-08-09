import React, { useState, useEffect } from 'react';
import Question from './game/Question';
import WordTiles from './game/WordTiles.jsx';
import LetterTiles from './game/LetterTiles';
import Score from './game/Score';
import axios from 'axios';
import './game/home.css';

function Game() {
    const [vocabularyData, setVocabularyData] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [jumbledLetters, setJumbledLetters] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
      async function fetchVocabularyData() {
          try {
              const response = await axios.get('http://localhost:3000/quizzes');
              setVocabularyData(response.data);
          } catch (error) {
              console.error(error);
          }
      }
  
      fetchVocabularyData().then(() => {
          initializeWord();
      });
  }, []);


useEffect(() => {
    initializeWord();
}, [vocabularyData, currentWordIndex]);

    const initializeWord = () => {
        if (vocabularyData.length > 0 && currentWordIndex < vocabularyData.length) {
            const currentWord = vocabularyData[currentWordIndex];
            const shuffledLetters = shuffleArray(currentWord.word.split(''));
            setJumbledLetters(shuffledLetters);
            setUserAnswer('');
        }
    };

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleLetterClick = (letter) => {
      if (jumbledLetters.includes(letter)) {
          setUserAnswer(userAnswer + letter);
          setJumbledLetters((prevJumbledLetters) => prevJumbledLetters.filter((l) => l !== letter));
      }
  };

  const checkAnswer = () => {
    const currentWord = vocabularyData[currentWordIndex];
    if (userAnswer === currentWord.word) {
        setScore(prevScore => prevScore + 10);
        moveToNextWord();
    } else {
        setUserAnswer('');
        setScore(prevScore => prevScore - 1);
        setJumbledLetters(shuffleArray(currentWord.word.split('')));
    }
};

const moveToNextWord = () => {
  console.log('Moving to Next Word...');
  if (currentWordIndex < vocabularyData.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      initializeWord();
  } else {
      console.log('Game Over');
      // Implement game completion logic
  }
};

    return (
      <>
        <div className="game-container">
          <Score score={score} />
            {vocabularyData.length > 0 && currentWordIndex < vocabularyData.length ? (
                <>
                <div className="container">
                    <Question meaning={vocabularyData[currentWordIndex].meaning} />
                    <WordTiles word={userAnswer} />
                    <LetterTiles letters={jumbledLetters} onLetterClick={handleLetterClick} />
                    <button onClick={checkAnswer} className = "one">Check Answer</button>
                    <button onClick={moveToNextWord} className = "two">Next</button>
                </div>
                </>
            ) : (
              <div>Loading vocabulary data...</div>
              )}
        </div>
              </>
    );
}

export default Game;
