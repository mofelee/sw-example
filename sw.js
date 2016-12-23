self.addEventListener('install', function(event) {
  console.log('[sw] install');
});

self.addEventListener('activate', function(event) {
  console.log('[sw] activate');
});

self.addEventListener('fetch', function(event) {
  console.log('[sw] url: ' + event.request.url);
  if (/offline-data$/.test(event.request.url)) {
    event.respondWith(
      new Response('这是一条来自service worker的响应信息')
    );
  }
});
