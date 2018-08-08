import React from "react";
import TransactionList from "../components/TransactionList"
import styled from 'styled-components'
import Chart from './Chart'
import {convertDataForChart, getTransactionsPerBlock} from '../utils'

// Displays information from the currently selected block
const ContentArea = ({ blocks, transactionLog }) => {
  return (
    <MainDiv className="contentArea">
      {/* <InfoDiv>
      <div><h1>Block: #</h1> <h2>{block.number}</h2></div>
      <div><h3>Transactions:</h3><p>{block.transactions.length}</p></div>
      <div><h3>Difficulty: </h3> <p>{block.difficulty}</p></div>
      <div><h3>Gas used:</h3> <p>{block.gasUsed}</p></div>
      <div><h3>Gas limit:</h3> <p>{block.gasLimit}</p></div>
      <div><h3>Miner:</h3> <p>{block.miner}</p></div>
      </InfoDiv> */}
      <div> 
        <h3>Transactions per second</h3>
        <Chart data={convertDataForChart(transactionLog)} color="#00ff80"/>
      </div>
      <div> 
        <h3>Transactions per block</h3>
        <Chart data={convertDataForChart(getTransactionsPerBlock(blocks).reverse())} color="#00ff80"/>
      </div>
      
      
    </MainDiv>
    )
};


export default ContentArea;

const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    background: black;
    color: white;
    border: 1px solid #454545;
`
const InfoDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column;

    & div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 10px;
    }

    & div p {
      text-align: center;
    }
`
