/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/modules/headerModals.js":
/*!*************************************!*\
  !*** ./src/modules/headerModals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar headerModals = function headerModals() {\n  var headMain = document.querySelector('.head-main');\n  var freeVisitModal = document.querySelector('#free_visit_form');\n  var callBackModal = document.querySelector('#callback_form');\n\n  var handlerModals = function handlerModals(modal) {\n    modal.classList.toggle('active');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('.open-popup')) {\n      handlerModals(freeVisitModal);\n    } else if ((target.matches('img.close_icon') || target.matches('.overlay')) && freeVisitModal.classList.contains('active')) {\n      handlerModals(freeVisitModal);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModals);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/headerModals.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe741b1d5111aada4bb6")
/******/ })();
/******/ 
/******/ }
);