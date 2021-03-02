import React, { useState } from "react";
import { getParamsFromUrl, getAllParamsFromUrl } from "../libs/helpers";
import { Redirect, useHistory, Link } from "react-router-dom";

export default function pageNavigation(items) {
  const [page, setPage] = useState(
    !Number.isNaN(parseInt(getParamsFromUrl("page")))
      ? parseInt(getParamsFromUrl("page"))
      : 1
  );

  //obtenemos la lista de query parameters de la url
  let getAllParams = getAllParamsFromUrl();
  if (getAllParamsFromUrl().get("page") == null) {
    getAllParamsFromUrl().set("page", page);
  }

  let history = useHistory();
  //numero de items por pagina
  let nItemsInList = 12;
  //lista de items segun la pagina actual
  let itemsRenderedByPage = items.slice(
    (page - 1) * nItemsInList,
    page * nItemsInList
  );
  //numero de paginas totales
  let renderNumberPages = parseInt(items.length / 12);
  renderNumberPages += items.length % 12 > 0 ? 1 : 0;

  //evitamos que al cargar una nueva lista de items se mantenga la pagina seteada en un numero diferente a 1
  if (getAllParamsFromUrl().get("page") == null && page > 1) {
    setPage(1);
  }

  //funcion para cambiar la pagina respetando los parametros actuales
  const setBtnPage = (newPage) => {
    getAllParams.set("page", newPage);
    history.push("?" + getAllParams.toString());
    setPage(newPage);
  };

  //renderizado de botones segun la pagina actual
  const BtnsPageIndex = () => {
    return (
      <React.Fragment>
        {page >= 6 ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page - 5))}
            className="btn"
          >
            {parseInt(page - 5)}
          </div>
        ) : (
          ""
        )}
        {page >= 5 ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page - 4))}
            className="btn"
          >
            {parseInt(page - 4)}
          </div>
        ) : (
          ""
        )}
        {page >= 4 ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page - 3))}
            className="btn"
          >
            {parseInt(page - 3)}
          </div>
        ) : (
          ""
        )}
        {page >= 3 ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page - 2))}
            className="btn"
          >
            {parseInt(page - 2)}
          </div>
        ) : (
          ""
        )}
        {page >= 2 ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page - 1))}
            className="btn"
          >
            {parseInt(page - 1)}
          </div>
        ) : (
          ""
        )}
        <div className="btn active">{page}</div>
        {page + 1 <= renderNumberPages ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page + 1))}
            className="btn"
          >
            {parseInt(page + 1)}
          </div>
        ) : (
          ""
        )}
        {page + 2 <= renderNumberPages ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page + 2))}
            className="btn"
          >
            {parseInt(page + 2)}
          </div>
        ) : (
          ""
        )}
        {page + 3 <= renderNumberPages ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page + 3))}
            className="btn"
          >
            {parseInt(page + 3)}
          </div>
        ) : (
          ""
        )}
        {page + 4 <= renderNumberPages ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page + 4))}
            className="btn"
          >
            {parseInt(page + 4)}
          </div>
        ) : (
          ""
        )}
        {page + 5 <= renderNumberPages ? (
          <div
            onClick={setBtnPage.bind(this, parseInt(page + 5))}
            className="btn"
          >
            {parseInt(page + 5)}
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };
  //render de la seccion de navigation
  let pageSection = () => {
    return (
      <div className="pages">
        <img
          className="firstImage arrows"
          src="/img/icons/next.png"
          alt="First Page Icon"
          title="First"
        />
        {BtnsPageIndex()}
        <img
          className="lastImage  arrows"
          src="/img/icons/next.png"
          alt="Last Page Icon"
          title="Last"
        />
      </div>
    );
  };
  return (
    <React.Fragment>
      {pageSection()}
      {itemsRenderedByPage}
      {pageSection()}
    </React.Fragment>
  );
}
