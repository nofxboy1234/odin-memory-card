import { useCallback, useEffect, useState } from 'react';
import CardDisplay from './components/CardDisplay';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArray = useCallback((array) => {
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
      const monsterUrls = json.results.map((pokemon) => pokemon.url);

      const monsterPromises = monsterUrls.map((url) => fetch(url));
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
        const shuffledMonsters = shuffleArray(monsters);
        setPokemon(shuffledMonsters);
      }
    });

    return () => {
      ignore = true;
    };
  }, [shuffleArray]);

  return (
    <>
      <div>
        <ScoreBoard
          currentScore={currentScore}
          bestScore={bestScore}
          maxScore={pokemon.length}
        />
        <div id="instructions">
          <h3>
            How to play: Try catch all pokemon by clicking on them. It's game
            over if you catch the same pokemon twice!
          </h3>
        </div>
        {pokemon.length > 0 && (
          <CardDisplay
            pokemon={pokemon}
            setPokemon={setPokemon}
            shuffleArray={shuffleArray}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
            maxScore={pokemon.length}
          />
        )}
      </div>
    </>
  );
}

export default App;
