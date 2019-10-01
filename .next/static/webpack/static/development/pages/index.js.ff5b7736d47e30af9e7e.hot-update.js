webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search */ "./components/search.js");



var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var favClick = function favClick(favs) {
  localStorage.setItem("favs", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(favs));
  alert("favourited");
};

var createList = function createList(films) {
  var clickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var favs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var list = films.map(function (film) {
    if (favs.indexOf(film.episode_id) > 0) {
      return __jsx("li", {
        key: film.episode_id,
        className: "fav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, film.title, " - unFav");
    } else {
      return __jsx("li", {
        key: film.episode_id,
        className: "nonfav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, film.title, " - ", __jsx("button", {
        onClick: clickHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Fav"));
    }
  });
  return list;
};

var IndexPage = function IndexPage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props[0]),
      films = _useState[0],
      setFilms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      favs = _useState2[0],
      setFavs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(createList(films)),
      html = _useState3[0],
      setHtml = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var storedFavs = JSON.parse(localStorage.getItem("favs"));
    setFavs(storedFavs || []);
    setHtml(createList(films, setFavs, favs));
    console.log("useEffect run");
  }, [toggle]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleSearch: function handleSearch(filmList) {
      return setFilms(filmList);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Star Wars Films"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, html));
}; // onclick of fave, will push to local storage, will update fav state


IndexPage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://swapi.co/api/films/";
          _context.next = 3;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url);

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          console.log("run");
          return _context.abrupt("return", [data.results]);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.ff5b7736d47e30af9e7e.hot-update.js.map