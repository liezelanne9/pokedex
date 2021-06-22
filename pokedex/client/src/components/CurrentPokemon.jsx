import React from 'react';
import PropTypes from 'prop-types';
import PokemonImage from './CurrentPokemon-Image';
import PokemonInfo from './CurrentPokemon-Info';

const CurrentPokemon = (props) => {
  const { currentPokemon, changeCurrentPokemon, unregisterPokemon, lastIndex } = props;
  const { id, name, type1, type2, imageurl, sprite, stats } = currentPokemon;
  
  return (
    <div>
      <div>
        <PokemonImage
          id={id}
          imageurl={imageurl} 
          changeCurrentPokemon={changeCurrentPokemon}/>
      </div>
      <div>
        <PokemonInfo
          id={id}
          name={name}
          type1={type1}
          type2={type2}
          sprite={sprite}
          stats={stats}
          changeCurrentPokemon={changeCurrentPokemon}
          unregisterPokemon={unregisterPokemon}
          lastIndex={lastIndex}
        />
      </div>
    </div>
  )
}

export default CurrentPokemon;