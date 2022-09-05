/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/client.js":
/*!**************************!*\
  !*** ./src/js/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/js/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrolling */ \"./src/js/scrolling.js\");\n/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scrolling__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ \"./src/js/skills.js\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skills__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://zaloha/./src/js/client.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("// document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\r\n//     anchor.addEventListener('click', function (e) {\r\n//         e.preventDefault();\r\n//         document.querySelector(this.getAttribute('href')).scrollIntoView({\r\n//             behavior: 'smooth'\r\n//         });\r\n//     });\r\n// });\r\n\r\nvar menuButton = document.getElementById(\"menuButton\");\r\nvar navigation = document.getElementsByClassName('navigation__link-list')[0];\r\nvar form = document.getElementById('form');\r\n\r\n\r\nfunction scrollToTargetAdjusted($target) {\r\n  var element = document.getElementById($target);\r\n  // hodnota offsetu, keby sa neskryl navbar, prekryl by zobrazený element (100)\r\n  var headerOffset = 0;\r\n  var elementPosition = element.getBoundingClientRect().top;\r\n  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;\r\n\r\n  window.scrollTo({\r\n      top: offsetPosition,\r\n      behavior: \"smooth\"\r\n  });\r\n\r\n  if (window.screen.width <= 720) {\r\n    navigation.style.width = \"0%\";\r\n    menuButton.className = \"navigation__openbtn\";\r\n  }\r\n}\r\n\r\nwindow.onload = function() {\r\n  document.getElementsByClassName('skills__block__box')[0].click();\r\n  setFunction();\r\n};\r\nwindow.onresize = function() {setFunction()};\r\nfunction setFunction() {\r\n  const element = document.getElementById(\"images\");\r\n  const cssObj = window.getComputedStyle(element, null);\r\n  const offset = (parseInt(cssObj.getPropertyValue(\"height\").replace(/px/,\"\"))+50)+\"px\";\r\n\r\n  document.getElementById('portfolio').style.marginTop = offset;\r\n}\r\n\r\n\r\nfunction changeNav() {\r\n  if (menuButton.className == \"navigation__openbtn\") {\r\n    menuButton.className = \"navigation__closebtn\";\r\n    navigation.style.width = \"70%\";\r\n  }\r\n  else {\r\n    menuButton.className = \"navigation__openbtn\";\r\n    navigation.style.width = \"0%\";\r\n  }\r\n}\r\n\r\n\r\nfunction searchBar() {\r\n  var input = document.getElementById(\"search\");\r\n  if (input.style.width > \"0px\") {\r\n    input.style.width = null;\r\n    input.style.paddingRight = \"0px\";\r\n    if (window.screen.width <= 475) menuButton.style.width = \"70px\";\r\n  }\r\n  else {\r\n    input.style.width = \"100%\";\r\n    input.style.paddingRight = \"40px\";\r\n    if (window.screen.width <= 475) menuButton.style.width = \"0%\";\r\n  }\r\n}\r\n\r\n\r\n\r\nwindow.onscroll = function() {scrollFunction(), navbarHide()};\r\nvar mybutton = document.getElementById(\"topButton\");\r\nvar prevScrollpos = window.pageYOffset;\r\nfunction scrollFunction() {\r\n    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\r\n      mybutton.style.display = \"flex\";\r\n    } else {\r\n      mybutton.style.display = \"none\";\r\n    }\r\n}\r\nfunction navbarHide() {\r\n  var currentScrollPos = window.pageYOffset;\r\n  if (prevScrollpos > currentScrollPos) {\r\n    document.getElementsByClassName(\"navigation\")[0].style.top = null;\r\n  } else {\r\n    document.getElementsByClassName(\"navigation\")[0].style.top = \"-140px\";\r\n    document.getElementById(\"search\").style.width = null;\r\n    document.getElementById(\"search\").style.paddingRight = \"0px\";\r\n  }\r\n  prevScrollpos = currentScrollPos;\r\n}\r\n\r\nfunction topFunction() {\r\n  document.documentElement.scrollTo({\r\n      top: 0,\r\n      behavior: 'smooth'\r\n  });\r\n}\r\nvar scroll = 700;\r\nfunction scrollToLeft() {\r\n  if (window.screen.width <= 1000) scroll = 400;\r\n  else scroll = 700;\r\n  document.getElementById('portfolio').scrollTo({\r\n    left: document.getElementById('portfolio').scrollLeft-scroll,\r\n    behavior: \"smooth\"\r\n  });\r\n}\r\nfunction scrollToRight() {\r\n  if (window.screen.width <= 1000) scroll = 400;\r\n  else scroll = 700;\r\n  document.getElementById('portfolio').scrollTo({\r\n    left: document.getElementById('portfolio').scrollLeft+scroll,\r\n    behavior: \"smooth\"\r\n  });\r\n}\r\n\r\nvar portfolio = document.getElementById('portfolio');\r\ndocument.getElementById('portfolio').onscroll = function(){\r\n  if (document.getElementById('portfolio').scrollLeft > 0) {\r\n      document.getElementById('scrollLeft').style.display = \"block\";\r\n  } else document.getElementById('scrollLeft').style.display = \"none\";\r\n\r\n  if (portfolio.offsetWidth + portfolio.scrollLeft >= portfolio.scrollWidth - 1) {\r\n    document.getElementById('scrollRight').style.display = \"none\";\r\n  } else document.getElementById('scrollRight').style.display = \"block\";\r\n}\r\n\r\n\r\nfunction toggleForm() {\r\n  if (form.className == \"input-form--active\") {\r\n    form.className = \"input-form\";\r\n  }\r\n  else form.className = \"input-form--active\";\r\n}\r\n\r\nwindow.onclick = function(event) {\r\n  if (event.target == form) {\r\n    toggleForm();\r\n    enableScroll();\r\n  }\r\n}\n\n//# sourceURL=webpack://zaloha/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scrolling.js":
