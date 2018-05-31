import { combineReducers } from 'redux'

// const block = (state, action) => {
//     switch (action.type) {
//         case 'ADD_BLOCK':
//             return {
//                 id: action.id,
//                 data: action.block
//             }
//         default:
//             return state
//     }
// }

const blocks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BLOCK': 
            return [
                ...state,
                action.payload
            ]
        default: 
            return state
    }
}


// const BlocksReducer = combineReducers(block, blocks)
export default blocks

// state = {
//     blocks: [],
//     transactions: [],
//     currentBlocK: 'id',
//     currentTransaction: 'id'
// }
