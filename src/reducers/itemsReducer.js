import {
  FETCHCONFIGURATION,
  FETCHIMGGALLERY,
  FETCHITEMSCATEGORIESFIREBASE,
  FETCHITEMSFIREBASE,
  GETINICONFIG,
  SETUSERGENESIS,
  LOGOUTUSER,
} from "../actions/index";

import { getLanguage } from "../libs/language";
import { setCookieForm, deleteCookieForm } from "../libs/cookieManager";
const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
  console.log(action);
  let newState = state;
  switch (action.type) {
    case "PRUEBA":
      newState = { ...state, valorPrueba: action.payload };
      break;
    case LOGOUTUSER:
      deleteCookieForm("user", getLanguage());
      localStorage.setItem("user", null);
      console.log(action);
      // action.asyncDispatch({ type: "PRUEBA", payload: "valor prueba" });
      newState = {
        ...state,
        user: undefined,
      };
      break;
    case SETUSERGENESIS:
      //guardamos el token en un cookie
      setCookieForm("user", action.payload.userToken, getLanguage());
      //guardamos el user con el token en localstorage para evitar la llamada en cada recarga
      localStorage.setItem("user", window.btoa(JSON.stringify(action.payload)));
      //seteamos el nuevo state de la aplicacion
      newState = {
        ...state,
        user: action.payload,
      };
      break;
    case GETINICONFIG:
      newState = {
        ...state,
        initialConfig: action.payload.data,
        user: action.payload.user,
      };
      break;
    case FETCHCONFIGURATION:
      //console.log(action.payload.val());
      let config = action.payload;
      let lan = state.initialConfig.Lan;
      let textos;
      if (lan == "En") {
        config.contenido = config.contenido.en;
      } else {
        config.contenido = config.contenido.es;
      }
      newState = {
        ...state,
        configuration: { ...config, language: lan },
      };
      break;

    case FETCHITEMSCATEGORIESFIREBASE:
      let array = [];
      action.payload.data.map((item) => {
        array.push(item);
      });
      newState = { ...state, categories: array };
      break;
    case FETCHITEMSFIREBASE:
      itemsSave = action.payload.data.slice();
      newState = {
        ...state,
        itemsfilter: action.payload.data,
        items: action.payload.data,
        pages: 0,
      };
      break;
    default:
      newState = state;
  }
  return newState;
}
