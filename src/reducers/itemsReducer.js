import {
  FETCHCONFIGURATION,
  FETCHIMGGALLERY,
  FETCHITEMSCATEGORIESFIREBASE,
  FETCHITEMSFIREBASE,
  GETINICONFIG,
  SETUSERGENESIS,
  LOGOUTUSER,
  GETLANGUAGE,
  SETLANGUAGE,
} from "../actions/index";

import { getLanguage } from "../libs/language";
import { setCookieForm, deleteCookieForm } from "../libs/cookieManager";
const INITIAL_STATE = { user: undefined, language: getLanguage() };
export default function (state = INITIAL_STATE, action) {
  let newState = state;
  switch (action.type) {
    case SETLANGUAGE:
      newState = { ...state, language: action.payload };
      break;
    case "PRUEBA":
      newState = { ...state, valorPrueba: action.payload };
      break;
    case LOGOUTUSER:
      deleteCookieForm("user", getLanguage());
      localStorage.setItem("user", null);
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
      let config = action.payload;
      let lan = getLanguage();
      let textos;

      if (lan == "en-US") {
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
