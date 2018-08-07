// Set loading state
const isLoading = (state = true, action) => {
    switch (action.type) {
      case "ADD_BLOCK":
        return false
      case 'RESET_STATE':
        return true
      default:
        return state;
    }
  };
  
  export default isLoading