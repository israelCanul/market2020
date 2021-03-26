import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import getTexto from "../libs/messages";

export default function Sections({ logged = null, dataSite = null }) {
  return (
    <div className={`main_container`}>
      <div className={`list grid row sections`}>
        {/* section 1 */}
        <div className="section">
          <div className="section_content">
            <div className="avatar_information">
              <img
                width="80"
                height="80"
                src="img/icons/avatar.png"
                alt="Image Avatar"
              />
              <span>
                Hi, <br />
                Peter Parker
              </span>
            </div>
            <div className="cart_information">
              <span>
                {getTexto("You have")} <strong>12</strong>{" "}
                {getTexto("items in your shopping cart")}
              </span>
              <img
                width="86"
                height="80"
                src="img/icons/cart_icon_2.png"
                alt="Cart Icon "
              />
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="section">
          <div className="section_content">
            <div className="information">
              <h3>{getTexto("Recommendations for you")}</h3>
            </div>
            <div className="img">
              <img
                width="66"
                height="157"
                src="img/home/ejem_recommendations_for_you.jpg"
                alt="Ejemplo Item"
              />
            </div>
            <div className="action_link">
              <a href="#">{getTexto("Add to cart")}</a>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="section">
          <div className="section_content">
            <div className="information">
              <h3>{getTexto("Inspired by your shopping history")}</h3>

              <p>
                {getTexto("There are")} <strong>{6}</strong>{" "}
                {getTexto("items waiting for you to add them to your cart")}
              </p>
            </div>
            <div className="img">
              <img src="img/home/ejem_inpired_by_your.jpg" alt="Ejemplo Item" />
            </div>
            <div className="action_link">
              <a href="#">{getTexto("Add to cart")}</a>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <div className="section">
          <div className="section_content">
            <div
              className="img-link"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href={dataSite.contenido.imgBelowSlide.url}>
                <LazyLoadImage
                  src={dataSite.contenido.imgBelowSlide.img}
                  alt="Image BelowSlide"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
