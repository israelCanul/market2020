import ReactDOM from "react-dom";
import React from "react";
export default function Avatar(props) {
  return (
    <div className="session" id="sessionAvatar">
      <div className="session_data">
        <small> hello Israel canulsdasdasdasdsadasdasd </small>
        <a href="#">
          <small> lokin </small>
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
