var cacheName = 'resturant';

var cachedfiles = [
'/data/restaurants.json',
'/js/dbhelper.js',
'/js/main.js',
'/js/restaurant_info.js',
'/css/styles.css',
'/restaurant.html',
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg',
'/',
'/index.html',

];
self.addEventListener('install', e => {
	console.log('serviceWorker : Installed');
	e.waitUntil(
		caches
		.open(cacheName)
		.then(cache => {
			console.log('service Worker: caching files');
			cache.addAll(cachedfiles);
		})
		// .then(() => self.skipWaiting())
);
});

// self.addEventListener('activate', e => {
// 	console.log('service worker: Activated');
// 	e.waitUntil(
// 	caches.kes().then(cacheNames => {
// 		return promise.all(
// 			cacheNames.map(cache => {
// 		if(cache !== cacheName) {
// 			console.log('serviceWorker: clean old cache');
// 			return caches.delete(cache);
// 		}
// 	})
// 	); 
// })
// );
// });
self.addEventListener('fetch', e => {
	console.log('service worker : Fetching');
	e.respondWith(
		fetch(e.request).catch(() => caches.match(e.request)))
});