import React, { useState } from "react";
import getTexto from "../libs/messages";
import { getLanguage, SetLanguage } from "../libs/language";
import AvatarNoLogged from "../components/SessionAvatarNoLoggedHeader";
import Avatar from "../components/SessionAvatarLoggedHeader";
import Searcher from "../components/searcher";
import Menu from "../components/menumarket";
// import RoyalMenu from "../components/royalresortsHeader";
import { connect } from "react-redux";
import { SetUserFromGenesis, logoutUser } from "../actions/index";
import { useHistory,Link } from "react-router-dom";
import { RoyalHeader } from "rrhelpers";

//estilos
import "../../scss/modules/Header.module.scss";
import "../../scss/components/searcher.scss";

function Header({
  cat,
  setQP,
  datos,
  cart,
  SetUserFromGenesis,
  logoutUser,
  site,
  setLang,
}) {
  // const [language, setLanguage] = useState(site.language);
  const [categories, setCat] = useState("");
  let renderCats = cat.map((item, index) => {
    // ${item.SGroupDesc.toLowerCase().replaceAll(" ", "-")}
    return (
      <option key={item.SCategoryCode} value={index}>
        {/* <Link to={`/categories/${item.SCategoryDesc.toLowerCase().replaceAll(" ", "-")}`}> */}
        {item.SCategoryDesc.toLowerCase()}
        {/* </Link> */}
      </option>
    );
  });
  let history = useHistory();
  let setUrl = (itemsDesc = null) => {
    history.replace("/reloading");
    setTimeout(() => {
      history.replace(itemsDesc);
      setLang(getLanguage());
    }, 100);
  };

  return (
    <React.Fragment>
      <header className="header" id="Header">
        <div className="topmenu">
          <div className="topmenu_logo">
            <a href="https://www.royalresorts.com/">
              <img
                width="207"
                height="34"
                className="animate__animated"
                src="/img/logo_royal_resorts.png"
                alt="Logo Royal Resorts"
              />
            </a>
          </div>
          <div className="topmenu_side">
            {getLanguage() == "en-US" ? (
              <img
                onClick={(e) => {
                  SetLanguage("es-MX", function () {
                    //setUrl(window.location.pathname);
                  });
                }}
                width="17"
                height="11"
                style={{ height: "15px", margin: "4px 9px" }}
                className=""
                src="/img/icons/es_flag.jpg"
                alt="Es Flag"
              />
            ) : (
              <img
                onClick={(e) => {
                  SetLanguage("en-US", function () {
                    //setUrl(window.location.pathname);
                  });
                }}
                width="17"
                height="11"
                style={{ height: "15px", margin: "4px 9px" }}
                className=""
                src="/img/icons/en_flag.jpg"
                alt="En Flag"
              />
            )}
            <img
              onClick={(e) => {
                if (
                  document
                    .querySelector("body")
                    .classList.contains("menuroyalOpen")
                ) {
                  document
                    .querySelector("body")
                    .classList.remove("menuroyalOpen");
                } else {
                  document.querySelector("body").classList.add("menuroyalOpen");
                }
              }}
              width="26"
              height="24"
              className=""
              src="/img/menu_royal.png"
              alt="Menu Royal Resorts"
            />
          </div>
        </div>
        {/* <RoyalMenu /> */}
        <RoyalHeader language={getLanguage()} />
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
                    //pushing the category section url to the react router DOM
                    history.replace(
                      "/categories/" +
                        cat[
                          e.target.value
                        ].SCategoryDesc.toLowerCase().replaceAll(" ", "-")
                    );
                    // setCat(cat[e.target.value]);
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
              <Searcher setQP={setQP} datos={datos} category={categories} />
            </div>
          </div>
          <div className="menu_logo">
            <Link to="/">
              <img
                src="/img/logo_market.png"
                alt="Logo Royal Market"
                width="122"
                height="39"
              />
            </Link>
          </div>
          <div className="menu_session">
            {site.user ? (
              <Avatar toLogOut={logoutUser} user={site.user} />
            ) : site.initialConfig ? (
              <AvatarNoLogged
                config={site.initialConfig}
                toLoginUser={SetUserFromGenesis}
              />
            ) : (
              ""
            )}
          </div>
          <div className="menu_cart">
            <Link to="/cart-items">
              <span className="numberItems">{cart.itemsCount}</span>
              <img
                width="35"
                height="30"
                src="/img/cart_icon.png"
                alt="Logo Royal Market"
              />
            </Link>
          </div>
        </div>
        <Menu
          logoutUser={logoutUser}
          cart={cart}
          cat={cat}
          toLoginUser={SetUserFromGenesis}
          config={site.initialConfig}
          user={site.user}
        />
      </header>
      <div className="mobilesearch">
        <Searcher setQP={setQP} datos={datos} category={categories} />
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    site: state.site,
  };
};

export default connect(mapStateToProps, { SetUserFromGenesis, logoutUser })(
  Header
);
