import React, { Component } from "react";
import TransactionList from "./TransactionList";
import styled from "styled-components";
import {getColor} from '../utils'

const Block = props => {
  const block = props.block;
  // Get background color based on number of transactions
  const color = getColor(block.transactions.length);
  return (
    <BlockDiv className="block" background={color}>
      <h4># {block.number}</h4>
      <summary>Transaction: {block.transactions.length}</summary>
      {/* <details>
        <TransactionList transactions={block.transactions} />>
      </details> */}
    </BlockDiv>
  );
};

export default Block;

// component style
const BlockDiv = styled.div`
  background: ${props => props.background};
  width: 100%;
  border-radius: 20px;
`;
