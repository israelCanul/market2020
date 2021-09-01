import { setCookieForm, getCookieForm } from "./cookieManager";
export function SetLanguage(idiom = "en-US", callback) {
  setCookieForm("Language", idiom);
  window.location.reload();
  setTimeout(() => {
    callback();
  }, 100);
}
export function getLanguage() {
  return getCookieForm("Language") == "" ? "en-US" : getCookieForm("Language");
}

export function getLanguageEndpoints(domain, devDomain, webSection = "KSK") {
  let urlEndpoint = "";
  if (isDev()) {
    //se agrega lenguaje
    urlEndpoint += devDomain;
    urlEndpoint +=
      getCookieForm("Language") == ""
        ? "/"
        : getCookieForm("Language") == "en-US"
        ? "/"
        : "ES/";
    urlEndpoint += webSection + "/";
    urlEndpoint += "/Shopping";
  } else {
    urlEndpoint += domain;
    urlEndpoint +=
      getCookieForm("Language") == ""
        ? "/"
        : getCookieForm("Language") == "en-US"
        ? "/"
        : "/es/";
    urlEndpoint += "RoyalMarket/";
    urlEndpoint += webSection + "/";
    urlEndpoint += "/Shopping";
  }
  return urlEndpoint;
}

export function isDev() {
  if (window.location.host == "localhost:3000") {
    return true;
  } else {
    return false;
  }
}

export function SetCurrency(cur) {
  setCookieForm("Currency", cur);
}
export function getCurrency() {
  return getCookieForm("Currency") == "" ? "MXN" : getCookieForm("Currency");
}
