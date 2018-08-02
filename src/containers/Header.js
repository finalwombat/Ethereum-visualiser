import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNetwork } from "../actions/index"

import Transactions from "../components/Transactions"
import Network from "../components/Network"
import styled from 'styled-components'

const Header = ({currentNetwork, selectNetwork, transactionCount}) => {
    return (
        <HeaderDiv>
            <div className="heading"><h1>Blockchain Visualiser</h1></div>
            <div className="content">
                <Network currentNetwork={currentNetwork} selectNetwork={selectNetwork}/>
                <Transactions transactionCount={transactionCount}/>
            </div>
        </HeaderDiv>
    )
}

// Connect to redux
function mapStateToProps(state) {
    return {
      currentNetwork: state.currentNetwork,
      transactionCount: state.transactionCount
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectNetwork: selectNetwork }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderDiv = styled.div`
    width: 100%;
    background-color: black;
    border-bottom: 1px solid #454545;
    

    & .heading {
        color: white;
    }

    & .content {
        color: white;
        display: flex;
        justify-content: space-around;
    }
`