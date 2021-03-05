import React, { useState } from "react";
import getTexto from "../libs/messages";

export default function HandlerItem({ item, detail = null }) {
  let [subtotal, setSubtotal] = useState(parseFloat(0).toFixed(2));
  return (
    <React.Fragment>
      {detail ? (
        <div className="wrapUnit">
          <table width="100%">
            <tbody>
              <tr>
                <td>{getTexto("Subtotal")}:</td>
                <td style={{ textAlign: "center" }}>{subtotal}</td>
              </tr>
              <tr>
                <td>{getTexto("Quantity")}:</td>
                <td>
                  <div className="unit">
                    <div className="wrap-units">
                      <a href="#" className="btn remove">
                        -
                      </a>
                      <input type="text" className="input-field" />
                      <a href="#" className="btn add">
                        +
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="actions">
            <a className="btn addtocart" href="">
              {getTexto("Add to Cart")}
            </a>
            <a className="btn saveforlater" href="">
              {getTexto("Save for Later")}
            </a>
          </div>
        </div>
      ) : (
        <div className="unit">
          <div className="wrap-units">
            <a href="#" className="btn remove">
              -
            </a>
            <input type="text" className="input-field" />
            <a href="#" className="btn add">
              +
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
