import React from "react";
import getTexto from "../libs/messages";
import UnitHandler from "./unitHandler";

const ItemCart = ({ data }) => {
  let item = data.item;
  // let total = parseFloat(data.totalItems * item.DPrice).toFixed(1);
  return (
    <div className="itemCart">
      <div className="itemCart_container">
        <div className="itemCart_image">
          <img src={item.SPahtImage} alt={`Image of ${item.SItemName}`} />
        </div>
        <div className="itemCart_description">
          <p style={{ textTransform: "capitalize" }}>
            {item.SItemName.toLowerCase()}{" "}
            <small>{item.ItemMeasure.toLowerCase()}</small>
          </p>
          <div className="itemCart_description_actions">
            <small>
              {getTexto("Unit price")}: $ {parseFloat(item.DPrice).toFixed(2)}{" "}
              MXN
            </small>
            <a href="#">{getTexto("Delete")}</a>
          </div>
        </div>
        {/* <div className="itemCart_handler"> */}
        <UnitHandler cartItem={data} item={item} />
        {/* </div> */}
        {/* <div className="itemCart_total">
          <p>$ {total} MX</p>
        </div> */}
      </div>
    </div>
  );
};

export default ItemCart;

// DPrice: 26
// IItemID: 7081
// IRankingSales: 8
// ItemExt: {Group: {…}}
// ItemMeasure: "12 FLOZ each bottle"
// MinSell: 6
// SItemCode: "195044"
// SItemDesc: "CERVEZA BOHEMIA OBSC BOT N/R 355ML5.5%GL"
// SItemMark: "Bohemia"
// SItemName: "Bohemia obscura beer"
// SPahtImage: "https://www.royalresorts.com/wp-content/uploads/2019/market/CERVEZA-BOHEMIA-OSCURA-BOTELLA-SIX-PACK.jpg"
// YnAllowFractionalSale: 0
