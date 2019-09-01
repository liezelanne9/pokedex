import React, { Component } from 'react';
import pokemonTypes from '../pokemonTypes';

class NewPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let types = Object.keys(pokemonTypes);
    const registerButton = (
      <div className="box has-text-centered">
        <figure className="image is-paddingless">
          <img src="https://cdn-ds.com/blogs-media/sites/77/2017/01/12184830/brake-system-warning-light-300x300.png"
            style={{ width: 120, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
          />
        </figure>
        <a className="button is-small is-fullwidth is-danger" onClick={this.handleClick}>
          Register a never-before-seen Pokémon!
        </a>
      </div>
    )
    const form = (
      <div>
        <div className="field">
          <label className="label">Pokémon Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field columns">
          <div className="column">
            <label className="label">Type 1</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select type</option>
                  {types.map((type, i) => <option key={i}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div className="column">
            <label className="label">Type 2</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select type</option>
                  {types.map((type, i) => <option key={i}>{type}</option>)}
                  <option>types</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text" onClick={this.handleClick}>Cancel</button>
          </div>
        </div>
      </div>
    )
    let visible = this.state.clicked ? form : registerButton;
    return (
      <div>
        {visible}
      </div>
    )
  }
}

export default NewPokemon;