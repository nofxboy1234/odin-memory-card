import { useEffect, useState } from 'react';
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
      <CardDisplay pokemon={pokemon} />
    </>
  );
}

export default App;
