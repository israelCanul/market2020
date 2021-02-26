import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import axios from "axios";

axios
  .get("/items.json")
  .then((response) => {
    // console.log(response);
    if (response.data) {
      ReactDOM.render(
        <App items={response.data} />,
        document.getElementById("App")
      );
    }
  })
  .catch((err) => {});

// ReactDOM.render(<App />, document.getElementById("App"));
