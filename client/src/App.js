import React from 'react';
import './App.css';
import Blocks from './components/Blocks'
import ContentArea from './containers/ContentArea'


const App = () => {
  return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Blockchain Visualiser</h1>
        </header>
        <main>
          <Blocks />
          <ContentArea />
        </main>
      </div>
  )
  
}

export default App;
