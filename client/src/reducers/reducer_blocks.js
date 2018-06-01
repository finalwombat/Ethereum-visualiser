// Add a new block to the blocks array - only called by websocket.js
const blocks = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOCK":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default blocks;
