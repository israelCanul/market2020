import React from "react";
import getTexto from "../libs/messages";
import Item from "./Item";

export default function ListItems() {
  return (
    <div className="main_container">
      <div className="list grid">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
