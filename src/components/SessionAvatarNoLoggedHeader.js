import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import getTexto from "../libs/messages";
import { openModalForLogin } from "../libs/helpers";

export default function AvatarNoLogged(props) {
  // function openModal() {
  //   window.output = document.getElementById("output");
  //   var left = screen.width / 2 - 400 / 2;
  //   var top = screen.height / 2 - 600 / 2;
  //   var strWindowFeatures =
  //     "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top=" +
  //     top +
  //     ", left=" +
  //     left +
  //     "";
  //   window["output"] = function (userToken) {
  //     props.toLoginUser(userToken);
  //   };
  //   window.open(
  //     props.config.urlToGetTokenToLogin +
  //       "?Code=" +
  //       props.config.codeToGetTokenToLogin +
  //       "&ReturnUrl=" +
  //       window.location.protocol +
  //       "//" +
  //       window.location.hostname +
  //       ":3000/redirect.html",
  //     "CNN_WindowName",
  //     strWindowFeatures
  //   );
  // }

  return (
    <div className="session" id="sessionAvatar">
      <div className="session_data">
        {/* <small> hello Anonimus </small> */}
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
