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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "1GRS":
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6Ipf":
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

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1GRS");
/* harmony import */ var _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);

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
      className: this._renderFooterClass()
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "small-12 large-8 columns"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
      src: "/images/logo-white-text.svg",
      alt: "GovWhitePapers Logo"
    }))), __jsx("div", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navigationWrap
    }, __jsx("nav", {
      id: "footer-navigation",
      className: `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainNavigation} clearfix`
    }, __jsx("div", {
      className: "clearfix"
    }, __jsx("ul", {
      id: "footer-menu",
      className: `menu ${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu} clearfix`,
      "aria-expanded": "false"
    }, __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/find"
    }, __jsx("a", null, "Find"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post"
    }, __jsx("a", null, "Post"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/promote"
    }, __jsx("a", null, "Promote"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/team"
    }, __jsx("a", null, "Team"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Blog"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact")))))))), __jsx("div", {
      className: "small-12 large-4 columns text-right"
    }, __jsx("ul", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.socialMenu
    }, __jsx("li", null, __jsx("a", {
      target: "_blank",
      href: "https://www.facebook.com/GovWhitePapers/"
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fblogo,
      src: "/images/fb.svg",
      alt: "Facebook Logo"
    }))), __jsx("li", null, __jsx("a", {
      target: "_blank",
      href: "https://www.linkedin.com/company/govwhitepapers/"
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linkedin,
      src: "/images/linkedin.svg",
      alt: "LinkedIn Logo"
    }))), __jsx("li", null, __jsx("a", {
      target: "_blank",
      href: "https://twitter.com/GovWhitePapers"
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,
      src: "/images/twitter.svg",
      alt: "Twitter Logo"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
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

/***/ "CdZq":
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

/***/ "J31C":
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

/***/ "K/uQ":
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

/***/ "NjeN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("J31C");
/* harmony import */ var _public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["a"] = (({
  href,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} ${_public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className
  }));
});

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./services/wordpress.js
var services_wordpress = __webpack_require__("kE1S");

// EXTERNAL MODULE: external "entities"
var external_entities_ = __webpack_require__("XsH+");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Header.js + 2 modules
var Header = __webpack_require__("b0oO");

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// EXTERNAL MODULE: ./public/styles/modules/components/categoriesblock.module.css
var categoriesblock_module = __webpack_require__("6Ipf");
var categoriesblock_module_default = /*#__PURE__*/__webpack_require__.n(categoriesblock_module);

// CONCATENATED MODULE: ./components/CategoriesBlock.js

var __jsx = external_react_default.a.createElement;



function CategoriesBlock() {
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: `${categoriesblock_module_default.a.categories}`
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: `small-12 columns text-center ${categoriesblock_module_default.a.heading}`
  }, __jsx("h2", null, "Categories"), __jsx("img", {
    className: categoriesblock_module_default.a.hr,
    src: "/images/sep.svg",
    alt: ""
  }), __jsx("p", null, "We've looked at what you're reading and posting and created this list to make it easy to access content on the most popular topics. "))), __jsx("div", {
    className: `row small-up-1 medium-up-2 large-up-3`
  }, __jsx("div", {
    className: `column column-block`
  }, __jsx("div", {
    className: categoriesblock_module_default.a.block
  }, __jsx(link_default.a, {
    href: "/topic/education"
  }, __jsx("a", null, __jsx("img", {
    className: categoriesblock_module_default.a.icon,
    src: "/images/education-icon.svg",
    alt: ""
  }))), __jsx(link_default.a, {
    href: "/topic/education"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.headingLink
  }, __jsx("h3", null, "Education"))), __jsx("p", null, "Modernizing the way we present information and learn is happening from preschool to continuing professional development. Learn how virtual reality, artificial intelligence, and collaborative platforms are impacting education."), __jsx(link_default.a, {
    href: "/topic/education"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.all
  }, "View All ", __jsx("img", {
    className: categoriesblock_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  }))))), __jsx("div", {
    className: `column column-block`
  }, __jsx("div", {
    className: categoriesblock_module_default.a.block
  }, __jsx(link_default.a, {
    href: "/topic/security"
  }, __jsx("a", null, __jsx("img", {
    className: categoriesblock_module_default.a.icon,
    src: "/images/security-icon.svg",
    alt: ""
  }))), __jsx(link_default.a, {
    href: "/topic/security"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.headingLink
  }, __jsx("h3", null, "Security"))), __jsx("p", null, "Sometimes lost in the discussion of cybersecurity is the progress and innovation happening in physical security. From access control to facial recognition to predictive alerts, the options to secure physical locations are evolving daily."), __jsx(link_default.a, {
    href: "/topic/security"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.all
  }, "View All ", __jsx("img", {
    className: categoriesblock_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  }))))), __jsx("div", {
    className: `column column-block`
  }, __jsx("div", {
    className: categoriesblock_module_default.a.block
  }, __jsx(link_default.a, {
    href: "/topic/military"
  }, __jsx("a", null, __jsx("img", {
    className: categoriesblock_module_default.a.icon,
    src: "/images/military-icon.svg",
    alt: ""
  }))), __jsx(link_default.a, {
    href: "/topic/military"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.headingLink
  }, __jsx("h3", null, "Military"))), __jsx("p", null, "Sometimes lost in the discussion of cybersecurity is the progress and innovation happening in physical security. From access control to facial recognition to predictive alerts, the options to secure physical locations are evolving daily."), __jsx(link_default.a, {
    href: "/topic/military"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.all
  }, "View All ", __jsx("img", {
    className: categoriesblock_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  }))))), __jsx("div", {
    className: `column column-block`
  }, __jsx("div", {
    className: categoriesblock_module_default.a.block
  }, __jsx(link_default.a, {
    href: "/topic/it"
  }, __jsx("a", null, __jsx("img", {
    className: categoriesblock_module_default.a.icon,
    src: "/images/it-icon.svg",
    alt: ""
  }))), __jsx(link_default.a, {
    href: "/topic/it"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.headingLink
  }, __jsx("h3", null, "IT"))), __jsx("p", null, "The pace of technology change is not slowing down. Cloud, mobile, agile, as a service, and more are part of every agency\u2019s IT mix. Stay up-to-date on the latest products, processes, and tactics from technology vendors and practitioners."), __jsx(link_default.a, {
    href: "/topic/it"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.all
  }, "View All ", __jsx("img", {
    className: categoriesblock_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  }))))), __jsx("div", {
    className: `column column-block`
  }, __jsx("div", {
    className: categoriesblock_module_default.a.block
  }, __jsx(link_default.a, {
    href: "/topic/iot"
  }, __jsx("a", null, __jsx("img", {
    className: categoriesblock_module_default.a.icon,
    src: "/images/iot-icon.svg",
    alt: ""
  }))), __jsx(link_default.a, {
    href: "/topic/iot"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.headingLink
  }, __jsx("h3", null, "Internet of Things"))), __jsx("p", null, "The Internet of Things (IoT) is enabling smart cities that run more efficiently and powering better supply chain management across government. Learn how this technology is being integrated into state, local, and federal operations."), __jsx(link_default.a, {
    href: "/topic/iot"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.all
  }, "View All ", __jsx("img", {
    className: categoriesblock_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  }))))), __jsx("div", {
    className: `column column-block`
  }, __jsx("div", {
    className: categoriesblock_module_default.a.block
  }, __jsx(link_default.a, {
    href: "/topic/cybersecurity"
  }, __jsx("a", null, __jsx("img", {
    className: categoriesblock_module_default.a.icon,
    src: "/images/cybersecurity-icon.svg",
    alt: ""
  }))), __jsx(link_default.a, {
    href: "/topic/cybersecurity"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.headingLink
  }, __jsx("h3", null, "Cybersecurity"))), __jsx("p", null, "Security postures have changed from if we are attacked to when. This shift has brought a new generation of security tools and tactics that allow organizations to be more proactive and responsive to the constantly changing threat landscape."), __jsx(link_default.a, {
    href: "/topic/cybersecurity"
  }, __jsx("a", {
    className: categoriesblock_module_default.a.all
  }, "View All ", __jsx("img", {
    className: categoriesblock_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  })))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "small-12 columns text-center"
  }, __jsx(link_default.a, {
    href: "/find"
  }, __jsx("a", {
    className: `button ${categoriesblock_module_default.a.button}`
  }, "Search All"))))));
}

