import { bindActionCreators } from 'redux'
import { addBlock } from '../actions/index'

export default function listener(dispatch){
    const ws = new WebSocket("ws://localhost:5000");

    ws.onopen = () => {
      console.log("websocket is connected...");
      ws.send("connected");
    };
    ws.onmessage = ev => {
        console.log('new block')
      const data = JSON.parse(ev.data);
      dispatch(addBlock(data))
    };
}
