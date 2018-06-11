// Select the new current block to be in focus
export const selectBlock = block => {
  return {
    type: "SELECT_BLOCK",
    payload: block
  };
};

// Add a new block to blocks - only called by websockets.js
export const addBlock = block => {
  return {
    type: "ADD_BLOCK",
    payload: block
  };
};

// Update the transaction count
export const updateTransactionCount = count => {
  return {
    type: "UPDATE_TRANSACTION_COUNT",
    payload: count
  }
}
