import React, { Component } from 'react';
import TransactionList from './TransactionList'
import styled from 'styled-components'

const Block =  (props) => {
  console.log("props:", props)
  const block = props.block
    return (
      <div className="block">
        <h4># {block.blockdata.number}</h4>
        <summary>Transaction: {block.transactions.length}</summary>
        <details>
          <TransactionList transactions={block.transactions} />>
        </details>
      </div>
    );
}

export default Block