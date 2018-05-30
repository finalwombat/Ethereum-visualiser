import { combineReducers } from 'redux'
// import BlocksReducer from './reducer_blocks'
import selection from './reducer_currentSelection'

export default combineReducers({
    currentSelection: selection
})