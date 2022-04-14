const nombreCache = "apv-v9";
const archivos = [
  "/",
  "/index.html",
  "app.js",
  "/js/modules.js",
  "/index.js",
  "/0.js",
  "/config.json",
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
