import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = (e) => {
    e.preventDefault()
    this.setState({ 
      term: e.currentTarget.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    // Fetch weather Data
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Use null when the container doesn't care about the state at all
export default connect(null, mapDispatchToProps)(SearchBar);