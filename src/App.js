import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';
import keys from './config/keys'
class App extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        keys.moviesAPI
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      console.log(e);
    }
  }

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
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}        
      </div>
    );
  }
}

export default App;
