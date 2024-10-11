import React, { useState } from 'react';
//pokelist
import pokemonData from '../data/Pokemon-data.json';

function Pokedex() {
  const [filterType, setFilterType] = useState('All');

  // Filtrer Pokémon par type
  const filteredPokemons = filterType === 'All'
    ? pokemonData
    : pokemonData.filter(pokemon => pokemon.types.includes(filterType.toLowerCase()));

  return (
    <div className="pokedex-container">
      <h1>Pokédex</h1>
      {/* Bouttons filtre */}
       <div className="filter-buttons">

       <button onClick={() => setFilterType('All')}>All</button>
        <button onClick={() => setFilterType('grass')}>Grass</button>
        <button onClick={() => setFilterType('fire')}>Fire</button>
        <button onClick={() => setFilterType('water')}>water</button>
        <button onClick={() => setFilterType('poison')}>Poison</button>
        <button onClick={() => setFilterType('fighting')}>Fighting</button>
        <button onClick={() => setFilterType('steel')}>Steel</button>
        <button onClick={() => setFilterType('flying')}>Flying</button>
        <button onClick={() => setFilterType('normal')}>normal</button>
        <button onClick={() => setFilterType('bug')}>Bug</button>
        <button onClick={() => setFilterType('fairy')}>Fairy</button>
        <button onClick={() => setFilterType('electric')}>electric</button>
        <button onClick={() => setFilterType('ghost')}>Ghost</button>
        <button onClick={() => setFilterType('dragon')}>Dragon</button>
        <button onClick={() => setFilterType('dark')}>Dark</button>
        <button onClick={() => setFilterType('ice')}>Ice</button>
        <button onClick={() => setFilterType('psychic')}>Psychic</button>
        <button onClick={() => setFilterType('ground')}>Ground</button>
        <button onClick={() => setFilterType('rock')}>Rock</button>   
      </div>
      {/* montrer list Pokémon  */}
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <h2>{pokemon.name}</h2>
            {/* montrer */}
            {pokemon.image && <img src={pokemon.image} alt={pokemon.name} />}
            <div className="type-container">
              {pokemon.types.map((type, typeIndex) => (
                <span key={typeIndex} className="type">{type}</span>
              ))}
            </div>
            <p>{pokemon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
