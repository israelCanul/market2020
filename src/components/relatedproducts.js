import React, { useState } from "react";
import getTexto from "../libs/messages";
import Item from "./Item";

export default function RelatedSection(props) {
  const [more, setMore] = useState(false);

  const relatedFirstLoad = props.items.map((item, index) => {
    if (index < 3) {
      return (
        <Item
          key={item.SItemCode}
          isRelated={props.inCart ? "true" : ""}
          item={item}
        />
      );
    }
  });
  const relatedMoreLoad = props.items.map((item, index) => {
    if (index >= 3 && index < 6) {
      return (
        <Item
          key={item.SItemCode}
          isRelated={props.inCart ? "true" : ""}
          item={item}
        />
      );
    }
  });

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
        {
          //first 3 related products
          relatedFirstLoad
        }
        {props.inCart ? (
          more == false && props.items.length > 3 ? (
            <div
              className="showMore"
              onClick={(e) => {
                e.preventDefault();
                setMore(true);
              }}
            >
              <a href="#">{getTexto("Show More")}</a>
            </div>
          ) : props.items.length > 3 ? (
            <React.Fragment>
              {
                //loading the next 3 related products
                relatedMoreLoad
              }
            </React.Fragment>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
