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
      clickHandler = _ref.clickHandler,
      favs = _ref.favs;
  console.log(favs);
  var list = films.map(function (film) {
    if (favs.indexOf(film.episode_id) >= 0) {
      return __jsx("li", {
        key: film.episode_id,
        className: "fav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, film.title, " - unFav");
    } else {
      return __jsx("li", {
        key: film.episode_id,
        className: "nonfav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, film.title, " -", " ", __jsx("button", {
        onClick: function onClick() {
          clickHandler(film.episode_id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
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
//# sourceMappingURL=index.js.6604d006e2793e013e50.hot-update.js.map