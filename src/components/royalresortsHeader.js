import React from "react";
import getTexto from "../libs/messages";
import { getLanguage } from "../libs/language";

function RoyalHeader() {
  console.log(getLanguage());
  return (
    <div className="wrapperMenu Royal">
      <div className="wrapperMenu_menu submenu">
        <a className="wrapperMenu_menu_title" href="#">
          {getLanguage() == "en-US"
            ? "Discover Royal Resorts"
            : "DESTINOS Y RESORTS"}
        </a>
        <div className="icon">
          <div className="triangle-up"></div>
        </div>
        <ul className="">
          <li className="divider">
            {getLanguage() == "en-US" ? "Resorts" : "Hoteles"}
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresorts.com/beachfront-resorts/royal-uno"
                  : "https://www.royalresorts.com/es/hoteles-de-playa/royal-uno"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US" ? "Royal Uno" : "Royal Uno"}
            </a>
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresorts.com/beachfront-resorts/the-royal-cancun"
                  : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-cancun"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US"
                ? "The Royal Cancun"
                : "The Royal Cancun"}
            </a>
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresorts.com/beachfront-resorts/the-royal-sands"
                  : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-sands"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US" ? "The Royal Sands" : "The Royal Sands"}
            </a>
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresorts.com/beachfront-resorts/the-royal-islander"
                  : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-islander"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US"
                ? "The Royal Islander"
                : "The Royal Islander"}
            </a>
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresorts.com/beachfront-resorts/grand-residences-riviera-cancun"
                  : "https://www.royalresorts.com/es/hoteles-de-playa/grand-residences-riviera-cancun"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US"
                ? "Grand Residences Riviera Cancun"
                : "Grand Residences Riviera Cancun"}
            </a>
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresorts.com/beachfront-resorts/the-royal-haciendas"
                  : "https://www.royalresorts.com/es/hoteles-de-playa/the-royal-haciendas"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US"
                ? "The Royal Islander Haciendas"
                : "The Royal Islander Haciendas"}
            </a>
          </li>
          <li>
            <a
              href={
                getLanguage() == "en-US"
                  ? "https://www.royalresortscaribbean.com/"
                  : "https://www.royalresortscaribbean.com/"
              }
              className="azul-fuerte-diseno-text"
            >
              {getLanguage() == "en-US"
                ? "Caribbean Islands Resorts"
                : "Resorts en las Islas del Caribe"}
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapperMenu_menu">
        <a
          className="wrapperMenu_menu_title"
          href={
            getLanguage() == "en-US"
              ? "https://www.royalresorts.com/weddings-and-special-events"
              : "https://www.royalresorts.com/es/bodas-y-eventos-especiales"
          }
        >
          {getLanguage() == "en-US"
            ? "Weddings & Special Events"
            : "BODAS Y EVENTOS"}
        </a>
      </div>
      <div className="wrapperMenu_menu">
        <a
          className="wrapperMenu_menu_title"
          href={
            getLanguage() == "en-US"
              ? "https://www.royalresorts.com/all-inclusive"
              : "https://www.royalresorts.com/es/todo-incluido"
          }
        >
          {getLanguage() == "en-US" ? "All-Inclusive" : "TODO INCLUIDO"}
        </a>
      </div>
      <div className="wrapperMenu_menu">
        <a
          className="wrapperMenu_menu_title"
          href={
            getLanguage() == "en-US"
              ? "https://www.royalresorts.com/special-offers"
              : "https://www.royalresorts.com/es/ofertas-especiales"
          }
        >
          {getLanguage() == "en-US" ? "Offers" : "OFERTAS"}
        </a>
      </div>
    </div>
  );
}
export default RoyalHeader;
