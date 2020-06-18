module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/CategoriesBlock.js":
/*!***************************************!*\
  !*** ./components/CategoriesBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/categoriesblock.module.css */ "./public/styles/modules/components/categoriesblock.module.css");
/* harmony import */ var _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/CategoriesBlock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CategoriesBlock() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${_public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.categories}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: `small-12 columns text-center ${_public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "Categories"), __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
    src: "/images/sep.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "We've looked at what you're reading and posting and created this list to make it easy to access content on the most popular topics. "))), __jsx("div", {
    className: `row small-up-1 medium-up-2 large-up-3`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: `column column-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    src: "/images/education-icon.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }, "Education"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Modernizing the way we present information and learn is happening from preschool to continuing professional development. Learn how virtual reality, artificial intelligence, and collaborative platforms are impacting education."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, "View All ", __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 87
    }
  }))))), __jsx("div", {
    className: `column column-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/security",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    src: "/images/security-icon.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/security",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }
  }, "Security"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Sometimes lost in the discussion of cybersecurity is the progress and innovation happening in physical security. From access control to facial recognition to predictive alerts, the options to secure physical locations are evolving daily."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/security",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 36
    }
  }, "View All ", __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 86
    }
  }))))), __jsx("div", {
    className: `column column-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/military",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    src: "/images/military-icon.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/military",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  }, "Military"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Sometimes lost in the discussion of cybersecurity is the progress and innovation happening in physical security. From access control to facial recognition to predictive alerts, the options to secure physical locations are evolving daily."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/military",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 36
    }
  }, "View All ", __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 86
    }
  }))))), __jsx("div", {
    className: `column column-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/it",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    src: "/images/it-icon.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/it",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }, "IT"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "The pace of technology change is not slowing down. Cloud, mobile, agile, as a service, and more are part of every agency\u2019s IT mix. Stay up-to-date on the latest products, processes, and tactics from technology vendors and practitioners."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/it",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 30
    }
  }, "View All ", __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 80
    }
  }))))), __jsx("div", {
    className: `column column-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/iot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    src: "/images/iot-icon.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/iot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 10
    }
  }, "Internet of Things"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, "The Internet of Things (IoT) is enabling smart cities that run more efficiently and powering better supply chain management across government. Learn how this technology is being integrated into state, local, and federal operations."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/iot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 31
    }
  }, "View All ", __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 81
    }
  }))))), __jsx("div", {
    className: `column column-block`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cybersecurity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,
    src: "/images/cybersecurity-icon.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cybersecurity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headingLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 10
    }
  }, "Cybersecurity"))), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "Security postures have changed from if we are attacked to when. This shift has brought a new generation of security tools and tactics that allow organizations to be more proactive and responsive to the constantly changing threat landscape."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cybersecurity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 41
    }
  }, "View All ", __jsx("img", {
    className: _public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 91
    }
  })))))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "small-12 columns text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/find",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 6
    }
  }, __jsx("a", {
    className: `button ${_public_styles_modules_components_categoriesblock_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "Search All"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoriesBlock);

/***/ }),

/***/ "./components/FeaturedEvents.js":
/*!**************************************!*\
  !*** ./components/FeaturedEvents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/featuredevents.module.css */ "./public/styles/modules/components/featuredevents.module.css");
/* harmony import */ var _public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/FeaturedEvents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function FeaturedEvents() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${_public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.featuredEvents}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: `small-12 columns text-center ${_public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "Featured Events"), __jsx("img", {
    className: _public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
    src: "/images/sep.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "Our sister site, GovEvents, is your one-stop-shop for all government-related conferences, expos, hiring events, webinars, and more. GovEvents is a great resource for planning your professional development and training. "))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: `${_public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `small-12 medium-6 columns ${_public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Experience every moment."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Find conferences, expos, hiring events, luncheons, webinars and more all in one place. GovEvents is a great resource for planning professional development and training as well as mapping out event-based marketing plans."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/find",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, "All Events ", __jsx("img", {
    className: _public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 59
    }
  })))), __jsx("div", {
    className: `small-12 medium-6 columns text-right ${_public_styles_modules_components_featuredevents_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, __jsx("broadstreet-zone", {
    "zone-id": "80369",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (FeaturedEvents);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles/modules/footer.module.css */ "./public/styles/modules/footer.module.css");
/* harmony import */ var _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  _renderFooterClass() {
    if (this.props.fixed) {
      return `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer} ${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fixed}`;
    } else {
      return `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer}`;
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
      className: this._renderFooterClass(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "small-12 large-8 columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 8
      }
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
      src: "/images/logo-white-text.svg",
      alt: "GovWhitePapers Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }))), __jsx("div", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navigationWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx("nav", {
      id: "footer-navigation",
      className: `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainNavigation} clearfix`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx("ul", {
      id: "footer-menu",
      className: `menu ${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu} clearfix`,
      "aria-expanded": "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 10
      }
    }, __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/find",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, "Find"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, "Post"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/promote",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, "Promote"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, "About"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/team",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, "Team"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, "Blog"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, "Contact")))))))), __jsx("div", {
      className: "small-12 large-4 columns text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }
    }, __jsx("ul", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.socialMenu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 8
      }
    }, __jsx("a", {
      target: "_blank",
      href: "https://www.facebook.com/GovWhitePapers/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fblogo,
      src: "/images/fb.svg",
      alt: "Facebook Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 10
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 8
      }
    }, __jsx("a", {
      target: "_blank",
      href: "https://www.linkedin.com/company/govwhitepapers/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linkedin,
      src: "/images/linkedin.svg",
      alt: "LinkedIn Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 10
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 8
      }
    }, __jsx("a", {
      target: "_blank",
      href: "https://twitter.com/GovWhitePapers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,
      src: "/images/twitter.svg",
      alt: "Twitter Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 10
      }
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MenuLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MenuLink */ "./components/MenuLink.js");
/* harmony import */ var _components_ProfileMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProfileMenuLink */ "./components/ProfileMenuLink.js");
/* harmony import */ var _components_LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginModal */ "./components/LoginModal.js");
/* harmony import */ var _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/modules/header.module.css */ "./public/styles/modules/header.module.css");
/* harmony import */ var _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_wordpress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/wordpress */ "./services/wordpress.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_toggleMenu", () => {
      this.setState(state => ({
        mobile_menu_open: !state.mobile_menu_open
      }));
    });

    _defineProperty(this, "_toggleUserProfileMenu", () => {
      this.setState(state => ({
        user_profile_menu_open: !state.user_profile_menu_open
      }));
    });

    _defineProperty(this, "_toggleLogin", () => {
      this.setState(state => ({
        login_open: !state.login_open
      }));
    });

    _defineProperty(this, "_handleEscape", e => {
      if (e.which == 27) {
        this._toggleMenu();
      }
    });

    _defineProperty(this, "_handleClick", e => {// console.log('click');
      // this._toggleUserProfileMenu();
    });

    this.state = {
      mobile_menu_open: false,
      user_profile_menu_open: false,
      login_open: false //display_name: ''

    };
  } // static async getInitialProps(ctx) {
  // 	const wordpress = new WordpressService
  // 	const post = await wordpress.fetchPost(ctx.query.post);
  //
  // 	const user = wordpress.getUser();
  // 	return wordpress.pageProps('test', post)
  // }
  // async _fetchToken() {
  // 	const token = await window.localStorage.getItem('user');
  // 	return token;
  // }
  // async componentDidMount() {
  // 	const {access_token} = this.props;
  // 	const wordpress = new WordpressService
  // 	const user = await wordpress.getUser(access_token);
  // 	this.setState(state => ({
  // 		display_name: user.first_name + ' ' + user.last_name
  // 	}));
  // }


  _logOut() {
    event.preventDefault();
    setTimeout(function (e) {
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.remove('user');
      window.location.href = '/';
    }, 750);
  }

  _renderUserProfileMenu() {
    if (this.state.user_profile_menu_open == false) {
      return null;
    } else {
      return __jsx("ul", {
        id: "header-profile-menu",
        className: `vertical menu ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.profileMenu} clearfix`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }, __jsx("li", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }
      }, __jsx(_components_ProfileMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/profile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
        src: "/images/profile-menu-profile.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }
      }), __jsx("img", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.active}`,
        src: "/images/profile-menu-profile-active.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, "Dashboard")))), __jsx("li", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 6
        }
      }, __jsx(_components_ProfileMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/promote",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
        src: "/images/profile-menu-upgrade.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }), __jsx("img", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.active}`,
        src: "/images/profile-menu-upgrade-active.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, "Promote")))), __jsx("li", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }
      }, __jsx(_components_ProfileMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
        src: "/images/profile-menu-contact.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }
      }), __jsx("img", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.active}`,
        src: "/images/profile-menu-contact-active.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, "Contact")))), __jsx("li", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 6
        }
      }, __jsx(_components_ProfileMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        href: "/settings",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
        src: "/images/profile-menu-settings.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 8
        }
      }), __jsx("img", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.active}`,
        src: "/images/profile-menu-settings-active.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 8
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      }, "Settings")))), __jsx("li", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logout}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 6
        }
      }, __jsx("a", {
        onClick: this._logOut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 7
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
        src: "/images/log-out-profile-menu.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 8
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 8
        }
      }, "Log Out"))));
    }
  }

  componentDidUpdate() {// const {user_profile_menu_open} = this.state;
    // if( user_profile_menu_open == true) {
    // 	window.addEventListener('click', this._handleClick );
    // } else {
    // 	window.removeEventListener('click', this._handleClick );
    // }
  }

  _renderUserMenuIcon() {
    if (this.state.user_profile_menu_open == false) {
      return __jsx("img", {
        src: "/images/account-arrow.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }
      });
    } else {
      return __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.iconOpen,
        src: "/images/account-arrow.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }
      });
    }
  }

  _renderUserMenu() {
    const {
      user
    } = this.props;
    const display_name = this.props.display_name;

    if (user !== false && user !== undefined) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userMenu} clearfix`,
        "aria-expanded": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 5
        }
      }, __jsx("li", {
        className: `menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.search}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 6
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/find",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.search,
        src: "/images/search.svg",
        alt: "GovWhitePapers Search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      })))), __jsx("li", {
        className: `js-account-menu menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.account}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 6
        }
      }, __jsx("a", {
        onClick: this._toggleUserProfileMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 7
        }
      }, display_name, " ", this._renderUserMenuIcon()), this._renderUserProfileMenu())));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
        className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.userMenu} clearfix`,
        "aria-expanded": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 5
        }
      }, __jsx("li", {
        className: `menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.search}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 6
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/find",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 7
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 8
        }
      }, __jsx("img", {
        className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.search,
        src: "/images/search.svg",
        alt: "GovWhitePapers Search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }
      })))), __jsx("li", {
        className: `js-account-menu menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.login}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 6
        }
      }, __jsx("a", {
        onClick: this._toggleLogin,
        className: `js-login ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.login}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 7
        }
      }, "Login")), __jsx("li", {
        className: `menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.getStarted}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 6
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/register",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: `button ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 8
        }
      }, "Get started")))));
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "small-9 medium-10 large-8 columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 6
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 7
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 8
      }
    }, __jsx("img", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
      src: "/images/logo.svg",
      alt: "GovWhitePapers Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }))), __jsx("div", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.navigationWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 7
      }
    }, __jsx("nav", {
      id: "site-navigation",
      className: this.state.mobile_menu_open == true ? `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainNavigation} clearfix ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.toggled}` : `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainNavigation} clearfix`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 8
      }
    }, __jsx("button", {
      onClick: this._toggleMenu,
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuToggle,
      "aria-controls": "primary-menu",
      "aria-expanded": "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "screen-reader-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 10
      }
    }, "Toggle Mobile Menu"), __jsx("div", {
      id: "burger",
      className: this.state.mobile_menu_open == true ? `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.burger} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.open}` : `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.burger}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 10
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 11
      }
    }))), __jsx("div", {
      className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuPrimaryMenuContainer} clearfix`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }
    }, __jsx("ul", {
      id: "primary-menu",
      className: `menu ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu} clearfix`,
      "aria-expanded": "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 10
      }
    }, __jsx("li", {
      className: `menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeMenuLink}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 10
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 12
      }
    }, __jsx("img", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
      src: "/images/menu-home.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }
    }), "Home"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/find",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
      src: "/images/menu-find.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 14
      }
    }), "Find"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 11
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
      src: "/images/menu-post.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 14
      }
    }), "Post"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 11
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/promote",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.promote}`,
      src: "/images/menu-promote.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 14
      }
    }), "Promote"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 11
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
      src: "/images/menu-about.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 14
      }
    }), "About"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 11
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/team",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.team}`,
      src: "/images/menu-team.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 14
      }
    }), "Team"))), __jsx("li", {
      className: "menu-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 11
      }
    }, __jsx(_components_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 12
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.blog}`,
      src: "/images/menu-blog.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 14
      }
    }), "Blog"))), __jsx("li", {
      className: `menu-item ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventsMenuLink}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 11
      }
    }, __jsx("a", {
      target: "_blank",
      href: "https://govevents.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 12
      }
    }, __jsx("img", {
      className: _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuImage,
      src: "/images/menu-events.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 13
      }
    }), "Go to GovEvents"))), __jsx("div", {
      className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mobileUserMenuWrap} clearfix`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 10
      }
    }, this._renderUserMenu()))))), __jsx("div", {
      className: "small-3 medium-2 large-4 columns text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: `${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mainUserMenuWrap} clearfix`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 6
      }
    }, this._renderUserMenu()))), __jsx(_components_LoginModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      open: this.state.login_open,
      toggle: () => this._toggleLogin(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 5
      }
    })), __jsx("div", {
      id: "ie-killa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 4
      }
    }, __jsx("img", {
      src: "/images/logo.svg",
      alt: "GovWhitePapers Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 5
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 5
      }
    }, "Sorry, your browser is not compatible with this application. Please use the latest version of Google Chrome/Chromium, Mozilla Firefox or Safari.")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HomeSlides.js":
/*!**********************************!*\
  !*** ./components/HomeSlides.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/homeslides.module.css */ "./public/styles/modules/components/homeslides.module.css");
/* harmony import */ var _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/HomeSlides.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class HomeSlides extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_transitionSlide", type => {
      if (type == 'next') {
        if (this.state.active_slide == this.state.max_slides) {
          this.setState(state => ({
            active_slide: 0
          }));
        } else {
          this.setState(state => ({
            active_slide: state.active_slide + 1
          }));
        }
      } else {
        if (this.state.active_slide == 0) {
          this.setState(state => ({
            active_slide: state.max_slides
          }));
        } else {
          this.setState(state => ({
            active_slide: state.active_slide - 1
          }));
        }
      }
    });

    _defineProperty(this, "_handleKeyboardInput", e => {
      if (e.which == 37) {
        clearInterval(this.interval);

        this._transitionSlide('prev');
      }

      if (e.which == 39) {
        clearInterval(this.interval);

        this._transitionSlide('next');
      }
    });

    _defineProperty(this, "_renderSliderNav", () => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
        onClick: () => {
          clearInterval(this.interval);

          this._transitionSlide('prev');
        },
        className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.prev,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 4
        }
      }, __jsx("img", {
        className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
        src: "/images/slider-arrow-left.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }
      })), __jsx("span", {
        onClick: () => {
          clearInterval(this.interval);

          this._transitionSlide('next');
        },
        className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.next,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 4
        }
      }, __jsx("img", {
        className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
        src: "/images/slider-arrow-right.svg",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 5
        }
      })));
    });

    this.state = {
      value: 0,
      active_slide: 0,
      max_slides: this.props.slides.length - 1
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      value
    });
  }

  componentDidMount() {
    if (false) {}
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {// console.log('activeslide');
    // console.log(this.state.active_slide);
  }

  render() {
    let component = this;
    return __jsx("div", {
      className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bannerWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 4
      }
    }, this.props.slides.map(function (slide, index) {
      let bannerClass = '';

      if (index == component.state.active_slide) {
        if (slide.type == 'internal') {
          bannerClass = `${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.banner} ${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.show}`;
        } else {
          bannerClass = `${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.banner} ${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.show} ${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.external}`;
        }
      } else {
        if (slide.type == 'internal') {
          bannerClass = `${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.banner}`;
        } else {
          bannerClass = `${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.banner} ${_public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.external}`;
        }
      }

      if (slide.type == 'internal') {
        let img_url;

        if (slide.featured_media.hasOwnProperty('sizes')) {
          if (slide.featured_media.sizes.hasOwnProperty('hero')) {
            img_url = slide.featured_media.sizes.hero.file;
          } else {
            img_url = slide.featured_media.file;
          }
        } else {
          img_url = slide.featured_media.file;
        }

        let styleLogo = {
          backgroundImage: `url(${img_url})`
        };
        return __jsx("div", {
          key: index,
          className: bannerClass,
          key: index,
          style: styleLogo,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 8
          }
        }, __jsx("div", {
          className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bannerContent,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 9
          }
        }, __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 10
          }
        }, __jsx("div", {
          className: "small-12 columns",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }
        }, __jsx("h2", {
          className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bannerHeading,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 12
          }
        }, slide.headline), __jsx("div", {
          className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bannerDescription,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 12
          }
        }, slide.description), __jsx("div", {
          className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bannerCTA,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 12
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/find",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }
        }, __jsx("h5", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 14
          }
        }, __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }
        }, "Get Started ", __jsx("img", {
          className: _public_styles_modules_components_homeslides_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
          src: "/images/right-arrow-white.svg",
          alt: "",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 30
          }
        })))))))), component._renderSliderNav());
      } else {
        return __jsx("div", {
          className: bannerClass,
          key: index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 8
          }
        }, __jsx("broadstreet-zone", {
          "zone-id": slide.ad_zone,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 9
          }
        }), __jsx("broadstreet-zone", {
          "zone-id": slide.ad_zone,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 9
          }
        }), component._renderSliderNav());
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeSlides);

/***/ }),

/***/ "./components/LoginModal.js":
/*!**********************************!*\
  !*** ./components/LoginModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/loginmodal.module.css */ "./public/styles/modules/components/loginmodal.module.css");
/* harmony import */ var _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/LoginModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LoginModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_handleEscape", e => {
      if (e.which == 27) {
        this.props.toggle();
      }
    });

    _defineProperty(this, "_handleClick", e => {
      e.preventDefault();

      if (e.target.hasAttribute('data-close-modal')) {
        this.props.toggle();
      }
    });

    _defineProperty(this, "_forgotPassword", () => {
      this.props.toggle();
    });

    _defineProperty(this, "_processLogin", () => {
      let button, govButton, json, url, login, emailField, passField;
      emailField = document.querySelector('input[name="email"]');
      passField = document.querySelector('input[name="pass"]');

      if (!emailField.checkValidity()) {
        emailField.classList.add('invalid');
        return false;
      } else {
        emailField.classList.remove('invalid');
      }

      if (!passField.checkValidity()) {
        passField.classList.add('invalid');
        return false;
      } else {
        passField.classList.remove('invalid');
      }

      button = document.querySelector('.js-login');
      govButton = document.querySelector('.js-login-govevents');
      login = this;
      url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login';
      json = JSON.stringify({
        "email": this.state.email,
        "pass": this.state.pass
      });
      button.disabled = true;
      govButton.disabled = true;
      login.setState({
        working: true
      });
      fetch(url, {
        method: 'post',
        body: json,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setTimeout(function (e) {
          button.disabled = false;
          govButton.disabled = false;
          let flat = JSON.stringify(data);

          if (flat.includes('error')) {
            login.setState({
              error: data.message,
              working: false
            });
            return false;
          }

          js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', JSON.stringify(data));
          login.setState(() => ({
            error: '',
            working: false,
            email: '',
            pass: ''
          }), () => {
            login.props.toggle();
            window.location.reload();
          });
        }, 1000);
      });
    });

    _defineProperty(this, "_processGovEventsLogin", () => {
      let button, govButton, json, url, login, emailField, passField;
      emailField = document.querySelector('input[name="email"]');
      passField = document.querySelector('input[name="pass"]');

      if (!emailField.checkValidity()) {
        emailField.classList.add('invalid');
        return false;
      } else {
        emailField.classList.remove('invalid');
      }

      if (!passField.checkValidity()) {
        passField.classList.add('invalid');
        return false;
      } else {
        passField.classList.remove('invalid');
      }

      button = document.querySelector('.js-login');
      govButton = document.querySelector('.js-login-govevents');
      login = this;
      url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login';
      json = JSON.stringify({
        "email": this.state.email,
        "pass": this.state.pass
      });
      button.disabled = true;
      govButton.disabled = true;
      login.setState({
        working: true
      });
      fetch(url, {
        method: 'post',
        body: json,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        setTimeout(function (e) {
          button.disabled = false;
          govButton.disabled = false;
          let flat = JSON.stringify(data);

          if (flat.includes('error')) {
            login.setState({
              error: data.message,
              working: false
            });
            return false;
          }

          js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('user', JSON.stringify(data));
          login.setState(() => ({
            error: '',
            working: false,
            email: '',
            pass: ''
          }), () => {
            login.props.toggle();
            window.location.reload();
          });
        }, 1000);
      });
    });

    _defineProperty(this, "_renderModalClass", () => {
      const {
        open
      } = this.props;

      if (open) {
        return `${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrap} ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.open}`;
      } else {
        return `${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrap}`;
      }
    });

    this.state = {
      email: '',
      pass: '',
      error: '',
      working: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let name = event.target.getAttribute('name');
    this.setState({
      [name]: event.target.value
    });
  }

  componentDidUpdate() {
    const {
      open
    } = this.props;
    const {
      working
    } = this.state;
    let html = document.querySelector('html');

    if (open) {
      window.addEventListener('keydown', this._handleEscape);
      window.addEventListener('click', this._handleClick);
      html.classList.add('active-modal');
    } else {
      window.removeEventListener('keydown', this._handleEscape);
      window.removeEventListener('click', this._handleClick);
      html.classList.remove('active-modal');
    }

    if (working) {
      html.classList.add('working');
    } else {
      html.classList.remove('working');
    }
  }

  render() {
    const {
      email,
      pass,
      error
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: this._renderModalClass(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: `row ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "small-6 columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 6
      }
    }, __jsx("img", {
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
      src: "/images/logo.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "small-6 columns text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 6
      }
    }, __jsx("button", {
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
      onClick: e => {
        this.props.toggle();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/images/close.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 8
      }
    })))), __jsx("div", {
      className: `${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 7
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 8
      }
    }, "Welcome"), __jsx("img", {
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
      src: "/images/sep.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 8
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 8
      }
    }, "Sign in to access GovWhitePapers."))), __jsx("div", {
      className: `${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "small-12 columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 8
      }
    }, __jsx("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 10
      }
    }, "Email Address", __jsx("input", {
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      placeholder: "Type your email",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 11
      }
    })), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 10
      }
    }, "Password", __jsx("input", {
      type: "password",
      name: "pass",
      onChange: this.handleChange,
      value: this.state.pass,
      placeholder: "Type your password",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 10
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 11
      }
    }, this.state.error)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/password-reset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 10
      }
    }, __jsx("a", {
      onClick: this._forgotPassword,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.forgot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 11
      }
    }, "Forgot password?")), __jsx("div", {
      className: `row ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.signin}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 11
      }
    }, __jsx("input", {
      onClick: this._processLogin,
      type: "submit",
      className: "js-login button",
      value: "Log In",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 12
      }
    }))), __jsx("div", {
      className: `row ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.signinGovEvents}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 11
      }
    }, __jsx("button", {
      onClick: this._processGovEventsLogin,
      type: "submit",
      className: "js-login-govevents button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 12
      }
    }, __jsx("img", {
      src: "/images/govevents-logo.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 110
      }
    }), " ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 158
      }
    }, "Log In with GovEvents")))))))), __jsx("div", {
      className: `row ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sep}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/images/continue-with.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 8
      }
    }))), __jsx("div", {
      className: `row ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.socialBlock}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 7
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 8
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }
    }, __jsx("a", {
      "data-close-modal": true,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.google,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 10
      }
    }, __jsx("img", {
      "data-close-modal": true,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
      src: "/images/login-google.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 11
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 9
      }
    }, __jsx("a", {
      "data-close-modal": true,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fb,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 10
      }
    }, __jsx("img", {
      "data-close-modal": true,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
      src: "/images/login-fb.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 11
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }
    }, __jsx("a", {
      "data-close-modal": true,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkedin,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 10
      }
    }, __jsx("img", {
      "data-close-modal": true,
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
      src: "/images/login-linkedin.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 11
      }
    })))))), __jsx("div", {
      className: `row ${_public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.signUp}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 8
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 9
      }
    }, __jsx("a", {
      "data-close-modal": true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 10
      }
    }, __jsx("span", {
      "data-close-modal": true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 11
      }
    }, "Don't have an account?"), " Sign Up ", __jsx("img", {
      className: _public_styles_modules_components_loginmodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
      "data-close-modal": true,
      src: "/images/right-arrow-blue.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 72
      }
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./components/MenuLink.js":
/*!********************************!*\
  !*** ./components/MenuLink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/modules/header.module.css */ "./public/styles/modules/header.module.css");
/* harmony import */ var _public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/MenuLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  href,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  } else if (router.pathname == '/blog/[post]' && href == '/blog') {
    className = `${className} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  } else if (router.pathname == '/whitepapers/[whitepaper]' && href == '/find') {
    className = `${className} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  } else if (router.pathname == '/topic/[topic]' && href == '/find') {
    className = `${className} ${_public_styles_modules_header_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className
  }));
});

