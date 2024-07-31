import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setName(json.name);
      setUrl(json.sprites.versions['generation-i']['red-blue'].front_default);
    });

  return (
    <>
      <div>{name}</div>
      <div>{url}</div>
    </>
  );
}

export default App;
