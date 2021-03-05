import React from "react";
import Item from "./Item";
import PageNavigation from "./pageNavigation";

export default function ListItems({
  category = null,
  search = null,
  params,
  state,
}) {
  let filterByCategory = "";
  let countRows = Math.trunc(6 / 4);
  let rowAdd = 6 % 4 > 0 ? 1 : 0;
  countRows = parseInt(countRows) + rowAdd;
  let items = state.storeItems;
  if (params.category && category) {
    items = state.storeItems.map((item) => {
      if (params.category === item.Category.SCategoryCode) {
        if (params.subcategory) {
          if (params.subcategory === item.ItemExt.Group.SGroupCode) {
            return item;
          }
        } else {
          return item;
        }
      }
    });
  }

  items = items.filter((i) => i != undefined);
  let renderItems = items.map((item) => {
    return <Item key={item.SItemCode} item={item} />;
  });
  return (
    <div className={category ? "wrapperItemsOnCategories" : "main_container"}>
      <div
        style={{ gridTemplateRows: `auto repeat(${countRows},auto)` }}
        className="list grid"
      >
        {PageNavigation(renderItems)}
      </div>
    </div>
  );
}
