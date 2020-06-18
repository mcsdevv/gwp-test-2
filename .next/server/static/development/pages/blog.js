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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/BlogCard.js":
/*!********************************!*\
  !*** ./components/BlogCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/blogcard.module.css */ "./public/styles/modules/components/blogcard.module.css");
/* harmony import */ var _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TeamModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TeamModal */ "./components/TeamModal.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/BlogCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class BlogCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  _renderImage() {
    if (this.props.featured_media == false) {
      return __jsx("img", {
        src: "/images/blog-card.jpg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 12
        }
      });
    } else {
      if (this.props.featured_media.sizes.hasOwnProperty('blog_card')) {
        return __jsx("img", {
          src: this.props.featured_media.sizes.blog_card.file,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }
        });
      } else {
        return __jsx("img", {
          src: this.props.featured_media.file,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }
        });
      }
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: `${_public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blogBlock}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "blog/[post]",
      as: `blog/${this.props.slug}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.category,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 8
      }
    }, this.props.category[0].name)), this._renderImage())), __jsx("div", {
      className: `${_public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/blog/[post]",
      as: `/blog/${this.props.slug}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 6
      }
    }, __jsx("a", {
      className: _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 8
      }
    }, this.props.title))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 6
      }
    }, this.props.excerpt), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/blog/[post]",
      as: `/blog/${this.props.slug}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 6
      }
    }, __jsx("a", {
      className: _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.more,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, "Learn more ", __jsx("img", {
      className: _public_styles_modules_components_blogcard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.linkArrow,
      src: "/images/right-arrow-blue.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 53
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BlogCard);

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

/***/ "./components/TeamModal.js":
/*!*********************************!*\
  !*** ./components/TeamModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/modules/components/teammodal.module.css */ "./public/styles/modules/components/teammodal.module.css");
/* harmony import */ var _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities */ "entities");
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util */ "./services/util.js");
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/components/TeamModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class TeamModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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

    _defineProperty(this, "_renderModalClass", () => {
      const {
        modal_open
      } = this.props;

      if (modal_open) {
        return `${_public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrap} ${_public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.open}`;
      } else {
        return `${_public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrap}`;
      }
    });

    _defineProperty(this, "_renderDescription", () => {
      if (this.props.description) {
        return __jsx("div", {
          className: _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 5
          }
        }, __jsx("h4", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 5
          }
        }, "My team describes me as..."), __jsx(_services_util__WEBPACK_IMPORTED_MODULE_4__["HTML"], {
          html: this.props.description,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 5
          }
        }));
      } else {
        return null;
      }
    });

    _defineProperty(this, "_renderFunFact", () => {
      if (this.props.fun_fact) {
        return __jsx("div", {
          className: _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.funFact,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 5
          }
        }, __jsx("h4", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 5
          }
        }, "Fun Fact"), __jsx(_services_util__WEBPACK_IMPORTED_MODULE_4__["HTML"], {
          html: this.props.fun_fact,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 5
          }
        }));
      } else {
        return null;
      }
    });
  }

  componentDidUpdate() {
    console.log(this.props); // const {modal_open} = this.props;
    // let html = document.querySelector('html');
    // if( modal_open ) {
    // 	window.addEventListener('keydown', this._handleEscape );
    // 	window.addEventListener('click', this._handleClick );
    // 	html.classList.add('active-modal');
    // } else {
    // 	window.removeEventListener('keydown', this._handleEscape );
    // 	window.removeEventListener('click', this._handleClick );
    // 	html.classList.remove('active-modal');
    // }
  }

  _renderProfileImage() {
    if (this.props.featured_media !== false) {
      if (this.props.featured_media.sizes.hasOwnProperty('square')) {
        return __jsx("img", {
          src: this.props.featured_media.sizes.square.file,
          className: _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
          alt: "",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 12
          }
        });
      } else {
        return __jsx("img", {
          src: this.props.featured_media.file,
          className: _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
          alt: "",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 12
          }
        });
      }
    } else {
      return __jsx("img", {
        src: "/images/team-default.jpg",
        className: _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      });
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: this._renderModalClass(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: `clearfix ${_public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "small-12 columns text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 6
      }
    }, __jsx("button", {
      className: _public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
      onClick: e => {
        this.props.toggle();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "/images/close.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 8
      }
    }))), __jsx("div", {
      className: `clearfix ${_public_styles_modules_components_teammodal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, this._renderProfileImage(), __jsx("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 8
      }
    }, this.props.position), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 8
      }
    }, this.props.seo_title), __jsx("div", {
      className: "bio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 8
      }
    }, __jsx(_services_util__WEBPACK_IMPORTED_MODULE_4__["HTML"], {
      html: this.props.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }), this._renderDescription(), this._renderFunFact()))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TeamModal);

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

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! entities */ "entities");
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_wordpress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/wordpress */ "./services/wordpress.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Subscribe */ "./components/Subscribe.js");
/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/BlogCard */ "./components/BlogCard.js");
/* harmony import */ var _public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/styles/modules/blog.module.css */ "./public/styles/modules/blog.module.css");
/* harmony import */ var _public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/pages/blog/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Blog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_renderLoadMoreClass", () => {
      if (this.state.reached_end == true) {
        return `${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav} hide`;
      } else {
        return `${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav}`;
      }
    });

    this.state = {
      posts: [],
      search: '',
      reached_end: false,
      working: false
    };
  }

  async componentDidMount() {
    this.setState(state => ({
      posts: this.props.posts
    }));
    const {
      user
    } = this.props;
    const {
      page
    } = this.props;
  }

  componentDidUpdate() {
    const {
      working
    } = this.state;
    let html = document.querySelector('html');

    if (working) {
      html.classList.add('working');
    } else {
      html.classList.remove('working');
    }
  }

  async _loadMore() {
    this.setState({
      working: true
    });
    const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_4__["default"]();
    let items = 9;
    let offset = this.state.posts.length;
    const posts = await wordpress.fetchPosts(items, offset);

    if (posts.length < items) {
      this.setState({
        reached_end: true
      });
    }

    this.setState({
      posts: [...this.state.posts, ...posts],
      working: false
    });
  }

  async blogSearchSubmit(e) {
    e.preventDefault();
    window.scrollBy(0, 300); // var results = document.querySelector('.js-results');
    // //results.scrollTop -= 800;
    // results.scrollIntoView({
    // 	behavior: "smooth",
    // 	block: "end",
    // 	inline: "nearest"
    // });

    const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_4__["default"]();
    let formData = new FormData(e.target);
    let search = formData.get('search_field');

    if (search.length < 1) {
      return false;
    }

    this.setState({
      working: true,
      search: search
    });
    let items = 100;
    let offset = 0;
    const posts = await wordpress.fetchPosts(items, offset, search);
    this.setState({
      posts: posts,
      working: false,
      reached_end: true
    });
  }

  async _clearSearch() {
    let search_field = document.querySelector('input[name="search_field"]');
    search_field.value = '';
    this.setState({
      working: true
    });
    const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_4__["default"]();
    let items = 9;
    let offset = 0;
    const posts = await wordpress.fetchPosts(items, offset);
    this.setState({
      posts: posts,
      search: false,
      working: false,
      reached_end: false
    });
  }

  renderBlogHeading() {
    if (this.state.search == false) {
      return __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      }, "Articles");
    } else {
      return __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }
      }, "Search results for: ", this.state.search, " ", __jsx("span", {
        onClick: () => {
          this._clearSearch(1);
        },
        className: _public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.clearSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 55
        }
      }, "clear search"));
    }
  }

  render() {
    const {
      posts
    } = this.state;
    const {
      user
    } = this.props;
    const {
      page
    } = this.props;
    const display_name = this.props.display_name;
    const seo_title = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.seo_title);
    const open_graph_title = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.open_graph_title);
    const twitter_title = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.twitter_title);
    const seo_desc = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.seo_desc);
    const open_graph_desc = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.open_graph_desc);
    const twitter_desc = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.twitter_desc);
    const open_graph_image_url = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.open_graph_image_url);
    const twitter_image_url = Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(page.twitter_image_url);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 5
      }
    }, __jsx("title", {
      key: "page-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 6
      }
    }, seo_title), __jsx("meta", {
      charset: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 6
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
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
        lineNumber: 160,
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
        lineNumber: 161,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/favicon-270x270.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 6
      }
    }), __jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:title",
      content: seo_title,
      key: "og-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "description",
      content: seo_desc,
      key: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:locale",
      content: "en_US",
      key: "og-locale",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:title",
      content: open_graph_title,
      key: "og-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:description",
      content: open_graph_desc,
      key: "og-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:url",
      content: page.permalink,
      key: "og-url",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "GovWhitePapers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:image",
      content: open_graph_image_url,
      key: "og-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 6
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: open_graph_image_url,
      key: "og-image-secure",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image",
      key: "twitter-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:description",
      content: twitter_desc,
      key: "twitter-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:title",
      content: twitter_title,
      key: "twitter-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:site",
      content: "@GovEventsGroup",
      key: "twitter-site",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:image",
      content: twitter_image_url,
      key: "twitter-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "twitter:creator",
      content: "@GovEventsGroup",
      key: "twitter-creator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 6
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, user, {
      display_name: display_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 5
      }
    })), __jsx("div", {
      className: `row ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.pageContent}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: `small-12 medium-6 columns ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 6
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }
    }, "Blog"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    }, "We break down the buzz around government hot topics."), __jsx("form", {
      id: "blog-search",
      action: "https://gwpadmin.codewrangler.io/api/gwp/v1/posts",
      onSubmit: e => this.blogSearchSubmit(e),
      method: "get",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: `input-group ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.search}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }
    }, __jsx("input", {
      name: "search_field",
      className: "input-group-field",
      placeholder: "Search articles",
      type: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 10
      }
    }), __jsx("div", {
      className: "input-group-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 10
      }
    }, __jsx("button", {
      className: `button ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button}`,
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "/images/right-arrow-white.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 12
      }
    })))))), __jsx("div", {
      className: `small-12 medium-6 columns text-right ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.image}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 6
      }
    }, __jsx("img", {
      src: "/images/blog-img.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 7
      }
    }))), __jsx("div", {
      className: _public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.blogRow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: `row ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.heading}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "small-12 columns text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }
    }, this.renderBlogHeading())), __jsx("div", {
      className: "js-results",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 6
      }
    }), __jsx("div", {
      className: `row small-up-1 medium-up-2 large-up-3`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 6
      }
    }, posts.map(blog => __jsx("div", {
      key: blog.ID,
      className: `column column-block`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 8
      }
    }, __jsx(_components_BlogCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: blog.ID,
      slug: blog.slug,
      title: Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(blog.title),
      featured_media: blog.featured_media,
      excerpt: Object(entities__WEBPACK_IMPORTED_MODULE_3__["decodeHTML"])(blog.excerpt),
      category: blog.categories,
      display_date: blog.display_date,
      author_name: blog.author_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }
    })))), __jsx("div", {
      className: this._renderLoadMoreClass(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 6
      }
    }, __jsx("button", {
      onClick: () => {
        this._loadMore();
      },
      className: `button ${_public_styles_modules_blog_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 7
      }
    }, "Load More"))), __jsx(_components_Subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 5
      }
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 5
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Blog);
async function getStaticProps(ctx) {
  const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const page = await wordpress.fetchPage('blog');
  let items = 9;
  let offset = 0;
  const posts = await wordpress.fetchPosts(items, offset);
  return {
    props: {
      page,
      posts
    }
  };
}

/***/ }),

/***/ "./public/styles/modules/blog.module.css":
/*!***********************************************!*\
  !*** ./public/styles/modules/blog.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pageContent": "blog_pageContent__R2Req",
	"text": "blog_text__3YyHI",
	"image": "blog_image__3YXH3",
	"search": "blog_search__HwpUl",
	"button": "blog_button__3w2TF",
	"blogRow": "blog_blogRow__2RRP_",
	"heading": "blog_heading__3msJ2",
	"clearSearch": "blog_clearSearch__1K9F-",
	"nav": "blog_nav__1Jd_E"
};


/***/ }),

/***/ "./public/styles/modules/components/blogcard.module.css":
/*!**************************************************************!*\
  !*** ./public/styles/modules/components/blogcard.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blogBlock": "blogcard_blogBlock__3YmRG",
	"more": "blogcard_more__2K_ZK",
	"link": "blogcard_link__2FfiP",
	"image": "blogcard_image__nQIkL",
	"category": "blogcard_category__3qsgu",
	"content": "blogcard_content__1Oy2F",
	"linkArrow": "blogcard_linkArrow__DIy5s"
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

/***/ "./public/styles/modules/components/teammodal.module.css":
/*!***************************************************************!*\
  !*** ./public/styles/modules/components/teammodal.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "teammodal_wrap__3xQOA",
	"open": "teammodal_open__1XJHa",
	"body": "teammodal_body__1b6o_",
	"avatar": "teammodal_avatar__1GOqa",
	"header": "teammodal_header__1IuMi",
	"close": "teammodal_close__b6eWP",
	"hr": "teammodal_hr__3T6O_",
	"login": "teammodal_login__2sOr5",
	"flex": "teammodal_flex__AhzwH",
	"button": "teammodal_button__3Npzy",
	"form": "teammodal_form__3hz06",
	"signin": "teammodal_signin__KDcaG",
	"forgot": "teammodal_forgot__nTInT",
	"sep": "teammodal_sep__2OK3c",
	"socialBlock": "teammodal_socialBlock__3IRC4",
	"signUp": "teammodal_signUp__3sgVp",
	"description": "teammodal_description__znfs5",
	"funFact": "teammodal_funFact__3u_sQ"
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

/***/ "./services/util.js":
/*!**************************!*\
  !*** ./services/util.js ***!
  \**************************/
/*! exports provided: HTML, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML", function() { return HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/services/util.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const HTML = ({
  type,
  className,
  html
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(type !== null && type !== void 0 ? type : 'div', {
    className,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};
const NavLink = ({
  href = '/[page]',
  as,
  className,
  children,
  title
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
  href: href,
  as: as,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 2
  }
}, __jsx("a", {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}, children !== null && children !== void 0 ? children : title));

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

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/blog/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/edward/Projects/gov/gwp-test/pages/blog/index.js */"./pages/blog/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Jsb2dDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW5Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnVMaW5rLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZU1lbnVMaW5rLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGVhbU1vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvYmxvZy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9jb21wb25lbnRzL2Jsb2djYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvbG9naW5tb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2ZpbGVzaWRlYmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvc3Vic2NyaWJlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvdGVhbW1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9oZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy91dGlsLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3dvcmRwcmVzcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbnRpdGllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkJsb2dDYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiX3JlbmRlckltYWdlIiwiZmVhdHVyZWRfbWVkaWEiLCJzaXplcyIsImhhc093blByb3BlcnR5IiwiYmxvZ19jYXJkIiwiZmlsZSIsInJlbmRlciIsImJsb2dDYXJkU3R5bGVzIiwiYmxvZ0Jsb2NrIiwic2x1ZyIsImltYWdlIiwiY2F0ZWdvcnkiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJ0aXRsZSIsImV4Y2VycHQiLCJtb3JlIiwibGlua0Fycm93IiwiRm9vdGVyIiwiX3JlbmRlckZvb3RlckNsYXNzIiwiZml4ZWQiLCJmb290ZXJTdHlsZXMiLCJmb290ZXIiLCJsb2dvIiwibmF2aWdhdGlvbldyYXAiLCJtYWluTmF2aWdhdGlvbiIsIm1lbnUiLCJzb2NpYWxNZW51IiwiZmJsb2dvIiwibGlua2VkaW4iLCJ0d2l0dGVyIiwiSGVhZGVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vYmlsZV9tZW51X29wZW4iLCJ1c2VyX3Byb2ZpbGVfbWVudV9vcGVuIiwibG9naW5fb3BlbiIsImUiLCJ3aGljaCIsIl90b2dnbGVNZW51IiwiX2xvZ091dCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiQ29va2llcyIsInJlbW92ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIl9yZW5kZXJVc2VyUHJvZmlsZU1lbnUiLCJoZWFkZXJTdHlsZXMiLCJwcm9maWxlTWVudSIsIm1lbnVJdGVtIiwibWVudUltYWdlIiwiYWN0aXZlIiwibG9nb3V0IiwiX3JlbmRlclVzZXJNZW51SWNvbiIsImljb25PcGVuIiwiX3JlbmRlclVzZXJNZW51IiwidXNlciIsImRpc3BsYXlfbmFtZSIsInVuZGVmaW5lZCIsInVzZXJNZW51Iiwic2VhcmNoIiwiYWNjb3VudCIsIl90b2dnbGVVc2VyUHJvZmlsZU1lbnUiLCJsb2dpbiIsIl90b2dnbGVMb2dpbiIsImdldFN0YXJ0ZWQiLCJidXR0b24iLCJoZWFkZXIiLCJ0b2dnbGVkIiwibWVudVRvZ2dsZSIsImJ1cmdlciIsIm9wZW4iLCJtZW51UHJpbWFyeU1lbnVDb250YWluZXIiLCJob21lTWVudUxpbmsiLCJwcm9tb3RlIiwidGVhbSIsImJsb2ciLCJldmVudHNNZW51TGluayIsIm1vYmlsZVVzZXJNZW51V3JhcCIsIm1haW5Vc2VyTWVudVdyYXAiLCJMb2dpbk1vZGFsIiwidG9nZ2xlIiwidGFyZ2V0IiwiaGFzQXR0cmlidXRlIiwiZ292QnV0dG9uIiwianNvbiIsInVybCIsImVtYWlsRmllbGQiLCJwYXNzRmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja1ZhbGlkaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwicGFzcyIsImRpc2FibGVkIiwid29ya2luZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZmxhdCIsImluY2x1ZGVzIiwiZXJyb3IiLCJtZXNzYWdlIiwic2V0IiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsImxvZ2luTW9kYWxTdHlsZXMiLCJ3cmFwIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwiaHRtbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRXNjYXBlIiwiX2hhbmRsZUNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9yZW5kZXJNb2RhbENsYXNzIiwiY2xvc2UiLCJociIsImZvcm0iLCJfZm9yZ290UGFzc3dvcmQiLCJmb3Jnb3QiLCJzaWduaW4iLCJfcHJvY2Vzc0xvZ2luIiwic2lnbmluR292RXZlbnRzIiwiX3Byb2Nlc3NHb3ZFdmVudHNMb2dpbiIsInNlcCIsInNvY2lhbEJsb2NrIiwiZ29vZ2xlIiwic29jaWFsIiwiZmIiLCJzaWduVXAiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImNsYXNzTmFtZSIsInBhdGhuYW1lIiwiY2xvbmVFbGVtZW50IiwicHJvZmlsZVNpZGViYXJTdHlsZXMiLCJTdWJzY3JpYmUiLCJhbHQiLCJzdWJzY3JpYmVTdHlsZXMiLCJzdWJzY3JpYmUiLCJfcmVuZGVyQ2xhc3MiLCJUZWFtTW9kYWwiLCJtb2RhbF9vcGVuIiwidGVhbU1vZGFsU3R5bGVzIiwiZGVzY3JpcHRpb24iLCJmdW5fZmFjdCIsImZ1bkZhY3QiLCJfcmVuZGVyUHJvZmlsZUltYWdlIiwic3F1YXJlIiwiYXZhdGFyIiwicG9zaXRpb24iLCJzZW9fdGl0bGUiLCJfcmVuZGVyRGVzY3JpcHRpb24iLCJfcmVuZGVyRnVuRmFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwiZXJyIiwiTGluayIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJyZXNvbHZlIiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93Iiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJCbG9nIiwicmVhY2hlZF9lbmQiLCJibG9nU3R5bGVzIiwibmF2IiwicG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsIl9sb2FkTW9yZSIsIndvcmRwcmVzcyIsIldvcmRwcmVzc1NlcnZpY2UiLCJpdGVtcyIsIm9mZnNldCIsImZldGNoUG9zdHMiLCJibG9nU2VhcmNoU3VibWl0Iiwic2Nyb2xsQnkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiX2NsZWFyU2VhcmNoIiwic2VhcmNoX2ZpZWxkIiwicmVuZGVyQmxvZ0hlYWRpbmciLCJjbGVhclNlYXJjaCIsImRlY29kZUhUTUwiLCJvcGVuX2dyYXBoX3RpdGxlIiwidHdpdHRlcl90aXRsZSIsInNlb19kZXNjIiwib3Blbl9ncmFwaF9kZXNjIiwidHdpdHRlcl9kZXNjIiwib3Blbl9ncmFwaF9pbWFnZV91cmwiLCJ0d2l0dGVyX2ltYWdlX3VybCIsInBlcm1hbGluayIsInBhZ2VDb250ZW50IiwidGV4dCIsImJsb2dSb3ciLCJoZWFkaW5nIiwiSUQiLCJjYXRlZ29yaWVzIiwiZGlzcGxheV9kYXRlIiwiYXV0aG9yX25hbWUiLCJfcmVuZGVyTG9hZE1vcmVDbGFzcyIsImdldFN0YXRpY1Byb3BzIiwiZmV0Y2hQYWdlIiwiSFRNTCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiTmF2TGluayIsImFwaVVSTCIsImZldGNoV2hpdGVwYXBlcnMiLCJ0b3BpY3MiLCJ0YWdzIiwiYWdlbmNpZXMiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJzb3J0X2J5IiwidXNlcl9pZCIsIm9yZ2FuaXphdGlvbl9pZCIsIndoaXRlcGFwZXJzIiwiZmV0Y2hTYXZlZFNlYXJjaCIsImlkIiwiZmV0Y2hTYXZlZFNlYXJjaGVzIiwiYWNjZXNzX3Rva2VuIiwic2F2ZWRfc2VhcmNoZXMiLCJmZXRjaFdoaXRlcGFwZXIiLCJ3aGl0ZXBhcGVyIiwiZmV0Y2hTbGlkZXMiLCJzbGlkZXMiLCJmZXRjaFBvc3QiLCJwb3N0IiwiZmV0Y2hGb3JtYXRzIiwiZm9ybWF0cyIsImZldGNoVG9waWNzIiwiZmV0Y2hUb3BpYyIsInRvcGljIiwiZmV0Y2hUYWdzIiwiZmV0Y2hTdGF0cyIsInN0YXRzIiwiZmV0Y2hUZWFtIiwiZmV0Y2hBZ2VuY2llcyIsInBhcmVudCIsInNlYXJjaE9yZ2FuaXphdGlvbnMiLCJvcmdzIiwiZmV0Y2hPcmdhbml6YXRpb24iLCJvcmciLCJmZXRjaEZhdm9yaXRlcyIsImZldGNoT3JnYW5pemF0aW9uTWVtYmVycyIsIm1lbWJlcnMiLCJjaGVja0Zhdm9yaXRlIiwidG9rZW4iLCJyIiwiZ2V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FD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TixHQUFHLENBQUN4USxJQUFKLEVBQWhCO0FBRUEsV0FBTytkLENBQVA7QUFDQTs7QUFFRCxRQUFNQyxPQUFOLENBQWNGLEtBQWQsRUFBcUI7QUFFcEIsUUFBSSxDQUFDQSxLQUFMLEVBQWE7QUFDWixhQUFPLEtBQVA7QUFDQTs7QUFFRCxVQUFNN2QsR0FBRyxHQUFHLGtEQUFaO0FBQ0EsVUFBTUQsSUFBSSxHQUFHUyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUMzQixzQkFBZ0JvZDtBQURXLEtBQWYsQ0FBYjtBQUlBLFVBQU10TixHQUFHLEdBQUcsTUFBTXpQLHlEQUFLLENBQUNkLEdBQUQsRUFBTTtBQUM1QmUsWUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxVQUFJLEVBQUVqQixJQUZzQjtBQUc1QmtCLGFBQU8sRUFBRTtBQUNSLHdCQUFnQjtBQURSO0FBSG1CLEtBQU4sQ0FBdkI7QUFRQSxVQUFNNmMsQ0FBQyxHQUFHLE1BQU12TixHQUFHLENBQUN4USxJQUFKLEVBQWhCO0FBRUEsV0FBTytkLENBQVA7QUFDQSxHQWpQb0MsQ0FtUHJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeFBxQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p0QyxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgYmxvZ0NhcmRTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvYmxvZ2NhcmQubW9kdWxlLmNzcyc7XG5pbXBvcnQgVGVhbU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbU1vZGFsJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEJsb2dDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblxuXHR9XG5cblx0X3JlbmRlckltYWdlKCkge1xuXHRcdFx0aWYoIHRoaXMucHJvcHMuZmVhdHVyZWRfbWVkaWEgPT0gZmFsc2UgKSB7XG5cdFx0XHRcdHJldHVybiA8aW1nIHNyYz1cIi9pbWFnZXMvYmxvZy1jYXJkLmpwZ1wiIC8+O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoIHRoaXMucHJvcHMuZmVhdHVyZWRfbWVkaWEuc2l6ZXMuaGFzT3duUHJvcGVydHkoJ2Jsb2dfY2FyZCcpICkge1xuXHRcdFx0XHRcdHJldHVybiA8aW1nIHNyYz17dGhpcy5wcm9wcy5mZWF0dXJlZF9tZWRpYS5zaXplcy5ibG9nX2NhcmQuZmlsZX0gLz47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmVkX21lZGlhLmZpbGV9IC8+O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtibG9nQ2FyZFN0eWxlcy5ibG9nQmxvY2t9YH0+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCJibG9nL1twb3N0XVwiIGFzPXtgYmxvZy8ke3RoaXMucHJvcHMuc2x1Z31gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YmxvZ0NhcmRTdHlsZXMuaW1hZ2V9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Jsb2dDYXJkU3R5bGVzLmNhdGVnb3J5fT5cblx0XHRcdFx0XHRcdFx0PGE+e3RoaXMucHJvcHMuY2F0ZWdvcnlbMF0ubmFtZX08L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHt0aGlzLl9yZW5kZXJJbWFnZSgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtibG9nQ2FyZFN0eWxlcy5jb250ZW50fWB9PlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYmxvZy9bcG9zdF1cIiBhcz17YC9ibG9nLyR7dGhpcy5wcm9wcy5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtibG9nQ2FyZFN0eWxlcy5saW5rfT5cblx0XHRcdFx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxwPnt0aGlzLnByb3BzLmV4Y2VycHR9PC9wPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYmxvZy9bcG9zdF1cIiBhcz17YC9ibG9nLyR7dGhpcy5wcm9wcy5zbHVnfWB9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtibG9nQ2FyZFN0eWxlcy5tb3JlfT5MZWFybiBtb3JlIDxpbWcgY2xhc3NOYW1lPXtibG9nQ2FyZFN0eWxlcy5saW5rQXJyb3d9IHNyYz1cIi9pbWFnZXMvcmlnaHQtYXJyb3ctYmx1ZS5zdmdcIiBhbHQ9XCJcIiAvPjwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NhcmQ7XG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZvb3RlclN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvZm9vdGVyLm1vZHVsZS5jc3MnO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0X3JlbmRlckZvb3RlckNsYXNzKCkge1xuXHRcdGlmKCB0aGlzLnByb3BzLmZpeGVkICkge1xuXHRcdFx0cmV0dXJuIGAke2Zvb3RlclN0eWxlcy5mb290ZXJ9ICR7Zm9vdGVyU3R5bGVzLmZpeGVkfWBcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGAke2Zvb3RlclN0eWxlcy5mb290ZXJ9YFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8PlxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9e3RoaXMuX3JlbmRlckZvb3RlckNsYXNzKCl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbGFyZ2UtOCBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Zm9vdGVyU3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby13aGl0ZS10ZXh0LnN2Z1wiIGFsdD1cIkdvdldoaXRlUGFwZXJzIExvZ29cIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Zm9vdGVyU3R5bGVzLm5hdmlnYXRpb25XcmFwfT5cblx0XHRcdFx0XHRcdFx0PG5hdlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwiZm9vdGVyLW5hdmlnYXRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRgJHtmb290ZXJTdHlsZXMubWFpbk5hdmlnYXRpb259IGNsZWFyZml4YFxuXHRcdFx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGlkPVwiZm9vdGVyLW1lbnVcIiBjbGFzc05hbWU9e2BtZW51ICR7Zm9vdGVyU3R5bGVzLm1lbnV9IGNsZWFyZml4YH0gYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2ZpbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkZpbmQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wb3N0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5Qb3N0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcHJvbW90ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+UHJvbW90ZTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5BYm91dDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3RlYW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlRlYW08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9ibG9nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5CbG9nPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+Q29udGFjdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgbGFyZ2UtNCBjb2x1bW5zIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9e2Zvb3RlclN0eWxlcy5zb2NpYWxNZW51fT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vR292V2hpdGVQYXBlcnMvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Zm9vdGVyU3R5bGVzLmZibG9nb30gc3JjPVwiL2ltYWdlcy9mYi5zdmdcIiBhbHQ9XCJGYWNlYm9vayBMb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvZ292d2hpdGVwYXBlcnMvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Zm9vdGVyU3R5bGVzLmxpbmtlZGlufSBzcmM9XCIvaW1hZ2VzL2xpbmtlZGluLnN2Z1wiIGFsdD1cIkxpbmtlZEluIExvZ29cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0dvdldoaXRlUGFwZXJzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Zm9vdGVyU3R5bGVzLnR3aXR0ZXJ9IHNyYz1cIi9pbWFnZXMvdHdpdHRlci5zdmdcIiBhbHQ9XCJUd2l0dGVyIExvZ29cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNZW51TGluayBmcm9tICcuLi9jb21wb25lbnRzL01lbnVMaW5rJztcbmltcG9ydCBQcm9maWxlTWVudUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlTWVudUxpbmsnO1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbk1vZGFsJztcbmltcG9ydCBoZWFkZXJTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2hlYWRlci5tb2R1bGUuY3NzJztcbmltcG9ydCBXb3JkcHJlc3NTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3dvcmRwcmVzcydcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bW9iaWxlX21lbnVfb3BlbjogZmFsc2UsXG5cdFx0XHR1c2VyX3Byb2ZpbGVfbWVudV9vcGVuOiBmYWxzZSxcblx0XHRcdGxvZ2luX29wZW46IGZhbHNlLFxuXHRcdFx0Ly9kaXNwbGF5X25hbWU6ICcnXG5cdFx0fTtcblx0fVxuXG5cdC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG5cdC8vIFx0Y29uc3Qgd29yZHByZXNzID0gbmV3IFdvcmRwcmVzc1NlcnZpY2Vcblx0Ly8gXHRjb25zdCBwb3N0ID0gYXdhaXQgd29yZHByZXNzLmZldGNoUG9zdChjdHgucXVlcnkucG9zdCk7XG5cdC8vXG5cdC8vIFx0Y29uc3QgdXNlciA9IHdvcmRwcmVzcy5nZXRVc2VyKCk7XG5cdC8vIFx0cmV0dXJuIHdvcmRwcmVzcy5wYWdlUHJvcHMoJ3Rlc3QnLCBwb3N0KVxuXHQvLyB9XG5cblx0Ly8gYXN5bmMgX2ZldGNoVG9rZW4oKSB7XG5cdC8vIFx0Y29uc3QgdG9rZW4gPSBhd2FpdCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcblx0Ly8gXHRyZXR1cm4gdG9rZW47XG5cdC8vIH1cblxuXHQvLyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0Ly8gXHRjb25zdCB7YWNjZXNzX3Rva2VufSA9IHRoaXMucHJvcHM7XG5cdC8vIFx0Y29uc3Qgd29yZHByZXNzID0gbmV3IFdvcmRwcmVzc1NlcnZpY2Vcblx0Ly8gXHRjb25zdCB1c2VyID0gYXdhaXQgd29yZHByZXNzLmdldFVzZXIoYWNjZXNzX3Rva2VuKTtcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG5cdC8vIFx0XHRkaXNwbGF5X25hbWU6IHVzZXIuZmlyc3RfbmFtZSArICcgJyArIHVzZXIubGFzdF9uYW1lXG5cdC8vIFx0fSkpO1xuXHQvLyB9XG5cblx0X2xvZ091dCgpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKGUpIHtcblx0XHRcdENvb2tpZXMucmVtb3ZlKCd1c2VyJyk7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHR9LCA3NTAgKTtcblx0fVxuXG5cdF90b2dnbGVNZW51ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcblx0XHRcdG1vYmlsZV9tZW51X29wZW46ICFzdGF0ZS5tb2JpbGVfbWVudV9vcGVuXG5cdFx0fSkpO1xuXHR9O1xuXG5cdF90b2dnbGVVc2VyUHJvZmlsZU1lbnUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuXHRcdFx0dXNlcl9wcm9maWxlX21lbnVfb3BlbjogIXN0YXRlLnVzZXJfcHJvZmlsZV9tZW51X29wZW5cblx0XHR9KSk7XG5cdH07XG5cblx0X3RvZ2dsZUxvZ2luID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcblx0XHRcdGxvZ2luX29wZW46ICFzdGF0ZS5sb2dpbl9vcGVuXG5cdFx0fSkpO1xuXHR9O1xuXG5cdF9oYW5kbGVFc2NhcGUgPSAoZSkgPT4ge1xuXHRcdGlmIChlLndoaWNoID09IDI3KSB7XG5cdFx0XHR0aGlzLl90b2dnbGVNZW51KCk7XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlclVzZXJQcm9maWxlTWVudSgpIHtcblx0XHRpZiggdGhpcy5zdGF0ZS51c2VyX3Byb2ZpbGVfbWVudV9vcGVuID09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PHVsIGlkPVwiaGVhZGVyLXByb2ZpbGUtbWVudVwiIGNsYXNzTmFtZT17YHZlcnRpY2FsIG1lbnUgJHtoZWFkZXJTdHlsZXMubWVudX0gJHtoZWFkZXJTdHlsZXMucHJvZmlsZU1lbnV9IGNsZWFyZml4YH0+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1wcm9maWxlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1wcm9maWxlLWFjdGl2ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkRhc2hib2FyZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9Qcm9maWxlTWVudUxpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUl0ZW19PlxuXHRcdFx0XHRcdFx0PFByb2ZpbGVNZW51TGluayBocmVmPVwiL3Byb21vdGVcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1tZW51LXVwZ3JhZGUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWB9IHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1tZW51LXVwZ3JhZGUtYWN0aXZlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+UHJvbW90ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9Qcm9maWxlTWVudUxpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUl0ZW19PlxuXHRcdFx0XHRcdFx0PFByb2ZpbGVNZW51TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1tZW51LWNvbnRhY3Quc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWB9IHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1tZW51LWNvbnRhY3QtYWN0aXZlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+Q29udGFjdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9Qcm9maWxlTWVudUxpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUl0ZW19PlxuXHRcdFx0XHRcdFx0PFByb2ZpbGVNZW51TGluayBocmVmPVwiL3NldHRpbmdzXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtc2V0dGluZ3Muc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1zZXR0aW5ncy1hY3RpdmUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TZXR0aW5nczwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9Qcm9maWxlTWVudUxpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudUl0ZW19ICR7aGVhZGVyU3R5bGVzLmxvZ291dH1gfT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX2xvZ091dH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9sb2ctb3V0LXByb2ZpbGUtbWVudS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5Mb2cgT3V0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0PC91bD5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdC8vIGNvbnN0IHt1c2VyX3Byb2ZpbGVfbWVudV9vcGVufSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly8gaWYoIHVzZXJfcHJvZmlsZV9tZW51X29wZW4gPT0gdHJ1ZSkge1xuXHRcdC8vIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2sgKTtcblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2sgKTtcblx0XHQvLyB9XG5cdH1cblxuXHRfaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjbGljaycpO1xuXHRcdC8vIHRoaXMuX3RvZ2dsZVVzZXJQcm9maWxlTWVudSgpO1xuXHR9XG5cblx0X3JlbmRlclVzZXJNZW51SWNvbigpIHtcblx0XHRpZiggdGhpcy5zdGF0ZS51c2VyX3Byb2ZpbGVfbWVudV9vcGVuID09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuIDxpbWcgc3JjPVwiL2ltYWdlcy9hY2NvdW50LWFycm93LnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLmljb25PcGVufSBzcmM9XCIvaW1hZ2VzL2FjY291bnQtYXJyb3cuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyVXNlck1lbnUoKSB7XG5cdFx0Y29uc3Qge3VzZXJ9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBkaXNwbGF5X25hbWUgPSB0aGlzLnByb3BzLmRpc3BsYXlfbmFtZTtcblx0XHRpZiggdXNlciAhPT0gZmFsc2UgJiYgdXNlciAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMudXNlck1lbnV9IGNsZWFyZml4YH0gYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YG1lbnUtaXRlbSAke2hlYWRlclN0eWxlcy5zZWFyY2h9YH0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2ZpbmRcIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5zZWFyY2h9IHNyYz1cIi9pbWFnZXMvc2VhcmNoLnN2Z1wiIGFsdD1cIkdvdldoaXRlUGFwZXJzIFNlYXJjaFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2Bqcy1hY2NvdW50LW1lbnUgbWVudS1pdGVtICR7aGVhZGVyU3R5bGVzLmFjY291bnR9YH0+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl90b2dnbGVVc2VyUHJvZmlsZU1lbnV9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtkaXNwbGF5X25hbWV9IHt0aGlzLl9yZW5kZXJVc2VyTWVudUljb24oKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdHt0aGlzLl9yZW5kZXJVc2VyUHJvZmlsZU1lbnUoKX1cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PD5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLnVzZXJNZW51fSBjbGVhcmZpeGB9IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuc2VhcmNofWB9PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9maW5kXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMuc2VhcmNofSBzcmM9XCIvaW1hZ2VzL3NlYXJjaC5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBTZWFyY2hcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtganMtYWNjb3VudC1tZW51IG1lbnUtaXRlbSAke2hlYWRlclN0eWxlcy5sb2dpbn1gfT5cblx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUxvZ2lufSBjbGFzc05hbWU9e2Bqcy1sb2dpbiAke2hlYWRlclN0eWxlcy5sb2dpbn1gfT5Mb2dpbjwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuZ2V0U3RhcnRlZH1gfT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtgYnV0dG9uICR7aGVhZGVyU3R5bGVzLmJ1dHRvbn1gfT5HZXQgc3RhcnRlZDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLmhlYWRlcn0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC05IG1lZGl1bS0xMCBsYXJnZS04IGNvbHVtbnNcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubG9nb30gc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cIkdvdldoaXRlUGFwZXJzIExvZ29cIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm5hdmlnYXRpb25XcmFwfT5cblx0XHRcdFx0XHRcdFx0PG5hdlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwic2l0ZS1uYXZpZ2F0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5tb2JpbGVfbWVudV9vcGVuID09IHRydWUgPyBgJHtoZWFkZXJTdHlsZXMubWFpbk5hdmlnYXRpb259IGNsZWFyZml4ICR7aGVhZGVyU3R5bGVzLnRvZ2dsZWR9YCA6IGAke2hlYWRlclN0eWxlcy5tYWluTmF2aWdhdGlvbn0gY2xlYXJmaXhgXG5cdFx0XHRcdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVUb2dnbGV9IGFyaWEtY29udHJvbHM9XCJwcmltYXJ5LW1lbnVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNjcmVlbi1yZWFkZXItdGV4dFwiPlRvZ2dsZSBNb2JpbGUgTWVudTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJidXJnZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubW9iaWxlX21lbnVfb3BlbiA9PSB0cnVlID8gYCR7aGVhZGVyU3R5bGVzLmJ1cmdlcn0gJHtoZWFkZXJTdHlsZXMub3Blbn1gIDogYCR7aGVhZGVyU3R5bGVzLmJ1cmdlcn1gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudVByaW1hcnlNZW51Q29udGFpbmVyfSBjbGVhcmZpeGB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGlkPVwicHJpbWFyeS1tZW51XCIgY2xhc3NOYW1lPXtgbWVudSAke2hlYWRlclN0eWxlcy5tZW51fSBjbGVhcmZpeGB9IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YG1lbnUtaXRlbSAke2hlYWRlclN0eWxlcy5ob21lTWVudUxpbmt9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1ob21lLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIb21lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL2ZpbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9tZW51LWZpbmQucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0RmluZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9wb3N0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1wb3N0LnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBvc3Rcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVMaW5rIGhyZWY9XCIvcHJvbW90ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudUltYWdlfSAke2hlYWRlclN0eWxlcy5wcm9tb3RlfWB9IHNyYz1cIi9pbWFnZXMvbWVudS1wcm9tb3RlLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFByb21vdGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVMaW5rIGhyZWY9XCIvYWJvdXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9tZW51LWFib3V0LnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFib3V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL3RlYW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gJHtoZWFkZXJTdHlsZXMudGVhbX1gfSBzcmM9XCIvaW1hZ2VzL21lbnUtdGVhbS5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUZWFtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL2Jsb2dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gJHtoZWFkZXJTdHlsZXMuYmxvZ31gfSBzcmM9XCIvaW1hZ2VzL21lbnUtYmxvZy5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRCbG9nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YG1lbnUtaXRlbSAke2hlYWRlclN0eWxlcy5ldmVudHNNZW51TGlua31gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9nb3ZldmVudHMuY29tXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9tZW51LWV2ZW50cy5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0R28gdG8gR292RXZlbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubW9iaWxlVXNlck1lbnVXcmFwfSBjbGVhcmZpeGB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5fcmVuZGVyVXNlck1lbnUoKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0zIG1lZGl1bS0yIGxhcmdlLTQgY29sdW1ucyB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tYWluVXNlck1lbnVXcmFwfSBjbGVhcmZpeGB9PlxuXHRcdFx0XHRcdFx0e3RoaXMuX3JlbmRlclVzZXJNZW51KCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8TG9naW5Nb2RhbFxuXHRcdFx0XHRcdG9wZW49e3RoaXMuc3RhdGUubG9naW5fb3Blbn1cblx0XHRcdFx0XHR0b2dnbGU9eygpID0+IHRoaXMuX3RvZ2dsZUxvZ2luKCl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgaWQ9XCJpZS1raWxsYVwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBMb2dvXCIgLz5cblx0XHRcdFx0PGgzPlNvcnJ5LCB5b3VyIGJyb3dzZXIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIGFwcGxpY2F0aW9uLiBQbGVhc2UgdXNlIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiBHb29nbGUgQ2hyb21lL0Nocm9taXVtLCBNb3ppbGxhIEZpcmVmb3ggb3IgU2FmYXJpLjwvaDM+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgbG9naW5Nb2RhbFN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9sb2dpbm1vZGFsLm1vZHVsZS5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuY2xhc3MgTG9naW5Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdHBhc3M6ICcnLFxuXHRcdFx0ZXJyb3I6ICcnLFxuXHRcdFx0d29ya2luZzogZmFsc2UsXG5cdFx0fVxuXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG5cdFx0bGV0IG5hbWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRbbmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHR9XG5cblx0X2hhbmRsZUVzY2FwZSA9IChlKSA9PiB7XG5cdFx0aWYgKGUud2hpY2ggPT0gMjcpIHtcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2hhbmRsZUNsaWNrID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYoIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbG9zZS1tb2RhbCcpICkge1xuXHRcdFx0dGhpcy5wcm9wcy50b2dnbGUoKTtcblx0XHR9XG5cdH1cblxuXHRfZm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XG5cdFx0dGhpcy5wcm9wcy50b2dnbGUoKTtcblx0fVxuXG5cdF9wcm9jZXNzTG9naW4gPSAoKSA9PiB7XG5cdFx0bGV0IGJ1dHRvbixcblx0XHRcdFx0Z292QnV0dG9uLFxuXHRcdFx0XHRqc29uLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdGxvZ2luLFxuXHRcdFx0XHRlbWFpbEZpZWxkLFxuXHRcdFx0XHRwYXNzRmllbGQ7XG5cblx0XHRlbWFpbEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG5cdFx0cGFzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBhc3NcIl0nKTtcblx0XHRpZiAoIWVtYWlsRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XG5cdFx0XHRlbWFpbEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW1haWxGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwYXNzRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XG5cdFx0XHRwYXNzRmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXNzRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuXHRcdH1cblxuXHRcdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbicpO1xuXHRcdGdvdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbi1nb3ZldmVudHMnKTtcblx0XHRsb2dpbiA9IHRoaXM7XG5cdFx0dXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvbWFudWFsLXVzZXItbG9naW4nO1xuXHRcdGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImVtYWlsXCI6IHRoaXMuc3RhdGUuZW1haWwsXG5cdFx0XHRcInBhc3NcIjogdGhpcy5zdGF0ZS5wYXNzLFxuXHRcdH0pO1xuXG5cdFx0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRnb3ZCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0bG9naW4uc2V0U3RhdGUoe1xuXHRcdFx0d29ya2luZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0ZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0fSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRnb3ZCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0bGV0IGZsYXQgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuXHRcdFx0XHRpZiggZmxhdC5pbmNsdWRlcygnZXJyb3InKSApIHtcblx0XHRcdFx0XHRsb2dpbi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRlcnJvcjogZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0d29ya2luZzogZmFsc2Vcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdENvb2tpZXMuc2V0KCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG5cdFx0XHRcdGxvZ2luLnNldFN0YXRlKFxuXHRcdFx0XHRcdCgpID0+ICh7XG5cdFx0XHRcdFx0XHRlcnJvcjogJycsXG5cdFx0XHRcdFx0XHR3b3JraW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdFx0XHRcdHBhc3M6ICcnXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9naW4ucHJvcHMudG9nZ2xlKCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgMTAwMCApO1xuXHRcdH0pO1xuXHR9XG5cblx0X3Byb2Nlc3NHb3ZFdmVudHNMb2dpbiA9ICgpID0+IHtcblx0XHRsZXQgYnV0dG9uLFxuXHRcdFx0XHRnb3ZCdXR0b24sXG5cdFx0XHRcdGpzb24sXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0bG9naW4sXG5cdFx0XHRcdGVtYWlsRmllbGQsXG5cdFx0XHRcdHBhc3NGaWVsZDtcblxuXHRcdGVtYWlsRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcblx0XHRwYXNzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGFzc1wiXScpO1xuXHRcdGlmICghZW1haWxGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcblx0XHRcdGVtYWlsRmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbWFpbEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcblx0XHR9XG5cblx0XHRpZiAoIXBhc3NGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcblx0XHRcdHBhc3NGaWVsZC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhc3NGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG5cdFx0fVxuXG5cdFx0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxvZ2luJyk7XG5cdFx0Z292QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxvZ2luLWdvdmV2ZW50cycpO1xuXHRcdGxvZ2luID0gdGhpcztcblx0XHR1cmwgPSAnaHR0cHM6Ly9nd3BhZG1pbi5jb2Rld3JhbmdsZXIuaW8vYXBpL2d3cC92MS9nb3ZldmVudHMtdXNlci1sb2dpbic7XG5cdFx0anNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiZW1haWxcIjogdGhpcy5zdGF0ZS5lbWFpbCxcblx0XHRcdFwicGFzc1wiOiB0aGlzLnN0YXRlLnBhc3MsXG5cdFx0fSk7XG5cblx0XHRidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGdvdkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0bG9naW4uc2V0U3RhdGUoe1xuXHRcdFx0d29ya2luZzogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0ZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0fSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0YnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdGdvdkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgZmxhdCA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG5cdFx0XHRcdGlmKCBmbGF0LmluY2x1ZGVzKCdlcnJvcicpICkge1xuXHRcdFx0XHRcdGxvZ2luLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGVycm9yOiBkYXRhLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHR3b3JraW5nOiBmYWxzZVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Q29va2llcy5zZXQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cblx0XHRcdFx0bG9naW4uc2V0U3RhdGUoXG5cdFx0XHRcdFx0KCkgPT4gKHtcblx0XHRcdFx0XHRcdGVycm9yOiAnJyxcblx0XHRcdFx0XHRcdHdvcmtpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0ZW1haWw6ICcnLFxuXHRcdFx0XHRcdFx0cGFzczogJydcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2dpbi5wcm9wcy50b2dnbGUoKTtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9LCAxMDAwICk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cdFx0Y29uc3Qge29wZW59ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7d29ya2luZ30gPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuXHRcdGlmKCBvcGVuICkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NhcGUgKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1tb2RhbCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY2FwZSApO1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2sgKTtcblx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1vZGFsJyk7XG5cdFx0fVxuXG5cdFx0aWYoIHdvcmtpbmcgKSB7XG5cdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ3dvcmtpbmcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCd3b3JraW5nJyk7XG5cdFx0fVxuXG5cdH1cblxuXHRfcmVuZGVyTW9kYWxDbGFzcyA9ICgpID0+IHtcblx0XHRjb25zdCB7b3Blbn0gPSB0aGlzLnByb3BzO1xuXHRcdGlmKCBvcGVuICkge1xuXHRcdFx0cmV0dXJuIGAke2xvZ2luTW9kYWxTdHlsZXMud3JhcH0gJHtsb2dpbk1vZGFsU3R5bGVzLm9wZW59YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGAke2xvZ2luTW9kYWxTdHlsZXMud3JhcH1gXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtlbWFpbCxwYXNzLGVycm9yfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLl9yZW5kZXJNb2RhbENsYXNzKCl9PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5oZWFkZXJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC02IGNvbHVtbnNcIj5cblx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC02IGNvbHVtbnMgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuY2xvc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9jbG9zZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtsb2dpbk1vZGFsU3R5bGVzLmxvZ2lufWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnNcIj5cblx0XHRcdFx0XHRcdFx0PGgyPldlbGNvbWU8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5ocn0gc3JjPVwiL2ltYWdlcy9zZXAuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PHA+U2lnbiBpbiB0byBhY2Nlc3MgR292V2hpdGVQYXBlcnMuPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7bG9naW5Nb2RhbFN0eWxlcy5mb3JtfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWwgQWRkcmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIiByZXF1aXJlZCAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5QYXNzd29yZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N9IHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5lcnJvcn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnt0aGlzLnN0YXRlLmVycm9yfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9wYXNzd29yZC1yZXNldFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLl9mb3Jnb3RQYXNzd29yZH0gY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmZvcmdvdH0+Rm9yZ290IHBhc3N3b3JkPzwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtsb2dpbk1vZGFsU3R5bGVzLnNpZ25pbn1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2xpY2s9e3RoaXMuX3Byb2Nlc3NMb2dpbn0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImpzLWxvZ2luIGJ1dHRvblwiIHZhbHVlPVwiTG9nIEluXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtsb2dpbk1vZGFsU3R5bGVzLnNpZ25pbkdvdkV2ZW50c31gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9wcm9jZXNzR292RXZlbnRzTG9naW59IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJqcy1sb2dpbi1nb3ZldmVudHMgYnV0dG9uXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2dvdmV2ZW50cy1sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+IDxzcGFuPkxvZyBJbiB3aXRoIEdvdkV2ZW50czwvc3Bhbj48L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zZXB9YH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnMgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2NvbnRpbnVlLXdpdGgucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtsb2dpbk1vZGFsU3R5bGVzLnNvY2lhbEJsb2NrfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5nb29nbGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGRhdGEtY2xvc2UtbW9kYWwgY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLnNvY2lhbH0gc3JjPVwiL2ltYWdlcy9sb2dpbi1nb29nbGUucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGRhdGEtY2xvc2UtbW9kYWwgY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmZifT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5zb2NpYWx9IHNyYz1cIi9pbWFnZXMvbG9naW4tZmIucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGRhdGEtY2xvc2UtbW9kYWwgY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmxpbmtlZGlufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5zb2NpYWx9IHNyYz1cIi9pbWFnZXMvbG9naW4tbGlua2VkaW4ucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyAke2xvZ2luTW9kYWxTdHlsZXMuc2lnblVwfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBkYXRhLWNsb3NlLW1vZGFsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBkYXRhLWNsb3NlLW1vZGFsPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L3NwYW4+IFNpZ24gVXAgPGltZyBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMubGlua0Fycm93fSBkYXRhLWNsb3NlLW1vZGFsIHNyYz1cIi9pbWFnZXMvcmlnaHQtYXJyb3ctYmx1ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Nb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGhlYWRlclN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvaGVhZGVyLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0bGV0IGNsYXNzTmFtZSA9IGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJ1xuXHRpZiAocm91dGVyLnBhdGhuYW1lID09PSBocmVmKSB7XG5cdFx0Y2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YFxuXHR9IGVsc2UgaWYgKCByb3V0ZXIucGF0aG5hbWUgPT0gJy9ibG9nL1twb3N0XScgJiYgaHJlZiA9PSAnL2Jsb2cnICkge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fSBlbHNlIGlmICggcm91dGVyLnBhdGhuYW1lID09ICcvd2hpdGVwYXBlcnMvW3doaXRlcGFwZXJdJyAmJiBocmVmID09ICcvZmluZCcgKSB7XG5cdFx0Y2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YFxuXHR9IGVsc2UgaWYgKCByb3V0ZXIucGF0aG5hbWUgPT0gJy90b3BpYy9bdG9waWNdJyAmJiBocmVmID09ICcvZmluZCcgKSB7XG5cdFx0Y2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YFxuXHR9XG5cblx0cmV0dXJuIDxMaW5rIGhyZWY9e2hyZWZ9PntSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgY2xhc3NOYW1lIH0pfTwvTGluaz5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHByb2ZpbGVTaWRlYmFyU3R5bGVzIGZyb20gJy4uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2ZpbGVzaWRlYmFyLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0bGV0IGNsYXNzTmFtZSA9IGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJ1xuXHRpZiAocm91dGVyLnBhdGhuYW1lID09PSBocmVmKSB7XG5cdFx0Y2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke3Byb2ZpbGVTaWRlYmFyU3R5bGVzLmFjdGl2ZX1gXG5cdH1cblxuXHRyZXR1cm4gPExpbmsgaHJlZj17aHJlZn0+e1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgeyBjbGFzc05hbWUgfSl9PC9MaW5rPlxufVxuIiwiaW1wb3J0IHN1YnNjcmliZVN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9zdWJzY3JpYmUubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBTdWJzY3JpYmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0X3JlbmRlckNsYXNzID0gKCkgPT4ge1xuXHRcdGlmKCB0aGlzLnByb3BzLmFsdCA9PSAndHJ1ZScgKSB7XG5cdFx0XHRyZXR1cm4gYCR7c3Vic2NyaWJlU3R5bGVzLnN1YnNjcmliZX0gJHtzdWJzY3JpYmVTdHlsZXMuYWx0fWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBgJHtzdWJzY3JpYmVTdHlsZXMuc3Vic2NyaWJlfWBcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLl9yZW5kZXJDbGFzcygpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnMgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxoMj5TdWJzY3JpYmU8L2gyPlxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e3N1YnNjcmliZVN0eWxlcy5ocn0gc3JjPVwiL2ltYWdlcy9zZXAuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdDxwPlNpZ24gdXAgdG8gcmVjZWl2ZSB0aGUgR292V2hpdGVQYXBlcnMgbmV3c2xldHRlciwgZmVhdHVyaW5nIG91ciBmcmVzaGVzdCBjb250ZW50IHJlbGV2YW50IHRvIGRpc2N1c3Npb25zIGhhcHBlbmluZyBpbiB0aGUgZ292ZXJubWVudCBjb21tdW5pdHkuPC9wPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9uZXdzbGV0dGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17YGJ1dHRvbiAke3N1YnNjcmliZVN0eWxlcy5idXR0b259YH0+U2lnbiBVcDwvYT5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuIiwiaW1wb3J0IHRlYW1Nb2RhbFN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy90ZWFtbW9kYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtkZWNvZGVIVE1MfSBmcm9tICdlbnRpdGllcydcbmltcG9ydCB7SFRNTH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbCdcblxuY2xhc3MgVGVhbU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdF9oYW5kbGVFc2NhcGUgPSAoZSkgPT4ge1xuXHRcdGlmIChlLndoaWNoID09IDI3KSB7XG5cdFx0XHR0aGlzLnByb3BzLnRvZ2dsZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9oYW5kbGVDbGljayA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKCBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtbW9kYWwnKSApIHtcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdC8vIGNvbnN0IHttb2RhbF9vcGVufSA9IHRoaXMucHJvcHM7XG5cdFx0Ly8gbGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5cdFx0Ly8gaWYoIG1vZGFsX29wZW4gKSB7XG5cdFx0Ly8gXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY2FwZSApO1xuXHRcdC8vIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2sgKTtcblx0XHQvLyBcdGh0bWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW1vZGFsJyk7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjYXBlICk7XG5cdFx0Ly8gXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbGljayApO1xuXHRcdC8vIFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbW9kYWwnKTtcblx0XHQvLyB9XG5cblx0fVxuXG5cdF9yZW5kZXJNb2RhbENsYXNzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHttb2RhbF9vcGVufSA9IHRoaXMucHJvcHM7XG5cdFx0aWYoIG1vZGFsX29wZW4gKSB7XG5cdFx0XHRyZXR1cm4gYCR7dGVhbU1vZGFsU3R5bGVzLndyYXB9ICR7dGVhbU1vZGFsU3R5bGVzLm9wZW59YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGAke3RlYW1Nb2RhbFN0eWxlcy53cmFwfWBcblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyUHJvZmlsZUltYWdlKCkge1xuXHRcdGlmKCB0aGlzLnByb3BzLmZlYXR1cmVkX21lZGlhICE9PSBmYWxzZSApIHtcblx0XHRcdGlmKCB0aGlzLnByb3BzLmZlYXR1cmVkX21lZGlhLnNpemVzLmhhc093blByb3BlcnR5KCdzcXVhcmUnKSApIHtcblx0XHRcdFx0cmV0dXJuIDxpbWcgc3JjPXt0aGlzLnByb3BzLmZlYXR1cmVkX21lZGlhLnNpemVzLnNxdWFyZS5maWxlfSBjbGFzc05hbWU9e3RlYW1Nb2RhbFN0eWxlcy5hdmF0YXJ9IGFsdD1cIlwiIC8+XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gPGltZyBzcmM9e3RoaXMucHJvcHMuZmVhdHVyZWRfbWVkaWEuZmlsZX0gY2xhc3NOYW1lPXt0ZWFtTW9kYWxTdHlsZXMuYXZhdGFyfSBhbHQ9XCJcIiAvPlxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gPGltZyBzcmM9XCIvaW1hZ2VzL3RlYW0tZGVmYXVsdC5qcGdcIiBjbGFzc05hbWU9e3RlYW1Nb2RhbFN0eWxlcy5hdmF0YXJ9IGFsdD1cIlwiIC8+O1xuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXJEZXNjcmlwdGlvbiA9ICgpID0+IHtcblx0XHRpZiggdGhpcy5wcm9wcy5kZXNjcmlwdGlvbiApIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RlYW1Nb2RhbFN0eWxlcy5kZXNjcmlwdGlvbn0+XG5cdFx0XHRcdDxoND5NeSB0ZWFtIGRlc2NyaWJlcyBtZSBhcy4uLjwvaDQ+XG5cdFx0XHRcdDxIVE1MIGh0bWw9e3RoaXMucHJvcHMuZGVzY3JpcHRpb259Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyRnVuRmFjdCA9ICgpID0+IHtcblx0XHRpZiggdGhpcy5wcm9wcy5mdW5fZmFjdCApIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RlYW1Nb2RhbFN0eWxlcy5mdW5GYWN0fT5cblx0XHRcdFx0PGg0PkZ1biBGYWN0PC9oND5cblx0XHRcdFx0PEhUTUwgaHRtbD17dGhpcy5wcm9wcy5mdW5fZmFjdH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5fcmVuZGVyTW9kYWxDbGFzcygpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BjbGVhcmZpeCAke3RlYW1Nb2RhbFN0eWxlcy5oZWFkZXJ9YH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXt0ZWFtTW9kYWxTdHlsZXMuY2xvc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9jbG9zZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BjbGVhcmZpeCAke3RlYW1Nb2RhbFN0eWxlcy5ib2R5fWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLl9yZW5kZXJQcm9maWxlSW1hZ2UoKX1cblx0XHRcdFx0XHRcdFx0PGg2Pnt0aGlzLnByb3BzLnBvc2l0aW9ufTwvaDY+XG5cdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5wcm9wcy5zZW9fdGl0bGV9PC9oMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiaW9cIj5cblx0XHRcdFx0XHRcdFx0XHQ8SFRNTCBodG1sPXt0aGlzLnByb3BzLmNvbnRlbnR9Lz5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5fcmVuZGVyRGVzY3JpcHRpb24oKX1cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5fcmVuZGVyRnVuRmFjdCgpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1Nb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtkZWNvZGVIVE1MfSBmcm9tICdlbnRpdGllcydcbmltcG9ydCBXb3JkcHJlc3NTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL3dvcmRwcmVzcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgU3Vic2NyaWJlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlJztcbmltcG9ydCBCbG9nQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jsb2dDYXJkJztcbmltcG9ydCBibG9nU3R5bGVzIGZyb20gJy4uLy4uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9ibG9nLm1vZHVsZS5jc3MnO1xuXG5jbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9zdHM6IFtdLFxuXHRcdFx0c2VhcmNoOiAnJyxcblx0XHRcdHJlYWNoZWRfZW5kOiBmYWxzZSxcblx0XHRcdHdvcmtpbmc6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuXHRcdFx0cG9zdHM6IHRoaXMucHJvcHMucG9zdHNcblx0XHR9KSk7XG5cblx0XHRjb25zdCB7dXNlcn0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHtwYWdlfSA9IHRoaXMucHJvcHM7XG5cblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRjb25zdCB7d29ya2luZ30gPSB0aGlzLnN0YXRlO1xuXHRcdGxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuXG5cdFx0aWYoIHdvcmtpbmcgKSB7XG5cdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ3dvcmtpbmcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCd3b3JraW5nJyk7XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlckxvYWRNb3JlQ2xhc3MgPSAoKSA9PiB7XG5cdFx0aWYoIHRoaXMuc3RhdGUucmVhY2hlZF9lbmQgPT0gdHJ1ZSApIHtcblx0XHRcdHJldHVybiBgJHtibG9nU3R5bGVzLm5hdn0gaGlkZWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBgJHtibG9nU3R5bGVzLm5hdn1gXG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgX2xvYWRNb3JlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0d29ya2luZzogdHJ1ZVxuXHRcdH0pO1xuXHRcdGNvbnN0IHdvcmRwcmVzcyA9IG5ldyBXb3JkcHJlc3NTZXJ2aWNlXG5cdFx0bGV0IGl0ZW1zID0gOTtcblx0XHRsZXQgb2Zmc2V0ID0gdGhpcy5zdGF0ZS5wb3N0cy5sZW5ndGg7XG5cdFx0Y29uc3QgcG9zdHMgPSBhd2FpdCB3b3JkcHJlc3MuZmV0Y2hQb3N0cyhpdGVtcyxvZmZzZXQpO1xuXHRcdGlmKCBwb3N0cy5sZW5ndGggPCBpdGVtcyApIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZWFjaGVkX2VuZDogdHJ1ZSxcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwb3N0czogWy4uLnRoaXMuc3RhdGUucG9zdHMsIC4uLnBvc3RzXSxcblx0XHRcdHdvcmtpbmc6IGZhbHNlXG5cdFx0fSlcblxuXHR9XG5cblx0YXN5bmMgYmxvZ1NlYXJjaFN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHdpbmRvdy5zY3JvbGxCeSgwLCAzMDApO1xuXHRcdC8vIHZhciByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlc3VsdHMnKTtcblx0XHQvLyAvL3Jlc3VsdHMuc2Nyb2xsVG9wIC09IDgwMDtcblx0XHQvLyByZXN1bHRzLnNjcm9sbEludG9WaWV3KHtcblx0XHQvLyBcdGJlaGF2aW9yOiBcInNtb290aFwiLFxuXHRcdC8vIFx0YmxvY2s6IFwiZW5kXCIsXG5cdFx0Ly8gXHRpbmxpbmU6IFwibmVhcmVzdFwiXG5cdFx0Ly8gfSk7XG5cblx0XHRjb25zdCB3b3JkcHJlc3MgPSBuZXcgV29yZHByZXNzU2VydmljZVxuXHRcdGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG5cdFx0bGV0IHNlYXJjaCA9IGZvcm1EYXRhLmdldCgnc2VhcmNoX2ZpZWxkJyk7XG5cblx0XHRpZiggc2VhcmNoLmxlbmd0aCA8IDEgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR3b3JraW5nOiB0cnVlLFxuXHRcdFx0c2VhcmNoOiBzZWFyY2hcblx0XHR9KTtcblxuXHRcdGxldCBpdGVtcyA9IDEwMDtcblx0XHRsZXQgb2Zmc2V0ID0gMDtcblxuXHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgd29yZHByZXNzLmZldGNoUG9zdHMoaXRlbXMsb2Zmc2V0LHNlYXJjaCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwb3N0czogcG9zdHMsXG5cdFx0XHR3b3JraW5nOiBmYWxzZSxcblx0XHRcdHJlYWNoZWRfZW5kOiB0cnVlLFxuXHRcdH0pXG5cdH1cblxuXHRhc3luYyBfY2xlYXJTZWFyY2goKSB7XG5cdFx0bGV0IHNlYXJjaF9maWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzZWFyY2hfZmllbGRcIl0nKTtcblx0XHRzZWFyY2hfZmllbGQudmFsdWUgPSAnJztcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHdvcmtpbmc6IHRydWVcblx0XHR9KTtcblx0XHRjb25zdCB3b3JkcHJlc3MgPSBuZXcgV29yZHByZXNzU2VydmljZVxuXHRcdGxldCBpdGVtcyA9IDk7XG5cdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0Y29uc3QgcG9zdHMgPSBhd2FpdCB3b3JkcHJlc3MuZmV0Y2hQb3N0cyhpdGVtcyxvZmZzZXQpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwb3N0czogcG9zdHMsXG5cdFx0XHRzZWFyY2g6IGZhbHNlLFxuXHRcdFx0d29ya2luZzogZmFsc2UsXG5cdFx0XHRyZWFjaGVkX2VuZDogZmFsc2Vcblx0XHR9KVxuXG5cdH1cblxuXHRyZW5kZXJCbG9nSGVhZGluZygpIHtcblx0XHRpZiggdGhpcy5zdGF0ZS5zZWFyY2ggPT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm4gPGgyPkFydGljbGVzPC9oMj47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8aDI+U2VhcmNoIHJlc3VsdHMgZm9yOiB7dGhpcy5zdGF0ZS5zZWFyY2h9IDxzcGFuIG9uQ2xpY2s9eygpID0+IHsgdGhpcy5fY2xlYXJTZWFyY2goMSkgfX0gY2xhc3NOYW1lPXtibG9nU3R5bGVzLmNsZWFyU2VhcmNofT5jbGVhciBzZWFyY2g8L3NwYW4+PC9oMj5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Bvc3RzfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qge3VzZXJ9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7cGFnZX0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGRpc3BsYXlfbmFtZSA9IHRoaXMucHJvcHMuZGlzcGxheV9uYW1lO1xuXG5cdFx0Y29uc3Qgc2VvX3RpdGxlID0gZGVjb2RlSFRNTChwYWdlLnNlb190aXRsZSk7XG5cdFx0Y29uc3Qgb3Blbl9ncmFwaF90aXRsZSA9IGRlY29kZUhUTUwocGFnZS5vcGVuX2dyYXBoX3RpdGxlKTtcblx0XHRjb25zdCB0d2l0dGVyX3RpdGxlID0gZGVjb2RlSFRNTChwYWdlLnR3aXR0ZXJfdGl0bGUpO1xuXG5cdFx0Y29uc3Qgc2VvX2Rlc2MgPSBkZWNvZGVIVE1MKHBhZ2Uuc2VvX2Rlc2MpO1xuXHRcdGNvbnN0IG9wZW5fZ3JhcGhfZGVzYyA9IGRlY29kZUhUTUwocGFnZS5vcGVuX2dyYXBoX2Rlc2MpO1xuXHRcdGNvbnN0IHR3aXR0ZXJfZGVzYyA9IGRlY29kZUhUTUwocGFnZS50d2l0dGVyX2Rlc2MpO1xuXG5cdFx0Y29uc3Qgb3Blbl9ncmFwaF9pbWFnZV91cmwgPSBkZWNvZGVIVE1MKHBhZ2Uub3Blbl9ncmFwaF9pbWFnZV91cmwpO1xuXHRcdGNvbnN0IHR3aXR0ZXJfaW1hZ2VfdXJsID0gZGVjb2RlSFRNTChwYWdlLnR3aXR0ZXJfaW1hZ2VfdXJsKTtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGUga2V5PVwicGFnZS10aXRsZVwiPntzZW9fdGl0bGV9PC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyc2V0PVwidXRmLThcIi8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9XCIvZmF2aWNvbi0yNzB4MjcwLnBuZ1wiIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17c2VvX3RpdGxlfSBrZXk9XCJvZy10aXRsZVwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c2VvX2Rlc2N9IGtleT1cImRlc2NyaXB0aW9uXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIGtleT1cIm9nLWxvY2FsZVwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e29wZW5fZ3JhcGhfdGl0bGV9IGtleT1cIm9nLXRpdGxlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17b3Blbl9ncmFwaF9kZXNjfSBrZXk9XCJvZy1kZXNjcmlwdGlvblwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtwYWdlLnBlcm1hbGlua30ga2V5PVwib2ctdXJsXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJHb3ZXaGl0ZVBhcGVyc1wiIC8+XG5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17b3Blbl9ncmFwaF9pbWFnZV91cmx9IGtleT1cIm9nLWltYWdlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBjb250ZW50PXtvcGVuX2dyYXBoX2ltYWdlX3VybH0ga2V5PVwib2ctaW1hZ2Utc2VjdXJlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiBrZXk9XCJ0d2l0dGVyLWNhcmRcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17dHdpdHRlcl9kZXNjfSBrZXk9XCJ0d2l0dGVyLWRlc2NyaXB0aW9uXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3R3aXR0ZXJfdGl0bGV9IGtleT1cInR3aXR0ZXItdGl0bGVcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQEdvdkV2ZW50c0dyb3VwXCIga2V5PVwidHdpdHRlci1zaXRlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e3R3aXR0ZXJfaW1hZ2VfdXJsfSBrZXk9XCJ0d2l0dGVyLWltYWdlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBHb3ZFdmVudHNHcm91cFwiIGtleT1cInR3aXR0ZXItY3JlYXRvclwiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PEhlYWRlciB7Li4udXNlcn0gZGlzcGxheV9uYW1lPXtkaXNwbGF5X25hbWV9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7YmxvZ1N0eWxlcy5wYWdlQ29udGVudH1gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHNtYWxsLTEyIG1lZGl1bS02IGNvbHVtbnMgJHtibG9nU3R5bGVzLnRleHR9YH0+XG5cdFx0XHRcdFx0XHQ8aDE+QmxvZzwvaDE+XG5cdFx0XHRcdFx0XHQ8cD5XZSBicmVhayBkb3duIHRoZSBidXp6IGFyb3VuZCBnb3Zlcm5tZW50IGhvdCB0b3BpY3MuPC9wPlxuXG5cdFx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0XHRpZD1cImJsb2ctc2VhcmNoXCJcblx0XHRcdFx0XHRcdFx0YWN0aW9uPVwiaHR0cHM6Ly9nd3BhZG1pbi5jb2Rld3JhbmdsZXIuaW8vYXBpL2d3cC92MS9wb3N0c1wiXG5cdFx0XHRcdFx0XHRcdG9uU3VibWl0PXsgKGUpID0+IHRoaXMuYmxvZ1NlYXJjaFN1Ym1pdChlKSB9XG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cImdldFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgaW5wdXQtZ3JvdXAgJHtibG9nU3R5bGVzLnNlYXJjaH1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwic2VhcmNoX2ZpZWxkXCIgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtZmllbGRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiIHR5cGU9XCJ0ZXh0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgYnV0dG9uICR7YmxvZ1N0eWxlcy5idXR0b259YH0gdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy13aGl0ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHNtYWxsLTEyIG1lZGl1bS02IGNvbHVtbnMgdGV4dC1yaWdodCAke2Jsb2dTdHlsZXMuaW1hZ2V9YH0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvYmxvZy1pbWcuanBnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Jsb2dTdHlsZXMuYmxvZ1Jvd30+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtibG9nU3R5bGVzLmhlYWRpbmd9YH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnMgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyQmxvZ0hlYWRpbmcoKX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqcy1yZXN1bHRzXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgc21hbGwtdXAtMSBtZWRpdW0tdXAtMiBsYXJnZS11cC0zYH0+XG5cdFx0XHRcdFx0XHR7cG9zdHMubWFwKGJsb2cgPT5cblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2Jsb2cuSUR9IGNsYXNzTmFtZT17YGNvbHVtbiBjb2x1bW4tYmxvY2tgfT5cblx0XHRcdFx0XHRcdFx0XHQ8QmxvZ0NhcmRcblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtibG9nLklEfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17YmxvZy5zbHVnfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2RlY29kZUhUTUwoYmxvZy50aXRsZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRmZWF0dXJlZF9tZWRpYT17YmxvZy5mZWF0dXJlZF9tZWRpYX1cblx0XHRcdFx0XHRcdFx0XHRcdGV4Y2VycHQ9e2RlY29kZUhUTUwoYmxvZy5leGNlcnB0KX1cblx0XHRcdFx0XHRcdFx0XHRcdGNhdGVnb3J5PXtibG9nLmNhdGVnb3JpZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5X2RhdGU9e2Jsb2cuZGlzcGxheV9kYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0aG9yX25hbWU9e2Jsb2cuYXV0aG9yX25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuX3JlbmRlckxvYWRNb3JlQ2xhc3MoKX0+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9sb2FkTW9yZSgpXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJ1dHRvbiAke2Jsb2dTdHlsZXMuYnV0dG9ufWB9PkxvYWQgTW9yZVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PFN1YnNjcmliZS8+XG5cdFx0XHRcdDxGb290ZXIvPlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG5cdGNvbnN0IHdvcmRwcmVzcyA9IG5ldyBXb3JkcHJlc3NTZXJ2aWNlXG5cdGNvbnN0IHBhZ2UgPSBhd2FpdCB3b3JkcHJlc3MuZmV0Y2hQYWdlKCdibG9nJyk7XG5cdGxldCBpdGVtcyA9IDk7XG5cdGxldCBvZmZzZXQgPSAwO1xuXHRjb25zdCBwb3N0cyA9IGF3YWl0IHdvcmRwcmVzcy5mZXRjaFBvc3RzKGl0ZW1zLG9mZnNldCk7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBhZ2UsXG5cdFx0XHRwb3N0c1xuXHRcdH1cblx0fVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnZUNvbnRlbnRcIjogXCJibG9nX3BhZ2VDb250ZW50X19SMlJlcVwiLFxuXHRcInRleHRcIjogXCJibG9nX3RleHRfXzNZeUhJXCIsXG5cdFwiaW1hZ2VcIjogXCJibG9nX2ltYWdlX18zWVhIM1wiLFxuXHRcInNlYXJjaFwiOiBcImJsb2dfc2VhcmNoX19Id3BVbFwiLFxuXHRcImJ1dHRvblwiOiBcImJsb2dfYnV0dG9uX18zdzJURlwiLFxuXHRcImJsb2dSb3dcIjogXCJibG9nX2Jsb2dSb3dfXzJSUlBfXCIsXG5cdFwiaGVhZGluZ1wiOiBcImJsb2dfaGVhZGluZ19fM21zSjJcIixcblx0XCJjbGVhclNlYXJjaFwiOiBcImJsb2dfY2xlYXJTZWFyY2hfXzFLOUYtXCIsXG5cdFwibmF2XCI6IFwiYmxvZ19uYXZfXzFKZF9FXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJibG9nQmxvY2tcIjogXCJibG9nY2FyZF9ibG9nQmxvY2tfXzNZbVJHXCIsXG5cdFwibW9yZVwiOiBcImJsb2djYXJkX21vcmVfXzJLX1pLXCIsXG5cdFwibGlua1wiOiBcImJsb2djYXJkX2xpbmtfXzJGZmlQXCIsXG5cdFwiaW1hZ2VcIjogXCJibG9nY2FyZF9pbWFnZV9fblFJa0xcIixcblx0XCJjYXRlZ29yeVwiOiBcImJsb2djYXJkX2NhdGVnb3J5X18zcXNndVwiLFxuXHRcImNvbnRlbnRcIjogXCJibG9nY2FyZF9jb250ZW50X18xT3kyRlwiLFxuXHRcImxpbmtBcnJvd1wiOiBcImJsb2djYXJkX2xpbmtBcnJvd19fREl5NXNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJsb2dpbm1vZGFsX3dyYXBfXzMzU2pBXCIsXG5cdFwib3BlblwiOiBcImxvZ2lubW9kYWxfb3Blbl9fMklTNENcIixcblx0XCJoZWFkZXJcIjogXCJsb2dpbm1vZGFsX2hlYWRlcl9fMTIzQzhcIixcblx0XCJjbG9zZVwiOiBcImxvZ2lubW9kYWxfY2xvc2VfXzF5WW8tXCIsXG5cdFwiaHJcIjogXCJsb2dpbm1vZGFsX2hyX193R3Q0U1wiLFxuXHRcImxvZ2luXCI6IFwibG9naW5tb2RhbF9sb2dpbl9fMURyZm5cIixcblx0XCJmbGV4XCI6IFwibG9naW5tb2RhbF9mbGV4X18xTEVhNlwiLFxuXHRcImJ1dHRvblwiOiBcImxvZ2lubW9kYWxfYnV0dG9uX19aT0FLNFwiLFxuXHRcImZvcm1cIjogXCJsb2dpbm1vZGFsX2Zvcm1fXzNnU1ZMXCIsXG5cdFwic2lnbmluXCI6IFwibG9naW5tb2RhbF9zaWduaW5fXzFKeXYwXCIsXG5cdFwic2lnbmluR292RXZlbnRzXCI6IFwibG9naW5tb2RhbF9zaWduaW5Hb3ZFdmVudHNfXzM1RDc4XCIsXG5cdFwiZm9yZ290XCI6IFwibG9naW5tb2RhbF9mb3Jnb3RfXzJic3U4XCIsXG5cdFwic2VwXCI6IFwibG9naW5tb2RhbF9zZXBfXzFoSVkzXCIsXG5cdFwic29jaWFsQmxvY2tcIjogXCJsb2dpbm1vZGFsX3NvY2lhbEJsb2NrX18xTm4zZlwiLFxuXHRcInNpZ25VcFwiOiBcImxvZ2lubW9kYWxfc2lnblVwX18xTmt4cFwiLFxuXHRcImVycm9yXCI6IFwibG9naW5tb2RhbF9lcnJvcl9fMjhVYmdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJwcm9maWxlc2lkZWJhcl93cmFwX18xT2FpNFwiLFxuXHRcIm1lbnVcIjogXCJwcm9maWxlc2lkZWJhcl9tZW51X18ySXRad1wiLFxuXHRcIm1lbnVJbWFnZVwiOiBcInByb2ZpbGVzaWRlYmFyX21lbnVJbWFnZV9fMUlkX1pcIixcblx0XCJhY3RpdmVcIjogXCJwcm9maWxlc2lkZWJhcl9hY3RpdmVfXzJfdDVsXCIsXG5cdFwibWVudUl0ZW1cIjogXCJwcm9maWxlc2lkZWJhcl9tZW51SXRlbV9fN0xXcGJcIixcblx0XCJsb2dvdXRcIjogXCJwcm9maWxlc2lkZWJhcl9sb2dvdXRfXzFsLVVNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJzY3JpYmVcIjogXCJzdWJzY3JpYmVfc3Vic2NyaWJlX18zWjdBU1wiLFxuXHRcImFsdFwiOiBcInN1YnNjcmliZV9hbHRfXzFPRmNMXCIsXG5cdFwiYnV0dG9uXCI6IFwic3Vic2NyaWJlX2J1dHRvbl9fM0hYZ25cIixcblx0XCJoclwiOiBcInN1YnNjcmliZV9ocl9fUUIxenRcIixcblx0XCJoZWFkaW5nXCI6IFwic3Vic2NyaWJlX2hlYWRpbmdfXzJJamNRXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwXCI6IFwidGVhbW1vZGFsX3dyYXBfXzN4UU9BXCIsXG5cdFwib3BlblwiOiBcInRlYW1tb2RhbF9vcGVuX18xWEpIYVwiLFxuXHRcImJvZHlcIjogXCJ0ZWFtbW9kYWxfYm9keV9fMWI2b19cIixcblx0XCJhdmF0YXJcIjogXCJ0ZWFtbW9kYWxfYXZhdGFyX18xR09xYVwiLFxuXHRcImhlYWRlclwiOiBcInRlYW1tb2RhbF9oZWFkZXJfXzFJdU1pXCIsXG5cdFwiY2xvc2VcIjogXCJ0ZWFtbW9kYWxfY2xvc2VfX2I2ZVdQXCIsXG5cdFwiaHJcIjogXCJ0ZWFtbW9kYWxfaHJfXzNUNk9fXCIsXG5cdFwibG9naW5cIjogXCJ0ZWFtbW9kYWxfbG9naW5fXzJzT3I1XCIsXG5cdFwiZmxleFwiOiBcInRlYW1tb2RhbF9mbGV4X19BaHp3SFwiLFxuXHRcImJ1dHRvblwiOiBcInRlYW1tb2RhbF9idXR0b25fXzNOcHp5XCIsXG5cdFwiZm9ybVwiOiBcInRlYW1tb2RhbF9mb3JtX18zaHowNlwiLFxuXHRcInNpZ25pblwiOiBcInRlYW1tb2RhbF9zaWduaW5fX0tEY2FHXCIsXG5cdFwiZm9yZ290XCI6IFwidGVhbW1vZGFsX2ZvcmdvdF9fblRJblRcIixcblx0XCJzZXBcIjogXCJ0ZWFtbW9kYWxfc2VwX18yT0szY1wiLFxuXHRcInNvY2lhbEJsb2NrXCI6IFwidGVhbW1vZGFsX3NvY2lhbEJsb2NrX18zSVJDNFwiLFxuXHRcInNpZ25VcFwiOiBcInRlYW1tb2RhbF9zaWduVXBfXzNzZ1ZwXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJ0ZWFtbW9kYWxfZGVzY3JpcHRpb25fX3puZnM1XCIsXG5cdFwiZnVuRmFjdFwiOiBcInRlYW1tb2RhbF9mdW5GYWN0X18zdV9zUVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fMUtvRFdcIixcblx0XCJmaXhlZFwiOiBcImZvb3Rlcl9maXhlZF9fMy04VlFcIixcblx0XCJuYXZpZ2F0aW9uV3JhcFwiOiBcImZvb3Rlcl9uYXZpZ2F0aW9uV3JhcF9fMzBwSDdcIixcblx0XCJtYWluTmF2aWdhdGlvblwiOiBcImZvb3Rlcl9tYWluTmF2aWdhdGlvbl9fMWdmLVRcIixcblx0XCJtZW51XCI6IFwiZm9vdGVyX21lbnVfX0V4akdJXCIsXG5cdFwiY3VycmVudF9wYWdlX2l0ZW1cIjogXCJmb290ZXJfY3VycmVudF9wYWdlX2l0ZW1fXzJ5cHhuXCIsXG5cdFwiY3VycmVudC1tZW51LWl0ZW1cIjogXCJmb290ZXJfY3VycmVudC1tZW51LWl0ZW1fX1RlVE1nXCIsXG5cdFwiY3VycmVudF9wYWdlX2FuY2VzdG9yXCI6IFwiZm9vdGVyX2N1cnJlbnRfcGFnZV9hbmNlc3Rvcl9fMk01dnBcIixcblx0XCJjdXJyZW50LW1lbnUtYW5jZXN0b3JcIjogXCJmb290ZXJfY3VycmVudC1tZW51LWFuY2VzdG9yX18zYTNqM1wiLFxuXHRcImxvZ29cIjogXCJmb290ZXJfbG9nb19fMVZWNmJcIixcblx0XCJzb2NpYWxNZW51XCI6IFwiZm9vdGVyX3NvY2lhbE1lbnVfXzNPWElwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZpZ2F0aW9uV3JhcFwiOiBcImhlYWRlcl9uYXZpZ2F0aW9uV3JhcF9fM1ctdHhcIixcblx0XCJtYWluTmF2aWdhdGlvblwiOiBcImhlYWRlcl9tYWluTmF2aWdhdGlvbl9fMW1adnVcIixcblx0XCJtZW51UHJpbWFyeU1lbnVDb250YWluZXJcIjogXCJoZWFkZXJfbWVudVByaW1hcnlNZW51Q29udGFpbmVyX18yRXRoelwiLFxuXHRcImZvY3VzXCI6IFwiaGVhZGVyX2ZvY3VzX18xSlB2WVwiLFxuXHRcIm1lbnVcIjogXCJoZWFkZXJfbWVudV9fMThJS3dcIixcblx0XCJldmVudHNNZW51TGlua1wiOiBcImhlYWRlcl9ldmVudHNNZW51TGlua19fMUJrUS1cIixcblx0XCJob21lTWVudUxpbmtcIjogXCJoZWFkZXJfaG9tZU1lbnVMaW5rX18zUHRHZ1wiLFxuXHRcIm1lbnVJbWFnZVwiOiBcImhlYWRlcl9tZW51SW1hZ2VfXzF5dk5hXCIsXG5cdFwicHJvbW90ZVwiOiBcImhlYWRlcl9wcm9tb3RlX19JY3RLSVwiLFxuXHRcInRlYW1cIjogXCJoZWFkZXJfdGVhbV9fMWxpa0NcIixcblx0XCJibG9nXCI6IFwiaGVhZGVyX2Jsb2dfXzFLbGd3XCIsXG5cdFwiYWN0aXZlXCI6IFwiaGVhZGVyX2FjdGl2ZV9fZHh0eW5cIixcblx0XCJjdXJyZW50X3BhZ2VfaXRlbVwiOiBcImhlYWRlcl9jdXJyZW50X3BhZ2VfaXRlbV9fMThlZE9cIixcblx0XCJjdXJyZW50LW1lbnUtaXRlbVwiOiBcImhlYWRlcl9jdXJyZW50LW1lbnUtaXRlbV9fMjFVbVNcIixcblx0XCJjdXJyZW50X3BhZ2VfYW5jZXN0b3JcIjogXCJoZWFkZXJfY3VycmVudF9wYWdlX2FuY2VzdG9yX18zUWJkT1wiLFxuXHRcImN1cnJlbnQtbWVudS1hbmNlc3RvclwiOiBcImhlYWRlcl9jdXJyZW50LW1lbnUtYW5jZXN0b3JfXzNYeUFXXCIsXG5cdFwibW9iaWxlVXNlck1lbnVXcmFwXCI6IFwiaGVhZGVyX21vYmlsZVVzZXJNZW51V3JhcF9fMUN3UFRcIixcblx0XCJ1c2VyTWVudVwiOiBcImhlYWRlcl91c2VyTWVudV9faXk5QXdcIixcblx0XCJsb2dpblwiOiBcImhlYWRlcl9sb2dpbl9fMTAzV1VcIixcblx0XCJidXR0b25cIjogXCJoZWFkZXJfYnV0dG9uX18zUWNkVFwiLFxuXHRcImdldFN0YXJ0ZWRcIjogXCJoZWFkZXJfZ2V0U3RhcnRlZF9fMTVXbkFcIixcblx0XCJtYWluVXNlck1lbnVXcmFwXCI6IFwiaGVhZGVyX21haW5Vc2VyTWVudVdyYXBfXzFuYnJsXCIsXG5cdFwiaWNvbk9wZW5cIjogXCJoZWFkZXJfaWNvbk9wZW5fXzNteWJ4XCIsXG5cdFwiYWNjb3VudFwiOiBcImhlYWRlcl9hY2NvdW50X18zcmhCSVwiLFxuXHRcInRvZ2dsZWRcIjogXCJoZWFkZXJfdG9nZ2xlZF9fMUFOeVJcIixcblx0XCJzZWFyY2hcIjogXCJoZWFkZXJfc2VhcmNoX18ydWxLU1wiLFxuXHRcImhlYWRlcl9idXR0b25cIjogXCJoZWFkZXJfaGVhZGVyX2J1dHRvbl9fMVQwQXlcIixcblx0XCJtZW51VG9nZ2xlXCI6IFwiaGVhZGVyX21lbnVUb2dnbGVfXzFwejNpXCIsXG5cdFwiYnVyZ2VyXCI6IFwiaGVhZGVyX2J1cmdlcl9fdkljQmNcIixcblx0XCJvcGVuXCI6IFwiaGVhZGVyX29wZW5fXzFBVGpYXCIsXG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fMjJXYlhcIixcblx0XCJsb2dvXCI6IFwiaGVhZGVyX2xvZ29fXzJBbVVHXCIsXG5cdFwicHJvZmlsZU1lbnVcIjogXCJoZWFkZXJfcHJvZmlsZU1lbnVfXzE5OVpkXCIsXG5cdFwianMtYWNjb3VudC1tZW51XCI6IFwiaGVhZGVyX2pzLWFjY291bnQtbWVudV9fMlRuTmZcIixcblx0XCJtZW51SXRlbVwiOiBcImhlYWRlcl9tZW51SXRlbV9fMjJlQjFcIixcblx0XCJsb2dvdXRcIjogXCJoZWFkZXJfbG9nb3V0X191QzRIbVwiXG59O1xuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgSFRNTCA9ICh7dHlwZSwgY2xhc3NOYW1lLCBodG1sfSkgPT4ge1xuXHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0eXBlID8/ICdkaXYnLCB7XG5cdFx0Y2xhc3NOYW1lLFxuXHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7X19odG1sOiBodG1sfVxuXHR9KVxufVxuXG5leHBvcnQgY29uc3QgTmF2TGluayA9ICh7XG5cdGhyZWYgPSAnL1twYWdlXScsXG5cdGFzLFxuXHRjbGFzc05hbWUsXG5cdGNoaWxkcmVuLFxuXHR0aXRsZVxufSkgPT4gKFxuXHQ8TGluayBocmVmPXtocmVmfSBhcz17YXN9PlxuXHRcdDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHRcdHtjaGlsZHJlbiA/PyB0aXRsZX1cblx0XHQ8L2E+XG5cdDwvTGluaz5cbilcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IGFwaVVSTCA9ICdodHRwczovL2d3cGFkbWluLmNvZGV3cmFuZ2xlci5pby9hcGkvZ3dwL3YxJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZHByZXNzU2VydmljZSB7XG5cblx0YXN5bmMgZmV0Y2hXaGl0ZXBhcGVycyhcblx0XHRcdGl0ZW1zLFxuXHRcdFx0b2Zmc2V0LFxuXHRcdFx0dG9waWNzID0gW10sXG5cdFx0XHR0YWdzID0gW10sXG5cdFx0XHRmb3JtYXQgPSAnJyxcblx0XHRcdGFnZW5jaWVzID0gW10sXG5cdFx0XHRzZWFyY2ggPSAnJyxcblx0XHRcdHN0YXJ0X2RhdGUgPSAnJyxcblx0XHRcdGVuZF9kYXRlID0gJycsXG5cdFx0XHRzb3J0X2J5ID0gJ3JlbGV2YW5jZScsXG5cdFx0XHR1c2VyX2lkID0gJycsXG5cdFx0XHRvcmdhbml6YXRpb25faWQgPSAnJ1xuXHRcdClcblx0e1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vd2hpdGVwYXBlcnMvP2l0ZW1zPSR7aXRlbXN9Jm9mZnNldD0ke29mZnNldH0mdG9waWNzPSR7dG9waWNzfSZ0YWdzPSR7dGFnc30mZm9ybWF0PSR7Zm9ybWF0fSZhZ2VuY2llcz0ke2FnZW5jaWVzfSZzPSR7c2VhcmNofSZzdGFydF9kYXRlPSR7c3RhcnRfZGF0ZX0mZW5kX2RhdGU9JHtlbmRfZGF0ZX0mc29ydF9ieT0ke3NvcnRfYnl9JnVzZXJfaWQ9JHt1c2VyX2lkfSZvcmdhbml6YXRpb25faWQ9JHtvcmdhbml6YXRpb25faWR9YClcblx0XHRjb25zdCB3aGl0ZXBhcGVycyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB3aGl0ZXBhcGVycztcblx0fVxuXG5cdGFzeW5jIGZldGNoU2F2ZWRTZWFyY2goaWQpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3NhdmVkLXNlYXJjaC8ke2lkfWApXG5cdFx0Y29uc3Qgc2VhcmNoID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiBzZWFyY2g7XG5cdH1cblxuXHRhc3luYyBmZXRjaFNhdmVkU2VhcmNoZXMoIHVzZXJfaWQsIGFjY2Vzc190b2tlbiApIHtcblx0XHRjb25zdCB1cmwgPSBgJHthcGlVUkx9L3NhdmVkLXNlYXJjaGVzL2BcblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiBhY2Nlc3NfdG9rZW4sXG5cdFx0XHRcInVzZXJfaWRcIjogdXNlcl9pZCxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHNhdmVkX3NlYXJjaGVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHNhdmVkX3NlYXJjaGVzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hXaGl0ZXBhcGVyKHNsdWcpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3doaXRlcGFwZXJzLyR7c2x1Z31gKVxuXHRcdGNvbnN0IHdoaXRlcGFwZXIgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHdoaXRlcGFwZXI7XG5cdH1cblxuXHRhc3luYyBmZXRjaFBvc3RzKGl0ZW1zLG9mZnNldCxzZWFyY2ggPSAnJykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vcG9zdHMvP2l0ZW1zPSR7aXRlbXN9Jm9mZnNldD0ke29mZnNldH0mcz0ke3NlYXJjaH1gKVxuXHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHBvc3RzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hTbGlkZXMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9zbGlkZXNgKVxuXHRcdGNvbnN0IHNsaWRlcyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBzbGlkZXM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFBvc3Qoc2x1Zykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vcG9zdHMvJHtzbHVnfWApXG5cdFx0Y29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4gcG9zdDtcblx0fVxuXG5cdGFzeW5jIGZldGNoUGFnZShzbHVnKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9wYWdlcy8ke3NsdWd9YClcblx0XHRjb25zdCBwYWdlID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiBwYWdlO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hGb3JtYXRzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vZm9ybWF0cy9gKVxuXHRcdGNvbnN0IGZvcm1hdHMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gZm9ybWF0cztcblx0fVxuXG5cdGFzeW5jIGZldGNoVG9waWNzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdG9waWNzL2ApXG5cdFx0Y29uc3QgdG9waWNzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHRvcGljcztcblx0fVxuXG5cdGFzeW5jIGZldGNoVG9waWMoc2x1Zykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdG9waWMvJHtzbHVnfWApXG5cdFx0Y29uc3QgdG9waWMgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHRvcGljO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hUYWdzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdGFncy9gKVxuXHRcdGNvbnN0IHRhZ3MgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gdGFncztcblx0fVxuXG5cdGFzeW5jIGZldGNoU3RhdHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9mZXRjaC1zdGF0cy9gKVxuXHRcdGNvbnN0IHN0YXRzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHN0YXRzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hUZWFtKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdGVhbS9gKVxuXHRcdGNvbnN0IHRlYW0gPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gdGVhbTtcblx0fVxuXG5cdGFzeW5jIGZldGNoQWdlbmNpZXMocGFyZW50KSB7XG5cdFx0bGV0IHJlcztcblx0XHRpZiggcGFyZW50ID09ICcnICkge1xuXHRcdFx0cmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9hZ2VuY2llcy8/b3JkZXJieT1uYW1lYClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9hZ2VuY2llcy8/cGFyZW50PSR7cGFyZW50fWApXG5cdFx0fVxuXHRcdGNvbnN0IGFnZW5jaWVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIGFnZW5jaWVzO1xuXHR9XG5cblx0YXN5bmMgc2VhcmNoT3JnYW5pemF0aW9ucyhzZWFyY2gsIGl0ZW1zID0gMTApIHtcblx0XHRpZiggc2VhcmNoID09ICcnICkge1xuXHRcdFx0cmV0dXJuIFtdXG5cdFx0fVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vb3JnYW5pemF0aW9ucy8/c2VhcmNoPSR7c2VhcmNofSZpdGVtcz0ke2l0ZW1zfWApXG5cdFx0Y29uc3Qgb3JncyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBvcmdzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hPcmdhbml6YXRpb24oaWQpIHtcblx0XHRpZiggaWQgPT0gJycgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vb3JnYW5pemF0aW9ucy8ke2lkfWApXG5cdFx0Y29uc3Qgb3JnID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIG9yZztcblx0fVxuXG5cdGFzeW5jIGZldGNoRmF2b3JpdGVzKGFjY2Vzc190b2tlbixpdGVtcyxvZmZzZXQpIHtcblxuXHRcdGNvbnN0IHVybCA9IGAke2FwaVVSTH0vZmF2b3JpdGVzL2BcblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiBhY2Nlc3NfdG9rZW4sXG5cdFx0XHRcIml0ZW1zXCI6IGl0ZW1zLFxuXHRcdFx0XCJvZmZzZXRcIjogb2Zmc2V0XG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCB3aGl0ZXBhcGVycyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB3aGl0ZXBhcGVycztcblx0fVxuXG5cdGFzeW5jIGZldGNoT3JnYW5pemF0aW9uTWVtYmVycyhhY2Nlc3NfdG9rZW4pIHtcblxuXHRcdGNvbnN0IHVybCA9IGAke2FwaVVSTH0vb3JnYW5pemF0aW9uLW1lbWJlcnMvYFxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiBhY2Nlc3NfdG9rZW4sXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBtZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIG1lbWJlcnM7XG5cdH1cblxuXHRhc3luYyBjaGVja0Zhdm9yaXRlKGlkLHRva2VuKSB7XG5cdC8vXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2lzLWZhdm9yaXRlL2ApXG5cdFx0Y29uc3QgdXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvaXMtZmF2b3JpdGUnO1xuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcIklEXCI6IGlkLFxuXHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogdG9rZW5cblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHIgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gcjtcblx0fVxuXG5cdGFzeW5jIGdldFVzZXIodG9rZW4pIHtcblxuXHRcdGlmKCAhdG9rZW4gKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvdXNlcic7XG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IHRva2VuXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCByID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHI7XG5cdH1cblxuXHQvLyBhc3luYyBmZXRjaEhvbWVTbGlkZXMoKSB7XG5cdC8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9ob21lLXNsaWRlcz9pdGVtcz00YClcblx0Ly8gXHRjb25zdCBzbGlkZXMgPSBhd2FpdCByZXMuanNvbigpXG5cdC8vXG5cdC8vIFx0cmV0dXJuIHNsaWRlc1xuXHQvLyB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVudGl0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==