import React from "react"
import Transactions from "../containers/Transactions"
import Network from "../containers/Network"
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderDiv>
            <div className="heading"><h1>Blockchain Visualiser</h1></div>
            <div className="content">
                <Network />
                <Transactions />
            </div>
            
        </HeaderDiv>
    )
}

export default Header

const HeaderDiv = styled.div`
    width: 100%;
    background: black;

    & .heading {
        color: white;
    }

    & .content {
        display: flex;
        width: 50vw;
    }
`