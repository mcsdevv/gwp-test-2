(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI")),o=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery;return a||r&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))}},"5fIB":function(e,t,a){var n=a("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Kt/":function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI")),o=n(a("Xuae")),i=a("lwAK"),s=a("FYa8"),c=a("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var m=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,c=m.length;s<c;s++){var l=m[s];if(r.props.hasOwnProperty(l))if("charSet"===l)a.has(l)?o=!1:a.add(l);else{var u=r.props[l],d=n[l]||new Set;d.has(u)?o=!1:(d.add(u),n[l]=d)}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}var p=o.default();function f(e){var t=e.children;return r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(a){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:a,inAmpMode:c.isInAmpMode(e)},t)}))}))}f.rewind=p.rewind,t.default=f},FYa8:function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI"));t.HeadManagerContext=r.createContext(null)},J31C:function(e,t,a){e.exports={wrap:"profilesidebar_wrap__1Oai4",menu:"profilesidebar_menu__2ItZw",menuImage:"profilesidebar_menuImage__1Id_Z",active:"profilesidebar_active__2_t5l",menuItem:"profilesidebar_menuItem__7LWpb",logout:"profilesidebar_logout__1l-UM"}},"K/uQ":function(e,t,a){e.exports={wrap:"loginmodal_wrap__33SjA",open:"loginmodal_open__2IS4C",header:"loginmodal_header__123C8",close:"loginmodal_close__1yYo-",hr:"loginmodal_hr__wGt4S",login:"loginmodal_login__1Drfn",flex:"loginmodal_flex__1LEa6",button:"loginmodal_button__ZOAK4",form:"loginmodal_form__3gSVL",signin:"loginmodal_signin__1Jyv0",signinGovEvents:"loginmodal_signinGovEvents__35D78",forgot:"loginmodal_forgot__2bsu8",sep:"loginmodal_sep__1hIY3",socialBlock:"loginmodal_socialBlock__1Nn3f",signUp:"loginmodal_signUp__1Nkxp",error:"loginmodal_error__28Ubg"}},NjeN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("YFqc"),i=a.n(o),s=a("nOHt"),c=a("J31C"),l=a.n(c),u=r.a.createElement;t.a=function(e){var t=e.href,a=e.children,n=Object(s.useRouter)(),o=a.props.className||"";return n.pathname===t&&(o="".concat(o," ").concat(l.a.active)),u(i.a,{href:t},r.a.cloneElement(a,{className:o}))}},Xuae:function(e,t,a){"use strict";var n=a("/GRZ"),r=a("qXWd"),o=a("i2R6"),i=a("48fX"),s=a("tCBg"),c=a("T0f4"),l=a("mPvQ");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=c(e);if(t){var r=c(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return s(this,a)}}Object.defineProperty(t,"__esModule",{value:!0});var m=a("q1tI"),d=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(l(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return(function(s){i(l,s);var c=u(l);function l(e){var o;return n(this,l),o=c.call(this,e),d&&(t.add(r(o)),a(r(o))),o}return o(l,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),o(l,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),l}(m.Component))}},YFqc:function(e,t,a){e.exports=a("cTJO")},b0oO:function(e,t,a){"use strict";var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),i=a("Ji7U"),s=a("md7G"),c=a("foSv"),l=a("rePB"),u=a("q1tI"),m=a.n(u),d=a("YFqc"),p=a.n(d),f=a("nOHt"),g=a("remQ"),h=a.n(g),v=m.a.createElement,_=function(e){var t=e.href,a=e.children,n=Object(f.useRouter)(),r=a.props.className||"";return n.pathname===t?r="".concat(r," ").concat(h.a.active):"/blog/[post]"==n.pathname&&"/blog"==t?r="".concat(r," ").concat(h.a.active):"/whitepapers/[whitepaper]"==n.pathname&&"/find"==t?r="".concat(r," ").concat(h.a.active):"/topic/[topic]"==n.pathname&&"/find"==t&&(r="".concat(r," ").concat(h.a.active)),v(p.a,{href:t},m.a.cloneElement(a,{className:r}))},b=a("NjeN"),y=a("K/uQ"),w=a.n(y),N=a("p46w"),k=a.n(N),O=m.a.createElement;function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var S=function(e){Object(i.a)(a,e);var t=j(a);function a(e){var r;return Object(n.a)(this,a),r=t.call(this,e),Object(l.a)(Object(o.a)(r),"_handleEscape",(function(e){27==e.which&&r.props.toggle()})),Object(l.a)(Object(o.a)(r),"_handleClick",(function(e){e.preventDefault(),e.target.hasAttribute("data-close-modal")&&r.props.toggle()})),Object(l.a)(Object(o.a)(r),"_forgotPassword",(function(){r.props.toggle()})),Object(l.a)(Object(o.a)(r),"_processLogin",(function(){var e,t,a,n,i,s;return i=document.querySelector('input[name="email"]'),s=document.querySelector('input[name="pass"]'),i.checkValidity()?(i.classList.remove("invalid"),s.checkValidity()?(s.classList.remove("invalid"),e=document.querySelector(".js-login"),t=document.querySelector(".js-login-govevents"),n=Object(o.a)(r),"https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login",a=JSON.stringify({email:r.state.email,pass:r.state.pass}),e.disabled=!0,t.disabled=!0,n.setState({working:!0}),void fetch("https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login",{method:"post",body:a,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){setTimeout((function(r){if(e.disabled=!1,t.disabled=!1,JSON.stringify(a).includes("error"))return n.setState({error:a.message,working:!1}),!1;k.a.set("user",JSON.stringify(a)),n.setState((function(){return{error:"",working:!1,email:"",pass:""}}),(function(){n.props.toggle(),window.location.reload()}))}),1e3)}))):(s.classList.add("invalid"),!1)):(i.classList.add("invalid"),!1)})),Object(l.a)(Object(o.a)(r),"_processGovEventsLogin",(function(){var e,t,a,n,i,s;return i=document.querySelector('input[name="email"]'),s=document.querySelector('input[name="pass"]'),i.checkValidity()?(i.classList.remove("invalid"),s.checkValidity()?(s.classList.remove("invalid"),e=document.querySelector(".js-login"),t=document.querySelector(".js-login-govevents"),n=Object(o.a)(r),"https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login",a=JSON.stringify({email:r.state.email,pass:r.state.pass}),e.disabled=!0,t.disabled=!0,n.setState({working:!0}),void fetch("https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login",{method:"post",body:a,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){console.log(a),setTimeout((function(r){if(e.disabled=!1,t.disabled=!1,JSON.stringify(a).includes("error"))return n.setState({error:a.message,working:!1}),!1;k.a.set("user",JSON.stringify(a)),n.setState((function(){return{error:"",working:!1,email:"",pass:""}}),(function(){n.props.toggle(),window.location.reload()}))}),1e3)}))):(s.classList.add("invalid"),!1)):(i.classList.add("invalid"),!1)})),Object(l.a)(Object(o.a)(r),"_renderModalClass",(function(){return r.props.open?"".concat(w.a.wrap," ").concat(w.a.open):"".concat(w.a.wrap)})),r.state={email:"",pass:"",error:"",working:!1},r.handleChange=r.handleChange.bind(Object(o.a)(r)),r}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=e.target.getAttribute("name");this.setState(Object(l.a)({},t,e.target.value))}},{key:"componentDidUpdate",value:function(){var e=this.props.open,t=this.state.working,a=document.querySelector("html");e?(window.addEventListener("keydown",this._handleEscape),window.addEventListener("click",this._handleClick),a.classList.add("active-modal")):(window.removeEventListener("keydown",this._handleEscape),window.removeEventListener("click",this._handleClick),a.classList.remove("active-modal")),t?a.classList.add("working"):a.classList.remove("working")}},{key:"render",value:function(){var e=this,t=this.state;t.email,t.pass,t.error;return O(m.a.Fragment,null,O("div",{className:this._renderModalClass()},O("div",{className:"row ".concat(w.a.header)},O("div",{className:"small-6 columns"},O("img",{className:w.a.logo,src:"/images/logo.svg",alt:""})),O("div",{className:"small-6 columns text-right"},O("button",{className:w.a.close,onClick:function(t){e.props.toggle()}},O("img",{src:"/images/close.svg",alt:""})))),O("div",{className:"".concat(w.a.login)},O("div",{className:"row text-center"},O("div",{className:"small-12 columns"},O("h2",null,"Welcome"),O("img",{className:w.a.hr,src:"/images/sep.svg",alt:""}),O("p",null,"Sign in to access GovWhitePapers."))),O("div",{className:"".concat(w.a.form)},O("div",{className:"row"},O("div",{className:"small-12 columns"},O("form",null,O("label",null,"Email Address",O("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Type your email",required:!0})),O("label",null,"Password",O("input",{type:"password",name:"pass",onChange:this.handleChange,value:this.state.pass,placeholder:"Type your password",required:!0})),O("div",{className:w.a.error},O("span",null,this.state.error)),O(p.a,{href:"/password-reset"},O("a",{onClick:this._forgotPassword,className:w.a.forgot},"Forgot password?")),O("div",{className:"row ".concat(w.a.signin)},O("div",{className:"small-12 columns text-center"},O("input",{onClick:this._processLogin,type:"submit",className:"js-login button",value:"Log In"}))),O("div",{className:"row ".concat(w.a.signinGovEvents)},O("div",{className:"small-12 columns text-center"},O("button",{onClick:this._processGovEventsLogin,type:"submit",className:"js-login-govevents button"},O("img",{src:"/images/govevents-logo.png",alt:""})," ",O("span",null,"Log In with GovEvents")))))))),O("div",{className:"row ".concat(w.a.sep)},O("div",{className:"small-12 columns text-center"},O("img",{src:"/images/continue-with.png",alt:""}))),O("div",{className:"row ".concat(w.a.socialBlock)},O("div",{className:"small-12 columns text-center"},O("ul",null,O("li",null,O("a",{"data-close-modal":!0,className:w.a.google},O("img",{"data-close-modal":!0,className:w.a.social,src:"/images/login-google.png",alt:""}))),O("li",null,O("a",{"data-close-modal":!0,className:w.a.fb},O("img",{"data-close-modal":!0,className:w.a.social,src:"/images/login-fb.png",alt:""}))),O("li",null,O("a",{"data-close-modal":!0,className:w.a.linkedin},O("img",{"data-close-modal":!0,className:w.a.social,src:"/images/login-linkedin.png",alt:""})))))),O("div",{className:"row ".concat(w.a.signUp)},O("div",{className:"small-12 columns text-center"},O(p.a,{href:"/register"},O("h5",null,O("a",{"data-close-modal":!0},O("span",{"data-close-modal":!0},"Don't have an account?")," Sign Up ",O("img",{className:w.a.linkArrow,"data-close-modal":!0,src:"/images/right-arrow-blue.svg",alt:""})))))))))}}]),a}(m.a.Component),C=(a("kE1S"),m.a.createElement);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var I=function(e){Object(i.a)(a,e);var t=M(a);function a(e){var r;return Object(n.a)(this,a),r=t.call(this,e),Object(l.a)(Object(o.a)(r),"_toggleMenu",(function(){r.setState((function(e){return{mobile_menu_open:!e.mobile_menu_open}}))})),Object(l.a)(Object(o.a)(r),"_toggleUserProfileMenu",(function(){r.setState((function(e){return{user_profile_menu_open:!e.user_profile_menu_open}}))})),Object(l.a)(Object(o.a)(r),"_toggleLogin",(function(){r.setState((function(e){return{login_open:!e.login_open}}))})),Object(l.a)(Object(o.a)(r),"_handleEscape",(function(e){27==e.which&&r._toggleMenu()})),Object(l.a)(Object(o.a)(r),"_handleClick",(function(e){})),r.state={mobile_menu_open:!1,user_profile_menu_open:!1,login_open:!1},r}return Object(r.a)(a,[{key:"_logOut",value:function(){event.preventDefault(),setTimeout((function(e){k.a.remove("user"),window.location.href="/"}),750)}},{key:"_renderUserProfileMenu",value:function(){return 0==this.state.user_profile_menu_open?null:C("ul",{id:"header-profile-menu",className:"vertical menu ".concat(h.a.menu," ").concat(h.a.profileMenu," clearfix")},C("li",{className:h.a.menuItem},C(b.a,{href:"/profile"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/profile-menu-profile.svg",alt:""}),C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.active),src:"/images/profile-menu-profile-active.svg",alt:""}),C("span",null,"Dashboard")))),C("li",{className:h.a.menuItem},C(b.a,{href:"/promote"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/profile-menu-upgrade.svg",alt:""}),C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.active),src:"/images/profile-menu-upgrade-active.svg",alt:""}),C("span",null,"Promote")))),C("li",{className:h.a.menuItem},C(b.a,{href:"/contact"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/profile-menu-contact.svg",alt:""}),C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.active),src:"/images/profile-menu-contact-active.svg",alt:""}),C("span",null,"Contact")))),C("li",{className:h.a.menuItem},C(b.a,{href:"/settings"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/profile-menu-settings.svg",alt:""}),C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.active),src:"/images/profile-menu-settings-active.svg",alt:""}),C("span",null,"Settings")))),C("li",{className:"".concat(h.a.menuItem," ").concat(h.a.logout)},C("a",{onClick:this._logOut},C("img",{className:h.a.menuImage,src:"/images/log-out-profile-menu.svg",alt:""}),C("span",null,"Log Out"))))}},{key:"componentDidUpdate",value:function(){}},{key:"_renderUserMenuIcon",value:function(){return 0==this.state.user_profile_menu_open?C("img",{src:"/images/account-arrow.svg",alt:""}):C("img",{className:h.a.iconOpen,src:"/images/account-arrow.svg",alt:""})}},{key:"_renderUserMenu",value:function(){var e=this.props.user,t=this.props.display_name;return C(m.a.Fragment,null,!1!==e&&void 0!==e?C("ul",{className:"".concat(h.a.userMenu," clearfix"),"aria-expanded":"false"},C("li",{className:"menu-item ".concat(h.a.search)},C(p.a,{href:"/find"},C("a",null,C("img",{className:h.a.search,src:"/images/search.svg",alt:"GovWhitePapers Search"})))),C("li",{className:"js-account-menu menu-item ".concat(h.a.account)},C("a",{onClick:this._toggleUserProfileMenu},t," ",this._renderUserMenuIcon()),this._renderUserProfileMenu())):C("ul",{className:"".concat(h.a.userMenu," clearfix"),"aria-expanded":"false"},C("li",{className:"menu-item ".concat(h.a.search)},C(p.a,{href:"/find"},C("a",null,C("img",{className:h.a.search,src:"/images/search.svg",alt:"GovWhitePapers Search"})))),C("li",{className:"js-account-menu menu-item ".concat(h.a.login)},C("a",{onClick:this._toggleLogin,className:"js-login ".concat(h.a.login)},"Login")),C("li",{className:"menu-item ".concat(h.a.getStarted)},C(p.a,{href:"/register"},C("a",{className:"button ".concat(h.a.button)},"Get started")))))}},{key:"render",value:function(){var e=this;return C(m.a.Fragment,null,C("header",{className:h.a.header},C("div",{className:"row"},C("div",{className:"small-9 medium-10 large-8 columns"},C(p.a,{href:"/"},C("a",null,C("img",{className:h.a.logo,src:"/images/logo.svg",alt:"GovWhitePapers Logo"}))),C("div",{className:h.a.navigationWrap},C("nav",{id:"site-navigation",className:1==this.state.mobile_menu_open?"".concat(h.a.mainNavigation," clearfix ").concat(h.a.toggled):"".concat(h.a.mainNavigation," clearfix")},C("button",{onClick:this._toggleMenu,className:h.a.menuToggle,"aria-controls":"primary-menu","aria-expanded":"false"},C("span",{className:"screen-reader-text"},"Toggle Mobile Menu"),C("div",{id:"burger",className:1==this.state.mobile_menu_open?"".concat(h.a.burger," ").concat(h.a.open):"".concat(h.a.burger)},C("span",null),C("span",null),C("span",null))),C("div",{className:"".concat(h.a.menuPrimaryMenuContainer," clearfix")},C("ul",{id:"primary-menu",className:"menu ".concat(h.a.menu," clearfix"),"aria-expanded":"false"},C("li",{className:"menu-item ".concat(h.a.homeMenuLink)},C(_,{href:"/"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/menu-home.png",alt:""}),"Home"))),C("li",{className:"menu-item"},C(_,{href:"/find"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/menu-find.png",alt:""}),"Find"))),C("li",{className:"menu-item"},C(_,{href:"/post"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/menu-post.png",alt:""}),"Post"))),C("li",{className:"menu-item"},C(_,{href:"/promote"},C("a",null,C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.promote),src:"/images/menu-promote.png",alt:""}),"Promote"))),C("li",{className:"menu-item"},C(_,{href:"/about"},C("a",null,C("img",{className:h.a.menuImage,src:"/images/menu-about.png",alt:""}),"About"))),C("li",{className:"menu-item"},C(_,{href:"/team"},C("a",null,C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.team),src:"/images/menu-team.png",alt:""}),"Team"))),C("li",{className:"menu-item"},C(_,{href:"/blog"},C("a",null,C("img",{className:"".concat(h.a.menuImage," ").concat(h.a.blog),src:"/images/menu-blog.png",alt:""}),"Blog"))),C("li",{className:"menu-item ".concat(h.a.eventsMenuLink)},C("a",{target:"_blank",href:"https://govevents.com"},C("img",{className:h.a.menuImage,src:"/images/menu-events.png",alt:""}),"Go to GovEvents"))),C("div",{className:"".concat(h.a.mobileUserMenuWrap," clearfix")},this._renderUserMenu()))))),C("div",{className:"small-3 medium-2 large-4 columns text-right"},C("div",{className:"".concat(h.a.mainUserMenuWrap," clearfix")},this._renderUserMenu()))),C(S,{open:this.state.login_open,toggle:function(){return e._toggleLogin()}})),C("div",{id:"ie-killa"},C("img",{src:"/images/logo.svg",alt:"GovWhitePapers Logo"}),C("h3",null,"Sorry, your browser is not compatible with this application. Please use the latest version of Google Chrome/Chromium, Mozilla Firefox or Safari.")))}}]),a}(m.a.Component);t.a=I},cTJO:function(e,t,a){"use strict";var n=a("/GRZ"),r=a("i2R6"),o=a("48fX"),i=a("tCBg"),s=a("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=s(e);if(t){var r=s(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return i(this,a)}}var l=a("AroE"),u=a("7KCV");t.__esModule=!0,t.default=void 0;var m,d=u(a("q1tI")),p=a("QmWs"),f=a("g/15"),g=l(a("nOHt")),h=a("elyg");function v(e){return e&&"object"===typeof e?(0,f.formatWithValidation)(e):e}var _=new Map,b=window.IntersectionObserver,y={};function w(){return m||(b?m=new b((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var N=function(e){o(a,e);var t=c(a);function a(e){var r;return n(this,a),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,a=null,n=null;return function(r,o){if(n&&r===t&&o===a)return n;var i=e(r,o);return t=r,a=o,n=i,i}}((function(e,t){return{href:(0,h.addBasePath)(v(e)),as:t?(0,h.addBasePath)(v(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,n=t.target;if("A"!==a||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),i=o.href,s=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),a=(0,p.parse)((0,f.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),s=s?(0,p.resolve)(c,s):i,e.preventDefault();var l=r.props.scroll;null==l&&(l=s.indexOf("#")<0),g.default[r.props.replace?"replace":"push"](i,s,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),a=t.href,n=t.as,r=(0,p.resolve)(e,a);return[r,n?(0,p.resolve)(e,n):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var a=w();return a?(a.observe(e),_.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}_.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||n),d.default.cloneElement(o,i)}}]),a}(d.Component);t.default=N},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI"));t.AmpStateContext=r.createContext({})},mPvQ:function(e,t,a){var n=a("5fIB"),r=a("rlHP"),o=a("KckH"),i=a("kG2m");e.exports=function(e){return n(e)||r(e)||o(e)||i()}},rePB:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},remQ:function(e,t,a){e.exports={navigationWrap:"header_navigationWrap__3W-tx",mainNavigation:"header_mainNavigation__1mZvu",menuPrimaryMenuContainer:"header_menuPrimaryMenuContainer__2Ethz",focus:"header_focus__1JPvY",menu:"header_menu__18IKw",eventsMenuLink:"header_eventsMenuLink__1BkQ-",homeMenuLink:"header_homeMenuLink__3PtGg",menuImage:"header_menuImage__1yvNa",promote:"header_promote__IctKI",team:"header_team__1likC",blog:"header_blog__1Klgw",active:"header_active__dxtyn",current_page_item:"header_current_page_item__18edO","current-menu-item":"header_current-menu-item__21UmS",current_page_ancestor:"header_current_page_ancestor__3QbdO","current-menu-ancestor":"header_current-menu-ancestor__3XyAW",mobileUserMenuWrap:"header_mobileUserMenuWrap__1CwPT",userMenu:"header_userMenu__iy9Aw",login:"header_login__103WU",button:"header_button__3QcdT",getStarted:"header_getStarted__15WnA",mainUserMenuWrap:"header_mainUserMenuWrap__1nbrl",iconOpen:"header_iconOpen__3mybx",account:"header_account__3rhBI",toggled:"header_toggled__1ANyR",search:"header_search__2ulKS",header_button:"header_header_button__1T0Ay",menuToggle:"header_menuToggle__1pz3i",burger:"header_burger__vIcBc",open:"header_open__1ATjX",header:"header_header__22WbX",logo:"header_logo__2AmUG",profileMenu:"header_profileMenu__199Zd","js-account-menu":"header_js-account-menu__2TnNf",menuItem:"header_menuItem__22eB1",logout:"header_logout__uC4Hm"}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}}]);