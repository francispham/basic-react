import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Star Wars'
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
        {movies.map(movie => <div key={movie.id}>{movie.title}</div>)}        
        {/* Same as:
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                {movie.title}
              </div>
            ) 
          })} 
        */}
      </div>
    );
  }
}

export default App;
