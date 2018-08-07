// Add a new block to the blocks array - only called by websocket.js
const blocks = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOCK":
      return addBlock(state, action.payload)
    case 'RESET_STATE':
      return []
    default:
      return state;
  }
};

export default blocks;

function addBlock(state, payload){

  // check that the block does not already exist in state
  return state.filter(block => block.number == payload.number).length ? 
    state :
    [payload, ...state]
}