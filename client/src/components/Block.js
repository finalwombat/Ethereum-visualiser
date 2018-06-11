import React, { Component } from "react";
import TransactionList from "./TransactionList";
import styled from "styled-components";

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

// helper functions

// Select a color based on the number provided
function getColor(number) {
  const colors = [
    "#808080",
    "#ff00ff",
    "#7f00ff",
    "#0080ff",
    "#00ff80",
    "#00ff00",
    "#80ff00",
    "#ffff00",
    "#ff8000",
    "#ff0000"
  ];
  // Convert to number between 0 - 9
  number = number / 10;
  if (number > 9) number = 9;
  return colors[Math.floor(number)];
}
