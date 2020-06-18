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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles/fonts.css */ "./public/styles/fonts.css");
/* harmony import */ var _public_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_styles_foundation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/styles/foundation.css */ "./public/styles/foundation.css");
/* harmony import */ var _public_styles_foundation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_foundation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/styles/global.css */ "./public/styles/global.css");
/* harmony import */ var _public_styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_styles_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/datepicker.css */ "./public/styles/datepicker.css");
/* harmony import */ var _public_styles_datepicker_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_datepicker_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_styles_ads_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/styles/ads.css */ "./public/styles/ads.css");
/* harmony import */ var _public_styles_ads_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_ads_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_wordpress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/wordpress */ "./services/wordpress.js");
var _jsxFileName = "/home/edward/Projects/gov/gwp-test/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










class GWP extends next_app__WEBPACK_IMPORTED_MODULE_7___default.a {
  constructor(props) {
    super(props);
    this.state = {
      user: this._fetchToken(),
      display_name: '',
      organization_id: false
    };
    this.checkIE();
  }

  checkIE() {
    if (false) { var isIE, ua; }
  }

  componentDidUpdate() {}

  async componentDidMount() {
    const access_token = this._fetchToken();

    if (access_token) {
      const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_8__["default"]();
      const user = await wordpress.getUser(access_token.access_token);
      console.log('app user');
      console.log(user);
      this.setState(state => ({
        display_name: user.first_name + ' ' + user.last_name,
        organization_id: user.organization_id,
        organization_email_verified: user.organization_email_verified,
        organization_email_mismatch: user.organization_email_mismatch
      }));
    }
  }

  _fetchToken() {
    let c = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('user');

    if (c) {
      let d = c.replace('path=/', '');
      const token = JSON.parse(d);
      return token;
    } // if (process.browser) {
    // 	const token = await window.localStorage.getItem('user');
    // 	return token;
    // } else {
    // 	return false;
    // }

  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(Component, _extends({}, pageProps, this.state, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 4
      }
    }));
  }

} // This default export is required in a new `pages/_app.js` file.


/* harmony default export */ __webpack_exports__["default"] = (GWP);

/***/ }),

