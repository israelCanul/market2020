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
      ":3000/redirect.html",
    "CNN_WindowName",
    strWindowFeatures
  );
}
