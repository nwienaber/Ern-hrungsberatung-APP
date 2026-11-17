// Minimal offline-capable service worker for the demo PWA.
// Cache-first for same-origin GET requests, with a versioned cache name so
// pushing new files is enough to invalidate the old cache on next visit.
const CACHE = "ernaehrung-demo-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",
  "./fachkraft/dashboard.html",
  "./fachkraft/klient.html",
  "./fachkraft/screening.html",
  "./fachkraft/plan.html",
  "./fachkraft/einstellungen.html",
  "./mobile/einwilligung.html",
  "./mobile/pflege.html",
  "./mobile/angehoerige.html",
  "./mobile/kommunikation.html",
  "./mobile/betroffene.html",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((resp) => {
          if (resp && resp.ok) {
            const copy = resp.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
