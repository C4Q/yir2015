!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){e.preventDefault(),c.map(function(e){return s(e)}).forEach(function(e){e.classList.add("left")})}function o(e){e.preventDefault(),c.map(function(e){return s(e)}).forEach(function(e){e.classList.remove("left")})}var a=n(1),s=(r(a),document.querySelector.bind(document)),c=[".SectionHome__text",".SectionHome__img",".SectionHome__container",".SectionOverview__container",".SectionStats__container",".SectionApps__container",".SectionPartners__container"];s("#moveLeftButton").addEventListener("click",i),s("#moveRightButton").addEventListener("click",o)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"body,html{margin:0;padding:0}body{background-color:#000;color:#fff}.App{position:relative;margin:0 auto;outline:1px solid green;max-width:1280px;overflow:hidden}.App__container{transition:transform .5s cubic-bezier(0,.555,.25,1.08);transform:translateZ(0);width:160%}.App__container.left{transform:translate3d(-40%,0,0)}.SectionHome__text{display:inline-block;transform:translateZ(0);transition:transform .5s cubic-bezier(0,.555,.25,1.08) .65s}.SectionHome__text.left{transform:translate3d(-40%,0,0);transition:transform .5s cubic-bezier(0,.555,.25,1.08) .05s}.SectionHome__img{transition:transform .5s cubic-bezier(0,.555,.25,1.08) .6s;transform:translateZ(0)}.SectionHome__img.left{transform:translate3d(-40%,0,0);transition:transform .5s cubic-bezier(0,.555,.25,1.08) .1s}.SectionApps__container,.SectionHome__container,.SectionOverview__container,.SectionPartners__container,.SectionStats__container{display:-webkit-flex;display:flex;width:100%;transform:translateZ(0)}.SectionApps__container.left,.SectionHome__container.left,.SectionOverview__container.left,.SectionPartners__container.left,.SectionStats__container.left{transform:translate3d(-40%,0,0);transition:transform .8s cubic-bezier(0,.555,.25,1.08) .8s}.SectionApps__container,.SectionHome__container,.SectionOverview__container,.SectionPartners__container,.SectionStats__container{transition:transform .8s cubic-bezier(0,.555,.25,1.08) 0s}.SectionApps__main,.SectionHome__main,.SectionOverview__main,.SectionPartners__main,.SectionStats__main{-webkit-flex:1 1 auto;flex:1 1 auto;width:100%;padding:20px}.SectionApps__aside,.SectionHome__aside,.SectionOverview__aside,.SectionPartners__aside,.SectionStats__aside{-webkit-flex:1 1 auto;flex:1 1 auto;width:60%}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(f(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(f(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],c=i[3],f={css:a,media:s,sourceMap:c};n[o]?n[o].parts.push(f):t.push(n[o]={id:o,parts:[f]})}return t}function o(e,t){var n=v(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function f(e,t){var n,r,i;if(t.singleton){var o=S++;n=h||(h=s(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=l.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function u(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var d={},_=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=_(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=_(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,S=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,o.push(c)}if(e){var f=i(e);r(f,t)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);