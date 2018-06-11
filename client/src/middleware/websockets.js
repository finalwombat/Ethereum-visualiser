import Web3 from "web3";
import { bindActionCreators } from "redux";
import { addBlock } from "../actions/index";
import { updateTransactionCount } from "../actions/index"

export default function listener(dispatch) {

    // set the provider you want from Web3.providers
    const web3 = new Web3(
      new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/_ws")
    );
    const web3Http = new Web3(
      new Web3.providers.HttpProvider(
        "https://mainnet.infura.io/VYDF3dhGnawnGEaGGnAg"
      )
    );

  //  subscribe for new block headers
  web3.eth
    .subscribe("newBlockHeaders", (error, result) => {
      if (error) {
        console.log(error);
      }
    })
    .on("data", blockHeader => {
      web3Http.eth
        .getBlock(blockHeader.number)
        .catch(err => {
          console.log(err);
        })
        .then(block => {
          if (block) {
            dispatch(addBlock(block));
          }
        });
    });

    //  subscribe for new transaction headers
  let transactions = []
  // dispatch transaction count every second - then reset
  setInterval(() => {
    dispatch(updateTransactionCount(transactions.length))
    transactions = []
  }, 1000)
  web3.eth
  .subscribe("pendingTransactions", (error, result) => {
    if (error) {
      console.log(error);
    }
  })
  .on("data", transaction => {
    transactions.push(transaction)
  });
}

// listens for new blocks from server then dispatches action
// export default function listener(dispatch) {
//   const ws = new WebSocket("ws://localhost:5000");

//   ws.onopen = () => {
//     console.log("websocket is connected...");
//     ws.send("connected");
//   };
//   ws.onmessage = message => {
//     const data = JSON.parse(message.data);
//     dispatch(addBlock(data));
//   };
// }