/***/ }),

/***/ "./components/ProfileMenuLink.js":
/*!***************************************!*\
  !*** ./components/ProfileMenuLink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/modules/components/profilesidebar.module.css */ "./public/styles/modules/components/profilesidebar.module.css");
/* harmony import */ var _public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/ProfileMenuLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  href,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} ${_public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className
  }));
});

/***/ }),

/***/ "./components/Subscribe.js":
/*!*********************************!*\
  !*** ./components/Subscribe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/subscribe.module.css */ "./public/styles/modules/components/subscribe.module.css");
/* harmony import */ var _public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/Subscribe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Subscribe extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_renderClass", () => {
      if (this.props.alt == 'true') {
        return `${_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe} ${_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.alt}`;
      } else {
        return `${_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe}`;
      }
    });
  }

  render() {
    return __jsx("div", {
      className: this._renderClass(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 6
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, "Subscribe"), __jsx("img", {
      className: _public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
      src: "/images/sep.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, "Sign up to receive the GovWhitePapers newsletter, featuring our freshest content relevant to discussions happening in the government community."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/newsletter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: `button ${_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 8
      }
    }, "Sign Up")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./components/What.js":
/*!****************************!*\
  !*** ./components/What.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/what.module.css */ "./public/styles/modules/components/what.module.css");
/* harmony import */ var _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/What.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function What() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${_public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.infoRow} ${_public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.about}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "row text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "small-12 columns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("h4", {
    className: _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "What can you do on GovWhitePapers?"), __jsx("img", {
    className: _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
    src: "/images/sep.svg",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "GovWhitePapers is the gathering place for government professionals and the companies that serve them to find content that helps to understand modern technologies, trends, and practices. We\u2019ve gathered thousands of white papers, eBooks, infographics, case studies, and data sheets on topics including:"), __jsx("div", {
    className: _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.catList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/artificial-intelligence",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 56
    }
  }, "Artificial Intelligence"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/blockchain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 43
    }
  }, "Blockchain"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/citizen-engagement",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 51
    }
  }, "Citizen Engagement"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cloud-computing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 48
    }
  }, "Cloud Computing"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cybersecurity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 46
    }
  }, "Cybersecurity"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/data-management",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 48
    }
  }, "Data Management"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/education",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 42
    }
  }, "Education"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/it",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 35
    }
  }, "IT"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/military",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }, "Military"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/public-safety",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 46
    }
  }, "Public Safety"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/ransomware",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 43
    }
  }, "Ransomware"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/security",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 41
    }
  }, "Security"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/find",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 31
    }
  }, "and so much more!")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (What);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_wordpress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wordpress */ "./services/wordpress.js");
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities */ "entities");
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_CategoriesBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CategoriesBlock */ "./components/CategoriesBlock.js");
/* harmony import */ var _components_FeaturedEvents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FeaturedEvents */ "./components/FeaturedEvents.js");
/* harmony import */ var _components_HomeSlides__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HomeSlides */ "./components/HomeSlides.js");
/* harmony import */ var _components_What__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/What */ "./components/What.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Subscribe */ "./components/Subscribe.js");
/* harmony import */ var _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/styles/modules/index.module.css */ "./public/styles/modules/index.module.css");
/* harmony import */ var _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (false) {}

    (function matchHeight() {
      setTimeout(function (e) {
        var getDivs = document.getElementsByClassName('match-height');
        var arrayLength = getDivs.length;
        var heights = [];

        for (var i = 0; i < arrayLength; i++) {
          heights.push(getDivs[i].offsetHeight);
        }

        function getHighest() {
          return Math.max(...heights);
        }

        var tallest = getHighest();

        for (var i = 0; i < getDivs.length; i++) {
          getDivs[i].style.minHeight = tallest + "px";
        }
      }, 750);
    })();
  }

  render() {
    const display_name = this.props.display_name;
    const {
      page
    } = this.props;
    const seo_title = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.seo_title);
    const open_graph_title = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.open_graph_title);
    const twitter_title = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.twitter_title);
    const seo_desc = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.seo_desc);
    const open_graph_desc = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.open_graph_desc);
    const twitter_desc = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.twitter_desc);
    const open_graph_image_url = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.open_graph_image_url);
    const twitter_image_url = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.twitter_image_url);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }
    }, __jsx("title", {
      key: "page-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }
    }, seo_title), __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 6
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 6
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 6
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/favicon-270x270.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 6
      }
    }), __jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:title",
      content: seo_title,
      key: "og-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "description",
      content: seo_desc,
      key: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:locale",
      content: "en_US",
      key: "og-locale",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:title",
      content: open_graph_title,
      key: "og-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:description",
      content: open_graph_desc,
      key: "og-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:url",
      content: page.permalink,
      key: "og-url",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "GovWhitePapers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:image",
      content: open_graph_image_url,
      key: "og-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: open_graph_image_url,
      key: "og-image-secure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image",
      key: "twitter-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:description",
      content: twitter_desc,
      key: "twitter-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:title",
      content: twitter_title,
      key: "twitter-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:site",
      content: "@GovEventsGroup",
      key: "twitter-site",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:image",
      content: twitter_image_url,
      key: "twitter-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:creator",
      content: "@GovEventsGroup",
      key: "twitter-creator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 6
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props.user, {
      display_name: display_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    })), __jsx(_components_HomeSlides__WEBPACK_IMPORTED_MODULE_10__["default"], {
      slides: this.props.slides,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }
    }), __jsx("div", {
      className: `row small-up-1 large-up-3 ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.actionRow}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: `column column-block ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.columnBlock} ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.find}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: `${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.actionBlock}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/images/home-find-icon.svg",
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blockIcon,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 8
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/find",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 8
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 10
      }
    }, "Find"))), __jsx("p", {
      className: "match-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 8
      }
    }, "Search thousands of white papers, case studies, eBooks & more to discover the best practices government and industry are sharing."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/find",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 8
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 10
      }
    }, "Find Content  ", __jsx("img", {
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.linkArrow,
      src: "/images/right-arrow-white.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 27
      }
    })))))), __jsx("div", {
      className: `column column-block ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.columnBlock} ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.post}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: `${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.actionBlock}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/images/home-post-icon.svg",
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blockIcon,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 8
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 10
      }
    }, "Post"))), __jsx("p", {
      className: "match-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 8
      }
    }, "Post your content to expand its reach to thousands of government professionals."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 8
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 10
      }
    }, "Post Content  ", __jsx("img", {
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.linkArrow,
      src: "/images/right-arrow-black.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    })))))), __jsx("div", {
      className: `column column-block ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.columnBlock} ${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.promote}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: `${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.actionBlock}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/images/home-promote-icon.svg",
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blockIcon,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 8
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/promote",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 8
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 10
      }
    }, "Promote"))), __jsx("p", {
      className: "match-height",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 8
      }
    }, "Learn how we can help promote your content across multiple digital channels"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/promote",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 8
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 10
      }
    }, "Promote Content ", __jsx("img", {
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.linkArrow,
      src: "/images/right-arrow-black.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    }))))))), __jsx(_components_What__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }
    }), __jsx("div", {
      className: `${_public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.featuredContent}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 7
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 8
      }
    }, "Featured Content"), __jsx("img", {
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hr,
      src: "/images/sep.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 8
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 8
      }
    }, "Take a look at our latest featured content to stay up to date on the most current trends, news and knowledge the government community has to offer."), __jsx("broadstreet-zone", {
      "zone-id": "80365",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 8
      }
    }), __jsx("p", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 8
      }
    }, "If you'd like to feature your content here, check out our promotional options. ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/find",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 114
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 133
      }
    }, "Promote ", __jsx("img", {
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.linkArrow,
      src: "/images/right-arrow-blue.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 144
      }
    })))))), __jsx("broadstreet-zone", {
      "zone-id": "80366",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 6
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 8
      }
    }, "Where Government Knowledge Gathers. Become a member for free and start browsing and posting content today! ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/find",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 142
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 161
      }
    }, "Get started ", __jsx("img", {
      className: _public_styles_modules_index_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.linkArrow,
      src: "/images/right-arrow-blue.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 176
      }
    }))))))), __jsx(_components_CategoriesBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 5
      }
    }), __jsx(_components_FeaturedEvents__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }
    }), __jsx(_components_Subscribe__WEBPACK_IMPORTED_MODULE_12__["default"], {
      alt: "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 5
      }
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 5
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);
async function getStaticProps(ctx) {
  const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const page = await wordpress.fetchPage('home');
  const slides = await wordpress.fetchSlides();
  return {
    props: {
      page,
      slides
    }
  };
}

/***/ }),

/***/ "./public/styles/modules/components/categoriesblock.module.css":
/*!*********************************************************************!*\
  !*** ./public/styles/modules/components/categoriesblock.module.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"categories": "categoriesblock_categories__2syJi",
	"block": "categoriesblock_block__2KbGr",
	"headingLink": "categoriesblock_headingLink__2GLNw",
	"all": "categoriesblock_all__2ueSz",
	"button": "categoriesblock_button__3J5Fb",
	"hr": "categoriesblock_hr__1VZyl",
	"heading": "categoriesblock_heading__2HAMq"
};


/***/ }),

/***/ "./public/styles/modules/components/featuredevents.module.css":
/*!********************************************************************!*\
  !*** ./public/styles/modules/components/featuredevents.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"featuredEvents": "featuredevents_featuredEvents__2OL0t",
	"all": "featuredevents_all__2dg8I",
	"hr": "featuredevents_hr__23U5e",
	"heading": "featuredevents_heading__3T9w5",
	"content": "featuredevents_content__2MUuf",
	"text": "featuredevents_text__42Flb",
	"image": "featuredevents_image__2CGXC"
};


/***/ }),

/***/ "./public/styles/modules/components/homeslides.module.css":
/*!****************************************************************!*\
  !*** ./public/styles/modules/components/homeslides.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bannerWrap": "homeslides_bannerWrap__2ANX_",
	"prev": "homeslides_prev__3Z6ne",
	"next": "homeslides_next__WJfu8",
	"bannerContent": "homeslides_bannerContent__13NYH",
	"banner": "homeslides_banner__16ZKx",
	"show": "homeslides_show__2lmjF",
	"bannerHeading": "homeslides_bannerHeading__2XslI",
	"bannerDescription": "homeslides_bannerDescription__2ySfL",
	"bannerCTA": "homeslides_bannerCTA__2mkqV",
	"linkArrow": "homeslides_linkArrow__lVmAk"
};


/***/ }),

/***/ "./public/styles/modules/components/loginmodal.module.css":
/*!****************************************************************!*\
  !*** ./public/styles/modules/components/loginmodal.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "loginmodal_wrap__33SjA",
	"open": "loginmodal_open__2IS4C",
	"header": "loginmodal_header__123C8",
	"close": "loginmodal_close__1yYo-",
	"hr": "loginmodal_hr__wGt4S",
	"login": "loginmodal_login__1Drfn",
	"flex": "loginmodal_flex__1LEa6",
	"button": "loginmodal_button__ZOAK4",
	"form": "loginmodal_form__3gSVL",
	"signin": "loginmodal_signin__1Jyv0",
	"signinGovEvents": "loginmodal_signinGovEvents__35D78",
	"forgot": "loginmodal_forgot__2bsu8",
	"sep": "loginmodal_sep__1hIY3",
	"socialBlock": "loginmodal_socialBlock__1Nn3f",
	"signUp": "loginmodal_signUp__1Nkxp",
	"error": "loginmodal_error__28Ubg"
};


/***/ }),

