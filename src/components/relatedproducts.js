import React from "react";
import getTexto from "../libs/messages";
import Item from "./Item";

export default function RelatedSection(props) {
  return (
    <div className={`main_container ${props.className}`}>
      <div className={`list grid related`}>
        <div className="title">
          <h3>{getTexto("Related Products")}</h3>
        </div>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}
