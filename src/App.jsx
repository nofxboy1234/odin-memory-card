import { useCallback, useEffect, useState } from 'react';
import CardDisplay from './components/CardDisplay';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const shuffleArray = useCallback((array) => {
    console.log('shuffle cards');

    const newArray = [...array];
    let currentIndex = newArray.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex],
      ];
    }

    return newArray;
  }, []);

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

    console.log('fetching data');
    let ignore = false;
    fetchData().then((monsters) => {
      if (!ignore) {
        const shuffledMonsters = shuffleArray(monsters);
        setPokemon(shuffledMonsters);
      }
    });

    return () => {
      ignore = true;
    };
  }, [shuffleArray]);

  console.log('Render');

  return (
    <>
      <div>
        <ScoreBoard />
        {pokemon.length > 0 && (
          <CardDisplay
            pokemon={pokemon}
            setPokemon={setPokemon}
            shuffleArray={shuffleArray}
          />
        )}
      </div>
    </>
  );
}

export default App;
