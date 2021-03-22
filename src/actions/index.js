export const FETCHIMGGALLERY = "FETCHIMGGALLERY";
export const FETCHITEMSCATEGORIESFIREBASE = "FETCHITEMSCATEGORIESFIREBASE";
export const FETCHITEMSFIREBASE = "FETCHITEMSFIREBASE";
export const GETINICONFIG = "GETINICONFIG";
export const FETCHCONFIGURATION = "FETCHCONFIGURATION";

export function initConfig(data) {
  return {
    type: GETINICONFIG,
    payload: data,
  };
}
export function fetchImgGallery() {
  return {
    type: FETCHIMGGALLERY,
    payload: ImagenesBannerIndex,
  };
}

export function fetchConfiguration(site) {
  //   let v = firebase
  //     .database()
  //     .ref("/configuration/" + site)
  //     .once("value");
  //   return {
  //     type: FETCHCONFIGURATION,
  //     payload: v,
  //   };
}
export function fetchItemsFirebase() {
  //   return (dispatch, getState) => {
  //     let it = axios.get(
  //       getState().data.initialConfig.urlAPI + "Shopping/getCatalogItemsJson"
  //     );
  //     dispatch({
  //       type: FETCHITEMSFIREBASE,
  //       payload: it,
  //     });
  //   };
}
