import React from "react";
import getTexto from "../../libs/messages";
import { Link } from "react-router-dom";
import { backToTop } from "../../libs/helpers";
import getURL from "../../libs/Routes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import _ from "lodash";

function ShoppingHistory(props) {
  if (props.site.user) {
    if (props.site.user.itemsHistory) {
      if (props.site.user.itemsHistory.length > 0) {
        return (
          <div className="section">
            <div className="section_content">
              <div className="information">
                <h3>{getTexto("Inspired by your shopping history")}</h3>
                <p>
                  {getTexto("There are")}{" "}
                  <strong>{props.site.user.itemsHistory.length}</strong>{" "}
                  {getTexto("items waiting for you to add them to your cart")}
                </p>
              </div>
              <div className="img">
                <LazyLoadImage
                  src={props.site.user.itemsHistory[0].SPahtImage}
                  style={{ maxHeight: "150px" }}
                  alt="Ejemplo Item"
                />
              </div>
              <div className="action_link">
                <Link to={getURL("/shopping-history")}>
                  {getTexto("View More")}
                </Link>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  if (props.site) {
    if (props.site.configuration) {
      if (props.site.configuration.contenido) {
        return (
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
                <a
                  style={{ width: "100%", textAlign: "center" }}
                  href={
                    props.site.configuration.contenido.imgBelowSlideNoLogged.url
                  }
                >
                  <picture loading="lazy">
                    {props.site.configuration.contenido.imgBelowSlideNoLogged
                      .imgM != "" ? (
                      <source
                        media="(max-width: 767px)"
                        srcSet={`${props.site.configuration.contenido.imgBelowSlideNoLogged.imgM}`}
                      />
                    ) : (
                      ""
                    )}
                    <source
                      media="(min-width: 767px)"
                      srcSet={`${props.site.configuration.contenido.imgBelowSlideNoLogged.img}`}
                    />
                    <LazyLoadImage
                      className="img"
                      src={
                        props.site.configuration.contenido.imgBelowSlideNoLogged
                          .img
                      }
                      alt="Image Instead User History"
                    />
                  </picture>
                  {/* <LazyLoadImage
                    style={{ width: "auto", maxHeight: "290px" }}
                    src={
                      props.site.configuration.contenido.imgBelowSlideNoLogged
                        .img
                    }
                    alt="Image BelowSlide No Logged"
                  /> */}
                </a>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return (
    <div className="section">
      <div className="section_content"></div>
    </div>
  );
}
export default ShoppingHistory;
