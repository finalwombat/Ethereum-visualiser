import React, { Component } from 'react';
import Block from './Block'
import './Blocks.css'

class Blocks extends Component {
  constructor(props) {
      super(props)
      this.state = {
          blocks: []
      }
  }

  componentDidMount() {
    const ws = new WebSocket('ws://localhost:5000')
    
    ws.onopen = () => {
        console.log('websocket is connected...')
        ws.send('connected')
    }
    ws.onmessage = (ev) => {
      const data = JSON.parse(ev.data)
      console.log(data)
      this.setState(prevState => ({
        blocks: [...prevState.blocks, data]
      }))
    }
    
  }
 
  render() {
    console.log(this.state.blocks)
    const blocksList = this.state.blocks.map((block) => {
      return <Block number={block.number} />
    })
    return (
      <div className="blocks">
        {blocksList}
      </div>
    );
  }
}

export default Blocks