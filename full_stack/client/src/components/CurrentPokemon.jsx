import React from 'react';
import ImageDisplay from './ImageDisplay';
import PokemonInfo from './PokemonInfo';

const CurrentPokemon = (props) => {
  const { currentPokemon, changeCurrentPokemon, unregisterPokemon } = props;
  const { id, name, type1, type2, imageurl } = currentPokemon;

  return (
    <div>
      <div>
        <ImageDisplay id={id} imageurl={imageurl} />
      </div>
      <div>
        <PokemonInfo 
        id={id} name={name} type1={type1} type2={type2} 
        changeCurrentPokemon={changeCurrentPokemon}
        unregisterPokemon={unregisterPokemon}
        />
      </div>
    </div>
  )
}

export default CurrentPokemon;