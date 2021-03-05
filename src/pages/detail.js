import React from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../context/itemsContext";
import DocumentTitle from "react-document-title";
import GenericSection from "../components/genericsection";
import Slide from "../components/slide";
import getTexto from "../libs/messages";
import UnitHandler from "../components/unitHandler";
import Related from "../components/relatedproducts";
import "../../scss/components/itemDetail.scss";

export default function Detail({ items }) {
  let params = useParams();
  let itemSelected = null;

  items.map((item) => {
    if (parseInt(item.SItemCode) == parseInt(params.producto)) {
      itemSelected = item;
    }
  });

  return (
    <DocumentTitle
      title={
        itemSelected
          ? itemSelected.SItemName != ""
            ? itemSelected.SItemName
            : itemSelected.SItemDesc.toLowerCase()
          : "Item Description"
      }
    >
      {itemSelected ? (
        <div id="root">
          <div className="App">
            <div className="main itemDetail">
              <div className="main_container">
                <GenericSection className="row">
                  <div className="section x8">
                    <div className="slidecontainer">
                      <Slide showTumbs={true} />
                    </div>
                  </div>
                  <div className="section x4">
                    <div className="details">
                      <h3>
                        {itemSelected.SItemName != ""
                          ? itemSelected.SItemName.toLowerCase()
                          : itemSelected.SItemDesc.toLowerCase()}
                      </h3>
                      <span>({itemSelected.ItemMeasure.toLowerCase()})</span>
                      <hr />
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <strong>{getTexto("Unit Price")}:</strong>{" "}
                            </td>
                            <td>$ {itemSelected.DPrice} MX</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>{getTexto("Code")}:</strong>
                            </td>
                            <td>{itemSelected.SItemCode}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>{getTexto("Brand")}:</strong>
                            </td>
                            <td>{itemSelected.SItemMark}</td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                      <p>
                        <strong>{getTexto("About this Item")}:</strong>
                        <br />
                        {itemSelected.SItemDesc.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <div className="section x4">
                    <div className="item_container">
                      <UnitHandler detail />
                    </div>
                    <div className="promo_container">sd</div>
                  </div>
                </GenericSection>
                <Related items={[items[0], items[1], items[2]]} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="root" style={{ backgroundColor: "white" }}>
          <div className="App">
            <div className="main itemDetail">
              <div className="main_container">
                <h2
                  style={{
                    textAlign: "center",
                    color: "#535353",
                    minHeight: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {getTexto("This Item doesn´t exist")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </DocumentTitle>
  );
}
