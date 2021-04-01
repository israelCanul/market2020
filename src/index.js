import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import reducers from "./reducers";

import App from "./App.js";
import axios from "axios";

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
      let one = response.data.urlAPI + "/Shopping/getCatalogItemsJson";
      let two = response.data.urlAPI + "/Shopping/getCategories";

      const requestOne = axios.get(one);
      const requestTwo = axios.get(two);

      axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            console.log(responseOne, responseTwo);
            console.log(responseOne.data.length);
            if (responseOne.data && responseTwo.data) {
              ReactDOM.render(
                <Provider store={createStoreWithMiddleware(reducers)}>
                  <App
                    config={response.data}
                    categories={responseTwo.data}
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

      // axios
      //   .get(response.data.urlAPI + "/Shopping/getCatalogItemsJson")
      //   .then((resp) => {
      //     if (resp.data) {
      //       ReactDOM.render(
      //         <Provider store={createStoreWithMiddleware(reducers)}>
      //           <App config={response.data} items={resp.data} />
      //         </Provider>,
      //         document.getElementById("App")
      //       );
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    }
  })
  .catch((err) => {
    console.error(err);
  });

// ReactDOM.render(<App />, document.getElementById("App"));