/* harmony default export */ var components_CategoriesBlock = (CategoriesBlock);
// EXTERNAL MODULE: ./public/styles/modules/components/featuredevents.module.css
var featuredevents_module = __webpack_require__("cB9A");
var featuredevents_module_default = /*#__PURE__*/__webpack_require__.n(featuredevents_module);

// CONCATENATED MODULE: ./components/FeaturedEvents.js

var FeaturedEvents_jsx = external_react_default.a.createElement;



function FeaturedEvents() {
  return FeaturedEvents_jsx(external_react_default.a.Fragment, null, FeaturedEvents_jsx("div", {
    className: `${featuredevents_module_default.a.featuredEvents}`
  }, FeaturedEvents_jsx("div", {
    className: "row"
  }, FeaturedEvents_jsx("div", {
    className: `small-12 columns text-center ${featuredevents_module_default.a.heading}`
  }, FeaturedEvents_jsx("h2", null, "Featured Events"), FeaturedEvents_jsx("img", {
    className: featuredevents_module_default.a.hr,
    src: "/images/sep.svg",
    alt: ""
  }), FeaturedEvents_jsx("p", null, "Our sister site, GovEvents, is your one-stop-shop for all government-related conferences, expos, hiring events, webinars, and more. GovEvents is a great resource for planning your professional development and training. "))), FeaturedEvents_jsx("div", {
    className: "row"
  }, FeaturedEvents_jsx("div", {
    className: `${featuredevents_module_default.a.content}`
  }, FeaturedEvents_jsx("div", {
    className: `small-12 medium-6 columns ${featuredevents_module_default.a.text}`
  }, FeaturedEvents_jsx("h4", null, "Experience every moment."), FeaturedEvents_jsx("p", null, "Find conferences, expos, hiring events, luncheons, webinars and more all in one place. GovEvents is a great resource for planning professional development and training as well as mapping out event-based marketing plans."), FeaturedEvents_jsx(link_default.a, {
    href: "/find"
  }, FeaturedEvents_jsx("a", {
    className: featuredevents_module_default.a.all
  }, "All Events ", FeaturedEvents_jsx("img", {
    className: featuredevents_module_default.a.linkArrow,
    src: "/images/right-arrow-blue.svg",
    alt: ""
  })))), FeaturedEvents_jsx("div", {
    className: `small-12 medium-6 columns text-right ${featuredevents_module_default.a.image}`
  }, FeaturedEvents_jsx("broadstreet-zone", {
    "zone-id": "80369"
  }))))));
}

