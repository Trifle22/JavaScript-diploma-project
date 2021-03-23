/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgerMenu.js */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_clubsSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clubsSelect.js */ \"./src/modules/clubsSelect.js\");\n/* harmony import */ var _modules_present_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/present.js */ \"./src/modules/present.js\");\n\n\n\n\n\n(0,_modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_clubsSelect_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_present_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://diplomaproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/present.js":
/*!********************************!*\
  !*** ./src/modules/present.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar present = function present() {\n  var presentGift = document.querySelector('.fixed-gift');\n  var popupGift = document.getElementById('gift');\n\n  var handlerGiftPopup = function handlerGiftPopup() {\n    popupGift.classList.toggle('active');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n    console.log(target);\n\n    if (target.closest('.fixed-gift')) {\n      target.style.display = 'none';\n      handlerGiftPopup(); // } else if (target.classList.contains('close_icon') || \n      // target.closest('.close-btn') || \n      // !target.closest('.form-content')) {\n      //   handlerGiftPopup();\n      // }\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (present);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/present.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("263f644ed0eb399dc484")
/******/ })();
/******/ 
/******/ }
);