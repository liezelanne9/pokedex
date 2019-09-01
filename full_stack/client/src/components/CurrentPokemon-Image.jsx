import React, { Component } from 'react';

class PokemonImage extends Component {
  render() {
    let { id, imageurl } = this.props;
    imageurl = imageurl.length ? imageurl : "https://cdn.bulbagarden.net/upload/thumb/a/a1/Substitute_artwork.png/200px-Substitute_artwork.png";
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
          <a href="#" className="card-footer-item">
            <i className="fas fa-caret-right"></i>
          </a>
        </footer>
      </div>
    )
  }
}

export default PokemonImage;