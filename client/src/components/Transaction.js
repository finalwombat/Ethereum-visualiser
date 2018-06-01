import React, { Component } from "react";

// Details of individual transaction
const Transaction = props => {
  const data = props.data;
  return (
    <div>
      <p>{data.to}</p>
      <p>{data.from}</p>
      <p>{data.hash}</p>
      <p>{data.value}</p>
    </div>
  );
};

export default Transaction;