/*!*****************************!*\
  !*** ./src/js/scrolling.js ***!
  \*****************************/
/***/ (() => {

eval("// left: 37, up: 38, right: 39, down: 40,\r\n// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36\r\nvar keys = {37: 1, 38: 1, 39: 1, 40: 1};\r\n\r\nfunction preventDefault(e) {\r\n  e.preventDefault();\r\n}\r\n\r\nfunction preventDefaultForScrollKeys(e) {\r\n  if (keys[e.keyCode]) {\r\n    preventDefault(e);\r\n    return false;\r\n  }\r\n}\r\n\r\n// modern Chrome requires { passive: false } when adding event\r\nvar supportsPassive = false;\r\ntry {\r\n  window.addEventListener(\"test\", null, Object.defineProperty({}, 'passive', {\r\n    get: function () { supportsPassive = true; } \r\n  }));\r\n} catch(e) {}\r\n\r\nvar wheelOpt = supportsPassive ? { passive: false } : false;\r\nvar wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';\r\n\r\n// call this to Disable\r\nfunction disableScroll() {\r\n  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF\r\n  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop\r\n  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile\r\n  window.addEventListener('keydown', preventDefaultForScrollKeys, false);\r\n}\r\n\r\n// call this to Enable\r\nfunction enableScroll() {\r\n  window.removeEventListener('DOMMouseScroll', preventDefault, false);\r\n  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); \r\n  window.removeEventListener('touchmove', preventDefault, wheelOpt);\r\n  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);\r\n}\n\n//# sourceURL=webpack://zaloha/./src/js/scrolling.js?");

/***/ }),

/***/ "./src/js/skills.js":
/*!**************************!*\
  !*** ./src/js/skills.js ***!
  \**************************/
/***/ (() => {

eval("function getSkillDescription(evt, id) {\r\n    var tablinks = document.getElementsByClassName(\"skills__block__box--active\");\r\n    var description = document.getElementsByClassName(\"skills__description\")[0];\r\n\r\n    for (i = 0; i < tablinks.length; i++) {\r\n        tablinks[i].className = \" skills__block__box\";\r\n    }\r\n    evt.currentTarget.className = \"skills__block__box--active\";\r\n\r\n    const xmlhttp = new XMLHttpRequest();\r\n\r\n    try {\r\n      xmlhttp.onload = function() {\r\n        description.innerHTML = this.responseText;\r\n      }\r\n  \r\n      xmlhttp.open(\"GET\", \"./shared/skillsData.php?q=\" + id);\r\n      xmlhttp.send();\r\n    } catch(error) {\r\n      console.error(error);\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://zaloha/./src/js/skills.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("var TIMEOUT = 6000;\r\n\r\n\r\nvar interval = setInterval(handleNext, TIMEOUT);\r\n\r\nfunction handleNext() {\r\n\r\n  var $radios = $('input[class*=\"slide-radio\"]');\r\n  var $activeRadio = $('input[class*=\"slide-radio\"]:checked');\r\n\r\n  var currentIndex = $activeRadio.index();\r\n  var radiosLength = $radios.length;\r\n\r\n  $radios\r\n    .attr('checked', false);\r\n\r\n\r\n  if (currentIndex >= radiosLength - 1) {\r\n\r\n    $radios\r\n      .first()\r\n      .attr('checked', true);\r\n\r\n  } else {\r\n\r\n    $activeRadio\r\n      .next('input[class*=\"slide-radio\"]')\r\n      .attr('checked', true);\r\n\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://zaloha/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/client.js");
/******/ 	
/******/ })()
;