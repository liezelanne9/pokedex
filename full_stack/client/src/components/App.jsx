import React, { Component } from 'react';
import CurrentPokemon from './CurrentPokemon';
import Register from './Register';
import NewPokemon from './NewPokemon';
import PrevNext from './PrevNext';

class App extends Component {
  render() {
    return (
      <div className="tile is-ancestor">
        {/* <div className="column"> */}

          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-warning">
              <CurrentPokemon />
            </article>
          </div>

        {/* </div> */}

        {/* <div className="column"> */}

          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-danger">
              <Register />
            </article>
            <article className="tile is-child notification is-danger">
              <NewPokemon />
            </article>
            <article className="tile is-child notification is-info">
              <PrevNext />
            </article>
          </div>


        {/* </div> */}

      </div>
    )
  }
}

export default App;