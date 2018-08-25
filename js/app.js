webpackJsonp([0],{

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/maksimboguslavsky/repositaries/portfolio_project/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/maksimboguslavsky/repositaries/portfolio_project/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function a(b, c) {
    for (var e, d = 0; d < c.length; d++) {
      e = c[d], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(b, e.key, e);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}(),
    _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react);Object.defineProperty(exports, "__esModule", { value: !0 });function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b && ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) ? b : a;
}function _inherits(a, b) {
  if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (typeof b === "undefined" ? "undefined" : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}var Portfolio = function (a) {
  function b() {
    _classCallCheck(this, b);var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return c.state = { projects: [{ name: "Portfolio", description: "Current portfolio", url: "https://maxbogus.github.io/portfolio_project/", github: "https://github.com/maxbogus/portfolio_project", wide_img: "img/portfolio-wide.png", small_img: "img/portfolio-small.png", skills: ["JavaScript", "React", "ES6", "Bootstrap4"] }, { name: "Driver", description: "Driver portal.", url: "https://driver.gett.zone/", github: null, wide_img: "img/driver_gett_zone-wide.png", small_img: "img/driver_gett_zone-small.png", skills: ["JavaScript", "Python", "Django", "React", "PostgreSQL", "ES6"] }, { name: "Task queue", description: "Simple task tracker with server-side.", url: null, github: "//github.com/maxbogus/tasks_queue", wide_img: "img/task_queue-wide.png", small_img: "img/task_queue-small.png", skills: ["JavaScript", "Python", "Flask", "AngularJS", "AJAX", "Tornado"] }, { name: "Neighborhood Map", description: "A single-page with an area and various points of interest.", url: "https://maxbogus.github.io/Neighborhood_Map_Project/", github: "//github.com/maxbogus/fullstack-nanodegree-vm/tree/master/vagrant/catalog", wide_img: "img/neighborhood_map-wide.png", small_img: "img/neighborhood_map-small.png", skills: ["JavaScript", "HTML", "CSS", "KnockoutJS", "AJAX"] }, { name: "Organizational structure", description: "Small crud application to visualize organizational structure.", url: null, github: "//github.com/maxbogus/fullstack-nanodegree-vm/tree/master/vagrant/catalog", wide_img: "img/org_structure-wide.png", small_img: "img/org_structure-small.png", skills: ["Python", "Flask", "HTML", "CSS", "SQL"] }, { name: "Tournament", description: "Swiss system tournament system.", url: null, github: "//github.com/maxbogus/fullstack-nanodegree-vm/", wide_img: "img/tournament_test-wide.png", small_img: "img/tournament_test-small.png", skills: ["Python", "PostgreSQL", "Vagrant"] }, { name: "Blog", description: "Multi-user blog application.", url: "//blog-140923.appspot.com/", github: "//github.com/maxbogus/fullstack-nanodegree-vm/", wide_img: "img/blog_project-wide.png", small_img: "img/blog_project-small.png", skills: ["Python", "Google App Engine", "HTML"] }, { name: "Movie Site", description: "Favorite movies.", url: "//maxbogus.github.io/movie_trailer_website/fresh_tomatoes.html", github: "//github.com/maxbogus/fullstack-nanodegree-vm/", wide_img: "img/movie_site-wide.png", small_img: "img/movie_site-small.png", skills: ["Python", "CSS", "HTML"] }], filteredProjects: [], showWarning: !1, currentSkill: null }, c;
  }return _inherits(b, a), _createClass(b, [{ key: "componentWillMount", value: function componentWillMount() {
      this.setState({ filteredProjects: this.state.projects });
    } }, { key: "_filterBySkill", value: function _filterBySkill(c) {
      var d = c.target.value,
          e = this.state.projects.filter(function (f) {
        return 0 <= f.skills.indexOf(d);
      });e && this.setState({ currentSkill: d, filteredProjects: e });
    } }, { key: "_clearFilter", value: function _clearFilter() {
      this.setState({ currentSkill: null });
    } }, { key: "render", value: function render() {
      var c = this,
          d = this.state.filteredProjects.map(function (f, g) {
        var h = f.skills.map(function (j, k) {
          return _react2.default.createElement("button", { key: k, value: j, type: "button", onClick: c._filterBySkill.bind(c), className: "btn btn-secondary" }, j);
        });return _react2.default.createElement("div", { key: g }, _react2.default.createElement("h3", { className: "text-uppercase" }, f.name), _react2.default.createElement("div", { className: "btn-group btn-group-sm", role: "group" }, h), _react2.default.createElement("br", null), _react2.default.createElement("picture", null, _react2.default.createElement("source", { srcSet: f.wide_img, media: "(min-width: 800px)" }), _react2.default.createElement("img", { src: f.small_img, className: "img-fluid" })), _react2.default.createElement("br", null), _react2.default.createElement("p", null, f.description), _react2.default.createElement("div", { className: "btn-group btn-group-sm", role: "group", "aria-label": "Basic example" }, _react2.default.createElement("button", { type: "button", className: "btn btn-secondary" }, _react2.default.createElement("a", { href: f.url, style: { disabled: null !== f.url } }, "Project url")), _react2.default.createElement("button", { type: "button", className: "btn btn-secondary" }, _react2.default.createElement("a", { href: f.github, style: { disabled: null !== f.github } }, "Github"))), _react2.default.createElement("hr", null));
      }),
          e = null === this.state.currentSkill ? null : _react2.default.createElement("div", { className: "alert alert-warning alert-dismissible", onClick: this._clearFilter.bind(this), role: "alert" }, _react2.default.createElement("p", null, " You have chosen ", _react2.default.createElement("b", null, this.state.currentSkill), ". Click on this message to clear filter."));return _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("header", { className: "row" }, _react2.default.createElement("div", { className: "col col-xs-4" }, _react2.default.createElement("picture", null, _react2.default.createElement("source", { className: "img-fluid rounded float-left", srcSet: "img/logo-wide.jpg", media: "(min-width: 800px)" }), _react2.default.createElement("img", { className: "img-fluid rounded", src: "img/logo-small.jpg", alt: "Logo" }))), _react2.default.createElement("div", { className: "col" }, _react2.default.createElement("h1", null, "Max Boguslavskiy"), _react2.default.createElement("h4", null, "Full Stack Team Lead"))), _react2.default.createElement("section", { className: "row" }, _react2.default.createElement("div", { className: "col" }, _react2.default.createElement("hr", null), _react2.default.createElement("picture", null, _react2.default.createElement("source", { srcSet: "img/clouds-wide.jpg", media: "(min-width: 800px)" }), _react2.default.createElement("img", { className: "img-fluid", src: "img/clouds-small.jpg", alt: "Main Image" })), _react2.default.createElement("p", { className: "text-center" }, "My name is Max Boguslavskiy. I'm working in IT industry for 8+ years. I worked in Banki.ru, Acronis, Innova, Luxoft and Superscape. Currently i'm working as a Full Stack Team Lead at Gett."), _react2.default.createElement("h2", { className: "col-12 col-md-auto text-center" }, "Featured Work"), e)), _react2.default.createElement("section", { className: "row" }, _react2.default.createElement("div", { className: "col col-md-auto" }, d)), _react2.default.createElement("footer", { className: "row" }, _react2.default.createElement("div", { className: "col" }, _react2.default.createElement("a", { href: "//www.facebook.com/maxbogusblog/" }, _react2.default.createElement("img", { srcSet: "img/if_square-facebook_317727.png" }))), _react2.default.createElement("div", { className: "col" }, _react2.default.createElement("a", { href: "//maxbogus.blogspot.ru/" }, _react2.default.createElement("img", { srcSet: "img/if_blogger_28283.png" }))), _react2.default.createElement("div", { className: "col" }, _react2.default.createElement("a", { href: "//github.com/maxbogus/" }, _react2.default.createElement("img", { srcSet: "img/if_github_1632512.png" }))), _react2.default.createElement("div", { className: "col" }, _react2.default.createElement("a", { id: "codewars", href: "//www.codewars.com/r/WcTjGg" }, _react2.default.createElement("img", { className: "img-fluid", src: "img/if_codewars_1586249.png" })))), _react2.default.createElement("footer", { className: "row" }, _react2.default.createElement("div", { className: "offset-4 col-3" }, _react2.default.createElement("p", null, "\xA9Max Boguslavskiy"))));
    } }]), b;
}(_react2.default.Component);exports.default = Portfolio;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/maksimboguslavsky/repositaries/portfolio_project/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "portfolio.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/maksimboguslavsky/repositaries/portfolio_project/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/maksimboguslavsky/repositaries/portfolio_project/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _portfolio = __webpack_require__(214);

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var portfolio = document.getElementById('portfolio');
if (portfolio) {
    _reactDom2.default.render(_react2.default.createElement(_portfolio2.default, null), portfolio);
}

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/maksimboguslavsky/repositaries/portfolio_project/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ })

},[440]);