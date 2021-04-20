import React from "react";
import Lottie from "react-lottie";
import getTexto from "../libs/messages";
import * as animationData from "./animations/set_to_cart.json";
import Item from "./Item";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
      clase: "",
      top: "",
      left: "",
      isUpdater: this.props.isUpdate ? true : false,
    };
  }
  componentDidMount() {
    let that = this;
    setTimeout(() => {
      let menuCart = document.querySelector(".menu_cart");
      that.setState({
        clase: "closing",
        top: menuCart.offsetTop - 10 + menuCart.offsetHeight / 2,
        left: menuCart.offsetLeft + menuCart.offsetWidth / 2,
      });

      setTimeout(() => {
        that.props.toClose(false);
      }, 500);
    }, 2500);
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
        style={{ top: this.state.top, left: this.state.left }}
        className={`wrapperNotifications ${this.state.clase} ${
          this.state.isUpdater ? "updater" : ""
        }`}
      >
        <div className="notification">
          <Lottie
            options={defaultOptions}
            height={this.state.isUpdater ? 30 : 180}
            width={this.state.isUpdater ? 30 : 180}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
          <p>
            {this.state.isUpdater
              ? getTexto("Item updated in cart")
              : getTexto("Item added to cart")}{" "}
            <br />
            {this.props.item.SItemName}
          </p>
        </div>
      </div>
    );
  }
}
export default Notifications;
