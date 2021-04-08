import React from "react";
import ListItems from "../components/list_items";

function HistorialShopping({ site }) {
  let itemsObj = {
    storeItems: site.user.itemsHistory,
  };
  return (
    <div id="root">
      <div className="App">
        <div className="main">
          <ListItems state={itemsObj} search params={{}} />
        </div>
      </div>
    </div>
  );
}
export default HistorialShopping;
