import React from "react";
import GenericSection from "../components/genericsection";
import ListItems from "../components/list_items";
import ListCategories from "../components/listcategoriesmenu";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/itemsContext";

export default function Categories(props) {
  // console.log(useParams());
  let params = useParams();
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div id="root">
          <div className="App">
            <div className="main">
              <GenericSection className="categories">
                <div className="menuCategory">
                  <ListCategories cat={props.cat} />
                </div>
                <div className="path">
                  <a href="/">Home</a> {` -> `} <a href="/groceries">All</a>
                </div>
                <ListItems state={state} params category />
              </GenericSection>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
