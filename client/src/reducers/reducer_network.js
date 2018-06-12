// Select the network 
const currentNetwork = (state = "mainnet", action) => {
    switch (action.type) {
      case "SELECT_NETWORK":
        return action.payload
      default:
        return state;
    }
  };
  
  export default currentNetwork;