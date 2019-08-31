import React from 'react';

const PokemonInfo = () => {
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
            <p className="subtitle is-6">No. 25</p>
            <p className="title is-4">Pikachu</p>
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
          <a href="#" className="card-footer-item">Un-Register</a>
        </footer>
      </div>
    </div>

  )
}

export default PokemonInfo;
