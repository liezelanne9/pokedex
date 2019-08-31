import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay';
import PokemonInfo from './PokemonInfo';

class CurrentPokemon extends Component {
  render() {
    return (
      <div>
        <div>
          <ImageDisplay />
        </div>
        <div>
          <PokemonInfo />
        </div>
      </div>
    )
  }
}

export default CurrentPokemon;