import { getLanguage } from "../libs/language";

var textos = {};

export default function getTexto(textoInput) {
  let response = "";
  if (getLanguage() == "en-US") {
    return textoInput;
  } else {
    return textos[textoInput] != undefined ? textos[textoInput] : textoInput;
  }
}

export function setTextToTraslateTool(textResp) {
  textos = {};
  textos = textResp;
}


