import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    console.log('Fetch');
    let ignore = false;
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => {
        console.log('Got response');
        return response.json();
      })
      .then((json) => {
        if (!ignore) {
          console.log('Got json - use fetched data');
          setName(json.name);
          setUrl(
            json.sprites.versions['generation-i']['red-blue'].front_default
          );
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
        <img src={url} alt="" />
      </div>
      <div>{name}</div>
    </>
  );
}

export default App;
