/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burgerMenu = function burgerMenu() {\n  var burgerMenuBtn = document.querySelector('.menu-button');\n  var menu = document.querySelector('.popup-menu');\n  burgerMenuBtn.addEventListener('click', function (event) {\n    var target = event.target;\n    menu.style.cssText = \"display: flex; animation: fade 0.4s ease-in-out;\";\n    menu.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.closest('.close-menu-btn')) {\n        this.style.display = 'none';\n      } else if (target.matches('a')) {\n        this.style.display = 'none';\n      }\n    });\n  });\n  window.addEventListener('scroll', function (event) {\n    console.log(window.pageYOffset);\n\n    if (window.pageYOffset >= burgerMenuBtn.parentElement.parentElement.offsetTop) {\n      burgerMenuBtn.parentElement.parentElement.style.cssText = 'position: fixed; top: 0; left: 0; z-index: 1009;';\n    } else {\n      console.log(\"yifyugsuhugyig;ui\");\n      burgerMenuBtn.parentElement.parentElement.removeAttribute('style');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/burgerMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a24c7bf93b11246c2baf")
/******/ })();
/******/ 
/******/ }
);