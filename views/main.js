const blocks = []
const ws = new WebSocket('ws://localhost:8080')
    
ws.onopen = () => {
    console.log('websocket is connected...')
}
 
ws.onmessage = (ev) => {
    const data = JSON.parse(ev.data)
    console.log(data)
    blocks.push({number :data.number,
                 transactions: data.transactions})

    const p =  d3.select(".blocks")
                .selectAll("div")
                .data(blocks)
    
    console.log(p)
    
    p.enter().append("div")
        .attr("class", "block")
        .text(function(d) {return "#" + d.number})

    p.exit().remove()



    // // append new block div
    // const div = document.createElement('div')
    // const numberH3 = document.createElement('h3')
    // const number = document.createElement('p')
    // const transactionsH3 = document.createElement('h3')
    // const transactions = document.createElement('p')
    
    // div.classList.add('block')
    // number.classList.add('number')
    // transactions.classList.add('transactions')
    // numberH3.innerHTML = "Block Number"
    // transactionsH3.innerHTML = "Transactions"
    // number.innerHTML = data.number
    // transactions.innerHTML = data.transactions.length

    // div.appendChild(numberH3)
    // div.appendChild(number)
    // div.appendChild(transactionsH3)
    // div.appendChild(transactions)
    // blocksDiv.appendChild(div)
    // console.log(blocks)
}



