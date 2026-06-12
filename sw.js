/* Service worker for Lebanese Arabic Fast (PWA).
   Strategy:
   - Install: precache the minimal app shell.
   - Fetch (same-origin GET): stale-while-revalidate — serve from cache instantly,
     refresh the cache in the background, so every file ever loaded (all data/*.js,
     css, app.js, local lebanese-audio/*.mp3) becomes available offline after the
     first online visit, and updates land on the NEXT launch.
   - Cross-origin (Wikimedia/Lingua Libre audio): network-first with cache fallback,
     but never cached eagerly — opaque responses inflate the iOS storage quota.
   Bump CACHE_VERSION to force a clean re-fetch of everything. */
const CACHE_VERSION = 'leb-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // stale-while-revalidate for everything local
    e.respondWith(
      caches.open(CACHE_VERSION).then((cache) =>
        cache.match(req).then((cached) => {
          const refresh = fetch(req)
            .then((res) => {
              if (res && res.status === 200) cache.put(req, res.clone());
              return res;
            })
            .catch(() => cached); // offline: fall back to cache (or undefined)
          return cached || refresh;
        })
      )
    );
  } else {
    // remote audio etc: network-first, fall back to anything previously cached
    e.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
  }
});
