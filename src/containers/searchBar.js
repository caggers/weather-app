import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  onInputChange = (e) => {
    e.preventDefault()
    this.setState({ 
      term: e.currentTarget.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
          placeholder="Get a five day forecast in your favourite cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button type="submit"> Search </button>
      </form>
    )
  }
}