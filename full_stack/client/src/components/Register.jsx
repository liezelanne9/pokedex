import React, { Component } from 'react';
import SearchPokemon from './SearchPokemon';
import SearchList from './SearchList';

class Register extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="columns">
            <div className="column has-text-centered">
              <h2>Register New Seen:</h2>
            </div>
            <div className="column">
              <SearchPokemon />
            </div>
          </div>
        </div>
        <div className="box">
          <SearchList />
        </div>
      </div>
    )
  }
}

export default Register;