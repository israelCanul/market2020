import React from "react";
import { connect } from "react-redux";
import ItemCart from "../components/ItemCart";
import { getCurrency } from "../libs/language";
import getTexto from "../libs/messages";
import {
  deleteItemToCart,
  setCartToSession,
  setLoader,
} from "../actions/cartActions";
import Related from "../components/relatedproducts";
import { RetrieveRandomObjByCat } from "../libs/helpers";
import "../../scss/components/cart-items.scss";

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getItemsCart = this.getItemsCart.bind(this);
    this.setItemsToGenesis = this.setItemsToGenesis.bind(this);
    this.getRelated = this.getRelated.bind(this);

    if (props.cart.loader == true) {
      document.querySelector("body").classList.add("loaderCart");
    } else {
      document.querySelector("body").classList.remove("loaderCart");
    }

    // console.log(this.props.cart.itemsCart.length);
  }
  setItemsToGenesis(e) {
    e.preventDefault();
    let listItems = this.props.cart.itemsCart;
    let listaItemsToSession = [];
    listItems.map((item) => {
      //console.log(parseFloat(item.totalItems).toFixed(1));
      listaItemsToSession.push({
        ...item.item,
        ITotalItems: parseFloat(item.totalItems),
      });
      //console.dir(item);
    });
    let objToSession = {
      totalItems: this.props.cart.itemsCount,
      ListItems: listaItemsToSession,
    };
    this.props.setCartToSession(objToSession);
  }
  getRelated() {
    let that = this;
    if (this.props.cart) {
      if (this.props.cart.itemsCart.length > 0) {
        let itemSelected = this.props.cart.itemsCart[0].item;
        let itemsRandomByCat = new Array();
        if (itemSelected) {
          itemsRandomByCat = RetrieveRandomObjByCat(
            this.props.items,
            itemSelected.ItemExt.Group.SGroupCode,
            6
          );
          return itemsRandomByCat;
        }
      }
    }
    return [];
  }
  getItemsCart() {
    let that = this;
    if (this.props.cart) {
      if (this.props.cart.itemsCart.length > 0) {
        let itemSelected = this.props.cart.itemsCart[0].item;
        let itemsRandomByCat = new Array();
        if (itemSelected) {
          itemsRandomByCat = RetrieveRandomObjByCat(
            this.props.items,
            itemSelected.ItemExt.Group.SGroupCode,
            6
          );
        }

        return this.props.cart.itemsCart.map((item) => {
          return (
            <ItemCart
              deleteItem={that.props.deleteItemToCart}
              key={item.item.SItemCode}
              data={item}
            />
          );
        });
      }
    }
  }
  render() {
    return (
      <div id="root">
        <div className="App">
          <div className="main cartItems">
            <div className="main_container">
              <div className="wrappersteps">
                <div className="wrappersteps_image">
                  <img src="img/royal_logo.png" alt="Royal Logo" />
                </div>
                <div className="wrappersteps_line">
                  <div className="first line active"></div>
                  <div className="medium line "></div>
                  <div className="last line "></div>
                </div>
                <div className="wrappersteps_texts">
                  <div className="first text active">
                    {getTexto("Shopping cart")}
                  </div>
                  <div className="medium text">
                    {getTexto("Summary & Delivery")}
                  </div>
                  <div className="last text ">{getTexto("Confirmation")}</div>
                </div>
              </div>
            </div>
            <div className="main_container grid list itemsSection">
              <div
                className="section x12 itemsSection_items"
                style={{ backgroundColor: "white" }}
              >
                <div className="title">
                  <h2>{getTexto("Shopping cart")}</h2>
                </div>
                {this.getItemsCart()}
                <div className="subtotal">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {getTexto("Subtotal")} (
                          {this.props.cart ? this.props.cart.itemsCount : 0}{" "}
                          {getTexto("items")}):{" "}
                        </td>
                        <td style={{ fontWeight: "bold" }}>
                          $ {`${this.props.cart.totalPrice} ${getCurrency()}`}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#ff4438" }}>
                          {this.props.site.configuration.discount}%{" "}
                          {getTexto("discount")}:
                        </td>
                        <td style={{ fontWeight: "bold" }}>
                          {`$ ${parseFloat(
                            parseFloat(this.props.cart.totalPrice) *
                              (parseFloat(0.01) *
                                parseFloat(
                                  this.props.site.configuration.discount
                                ))
                          ).toFixed(2)}`}{" "}
                          {getCurrency()}
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="total"
                          style={{ fontWeight: "bold", color: "black" }}
                        >
                          {getTexto("Total")}:
                        </td>
                        <td
                          className="total"
                          style={{ fontWeight: "bold", color: "black" }}
                        >
                          {`$ ${parseFloat(
                            parseFloat(this.props.cart.totalPrice) -
                              parseFloat(this.props.cart.totalPrice) *
                                (parseFloat(0.01) *
                                  parseFloat(
                                    this.props.site.configuration.discount
                                  ))
                          ).toFixed(2)} ${getCurrency()}`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="section x4 descriptionSale">
                <div className="section descriptionSale_total">
                  <div className="subtotal ">
                    <span>
                      {getTexto("Subtotal")} (
                      {this.props.cart ? this.props.cart.itemsCount : 0}{" "}
                      {getTexto("items")}):
                    </span>
                    <strong>
                      $ {`${this.props.cart.totalPrice} ${getCurrency()}`}
                    </strong>
                  </div>
                  <div className="discount">
                    <span>
                      {this.props.site.configuration.discount}%{" "}
                      {getTexto("discount")}:
                    </span>
                    <strong>
                      {`$ ${parseFloat(
                        parseFloat(this.props.cart.totalPrice) *
                          (parseFloat(0.01) *
                            parseFloat(this.props.site.configuration.discount))
                      ).toFixed(2)}`}{" "}
                      {getCurrency()}
                    </strong>
                  </div>
                  <div className="total">
                    <span style={{ fontWeight: "bold" }}>
                      {getTexto("Total")}:
                    </span>
                    <strong>
                      {`$ ${parseFloat(
                        parseFloat(this.props.cart.totalPrice) -
                          parseFloat(this.props.cart.totalPrice) *
                            (parseFloat(0.01) *
                              parseFloat(
                                this.props.site.configuration.discount
                              ))
                      ).toFixed(2)} ${getCurrency()}`}
                    </strong>
                  </div>
                  <div className="action">
                    <a
                      href="#"
                      onClick={this.setItemsToGenesis}
                      className="btn"
                    >
                      {getTexto("Proceed to checkout")}
                    </a>
                    {/* <a className="link" href="#">
                      {getTexto("Schedule delivery to villa")}
                    </a> */}
                  </div>
                </div>
                <div className=" descriptionSale_related">
                  {this.props.cart.itemsCart.length > 0 ? (
                    <Related inCart items={this.getRelated()} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`modalwrapper ${
            this.props.cart.loader == true ? "loaderCart" : ""
          }`}
        >
          <div
            className="background"
            onClick={(e) => {
              this.props.setLoader(false);
            }}
          ></div>
          <div className="content">
            <div className="loader">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            {/* <div className="message"> */}
            {/* {this.props.cart.errorMessage ? this.props.cart.errorMessage : ""} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    site: state.site,
  };
};
export default connect(mapStateToProps, {
  deleteItemToCart,
  setCartToSession,
  setLoader,
})(CartItems);
