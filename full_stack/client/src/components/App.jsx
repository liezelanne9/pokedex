import React, { Component } from 'react';
import CurrentPokemon from './CurrentPokemon';
import Register from './Register';
import NewPokemon from './NewPokemon';
import PrevNext from './PrevNext';
import axios from 'axios';
// import pokeLoading from '../../dist/loading-pokeball.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      currentIndex: 0
    }
  }

  componentDidMount() {
    axios
      .get('/api')
      .then(pokemon => {
        this.setState({
          pokemonList: pokemon.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const placeholder = {
      "id": '',
      "name": "Please wait...",
      "type1": "???",
      "type2": "",
      "imageurl": "https://cdn140.picsart.com/259325004017202.gif"
    };
    const { pokemonList, currentIndex } = this.state;
    const currentPokemon = pokemonList[currentIndex] ? pokemonList[currentIndex] : placeholder;

    return (
      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-warning">
            <CurrentPokemon currentPokemon={currentPokemon} />
          </article>
        </div>

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

      </div>
    )
  }
}

export default App;