import { useState } from 'react';
import Card from './Card';

export default function CardDisplay({ pokemon, setPokemon, shuffleArray }) {
  const [cards, setCards] = useState(initializeCards());

  function initializeCards() {
    return pokemon.map((monster) => ({
      id: monster.id,
      isClicked: false,
    }));
  }

  function resetCards() {
    const newCards = initializeCards();
    setCards(newCards);
  }

  function saveCard(updatedCard) {
    const updatedCards = cards.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      } else {
        return card;
      }
    });
    setCards(updatedCards);
  }

  function findCard(monster) {
    return cards.find((card) => card.id === monster.id);
  }

  function shuffleCards() {
    const shuffledPokemon = shuffleArray(pokemon);
    setPokemon(shuffledPokemon);
  }

  return (
    <>
      <div className="card-display">
        {pokemon.map((monster) => {
          return (
            <Card
              key={monster.id}
              monster={monster}
              shuffleCards={shuffleCards}
              resetCards={resetCards}
              saveCard={saveCard}
              isClicked={findCard(monster).isClicked}
            />
          );
        })}
      </div>
    </>
  );
}
