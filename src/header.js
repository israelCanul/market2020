import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { getCategories } from "./libs/api";
import getTexto from "./libs/messages";

// import { getCookieForm } from "./libs/cookieManager";
const Avatar = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/SessionAvatarHeader")
);
const Searcher = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/searcher")
);
const renderLoader = () => <p>Loading</p>;

import { hot } from "react-hot-loader"; //quitar para probar en IE [IEISSUE]
import "../scss/Layout.module.scss";
import "../scss/components/searcher.scss";

function Header({ cat }) {
  const [categories, setCat] = useState("");
  let renderCats = cat.map((item, index) => {
    return (
      <option key={item.SCategoryCode} value={index}>
        {item.SCategoryDesc.toLowerCase()}
      </option>
    );
  });

  return (
    <Suspense fallback={renderLoader()}>
      <React.Fragment>
        <div className="searcher">
          <div className="searcher_categories">
            <div className="searcher_categories_label">
              <span>
                {categories != ""
                  ? categories.SCategoryDesc.toLowerCase()
                  : getTexto("All Categories")}
              </span>
              <img src="/img/icon_down_black.png" alt="Icon Down" />
            </div>
            <select
              onChange={(e) => {
                console.log("pusheado");

                setCat(cat[e.target.value]);
              }}
              name=""
              id="categories"
            >
              <option key="0-cat" value="all">
                All Store
              </option>
              {renderCats}
            </select>
          </div>
          <Searcher category={categories} />
        </div>
        {/* Se renderiza el componente en su seccion correspondiente*/}
        {ReactDOM.createPortal(
          <Avatar />,
          document.getElementById("sessionAvatar")
        )}
      </React.Fragment>
    </Suspense>
  );
}

hot(module)(Header); //quitar para probar en IE [IEISSUE]

function gettingInfo() {
  let getCat = getCategories();

  // if (getCookieForm("perro") != "" && getCookieForm("perro") != "") {
  ReactDOM.render(<Header cat={getCat} />, document.getElementById("Header"));
  // } else {
  //   setTimeout(function () {
  //     gettingInfo();
  //   }, 500);
  // }
}
gettingInfo();
