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
const Menu = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/menumarket")
);
const renderLoader = () => <p>Loading</p>;

import { hot } from "react-hot-loader"; //quitar para probar en IE [IEISSUE]
import "../scss/modules/Header.module.scss";
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
        <div className="topmenu">
          <div className="topmenu_logo">
            <img
              width="207"
              height="34"
              className="animate__animated"
              src="/img/logo_royal_resorts.png"
              alt="Logo Royal Resorts"
            />
          </div>
          <div className="topmenu_side">
            <img
              width="26"
              height="24"
              className=""
              src="/img/menu_royal.png"
              alt="Menu Royal Resorts"
            />
          </div>
        </div>
        <div className="menu">
          <div className="menu_hamburger">
            <img
              width="32"
              height="20"
              src="/img/hamburger_icon.png"
              onClick={(e) => {
                document.querySelector("body").className = "asideOpen";
              }}
              alt="Hamburger Icon"
            />
          </div>
          <div className="menu_searcher">
            <div className="searcher">
              <div className="searcher_categories">
                <div className="searcher_categories_label">
                  <span>
                    {categories != ""
                      ? categories.SCategoryDesc.toLowerCase()
                      : getTexto("All Categories")}
                  </span>
                  <img
                    width="12"
                    height="7"
                    src="/img/icon_down_black.png"
                    alt="Icon Down"
                  />
                </div>
                <select
                  onChange={(e) => {
                    setCat(cat[e.target.value]);
                  }}
                  name=""
                  id="categories"
                >
                  <option key="0-cat" value="all">
                    {getTexto("All Categories")}
                  </option>
                  {renderCats}
                </select>
              </div>
              <Searcher category={categories} />
            </div>
          </div>
          <div className="menu_logo">
            <a>
              <img
                src="/img/logo_market.png"
                alt="Logo Royal Market"
                width="122"
                height="39"
              />
            </a>
          </div>
          <div className="menu_session">
            <Avatar />
          </div>
          <div className="menu_cart">
            <span className="numberItems">45</span>
            <img
              width="35"
              height="30"
              src="/img/cart_icon.png"
              alt="Logo Royal Market"
            />
          </div>
        </div>
        <Menu cat={cat} />
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
