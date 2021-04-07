import React from "react";
import getTexto from "../libs/messages";

function Avatar(props) {
  let { user, toLogOut } = props;

  return (
    <div className="session" id="sessionAvatar">
      <div className="session_data">
        <small>{user.fullName} </small>
        <a
          onClick={(e) => {
            e.preventDefault();
            toLogOut();
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
