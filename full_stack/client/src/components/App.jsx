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
    this.changeCurrentPokemon = this.changeCurrentPokemon.bind(this);
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
    window.addEventListener('keydown', (e) => {
      if (e.key === "ArrowLeft") {
        this.changeCurrentPokemon(e, -1);
      }
      if (e.key === "ArrowRight") {
        this.changeCurrentPokemon(e, 1);
      }
    });
  }

  changeCurrentPokemon(e, direction) {
    // e.preventDefault();
    let { currentIndex } = this.state;
    if (direction === -1 && currentIndex === 0) {
      currentIndex = this.state.pokemonList.length - 1;
    } else if (direction === 1 && currentIndex === this.state.pokemonList.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex = this.state.currentIndex + direction;
    }
    this.setState({
      currentIndex
    })
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
            <PrevNext changeCurrentPokemon={this.changeCurrentPokemon}/>
          </article>
        </div>

      </div>
    )
  }
}

export default App;