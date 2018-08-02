import React from 'react'

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

export default Network

 