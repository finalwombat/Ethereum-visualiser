// Update transaction count
const transactionCount = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_TRANSACTION_COUNT":
        return action.payload
      default:
        return state;
    }
  };
  
  export default transactionCount;