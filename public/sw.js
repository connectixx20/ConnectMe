if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),d={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8Pr_B7djNIMMR8EtrMG46/_buildManifest.js",revision:"5be78c6a9c4200bdc60cf384df931586"},{url:"/_next/static/8Pr_B7djNIMMR8EtrMG46/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/8Pr_B7djNIMMR8EtrMG46/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-5fe3ae8ef609351e.js",revision:"5fe3ae8ef609351e"},{url:"/_next/static/chunks/17007de1-11ff5d611818adb7.js",revision:"11ff5d611818adb7"},{url:"/_next/static/chunks/197-28a5ac7336864a1e.js",revision:"28a5ac7336864a1e"},{url:"/_next/static/chunks/1bfc9850-47bf4dd6ddfe6f86.js",revision:"47bf4dd6ddfe6f86"},{url:"/_next/static/chunks/252f366e-308b503a0dffa4f8.js",revision:"308b503a0dffa4f8"},{url:"/_next/static/chunks/465-8ab6233a1163a076.js",revision:"8ab6233a1163a076"},{url:"/_next/static/chunks/521-067851750a7a31a3.js",revision:"067851750a7a31a3"},{url:"/_next/static/chunks/545f34e4-957706252235165b.js",revision:"957706252235165b"},{url:"/_next/static/chunks/641-ae7699738469ce20.js",revision:"ae7699738469ce20"},{url:"/_next/static/chunks/745-6b3cb6f8a26d8908.js",revision:"6b3cb6f8a26d8908"},{url:"/_next/static/chunks/776-e46b0e3b049efc79.js",revision:"e46b0e3b049efc79"},{url:"/_next/static/chunks/78e521c3-3579e7b031ab0180.js",revision:"3579e7b031ab0180"},{url:"/_next/static/chunks/95b64a6e-1daa98b3075a3ee2.js",revision:"1daa98b3075a3ee2"},{url:"/_next/static/chunks/971-ad627e34b756b1e3.js",revision:"ad627e34b756b1e3"},{url:"/_next/static/chunks/b98bc7c3-e815946af1aa8c73.js",revision:"e815946af1aa8c73"},{url:"/_next/static/chunks/d7eeaac4-780fb16958a17805.js",revision:"780fb16958a17805"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"91d7f78b5b4003c8"},{url:"/_next/static/chunks/main-bc453c2289eb4e74.js",revision:"bc453c2289eb4e74"},{url:"/_next/static/chunks/pages/%5Bid%5D-447dd2781f92644e.js",revision:"447dd2781f92644e"},{url:"/_next/static/chunks/pages/_app-00d2d827628bc98d.js",revision:"00d2d827628bc98d"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/confirm/%5Bid%5D-f8d97edb8b47ad8c.js",revision:"f8d97edb8b47ad8c"},{url:"/_next/static/chunks/pages/edit/%5Bid%5D-5664058e8f382483.js",revision:"5664058e8f382483"},{url:"/_next/static/chunks/pages/edit/once-7e5ded7cdf6eb624.js",revision:"7e5ded7cdf6eb624"},{url:"/_next/static/chunks/pages/gallery/%5Bid%5D-21b4ab4b9de317ab.js",revision:"21b4ab4b9de317ab"},{url:"/_next/static/chunks/pages/index-ff3a9ac8372235b2.js",revision:"ff3a9ac8372235b2"},{url:"/_next/static/chunks/pages/login-5f2d7eff8b73d953.js",revision:"5f2d7eff8b73d953"},{url:"/_next/static/chunks/pages/test-5aae9577ab9d748e.js",revision:"5aae9577ab9d748e"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/9cf5d014f5708ffb.css",revision:"9cf5d014f5708ffb"},{url:"/favicon.ico",revision:"89c42b60078757858ea8fc4ce608baa7"},{url:"/icon-192x192.png",revision:"e3e6319e71e4f104217bf95b6835ac01"},{url:"/icon-256x256.png",revision:"84961341035c2aa7139c1008a7d30ce2"},{url:"/icon-384x384.png",revision:"1df64b60e7ded1956e91e0b00e4ed15a"},{url:"/icon-512x512.png",revision:"3a013095639721096b22288152642741"},{url:"/logo.png",revision:"ce5160efedd00b49e453372bbb7726c9"},{url:"/main.png",revision:"7dc18c56099678a84bb28f11d606b263"},{url:"/manifest.json",revision:"efcdd8958974a204d96455238d4a3e97"},{url:"/pC2.png",revision:"52daad84ab965d751b07a16b9c20a028"},{url:"/pC3.png",revision:"f83f59fb696d4259beb16336cdb57cb8"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
