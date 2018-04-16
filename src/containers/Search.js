import React from 'react';
import {connect} from 'react-redux'
import fetchGifs from '../actions/SearchAction'

class Search extends React.Component {

  state = {
    term: ''
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}>
          </input>
          <input type="submit">
          </input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGifs: (term) => {dispatch(fetchGifs(term))}
  }
}

export default connect(null, mapDispatchToProps)(Search);