/* harmony default export */ var components_FeaturedEvents = (FeaturedEvents);
// EXTERNAL MODULE: ./public/styles/modules/components/homeslides.module.css
var homeslides_module = __webpack_require__("eML4");
var homeslides_module_default = /*#__PURE__*/__webpack_require__.n(homeslides_module);

// CONCATENATED MODULE: ./components/HomeSlides.js

var HomeSlides_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class HomeSlides_HomeSlides extends external_react_default.a.Component {
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
      return HomeSlides_jsx(external_react_default.a.Fragment, null, HomeSlides_jsx("span", {
        onClick: () => {
          clearInterval(this.interval);

          this._transitionSlide('prev');
        },
        className: homeslides_module_default.a.prev
      }, HomeSlides_jsx("img", {
        className: homeslides_module_default.a.linkArrow,
        src: "/images/slider-arrow-left.svg",
        alt: ""
      })), HomeSlides_jsx("span", {
        onClick: () => {
          clearInterval(this.interval);

          this._transitionSlide('next');
        },
        className: homeslides_module_default.a.next
      }, HomeSlides_jsx("img", {
        className: homeslides_module_default.a.linkArrow,
        src: "/images/slider-arrow-right.svg",
        alt: ""
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
    return HomeSlides_jsx("div", {
      className: homeslides_module_default.a.bannerWrap
    }, this.props.slides.map(function (slide, index) {
      let bannerClass = '';

      if (index == component.state.active_slide) {
        if (slide.type == 'internal') {
          bannerClass = `${homeslides_module_default.a.banner} ${homeslides_module_default.a.show}`;
        } else {
          bannerClass = `${homeslides_module_default.a.banner} ${homeslides_module_default.a.show} ${homeslides_module_default.a.external}`;
        }
      } else {
        if (slide.type == 'internal') {
          bannerClass = `${homeslides_module_default.a.banner}`;
        } else {
          bannerClass = `${homeslides_module_default.a.banner} ${homeslides_module_default.a.external}`;
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
        return HomeSlides_jsx("div", {
          key: index,
          className: bannerClass,
          key: index,
          style: styleLogo
        }, HomeSlides_jsx("div", {
          className: homeslides_module_default.a.bannerContent
        }, HomeSlides_jsx("div", {
          className: "row"
        }, HomeSlides_jsx("div", {
          className: "small-12 columns"
        }, HomeSlides_jsx("h2", {
          className: homeslides_module_default.a.bannerHeading
        }, slide.headline), HomeSlides_jsx("div", {
          className: homeslides_module_default.a.bannerDescription
        }, slide.description), HomeSlides_jsx("div", {
          className: homeslides_module_default.a.bannerCTA
        }, HomeSlides_jsx(link_default.a, {
          href: "/find"
        }, HomeSlides_jsx("h5", null, HomeSlides_jsx("a", null, "Get Started ", HomeSlides_jsx("img", {
          className: homeslides_module_default.a.linkArrow,
          src: "/images/right-arrow-white.svg",
          alt: ""
        })))))))), component._renderSliderNav());
      } else {
        return HomeSlides_jsx("div", {
          className: bannerClass,
          key: index
        }, HomeSlides_jsx("broadstreet-zone", {
          "zone-id": slide.ad_zone
        }), HomeSlides_jsx("broadstreet-zone", {
          "zone-id": slide.ad_zone
        }), component._renderSliderNav());
      }
    }));
  }

}

/* harmony default export */ var components_HomeSlides = (HomeSlides_HomeSlides);
// EXTERNAL MODULE: ./components/What.js
var What = __webpack_require__("ra2P");

// EXTERNAL MODULE: ./components/Subscribe.js
var Subscribe = __webpack_require__("ps1A");

// EXTERNAL MODULE: ./public/styles/modules/index.module.css
var index_module = __webpack_require__("WqeO");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















class pages_Home extends external_react_default.a.Component {
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
    const seo_title = Object(external_entities_["decodeHTML"])(page.seo_title);
    const open_graph_title = Object(external_entities_["decodeHTML"])(page.open_graph_title);
    const twitter_title = Object(external_entities_["decodeHTML"])(page.twitter_title);
    const seo_desc = Object(external_entities_["decodeHTML"])(page.seo_desc);
    const open_graph_desc = Object(external_entities_["decodeHTML"])(page.open_graph_desc);
    const twitter_desc = Object(external_entities_["decodeHTML"])(page.twitter_desc);
    const open_graph_image_url = Object(external_entities_["decodeHTML"])(page.open_graph_image_url);
    const twitter_image_url = Object(external_entities_["decodeHTML"])(page.twitter_image_url);
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", {
      key: "page-title"
    }, seo_title), pages_jsx("meta", {
      charSet: "utf-8"
    }), pages_jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }), pages_jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }), pages_jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }), pages_jsx("meta", {
      name: "msapplication-TileImage",
      content: "/favicon-270x270.png"
    }), pages_jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff"
    }), pages_jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest"
    }), pages_jsx("meta", {
      property: "og:title",
      content: seo_title,
      key: "og-title"
    }), pages_jsx("meta", {
      name: "description",
      content: seo_desc,
      key: "description"
    }), pages_jsx("meta", {
      property: "og:locale",
      content: "en_US",
      key: "og-locale"
    }), pages_jsx("meta", {
      property: "og:title",
      content: open_graph_title,
      key: "og-title"
    }), pages_jsx("meta", {
      property: "og:description",
      content: open_graph_desc,
      key: "og-description"
    }), pages_jsx("meta", {
      property: "og:url",
      content: page.permalink,
      key: "og-url"
    }), pages_jsx("meta", {
      property: "og:site_name",
      content: "GovWhitePapers"
    }), pages_jsx("meta", {
      property: "og:image",
      content: open_graph_image_url,
      key: "og-image"
    }), pages_jsx("meta", {
      property: "og:image:secure_url",
      content: open_graph_image_url,
      key: "og-image-secure"
    }), pages_jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image",
      key: "twitter-card"
    }), pages_jsx("meta", {
      name: "twitter:description",
      content: twitter_desc,
      key: "twitter-description"
    }), pages_jsx("meta", {
      name: "twitter:title",
      content: twitter_title,
      key: "twitter-title"
    }), pages_jsx("meta", {
      name: "twitter:site",
      content: "@GovEventsGroup",
      key: "twitter-site"
    }), pages_jsx("meta", {
      name: "twitter:image",
      content: twitter_image_url,
      key: "twitter-image"
    }), pages_jsx("meta", {
      name: "twitter:creator",
      content: "@GovEventsGroup",
      key: "twitter-creator"
    })), pages_jsx(Header["a" /* default */], _extends({}, this.props.user, {
      display_name: display_name
    })), pages_jsx(components_HomeSlides, {
      slides: this.props.slides
    }), pages_jsx("div", {
      className: `row small-up-1 large-up-3 ${index_module_default.a.actionRow}`
    }, pages_jsx("div", {
      className: `column column-block ${index_module_default.a.columnBlock} ${index_module_default.a.find}`
    }, pages_jsx("div", {
      className: `${index_module_default.a.actionBlock}`
    }, pages_jsx("img", {
      src: "/images/home-find-icon.svg",
      className: index_module_default.a.blockIcon,
      alt: ""
    }), pages_jsx(link_default.a, {
      href: "/find"
    }, pages_jsx("h3", null, pages_jsx("a", null, "Find"))), pages_jsx("p", {
      className: "match-height"
    }, "Search thousands of white papers, case studies, eBooks & more to discover the best practices government and industry are sharing."), pages_jsx(link_default.a, {
      href: "/find"
    }, pages_jsx("h5", null, pages_jsx("a", null, "Find Content  ", pages_jsx("img", {
      className: index_module_default.a.linkArrow,
      src: "/images/right-arrow-white.svg",
      alt: ""
    })))))), pages_jsx("div", {
      className: `column column-block ${index_module_default.a.columnBlock} ${index_module_default.a.post}`
    }, pages_jsx("div", {
      className: `${index_module_default.a.actionBlock}`
    }, pages_jsx("img", {
      src: "/images/home-post-icon.svg",
      className: index_module_default.a.blockIcon,
      alt: ""
    }), pages_jsx(link_default.a, {
      href: "/post"
    }, pages_jsx("h3", null, pages_jsx("a", null, "Post"))), pages_jsx("p", {
      className: "match-height"
    }, "Post your content to expand its reach to thousands of government professionals."), pages_jsx(link_default.a, {
      href: "/post"
    }, pages_jsx("h5", null, pages_jsx("a", null, "Post Content  ", pages_jsx("img", {
      className: index_module_default.a.linkArrow,
      src: "/images/right-arrow-black.svg",
      alt: ""
    })))))), pages_jsx("div", {
      className: `column column-block ${index_module_default.a.columnBlock} ${index_module_default.a.promote}`
    }, pages_jsx("div", {
      className: `${index_module_default.a.actionBlock}`
    }, pages_jsx("img", {
      src: "/images/home-promote-icon.svg",
      className: index_module_default.a.blockIcon,
      alt: ""
    }), pages_jsx(link_default.a, {
      href: "/promote"
    }, pages_jsx("h3", null, pages_jsx("a", null, "Promote"))), pages_jsx("p", {
      className: "match-height"
    }, "Learn how we can help promote your content across multiple digital channels"), pages_jsx(link_default.a, {
      href: "/promote"
    }, pages_jsx("h5", null, pages_jsx("a", null, "Promote Content ", pages_jsx("img", {
      className: index_module_default.a.linkArrow,
      src: "/images/right-arrow-black.svg",
      alt: ""
    }))))))), pages_jsx(What["a" /* default */], null), pages_jsx("div", {
      className: `${index_module_default.a.featuredContent}`
    }, pages_jsx("div", {
      className: "row"
    }, pages_jsx("div", {
      className: "small-12 columns text-center"
    }, pages_jsx("h2", null, "Featured Content"), pages_jsx("img", {
      className: index_module_default.a.hr,
      src: "/images/sep.svg",
      alt: ""
    }), pages_jsx("p", null, "Take a look at our latest featured content to stay up to date on the most current trends, news and knowledge the government community has to offer."), pages_jsx("broadstreet-zone", {
      "zone-id": "80365"
    }), pages_jsx("p", {
      className: "text-center"
    }, "If you'd like to feature your content here, check out our promotional options. ", pages_jsx(link_default.a, {
      href: "/find"
    }, pages_jsx("a", null, "Promote ", pages_jsx("img", {
      className: index_module_default.a.linkArrow,
      src: "/images/right-arrow-blue.svg",
      alt: ""
    })))))), pages_jsx("broadstreet-zone", {
      "zone-id": "80366"
    }), pages_jsx("div", {
      className: "row"
    }, pages_jsx("div", {
      className: "small-12 columns text-center"
    }, pages_jsx("p", {
      className: "text-center"
    }, "Where Government Knowledge Gathers. Become a member for free and start browsing and posting content today! ", pages_jsx(link_default.a, {
      href: "/find"
    }, pages_jsx("a", null, "Get started ", pages_jsx("img", {
      className: index_module_default.a.linkArrow,
      src: "/images/right-arrow-blue.svg",
      alt: ""
    }))))))), pages_jsx(components_CategoriesBlock, null), pages_jsx(components_FeaturedEvents, null), pages_jsx(Subscribe["a" /* default */], {
      alt: "true"
    }), pages_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);
