const CACHE_NAME = "nookab-cache-v8";
const STATIC_ASSETS = [
  "./",
  "./site.webmanifest",
  "./css/style.css",
  "./js/i18n.js",
  "./js/script.js",
  "./js/vendor/gsap.min.js",
  "./js/vendor/ScrollTrigger.min.js",
  "./js/vendor/lenis.min.js",
  "./images/app/dashboard.webp",
  "./images/GooglePlay_Badge.svg",
  "./media/promo-poster.webp",
  "./pages/terms",
  "./pages/privacy",
  "./fonts/Inter-latin.woff2",
  "./icons/favicon.ico",
  "./icons/icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (!e.request.url.startsWith("http")) return;
  // Let the browser stream video with range requests directly
  if (e.request.headers.has("range")) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      // Browsers refuse a redirected response for a page navigation (blank page),
      // so hand back a clean copy if one was ever stored.
      if (cached) return cached.redirected ? cleanCopy(cached) : cached;

      return fetch(e.request).then((response) => {
        if (!response || response.status !== 200) return response;
        // Cloudflare Pages redirects /index.html → / and /x.html → /x;
        // never cache those redirect results.
        if (response.redirected) return response;

        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return response;
      });
    }),
  );
});

function cleanCopy(response) {
  return response.blob().then(
    (body) =>
      new Response(body, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      }),
  );
}
