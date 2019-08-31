import React from 'react'

const PrevNext = () => {
  return (
    <div className="columns">
      <div className="column">
        <a className="button is-large">
          <i className="fas fa-backward"></i>
        </a>
      </div>
      <div className="column">
        <a className="button is-large">
          <i className="fas fa-forward"></i>
        </a>
      </div>
    </div>
  )
}

export default PrevNext;