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
    const { fetchPokemonList } = this.props;
    if (!(/\d/).test(this.state.pokemon)) {
      alert('Please enter a numeric value for Number.');
      return;
    }
    axios
      .get(`/api/${this.state.pokemon}`)
      .then(data => {
        if (data.data.length) {
          alert('That Pokemon is already registered')
        } else {
          axios
            .post(`/api/${this.state.pokemon}`)
            .then(() => fetchPokemonList(false))
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