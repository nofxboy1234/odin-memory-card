export default function CardDisplay({ pokemon }) {
  return (
    <>
      <div className="pokemon-container">
        {pokemon.map((monster) => {
          return (
            <div key={monster.id} className="card">
              <div>
                <img
                  src={
                    monster.sprites.versions['generation-i']['red-blue']
                      .front_default
                  }
                  alt={monster.name}
                />
              </div>
              <div>{monster.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
