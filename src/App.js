import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import "../scss/App.scss";
import { getCategories } from "./libs/api";
import getTexto from "./libs/messages";

const renderLoader = () => <p>Loading</p>;
const Slide = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/slide")
);
const Sections = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/sections")
);
const ListItems = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/list_items")
);

function App() {
  return (
    <div className="App">
      <div className="pleca">
        <img
          src="img/icons/icon_pleca72.png"
          width="37"
          height="30"
          alt="Icon Pleca"
          srcSet="img/icons/icon_pleca72.png 500w,img/icons/icon_pleca_111x90.png 768w"
        />
        <div className="container">
          <p>
            <span className="blanco">
              {getTexto("Shop before you arrive and")}
            </span>{" "}
            <span className="verde">{getTexto("get 10% off")}</span>
          </p>
          <a href="#">{getTexto("Order Now")}</a>
        </div>
      </div>
      <div className="main">
        <Suspense fallback={renderLoader()}>
          <Slide />
          <Sections />
          <ListItems />
        </Suspense>
      </div>
    </div>
  );
}

export default hot(module)(App);
