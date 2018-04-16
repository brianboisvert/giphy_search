import React, { Component } from 'react';
import './App.css';
import Search from './containers/Search';
import Results from './containers/Results';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
