!/*! copyright 2025 Aditude, Inc - Prebid - production - Updated: 2025-01-29T22:34:58.053Z, v1.4.0, blitz-ONuZ1Ty9qx/dyno-default/prebid-load, 81f9e123089d630e0635 */function(){var e,t,r,i,o,n,s,a={87060:function(e,t,r){var i;i=function(){"use strict";function e(e){return"function"==typeof e}var t,i,o,n,s=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=0,l=void 0,u=void 0,d=function(e,t){b[a]=e,b[a+1]=t,2===(a+=2)&&(u?u(y):w())},c="undefined"!=typeof window?window:void 0,h=c||{},p=h.MutationObserver||h.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"===({}).toString.call(process),g="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function m(){var e=setTimeout;return function(){return e(y,1)}}var b=Array(1e3);function y(){for(var e=0;e<a;e+=2)(0,b[e])(b[e+1]),b[e]=void 0,b[e+1]=void 0;a=0}var w=void 0;function v(e,t){var r=this,i=new this.constructor(T);void 0===i[A]&&I(i);var o=r._state;if(o){var n=arguments[o-1];d(function(){return k(o,i,n,r._result)})}else P(r,i,e,t);return i}function _(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(T);return L(t,e),t}f?w=function(){return process.nextTick(y)}:p?(t=0,i=new p(y),o=document.createTextNode(""),i.observe(o,{characterData:!0}),w=function(){o.data=t=++t%2}):g?((n=new MessageChannel).port1.onmessage=y,w=function(){return n.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx");return l=e.runOnLoop||e.runOnContext,void 0!==l?function(){l(y)}:m()}catch(e){return m()}}():m();var A=Math.random().toString(36).substring(2);function T(){}var E=void 0;function R(t,r,i){r.constructor===t.constructor&&i===v&&r.constructor.resolve===_?1===r._state?C(t,r._result):2===r._state?S(t,r._result):P(r,void 0,function(e){return L(t,e)},function(e){return S(t,e)}):void 0===i?C(t,r):e(i)?d(function(e){var t=!1,o=function(e,t,r,i){try{e.call(t,r,i)}catch(e){return e}}(i,r,function(i){t||(t=!0,r!==i?L(e,i):C(e,i))},function(r){t||(t=!0,S(e,r))},"Settle: "+(e._label||" unknown promise"));!t&&o&&(t=!0,S(e,o))},t):C(t,r)}function L(e,t){if(e===t)S(e,TypeError("You cannot resolve a promise with itself"));else if(r=typeof t,null!==t&&("object"===r||"function"===r)){var r,i=void 0;try{i=t.then}catch(t){S(e,t);return}R(e,t,i)}else C(e,t)}function j(e){e._onerror&&e._onerror(e._result),x(e)}function C(e,t){e._state===E&&(e._result=t,e._state=1,0!==e._subscribers.length&&d(x,e))}function S(e,t){e._state===E&&(e._state=2,e._result=t,d(j,e))}function P(e,t,r,i){var o=e._subscribers,n=o.length;e._onerror=null,o[n]=t,o[n+1]=r,o[n+2]=i,0===n&&e._state&&d(x,e)}function x(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var i=void 0,o=void 0,n=e._result,s=0;s<t.length;s+=3)i=t[s],o=t[s+r],i?k(r,i,o,n):o(n);e._subscribers.length=0}}function k(t,r,i,o){var n=e(i),s=void 0,a=void 0,l=!0;if(n){try{s=i(o)}catch(e){l=!1,a=e}if(r===s){S(r,TypeError("A promises callback cannot return that same promise."));return}}else s=o;r._state!==E||(n&&l?L(r,s):!1===l?S(r,a):1===t?C(r,s):2===t&&S(r,s))}var N=0;function I(e){e[A]=N++,e._state=void 0,e._result=void 0,e._subscribers=[]}var q=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(T),this.promise[A]||I(this.promise),s(t)?(this.length=t.length,this._remaining=t.length,this._result=Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&C(this.promise,this._result))):S(this.promise,Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===E&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,i=r.resolve;if(i===_){var o=void 0,n=void 0,s=!1;try{o=e.then}catch(e){s=!0,n=e}if(o===v&&e._state!==E)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===D){var a=new r(T);s?S(a,n):R(a,e,o),this._willSettleAt(a,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},e.prototype._settledAt=function(e,t,r){var i=this.promise;i._state===E&&(this._remaining--,2===e?S(i,r):this._result[t]=r),0===this._remaining&&C(i,this._result)},e.prototype._willSettleAt=function(e,t){var r=this;P(e,void 0,function(e){return r._settledAt(1,t,e)},function(e){return r._settledAt(2,t,e)})},e}(),D=function(){function t(e){this[A]=N++,this._result=this._state=void 0,this._subscribers=[],T!==e&&("function"!=typeof e&&function(){throw TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){L(e,t)},function(t){S(e,t)})}catch(t){S(e,t)}}(this,e):function(){throw TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var r=this.constructor;return e(t)?this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}();return D.prototype.then=v,D.all=function(e){return new q(this,e).promise},D.race=function(e){var t=this;return new t(s(e)?function(r,i){for(var o=e.length,n=0;n<o;n++)t.resolve(e[n]).then(r,i)}:function(e,t){return t(TypeError("You must pass an array to race."))})},D.resolve=_,D.reject=function(e){var t=new this(T);return S(t,e),t},D._setScheduler=function(e){u=e},D._setAsap=function(e){d=e},D._asap=d,D.polyfill=function(){var e=void 0;if(void 0!==r.g)e=r.g;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===i&&!t.cast)return}e.Promise=D},D.Promise=D,D},e.exports=i()}},l={};function u(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return a[e].call(r.exports,r,r.exports,u),r.exports}u.m=a,u.amdO={},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(r,i){if(1&i&&(r=this(r)),8&i||"object"==typeof r&&r&&(4&i&&r.__esModule||16&i&&"function"==typeof r.then))return r;var o=Object.create(null);u.r(o);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){n[e]=function(){return r[e]}});return n.default=function(){return r},u.d(o,n),o},u.d=function(e,t){for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce(function(t,r){return u.f[r](e,t),t},[]))},u.u=function(e){if(41239===e)return"plugins/raven.ba9d15d25a24e0168d0f.plugin.js"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},i="aditude-prebid:",u.l=function(e,t,o,n){if(r[e]){r[e].push(t);return}if(void 0!==o)for(var s,a,l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==i+o){s=c;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.setAttribute("data-webpack",i+o),s.src=e),r[e]=[t];var h=function(t,i){s.onerror=s.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach(function(e){return e(i)}),t)return t(i)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){u.g.importScripts&&(e=u.g.location+"");var e,t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e+"../../"}(),o={58696:0},u.f.j=function(e,t){var r=u.o(o,e)?o[e]:void 0;if(0!==r){if(r)t.push(r[2]);else{var i=new Promise(function(t,i){r=o[e]=[t,i]});t.push(r[2]=i);var n=u.p+u.u(e),s=Error();u.l(n,function(t){if(u.o(o,e)&&(0!==(r=o[e])&&(o[e]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,r[1](s)}},"chunk-"+e,e)}}},n=function(e,t){var r,i,n=t[0],s=t[1],a=t[2],l=0;if(n.some(function(e){return 0!==o[e]})){for(r in s)u.o(s,r)&&(u.m[r]=s[r]);a&&a(u)}for(e&&e(t);l<n.length;l++)i=n[l],u.o(o,i)&&o[i]&&o[i][0](),o[i]=0},(s=self.tudeChunk=self.tudeChunk||[]).forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s)),function(){"use strict";let e,t,r;var i,o,n,s=(e,t,r=!1,i=!1,o=[],n=[])=>{let s=document.createElement("script");s.async=r,i&&(s.defer=!0),o.forEach(e=>{s.setAttribute("data-"+e.key,e.value)}),n.forEach(e=>{s.setAttribute(e.key,e.value)}),s.src=e,document[t].appendChild(s)};(o||(o={})).Head="head";var a=o;/*! js-cookie v3.0.5 | MIT */function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}var d=function e(t,r){function i(e,i,o){if("undefined"!=typeof document){"number"==typeof(o=l({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var n="";for(var s in o)o[s]&&(n+="; "+s,!0!==o[s]&&(n+="="+o[s].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+n}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var n=r[o].split("="),s=n.slice(1).join("=");try{var a=decodeURIComponent(n[0]);if(i[a]=t.read(s,a),e===a)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){i(e,"",l({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,l({},this.attributes,t))},withConverter:function(t){return e(l({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});let c=e=>d.get(e)||!1,h=e=>{let t=window.location.search.match("[?&]"+e+"(?:&|$|=([^&]*))");return t?t[1]?decodeURIComponent(t[1]):"":null},p=e=>{let t=window.location.hash.match("[#&]"+e+"(?:&|$|=([^&]*))");return t?t[1]?decodeURIComponent(t[1]):"":null};function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let g="#339933";(i=n||(n={}))[i.Advanced=0]="Advanced",i[i.None=1]="None",i[i.Standard=2]="Standard";let m=1,b=c("aditude_debug")||h("aditude_debug")||p("aditude_debug");b&&(m="99"==b?0:2);class y{setLabel(e,t=g){return this.label={text:e,color:t},this}tag(e,t="black"){return this.tempTag={text:e,color:t},this}clearTag(){this.tempTag=null}enable(e=2){return this.setLevel(e),this}setLevel(e){return this.level=e,this}isAdvanced(){return 0===this.level}isEnabled(){return 1!==this.level}advancedLog(...e){this.isAdvanced()&&this._sendLog("log",this._decorate(e,""))}log(...e){this.isEnabled()&&this._sendLog("log",this._decorate(e,""))}warn(...e){this.isEnabled()&&this._sendLog("warn",this._decorate(e,""))}error(...e){this._sendLog("error",this._decorate(e,""))}table(e=Array,t=null){this.isEnabled()&&console.table(e,t)}group(e,t){this.isEnabled()&&(console.group(e),t(this),console.groupEnd(),this.clearTag())}_sendLog(e,t){let r=[e,"log","debug","info"].find(e=>String(console[e])===`function ${e}() { [native code] }`)||e;console[r](...t)}_getElapsedTime(){if(!y.firstLogTime)return y.firstLogTime=Date.now(),"0ms";let e=Date.now()-y.firstLogTime;return`${e}ms`}_decorate(e,t=""){e=[].slice.call(e),t&&e.unshift(t);let r=[],i=[];if(this.isAdvanced()){let e=this._getElapsedTime();r.push(`%c[${e}]`),i.push("background: grey; color: white; font-size: 9px; padding: 1px 4px; border-radius: 0; margin-right: 1px;")}return r.push("%cCW"),i.push(o("#61B321")),this.label&&this.label.text.length>0&&(r.push("%c"+this.label.text),i.push(o(this.label.color))),this.tempTag&&(r.push("%c"+this.tempTag.text),i.push(o(this.tempTag.color))),e.unshift(...i),e.unshift(r.join("")),e;function o(e){return`display: inline-block; color: #fff; font-size: 9px; background: ${e}; padding: 1px 4px; border-radius: 0; margin-right: 1px;`}}constructor(e){f(this,"labelColor",void 0),f(this,"label",{text:"",color:g}),f(this,"level",m),f(this,"namespace",void 0),f(this,"tempTag",void 0),this.namespace=e}}f(y,"firstLogTime",null);let w={};var v=function(e="default"){return w[e]||(w[e]=new y(e)),w[e]};let _=new class{get isDisabled(){return"boolean"==typeof window.__RAVEN_ENABLED&&!1===window.__RAVEN_ENABLED}disableTracking(){window.__RAVEN_ENABLED=!1}getGlobal(){return window.Raven=window.Raven||{cmd:[]},window.Raven.cmd=window.Raven.cmd||[],window.Raven}setCustomParams(e){this.push(({config:t})=>{t.setCustom(e)})}recordPageview(){this.push(({events:e})=>{e.pageview()})}recordCustomEvent(e,t){this.push(({events:r})=>{r.sendCustomEvent(e,t)})}recordEvent(e,t){this.push(({events:r})=>{r.send(e,t)})}constructor(){var e,t;e="push",t=e=>{this.isDisabled||this.getGlobal().cmd.push(e)},e in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}};window.Raven=window.Raven||{cmd:[]};let A=v("analytics").setLabel("Analytics"),T=async()=>{_.disableTracking()},E=async e=>{A.log("enabling",e),window.__RAVEN_ENABLED=!0,A.log("queued 1st pageview"),window.Raven.cmd.push(({events:e})=>{A.log("sending 1st pageview"),e.pageview(),A.log("sent 1st pageview")}),A.log("loading raven library"),u.e(41239).then(u.t.bind(u,34697,23)).then(async({boot:t})=>{await t(e),A.log("booted",e)}).catch(e=>{A.error(e)})};(async e=>{if(e.disableTrackingExplicitly){A.log("Tracking explicitly disabled");return}let{raven:t="standalone"}=e,r="none",i=r&&["standalone","legacy"].includes(r)?r:t;if("legacy"===i){let t=`${e.publisherKeyCw}/${e.wrapper}`,r=new URL(`https://edge.aditude.io/wrapper/${t}/info.json`);try{let t=await fetch(r.toString());if(t.ok){let{p:r,a:i,s:o={}}=await t.json();r&&i?i.t&&E({params:r,pbjsName:e.pbjsGlobals&&e.pbjsGlobals.length>0?e.pbjsGlobals[0]:"pbjs",settings:o,useCaseTier:1===i.t?"userOnly":2===i.t?"adsBasic":"all"}):(v().advancedLog("publisher not configured for analytics"),T())}else throw Error(`${t.status} ${t.statusText}`)}catch(e){v().error("analytics config failed to load",e)}}else if("standalone"===i){if(!e.propertyId||""===e.propertyId||window.RavenLoaded)return;let{pbjsGlobals:t,propertyId:r,wrapper:i}=e;window.__RAVEN_ENABLED=!0,window.RavenLoaded=!0,window.Raven=window.Raven||{cmd:[]},window.Raven.initialConfig={globalParams:{wrapper:i},pbjsGlobals:t||["pbjs"],propertyId:r},s(`https://raven-edge.aditude.io/raven/${r}/library.js`,a.Head,!1,!1)}})({publisherKeyCw:"blitz-ONuZ1Ty9qx",propertyId:"dynogg-coVxj",wrapper:"dyno-default"});var R="d5ac32e859ab1e26c3f186cb6feb62a2";class L extends Error{response;request;options;constructor(e,t,r){let i=e.status||0===e.status?e.status:"",o=e.statusText||"",n=`${i} ${o}`.trim();super(`Request failed with ${n?`status code ${n}`:"an unknown error"}: ${t.method} ${t.url}`),this.name="HTTPError",this.response=e,this.request=t,this.options=r}}class j extends Error{request;constructor(e){super(`Request timed out: ${e.method} ${e.url}`),this.name="TimeoutError",this.request=e}}let C=e=>null!==e&&"object"==typeof e,S=(...e)=>{for(let t of e)if((!C(t)||Array.isArray(t))&&void 0!==t)throw TypeError("The `options` argument must be an object");return x({},...e)},P=(e={},t={})=>{let r=new globalThis.Headers(e),i=t instanceof globalThis.Headers;for(let[e,o]of new globalThis.Headers(t).entries())i&&"undefined"===o||void 0===o?r.delete(e):r.set(e,o);return r},x=(...e)=>{let t={},r={};for(let i of e)if(Array.isArray(i))Array.isArray(t)||(t=[]),t=[...t,...i];else if(C(i)){for(let[e,r]of Object.entries(i))C(r)&&e in t&&(r=x(t[e],r)),t={...t,[e]:r};C(i.headers)&&(r=P(r,i.headers),t.headers=r)}return t},k=(()=>{let e=!1,t=!1,r="function"==typeof globalThis.Request;if("function"==typeof globalThis.ReadableStream&&r)try{t=new globalThis.Request("https://empty.invalid",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type")}catch(e){if(e instanceof Error&&"unsupported BodyInit type"===e.message)return!1;throw e}return e&&!t})(),N="function"==typeof globalThis.AbortController,I="function"==typeof globalThis.ReadableStream,q="function"==typeof globalThis.FormData,D=["get","post","put","patch","head","delete"],O={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},B=Symbol("stop"),U={json:!0,parseJson:!0,stringifyJson:!0,searchParams:!0,prefixUrl:!0,retry:!0,timeout:!0,hooks:!0,throwHttpErrors:!0,onDownloadProgress:!0,fetch:!0},$={method:!0,headers:!0,body:!0,mode:!0,credentials:!0,cache:!0,redirect:!0,referrer:!0,referrerPolicy:!0,integrity:!0,keepalive:!0,signal:!0,window:!0,dispatcher:!0,duplex:!0,priority:!0},F=e=>D.includes(e)?e.toUpperCase():e,G={limit:2,methods:["get","put","head","delete","options","trace"],statusCodes:[408,413,429,500,502,503,504],afterStatusCodes:[413,429,503],maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY,delay:e=>.3*2**(e-1)*1e3},H=(e={})=>{if("number"==typeof e)return{...G,limit:e};if(e.methods&&!Array.isArray(e.methods))throw Error("retry.methods must be an array");if(e.statusCodes&&!Array.isArray(e.statusCodes))throw Error("retry.statusCodes must be an array");return{...G,...e}};var M=u(87060).Promise;async function W(e,t,r,i){return new M((o,n)=>{let s=setTimeout(()=>{r&&r.abort(),n(new j(e))},i.timeout);i.fetch(e,t).then(o).catch(n).then(()=>{clearTimeout(s)})})}var J=u(87060).Promise;async function z(e,{signal:t}){return new J((r,i)=>{function o(){clearTimeout(n),i(t.reason)}t&&(t.throwIfAborted(),t.addEventListener("abort",o,{once:!0}));let n=setTimeout(()=>{t?.removeEventListener("abort",o),r()},e)})}let K=(e,t)=>{let r={};for(let i in t)i in $||i in U||i in e||(r[i]=t[i]);return r};var V=u(87060).Promise;class Y{static create(e,t){let r=new Y(e,t),i=async()=>{if("number"==typeof r._options.timeout&&r._options.timeout>2147483647)throw RangeError("The `timeout` option cannot be greater than 2147483647");await V.resolve();let e=await r._fetch();for(let t of r._options.hooks.afterResponse){let i=await t(r.request,r._options,r._decorateResponse(e.clone()));i instanceof globalThis.Response&&(e=i)}if(r._decorateResponse(e),!e.ok&&r._options.throwHttpErrors){let t=new L(e,r.request,r._options);for(let e of r._options.hooks.beforeError)t=await e(t);throw t}if(r._options.onDownloadProgress){if("function"!=typeof r._options.onDownloadProgress)throw TypeError("The `onDownloadProgress` option must be a function");if(!I)throw Error("Streams are not supported in your environment. `ReadableStream` is missing.");return r._stream(e.clone(),r._options.onDownloadProgress)}return e},o=r._options.retry.methods.includes(r.request.method.toLowerCase())?r._retry(i):i();for(let[e,i]of Object.entries(O))o[e]=async()=>{r.request.headers.set("accept",r.request.headers.get("accept")||i);let n=(await o).clone();if("json"===e){if(204===n.status||0===(await n.clone().arrayBuffer()).byteLength)return"";if(t.parseJson)return t.parseJson(await n.text())}return n[e]()};return o}request;abortController;_retryCount=0;_input;_options;constructor(e,t={}){this._input=e;let r=this._input instanceof Request&&"credentials"in Request.prototype?this._input.credentials:void 0;if(this._options={...r&&{credentials:r},...t,headers:P(this._input.headers,t.headers),hooks:x({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},t.hooks),method:F(t.method??this._input.method),prefixUrl:String(t.prefixUrl||""),retry:H(t.retry),throwHttpErrors:!1!==t.throwHttpErrors,timeout:t.timeout??1e4,fetch:t.fetch??globalThis.fetch.bind(globalThis)},"string"!=typeof this._input&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&"string"==typeof this._input){if(this._input.startsWith("/"))throw Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(N){if(this.abortController=new globalThis.AbortController,this._options.signal){let e=this._options.signal;this._options.signal.addEventListener("abort",()=>{this.abortController.abort(e.reason)})}this._options.signal=this.abortController.signal}if(k&&(this._options.duplex="half"),void 0!==this._options.json&&(this._options.body=this._options.stringifyJson?.(this._options.json)??JSON.stringify(this._options.json),this._options.headers.set("content-type",this._options.headers.get("content-type")??"application/json")),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){let e="string"==typeof this._options.searchParams?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString(),t=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,"?"+e);(q&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)&&!(this._options.headers&&this._options.headers["content-type"])&&this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(t,{...this.request}),this._options)}}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount>this._options.retry.limit||e instanceof j)throw e;if(e instanceof L){if(!this._options.retry.statusCodes.includes(e.response.status))throw e;let t=e.response.headers.get("Retry-After");if(t&&this._options.retry.afterStatusCodes.includes(e.response.status)){let e=1e3*Number(t);Number.isNaN(e)&&(e=Date.parse(t)-Date.now());let r=this._options.retry.maxRetryAfter??e;return e<r?e:r}if(413===e.response.status)throw e}let t=this._options.retry.delay(this._retryCount);return Math.min(this._options.retry.backoffLimit,t)}_decorateResponse(e){return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e}async _retry(e){try{return await e()}catch(r){let t=Math.min(this._calculateRetryDelay(r),2147483647);if(this._retryCount<1)throw r;for(let e of(await z(t,{signal:this._options.signal}),this._options.hooks.beforeRetry))if(await e({request:this.request,options:this._options,error:r,retryCount:this._retryCount})===B)return;return this._retry(e)}}async _fetch(){for(let e of this._options.hooks.beforeRequest){let t=await e(this.request,this._options);if(t instanceof Request){this.request=t;break}if(t instanceof Response)return t}let e=K(this.request,this._options),t=this.request;return(this.request=t.clone(),!1===this._options.timeout)?this._options.fetch(t,e):W(t,e,this.abortController,this._options)}_stream(e,t){let r=Number(e.headers.get("content-length"))||0,i=0;return 204===e.status?(t&&t({percent:1,totalBytes:r,transferredBytes:i},new Uint8Array),new globalThis.Response(null,{status:e.status,statusText:e.statusText,headers:e.headers})):new globalThis.Response(new globalThis.ReadableStream({async start(o){let n=e.body.getReader();async function s(){let{done:e,value:a}=await n.read();if(e){o.close();return}t&&(i+=a.byteLength,t({percent:0===r?0:i/r,transferredBytes:i,totalBytes:r},a)),o.enqueue(a),await s()}t&&t({percent:0,transferredBytes:0,totalBytes:r},new Uint8Array),await s()}}),{status:e.status,statusText:e.statusText,headers:e.headers})}}/*! MIT License © Sindre Sorhus */let Z=e=>{let t=(t,r)=>Y.create(t,S(e,r));for(let r of D)t[r]=(t,i)=>Y.create(t,S(e,i,{method:r}));return t.create=e=>Z(S(e)),t.extend=t=>("function"==typeof t&&(t=t(e??{})),Z(S(e,t))),t.stop=B,t},Q=Z();var X=u(87060).Promise;let ee={gdpr:{country:"GB",region:"ENG",city:"London",postalCode:"W1B"},ccpa:{country:"US",region:"CA",city:"San Francisco",postalCode:"94107"},none:{country:"US",region:"IL",city:"Chicago",postalCode:"60007"}},et="aditude_geo";if(h(et)){let t=h(et);ee[t]&&(e=ee[t])}let er=!1,ei=new X(e=>{r=e});async function eo(i){if(e)return e;if(t||er)return ei;let o=window.localStorage.getItem("cwgl");if(o){let e=window.localStorage.getItem("cwglt");(h("aditude_nocache")||!e||Date.now()-parseInt(e)>36e5)&&(o=!1)}if(o)t=JSON.parse(o),r(t);else{er=!0;try{let e=await Q.get(i||"https://geo-location.prebid.cloud/v1/geo",{timeout:3e3}).json();window.localStorage.setItem("cwgl",JSON.stringify(e)),window.localStorage.setItem("cwglt",JSON.stringify(Date.now())),t=e,r(t)}catch(e){v().error(e),r(t)}}return ei}let en=c("tude_dev")||h("tude_dev")||p("tude_dev");if(en){let e=new URL(document.currentScript.src);if(en&&e.pathname.match("prebid-load.js")&&!e.searchParams.has("testing")){let t=e.pathname,r=document.createElement("script");throw r.src=`${"stage"===en?"https://d3g98hgqjqzwq5.cloudfront.net":"https://localhost:9000/static"}${t}?testing`.replace("/static/static/","/static/"),r.async=!1,document.currentScript.after(r),Error("prebid-load.js -- bailing to load script from another environment")}}(function(){let e=document.currentScript;if(null==e?void 0:e.src){let t=new URL(e.src);if(null==t?void 0:t.pathname){if(u.g.__tudeLoadedScripts=u.g.__tudeLoadedScripts||[],u.g.__tudeLoadedScripts.includes(t.pathname))throw Error(`attempted to load file multiple times: ${e.src}`);u.g.__tudeLoadedScripts.push(t.pathname)}}})();let es=(e="",t="")=>{let r="https://dn0qt3r0xannq.cloudfront.net";return(-1!==e.indexOf("vendor/")||-1!==t.indexOf("vendor/"))&&(r="https://dn0qt3r0xannq.cloudfront.net"),r+e+t};var ea=(e,t=!1)=>{let r=document.createElement("link");t&&(r.id=t),r.rel="stylesheet",r.type="text/css",r.href=e,r.media="all",document.getElementsByTagName("head")[0].appendChild(r)},el=u(87060).Promise;function eu(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let ed='"1.4.0"'.replace(/"/g,""),ec="Loader";v(ec).setLabel("Loader","red");var eh=class{getLibraryLocation(){return this.libraryFolder?this.publisherKey+"/"+this.libraryFolder:this.publisherKey}setLibraryFolder(e){this.libraryFolder=e}setPrebidBuild(e){this.dynamicLibrary=e,h("prebid_version_override")&&(this.dynamicLibrary.version=h("prebid_version_override"))}setDynamicLibrary(e,t){this.dynamicLibrary={version:e,modules:t}}setLoadRemoteConfig(e=!0){this.loadRemoteConfig=e}disableAnalytics(){this.checkForAnalytics=!1}enableAnalyticsExperiment(){this.checkForAnalytics=!0}disableLibrary(){this.hasLibrary=!1}setGeo(e=!0){this.geo=e}setGeoEndpoint(e="https://geo-location.prebid.cloud/v1/geo"){v(ec).advancedLog("Endpoint set: ",e),this.geoEndpoint=e}setGeoTimeout(e=500){this.geoTimeout=e}setWhitelistDomains(e){this.whitelistDomains=e}isDomainWhitelisted(){if(!this.whitelistDomains||0===this.whitelistDomains.length)return!0;let e=window.location.hostname.replace(/^www\./,"");return this.whitelistDomains.some(t=>t.replace(/^www\./,"")===e)}async getGeo(){let e=await eo(this.geoEndpoint);u.g._tudeGeo=e,v(ec).advancedLog("Global Geo Set",e)}setGlobalPbjsName(e){this.globalPbjsName=e,u.g._tudePbjsGlobal=this.globalPbjsName}setPublisherKey(e){this.publisherKey=e}setResourceVersion(e){this.version=e}setWrapper(e){this.wrapper=e}addPreset(e){e.forEach(e=>{this.addResource(e)})}addResource(e){this.resources[e.name]=e}getCurrentWrapperUrl(e,t=!0){let r="";return this.version&&t&&(r="?v="+this.version),es(`/${this.publisherKey}/${this.wrapper}`,`/${e}`)+r}createCloudResource(e,t,r,i,o){let n="";this.version&&(n="?v="+this.version);let s={name:e,appendTo:a.Head,async:i,trigger:o,url:es(`/${t}`,`/${r}`)+n};this.addResource(s)}async start(){if(v(ec).advancedLog("Loader starting at: ",Math.floor(performance.now()).toString()),!this.isDomainWhitelisted()){v(ec).advancedLog("Domain not whitelisted, skipping loader");return}if(await this.maybeLoadRemoteConfig(),this.hasLibrary&&this.addLibrary(),this.addWrapper(),Object.keys(this.resources).reverse().forEach(e=>{try{let t=this.resources[e];if((!t.type||"js"===t.type)&&!document.querySelector(`link[rel="preload"][as="script"][href="${t.url}"]`)){let e=document.createElement("link");e.rel="preload",e.as="script",e.href=t.url,document.head&&document.head.appendChild(e)}}catch(e){}}),this.geo){v(ec).advancedLog("Fetching geo from loader with timeout: ",this.geoTimeout);let e=this.getGeo(),t=new el(e=>setTimeout(e,this.geoTimeout));await el.race([e,t])}Object.keys(this.resources).forEach(e=>{let t=this.resources[e];(void 0===t.trigger||!t.trigger||t.trigger())&&(void 0===t.type||"js"===t.type?s(this._createUrl(t.url),t.appendTo,t.async||!1,t.defer||!1,t.dataAttributes||[],t.attributes||[]):ea(this._createUrl(t.url),t.id))}),v(ec).advancedLog("Loader finished at: ",Math.floor(performance.now()).toString())}maybeAddDynamicLibrary(){if(this.dynamicLibrary){let{version:e,modules:t,fork:r=!1}=this.dynamicLibrary,i=this.globalPbjsName,o=new URL(`https://edge.aditude.io/prebid/${e}.js`);"pbjs"!==i&&o.searchParams.set("var",i),r&&o.searchParams.set("fork","1"),["aditude","sharedIdSystem","33acrossIdSystem","fabrickIdSystem","id5IdSystem","criteoIdSystem","pubProvidedIdSystem","unifiedIdSystem"].filter(e=>!t.includes(e)).forEach(e=>{t.push(e)}),t.includes("aditude")&&R&&o.searchParams.set("v",R),t.forEach((e,r)=>{"cpmstarBidAdapter"===e&&(t[r]="cpmstarCustomBidAdapter")}),[].forEach(e=>{let r=t.indexOf(e);r>-1&&t.splice(r,1)});let n=window.btoa(JSON.stringify(t.sort()));o.searchParams.set("modules",n);let s={name:"library",appendTo:a.Head,async:!0,trigger:()=>(!window[i]||!window[i].getConfig||"function"!=typeof window[i].getConfig)&&!window[i+"LibraryLoaded"]&&(window[i+"LibraryLoaded"]=!0,!0),url:o.toString()};return this.addResource(s),!0}return!1}setupLoaderFromConfig(){var e,t;this.dynamicLibrary=null===(e=window.ADITUDE_WRAPPER_CONFIG)||void 0===e?void 0:e.PBJS_BUILD,this.addPreset((null===(t=window.ADITUDE_WRAPPER_CONFIG)||void 0===t?void 0:t.THIRD_PARTY_SCRIPTS)||[])}async maybeLoadRemoteConfig(){return"object"==typeof window.ADITUDE_WRAPPER_CONFIG?(this.setupLoaderFromConfig(),!0):!!this.loadRemoteConfig}addLibrary(){if(this.maybeAddDynamicLibrary())return;let e=this.getLibraryLocation();this.createCloudResource("library",e,"prebid-library.js",!0,()=>(!window[this.globalPbjsName]||!window[this.globalPbjsName].getConfig||"function"!=typeof window[this.globalPbjsName].getConfig)&&!window[this.globalPbjsName+"LibraryLoaded"]&&(window[this.globalPbjsName+"LibraryLoaded"]=!0,!0))}addWrapper(){this.createCloudResource("wrapper",this.publisherKey+"/"+this.wrapper,"prebid-wrapper.js",!1)}_createUrl(e){return e}constructor(e,t=ed){eu(this,"resources",{}),eu(this,"globalPbjsName","pbjs"),eu(this,"libraryFolder",void 0),eu(this,"dynamicLibrary",void 0),eu(this,"loadRemoteConfig",!1),eu(this,"publisherKey",void 0),eu(this,"hasLibrary",!0),eu(this,"version",'"1.4.0"'),eu(this,"wrapper",""),eu(this,"checkForAnalytics",!0),eu(this,"geo",!0),eu(this,"geoEndpoint","https://geo-location.prebid.cloud/v1/geo"),eu(this,"geoTimeout",500),eu(this,"whitelistDomains",[]),this.publisherKey=e,this.version=t}};let ep={name:"gpt",appendTo:a.Head,async:!0,url:"https://securepubads.g.doubleclick.net/tag/js/gpt.js",external:!0,trigger:()=>!window.googletag||!window.googletag.apiReady},ef={name:"kueez",appendTo:a.Head,async:!0,url:"https://static.kueezrtb.com/latest.js"};var eg=JSON.parse('{"version":"8.31.0","modules":["adagioBidAdapter","amxBidAdapter","appnexusBidAdapter","brightcomBidAdapter","brightcomSSPBidAdapter","consentManagement","consentManagementUsp","cpmstarBidAdapter","criteoIdSystem","enrichmentFpdModule","eplanningBidAdapter","gdprEnforcement","gptPreAuction","id5IdSystem","identityLinkIdSystem","insticatorBidAdapter","ixBidAdapter","kueezRtbBidAdapter","limelightDigitalBidAdapter","medianetBidAdapter","minutemediaBidAdapter","nobidBidAdapter","openxBidAdapter","pairIdSystem","priceFloors","pubmaticBidAdapter","riseBidAdapter","rubiconBidAdapter","sharedIdSystem","sharethroughBidAdapter","sonobiBidAdapter","tripleliftBidAdapter","unifiedIdSystem","vidazooBidAdapter"]}');let em=new eh("blitz-ONuZ1Ty9qx",!1);em.addPreset([ep]),em.addResource({name:"vidazoo",appendTo:a.Head,async:!1,defer:!0,url:"//static.vidazoo.com/basev/vwpt.js",dataAttributes:[{key:"widget-id",value:"64a14a5609d0b04b751a722a"}]}),em.setLibraryFolder("dyno-default"),em.setWrapper("dyno-default"),em.setPrebidBuild(eg),em.addResource({name:"cleanio",appendTo:a.Head,async:!1,url:"//cadmus.script.ac/d18yyev9t5hesl/script.js"}),em.addResource(ef),em.addResource({name:"liveramp",appendTo:a.Head,async:!0,url:"https://launchpad-wrapper.privacymanager.io/c2805dc6-a89c-4d46-af7a-ba7237dd8e37/launchpad-liveramp.js"}),em.start()}()}();