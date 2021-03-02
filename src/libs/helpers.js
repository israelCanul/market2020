export function getParamsFromUrl(variable) {
  let search = window.location.search.substr(1);
  var searchParams = new URLSearchParams(search);
  return searchParams.get(variable);
  // let value = null;
  // search.split("&").map((par) => {
  //   par.split("=")[0] == variable
  //     ? (value = par.split("=")[0])
  //     : (value = null);
  // });
  // value = search.split("&").filter((p) => {
  //   return p.split("=")[0] == variable;
  // });

  // if (typeof value == "object" && value.length > 0) {
  //   return value[0].split("=")[1];
  // } else {
  //   value = null;
  // }
  // return value;
}
export function getAllParamsFromUrl() {
  let search = window.location.search.substr(1);
  var searchParams = new URLSearchParams(search);
  return searchParams;
}
