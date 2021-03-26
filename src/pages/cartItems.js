import React from "react";
import { connect } from "react-redux";
import ItemCart from "../components/ItemCart";
import { getCurrency } from "../libs/language";
import getTexto from "../libs/messages";
import { deleteItemToCart } from "../actions/cartActions";
import Related from "../components/relatedproducts";
import "../../scss/components/cart-items.scss";

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getItemsCart = this.getItemsCart.bind(this);
  }
  getItemsCart() {
    let that = this;
    if (this.props.cart) {
      console.log(this.props.cart);
      if (this.props.cart.itemsCart.length > 0) {
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
                  <div className="first text active">Shopping Cart</div>
                  <div className="medium text">Summary & Delivery</div>
                  <div className="last text ">Confirmation</div>
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
                          items):{" "}
                        </td>
                        <td style={{ fontWeight: "bold" }}>
                          $ {`${this.props.cart.totalPrice} ${getCurrency()}`}
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: "bold", color: "black" }}>
                          {getTexto("Total")}:
                        </td>
                        <td style={{ fontWeight: "bold", color: "black" }}>
                          $ {`${this.props.cart.totalPrice} ${getCurrency()}`}
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
                      {this.props.cart ? this.props.cart.itemsCount : 0} items):
                    </span>
                    <strong>
                      $ {`${this.props.cart.totalPrice} ${getCurrency()}`}
                    </strong>
                  </div>
                  <div className="discount">
                    <span>10% discount:</span>
                    <strong>$144.80 MX</strong>
                  </div>
                  <div className="total">
                    <span style={{ fontWeight: "bold" }}>
                      {getTexto("Total")}:
                    </span>
                    <strong>
                      $ {`${this.props.cart.totalPrice} ${getCurrency()}`}
                    </strong>
                  </div>
                  <div className="action">
                    <a href="#" className="btn">
                      {getTexto("Proceed to checkout")}
                    </a>
                    <a className="link" href="#">
                      {getTexto("Schedule delivery to villa")}
                    </a>
                  </div>
                </div>
                <div className=" descriptionSale_related">
                  <Related
                    inCart
                    items={[
                      this.props.items[0],
                      this.props.items[1],
                      this.props.items[2],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, { deleteItemToCart })(CartItems);
