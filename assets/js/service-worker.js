/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","691f799807731eabbdd9fbf09c7e3a55"],["assets/css/animate.min.css","55009d64191e6f9e712a841773ee6611"],["assets/css/blog.css","a266006d83985b235b08b69c5c3078d3"],["assets/css/bootstrap.css","8e2dfbeacdc9bb6785cbded516ffa2d7"],["assets/css/colors/color1.css","9c10eb379ebb33a53d756bc9a8151c7a"],["assets/css/colors/color2.css","9ef4e6379a0d8e6ce5740ad6d03f7407"],["assets/css/colors/color3.css","0eff4b368309b36a0a7f64e131f83b25"],["assets/css/colors/color4.css","d7d093b5ab84b8b10e24018a579070e7"],["assets/css/colors/color5.css","bb80792d99392a45993da623b43aef4e"],["assets/css/colors/color6.css","de7dd782de7b5ebb24f94ac87eef6cc9"],["assets/css/colors/color7.css","fca08ebba015f738da70e619a0dad619"],["assets/css/colors/color8.css","1814451db88ee255e9117af4aa7ecfe9"],["assets/css/main.css","be6c5d4d64ee729ad4edc3fcf05ae904"],["assets/css/normalize.css","8aa9931c64a79a6431c28643b75878dd"],["assets/css/responsive.css","4880db944570b37d94dc611f607b3c6f"],["assets/files/BharatSinha.docx","dcc2e588f45ce1039c5820fa5329462e"],["assets/font/font-awesome/css/font-awesome.min.css","f667e6132f8470a39d2395b81ab4ef09"],["assets/font/font-awesome/fonts/FontAwesome.otf","0b462f5cc07779cab3bef252c0271f2b"],["assets/font/font-awesome/fonts/fontawesome-webfont.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["assets/font/font-awesome/fonts/fontawesome-webfont.svg","139e74e298bca37a25d2bd5868552e04"],["assets/font/font-awesome/fonts/fontawesome-webfont.ttf","706450d7bba6374ca02fe167d86685cb"],["assets/font/font-awesome/fonts/fontawesome-webfont.woff","d9ee23d59d0e0e727b51368b458a0bff"],["assets/font/font-awesome/fonts/fontawesome-webfont.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["assets/font/glyphicons-halflings-regular.eot","7ad17c6085dee9a33787bac28fb23d46"],["assets/font/glyphicons-halflings-regular.svg","a0f6fe8cea771f29666c3b374be1339a"],["assets/font/glyphicons-halflings-regular.ttf","e49d52e74b7689a0727def99da31f3eb"],["assets/font/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["assets/js/common.js","069bc98941cc215f89b55fe93edd32d1"],["assets/js/detectmobilebrowser.js","ac2a48bd8ac1e5592c1c5d048b5b0693"],["assets/js/gmaps.js","f3d3da85ae5918a7f27220c2849daa87"],["assets/js/html5shiv.js","9a0180c3b65157e524988316a5fc2ef3"],["assets/js/isotope.pkgd.min.js","41f61bf4045cfffd349e74ba24425d4b"],["assets/js/jquery.counterup.min.js","ef36cca760bf1cd76cfcd0e4dc10cef1"],["assets/js/jquery.easing.1.3.js","6516449ed5089677ed3d7e2f11fc8942"],["assets/js/jquery.nicescroll.min.js","8dee6808e5697eb7c6051f40b995dde0"],["assets/js/main.js","a85b6800449853aab59d3076400d1a02"],["assets/js/waypoints.js","71967be36cbfcebea8e0d9cf91b83881"],["assets/js/wow.min.js","4b253cabaafa86647183695c4c4365e7"],["assets/libs/jwplayer/jwplayer.flash.swf","e4c199b8cbb86fc3bbc3b1a1e3051038"],["assets/libs/jwplayer/jwplayer.html5.js","502a17cd6e1801aa6e245e8fc79ab7c3"],["assets/libs/jwplayer/jwplayer.js","0529b2abc1e42b6739b9daa410de76eb"],["assets/libs/materialize/css/materialize.min.css","57b58d624c36bdd4ac744fa69fb1d043"],["assets/libs/materialize/font/material-design-icons/LICENSE.txt","61bcbbdbfc498d028e87b0b8b14c28fc"],["assets/libs/materialize/font/material-design-icons/Material-Design-Icons.eot","d23b5163599596ee8fed5e6c4fce824d"],["assets/libs/materialize/font/material-design-icons/Material-Design-Icons.svg","98311456903486ecf6f8f705bee85781"],["assets/libs/materialize/font/material-design-icons/Material-Design-Icons.ttf","2635ab518b71cfe3d4241741689d8894"],["assets/libs/materialize/font/material-design-icons/Material-Design-Icons.woff","0fc5952b2ad99db0fa1a49c2e0fd5928"],["assets/libs/materialize/font/material-design-icons/Material-Design-Icons.woff2","ea902f805118759f156065345dbc8115"],["assets/libs/materialize/font/roboto-bak/LICENSE.txt","d273d63619c9aeaf15cdaf76422c4f87"],["assets/libs/materialize/font/roboto-bak/Roboto-Black.ttf","893fe14628bd7ac498d550e96367e1be"],["assets/libs/materialize/font/roboto-bak/Roboto-BlackItalic.ttf","256aab654d3c4dd0e12fd0a32c7e8aa6"],["assets/libs/materialize/font/roboto-bak/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/libs/materialize/font/roboto-bak/Roboto-Bold.woff","bb3a4465727a4d48a309d171d1439695"],["assets/libs/materialize/font/roboto-bak/Roboto-Bold.woff2","7d8473513da5dc7291f6f7bbe6e64204"],["assets/libs/materialize/font/roboto-bak/Roboto-BoldItalic.ttf","b37d0bb73a2f688ecaee01647f41e3e5"],["assets/libs/materialize/font/roboto-bak/Roboto-Italic.ttf","de74c60991cd63c8b922e0e665a39c7a"],["assets/libs/materialize/font/roboto-bak/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/libs/materialize/font/roboto-bak/Roboto-Light.woff","33058ff0fec2feb24075c725f17d1a7c"],["assets/libs/materialize/font/roboto-bak/Roboto-Light.woff2","f3847affca595467fb86c541c2ccc4db"],["assets/libs/materialize/font/roboto-bak/Roboto-LightItalic.ttf","129c5057f4480f9a353e15e1e1e09f9d"],["assets/libs/materialize/font/roboto-bak/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/libs/materialize/font/roboto-bak/Roboto-Medium.woff","c42b9730e1ad396379c249c36776cc6f"],["assets/libs/materialize/font/roboto-bak/Roboto-Medium.woff2","540d8df6b025561bbe6e984e8e6c35d7"],["assets/libs/materialize/font/roboto-bak/Roboto-MediumItalic.ttf","5b25afa871e1b896011859f8cdf8da74"],["assets/libs/materialize/font/roboto-bak/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/libs/materialize/font/roboto-bak/Roboto-Regular.woff","057d4117d1b0ce5ef2acce345bf87748"],["assets/libs/materialize/font/roboto-bak/Roboto-Regular.woff2","430f0403707aee3d05e01ad4b7f865a8"],["assets/libs/materialize/font/roboto-bak/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/libs/materialize/font/roboto-bak/Roboto-Thin.woff","f02bb57a508cf94116df992e94757795"],["assets/libs/materialize/font/roboto-bak/Roboto-Thin.woff2","3387eb3a6d4f4147716b2c7235389604"],["assets/libs/materialize/font/roboto-bak/Roboto-ThinItalic.ttf","1e5737be5c68c15c3a105b2db9a3b67c"],["assets/libs/materialize/font/roboto/LICENSE.txt","d273d63619c9aeaf15cdaf76422c4f87"],["assets/libs/materialize/font/roboto/Roboto-Black.ttf","893fe14628bd7ac498d550e96367e1be"],["assets/libs/materialize/font/roboto/Roboto-BlackItalic.ttf","256aab654d3c4dd0e12fd0a32c7e8aa6"],["assets/libs/materialize/font/roboto/Roboto-Bold.ttf","d329cc8b34667f114a95422aaad1b063"],["assets/libs/materialize/font/roboto/Roboto-Bold.woff","bb3a4465727a4d48a309d171d1439695"],["assets/libs/materialize/font/roboto/Roboto-Bold.woff2","7d8473513da5dc7291f6f7bbe6e64204"],["assets/libs/materialize/font/roboto/Roboto-BoldItalic.ttf","b37d0bb73a2f688ecaee01647f41e3e5"],["assets/libs/materialize/font/roboto/Roboto-Italic.ttf","de74c60991cd63c8b922e0e665a39c7a"],["assets/libs/materialize/font/roboto/Roboto-Light.ttf","7b5fb88f12bec8143f00e21bc3222124"],["assets/libs/materialize/font/roboto/Roboto-Light.woff","33058ff0fec2feb24075c725f17d1a7c"],["assets/libs/materialize/font/roboto/Roboto-Light.woff2","f3847affca595467fb86c541c2ccc4db"],["assets/libs/materialize/font/roboto/Roboto-LightItalic.ttf","129c5057f4480f9a353e15e1e1e09f9d"],["assets/libs/materialize/font/roboto/Roboto-Medium.ttf","fe13e4170719c2fc586501e777bde143"],["assets/libs/materialize/font/roboto/Roboto-Medium.woff","c42b9730e1ad396379c249c36776cc6f"],["assets/libs/materialize/font/roboto/Roboto-Medium.woff2","540d8df6b025561bbe6e984e8e6c35d7"],["assets/libs/materialize/font/roboto/Roboto-MediumItalic.ttf","5b25afa871e1b896011859f8cdf8da74"],["assets/libs/materialize/font/roboto/Roboto-Regular.ttf","ac3f799d5bbaf5196fab15ab8de8431c"],["assets/libs/materialize/font/roboto/Roboto-Regular.woff","057d4117d1b0ce5ef2acce345bf87748"],["assets/libs/materialize/font/roboto/Roboto-Regular.woff2","430f0403707aee3d05e01ad4b7f865a8"],["assets/libs/materialize/font/roboto/Roboto-Thin.ttf","3f68500b267c20051088bcc0698af773"],["assets/libs/materialize/font/roboto/Roboto-Thin.woff","f02bb57a508cf94116df992e94757795"],["assets/libs/materialize/font/roboto/Roboto-Thin.woff2","3387eb3a6d4f4147716b2c7235389604"],["assets/libs/materialize/font/roboto/Roboto-ThinItalic.ttf","1e5737be5c68c15c3a105b2db9a3b67c"],["assets/libs/materialize/js/materialize.min.js","f4d77622a23bdc541ea33ae46fbd8356"],["assets/libs/owl-carousel/AjaxLoader.gif","5b8b06c052cac80413d62e5c45f9f37b"],["assets/libs/owl-carousel/grabbing.png","d817e1dba5bd5d891d0504bf1715807b"],["assets/libs/owl-carousel/owl.carousel.css","0371b5a2d50e985b09b7d337edc0dc9f"],["assets/libs/owl-carousel/owl.carousel.js","a5f96c62d75be144282ef6cc429a6259"],["assets/libs/owl-carousel/owl.carousel.min.js","88d0fe722f04973e2888b58a63aa0570"],["assets/libs/owl-carousel/owl.theme.css","f23cf727e4fcca9a5470658da5e755c9"],["assets/libs/owl-carousel/owl.transitions.css","b1bdaeac4065bf67a7d7a06213192964"],["assets/libs/sweetalert/ie9.css","d9fd4a29c95a039afead5b3624831c94"],["assets/libs/sweetalert/sweet-alert.css","5dd613143be735fc63742c941167057b"],["assets/libs/sweetalert/sweet-alert.min.js","0aa07fba93dfb99b0f3779f21cbf7e6c"],["audios/audio.mp3","52251c256231c69e48d914490420d6a2"],["audios/license.txt.txt","b4b6e143aec26f932676384d89158f02"],["blog-with-sidebar.html","7a5e7503bd9f972d6bcd5dba1afcd863"],["blog.html","85eeae6a638a47936ec75649adbc1607"],["images/avatar.png","30ccb1e7978799c5bdf86312b611e42a"],["images/bharatsinha.jpg","48513edbe3fc7593a45f9616e1549a79"],["images/cmt1.jpg","db39263f92f2dd5c88d9dc70b135264e"],["images/cmt2.jpg","1f4098e15eed46bf70352a059cd2880c"],["images/favicon.png","2d70e860b19fcbc943e144e73e44c901"],["images/freelance.jpg","69c33e8385c6cc8c83d29b0f106ed225"],["images/fun-facts-bg.jpg","080ae6b2e326c695dfc8f33dfb00597c"],["images/galgotia.jpg","007f0bcbaa9994240068aa018f5ca66f"],["images/home-bg.jpg","3465ee70be2aa9fa402d423246bd0361"],["images/indiamart.jpg","93ec8d9e256ddff236108ee7119e94b7"],["images/logo.png","baddd6fa6bb4f68425493da07fbfc546"],["images/marker-icon.png","38096ebf4b183a3bb41ad5b179381685"],["images/person.png","3cd3f4b3fd9dce2fdb6219360eb7073b"],["images/skills-bg.jpg","ccb18dc8f9d553a53e4a9ea01972f977"],["images/unknown.jpg","b377dcee5582c441381f340c28d6f286"],["images/video-placeholder.png","2c756082fc8eeaedc7492d33113ca117"],["inc/sendEmail.php","714a41cbc576584cff91a27346258606"],["index.html","d539c8e6ab1a66ce4e537d4156edf3a5"],["portfolioitems.html","eeef8eeb2cbf5b24194ff97db003a8e7"],["single.html","1c38d45f53ba8a044fc7967504ff2758"],["static/css/style.css","68b329da9893e34099c7d8ad5cb9c940"],["videos/license.txt.txt","0a3d45b104ab0db74f7bf7385315deb6"],["videos/video.mp4","8a9ed5bfe86beede84ee1a094a62b10d"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







