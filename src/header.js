import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./components/SessionAvatarHeader";
import Searcher from "./components/searcher";
import { getCookieForm } from "./libs/cookieManager";

import { hot } from "react-hot-loader"; //quitar para probar en IE [IEISSUE]
import "../scss/Layout.module.scss";
import "../scss/components/searcher.scss";

function Header() {
  let perro = "guau";
  let search = function (e) {};

  return (
    <React.Fragment>
      <div className="searcher">
        <div className="searcher_categories">
          <div className="searcher_categories_label">
            <span>Categoria selecteds</span>
            <img src="/img/icon_down_black.png" alt="Icon Down" />
          </div>
          <select name="" id="categories">
            <option value="all">All Store</option>
            <option value="cat1">Categoria s</option>
            <option value="cat2">Categoria 2</option>
            <option value="cat3">Categoria 3</option>
            <option value="cat4">Categoria 4</option>
            <option value="cat5">Categoria 5</option>
          </select>
        </div>
        <div className="searcher_input">
          <Searcher />
        </div>
        <div className="searcher_icon" onClick={search.bind(this)}>
          <img src="/img/icon_lupa.png" alt="Lupa Icon" />
        </div>
      </div>
      {/* Se renderiza el componente en su seccion correspondiente*/}
      {ReactDOM.createPortal(
        <Avatar />,
        document.getElementById("sessionAvatar")
      )}
    </React.Fragment>
  );
}

hot(module)(Header); //quitar para probar en IE [IEISSUE]

function gettingInfo() {
  console.log(getCookieForm("perro"));
  if (getCookieForm("perro") != "") {
    ReactDOM.render(<Header />, document.getElementById("Header"));
  } else {
    setTimeout(function () {
      gettingInfo();
    }, 500);
  }
}
gettingInfo();
