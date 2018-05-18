import React, { Component } from 'react';
import Transaction from './Transaction'

const TransactionsList =  (props) => {
  const transactions = props.transactions.map(transaction => {
    return <Transaction data={transaction} />
  })
    return (
      <div className="transactions">
        {transactions}
      </div>
    );
}

export default TransactionsList