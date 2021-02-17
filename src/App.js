import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import "../scss/App.scss";
import { getCategories } from "./libs/api";
import getTexto from "./libs/messages";

const renderLoader = () => <p>Loading</p>;
const Header = lazy(() => import(/* webpackPrefetch: true */ "./header"));
const Footer = lazy(() => import(/* webpackPrefetch: true */ "./footer"));
const Slide = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/slide")
);
const Sections = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/sections")
);
const GenericSection = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/genericsection")
);
const ListItems = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/list_items")
);
const Related = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/relatedproducts")
);
const BacktoTop = lazy(() =>
  import(/* webpackPrefetch: true */ "./components/backtotop")
);

function App() {
  let getCat = getCategories();
  return (
    <React.Fragment>
      <Suspense fallback={renderLoader()}>
        <Header cat={getCat} />
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
              <Slide />
              <Sections />
              <ListItems />
              <GenericSection className="row">
                <div className="section x12">
                  <img
                    className="img"
                    src="img/home/tracker_image.jpg"
                    srcSet="img/home/tracker_image_500_x_167.jpg 767w, img/home/tracker_image_768_x_257.jpg 1200w, img/home/tracker_image.jpg 1900w"
                    alt="Tracker Image"
                  />
                </div>
                <div className="section x4">
                  <a href="#">
                    <img
                      className="img"
                      src="img/home/Golf-Rent.jpg"
                      alt="Section Image"
                    />
                  </a>
                </div>
              </GenericSection>
              <Related />
            </div>
          </div>
        </div>
        <BacktoTop />
        <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default hot(module)(App);
