import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'A space Movie'
  }, {
    id: 2,
    title: 'Spider Main'
  },{
    id: 3,
    title: 'Batman'
  }, {
    id: 4,
    title: 'Superman'
  }
]
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}        
      </div>
    );
  }
}

export default App;
