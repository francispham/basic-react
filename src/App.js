import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentWillMount() {
    // For Setting State without Triggering a Second Render (render() hasn't called yet!)
    console.log("Will Mount");
  }

  componentDidMount() {
    // Interactions is now existed and will be available for Further Actions. 
    // Will Trigger a Re-render. 
    console.log("Mounted");

  }

  state = {
    toggle: true //Happen when called render()
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
          <Welcome 
            text="Welcome to Using Props" 
            variable="More Variables" 
            toggle={this.state.toggle}
          />
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
    const { text, variable, toggle } = this.props;
    console.log(toggle);
    return (
      <h1 className="App-title">{text} with {variable}</h1>
    )
  }
}

export default App;
