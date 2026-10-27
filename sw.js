// 앱으로 설치되도록 돕는 최소한의 서비스 워커입니다. 화면은 항상 인터넷에서 새로 불러옵니다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
