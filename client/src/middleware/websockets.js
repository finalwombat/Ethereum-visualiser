import { bindActionCreators } from "redux";
import { addBlock } from "../actions/index";

// listens for new blocks from server then dispatches action
export default function listener(dispatch) {
  const ws = new WebSocket("ws://localhost:5000");

  ws.onopen = () => {
    console.log("websocket is connected...");
    ws.send("connected");
  };
  ws.onmessage = message => {
    const data = JSON.parse(message.data);
    dispatch(addBlock(data));
  };
}
