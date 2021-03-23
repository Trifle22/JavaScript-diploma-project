/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/modules/clubsSelect.js":
/*!************************************!*\
  !*** ./src/modules/clubsSelect.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar clubsSelect = function clubsSelect() {\n  var clubsSelectElement = document.querySelector('.clubs-list');\n  var dropdownElement = document.querySelector('.dropdown-header');\n\n  var handlerDropdown = function handlerDropdown() {\n    dropdownElement.classList.toggle('club-list-active');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('.club-select p')) {\n      handlerDropdown();\n    } else if (target.closest('.dropdown-header') && dropdownElement.classList.contains('club-list-active')) {\n      dropdownElement.style.display = 'block';\n    } else if (!target.closest('.club-list-active') && dropdownElement.classList.contains('club-list-active')) {\n      handlerDropdown();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clubsSelect);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/clubsSelect.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("985a921a6c8a3e041473")
/******/ })();
/******/ 
/******/ }
);