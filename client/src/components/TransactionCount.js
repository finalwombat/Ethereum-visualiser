import React from "react"

const TransactionsCount = (props)=> {
    return (
        <div className="transactionCount">
            <h3>Transactions</h3>
            <div className="count">{props.count}<p>Per second</p></div>
        </div>
    )
}

export default TransactionsCount