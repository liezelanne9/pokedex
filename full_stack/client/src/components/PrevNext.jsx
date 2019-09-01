import React from 'react'

const PrevNext = (props) => {
  return (
    <div className="columns">
      <div className="column">
        <a className="button is-large" onClick={(direction) => props.changeCurrentPokemon(-1)}>
          <i className="fas fa-backward"></i>
        </a>
      </div>
      <div className="column">
        <a className="button is-large" onClick={(direction) => props.changeCurrentPokemon(1)}>
          <i className="fas fa-forward"></i>
        </a>
      </div>
    </div>
  )
}

export default PrevNext;