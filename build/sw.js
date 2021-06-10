const nombreCache = "apv-v1";
const archivos = [
  "/",
  "/index.html",
  "app.js",
  "/js/modules.js",
  "/index.js",
  "/0.js",
  "/1.js",
  "/2.js",
  "/3.js",
  "/4.js",
  "/5.js",
  "/6.js",
  "/7.js",
  "/8.js",
  "/9.js",
  "/10.js",
  "/11.js",
  "/12.js",
  "/13.js",
  "/config.json",
  "/items.json",
  "/categories.json",
  "/traslations.json",
  "/manifest.json",
];
self.addEventListener("install", (e) => {
  console.log("instalado el sw");
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      console.log("cacheado");
      cache.addAll(archivos);
    })
  );
});
self.addEventListener("activate", (e) => {
  console.log("activado el sw");
  console.log(e);
});

//evento fetch para descargar archivos
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async function () {
      caches.match(e.request).then((respuestaCache) => {
        return respuestaCache;
      });
      return fetch(e.request);
    })()
  );
});
