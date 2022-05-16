import React, { useEffect, useState, Suspense, lazy } from "react";
import { connect } from "react-redux";
import getTexto from "../libs/messages";
import { getCurrency } from "../libs/language";
import { fetchCartItems, setItemToCart } from "../actions/cartActions";

const Notification = lazy(() =>
  import(/* webpackPrefetch: true */ "./notifications")
);

function HandlerItem({
  setItemToCart,
  item,
  detail = null,
  cartItem = null,
  isRelated = null,
}) {
  let initialSell = item.MinSell; // set the initial item's value
  item.MinSell = 1; // we overwrite the minSellVariable
  let [notificationAdd, setNotification] = useState(false);
  let [notificationUpdate, setNotificationUpdate] = useState(false);
  let cartSubtotal = cartItem
    ? parseFloat(cartItem.totalItems * item.DPrice).toFixed(1)
    : (item.YnAllowFractionalSale
        ? parseFloat(item.MinSell).toFixed(1)
        : parseFloat(item.MinSell).toFixed(1)) * item.DPrice;
  let [subtotal, setSubtotal] = useState(cartSubtotal);
  useEffect(() => {
    if (cartItem) {
      if (
        parseFloat(cartSubtotal).toFixed(1) !== parseFloat(subtotal).toFixed(1)
      ) {
        updateItemToCart();
      }
    }
  });
  let [unit, setUnit] = useState(
    cartItem
      ? item.YnAllowFractionalSale
        ? parseFloat(cartItem.totalItems).toFixed(1)
        : cartItem.totalItems
      : item.YnAllowFractionalSale
      ? parseFloat(initialSell).toFixed(1)
      : parseInt(initialSell)
  );
  useEffect(() => {
    getSubTotal();
  }); 
 


  let [error, setError] = useState(false);
  let addRemoveUnit = (operation) => {
    let addNumber, removeNumber;
    let value = unit;
    if (item.YnAllowFractionalSale) {
      addNumber = parseFloat(unit) + parseFloat(item.MinSell);
      addNumber = parseFloat(addNumber).toFixed(1);
    } else {
      addNumber = unit + parseInt(item.MinSell);
    }
    if (parseFloat(unit) > 0) {
      if (item.YnAllowFractionalSale == 1) {
        removeNumber =
          parseFloat(unit).toFixed(1) - parseFloat(item.MinSell).toFixed(1);
        removeNumber = parseFloat(removeNumber).toFixed(1);
        if (removeNumber < 0) {
          removeNumber = parseFloat(0).toFixed(1);
        }
      } else {
        removeNumber = unit - parseInt(item.MinSell);
      }
    } else {
      removeNumber = 0;
    }
    if (operation == "+") {
      setUnit(addNumber);
    } else if (operation == "-") {
      removeNumber == 0 ? setUnit(item.MinSell) : setUnit(removeNumber);
    }
  };
  let addUnit = (unit) => {
    let newValor;
    if (item.YnAllowFractionalSale) {
      newValor = parseFloat(unit.target.value).toFixed(1);
    } else {
      newValor = parseInt(unit.target.value);
    }
    let that = this;
    if (
      unit.target.value == null ||
      unit.target.value == "" ||
      parseFloat(unit.target.value) <= 0
    ) {
      setUnit(parseInt(item.MinSell));
      if (item.YnAllowFractionalSale) {
        setUnit(parseFloat(item.MinSell).toFixed(2));
      }
    } else {
      setUnit(newValor);
    }
    setError(false);
  };
  let onChangeInput = (e) => {
    if (item.YnAllowFractionalSale) {
      let Re = /^([0-9\.])*$/;
      let myArray = Re.exec(e.target.value);
      if (myArray != null) {
        // setUnit(parseFloat(e.target.value ));
        setUnit(e.target.value);
      } else {
        setUnit("");
      }
    } else {
      let Re = /^([0-9])*$/;
      let myArray = Re.exec(e.target.value);
      if (myArray != null) {
        if (parseInt(myArray) % parseInt(item.MinSell) == 0) {
          setUnit(parseInt(e.target.value));
          setError(false);
        } else {
          setUnit("");
          setError(true);
        }
      } else {
        setUnit("");
        setError(true);
      }
    }
  };

  let getSubTotal = () => {
    let newSubtotal =
      (item.YnAllowFractionalSale
        ? parseFloat(item.MinSell).toFixed(2)
        : parseInt(item.MinSell)) * item.DPrice;
    if (item.YnAllowFractionalSale) {
      newSubtotal = parseFloat(unit * item.DPrice).toFixed(2);
    } else {
      newSubtotal = parseFloat(unit * item.DPrice).toFixed(2);
    }
    setSubtotal(newSubtotal);
  };
  let renderInput = (
    <div className="wrap-units">
      <a
        onClick={(e) => {
          e.preventDefault();
          addRemoveUnit("-");
        }}
        href="#"
        className="btn remove"
      >
        -
      </a>
      <input
        onChange={onChangeInput.bind(this)}
        type="text"
        value={unit}
        className="input-field"
        onFocus={(i) => {
          i.target.value = "";
          setUnit("");
        }}
        onBlur={addUnit.bind(this)}
      />
      <a
        onClick={(e) => {
          e.preventDefault();
          addRemoveUnit("+");
        }}
        href="#"
        className="btn add"
        value=""
      >
        +
      </a>
    </div>
  );

  let addToCart = (o) => {
    o.preventDefault();
    let itemObject = {
      totalItems: item.YnAllowFractionalSale ? parseFloat(unit) : unit,
      item: item,
      onList: true,
    };
    setItemToCart(itemObject);
    setNotification(true);
    // NotificationManager.info(item.SItemName, "item added to cart", 6000);
    setUnit(
      item.YnAllowFractionalSale
        ? parseFloat(item.MinSell).toFixed(1)
        : parseInt(item.MinSell)
    );
  };
  let updateItemToCart = () => {
    if (typeof unit === "number" || (!Number.isNaN(unit) && unit != "")) {
      let itemObject = {
        totalItems: item.YnAllowFractionalSale ? parseFloat(unit) : unit,
        item: item,
        onList: false,
      };
      setItemToCart(itemObject);
      setNotification(true);
      setNotificationUpdate(true);
    }
  };
  return (
    <React.Fragment>
      {detail ? (
        <div className="wrapUnit">
          <table width="100%">
            <tbody>
              <tr>
                <td>{getTexto("Subtotal")}:</td>
                <td style={{ textAlign: "center" }}>
                  $ {subtotal} {getCurrency()}
                </td>
              </tr>
              <tr>
                <td>{getTexto("Quantity")}:</td>
                <td>
                  <div className="unit">
                    {renderInput}
                    <small
                      style={{
                        display: "block",
                        textAlign: "center",
                        color: "rgba(255, 68, 56, 0.9)",
                      }}
                    >
                      {error
                        ? `${getTexto("Minimum purchase of")} ${
                            item.MinSell
                          } ${getTexto("items or in groups of")} ${
                            item.MinSell
                          }`
                        : ""}
                    </small>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="actions">
            <a onClick={addToCart.bind(this)} className="btn addtocart" href="">
              {getTexto("Add to Cart")}
            </a>
            <a className="btn saveforlater" href="">
              {getTexto("Save for Later")}
            </a>
          </div>
        </div>
      ) : cartItem ? (
        <React.Fragment>
          <div className="unit">
            {renderInput}
            <small
              style={{
                display: "block",
                textAlign: "center",
                color: "rgba(255, 68, 56, 0.9)",
              }}
            >
              {error
                ? `${getTexto("Minimum purchase of")} ${
                    item.MinSell
                  } ${getTexto("items or in groups of")} ${item.MinSell}`
                : ""}
            </small>
          </div>
          <div className="total">
            $ {subtotal} {getCurrency()}
          </div>
        </React.Fragment>
      ) : isRelated ? (
        <React.Fragment>
          <div className="unit">
            <span style={{ textTransform: "capitalize" }}>
              {item.SItemName.toLowerCase()}
            </span>{" "}
            <br />
            <span>{item.ItemMeasure.toLowerCase()}</span> <br />
            <strong>$ {parseFloat(item.DPrice).toFixed(2)} MXN</strong>
            {!error ? (
              <div className="action">
                <a onClick={addToCart.bind(this)} href="" className="linkAdd">
                  {getTexto("Add to cart")}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="unit">
            {renderInput}
            <small
              style={{
                display: "block",
                textAlign: "center",
                color: "rgba(255, 68, 56, 0.9)",
              }}
            >
              {error
                ? `${getTexto("Minimum purchase of")} ${
                    item.MinSell
                  } ${getTexto("items or in groups of")} ${item.MinSell}`
                : ""}
            </small>
          </div>
          {!error ? (
            <div className="action">
              <a onClick={addToCart.bind(this)} href="" className="btnAdd">
                {getTexto("Add to cart")}
              </a>
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      )}{" "}
      {notificationAdd == true ? (
        <Suspense fallback={"Loading"}>
          <Notification
            isUpdate={notificationUpdate}
            item={item}
            toClose={setNotification}
          />
        </Suspense>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    site: state.site,
  };
};
export default connect(mapStateToProps, { fetchCartItems, setItemToCart })(
  HandlerItem
);
