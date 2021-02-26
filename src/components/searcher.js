import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash/collection";
export default function Searcher({ datos = null, filter = null, category }) {
  const [dtFiltered, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  let refInput = useRef(null);
  let data = datos != null ? datos : [];

  let getUrlSearch = function () {
    let url = "/";
    if (refInput.current.value != "") {
      url = "/?i=" + refInput.current.value;
    }
    if (category != "") {
      url = url + "&cat=" + category.SCategoryCode;
      if (refInput.current.value == "") {
        url = "/?cat=" + category.SCategoryCode;
      }
    }
    return url;
  };
  let search = function (e) {
    // if (refInput.current.value != "") {
    window.location.href = getUrlSearch();
    // }
  };
  let dataFiltered = [];
  let renderData = dtFiltered.map((item, index) => {
    return (
      <li key={item.IItemID} className={index == selected ? "active" : ""}>
        <a href="#">{item.SItemDesc.toLowerCase()}</a>
      </li>
    );
  });
  //handler para cuado el input cambie
  let inputChange = (e) => {
    let filter = e.target.value.toUpperCase();
    let arraySearched = [];
    data.map((item, id) => {
      let description = item.SItemDesc;
      let name = item.SItemName;
      let encontrado = false;
      let findByName = new RegExp("" + filter + "").test(name.toUpperCase());
      let findByDesc = new RegExp("" + filter + "").test(
        description.toUpperCase()
      );
      if (filter != "" && (findByName == true || findByDesc == true)) {
        arraySearched = [...arraySearched, item];
      }
    });
    if (arraySearched.length > 0) {
    }
    setData(arraySearched);
  };
  let inputKeyDown = (event) => {
    console.log(event.which);
    // return;
    // //13 enter
    if (event.which == 38 || event.which == 40) {
      event.preventDefault();
      let newSelected = null;
      if (selected != null) {
        newSelected = selected;
        if (event.which == 38) {
          newSelected--;
          newSelected < 0 ? (newSelected = 0) : (newSelected = newSelected);
          setSelected(newSelected);
        } else {
          newSelected++;
          newSelected >= dtFiltered.length
            ? (newSelected = dtFiltered.length - 1)
            : (newSelected = newSelected);
          setSelected(newSelected);
        }
      } else {
        newSelected = 0;
        if (event.which == 38) {
          setSelected(0);
        } else {
          setSelected(0);
        }
      }
      if (newSelected != null) {
        refInput.current.value = dtFiltered[
          newSelected
        ].SItemDesc.toLowerCase();
      }
    }
    if (event.which == 13) {
      event.preventDefault();
      if (refInput.current.value != "") {
        window.location.href = getUrlSearch();
      }
    }
  };
  return (
    <React.Fragment>
      <div className="searcher_input">
        <input
          type="text"
          name=""
          ref={refInput}
          onKeyDown={inputKeyDown}
          onChange={inputChange.bind(this)}
        />
        {dtFiltered.length > 0 && (
          <div className="results">
            <div className="results_container">
              <ul className="results_container_list">{renderData}</ul>
            </div>
          </div>
        )}
      </div>
      <div className="searcher_icon" onClick={search.bind(this)}>
        <img src="/img/icon_lupa.png" width="20" height="20" alt="Lupa Icon" />
      </div>
    </React.Fragment>
  );
}
