import React from "react";
import Item from "../Item";
import getTexto from "../../libs/messages";

function Recommendations(props) {
  if (props.site.user) {
    if (props.site.user.itemsHistory) {
      if (props.site.user.itemsHistory.length > 0) {
        return (
          <div className="section">
            <div className="section_content">
              <div className="information">
                <h3>{getTexto("Recommendations for you")}</h3>
              </div>
              <div className="img">
                <img
                  width="66"
                  height="157"
                  src="img/home/ejem_recommendations_for_you.jpg"
                  alt="Ejemplo Item"
                />
              </div>
              <div className="action_link">
                <a href="#">{getTexto("View More")}</a>
              </div>
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
  console.log(newArray);
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
