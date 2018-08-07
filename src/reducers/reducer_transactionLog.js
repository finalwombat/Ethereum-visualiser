// Update transaction log
const transactionLog = (state = [], action) => {
    switch (action.type) {
      case "UPDATE_TRANSACTION_COUNT":
        return [...state, action.payload]
      case "RESET_STATE":
        return []
      default:
        return state;
    }
  };
  
  export default transactionLog;