/***/ "./public/styles/ads.css":
/*!*******************************!*\
  !*** ./public/styles/ads.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/datepicker.css":
/*!**************************************!*\
  !*** ./public/styles/datepicker.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/fonts.css":
/*!*********************************!*\
  !*** ./public/styles/fonts.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/foundation.css":
/*!**************************************!*\
  !*** ./public/styles/foundation.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/global.css":
/*!**********************************!*\
  !*** ./public/styles/global.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvd29yZHByZXNzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJleGVjT25jZSIsImNvbnNvbGUiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiR1dQIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJfZmV0Y2hUb2tlbiIsImRpc3BsYXlfbmFtZSIsIm9yZ2FuaXphdGlvbl9pZCIsImNoZWNrSUUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImFjY2Vzc190b2tlbiIsIndvcmRwcmVzcyIsIldvcmRwcmVzc1NlcnZpY2UiLCJnZXRVc2VyIiwibG9nIiwic2V0U3RhdGUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwib3JnYW5pemF0aW9uX2VtYWlsX3ZlcmlmaWVkIiwib3JnYW5pemF0aW9uX2VtYWlsX21pc21hdGNoIiwiYyIsIkNvb2tpZXMiLCJnZXQiLCJkIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJhcGlVUkwiLCJmZXRjaFdoaXRlcGFwZXJzIiwiaXRlbXMiLCJvZmZzZXQiLCJ0b3BpY3MiLCJ0YWdzIiwiZm9ybWF0IiwiYWdlbmNpZXMiLCJzZWFyY2giLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJzb3J0X2J5IiwidXNlcl9pZCIsInJlcyIsImZldGNoIiwid2hpdGVwYXBlcnMiLCJqc29uIiwiZmV0Y2hTYXZlZFNlYXJjaCIsImlkIiwiZmV0Y2hTYXZlZFNlYXJjaGVzIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJzYXZlZF9zZWFyY2hlcyIsImZldGNoV2hpdGVwYXBlciIsInNsdWciLCJ3aGl0ZXBhcGVyIiwiZmV0Y2hQb3N0cyIsInBvc3RzIiwiZmV0Y2hTbGlkZXMiLCJzbGlkZXMiLCJmZXRjaFBvc3QiLCJwb3N0IiwiZmV0Y2hQYWdlIiwicGFnZSIsImZldGNoRm9ybWF0cyIsImZvcm1hdHMiLCJmZXRjaFRvcGljcyIsImZldGNoVG9waWMiLCJ0b3BpYyIsImZldGNoVGFncyIsImZldGNoU3RhdHMiLCJzdGF0cyIsImZldGNoVGVhbSIsInRlYW0iLCJmZXRjaEFnZW5jaWVzIiwicGFyZW50Iiwic2VhcmNoT3JnYW5pemF0aW9ucyIsIm9yZ3MiLCJmZXRjaE9yZ2FuaXphdGlvbiIsIm9yZyIsImZldGNoRmF2b3JpdGVzIiwiZmV0Y2hPcmdhbml6YXRpb25NZW1iZXJzIiwibWVtYmVycyIsImNoZWNrRmF2b3JpdGUiLCJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7O0FDQS9COztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxt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QUFHLE1BQU1DLHlEQUFLLENBQUNqRSxHQUFELEVBQU07QUFDNUJ3RSxZQUFNLEVBQUUsTUFEb0I7QUFFNUJDLFVBQUksRUFBRU4sSUFGc0I7QUFHNUJPLGFBQU8sRUFBRTtBQUNSLHdCQUFnQjtBQURSO0FBSG1CLEtBQU4sQ0FBdkI7QUFRQSxVQUFNaUMsQ0FBQyxHQUFHLE1BQU0zQyxHQUFHLENBQUNHLElBQUosRUFBaEI7QUFFQSxXQUFPd0MsQ0FBUDtBQUNBOztBQUVELFFBQU10RSxPQUFOLENBQWNXLEtBQWQsRUFBcUI7QUFFcEIsUUFBSSxDQUFDQSxLQUFMLEVBQWE7QUFDWixhQUFPLEtBQVA7QUFDQTs7QUFFRCxVQUFNaEQsR0FBRyxHQUFHLGtEQUFaO0FBQ0EsVUFBTW1FLElBQUksR0FBR2xCLElBQUksQ0FBQ3NCLFNBQUwsQ0FBZTtBQUMzQixzQkFBZ0J2QjtBQURXLEtBQWYsQ0FBYjtBQUlBLFVBQU1nQixHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBQ2pFLEdBQUQsRUFBTTtBQUM1QndFLFlBQU0sRUFBRSxNQURvQjtBQUU1QkMsVUFBSSxFQUFFTixJQUZzQjtBQUc1Qk8sYUFBTyxFQUFFO0FBQ1Isd0JBQWdCO0FBRFI7QUFIbUIsS0FBTixDQUF2QjtBQVFBLFVBQU1pQyxDQUFDLEdBQUcsTUFBTTNDLEdBQUcsQ0FBQ0csSUFBSixFQUFoQjtBQUVBLFdBQU93QyxDQUFQO0FBQ0EsR0FqUG9DLENBbVByQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXhQcUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdEMsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvZm9udHMuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlcy9mb3VuZGF0aW9uLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9zdHlsZXMvZGF0ZXBpY2tlci5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvc3R5bGVzL2Fkcy5jc3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBXb3JkcHJlc3NTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3dvcmRwcmVzcydcblxuY2xhc3MgR1dQIGV4dGVuZHMgQXBwIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dXNlcjogdGhpcy5fZmV0Y2hUb2tlbigpLFxuXHRcdFx0ZGlzcGxheV9uYW1lOiAnJyxcblx0XHRcdG9yZ2FuaXphdGlvbl9pZDogZmFsc2UsXG5cdFx0fVxuXG5cdFx0dGhpcy5jaGVja0lFKCk7XG5cdH1cblxuXHRjaGVja0lFKCkge1xuXHRcdGlmKCBwcm9jZXNzLmJyb3dzZXIgKSB7XG5cdFx0XHR2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHRcdHZhciBpc0lFID0gL01TSUV8RWRnZXxUcmlkZW50Ly50ZXN0KHVhKTtcblxuXHRcdFx0aWYgKCBpc0lFICkge1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWUta2lsbGEnKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5jbGFzc0xpc3QuYWRkKCdpZS1raWxsYScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblxuXHR9XG5cblx0YXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgYWNjZXNzX3Rva2VuID0gdGhpcy5fZmV0Y2hUb2tlbigpO1xuXHRcdGlmKCBhY2Nlc3NfdG9rZW4gKSB7XG5cdFx0XHRjb25zdCB3b3JkcHJlc3MgPSBuZXcgV29yZHByZXNzU2VydmljZVxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IHdvcmRwcmVzcy5nZXRVc2VyKGFjY2Vzc190b2tlbi5hY2Nlc3NfdG9rZW4pO1xuXHRcdFx0Y29uc29sZS5sb2coJ2FwcCB1c2VyJyk7XG5cdFx0XHRjb25zb2xlLmxvZyh1c2VyKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcblx0XHRcdFx0ZGlzcGxheV9uYW1lOiB1c2VyLmZpcnN0X25hbWUgKyAnICcgKyB1c2VyLmxhc3RfbmFtZSxcblx0XHRcdFx0b3JnYW5pemF0aW9uX2lkOiB1c2VyLm9yZ2FuaXphdGlvbl9pZCxcblx0XHRcdFx0b3JnYW5pemF0aW9uX2VtYWlsX3ZlcmlmaWVkOiB1c2VyLm9yZ2FuaXphdGlvbl9lbWFpbF92ZXJpZmllZCxcblx0XHRcdFx0b3JnYW5pemF0aW9uX2VtYWlsX21pc21hdGNoOiB1c2VyLm9yZ2FuaXphdGlvbl9lbWFpbF9taXNtYXRjaFxuXHRcdFx0fSkpO1xuXHRcdH1cblx0fVxuXG5cblxuXHQgX2ZldGNoVG9rZW4oKSB7XG5cdFx0bGV0IGMgPSBDb29raWVzLmdldCgndXNlcicpO1xuXHRcdGlmKCBjICkge1xuXHRcdFx0bGV0IGQgPSBjLnJlcGxhY2UoJ3BhdGg9LycsICcnKTtcblx0XHRcdGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShkKTtcblx0XHRcdHJldHVybiB0b2tlbjtcblx0XHR9XG5cblx0XHQvLyBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG5cdFx0Ly8gXHRjb25zdCB0b2tlbiA9IGF3YWl0IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuXHRcdC8vIFx0cmV0dXJuIHRva2VuO1xuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHRyZXR1cm4gZmFsc2U7XG5cdFx0Ly8gfVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gey4uLnRoaXMuc3RhdGV9IC8+XG5cdFx0KTtcblx0fVxufVxuLy8gVGhpcyBkZWZhdWx0IGV4cG9ydCBpcyByZXF1aXJlZCBpbiBhIG5ldyBgcGFnZXMvX2FwcC5qc2AgZmlsZS5cbmV4cG9ydCBkZWZhdWx0IEdXUDtcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IGFwaVVSTCA9ICdodHRwczovL2d3cGFkbWluLmNvZGV3cmFuZ2xlci5pby9hcGkvZ3dwL3YxJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZHByZXNzU2VydmljZSB7XG5cblx0YXN5bmMgZmV0Y2hXaGl0ZXBhcGVycyhcblx0XHRcdGl0ZW1zLFxuXHRcdFx0b2Zmc2V0LFxuXHRcdFx0dG9waWNzID0gW10sXG5cdFx0XHR0YWdzID0gW10sXG5cdFx0XHRmb3JtYXQgPSAnJyxcblx0XHRcdGFnZW5jaWVzID0gW10sXG5cdFx0XHRzZWFyY2ggPSAnJyxcblx0XHRcdHN0YXJ0X2RhdGUgPSAnJyxcblx0XHRcdGVuZF9kYXRlID0gJycsXG5cdFx0XHRzb3J0X2J5ID0gJ3JlbGV2YW5jZScsXG5cdFx0XHR1c2VyX2lkID0gJycsXG5cdFx0XHRvcmdhbml6YXRpb25faWQgPSAnJ1xuXHRcdClcblx0e1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vd2hpdGVwYXBlcnMvP2l0ZW1zPSR7aXRlbXN9Jm9mZnNldD0ke29mZnNldH0mdG9waWNzPSR7dG9waWNzfSZ0YWdzPSR7dGFnc30mZm9ybWF0PSR7Zm9ybWF0fSZhZ2VuY2llcz0ke2FnZW5jaWVzfSZzPSR7c2VhcmNofSZzdGFydF9kYXRlPSR7c3RhcnRfZGF0ZX0mZW5kX2RhdGU9JHtlbmRfZGF0ZX0mc29ydF9ieT0ke3NvcnRfYnl9JnVzZXJfaWQ9JHt1c2VyX2lkfSZvcmdhbml6YXRpb25faWQ9JHtvcmdhbml6YXRpb25faWR9YClcblx0XHRjb25zdCB3aGl0ZXBhcGVycyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB3aGl0ZXBhcGVycztcblx0fVxuXG5cdGFzeW5jIGZldGNoU2F2ZWRTZWFyY2goaWQpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3NhdmVkLXNlYXJjaC8ke2lkfWApXG5cdFx0Y29uc3Qgc2VhcmNoID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiBzZWFyY2g7XG5cdH1cblxuXHRhc3luYyBmZXRjaFNhdmVkU2VhcmNoZXMoIHVzZXJfaWQsIGFjY2Vzc190b2tlbiApIHtcblx0XHRjb25zdCB1cmwgPSBgJHthcGlVUkx9L3NhdmVkLXNlYXJjaGVzL2BcblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiBhY2Nlc3NfdG9rZW4sXG5cdFx0XHRcInVzZXJfaWRcIjogdXNlcl9pZCxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHNhdmVkX3NlYXJjaGVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHNhdmVkX3NlYXJjaGVzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hXaGl0ZXBhcGVyKHNsdWcpIHtcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L3doaXRlcGFwZXJzLyR7c2x1Z31gKVxuXHRcdGNvbnN0IHdoaXRlcGFwZXIgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHdoaXRlcGFwZXI7XG5cdH1cblxuXHRhc3luYyBmZXRjaFBvc3RzKGl0ZW1zLG9mZnNldCxzZWFyY2ggPSAnJykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vcG9zdHMvP2l0ZW1zPSR7aXRlbXN9Jm9mZnNldD0ke29mZnNldH0mcz0ke3NlYXJjaH1gKVxuXHRcdGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHBvc3RzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hTbGlkZXMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9zbGlkZXNgKVxuXHRcdGNvbnN0IHNsaWRlcyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBzbGlkZXM7XG5cdH1cblxuXHRhc3luYyBmZXRjaFBvc3Qoc2x1Zykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vcG9zdHMvJHtzbHVnfWApXG5cdFx0Y29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKClcblx0XHRyZXR1cm4gcG9zdDtcblx0fVxuXG5cdGFzeW5jIGZldGNoUGFnZShzbHVnKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9wYWdlcy8ke3NsdWd9YClcblx0XHRjb25zdCBwYWdlID0gYXdhaXQgcmVzLmpzb24oKVxuXHRcdHJldHVybiBwYWdlO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hGb3JtYXRzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vZm9ybWF0cy9gKVxuXHRcdGNvbnN0IGZvcm1hdHMgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gZm9ybWF0cztcblx0fVxuXG5cdGFzeW5jIGZldGNoVG9waWNzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdG9waWNzL2ApXG5cdFx0Y29uc3QgdG9waWNzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHRvcGljcztcblx0fVxuXG5cdGFzeW5jIGZldGNoVG9waWMoc2x1Zykge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdG9waWMvJHtzbHVnfWApXG5cdFx0Y29uc3QgdG9waWMgPSBhd2FpdCByZXMuanNvbigpXG5cdFx0cmV0dXJuIHRvcGljO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hUYWdzKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdGFncy9gKVxuXHRcdGNvbnN0IHRhZ3MgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gdGFncztcblx0fVxuXG5cdGFzeW5jIGZldGNoU3RhdHMoKSB7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9mZXRjaC1zdGF0cy9gKVxuXHRcdGNvbnN0IHN0YXRzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHN0YXRzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hUZWFtKCkge1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vdGVhbS9gKVxuXHRcdGNvbnN0IHRlYW0gPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gdGVhbTtcblx0fVxuXG5cdGFzeW5jIGZldGNoQWdlbmNpZXMocGFyZW50KSB7XG5cdFx0bGV0IHJlcztcblx0XHRpZiggcGFyZW50ID09ICcnICkge1xuXHRcdFx0cmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9hZ2VuY2llcy8/b3JkZXJieT1uYW1lYClcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9hZ2VuY2llcy8/cGFyZW50PSR7cGFyZW50fWApXG5cdFx0fVxuXHRcdGNvbnN0IGFnZW5jaWVzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIGFnZW5jaWVzO1xuXHR9XG5cblx0YXN5bmMgc2VhcmNoT3JnYW5pemF0aW9ucyhzZWFyY2gsIGl0ZW1zID0gMTApIHtcblx0XHRpZiggc2VhcmNoID09ICcnICkge1xuXHRcdFx0cmV0dXJuIFtdXG5cdFx0fVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vb3JnYW5pemF0aW9ucy8/c2VhcmNoPSR7c2VhcmNofSZpdGVtcz0ke2l0ZW1zfWApXG5cdFx0Y29uc3Qgb3JncyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiBvcmdzO1xuXHR9XG5cblx0YXN5bmMgZmV0Y2hPcmdhbml6YXRpb24oaWQpIHtcblx0XHRpZiggaWQgPT0gJycgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaVVSTH0vb3JnYW5pemF0aW9ucy8ke2lkfWApXG5cdFx0Y29uc3Qgb3JnID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIG9yZztcblx0fVxuXG5cdGFzeW5jIGZldGNoRmF2b3JpdGVzKGFjY2Vzc190b2tlbixpdGVtcyxvZmZzZXQpIHtcblxuXHRcdGNvbnN0IHVybCA9IGAke2FwaVVSTH0vZmF2b3JpdGVzL2BcblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiBhY2Nlc3NfdG9rZW4sXG5cdFx0XHRcIml0ZW1zXCI6IGl0ZW1zLFxuXHRcdFx0XCJvZmZzZXRcIjogb2Zmc2V0XG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCB3aGl0ZXBhcGVycyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRcdHJldHVybiB3aGl0ZXBhcGVycztcblx0fVxuXG5cdGFzeW5jIGZldGNoT3JnYW5pemF0aW9uTWVtYmVycyhhY2Nlc3NfdG9rZW4pIHtcblxuXHRcdGNvbnN0IHVybCA9IGAke2FwaVVSTH0vb3JnYW5pemF0aW9uLW1lbWJlcnMvYFxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcImFjY2Vzc190b2tlblwiOiBhY2Nlc3NfdG9rZW4sXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCBtZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIG1lbWJlcnM7XG5cdH1cblxuXHRhc3luYyBjaGVja0Zhdm9yaXRlKGlkLHRva2VuKSB7XG5cdC8vXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlVUkx9L2lzLWZhdm9yaXRlL2ApXG5cdFx0Y29uc3QgdXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvaXMtZmF2b3JpdGUnO1xuXHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcIklEXCI6IGlkLFxuXHRcdFx0XCJhY2Nlc3NfdG9rZW5cIjogdG9rZW5cblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBqc29uLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHIgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRyZXR1cm4gcjtcblx0fVxuXG5cdGFzeW5jIGdldFVzZXIodG9rZW4pIHtcblxuXHRcdGlmKCAhdG9rZW4gKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsID0gJ2h0dHBzOi8vZ3dwYWRtaW4uY29kZXdyYW5nbGVyLmlvL2FwaS9nd3AvdjEvdXNlcic7XG5cdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiYWNjZXNzX3Rva2VuXCI6IHRva2VuXG5cdFx0fSk7XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keToganNvbixcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRjb25zdCByID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0cmV0dXJuIHI7XG5cdH1cblxuXHQvLyBhc3luYyBmZXRjaEhvbWVTbGlkZXMoKSB7XG5cdC8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVVJMfS9ob21lLXNsaWRlcz9pdGVtcz00YClcblx0Ly8gXHRjb25zdCBzbGlkZXMgPSBhd2FpdCByZXMuanNvbigpXG5cdC8vXG5cdC8vIFx0cmV0dXJuIHNsaWRlc1xuXHQvLyB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==