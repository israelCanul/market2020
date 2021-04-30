import React from "react";
import Item from "../Item";
import getTexto from "../../libs/messages";
import { Link } from "react-router-dom";
import getURL from "../../libs/Routes";
import { LazyLoadImage } from "react-lazy-load-image-component";
import _ from "lodash";

function Recommendations(props) {
  console.log(props);
  if (props.site.user) {
    if (props.site.user.itemsHistory) {
      if (props.site.user.itemsHistory.length > 0) {
        let itemRandomFromHistory =
          props.site.user.itemsHistory[
            _.random(0, Object.keys(props.site.user.itemsHistory).length - 1)
          ];
        let itemsFromCat = new Array();
        itemsFromCat = _.filter(props.state.storeItems, function (o) {
          return (
            o.ItemExt.Group.SGroupCode ==
            itemRandomFromHistory.ItemExt.Group.SGroupCode
          );
        });
        return (
          <div className="section">
            <div className="section_content">
              <div className="information">
                <h3>{getTexto("Recommendations for you")}</h3>
              </div>
              {itemsFromCat.length > 0 ? (
                <Item
                  recommendations
                  item={
                    itemsFromCat[
                      _.random(
                        0,
                        Object.keys(props.site.user.itemsHistory).length - 1
                      )
                    ]
                  }
                />
              ) : (
                <Item recommendations item={itemRandomFromHistory} />
              )}
            </div>
          </div>
        );
      }
    }
  }
  let items = [...props.state.storeItems];
  let number = _.random(0, Object.keys(items).length - 1);
  let newArray = items.slice(number, number + 1);
  let itemRandom = () => {
    return <Item recommendations item={newArray[0]} />;
  };

  return (
    <div className="section">
      <div className="section_content">
        <div className="information">
          <h3>{getTexto("Our recommendation for you")}</h3>
        </div>
        {itemRandom()}
      </div>
    </div>
  );
}

export default Recommendations;
