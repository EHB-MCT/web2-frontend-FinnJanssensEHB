"use strict";

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
