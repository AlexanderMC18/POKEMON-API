import React, { useState, useEffect } from 'react';
import './PokemonList.css';
import Cards from './Cards';

const PokemonList = ({ onSelectPokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
      });
  }, []);

  const getPokemonDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const handleSelectPokemon = async (pokemon) => {
    const details = await getPokemonDetails(pokemon.url);
    onSelectPokemon(details);
  };

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <div key={index} className="pokemon-card" onClick={() => handleSelectPokemon(pokemon)}>
          <Cards pokemon = {pokemon} index = {index}/>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
