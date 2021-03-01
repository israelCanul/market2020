export function getParamsFromUrl(variable) {
  let search = window.location.search.substr(1);
  let value = null;
  search.split("&").map((par) => {
    console.log(par);
    console.log(par.split("=")[0] == variable);
    par.split("=")[0] == variable
      ? (value = par.split("=")[0])
      : (value = null);
  });
  value = search.split("&").filter((p) => {
    return p.split("=")[0] == variable;
  });
  if (typeof value == "object") {
    return value[0].split("=")[1];
  }
  return value;
}
