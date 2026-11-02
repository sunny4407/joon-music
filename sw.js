// 준뮤직 서비스 워커: 화면(index.html)은 항상 인터넷에서 새로 받아 와서, 고친 내용이 바로 보이게 해요.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => fetch(e.request)));
  }
});
