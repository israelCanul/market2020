import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../scss/App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, Worlde! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
