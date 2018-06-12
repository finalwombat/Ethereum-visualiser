import React, { Component } from "react";

// List of transactions
const TransactionsList = props => {
  const transactions = props.transactions.map(transaction => {
    return;
  });
  return <div className="transactions">{transactions}</div>;
};

export default TransactionsList;
