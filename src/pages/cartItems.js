import React from "react";
import { connect } from "react-redux";
import ItemCart from "../components/ItemCart";
import { getCurrency } from "../libs/language";
import getTexto from "../libs/messages";
import {
  deleteItemToCart,
  setCartToSession,
  setLoader,
  setItemToCart
} from "../actions/cartActions";
import Related from "../components/relatedproducts";
import { RetrieveRandomObjByCat } from "../libs/helpers";
import "../../scss/components/cart-items.scss";

import { Helmet } from "react-helmet";
class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bagQuestion : false};
    this.getItemsCart = this.getItemsCart.bind(this);
    this.setItemsToGenesis = this.setItemsToGenesis.bind(this);
    this.getRelated = this.getRelated.bind(this);
    this.askAboutABag = this.askAboutABag.bind(this);

    if (props.cart.loader == true) {
      document.querySelector("body").classList.add("loaderCart");
    } else {
      document.querySelector("body").classList.remove("loaderCart");
    }
  }
  setItemsToGenesisWithOut(){
    this.props.setLoader(false);
    this.setState({bagQuestion : false})
    let listItems = this.props.cart.itemsCart;
    let listaItemsToSession = [];
    listItems.map((item) => {
      listaItemsToSession.push({
        ...item.item,
        ITotalItems: parseFloat(item.totalItems),
      });
    });
    let objToSession = {
      totalItems: this.props.cart.itemsCount,
      ListItems: listaItemsToSession,
    };
    
    this.props.setCartToSession(objToSession);
  }
  setItemsToGenesis(){
    this.props.setLoader(false);
    //we add a bag as new item before to send to Genesis
    let bag = this.props.items.find(el => parseInt(el.IItemID) === 52828);

    let itemObject = {
      totalItems: parseFloat(1),
      item: bag ,
      onList: true,
    };
    this.props.setItemToCart(itemObject);
    //
    let that = this;
    
    setTimeout(() => that.setItemsToGenesisWithOut() ,300);
    
  }
  
  askAboutABag(e){
    e.preventDefault();
    let bag = this.props.items.find(el => parseInt(el.IItemID) === 52828);
    this.setState({bag: bag});
    // let itemObject = {
    //   totalItems: parseFloat(1),
    //   item: bag ,
    //   onList: true,
    // };
    this.setState({bagQuestion : true})
    this.props.setLoader(true);
       
    
    // if(bag !== null){
    //   this.props.setItemToCart(itemObject);
    // }
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
    {
      if(this.state.bag) console.log(this.state.bag);
    }
    return (
      <div id="root">
        <Helmet>
          ‍<title>Royal Market - Cart Items</title>‍
          <meta
            name="description"
            content="All products in a single place - Cart Items Page"
          />
        </Helmet>
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
                      onClick={this.askAboutABag}
                      className="btn"
                    >
                      {getTexto("Proceed to checkout")}
                    </a>
                    
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
            this.props.cart.loader == true && this.state.bagQuestion !== true  ? "loaderCart" : ""
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


        {/* modal to ask about a extra ecologic bag */}
        <div
          className={`modalwrapper ${
            this.props.cart.loader == true && this.state.bagQuestion === true ? "loaderCart" : ""
          }`}
        >
          <div
            className="background"
            onClick={(e) => {
              this.props.setLoader(false);
            }}
          ></div>
          <div className="content">
            <div className="doYouWantAbag">
              <p>
                {getTexto("Would you like a resuable shopping bag for only")} {this.state.bag ? parseFloat(this.state.bag.DPrice).toFixed(2): ""} {getCurrency() + "?"}
              </p>
              <a
                href="#"
                onClick={ e =>{e.preventDefault(); this.setItemsToGenesis()}}
                className="btn"
              >
                {getTexto("Yes please and continue ?")}
              </a>
              <a
                href="#"
                onClick={e =>{e.preventDefault();this.setItemsToGenesisWithOut();}}
                className="btn"
              >
                {getTexto("No, Proceed to checkout")}
              </a>
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
    site: state.site,
  };
};
export default connect(mapStateToProps, {
  deleteItemToCart,
  setCartToSession,
  setLoader,
  setItemToCart
})(CartItems);
