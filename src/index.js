"use strict";

const BASE_URL = "https://airbox-backend.herokuapp.com/";

window.onload = () => {
  initNav();
  initDiscoverMoreBtn();
  initFeaturedVideos();
  initProgrammas();
};

function initNav() {
  // This function handles the hiding of showing of pages for the navigation
  let navItems = document.querySelectorAll("#mainNav a");

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

function initDiscoverMoreBtn() {
  // This function initializes the scroll behavior of the discover more btn
  const b = document.getElementById("ontdekMeerBtn");
  b.addEventListener("click", function () {
    document.getElementById("featuredSection").scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "center",
    });
  });
}

function hideAllPages() {
  // This function hides all pages
  [...document.getElementsByClassName("pageContainer")].forEach((container) => {
    container.classList.remove("page-visible");
    container.classList.add("page-hidden");
  });
}

function showPage(navItem) {
  // This function shows a specific page, based on the clicked nav item
  document
    .getElementById(navItem.id.substring(3).toLowerCase() + "Container")
    .classList.add("page-visible");
}

async function initFeaturedVideos() {
  // This function gets all videos and featured URI's and calls the render video function for every video that is marked as featured
  let videos = await (await fetch(BASE_URL + "Videos")).json();
  let featuredVideos = await (await fetch(BASE_URL + "Featured")).json();
  let featuredVideoObjects = [];
  videos.forEach((video) => {
    if (isFeatured(video, featuredVideos)) {
      featuredVideoObjects.push(video);
    }
  });
  featuredVideoObjects.forEach((videoObject) => {
    renderVideo(videoObject, document.getElementById("featuredSection"));
  });
}

function isFeatured(video, featuredVideos) {
  // This function checks wether a video is featured
  for (let i = 0; i < featuredVideos.length; i++) {
    if (featuredVideos[i].link == video.link) {
      return true;
    }
  }
}

function renderVideo(videoObject, container) {
  // this function takes a video object and a container and creates an instance of a videojs element
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

async function initProgrammas() {
  // this function handles the initialisation of the programmas containers
  let container = document.getElementById("allProgrammasContainer");
  let programmas = await (await fetch(BASE_URL + "Programmas")).json();
  console.log(programmas);
  programmas.forEach((programma) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <div id="${programma._id}-programmaContainer" class="singleProgrammaContainer">
      </div>`
    );
    renderProgrammaVideos(programma);
  });
}

async function renderProgrammaVideos(programma) {
  // this function renders the videos for every programma
  [...programma.videos].forEach(async (uri) => {
    console.log(uri);
    let video = await (await fetch(BASE_URL + "videos/" + uri)).json();
    console.log(video);
    document
      .getElementById(`${programma._id}-programmaContainer`)
      .insertAdjacentHTML(
        "beforeend",
        `
    <h4>${video.name}</h4>
    <video id="programmas-video-${video.link.substring(
      18
    )}" class="video-js vjs-airbox vjs-big-play-centered vjs-fluid" controls preload="auto"
      poster="${video.pictures.sizes[6].link}" data-setup='{}'>
      <source
        src="${video.download[2].link}"
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
    var player = videojs(`programmas-video-${video.link.substring(18)}`);
  });
}
