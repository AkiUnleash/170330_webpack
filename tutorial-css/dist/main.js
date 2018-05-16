!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),u=null,c=0,f=[],l=e(0);function d(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(g(r.parts[s],n))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],n));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],s=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):e.push(r[s]={id:s,parts:[a]})}return e}function h(t,n){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),f.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=f.indexOf(t);n>=0&&f.splice(n,1)}function v(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(n,t.attrs),h(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function g(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var s=c++;e=u||(u=v(n)),r=x.bind(null,e,s,!1),o=x.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),h(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,n),o=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){m(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return d(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var s=e[o];(a=i[s.id]).refs--,r.push(a)}t&&d(p(t,n),n);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var y,w=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function x(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(i,s[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var s;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,'html, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, "\\6E38\\30B4\\30B7\\30C3\\30AF   Medium", "Yu Gothic Medium", "\\6E38\\30B4\\30B7\\30C3\\30AF\\4F53", YuGothic, "\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4   Pro W3", "Hiragino Kaku Gothic ProN", "\\30E1\\30A4\\30EA\\30AA", Meiryo, sans-serif;\n  font-feature-settings: "palt"; /* プロポーショナルメトリクスを有効に */\n}\n\n.my-grid {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 50px 1fr 50px;\n\n  width: 100%;\n  height: 100%;\n}\n\n.my-grid-item {\n  /* 中央寄せ */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* フォント */\n  color: white;\n  font-size: 2.0rem;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n}\n\nheader {\n  grid-column: 1 / 3;\n  grid-row: 1;\n\n  background: #3498db;\n}\n\naside {\n  grid-column: 1;\n  grid-row: 2 / 4;\n\n  background: #e67e22;\n}\n\nmain {\n  grid-column: 2;\n  grid-row: 2;\n\n  background: #2ecc71;\n}\n\nfooter {\n  grid-column: 2;\n  grid-row: 3;\n\n  background: #95a5a6;\n}\n',""])},function(t,n,e){var r=e(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){"use strict";e.r(n);e(4)}]);