if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-a02485c1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/09/26/Java常用类/index.html",revision:"f6f106432196fea53068968e8a2db286"},{url:"2021/09/26/多线程的学习/index.html",revision:"12002dabe9c05ac97a8bfbfa66c3d57a"},{url:"2021/09/26/大一疑问解惑/index.html",revision:"c5e2df1bc66af240dc75875fdfdc0862"},{url:"about/index.html",revision:"c26bd8611d7464b0092cf7d511929340"},{url:"archives/2021/09/index.html",revision:"8e186da942baa0b8834062eddf403797"},{url:"archives/2021/index.html",revision:"08e2dac7a66ed2774bd615ff520ee0e8"},{url:"archives/index.html",revision:"03edbd4ac6db73b9d87cf9bb322c4c6b"},{url:"categories/index.html",revision:"db449f54c57e14a268037f407ce2b07d"},{url:"css/index.css",revision:"590a947eab605a9f7f2a50ee1beb95e6"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8bc48bc1a70bcf50b9864320d3e083e7"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"d57ede9684427249f44324e7ee29710f"},{url:"tags/index.html",revision:"0bf8edec5f905a7e5896908ceff1e383"},{url:"tags/Java/index.html",revision:"128319303882ef052b1b15c24df03e41"},{url:"tags/大一/index.html",revision:"cc492031820d0dd67beb1012eeb68ddc"}],{})}));
//# sourceMappingURL=service-worker.js.map
