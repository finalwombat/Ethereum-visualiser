export const selectBlock = (block) => {
    return {
        type: 'SELECT_BLOCK',
        payload: block
    }
    
}

export const addBlock = (block) => {
    return {
        type: 'ADD_BLOCK',
        payload: block
    }
}
