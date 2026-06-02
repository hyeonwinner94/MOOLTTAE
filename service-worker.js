const CACHE = "moolttae-v3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./guide.html",
  "./styles.css",
  "./app.js",
  "./guide-data.js",
  "./guide-page.js",
  "./official-spots.js",
  "./banakpo-spots.js",
  "./danfish-spots.js",
  "./freshwater-spots.js",
  "./national-freshwater-spots.js",
  "./daeho-freshwater-spots.js",
  "./osm-freshwater-spots.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => Promise.all(APP_SHELL.map(async (url) => {
      const separator = url.includes("?") ? "&" : "?";
      const response = await fetch(`${url}${separator}cache=${CACHE}`);
      if (!response.ok) throw new Error(`Unable to cache ${url}`);
      await cache.put(url, response);
    })))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (!response || response.status !== 200 || response.type === "opaque") return response;
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }))
  );
});
