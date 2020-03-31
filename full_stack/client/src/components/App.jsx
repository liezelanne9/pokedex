import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, unregisterPokemon, registerNewPokemon } from '../../../redux/actions';
import CurrentPokemon from './CurrentPokemon';
import SearchExisting from './SearchExisting';
import NewPokemon from './NewPokemon';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pokemonList: [],
      currentIndex: 0
    }
    // this.fetchPokemon = this.fetchPokemon.bind(this);
    this.changeCurrentPokemon = this.changeCurrentPokemon.bind(this);
    this.unregisterPokemon = this.unregisterPokemon.bind(this);
    this.registerNewPokemon = this.registerNewPokemon.bind(this);
  }

  componentDidMount() {
    this.props.fetchPokemon();
    window.addEventListener('keydown', (e) => {
      if (e.target.type !== "text") {
        if (e.key === "ArrowLeft") {
          this.changeCurrentPokemon(-1);
        }
        if (e.key === "ArrowRight") {
          this.changeCurrentPokemon(1);
        }
      }
    });
  }

  fetchPokemon(init = true) {
    axios
      .get('/api')
      .then(pokemon => {
        this.setState({
          pokemonList: pokemon.data
        }, () => {
          if (init) {
            this.setState({
              currentIndex: 0
            })
          } else {
            this.setState({
              currentIndex: this.props.pokemonList.length - 1
            })
          }
        })
      })
      .catch(err => console.log(err))
  }

  changeCurrentPokemon(direction) {
    let { currentIndex } = this.state;
    if (direction === -1 && currentIndex === 0) {
      currentIndex = this.props.pokemonList.length - 1;
    } else if (direction === 1 && currentIndex === this.props.pokemonList.length - 1) {
      currentIndex = 0;
    } else if (direction === 0 || direction > 1) {
      currentIndex = direction;
    } else {
      currentIndex = this.state.currentIndex + direction;
    }
    this.setState({
      currentIndex
    })
  }

  unregisterPokemon(e, id) {
    e.preventDefault();
    let confirmed = confirm("Are you sure you want to un-register this Pokemon?");
    if (confirmed) {
      axios
        .delete(`/api/${id}`)
        .then(() => {
          this.fetchPokemon(false);
        })
        .catch(err => console.log(err.response))
    }
  }

  registerNewPokemon(pokemonObject) {
    const { id } = pokemonObject;
    axios
      .get(`/api/${id}`)
      .then((pokemon) => {
        if (pokemon.data.length) {
          alert('Pokemon Number already exists. Please enter a different Number (up to 4 digits).');
          return;
        } else {
          axios
            .post('/api', pokemonObject)
            .then(() => {
              console.log('posted')
              this.fetchPokemon(false)
            })
            .catch(err => console.log(err.response))
        }
      })
  }

  render() {
    const placeholder = {
      "id": '',
      "name": "Please wait...",
      "type1": "???",
      "type2": "",
      "imageurl": "https://cdn140.picsart.com/259325004017202.gif",
      "sprite": "",
      "stats": ""
    };
    const { currentIndex } = this.state;
    const { pokemonList } = this.props;
    const currentPokemon = (pokemonList && pokemonList[currentIndex]) ? pokemonList[currentIndex] : placeholder;

    return (
      <div className="tile is-ancestor">

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <CurrentPokemon
              currentPokemon={currentPokemon}
              changeCurrentPokemon={this.changeCurrentPokemon}
              unregisterPokemon={this.unregisterPokemon}
              lastIndex={pokemonList ? pokemonList.length - 1 : 0}
            />
          </article>
        </div>

        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <NewPokemon registerNewPokemon={this.registerNewPokemon} />
          </article>
          <article className="tile is-child notification is-info">
            <SearchExisting
              // pokemonList={pokemonList}
              // fetchPokemon={this.props.fetchPokemon}
              changeCurrentPokemon={this.changeCurrentPokemon} />
          </article>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemon: () => dispatch(fetchPokemon()),
    unregisterPokemon: (pokemonId) => dispatch(unregisterPokemon({ pokemonId })),
    registerNewPokemon: (pokemonObject) => dispatch(registerNewPokemon({ pokemonObject })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);