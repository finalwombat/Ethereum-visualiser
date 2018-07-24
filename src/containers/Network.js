import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNetwork } from "../actions/index"

const Network = ({currentNetwork, selectNetwork}) => {
    function handleChange(e) {
        selectNetwork(e.target.value)
    }
    return (
        <div>
            <select id="networkSelectBox" onChange={handleChange}>
                <option value="mainnet" >Mainnet</option>
                <option value="rinkeby" >Rinkeby</option>
            </select>
        </div>
    )
}

// Connect to redux
function mapStateToProps(state) {
    return {
      currentNetwork: state.currentNetwork
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectNetwork: selectNetwork }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Network);

 