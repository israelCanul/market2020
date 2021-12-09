import React, { useState } from "react";
import getTexto from "../libs/messages";
import UnitHandler from "./unitHandler";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function Item({
  item,
  recommendations = null,
  isRelated = null,
}) {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(0);
  const [errorMinSale, setError] = useState("");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className={`item ${isRelated ? "isRelated" : ""}`}>
      <div className="item_content">
        <div className={`image  ${recommendations ? "recomendationsImg" : ""}`}>
          {/* <img src={item.SPahtImage} alt="Item" /> */}
          <LazyLoadImage
            alt={item.SItemName}
            src={
              item.SPahtImage !=
              "http://royalresorts.mobi/rr2016/market/img/products/coca-cola-regular-lata-1-six-pack.jpg"
                ? item.SPahtImage
                : "/img/default.jpg"
            } // use normal <img> attributes as props
          />
        </div>
        {/* avoiding to show this sections when we are in related section*/}
        {!isRelated ? (
          <div className="description">
            <span style={{ textTransform: "capitalize" }}>
              {item.SItemName.toLowerCase()}
            </span>{" "}
            <br />
            <span>{item.ItemMeasure.toLowerCase()}</span> <br />
            <strong>$ {parseFloat(item.DPrice).toFixed(2)} MXN</strong>
          </div>
        ) : (
          ""
        )}
        {/* avoiding to show this sections when we are in recommendations section*/}
        <UnitHandler isRelated={isRelated ? isRelated : null} item={item} />
        {/* {!recommendations ? (
          <UnitHandler isRelated={isRelated ? isRelated : null} item={item} />
        ) : (
          ""
        )} */}
        {/* avoiding to show this sections when we are in related section*/}
        {!isRelated && !recommendations ? (
          <div className="details">
            <Link to={`/products/${item.SItemCode}`}>
              {getTexto("View details")}
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
