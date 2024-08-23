const CACHE_NAME = 'yumbilla-cache-v1';
const urlsToCache = [
  '/',
  '/index.css',
  '/android-icon-192x192.png',
  '/apple-icon-180x180.png',
  '/favicon-32x32.png',
  '/favicon-96x96.png',
  '/favicon-16x16.png'
];

// Install event - Cache important files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - Serve files from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
