function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(t,o){var n,r;(n=t,r=o,new Promise(((e,t)=>{const o=Math.random()>.3;setTimeout((()=>{o?e({position:n,delay:r}):t({position:n,delay:r})}),r)}))).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:5e3,backOverlay:!0})})).catch((({position:t,delay:o})=>{e(i).Notify.success(`❌ Rejected promise ${t} in ${o}ms`,{timeout:5e3,backOverlay:!0})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.currentTarget.elements;let r=Number(t.value);for(let e=1;e<=n.value;e+=1)1===e||(r+=Number(o.value)),l(e,r)}));
//# sourceMappingURL=03-promises.4cd0ae7e.js.map
