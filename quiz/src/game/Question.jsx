import React from 'react';
import './home.css'

function Question({ meaning }) {
    return (
        <div className="question">
            <h1>
            What word closely relates to "{meaning}"?
            </h1>
        </div>
    );
}

export default Question;
