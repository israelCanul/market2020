import React, { useState } from "react";
import getTexto from "../libs/messages";
import Item from "./Item";

export default function RelatedSection(props) {
  const [more, setMore] = useState(false);
  return (
    <div
      className={`main_container ${props.className} ${
        props.inCart ? "incartRelated" : ""
      }`}
    >
      <div className={`list grid related ${props.inCart ? "incart" : ""}`}>
        <div className="title">
          <h3>{getTexto("Related Products")}</h3>
        </div>
        <Item isRelated={props.inCart ? "true" : ""} item={props.items[0]} />
        <Item isRelated={props.inCart ? "true" : ""} item={props.items[1]} />
        <Item isRelated={props.inCart ? "true" : ""} item={props.items[2]} />
        {props.inCart ? (
          more == false ? (
            <div
              className="showMore"
              onClick={(e) => {
                e.preventDefault();
                setMore(true);
              }}
            >
              <a href="#">Show More</a>
            </div>
          ) : (
            <React.Fragment>
              {" "}
              <Item isRelated="true" item={props.items[3]} />
              <Item isRelated="true" item={props.items[4]} />
              <Item isRelated="true" item={props.items[5]} />
            </React.Fragment>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
