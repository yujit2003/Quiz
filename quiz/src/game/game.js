// Game.js
import React, { useState, useEffect } from 'react';
import Question from '../Question';
import LetterTiles from './LetterTiles';
import Score from '../Score';
import axios from 'axios'; // Import Axios
import { shuffleArray } from '../utils.js'; // Import a utility function to shuffle the letters

function Game() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userProgress, setUserProgress] = useState([]);
    const [score, setScore] = useState(0);
    const [vocabularyData, setVocabularyData] = useState([]); // State to hold fetched vocabulary data

    useEffect(() => {
        async function fetchVocabularyData() {
            try {
                const response = await axios.get('http://localhost:3000/quizzes');
                setVocabularyData(response.data);
            } catch (error) {
                console.error('Error fetching vocabulary data:', error);
            }
        }
        fetchVocabularyData();
    }, []);

    // Rest of the game logic and components
}

export default Game;
