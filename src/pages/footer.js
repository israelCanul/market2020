import React from "react";
import GenericSection from "../components/genericsection";
import { getLanguage } from "../libs/language";

import "../../scss/modules/Footer.module.scss";

export default function Footer() {
  if (getLanguage() == "en-US") {
    return (
      <footer className="footer">
        <GenericSection className="row">
          <div className="section">
            <img
              src="https://www.royalresorts.com/wp-content/uploads/2020/09/dowload-app-reporter.jpg"
              alt=""
            />
          </div>
          <div className="section">
            <h3 className="footer_title">Resorts in Mexico</h3>
            <ul id="menu-resorts" className="menu">
              <li
                id="menu-item-36817"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36817"
              >
                <a href="https://www.royalresorts.com/discover-royal-resorts/royal-uno/">
                  Royal Uno
                </a>
              </li>
              <li
                id="menu-item-16270"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16270"
              >
                <a href="https://www.royalresorts.com/beachfront-resorts/the-royal-cancun">
                  The Royal Cancun
                </a>
              </li>
              <li
                id="menu-item-16275"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16275"
              >
                <a href="https://www.royalresorts.com/beachfront-resorts/the-royal-sands">
                  The Royal Sands
                </a>
              </li>
              <li
                id="menu-item-16274"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16274"
              >
                <a href="https://www.royalresorts.com/beachfront-resorts/the-royal-islander">
                  The Royal Islander
                </a>
              </li>
              <li
                id="menu-item-16272"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16272"
              >
                <a href="https://www.royalresorts.com/beachfront-resorts/grand-residences-riviera-cancun">
                  Grand Residences Riviera Cancun
                </a>
              </li>
              <li
                id="menu-item-16273"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16273"
              >
                <a href="https://www.royalresorts.com/beachfront-resorts/the-royal-haciendas">
                  The Royal Haciendas
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            {/* second column [INICIO] */}
            <h3 className="footer_title">Services & Amenities</h3>
            <ul id="menu-services-amenities" className="menu">
              <li
                id="menu-item-16201"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16201"
              >
                <a href="https://www.royalresorts.com/all-inclusive">
                  All-Inclusive
                </a>
              </li>
              <li
                id="menu-item-16343"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16343"
              >
                <a href="https://www.royalresorts.com/weddings-and-special-events">
                  Weddings & Special Events
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.thomasmoretravel.com/Transfers/Transfers/Search">
                  Airport Transportation
                </a>
              </li>
            </ul>
            <h3 className="footer_title">Our Company</h3>
            <ul id="menu-services-amenities" className="menu">
              <li
                id="menu-item-16201"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16201"
              >
                <a href="https://www.royalresorts.com/about-royal-resorts">
                  About Royal Resorts
                </a>
              </li>
              <li
                id="menu-item-16343"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16343"
              >
                <a href="https://www.royalresorts.com/signature-club">
                  Membership Benefits
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.royalresorts.com/blog/">
                  Royal Resorts Blog
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.royalresorts.com/foundation">
                  Royal Resorts Foundation
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://royalcarestandard.com/">Royal Care Standard</a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.royalresorts.com/privacy-policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            {/** Tercera columna */}
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/special-offers"
              >
                Offers
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/best-deal-guaranteed"
              >
                Best Rate Guaranteed
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/beach-destinations"
              >
                Beach Destinations
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/my-royal/login"
              >
                My Royal
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/members-login"
              >
                Members
              </a>
            </h3>
            <h3 className="footer_title">
              <a className="footer_title" href="https://rrsignatureclub.com/">
                Signature Club
              </a>
            </h3>
          </div>
        </GenericSection>
        <GenericSection className="row">
          {/* <div className="section">
            <h3 className="footer_title">Our family</h3>
            <div className="family">
              <div
                className="glide__slide glide__slide--active"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <a
                  target="_blank"
                  href="https://grandresidencesrivieracancun.com/"
                >
                  <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
                </a>
              </div>
              <div
                className="glide__slide"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <a target="_blank" href="http://royalreservations.com/">
                  <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
                </a>
              </div>
              <div
                className="glide__slide"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
              </div>
              <div
                className="glide__slide"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <a
                  target="_blank"
                  href="https://royalmarket.royalresorts.com/ "
                >
                  <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
                </a>
              </div>
              <div
                className="glide__slide"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <a target="_blank" href="http://thomasmoretravel.com/">
                  <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
                </a>
              </div>
              <div
                className="glide__slide"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <a target="_blank" href="https://rrsignatureclub.com/">
                  <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
                </a>
              </div>
              <div
                className="glide__slide glide__slide--clone"
                style={{
                  width: "148.769px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <a target="_blank" href="https://royalunoresort.com/">
                  <img src="https://www.royalresorts.com/img/sprite.svg#sprite-logo-grandresidences" />
                </a>
              </div>
            </div>
          </div> */}
        </GenericSection>
      </footer>
    );
  } else {
    return (
      <footer className="footer">
        <GenericSection className="row">
          <div className="section">
            <img
              src="https://www.royalresorts.com/wp-content/uploads/2020/09/dowload-app-reporter.jpg"
              alt=""
            />
          </div>
          <div className="section">
            <h3 className="footer_title">Resorts en México</h3>
            <ul id="menu-resorts" className="menu">
              <li
                id="menu-item-36817"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36817"
              >
                <a href="https://www.royalresorts.com/es/hoteles-de-playa/royal-uno">
                  Royal Uno
                </a>
              </li>
              <li
                id="menu-item-16270"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16270"
              >
                <a href="https://www.royalresorts.com/es/hoteles-de-playa/the-royal-cancun">
                  The Royal Cancun
                </a>
              </li>
              <li
                id="menu-item-16275"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16275"
              >
                <a href="https://www.royalresorts.com/es/hoteles-de-playa/the-royal-sands">
                  The Royal Sands
                </a>
              </li>
              <li
                id="menu-item-16274"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16274"
              >
                <a href="https://www.royalresorts.com/es/hoteles-de-playa/the-royal-islander">
                  The Royal Islander
                </a>
              </li>
              <li
                id="menu-item-16272"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16272"
              >
                <a href="https://www.royalresorts.com/es/hoteles-de-playa/grand-residences-riviera-cancun">
                  Grand Residences Riviera Cancun
                </a>
              </li>
              <li
                id="menu-item-16273"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16273"
              >
                <a href="https://www.royalresorts.com/es/hoteles-de-playa/the-royal-haciendas">
                  The Royal Haciendas
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            {/* second column [INICIO] */}
            <h3 className="footer_title">Servicios y Amenidades</h3>
            <ul id="menu-services-amenities" className="menu">
              <li
                id="menu-item-16201"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16201"
              >
                <a href="https://www.royalresorts.com/es/todo-incluido">
                  Todo Incluido
                </a>
              </li>
              <li
                id="menu-item-16343"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16343"
              >
                <a href="https://www.royalresorts.com/es/bodas-y-eventos-especiales">
                  Bodas y Eventos
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.thomasmoretravel.com/Transfers/Transfers/Search">
                  Transportación al aeropuerto
                </a>
              </li>
            </ul>
            <h3 className="footer_title">Nuestra Compañía</h3>
            <ul id="menu-services-amenities" className="menu">
              <li
                id="menu-item-16201"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16201"
              >
                <a href="https://www.royalresorts.com/es/acerca-de-royal-resorts">
                  Acerca de Royal Resorts
                </a>
              </li>
              <li
                id="menu-item-16343"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16343"
              >
                <a href="https://www.royalresorts.com/es/signature-club">
                  Beneficios de la membresía
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.royalresorts.com/blog/es/">Blog</a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.royalresorts.com/es/fundacion">
                  Fundación Royal Resorts
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://royalcarestandard.com/es">
                  Royal Care Standard
                </a>
              </li>
              <li
                id="menu-item-16351"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
              >
                <a href="https://www.royalresorts.com/es/politica-de-privacidad">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            {/** Tercera columna */}
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/es/ofertas-especiales"
              >
                Ofertas
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/es/mejor-oferta-garantizada"
              >
                Mejor precio garantizado
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/es/destinos-de-playa"
              >
                Destinos de Playa
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/es/my-royal/inicio-de-sesion"
              >
                My Royal
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://www.royalresorts.com/es/socios-login"
              >
                Socios
              </a>
            </h3>
            <h3 className="footer_title">
              <a
                className="footer_title"
                href="https://rrsignatureclub.com/es/"
              >
                Signature Club
              </a>
            </h3>
          </div>
        </GenericSection>
      </footer>
    );
  }
}
