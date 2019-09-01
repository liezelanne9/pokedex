import React, { Component } from 'react';
import ListItem from './SearchExisting-ListItem';

class SearchList extends Component {
  render() {
    return (
      <div className>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>

    )
  }
}

export default SearchList;