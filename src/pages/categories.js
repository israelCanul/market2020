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
      categorySelected.categoryDesc = category[0].SCategoryDesc;
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
                  <ListCategories
                    cat={props.cat}
                    catOnUrl={categorySelected.category}
                  />
                </div>
                <div className="path">
                  <Link to="/">Home</Link> <i className="arrow right"></i>{" "}
                  <Link
                    to={`/categories/${categorySelected.categoryDesc
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {categorySelected.categoryDesc.toLowerCase()}
                  </Link>
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
