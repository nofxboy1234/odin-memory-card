import { useEffect, useState } from 'react';
import './App.css';
import './styles/card.css';

function App() {
  // const [name, setName] = useState('');
  // const [url, setUrl] = useState('');
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

      // const response = await fetch(pokemon.url);
      // const json = await response.json();
      // return json;
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
      {pokemon.map((monster) => {
        return (
          <div key={monster.name}>
            <div>
              <img
                src={
                  monster.sprites.versions['generation-i']['red-blue']
                    .front_default
                }
                alt=""
              />
            </div>
            <div>{monster.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
