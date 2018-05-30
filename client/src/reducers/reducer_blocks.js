import { combineReducers } from 'redux'

const block = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOCK':
            return {
                id: action.id,
                data: action.block
            }
        default:
            return state
    }
}

const blocks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BLOCK': 
            return [
                ...state,
                block(undefined, action)
            ]
        case 'SET_CURRENT_BLOCK': 
            return action.id
        default: 
            return state
    }
}


const BlocksReducer = combineReducers(block, blocks)
export default BlocksReducer

state = {
    blocks: [],
    transactions: [],
    currentBlocK: 'id',
    currentTransaction: 'id'
}
