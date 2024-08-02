import { useState } from 'react';
import '../styles/card.css';

export default function Card({ monster, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          if (isClicked) {
            // Update High score if score > high score
            // Set score to 0
            // ~fetch new pokemon
            // shuffle cards
          }

          setIsClicked(true);
          onClick();
        }}
      >
        <div className="card-picture">
          <img
            src={
              monster.sprites.versions['generation-i']['red-blue'].front_default
            }
            alt={monster.name}
          />
        </div>
        <div className="card-title">{monster.name}</div>
      </div>
    </>
  );
}
