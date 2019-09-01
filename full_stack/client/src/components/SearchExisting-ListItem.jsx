import React from 'react';

const ListItem = () => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="is-size-7">No. 25</p>
          <p className="is-size-5">Pikachu</p>
        </div>
      </div>
      <span className="icon is-large has-text-danger">
      <i className="fas fa-plus-circle"></i>
      </span>
    </article>
  )
}

export default ListItem;