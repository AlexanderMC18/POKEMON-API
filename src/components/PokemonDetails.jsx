import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <h2>Pokémon Details</h2>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <p>ID: {pokemon.id}</p> 
          <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p> 
          {pokemon.sprites && pokemon.sprites.other && pokemon.sprites.other['official-artwork'] && (
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} /> 
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
