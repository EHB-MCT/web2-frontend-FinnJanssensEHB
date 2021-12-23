"use strict";
const BASE_URL = "https://airbox-backend.herokuapp.com/";

window.onload = () => {
  initNav();
  initFeaturedVideos();
};

function initNav() {
  let navItems = document.querySelectorAll("#mainNav a");

  console.log(navItems);
  [...navItems].forEach((navItem) => {
    navItem.addEventListener("click", function () {
      [...navItems].forEach((navItem) => navItem.classList.remove("activeNav"));
      document.getElementById("navContent").classList.remove("activeNav");
      if (navItem.id == "navProgrammas" || navItem.id == "navBTS") {
        document.getElementById("navContent").classList.add("activeNav");
      } else {
        navItem.classList.add("activeNav");
      }
      hideAllPages();
      showPage(navItem);
    });
  });
}

function hideAllPages() {
  [...document.getElementsByClassName("pageContainer")].forEach((container) => {
    container.classList.remove("page-visible");
    container.classList.add("page-hidden");
  });
}

function showPage(navItem) {
  console.log(navItem.id.substring(3).toLowerCase() + "Container");
  document
    .getElementById(navItem.id.substring(3).toLowerCase() + "Container")
    .classList.add("page-visible");
}

async function initFeaturedVideos() {
  let videos = await (await fetch(BASE_URL + "Videos")).json();
  let featuredVideos = await (await fetch(BASE_URL + "Featured")).json();
  console.log(videos);
  console.log(featuredVideos);
  let featuredVideoObjects = [];
  videos.forEach((video) => {
    if (isFeatured(video, featuredVideos)) {
      console.log(video);
      featuredVideoObjects.push(video);
    }
  });
  featuredVideoObjects.forEach((videoObject) => {
    renderVideo(videoObject, document.getElementById("featuredSection"));
  });
}

function isFeatured(video, featuredVideos) {
  for (let i = 0; i < featuredVideos.length; i++) {
    if (featuredVideos[i].link == video.link) {
      return true;
    }
  }
}
function renderVideo(videoObject, container) {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <h2>${videoObject.name}</h2>
    <video id="video-${videoObject.link.substring(
      18
    )}" class="video-js vjs-airbox vjs-big-play-centered vjs-fluid" controls preload="auto"
      poster="${videoObject.pictures.sizes[6].link}" data-setup='{}'>
      <source
        src="${videoObject.download[2].link}"
        type="video/mp4">
      </source>
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  `
  );
  var player = videojs(`video-${videoObject.link.substring(18)}`);
}
