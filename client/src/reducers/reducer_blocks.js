// Add a new block to the blocks array - only called by websocket.js
const blocks = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOCK":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default blocks;
