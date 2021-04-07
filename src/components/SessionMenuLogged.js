import React from "react";
import getTexto from "../libs/messages";
import { Link } from "react-router-dom";
import getURL from "../libs/Routes";

function MenuLogged(props) {
  let { user, cart, logoutUser, closeAside } = props;

  return (
    <div className="Avatar">
      <div className="Avatar-Logged">
        <img src="/img/icons/avatar_anonimus.png" alt="Avatar Logged" />{" "}
        <small> Hello {user.fullName.toLowerCase()} </small>
      </div>
      <div className="Avatar-info">
        <h3>{getTexto("Your Account")}</h3>
        <ul>
          <li>
            <Link
              onClick={(e) => {
                closeAside();
              }}
              to={getURL("/cart-items")}
            >
              {getTexto("Items in your cart")}{" "}
              <strong>({cart.itemsCount})</strong>
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                closeAside();
              }}
              to={getURL("/shopping-history")}
            >
              {getTexto("Shopping history")}
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                logoutUser();
              }}
            >
              {getTexto("Log out")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MenuLogged;
