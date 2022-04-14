import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App.js";
import axios from "axios";
import { setTextToTraslateTool } from "./libs/messages";
import { getLanguageEndpoints } from "./libs/language";

// import { getCategories } from "./libs/api";

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
      let zero = "/traslations.json";

      let one =
        getLanguageEndpoints(
          response.data.urlAPI,
          response.data.urlAPIDev,
          response.data.WebSection
        ) + "/getCatalogItemsJson"; //webservices
      let two =
        getLanguageEndpoints(
          response.data.urlAPI,
          response.data.urlAPIDev,
          response.data.WebSection
        ) + "/getCategories"; //webservices
      const requestOne = axios({
        method: "get",
        url: one,
      });
      const requestTwo = axios({
        method: "get",
        url: two,
      }); //webservices
      const requestThree = axios.get(zero); //webservices

      axios
        .all([requestOne, requestTwo, requestThree]) //webservices
        // .all([requestOne])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1]; //webservices

            const responseThree = responses[2]; //webservices
            if (responseOne.data && responseTwo.data && responseThree.data) {
              //setear los textos al entorno local
              setTextToTraslateTool(responseThree.data);

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
