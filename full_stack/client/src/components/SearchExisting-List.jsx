import React from 'react';
import ListItem from './SearchExisting-ListItem';

const SearchList = (props) => {
  const { pokemonList, nearbyPokemon } = props;
    return (
      <div>
        <h4 className="title is-4">In your area:</h4>
        {nearbyPokemon.map((pokemon, i) => <ListItem key={i} pokemon={pokemonList[pokemon]}/>)}
      </div>

    )
}

export default SearchList;