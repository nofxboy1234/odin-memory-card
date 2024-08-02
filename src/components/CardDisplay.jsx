import Card from './Card';

export default function CardDisplay({ pokemon, setPokemon, shuffleCards }) {
  function callShuffleCards() {
    const shuffledPokemon = shuffleCards(pokemon);
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
              onClick={callShuffleCards}
            />
          );
        })}
      </div>
    </>
  );
}
