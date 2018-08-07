import { combineReducers } from "redux";
import blocks from "./reducer_blocks";
import selection from "./reducer_currentSelection";
import transactionCount from "./reducer_updateTransactionCount";
import transactionLog from "./reducer_transactionLog";
import currentNetwork from './reducer_network';
import isLoading from './reducer_isLoading';

export default combineReducers({
  blocks: blocks,
  currentSelection: selection,
  transactionCount: transactionCount,
  transactionLog: transactionLog,
  currentNetwork: currentNetwork,
  isLoading: isLoading
});
