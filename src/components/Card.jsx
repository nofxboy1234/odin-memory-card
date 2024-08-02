import { useState } from 'react';
import '../styles/card.css';

export default function Card({ monster, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
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
