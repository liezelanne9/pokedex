import React, { Component } from 'react';
import axios from 'axios';

class SearchPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      pokemon: e.target.value
    })
  }

  handleSearchButton() {
    const { pokemonList, fetchPokemonList, changeCurrentPokemon } = this.props;
    // if (!(/\d/).test(this.state.pokemon)) {
    //   alert('Please enter a numeric value for Number.');
    //   return;
    // }
    axios
      .get(`/api/${this.state.pokemon}`)
      .then(data => {
        if (data.data.length) {
          changeCurrentPokemon(pokemonList.findIndex(pokemon => pokemon.id == data.data[0].id))
          alert(`${data.data[0].name} is already registered to the Pokedéx.`);
        } else {
          axios
            .post(`/api/${this.state.pokemon}`)
            .then((data) => {
              console.log(data.data)
              alert(`${data.data}'s data will be added to the Pokedéx. Be sure to add a picture!`)
              fetchPokemonList(false);
            })
            .catch(() => {
              alert(`Error trying to register '${this.state.pokemon}'. Do you mean to register a never-before-seen Pokémon instead?`)
            })
        }
      })
  }

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Pokemon #" onChange={e => this.handleInputChange(e)} />
        </div>
        <div className="control">
          <a className="button is-info" onClick={this.handleSearchButton}>
            Search
          </a>
        </div>
      </div>
    )
  }
}

export default SearchPokemon;