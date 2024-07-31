import { useEffect, useState } from 'react';
import './App.css';
import './styles/card.css';

function App() {
  // const [name, setName] = useState('');
  // const [url, setUrl] = useState('');
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log('Fetch');
    let ignore = false;
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((response) => {
        console.log('Got response');
        return response.json();
      })
      .then((json) => {
        if (!ignore) {
          console.log('Got json - use fetched data');
          setPokemon(json.results);
          // setName(json.name);
          // setUrl(
          //   json.sprites.versions['generation-i']['red-blue'].front_default
          // );
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  console.log('Render');

  return (
    <>
      <div>
        {pokemon.map((monster) => {
          return <div key={monster.name}>{monster.name}</div>;
        })}
      </div>
    </>
  );
}

export default App;
