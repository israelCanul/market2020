import { getLanguage } from "../libs/language";
export let URL = {
  "/": "/",
  "/s": "/s",
  "/cart-items": "/cart-items",
  "/products": "/products",
  "/products/:producto": "/products/:producto",
  "/categories": "/categories",
  "/categories/:id": "/categories/:id",
  "/categories/:id/:subid": "/categories/:id/:subid",
  "/shopping-history": "/shopping-history",
};

export default function getURL(textoInput) {
  let response = "";
  if (getLanguage() == "en-US") {
    return textoInput;
  } else {
    return URL[textoInput] != undefined ? URL[textoInput] : textoInput;
  }
}
