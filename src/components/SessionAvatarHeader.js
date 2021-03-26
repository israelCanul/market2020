import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

export default function Avatar(props) {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (user != "") {
      console.log("si entro al state");
      props.toLoginUser(user);
    }
  });
  function openModal() {
    // setUser("mitoken");
    window.output = document.getElementById("output");
    var left = screen.width / 2 - 400 / 2;
    var top = screen.height / 2 - 600 / 2;
    var strWindowFeatures =
      "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top=" +
      top +
      ", left=" +
      left +
      "";
    window["output"] = function (userToken) {
      setUser(userToken);
    };
    window.open(
      "https://wqasweb.royalresorts.com/RRLogin/frmLogin.aspx?Code=RRKSK&ReturnUrl=" +
        window.location.protocol +
        "//" +
        window.location.hostname +
        ":3000/redirect.html",
      "CNN_WindowName",
      strWindowFeatures
    );

    // window.open(
    //   "https://wqasweb.royalresorts.com/RRLogin/frmLogin.aspx?Code=RRKSK&ReturnUrl=http://localhost:3000/",
    //   "",
    //   "width=350,height=400"
    // );
  }

  return (
    <div className="session" id="sessionAvatar">
      <div className="session_data">
        <small> hello Israel canulsdasdasdasdsadasdasd </small>
        <a
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
          href="#"
        >
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
