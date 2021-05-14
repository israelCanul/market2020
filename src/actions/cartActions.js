export const FETCHCART = "FETCHCART";
export const SETCARTITEM = "SETCARTITEM";
export const DELETECARTITEM = "DELETECARTITEM";
export const SETITEMTOSESSION = "SETITEMTOSESSION";
export const SETLOADCART = "SETLOADCART";
export const OPENLOADER = "OPENLOADER";
export const RESETCARTITEM = "RESETCARTITEM";
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
export function resetToCart() {
  return {
    type: RESETCARTITEM,
    payload: [],
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
    let paramForForm = JSON.stringify(obj);
    let user = {};
    // console.log(getState());
    if (getState().site.user != undefined) {
      user = JSON.stringify({
        Email: getState().site.user.Email,
        FullName: getState().site.user.fullName,
        Name: getState().site.user.FName,
        LastName: getState().site.user.LName1,
      });
    } else {
      user = "";
    }

    var form = document.createElement("form");
    document.body.appendChild(form);
    var element1 = document.createElement("input");
    var element2 = document.createElement("input");
    form.method = "POST";
    form.action = `${getState().site.initialConfig.urlAPI}/${
      getState().site.initialConfig.WebSection
    }/Shopping/InformationPayV2`;

    element1.value = paramForForm;
    element1.name = "Data";
    element1.type = "hidden";
    element2.value = user;
    element2.name = "UserData";
    element2.type = "hidden";
    form.appendChild(element1);
    form.appendChild(element2);
    dispatch({
      type: RESETCARTITEM,
      payload: [],
    });
    // console.log(paramForForm);
    // console.log(user);
    form.submit();

    // axios
    //   .post(
    //     getState().site.initialConfig.urlAPI +
    //       `/${getState().site.initialConfig.WebSection}` +
    //       "/Shopping/setShoppingCart",
    //     qs.stringify(params)
    //   )
    //   .then((response) => {
    //     if (parseInt(response.data) == 1) {
    //       dispatch({
    //         type: SETITEMTOSESSION,
    //         apiServer:
    //           getState().site.initialConfig.urlAPI +
    //           "/" +
    //           getState().site.initialConfig.WebSection +
    //           "/",
    //         payload: response.data,
    //       });
    //     } else {
    //       dispatch({
    //         type: SETITEMTOSESSION,
    //         apiServer: "There was an Error, Try Later",
    //         payload: 0,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     try {
    //       dispatch({
    //         type: SETITEMTOSESSION,
    //         apiServer: err.response,
    //         payload: 0,
    //       });
    //     } catch (error) {
    //       dispatch({
    //         type: SETITEMTOSESSION,
    //         apiServer: "There was an Error, Try Later",
    //         payload: 0,
    //       });
    //     }
    //   });
  };
}
