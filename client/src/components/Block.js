import React, { Component } from 'react';


const Block =  (props) => {
  const block = props.block
    return (
      <div className="block">
        <h4># {block.number}</h4>
        <h4>Transaction: {block.transactions.length}</h4>
      </div>
    );
}

export default Block