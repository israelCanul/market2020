import React from "react";
import getTexto from "../libs/messages";
import ThemeContext from "../context/itemsContext";

import Slide from "../components/slide";
import Sections from "../components/sections";
import GenericSection from "../components/genericsection";
import ListItems from "../components/list_items";

import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div id="root">
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
                <a href="#">{getTexto("Order Now")}</a>
              </div>
            </div>
            <div className="main">
              <div className="main_container">
                <Slide slides={state.configuration.contenido.bannerHeader} />
              </div>
              <Sections dataSite={state.configuration} />
              <ListItems state={state} params={{}} />
              <GenericSection className="row">
                <div className="section x12">
                  <img
                    className="img"
                    src="/img/home/tracker_image.jpg"
                    srcSet="img/home/tracker_image_500_x_167.jpg 767w, img/home/tracker_image_768_x_257.jpg 1200w, img/home/tracker_image.jpg 1900w"
                    alt="Tracker Image"
                  />
                </div>
                <div className="section x4">
                  <a href="#">
                    <LazyLoadImage
                      className="img"
                      src="/img/home/Golf-Rent.jpg"
                      alt="Section Image"
                    />
                    {/* <img
                      className="img"
                      src="/img/home/Golf-Rent.jpg"
                      alt="Section Image"
                    /> */}
                  </a>
                </div>
              </GenericSection>
              {/* <Related /> */}
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
