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
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/alert */ "./components/alert.js");


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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showAlert = _useState4[0],
      setAlert = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var storedFavs = JSON.parse(localStorage.getItem("favs"));
    setFavs(storedFavs || []);
  }, [toggle]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showAlert: showAlert,
    handleClose: function handleClose() {
      return setAlert;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3887979593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleSearch: function handleSearch(filmList) {
      return setFilms(filmList);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-3887979593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Star Wars Films"), __jsx("ul", {
    className: "jsx-3887979593" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 25
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3887979593",
    __self: this
  }, ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.fav{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCMkIsQUFHMEIsQUFJSiw0Q0FDWCw4QkFKd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGlzdFwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5cbmNvbnN0IEluZGV4UGFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW2ZpbG1zLCBzZXRGaWxtc10gPSB1c2VTdGF0ZShwcm9wc1swXSk7XG4gIGNvbnN0IFtmYXZzLCBzZXRGYXZzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkRmF2cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZzXCIpKTtcbiAgICBzZXRGYXZzKHN0b3JlZEZhdnMgfHwgW10pO1xuICB9LCBbdG9nZ2xlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFsZXJ0IHNob3dBbGVydD17c2hvd0FsZXJ0fSBoYW5kbGVDbG9zZT17KCkgPT4gc2V0QWxlcnR9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17ZmlsbUxpc3QgPT4gc2V0RmlsbXMoZmlsbUxpc3QpfSAvPlxuICAgICAgICA8aDE+U3RhciBXYXJzIEZpbG1zPC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgZmlsbXM9e2ZpbG1zfVxuICAgICAgICAgICAgZmF2cz17ZmF2c31cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmF2IHtcbiAgICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL3N3YXBpLmNvL2FwaS9maWxtcy9cIjtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIFtkYXRhLnJlc3VsdHNdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/johnrubio/github_projects/swapi-react/pages/index.js */")));
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
//# sourceMappingURL=index.js.e010cc60e5b54159da8f.hot-update.js.map