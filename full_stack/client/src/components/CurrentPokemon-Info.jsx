import React from 'react';
import PrevNext from './PrevNext';
import StatsTable from './StatsTable';
import typeColors from '../pokemonTypes';

const PokemonInfo = (props) => {
  const { id, name, type1, type2, imageurl, sprite, stats, changeCurrentPokemon, unregisterPokemon, lastIndex } = props;
  let type1Class = typeColors[type1];
  let type2Class = type2.length > 1 ? typeColors[type2] : "";

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={sprite} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="subtitle is-6">No. {id}</p>
            <p className="title is-4">{name}</p>
          </div>
          <div className="columns">
            <div className="column">
              <span className={type1Class}>{type1}</span>
            </div>
            <div className="column">
              <span className={type2Class}>{type2}</span>
            </div>
          </div>
        </div>
        <StatsTable stats={stats} />
        <footer className="card-footer">
          <a className="card-footer-item button is-primary" onClick={(e) => unregisterPokemon(e, props.id)}>
            Un-Register Pokémon
          </a>
        </footer>
        <div className="card-footer-item">
          <PrevNext changeCurrentPokemon={changeCurrentPokemon} lastIndex={lastIndex}/>
        </div>
      </div>
    </div>

  )
}

export default PokemonInfo;
