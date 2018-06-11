import { combineReducers } from "redux";
import blocks from "./reducer_blocks";
import selection from "./reducer_currentSelection";
import transactionCount from "./reducer_updateTransactionCount";

export default combineReducers({
  blocks: blocks,
  currentSelection: selection,
  transactionCount: transactionCount
});
