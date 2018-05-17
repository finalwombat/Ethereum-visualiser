const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 5000})
const Web3 = require('web3')

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('recieved: ', message)
    })
})
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN){
            client.send(data)
        }
    })
}

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws"));
    web3Http = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/VYDF3dhGnawnGEaGGnAg"))
  }

  web3.eth.subscribe('newBlockHeaders', (error, result) => {
    if(error){
        console.log(error)
    }
})
.on("data", (blockHeader) => {
    // console.log(JSON.stringify(blockHeader))
    console.log(blockHeader.number)
    web3Http.eth.getBlock(blockHeader.number)
        .catch(err => {
            console.log(err)
        })
        .then(block => {
            if(block){
                if(block.transactions.length ){
                    const transactionNumbers = block.transactions
                    const promises = transactionNumbers.map( transactionNumber => {
                        return web3Http.eth.getTransaction(transactionNumber)
                            .catch(err => {
                                console.log(err)
                            })
                            .then((transaction) => {
                                return transaction
                            })
                        })
                    Promise.all(promises).then(transactions => {
                        wss.broadcast(JSON.stringify({block, transactions}))
                    }
        
                    )
                }
            }  
        })
            
    })