async function getStaticProps(ctx) {
  const wordpress = new services_wordpress["a" /* default */]();
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

/***/ "WqeO":
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

/***/ "XsH+":
/***/ (function(module, exports) {

module.exports = require("entities");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./public/styles/modules/header.module.css
var header_module = __webpack_require__("remQ");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/MenuLink.js
var __jsx = external_react_default.a.createElement;




/* harmony default export */ var MenuLink = (({
  href,
  children
}) => {
  const router = Object(router_["useRouter"])();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} ${header_module_default.a.active}`;
  } else if (router.pathname == '/blog/[post]' && href == '/blog') {
    className = `${className} ${header_module_default.a.active}`;
  } else if (router.pathname == '/whitepapers/[whitepaper]' && href == '/find') {
    className = `${className} ${header_module_default.a.active}`;
  } else if (router.pathname == '/topic/[topic]' && href == '/find') {
    className = `${className} ${header_module_default.a.active}`;
  }

  return __jsx(link_default.a, {
    href: href
  }, external_react_default.a.cloneElement(children, {
    className
  }));
});
// EXTERNAL MODULE: ./components/ProfileMenuLink.js
var ProfileMenuLink = __webpack_require__("NjeN");

// EXTERNAL MODULE: ./public/styles/modules/components/loginmodal.module.css
var loginmodal_module = __webpack_require__("K/uQ");
var loginmodal_module_default = /*#__PURE__*/__webpack_require__.n(loginmodal_module);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/LoginModal.js

var LoginModal_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LoginModal_LoginModal extends external_react_default.a.Component {
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

          external_js_cookie_default.a.set('user', JSON.stringify(data));
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

          external_js_cookie_default.a.set('user', JSON.stringify(data));
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
        return `${loginmodal_module_default.a.wrap} ${loginmodal_module_default.a.open}`;
      } else {
        return `${loginmodal_module_default.a.wrap}`;
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
    return LoginModal_jsx(external_react_default.a.Fragment, null, LoginModal_jsx("div", {
      className: this._renderModalClass()
    }, LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.header}`
    }, LoginModal_jsx("div", {
      className: "small-6 columns"
    }, LoginModal_jsx("img", {
      className: loginmodal_module_default.a.logo,
      src: "/images/logo.svg",
      alt: ""
    })), LoginModal_jsx("div", {
      className: "small-6 columns text-right"
    }, LoginModal_jsx("button", {
      className: loginmodal_module_default.a.close,
      onClick: e => {
        this.props.toggle();
      }
    }, LoginModal_jsx("img", {
      src: "/images/close.svg",
      alt: ""
    })))), LoginModal_jsx("div", {
      className: `${loginmodal_module_default.a.login}`
    }, LoginModal_jsx("div", {
      className: "row text-center"
    }, LoginModal_jsx("div", {
      className: "small-12 columns"
    }, LoginModal_jsx("h2", null, "Welcome"), LoginModal_jsx("img", {
      className: loginmodal_module_default.a.hr,
      src: "/images/sep.svg",
      alt: ""
    }), LoginModal_jsx("p", null, "Sign in to access GovWhitePapers."))), LoginModal_jsx("div", {
      className: `${loginmodal_module_default.a.form}`
    }, LoginModal_jsx("div", {
      className: "row"
    }, LoginModal_jsx("div", {
      className: "small-12 columns"
    }, LoginModal_jsx("form", null, LoginModal_jsx("label", null, "Email Address", LoginModal_jsx("input", {
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      placeholder: "Type your email",
      required: true
    })), LoginModal_jsx("label", null, "Password", LoginModal_jsx("input", {
      type: "password",
      name: "pass",
      onChange: this.handleChange,
      value: this.state.pass,
      placeholder: "Type your password",
      required: true
    })), LoginModal_jsx("div", {
      className: loginmodal_module_default.a.error
    }, LoginModal_jsx("span", null, this.state.error)), LoginModal_jsx(link_default.a, {
      href: "/password-reset"
    }, LoginModal_jsx("a", {
      onClick: this._forgotPassword,
      className: loginmodal_module_default.a.forgot
    }, "Forgot password?")), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.signin}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("input", {
      onClick: this._processLogin,
      type: "submit",
      className: "js-login button",
      value: "Log In"
    }))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.signinGovEvents}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("button", {
      onClick: this._processGovEventsLogin,
      type: "submit",
      className: "js-login-govevents button"
    }, LoginModal_jsx("img", {
      src: "/images/govevents-logo.png",
      alt: ""
    }), " ", LoginModal_jsx("span", null, "Log In with GovEvents")))))))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.sep}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("img", {
      src: "/images/continue-with.png",
      alt: ""
    }))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.socialBlock}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("ul", null, LoginModal_jsx("li", null, LoginModal_jsx("a", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.google
    }, LoginModal_jsx("img", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.social,
      src: "/images/login-google.png",
      alt: ""
    }))), LoginModal_jsx("li", null, LoginModal_jsx("a", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.fb
    }, LoginModal_jsx("img", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.social,
      src: "/images/login-fb.png",
      alt: ""
    }))), LoginModal_jsx("li", null, LoginModal_jsx("a", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.linkedin
    }, LoginModal_jsx("img", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.social,
      src: "/images/login-linkedin.png",
      alt: ""
    })))))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.signUp}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx(link_default.a, {
      href: "/register"
    }, LoginModal_jsx("h5", null, LoginModal_jsx("a", {
      "data-close-modal": true
    }, LoginModal_jsx("span", {
      "data-close-modal": true
    }, "Don't have an account?"), " Sign Up ", LoginModal_jsx("img", {
      className: loginmodal_module_default.a.linkArrow,
      "data-close-modal": true,
      src: "/images/right-arrow-blue.svg",
      alt: ""
    })))))))));
  }

}

