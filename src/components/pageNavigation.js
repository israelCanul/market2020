import React, { useState } from "react";
import { getParamsFromUrl } from "../libs/helpers";

export default function pageNavigation(items) {
  const [page, setPage] = useState(
    !Number.isNaN(parseInt(getParamsFromUrl("page")))
      ? parseInt(getParamsFromUrl("page"))
      : 1
  );
  let nItemsInList = 12;
  let itemsRenderedByPage = items.slice(
    (page - 1) * nItemsInList,
    page * nItemsInList
  );

  let renderNumberPages = parseInt(items.length / 12);
  renderNumberPages += items.length % 12 > 0 ? 1 : 0;

  return (
    <React.Fragment>
      <div className="pages">
        <img
          className="firstImage arrows"
          src="/img/icons/next.png"
          alt="First Page Icon"
        />
        <img
          className="lastImage  arrows"
          src="/img/icons/next.png"
          alt="Last Page Icon"
        />
      </div>
      {itemsRenderedByPage}
      <div className="pages"></div>
    </React.Fragment>
  );
}
