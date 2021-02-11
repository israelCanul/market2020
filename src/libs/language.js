import { setCookieForm, getCookieForm } from "./cookieManager";
export function SetLanguage(idiom) {
  setCookieForm("Language", idiom);
}
export function getLanguage() {
  return getCookieForm("Language") == "" ? "en-US" : getCookieForm("Language");
}
