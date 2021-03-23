/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/modules/present.js":
/*!********************************!*\
  !*** ./src/modules/present.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar present = function present() {\n  var presentGift = document.querySelector('.fixed-gift');\n  var popupGift = document.getElementById('gift');\n\n  var handlerGiftPopup = function handlerGiftPopup() {\n    popupGift.classList.toggle('active');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.fixed-gift')) {\n      handlerGiftPopup();\n    } else if (target.closest('.close_icon') || target.closest('.close-btn')) {\n      handlerGiftPopup();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (present);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/present.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8b3d7d3809849c1d4c9a")
/******/ })();
/******/ 
/******/ }
);