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
      <Item onClick={() => selectBlock(block)}>
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

const BlocksDiv = styled.div`
  height: 100%;
  width: 100%;

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
