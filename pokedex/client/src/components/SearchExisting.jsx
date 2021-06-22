import React from 'react';
import SearchPokemon from './SearchPokemon';
import SearchList from './SearchExisting-List';

const RegisterExisting = (props) => {
  const { pokemonList, fetchPokemonList, changeCurrentPokemon } = props;
  let randomPokemonIds = [];
  if (pokemonList) {
    for (let i = 0; i < 3; i++) {
      randomPokemonIds.push(Math.floor(Math.random() * Math.floor(pokemonList.length)))
    }
  }

  return (
    <div>
      <div className="box">
        <div className="columns">
          <div className="column has-text-centered">
            <h4 className="title is-4">Register Existing:</h4>
          </div>
          <div className="column">
            <SearchPokemon
              // pokemonList={pokemonList}
              // fetchPokemonList={fetchPokemonList}
              changeCurrentPokemon={changeCurrentPokemon} />
          </div>
        </div>
      </div>
      <div className="box">
        <SearchList nearbyPokemon={randomPokemonIds} />
      </div>
    </div>
  )
}

export default RegisterExisting;