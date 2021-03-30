import { divide } from "lodash";
import React from "react";
import getTexto from "../libs/messages";
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
          }}
        >
          <p>{getTexto("log In")}</p>
        </a>
      </div>
    </div>
  );
}
export default MenuNoLogged;
