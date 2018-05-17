import React, { Component } from 'react';


const Block =  (props) => {
  console.log("props:", props)
  const block = props.block
    return (
      <div className="block">
        <h4># {block.blockdata.number}</h4>
        <summary>Transaction: {block.transactions.length}</summary>
        <details>
          <ul>{block.transactions.map((transaction) => {
            return <li>{transaction.blockHash}</li>
          })}</ul>
        </details>
      </div>
    );
}

export default Block