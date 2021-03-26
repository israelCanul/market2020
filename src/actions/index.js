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

export function SetUserFromGenesis(user) {
  return (dispatch, getState) => {
    console.log(getState());
    let url = `${getState().site.initialConfig.urlLogin}?strUserName=${
      getState().site.initialConfig.loginUser
    }&strPassword=${
      getState().site.initialConfig.loginPassword
    }&strToken=${user}`;
    // ?strUserName=2leJvJJFkiQ=&strPassword=nlzufEFcsxzn5xsb6HFtGA==&strToken="+readCookie('Token')
    axios
      .get(url)
      .then(function (response) {
        // handle success
        let parser = new DOMParser();
        let result = response.data;
        let xmlDoc = parser.parseFromString(result, "text/xml");
        window.xmlDoc = xmlDoc;
        console.log(response.data);
        // let result = txml.parse(response.data);
        console.log(
          xmlDoc.getElementsByTagName("intResult")[0].childNodes[0].nodeValue
        );
        console.dir(xmlDoc);

        //   <tblTable diffgr:id="tblTable1" msdata:rowOrder="0" diffgr:hasChanges="inserted">
        //   <intResult>1</intResult>
        //   <strResult>successfull operation</strResult>
        // </tblTable>
        // <Table diffgr:id="Table1" msdata:rowOrder="0">
        //   <pkPeopleID>2197774</pkPeopleID>
        //   <FName>JIBAR</FName>
        //   <MName>SAID</MName>
        //   <LName1>LOPEZ</LName1>
        //   <LName2>MOLINA</LName2>
        //   <fullName>JIBAR LOPEZMOLINA</fullName>
        //   <GuestType>NON-MEMBER</GuestType>
        //   <Email>jslopez@royalresorts.com</Email>
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    return {
      type: SETUSERGENESIS,
      payload: user,
    };
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
