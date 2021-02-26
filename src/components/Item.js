import React, { useState } from "react";
import getTexto from "../libs/messages";
export default function Item(props) {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(0);
  const [errorMinSale, setError] = useState("");

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
          <img src="/img/home/ejem_recommendations_for_you.jpg" alt="Item" />
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
