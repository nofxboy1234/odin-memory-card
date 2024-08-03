import { useState } from 'react';
import '../styles/scoreboard.css';

export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    <>
      <div id="score-board">
        <div>
          <h3>Current Score: {currentScore}</h3>
        </div>
        <div>
          <h3>Best Score: {bestScore}</h3>
        </div>
      </div>
    </>
  );
}
