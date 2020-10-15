import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import movieApp from "./redux/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(movieApp,  composeWithDevTools(applyMiddleware(thunk,)));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById("root"));
