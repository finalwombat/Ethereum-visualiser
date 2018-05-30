const selection = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_ITEM':
            return action.id
        default: 
            return state
    }
}

export default selection