"use strict";var MIC_OFF="mic_off",MIC_ON="more_horiz",TWITTER_BASE="https://twitter.com/intent/tweet?text=Hello%20@rominamartinlib%20";window.addEventListener("load",function(){function t(e){e.target.classList.contains("people")?(s.classList.add("active"),i.classList.add("selected"),o.classList.add("main"),r.classList.remove("active"),a.classList.remove("selected"),o.classList.remove("msg")):(r.classList.add("active"),a.classList.add("selected"),o.classList.add("msg"),s.classList.remove("active"),i.classList.remove("selected"),o.classList.remove("main"))}function c(e){var t=document.querySelector("div.users .selected");t.classList.remove("selected"),t.querySelector(".mic").innerText=MIC_OFF;var c=e.target;c.classList.add("selected"),c.querySelector(".mic").innerText=MIC_ON,function(e){document.querySelector(".main_container .active").classList.toggle("active"),document.querySelector(".main_container  .".concat(e)).classList.add("active")}(c.classList[1])}function n(e){if(("click"===e.type||13===e.which)&&0<d.value.length){var t=document.createElement("div");if(function(){var e=new Date;return null===m||60<(e-m)/1e3?(m=e,!0):(m=e,!1)}()){var c=document.createElement("p");c.innerHTML="<b>You</b> <span>".concat(m?"".concat(m.getHours(),":").concat(m.getMinutes()):"","</span>");var n=document.createElement("p");t.appendChild(c),n.innerText=d.value,t.appendChild(n)}else t.innerText=d.value;u.appendChild(t),d.value=""}}var e,s=document.querySelector("div.users"),i=document.querySelector("div.navbar .people"),a=document.querySelector("div.navbar .msg"),r=document.querySelector("div.msg_container"),o=document.querySelector(".bottom"),l=document.querySelector(".msg_container .send i"),d=document.querySelector(".msg_container .send input"),u=document.querySelector(".msg_container .messages"),m=null;document.getElementById("time").innerText=(e=new Date,"".concat(e.getHours(),":").concat(e.getMinutes())),function(){for(var e=0;e<s.children.length;e++)s.children[e].addEventListener("click",c);i.addEventListener("click",t),a.addEventListener("click",t),d.addEventListener("keypress",n),l.addEventListener("click",n)}()});