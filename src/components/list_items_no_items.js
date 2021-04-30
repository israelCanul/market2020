import React from "react";
import getTexto from "../libs/messages";
import { getAllParamsFromUrl } from "../libs/helpers";

function NoItems() {
  if (getAllParamsFromUrl().get("i") != null) {
    let filter = getAllParamsFromUrl().get("i").toUpperCase();
    return (
      <div className="noresults">
        <h3>{getTexto("There are no results for ") + filter.toLowerCase()}</h3>
      </div>
    );
  } else {
    return (
      <div className="noresults">
        <h3>{getTexto("There are no results")}</h3>
      </div>
    );
  }
}
export default NoItems;
