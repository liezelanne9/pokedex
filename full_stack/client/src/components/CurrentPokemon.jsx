import React from 'react';
import PokemonImage from './CurrentPokemon-Image';
import PokemonInfo from './CurrentPokemon-Info';

const CurrentPokemon = (props) => {
  const { currentPokemon, changeCurrentPokemon, unregisterPokemon } = props;
  let { id, name, type1, type2, imageurl, sprite, stats } = currentPokemon;
  stats = stats.substring(2, stats.length - 1).split(',');
  stats = console.log(stats)

  return (
    <div>
      <div>
        <PokemonImage
          id={id}
          imageurl={imageurl} />
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