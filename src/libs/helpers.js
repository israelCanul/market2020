import _ from "lodash";
export function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
export function getParamsFromUrl(variable) {
  let search = window.location.search.substr(1);
  var searchParams = new URLSearchParams(search);
  return searchParams.get(variable);
}
export function getAllParamsFromUrl() {
  let search = window.location.search.substr(1);
  var searchParams = new URLSearchParams(search);
  return searchParams;
}

export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function openModalForLogin(config, reduxLogin) {
  var left = screen.width / 2 - 400 / 2;
  var top = screen.height / 2 - 600 / 2;
  var strWindowFeatures =
    "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top=" +
    top +
    ", left=" +
    left +
    "";
  window["output"] = function (userToken) {
    reduxLogin(userToken);
  };
  window.open(
    config.urlToGetTokenToLogin +
      "?Code=" +
      config.codeToGetTokenToLogin +
      "&ReturnUrl=" +
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.hostname == "localhost" ? ":3000" : "") +
      "/redirect.html",
    "CNN_WindowName",
    strWindowFeatures
  );
}
export function RetrieveRandomObjByCat(objects, cat, numberToRetrieve) {
  let arrayItems = [];
  let itents = 0;
  let itemsFilteredByCat = _.filter(objects, function (o) {
    return o.ItemExt.Group.SGroupCode == cat;
  });
  while (arrayItems.length < numberToRetrieve && itents < 1000) {
    let number = _.random(0, Object.keys(itemsFilteredByCat).length);
    let newArray = itemsFilteredByCat.slice(number, number + 1);
    if (newArray.length > 0) {
      if (
        _.findIndex(arrayItems, function (o) {
          return o.IItemID == newArray[0].IItemID;
        }) == -1
      ) {
        arrayItems.push(...newArray);
      }
    }
    itents++;
  }
  return arrayItems;
}

export function openModalForRetrieveUser(config, reduxLogin) {
  var left = screen.width / 2 - 400 / 2;
  var top = screen.height / 2 - 600 / 2;
  var strWindowFeatures =
    "menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=400,innerHeight=600,centerscreen=yes,chrome=yes, top=" +
    top +
    ", left=" +
    left +
    "";
  window["output"] = function (userToken) {
    reduxLogin(userToken);
  };
  window.open(
    config.urlToRetrieveTokenToLogin +
      "?Code=" +
      config.codeToGetTokenToLogin +
      "&ReturnUrl=" +
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.hostname == "localhost" ? ":3000" : "") +
      "/redirect.html",
    "CNN_WindowName",
    strWindowFeatures
  );
}

export function getRichText(str){
  let result = "";
  let key = "";
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if(char === "*" && str[i + 1] === "*" && key === ""){
          result = result + "<strong>";
          key = "*";
          i++;
          continue;
      }else if(char === "*" && str[i + 1] === "*" && key === "*" ){
          result = result + "</strong>";
          key = "";
          i++;
          continue;
      }

      if(char === "_" && str[i + 1] === "_" && key === ""){
          result = result + "<span style=\"text-decoration: underline\">";
          key = "_";
          i++;
          continue;
      }else if(char === "_" && str[i + 1] === "_" && key === "_"){
          result = result + "</span>";
          key = "";
          i++;
          continue;
      }
      result = result + char;
  }

      
  return result;
}

