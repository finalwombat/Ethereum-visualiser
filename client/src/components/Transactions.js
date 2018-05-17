import React, { Component } from 'react';


const TransactionsContainer =  (props) => {
  const transactions = props.block.transactions
    return (
      <div className="transactions">
        <h4>{transactions.lenght}</h4>
        <ul>{transactions.map((transaction) => {
            return <li>{transaction}</li>
        })}</ul>
      </div>
    );
}

export default TransactionsContainer