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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/alert.js":
/*!*****************************!*\
  !*** ./components/alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/components/alert.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Alert = ({
  showAlert,
  handleClose
}) => {
  return showAlert ? __jsx("div", {
    className: "jsx-4068950051" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    onClick: handleClose,
    className: "jsx-4068950051",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-4068950051",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "This film in now Favourited")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4068950051",
    __self: undefined
  }, ".jsx-4068950051{width:100%;text-align:center;background-color:aquamarine;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L2NvbXBvbmVudHMvYWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBRW9CLFdBQ08sa0JBQ1UsNEJBQzlCIiwiZmlsZSI6Ii9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L2NvbXBvbmVudHMvYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBbGVydCA9ICh7IHNob3dBbGVydCwgaGFuZGxlQ2xvc2UgfSkgPT4ge1xuICByZXR1cm4gc2hvd0FsZXJ0ID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj5cbiAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICA8cD5UaGlzIGZpbG0gaW4gbm93IEZhdm91cml0ZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiJdfQ== */\n/*@ sourceURL=/Users/johnrubio/github_projects/swapi-react/components/alert.js */")) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/components/list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const favClick = id => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  storedFavs.push(id);
  localStorage.setItem("favs", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(storedFavs));
};

const unFavClick = id => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  const index = storedFavs.indexOf(id);
  storedFavs.splice(index, 1);
  localStorage.setItem("favs", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(storedFavs));
};

const List = ({
  films,
  favs,
  handleClick,
  showAlert
}) => {
  const list = films.map(film => {
    if (favs.indexOf(film.episode_id) >= 0) {
      return __jsx("li", {
        key: film.episode_id,
        className: "fav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, film.title, " -", " ", __jsx("button", {
        onClick: () => {
          unFavClick(film.episode_id);
          handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      }, "unFav"));
    } else {
      return __jsx("li", {
        key: film.episode_id,
        className: "nonfav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }, film.title, " -", " ", __jsx("button", {
        onClick: () => {
          favClick(film.episode_id);
          showAlert();
          handleClick();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: undefined
      }, "Fav"));
    }
  });
  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/components/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Search = ({
  handleSearch
}) => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const queryFilms = async q => {
    const url = `https://swapi.co/api/films/?search=${q}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("results", data);
    handleSearch(data.results);
  };

  return __jsx("form", {
    onSubmit: e => {
      console.log("search", state);
      e.preventDefault();
      queryFilms(state);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    name: "search-bar",
    id: "search-bar",
    placeholder: "Search films...",
    value: state,
    onChange: e => setState(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Search"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/alert */ "./components/alert.js");
var _jsxFileName = "/Users/johnrubio/github_projects/swapi-react/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const IndexPage = props => {
  const {
    0: films,
    1: setFilms
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props[0]);
  const {
    0: favs,
    1: setFavs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: toggle,
    1: setToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showAlert,
    1: setShowAlert
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs"));
    setFavs(storedFavs || []);
  }, [toggle]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_alert__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showAlert: showAlert,
    handleClose: () => setShowAlert(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3887979593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_components_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleSearch: filmList => setFilms(filmList),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("h1", {
    className: "jsx-3887979593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Star Wars Films"), __jsx("ul", {
    className: "jsx-3887979593" + " " + "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_components_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    films: films,
    favs: favs,
    handleClick: () => setToggle(!toggle),
    showAlert: () => setShowAlert(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3887979593",
    __self: undefined
  }, ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.fav{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDMkIsQUFHMEIsQUFJSiw0Q0FDWCw4QkFKd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qb2hucnViaW8vZ2l0aHViX3Byb2plY3RzL3N3YXBpLXJlYWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGlzdFwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5cbmNvbnN0IEluZGV4UGFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW2ZpbG1zLCBzZXRGaWxtc10gPSB1c2VTdGF0ZShwcm9wc1swXSk7XG4gIGNvbnN0IFtmYXZzLCBzZXRGYXZzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0U2hvd0FsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZEZhdnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2c1wiKSk7XG4gICAgc2V0RmF2cyhzdG9yZWRGYXZzIHx8IFtdKTtcbiAgfSwgW3RvZ2dsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBbGVydCBzaG93QWxlcnQ9e3Nob3dBbGVydH0gaGFuZGxlQ2xvc2U9eygpID0+IHNldFNob3dBbGVydChmYWxzZSl9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17ZmlsbUxpc3QgPT4gc2V0RmlsbXMoZmlsbUxpc3QpfSAvPlxuICAgICAgICA8aDE+U3RhciBXYXJzIEZpbG1zPC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgZmlsbXM9e2ZpbG1zfVxuICAgICAgICAgICAgZmF2cz17ZmF2c31cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XG4gICAgICAgICAgICBzaG93QWxlcnQ9eygpID0+IHNldFNob3dBbGVydCh0cnVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgLmZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXYge1xuICAgICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5JbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc3dhcGkuY28vYXBpL2ZpbG1zL1wiO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4gW2RhdGEucmVzdWx0c107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/johnrubio/github_projects/swapi-react/pages/index.js */")));
};

IndexPage.getInitialProps = async () => {
  const url = "https://swapi.co/api/films/";
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);
  const data = await res.json();
  return [data.results];
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnrubio/github_projects/swapi-react/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map