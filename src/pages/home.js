import React from "react";
import getTexto from "../libs/messages";
import ThemeContext from "../context/itemsContext";

import Slide from "../components/slide";
import Sections from "../components/sections";
import GenericSection from "../components/genericsection";
import ListItems from "../components/list_items";
import { connect } from "react-redux";
import { SetUserFromGenesis, logoutUser } from "../actions/index";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function App(props) {
  let { site, cart } = props;
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div id="root">
          <Helmet>
            ‍<title>Royal Market - Royal Resorts</title>‍
            <meta name="description" content="All products in a single place" />
          </Helmet>
          <div className="App">
            <div className="pleca">
              <img
                src="img/icons/icon_pleca72.png"
                width="37"
                height="30"
                alt="Icon Pleca"
                srcSet="img/icons/icon_pleca72.png 500w,img/icons/icon_pleca_111x90.png 768w"
              />
              <div className="container">
                <p>
                  <span className="blanco">
                    {getTexto("Shop before you arrive and")}
                  </span>{" "}
                  <span className="verde">{getTexto("get 10% off")}</span>
                </p>
                {/* <a href="#">{getTexto("Order Now")}</a> */}
              </div>
            </div>
            <div className="main">
              <div className="main_container">
                <Slide slides={state.configuration.contenido.bannerHeader} />
              </div>
              <Sections
                toLoginUser={SetUserFromGenesis}
                site={site}
                cart={cart}
                state={state}
                dataSite={state.configuration}
              />
              <ListItems state={state} params={{}} />
              <GenericSection className="row">
                <div className="section x12">
                  {site.configuration.contenido.bannerBottom ? (
                    <a href={site.configuration.contenido.bannerBottom.url}>
                      <picture loading="lazy">
                        {site.configuration.contenido.bannerBottom.imgM !=
                        "" ? (
                          <source
                            media="(max-width: 767px)"
                            srcSet={`${site.configuration.contenido.bannerBottom.imgM}`}
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width: 767px)"
                          srcSet={`${site.configuration.contenido.bannerBottom.img}`}
                        />
                        <LazyLoadImage
                          className="img"
                          src={site.configuration.contenido.bannerBottom.img}
                          alt="Big Image Banner Bottom"
                        />
                      </picture>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="section x4">
                  {site.configuration.contenido.imgBeforeFooter ? (
                    <a href={site.configuration.contenido.imgBeforeFooter.url}>
                      {/* <LazyLoadImage
                        className="img"
                        src={site.configuration.contenido.imgBeforeFooter.img}
                        alt="Image Before Footer"
                      /> */}

                      <picture loading="lazy">
                        {site.configuration.contenido.imgBeforeFooter.imgM !=
                        "" ? (
                          <source
                            media="(max-width: 767px)"
                            srcSet={`${site.configuration.contenido.imgBeforeFooter.imgM}`}
                          />
                        ) : (
                          ""
                        )}
                        <source
                          media="(min-width: 767px)"
                          srcSet={`${site.configuration.contenido.imgBeforeFooter.img}`}
                        />
                        <LazyLoadImage
                          className="img"
                          src={site.configuration.contenido.imgBeforeFooter.img}
                          alt="Image Banner Bottom"
                        />
                      </picture>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </GenericSection>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    site: state.site,
  };
};

export default connect(mapStateToProps, { SetUserFromGenesis, logoutUser })(
  App
);