/***/ "./public/styles/modules/components/profilesidebar.module.css":
/*!********************************************************************!*\
  !*** ./public/styles/modules/components/profilesidebar.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "profilesidebar_wrap__1Oai4",
	"menu": "profilesidebar_menu__2ItZw",
	"menuImage": "profilesidebar_menuImage__1Id_Z",
	"active": "profilesidebar_active__2_t5l",
	"menuItem": "profilesidebar_menuItem__7LWpb",
	"logout": "profilesidebar_logout__1l-UM"
};


/***/ }),

/***/ "./public/styles/modules/components/subscribe.module.css":
/*!***************************************************************!*\
  !*** ./public/styles/modules/components/subscribe.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"subscribe": "subscribe_subscribe__3Z7AS",
	"alt": "subscribe_alt__1OFcL",
	"button": "subscribe_button__3HXgn",
	"hr": "subscribe_hr__QB1zt",
	"heading": "subscribe_heading__2IjcQ"
};


/***/ }),

/***/ "./public/styles/modules/components/what.module.css":
/*!**********************************************************!*\
  !*** ./public/styles/modules/components/what.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"infoRow": "what_infoRow__3SKyq",
	"about": "what_about__2F69z",
	"home": "what_home__1Nomb",
	"heading": "what_heading__2FfM-",
	"hr": "what_hr__3OlEi",
	"catList": "what_catList__urgLl"
};


/***/ }),

/***/ "./public/styles/modules/footer.module.css":
/*!*************************************************!*\
  !*** ./public/styles/modules/footer.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__1KoDW",
	"fixed": "footer_fixed__3-8VQ",
	"navigationWrap": "footer_navigationWrap__30pH7",
	"mainNavigation": "footer_mainNavigation__1gf-T",
	"menu": "footer_menu__ExjGI",
	"current_page_item": "footer_current_page_item__2ypxn",
	"current-menu-item": "footer_current-menu-item__TeTMg",
	"current_page_ancestor": "footer_current_page_ancestor__2M5vp",
	"current-menu-ancestor": "footer_current-menu-ancestor__3a3j3",
	"logo": "footer_logo__1VV6b",
	"socialMenu": "footer_socialMenu__3OXIp"
};


/***/ }),

/***/ "./public/styles/modules/header.module.css":
/*!*************************************************!*\
  !*** ./public/styles/modules/header.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navigationWrap": "header_navigationWrap__3W-tx",
	"mainNavigation": "header_mainNavigation__1mZvu",
	"menuPrimaryMenuContainer": "header_menuPrimaryMenuContainer__2Ethz",
	"focus": "header_focus__1JPvY",
	"menu": "header_menu__18IKw",
	"eventsMenuLink": "header_eventsMenuLink__1BkQ-",
	"homeMenuLink": "header_homeMenuLink__3PtGg",
	"menuImage": "header_menuImage__1yvNa",
	"promote": "header_promote__IctKI",
	"team": "header_team__1likC",
	"blog": "header_blog__1Klgw",
	"active": "header_active__dxtyn",
	"current_page_item": "header_current_page_item__18edO",
	"current-menu-item": "header_current-menu-item__21UmS",
	"current_page_ancestor": "header_current_page_ancestor__3QbdO",
	"current-menu-ancestor": "header_current-menu-ancestor__3XyAW",
	"mobileUserMenuWrap": "header_mobileUserMenuWrap__1CwPT",
	"userMenu": "header_userMenu__iy9Aw",
	"login": "header_login__103WU",
	"button": "header_button__3QcdT",
	"getStarted": "header_getStarted__15WnA",
	"mainUserMenuWrap": "header_mainUserMenuWrap__1nbrl",
	"iconOpen": "header_iconOpen__3mybx",
	"account": "header_account__3rhBI",
	"toggled": "header_toggled__1ANyR",
	"search": "header_search__2ulKS",
	"header_button": "header_header_button__1T0Ay",
	"menuToggle": "header_menuToggle__1pz3i",
	"burger": "header_burger__vIcBc",
	"open": "header_open__1ATjX",
	"header": "header_header__22WbX",
	"logo": "header_logo__2AmUG",
	"profileMenu": "header_profileMenu__199Zd",
	"js-account-menu": "header_js-account-menu__2TnNf",
	"menuItem": "header_menuItem__22eB1",
	"logout": "header_logout__uC4Hm"
};


/***/ }),

/***/ "./public/styles/modules/index.module.css":
/*!************************************************!*\
  !*** ./public/styles/modules/index.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"actionRow": "modules_actionRow__3h576",
	"columnBlock": "modules_columnBlock__3_bGP",
	"find": "modules_find__rFRq-",
	"actionBlock": "modules_actionBlock__1pows",
	"post": "modules_post__2Rp5b",
	"blockIcon": "modules_blockIcon__2rchN",
	"promote": "modules_promote__22qAa",
	"linkArrow": "modules_linkArrow__3znHa",
	"infoRow": "modules_infoRow__1TaFg",
	"about": "modules_about__AD3Lq",
	"home": "modules_home__2Sisy",
	"heading": "modules_heading__28e7x",
	"hr": "modules_hr__2mAWx",
	"catList": "modules_catList__1vSIk",
	"featuredContent": "modules_featuredContent__3c5wG",
	"button": "modules_button__2K8uS",
	"what": "modules_what__1DKwQ",
	"flex": "modules_flex__Qt0gR"
};


/***/ }),

