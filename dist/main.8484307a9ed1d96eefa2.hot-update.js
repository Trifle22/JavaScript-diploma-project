/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplomaproject"]("main",{

/***/ "./src/modules/gallerySlider.js":
/*!**************************************!*\
  !*** ./src/modules/gallerySlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar gallerySlider = function gallerySlider() {\n  var slider = document.querySelector('.gallery-slider');\n  var slides = slider.querySelectorAll('.slide');\n  var dots = slider.querySelectorAll('.gallery-slider-dot');\n  var currentSlide = 0;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.closest('.slider-arrow, .gallery-slider-dot')) {\n      prevSlide(slides, currentSlide, 'active');\n      prevSlide(dots, currentSlide, 'slick-active');\n\n      if (target.matches('.slider-arrow-next')) {\n        currentSlide++;\n      } else if (target.matches('.slider-arrow-prev')) {\n        currentSlide--;\n      } else if (target.matches('.gallery-slider-dot')) {\n        dots.forEach(function (elem, index) {\n          if (elem === target) {\n            currentSlide = index;\n          }\n        });\n      }\n\n      if (currentSlide >= slides.length) {\n        currentSlide = 0;\n      } else if (currentSlide < 0) {\n        currentSlide = slides.length - 1;\n      } // nextSlide(slides, currentSlide, 'active');\n      // nextSlide(dots, currentSlide, 'slick-active');\n\n    } else {\n      return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySlider);\n\n//# sourceURL=webpack://diplomaproject/./src/modules/gallerySlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d792c796738760664da")
/******/ })();
/******/ 
/******/ }
);