import React, { Component } from 'react';
import Block from './Block'
import './Blocks.css'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

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
    const blocksList = this.state.blocks.map((block) => { 
      const color = getColor(block.transactions.length)
      console.log(color)
      return <BlockDiv background={color}><Block block={block} /></BlockDiv>
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

// component style

const Item = posed.div({
  enter: { opacity: 1},
  exit: { opacity: 0 }
})

const BlockDiv = styled(Item)`
  background: ${props => props.background};
  width: 100%;
  border-radius: 30px;
`

// helper functions

function getColor(number) {

  const colors = 
  [
    "#808080",
    "#ff00ff",
    "#7f00ff",
    "#0080ff",
    "#00ff80",
    "#00ff00",
    "#80ff00",
    "#ffff00",
    "#ff8000",
    "#ff0000"
  ]
  number = number / 10
  if(number > 9 ) number = 9;
  return colors[Math.floor(number)]
}