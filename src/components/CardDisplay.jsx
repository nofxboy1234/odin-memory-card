import Card from './Card';

export default function CardDisplay({ pokemon }) {
  return (
    <>
      <div className="pokemon-container">
        {pokemon.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    </>
  );
}
