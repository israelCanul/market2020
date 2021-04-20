import React, { useState } from "react";
import "../../scss/components/asideMenu.scss";
import getTexto from "../libs/messages";
import AvatarNoLogged from "../components/SessionMenuNoLogged";
import AvatarLogged from "../components/SessionMenuLogged";
import { Link } from "react-router-dom";

export default function Menu({
  cat,
  config,
  user,
  toLoginUser,
  logoutUser,
  cart,
}) {
  const [menuCat, setMenuCat] = useState("");
  const [subMenuCat, setSubMenuCat] = useState("");
  let close = () => {
    document.querySelector("body").className = " asideOpen closing";
    setTimeout(() => {
      document.querySelector("body").className = "";
    }, 300);
    setMenuCat("");
  };
  let renderCats = cat.map((item, index) => {
    return (
      <div
        onClick={(e) => {
          setMenuCat(item);
          setTimeout(() => {
            document.querySelector("body").className =
              "asideOpen categorySelected";
          }, 100);
        }}
        className="category"
        key={item.SCategoryCode}
        value={index}
      >
        <span>{item.SCategoryDesc.toLowerCase()}</span>
        {item.LsGroup.length > 0 ? (
          <img
            width="7"
            height="11"
            src="\img\icons\arrow_right_black.png"
            alt="Arrow Right Black"
          />
        ) : (
          ""
        )}
      </div>
    );
  });
  let renderSubCats = () => {
    let renderresponse = "";
    if (menuCat != "") {
      renderresponse = menuCat.LsGroup.map((item, index) => {
        return (
          <Link
            onClick={() => {
              close();
            }}
            to={`/categories/${menuCat.SCategoryDesc.toLowerCase().replaceAll(
              " ",
              "-"
            )}/${item.SGroupDesc.toLowerCase().replaceAll(" ", "-")}`}
          >
            <div className="category" key={item.SGroupCode} value={index}>
              <span>{item.SGroupDesc.toLowerCase()}</span>
              <img
                width="7"
                height="11"
                src="\img\icons\arrow_right_black.png"
                alt="Arrow Right Black"
              />
            </div>
          </Link>
        );
      });
    }
    return renderresponse;
  };

  function openModal() {
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
      // props.toLoginUser(userToken);
    };
    window.open(
      config.urlToGetTokenToLogin +
        "?Code=" +
        config.codeToGetTokenToLogin +
        "&ReturnUrl=" +
        window.location.protocol +
        "//" +
        window.location.hostname +
        ":3000/redirect.html",
      "CNN_WindowName",
      strWindowFeatures
    );
  }

  return (
    <div className="asideMenu">
      <div className="asideMenu_menu">
        <div className="container">
          <div className="session">
            {user ? (
              <AvatarLogged
                closeAside={close}
                cart={cart}
                user={user}
                logoutUser={logoutUser}
              />
            ) : (
              <AvatarNoLogged
                closeAside={close}
                cart={cart}
                toLoginUser={toLoginUser}
                config={config}
              />
            )}
          </div>
          <div className="categories">
            <div className="categories_content">
              <div className="title">{getTexto("Shop by Category")}</div>
              {renderCats}
            </div>
            <div className="categories_subcontent">
              <div
                className="goback"
                onClick={(e) => {
                  document.querySelector("body").className = "asideOpen";
                  setTimeout(() => {
                    setMenuCat("");
                  }, 100);
                }}
              >
                <img
                  width="19"
                  height="17"
                  src="\img\icons\icon_go_back.png"
                  alt="Arrow Go Back"
                />
                <span>{getTexto("Main Menu")}</span>
              </div>
              <div className="title subcategory">
                {menuCat != ""
                  ? menuCat.SCategoryDesc.toLowerCase()
                  : "No Subcategory"}
              </div>
              {renderSubCats()}
            </div>
          </div>
        </div>
      </div>
      <div onClick={close} className="background">
        <img
          onClick={close}
          width="24"
          height="24"
          className="close"
          src="/img/icons/icon_cancel_white.png"
          alt="Close Icon"
        />
      </div>
    </div>
  );
}