/***/ "./services/wordpress.js":
/*!*******************************!*\
  !*** ./services/wordpress.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WordpressService; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const apiURL = 'https://gwpadmin.codewrangler.io/api/gwp/v1';
class WordpressService {
  async fetchWhitepapers(items, offset, topics = [], tags = [], format = '', agencies = [], search = '', start_date = '', end_date = '', sort_by = 'relevance', user_id = '', organization_id = '') {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/whitepapers/?items=${items}&offset=${offset}&topics=${topics}&tags=${tags}&format=${format}&agencies=${agencies}&s=${search}&start_date=${start_date}&end_date=${end_date}&sort_by=${sort_by}&user_id=${user_id}&organization_id=${organization_id}`);
    const whitepapers = await res.json();
    return whitepapers;
  }

  async fetchSavedSearch(id) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/saved-search/${id}`);
    const search = await res.json();
    return search;
  }

  async fetchSavedSearches(user_id, access_token) {
    const url = `${apiURL}/saved-searches/`;
    const json = JSON.stringify({
      "access_token": access_token,
      "user_id": user_id
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const saved_searches = await res.json();
    return saved_searches;
  }

  async fetchWhitepaper(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/whitepapers/${slug}`);
    const whitepaper = await res.json();
    return whitepaper;
  }

  async fetchPosts(items, offset, search = '') {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/posts/?items=${items}&offset=${offset}&s=${search}`);
    const posts = await res.json();
    return posts;
  }

  async fetchSlides() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/slides`);
    const slides = await res.json();
    return slides;
  }

  async fetchPost(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/posts/${slug}`);
    const post = await res.json();
    return post;
  }

  async fetchPage(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/pages/${slug}`);
    const page = await res.json();
    return page;
  }

  async fetchFormats() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/formats/`);
    const formats = await res.json();
    return formats;
  }

  async fetchTopics() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/topics/`);
    const topics = await res.json();
    return topics;
  }

  async fetchTopic(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/topic/${slug}`);
    const topic = await res.json();
    return topic;
  }

  async fetchTags() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/tags/`);
    const tags = await res.json();
    return tags;
  }

  async fetchStats() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/fetch-stats/`);
    const stats = await res.json();
    return stats;
  }

  async fetchTeam() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/team/`);
    const team = await res.json();
    return team;
  }

  async fetchAgencies(parent) {
    let res;

    if (parent == '') {
      res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/agencies/?orderby=name`);
    } else {
      res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/agencies/?parent=${parent}`);
    }

    const agencies = await res.json();
    return agencies;
  }

  async searchOrganizations(search, items = 10) {
    if (search == '') {
      return [];
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/organizations/?search=${search}&items=${items}`);
    const orgs = await res.json();
    return orgs;
  }

  async fetchOrganization(id) {
    if (id == '') {
      return false;
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/organizations/${id}`);
    const org = await res.json();
    return org;
  }

  async fetchFavorites(access_token, items, offset) {
    const url = `${apiURL}/favorites/`;
    const json = JSON.stringify({
      "access_token": access_token,
      "items": items,
      "offset": offset
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const whitepapers = await res.json();
    return whitepapers;
  }

  async fetchOrganizationMembers(access_token) {
    const url = `${apiURL}/organization-members/`;
    const json = JSON.stringify({
      "access_token": access_token
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const members = await res.json();
    return members;
  }

  async checkFavorite(id, token) {
    //	const res = await fetch(`${apiURL}/is-favorite/`)
    const url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/is-favorite';
    const json = JSON.stringify({
      "ID": id,
      "access_token": token
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const r = await res.json();
    return r;
  }

  async getUser(token) {
    if (!token) {
      return false;
    }

    const url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user';
    const json = JSON.stringify({
      "access_token": token
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const r = await res.json();
    return r;
  } // async fetchHomeSlides() {
  // 	const res = await fetch(`${apiURL}/home-slides?items=4`)
  // 	const slides = await res.json()
  //
  // 	return slides
  // }


}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/edward/Projects/gov/gwp-test/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "entities":
/*!***************************!*\
  !*** external "entities" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("entities");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhdGVnb3JpZXNCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlYXR1cmVkRXZlbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZVNsaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51TGluay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVNZW51TGluay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1doYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9jYXRlZ29yaWVzYmxvY2subW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9mZWF0dXJlZGV2ZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9jb21wb25lbnRzL2hvbWVzbGlkZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9sb2dpbm1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvZmlsZXNpZGViYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9zdWJzY3JpYmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy93aGF0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9oZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy93b3JkcHJlc3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZW50aXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJDYXRlZ29yaWVzQmxvY2siLCJjYXRlZ29yaWVzQmxvY2tTdHlsZXMiLCJjYXRlZ29yaWVzIiwiaGVhZGluZyIsImhyIiwiYmxvY2siLCJpY29uIiwiaGVhZGluZ0xpbmsiLCJhbGwiLCJsaW5rQXJyb3ciLCJidXR0b24iLCJGZWF0dXJlZEV2ZW50cyIsImZlYXR1cmVkRXZlbnRzU3R5bGVzIiwiZmVhdHVyZWRFdmVudHMiLCJjb250ZW50IiwidGV4dCIsImltYWdlIiwiRm9vdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiX3JlbmRlckZvb3RlckNsYXNzIiwiZml4ZWQiLCJmb290ZXJTdHlsZXMiLCJmb290ZXIiLCJyZW5kZXIiLCJsb2dvIiwibmF2aWdhdGlvbldyYXAiLCJtYWluTmF2aWdhdGlvbiIsIm1lbnUiLCJzb2NpYWxNZW51IiwiZmJsb2dvIiwibGlua2VkaW4iLCJ0d2l0dGVyIiwiSGVhZGVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vYmlsZV9tZW51X29wZW4iLCJ1c2VyX3Byb2ZpbGVfbWVudV9vcGVuIiwibG9naW5fb3BlbiIsImUiLCJ3aGljaCIsIl90b2dnbGVNZW51IiwiX2xvZ091dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiQ29va2llcyIsInJlbW92ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIl9yZW5kZXJVc2VyUHJvZmlsZU1lbnUiLCJoZWFkZXJTdHlsZXMiLCJwcm9maWxlTWVudSIsIm1lbnVJdGVtIiwibWVudUltYWdlIiwiYWN0aXZlIiwibG9nb3V0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiX3JlbmRlclVzZXJNZW51SWNvbiIsImljb25PcGVuIiwiX3JlbmRlclVzZXJNZW51IiwidXNlciIsImRpc3BsYXlfbmFtZSIsInVuZGVmaW5lZCIsInVzZXJNZW51Iiwic2VhcmNoIiwiYWNjb3VudCIsIl90b2dnbGVVc2VyUHJvZmlsZU1lbnUiLCJsb2dpbiIsIl90b2dnbGVMb2dpbiIsImdldFN0YXJ0ZWQiLCJoZWFkZXIiLCJ0b2dnbGVkIiwibWVudVRvZ2dsZSIsImJ1cmdlciIsIm9wZW4iLCJtZW51UHJpbWFyeU1lbnVDb250YWluZXIiLCJob21lTWVudUxpbmsiLCJwcm9tb3RlIiwidGVhbSIsImJsb2ciLCJldmVudHNNZW51TGluayIsIm1vYmlsZVVzZXJNZW51V3JhcCIsIm1haW5Vc2VyTWVudVdyYXAiLCJIb21lU2xpZGVzIiwidHlwZSIsImFjdGl2ZV9zbGlkZSIsIm1heF9zbGlkZXMiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJfdHJhbnNpdGlvblNsaWRlIiwiaG9tZVNsaWRlc1N0eWxlcyIsInByZXYiLCJuZXh0IiwidmFsdWUiLCJzbGlkZXMiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY29tcG9uZW50IiwiYmFubmVyV3JhcCIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJiYW5uZXJDbGFzcyIsImJhbm5lciIsInNob3ciLCJleHRlcm5hbCIsImltZ191cmwiLCJmZWF0dXJlZF9tZWRpYSIsImhhc093blByb3BlcnR5Iiwic2l6ZXMiLCJoZXJvIiwiZmlsZSIsInN0eWxlTG9nbyIsImJhY2tncm91bmRJbWFnZSIsImJhbm5lckNvbnRlbnQiLCJiYW5uZXJIZWFkaW5nIiwiaGVhZGxpbmUiLCJiYW5uZXJEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiYmFubmVyQ1RBIiwiX3JlbmRlclNsaWRlck5hdiIsImFkX3pvbmUiLCJMb2dpbk1vZGFsIiwidG9nZ2xlIiwidGFyZ2V0IiwiaGFzQXR0cmlidXRlIiwiZ292QnV0dG9uIiwianNvbiIsInVybCIsImVtYWlsRmllbGQiLCJwYXNzRmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja1ZhbGlkaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwicGFzcyIsImRpc2FibGVkIiwid29ya2luZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZmxhdCIsImluY2x1ZGVzIiwiZXJyb3IiLCJtZXNzYWdlIiwic2V0IiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsImxvZ2luTW9kYWxTdHlsZXMiLCJ3cmFwIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsImh0bWwiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUVzY2FwZSIsIl9oYW5kbGVDbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfcmVuZGVyTW9kYWxDbGFzcyIsImNsb3NlIiwiZm9ybSIsIl9mb3Jnb3RQYXNzd29yZCIsImZvcmdvdCIsInNpZ25pbiIsIl9wcm9jZXNzTG9naW4iLCJzaWduaW5Hb3ZFdmVudHMiLCJfcHJvY2Vzc0dvdkV2ZW50c0xvZ2luIiwic2VwIiwic29jaWFsQmxvY2siLCJnb29nbGUiLCJzb2NpYWwiLCJmYiIsInNpZ25VcCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NOYW1lIiwicGF0aG5hbWUiLCJjbG9uZUVsZW1lbnQiLCJwcm9maWxlU2lkZWJhclN0eWxlcyIsIlN1YnNjcmliZSIsImFsdCIsInN1YnNjcmliZVN0eWxlcyIsInN1YnNjcmliZSIsIl9yZW5kZXJDbGFzcyIsIldoYXQiLCJ3aGF0U3R5bGVzIiwiaW5mb1JvdyIsImFib3V0IiwiY2F0TGlzdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwiZXJyIiwiTGluayIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJyZXNvbHZlIiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93Iiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwicHJvY2VzcyIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkhvbWUiLCJtYXRjaEhlaWdodCIsImdldERpdnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYXJyYXlMZW5ndGgiLCJoZWlnaHRzIiwiaSIsIm9mZnNldEhlaWdodCIsImdldEhpZ2hlc3QiLCJNYXRoIiwibWF4IiwidGFsbGVzdCIsInN0eWxlIiwibWluSGVpZ2h0Iiwic2VvX3RpdGxlIiwiZGVjb2RlSFRNTCIsIm9wZW5fZ3JhcGhfdGl0bGUiLCJ0d2l0dGVyX3RpdGxlIiwic2VvX2Rlc2MiLCJvcGVuX2dyYXBoX2Rlc2MiLCJ0d2l0dGVyX2Rlc2MiLCJvcGVuX2dyYXBoX2ltYWdlX3VybCIsInR3aXR0ZXJfaW1hZ2VfdXJsIiwicGVybWFsaW5rIiwiaW5kZXhTdHlsZXMiLCJhY3Rpb25Sb3ciLCJjb2x1bW5CbG9jayIsImZpbmQiLCJhY3Rpb25CbG9jayIsImJsb2NrSWNvbiIsInBvc3QiLCJmZWF0dXJlZENvbnRlbnQiLCJnZXRTdGF0aWNQcm9wcyIsIndvcmRwcmVzcyIsIldvcmRwcmVzc1NlcnZpY2UiLCJmZXRjaFBhZ2UiLCJmZXRjaFNsaWRlcyIsImFwaVVSTCIsImZldGNoV2hpdGVwYXBlcnMiLCJpdGVtcyIsIm9mZnNldCIsInRvcGljcyIsInRhZ3MiLCJhZ2VuY2llcyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInNvcnRfYnkiLCJ1c2VyX2lkIiwib3JnYW5pemF0aW9uX2lkIiwid2hpdGVwYXBlcnMiLCJmZXRjaFNhdmVkU2VhcmNoIiwiaWQiLCJmZXRjaFNhdmVkU2VhcmNoZXMiLCJhY2Nlc3NfdG9rZW4iLCJzYXZlZF9zZWFyY2hlcyIsImZldGNoV2hpdGVwYXBlciIsInNsdWciLCJ3aGl0ZXBhcGVyIiwiZmV0Y2hQb3N0cyIsInBvc3RzIiwiZmV0Y2hQb3N0IiwiZmV0Y2hGb3JtYXRzIiwiZm9ybWF0cyIsImZldGNoVG9waWNzIiwiZmV0Y2hUb3BpYyIsInRvcGljIiwiZmV0Y2hUYWdzIiwiZmV0Y2hTdGF0cyIsInN0YXRzIiwiZmV0Y2hUZWFtIiwiZmV0Y2hBZ2VuY2llcyIsInBhcmVudCIsInNlYXJjaE9yZ2FuaXphdGlvbnMiLCJvcmdzIiwiZmV0Y2hPcmdhbml6YXRpb24iLCJvcmciLCJmZXRjaEZhdm9yaXRlcyIsImZldGNoT3JnYW5pemF0aW9uTWVtYmVycyIsIm1lbWJlcnMiLCJjaGVja0Zhdm9yaXRlIiwidG9rZW4iLCJyIiwiZ2V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtR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O0FBQ1Isd0JBQWdCO0FBRFI7QUFIbUIsS0FBTixDQUF2QjtBQVFBLFVBQU13YixDQUFDLEdBQUcsTUFBTWpOLEdBQUcsQ0FBQ3pQLElBQUosRUFBaEI7QUFFQSxXQUFPMGMsQ0FBUDtBQUNBOztBQUVELFFBQU1DLE9BQU4sQ0FBY0YsS0FBZCxFQUFxQjtBQUVwQixRQUFJLENBQUNBLEtBQUwsRUFBYTtBQUNaLGFBQU8sS0FBUDtBQUNBOztBQUVELFVBQU14YyxHQUFHLEdBQUcsa0RBQVo7QUFDQSxVQUFNRCxJQUFJLEdBQUdTLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQzNCLHNCQUFnQitiO0FBRFcsS0FBZixDQUFiO0FBSUEsVUFBTWhOLEdBQUcsR0FBRyxNQUFNMU8seURBQUssQ0FBQ2QsR0FBRCxFQUFNO0FBQzVCZSxZQUFNLEVBQUUsTUFEb0I7QUFFNUJDLFVBQUksRUFBRWpCLElBRnNCO0FBRzVCa0IsYUFBTyxFQUFFO0FBQ1Isd0JBQWdCO0FBRFI7QUFIbUIsS0FBTixDQUF2QjtBQVFBLFVBQU13YixDQUFDLEdBQUcsTUFBTWpOLEdBQUcsQ0FBQ3pQLElBQUosRUFBaEI7QUFFQSxXQUFPMGMsQ0FBUDtBQUNBLEdBalBvQyxDQW1QckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF4UHFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnRDLHFDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgY2F0ZWdvcmllc0Jsb2NrU3R5bGVzIGZyb20gJy4uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9jb21wb25lbnRzL2NhdGVnb3JpZXNibG9jay5tb2R1bGUuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIENhdGVnb3JpZXNCbG9jaygpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuY2F0ZWdvcmllc31gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgc21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlciAke2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5oZWFkaW5nfWB9PlxuXHRcdFx0XHRcdDxoMj5DYXRlZ29yaWVzPC9oMj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmhyfSBzcmM9XCIvaW1hZ2VzL3NlcC5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdDxwPldlJ3ZlIGxvb2tlZCBhdCB3aGF0IHlvdSdyZSByZWFkaW5nIGFuZCBwb3N0aW5nIGFuZCBjcmVhdGVkIHRoaXMgbGlzdCB0byBtYWtlIGl0IGVhc3kgdG8gYWNjZXNzIGNvbnRlbnQgb24gdGhlIG1vc3QgcG9wdWxhciB0b3BpY3MuIDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgc21hbGwtdXAtMSBtZWRpdW0tdXAtMiBsYXJnZS11cC0zYH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sdW1uIGNvbHVtbi1ibG9ja2B9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuYmxvY2t9PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9lZHVjYXRpb25cIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5pY29ufSBzcmM9XCIvaW1hZ2VzL2VkdWNhdGlvbi1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3RvcGljL2VkdWNhdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmhlYWRpbmdMaW5rfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5FZHVjYXRpb248L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PHA+TW9kZXJuaXppbmcgdGhlIHdheSB3ZSBwcmVzZW50IGluZm9ybWF0aW9uIGFuZCBsZWFybiBpcyBoYXBwZW5pbmcgZnJvbSBwcmVzY2hvb2wgdG8gY29udGludWluZyBwcm9mZXNzaW9uYWwgZGV2ZWxvcG1lbnQuIExlYXJuIGhvdyB2aXJ0dWFsIHJlYWxpdHksIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlLCBhbmQgY29sbGFib3JhdGl2ZSBwbGF0Zm9ybXMgYXJlIGltcGFjdGluZyBlZHVjYXRpb24uPC9wPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9lZHVjYXRpb25cIj48YSBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5hbGx9PlZpZXcgQWxsIDxpbWcgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMubGlua0Fycm93fSBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz48L2E+PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Bjb2x1bW4gY29sdW1uLWJsb2NrYH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5ibG9ja30+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3RvcGljL3NlY3VyaXR5XCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuaWNvbn0gc3JjPVwiL2ltYWdlcy9zZWN1cml0eS1pY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3RvcGljL3NlY3VyaXR5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuaGVhZGluZ0xpbmt9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlNlY3VyaXR5PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDxwPlNvbWV0aW1lcyBsb3N0IGluIHRoZSBkaXNjdXNzaW9uIG9mIGN5YmVyc2VjdXJpdHkgaXMgdGhlIHByb2dyZXNzIGFuZCBpbm5vdmF0aW9uIGhhcHBlbmluZyBpbiBwaHlzaWNhbCBzZWN1cml0eS4gRnJvbSBhY2Nlc3MgY29udHJvbCB0byBmYWNpYWwgcmVjb2duaXRpb24gdG8gcHJlZGljdGl2ZSBhbGVydHMsIHRoZSBvcHRpb25zIHRvIHNlY3VyZSBwaHlzaWNhbCBsb2NhdGlvbnMgYXJlIGV2b2x2aW5nIGRhaWx5LjwvcD5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdG9waWMvc2VjdXJpdHlcIj48YSBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5hbGx9PlZpZXcgQWxsIDxpbWcgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMubGlua0Fycm93fSBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz48L2E+PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiBjb2x1bW4tYmxvY2tgfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmJsb2NrfT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdG9waWMvbWlsaXRhcnlcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5pY29ufSBzcmM9XCIvaW1hZ2VzL21pbGl0YXJ5LWljb24uc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdG9waWMvbWlsaXRhcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5oZWFkaW5nTGlua30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+TWlsaXRhcnk8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PHA+U29tZXRpbWVzIGxvc3QgaW4gdGhlIGRpc2N1c3Npb24gb2YgY3liZXJzZWN1cml0eSBpcyB0aGUgcHJvZ3Jlc3MgYW5kIGlubm92YXRpb24gaGFwcGVuaW5nIGluIHBoeXNpY2FsIHNlY3VyaXR5LiBGcm9tIGFjY2VzcyBjb250cm9sIHRvIGZhY2lhbCByZWNvZ25pdGlvbiB0byBwcmVkaWN0aXZlIGFsZXJ0cywgdGhlIG9wdGlvbnMgdG8gc2VjdXJlIHBoeXNpY2FsIGxvY2F0aW9ucyBhcmUgZXZvbHZpbmcgZGFpbHkuPC9wPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9taWxpdGFyeVwiPjxhIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmFsbH0+VmlldyBBbGwgPGltZyBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5saW5rQXJyb3d9IHNyYz1cIi9pbWFnZXMvcmlnaHQtYXJyb3ctYmx1ZS5zdmdcIiBhbHQ9XCJcIiAvPjwvYT48L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sdW1uIGNvbHVtbi1ibG9ja2B9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuYmxvY2t9PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9pdFwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmljb259IHNyYz1cIi9pbWFnZXMvaXQtaWNvbi5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmhlYWRpbmdMaW5rfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMz5JVDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8cD5UaGUgcGFjZSBvZiB0ZWNobm9sb2d5IGNoYW5nZSBpcyBub3Qgc2xvd2luZyBkb3duLiBDbG91ZCwgbW9iaWxlLCBhZ2lsZSwgYXMgYSBzZXJ2aWNlLCBhbmQgbW9yZSBhcmUgcGFydCBvZiBldmVyeSBhZ2VuY3nigJlzIElUIG1peC4gU3RheSB1cC10by1kYXRlIG9uIHRoZSBsYXRlc3QgcHJvZHVjdHMsIHByb2Nlc3NlcywgYW5kIHRhY3RpY3MgZnJvbSB0ZWNobm9sb2d5IHZlbmRvcnMgYW5kIHByYWN0aXRpb25lcnMuPC9wPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9pdFwiPjxhIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmFsbH0+VmlldyBBbGwgPGltZyBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5saW5rQXJyb3d9IHNyYz1cIi9pbWFnZXMvcmlnaHQtYXJyb3ctYmx1ZS5zdmdcIiBhbHQ9XCJcIiAvPjwvYT48L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiBjb2x1bW4tYmxvY2tgfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmJsb2NrfT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdG9waWMvaW90XCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuaWNvbn0gc3JjPVwiL2ltYWdlcy9pb3QtaWNvbi5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9pb3RcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5oZWFkaW5nTGlua30+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+SW50ZXJuZXQgb2YgVGhpbmdzPC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDxwPlRoZSBJbnRlcm5ldCBvZiBUaGluZ3MgKElvVCkgaXMgZW5hYmxpbmcgc21hcnQgY2l0aWVzIHRoYXQgcnVuIG1vcmUgZWZmaWNpZW50bHkgYW5kIHBvd2VyaW5nIGJldHRlciBzdXBwbHkgY2hhaW4gbWFuYWdlbWVudCBhY3Jvc3MgZ292ZXJubWVudC4gTGVhcm4gaG93IHRoaXMgdGVjaG5vbG9neSBpcyBiZWluZyBpbnRlZ3JhdGVkIGludG8gc3RhdGUsIGxvY2FsLCBhbmQgZmVkZXJhbCBvcGVyYXRpb25zLjwvcD5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvdG9waWMvaW90XCI+PGEgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuYWxsfT5WaWV3IEFsbCA8aW1nIGNsYXNzTmFtZT17Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy1ibHVlLnN2Z1wiIGFsdD1cIlwiIC8+PC9hPjwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Bjb2x1bW4gY29sdW1uLWJsb2NrYH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5ibG9ja30+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3RvcGljL2N5YmVyc2VjdXJpdHlcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5pY29ufSBzcmM9XCIvaW1hZ2VzL2N5YmVyc2VjdXJpdHktaWNvbi5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90b3BpYy9jeWJlcnNlY3VyaXR5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMuaGVhZGluZ0xpbmt9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPkN5YmVyc2VjdXJpdHk8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PHA+U2VjdXJpdHkgcG9zdHVyZXMgaGF2ZSBjaGFuZ2VkIGZyb20gaWYgd2UgYXJlIGF0dGFja2VkIHRvIHdoZW4uIFRoaXMgc2hpZnQgaGFzIGJyb3VnaHQgYSBuZXcgZ2VuZXJhdGlvbiBvZiBzZWN1cml0eSB0b29scyBhbmQgdGFjdGljcyB0aGF0IGFsbG93IG9yZ2FuaXphdGlvbnMgdG8gYmUgbW9yZSBwcm9hY3RpdmUgYW5kIHJlc3BvbnNpdmUgdG8gdGhlIGNvbnN0YW50bHkgY2hhbmdpbmcgdGhyZWF0IGxhbmRzY2FwZS48L3A+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3RvcGljL2N5YmVyc2VjdXJpdHlcIj48YSBjbGFzc05hbWU9e2NhdGVnb3JpZXNCbG9ja1N0eWxlcy5hbGx9PlZpZXcgQWxsIDxpbWcgY2xhc3NOYW1lPXtjYXRlZ29yaWVzQmxvY2tTdHlsZXMubGlua0Fycm93fSBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz48L2E+PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmluZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtgYnV0dG9uICR7Y2F0ZWdvcmllc0Jsb2NrU3R5bGVzLmJ1dHRvbn1gfT5TZWFyY2ggQWxsPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzQmxvY2s7XG4iLCJpbXBvcnQgZmVhdHVyZWRFdmVudHNTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvZmVhdHVyZWRldmVudHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBGZWF0dXJlZEV2ZW50cygpIHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtmZWF0dXJlZEV2ZW50c1N0eWxlcy5mZWF0dXJlZEV2ZW50c31gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgc21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlciAke2ZlYXR1cmVkRXZlbnRzU3R5bGVzLmhlYWRpbmd9YH0+XG5cdFx0XHRcdFx0PGgyPkZlYXR1cmVkIEV2ZW50czwvaDI+XG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2ZlYXR1cmVkRXZlbnRzU3R5bGVzLmhyfSBzcmM9XCIvaW1hZ2VzL3NlcC5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdDxwPk91ciBzaXN0ZXIgc2l0ZSwgR292RXZlbnRzLCBpcyB5b3VyIG9uZS1zdG9wLXNob3AgZm9yIGFsbCBnb3Zlcm5tZW50LXJlbGF0ZWQgY29uZmVyZW5jZXMsIGV4cG9zLCBoaXJpbmcgZXZlbnRzLCB3ZWJpbmFycywgYW5kIG1vcmUuIEdvdkV2ZW50cyBpcyBhIGdyZWF0IHJlc291cmNlIGZvciBwbGFubmluZyB5b3VyIHByb2Zlc3Npb25hbCBkZXZlbG9wbWVudCBhbmQgdHJhaW5pbmcuIDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtmZWF0dXJlZEV2ZW50c1N0eWxlcy5jb250ZW50fWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgc21hbGwtMTIgbWVkaXVtLTYgY29sdW1ucyAke2ZlYXR1cmVkRXZlbnRzU3R5bGVzLnRleHR9YH0+XG5cdFx0XHRcdFx0XHQ8aDQ+RXhwZXJpZW5jZSBldmVyeSBtb21lbnQuPC9oND5cblx0XHRcdFx0XHRcdDxwPkZpbmQgY29uZmVyZW5jZXMsIGV4cG9zLCBoaXJpbmcgZXZlbnRzLCBsdW5jaGVvbnMsIHdlYmluYXJzIGFuZCBtb3JlIGFsbCBpbiBvbmUgcGxhY2UuIEdvdkV2ZW50cyBpcyBhIGdyZWF0IHJlc291cmNlIGZvciBwbGFubmluZyBwcm9mZXNzaW9uYWwgZGV2ZWxvcG1lbnQgYW5kIHRyYWluaW5nIGFzIHdlbGwgYXMgbWFwcGluZyBvdXQgZXZlbnQtYmFzZWQgbWFya2V0aW5nIHBsYW5zLjwvcD5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmluZFwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2ZlYXR1cmVkRXZlbnRzU3R5bGVzLmFsbH0+QWxsIEV2ZW50cyA8aW1nIGNsYXNzTmFtZT17ZmVhdHVyZWRFdmVudHNTdHlsZXMubGlua0Fycm93fSBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz48L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BzbWFsbC0xMiBtZWRpdW0tNiBjb2x1bW5zIHRleHQtcmlnaHQgJHtmZWF0dXJlZEV2ZW50c1N0eWxlcy5pbWFnZX1gfT5cblx0XHRcdFx0XHRcdDxicm9hZHN0cmVldC16b25lIHpvbmUtaWQ9XCI4MDM2OVwiPjwvYnJvYWRzdHJlZXQtem9uZT5cblx0XHRcdFx0XHRcdHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvYWJvdXQtcGVudGFnb24uanBnXCIgYWx0PVwiXCIgLz4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkRXZlbnRzO1xuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmb290ZXJTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2Zvb3Rlci5tb2R1bGUuY3NzJztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdF9yZW5kZXJGb290ZXJDbGFzcygpIHtcblx0XHRpZiggdGhpcy5wcm9wcy5maXhlZCApIHtcblx0XHRcdHJldHVybiBgJHtmb290ZXJTdHlsZXMuZm9vdGVyfSAke2Zvb3RlclN0eWxlcy5maXhlZH1gXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBgJHtmb290ZXJTdHlsZXMuZm9vdGVyfWBcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PD5cblx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPXt0aGlzLl9yZW5kZXJGb290ZXJDbGFzcygpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGxhcmdlLTggY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Zvb3RlclN0eWxlcy5sb2dvfSBzcmM9XCIvaW1hZ2VzL2xvZ28td2hpdGUtdGV4dC5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBMb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Zvb3RlclN0eWxlcy5uYXZpZ2F0aW9uV3JhcH0+XG5cdFx0XHRcdFx0XHRcdDxuYXZcblx0XHRcdFx0XHRcdFx0XHRpZD1cImZvb3Rlci1uYXZpZ2F0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0YCR7Zm9vdGVyU3R5bGVzLm1haW5OYXZpZ2F0aW9ufSBjbGVhcmZpeGBcblx0XHRcdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBpZD1cImZvb3Rlci1tZW51XCIgY2xhc3NOYW1lPXtgbWVudSAke2Zvb3RlclN0eWxlcy5tZW51fSBjbGVhcmZpeGB9IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9maW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5GaW5kPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcG9zdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+UG9zdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb21vdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlByb21vdGU8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9hYm91dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+QWJvdXQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi90ZWFtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5UZWFtPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+QmxvZzwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkNvbnRhY3Q8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGxhcmdlLTQgY29sdW1ucyB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPXtmb290ZXJTdHlsZXMuc29jaWFsTWVudX0+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0dvdldoaXRlUGFwZXJzL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Zvb3RlclN0eWxlcy5mYmxvZ299IHNyYz1cIi9pbWFnZXMvZmIuc3ZnXCIgYWx0PVwiRmFjZWJvb2sgTG9nb1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2dvdndoaXRlcGFwZXJzL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Zvb3RlclN0eWxlcy5saW5rZWRpbn0gc3JjPVwiL2ltYWdlcy9saW5rZWRpbi5zdmdcIiBhbHQ9XCJMaW5rZWRJbiBMb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Hb3ZXaGl0ZVBhcGVyc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Zvb3RlclN0eWxlcy50d2l0dGVyfSBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIgYWx0PVwiVHdpdHRlciBMb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTWVudUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51TGluayc7XG5pbXBvcnQgUHJvZmlsZU1lbnVMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZU1lbnVMaW5rJztcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Nb2RhbCc7XG5pbXBvcnQgaGVhZGVyU3R5bGVzIGZyb20gJy4uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9oZWFkZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgV29yZHByZXNzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy93b3JkcHJlc3MnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vYmlsZV9tZW51X29wZW46IGZhbHNlLFxuXHRcdFx0dXNlcl9wcm9maWxlX21lbnVfb3BlbjogZmFsc2UsXG5cdFx0XHRsb2dpbl9vcGVuOiBmYWxzZSxcblx0XHRcdC8vZGlzcGxheV9uYW1lOiAnJ1xuXHRcdH07XG5cdH1cblxuXHQvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuXHQvLyBcdGNvbnN0IHdvcmRwcmVzcyA9IG5ldyBXb3JkcHJlc3NTZXJ2aWNlXG5cdC8vIFx0Y29uc3QgcG9zdCA9IGF3YWl0IHdvcmRwcmVzcy5mZXRjaFBvc3QoY3R4LnF1ZXJ5LnBvc3QpO1xuXHQvL1xuXHQvLyBcdGNvbnN0IHVzZXIgPSB3b3JkcHJlc3MuZ2V0VXNlcigpO1xuXHQvLyBcdHJldHVybiB3b3JkcHJlc3MucGFnZVByb3BzKCd0ZXN0JywgcG9zdClcblx0Ly8gfVxuXG5cdC8vIGFzeW5jIF9mZXRjaFRva2VuKCkge1xuXHQvLyBcdGNvbnN0IHRva2VuID0gYXdhaXQgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG5cdC8vIFx0cmV0dXJuIHRva2VuO1xuXHQvLyB9XG5cblx0Ly8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdC8vIFx0Y29uc3Qge2FjY2Vzc190b2tlbn0gPSB0aGlzLnByb3BzO1xuXHQvLyBcdGNvbnN0IHdvcmRwcmVzcyA9IG5ldyBXb3JkcHJlc3NTZXJ2aWNlXG5cdC8vIFx0Y29uc3QgdXNlciA9IGF3YWl0IHdvcmRwcmVzcy5nZXRVc2VyKGFjY2Vzc190b2tlbik7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuXHQvLyBcdFx0ZGlzcGxheV9uYW1lOiB1c2VyLmZpcnN0X25hbWUgKyAnICcgKyB1c2VyLmxhc3RfbmFtZVxuXHQvLyBcdH0pKTtcblx0Ly8gfVxuXG5cdF9sb2dPdXQoKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbihlKSB7XG5cdFx0XHRDb29raWVzLnJlbW92ZSgndXNlcicpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0fSwgNzUwICk7XG5cdH1cblxuXHRfdG9nZ2xlTWVudSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG5cdFx0XHRtb2JpbGVfbWVudV9vcGVuOiAhc3RhdGUubW9iaWxlX21lbnVfb3BlblxuXHRcdH0pKTtcblx0fTtcblxuXHRfdG9nZ2xlVXNlclByb2ZpbGVNZW51ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcblx0XHRcdHVzZXJfcHJvZmlsZV9tZW51X29wZW46ICFzdGF0ZS51c2VyX3Byb2ZpbGVfbWVudV9vcGVuXG5cdFx0fSkpO1xuXHR9O1xuXG5cdF90b2dnbGVMb2dpbiA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG5cdFx0XHRsb2dpbl9vcGVuOiAhc3RhdGUubG9naW5fb3BlblxuXHRcdH0pKTtcblx0fTtcblxuXHRfaGFuZGxlRXNjYXBlID0gKGUpID0+IHtcblx0XHRpZiAoZS53aGljaCA9PSAyNykge1xuXHRcdFx0dGhpcy5fdG9nZ2xlTWVudSgpO1xuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXJVc2VyUHJvZmlsZU1lbnUoKSB7XG5cdFx0aWYoIHRoaXMuc3RhdGUudXNlcl9wcm9maWxlX21lbnVfb3BlbiA9PSBmYWxzZSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDx1bCBpZD1cImhlYWRlci1wcm9maWxlLW1lbnVcIiBjbGFzc05hbWU9e2B2ZXJ0aWNhbCBtZW51ICR7aGVhZGVyU3R5bGVzLm1lbnV9ICR7aGVhZGVyU3R5bGVzLnByb2ZpbGVNZW51fSBjbGVhcmZpeGB9PlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SXRlbX0+XG5cdFx0XHRcdFx0XHQ8UHJvZmlsZU1lbnVMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtcHJvZmlsZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudUltYWdlfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YH0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtcHJvZmlsZS1hY3RpdmUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9wcm9tb3RlXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS11cGdyYWRlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS11cGdyYWRlLWFjdGl2ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlByb21vdGU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9jb250YWN0XCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1jb250YWN0LnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1jb250YWN0LWFjdGl2ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkNvbnRhY3Q8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1tZW51LXNldHRpbmdzLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudUltYWdlfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YH0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtc2V0dGluZ3MtYWN0aXZlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+U2V0dGluZ3M8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJdGVtfSAke2hlYWRlclN0eWxlcy5sb2dvdXR9YH0+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9sb2dPdXR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbG9nLW91dC1wcm9maWxlLW1lbnUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+TG9nIE91dDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHQvLyBjb25zdCB7dXNlcl9wcm9maWxlX21lbnVfb3Blbn0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vIGlmKCB1c2VyX3Byb2ZpbGVfbWVudV9vcGVuID09IHRydWUpIHtcblx0XHQvLyBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0Ly8gfVxuXHR9XG5cblx0X2hhbmRsZUNsaWNrID0gKGUpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnY2xpY2snKTtcblx0XHQvLyB0aGlzLl90b2dnbGVVc2VyUHJvZmlsZU1lbnUoKTtcblx0fVxuXG5cdF9yZW5kZXJVc2VyTWVudUljb24oKSB7XG5cdFx0aWYoIHRoaXMuc3RhdGUudXNlcl9wcm9maWxlX21lbnVfb3BlbiA9PSBmYWxzZSApIHtcblx0XHRcdHJldHVybiA8aW1nIHNyYz1cIi9pbWFnZXMvYWNjb3VudC1hcnJvdy5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gPGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5pY29uT3Blbn0gc3JjPVwiL2ltYWdlcy9hY2NvdW50LWFycm93LnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlclVzZXJNZW51KCkge1xuXHRcdGNvbnN0IHt1c2VyfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZGlzcGxheV9uYW1lID0gdGhpcy5wcm9wcy5kaXNwbGF5X25hbWU7XG5cdFx0aWYoIHVzZXIgIT09IGZhbHNlICYmIHVzZXIgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PD5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLnVzZXJNZW51fSBjbGVhcmZpeGB9IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuc2VhcmNofWB9PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9maW5kXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMuc2VhcmNofSBzcmM9XCIvaW1hZ2VzL3NlYXJjaC5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBTZWFyY2hcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtganMtYWNjb3VudC1tZW51IG1lbnUtaXRlbSAke2hlYWRlclN0eWxlcy5hY2NvdW50fWB9PlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5fdG9nZ2xlVXNlclByb2ZpbGVNZW51fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7ZGlzcGxheV9uYW1lfSB7dGhpcy5fcmVuZGVyVXNlck1lbnVJY29uKCl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR7dGhpcy5fcmVuZGVyVXNlclByb2ZpbGVNZW51KCl9XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDw+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy51c2VyTWVudX0gY2xlYXJmaXhgfSBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgbWVudS1pdGVtICR7aGVhZGVyU3R5bGVzLnNlYXJjaH1gfT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmluZFwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLnNlYXJjaH0gc3JjPVwiL2ltYWdlcy9zZWFyY2guc3ZnXCIgYWx0PVwiR292V2hpdGVQYXBlcnMgU2VhcmNoXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YGpzLWFjY291bnQtbWVudSBtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMubG9naW59YH0+XG5cdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLl90b2dnbGVMb2dpbn0gY2xhc3NOYW1lPXtganMtbG9naW4gJHtoZWFkZXJTdHlsZXMubG9naW59YH0+TG9naW48L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgbWVudS1pdGVtICR7aGVhZGVyU3R5bGVzLmdldFN0YXJ0ZWR9YH0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17YGJ1dHRvbiAke2hlYWRlclN0eWxlcy5idXR0b259YH0+R2V0IHN0YXJ0ZWQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8PlxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5oZWFkZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtOSBtZWRpdW0tMTAgbGFyZ2UtOCBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBMb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5uYXZpZ2F0aW9uV3JhcH0+XG5cdFx0XHRcdFx0XHRcdDxuYXZcblx0XHRcdFx0XHRcdFx0XHRpZD1cInNpdGUtbmF2aWdhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubW9iaWxlX21lbnVfb3BlbiA9PSB0cnVlID8gYCR7aGVhZGVyU3R5bGVzLm1haW5OYXZpZ2F0aW9ufSBjbGVhcmZpeCAke2hlYWRlclN0eWxlcy50b2dnbGVkfWAgOiBgJHtoZWFkZXJTdHlsZXMubWFpbk5hdmlnYXRpb259IGNsZWFyZml4YFxuXHRcdFx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl90b2dnbGVNZW51fSBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51VG9nZ2xlfSBhcmlhLWNvbnRyb2xzPVwicHJpbWFyeS1tZW51XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj5Ub2dnbGUgTW9iaWxlIE1lbnU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiYnVyZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm1vYmlsZV9tZW51X29wZW4gPT0gdHJ1ZSA/IGAke2hlYWRlclN0eWxlcy5idXJnZXJ9ICR7aGVhZGVyU3R5bGVzLm9wZW59YCA6IGAke2hlYWRlclN0eWxlcy5idXJnZXJ9YFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVQcmltYXJ5TWVudUNvbnRhaW5lcn0gY2xlYXJmaXhgfT5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBpZD1cInByaW1hcnktbWVudVwiIGNsYXNzTmFtZT17YG1lbnUgJHtoZWFkZXJTdHlsZXMubWVudX0gY2xlYXJmaXhgfSBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuaG9tZU1lbnVMaW5rfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL21lbnUtaG9tZS5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9maW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1maW5kLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZpbmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVMaW5rIGhyZWY9XCIvcG9zdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL21lbnUtcG9zdC5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQb3N0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL3Byb21vdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gJHtoZWFkZXJTdHlsZXMucHJvbW90ZX1gfSBzcmM9XCIvaW1hZ2VzL21lbnUtcHJvbW90ZS5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQcm9tb3RlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1hYm91dC5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBYm91dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi90ZWFtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLnRlYW19YH0gc3JjPVwiL2ltYWdlcy9tZW51LXRlYW0ucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGVhbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9ibG9nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmJsb2d9YH0gc3JjPVwiL2ltYWdlcy9tZW51LWJsb2cucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmxvZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuZXZlbnRzTWVudUxpbmt9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ292ZXZlbnRzLmNvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1ldmVudHMucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdvIHRvIEdvdkV2ZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1vYmlsZVVzZXJNZW51V3JhcH0gY2xlYXJmaXhgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuX3JlbmRlclVzZXJNZW51KCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBtZWRpdW0tMiBsYXJnZS00IGNvbHVtbnMgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWFpblVzZXJNZW51V3JhcH0gY2xlYXJmaXhgfT5cblx0XHRcdFx0XHRcdHt0aGlzLl9yZW5kZXJVc2VyTWVudSgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PExvZ2luTW9kYWxcblx0XHRcdFx0XHRvcGVuPXt0aGlzLnN0YXRlLmxvZ2luX29wZW59XG5cdFx0XHRcdFx0dG9nZ2xlPXsoKSA9PiB0aGlzLl90b2dnbGVMb2dpbigpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8ZGl2IGlkPVwiaWUta2lsbGFcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiR292V2hpdGVQYXBlcnMgTG9nb1wiIC8+XG5cdFx0XHRcdDxoMz5Tb3JyeSwgeW91ciBicm93c2VyIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBhcHBsaWNhdGlvbi4gUGxlYXNlIHVzZSB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgR29vZ2xlIENocm9tZS9DaHJvbWl1bSwgTW96aWxsYSBGaXJlZm94IG9yIFNhZmFyaS48L2gzPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IGhvbWVTbGlkZXNTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvaG9tZXNsaWRlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEhvbWVTbGlkZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHRcdGFjdGl2ZV9zbGlkZTogMCxcblx0XHRcdG1heF9zbGlkZXM6IHRoaXMucHJvcHMuc2xpZGVzLmxlbmd0aCAtMVxuXHRcdH07XG5cdFx0dGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0X3RyYW5zaXRpb25TbGlkZSA9ICh0eXBlKSA9PiB7XG5cdFx0aWYoIHR5cGUgPT0gJ25leHQnICkge1xuXHRcdFx0aWYoIHRoaXMuc3RhdGUuYWN0aXZlX3NsaWRlID09IHRoaXMuc3RhdGUubWF4X3NsaWRlcyApIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuXHRcdFx0XHRcdGFjdGl2ZV9zbGlkZTogMFxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG5cdFx0XHRcdFx0YWN0aXZlX3NsaWRlOiBzdGF0ZS5hY3RpdmVfc2xpZGUgKyAxXG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoIHRoaXMuc3RhdGUuYWN0aXZlX3NsaWRlID09IDAgKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcblx0XHRcdFx0XHRhY3RpdmVfc2xpZGU6IHN0YXRlLm1heF9zbGlkZXNcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuXHRcdFx0XHRcdGFjdGl2ZV9zbGlkZTogc3RhdGUuYWN0aXZlX3NsaWRlIC0gMVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25DaGFuZ2UodmFsdWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiggcHJvY2Vzcy5icm93c2VyICkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlib2FyZElucHV0ICk7XG5cdFx0XHR0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uU2xpZGUoJ25leHQnKVxuXHRcdFx0fSwgNDAwMCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnYWN0aXZlc2xpZGUnKTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFjdGl2ZV9zbGlkZSk7XG5cdH1cblxuXHRfaGFuZGxlS2V5Ym9hcmRJbnB1dCA9IChlKSA9PiB7XG5cdFx0aWYoIGUud2hpY2ggPT0gMzcgKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5fdHJhbnNpdGlvblNsaWRlKCdwcmV2Jyk7XG5cdFx0fVxuXG5cdFx0aWYoIGUud2hpY2ggPT0gMzkgKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuXHRcdFx0dGhpcy5fdHJhbnNpdGlvblNsaWRlKCduZXh0Jylcblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyU2xpZGVyTmF2ID0gKCkgPT4ge1xuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcblx0XHRcdFx0XHR0aGlzLl90cmFuc2l0aW9uU2xpZGUoJ3ByZXYnKVxuXHRcdFx0XHR9fVxuXHRcdFx0XHRjbGFzc05hbWU9e2hvbWVTbGlkZXNTdHlsZXMucHJldn0+XG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtob21lU2xpZGVzU3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9zbGlkZXItYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG5cdFx0XHRcdFx0dGhpcy5fdHJhbnNpdGlvblNsaWRlKCduZXh0Jylcblx0XHRcdFx0fX1cblx0XHRcdFx0Y2xhc3NOYW1lPXtob21lU2xpZGVzU3R5bGVzLm5leHR9PlxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aG9tZVNsaWRlc1N0eWxlcy5saW5rQXJyb3d9IHNyYz1cIi9pbWFnZXMvc2xpZGVyLWFycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCBjb21wb25lbnQgPSB0aGlzO1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtob21lU2xpZGVzU3R5bGVzLmJhbm5lcldyYXB9PlxuXHRcdFx0e3RoaXMucHJvcHMuc2xpZGVzLm1hcChmdW5jdGlvbihzbGlkZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRsZXQgYmFubmVyQ2xhc3MgPSAnJztcblx0XHRcdFx0XHRpZiggaW5kZXggPT0gY29tcG9uZW50LnN0YXRlLmFjdGl2ZV9zbGlkZSApIHtcblx0XHRcdFx0XHRcdGlmKCBzbGlkZS50eXBlID09ICdpbnRlcm5hbCcpIHtcblx0XHRcdFx0XHRcdFx0YmFubmVyQ2xhc3MgPSBgJHtob21lU2xpZGVzU3R5bGVzLmJhbm5lcn0gJHtob21lU2xpZGVzU3R5bGVzLnNob3d9YFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRiYW5uZXJDbGFzcyA9IGAke2hvbWVTbGlkZXNTdHlsZXMuYmFubmVyfSAke2hvbWVTbGlkZXNTdHlsZXMuc2hvd30gJHtob21lU2xpZGVzU3R5bGVzLmV4dGVybmFsfWBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYoIHNsaWRlLnR5cGUgPT0gJ2ludGVybmFsJykge1xuXHRcdFx0XHRcdFx0XHRiYW5uZXJDbGFzcyA9IGAke2hvbWVTbGlkZXNTdHlsZXMuYmFubmVyfWBcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0YmFubmVyQ2xhc3MgPSBgJHtob21lU2xpZGVzU3R5bGVzLmJhbm5lcn0gJHtob21lU2xpZGVzU3R5bGVzLmV4dGVybmFsfWBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoIHNsaWRlLnR5cGUgPT0gJ2ludGVybmFsJyApIHtcblx0XHRcdFx0XHRcdGxldCBpbWdfdXJsO1xuXHRcdFx0XHRcdFx0aWYoIHNsaWRlLmZlYXR1cmVkX21lZGlhLmhhc093blByb3BlcnR5KCdzaXplcycpICkge1xuXHRcdFx0XHRcdFx0XHRpZiggc2xpZGUuZmVhdHVyZWRfbWVkaWEuc2l6ZXMuaGFzT3duUHJvcGVydHkoJ2hlcm8nKSApIHtcblx0XHRcdFx0XHRcdFx0XHRpbWdfdXJsID0gc2xpZGUuZmVhdHVyZWRfbWVkaWEuc2l6ZXMuaGVyby5maWxlO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGltZ191cmwgPSBzbGlkZS5mZWF0dXJlZF9tZWRpYS5maWxlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpbWdfdXJsID0gc2xpZGUuZmVhdHVyZWRfbWVkaWEuZmlsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBzdHlsZUxvZ28gPSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ191cmx9KWAsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YmFubmVyQ2xhc3N9IGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3N0eWxlTG9nb30+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2hvbWVTbGlkZXNTdHlsZXMuYmFubmVyQ29udGVudH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtob21lU2xpZGVzU3R5bGVzLmJhbm5lckhlYWRpbmd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3NsaWRlLmhlYWRsaW5lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2hvbWVTbGlkZXNTdHlsZXMuYmFubmVyRGVzY3JpcHRpb259PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3NsaWRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtob21lU2xpZGVzU3R5bGVzLmJhbm5lckNUQX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2ZpbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkdldCBTdGFydGVkIDxpbWcgY2xhc3NOYW1lPXtob21lU2xpZGVzU3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy13aGl0ZS5zdmdcIiBhbHQ9XCJcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7Y29tcG9uZW50Ll9yZW5kZXJTbGlkZXJOYXYoKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4oXG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Jhbm5lckNsYXNzfSBrZXk9e2luZGV4fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGJyb2Fkc3RyZWV0LXpvbmUgem9uZS1pZD17c2xpZGUuYWRfem9uZX0+PC9icm9hZHN0cmVldC16b25lPlxuXHRcdFx0XHRcdFx0XHRcdDxicm9hZHN0cmVldC16b25lIHpvbmUtaWQ9e3NsaWRlLmFkX3pvbmV9PjwvYnJvYWRzdHJlZXQtem9uZT5cblx0XHRcdFx0XHRcdFx0XHR7Y29tcG9uZW50Ll9yZW5kZXJTbGlkZXJOYXYoKX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lU2xpZGVzO1xuIiwiaW1wb3J0IGxvZ2luTW9kYWxTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvbG9naW5tb2RhbC5tb2R1bGUuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNsYXNzIExvZ2luTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbWFpbDogJycsXG5cdFx0XHRwYXNzOiAnJyxcblx0XHRcdGVycm9yOiAnJyxcblx0XHRcdHdvcmtpbmc6IGZhbHNlLFxuXHRcdH1cblxuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShldmVudCkge1xuXHRcdGxldCBuYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W25hbWVdOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fVxuXG5cdF9oYW5kbGVFc2NhcGUgPSAoZSkgPT4ge1xuXHRcdGlmIChlLndoaWNoID09IDI3KSB7XG5cdFx0XHR0aGlzLnByb3BzLnRvZ2dsZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9oYW5kbGVDbGljayA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKCBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtbW9kYWwnKSApIHtcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2ZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xuXHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdH1cblxuXHRfcHJvY2Vzc0xvZ2luID0gKCkgPT4ge1xuXHRcdGxldCBidXR0b24sXG5cdFx0XHRcdGdvdkJ1dHRvbixcblx0XHRcdFx0anNvbixcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRsb2dpbixcblx0XHRcdFx0ZW1haWxGaWVsZCxcblx0XHRcdFx0cGFzc0ZpZWxkO1xuXG5cdFx0ZW1haWxGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuXHRcdHBhc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzXCJdJyk7XG5cdFx0aWYgKCFlbWFpbEZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdFx0ZW1haWxGaWVsZC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVtYWlsRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuXHRcdH1cblxuXHRcdGlmICghcGFzc0ZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdFx0cGFzc0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFzc0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcblx0XHR9XG5cblx0XHRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9naW4nKTtcblx0XHRnb3ZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9naW4tZ292ZXZlbnRzJyk7XG5cdFx0bG9naW4gPSB0aGlzO1xuXHRcdHVybCA9ICdodHRwczovL2d3cGFkbWluLmNvZGV3cmFuZ2xlci5pby9hcGkvZ3dwL3YxL21hbnVhbC11c2VyLWxvZ2luJztcblx0XHRqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJlbWFpbFwiOiB0aGlzLnN0YXRlLmVtYWlsLFxuXHRcdFx0XCJwYXNzXCI6IHRoaXMuc3RhdGUucGFzcyxcblx0XHR9KTtcblxuXHRcdGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0Z292QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdGxvZ2luLnNldFN0YXRlKHtcblx0XHRcdHdvcmtpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0Z292QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdGxldCBmbGF0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cblx0XHRcdFx0aWYoIGZsYXQuaW5jbHVkZXMoJ2Vycm9yJykgKSB7XG5cdFx0XHRcdFx0bG9naW4uc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6IGRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdHdvcmtpbmc6IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRDb29raWVzLnNldCgndXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuXHRcdFx0XHRsb2dpbi5zZXRTdGF0ZShcblx0XHRcdFx0XHQoKSA9PiAoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6ICcnLFxuXHRcdFx0XHRcdFx0d29ya2luZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRlbWFpbDogJycsXG5cdFx0XHRcdFx0XHRwYXNzOiAnJ1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGxvZ2luLnByb3BzLnRvZ2dsZSgpO1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0sIDEwMDAgKTtcblx0XHR9KTtcblx0fVxuXG5cdF9wcm9jZXNzR292RXZlbnRzTG9naW4gPSAoKSA9PiB7XG5cdFx0bGV0IGJ1dHRvbixcblx0XHRcdFx0Z292QnV0dG9uLFxuXHRcdFx0XHRqc29uLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdGxvZ2luLFxuXHRcdFx0XHRlbWFpbEZpZWxkLFxuXHRcdFx0XHRwYXNzRmllbGQ7XG5cblx0XHRlbWFpbEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG5cdFx0cGFzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBhc3NcIl0nKTtcblx0XHRpZiAoIWVtYWlsRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XG5cdFx0XHRlbWFpbEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW1haWxGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwYXNzRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XG5cdFx0XHRwYXNzRmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXNzRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuXHRcdH1cblxuXHRcdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbicpO1xuXHRcdGdvdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbi1nb3ZldmVudHMnKTtcblx0XHRsb2dpbiA9IHRoaXM7XG5cdFx0dXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvZ292ZXZlbnRzLXVzZXItbG9naW4nO1xuXHRcdGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImVtYWlsXCI6IHRoaXMuc3RhdGUuZW1haWwsXG5cdFx0XHRcInBhc3NcIjogdGhpcy5zdGF0ZS5wYXNzLFxuXHRcdH0pO1xuXG5cdFx0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRnb3ZCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGxvZ2luLnNldFN0YXRlKHtcblx0XHRcdHdvcmtpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRnb3ZCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0bGV0IGZsYXQgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuXHRcdFx0XHRpZiggZmxhdC5pbmNsdWRlcygnZXJyb3InKSApIHtcblx0XHRcdFx0XHRsb2dpbi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRlcnJvcjogZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0d29ya2luZzogZmFsc2Vcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdENvb2tpZXMuc2V0KCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG5cdFx0XHRcdGxvZ2luLnNldFN0YXRlKFxuXHRcdFx0XHRcdCgpID0+ICh7XG5cdFx0XHRcdFx0XHRlcnJvcjogJycsXG5cdFx0XHRcdFx0XHR3b3JraW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdFx0XHRcdHBhc3M6ICcnXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9naW4ucHJvcHMudG9nZ2xlKCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgMTAwMCApO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGNvbnN0IHtvcGVufSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge3dvcmtpbmd9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcblx0XHRpZiggb3BlbiApIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjYXBlICk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbGljayApO1xuXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbW9kYWwnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NhcGUgKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0XHRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tb2RhbCcpO1xuXHRcdH1cblxuXHRcdGlmKCB3b3JraW5nICkge1xuXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCd3b3JraW5nJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnd29ya2luZycpO1xuXHRcdH1cblxuXHR9XG5cblx0X3JlbmRlck1vZGFsQ2xhc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3Qge29wZW59ID0gdGhpcy5wcm9wcztcblx0XHRpZiggb3BlbiApIHtcblx0XHRcdHJldHVybiBgJHtsb2dpbk1vZGFsU3R5bGVzLndyYXB9ICR7bG9naW5Nb2RhbFN0eWxlcy5vcGVufWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBgJHtsb2dpbk1vZGFsU3R5bGVzLndyYXB9YFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7ZW1haWwscGFzcyxlcnJvcn0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5fcmVuZGVyTW9kYWxDbGFzcygpfT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyAke2xvZ2luTW9kYWxTdHlsZXMuaGVhZGVyfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5sb2dvfSBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNiBjb2x1bW5zIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmNsb3NlfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZ2dsZSgpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvY2xvc2Uuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7bG9naW5Nb2RhbFN0eWxlcy5sb2dpbn1gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5XZWxjb21lPC9oMj5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuaHJ9IHNyYz1cIi9pbWFnZXMvc2VwLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxwPlNpZ24gaW4gdG8gYWNjZXNzIEdvdldoaXRlUGFwZXJzLjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2xvZ2luTW9kYWxTdHlsZXMuZm9ybX1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkVtYWlsIEFkZHJlc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzfSBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuZXJyb3J9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS5lcnJvcn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcGFzc3dvcmQtcmVzZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17dGhpcy5fZm9yZ290UGFzc3dvcmR9IGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5mb3Jnb3R9PkZvcmdvdCBwYXNzd29yZD88L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zaWduaW59YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBvbkNsaWNrPXt0aGlzLl9wcm9jZXNzTG9naW59IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJqcy1sb2dpbiBidXR0b25cIiB2YWx1ZT1cIkxvZyBJblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zaWduaW5Hb3ZFdmVudHN9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5fcHJvY2Vzc0dvdkV2ZW50c0xvZ2lufSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwianMtbG9naW4tZ292ZXZlbnRzIGJ1dHRvblwiPjxpbWcgc3JjPVwiL2ltYWdlcy9nb3ZldmVudHMtbG9nby5wbmdcIiBhbHQ9XCJcIiAvPiA8c3Bhbj5Mb2cgSW4gd2l0aCBHb3ZFdmVudHM8L3NwYW4+PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyAke2xvZ2luTW9kYWxTdHlsZXMuc2VwfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9jb250aW51ZS13aXRoLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zb2NpYWxCbG9ja31gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgZGF0YS1jbG9zZS1tb2RhbCBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuZ29vZ2xlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5zb2NpYWx9IHNyYz1cIi9pbWFnZXMvbG9naW4tZ29vZ2xlLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5mYn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgZGF0YS1jbG9zZS1tb2RhbCBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuc29jaWFsfSBzcmM9XCIvaW1hZ2VzL2xvZ2luLWZiLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5saW5rZWRpbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgZGF0YS1jbG9zZS1tb2RhbCBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuc29jaWFsfSBzcmM9XCIvaW1hZ2VzL2xvZ2luLWxpbmtlZGluLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtsb2dpbk1vZGFsU3R5bGVzLnNpZ25VcH1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgZGF0YS1jbG9zZS1tb2RhbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gZGF0YS1jbG9zZS1tb2RhbD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/PC9zcGFuPiBTaWduIFVwIDxpbWcgY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmxpbmtBcnJvd30gZGF0YS1jbG9zZS1tb2RhbCBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBoZWFkZXJTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2hlYWRlci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGxldCBjbGFzc05hbWUgPSBjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJydcblx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZikge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fSBlbHNlIGlmICggcm91dGVyLnBhdGhuYW1lID09ICcvYmxvZy9bcG9zdF0nICYmIGhyZWYgPT0gJy9ibG9nJyApIHtcblx0XHRjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gXG5cdH0gZWxzZSBpZiAoIHJvdXRlci5wYXRobmFtZSA9PSAnL3doaXRlcGFwZXJzL1t3aGl0ZXBhcGVyXScgJiYgaHJlZiA9PSAnL2ZpbmQnICkge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fSBlbHNlIGlmICggcm91dGVyLnBhdGhuYW1lID09ICcvdG9waWMvW3RvcGljXScgJiYgaHJlZiA9PSAnL2ZpbmQnICkge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fVxuXG5cdHJldHVybiA8TGluayBocmVmPXtocmVmfT57UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7IGNsYXNzTmFtZSB9KX08L0xpbms+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBwcm9maWxlU2lkZWJhclN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9wcm9maWxlc2lkZWJhci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGxldCBjbGFzc05hbWUgPSBjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJydcblx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZikge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtwcm9maWxlU2lkZWJhclN0eWxlcy5hY3RpdmV9YFxuXHR9XG5cblx0cmV0dXJuIDxMaW5rIGhyZWY9e2hyZWZ9PntSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgY2xhc3NOYW1lIH0pfTwvTGluaz5cbn1cbiIsImltcG9ydCBzdWJzY3JpYmVTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvc3Vic2NyaWJlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgU3Vic2NyaWJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdF9yZW5kZXJDbGFzcyA9ICgpID0+IHtcblx0XHRpZiggdGhpcy5wcm9wcy5hbHQgPT0gJ3RydWUnICkge1xuXHRcdFx0cmV0dXJuIGAke3N1YnNjcmliZVN0eWxlcy5zdWJzY3JpYmV9ICR7c3Vic2NyaWJlU3R5bGVzLmFsdH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gYCR7c3Vic2NyaWJlU3R5bGVzLnN1YnNjcmliZX1gXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5fcmVuZGVyQ2xhc3MoKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8aDI+U3Vic2NyaWJlPC9oMj5cblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtzdWJzY3JpYmVTdHlsZXMuaHJ9IHNyYz1cIi9pbWFnZXMvc2VwLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHQ8cD5TaWduIHVwIHRvIHJlY2VpdmUgdGhlIEdvdldoaXRlUGFwZXJzIG5ld3NsZXR0ZXIsIGZlYXR1cmluZyBvdXIgZnJlc2hlc3QgY29udGVudCByZWxldmFudCB0byBkaXNjdXNzaW9ucyBoYXBwZW5pbmcgaW4gdGhlIGdvdmVybm1lbnQgY29tbXVuaXR5LjwvcD5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvbmV3c2xldHRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2BidXR0b24gJHtzdWJzY3JpYmVTdHlsZXMuYnV0dG9ufWB9PlNpZ24gVXA8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcbiIsImltcG9ydCB3aGF0U3R5bGVzIGZyb20gJy4uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9jb21wb25lbnRzL3doYXQubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5mdW5jdGlvbiBXaGF0KCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2Ake3doYXRTdHlsZXMuaW5mb1Jvd30gJHt3aGF0U3R5bGVzLmFib3V0fWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17d2hhdFN0eWxlcy5oZWFkaW5nfT5XaGF0IGNhbiB5b3UgZG8gb24gR292V2hpdGVQYXBlcnM/PC9oND5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17d2hhdFN0eWxlcy5ocn0gc3JjPVwiL2ltYWdlcy9zZXAuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8cD5Hb3ZXaGl0ZVBhcGVycyBpcyB0aGUgZ2F0aGVyaW5nIHBsYWNlIGZvciBnb3Zlcm5tZW50IHByb2Zlc3Npb25hbHMgYW5kIHRoZSBjb21wYW5pZXMgdGhhdCBzZXJ2ZSB0aGVtIHRvIGZpbmQgY29udGVudCB0aGF0IGhlbHBzIHRvIHVuZGVyc3RhbmQgbW9kZXJuIHRlY2hub2xvZ2llcywgdHJlbmRzLCBhbmQgcHJhY3RpY2VzLiBXZeKAmXZlIGdhdGhlcmVkIHRob3VzYW5kcyBvZiB3aGl0ZSBwYXBlcnMsIGVCb29rcywgaW5mb2dyYXBoaWNzLCBjYXNlIHN0dWRpZXMsIGFuZCBkYXRhIHNoZWV0cyBvbiB0b3BpY3MgaW5jbHVkaW5nOjwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17d2hhdFN0eWxlcy5jYXRMaXN0fT5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvdG9waWMvYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2VcIj48YT5BcnRpZmljaWFsIEludGVsbGlnZW5jZTwvYT48L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvdG9waWMvYmxvY2tjaGFpblwiPjxhPkJsb2NrY2hhaW48L2E+PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL3RvcGljL2NpdGl6ZW4tZW5nYWdlbWVudFwiPjxhPkNpdGl6ZW4gRW5nYWdlbWVudDwvYT48L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvdG9waWMvY2xvdWQtY29tcHV0aW5nXCI+PGE+Q2xvdWQgQ29tcHV0aW5nPC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+PExpbmsgaHJlZj1cIi90b3BpYy9jeWJlcnNlY3VyaXR5XCI+PGE+Q3liZXJzZWN1cml0eTwvYT48L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvdG9waWMvZGF0YS1tYW5hZ2VtZW50XCI+PGE+RGF0YSBNYW5hZ2VtZW50PC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+PExpbmsgaHJlZj1cIi90b3BpYy9lZHVjYXRpb25cIj48YT5FZHVjYXRpb248L2E+PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL3RvcGljL2l0XCI+PGE+SVQ8L2E+PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL3RvcGljL21pbGl0YXJ5XCI+PGE+TWlsaXRhcnk8L2E+PC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL3RvcGljL3B1YmxpYy1zYWZldHlcIj48YT5QdWJsaWMgU2FmZXR5PC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+PExpbmsgaHJlZj1cIi90b3BpYy9yYW5zb213YXJlXCI+PGE+UmFuc29td2FyZTwvYT48L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvdG9waWMvc2VjdXJpdHlcIj48YT5TZWN1cml0eTwvYT48L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvZmluZFwiPjxhPmFuZCBzbyBtdWNoIG1vcmUhPC9hPjwvTGluaz48L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2hhdFxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgV29yZHByZXNzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy93b3JkcHJlc3MnXG5pbXBvcnQge2RlY29kZUhUTUx9IGZyb20gJ2VudGl0aWVzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBDYXRlZ29yaWVzQmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzQmxvY2snO1xuaW1wb3J0IEZlYXR1cmVkRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZWRFdmVudHMnO1xuaW1wb3J0IEhvbWVTbGlkZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lU2xpZGVzJztcbmltcG9ydCBXaGF0IGZyb20gJy4uL2NvbXBvbmVudHMvV2hhdCc7XG5pbXBvcnQgU3Vic2NyaWJlIGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlJztcbmltcG9ydCBpbmRleFN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuXHRcdFx0d2luZG93LmJyb2Fkc3RyZWV0ID0gd2luZG93LmJyb2Fkc3RyZWV0IHx8IHsgcnVuOiBbXSB9O1xuXHRcdFx0d2luZG93LmJyb2Fkc3RyZWV0LnJ1bi5wdXNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR3aW5kb3cuYnJvYWRzdHJlZXQucmVmcmVzaEFsbCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdChmdW5jdGlvbiBtYXRjaEhlaWdodCgpIHtcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmFyIGdldERpdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXRjaC1oZWlnaHQnKTtcblx0XHRcdFx0dmFyIGFycmF5TGVuZ3RoID0gZ2V0RGl2cy5sZW5ndGg7XG5cdFx0XHRcdHZhciBoZWlnaHRzID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhlaWdodHMucHVzaChnZXREaXZzW2ldLm9mZnNldEhlaWdodCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmdW5jdGlvbiBnZXRIaWdoZXN0KCkge1xuXHRcdFx0XHRcdHJldHVybiBNYXRoLm1heCguLi5oZWlnaHRzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0YWxsZXN0ID0gZ2V0SGlnaGVzdCgpO1xuXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBnZXREaXZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRnZXREaXZzW2ldLnN0eWxlLm1pbkhlaWdodCA9IHRhbGxlc3QgKyBcInB4XCI7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDc1MCk7XG5cdFx0fSkoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBkaXNwbGF5X25hbWUgPSB0aGlzLnByb3BzLmRpc3BsYXlfbmFtZTtcblx0XHRjb25zdCB7cGFnZX0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qgc2VvX3RpdGxlID0gZGVjb2RlSFRNTChwYWdlLnNlb190aXRsZSk7XG5cdFx0Y29uc3Qgb3Blbl9ncmFwaF90aXRsZSA9IGRlY29kZUhUTUwocGFnZS5vcGVuX2dyYXBoX3RpdGxlKTtcblx0XHRjb25zdCB0d2l0dGVyX3RpdGxlID0gZGVjb2RlSFRNTChwYWdlLnR3aXR0ZXJfdGl0bGUpO1xuXG5cdFx0Y29uc3Qgc2VvX2Rlc2MgPSBkZWNvZGVIVE1MKHBhZ2Uuc2VvX2Rlc2MpO1xuXHRcdGNvbnN0IG9wZW5fZ3JhcGhfZGVzYyA9IGRlY29kZUhUTUwocGFnZS5vcGVuX2dyYXBoX2Rlc2MpO1xuXHRcdGNvbnN0IHR3aXR0ZXJfZGVzYyA9IGRlY29kZUhUTUwocGFnZS50d2l0dGVyX2Rlc2MpO1xuXG5cdFx0Y29uc3Qgb3Blbl9ncmFwaF9pbWFnZV91cmwgPSBkZWNvZGVIVE1MKHBhZ2Uub3Blbl9ncmFwaF9pbWFnZV91cmwpO1xuXHRcdGNvbnN0IHR3aXR0ZXJfaW1hZ2VfdXJsID0gZGVjb2RlSFRNTChwYWdlLnR3aXR0ZXJfaW1hZ2VfdXJsKTtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGUga2V5PVwicGFnZS10aXRsZVwiPntzZW9fdGl0bGV9PC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9XCIvZmF2aWNvbi0yNzB4MjcwLnBuZ1wiIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17c2VvX3RpdGxlfSBrZXk9XCJvZy10aXRsZVwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c2VvX2Rlc2N9IGtleT1cImRlc2NyaXB0aW9uXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIGtleT1cIm9nLWxvY2FsZVwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e29wZW5fZ3JhcGhfdGl0bGV9IGtleT1cIm9nLXRpdGxlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17b3Blbl9ncmFwaF9kZXNjfSBrZXk9XCJvZy1kZXNjcmlwdGlvblwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwYWdlLnBlcm1hbGlua30ga2V5PVwib2ctdXJsXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJHb3ZXaGl0ZVBhcGVyc1wiIC8+XG5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17b3Blbl9ncmFwaF9pbWFnZV91cmx9IGtleT1cIm9nLWltYWdlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBjb250ZW50PXtvcGVuX2dyYXBoX2ltYWdlX3VybH0ga2V5PVwib2ctaW1hZ2Utc2VjdXJlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiBrZXk9XCJ0d2l0dGVyLWNhcmRcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17dHdpdHRlcl9kZXNjfSBrZXk9XCJ0d2l0dGVyLWRlc2NyaXB0aW9uXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3R3aXR0ZXJfdGl0bGV9IGtleT1cInR3aXR0ZXItdGl0bGVcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQEdvdkV2ZW50c0dyb3VwXCIga2V5PVwidHdpdHRlci1zaXRlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3R3aXR0ZXJfaW1hZ2VfdXJsfSBrZXk9XCJ0d2l0dGVyLWltYWdlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBHb3ZFdmVudHNHcm91cFwiIGtleT1cInR3aXR0ZXItY3JlYXRvclwiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PEhlYWRlciB7Li4udGhpcy5wcm9wcy51c2VyfSBkaXNwbGF5X25hbWU9e2Rpc3BsYXlfbmFtZX0gLz5cblxuXHRcdFx0XHQ8SG9tZVNsaWRlc1xuXHRcdFx0XHRcdHNsaWRlcz17dGhpcy5wcm9wcy5zbGlkZXN9XG5cdFx0XHRcdCAvPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHNtYWxsLXVwLTEgbGFyZ2UtdXAtMyAke2luZGV4U3R5bGVzLmFjdGlvblJvd31gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiBjb2x1bW4tYmxvY2sgJHtpbmRleFN0eWxlcy5jb2x1bW5CbG9ja30gJHtpbmRleFN0eWxlcy5maW5kfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2luZGV4U3R5bGVzLmFjdGlvbkJsb2NrfWB9PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1maW5kLWljb24uc3ZnXCIgY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5ibG9ja0ljb259IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmluZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhPkZpbmQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYXRjaC1oZWlnaHRcIj5TZWFyY2ggdGhvdXNhbmRzIG9mIHdoaXRlIHBhcGVycywgY2FzZSBzdHVkaWVzLCBlQm9va3MgJiBtb3JlIHRvIGRpc2NvdmVyIHRoZSBiZXN0IHByYWN0aWNlcyBnb3Zlcm5tZW50IGFuZCBpbmR1c3RyeSBhcmUgc2hhcmluZy48L3A+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmluZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoNT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhPkZpbmQgQ29udGVudCAgPGltZyBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy13aGl0ZS5zdmdcIiBhbHQ9XCJcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbHVtbiBjb2x1bW4tYmxvY2sgJHtpbmRleFN0eWxlcy5jb2x1bW5CbG9ja30gJHtpbmRleFN0eWxlcy5wb3N0fWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2luZGV4U3R5bGVzLmFjdGlvbkJsb2NrfWB9PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1wb3N0LWljb24uc3ZnXCIgY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5ibG9ja0ljb259IGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcG9zdFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhPlBvc3Q8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYXRjaC1oZWlnaHRcIj5Qb3N0IHlvdXIgY29udGVudCB0byBleHBhbmQgaXRzIHJlYWNoIHRvIHRob3VzYW5kcyBvZiBnb3Zlcm5tZW50IHByb2Zlc3Npb25hbHMuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Bvc3RcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5Qb3N0IENvbnRlbnQgIDxpbWcgY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5saW5rQXJyb3d9IHNyYz1cIi9pbWFnZXMvcmlnaHQtYXJyb3ctYmxhY2suc3ZnXCIgYWx0PVwiXCIgLz48L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9oNT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Bjb2x1bW4gY29sdW1uLWJsb2NrICR7aW5kZXhTdHlsZXMuY29sdW1uQmxvY2t9ICR7aW5kZXhTdHlsZXMucHJvbW90ZX1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtpbmRleFN0eWxlcy5hY3Rpb25CbG9ja31gfT5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2hvbWUtcHJvbW90ZS1pY29uLnN2Z1wiIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMuYmxvY2tJY29ufSBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb21vdGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5Qcm9tb3RlPC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWF0Y2gtaGVpZ2h0XCI+TGVhcm4gaG93IHdlIGNhbiBoZWxwIHByb21vdGUgeW91ciBjb250ZW50IGFjcm9zcyBtdWx0aXBsZSBkaWdpdGFsIGNoYW5uZWxzPC9wPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb21vdGVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5Qcm9tb3RlIENvbnRlbnQgPGltZyBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy1ibGFjay5zdmdcIiBhbHQ9XCJcIiAvPjwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxXaGF0IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtpbmRleFN0eWxlcy5mZWF0dXJlZENvbnRlbnR9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8aDI+RmVhdHVyZWQgQ29udGVudDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtpbmRleFN0eWxlcy5ocn0gc3JjPVwiL2ltYWdlcy9zZXAuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PHA+VGFrZSBhIGxvb2sgYXQgb3VyIGxhdGVzdCBmZWF0dXJlZCBjb250ZW50IHRvIHN0YXkgdXAgdG8gZGF0ZSBvbiB0aGUgbW9zdCBjdXJyZW50IHRyZW5kcywgbmV3cyBhbmQga25vd2xlZGdlIHRoZSBnb3Zlcm5tZW50IGNvbW11bml0eSBoYXMgdG8gb2ZmZXIuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnJvYWRzdHJlZXQtem9uZSB6b25lLWlkPVwiODAzNjVcIj48L2Jyb2Fkc3RyZWV0LXpvbmU+XG5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5JZiB5b3UnZCBsaWtlIHRvIGZlYXR1cmUgeW91ciBjb250ZW50IGhlcmUsIGNoZWNrIG91dCBvdXIgcHJvbW90aW9uYWwgb3B0aW9ucy4gPExpbmsgaHJlZj1cIi9maW5kXCI+PGE+UHJvbW90ZSA8aW1nIGNsYXNzTmFtZT17aW5kZXhTdHlsZXMubGlua0Fycm93fSBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz48L2E+PC9MaW5rPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGJyb2Fkc3RyZWV0LXpvbmUgem9uZS1pZD1cIjgwMzY2XCI+PC9icm9hZHN0cmVldC16b25lPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPldoZXJlIEdvdmVybm1lbnQgS25vd2xlZGdlIEdhdGhlcnMuIEJlY29tZSBhIG1lbWJlciBmb3IgZnJlZSBhbmQgc3RhcnQgYnJvd3NpbmcgYW5kIHBvc3RpbmcgY29udGVudCB0b2RheSEgPExpbmsgaHJlZj1cIi9maW5kXCI+PGE+R2V0IHN0YXJ0ZWQgPGltZyBjbGFzc05hbWU9e2luZGV4U3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy1ibHVlLnN2Z1wiIGFsdD1cIlwiIC8+PC9hPjwvTGluaz48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PENhdGVnb3JpZXNCbG9jayAvPlxuXG5cdFx0XHRcdDxGZWF0dXJlZEV2ZW50cyAvPlxuXG5cdFx0XHRcdDxTdWJzY3JpYmUgYWx0PVwidHJ1ZVwiLz5cblxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuXHRjb25zdCB3b3JkcHJlc3MgPSBuZXcgV29yZHByZXNzU2VydmljZVxuXHRjb25zdCBwYWdlID0gYXdhaXQgd29yZHByZXNzLmZldGNoUGFnZSgnaG9tZScpO1xuXHRjb25zdCBzbGlkZXMgPSBhd2FpdCB3b3JkcHJlc3MuZmV0Y2hTbGlkZXMoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cGFnZSxcblx0XHRcdHNsaWRlc1xuXHRcdH1cblx0fVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2F0ZWdvcmllc1wiOiBcImNhdGVnb3JpZXNibG9ja19jYXRlZ29yaWVzX18yc3lKaVwiLFxuXHRcImJsb2NrXCI6IFwiY2F0ZWdvcmllc2Jsb2NrX2Jsb2NrX18yS2JHclwiLFxuXHRcImhlYWRpbmdMaW5rXCI6IFwiY2F0ZWdvcmllc2Jsb2NrX2hlYWRpbmdMaW5rX18yR0xOd1wiLFxuXHRcImFsbFwiOiBcImNhdGVnb3JpZXNibG9ja19hbGxfXzJ1ZVN6XCIsXG5cdFwiYnV0dG9uXCI6IFwiY2F0ZWdvcmllc2Jsb2NrX2J1dHRvbl9fM0o1RmJcIixcblx0XCJoclwiOiBcImNhdGVnb3JpZXNibG9ja19ocl9fMVZaeWxcIixcblx0XCJoZWFkaW5nXCI6IFwiY2F0ZWdvcmllc2Jsb2NrX2hlYWRpbmdfXzJIQU1xXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmZWF0dXJlZEV2ZW50c1wiOiBcImZlYXR1cmVkZXZlbnRzX2ZlYXR1cmVkRXZlbnRzX18yT0wwdFwiLFxuXHRcImFsbFwiOiBcImZlYXR1cmVkZXZlbnRzX2FsbF9fMmRnOElcIixcblx0XCJoclwiOiBcImZlYXR1cmVkZXZlbnRzX2hyX18yM1U1ZVwiLFxuXHRcImhlYWRpbmdcIjogXCJmZWF0dXJlZGV2ZW50c19oZWFkaW5nX18zVDl3NVwiLFxuXHRcImNvbnRlbnRcIjogXCJmZWF0dXJlZGV2ZW50c19jb250ZW50X18yTVV1ZlwiLFxuXHRcInRleHRcIjogXCJmZWF0dXJlZGV2ZW50c190ZXh0X180MkZsYlwiLFxuXHRcImltYWdlXCI6IFwiZmVhdHVyZWRldmVudHNfaW1hZ2VfXzJDR1hDXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYW5uZXJXcmFwXCI6IFwiaG9tZXNsaWRlc19iYW5uZXJXcmFwX18yQU5YX1wiLFxuXHRcInByZXZcIjogXCJob21lc2xpZGVzX3ByZXZfXzNaNm5lXCIsXG5cdFwibmV4dFwiOiBcImhvbWVzbGlkZXNfbmV4dF9fV0pmdThcIixcblx0XCJiYW5uZXJDb250ZW50XCI6IFwiaG9tZXNsaWRlc19iYW5uZXJDb250ZW50X18xM05ZSFwiLFxuXHRcImJhbm5lclwiOiBcImhvbWVzbGlkZXNfYmFubmVyX18xNlpLeFwiLFxuXHRcInNob3dcIjogXCJob21lc2xpZGVzX3Nob3dfXzJsbWpGXCIsXG5cdFwiYmFubmVySGVhZGluZ1wiOiBcImhvbWVzbGlkZXNfYmFubmVySGVhZGluZ19fMlhzbElcIixcblx0XCJiYW5uZXJEZXNjcmlwdGlvblwiOiBcImhvbWVzbGlkZXNfYmFubmVyRGVzY3JpcHRpb25fXzJ5U2ZMXCIsXG5cdFwiYmFubmVyQ1RBXCI6IFwiaG9tZXNsaWRlc19iYW5uZXJDVEFfXzJta3FWXCIsXG5cdFwibGlua0Fycm93XCI6IFwiaG9tZXNsaWRlc19saW5rQXJyb3dfX2xWbUFrXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwXCI6IFwibG9naW5tb2RhbF93cmFwX18zM1NqQVwiLFxuXHRcIm9wZW5cIjogXCJsb2dpbm1vZGFsX29wZW5fXzJJUzRDXCIsXG5cdFwiaGVhZGVyXCI6IFwibG9naW5tb2RhbF9oZWFkZXJfXzEyM0M4XCIsXG5cdFwiY2xvc2VcIjogXCJsb2dpbm1vZGFsX2Nsb3NlX18xeVlvLVwiLFxuXHRcImhyXCI6IFwibG9naW5tb2RhbF9ocl9fd0d0NFNcIixcblx0XCJsb2dpblwiOiBcImxvZ2lubW9kYWxfbG9naW5fXzFEcmZuXCIsXG5cdFwiZmxleFwiOiBcImxvZ2lubW9kYWxfZmxleF9fMUxFYTZcIixcblx0XCJidXR0b25cIjogXCJsb2dpbm1vZGFsX2J1dHRvbl9fWk9BSzRcIixcblx0XCJmb3JtXCI6IFwibG9naW5tb2RhbF9mb3JtX18zZ1NWTFwiLFxuXHRcInNpZ25pblwiOiBcImxvZ2lubW9kYWxfc2lnbmluX18xSnl2MFwiLFxuXHRcInNpZ25pbkdvdkV2ZW50c1wiOiBcImxvZ2lubW9kYWxfc2lnbmluR292RXZlbnRzX18zNUQ3OFwiLFxuXHRcImZvcmdvdFwiOiBcImxvZ2lubW9kYWxfZm9yZ290X18yYnN1OFwiLFxuXHRcInNlcFwiOiBcImxvZ2lubW9kYWxfc2VwX18xaElZM1wiLFxuXHRcInNvY2lhbEJsb2NrXCI6IFwibG9naW5tb2RhbF9zb2NpYWxCbG9ja19fMU5uM2ZcIixcblx0XCJzaWduVXBcIjogXCJsb2dpbm1vZGFsX3NpZ25VcF9fMU5reHBcIixcblx0XCJlcnJvclwiOiBcImxvZ2lubW9kYWxfZXJyb3JfXzI4VWJnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwXCI6IFwicHJvZmlsZXNpZGViYXJfd3JhcF9fMU9haTRcIixcblx0XCJtZW51XCI6IFwicHJvZmlsZXNpZGViYXJfbWVudV9fMkl0WndcIixcblx0XCJtZW51SW1hZ2VcIjogXCJwcm9maWxlc2lkZWJhcl9tZW51SW1hZ2VfXzFJZF9aXCIsXG5cdFwiYWN0aXZlXCI6IFwicHJvZmlsZXNpZGViYXJfYWN0aXZlX18yX3Q1bFwiLFxuXHRcIm1lbnVJdGVtXCI6IFwicHJvZmlsZXNpZGViYXJfbWVudUl0ZW1fXzdMV3BiXCIsXG5cdFwibG9nb3V0XCI6IFwicHJvZmlsZXNpZGViYXJfbG9nb3V0X18xbC1VTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlXCI6IFwic3Vic2NyaWJlX3N1YnNjcmliZV9fM1o3QVNcIixcblx0XCJhbHRcIjogXCJzdWJzY3JpYmVfYWx0X18xT0ZjTFwiLFxuXHRcImJ1dHRvblwiOiBcInN1YnNjcmliZV9idXR0b25fXzNIWGduXCIsXG5cdFwiaHJcIjogXCJzdWJzY3JpYmVfaHJfX1FCMXp0XCIsXG5cdFwiaGVhZGluZ1wiOiBcInN1YnNjcmliZV9oZWFkaW5nX18ySWpjUVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb1Jvd1wiOiBcIndoYXRfaW5mb1Jvd19fM1NLeXFcIixcblx0XCJhYm91dFwiOiBcIndoYXRfYWJvdXRfXzJGNjl6XCIsXG5cdFwiaG9tZVwiOiBcIndoYXRfaG9tZV9fMU5vbWJcIixcblx0XCJoZWFkaW5nXCI6IFwid2hhdF9oZWFkaW5nX18yRmZNLVwiLFxuXHRcImhyXCI6IFwid2hhdF9ocl9fM09sRWlcIixcblx0XCJjYXRMaXN0XCI6IFwid2hhdF9jYXRMaXN0X191cmdMbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fMUtvRFdcIixcblx0XCJmaXhlZFwiOiBcImZvb3Rlcl9maXhlZF9fMy04VlFcIixcblx0XCJuYXZpZ2F0aW9uV3JhcFwiOiBcImZvb3Rlcl9uYXZpZ2F0aW9uV3JhcF9fMzBwSDdcIixcblx0XCJtYWluTmF2aWdhdGlvblwiOiBcImZvb3Rlcl9tYWluTmF2aWdhdGlvbl9fMWdmLVRcIixcblx0XCJtZW51XCI6IFwiZm9vdGVyX21lbnVfX0V4akdJXCIsXG5cdFwiY3VycmVudF9wYWdlX2l0ZW1cIjogXCJmb290ZXJfY3VycmVudF9wYWdlX2l0ZW1fXzJ5cHhuXCIsXG5cdFwiY3VycmVudC1tZW51LWl0ZW1cIjogXCJmb290ZXJfY3VycmVudC1tZW51LWl0ZW1fX1RlVE1nXCIsXG5cdFwiY3VycmVudF9wYWdlX2FuY2VzdG9yXCI6IFwiZm9vdGVyX2N1cnJlbnRfcGFnZV9hbmNlc3Rvcl9fMk01dnBcIixcblx0XCJjdXJyZW50LW1lbnUtYW5jZXN0b3JcIjogXCJmb290ZXJfY3VycmVudC1tZW51LWFuY2VzdG9yX18zYTNqM1wiLFxuXHRcImxvZ29cIjogXCJmb290ZXJfbG9nb19fMVZWNmJcIixcblx0XCJzb2NpYWxNZW51XCI6IFwiZm9vdGVyX3NvY2lhbE1lbnVfXzNPWElwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZpZ2F0aW9uV3JhcFwiOiBcImhlYWRlcl9uYXZpZ2F0aW9uV3JhcF9fM1ctdHhcIixcblx0XCJtYWluTmF2aWdhdGlvblwiOiBcImhlYWRlcl9tYWluTmF2aWdhdGlvbl9fMW1adnVcIixcblx0XCJtZW51UHJpbWFyeU1lbnVDb250YWluZXJcIjogXCJoZWFkZXJfbWVudVByaW1hcnlNZW51Q29udGFpbmVyX18yRXRoelwiLFxuXHRcImZvY3VzXCI6IFwiaGVhZGVyX2ZvY3VzX18xSlB2WVwiLFxuXHRcIm1lbnVcIjogXCJoZWFkZXJfbWVudV9fMThJS3dcIixcblx0XCJldmVudHNNZW51TGlua1wiOiBcImhlYWRlcl9ldmVudHNNZW51TGlua19fMUJrUS1cIixcblx0XCJob21lTWVudUxpbmtcIjogXCJoZWFkZXJfaG9tZU1lbnVMaW5rX18zUHRHZ1wiLFxuXHRcIm1lbnVJbWFnZVwiOiBcImhlYWRlcl9tZW51SW1hZ2VfXzF5dk5hXCIsXG5cdFwicHJvbW90ZVwiOiBcImhlYWRlcl9wcm9tb3RlX19JY3RLSVwiLFxuXHRcInRlYW1cIjogXCJoZWFkZXJfdGVhbV9fMWxpa0NcIixcblx0XCJibG9nXCI6IFwiaGVhZGVyX2Jsb2dfXzFLbGd3XCIsXG5cdFwiYWN0aXZlXCI6IFwiaGVhZGVyX2FjdGl2ZV9fZHh0eW5cIixcblx0XCJjdXJyZW50X3BhZ2VfaXRlbVwiOiBcImhlYWRlcl9jdXJyZW50X3BhZ2VfaXRlbV9fMThlZE9cIixcblx0XCJjdXJyZW50LW1lbnUtaXRlbVwiOiBcImhlYWRlcl9jdXJyZW50LW1lbnUtaXRlbV9fMjFVbVNcIixcblx0XCJjdXJyZW50X3BhZ2VfYW5jZXN0b3JcIjogXCJoZWFkZXJfY3VycmVudF9wYWdlX2FuY2VzdG9yX18zUWJkT1wiLFxuXHRcImN1cnJlbnQtbWVudS1hbmNlc3RvclwiOiBcImhlYWRlcl9jdXJyZW50LW1lbnUtYW5jZXN0b3JfXzNYeUFXXCIsXG5cdFwibW9iaWxlVXNlck1lbnVXcmFwXCI6IFwiaGVhZGVyX21vYmlsZVVzZXJNZW51V3JhcF9fMUN3UFRcIixcblx0XCJ1c2VyTWVudVwiOiBcImhlYWRlcl91c2VyTWVudV9faXk5QXdcIixcblx0XCJsb2dpblwiOiBcImhlYWRlcl9sb2dpbl9fMTAzV1VcIixcblx0XCJidXR0b25cIjogXCJoZWFkZXJfYnV0dG9uX18zUWNkVFwiLFxuXHRcImdldFN0YXJ0ZWRcIjogXCJoZWFkZXJfZ2V0U3RhcnRlZF9fMTVXbkFcIixcblx0XCJtYWluVXNlck1lbnVXcmFwXCI6IFwiaGVhZGVyX21haW5Vc2VyTWVudVdyYXBfXzFuYnJsXCIsXG5cdFwiaWNvbk9wZW5cIjogXCJoZWFkZXJfaWNvbk9wZW5fXzNteWJ4XCIsXG5cdFwiYWNjb3VudFwiOiBcImhlYWRlcl9hY2NvdW50X18zcmhCSVwiLFxuXHRcInRvZ2dsZWRcIjogXCJoZWFkZXJfdG9nZ2xlZF9fMUFOeVJcIixcblx0XCJzZWFyY2hcIjogXCJoZWFkZXJfc2VhcmNoX18ydWxLU1wiLFxuXHRcImhlYWRlcl9idXR0b25cIjogXCJoZWFkZXJfaGVhZGVyX2J1dHRvbl9fMVQwQXlcIixcblx0XCJtZW51VG9nZ2xlXCI6IFwiaGVhZGVyX21lbnVUb2dnbGVfXzFwejNpXCIsXG5cdFwiYnVyZ2VyXCI6IFwiaGVhZGVyX2J1cmdlcl9fdkljQmNcIixcblx0XCJvcGVuXCI6IFwiaGVhZGVyX29wZW5fXzFBVGpYXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fMjJXYlhcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fXzJBbVVHXCIsXG5cdFwicHJvZmlsZU1lbnVcIjogXCJoZWFkZXJfcHJvZmlsZU1lbnVfXzE5OVpkXCIsXG5cdFwianMtYWNjb3VudC1tZW51XCI6IFwiaGVhZGVyX2pzLWFjY291bnQtbWVudV9fMlRuTmZcIixcblx0XCJtZW51SXRlbVwiOiBcImhlYWRlcl9tZW51SXRlbV9fMjJlQjFcIixcblx0XCJsb2dvdXRcIjogXCJoZWFkZXJfbG9nb3V0X191QzRIbVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWN0aW9uUm93XCI6IFwibW9kdWxlc19hY3Rpb25Sb3dfXzNoNTc2XCIsXG5cdFwiY29sdW1uQmxvY2tcIjogXCJtb2R1bGVzX2NvbHVtbkJsb2NrX18zX2JHUFwiLFxuXHRcImZpbmRcIjogXCJtb2R1bGVzX2ZpbmRfX3JGUnEtXCIsXG5cdFwiYWN0aW9uQmxvY2tcIjogXCJtb2R1bGVzX2FjdGlvbkJsb2NrX18xcG93c1wiLFxuXHRcInBvc3RcIjogXCJtb2R1bGVzX3Bvc3RfXzJScDViXCIsXG5cdFwiYmxvY2tJY29uXCI6IFwibW9kdWxlc19ibG9ja0ljb25fXzJyY2hOXCIsXG5cdFwicHJvbW90ZVwiOiBcIm1vZHVsZXNfcHJvbW90ZV9fMjJxQWFcIixcblx0XCJsaW5rQXJyb3dcIjogXCJtb2R1bGVzX2xpbmtBcnJvd19fM3puSGFcIixcblx0XCJpbmZvUm93XCI6IFwibW9kdWxlc19pbmZvUm93X18xVGFGZ1wiLFxuXHRcImFib3V0XCI6IFwibW9kdWxlc19hYm91dF9fQUQzTHFcIixcblx0XCJob21lXCI6IFwibW9kdWxlc19ob21lX18yU2lzeVwiLFxuXHRcImhlYWRpbmdcIjogXCJtb2R1bGVzX2hlYWRpbmdfXzI4ZTd4XCIsXG5cdFwiaHJcIjogXCJtb2R1bGVzX2hyX18ybUFXeFwiLFxuXHRcImNhdExpc3RcIjogXCJtb2R1bGVzX2NhdExpc3RfXzF2U0lrXCIsXG5cdFwiZmVhdHVyZWRDb250ZW50XCI6IFwibW9kdWxlc19mZWF0dXJlZENvbnRlbnRfXzNjNXdHXCIsXG5cdFwiYnV0dG9uXCI6IFwibW9kdWxlc19idXR0b25fXzJLOHVTXCIsXG5cdFwid2hhdFwiOiBcIm1vZHVsZXNfd2hhdF9fMURLd1FcIixcblx0XCJmbGV4XCI6IFwibW9kdWxlc19mbGV4X19RdDBnUlwiXG59O1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkcHJlc3NTZXJ2aWNlIHtcblxuXHRhc3luYyBmZXRjaFdoaXRlcGFwZXJzKFxuXHRcdFx0aXRlbXMsXG5cdFx0XHRvZmZzZXQsXG5cdFx0XHR0b3BpY3MgPSBbXSxcblx0XHRcdHRhZ3MgPSBbXSxcblx0XHRcdGZvcm1hdCA9ICcnLFxuXHRcdFx0YWdlbmNpZXMgPSBbXSxcblx0XHRcdHNlYXJjaCA9ICcnLFxuXHRcdFx0c3RhcnRfZGF0ZSA9ICcnLFxuXHRcdFx0ZW5kX2RhdGUgPSAnJyxcblx0XHRcdHNvcnRfYnkgPSAncmVsZXZhbmNlJyxcblx0XHRcdHVzZXJfaWQgPSAnJyxcblx0XHRcdG9yZ2FuaXphdGlvbl9pZCA9ICcnXG5cdFx0KVxuXHR7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS93aGl0ZXBhcGVycy8/aXRlbXM9JHtpdGVtc30mb2Zmc2V0PSR7b2Zmc2V0fSZ0b3BpY3M9JHt0b3BpY3N9JnRhZ3M9JHt0YWdzfSZmb3JtYXQ9JHtmb3JtYXR9JmFnZW5jaWVzPSR7YWdlbmNpZXN9JnM9JHtzZWFyY2h9JnN0YXJ0X2RhdGU9JHtzdGFydF9kYXRlfSZlbmRfZGF0ZT0ke2VuZF9kYXRlfSZzb3J0X2J5PSR7c29ydF9ieX0mdXNlcl9pZD0ke3VzZXJfaWR9Jm9yZ2FuaXphdGlvbl9pZD0ke29yZ2FuaXphdGlvbl9pZH1gKVxuXHRcdGNvbnN0IHdoaXRlcGFwZXJzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHdoaXRlcGFwZXJzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hTYXZlZFNlYXJjaChpZCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vc2F2ZWQtc2VhcmNoLyR7aWR9YClcblx0XHRjb25zdCBzZWFyY2ggPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHNlYXJjaDtcblx0fVxuXG5cdGFzeW5jIGZldGNoU2F2ZWRTZWFyY2hlcyggdXNlcl9pZCwgYWNjZXNzX3Rva2VuICkge1xuXHRcdGNvbnN0IHVybCA9IGAke2FwaVVSTH0vc2F2ZWQtc2VhcmNoZXMvYFxuXG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IGFjY2Vzc190b2tlbixcblx0XHRcdFwidXNlcl9pZFwiOiB1c2VyX2lkLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgc2F2ZWRfc2VhcmNoZXMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gc2F2ZWRfc2VhcmNoZXM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFdoaXRlcGFwZXIoc2x1Zykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vd2hpdGVwYXBlcnMvJHtzbHVnfWApXG5cdFx0Y29uc3Qgd2hpdGVwYXBlciA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4gd2hpdGVwYXBlcjtcblx0fVxuXG5cdGFzeW5jIGZldGNoUG9zdHMoaXRlbXMsb2Zmc2V0LHNlYXJjaCA9ICcnKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9wb3N0cy8/aXRlbXM9JHtpdGVtc30mb2Zmc2V0PSR7b2Zmc2V0fSZzPSR7c2VhcmNofWApXG5cdFx0Y29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gcG9zdHM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFNsaWRlcygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3NsaWRlc2ApXG5cdFx0Y29uc3Qgc2xpZGVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHNsaWRlcztcblx0fVxuXG5cdGFzeW5jIGZldGNoUG9zdChzbHVnKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9wb3N0cy8ke3NsdWd9YClcblx0XHRjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiBwb3N0O1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hQYWdlKHNsdWcpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3BhZ2VzLyR7c2x1Z31gKVxuXHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHBhZ2U7XG5cdH1cblxuXHRhc3luYyBmZXRjaEZvcm1hdHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9mb3JtYXRzL2ApXG5cdFx0Y29uc3QgZm9ybWF0cyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBmb3JtYXRzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hUb3BpY3MoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS90b3BpY3MvYClcblx0XHRjb25zdCB0b3BpY3MgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gdG9waWNzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hUb3BpYyhzbHVnKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS90b3BpYy8ke3NsdWd9YClcblx0XHRjb25zdCB0b3BpYyA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4gdG9waWM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFRhZ3MoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS90YWdzL2ApXG5cdFx0Y29uc3QgdGFncyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB0YWdzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hTdGF0cygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2ZldGNoLXN0YXRzL2ApXG5cdFx0Y29uc3Qgc3RhdHMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gc3RhdHM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFRlYW0oKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS90ZWFtL2ApXG5cdFx0Y29uc3QgdGVhbSA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB0ZWFtO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hBZ2VuY2llcyhwYXJlbnQpIHtcblx0XHRsZXQgcmVzO1xuXHRcdGlmKCBwYXJlbnQgPT0gJycgKSB7XG5cdFx0XHRyZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2FnZW5jaWVzLz9vcmRlcmJ5PW5hbWVgKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2FnZW5jaWVzLz9wYXJlbnQ9JHtwYXJlbnR9YClcblx0XHR9XG5cdFx0Y29uc3QgYWdlbmNpZXMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gYWdlbmNpZXM7XG5cdH1cblxuXHRhc3luYyBzZWFyY2hPcmdhbml6YXRpb25zKHNlYXJjaCwgaXRlbXMgPSAxMCkge1xuXHRcdGlmKCBzZWFyY2ggPT0gJycgKSB7XG5cdFx0XHRyZXR1cm4gW11cblx0XHR9XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9vcmdhbml6YXRpb25zLz9zZWFyY2g9JHtzZWFyY2h9Jml0ZW1zPSR7aXRlbXN9YClcblx0XHRjb25zdCBvcmdzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIG9yZ3M7XG5cdH1cblxuXHRhc3luYyBmZXRjaE9yZ2FuaXphdGlvbihpZCkge1xuXHRcdGlmKCBpZCA9PSAnJyApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9vcmdhbml6YXRpb25zLyR7aWR9YClcblx0XHRjb25zdCBvcmcgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gb3JnO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hGYXZvcml0ZXMoYWNjZXNzX3Rva2VuLGl0ZW1zLG9mZnNldCkge1xuXG5cdFx0Y29uc3QgdXJsID0gYCR7YXBpVVJMfS9mYXZvcml0ZXMvYFxuXG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IGFjY2Vzc190b2tlbixcblx0XHRcdFwiaXRlbXNcIjogaXRlbXMsXG5cdFx0XHRcIm9mZnNldFwiOiBvZmZzZXRcblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHdoaXRlcGFwZXJzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHdoaXRlcGFwZXJzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hPcmdhbml6YXRpb25NZW1iZXJzKGFjY2Vzc190b2tlbikge1xuXG5cdFx0Y29uc3QgdXJsID0gYCR7YXBpVVJMfS9vcmdhbml6YXRpb24tbWVtYmVycy9gXG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IGFjY2Vzc190b2tlbixcblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IG1lbWJlcnMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gbWVtYmVycztcblx0fVxuXG5cdGFzeW5jIGNoZWNrRmF2b3JpdGUoaWQsdG9rZW4pIHtcblx0Ly9cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vaXMtZmF2b3JpdGUvYClcblx0XHRjb25zdCB1cmwgPSAnaHR0cHM6Ly9nd3BhZG1pbi5jb2Rld3JhbmdsZXIuaW8vYXBpL2d3cC92MS9pcy1mYXZvcml0ZSc7XG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiSURcIjogaWQsXG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiB0b2tlblxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgciA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiByO1xuXHR9XG5cblx0YXN5bmMgZ2V0VXNlcih0b2tlbikge1xuXG5cdFx0aWYoICF0b2tlbiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCB1cmwgPSAnaHR0cHM6Ly9nd3BhZG1pbi5jb2Rld3JhbmdsZXIuaW8vYXBpL2d3cC92MS91c2VyJztcblx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogdG9rZW5cblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHIgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gcjtcblx0fVxuXG5cdC8vIGFzeW5jIGZldGNoSG9tZVNsaWRlcygpIHtcblx0Ly8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2hvbWUtc2xpZGVzP2l0ZW1zPTRgKVxuXHQvLyBcdGNvbnN0IHNsaWRlcyA9IGF3YWl0IHJlcy5qc29uKClcblx0Ly9cblx0Ly8gXHRyZXR1cm4gc2xpZGVzXG5cdC8vIH1cblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW50aXRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9