import React from "react";
import { connect } from "react-redux";
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

// Connect to redux
function mapStateToProps(state) {
  return {
    transactionCount: state.transactionCount
  };
}

export default connect(mapStateToProps)(Transactions);

// component style

const TransactionsDiv = styled.div`
    background: #282828;
    color: red;
`