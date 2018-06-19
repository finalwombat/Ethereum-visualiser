import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Listener from "./middleware/websockets";
import watch from 'redux-watch';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let listener = new Listener(store, "mainnet");
listener.start();
// websocket connection to update blocks
const w = watch(store.getState, 'currentNetwork')
store.subscribe(w((newVal, oldVal, objectPath) => {
  if(newVal !== oldVal){
    listener.stop();
    listener = new Listener(store, newVal);
    listener.start();
  }
}))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
