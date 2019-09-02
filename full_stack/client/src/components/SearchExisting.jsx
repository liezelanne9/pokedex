import React from 'react';
import SearchPokemon from './SearchPokemon';
import SearchList from './SearchExisting-List';

const RegisterExisting = (props) => {
  const { fetchPokemonList } = props;
    return (
      <div>
        <div className="box">
          <div className="columns">
            <div className="column has-text-centered">
              <h2>Register Existing:</h2>
            </div>
            <div className="column">
              <SearchPokemon fetchPokemonList={fetchPokemonList}/>
            </div>
          </div>
        </div>
        <div className="box">
          <SearchList />
        </div>
      </div>
    )
}

export default RegisterExisting;