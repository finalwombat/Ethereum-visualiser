import React from "react";
import { connect } from "react-redux";
import TransactionList from "../components/TransactionList"
import styled from 'styled-components'

// Displays information from the currently selected block
const ContentArea = ({ block }) => {
  console.log('block:', block.blockdata)
  console.log('transactions:', block.transactions)
  const data = block.blockdata
  const transactions = block.transactions
  if(!block.blockdata) {return(
    <MainDiv className="contentArea"><h1>Select block to start exploring</h1></MainDiv>
  )}
  else {
  return (
    <MainDiv className="contentArea">
      <InfoDiv>
      <div><h3>Block Number:</h3> <p>{data.number}</p></div>
      <div><h3>Size:</h3> <p>{data.size}</p></div>
      <div><h3>Gas used:</h3> <p>{data.gasUsed}</p></div>
      <div><h3>Miner:</h3> <p>{data.miner}</p></div>
      <div><h3>Transactions:</h3><p>{transactions.length}</p></div>
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
    border: 1px solid black;
`
const InfoDiv = styled.div`
    display: flex; 
    justify-content: space-around;
    flex-wrap: wrap;

    & div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px;
    }

    & div p {
      text-align: center;
    }
`