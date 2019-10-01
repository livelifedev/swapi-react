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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/list */ "./components/list.js");


var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var IndexPage = function IndexPage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props[0]),
      films = _useState[0],
      setFilms = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      favs = _useState2[0],
      setFavs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      toggle = _useState3[0],
      setToggle = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var storedFavs = JSON.parse(localStorage.getItem("favs"));
    setFavs(storedFavs || []);
  }, [toggle]);
  return __jsx("div", {
    className: "jsx-562784939",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleSearch: function handleSearch(filmList) {
      return setFilms(filmList);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-562784939",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Star Wars Films"), __jsx("ul", {
    className: "jsx-562784939" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
    films: films,
    favs: favs,
    handleClick: function handleClick() {
      return setToggle(!toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "562784939",
    __self: this
  }, ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.fav{-webkit-order:1;-ms-flex-order:1;order:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCeUIsQUFHd0IsQUFJTCx5Q0FDVixpQ0FKd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGlzdFwiO1xuXG5jb25zdCBJbmRleFBhZ2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtmaWxtcywgc2V0RmlsbXNdID0gdXNlU3RhdGUocHJvcHNbMF0pO1xuICBjb25zdCBbZmF2cywgc2V0RmF2c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRGYXZzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdnNcIikpO1xuICAgIHNldEZhdnMoc3RvcmVkRmF2cyB8fCBbXSk7XG4gIH0sIFt0b2dnbGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17ZmlsbUxpc3QgPT4gc2V0RmlsbXMoZmlsbUxpc3QpfSAvPlxuICAgICAgPGgxPlN0YXIgV2FycyBGaWxtczwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8TGlzdFxuICAgICAgICAgIGZpbG1zPXtmaWxtc31cbiAgICAgICAgICBmYXZzPXtmYXZzfVxuICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XG4gICAgICAgIC8+XG4gICAgICA8L3VsPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5mYXYge1xuICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc3dhcGkuY28vYXBpL2ZpbG1zL1wiO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4gW2RhdGEucmVzdWx0c107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/johnrubio/github_projects/swapi-react/pages/index.js */"));
};

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
          return _context.abrupt("return", [data.results]);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.f7a1fb11eeadae5dee90.hot-update.js.map