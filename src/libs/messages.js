import { getLanguage } from "../libs/language";
export default function getTexto(textoInput) {
  let response = "";

  if (getLanguage() == "en-US") {
    return textoInput;
  } else {
    return text[textoInput] != undefined ? text[textoInput] : textoInput;
  }
}
export let text = {
  "Log-out": "Cerrar Sesion",
  "All Categories": "Todas las Categorias",
  "Shop by Category": "Compra por Categoría",
};
