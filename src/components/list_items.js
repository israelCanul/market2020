import React from "react";
import Item from "./Item";

export default function ListItems() {
  let countRows = Math.trunc(6 / 4);
  let rowAdd = 6 % 4 > 0 ? 1 : 0;
  countRows = parseInt(countRows) + rowAdd;

  return (
    <div className="main_container">
      <div
        style={{ gridTemplateRows: `repeat(${countRows},1fr)` }}
        className="list grid"
      >
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
