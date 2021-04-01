import { divide } from "lodash";
import React from "react";
import getTexto from "../libs/messages";
import { Link } from "react-router-dom";
import getURL from "../libs/Routes";
import { openModalForLogin } from "../libs/helpers";

function MenuNoLogged(props) {
  return (
    <div className="Avatar">
      <div className="Avatar-noLogged">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openModalForLogin(props.config, props.toLoginUser);
            props.closeAside();
          }}
        >
          <p>{getTexto("log In")}</p>
        </a>
      </div>
      <div className="Avatar-info">
        <ul>
          <li>
            <Link
              onClick={(e) => {
                props.closeAside();
              }}
              to={getURL("/cart-items")}
            >
              {getTexto("Items in your cart")}{" "}
              <strong>({props.cart.itemsCount})</strong>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MenuNoLogged;
