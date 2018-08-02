import React from "react"
import styled from 'styled-components'

const TransactionsCount = ({count})=> {
    // Get background color based on number of transactions
    const color = getColor(count);
    return (
        <TransactionCountDiv className="transactionCount">
            <h4>Transactions per second</h4>
            <Count className="count" color={color}><h1>{count} </h1></Count>
        </TransactionCountDiv>
    )
}

export default TransactionsCount

const TransactionCountDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    color: #ebfbff;
    background: black;
`
const Count = styled.div`
    height: 100%;
    width: 30px;
    margin-left: 10px;
    & h1 {
        color: ${props => props.color};
        text-shadow: 0 0 10px rgba(255,255,255,.1) , 
                 0 0 20px rgba(255,255,255,.1) ,
                 0 0 30px rgba(255,255,255,.1) , 
                 0 0 5px #00ffff;
    }
    

`
// Select a color based on the number provided
function getColor(number) {
    const colors = [
      "#ebfbff",
      "#ff00ff",
      "#7f00ff",
      "#0080ff",
      "#00ff80",
      "#00ff00",
      "#80ff00",
      "#ffff00",
      "#ff8000",
      "#ff0000"
    ];
    // Convert to number between 0 - 9
    number = number / 10;
    if (number > 9) number = 9;
    return colors[Math.floor(number)];
  }