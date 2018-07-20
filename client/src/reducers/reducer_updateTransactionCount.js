// Update transaction count
const transactionCount = (state = 0, action) => {
    switch (action.type) {
      case "UPDATE_TRANSACTION_COUNT":
        return action.payload
      default:
        return state;
    }
  };
  
  export default transactionCount;