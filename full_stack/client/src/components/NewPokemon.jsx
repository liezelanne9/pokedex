import React, { Component } from 'react';
import RegisterButton from './RegisterButton';
import Form from './Form';

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
    <RegisterButton handleClick={this.handleClick}
    />;
    return (
      <div>
        {visible}
      </div>
    )
  }
}

export default NewPokemon;