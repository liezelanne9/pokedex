import React, { Component } from 'react';
import pokemonTypes from '../pokemonTypes';
const sprintf = require('sprintf-js').sprintf;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      type1: '',
      type2: '',
      imageurl: ''
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleFormChange(e) {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit(e) {
    let { id, name, type1, type2, imageurl } = this.state;
    const { registerNewPokemon } = this.props;

    if (!id.length || !name.length || !type1.length) {
      let elements = document.getElementsByClassName('required');
      for (let element of elements) {
        element.classList.add('is-italic');
        element.classList.add('is-danger');
      }
      alert('Please complete all required fields before submitting.');
      return;
    }

    if (!(/\d/).test(id)) {
      alert('Please enter a numeric value for Number.');
      return;
    }

    const zeroPaddedNumber = (num) => {
      return sprintf('%04d', num);
    };
    id = zeroPaddedNumber(id);
    name = name.charAt(0).toUpperCase() + name.slice(1);
    
    registerNewPokemon({ id, name, type1, type2, imageurl });
    this.props.handleClick(e);
  }

  render() {
    const { handleClick } = this.props;
    const { id, name, type1, type2, imageurl } = this.state;
    let types = Object.keys(pokemonTypes);

    return (
      <div>
        <div className="field columns">
          <div className="column">
            <label className="label required">Number*</label>
            <div className="control">
              <input name="id" className="input required" type="text" placeholder="Enter Number" maxLength="4" value={id} onChange={this.handleFormChange} />
            </div>
          </div>
          <div className="column">
            <label className="label required">Pokémon Name*</label>
            <div className="control">
              <input name="name" className="input required" type="text" placeholder="Enter Name" value={name} onChange={this.handleFormChange} />
            </div>
          </div>
        </div>

        <div className="field columns">
          <div className="column">
            <label className="label required">Type 1*</label>
            <div className="control">
              <div className="select required">
                <select name="type1" value={type1} onChange={this.handleFormChange}>
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
                <select name="type2" value={type2} onChange={this.handleFormChange}>
                  <option>Select type</option>
                  {types.map((type, i) => <option key={i}>{type}</option>)}
                  <option>types</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Image Url</label>
          <div className="control">
            <input name="imageurl" className="input" type="text" placeholder="Enter url" value={imageurl} onChange={this.handleFormChange} />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.handleOnSubmit}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-text" onClick={handleClick}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
