"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/build/index.html","ce412383982349f57f44a24a7c1b1ca0"],["/build/static/css/main.6cf0f2d5.css","063a55106dbffae61e40f62821c8064d"],["/build/static/js/main.326f29cf.js","6c9f82e531cedab91d69433a5f2556b3"],["/build/static/media/analytics.f35c9c96.png","f35c9c96976f3446e60a9d417b0a0f49"],["/build/static/media/credit-card.012e337a.png","012e337ab940bd9efa08ec676d9d0ed0"],["/build/static/media/customization.efc8e33b.png","efc8e33b69bdd07dd6716e40591863b3"],["/build/static/media/dashboard.312c5bd5.jpg","312c5bd5a21e68a02976d5e8e4fb56e7"],["/build/static/media/drag.ea0ff33a.png","ea0ff33a28ea52718837fc0a4b3ad074"],["/build/static/media/everywhere.8b219fce.png","8b219fce601458bc7fcb2f8f575e2c23"],["/build/static/media/integrations.f9af82b1.png","f9af82b1ad90b1a46d4d60c0db2b2f3a"],["/build/static/media/mobile-first.be50fb11.png","be50fb11fad7cddf4bf79666ea7bb4e0"],["/build/static/media/payment-methods.58673726.png","5867372632c7a7ae0a60d59569d09697"],["/build/static/media/user-management.49ab7e2a.png","49ab7e2a532b3eec4dded8f9693b0c59"],["/build/static/media/worldmap.86a2a7eb.png","86a2a7eb9ef89f2e90720d3ca0331c13"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/build/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});