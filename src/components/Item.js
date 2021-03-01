import React, { useState } from "react";
import getTexto from "../libs/messages";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Item({ item }) {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(0);
  const [errorMinSale, setError] = useState("");

  // console.log(item);

  const onChangeInput = (e) => {
    if (props.item.YnAllowFractionalSale) {
      let Re = /^([0-9\.])*$/;
      let myArray = Re.exec(e.target.value);
      if (myArray != null) {
        this.setState({ number: e.target.value });
      } else {
        //this.setState({number : parseFloat(this.props.count).toFixed(1)});
        this.setState({ number: "" });
      }
    } else {
      let Re = /^([0-9])*$/;
      let myArray = Re.exec(e.target.value);
      if (myArray != null) {
        if (parseInt(myArray) % parseInt(props.item.MinSell) == 0) {
          this.setState({ number: parseInt(e.target.value) });
          this.setState({ errorMinSale: false });
        } else {
          this.setState({ number: "" });
          this.setState({ errorMinSale: true });
        }
      } else {
        this.setState({ number: "" });
        this.setState({ errorMinSale: true });
      }
    }
  };
  return (
    <div className="item">
      <div className="item_content">
        <div className="image">
          {/* <img src={item.SPahtImage} alt="Item" /> */}
          <LazyLoadImage
            alt={item.SItemName}
            src={item.SPahtImage} // use normal <img> attributes as props
          />
        </div>
        <div className="description">
          <span style={{ textTransform: "capitalize" }}>
            {item.SItemName.toLowerCase()}
          </span>{" "}
          <br />
          <span>{item.ItemMeasure.toLowerCase()}</span> <br />
          <strong>$ {parseFloat(item.DPrice).toFixed(2)} MXN</strong>
        </div>
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
