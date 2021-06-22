import React from 'react';
import { connect } from 'react-redux';
import ListItem from './SearchExisting-ListItem';

const SearchList = (props) => {
  const { pokemonList, nearbyPokemon } = props;
    return (
      <div>
        <h4 className="title is-4">In your area:</h4>
        {pokemonList && nearbyPokemon.map((pokemon, i) => <ListItem key={i} pokemon={pokemonList[pokemon]}/>)}
      </div>

    )
}

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonList,
  }
}

export default connect(mapStateToProps, null)(SearchList);