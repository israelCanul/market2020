import React from "react";
import getTexto from "../../libs/messages";
import { Link } from "react-router-dom";
import { backToTop } from "../../libs/helpers";
import getURL from "../../libs/Routes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import _ from "lodash";

function ShoppingHistory(props) {
  if (props.site.user) {
    if (props.site.user.itemsHistory) {
      if (props.site.user.itemsHistory.length > 0) {
        return (
          <div className="section">
            <div className="section_content">
              <div className="information">
                <h3>{getTexto("Inspired by your shopping history")}</h3>
                <p>
                  {getTexto("There are")}{" "}
                  <strong>{props.site.user.itemsHistory.length}</strong>{" "}
                  {getTexto("items waiting for you to add them to your cart")}
                </p>
              </div>
              <div className="img">
                <LazyLoadImage
                  src={props.site.user.itemsHistory[0].SPahtImage}
                  style={{ maxHeight: "150px" }}
                  alt="Ejemplo Item"
                />
              </div>
              <div className="action_link">
                <Link to={getURL("/shopping-history")}>
                  {getTexto("View More")}
                </Link>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  if (props.state.categories) {
    let newCat = [...props.state.categories];
    let arrayCat = [];
    while (arrayCat.length <= 3) {
      let number = _.random(0, Object.keys(newCat).length);
      let newArray = newCat.slice(number, number + 1);
      if (newArray.length > 0) {
        if (
          _.findIndex(arrayCat, function (o) {
            return o.SCategoryCode == newArray[0].SCategoryCode;
          }) == -1
        ) {
          arrayCat.push(...newArray);
        }
      }
    }
    //   let renderCats = "";
    let renderCats = arrayCat.map((cate, id) => {
      return (
        <Link
          key={id}
          onClick={(e) => {
            backToTop();
          }}
          to={`/categories/${cate.SCategoryDesc.toLowerCase().replaceAll(
            " ",
            "-"
          )}/${cate.LsGroup[0].SGroupDesc.toLowerCase().replaceAll(" ", "-")}`}
        >
          <div className="category">{cate.SCategoryDesc}</div>
        </Link>
      );
    });
    return (
      <div className="section">
        <div className="section_content">
          <div className="information">
            <h3>{getTexto("Categories of the day")}</h3>
          </div>
          <div className="categories">{renderCats}</div>
          {/* <div className="action_link">
              <a href="#">{getTexto("View More")}</a>
            </div> */}
        </div>
      </div>
    );
  }
}
export default ShoppingHistory;
