import React, { Component } from 'react'

class SearchPokemon extends Component {
  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Pokemon Name or No." />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
    )
  }
}

export default SearchPokemon;