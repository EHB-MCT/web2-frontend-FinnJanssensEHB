(()=>{"use strict";const e="https://airbox-backend.herokuapp.com/";window.onload=()=>{!function(){let e=document.querySelectorAll("#mainNav a");console.log(e),[...e].forEach((n=>{n.addEventListener("click",(function(){[...e].forEach((e=>e.classList.remove("activeNav"))),document.getElementById("navContent").classList.remove("activeNav"),"navProgrammas"==n.id||"navBTS"==n.id?document.getElementById("navContent").classList.add("activeNav"):n.classList.add("activeNav"),[...document.getElementsByClassName("pageContainer")].forEach((e=>{e.classList.remove("page-visible"),e.classList.add("page-hidden")})),function(e){console.log(e.id.substring(3).toLowerCase()+"Container"),document.getElementById(e.id.substring(3).toLowerCase()+"Container").classList.add("page-visible")}(n)}))}))}(),document.getElementById("ontdekMeerBtn").addEventListener("click",(function(){document.getElementById("featuredSection").scrollIntoView({block:"start",behavior:"smooth",inline:"center"})})),async function(){let n=await(await fetch(e+"Videos")).json(),t=await(await fetch(e+"Featured")).json();console.log(n),console.log(t);let o=[];n.forEach((e=>{(function(e,n){for(let t=0;t<n.length;t++)if(n[t].link==e.link)return!0})(e,t)&&(console.log(e),o.push(e))})),o.forEach((e=>{!function(e,n){document.getElementById("featuredSection").insertAdjacentHTML("beforeend",`\n    <h2>${e.name}</h2>\n    <video id="video-${e.link.substring(18)}" class="video-js vjs-airbox vjs-big-play-centered vjs-fluid" controls preload="auto"\n      poster="${e.pictures.sizes[6].link}" data-setup='{}'>\n      <source\n        src="${e.download[2].link}"\n        type="video/mp4">\n      </source>\n      <p class="vjs-no-js">\n        To view this video please enable JavaScript, and consider upgrading to a\n        web browser that\n        <a href="https://videojs.com/html5-video-support/" target="_blank">\n          supports HTML5 video\n        </a>\n      </p>\n    </video>\n  `),videojs(`video-${e.link.substring(18)}`)}(e)}))}()}})();