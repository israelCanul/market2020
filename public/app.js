if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registrado) => {
      console.log("regiostrado", registrado);
    })
    .catch((error) => console.log("fallo la instalacion"));
} else {
  console.log("No soporta SW");
}
