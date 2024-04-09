import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="container">
      <div className="header-container"> 
        <header className="title">
          <h1>POKEDEX API</h1>
        </header>
      </div>
      <div className="content"> 
        <div className="left">
          <PokemonList onSelectPokemon={handleSelectPokemon} />
        </div>
        <div className="right">
          {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
        </div>
      </div>
    </div>
  );
}

export default App;
