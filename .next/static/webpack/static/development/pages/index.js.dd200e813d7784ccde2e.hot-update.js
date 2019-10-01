webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/components/list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var List = function List(_ref) {
  var films = _ref.films,
      _ref$clickHandler = _ref.clickHandler,
      clickHandler = _ref$clickHandler === void 0 ? null : _ref$clickHandler,
      _ref$favs = _ref.favs,
      favs = _ref$favs === void 0 ? [] : _ref$favs;
  console.log("list", favs);
  var list = films.map(function (film) {
    if (favs.indexOf(film.episode_id) > 0) {
      console.log(film);
      return __jsx("li", {
        key: film.episode_id,
        className: "fav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, film.title, " - unFav");
    } else {
      return __jsx("li", {
        key: film.episode_id,
        className: "nonfav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, film.title, " -", " ", __jsx("button", {
        onClick: function onClick() {
          clickHandler(film.episode_id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Fav"));
    }
  });
  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.dd200e813d7784ccde2e.hot-update.js.map