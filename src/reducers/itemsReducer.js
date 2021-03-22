import {
  FETCHCONFIGURATION,
  FETCHIMGGALLERY,
  FETCHITEMSCATEGORIESFIREBASE,
  FETCHITEMSFIREBASE,
  GETINICONFIG,
} from "../actions/index";
const INITIAL_STATE = { perrito: "wow" };
export default function (state = INITIAL_STATE, action) {
  let newState = state;
  switch (action.type) {
    case GETINICONFIG:
      newState = { ...state, initialConfig: action.payload };
      break;
    case FETCHCONFIGURATION:
      //console.log(action.payload.val());
      let config = action.payload.val();
      let lan = state.initialConfig.Lan;
      let textos;
      if (lan == "En") {
        config.textos = config.textos.en;
        textos = textosPage.en;
      } else {
        config.textos = config.textos.es;
        textos = textosPage.es;
      }
      newState = {
        ...state,
        configuration: { ...config, language: lan, textosData: textos },
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
