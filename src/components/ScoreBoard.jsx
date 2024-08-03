import { useState } from 'react';
import '../styles/scoreboard.css';

export default function ScoreBoard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
