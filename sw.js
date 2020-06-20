importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log('Workbox berhasil dimuat');
} else {
    console.log('Workbox gagal dimuat');
}

workbox.precaching.precacheAndRoute([
    {
        url: '/manifest.json',
        revision: '1'
    },
    {
        url: '/push.js',
        revision: '1'
    },
    {
        url: '/detail_tim.html',
        revision: '1'
    },
    {
        url: '/favorit.html',
        revision: '1'
    },
    {
        url: '/index.html',
        revision: '1'
    },
    {
        url: '/pemain.html',
        revision: '1'
    },
    {
        url: '/css/materialize.min.css',
        revision: '1'
    },
    {
        url: '/img/mega-ball.png',
        revision: '1'
    },
    {
        url: '/js/db.js',
        revision: '1'
    },
    {
        url: '/js/detail_tim.js',
        revision: '1'
    },
    {
        url: '/js/favorit.js',
        revision: '1'
    },
    {
        url: '/js/idb.js',
        revision: '1'
    },
    {
        url: '/js/jquery-2.1.4.min.js',
        revision: '1'
    },
    {
        url: '/js/materialize.min.js',
        revision: '1'
    },
    {
        url: '/js/nav.js',
        revision: '1'
    },
    {
        url: '/js/pemain.js',
        revision: '1'
    },
    {
        url: '/js/register_sw_notif.js',
        revision: '1'
    },
    {
        url: '/js/tim.js',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-36x36.png',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-48x48.png',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-72x72.png',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-96x96.png',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-144x144.png',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-192x192.png',
        revision: '1'
    },
    {
        url: '/img/icons/android-icon-512x512.png',
        revision: '1'
    },
    {
        url: '/img/icons/apple-icon.png',
        revision: '1'
    },
]);


workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'football-api',
    })
);

self.addEventListener('push', function (event) {
    let body = '';
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    const options = {
        body: body,
        icon: 'img/mega-ball.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Pengingat Jadwal Pertandingan', options)
    );
});