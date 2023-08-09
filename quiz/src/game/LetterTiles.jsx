// LetterTiles.js
import React from 'react';

function LetterTiles({ letters, onLetterClick }) {
    // Check if 'letters' prop is not provided or not an array
    if (!letters || !Array.isArray(letters)) {
        return <div className="letter-tiles">Invalid letters data</div>;
    }

    const letterButtons = letters.map((letter, index) => (
        <button
            key={index}
            className="letter-tile"
            onClick={() => onLetterClick(letter)}
        >
            {letter}
        </button>
    ));

    return <div className="letter-tiles"><p>Choose from Here : {letterButtons}</p></div>;
}

export default LetterTiles;
