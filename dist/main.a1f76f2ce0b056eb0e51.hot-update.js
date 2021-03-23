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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgerMenu.js */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_clubsSelect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/clubsSelect.js */ \"./src/modules/clubsSelect.js\");\n/* harmony import */ var _modules_present_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/present.js */ \"./src/modules/present.js\");\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator.js */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_mainSlider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mainSlider.js */ \"./src/modules/mainSlider.js\");\n/* harmony import */ var _modules_gallerySlider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/gallerySlider.js */ \"./src/modules/gallerySlider.js\");\n\n\n\n\n\n\n\n\n(0,_modules_burgerMenu_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_clubsSelect_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_present_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_calculator_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_mainSlider_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_gallerySlider_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://diplomaproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/mainSlider.js":
/*!***********************************!*\
  !*** ./src/modules/mainSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainSlider = function mainSlider() {\n  if (document.querySelector('.main-slider') && document.querySelectorAll('.slide')) {\n    var slider = document.querySelector('.main-slider');\n    var slides = slider.querySelectorAll('.slide');\n    var interval;\n    var currentSlide = 0;\n\n    var prevSlide = function prevSlide(elem, index, strClass) {\n      elem[index].classList.remove(strClass);\n    };\n\n    var nextSlide = function nextSlide(elem, index, strClass) {\n      elem[index].classList.add(strClass);\n    };\n\n    var autoPlaySlider = function autoPlaySlider() {\n      prevSlide(slides, currentSlide, 'main-slider-slide-active');\n      currentSlide++;\n\n      if (currentSlide >= slides.length) {\n        currentSlide = 0;\n      }\n\n      nextSlide(slides, currentSlide, 'main-slider-slide-active');\n    };\n\n    var startSlider = function startSlider() {\n      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;\n      interval = setInterval(autoPlaySlider, time);\n    };\n\n    startSlider(1500);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSlider);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/mainSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("63da6b6aa2083a51d719")
/******/ })();
/******/ 
/******/ }
);