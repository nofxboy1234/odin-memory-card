import Card from './Card';

export default function CardDisplay({ pokemon, shuffleCards }) {
  return (
    <>
      <div className="card-display">
        {pokemon.map((monster) => {
          return (
            <Card key={monster.id} monster={monster} onClick={shuffleCards} />
          );
        })}
      </div>
    </>
  );
}
