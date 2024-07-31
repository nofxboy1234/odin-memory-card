import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let name;
  let url;

  fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      name = json.name;
      url = json.sprites.versions['generation-i']['red-blue'].front_default;
    })
    .then(() => {
      console.log(name);
      return (
        <>
          <div>{name}</div>
        </>
      );
    });
}

export default App;
