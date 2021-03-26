import {
  FETCHCONFIGURATION,
  FETCHIMGGALLERY,
  FETCHITEMSCATEGORIESFIREBASE,
  FETCHITEMSFIREBASE,
  GETINICONFIG,
  SETUSERGENESIS,
} from "../actions/index";
const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
  console.log(action);
  let newState = state;
  switch (action.type) {
    case SETUSERGENESIS:
      console.log(action.payload);
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
