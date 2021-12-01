/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\nlet navItems = document.querySelectorAll('#mainNav a');\r\n\r\n[...navItems].forEach((navItem) => {\r\n  navItem.addEventListener('click', function () {\r\n    [...navItems].forEach((navItem) => {\r\n      document.getElementById(navItem.id.substr(3).toLowerCase() + \"Container\").classList.remove('page-visible');\r\n      document.getElementById(navItem.id.substr(3).toLowerCase() + \"Container\").classList.add('page-hidden');\r\n    });\r\n    document.getElementById(navItem.id.substr(3).toLowerCase() + \"Container\").classList.remove('page-hidden');\r\n    document.getElementById(navItem.id.substr(3).toLowerCase() + \"Container\").classList.add('page-visible');\r\n  })\r\n});\n\n//# sourceURL=webpack://web2-frontend-FinnJanssensEHB/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;