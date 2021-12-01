'use strict';

let navItems = document.querySelectorAll('#mainNav a');

[...navItems].forEach((navItem) => {
  navItem.addEventListener('click', function () {
    [...navItems].forEach((navItem) => {
      document.getElementById(navItem.id.substr(3).toLowerCase() + "Container").style.display = "none";
    });
    document.getElementById(navItem.id.substr(3).toLowerCase() + "Container").style.display = "grid";
  })
});