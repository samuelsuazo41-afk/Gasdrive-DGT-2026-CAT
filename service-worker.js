const CACHE_NAME = 'gasdrive-v8.2-cat';
const urlsToCache = [
  '/Gasdrive-DGT-2026-CAT/',
  '/Gasdrive-DGT-2026-CAT/index.html',
  '/Gasdrive-DGT-2026-CAT/app.js',
  '/Gasdrive-DGT-2026-CAT/manifest.json',
  '/Gasdrive-DGT-2026-CAT/icon-192.png',
  '/Gasdrive-DGT-2026-CAT/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).catch(() => {
          if (event.request.destination === 'document') {
            return caches.match('/Gasdrive-DGT-2026-CAT/index.html');
          }
        });
      })
  );
});
