const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 5000 });
const Web3 = require("web3");
const axios = require("axios");

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("recieved: ", message);
  });
});
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  // web3 = new Web3(new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws"));
  web3Http = new Web3(
    new Web3.providers.HttpProvider(
      "https://rinkeby.infura.io/VYDF3dhGnawnGEaGGnAg"
    )
  );
}

axios
  .get(
    "http://api.etherscan.io/api?module=contract&action=getabi&address=0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359&apikey=9ES2AYEBQFG7277ZI854B8I59IZE9GG65J"
  )
  .catch(err => {
    console.log(err);
  })
  .then(response => {
    let contractABI = "";
    contractABI = response.data.result;
    if (contractABI != "") {
      const myContract = web3Http.eth.contract(contractABI);
      const myContractInstance = myContract.at(
        "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359"
      );
      const result = myContractInstance.memberId(
        "0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715"
      );
      console.log("result: ", result);
    }
  })[
  //   web3.eth.subscribe('newBlockHeaders', (error, result) => {
  //     if(error){
  //         console.log(error)
  //     }
  // })
  // .on("data", (blockHeader) => {
  //     // console.log(JSON.stringify(blockHeader))
  //     console.log(blockHeader.number)
  //     web3Http.eth.getBlock(blockHeader.number)
  //         .catch(err => {
  //             console.log(err)
  //         })
  //         .then(block => {
  //             if(block){
  //                 if(block.transactions.length ){
  //                     const transactionNumbers = block.transactions
  //                     const promises = transactionNumbers.map( transactionNumber => {
  //                         return web3Http.eth.getTransaction(transactionNumber)
  //                             .catch(err => {
  //                                 console.log(err)
  //                             })
  //                             .then((transaction) => {
  //                                 return transaction
  //                             })
  //                         })
  //                     Promise.all(promises).then(transactions => {
  //                         wss.broadcast(JSON.stringify({blockdata: block, transactions}))
  //                     }

  //                     )
  //                 }
  //             }
  //         })

  //     })

  ({
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "proposals",
    outputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "description", type: "string" },
      { name: "votingDeadline", type: "uint256" },
      { name: "executed", type: "bool" },
      { name: "proposalPassed", type: "bool" },
      { name: "numberOfVotes", type: "uint256" },
      { name: "currentResult", type: "int256" },
      { name: "proposalHash", type: "bytes32" }
    ],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "proposalNumber", type: "uint256" },
      { name: "transactionBytecode", type: "bytes" }
    ],
    name: "executeProposal",
    outputs: [{ name: "result", type: "int256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "memberId",
    outputs: [{ name: "", type: "uint256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "numProposals",
    outputs: [{ name: "", type: "uint256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "priceOfAUnicornInFinney",
    outputs: [{ name: "", type: "uint256" }],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "newUnicornPriceInFinney", type: "uint256" },
      { name: "newUnicornAddress", type: "address" }
    ],
    name: "changeUnicorn",
    outputs: [],
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "members",
    outputs: [
      { name: "member", type: "address" },
      { name: "voteWeight", type: "uint256" },
      { name: "canAddProposals", type: "bool" },
      { name: "name", type: "string" },
      { name: "memberSince", type: "uint256" }
    ],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "debatingPeriodInMinutes",
    outputs: [{ name: "", type: "uint256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "minimumQuorum",
    outputs: [{ name: "", type: "uint256" }],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "targetMember", type: "address" },
      { name: "voteWeight", type: "uint256" },
      { name: "canAddProposals", type: "bool" },
      { name: "memberName", type: "string" }
    ],
    name: "changeMembership",
    outputs: [],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "beneficiary", type: "address" },
      { name: "weiAmount", type: "uint256" },
      { name: "JobDescription", type: "string" },
      { name: "transactionBytecode", type: "bytes" }
    ],
    name: "newProposalInWei",
    outputs: [{ name: "proposalID", type: "uint256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "majorityMargin",
    outputs: [{ name: "", type: "int256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "unicornAddress",
    outputs: [{ name: "", type: "address" }],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "beneficiary", type: "address" },
      { name: "etherAmount", type: "uint256" },
      { name: "JobDescription", type: "string" },
      { name: "transactionBytecode", type: "bytes" }
    ],
    name: "newProposalInEther",
    outputs: [{ name: "proposalID", type: "uint256" }],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "minimumQuorumForProposals", type: "uint256" },
      { name: "minutesForDebate", type: "uint256" },
      { name: "marginOfVotesForMajority", type: "int256" }
    ],
    name: "changeVotingRules",
    outputs: [],
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "proposalNumber", type: "uint256" },
      { name: "supportsProposal", type: "bool" },
      { name: "justificationText", type: "string" }
    ],
    name: "vote",
    outputs: [{ name: "voteID", type: "uint256" }],
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "proposalNumber", type: "uint256" },
      { name: "beneficiary", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "transactionBytecode", type: "bytes" }
    ],
    name: "checkProposalCode",
    outputs: [{ name: "codeChecksOut", type: "bool" }],
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    type: "function"
  },
  {
    inputs: [
      { name: "minimumQuorumForProposals", type: "uint256" },
      { name: "minutesForDebate", type: "uint256" },
      { name: "marginOfVotesForMajority", type: "int256" },
      { name: "congressLeader", type: "address" }
    ],
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "proposalID", type: "uint256" },
      { indexed: false, name: "recipient", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "description", type: "string" }
    ],
    name: "ProposalAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "proposalID", type: "uint256" },
      { indexed: false, name: "position", type: "bool" },
      { indexed: false, name: "voter", type: "address" },
      { indexed: false, name: "justification", type: "string" }
    ],
    name: "Voted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "proposalID", type: "uint256" },
      { indexed: false, name: "result", type: "int256" },
      { indexed: false, name: "quorum", type: "uint256" },
      { indexed: false, name: "active", type: "bool" }
    ],
    name: "ProposalTallied",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "member", type: "address" }],
    name: "MembershipChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "minimumQuorum", type: "uint256" },
      { indexed: false, name: "debatingPeriodInMinutes", type: "uint256" },
      { indexed: false, name: "majorityMargin", type: "int256" }
    ],
    name: "ChangeOfRules",
    type: "event"
  })
];
