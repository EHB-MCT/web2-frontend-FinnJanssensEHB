'use strict';

let navItems = document.querySelectorAll('#mainNav a');

[...navItems].forEach((navItem) => {
  navItem.addEventListener('click', function () {
    [...navItems].forEach((navItem) => {
      document.getElementById(navItem.id.substr(3).toLowerCase() + "Container").classList.remove('page-visible');
      document.getElementById(navItem.id.substr(3).toLowerCase() + "Container").classList.add('page-hidden');
    });
    document.getElementById(navItem.id.substr(3).toLowerCase() + "Container").classList.remove('page-hidden');
    document.getElementById(navItem.id.substr(3).toLowerCase() + "Container").classList.add('page-visible');
  })
});