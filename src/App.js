import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" variable="More Variables" />
          {
            this.state.toggle && 
            <p>This should show or hide</p>
          }
          <button onClick={this.toggle}>Show/Hide</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, variable } = this.props
    return (
      <h1 className="App-title">{text} with {variable}</h1>
    )
  }
}

export default App;
