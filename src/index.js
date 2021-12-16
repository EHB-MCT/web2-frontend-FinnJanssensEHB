"use strict";

let navItems = document.querySelectorAll("#mainNav a");

console.log(navItems);
[...navItems].forEach((navItem) => {
  navItem.addEventListener("click", function () {
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
