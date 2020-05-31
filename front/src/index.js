import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";

const initialState = {
  company:{
    name:"",
    nit:"",
    owner:"",
    sector:"",
    preferences:{},
  },
  location:{
    city:"",
    country:""
  },
  logged:false,
  selectedAlly:null
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);