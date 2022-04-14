import React from "react";
import GenericSection from "../components/genericsection";

import "../../scss/modules/Footer.module.scss";

export default function Footer({ language = "en-US" }) {
  return (
    <footer style={{ backgroundColor: "#579c02" }} className="footer">
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
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/discover-royal-resorts/royal-uno/"
                    : "https://www.royalresorts.com/es/hoteles-de-playa/royal-uno"
                }
              >
                {language == "en-US" ? "Royal Uno" : "Royal Uno"}
              </a>
            </li>
            <li
              id="menu-item-16270"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16270"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/beachfront-resorts/the-royal-cancun"
                    : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-cancun"
                }
              >
                {language == "en-US" ? "The Royal Cancun" : "The Royal Cancun"}
              </a>
            </li>
            <li
              id="menu-item-16275"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16275"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/beachfront-resorts/the-royal-sands"
                    : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-sands"
                }
              >
                {language == "en-US" ? "The Royal Sands" : "The Royal Sands"}
              </a>
            </li>
            <li
              id="menu-item-16274"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16274"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/beachfront-resorts/the-royal-islander"
                    : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-islander"
                }
              >
                {language == "en-US"
                  ? "The Royal Islander"
                  : "The Royal Islander"}
              </a>
            </li>
            <li
              id="menu-item-16272"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16272"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/beachfront-resorts/grand-residences-riviera-cancun"
                    : "https://www.royalresorts.com/es/hoteles-de-playa/grand-residences-riviera-cancun"
                }
              >
                {language == "en-US"
                  ? "Grand Residences Riviera Cancun"
                  : "Grand Residences Riviera Cancun"}
              </a>
            </li>
            <li
              id="menu-item-16273"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16273"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/beachfront-resorts/the-royal-haciendas"
                    : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-haciendas"
                }
              >
                {language == "en-US"
                  ? "The Royal Haciendas"
                  : "The Royal Haciendas"}
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
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/all-inclusive"
                    : "https://www.royalresorts.com/es/todo-incluido"
                }
              >
                {language == "en-US" ? "All-Inclusive" : "Todo Incluido"}
              </a>
            </li>
            <li
              id="menu-item-16343"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16343"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/weddings-and-special-events"
                    : "https://www.royalresorts.com/es/bodas-y-eventos-especiales"
                }
              >
                {language == "en-US"
                  ? "Weddings & Special Events"
                  : "Bodas y Eventos"}
              </a>
            </li>
            <li
              id="menu-item-16351"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.thomasmoretravel.com/Transfers/Transfers/Search"
                    : "https://www.thomasmoretravel.com/Transfers/Transfers/Search"
                }
              >
                {language == "en-US"
                  ? "Airport Transportation"
                  : "Transportación al aeropuerto"}
              </a>
            </li>
          </ul>
          <h3 className="footer_title">Our Company</h3>
          <ul id="menu-services-amenities" className="menu">
            <li
              id="menu-item-16201"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16201"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/about-royal-resorts"
                    : "https://www.royalresorts.com/es/acerca-de-royal-resorts"
                }
              >
                {language == "en-US"
                  ? "About Royal Resorts"
                  : "Acerca de Royal Resorts"}
              </a>
            </li>
            <li
              id="menu-item-16343"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16343"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/signature-club"
                    : "https://www.royalresorts.com/es/signature-club"
                }
              >
                {language == "en-US"
                  ? "Membership Benefits"
                  : "Beneficios de la membresía"}
              </a>
            </li>
            <li
              id="menu-item-16351"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/blog/"
                    : "https://www.royalresorts.com/blog/es/"
                }
              >
                {language == "en-US" ? "Royal Resorts Blog" : "Blog"}
              </a>
            </li>
            <li
              id="menu-item-16351"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/foundation"
                    : "https://www.royalresorts.com/es/fundacion"
                }
              >
                {language == "en-US"
                  ? "Royal Resorts Foundation"
                  : " Fundación Royal Resorts"}
              </a>
            </li>
            <li
              id="menu-item-16351"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://royalcarestandard.com/"
                    : "https://royalcarestandard.com/es"
                }
              >
                {language == "en-US"
                  ? "Royal Care Standard"
                  : "Royal Care Standard"}
              </a>
            </li>
            <li
              id="menu-item-16351"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16351"
            >
              <a
                href={
                  language == "en-US"
                    ? "https://www.royalresorts.com/privacy-policy"
                    : "https://www.royalresorts.com/es/politica-de-privacidad"
                }
              >
                {language == "en-US"
                  ? "Privacy Policy"
                  : "Política de Privacidad"}
              </a>
            </li>
          </ul>
        </div>
        <div className="section">
          {/** Tercera columna */}
          <h3 className="footer_title">
            <a
              className="footer_title"
              href={
                language == "en-US"
                  ? "https://www.royalresorts.com/special-offers"
                  : "https://www.royalresorts.com/es/ofertas-especiales"
              }
            >
              {language == "en-US" ? "Offers" : "Ofertas"}
            </a>
          </h3>
          <h3 className="footer_title">
            <a
              className="footer_title"
              href={
                language == "en-US"
                  ? "https://www.royalresorts.com/best-deal-guaranteed"
                  : "https://www.royalresorts.com/es/mejor-oferta-garantizada"
              }
            >
              {language == "en-US"
                ? "Best Rate Guaranteed"
                : "Mejor precio garantizado"}
            </a>
          </h3>
          <h3 className="footer_title">
            <a
              className="footer_title"
              href={
                language == "en-US"
                  ? "https://www.royalresorts.com/beach-destinations"
                  : "https://www.royalresorts.com/es/destinos-de-playa"
              }
            >
              {language == "en-US" ? "Beach Destinations" : "Destinos de Playa"}
            </a>
          </h3>
          <h3 className="footer_title">
            <a
              className="footer_title"
              href={
                language == "en-US"
                  ? "https://www.royalresorts.com/my-royal/login"
                  : "https://www.royalresorts.com/es/my-royal/inicio-de-sesion"
              }
            >
              {language == "en-US" ? "My Royal" : "My Royal"}
            </a>
          </h3>
          <h3 className="footer_title">
            <a
              className="footer_title"
              href={
                language == "en-US"
                  ? "https://www.royalresorts.com/members-login"
                  : "https://www.royalresorts.com/es/socios-login"
              }
            >
              {language == "en-US" ? "Members" : "Socios"}
            </a>
          </h3>
          <h3 className="footer_title">
            <a
              className="footer_title"
              href={
                language == "en-US"
                  ? "https://rrsignatureclub.com/"
                  : "https://rrsignatureclub.com/es/"
              }
            >
              {language == "en-US" ? "Signature Club" : "Signature Club"}
            </a>
          </h3>
        </div>
      </GenericSection>
      <GenericSection className="row"></GenericSection>
    </footer>
  );
}
