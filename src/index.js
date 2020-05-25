import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ProductsReducer from './store/reducers/ProductsReducer';
import ProductDetailReducer from './store/reducers/ProductDetailReducer';
import CartReducer from './store/reducers/CartReducer';

import { createStore, applyMiddleware, combineReducers} from "redux";

const rootReducer = combineReducers({
   pdr :ProductDetailReducer,
   pr: ProductsReducer,
   cr: CartReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
