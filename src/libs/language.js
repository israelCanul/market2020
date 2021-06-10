import { setCookieForm, getCookieForm } from "./cookieManager";
export function SetLanguage(idiom = "en-US", callback) {
  setCookieForm("Language", idiom);
  setTimeout(() => {
    callback();
  }, 100);
}
export function getLanguage() {
  return getCookieForm("Language") == "" ? "en-US" : getCookieForm("Language");
}

export function SetCurrency(cur) {
  setCookieForm("Currency", cur);
}
export function getCurrency() {
  return getCookieForm("Currency") == "" ? "MXN" : getCookieForm("Currency");
}
