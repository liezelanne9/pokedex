import React from 'react';
import PokemonImage from './CurrentPokemon-Image';
import PokemonInfo from './CurrentPokemon-Info';

const CurrentPokemon = (props) => {
  const { currentPokemon, changeCurrentPokemon, unregisterPokemon } = props;
  let { id, name, type1, type2, imageurl, sprite, stats } = currentPokemon;
  stats = stats ? stats : "";
  stats = stats.length > 1? stats.substring(1, stats.length - 1).split(',') : ["[10", "10", "10", "10", "10", "10"];

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
        />
      </div>
    </div>
  )
}

export default CurrentPokemon;