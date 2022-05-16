import React from "react";
import { useParams } from "react-router-dom";

import DocumentTitle from "react-document-title";
import GenericSection from "../components/genericsection";
import Slide from "../components/slide";
import getTexto from "../libs/messages";
import UnitHandler from "../components/unitHandler";
import Related from "../components/relatedproducts";
import { getCurrency } from "../libs/language";
import { RetrieveRandomObjByCat,getRichText } from "../libs/helpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import _ from "lodash";
import "../../scss/components/itemDetail.scss";
import { Helmet } from "react-helmet";

export default function Detail({ items, site }) {
  let params = useParams();
  let itemSelected = null;
  let gallery = [];
  let itemsRandomByCat = new Array();
  // let count = 0;

  //this code is optimized to do not iterate across all of items
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    if (parseInt(item.SItemCode) == parseInt(params.producto)) {
      itemSelected = item;
      break;
    }
  }
  if (itemSelected) {
    itemsRandomByCat = RetrieveRandomObjByCat(
      items,
      itemSelected.ItemExt.Group.SGroupCode,
      3
    );
    if (itemSelected.imageGallery != "") {
      let itemsGallery = itemSelected.imageGallery.split(",");
      itemsGallery.map((gal) => {
        gallery.push({ img: gal });
      });
    } else {
      gallery = [
        {
          img:
            itemSelected.SPahtImage !=
            "http://royalresorts.mobi/rr2016/market/img/products/coca-cola-regular-lata-1-six-pack.jpg"
              ? itemSelected.SPahtImage
              : "/img/default.jpg",
        },
      ];
    }
  }
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
          <Helmet>
            ‍
            <title>
              Royal Market -{" "}
              {itemSelected.SItemName != ""
                ? itemSelected.SItemName.toLowerCase()
                : itemSelected.SItemDesc.toLowerCase()}
            </title>
            ‍
            <meta
              name="description"
              content={itemSelected.SItemDesc.toLowerCase()}
            />
          </Helmet>
          <div className="App">
            <div className="main itemDetail">
              <div className="main_container">
                <GenericSection className="row">
                  <div className="section x8" style={{ display: "block" }}>
                    <div className="slidecontainer">
                      <Slide slides={gallery} width="200px" showTumbs={true} />
                    </div>
                  </div>
                  <div className="section x4">
                    <div className="details">
                      <h3 dangerouslySetInnerHTML={{ __html:  itemSelected.SItemName != "" ? getRichText(itemSelected.SItemName.toLowerCase()): getRichText(itemSelected.SItemDesc.toLowerCase()) }}>
                        
                      </h3>
                      <span>({itemSelected.ItemMeasure.toLowerCase()})</span>
                      <hr />
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <strong>{getTexto("Unit price")}:</strong>{" "}
                            </td>
                            <td>
                              $ {itemSelected.DPrice} {getCurrency()}
                            </td>
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
                          <tr>
                            <td>
                              <strong>{getTexto("Min. for sale")}:</strong>
                            </td>
                            <td>{itemSelected.MinSell}</td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                      <p style={{margin:"0px", padding:"0px", paddingBottom:"10px"}}>
                        <strong>{getTexto("About this Item")}:</strong>
                      </p>
                      <p style={{margin:"0px", padding:"0px"}} dangerouslySetInnerHTML={{ __html: itemSelected.sLongDescription != "" ? getRichText(itemSelected.sLongDescription) : getRichText(itemSelected.SItemDesc.toLowerCase()) }}>  
                      </p>
                    </div>
                  </div>
                  <div className="section x4">
                    <div className="item_container">
                      <UnitHandler item={itemSelected} detail />
                    </div>
                    <div className="promo_container">
                      <a
                        href={site.configuration.contenido.imgOnItemDetail.url}
                      >
                        <picture loading="lazy">
                          {site.configuration.contenido.imgOnItemDetail.imgM !=
                          "" ? (
                            <source
                              media="(max-width: 767px)"
                              srcSet={`${site.configuration.contenido.imgOnItemDetail.imgM}`}
                            />
                          ) : (
                            ""
                          )}
                          <source
                            media="(min-width: 767px)"
                            srcSet={`${site.configuration.contenido.imgOnItemDetail.img}`}
                          />
                          <LazyLoadImage
                            className="img"
                            src={
                              site.configuration.contenido.imgOnItemDetail.img
                            }
                            alt="Banner On Detail"
                          />
                        </picture>

                        {/* <LazyLoadImage
                          className="img"
                          src={site.configuration.contenido.imgOnItemDetail.img}
                          alt="Image Before Footer"
                        /> */}
                      </a>
                    </div>
                  </div>
                </GenericSection>
                {itemsRandomByCat.length > 0 && itemsRandomByCat.length == 3 ? (
                  <Related items={itemsRandomByCat} />
                ) : (
                  ""
                )}
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
