// Set loading state
const isLoading = (state = true, action) => {
    switch (action.type) {
      case "ADD_BLOCK":
        return false
      case 'CLEAR_BLOCKS':
        return true
      default:
        return state;
    }
  };
  
  export default isLoading