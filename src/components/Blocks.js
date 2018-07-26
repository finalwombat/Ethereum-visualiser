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
    <WrapperDiv className="blocks">
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
  border: 1px solid #454545;
  & h2 {
    margin: 0;
    margin-bottom: 15px;
    padding: 15px;
    height: 40px;
    color: #ebfbff;
    text-shadow: 0 0 10px rgba(255,255,255,.1) , 0 0 20px rgba(255,255,255,.1) , 0 0 30px rgba(255,255,255,.1) , 0 0 5px #00ffff  ;
  }
`
const BlocksDiv = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: #F5F5F5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar
  {
    width: 10px;
    background-color: #F5F5F5;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #FFF;
    background-image: -webkit-gradient(linear,
                      40% 0%,
                      75% 84%,
                      from(#4D9C41),
                      to(#19911D),
                      color-stop(.6,#54DE5D))
  }
`;
const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
