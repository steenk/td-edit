!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);let o={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"};function r(t){var e,n,i,a,c=Array.prototype.slice.call(arguments,1),l=[];if("string"!=typeof t)return"[object Array]"===Object.prototype.toString.call(t)?r.apply(this,t):t instanceof window.HTMLElement||t instanceof window.SVGElement?(t.evt=p,t.set=d,t.fun=f,t.ins=h,t.css=s,t.query=t.querySelector,t.queryAll=t.querySelectorAll,t.prototype=t,t):void 0;if(!t||/^[A-Za-z][A-Za-z0-9-_\.:#]*$/.test(t)){for(e=t.split(/([\.#])/),i=0;i<e.length;i++)0===i?(a=e[0].split(":"),n=o[a[0]]?window.document.createElementNS(o[a[0]],a[1]||a[0]):window.document.createElement(a[1]||a[0])):n&&"."===e[i-1]?l.push(e[i]):"#"===e[i-1]&&n.setAttribute("id",e[i]);return l.length>0&&n.setAttribute("class",l.join(" ")),u.call(n,c),n.css=s,n.set=d,n.fun=f,n.evt=p,n.ins=h,n.query=n.querySelector,n.queryAll=n.querySelectorAll,n.prototype=n,n}function u(t){var e,n,i,a,c;for(n=0;n<t.length;n++)if((e=t[n])&&e.nodeType)this.appendChild(e);else if("object"==typeof e)if("[object Array]"===Object.prototype.toString.call(e))this.appendChild(r.apply(this,e));else for(a in e)e.hasOwnProperty(a)&&(/^data[A-Z]/.test(a)?(c=a.substr(4).toLowerCase(),this.setAttribute("data-"+c,e[a])):2===(i=a.split(":")).length&&Object.keys(o).indexOf(i[0])>-1?this.setAttributeNS(o[i[0]],i[1],e[a]):this.setAttribute(a,e[a]));else this.appendChild(window.document.createTextNode(String(e)))}function s(t){var e,n,o;for(e in t)if(t.hasOwnProperty(e))if("object"!=typeof t[e])this.style[e]=t[e];else for(n=this.querySelectorAll(e),o=0;o<n.length;o++)s.call(n[o],t[e]);return this}function d(t,e){return this[t]=e,this}function f(t){var e=Array.prototype.slice.call(arguments,1);return this[t].apply(this,e),this}function p(t,e){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);this.addEventListener?this.addEventListener(t,(function(t){var o=[t].concat(n);e.apply(this,o)}),!1):this.attachEvent("on"+t,(function(t){var o=[t].concat(n);e.apply(this,o)}))}else this.addEventListener?this.addEventListener(t,e,!1):this.attachEvent("on"+t,e);return this}function h(){return u.call(this,Array.prototype.slice.call(arguments)),this}console.log('$$$: not a valid ident parameter "'+t+'".')}var i,a,c,l;r.version="1.5.4",r.structify=function(t,e){var n,o=null;return 1===t.nodeType&&(n=function(t){var o,r,i,a,c,l=[],u=/id|class|contenteditable/,s=t.localName,d=String(t.getAttribute("class")||"").replace(/\s/g,".");if(d&&(s+="."+d),t.id&&(s+="#"+t.id),l.push(s),t.hasAttributes()){for(r=t.attributes,o={},c=0;c<r.length;c++)u.test(r[c].name)||(o[r[c].name]=r[c].value);Object.keys(o).length>0&&l.push(o)}for(t.normalize(),i=t.childNodes,c=0;c<i.length;c++)3===i[c].nodeType?(a=e?i[c].data.replace(/\s\s*/," ").trim():i[c].data).length>0&&l.push(a):1===i[c].nodeType&&l.push(n(i[c]));return l},o=n(t)),o},r.onReady=function(t){"complete"===window.document.readyState||"interactive"===window.document.readyState?i(t):window.document.addEventListener?window.document.addEventListener("DOMContentLoaded",t,!1):window.document.attachEvent("onreadystatechange",t)},"function"==typeof setImmediate?i=setImmediate:window.setImmediate?i=window.setImmediate:(c=[],l="doNext"+(67108864*Math.random()|0).toString(16),a=function(t){var e,n;t.source===window&&"string"==typeof t.data&&0===t.data.indexOf(l)&&((n=c.shift()).length>0&&(e=n[0].apply(void 0,n.splice(1),!0),c[0]&&1===c[0].length&&c[0].push(e)))},window.postMessage?window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("message",a):window.postMessage=function(t){window.setTimeout((function(){a({source:window,data:t})}),0)},i=function(){var t=Array.prototype.slice.call(arguments);"function"==typeof t[0]&&(c.push(t),window.postMessage(l,"*"))}),r.setImmediate=i,r.appendToDoc=function t(){function e(t){var e;r.onReady((function(){for(n=0;n<o.length;n++)"[object Array]"===Object.prototype.toString.call(o[n])?(e=r.apply(this,o[n]))&&window.document.body.appendChild(e):o[n]instanceof window.Element?window.document.body.appendChild(o[n]):"function"==typeof o[n]&&o[n]();t()}))}var n,o=Array.prototype.slice.call(arguments),a=[];return t.then=function(e){if(t===e)throw new TypeError("Circular reference.");return"function"==typeof e?a.push(e):console.log('$$$: Only functions can be passed to "then()"!'),t},t.catch=function(e){return console.log("$$$: Error occured.",e),t},"undefined"!=typeof Promise?new Promise((function(t,n){try{e(t)}catch(t){n(t)}})):(e((function(){var t;a.forEach((function(e){i((function(){t&&t.then?t.then((function(t){e(t)})):t=e(t)}))}))})),t)},r.query=function(t){return window.document.querySelector(t)},r.queryAll=function(t){return window.document.querySelectorAll(t)};let u={bold:function(t){return["strong",t]},STRONG:"bold",italic:function(t){return["em",t]},EM:"italic",underline:function(t){return["mark",t]},MARK:"underline",cite:function(t){return["cite",t]},paragraph:function(t){return["p",t]},P:"paragraph",code:function(t){return["code",t]},"quote-right":function(t){return["quote",t]},"heading.one":function(t){return["h1",t]},"heading.two":function(t){return["h2",t]},"heading.three":function(t){return["h3",t]},"heading.four":function(t){return["h4",t]},"heading.five":function(t){return["h5",t]},"heading.six":function(t){return["h6",t]},angry:function(t){return t}};let s={quote:"quote-right"};var d={run:function(t,e){if(e=s[e]||e,u[e]){let n=document.getSelection(),o=t.selection;if(!o.focusNode||o.focusNode.length<o.focusOffset)return;n.setBaseAndExtent(o.anchorNode,o.anchorOffset,o.focusNode,o.focusOffset);let i=u[e](n.toString());if(n.rangeCount){let t=n.getRangeAt(0);t.deleteContents(),t.insertNode(r(i)),n.empty()}}},check:function(t){return t=s[t]||t,u[t]?t:"angry"},mapToFA:function(t){let e=u[t];if(e)return".fa-"+e},remove:function(t,e){document.getSelection();let n=t.selection.anchorNode.parentElement;u[n.tagName]&&u[n.tagName]===e&&n.parentNode.replaceChild(t.selection.anchorNode,n)}};const f=new Event("change");function p(t,e){if("I"===t.target.tagName){let n=t.target,o=document.getElementById(e).parentElement.querySelector(".td-edit-textarea"),r=n.getAttribute("title");n.classList.contains("active")?(n.classList.remove("active"),d.remove(o,r)):d.run(o,r)}}function h(t,e,n){!function(t){let e=t.queryAll(".active");Array.from(e).forEach(t=>{t.classList.remove("active")})}(n);let o=document.getSelection();for(let t of["anchorNode","focusNode","anchorOffset","focusOffset","isCollapsed","rangeCount","type"])e.selection[t]=o[t];let r=o.anchorNode.parentNode;if(!r.classList.contains("td-edit-textarea")){let t=d.mapToFA(r.tagName),e=n.querySelector(t);e&&e.classList.add("active")}}var y={version:"0.1.0",init:function(t){t=t||{tools:["bold","italic","underline","paragraph","code","quote","heading.one","heading.two","heading.three","list","list-ol","steen"]};let e=r.queryAll(".td-rich-editor");Array.from(e).forEach(t=>{r(t).ins(["div.td-edit-toolbar"],["div.td-edit-textarea",{contenteditable:!0}])});let n=r.queryAll(".td-edit-toolbar");Array.from(n).forEach(e=>{let n="TB"+1e18*Math.random();r(e).id=n,t.tools.forEach(t=>{let n=d.check(t);e.ins(["i.fas.fa-"+n,{title:t}])}),e.evt("click",p,n)});let o=r.queryAll(".td-edit-textarea");Array.from(o).forEach(t=>{t.selection={};let e=t.parentElement.querySelector(".td-edit-toolbar");r(t).evt("change",h,t,e),t.evt("keyup",e=>{t.dispatchEvent(f)}),t.evt("click",e=>{t.dispatchEvent(f)})})}};document.onreadystatechange=function(){"complete"===document.readyState&&y.init()}}]);