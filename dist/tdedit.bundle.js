!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"};function r(e){var t,n,i,a,c=Array.prototype.slice.call(arguments,1),s=[];if("string"!=typeof e)return"[object Array]"===Object.prototype.toString.call(e)?r.apply(this,e):e instanceof window.HTMLElement||e instanceof window.SVGElement?(e.evt=p,e.set=u,e.fun=f,e.ins=h,e.css=d,e.query=e.querySelector,e.queryAll=e.querySelectorAll,e.prototype=e,e):void 0;if(!e||/^[A-Za-z][A-Za-z0-9-_\.:#]*$/.test(e)){for(t=e.split(/([\.#])/),i=0;i<t.length;i++)0===i?(a=t[0].split(":"),n=o[a[0]]?window.document.createElementNS(o[a[0]],a[1]||a[0]):window.document.createElement(a[1]||a[0])):n&&"."===t[i-1]?s.push(t[i]):"#"===t[i-1]&&n.setAttribute("id",t[i]);return s.length>0&&n.setAttribute("class",s.join(" ")),l.call(n,c),n.css=d,n.set=u,n.fun=f,n.evt=p,n.ins=h,n.query=n.querySelector,n.queryAll=n.querySelectorAll,n.prototype=n,n}function l(e){var t,n,i,a,c;for(n=0;n<e.length;n++)if((t=e[n])&&t.nodeType)this.appendChild(t);else if("object"==typeof t)if("[object Array]"===Object.prototype.toString.call(t))this.appendChild(r.apply(this,t));else for(a in t)t.hasOwnProperty(a)&&(/^data[A-Z]/.test(a)?(c=a.substr(4).toLowerCase(),this.setAttribute("data-"+c,t[a])):2===(i=a.split(":")).length&&Object.keys(o).indexOf(i[0])>-1?this.setAttributeNS(o[i[0]],i[1],t[a]):this.setAttribute(a,t[a]));else this.appendChild(window.document.createTextNode(String(t)))}function d(e){var t,n,o;for(t in e)if(e.hasOwnProperty(t))if("object"!=typeof e[t])this.style[t]=e[t];else for(n=this.querySelectorAll(t),o=0;o<n.length;o++)d.call(n[o],e[t]);return this}function u(e,t){return this[e]=t,this}function f(e){var t=Array.prototype.slice.call(arguments,1);return this[e].apply(this,t),this}function p(e,t){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);this.addEventListener?this.addEventListener(e,(function(e){var o=[e].concat(n);t.apply(this,o)}),!1):this.attachEvent("on"+e,(function(e){var o=[e].concat(n);t.apply(this,o)}))}else this.addEventListener?this.addEventListener(e,t,!1):this.attachEvent("on"+e,t);return this}function h(){return l.call(this,Array.prototype.slice.call(arguments)),this}console.log('$$$: not a valid ident parameter "'+e+'".')}var i,a,c,s,l;function d(e){return["i"].concat(e.split(/\s/).filter(e=>"active"!==e&&e)).join(".")}r.version="1.5.4",r.structify=function(e,t){var n,o=null;return 1===e.nodeType&&(n=function(e){var o,r,i,a,c,s=[],l=/id|class|contenteditable/,d=e.localName,u=String(e.getAttribute("class")||"").replace(/\s/g,".");if(u&&(d+="."+u),e.id&&(d+="#"+e.id),s.push(d),e.hasAttributes()){for(r=e.attributes,o={},c=0;c<r.length;c++)l.test(r[c].name)||(o[r[c].name]=r[c].value);Object.keys(o).length>0&&s.push(o)}for(e.normalize(),i=e.childNodes,c=0;c<i.length;c++)3===i[c].nodeType?(a=t?i[c].data.replace(/\s\s*/," ").trim():i[c].data).length>0&&s.push(a):1===i[c].nodeType&&s.push(n(i[c]));return s},o=n(e)),o},r.onReady=function(e){"complete"===window.document.readyState||"interactive"===window.document.readyState?i(e):window.document.addEventListener?window.document.addEventListener("DOMContentLoaded",e,!1):window.document.attachEvent("onreadystatechange",e)},"function"==typeof setImmediate?i=setImmediate:window.setImmediate?i=window.setImmediate:(c=[],s="doNext"+(67108864*Math.random()|0).toString(16),a=function(e){var t,n;e.source===window&&"string"==typeof e.data&&0===e.data.indexOf(s)&&((n=c.shift()).length>0&&(t=n[0].apply(void 0,n.splice(1),!0),c[0]&&1===c[0].length&&c[0].push(t)))},window.postMessage?window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("message",a):window.postMessage=function(e){window.setTimeout((function(){a({source:window,data:e})}),0)},i=function(){var e=Array.prototype.slice.call(arguments);"function"==typeof e[0]&&(c.push(e),window.postMessage(s,"*"))}),r.setImmediate=i,r.appendToDoc=function e(){function t(e){var t;r.onReady((function(){for(n=0;n<o.length;n++)"[object Array]"===Object.prototype.toString.call(o[n])?(t=r.apply(this,o[n]))&&window.document.body.appendChild(t):o[n]instanceof window.Element?window.document.body.appendChild(o[n]):"function"==typeof o[n]&&o[n]();e()}))}var n,o=Array.prototype.slice.call(arguments),a=[];return e.then=function(t){if(e===t)throw new TypeError("Circular reference.");return"function"==typeof t?a.push(t):console.log('$$$: Only functions can be passed to "then()"!'),e},e.catch=function(t){return console.log("$$$: Error occured.",t),e},"undefined"!=typeof Promise?new Promise((function(e,n){try{t(e)}catch(e){n(e)}})):(t((function(){var e;a.forEach((function(t){i((function(){e&&e.then?e.then((function(e){t(e)})):e=t(e)}))}))})),e)},r.query=function(e){return window.document.querySelector(e)},r.queryAll=function(e){return window.document.querySelectorAll(e)};let u={cite:"quote-right"};function f(e,t,n){for(var o=!1,i=1===e.nodeType?e:e.parentElement;!i.classList.contains("td-edit-textarea");)l[i.tagName]===t&&(o=!0),i=i.parentNode;if(n[t]&&!o){console.log(t+" should be created");let e=document.getSelection(),n=e.getRangeAt(0),o=r(l[t]("-"));n.insertNode(o),e.selectAllChildren(o)}return!n[t]&&o&&console.log(t+" should be removed"),o}var p={run:function(e,t){if(t=u[t]||t,l[t]){let n=document.getSelection(),o=e.selection;if(!o.focusNode||o.focusNode.length<o.focusOffset)return;if(n.setBaseAndExtent(o.anchorNode,o.anchorOffset,o.focusNode,o.focusOffset),n.rangeCount){let o=n.getRangeAt(0);if("Range"===n.type){let e=l[t](n.toString());return o.deleteContents(),o.insertNode(r(e)),void n.empty()}"Caret"===n.type&&console.log(e.toolbarId)}}},check:function(e){return l[e]?e:"angry"},mapToFA:function(e){return l[e]},remove:function(e,t){document.getSelection();let n=e.selection.anchorNode.parentElement;l[n.tagName]&&l[n.tagName]===t&&n.parentNode.replaceChild(e.selection.anchorNode,n)},setStyle:function(e,t){let n=document.getSelection(),o=e.selection;n.setBaseAndExtent(o.anchorNode,o.anchorOffset,o.focusNode,o.focusOffset);for(let e in t)f(o.anchorNode,e,t)},create:function(e){let t={};return e.tools.forEach(e=>{let n=d(e.classes);t[n]=t=>(t=t||"",JSON.parse(e.template.replace(/\$selection/g,"'"+t+"'").replace(/'/g,'"'))),t[function(e){return(/^\s*\[\s*[\'\"](.+)[\'\"]/.exec(e)[1]||"").toUpperCase()}(e.template)]=n}),l=t,{knownAction:t}},toolKey:d},h={tools:[{title:"Bold",classes:"fas fa-bold",template:"['strong', $selection]"},{title:"Italic",classes:"fas fa-italic",template:"['em', $selection]"},{title:"Mark",classes:"fas fa-underline",template:"['mark', $selection]"},{title:"Large heading",classes:"fas fa-heading one",template:"['h1', $selection]"},{title:"Middle heading",classes:"fas fa-heading two",template:"['h2', $selection]"},{title:"Small heading",classes:"fas fa-heading three",template:"['h3', $selection]"},{title:"Code",classes:"fas fa-code",template:"['code', $selection]"}]};const y=new Event("change");function m(e,t){return String(e).toLowerCase()+"."+t.split(/\s/).join(".")}function g(e,t,n){if("I"===e.target.tagName){let o=e.target,r=document.getElementById(n),i=document.getElementById("TA"+n.substring(2)),a=p.toolKey(o.className);o.classList.contains("active")?(o.classList.remove("active"),t.remove(i,a)):"Caret"===i.selection.type?(o.classList.toggle("active"),t.setStyle(i,function(e){let t=e.queryAll("i"),n={};return Array.from(t).forEach(e=>{n[p.toolKey(e.className)]=e.classList.contains("active")}),n}(r))):"Range"===i.selection.type&&t.run(i,a)}}function v(e,t,n,o){!function(e){let t=e.queryAll(".active");Array.from(t).forEach(e=>{e.classList.remove("active")})}(o);let r=document.getSelection();if(!r.anchorNode)return void console.log("no anchor",r.type);for(let e of["anchorNode","focusNode","anchorOffset","focusOffset","isCollapsed","rangeCount","type"])n.selection[e]=r[e];let i=r.anchorNode.parentNode;if(!i.classList.contains("td-edit-textarea")){let e=t.mapToFA(i.tagName),n=o.querySelector(e);n&&n.classList.add("active")}}var w={version:"0.3.0",init:function(e){e=e||h,p.create(e);let t=r.queryAll(".td-rich-editor");Array.from(t).forEach(t=>{let n=1e18*Math.random();r(t),t.id="ED"+n;var o=t.query(".td-edit-toolbar");o||(o=r("div.td-edit-toolbar"),t.ins(o),e.tools.forEach(e=>{p.check(e);o.ins([m("i",e.classes),{title:e.title}])})),o.id="TB"+n,o.evt("click",g,p,o.id);var i=t.query(".td-edit-textarea");i||(i=r("div.td-edit-textarea"),t.ins(i)),i.setAttribute("contenteditable",!0),i.id="TA"+n,i.toolbarId="TB"+n,i.selection={},i.evt("change",v,p,i,o),i.evt("keyup",e=>{i.dispatchEvent(y)}),i.evt("click",e=>{i.dispatchEvent(y)})})}};document.onreadystatechange=function(){"complete"===document.readyState&&w.init()}}]);