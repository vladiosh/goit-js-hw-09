!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),a=null;t.addEventListener("click",(function(t){t.target.disabled=!0,e.removeAttribute("disabled"),a=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(e){e.target.disabled=!0,t.removeAttribute("disabled"),clearInterval(a)})),e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.2e85fe7e.js.map
