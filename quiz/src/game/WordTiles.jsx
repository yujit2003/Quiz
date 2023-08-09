import React from 'react';
import "./home.css";

function WordTiles({ word }) {
    const tiles = word.split('').map((letter, index) => (
        <div key={index} className="word-tile">
            {letter || '_'}
        </div>
    ));

    return <div className="word-tiles">{tiles}</div>;
}

export default WordTiles;
