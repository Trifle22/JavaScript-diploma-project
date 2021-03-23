/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var priceTotal = document.getElementById('price-total');\n  var calculatorForm = document.getElementById('card_order');\n  var checkboxMozaika = document.getElementById('card_leto_mozaika');\n  var checkboxShelkovo = document.getElementById('card_leto_schelkovo');\n  var timeChangeBlocks = document.querySelectorAll('.time>input');\n  var promoInput = document.querySelector('.promo-input');\n  var mozaikaPrices = {\n    '1': 1999,\n    \"6\": 9900,\n    \"9\": 13900,\n    \"12\": 19900\n  };\n  var shelkovoPrices = {\n    \"1\": 2999,\n    \"6\": 14990,\n    \"9\": 21990,\n    \"12\": 24990\n  };\n  calculatorForm.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.closest('.time') && checkboxMozaika.checked) {\n      priceTotal.textContent = mozaikaPrices[target.value];\n    } else if (target.closest('.time') && checkboxShelkovo.checked) {\n      priceTotal.textContent = shelkovoPrices[target.value];\n    } else if (target.closest('.club') && target.value === 'schelkovo') {\n      timeChangeBlocks.forEach(function (item) {\n        if (item.checked) {\n          priceTotal.textContent = shelkovoPrices[item.value];\n        }\n      });\n    } else if (target.closest('.club') && target.value === 'mozaika') {\n      timeChangeBlocks.forEach(function (item) {\n        if (item.checked) {\n          priceTotal.textContent = mozaikaPrices[item.value];\n        }\n      });\n    } else if (target.closest('.promo-input')) {\n      console.log(target.value);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/calculator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("99570f796f3a3592b10c")
/******/ })();
/******/ 
/******/ }
);