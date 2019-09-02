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
    axios
      .post(`/api/${this.state.pokemon}`)
      .then(() => fetchPokemonList(false))
  }

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="Name or No." onChange={e => this.handleInputChange(e)}/>
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