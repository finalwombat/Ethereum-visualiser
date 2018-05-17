import React, { Component } from 'react';


const Block =  (props) => {
  const block = props.block
    return (
      <div className="block">
        <h4># {block.number}</h4>
        <summary>Transaction: {block.transactions.length}</summary>
        <details>
          <ul>{block.transactions.map((transaction) => {
            return <li>{transaction}</li>
          })}</ul>
        </details>
      </div>
    );
}

export default Block