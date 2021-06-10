const nombreCache = "apv-v1";
const archivos = [
  "/",
  "/index.html",
  "app.js",
  "/public/modules.js",
  "/public/index.js",
  "/public/0.js",
  "/public/1.js",
  "/public/2.js",
  "/public/3.js",
  "/public/4.js",
  "/public/5.js",
  "/public/6.js",
  "/public/7.js",
  "/public/8.js",
  "/public/9.js",
  "/public/10.js",
  "/public/11.js",
  "/public/12.js",
  "/public/13.js",
  "/manifest.json",
  "/sockjs-node/info?t=1623277616598",
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
  // console.log("fetch..", e);
  e.respondWith(
    caches.match(e.request).then((respuestaCache) => {
      console.log(respuestaCache);
      return respuestaCache;
    })
  );
});
