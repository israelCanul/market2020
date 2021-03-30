import React from "react";
import getTexto from "../libs/messages";

function Avatar(props) {
  let { user } = props;
  return (
    <div className="session" id="sessionAvatar">
      <div className="session_data">
        <small> Hello {user.fullName} </small>
        <a
          onClick={(e) => {
            e.preventDefault();

            console.log("aqui va el intento de cierre de session");
          }}
          href="#"
        >
          <small> {getTexto("Log-out")} </small>
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

export default Avatar;
