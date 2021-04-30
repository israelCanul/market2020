import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import getTexto from "../libs/messages";
import ShoppingHistory from "./user/shopping";
import Recommendations from "./user/recommendations";
import { Link } from "react-router-dom";
import getURL from "../libs/Routes";
import { openModalForLogin, openModalForRetrieveUser } from "../libs/helpers";

export default function Sections({
  site,
  cart,
  dataSite = null,
  state,
  toLoginUser,
}) {
  let openModalLogin = (e) => {
    e.preventDefault();
    openModalForLogin(site.initialConfig, toLoginUser);
  };
  let openModalRetrieveUser = (e) => {
    e.preventDefault();
    openModalForRetrieveUser(site.initialConfig, toLoginUser);
  };
  return (
    <div className={`main_container`}>
      <div className={`list grid row sections`}>
        {/* section 1 
          If the user info exists we display user info or unlogged info
        */}
        {site.user ? (
          <div className="section">
            <div className="section_content">
              <div className="avatar_information">
                <img
                  width="80"
                  height="80"
                  src="/img/icons/avatar_anonimus.png"
                  alt="Image Avatar"
                />
                <span>
                  Hi, <br />
                  {site.user.fullName.toLowerCase()}
                </span>
              </div>
              <div className="cart_information">
                <span>
                  {getTexto("You have")} <strong>{cart.itemsCount}</strong>{" "}
                  {getTexto("items in your shopping cart")}
                </span>
                <img
                  width="86"
                  height="80"
                  src="img/icons/cart_icon_2.png"
                  alt="Cart Icon "
                />
              </div>
              <div className="action_link">
                <Link to={getURL("/cart-items")}>{getTexto("Cart")}</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="section">
            <div className="section_content noLogged">
              <div className="avatar_information noLogged">
                <img
                  width="50"
                  height="50"
                  src="/img/hand_hi.png"
                  alt="Hand Image"
                />
                <span>
                  {getTexto("Hi")} <br />
                </span>
              </div>
              <div className="cart_information" style={{ flex: "none" }}>
                <span>
                  {getTexto("In order to give you a better experience please")}
                </span>
                <a className="btn naranja" onClick={openModalLogin}>
                  {getTexto("log In")}
                </a>
                <small>{getTexto("(with your member account)")}</small>
              </div>
              <div className="action_link">
                {getTexto("or")}{" "}
                <a onClick={openModalRetrieveUser} href="#">
                  {getTexto("Retrieve it here")}
                </a>
              </div>
            </div>
          </div>
        )}
        {/* section 2 */}
        <Recommendations state={state} site={site} cart={cart} />
        {/* section 3 */}
        <ShoppingHistory state={state} site={site} cart={cart} />
        {/* section 4 */}
        <div className="section">
          <div className="section_content">
            <div
              className="img-link"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                style={{ width: "100%", textAlign: "center" }}
                href={dataSite.contenido.imgBelowSlide.url}
              >
                <LazyLoadImage
                  style={{ width: "auto", maxHeight: "290px" }}
                  src={dataSite.contenido.imgBelowSlide.img}
                  alt="Image BelowSlide"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
