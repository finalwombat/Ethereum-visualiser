const Web3 = require('web3')

const key = "https://mainnet.infura.io/VYDF3dhGnawnGEaGGnAg"

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/VYDF3dhGnawnGEaGGnAg"));
  }

  web3.eth.getBlockNumber(function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
})