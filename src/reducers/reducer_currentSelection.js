// select the current (in focus) block
const selection = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_BLOCK":
      return action.payload;
    case "RESET_STATE":
      return {}
    default:
      return state;
  }
};

export default selection;
