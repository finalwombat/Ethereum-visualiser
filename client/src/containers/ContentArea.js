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
      <p>Block Number: {data.number}</p>
      <p>Size: {data.size}</p>
      <p>Gas used: {data.gasUsed}</p>
      <p>Miner: {data.miner}</p>
      </InfoDiv>
      <TransactionList transactions={transactions} />
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
    justify-content: space-around;
    flex-wrap: wrap;
`
const InfoDiv = styled.div`
    display: flex; 
    justify-content: space-around;
`