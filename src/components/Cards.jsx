import React from 'react';

const Cards = ({ pokemon, index }) => {
  return (
    <div>
      {pokemon && ( 
        <React.Fragment> 
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </React.Fragment>
      )}
    </div>
  );
}

export default Cards;
