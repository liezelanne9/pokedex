import React from 'react'

const PrevNext = (props) => {
  const { changeCurrentPokemon, lastIndex } = props;
  return (
    <div className="container">
      <div className="is-pulled-left">
        <a className="button is-large" onClick={(direction) => changeCurrentPokemon(0)}>
          <i className="fas fa-step-backward"></i>
        </a>
        <a className="button is-large" onClick={(direction) => changeCurrentPokemon(-1)}>
          <i className="fas fa-backward"></i>
        </a>
      </div>
      <div className="is-pulled-right">
        <a className="button is-large" onClick={(direction) => changeCurrentPokemon(1)}>
          <i className="fas fa-forward"></i>
        </a>
        <a className="button is-large" onClick={(direction) => changeCurrentPokemon(lastIndex)}>
          <i className="fas fa-step-forward"></i>
        </a>
      </div>
    </div>
  )
}

export default PrevNext;