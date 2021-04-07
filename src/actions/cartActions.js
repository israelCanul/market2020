export const FETCHCART = "FETCHCART";
export const SETCARTITEM = "SETCARTITEM";
export const DELETECARTITEM = "DELETECARTITEM";
export const SETITEMTOSESSION = "SETITEMTOSESSION";
export const SETLOADCART = "SETLOADCART";
export const OPENLOADER = "OPENLOADER";
import axios from "axios";
import qs from "qs";
export function fetchCartItems(ini) {
  return {
    type: FETCHCART,
    payload: ini,
  };
}
export function setItemToCart(obj) {
  return {
    type: SETCARTITEM,
    payload: obj,
  };
}
export function deleteItemToCart(ItemCode) {
  return {
    type: DELETECARTITEM,
    payload: ItemCode,
  };
}
export function setLoadingCart(ItemCode) {
  return {
    type: SETLOADCART,
    payload: ItemCode,
  };
}
export function setLoader(value) {
  return {
    type: OPENLOADER,
    payload: value,
  };
}
export function setCartToSession(obj) {
  return (dispatch, getState) => {
    dispatch({
      type: OPENLOADER,
      payload: true,
    });
    let params = { jsonData: JSON.stringify(obj) };
    axios
      .post(
        getState().site.initialConfig.urlAPI +
          `/${getState().site.initialConfig.WebSection}` +
          "/Shopping/setShoppingCart",
        qs.stringify(params)
      )
      .then((response) => {
        if (parseInt(response.data) == 1) {
          dispatch({
            type: SETITEMTOSESSION,
            apiServer:
              getState().site.initialConfig.urlAPI +
              "/" +
              getState().site.initialConfig.WebSection +
              "/",
            payload: response.data,
          });
        } else {
          dispatch({
            type: SETITEMTOSESSION,
            apiServer: "There was an Error, Try Later",
            payload: 0,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        try {
          dispatch({
            type: SETITEMTOSESSION,
            apiServer: err.response,
            payload: 0,
          });
        } catch (error) {
          dispatch({
            type: SETITEMTOSESSION,
            apiServer: "There was an Error, Try Later",
            payload: 0,
          });
        }
      });
  };
}
