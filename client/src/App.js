import React from 'react';
import './App.css';
import Blocks from './components/Blocks'


const App = () => {
  return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Blockchain Visualiser</h1>
        </header>
        <main>
          <Blocks blocks />
        </main>
      </div>
  )
  
}

export default App;
