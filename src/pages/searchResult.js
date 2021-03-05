import React from "react";
import getTexto from "../libs/messages";
import ThemeContext from "../context/itemsContext";

import Slide from "../components/slide";
import Sections from "../components/sections";
import GenericSection from "../components/genericsection";
import ListItems from "../components/list_items";
import Related from "../components/relatedproducts";
import { getParamsFromUrl, getAllParamsFromUrl } from "../libs/helpers";

function SResult({ items, QP }) {
  let itemsObj = {
    storeItems: items,
  };
  let itemsFiltered = [];
  //   console.log(QP);

  //pasamos los items del search
  let getAllParams = getAllParamsFromUrl();
  if (getAllParamsFromUrl().get("i") != null) {
    let filter = getAllParamsFromUrl().get("i").toUpperCase();
    // console.log(getAllParamsFromUrl().get("i"));
    itemsFiltered = itemsObj.storeItems.map((item) => {
      let description = item.SItemDesc;
      let name = item.SItemName;
      let encontrado = false;
      let findByName = new RegExp("" + filter + "").test(name.toUpperCase());
      let findByDesc = new RegExp("" + filter + "").test(
        description.toUpperCase()
      );
      //   console.log(findByName, findByDesc);
      if (filter != "" && (findByName == true || findByDesc == true)) {
        // arraySearched = [...arraySearched, item];
        return item;
      }
    });
    itemsObj.storeItems = itemsFiltered.filter((i) => i != undefined);
    // console.log(itemsObj.storeItems);
  }

  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div id="root">
          <div className="App">
            <div className="main">
              {/* <Slide /> */}
              <ListItems state={itemsObj} search params={{}} />
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default SResult;
