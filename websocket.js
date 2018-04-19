const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8080})
const Web3 = require('web3')

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('recieved: ', message)
    })
    ws.send('something')
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
    web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));
  }

  web3.eth.subscribe('newBlockHeaders', (error, result) => {
    if(error){
        console.log(error)
    }
})
.on("data", (blockHeader) => {
    console.log(JSON.stringify(blockHeader))
    wss.broadcast(JSON.stringify(blockHeader))
})