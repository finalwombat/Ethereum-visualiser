import React, { Component } from "react"
import Block from "./Block"
import "./Blocks.css"
import { connect } from 'react-redux'
import { selectBlock } from '../actions/index'
import { bindActionCreators } from 'redux'
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"

class Blocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onopen = () => {
      console.log("websocket is connected...");
      ws.send("connected");
    };
    ws.onmessage = ev => {
      const data = JSON.parse(ev.data);
      this.setState(prevState => ({
        blocks: [...prevState.blocks, data]
      }));
    };
  }

  render() {
    const blocksList = this.state.blocks.map(block => {
      return (
        <Item onClick={() => this.props.selectBlock(block)}>
          <Block block={block} />
        </Item>
      );
    });
    return (
      <BlocksDiv className="blocks">
        <h2>New Blocks</h2>
        <PoseGroup className="blocksGroup">{blocksList}</PoseGroup>
      </BlocksDiv>
    );
  }
}

function mapStateToProps(state){
  return {
    blocks: state.blocks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBlock: selectBlock}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocks)

// component style

const BlocksDiv = styled.div`
  margin-top: 100px;
  height: 80vh;

  & h2 {
    margin: 0;
    padding: 5px;
    width: 100%;
    height: 40px;
    color: white;
    background: black;
  }
`;
const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
