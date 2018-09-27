import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (e) => {
    console.log(e.currentTarget.value);
    e.preventDefault()
    this.setState({ 
      term: e.currentTarget.value
    });
  }

  render() {
    return (
      <form>
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