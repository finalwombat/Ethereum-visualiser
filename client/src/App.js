import React, { Component } from 'react';
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
          <h1 className="App-title">Welcome to Blockchain Visualiser</h1>
        </header>
        <main>
          <Blocks blocks={this.state.blocks} />
        </main>
        
        
      </div>
    );
  }
}

export default App;
