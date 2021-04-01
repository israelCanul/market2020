import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import getTexto from "../libs/messages";
import { openModalForLogin } from "../libs/helpers";

export default function AvatarNoLogged(props) {
  return (
    <div className="session" id="sessionAvatar">
      <div className="session_data">
        <small>{getTexto("Hello")}</small>
        <a
          onClick={(e) => {
            e.preventDefault();
            openModalForLogin(props.config, props.toLoginUser);
          }}
          href="#"
        >
          <small> {getTexto("log In")} </small>
        </a>
      </div>
      <div className="session_action">
        {props.logged ? (
          <img src="/img/icon_down.png" alt="Logo Royal Market" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
