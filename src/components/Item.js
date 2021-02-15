import React, { useState } from "react";
import getTexto from "../libs/messages";
export default function Item() {
  const [value, setValue] = useState("");
  return (
    <div className="item">
      <div className="item_content">
        <div className="image">
          <img src="img/home/ejem_recommendations_for_you.jpg" alt="Item" />
        </div>
        <div className="description">
          <span>Whole fresh milk Lala (34 floz.)</span> <br />
          <strong>$ 32.00 MXN</strong>
        </div>
        <div className="unit">
          <div className="wrap-units">
            <a href="#" className="btn remove">
              -
            </a>
            <input type="text" className="input-field" value={value} />
            <a href="#" class="btn add">
              +
            </a>
          </div>
        </div>
        <div className="action">
          <a href="" className="btnAdd">
            {getTexto("Add to cart")}
          </a>
        </div>
        <div className="details">
          <a href="#">{getTexto("View details")}</a>
        </div>
      </div>
    </div>
  );
}
