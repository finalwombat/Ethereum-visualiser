const express = require('express');
const app = express();
const Web3 = require('web3')

const key = "https://mainnet.infura.io/VYDF3dhGnawnGEaGGnAg"
const port = 5000

app.set('view engine', 'ejs')


//   web3.eth.getBlockNumber(function(error, result){
//     if(!error)
//         console.log(JSON.stringify(result));
//     else
//         console.error(error);
// })

    

app.get('/', (req, res) => {
    res.render('./index.ejs')
});

app.listen(port, function(){
    console.log('app listening on port:', port);
  });