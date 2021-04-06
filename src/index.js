import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App.js";
import axios from "axios";

import { getCategories } from "./libs/api";

const asyncDispatchMiddleware = (store) => (next) => (action) => {
  let syncActivityFinished = false;
  let actionQueue = [];
  function flushQueue() {
    actionQueue.forEach((a) => store.dispatch(a)); // flush queue
    actionQueue = [];
  }
  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);
    if (syncActivityFinished) {
      flushQueue();
    }
  }
  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });
  const res = next(actionWithAsyncDispatch);
  syncActivityFinished = true;
  flushQueue();
  return res;
};
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  asyncDispatchMiddleware
)(createStore);
axios
  .get("/config.json")
  .then((response) => {
    if (response.data) {
      let one =
        response.data.urlAPI +
        `/${response.data.WebSection}` +
        "/Shopping/getCatalogItemsJson"; //webservices
      // let one = "/items.json";
      let two =
        response.data.urlAPI +
        `/${response.data.WebSection}` +
        "/Shopping/getCategories"; //webservices

      const requestOne = axios.get(one);
      const requestTwo = axios.get(two); //webservices

      axios
        .all([requestOne, requestTwo]) //webservices
        // .all([requestOne])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1]; //webservices
            if (responseOne.data && responseTwo.data) {
              //webservices
              // if (responseOne.data) {
              ReactDOM.render(
                <Provider store={createStoreWithMiddleware(reducers)}>
                  <App
                    config={response.data}
                    categories={responseTwo.data} //Webservices
                    // categories={getCategories()}
                    items={responseOne.data}
                  />
                </Provider>,
                document.getElementById("App")
              );
            }
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    }
  })
  .catch((err) => {
    console.error(err);
  });
