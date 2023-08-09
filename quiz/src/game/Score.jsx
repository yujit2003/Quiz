import React from 'react';
import './score.css';

function Score({ score }) {
    return(<>
     <div className="score"><h2>
    <span>S</span>
    <span>C</span>
    <span>O</span>
    <span>R</span>
    <span>E</span>
    <span>:</span>
    <span>{score}</span>
  </h2></div>;
</>)
}

export default Score;
