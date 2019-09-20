import React, { Component } from 'react';

class PokemonImage extends Component {
  render() {
    const { id, imageurl, changeCurrentPokemon } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-fullwidth">
            <img src={imageurl}
              alt="Placeholder image"
              style={{ width: 275, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </figure>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            <i className="fas fa-camera"></i>
          </a>
          <a href="#" className="card-footer-item" onClick={() => changeCurrentPokemon(1)}>
            <i className="fas fa-caret-right"></i>
          </a>
        </footer>
      </div>
    )
  }
}

export default PokemonImage;