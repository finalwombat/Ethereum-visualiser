const selection = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_BLOCK':
            return action.payload
        default: 
            return state
    }
}

export default selection