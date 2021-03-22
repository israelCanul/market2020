import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import reducers from "./reducers";

import App from "./App.js";
import axios from "axios";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

axios
  .get("/config.json")
  .then((response) => {
    if (response.data) {
      axios
        .get("/items.json")
        .then((resp) => {
          if (resp.data) {
            ReactDOM.render(
              <Provider store={createStoreWithMiddleware(reducers)}>
                <App config={response.data} items={resp.data} />
              </Provider>,
              document.getElementById("App")
            );
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  })
  .catch((err) => {
    console.error(err);
  });

// ReactDOM.render(<App />, document.getElementById("App"));
