import React, { Component } from "react";
import Block from "./Block";
import "./Blocks.css";
import { connect } from "react-redux";
import { selectBlock } from "../actions/index";
import { bindActionCreators } from "redux";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const Blocks = ({ blocks, selectBlock }) => {
  // map blocks to animated div list
  const blocksList = blocks.map(block => {
    return (
      <Item onClick={() => selectBlock(block)} key={block.number}>
        <Block block={block} />
      </Item>
    );
  });
  return (
    <WrapperDiv className="wrapperDiv">
      <h2>New Blocks</h2>
      <BlocksDiv>
        <PoseGroup >{blocksList}</PoseGroup>
      </BlocksDiv>
    </WrapperDiv>
    
  );
};

// Connect to redux
function mapStateToProps(state) {
  return {
    blocks: state.blocks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBlock: selectBlock }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);

// component style

const WrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(40, 40, 40, 0.3);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  & h2 {
    margin: 0;
    margin-bottom: 15px;
    padding: 15px;
    height: 40px;
    color: #E27D60;
  }
`
const BlocksDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
`;
const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
