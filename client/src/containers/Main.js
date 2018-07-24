import React from "react";
import { connect } from "react-redux";
import { selectBlock } from "../actions/index";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import Blocks from "../components/Blocks";
import ContentArea from "./ContentArea";
import { PulseLoader } from 'halogenium'

// Displays information from the currently selected block
const Main = ({ blocks, block, isLoading, selectBlock }) => {
  
  if(isLoading){
      return <PulseLoader color="#ffffff" size="16px" margin="4px"/>
  }else {
    return (
    <div className="main">
        <Blocks/>
        <ContentArea/>  
    </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    blocks: state.blocks,
    block: state.currentSelection,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBlock: selectBlock }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);
