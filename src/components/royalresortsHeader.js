import React from "react";
import getTexto from "../libs/messages";

function RoyalHeader() {
  return (
    <div className="wrapperMenu Royal">
      <div className="wrapperMenu_menu submenu">
        <a className="wrapperMenu_menu_title" href="#">
          Discover Royal Resorts
        </a>
        <div className="icon">
          <div className="triangle-up"></div>
        </div>
        <ul className="">
          <li className="divider">Resorts</li>
          <li>
            <a
              href="https://www.royalresorts.com/discover-royal-resorts/the-royal-cancun/"
              className="azul-fuerte-diseno-text"
            >
              The Royal Cancun
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/discover-royal-resorts/the-royal-sands/"
              className="azul-fuerte-diseno-text"
            >
              The Royal Sands
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/discover-royal-resorts/the-royal-caribbean/"
              className="azul-fuerte-diseno-text"
            >
              The Royal Caribbean
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/discover-royal-resorts/the-royal-islander/"
              className="azul-fuerte-diseno-text"
            >
              The Royal Islander
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/discover-royal-resorts/the-royal-haciendas/"
              className="azul-fuerte-diseno-text"
            >
              The Royal Haciendas
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/discover-royal-resorts/grand-residences/"
              className="azul-fuerte-diseno-text"
            >
              Grand Residences
            </a>
          </li>
          <li>
            <a
              href="http://www.royalresortscaribbean.com/"
              className="azul-fuerte-diseno-text"
            >
              Caribbean Resorts
            </a>
          </li>
          <li className="divider">Member</li>
          <li>
            <a
              href="https://www.royalresorts.com/how-to-become-a-member/"
              className="azul-fuerte-diseno-text"
            >
              Become a Member
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapperMenu_menu submenu">
        <a className="wrapperMenu_menu_title" href="#">
          Service & Amenities
        </a>
        <div className="icon">
          <div className="triangle-up"></div>
        </div>
        <ul>
          <li>
            <a
              href="https://app.royalresorts.com/forms/airport_transfers.aspx"
              className="azul-fuerte-diseno-text"
            >
              Airport Transfers
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/refine-all-inclusive-package/"
              className="azul-fuerte-diseno-text"
            >
              All-Inclusive Package
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/restaurants-in-cancun-playa-del-carmen/"
              className="azul-fuerte-diseno-text"
            >
              Restaurants &amp; Bars
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/spa/"
              className="azul-fuerte-diseno-text"
            >
              Spa
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/fitness-center/"
              className="azul-fuerte-diseno-text"
            >
              Fitness Center
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/gift-shops/"
              className="azul-fuerte-diseno-text"
            >
              Gift Shops
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/the-royal-market/"
              className="azul-fuerte-diseno-text"
            >
              The Royal Market
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/weddings-and-special-events/"
              className="azul-fuerte-diseno-text"
            >
              Weddings &amp; Special Events
            </a>
          </li>
          <li>
            <a
              href="https://app.royalresorts.com/cybermall/specialGifts.aspx"
              className="azul-fuerte-diseno-text"
            >
              Gifts &amp; Certificate
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/activities-sports/"
              className="azul-fuerte-diseno-text"
            >
              Activities &amp; Sports
            </a>
          </li>
          <li>
            <a
              href="https://www.royalresorts.com/guest-services-and-amenities/cancun-tours-water-sports/"
              className="azul-fuerte-diseno-text"
            >
              Cancun Tours &amp; Water Sports
            </a>
          </li>
        </ul>
      </div>
      <div className="wrapperMenu_menu">
        <a className="wrapperMenu_menu_title" href="#">
          Destinations{" "}
        </a>
      </div>
      <div className="wrapperMenu_menu">
        <a className="wrapperMenu_menu_title" href="#">
          Blog
        </a>
      </div>
      <div className="wrapperMenu_menu">
        <a className="wrapperMenu_menu_title" href="#">
          Vacation Specials
        </a>
      </div>
    </div>
  );
}
export default RoyalHeader;
