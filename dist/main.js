!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){(()=>{const t=document.createElement("div");document.body.appendChild(t);const e=document.createElement("h3");e.id="navTitle",e.innerHTML="RESTAURANT";const n=document.createElement("nav"),r=["Contact","Menu","Home"],o=document.createElement("ul");o.id="navList",t.appendChild(n),n.appendChild(e),n.appendChild(o);for(let t=0;t<r.length;t++){let e=`<li class="nav-element" id="${r[t].toLowerCase()}-link">${r[t]}</li>`;o.innerHTML+=e}t.innerHTML+='<div id="home-container">\n\t\t\t\t\t\t\t\t\t\t<img src="https://stock.rtl.lu/rtl/800/rtl2008.lu/nt/p/2018/07/14/11/62cdc377b7c1e733b373d3ac719454eb.jpeg" id="img-home" alt="homeImg">\n\t\t\t\t\t\t\t\t\t\t<h2 id="home-heading">Enjoy Our Delicious Meals!</h2>\n\t\t\t\t\t\t\t\t\t</div>'})()}]);