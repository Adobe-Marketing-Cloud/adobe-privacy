!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(e){var t=r.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}e.exports=n;var r=Object.prototype.toString},function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),u=n(8),s=r(u);/**
 * @license
 * AdobePrivacy.js | (c) Adobe Systems Incorporated | All rights reserved
 * Copyright 1996-2018 Adobe, Inc. All Rights Reserved
 */
e.Promise=o.default;var a=n(21),c=a.keys().reduce(function(e,t){return e[t]=a(t).default,e},{}),l=Object.keys(c).map(function(e){return c[e]});s.default.registerPlugins(l),e.AdobePrivacy=s.default,t.default=s.default}).call(t,n(0))},function(e,t,n){"use strict";e.exports=window.Promise||n(4)},function(e,t,n){(function(t){!function(n){function r(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function u(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}s(t.promise,r)})}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void f(i(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}var d=setTimeout;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r);return u(this,new l(e,t,n)),n},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(o,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var s=u.then;if("function"==typeof s)return void s.call(u,function(e){r(o,e)},n)}t[o]=u,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=o:n.Promise||(n.Promise=o)}(this)}).call(t,n(5).setImmediate)},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return c[a]=r,s(a),a++}function i(e){delete c[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function u(e){if(l)setTimeout(u,0,e);else{var t=c[e];if(t){l=!0;try{o(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var s,a=1,c={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){u(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&u(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){u(e.data)},s=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;s=function(t){var n=f.createElement("script");n.onreadystatechange=function(){u(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(u,0,e)}}(),d.setImmediate=r,d.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(0),n(7))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){h&&p&&(h=!1,p.length?v=p.concat(v):m=-1,v.length&&s())}function s(){if(!h){var e=i(u);h=!0;for(var t=v.length;t;){for(p=v,v=[];++m<t;)p&&p[m].run();m=-1,t=v.length}p=null,h=!1,o(e)}}function a(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,v=[],h=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new a(e,t)),1!==v.length||h||i(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[g.DELETE];return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).reduce(function(t,n){return n.isDeletedClientSide=e.some(function(e){return e.namespace===n.namespace&&e.value===n.value}),t.push(n),t},[])};return e.retrieveIdentities().then(function(i){return e._delegateToPlugins("deleteIDs").then(function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=i.validIDs?(0,m.pluckUserIDs)(i.validIDs):[],s=r(o.validIDs||void 0,u),a={validIDs:e._buildSchema(s,t),failedIDs:e._buildSchema(o.failedIDs,t)};return n(a),a})})}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),a=r(s),c=n(15),l=r(c),f=n(17),d=r(f),p=n(18),v=r(p),h=n(19),m=n(20),g={ACCESS:"access",DELETE:"delete"},y=function(){},_=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),(0,m.normalizeOrgID)(n.imsOrgID);var r=(0,v.default)(e);this._plugins=t.plugins.map(function(e){return new e((0,m.clone)(n),{configNamesEnum:h.CONFIG_NAMES,localStorage:r,cookies:l.default,xhr:a.default})});var u=(0,m.generateContexts)(n,h.CONFIG_NAMES);this._buildSchema=(0,m.makeSchemaBuilder)(u,n.key),this.removeIdentities=o(this),this.retrieveThenRemoveIdentities=o(this,[g.ACCESS,g.DELETE])}return u(t,[{key:"retrieveIdentities",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return this._delegateToPlugins("getIDs").then(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={validIDs:e._buildSchema(n.validIDs,g.ACCESS),failedIDs:e._buildSchema(n.failedIDs,g.ACCESS)};return t(r),r})}},{key:"_delegateToPlugins",value:function(e){if(0===this._plugins.length)return Promise.resolve();var t=this._generateTimedPromises(e);return(0,m.resolveAllPromises)(t).then(function(e){return(0,m.split)(e)}).catch(function(t){throw new Error("[AdobePrivacy#"+e+"] Unexpected error!")})}},{key:"_generateTimedPromises",value:function(e){return this._plugins.reduce(function(t,n){if("function"==typeof n[e]){var r=n.constructor.name;t[r]=(0,d.default)(n[e](),{prefix:r,timeout:n.apiWaitTime})}return t},{})}}],[{key:"registerPlugins",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.plugins=t.plugins.concat(e)}}]),t}();_.plugins=[],t.default=_}).call(t,n(0))},function(e,t,n){"use strict";function r(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function i(e,t,n){var r=e;return l(t)?(n=t,"string"==typeof e&&(r={uri:e})):r=d(t,{uri:e}),r.callback=n,r}function o(e,t,n){return t=i(e,t,n),u(t)}function u(e){function t(){4===l.readyState&&setTimeout(u,0)}function n(){var e=void 0;if(e=l.response?l.response:l.responseText||s(l),b)try{e=JSON.parse(e)}catch(e){}return e}function i(e){return clearTimeout(v),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,c(e,I)}function u(){if(!p){var t;clearTimeout(v),t=e.useXDR&&void 0===l.status?200:1223===l.status?204:l.status;var r=I,i=null;return 0!==t?(r={body:n(),statusCode:t,method:m,headers:{},url:h,rawRequest:l},l.getAllResponseHeaders&&(r.headers=f(l.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),c(i,r,r.body)}}if(void 0===e.callback)throw new Error("callback argument missing");var a=!1,c=function(t,n,r){a||(a=!0,e.callback(t,n,r))},l=e.xhr||null;l||(l=e.cors||e.useXDR?new o.XDomainRequest:new o.XMLHttpRequest);var d,p,v,h=l.url=e.uri||e.url,m=l.method=e.method||"GET",g=e.body||e.data,y=l.headers=e.headers||{},_=!!e.sync,b=!1,I={body:void 0,headers:{},statusCode:0,method:m,url:h,rawRequest:l};if("json"in e&&!1!==e.json&&(b=!0,y.accept||y.Accept||(y.Accept="application/json"),"GET"!==m&&"HEAD"!==m&&(y["content-type"]||y["Content-Type"]||(y["Content-Type"]="application/json"),g=JSON.stringify(!0===e.json?g:e.json))),l.onreadystatechange=t,l.onload=u,l.onerror=i,l.onprogress=function(){},l.onabort=function(){p=!0},l.ontimeout=i,l.open(m,h,!_,e.username,e.password),_||(l.withCredentials=!!e.withCredentials),!_&&e.timeout>0&&(v=setTimeout(function(){if(!p){p=!0,l.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",i(e)}},e.timeout)),l.setRequestHeader)for(d in y)y.hasOwnProperty(d)&&l.setRequestHeader(d,y[d]);else if(e.headers&&!r(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(l.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(l),l.send(g||null),l}function s(e){if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;return""!==e.responseType||t?null:e.responseXML}function a(){}var c=n(10),l=n(1),f=n(11),d=n(14);e.exports=o,o.XMLHttpRequest=c.XMLHttpRequest||a,o.XDomainRequest="withCredentials"in new o.XMLHttpRequest?o.XMLHttpRequest:c.XDomainRequest,function(e,t){for(var n=0;n<e.length;n++)t(e[n])}(["get","put","post","patch","head","delete"],function(e){o["delete"===e?"del":e]=function(t,n,r){return n=i(t,n,r),n.method=e.toUpperCase(),u(n)}})},function(e,t,n){(function(t){var n;n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n}).call(t,n(0))},function(e,t,n){var r=n(12),i=n(13),o=function(e){return"[object Array]"===Object.prototype.toString.call(e)};e.exports=function(e){if(!e)return{};var t={};return i(r(e).split("\n"),function(e){var n=e.indexOf(":"),i=r(e.slice(0,n)).toLowerCase(),u=r(e.slice(n+1));void 0===t[i]?t[i]=u:o(t[i])?t[i].push(u):t[i]=[t[i],u]}),t}},function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e,t,n){function r(e,t,n){if(!s(t))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===a.call(e)?i(e,t,n):"string"==typeof e?o(e,t,n):u(e,t,n)}function i(e,t,n){for(var r=0,i=e.length;r<i;r++)c.call(e,r)&&t.call(n,e[r],r,e)}function o(e,t,n){for(var r=0,i=e.length;r<i;r++)t.call(n,e.charAt(r),r,e)}function u(e,t,n){for(var r in e)c.call(e,r)&&t.call(n,e[r],r,e)}var s=n(1);e.exports=r;var a=Object.prototype.toString,c=Object.prototype.hasOwnProperty},function(e,t){function n(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var i in n)r.call(n,i)&&(e[i]=n[i])}return e}e.exports=n;var r=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";var r=n(16);e.exports={get:r.get,set:r.set,remove:r.remove}},function(e,t,n){var r,i;!function(o){var u=!1;if(r=o,void 0!==(i="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=i),u=!0,e.exports=o(),u=!0,!u){var s=window.Cookies,a=window.Cookies=o();a.noConflict=function(){return window.Cookies=s,a}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,i,o){var u;if("undefined"!=typeof document){if(arguments.length>1){if(o=e({path:"/"},r.defaults,o),"number"==typeof o.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*o.expires),o.expires=s}o.expires=o.expires?o.expires.toUTCString():"";try{u=JSON.stringify(i),/^[\{\[]/.test(u)&&(i=u)}catch(e){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,!0!==o[c]&&(a+="="+o[c]));return document.cookie=t+"="+i+a}t||(u={});for(var l=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<l.length;d++){var p=l[d].split("="),v=p.slice(1).join("=");'"'===v.charAt(0)&&(v=v.slice(1,-1));try{var h=p[0].replace(f,decodeURIComponent);if(v=n.read?n.read(v,h):n(v,h)||v.replace(f,decodeURIComponent),this.json)try{v=JSON.parse(v)}catch(e){}if(t===h){u=v;break}t||(u[h]=v)}catch(e){}}return u}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.prefix,r=void 0===n?"plugin":n,o=t.timeout,u=void 0===o?i:o,s=new Promise(function(e,t){setTimeout(function(){t("The "+r+" has timed out!!!")},u)});return Promise.race([e,s])}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=4e3},function(e,t,n){"use strict";function r(e){return{getItem:function(t){try{return e.localStorage.getItem(t)}catch(e){return null}},setItem:function(t,n){try{return e.localStorage.setItem(t,n),!0}catch(e){return!1}},removeItem:function(t){try{return e.localStorage.removeItem(t),!0}catch(e){return!1}}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONFIG_NAMES={ANALYTICS:"Analytics",AAM:"AudienceManager",ADCLOUD:"AdCloud",ADCLOUD_AMO:"AdCloud_amo",CRS:"CRS",DPSC:"DPSC",PROFILE:"ProfileService",EXPERIENCE_PLATFORM:"ExperiencePlatform",EXPERIENCE_MANAGER:"ExperienceManager",SOCIAL:"Social",CAMPAIGN:"Campaign",MOBILE:"Mobile",DEVICE_GRAPH:"DeviceGraph",TARGET:"Target",IMSORGID:"imsOrgID"}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=t.nullify=function(e){return e.length>0?e.filter(function(e){return e}):null},o=(t.clone=function(e){return JSON.parse(JSON.stringify(e))},t.flatten=function(e){var t;return(t=[]).concat.apply(t,r(e))}),u=t.reduceList=function(e,t,n){return e.reduce(function(e,r){return n(r)&&e.push(r[t]),e},[])};t.resolveAllPromises=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"UNKNOWN EXCEPTION";return e&&e.stack&&e.message?{namespace:t,message:e.message}:e},n=function(e){return{payload:e,resolved:!0}},r=function(e){return function(n){return{payload:t(n,e),resolved:!1}}},i=Object.keys(e).reduce(function(t,i){return t.push(e[i].then(n).catch(r(i))),t},[]);return Promise.all(i)},t.generateContexts=function(e,t){return Object.keys(t).reduce(function(n,r){var i=t[r];return e[i]&&n.push({namespace:i,value:e[i]}),n},[])},t.makeSchemaBuilder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return r="string"==typeof r?[r]:r,n?{companyContexts:e,users:[{key:t,action:r,userIDs:n}]}:null}},t.normalizeOrgID=function(e){return e&&e.indexOf("@AdobeOrg")<0?e+"@AdobeOrg":e},t.split=function(e){return{validIDs:i(o(u(e,"payload",function(e){return e.resolved}))),failedIDs:i(o(u(e,"payload",function(e){return!e.resolved})))}},t.pluckUserIDs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e.users)&&e.users.length?e.users[0].userIDs:[]}},function(e,t,n){function r(e){return n(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./Adobe/AA/index.js":22,"./Adobe/AAM/index.js":24,"./Adobe/Target/index.js":25,"./Adobe/Visitor/index.js":26,"./Adobe/tubemogul/index.js":28};r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=21},function(e,t,n){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(23),u=function(e){return e&&e.__esModule?e:{default:e}}(o),s={company:"adobe",type:"standard",namespace:"AAID",namespaceId:10},a=Object.assign({},s,{description:"Fallback Visitor ID"}),c=Object.assign({},s,{description:"Legacy Visitor ID"}),l=function(){function t(e,n){var i=n.configNamesEnum,o=n.cookies,u=n.localStorage,s=n.xhr;r(this,t),this._config=e,this._configNamesEnum=i,this._xhr=s,this._cookies=o,this._localStorage=u,this._reportSuiteList=this._getReportSuiteList(e)}return i(t,[{key:"getIDs",value:function(){var e=this,t=this._validateConfiguration(this._config);if(t)return Promise.reject(this._constructError(t));var n=[];return this._getFallbackVisitorId().then(function(t){return t&&n.push(e._constructId(a,t)),Promise.all(e._createLegacyVisitorIdGetPromises())}).then(function(t){var r=e._constructIds(c,t);return n=e._mergeIdLists(r,n),n=e._formatIdList(n),Promise.resolve(n)}).catch(function(t){return Promise.reject(e._constructError(t))})}},{key:"_createLegacyVisitorIdGetPromises",value:function(){for(var e,t=[],n=0;n<this._reportSuiteList.length;n++)e=this._reportSuiteList[n],t.push(this._getLegacyVisitorId(this._config,e));return t.push(this._getLegacyVisitorId(this._config)),t}},{key:"_constructIds",value:function(e,t){for(var n=[],r=0;r<t.length;r++)t[r]&&n.push(this._constructId(e,t[r]));return n}},{key:"_mergeIdLists",value:function(e,t){e||(e=[]),t||(t=[]);for(var n={},r="",i=[],o=0;o<e.length;o++)r=e[o].value,n[r]||(n[r]=!0,i.push(e[o]));for(o=0;o<t.length;o++)r=t[o].value,n[r]||(n[r]=!0,i.push(t[o]));return i}},{key:"_formatIdList",value:function(e){e||(e=[]);for(var t=0;t<e.length;t++)e[t].value&&(e[t].value=e[t].value.toUpperCase(),e[t].value=e[t].value.replace(":","-"));return e}},{key:"_validateConfiguration",value:function(e){return e?e.reportSuite?void 0:"No Report Suite specified":"Missing configuration"}},{key:"_getReportSuiteList",value:function(e){return e&&e.reportSuite?e.reportSuite.split(","):[]}},{key:"_constructError",value:function(e){return Object.assign({},s,{message:e})}},{key:"_getFallbackVisitorId",value:function(){var e=this;return new Promise(function(t,n){try{var r=e._cookies.get("s_fid");r?t(r):t()}catch(e){n(e.message)}})}},{key:"_constructId",value:function(e,t){return Object.assign({},e,{value:t})}},{key:"_getLegacyVisitorId",value:function(e,t){var n=this;return new Promise(function(r,i){try{var o=n._getDataCollectionIdEndpoint(e);o+="?suppressIDGeneration=1",t&&(o+="&u="+t);var u=e.cookieDomainPeriods;o+=u?"&cdp="+u:"",n._xhr({withCredentials:!0,uri:o,json:!0},function(e,t,n){200===t.statusCode?n&&(n.id?r(n.id):r()):i(e===Object(e)?e.message:"Error retrieving ID")})}catch(e){i(e.message)}})}},{key:"_getDataCollectionIdEndpoint",value:function(e){e.ssl||(e.ssl="https:"===location.protocol);var t=new u.default(e),n=t.getDataCollectionHostname();return"http"+(e.ssl?"s":"")+"://"+n+"/id"}},{key:"deleteIDs",value:function(){var e=this,t=this._validateConfiguration(this._config);if(t)return Promise.reject(this._constructError(t));var n=[];return this._deleteFallbackVisitorId().then(function(t){return t&&n.push(e._constructId(a,t)),Promise.all(e._createLegacyVisitorIdDeletePromises())}).then(function(t){var r=e._constructIds(c,t);return n=e._mergeIdLists(r,n),Promise.resolve(n)}).catch(function(t){return Promise.reject(e._constructError(t))})}},{key:"_createLegacyVisitorIdDeletePromises",value:function(){for(var e,t=[],n=0;n<this._reportSuiteList.length;n++)e=this._reportSuiteList[n],t.push(this._deleteLegacyVisitorId(this._config,e));return t.push(this._deleteLegacyVisitorId(this._config)),t}},{key:"_deleteFallbackVisitorId",value:function(){var e=this;return new Promise(function(t,n){try{var r=e._cookies.get("s_fid"),i=e._getCookieDomain();r?(e._cookies.remove("s_fid",{domain:i}),t(r)):t()}catch(e){n(e.message)}})}},{key:"_getCookieDomain",value:function(){var t,n,r=e.location.hostname,i=this._config.cookieDomainPeriods;if(r&&!/^[0-9.]+$/.test(r)&&(i=i?parseInt(i):2,i=i>2?i:2,(t=r.lastIndexOf("."))>=0)){for(;t>=0&&i>1;)t=r.lastIndexOf(".",t-1),i--;n=t>0?r.substring(t):r}return n}},{key:"_deleteLegacyVisitorId",value:function(e,t){var n=this;return new Promise(function(r,i){try{var o=n._getDataCollectionIdEndpoint(e);o+="?suppressIDGeneration=1",t&&(o+="&u="+t);var u=e.cookieDomainPeriods;o+=u?"&cdp="+u:"",o+="&deleteID=1",n._xhr({method:"get",withCredentials:!0,uri:o,json:!0},function(e,t,n){200===t.statusCode?n&&(n.id?r(n.id):r()):i(e===Object(e)?e.message:"Error deleting ID")})}catch(e){i(e.message)}})}}],[{key:"name",get:function(){return"AA"}}]),t}();t.default=l,l.extensionConfigs={reportSuite:{type:"string",isRequired:!0,description:'Report Suite ID as specified in your JavaScript Web beacon (e.g. s_code.js, dtm, etc).<p>Example:<br/>s_account = "Report-Suite-ID";</p>'},trackingServer:{type:"string",isRequired:!1,description:'Data collection domain (non-ssl). Do not define it here unless specified in your JavaScript Web beacon (e.g. s_code.js, dtm, etc).<p>Example:<br/>s.trackingServer = "metrics.mycompany.com";</p>'},trackingServerSecure:{type:"string",isRequired:!1,description:'Data collection domain (ssl). Do not define it here unless specified in your JavaScript Web beacon (e.g. s_code.js, dtm, etc).<p>Example:<br/>s.trackingServer = "metrics.mycompany.com";</p>'},dataCenter:{type:"string",isRequired:!1,description:'Adobe data collection data center.<p>d1 = San Jose data center<br/>d2 = Dallas data center</p>Do not define it here unless specified in your JavaScript Web beacon (e.g. s_code.js, dtm, etc).<p>Example:<br/>s.dc = "d2";</p>'},visitorNamespace:{type:"string",isRequired:!1,description:'Namespace used to group visitors. Do not define it here unless specified in your JavaScript Web beacon (e.g. s_code.js, dtm, etc).<p>Example:<br/>s.visitorNamespace = "mycompany";</p>'},cookieDomainPeriods:{type:"integer",isRequired:!1,description:"Specifies the number periods in a domain for cookie tracking (default 2, e.g. domain.com). Do not define it here unless specified in your JavaScript Web beacon (e.g. s_code.js, dtm, etc).<p>Example:<br/>s.cookieDomainPeriods = 2;</p>"}}}).call(t,n(0))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.account=t.reportSuite,this.trackingServer=t.trackingServer,this.trackingServerSecure=t.trackingServerSecure,this.dc=t.dataCenter,this.visitorNamespace=t.visitorNamespace,this.ssl=t.ssl}return i(e,[{key:"getDataCollectionHostname",value:function(){var e=this.dc,t=this.trackingServer;return t?this.trackingServerSecure&&this.ssl&&(t=this.trackingServerSecure):(e=e?(""+e).toLowerCase():"d1","d1"===e?e="112":"d2"===e&&(e="122"),t=this.getVisitorNamespace()+"."+e+".2o7.net"),t}},{key:"getVisitorNamespace",value:function(){var e=this.visitorNamespace;return e||(e=this.account.split(",")[0],e=e.replace(/[^0-9a-z]/gi,"")),e}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,n){var i=n.cookies,o=n.xhr;r(this,e),this._config=t,this._xhr=o,this._cookies=i,this._baseSchema={company:"adobe",namespace:"CORE",namespaceId:0,type:"standard",description:"Adobe Audience Manager UUID"}}return i(e,[{key:"getIDs",value:function(){var e=this;return new Promise(function(t,n){e.getIdsPromise(t,n)})}},{key:"getIdsPromise",value:function(e,t){var n=this;try{var r=this._config.aamUUIDCookieName||"aam_did",i=this._cookies.get(r);i?e(this.constructId(i)):this._xhr.get({url:document.location.protocol+"//dpm.demdex.net/profile/uuid",withCredentials:!0,json:!0},function(r,i,o){r===Object(r)?t(n.constructError(r.message)):o===Object(o)?null===o.uuid||"NOTARGET"===o.uuid?e():e(n.constructId(o.uuid)):e()})}catch(e){t(this.constructError(e.message))}}},{key:"constructId",value:function(e){return Object.assign({},this._baseSchema,{value:e})}},{key:"constructError",value:function(e){return Object.assign({},this._baseSchema,{message:e})}}],[{key:"name",get:function(){return"AAM"}}]),e}();t.default=o,o.extensionConfigs={aamUUIDCookieName:{type:"string",isRequired:!1,description:"Name of first party cookie with the unique user ID returned from Audience Manager (default is aam_did)"}}},function(e,t,n){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i="No Target ID was found.",o={company:"adobe",namespace:"TNTID",namespaceId:9,type:"standard",description:"This is an ID generated by Target and set in 1st or/and third party cookie."},u=function(){function t(e,r){var i=r.cookies,o=r.xhr;n(this,t),this._config=e,this._cookies=i,this._xhr=o}return r(t,[{key:"getIDs",value:function(){var e=this,t=this._config.clientCode;return t?this._fetchTntIds(t,this._cookies,this._xhr).catch(function(t){return Promise.reject(e._constructErrorMessage(t))}):Promise.reject(this._constructErrorMessage("Please provide a valid clientCode."))}},{key:"_dedup",value:function(e){var t=e.reduce(function(e,t){return e[t]=1,e},{});return Object.keys(t)}},{key:"_fetchTntIds",value:function(e,t,n){var r=this,o=this._fetchTntIdFromFirstPartyCookie(t),u=this._fetchTntIdFromThirdPartyCookie(e,n);return Promise.all([o,u]).then(function(e){return e.filter(function(e){return null!==e})}).then(this._dedup).then(function(e){return e&&e.length>0?e.map(r._constructResult):Promise.reject(i)})}},{key:"_fetchTntIdFromFirstPartyCookie",value:function(e){var t=e.get("mbox");if(!t||""===t)return Promise.resolve(null);var n=this._getTntId(t);return n?Promise.resolve(n):Promise.resolve(null)}},{key:"_fetchTntIdFromThirdPartyCookie",value:function(e,t){var n=this;return new Promise(function(r){var i=n._getTntEndpoint(e);t({method:"get",uri:i,json:!0,withCredentials:!0},function(e,t,n){if(n&&null!==n.tntId)return void r(n.tntId);r(null)})})}},{key:"deleteIDs",value:function(){var e=this,t=this._config.clientCode;return t?this._deleteTntIds(t,this._cookies,this._xhr).catch(function(t){return Promise.reject(e._constructErrorMessage(t))}):Promise.reject(this._constructErrorMessage("Please provide a valid clientCode."))}},{key:"_deleteTntIds",value:function(e,t,n){var r=this,o=this._deleteTntIdFromFirstPartyCookie(t),u=this._deleteTntIdFromThirdPartyCookie(e,n);return Promise.all([u,o]).then(function(e){return e.filter(function(e){return null!==e})}).then(this._dedup).then(function(e){return e&&e.length>0?e.map(r._constructResult):Promise.reject(i)})}},{key:"_getDomain",value:function(){return e.location.hostname}},{key:"_isIPv4",value:function(e){return/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(e)}},{key:"_getCookieDomain",value:function(){var e=this._getDomain();if(this._isIPv4(e))return e;var t=e.split(".").reverse(),n=t.length;return n>=3&&/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i.test(t[1])?t[2]+"."+t[1]+"."+t[0]:1===n?t[0]:t[1]+"."+t[0]}},{key:"_deleteTntIdFromFirstPartyCookie",value:function(e){var t=this._getCookieDomain(),n=e.get("mbox");if(!n||""===n)return Promise.reject(i);var r=this._getTntId(n);return r?(this._cookies.remove("mbox",{domain:t}),Promise.resolve(r)):Promise.resolve(null)}},{key:"_deleteTntIdFromThirdPartyCookie",value:function(e,t){var n=this;return new Promise(function(r){var i=n._getTntEndpoint(e);t({method:"delete",uri:i,json:!0,withCredentials:!0},function(e,t,n){if(n&&null!==n.tntId)return void r(n.tntId);r(null)})})}},{key:"_getTntEndpoint",value:function(e){return"//"+e+".tt.omtrdc.net/m2/"+e+"/gdpr/tntid"}},{key:"_getTntId",value:function(e){var t=e.split("|").filter(function(e){return-1!==e.indexOf("PC")})[0];return t?t.split("#")[1]:null}},{key:"_constructResult",value:function(e){return Object.assign({},o,{value:e})}},{key:"_constructErrorMessage",value:function(e){return Object.assign({},o,{message:e})}}],[{key:"name",get:function(){return"Target"}}]),t}();t.default=u,u.extensionConfigs={clientCode:{type:"string",label:"Client Code",isRequired:!0,description:"Client Code that identifies a client in Target System.",customValidate:function(e){return!0}}}}).call(t,n(0))},function(e,t,n){"use strict";(function(e){function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(27),s=function(e){return e&&e.__esModule?e:{default:e}}(u),a={company:"adobe",namespace:"ECID",namespaceId:4,type:"standard",description:"This is the ID generated by the Adobe ID service."},c={company:"adobe",type:"integrationCode",description:"This is the unique user id in the specified namespace (data source)."},l=function(){function t(e,n){var r=n.cookies;i(this,t),this._config=e,this._cookies=r}return o(t,[{key:"getIDs",value:function(){var e=this;return new Promise(function(t,n){if(!e._config.imsOrgID)return n(e._generateResult({message:"Make sure you provide your ORG ID."}));var i=e._findVisitorInstance(e._config.imsOrgID);e._fetchMidFromCookie(e._config.imsOrgID,i).then(function(n){return e._getCustomerIds(i).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=[n].concat(r(e)).filter(function(e){return!!e});return i&&i.length?t(i):t()})})})}},{key:"_findVisitorInstance",value:function(t){var n=e.s_c_il;if(n)for(var r=0;r<n.length;r++){var i=n[r];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===t)return i}}},{key:"_fetchMidFromCookie",value:function(e,t){var n=this,r=this._generateResult;return new Promise(function(i,o){var u=n._cookies.get("AMCV_"+e)||"",a=(0,s.default)(decodeURIComponent(u),"MCMID");a?i(r({value:a})):t?t._loading&&t._loading.MC&&t.getMarketingCloudVisitorID(function(e){i(r({value:e}))},!0):i(null)})}},{key:"_generateResult",value:function(e){return Object.assign({},a,e)}},{key:"_generateCustomerId",value:function(e){return Object.assign({},c,e)}},{key:"_getCustomerIds",value:function(e){var t=this;return new Promise(function(n,r){if(!e)return n();var i=e.getCustomerIDs();n(Object.keys(i).reduce(function(e,n){var r=i[n];if(r===Object(r)){var o=r.id;o&&e.push(t._generateCustomerId({namespace:n,value:o}))}return e},[]))})}}],[{key:"name",get:function(){return"Visitor"}}]),t}();t.default=l,l.extensionConfigs={imsOrgID:{type:"string",label:"ORG ID",isRequired:!0,description:"",customValidate:function(e){return!0}}}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return e.match(/^[-0-9]+$/)}function i(e){var t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],r(e[0])?e.slice(1):e.slice());return t.length%2==1&&t.pop(),t}function o(e,t){if(!e||"T"===e)return null;for(var n=i(decodeURIComponent(e).split("|")),r=0,o=n.length;r<o;r+=2){var s=n[r].split("-"),a=u(s,1),c=a[0],l=n[r+1];if(c===t)return l}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={company:"adobe",namespace:"AdCloud",namespaceId:411,type:"standard"},u=function(){function e(t,n){var i=(n.configNamesEnum,n.cookies,n.localStorage,n.xhr);r(this,e),this._xhr=i}return i(e,[{key:"getIDs",value:function(){var e=this;return new Promise(function(t,n){e._xhr({method:"get",uri:"//rtd-tm.everesttech.net/api/v1/cookie",withCredentials:!0},function(e,r,i){if(void 0!==i)if((i=JSON.parse(i))===Object(i)&&"device_id"in i&&i.device_id){var u=Object.assign({},o,{value:i.device_id});t(u)}else{var s=Object.assign({},o,{message:"response body malformed: "+String(i)});n(s)}else{var a=Object.assign({},o,{message:"error from server: "+String(e)});n(a)}})})}},{key:"deleteIDs",value:function(){var e=this;return new Promise(function(t,n){var r=e._xhr;e._xhr({method:"get",uri:"//rtd-tm.everesttech.net/api/v1/optedOutId",withCredentials:!0},function(e,i,u){if(void 0!==u)if((u=JSON.parse(u))===Object(u)&&"new_device_id"in u&&"old_device_id"in u){r({method:"delete",uri:"https://api.tubemogul.com/v1/gdpr/dco/"+u.new_device_id},function(e,t,n){});var s=Object.assign({},o,{value:u.old_device_id});t(s)}else{var a=Object.assign({},o,{message:"response body malformed: "+String(u)});n(a)}else{var c=Object.assign({},o,{message:"error from server: "+String(e)});n(c)}})})}}],[{key:"name",get:function(){return"AdCloud"}}]),e}();t.default=u}]).default});