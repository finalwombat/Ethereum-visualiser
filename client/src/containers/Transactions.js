import React from "react";
import { connect } from "react-redux";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const Transactions = ({ transactionCount}) => {
  return (
    <div>{transactionCount}</div>
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

const WrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(40, 40, 40, 0.3);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  & h2 {
    margin: 0;
    margin-bottom: 15px;
    padding: 15px;
    height: 40px;
    color: #E27D60;
  }
`
const BlocksDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
`;
const Item = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
