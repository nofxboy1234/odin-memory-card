import Card from './Card';

export default function CardDisplay({ pokemon }) {
  function shuffleCards() {
    console.log('shuffle cards');
  }

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
