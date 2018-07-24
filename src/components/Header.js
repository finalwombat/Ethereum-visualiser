import React from "react"
import Transactions from "../containers/Transactions"
import Network from "../containers/Network"
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderDiv>
            <div className="heading"><h1>Blockchain Visualiser</h1></div>
            <div className="content">
                <div className="network">
                <h2>select network</h2>
                <Network />
                </div>
                <Transactions />
            </div>
            
        </HeaderDiv>
    )
}

export default Header

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