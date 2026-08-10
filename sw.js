const CACHE_NAME = 'fit-converter-v1';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './favicon.svg',
  './node_modules/leaflet/dist/leaflet.js',
  './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  './node_modules/chart.js/dist/chart.umd.js',
  './node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2',
  './node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
