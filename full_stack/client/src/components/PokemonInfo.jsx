import React from 'react';
import typeColors from '../pokemonTypes';

const PokemonInfo = (props) => {
  const { id, name, type1, type2, unregisterPokemon } = props;
  const type1Class = typeColors[type1];
  const type2Class = type2.length > 1 ? typeColors[type2] : "";
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Placeholder image" />
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
        <div className="content">
          <table className="table">
            <thead>
              <tr>
                <th>Stats</th>
                <th className="is-italic">Base</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Attack</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Defense</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Sp. Attack</th>
                <td>10</td>
              </tr>
              <tr>
                <th>Sp. Defense</th>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item" onClick={(e, id) => unregisterPokemon(e, props.id)}>
            Un-Register
          </a>
        </footer>
      </div>
    </div>

  )
}

export default PokemonInfo;
