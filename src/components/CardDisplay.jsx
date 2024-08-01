import Card from './Card';

export default function CardDisplay({ pokemon, setPokemon }) {
  function shuffleCards() {
    console.log('shuffle cards');

    const array = [...pokemon];
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setPokemon(array);
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
