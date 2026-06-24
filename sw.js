// Service Worker — Depo Injekcije
// Ob vsaki novi verziji aplikacije povečaj VERSION (npr. v4m-2, v4m-3 ...)
const VERSION = 'v4p-1';
const CACHE = 'depo-' + VERSION;
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // KLJUČNO: cachiramo SAMO lastne datoteke z istega izvora in samo GET.
  // Vse zunanje zahteve (Google Apps Script, ipd.) in vse ne-GET (POST) gredo
  // naravnost na mrežo, brez vmešavanja service workerja.
  const sameOrigin = url.origin === self.location.origin;
  if (e.request.method !== 'GET' || !sameOrigin) {
    return; // pusti brskalniku, da normalno opravi zahtevo
  }

  // HTML: network-first (sveža verzija, ko je internet)
  if (e.request.mode === 'navigate' || url.pathname.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Ostale lastne GET datoteke: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      // shranimo samo uspešne, osnovne (same-origin) odgovore
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }))
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
