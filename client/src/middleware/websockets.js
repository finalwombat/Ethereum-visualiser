import Web3 from "web3";
import watch from 'redux-watch';
import { bindActionCreators } from "redux";
import { addBlock } from "../actions/index";
import { updateTransactionCount } from "../actions/index"

export default function Listener(store, network) {

    const blockheaderSocket = null
    const transactionheaderSocket = null
    const interval = null
    let transactionCount= 0

     // set the provider you want from Web3.providers
     const web3 = new Web3(
      new Web3.providers.WebsocketProvider(`wss://${network}.infura.io/_ws`)
    );
    const web3Http = new Web3(
      new Web3.providers.HttpProvider(
        `https://${network}.infura.io/VYDF3dhGnawnGEaGGnAg`
      )
    );

    function handleNewBlockHeaders(blockHeader) {
      console.log('new blockheader', blockHeader)
      web3Http.eth
        .getBlock(blockHeader.number)
            .catch(err => {
              console.log(err);
            })
            .then(block => {
              if (block) {
                store.dispatch(addBlock(block));
              }
            });
    }
    
    function handleNewTransactions(transactionHeader) {
      transactionCount ++;
    }

    const countPerSecond = () => {
      // dispatch transaction count every second - then reset
      return setInterval(() => {
        store.dispatch(updateTransactionCount(transactionCount))
        console.log('transactionCoinmt', transactionCount)
        transactionCount = 0;
      }, 1000)
    }

    // create new websocket
    const newWebsocket = (network, task, callback) => {
        

      //  subscribe for new block headers
      return web3.eth
        .subscribe(task, (error, result) => {
          if (error) {
            console.log(error);
          }
        })
        .on("data", (result => {
          callback(result)
        }))
      }
    
    return {
    start: (network) => {
           console.log('start')
           console.log(this.blockheaderSocket)
           this.blockheaderSocket = newWebsocket(network, "newBlockHeaders", handleNewBlockHeaders);
           console.log(this.blockheaderSocket)
           this.transactionheaderSocket =  newWebsocket(network, "pendingTransactions", handleNewTransactions)
           this.interval = countPerSecond();
        },
    stop: () => {
      console.log('stop')
      this.blockheaderSocket.unsubscribe();
      this.transactionheaderSocket.unsubscribe();
      clearInterval(this.interval);
    },
  }

  
     

      

  // return object
  return Listener
}
