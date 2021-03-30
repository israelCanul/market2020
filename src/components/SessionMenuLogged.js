import { divide } from "lodash";
import React from "react";
import getTexto from "../libs/messages";
import { openModalForLogin } from "../libs/helpers";

function MenuLogged(props) {
  let { user } = props;
  return (
    <div className="Avatar">
      <div className="Avatar-Logged">
        <small> Hello {user.fullName} </small>
      </div>
      <div className="Avatar-info">
        <h3>{getTexto("Your Account")}</h3>
        <ul>
          <li>{getTexto("Items in your cart")}</li>
          <li>{getTexto("History")}</li>
          <li>{getTexto("Log out")}</li>
        </ul>
      </div>
    </div>
  );
}
export default MenuLogged;
