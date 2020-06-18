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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/modules/error.module.css */ "./public/styles/modules/error.module.css");
/* harmony import */ var _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/pages/404.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Error extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const display_name = this.props.display_name;
    const {
      user
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }
    }, __jsx("title", {
      key: "page-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }
    }, "404 - Page Not Found"), __jsx("meta", {
      charset: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/favicon-270x270.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }), __jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, user, {
      display_name: display_name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 4
      }
    })), __jsx("div", {
      className: _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorPage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.inner,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 6
      }
    }, "Page Not Found"), __jsx("img", {
      className: _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hr,
      src: "/images/sep.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 6
      }
    }, "Something went wrong. Please try again later or", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, " contact us ", __jsx("img", {
      className: _public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.linkArrow,
      src: "/images/right-arrow-blue.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 53
      }
    })))), __jsx("a", {
      href: "/",
      className: `button ${_public_styles_modules_error_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 6
      }
    }, "Go Back"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Error);

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

/***/ "./public/styles/modules/error.module.css":
/*!************************************************!*\
  !*** ./public/styles/modules/error.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"errorPage": "error_errorPage__2RWDk",
	"inner": "error_inner__3Ipac",
	"link": "error_link__WGPPz",
	"button": "error_button__2Mtp5",
	"hr": "error_hr__s0Tly"
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

/***/ 4:
/*!****************************!*\
  !*** multi ./pages/404.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/edward/Projects/gov/gwp-test/pages/404.js */"./pages/404.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51TGluay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVNZW51TGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzLzQwNC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9sb2dpbm1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvZmlsZXNpZGViYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvZXJyb3IubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvaGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvd29yZHByZXNzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNldFN0YXRlIiwic3RhdGUiLCJtb2JpbGVfbWVudV9vcGVuIiwidXNlcl9wcm9maWxlX21lbnVfb3BlbiIsImxvZ2luX29wZW4iLCJlIiwid2hpY2giLCJfdG9nZ2xlTWVudSIsIl9sb2dPdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJfcmVuZGVyVXNlclByb2ZpbGVNZW51IiwiaGVhZGVyU3R5bGVzIiwibWVudSIsInByb2ZpbGVNZW51IiwibWVudUl0ZW0iLCJtZW51SW1hZ2UiLCJhY3RpdmUiLCJsb2dvdXQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfcmVuZGVyVXNlck1lbnVJY29uIiwiaWNvbk9wZW4iLCJfcmVuZGVyVXNlck1lbnUiLCJ1c2VyIiwiZGlzcGxheV9uYW1lIiwidW5kZWZpbmVkIiwidXNlck1lbnUiLCJzZWFyY2giLCJhY2NvdW50IiwiX3RvZ2dsZVVzZXJQcm9maWxlTWVudSIsImxvZ2luIiwiX3RvZ2dsZUxvZ2luIiwiZ2V0U3RhcnRlZCIsImJ1dHRvbiIsInJlbmRlciIsImhlYWRlciIsImxvZ28iLCJuYXZpZ2F0aW9uV3JhcCIsIm1haW5OYXZpZ2F0aW9uIiwidG9nZ2xlZCIsIm1lbnVUb2dnbGUiLCJidXJnZXIiLCJvcGVuIiwibWVudVByaW1hcnlNZW51Q29udGFpbmVyIiwiaG9tZU1lbnVMaW5rIiwicHJvbW90ZSIsInRlYW0iLCJibG9nIiwiZXZlbnRzTWVudUxpbmsiLCJtb2JpbGVVc2VyTWVudVdyYXAiLCJtYWluVXNlck1lbnVXcmFwIiwiTG9naW5Nb2RhbCIsInRvZ2dsZSIsInRhcmdldCIsImhhc0F0dHJpYnV0ZSIsImdvdkJ1dHRvbiIsImpzb24iLCJ1cmwiLCJlbWFpbEZpZWxkIiwicGFzc0ZpZWxkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tWYWxpZGl0eSIsImNsYXNzTGlzdCIsImFkZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsInBhc3MiLCJkaXNhYmxlZCIsIndvcmtpbmciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImZsYXQiLCJpbmNsdWRlcyIsImVycm9yIiwibWVzc2FnZSIsInNldCIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbk1vZGFsU3R5bGVzIiwid3JhcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJuYW1lIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJodG1sIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVFc2NhcGUiLCJfaGFuZGxlQ2xpY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3JlbmRlck1vZGFsQ2xhc3MiLCJjbG9zZSIsImhyIiwiZm9ybSIsIl9mb3Jnb3RQYXNzd29yZCIsImZvcmdvdCIsInNpZ25pbiIsIl9wcm9jZXNzTG9naW4iLCJzaWduaW5Hb3ZFdmVudHMiLCJfcHJvY2Vzc0dvdkV2ZW50c0xvZ2luIiwic2VwIiwic29jaWFsQmxvY2siLCJnb29nbGUiLCJzb2NpYWwiLCJmYiIsImxpbmtlZGluIiwic2lnblVwIiwibGlua0Fycm93IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGFzc05hbWUiLCJwYXRobmFtZSIsImNsb25lRWxlbWVudCIsInByb2ZpbGVTaWRlYmFyU3R5bGVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJlcnIiLCJMaW5rIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsInJlc29sdmUiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsImNvbXBvbmVudERpZE1vdW50IiwiZXJyb3JTdHlsZXMiLCJlcnJvclBhZ2UiLCJpbm5lciIsImxpbmsiLCJhcGlVUkwiLCJXb3JkcHJlc3NTZXJ2aWNlIiwiZmV0Y2hXaGl0ZXBhcGVycyIsIml0ZW1zIiwib2Zmc2V0IiwidG9waWNzIiwidGFncyIsImFnZW5jaWVzIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwic29ydF9ieSIsInVzZXJfaWQiLCJvcmdhbml6YXRpb25faWQiLCJ3aGl0ZXBhcGVycyIsImZldGNoU2F2ZWRTZWFyY2giLCJpZCIsImZldGNoU2F2ZWRTZWFyY2hlcyIsImFjY2Vzc190b2tlbiIsInNhdmVkX3NlYXJjaGVzIiwiZmV0Y2hXaGl0ZXBhcGVyIiwic2x1ZyIsIndoaXRlcGFwZXIiLCJmZXRjaFBvc3RzIiwicG9zdHMiLCJmZXRjaFNsaWRlcyIsInNsaWRlcyIsImZldGNoUG9zdCIsInBvc3QiLCJmZXRjaFBhZ2UiLCJmZXRjaEZvcm1hdHMiLCJmb3JtYXRzIiwiZmV0Y2hUb3BpY3MiLCJmZXRjaFRvcGljIiwidG9waWMiLCJmZXRjaFRhZ3MiLCJmZXRjaFN0YXRzIiwic3RhdHMiLCJmZXRjaFRlYW0iLCJmZXRjaEFnZW5jaWVzIiwicGFyZW50Iiwic2VhcmNoT3JnYW5pemF0aW9ucyIsIm9yZ3MiLCJmZXRjaE9yZ2FuaXphdGlvbiIsIm9yZyIsImZldGNoRmF2b3JpdGVzIiwiZmV0Y2hPcmdhbml6YXRpb25NZW1iZXJzIiwibWVtYmVycyIsImNoZWNrRmF2b3JpdGUiLCJ0b2tlbiIsInIiLCJnZXRVc2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTs7QUFFRCxVQUFNOWEsR0FBRyxHQUFHLGtEQUFaO0FBQ0EsVUFBTUQsSUFBSSxHQUFHUyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUMzQixzQkFBZ0JxYTtBQURXLEtBQWYsQ0FBYjtBQUlBLFVBQU10TCxHQUFHLEdBQUcsTUFBTTFPLHlEQUFLLENBQUNkLEdBQUQsRUFBTTtBQUM1QmUsWUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxVQUFJLEVBQUVqQixJQUZzQjtBQUc1QmtCLGFBQU8sRUFBRTtBQUNSLHdCQUFnQjtBQURSO0FBSG1CLEtBQU4sQ0FBdkI7QUFRQSxVQUFNOFosQ0FBQyxHQUFHLE1BQU12TCxHQUFHLENBQUN6UCxJQUFKLEVBQWhCO0FBRUEsV0FBT2diLENBQVA7QUFDQSxHQWpQb0MsQ0FtUHJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeFBxQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p0QywrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTWVudUxpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51TGluayc7XG5pbXBvcnQgUHJvZmlsZU1lbnVMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZU1lbnVMaW5rJztcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Nb2RhbCc7XG5pbXBvcnQgaGVhZGVyU3R5bGVzIGZyb20gJy4uL3B1YmxpYy9zdHlsZXMvbW9kdWxlcy9oZWFkZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgV29yZHByZXNzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy93b3JkcHJlc3MnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vYmlsZV9tZW51X29wZW46IGZhbHNlLFxuXHRcdFx0dXNlcl9wcm9maWxlX21lbnVfb3BlbjogZmFsc2UsXG5cdFx0XHRsb2dpbl9vcGVuOiBmYWxzZSxcblx0XHRcdC8vZGlzcGxheV9uYW1lOiAnJ1xuXHRcdH07XG5cdH1cblxuXHQvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuXHQvLyBcdGNvbnN0IHdvcmRwcmVzcyA9IG5ldyBXb3JkcHJlc3NTZXJ2aWNlXG5cdC8vIFx0Y29uc3QgcG9zdCA9IGF3YWl0IHdvcmRwcmVzcy5mZXRjaFBvc3QoY3R4LnF1ZXJ5LnBvc3QpO1xuXHQvL1xuXHQvLyBcdGNvbnN0IHVzZXIgPSB3b3JkcHJlc3MuZ2V0VXNlcigpO1xuXHQvLyBcdHJldHVybiB3b3JkcHJlc3MucGFnZVByb3BzKCd0ZXN0JywgcG9zdClcblx0Ly8gfVxuXG5cdC8vIGFzeW5jIF9mZXRjaFRva2VuKCkge1xuXHQvLyBcdGNvbnN0IHRva2VuID0gYXdhaXQgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG5cdC8vIFx0cmV0dXJuIHRva2VuO1xuXHQvLyB9XG5cblx0Ly8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdC8vIFx0Y29uc3Qge2FjY2Vzc190b2tlbn0gPSB0aGlzLnByb3BzO1xuXHQvLyBcdGNvbnN0IHdvcmRwcmVzcyA9IG5ldyBXb3JkcHJlc3NTZXJ2aWNlXG5cdC8vIFx0Y29uc3QgdXNlciA9IGF3YWl0IHdvcmRwcmVzcy5nZXRVc2VyKGFjY2Vzc190b2tlbik7XG5cdC8vIFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuXHQvLyBcdFx0ZGlzcGxheV9uYW1lOiB1c2VyLmZpcnN0X25hbWUgKyAnICcgKyB1c2VyLmxhc3RfbmFtZVxuXHQvLyBcdH0pKTtcblx0Ly8gfVxuXG5cdF9sb2dPdXQoKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbihlKSB7XG5cdFx0XHRDb29raWVzLnJlbW92ZSgndXNlcicpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0fSwgNzUwICk7XG5cdH1cblxuXHRfdG9nZ2xlTWVudSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG5cdFx0XHRtb2JpbGVfbWVudV9vcGVuOiAhc3RhdGUubW9iaWxlX21lbnVfb3BlblxuXHRcdH0pKTtcblx0fTtcblxuXHRfdG9nZ2xlVXNlclByb2ZpbGVNZW51ID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcblx0XHRcdHVzZXJfcHJvZmlsZV9tZW51X29wZW46ICFzdGF0ZS51c2VyX3Byb2ZpbGVfbWVudV9vcGVuXG5cdFx0fSkpO1xuXHR9O1xuXG5cdF90b2dnbGVMb2dpbiA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG5cdFx0XHRsb2dpbl9vcGVuOiAhc3RhdGUubG9naW5fb3BlblxuXHRcdH0pKTtcblx0fTtcblxuXHRfaGFuZGxlRXNjYXBlID0gKGUpID0+IHtcblx0XHRpZiAoZS53aGljaCA9PSAyNykge1xuXHRcdFx0dGhpcy5fdG9nZ2xlTWVudSgpO1xuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXJVc2VyUHJvZmlsZU1lbnUoKSB7XG5cdFx0aWYoIHRoaXMuc3RhdGUudXNlcl9wcm9maWxlX21lbnVfb3BlbiA9PSBmYWxzZSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDx1bCBpZD1cImhlYWRlci1wcm9maWxlLW1lbnVcIiBjbGFzc05hbWU9e2B2ZXJ0aWNhbCBtZW51ICR7aGVhZGVyU3R5bGVzLm1lbnV9ICR7aGVhZGVyU3R5bGVzLnByb2ZpbGVNZW51fSBjbGVhcmZpeGB9PlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SXRlbX0+XG5cdFx0XHRcdFx0XHQ8UHJvZmlsZU1lbnVMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtcHJvZmlsZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudUltYWdlfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YH0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtcHJvZmlsZS1hY3RpdmUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9wcm9tb3RlXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS11cGdyYWRlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS11cGdyYWRlLWFjdGl2ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPlByb21vdGU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9jb250YWN0XCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1jb250YWN0LnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gfSBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUtbWVudS1jb250YWN0LWFjdGl2ZS5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkNvbnRhY3Q8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLm1lbnVJdGVtfT5cblx0XHRcdFx0XHRcdDxQcm9maWxlTWVudUxpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvcHJvZmlsZS1tZW51LXNldHRpbmdzLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWVudUltYWdlfSAke2hlYWRlclN0eWxlcy5hY3RpdmV9YH0gc3JjPVwiL2ltYWdlcy9wcm9maWxlLW1lbnUtc2V0dGluZ3MtYWN0aXZlLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+U2V0dGluZ3M8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvUHJvZmlsZU1lbnVMaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJdGVtfSAke2hlYWRlclN0eWxlcy5sb2dvdXR9YH0+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9sb2dPdXR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbG9nLW91dC1wcm9maWxlLW1lbnUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+TG9nIE91dDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHQvLyBjb25zdCB7dXNlcl9wcm9maWxlX21lbnVfb3Blbn0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vIGlmKCB1c2VyX3Byb2ZpbGVfbWVudV9vcGVuID09IHRydWUpIHtcblx0XHQvLyBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0Ly8gfVxuXHR9XG5cblx0X2hhbmRsZUNsaWNrID0gKGUpID0+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnY2xpY2snKTtcblx0XHQvLyB0aGlzLl90b2dnbGVVc2VyUHJvZmlsZU1lbnUoKTtcblx0fVxuXG5cdF9yZW5kZXJVc2VyTWVudUljb24oKSB7XG5cdFx0aWYoIHRoaXMuc3RhdGUudXNlcl9wcm9maWxlX21lbnVfb3BlbiA9PSBmYWxzZSApIHtcblx0XHRcdHJldHVybiA8aW1nIHNyYz1cIi9pbWFnZXMvYWNjb3VudC1hcnJvdy5zdmdcIiBhbHQ9XCJcIiAvPlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gPGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5pY29uT3Blbn0gc3JjPVwiL2ltYWdlcy9hY2NvdW50LWFycm93LnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlclVzZXJNZW51KCkge1xuXHRcdGNvbnN0IHt1c2VyfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZGlzcGxheV9uYW1lID0gdGhpcy5wcm9wcy5kaXNwbGF5X25hbWU7XG5cdFx0aWYoIHVzZXIgIT09IGZhbHNlICYmIHVzZXIgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PD5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLnVzZXJNZW51fSBjbGVhcmZpeGB9IGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuc2VhcmNofWB9PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9maW5kXCI+XG5cdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMuc2VhcmNofSBzcmM9XCIvaW1hZ2VzL3NlYXJjaC5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBTZWFyY2hcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtganMtYWNjb3VudC1tZW51IG1lbnUtaXRlbSAke2hlYWRlclN0eWxlcy5hY2NvdW50fWB9PlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5fdG9nZ2xlVXNlclByb2ZpbGVNZW51fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7ZGlzcGxheV9uYW1lfSB7dGhpcy5fcmVuZGVyVXNlck1lbnVJY29uKCl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR7dGhpcy5fcmVuZGVyVXNlclByb2ZpbGVNZW51KCl9XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDw+XG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy51c2VyTWVudX0gY2xlYXJmaXhgfSBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgbWVudS1pdGVtICR7aGVhZGVyU3R5bGVzLnNlYXJjaH1gfT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvZmluZFwiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLnNlYXJjaH0gc3JjPVwiL2ltYWdlcy9zZWFyY2guc3ZnXCIgYWx0PVwiR292V2hpdGVQYXBlcnMgU2VhcmNoXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT17YGpzLWFjY291bnQtbWVudSBtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMubG9naW59YH0+XG5cdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0aGlzLl90b2dnbGVMb2dpbn0gY2xhc3NOYW1lPXtganMtbG9naW4gJHtoZWFkZXJTdHlsZXMubG9naW59YH0+TG9naW48L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtgbWVudS1pdGVtICR7aGVhZGVyU3R5bGVzLmdldFN0YXJ0ZWR9YH0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17YGJ1dHRvbiAke2hlYWRlclN0eWxlcy5idXR0b259YH0+R2V0IHN0YXJ0ZWQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8PlxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5oZWFkZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtOSBtZWRpdW0tMTAgbGFyZ2UtOCBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17aGVhZGVyU3R5bGVzLmxvZ299IHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJHb3ZXaGl0ZVBhcGVycyBMb2dvXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5uYXZpZ2F0aW9uV3JhcH0+XG5cdFx0XHRcdFx0XHRcdDxuYXZcblx0XHRcdFx0XHRcdFx0XHRpZD1cInNpdGUtbmF2aWdhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubW9iaWxlX21lbnVfb3BlbiA9PSB0cnVlID8gYCR7aGVhZGVyU3R5bGVzLm1haW5OYXZpZ2F0aW9ufSBjbGVhcmZpeCAke2hlYWRlclN0eWxlcy50b2dnbGVkfWAgOiBgJHtoZWFkZXJTdHlsZXMubWFpbk5hdmlnYXRpb259IGNsZWFyZml4YFxuXHRcdFx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl90b2dnbGVNZW51fSBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51VG9nZ2xlfSBhcmlhLWNvbnRyb2xzPVwicHJpbWFyeS1tZW51XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzY3JlZW4tcmVhZGVyLXRleHRcIj5Ub2dnbGUgTW9iaWxlIE1lbnU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiYnVyZ2VyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm1vYmlsZV9tZW51X29wZW4gPT0gdHJ1ZSA/IGAke2hlYWRlclN0eWxlcy5idXJnZXJ9ICR7aGVhZGVyU3R5bGVzLm9wZW59YCA6IGAke2hlYWRlclN0eWxlcy5idXJnZXJ9YFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVQcmltYXJ5TWVudUNvbnRhaW5lcn0gY2xlYXJmaXhgfT5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBpZD1cInByaW1hcnktbWVudVwiIGNsYXNzTmFtZT17YG1lbnUgJHtoZWFkZXJTdHlsZXMubWVudX0gY2xlYXJmaXhgfSBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuaG9tZU1lbnVMaW5rfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL21lbnUtaG9tZS5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SG9tZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9maW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1maW5kLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZpbmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lbnVMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWVudS1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lbnVMaW5rIGhyZWY9XCIvcG9zdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMubWVudUltYWdlfSBzcmM9XCIvaW1hZ2VzL21lbnUtcG9zdC5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQb3N0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL3Byb21vdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1lbnVJbWFnZX0gJHtoZWFkZXJTdHlsZXMucHJvbW90ZX1gfSBzcmM9XCIvaW1hZ2VzL21lbnUtcHJvbW90ZS5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQcm9tb3RlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZW51TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxNZW51TGluayBocmVmPVwiL2Fib3V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1hYm91dC5wbmdcIiBhbHQ9XCJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBYm91dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi90ZWFtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLnRlYW19YH0gc3JjPVwiL2ltYWdlcy9tZW51LXRlYW0ucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VGVhbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUxpbmsgaHJlZj1cIi9ibG9nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2Ake2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9ICR7aGVhZGVyU3R5bGVzLmJsb2d9YH0gc3JjPVwiL2ltYWdlcy9tZW51LWJsb2cucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QmxvZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVudUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9e2BtZW51LWl0ZW0gJHtoZWFkZXJTdHlsZXMuZXZlbnRzTWVudUxpbmt9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ292ZXZlbnRzLmNvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5tZW51SW1hZ2V9IHNyYz1cIi9pbWFnZXMvbWVudS1ldmVudHMucG5nXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEdvIHRvIEdvdkV2ZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7aGVhZGVyU3R5bGVzLm1vYmlsZVVzZXJNZW51V3JhcH0gY2xlYXJmaXhgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuX3JlbmRlclVzZXJNZW51KCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBtZWRpdW0tMiBsYXJnZS00IGNvbHVtbnMgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtoZWFkZXJTdHlsZXMubWFpblVzZXJNZW51V3JhcH0gY2xlYXJmaXhgfT5cblx0XHRcdFx0XHRcdHt0aGlzLl9yZW5kZXJVc2VyTWVudSgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PExvZ2luTW9kYWxcblx0XHRcdFx0XHRvcGVuPXt0aGlzLnN0YXRlLmxvZ2luX29wZW59XG5cdFx0XHRcdFx0dG9nZ2xlPXsoKSA9PiB0aGlzLl90b2dnbGVMb2dpbigpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8ZGl2IGlkPVwiaWUta2lsbGFcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiR292V2hpdGVQYXBlcnMgTG9nb1wiIC8+XG5cdFx0XHRcdDxoMz5Tb3JyeSwgeW91ciBicm93c2VyIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBhcHBsaWNhdGlvbi4gUGxlYXNlIHVzZSB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgR29vZ2xlIENocm9tZS9DaHJvbWl1bSwgTW96aWxsYSBGaXJlZm94IG9yIFNhZmFyaS48L2gzPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IGxvZ2luTW9kYWxTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2NvbXBvbmVudHMvbG9naW5tb2RhbC5tb2R1bGUuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNsYXNzIExvZ2luTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbWFpbDogJycsXG5cdFx0XHRwYXNzOiAnJyxcblx0XHRcdGVycm9yOiAnJyxcblx0XHRcdHdvcmtpbmc6IGZhbHNlLFxuXHRcdH1cblxuXHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShldmVudCkge1xuXHRcdGxldCBuYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0W25hbWVdOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fVxuXG5cdF9oYW5kbGVFc2NhcGUgPSAoZSkgPT4ge1xuXHRcdGlmIChlLndoaWNoID09IDI3KSB7XG5cdFx0XHR0aGlzLnByb3BzLnRvZ2dsZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9oYW5kbGVDbGljayA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKCBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2xvc2UtbW9kYWwnKSApIHtcblx0XHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdFx0fVxuXHR9XG5cblx0X2ZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xuXHRcdHRoaXMucHJvcHMudG9nZ2xlKCk7XG5cdH1cblxuXHRfcHJvY2Vzc0xvZ2luID0gKCkgPT4ge1xuXHRcdGxldCBidXR0b24sXG5cdFx0XHRcdGdvdkJ1dHRvbixcblx0XHRcdFx0anNvbixcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRsb2dpbixcblx0XHRcdFx0ZW1haWxGaWVsZCxcblx0XHRcdFx0cGFzc0ZpZWxkO1xuXG5cdFx0ZW1haWxGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuXHRcdHBhc3NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzXCJdJyk7XG5cdFx0aWYgKCFlbWFpbEZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdFx0ZW1haWxGaWVsZC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVtYWlsRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuXHRcdH1cblxuXHRcdGlmICghcGFzc0ZpZWxkLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdFx0cGFzc0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFzc0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcblx0XHR9XG5cblx0XHRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9naW4nKTtcblx0XHRnb3ZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9naW4tZ292ZXZlbnRzJyk7XG5cdFx0bG9naW4gPSB0aGlzO1xuXHRcdHVybCA9ICdodHRwczovL2d3cGFkbWluLmNvZGV3cmFuZ2xlci5pby9hcGkvZ3dwL3YxL21hbnVhbC11c2VyLWxvZ2luJztcblx0XHRqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJlbWFpbFwiOiB0aGlzLnN0YXRlLmVtYWlsLFxuXHRcdFx0XCJwYXNzXCI6IHRoaXMuc3RhdGUucGFzcyxcblx0XHR9KTtcblxuXHRcdGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0Z292QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdGxvZ2luLnNldFN0YXRlKHtcblx0XHRcdHdvcmtpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0Z292QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdGxldCBmbGF0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cblx0XHRcdFx0aWYoIGZsYXQuaW5jbHVkZXMoJ2Vycm9yJykgKSB7XG5cdFx0XHRcdFx0bG9naW4uc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6IGRhdGEubWVzc2FnZSxcblx0XHRcdFx0XHRcdHdvcmtpbmc6IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRDb29raWVzLnNldCgndXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuXHRcdFx0XHRsb2dpbi5zZXRTdGF0ZShcblx0XHRcdFx0XHQoKSA9PiAoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6ICcnLFxuXHRcdFx0XHRcdFx0d29ya2luZzogZmFsc2UsXG5cdFx0XHRcdFx0XHRlbWFpbDogJycsXG5cdFx0XHRcdFx0XHRwYXNzOiAnJ1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGxvZ2luLnByb3BzLnRvZ2dsZSgpO1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0sIDEwMDAgKTtcblx0XHR9KTtcblx0fVxuXG5cdF9wcm9jZXNzR292RXZlbnRzTG9naW4gPSAoKSA9PiB7XG5cdFx0bGV0IGJ1dHRvbixcblx0XHRcdFx0Z292QnV0dG9uLFxuXHRcdFx0XHRqc29uLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdGxvZ2luLFxuXHRcdFx0XHRlbWFpbEZpZWxkLFxuXHRcdFx0XHRwYXNzRmllbGQ7XG5cblx0XHRlbWFpbEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG5cdFx0cGFzc0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBhc3NcIl0nKTtcblx0XHRpZiAoIWVtYWlsRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XG5cdFx0XHRlbWFpbEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZW1haWxGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwYXNzRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XG5cdFx0XHRwYXNzRmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXNzRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuXHRcdH1cblxuXHRcdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbicpO1xuXHRcdGdvdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2dpbi1nb3ZldmVudHMnKTtcblx0XHRsb2dpbiA9IHRoaXM7XG5cdFx0dXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvZ292ZXZlbnRzLXVzZXItbG9naW4nO1xuXHRcdGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImVtYWlsXCI6IHRoaXMuc3RhdGUuZW1haWwsXG5cdFx0XHRcInBhc3NcIjogdGhpcy5zdGF0ZS5wYXNzLFxuXHRcdH0pO1xuXG5cdFx0YnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRnb3ZCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGxvZ2luLnNldFN0YXRlKHtcblx0XHRcdHdvcmtpbmc6IHRydWVcblx0XHR9KTtcblxuXHRcdGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRnb3ZCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0bGV0IGZsYXQgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuXHRcdFx0XHRpZiggZmxhdC5pbmNsdWRlcygnZXJyb3InKSApIHtcblx0XHRcdFx0XHRsb2dpbi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRlcnJvcjogZGF0YS5tZXNzYWdlLFxuXHRcdFx0XHRcdFx0d29ya2luZzogZmFsc2Vcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdENvb2tpZXMuc2V0KCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG5cdFx0XHRcdGxvZ2luLnNldFN0YXRlKFxuXHRcdFx0XHRcdCgpID0+ICh7XG5cdFx0XHRcdFx0XHRlcnJvcjogJycsXG5cdFx0XHRcdFx0XHR3b3JraW5nOiBmYWxzZSxcblx0XHRcdFx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdFx0XHRcdHBhc3M6ICcnXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9naW4ucHJvcHMudG9nZ2xlKCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fSwgMTAwMCApO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGNvbnN0IHtvcGVufSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3Qge3dvcmtpbmd9ID0gdGhpcy5zdGF0ZTtcblx0XHRsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcblx0XHRpZiggb3BlbiApIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjYXBlICk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbGljayApO1xuXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbW9kYWwnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NhcGUgKTtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrICk7XG5cdFx0XHRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tb2RhbCcpO1xuXHRcdH1cblxuXHRcdGlmKCB3b3JraW5nICkge1xuXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCd3b3JraW5nJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnd29ya2luZycpO1xuXHRcdH1cblxuXHR9XG5cblx0X3JlbmRlck1vZGFsQ2xhc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3Qge29wZW59ID0gdGhpcy5wcm9wcztcblx0XHRpZiggb3BlbiApIHtcblx0XHRcdHJldHVybiBgJHtsb2dpbk1vZGFsU3R5bGVzLndyYXB9ICR7bG9naW5Nb2RhbFN0eWxlcy5vcGVufWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBgJHtsb2dpbk1vZGFsU3R5bGVzLndyYXB9YFxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7ZW1haWwscGFzcyxlcnJvcn0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybihcblx0XHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5fcmVuZGVyTW9kYWxDbGFzcygpfT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyAke2xvZ2luTW9kYWxTdHlsZXMuaGVhZGVyfWB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5sb2dvfSBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNiBjb2x1bW5zIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmNsb3NlfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnRvZ2dsZSgpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9pbWFnZXMvY2xvc2Uuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7bG9naW5Nb2RhbFN0eWxlcy5sb2dpbn1gfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdDxoMj5XZWxjb21lPC9oMj5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuaHJ9IHNyYz1cIi9pbWFnZXMvc2VwLnN2Z1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdDxwPlNpZ24gaW4gdG8gYWNjZXNzIEdvdldoaXRlUGFwZXJzLjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2xvZ2luTW9kYWxTdHlsZXMuZm9ybX1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkVtYWlsIEFkZHJlc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCIgcmVxdWlyZWQgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzfSBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiIHJlcXVpcmVkIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuZXJyb3J9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS5lcnJvcn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcGFzc3dvcmQtcmVzZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17dGhpcy5fZm9yZ290UGFzc3dvcmR9IGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5mb3Jnb3R9PkZvcmdvdCBwYXNzd29yZD88L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zaWduaW59YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBvbkNsaWNrPXt0aGlzLl9wcm9jZXNzTG9naW59IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJqcy1sb2dpbiBidXR0b25cIiB2YWx1ZT1cIkxvZyBJblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zaWduaW5Hb3ZFdmVudHN9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5fcHJvY2Vzc0dvdkV2ZW50c0xvZ2lufSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwianMtbG9naW4tZ292ZXZlbnRzIGJ1dHRvblwiPjxpbWcgc3JjPVwiL2ltYWdlcy9nb3ZldmVudHMtbG9nby5wbmdcIiBhbHQ9XCJcIiAvPiA8c3Bhbj5Mb2cgSW4gd2l0aCBHb3ZFdmVudHM8L3NwYW4+PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyAke2xvZ2luTW9kYWxTdHlsZXMuc2VwfWB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltYWdlcy9jb250aW51ZS13aXRoLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7bG9naW5Nb2RhbFN0eWxlcy5zb2NpYWxCbG9ja31gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgZGF0YS1jbG9zZS1tb2RhbCBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuZ29vZ2xlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5zb2NpYWx9IHNyYz1cIi9pbWFnZXMvbG9naW4tZ29vZ2xlLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5mYn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgZGF0YS1jbG9zZS1tb2RhbCBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuc29jaWFsfSBzcmM9XCIvaW1hZ2VzL2xvZ2luLWZiLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBkYXRhLWNsb3NlLW1vZGFsIGNsYXNzTmFtZT17bG9naW5Nb2RhbFN0eWxlcy5saW5rZWRpbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgZGF0YS1jbG9zZS1tb2RhbCBjbGFzc05hbWU9e2xvZ2luTW9kYWxTdHlsZXMuc29jaWFsfSBzcmM9XCIvaW1hZ2VzL2xvZ2luLWxpbmtlZGluLnBuZ1wiIGFsdD1cIlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtsb2dpbk1vZGFsU3R5bGVzLnNpZ25VcH1gfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1ucyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGg1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgZGF0YS1jbG9zZS1tb2RhbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gZGF0YS1jbG9zZS1tb2RhbD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/PC9zcGFuPiBTaWduIFVwIDxpbWcgY2xhc3NOYW1lPXtsb2dpbk1vZGFsU3R5bGVzLmxpbmtBcnJvd30gZGF0YS1jbG9zZS1tb2RhbCBzcmM9XCIvaW1hZ2VzL3JpZ2h0LWFycm93LWJsdWUuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBoZWFkZXJTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2hlYWRlci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGxldCBjbGFzc05hbWUgPSBjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJydcblx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZikge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fSBlbHNlIGlmICggcm91dGVyLnBhdGhuYW1lID09ICcvYmxvZy9bcG9zdF0nICYmIGhyZWYgPT0gJy9ibG9nJyApIHtcblx0XHRjbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7aGVhZGVyU3R5bGVzLmFjdGl2ZX1gXG5cdH0gZWxzZSBpZiAoIHJvdXRlci5wYXRobmFtZSA9PSAnL3doaXRlcGFwZXJzL1t3aGl0ZXBhcGVyXScgJiYgaHJlZiA9PSAnL2ZpbmQnICkge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fSBlbHNlIGlmICggcm91dGVyLnBhdGhuYW1lID09ICcvdG9waWMvW3RvcGljXScgJiYgaHJlZiA9PSAnL2ZpbmQnICkge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtoZWFkZXJTdHlsZXMuYWN0aXZlfWBcblx0fVxuXG5cdHJldHVybiA8TGluayBocmVmPXtocmVmfT57UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7IGNsYXNzTmFtZSB9KX08L0xpbms+XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBwcm9maWxlU2lkZWJhclN0eWxlcyBmcm9tICcuLi9wdWJsaWMvc3R5bGVzL21vZHVsZXMvY29tcG9uZW50cy9wcm9maWxlc2lkZWJhci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cdGxldCBjbGFzc05hbWUgPSBjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJydcblx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZikge1xuXHRcdGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtwcm9maWxlU2lkZWJhclN0eWxlcy5hY3RpdmV9YFxuXHR9XG5cblx0cmV0dXJuIDxMaW5rIGhyZWY9e2hyZWZ9PntSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgY2xhc3NOYW1lIH0pfTwvTGluaz5cbn1cbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZXJyb3JTdHlsZXMgZnJvbSAnLi4vcHVibGljL3N0eWxlcy9tb2R1bGVzL2Vycm9yLm1vZHVsZS5jc3MnO1xuXG5jbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGRpc3BsYXlfbmFtZSA9IHRoaXMucHJvcHMuZGlzcGxheV9uYW1lO1xuXHRcdGNvbnN0IHt1c2VyfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlIGtleT1cInBhZ2UtdGl0bGVcIj40MDQgLSBQYWdlIE5vdCBGb3VuZDwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZVwiIGNvbnRlbnQ9XCIvZmF2aWNvbi0yNzB4MjcwLnBuZ1wiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PEhlYWRlciB7Li4udXNlcn0gZGlzcGxheV9uYW1lPXtkaXNwbGF5X25hbWV9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ZXJyb3JTdHlsZXMuZXJyb3JQYWdlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Vycm9yU3R5bGVzLmlubmVyfT5cblx0XHRcdFx0XHQ8aDE+UGFnZSBOb3QgRm91bmQ8L2gxPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXtlcnJvclN0eWxlcy5ocn0gc3JjPVwiL2ltYWdlcy9zZXAuc3ZnXCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyIG9yXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHRcdFx0XHRcdFx0IDxhIGNsYXNzTmFtZT17ZXJyb3JTdHlsZXMubGlua30+IGNvbnRhY3QgdXMgPGltZyBjbGFzc05hbWU9e2Vycm9yU3R5bGVzLmxpbmtBcnJvd30gc3JjPVwiL2ltYWdlcy9yaWdodC1hcnJvdy1ibHVlLnN2Z1wiIGFsdD1cIlwiIC8+PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17YGJ1dHRvbiAke2Vycm9yU3R5bGVzLmJ1dHRvbn1gfT5HbyBCYWNrPC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJsb2dpbm1vZGFsX3dyYXBfXzMzU2pBXCIsXG5cdFwib3BlblwiOiBcImxvZ2lubW9kYWxfb3Blbl9fMklTNENcIixcblx0XCJoZWFkZXJcIjogXCJsb2dpbm1vZGFsX2hlYWRlcl9fMTIzQzhcIixcblx0XCJjbG9zZVwiOiBcImxvZ2lubW9kYWxfY2xvc2VfXzF5WW8tXCIsXG5cdFwiaHJcIjogXCJsb2dpbm1vZGFsX2hyX193R3Q0U1wiLFxuXHRcImxvZ2luXCI6IFwibG9naW5tb2RhbF9sb2dpbl9fMURyZm5cIixcblx0XCJmbGV4XCI6IFwibG9naW5tb2RhbF9mbGV4X18xTEVhNlwiLFxuXHRcImJ1dHRvblwiOiBcImxvZ2lubW9kYWxfYnV0dG9uX19aT0FLNFwiLFxuXHRcImZvcm1cIjogXCJsb2dpbm1vZGFsX2Zvcm1fXzNnU1ZMXCIsXG5cdFwic2lnbmluXCI6IFwibG9naW5tb2RhbF9zaWduaW5fXzFKeXYwXCIsXG5cdFwic2lnbmluR292RXZlbnRzXCI6IFwibG9naW5tb2RhbF9zaWduaW5Hb3ZFdmVudHNfXzM1RDc4XCIsXG5cdFwiZm9yZ290XCI6IFwibG9naW5tb2RhbF9mb3Jnb3RfXzJic3U4XCIsXG5cdFwic2VwXCI6IFwibG9naW5tb2RhbF9zZXBfXzFoSVkzXCIsXG5cdFwic29jaWFsQmxvY2tcIjogXCJsb2dpbm1vZGFsX3NvY2lhbEJsb2NrX18xTm4zZlwiLFxuXHRcInNpZ25VcFwiOiBcImxvZ2lubW9kYWxfc2lnblVwX18xTmt4cFwiLFxuXHRcImVycm9yXCI6IFwibG9naW5tb2RhbF9lcnJvcl9fMjhVYmdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJwcm9maWxlc2lkZWJhcl93cmFwX18xT2FpNFwiLFxuXHRcIm1lbnVcIjogXCJwcm9maWxlc2lkZWJhcl9tZW51X18ySXRad1wiLFxuXHRcIm1lbnVJbWFnZVwiOiBcInByb2ZpbGVzaWRlYmFyX21lbnVJbWFnZV9fMUlkX1pcIixcblx0XCJhY3RpdmVcIjogXCJwcm9maWxlc2lkZWJhcl9hY3RpdmVfXzJfdDVsXCIsXG5cdFwibWVudUl0ZW1cIjogXCJwcm9maWxlc2lkZWJhcl9tZW51SXRlbV9fN0xXcGJcIixcblx0XCJsb2dvdXRcIjogXCJwcm9maWxlc2lkZWJhcl9sb2dvdXRfXzFsLVVNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlcnJvclBhZ2VcIjogXCJlcnJvcl9lcnJvclBhZ2VfXzJSV0RrXCIsXG5cdFwiaW5uZXJcIjogXCJlcnJvcl9pbm5lcl9fM0lwYWNcIixcblx0XCJsaW5rXCI6IFwiZXJyb3JfbGlua19fV0dQUHpcIixcblx0XCJidXR0b25cIjogXCJlcnJvcl9idXR0b25fXzJNdHA1XCIsXG5cdFwiaHJcIjogXCJlcnJvcl9ocl9fczBUbHlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRpb25XcmFwXCI6IFwiaGVhZGVyX25hdmlnYXRpb25XcmFwX18zVy10eFwiLFxuXHRcIm1haW5OYXZpZ2F0aW9uXCI6IFwiaGVhZGVyX21haW5OYXZpZ2F0aW9uX18xbVp2dVwiLFxuXHRcIm1lbnVQcmltYXJ5TWVudUNvbnRhaW5lclwiOiBcImhlYWRlcl9tZW51UHJpbWFyeU1lbnVDb250YWluZXJfXzJFdGh6XCIsXG5cdFwiZm9jdXNcIjogXCJoZWFkZXJfZm9jdXNfXzFKUHZZXCIsXG5cdFwibWVudVwiOiBcImhlYWRlcl9tZW51X18xOElLd1wiLFxuXHRcImV2ZW50c01lbnVMaW5rXCI6IFwiaGVhZGVyX2V2ZW50c01lbnVMaW5rX18xQmtRLVwiLFxuXHRcImhvbWVNZW51TGlua1wiOiBcImhlYWRlcl9ob21lTWVudUxpbmtfXzNQdEdnXCIsXG5cdFwibWVudUltYWdlXCI6IFwiaGVhZGVyX21lbnVJbWFnZV9fMXl2TmFcIixcblx0XCJwcm9tb3RlXCI6IFwiaGVhZGVyX3Byb21vdGVfX0ljdEtJXCIsXG5cdFwidGVhbVwiOiBcImhlYWRlcl90ZWFtX18xbGlrQ1wiLFxuXHRcImJsb2dcIjogXCJoZWFkZXJfYmxvZ19fMUtsZ3dcIixcblx0XCJhY3RpdmVcIjogXCJoZWFkZXJfYWN0aXZlX19keHR5blwiLFxuXHRcImN1cnJlbnRfcGFnZV9pdGVtXCI6IFwiaGVhZGVyX2N1cnJlbnRfcGFnZV9pdGVtX18xOGVkT1wiLFxuXHRcImN1cnJlbnQtbWVudS1pdGVtXCI6IFwiaGVhZGVyX2N1cnJlbnQtbWVudS1pdGVtX18yMVVtU1wiLFxuXHRcImN1cnJlbnRfcGFnZV9hbmNlc3RvclwiOiBcImhlYWRlcl9jdXJyZW50X3BhZ2VfYW5jZXN0b3JfXzNRYmRPXCIsXG5cdFwiY3VycmVudC1tZW51LWFuY2VzdG9yXCI6IFwiaGVhZGVyX2N1cnJlbnQtbWVudS1hbmNlc3Rvcl9fM1h5QVdcIixcblx0XCJtb2JpbGVVc2VyTWVudVdyYXBcIjogXCJoZWFkZXJfbW9iaWxlVXNlck1lbnVXcmFwX18xQ3dQVFwiLFxuXHRcInVzZXJNZW51XCI6IFwiaGVhZGVyX3VzZXJNZW51X19peTlBd1wiLFxuXHRcImxvZ2luXCI6IFwiaGVhZGVyX2xvZ2luX18xMDNXVVwiLFxuXHRcImJ1dHRvblwiOiBcImhlYWRlcl9idXR0b25fXzNRY2RUXCIsXG5cdFwiZ2V0U3RhcnRlZFwiOiBcImhlYWRlcl9nZXRTdGFydGVkX18xNVduQVwiLFxuXHRcIm1haW5Vc2VyTWVudVdyYXBcIjogXCJoZWFkZXJfbWFpblVzZXJNZW51V3JhcF9fMW5icmxcIixcblx0XCJpY29uT3BlblwiOiBcImhlYWRlcl9pY29uT3Blbl9fM215YnhcIixcblx0XCJhY2NvdW50XCI6IFwiaGVhZGVyX2FjY291bnRfXzNyaEJJXCIsXG5cdFwidG9nZ2xlZFwiOiBcImhlYWRlcl90b2dnbGVkX18xQU55UlwiLFxuXHRcInNlYXJjaFwiOiBcImhlYWRlcl9zZWFyY2hfXzJ1bEtTXCIsXG5cdFwiaGVhZGVyX2J1dHRvblwiOiBcImhlYWRlcl9oZWFkZXJfYnV0dG9uX18xVDBBeVwiLFxuXHRcIm1lbnVUb2dnbGVcIjogXCJoZWFkZXJfbWVudVRvZ2dsZV9fMXB6M2lcIixcblx0XCJidXJnZXJcIjogXCJoZWFkZXJfYnVyZ2VyX192SWNCY1wiLFxuXHRcIm9wZW5cIjogXCJoZWFkZXJfb3Blbl9fMUFUalhcIixcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18yMldiWFwiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMkFtVUdcIixcblx0XCJwcm9maWxlTWVudVwiOiBcImhlYWRlcl9wcm9maWxlTWVudV9fMTk5WmRcIixcblx0XCJqcy1hY2NvdW50LW1lbnVcIjogXCJoZWFkZXJfanMtYWNjb3VudC1tZW51X18yVG5OZlwiLFxuXHRcIm1lbnVJdGVtXCI6IFwiaGVhZGVyX21lbnVJdGVtX18yMmVCMVwiLFxuXHRcImxvZ291dFwiOiBcImhlYWRlcl9sb2dvdXRfX3VDNEhtXCJcbn07XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9nd3BhZG1pbi5jb2Rld3JhbmdsZXIuaW8vYXBpL2d3cC92MSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRwcmVzc1NlcnZpY2Uge1xuXG5cdGFzeW5jIGZldGNoV2hpdGVwYXBlcnMoXG5cdFx0XHRpdGVtcyxcblx0XHRcdG9mZnNldCxcblx0XHRcdHRvcGljcyA9IFtdLFxuXHRcdFx0dGFncyA9IFtdLFxuXHRcdFx0Zm9ybWF0ID0gJycsXG5cdFx0XHRhZ2VuY2llcyA9IFtdLFxuXHRcdFx0c2VhcmNoID0gJycsXG5cdFx0XHRzdGFydF9kYXRlID0gJycsXG5cdFx0XHRlbmRfZGF0ZSA9ICcnLFxuXHRcdFx0c29ydF9ieSA9ICdyZWxldmFuY2UnLFxuXHRcdFx0dXNlcl9pZCA9ICcnLFxuXHRcdFx0b3JnYW5pemF0aW9uX2lkID0gJydcblx0XHQpXG5cdHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3doaXRlcGFwZXJzLz9pdGVtcz0ke2l0ZW1zfSZvZmZzZXQ9JHtvZmZzZXR9JnRvcGljcz0ke3RvcGljc30mdGFncz0ke3RhZ3N9JmZvcm1hdD0ke2Zvcm1hdH0mYWdlbmNpZXM9JHthZ2VuY2llc30mcz0ke3NlYXJjaH0mc3RhcnRfZGF0ZT0ke3N0YXJ0X2RhdGV9JmVuZF9kYXRlPSR7ZW5kX2RhdGV9JnNvcnRfYnk9JHtzb3J0X2J5fSZ1c2VyX2lkPSR7dXNlcl9pZH0mb3JnYW5pemF0aW9uX2lkPSR7b3JnYW5pemF0aW9uX2lkfWApXG5cdFx0Y29uc3Qgd2hpdGVwYXBlcnMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gd2hpdGVwYXBlcnM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFNhdmVkU2VhcmNoKGlkKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9zYXZlZC1zZWFyY2gvJHtpZH1gKVxuXHRcdGNvbnN0IHNlYXJjaCA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4gc2VhcmNoO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hTYXZlZFNlYXJjaGVzKCB1c2VyX2lkLCBhY2Nlc3NfdG9rZW4gKSB7XG5cdFx0Y29uc3QgdXJsID0gYCR7YXBpVVJMfS9zYXZlZC1zZWFyY2hlcy9gXG5cblx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogYWNjZXNzX3Rva2VuLFxuXHRcdFx0XCJ1c2VyX2lkXCI6IHVzZXJfaWQsXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBzYXZlZF9zZWFyY2hlcyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBzYXZlZF9zZWFyY2hlcztcblx0fVxuXG5cdGFzeW5jIGZldGNoV2hpdGVwYXBlcihzbHVnKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS93aGl0ZXBhcGVycy8ke3NsdWd9YClcblx0XHRjb25zdCB3aGl0ZXBhcGVyID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiB3aGl0ZXBhcGVyO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hQb3N0cyhpdGVtcyxvZmZzZXQsc2VhcmNoID0gJycpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3Bvc3RzLz9pdGVtcz0ke2l0ZW1zfSZvZmZzZXQ9JHtvZmZzZXR9JnM9JHtzZWFyY2h9YClcblx0XHRjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBwb3N0cztcblx0fVxuXG5cdGFzeW5jIGZldGNoU2xpZGVzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vc2xpZGVzYClcblx0XHRjb25zdCBzbGlkZXMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gc2xpZGVzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hQb3N0KHNsdWcpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3Bvc3RzLyR7c2x1Z31gKVxuXHRcdGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHBvc3Q7XG5cdH1cblxuXHRhc3luYyBmZXRjaFBhZ2Uoc2x1Zykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vcGFnZXMvJHtzbHVnfWApXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4gcGFnZTtcblx0fVxuXG5cdGFzeW5jIGZldGNoRm9ybWF0cygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2Zvcm1hdHMvYClcblx0XHRjb25zdCBmb3JtYXRzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIGZvcm1hdHM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFRvcGljcygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3RvcGljcy9gKVxuXHRcdGNvbnN0IHRvcGljcyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB0b3BpY3M7XG5cdH1cblxuXHRhc3luYyBmZXRjaFRvcGljKHNsdWcpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3RvcGljLyR7c2x1Z31gKVxuXHRcdGNvbnN0IHRvcGljID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiB0b3BpYztcblx0fVxuXG5cdGFzeW5jIGZldGNoVGFncygpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3RhZ3MvYClcblx0XHRjb25zdCB0YWdzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHRhZ3M7XG5cdH1cblxuXHRhc3luYyBmZXRjaFN0YXRzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vZmV0Y2gtc3RhdHMvYClcblx0XHRjb25zdCBzdGF0cyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBzdGF0cztcblx0fVxuXG5cdGFzeW5jIGZldGNoVGVhbSgpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3RlYW0vYClcblx0XHRjb25zdCB0ZWFtID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHRlYW07XG5cdH1cblxuXHRhc3luYyBmZXRjaEFnZW5jaWVzKHBhcmVudCkge1xuXHRcdGxldCByZXM7XG5cdFx0aWYoIHBhcmVudCA9PSAnJyApIHtcblx0XHRcdHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vYWdlbmNpZXMvP29yZGVyYnk9bmFtZWApXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vYWdlbmNpZXMvP3BhcmVudD0ke3BhcmVudH1gKVxuXHRcdH1cblx0XHRjb25zdCBhZ2VuY2llcyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBhZ2VuY2llcztcblx0fVxuXG5cdGFzeW5jIHNlYXJjaE9yZ2FuaXphdGlvbnMoc2VhcmNoLCBpdGVtcyA9IDEwKSB7XG5cdFx0aWYoIHNlYXJjaCA9PSAnJyApIHtcblx0XHRcdHJldHVybiBbXVxuXHRcdH1cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L29yZ2FuaXphdGlvbnMvP3NlYXJjaD0ke3NlYXJjaH0maXRlbXM9JHtpdGVtc31gKVxuXHRcdGNvbnN0IG9yZ3MgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gb3Jncztcblx0fVxuXG5cdGFzeW5jIGZldGNoT3JnYW5pemF0aW9uKGlkKSB7XG5cdFx0aWYoIGlkID09ICcnICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L29yZ2FuaXphdGlvbnMvJHtpZH1gKVxuXHRcdGNvbnN0IG9yZyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBvcmc7XG5cdH1cblxuXHRhc3luYyBmZXRjaEZhdm9yaXRlcyhhY2Nlc3NfdG9rZW4saXRlbXMsb2Zmc2V0KSB7XG5cblx0XHRjb25zdCB1cmwgPSBgJHthcGlVUkx9L2Zhdm9yaXRlcy9gXG5cblx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogYWNjZXNzX3Rva2VuLFxuXHRcdFx0XCJpdGVtc1wiOiBpdGVtcyxcblx0XHRcdFwib2Zmc2V0XCI6IG9mZnNldFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgd2hpdGVwYXBlcnMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gd2hpdGVwYXBlcnM7XG5cdH1cblxuXHRhc3luYyBmZXRjaE9yZ2FuaXphdGlvbk1lbWJlcnMoYWNjZXNzX3Rva2VuKSB7XG5cblx0XHRjb25zdCB1cmwgPSBgJHthcGlVUkx9L29yZ2FuaXphdGlvbi1tZW1iZXJzL2Bcblx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogYWNjZXNzX3Rva2VuLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgbWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBtZW1iZXJzO1xuXHR9XG5cblx0YXN5bmMgY2hlY2tGYXZvcml0ZShpZCx0b2tlbikge1xuXHQvL1x0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9pcy1mYXZvcml0ZS9gKVxuXHRcdGNvbnN0IHVybCA9ICdodHRwczovL2d3cGFkbWluLmNvZGV3cmFuZ2xlci5pby9hcGkvZ3dwL3YxL2lzLWZhdm9yaXRlJztcblx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJJRFwiOiBpZCxcblx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IHRva2VuXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCByID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHI7XG5cdH1cblxuXHRhc3luYyBnZXRVc2VyKHRva2VuKSB7XG5cblx0XHRpZiggIXRva2VuICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHVybCA9ICdodHRwczovL2d3cGFkbWluLmNvZGV3cmFuZ2xlci5pby9hcGkvZ3dwL3YxL3VzZXInO1xuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiB0b2tlblxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgciA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiByO1xuXHR9XG5cblx0Ly8gYXN5bmMgZmV0Y2hIb21lU2xpZGVzKCkge1xuXHQvLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vaG9tZS1zbGlkZXM/aXRlbXM9NGApXG5cdC8vIFx0Y29uc3Qgc2xpZGVzID0gYXdhaXQgcmVzLmpzb24oKVxuXHQvL1xuXHQvLyBcdHJldHVybiBzbGlkZXNcblx0Ly8gfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=