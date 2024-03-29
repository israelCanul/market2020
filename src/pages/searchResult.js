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

  //pasamos los items del search
  let getAllParams = getAllParamsFromUrl();
  if (getAllParamsFromUrl().get("i") != null) {
    let filter = getAllParamsFromUrl().get("i").toUpperCase();
    let cat = getAllParamsFromUrl().get("cat");
    itemsFiltered = itemsObj.storeItems.map((item) => {
      let description = item.SItemDesc;
      let name = item.SItemName;
      let subCat = item.Category.SCategoryCode;
      let encontrado = false;
      let findByCat = false;
      if (cat != "") {
        findByCat = new RegExp("" + cat + "").test(subCat);
        if (findByCat) {
        }
      }

      let findByName = new RegExp("" + filter + "").test(name.toUpperCase());
      let findByDesc = new RegExp("" + filter + "").test(
        description.toUpperCase()
      );

      if (
        filter != "" &&
        (findByName == true || findByDesc == true || findByCat == true)
      ) {
        return item;
      }
    });
    itemsObj.storeItems = itemsFiltered.filter((i) => i != undefined);
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
