import React, { useState } from "react";
import getTexto from "../libs/messages";
import { Link } from "react-router-dom";
import "../../scss/components/listCategories.scss";

export default function ListCategories({ cat }) {
  let [catSelected, setCat] = useState({});
  let renderCategories = cat.map((category, id) => {
    let subCategories = category.LsGroup.map((subcategory) => {
      return (
        <li className="subCategory" key={subcategory.SGroupCode}>
          <Link
            to={`/categories/${
              catSelected.SCategoryDesc &&
              catSelected.SCategoryDesc.toLowerCase().replaceAll(" ", "-")
            }/${subcategory.SGroupDesc.toLowerCase().replaceAll(" ", "-")}`}
          >
            {subcategory.SGroupDesc.toLowerCase()}
          </Link>
        </li>
      );
    });
    return (
      <li key={category.SCategoryCode} className="category">
        <a
          className={
            catSelected && catSelected.ICategoryID == category.ICategoryID
              ? "active"
              : ""
          }
          onClick={(e) => {
            e.preventDefault();
            setCat(category);
          }}
          href="#"
        >
          {category.SCategoryDesc.toLowerCase()}
        </a>
        {catSelected.ICategoryID == category.ICategoryID ? (
          <ul className="subCategories">{subCategories}</ul>
        ) : (
          ""
        )}
      </li>
    );
  });
  return (
    <div className="WrapperCategories">
      <span className="title">
        <strong>{getTexto("Shop by Category")}</strong>
      </span>
      <ul className="listCategories">{renderCategories}</ul>
    </div>
  );
}
