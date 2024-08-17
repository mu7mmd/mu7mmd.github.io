'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c254e9b48636a4dc61f982ea92a778bf",
"version.json": "08e8a7e53f42255ce0d788d001cfb01f",
"splash/img/light-2x.png": "6c4457b9cf0644e5389a0a1f3d0306d7",
"splash/img/branding-4x.png": "a6e1201d7360fdcdbac67d6dfd7d6ad8",
"splash/img/dark-1x.gif": "1d9f945754a03bfb50414b5fb4d271aa",
"splash/img/branding-dark-4x.gif": "0dfdcec0a7d8bad4c448e4eacaac443d",
"splash/img/branding-1x.gif": "1d9f945754a03bfb50414b5fb4d271aa",
"splash/img/dark-4x.png": "a6e1201d7360fdcdbac67d6dfd7d6ad8",
"splash/img/branding-dark-1x.png": "6361b471b4bff149c051a8d5be160ad1",
"splash/img/light-3x.png": "9ac7cb0ca358a243b22c5538f640d627",
"splash/img/dark-3x.png": "9ac7cb0ca358a243b22c5538f640d627",
"splash/img/branding-dark-2x.gif": "b618b6aca2043ea4b270de7fcbe2df35",
"splash/img/light-4x.png": "a6e1201d7360fdcdbac67d6dfd7d6ad8",
"splash/img/branding-2x.png": "6c4457b9cf0644e5389a0a1f3d0306d7",
"splash/img/branding-3x.png": "9ac7cb0ca358a243b22c5538f640d627",
"splash/img/light-1x.gif": "1d9f945754a03bfb50414b5fb4d271aa",
"splash/img/branding-dark-3x.gif": "ae2eec77737381ea9ea2dc69ba56c418",
"splash/img/dark-2x.png": "6c4457b9cf0644e5389a0a1f3d0306d7",
"splash/img/light-2x.gif": "b618b6aca2043ea4b270de7fcbe2df35",
"splash/img/branding-4x.gif": "0dfdcec0a7d8bad4c448e4eacaac443d",
"splash/img/dark-1x.png": "6361b471b4bff149c051a8d5be160ad1",
"splash/img/branding-dark-4x.png": "a6e1201d7360fdcdbac67d6dfd7d6ad8",
"splash/img/branding-1x.png": "6361b471b4bff149c051a8d5be160ad1",
"splash/img/dark-4x.gif": "0dfdcec0a7d8bad4c448e4eacaac443d",
"splash/img/branding-dark-1x.gif": "1d9f945754a03bfb50414b5fb4d271aa",
"splash/img/light-3x.gif": "ae2eec77737381ea9ea2dc69ba56c418",
"splash/img/dark-3x.gif": "ae2eec77737381ea9ea2dc69ba56c418",
"splash/img/branding-dark-2x.png": "6c4457b9cf0644e5389a0a1f3d0306d7",
"splash/img/light-4x.gif": "0dfdcec0a7d8bad4c448e4eacaac443d",
"splash/img/branding-2x.gif": "b618b6aca2043ea4b270de7fcbe2df35",
"splash/img/branding-3x.gif": "ae2eec77737381ea9ea2dc69ba56c418",
"splash/img/light-1x.png": "6361b471b4bff149c051a8d5be160ad1",
"splash/img/branding-dark-3x.png": "9ac7cb0ca358a243b22c5538f640d627",
"splash/img/dark-2x.gif": "b618b6aca2043ea4b270de7fcbe2df35",
"index.html": "065564463cf3c57982dbb4c22f6b3bef",
"/": "065564463cf3c57982dbb4c22f6b3bef",
"main.dart.js": "cc895e8c3fcf4d0dc550324041634938",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "98169c07680f7065c66509aff295a7b9",
"assets/AssetManifest.json": "a2689e4b5fd17877baeeb44c4b29d5a7",
"assets/NOTICES": "a85cfa58909a5ff4118568683d10d442",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "47ab1e19f24e82160eb38246becf8bd1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cf4433e8230e105d86801a2745ad320e",
"assets/fonts/MaterialIcons-Regular.otf": "dc46100920fd7ab6aaebafc7ea0711a4",
"assets/assets/us.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/loading.gif": "c2670b287488b7b545d6e76a849d7dec",
"assets/assets/triangles.jpg": "fefea9240463b49003c501086c0333db",
"assets/assets/avatar.jpg": "89b287169610d514a0a9b990252629cc",
"assets/assets/logo.png": "038e8f2784f6acb6f4a5c1fb98e7b1b1",
"assets/assets/germany.jpg": "82623da2fecdb9f7f01c8d2a40280115",
"assets/assets/italy.jpg": "cb70a909316380dd64b00f2556e6ab48",
"assets/assets/logo-sm.png": "3a6d5258fbadb26172fb9a0c3e78b119",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
