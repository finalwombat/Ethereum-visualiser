import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blocks from './components/Blocks'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocks: []
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Blocks blocks={this.state.blocks} />
        </main>
        
        
      </div>
    );
  }
}

export default App;
