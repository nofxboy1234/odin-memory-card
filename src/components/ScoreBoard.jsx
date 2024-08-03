import { useState } from 'react';
import '../styles/scoreboard.css';

export default function ScoreBoard({ currentScore, bestScore, maxScore }) {
  return (
    <>
      <div id="score-board">
        <div>
          <h3>
            Current Score: {currentScore} / {maxScore}
          </h3>
        </div>
        <div>
          <h3>
            Best Score: {bestScore} / {maxScore}
          </h3>
        </div>
      </div>
    </>
  );
}
