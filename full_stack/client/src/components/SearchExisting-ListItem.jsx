import React from 'react';

const ListItem = (props) => {
  const placeholder = {
    "id": '25',
    "name": "Please wait...",
    "type1": "???",
    "type2": "",
    "imageurl": "https://cdn140.picsart.com/259325004017202.gif",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "stats": ""
  };
  let { pokemon } = props;
  pokemon = pokemon ? pokemon : placeholder;
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={pokemon.sprite} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="is-size-7">No. {pokemon.id}</p>
          <p className="is-size-5">{pokemon.name}</p>
        </div>
      </div>
      <span className="icon is-large has-text-danger">
      <i className="fas fa-plus-circle"></i>
      </span>
    </article>
  )
}

export default ListItem;