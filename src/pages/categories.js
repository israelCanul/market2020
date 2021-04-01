import React from "react";
import GenericSection from "../components/genericsection";
import ListItems from "../components/list_items";
import ListCategories from "../components/listcategoriesmenu";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/itemsContext";
import { Link } from "react-router-dom";

export default function Categories(props) {
  let params = useParams();

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
          console.log(subCategory[0]);
          categorySelected.subcategory = subCategory[0].SGroupCode;
          categorySelected.subcategoryDesc = subCategory[0].SGroupDesc;
        }
      }
    }
  }

  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div id="root">
          <div className="App">
            <div className="main">
              <GenericSection className="categories">
                <div className="menuCategory">
                  {console.log(categorySelected)}
                  <ListCategories cat={props.cat} />
                </div>
                <div className="path">
                  <Link to="/">Home</Link> <i className="arrow right"></i>{" "}
                  <a
                    style={{ textTransform: "Capitalize" }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    href=""
                  >
                    {categorySelected.subcategoryDesc.toLowerCase()}
                  </a>
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
