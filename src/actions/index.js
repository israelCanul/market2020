import { getAuth, getDBConection } from "../libs/firebaseApi";
import axios from "axios";
import txml from "txml";
import _ from "lodash";

export const FETCHIMGGALLERY = "FETCHIMGGALLERY";
export const FETCHITEMSCATEGORIESFIREBASE = "FETCHITEMSCATEGORIESFIREBASE";
export const FETCHITEMSFIREBASE = "FETCHITEMSFIREBASE";
export const GETINICONFIG = "GETINICONFIG";
export const FETCHCONFIGURATION = "FETCHCONFIGURATION";
export const SETUSERGENESIS = "SETUSERGENESIS";
export const LOGOUTUSER = "LOGOUTUSER";

export function logoutUser() {
  return {
    type: LOGOUTUSER,
    payload: 0,
  };
}
export function SetUserFromGenesis(user) {
  return (dispatch, getState) => {
    if (
      localStorage.getItem("user") &&
      localStorage.getItem("user") != "" &&
      localStorage.getItem("user") != null &&
      localStorage.getItem("user") != "null"
    ) {
      let User = JSON.parse(window.atob(localStorage.getItem("user")));
      if (User.userToken === user) {
        // llamamos a genesis si el usario no esta en localstorage
        dispatch({
          type: SETUSERGENESIS,
          payload: { ...User, userToken: user },
        });
        return;
      }
    }
    // llamamos a genesis si el usario no esta en localstorage
    let url = `${getState().site.initialConfig.urlLogin}?strUserName=${
      getState().site.initialConfig.loginUser
    }&strPassword=${
      getState().site.initialConfig.loginPassword
    }&strToken=${user}`;

    axios
      .get(url)
      .then(function (response) {
        // handle success
        let parser = new DOMParser();
        let result = response.data;
        let xmlDoc = parser.parseFromString(result, "text/xml");
        window.xmlDoc = xmlDoc;
        if (xmlDoc.getElementsByTagName("intResult")[0]) {
          if (xmlDoc.getElementsByTagName("intResult")[0].childNodes[0]) {
            if (
              parseInt(
                xmlDoc.getElementsByTagName("intResult")[0].childNodes[0]
                  .nodeValue
              ) == 1
            ) {
              let pkPeopleID =
                xmlDoc.getElementsByTagName("pkPeopleID")[0].childNodes.length >
                0
                  ? xmlDoc.getElementsByTagName("pkPeopleID")[0].childNodes[0]
                      .nodeValue
                  : "";
              let FName = xmlDoc.getElementsByTagName("FName")[0].childNodes[0]
                .nodeValue;
              let MName =
                xmlDoc.getElementsByTagName("MName")[0].childNodes.length > 0
                  ? xmlDoc.getElementsByTagName("MName")[0].childNodes[0]
                      .nodeValue
                  : "";
              let LName1 =
                xmlDoc.getElementsByTagName("LName1")[0].childNodes.length > 0
                  ? xmlDoc.getElementsByTagName("LName1")[0].childNodes[0]
                      .nodeValue
                  : "";
              let LName2 =
                xmlDoc.getElementsByTagName("LName2")[0].childNodes.length > 0
                  ? xmlDoc.getElementsByTagName("LName2")[0].childNodes[0]
                      .nodeValue
                  : "";

              let fullName =
                xmlDoc.getElementsByTagName("fullName")[0].childNodes.length > 0
                  ? xmlDoc.getElementsByTagName("fullName")[0].childNodes[0]
                      .nodeValue
                  : "";
              let GuestType =
                xmlDoc.getElementsByTagName("GuestType")[0].childNodes.length >
                0
                  ? xmlDoc.getElementsByTagName("GuestType")[0].childNodes[0]
                      .nodeValue
                  : "";
              let Email =
                xmlDoc.getElementsByTagName("Email")[0].childNodes.length > 0
                  ? xmlDoc.getElementsByTagName("Email")[0].childNodes[0]
                      .nodeValue
                  : "";
              let UserObject = {
                pkPeopleID,
                FName,
                MName,
                LName1,
                LName2,
                fullName,
                GuestType,
                Email,
              };

              dispatch({
                type: SETUSERGENESIS,
                payload: { ...UserObject, userToken: user },
              });

              //Fetichng the user´s last purchases [START]
              let urlShoppingHistory = `${
                getState().site.initialConfig.urlAPI
              }/${
                getState().site.initialConfig.WebSection
              }/Shopping/getItemRelated?iPeopleID=${pkPeopleID}`;

              console.log(urlShoppingHistory);
              axios
                .get(urlShoppingHistory)
                .then((response) => {
                  console.log(response);
                  let newUser = { ...UserObject, itemsHistory: response.data };
                  dispatch({
                    type: SETUSERGENESIS,
                    payload: { ...newUser, userToken: user },
                  });
                })
                .catch((errors) => {
                  // react on errors.
                });
              //Fetichng the user´s last purchases [FINAL]
            }
          }
        }
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: SETUSERGENESIS,
          payload: { data: error, user: user },
        });
      });
  };
}
export function initConfig(data) {
  return {
    type: GETINICONFIG,
    payload: { data: data },
  };
  // return (dispatch, getState) => {
  //   getAuth()
  //     .then((e) => {
  //       dispatch({
  //         type: GETINICONFIG,
  //         payload: { data: data, user: e.user },
  //       });
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       dispatch({
  //         type: GETINICONFIG,
  //         payload: { data: data, user: null },
  //       });
  //     });
  // };
}
export function fetchImgGallery() {
  return {
    type: FETCHIMGGALLERY,
    payload: ImagenesBannerIndex,
  };
}
export function fetchConfiguration(site) {
  return (dispatch, getState) => {
    getDBConection()
      .ref("/configuration/" + site)
      .once("value")
      .then((snapshot) => {
        dispatch({
          type: FETCHCONFIGURATION,
          payload: snapshot.val(),
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: FETCHCONFIGURATION,
          payload: null,
        });
      });
  };
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
