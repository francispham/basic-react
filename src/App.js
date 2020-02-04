import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
      // This will allow a Full Control over the input! 
    })
  }

  submit = () => {
    console.log(this.text.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome 
            text="Welcome to Using Props" 
            variable="More Variables" 
          />
          <h3>{this.state.input}</h3>
          {/* // Controlled Input  */}
          <input type="text" onChange={this.updateInput} value={this.state.input} />
          {/* UnControlled Input */}
          <input type="text" ref={(input) => this.text = input } />
                                {/* Same as: 
                                  function(input) {
                                    this.text = input
                                  } 
                                */}
          <button onClick={this.submit}>Show Value</button>
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
    const { text, variable } = this.props;

    return (
      <h1 className="App-title">{text} with {variable}</h1>
    )
  }
}

export default App;
