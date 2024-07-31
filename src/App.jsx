import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const pokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.results);
    });
  return <div>hello</div>;
}

export default App;
