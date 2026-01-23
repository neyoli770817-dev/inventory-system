self.addEventListener('fetch', function(event) {
  // 這是為了滿足安裝條件，讓網頁具備離線基本能力
  event.respondWith(fetch(event.request));
});
