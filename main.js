/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~analytics~main","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--4-2!../node_modules/postcss-loader/src??ref--4-3!../node_modules/sass-loader/dist/cjs.js??ref--4-4!./styles/styles.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.scss?../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--4-2!../node_modules/postcss-loader/src??ref--4-3!../node_modules/sass-loader/dist/cjs.js??ref--4-4");

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction start() {\n  return _start.apply(this, arguments);\n}\n\nfunction _start() {\n  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.resolve('async is working');\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _start.apply(this, arguments);\n}\n\nstart().then(console.log);\n\nvar Util = function Util() {\n  _classCallCheck(this, Util);\n};\n\n_defineProperty(Util, \"id\", Date.now());\n\nconsole.log('Util id', Util.id);\n\n//# sourceURL=webpack:///./babel.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./babel.js */ \"./babel.js\");\n/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // import './pages/policy.html'\n// const post = new Post('EXAM post title', WebpackIMG)\n\njquery__WEBPACK_IMPORTED_MODULE_0__('p').html(post.toString());\nconsole.log('Post to String:', post.toString());\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).on('scroll', window, function () {\n  if ($(window).scrollTop() < 400) {\n    $('.main-nav').hide();\n  } else {\n    $('.main-nav').slideDown(700);\n  }\n});\n$('.btn-cookies').on('click', function () {\n  $('.cookies').hide('cookies');\n}); // ------------ Медленные якоря-------------\n\n$(document).ready(function () {\n  $('#slowmenu').on('click', 'a', function (event) {\n    event.preventDefault();\n    var id = $(this).attr('href'),\n        top = $(id).offset().top;\n    $('body,html').animate({\n      scrollTop: top\n    }, 1500);\n  });\n});\n$(document).ready(function () {\n  $('#slowmenu2').on('click', 'a', function (event) {\n    event.preventDefault();\n    var id = $(this).attr('href'),\n        top = $(id).offset().top;\n    $('body,html').animate({\n      scrollTop: top\n    }, 1500);\n  });\n}); // $('#1 a').click(function (e) {\n//   e.preventDefault()\n//   $(this).tab('show')\n// })\n// $('#2 a').click(function (e) {\n//   e.preventDefault()\n//   $(this).tab('show')\n// })\n// $('#3 a').click(function (e) {\n//   e.preventDefault()\n//   $(this).tab('show')\n// })\n// $(document).ready(function () {\n//   $('#slowmenu3').on('click', 'a', function (event) {\n//     event.preventDefault()\n//     let id = $(this).attr('href'),\n//       top = $(id).offset().top\n//     $('body,html').animate({ scrollTop: top }, 1500)\n//   })\n// })\n\n$(document).ready(function () {\n  $('#anchor').on('click', 'a', function (event) {\n    event.preventDefault();\n    var id = $(this).attr('href'),\n        top = $(id).offset().top;\n    $('body,html').animate({\n      scrollTop: top\n    }, 1500);\n  });\n}); // ------------------- SLIDER --------------\n\n$(function () {\n  $('.main-slider-websites1').slick({\n    infinite: true,\n    slidesToShow: 1,\n    pauseOnHover: false,\n    speed: 1500,\n    autoplay: true,\n    autoplaySpeed: 1500,\n    cssEase: 'linear',\n    responsive: [{\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        dots: false\n      }\n    }],\n    arrows: true,\n    appendArrows: $('.your-class-arrow1'),\n    prevArrow: '<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> ',\n    nextArrow: '<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>'\n  }); //   $(\".main-slider\").appendDots();\n});\n$(function () {\n  $('.main-slider-websites2').slick({\n    infinite: true,\n    mobileFirst: true,\n    slidesToShow: 1,\n    pauseOnHover: false,\n    fade: true,\n    speed: 1000,\n    autoplay: true,\n    cssEase: 'linear',\n    responsive: [{\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 1,\n        dots: false\n      }\n    }],\n    arrows: true,\n    appendArrows: $('.your-class-arrow2'),\n    prevArrow: '<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> ',\n    nextArrow: '<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>'\n  }); //   $(\".main-slider\").appendDots();\n}); // ------------------- Отправка формы\n\n$(document).ready(function () {\n  $('#form').submit(function () {\n    $.ajax({\n      type: 'POST',\n      url: 'send.php',\n      data: $(this).serialize()\n    }).done(function () {\n      $('.js-overlay-thank-you').fadeIn();\n      $(this).find('input').val('');\n      $('#form').trigger('reset');\n    });\n    return false;\n  });\n}); /// -----------Закрыть попап «спасибо»\n\n$('.js-close-thank-you').click(function () {\n  // по клику на крестик\n  $('.js-overlay-thank-you').fadeOut();\n});\n$(document).mouseup(function (e) {\n  // по клику вне попапа\n  var popup = $('.popup');\n\n  if (e.target != popup[0] && popup.has(e.target).length === 0) {\n    $('.js-overlay-thank-you').fadeOut();\n  }\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/postcss-loader/src??ref--4-3!../../node_modules/sass-loader/dist/cjs.js??ref--4-4!./styles.scss */ \"../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });