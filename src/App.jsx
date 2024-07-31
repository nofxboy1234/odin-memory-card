import { useEffect, useState } from 'react';
import './styles/card.css';
import CardDisplay from './components/CardDisplay';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=12'
      );
      const json = await response.json();
      const pokemonUrls = json.results.map((pokemon) => pokemon.url);

      const monsterPromises = pokemonUrls.map((url) => fetch(url));
      const monsterResponses = await Promise.all(monsterPromises);
      const monsterJsons = monsterResponses.map((monsterResponse) =>
        monsterResponse.json()
      );
      const monsters = await Promise.all(monsterJsons);

      return monsters;
    }

    let ignore = false;
    fetchData().then((monsters) => {
      if (!ignore) {
        setPokemon(monsters);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  console.log('Render');

  return (
    <>
      <CardDisplay />
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

export default App;
