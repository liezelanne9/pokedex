import React from 'react'

const RegisterButton = (props) => {
  const { handleClick } = props;
  return (
    <div className="box has-text-centered">
      <figure className="image is-paddingless">
        <img src="https://cdn-ds.com/blogs-media/sites/77/2017/01/12184830/brake-system-warning-light-300x300.png"
          style={{ width: 120, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </figure>
      <a className="button is-small is-fullwidth is-danger" onClick={handleClick}>
        Register a never-before-seen Pokémon!
        </a>
    </div>
  )
}

export default RegisterButton;