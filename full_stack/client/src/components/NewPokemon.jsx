import React, { Component } from 'react';
import ToggleButton from './NewPokemon-Toggle';
import Form from './NewPokemon-Form';

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
    let visible = this.state.clicked ? 
    <Form handleClick={this.handleClick}/> : 
    <ToggleButton handleClick={this.handleClick}
    />;
    return (
      <div>
        {visible}
      </div>
    )
  }
}

export default NewPokemon;