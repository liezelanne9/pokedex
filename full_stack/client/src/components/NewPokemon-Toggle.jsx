import React from 'react'

const ToggleButton = (props) => {
  const { handleClick } = props;
  return (
    <div className="box has-text-centered">
      <br />
      <figure>
        <img src="https://cdn-ds.com/blogs-media/sites/77/2017/01/12184830/brake-system-warning-light-300x300.png"
          style={{ width: 150, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </figure>
      <a className="button is-medium is-fullwidth is-danger" onClick={handleClick}>
        Register a never-before-seen Pokémon!
      </a>
      <br />
    </div>
  )
}

export default ToggleButton;