import { combineReducers } from "redux";
import blocks from "./reducer_blocks";
import selection from "./reducer_currentSelection";

export default combineReducers({
  blocks: blocks,
  currentSelection: selection
});
