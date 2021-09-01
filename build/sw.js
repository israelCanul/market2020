const nombreCache = "apv-v8";
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
  e.waitUntil(
    caches.open(nombreCache).then((cache) => {
      cache.addAll(archivos);
    })
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    // console.log(caches.keys())
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== nombreCache)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//evento fetch para descargar archivos
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((respuestaCache) => {
      if (respuestaCache == undefined) {
        return fetch(e.request);
      } else {
        return respuestaCache;
      }
    })
  );
});
