import React from "react";
import { connect } from "react-redux";
import { selectBlock } from "../actions/index";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import Blocks from "../components/Blocks";
import ContentArea from "../components/ContentArea";
import { PulseLoader } from 'halogenium'

// Displays information from the currently selected block
const Main = ({ blocks, block, isLoading, selectBlock, currentNetwork, transactionLog }) => {
  
  // check for loading - return jsx
  if(isLoading){
      return (
        <LoadingDiv>
          <p>Connecting to Ethereum {currentNetwork} network</p>
          <PulseLoader color="#ffffff" size="16px" margin="4px"/>
        </LoadingDiv>
    )
  }else {
    return (
    <MainDiv className="main">
        <Blocks blocks={blocks} selectBlock={selectBlock}/>
        <ContentArea blocks={blocks} transactionLog={transactionLog}/>  
    </MainDiv>
    )
  }
};

function mapStateToProps(state) {
  return {
    blocks: state.blocks,
    block: state.currentSelection,
    isLoading: state.isLoading,
    currentNetwork: state.currentNetwork,
    transactionLog: state.transactionLog
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBlock: selectBlock }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);


const MainDiv = styled.div`
  display: flex;
  overflow: hidden;
  & .blocks{
    max-width: 40vw;
  }

  & .ContentArea{
    width: 100%;
  }
`

const LoadingDiv = styled.div`
  color: white;
  text-align: center;
`