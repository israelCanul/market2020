import React from "react";
import getTexto from "../libs/messages";
import UnitHandler from "./unitHandler";

const ItemCart = ({ data, deleteItem }) => {
  let item = data.item;

  let deleteItemFunction = (itemCode) => {
    deleteItem(itemCode);
  };

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
            <a
              onClick={(e) => {
                e.preventDefault();
                deleteItemFunction(item.SItemCode);
              }}
              href="#"
            >
              {getTexto("Delete")}
            </a>
          </div>
        </div>
        <UnitHandler cartItem={data} item={item} />
      </div>
    </div>
  );
};

export default ItemCart;