/* harmony default export */ var components_LoginModal = (LoginModal_LoginModal);
// EXTERNAL MODULE: ./services/wordpress.js
var wordpress = __webpack_require__("kE1S");

// CONCATENATED MODULE: ./components/Header.js

var Header_jsx = external_react_default.a.createElement;

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Header_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Header_defineProperty(this, "_toggleMenu", () => {
      this.setState(state => ({
        mobile_menu_open: !state.mobile_menu_open
      }));
    });

    Header_defineProperty(this, "_toggleUserProfileMenu", () => {
      this.setState(state => ({
        user_profile_menu_open: !state.user_profile_menu_open
      }));
    });

    Header_defineProperty(this, "_toggleLogin", () => {
      this.setState(state => ({
        login_open: !state.login_open
      }));
    });

    Header_defineProperty(this, "_handleEscape", e => {
      if (e.which == 27) {
        this._toggleMenu();
      }
    });

    Header_defineProperty(this, "_handleClick", e => {// console.log('click');
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
      external_js_cookie_default.a.remove('user');
      window.location.href = '/';
    }, 750);
  }

  _renderUserProfileMenu() {
    if (this.state.user_profile_menu_open == false) {
      return null;
    } else {
      return Header_jsx("ul", {
        id: "header-profile-menu",
        className: `vertical menu ${header_module_default.a.menu} ${header_module_default.a.profileMenu} clearfix`
      }, Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/profile"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-profile.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-profile-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Dashboard")))), Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/promote"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-upgrade.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-upgrade-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Promote")))), Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/contact"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-contact.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-contact-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Contact")))), Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/settings"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-settings.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-settings-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Settings")))), Header_jsx("li", {
        className: `${header_module_default.a.menuItem} ${header_module_default.a.logout}`
      }, Header_jsx("a", {
        onClick: this._logOut
      }, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/log-out-profile-menu.svg",
        alt: ""
      }), Header_jsx("span", null, "Log Out"))));
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
      return Header_jsx("img", {
        src: "/images/account-arrow.svg",
        alt: ""
      });
    } else {
      return Header_jsx("img", {
        className: header_module_default.a.iconOpen,
        src: "/images/account-arrow.svg",
        alt: ""
      });
    }
  }

  _renderUserMenu() {
    const {
      user
    } = this.props;
    const display_name = this.props.display_name;

    if (user !== false && user !== undefined) {
      return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("ul", {
        className: `${header_module_default.a.userMenu} clearfix`,
        "aria-expanded": "false"
      }, Header_jsx("li", {
        className: `menu-item ${header_module_default.a.search}`
      }, Header_jsx(link_default.a, {
        href: "/find"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.search,
        src: "/images/search.svg",
        alt: "GovWhitePapers Search"
      })))), Header_jsx("li", {
        className: `js-account-menu menu-item ${header_module_default.a.account}`
      }, Header_jsx("a", {
        onClick: this._toggleUserProfileMenu
      }, display_name, " ", this._renderUserMenuIcon()), this._renderUserProfileMenu())));
    } else {
      return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("ul", {
        className: `${header_module_default.a.userMenu} clearfix`,
        "aria-expanded": "false"
      }, Header_jsx("li", {
        className: `menu-item ${header_module_default.a.search}`
      }, Header_jsx(link_default.a, {
        href: "/find"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.search,
        src: "/images/search.svg",
        alt: "GovWhitePapers Search"
      })))), Header_jsx("li", {
        className: `js-account-menu menu-item ${header_module_default.a.login}`
      }, Header_jsx("a", {
        onClick: this._toggleLogin,
        className: `js-login ${header_module_default.a.login}`
      }, "Login")), Header_jsx("li", {
        className: `menu-item ${header_module_default.a.getStarted}`
      }, Header_jsx(link_default.a, {
        href: "/register"
      }, Header_jsx("a", {
        className: `button ${header_module_default.a.button}`
      }, "Get started")))));
    }
  }

  render() {
    return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("header", {
      className: header_module_default.a.header
    }, Header_jsx("div", {
      className: "row"
    }, Header_jsx("div", {
      className: "small-9 medium-10 large-8 columns"
    }, Header_jsx(link_default.a, {
      href: "/"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.logo,
      src: "/images/logo.svg",
      alt: "GovWhitePapers Logo"
    }))), Header_jsx("div", {
      className: header_module_default.a.navigationWrap
    }, Header_jsx("nav", {
      id: "site-navigation",
      className: this.state.mobile_menu_open == true ? `${header_module_default.a.mainNavigation} clearfix ${header_module_default.a.toggled}` : `${header_module_default.a.mainNavigation} clearfix`
    }, Header_jsx("button", {
      onClick: this._toggleMenu,
      className: header_module_default.a.menuToggle,
      "aria-controls": "primary-menu",
      "aria-expanded": "false"
    }, Header_jsx("span", {
      className: "screen-reader-text"
    }, "Toggle Mobile Menu"), Header_jsx("div", {
      id: "burger",
      className: this.state.mobile_menu_open == true ? `${header_module_default.a.burger} ${header_module_default.a.open}` : `${header_module_default.a.burger}`
    }, Header_jsx("span", null), Header_jsx("span", null), Header_jsx("span", null))), Header_jsx("div", {
      className: `${header_module_default.a.menuPrimaryMenuContainer} clearfix`
    }, Header_jsx("ul", {
      id: "primary-menu",
      className: `menu ${header_module_default.a.menu} clearfix`,
      "aria-expanded": "false"
    }, Header_jsx("li", {
      className: `menu-item ${header_module_default.a.homeMenuLink}`
    }, Header_jsx(MenuLink, {
      href: "/"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-home.png",
      alt: ""
    }), "Home"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/find"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-find.png",
      alt: ""
    }), "Find"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/post"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-post.png",
      alt: ""
    }), "Post"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/promote"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: `${header_module_default.a.menuImage} ${header_module_default.a.promote}`,
      src: "/images/menu-promote.png",
      alt: ""
    }), "Promote"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/about"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-about.png",
      alt: ""
    }), "About"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/team"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: `${header_module_default.a.menuImage} ${header_module_default.a.team}`,
      src: "/images/menu-team.png",
      alt: ""
    }), "Team"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/blog"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: `${header_module_default.a.menuImage} ${header_module_default.a.blog}`,
      src: "/images/menu-blog.png",
      alt: ""
    }), "Blog"))), Header_jsx("li", {
      className: `menu-item ${header_module_default.a.eventsMenuLink}`
    }, Header_jsx("a", {
      target: "_blank",
      href: "https://govevents.com"
    }, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-events.png",
      alt: ""
    }), "Go to GovEvents"))), Header_jsx("div", {
      className: `${header_module_default.a.mobileUserMenuWrap} clearfix`
    }, this._renderUserMenu()))))), Header_jsx("div", {
      className: "small-3 medium-2 large-4 columns text-right"
    }, Header_jsx("div", {
      className: `${header_module_default.a.mainUserMenuWrap} clearfix`
    }, this._renderUserMenu()))), Header_jsx(components_LoginModal, {
      open: this.state.login_open,
      toggle: () => this._toggleLogin()
    })), Header_jsx("div", {
      id: "ie-killa"
    }, Header_jsx("img", {
      src: "/images/logo.svg",
      alt: "GovWhitePapers Logo"
    }), Header_jsx("h3", null, "Sorry, your browser is not compatible with this application. Please use the latest version of Google Chrome/Chromium, Mozilla Firefox or Safari.")));
  }

}

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cB9A":
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "eML4":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "fkf1":
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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "kE1S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "ps1A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fkf1");
/* harmony import */ var _public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

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
      className: this._renderClass()
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "small-12 columns text-center"
    }, __jsx("h2", null, "Subscribe"), __jsx("img", {
      className: _public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
      src: "/images/sep.svg",
      alt: ""
    }), __jsx("p", null, "Sign up to receive the GovWhitePapers newsletter, featuring our freshest content relevant to discussions happening in the government community."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/newsletter"
    }, __jsx("a", {
      className: `button ${_public_styles_modules_components_subscribe_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button}`
    }, "Sign Up")))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Subscribe);

