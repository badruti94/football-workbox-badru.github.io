var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BEbi8E80IaAiVeISdbdkc2NHIj_hqIl-Wdrqr2ZMQk78PcAQe4eoWaOcGjfe2kSu7vENNA9ex72yn-ia3jUdSSI",
    "privateKey": "KiLCdy1EuZZxPSKjqkPlNCSafD4YjsQTOcg1nhm0-2k"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cJU2bgjsF9U:APA91bFpFNHlM0wgXjy-dNOQ4T_zTLi4G06gG8rUc0K7QE1ArPYIjNIfKHucP24-kML7j4JTABRzVHYu1zaRbcTPKEfXdWU-j92fTBsPzngPj5_tSxAeKJT6wD43T0B2mLkbVWn30hkx",
    "keys": {
        "p256dh": "BADins6FyG9C3nzpDqgdAWdb++8sIGfpAzfYcl/PAH/yrJBmx3OAU9bfX5N34qou3rie+Nk2KH+YAyTgBC79uW0=",
        "auth": "WmmSENHwYeza4PIFmJVgZw=="
    }
};
var payload = 'Hari ini jadwal pertandingan Barcelona vs Real Madrid';
var options = {
    gcmAPIKey: '119400384505',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);