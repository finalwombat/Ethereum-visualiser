import React from "react";

import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import TransactionCount from "../components/TransactionCount"

const Transactions = ({ transactionCount}) => {  
  return (
    <TransactionsDiv>
        <TransactionCount count={transactionCount} />
    </TransactionsDiv>
  );
};

export default Transactions

// component style

const TransactionsDiv = styled.div`
    background: #282828;
    color: red;
`