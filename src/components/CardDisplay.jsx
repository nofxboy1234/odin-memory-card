import Card from './Card';

export default function CardDisplay({ pokemon, setPokemon, shuffleCards }) {
  return (
    <>
      <div className="card-display">
        {pokemon.map((monster) => {
          return (
            <Card
              key={monster.id}
              monster={monster}
              onClick={() => {
                const shuffledPokemon = shuffleCards(pokemon);
                setPokemon(shuffledPokemon);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
