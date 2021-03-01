import React from "react";
import GenericSection from "../components/genericsection";
import ListItems from "../components/list_items";
import ListCategories from "../components/listcategoriesmenu";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/itemsContext";

export default function Categories(props) {
  let params = useParams();
  console.log(props.cat);
  let categorySelected = {};
  if (params.id) {
    let category = props.cat.filter(
      (c) => c.SCategoryDesc.toLowerCase().replaceAll(" ", "-") === params.id
    );
    if (category.length > 0) {
      categorySelected.category = category[0].SCategoryCode;
      if (params.subid) {
        let subCategory = category[0].LsGroup.filter(
          (s) =>
            s.SGroupDesc.toLowerCase().replaceAll(" ", "-") === params.subid
        );
        if (subCategory.length > 0) {
          categorySelected.subcategory = subCategory[0].SGroupCode;
        }
      }
    }
  }
  console.log(categorySelected);

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
                <ListItems state={state} params={categorySelected} category />
              </GenericSection>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
