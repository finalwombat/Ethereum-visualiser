import React, { Component } from 'react';
import Block from './Block'
import './Blocks.css'
import posed, { PoseGroup } from 'react-pose'

const Item = posed.div({
  enter: { opacity: 1},
  exit: { opacity: 0 }
})

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
      this.setState(prevState => ({
        blocks: [...prevState.blocks, data]
      }))
    }
    
  }
 
  render() {
    console.log(this.state.blocks)
    const blocksList = this.state.blocks.map((block) => {
      return <Item><Block block={block} /></Item>
    })
    return (
      <div className="blocks">
        <PoseGroup>
          {blocksList}
        </PoseGroup>

      </div>
    );
  }
}

export default Blocks