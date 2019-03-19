import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './components/App';
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import 'semantic-ui-css/semantic.min.css';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
  );
  
  // import React from 'react';
  // import ReactDOM from 'react-dom';
  // import './index.css';
  // import App from './components/App';
  // import * as serviceWorker from './serviceWorker';
  
  // import { Provider } from 'react-redux'
  // import { createStore } from 'redux'
  // import reducer from './reducers/reducers.js'
  // import {BrowserRouter,Route} from "react-router-dom"
  
  // const store = createStore(reducer)
  
  // ReactDOM.render(
  //     <Provider store={store}>
  // <BrowserRouter basename={process.env.PUBLIC_URL}>
  //     <Route component={App}></Route>
  //     </BrowserRouter>
  //     </Provider>,
  // document.getElementById('root'));
  
  // // If you want your app to work offline and load faster, you can change
  // // unregister() to register() below. Note this comes with some pitfalls.
  // // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister();
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