/***/ }),

/***/ "ra2P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CdZq");
/* harmony import */ var _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function What() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `${_public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.infoRow} ${_public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.about}`
  }, __jsx("div", {
    className: "row text-center"
  }, __jsx("div", {
    className: "small-12 columns"
  }, __jsx("h4", {
    className: _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading
  }, "What can you do on GovWhitePapers?"), __jsx("img", {
    className: _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hr,
    src: "/images/sep.svg",
    alt: ""
  }), __jsx("p", null, "GovWhitePapers is the gathering place for government professionals and the companies that serve them to find content that helps to understand modern technologies, trends, and practices. We\u2019ve gathered thousands of white papers, eBooks, infographics, case studies, and data sheets on topics including:"), __jsx("div", {
    className: _public_styles_modules_components_what_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.catList
  }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/artificial-intelligence"
  }, __jsx("a", null, "Artificial Intelligence"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/blockchain"
  }, __jsx("a", null, "Blockchain"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/citizen-engagement"
  }, __jsx("a", null, "Citizen Engagement"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cloud-computing"
  }, __jsx("a", null, "Cloud Computing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/cybersecurity"
  }, __jsx("a", null, "Cybersecurity"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/data-management"
  }, __jsx("a", null, "Data Management"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/education"
  }, __jsx("a", null, "Education"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/it"
  }, __jsx("a", null, "IT"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/military"
  }, __jsx("a", null, "Military"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/public-safety"
  }, __jsx("a", null, "Public Safety"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/ransomware"
  }, __jsx("a", null, "Ransomware"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/topic/security"
  }, __jsx("a", null, "Security"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/find"
  }, __jsx("a", null, "and so much more!")))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (What);

/***/ }),

/***/ "remQ":
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });