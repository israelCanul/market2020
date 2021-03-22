export const FETCHCART = "FETCHCART";
export const SETCARTITEM = "SETCARTITEM";
export const DELETECARTITEM = "DELETECARTITEM";
export const SETITEMTOSESSION = "SETITEMTOSESSION";
export const SETLOADCART = "SETLOADCART";

import axios from "axios";

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

export function setCartToSession(obj) {
  return (dispatch, getState) => {
    let params = { jsonData: JSON.stringify(obj) };

    // let setItemToCart = axios
    //   .post(
    //     getState().data.initialConfig.urlAPI + "Shopping/setShoppingCart",
    //     qs.stringify(params)
    //   )
    //   .then((response) => {
    //     if (parseInt(response.data) == 1) {
    //       dispatch({
    //         type: SETITEMTOSESSION,
    //         apiServer: getState().data.initialConfig.urlAPI,
    //         payload: response,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
}
