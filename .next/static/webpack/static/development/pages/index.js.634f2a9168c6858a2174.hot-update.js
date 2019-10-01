webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/components/list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var favClick = function favClick(id) {
  var storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  storedFavs.push(id);
  localStorage.setItem("favs", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(storedFavs));
  alert("favourited");
};

var unFavClick = function unFavClick(id) {
  var storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  var index = favorites.indexOf(nodeString);
  storedFavs.splice(index, 1);
  localStorage.setItem("favs", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(storedFavs));
  alert("favourited");
};

var List = function List(_ref) {
  var films = _ref.films,
      favs = _ref.favs,
      handleClick = _ref.handleClick;
  var list = films.map(function (film) {
    if (favs.indexOf(film.episode_id) >= 0) {
      return __jsx("li", {
        key: film.episode_id,
        className: "fav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, film.title, " -", " ", __jsx("button", {
        onClick: function onClick() {
          unFavClick(film.episode_id);
          handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "unFav"));
    } else {
      return __jsx("li", {
        key: film.episode_id,
        className: "nonfav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, film.title, " -", " ", __jsx("button", {
        onClick: function onClick() {
          favClick(film.episode_id);
          handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
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
//# sourceMappingURL=index.js.634f2a9168c6858a2174.hot-update.js.map