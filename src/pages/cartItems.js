import React from "react";
import { connect } from "react-redux";
import ItemCart from "../components/ItemCart";
import "../../scss/components/cart-items.scss";

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getItemsCart = this.getItemsCart.bind(this);
  }
  getItemsCart() {
    if (this.props.cart) {
      if (this.props.cart.itemsCart.length > 0) {
        return this.props.cart.itemsCart.map((item) => {
          return <ItemCart key={item.item.SItemCode} item={item.item} />;
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
              <div className="section x12" style={{ backgroundColor: "white" }}>
                {this.getItemsCart()}
              </div>
              <div className="section x4 descriptionSale">
                <div className="section descriptionSale_total">
                  <div className="subtotal ">
                    <span>Subtotal():</span>
                    <strong>$1448.00 MX</strong>
                  </div>
                  <div className="discount">
                    <span>10% discount:</span>
                    <strong>$144.80 MX</strong>
                  </div>
                  <div className="total">
                    <span>Total:</span>
                    <strong>$1303.20 MX</strong>
                  </div>
                </div>
                <div className="section">a</div>
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
export default connect(mapStateToProps, {})(CartItems);
