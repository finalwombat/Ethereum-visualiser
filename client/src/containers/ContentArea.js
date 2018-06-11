import React from "react";
import { connect } from "react-redux";
import TransactionList from "../components/TransactionList"
import styled from 'styled-components'

// Displays information from the currently selected block
const ContentArea = ({ block }) => {
  console.log('block', block)
  if(!block.number) {return(
    <MainDiv className="contentArea"><h1>Select block to start exploring</h1></MainDiv>
  )}
  else {
  return (
    <MainDiv className="contentArea">
      <InfoDiv>
      <div><h1>Block: #</h1> <h2>{block.number}</h2></div>
      <div><h3>Size:</h3> <p>{block.size}</p></div>
      <div><h3>Gas used:</h3> <p>{block.gasUsed}</p></div>
      <div><h3>Miner:</h3> <p>{block.miner}</p></div>
      <div><h3>Transactions:</h3><p>{block.transactions.length}</p></div>
      </InfoDiv>
      
    </MainDiv>
  )};
};

function mapStateToProps(state) {
  return {
    block: state.currentSelection
  };
}

export default connect(mapStateToProps)(ContentArea);

const MainDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(40, 40, 40, 0.3);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
const InfoDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column;
    flex-wrap: wrap;

    & div {
      display: flex;
      align-items: center;
      margin: 10px;
    }

    & div p {
      text-align: center;
    }
`