import React from "react";
import getTexto from "../libs/messages";
export default function BacktoTop() {
  return (
    <div className="BacktoTop">
      <div
        className="btnBack"
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }}
      >
        <img width="12" height="7" src="img/icons/arrow_up.png" alt="Icon Up" />
        <span> {getTexto("Back to Top")}</span>
      </div>
    </div>
  );
}
