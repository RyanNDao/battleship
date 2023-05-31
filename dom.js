/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ocean.jpg */ "./src/images/ocean.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleship-background.jpg */ "./src/images/battleship-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/enemy-battleship-background.jpg */ "./src/images/enemy-battleship-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    background-size:100% 100%;\n}\n\n.main-container{\n    background-color: rgba(128, 128, 128, 0.911);\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    grid-template-columns: repeat(5, 1fr);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.header{\n    grid-column: 1 / 6;\n    grid-row: 1;\n}\n\n.message-container{\n    grid-column: 1 / 6;\n    grid-row: 7; \n}\n\n.game-container{\n    grid-column: 1 / 6;\n    grid-row: 2 / 7;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 2px solid black;\n    background-color: rgba(250, 235, 215, 0.418);\n}\n\n.divider-container{\n    width: 20%;\n    height: 100%;\n    /*background-color: green;*/\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.divider-message, .start-message{\n    margin: 0;\n    font-size: 2.75rem;\n    font-weight: bold;\n    color: rgba(3, 26, 26, 0.801);\n    text-align: center;\n}\n\n.divider-container > button, .start-button{\n    width: 75%;\n    height: 45px;\n    border-radius: 5px;\n    font-size: 2vh;\n    font-weight: bold;\n    background-color: antiquewhite;\n    color: rgba(139, 0, 0, 0.849);\n}\n\np.start-message, button.start-button{\n    color: rgba(17, 20, 192, 0.959);\n} \n\n.board{\n    aspect-ratio: 1 / 1;\n    width: 35%;\n    display: grid;\n    grid-template-rows: repeat(65, 1fr);\n    border: 3px solid rgb(20, 20, 201);\n}\n\n.player.board{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n}\n\n.board-row{\n    display: grid;\n    grid-template-columns: repeat(65, 1fr);\n    grid-row: span 5;\n}\n\n.board-tile{\n    grid-column: span 5;\n    background-color: rgba(173, 216, 230, 0.555);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(12px, calc(5vh - 14px), 40px);\n    font-weight: bold;\n}\n\n.opponent.board .board-tile[class$=\"_gametile\"]{\n    cursor: pointer;\n}\n\n.player.board .board-tile.ship-tile{\n    color: blue;\n}\n\n.player.board .board-tile.missed-tile,\n.opponent.board .board-tile.shot-tile{\n    color: green;\n}\n\n.player.board .board-tile.shot-tile,\n.opponent.board .board-tile.missed-tile{\n    color: red;\n}\n\n.vertical-line, .horizontal-line{\n    background-color: rgb(44, 41, 41);\n}\n\n.opponent.board{\n    position: relative;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n}\n\n.board-overlay, .start-overlay{\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(136, 123, 123, 0.527);\n}\n\n.start-overlay{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n}\n\n.start-screen{\n    position: absolute;\n    height: 60%;\n    width: 40%;\n    top: 20%;\n    left: 30%;\n    background-color: rgba(64, 92, 53, 0.658);\n    box-shadow: 3px 2px 2px lightcoral;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10px 30px 10px 30px;\n}\n\n.place-ship-form-container{\n    width: 100%;\n    padding: 30px 10px;\n    border: 3px solid black;\n    background-color: rgba(136, 84, 84, 0.589);\n}\n\n.place-ship-form{\n    display: flex;\n    flex-direction: column;\n}\n\n.place-ship-button{\n    margin-top: 30px;\n    align-self: center;\n    height: 30px;\n    width: 90%;\n    font-weight: bold;\n}\n\n.form-input{\n    display: flex;\n    gap: 6px;\n    font-size: 1.5rem;\n    color: rgb(30, 33, 207);\n    font-weight: 600;\n    justify-content: space-between;\n}\n\n.form-input > select{\n    font-size: 1.15rem;\n}\n\n.form-error{\n    text-align: center;\n    align-self: center;\n    font-weight: bold;\n    color: rgb(117, 8, 8);\n    font-size: 1.75rem;\n    margin: 0;\n}\n\n.game-message, .title{\n    font-size: 3rem;\n    margin: 0;\n    font-weight: bold;\n    color: rgb(39, 40, 63);\n}\n\n.message-container, .header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(127, 255, 212, 0.418);\n    border: 2px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,yDAAyC;IACzC,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,4CAA4C;AAChD;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,yDAAyD;IACzD,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;IAC5C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,yDAA+D;IAC/D,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,4CAA4C;AAChD;;AAEA;IACI,yDAAyD;IACzD,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,SAAS;IACT,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,uBAAuB;AAC3B","sourcesContent":["body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    background-size:100% 100%;\n}\n\n.main-container{\n    background-color: rgba(128, 128, 128, 0.911);\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    grid-template-columns: repeat(5, 1fr);\n    background-image: url(./images/ocean.jpg);\n    background-size: cover;\n}\n\n.header{\n    grid-column: 1 / 6;\n    grid-row: 1;\n}\n\n.message-container{\n    grid-column: 1 / 6;\n    grid-row: 7; \n}\n\n.game-container{\n    grid-column: 1 / 6;\n    grid-row: 2 / 7;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 2px solid black;\n    background-color: rgba(250, 235, 215, 0.418);\n}\n\n.divider-container{\n    width: 20%;\n    height: 100%;\n    /*background-color: green;*/\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.divider-message, .start-message{\n    margin: 0;\n    font-size: 2.75rem;\n    font-weight: bold;\n    color: rgba(3, 26, 26, 0.801);\n    text-align: center;\n}\n\n.divider-container > button, .start-button{\n    width: 75%;\n    height: 45px;\n    border-radius: 5px;\n    font-size: 2vh;\n    font-weight: bold;\n    background-color: antiquewhite;\n    color: rgba(139, 0, 0, 0.849);\n}\n\np.start-message, button.start-button{\n    color: rgba(17, 20, 192, 0.959);\n} \n\n.board{\n    aspect-ratio: 1 / 1;\n    width: 35%;\n    display: grid;\n    grid-template-rows: repeat(65, 1fr);\n    border: 3px solid rgb(20, 20, 201);\n}\n\n.player.board{\n    background-image: url(./images/battleship-background.jpg);\n    background-size: cover;\n}\n\n.board-row{\n    display: grid;\n    grid-template-columns: repeat(65, 1fr);\n    grid-row: span 5;\n}\n\n.board-tile{\n    grid-column: span 5;\n    background-color: rgba(173, 216, 230, 0.555);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(12px, calc(5vh - 14px), 40px);\n    font-weight: bold;\n}\n\n.opponent.board .board-tile[class$=\"_gametile\"]{\n    cursor: pointer;\n}\n\n.player.board .board-tile.ship-tile{\n    color: blue;\n}\n\n.player.board .board-tile.missed-tile,\n.opponent.board .board-tile.shot-tile{\n    color: green;\n}\n\n.player.board .board-tile.shot-tile,\n.opponent.board .board-tile.missed-tile{\n    color: red;\n}\n\n.vertical-line, .horizontal-line{\n    background-color: rgb(44, 41, 41);\n}\n\n.opponent.board{\n    position: relative;\n    background-image: url(./images/enemy-battleship-background.jpg);\n    background-size: cover;\n}\n\n.board-overlay, .start-overlay{\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(136, 123, 123, 0.527);\n}\n\n.start-overlay{\n    background-image: url(./images/battleship-background.jpg);\n    background-size: cover;\n}\n\n.start-screen{\n    position: absolute;\n    height: 60%;\n    width: 40%;\n    top: 20%;\n    left: 30%;\n    background-color: rgba(64, 92, 53, 0.658);\n    box-shadow: 3px 2px 2px lightcoral;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10px 30px 10px 30px;\n}\n\n.place-ship-form-container{\n    width: 100%;\n    padding: 30px 10px;\n    border: 3px solid black;\n    background-color: rgba(136, 84, 84, 0.589);\n}\n\n.place-ship-form{\n    display: flex;\n    flex-direction: column;\n}\n\n.place-ship-button{\n    margin-top: 30px;\n    align-self: center;\n    height: 30px;\n    width: 90%;\n    font-weight: bold;\n}\n\n.form-input{\n    display: flex;\n    gap: 6px;\n    font-size: 1.5rem;\n    color: rgb(30, 33, 207);\n    font-weight: 600;\n    justify-content: space-between;\n}\n\n.form-input > select{\n    font-size: 1.15rem;\n}\n\n.form-error{\n    text-align: center;\n    align-self: center;\n    font-weight: bold;\n    color: rgb(117, 8, 8);\n    font-size: 1.75rem;\n    margin: 0;\n}\n\n.game-message, .title{\n    font-size: 3rem;\n    margin: 0;\n    font-weight: bold;\n    color: rgb(39, 40, 63);\n}\n\n.message-container, .header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(127, 255, 212, 0.418);\n    border: 2px solid black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length, numHits){
        this.length = length;
        this.numHits = numHits ? numHits : 0;
        this.hitTiles = []
    }

    hit = ()=> {
        this.numHits += 1;
    }

    get sunk(){
        return this.numHits >= this.length ? true : false;
    }

    get tileIcon(){
        return this.icon ? this.icon : 'O';
    }

    set tileIcon(newIcon){
        this.icon = newIcon;
    }

    toString(){
        return this.tileIcon;
    }
}

class Gameboard {
    constructor(){
        this.tiles = this.#createTiles();
        this.shotTiles = [];
        this.shipsList = [];
    }

    #createTiles = ()=>{
        let tiles = []
        for (let i=0; i<10;i++){
            let tileRow = []
            for (let j=0; j<10; j++){
                tileRow.push('.')
            }
            tiles.push(tileRow)
        }
        return tiles
    }

    #shipPlacementOutOfBounds = (ship, coords, direction) => {
        if (direction.toLowerCase() === 'right'){
            if (coords[1] + (ship.length-1) >= 10){
                return true
            }
        }
        if (direction.toLowerCase() === 'left'){
            if (coords[1] - (ship.length-1) < 0){
                return true
            }
        }
        if (direction.toLowerCase() === 'up'){
            if (coords[0] - (ship.length-1) < 0){
                return true
            }
        }
        if (direction.toLowerCase() === 'down'){
            if (coords[0] + (ship.length-1) >= 10){
                return true
            }
        }
        return false
    }

    #intersectsAnotherShip = (ship, coords, direction) => {
        for (let i=0; i<ship.length; i++){
            if (direction.toLowerCase() === 'right' || direction.toLowerCase() === 'left'){
                let movement = (direction.toLowerCase() === 'right') ? i : -i 
                if (this.tiles[coords[0]][coords[1]+movement] instanceof Ship){
                    return true
                };
            } else if (direction.toLowerCase() === 'up' || direction.toLowerCase() === 'down'){
                let movement = (direction.toLowerCase() === 'down') ? i : -i 
                if (this.tiles[coords[0]+movement][coords[1]] instanceof Ship){
                    return true
                }
            }
        }
        return false
    }

    placeShip = (ship, coords, direction) => {
        if ( !(direction) || !(coords) || !(ship)){
            throw Error('Missing parameters. Pass in ship object, coordinates, and a direction!');
        }
        if (!coords.map((axis)=>{return (axis < 10 && axis >= 0)}).filter((shipValid)=>{!shipValid})){
            throw Error('Ship can\'t be placed out of bounds!');
        }
        if (this.#shipPlacementOutOfBounds(ship, coords, direction)){
            console.warn('Part of ship is out of bounds!')
            return 'Part of ship is out of bounds!';
        }

        if (this.#intersectsAnotherShip(ship, coords, direction)){
            console.warn('Ship cannot be placed on another ship!')
            return 'Ship cannot be placed on another ship!';
        }
        if (this.shipsList.length >= 7){
            console.warn('Too many ships! Maximum of 7 ships can be placed!')
            return 'Too many ships! Maximum of 7 ships can be placed!';
        }
        
        for (let i=0; i<ship.length; i++){
            if (direction.toLowerCase() === 'right' || direction.toLowerCase() === 'left'){
                let movement = (direction.toLowerCase() === 'right') ? i : -i 
                this.tiles[coords[0]][coords[1]+movement] = ship;
            } else if (direction.toLowerCase() === 'up' || direction.toLowerCase() === 'down'){
                let movement = (direction.toLowerCase() === 'down') ? i : -i 
                this.tiles[coords[0]+movement][coords[1]] = ship
            }
        }
        this.shipsList.push(ship)
        return null
    }

    receiveAttack = (coords) => {
        let tile = this.tiles[coords[0]][coords[1]]
        if (!tile){
            console.error('Coordinates were not valid!')
            return null;
        }
        if (JSON.stringify(this.getPossibleMoves()).indexOf(JSON.stringify(coords)) === -1) {
            console.error('This tile was already shot!')
            return null;
        } else if (tile instanceof Ship){
            console.log('Shot hit a ship!', coords)
            tile.hit()
            this.shotTiles.push(coords);
            tile.hitTiles.push(coords);
            return true;
        } else {
            console.log('Shot missed!', coords)
            this.shotTiles.push(coords)
            this.tiles[coords[0]][coords[1]] = 'X';
            return false;
        }
    }

    allShipsSunk = () => {
        for (let ship of this.shipsList){
            if (!ship.sunk){
                return false
            }
        }
        return this.shipsList.length !== 0 ? true : false;
    }

    getPossibleMoves = () => {
        let possibleMoves = []
        for (let i=0; i<10; i++){
            for (let j=0; j<10; j++){
                let tile = [i,j]
                if (JSON.stringify(this.shotTiles).indexOf(JSON.stringify(tile)) === -1){
                    possibleMoves.push(tile)
                }
            }
        }
        return possibleMoves
    }
}

class Player{
    constructor(board, opponent){
        if (!board){
            throw Error('Player must be instantiated with a gameboard object!')
        }
        this.board = board;
        if (opponent && this.board !== opponent.board){
            this.opponent = opponent;
            opponent.opponent = this;
        } else (
            this.opponent = undefined
        )
    }

    makeMove = (coords) => {
        if (!coords){
            let possibleMoves = this.opponent.board.getPossibleMoves()
            coords = possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
        }
        let shot = this.opponent.board.receiveAttack(coords);
        return shot;
    }
}

class Game{
    constructor(players, humanPlayer){
        this.players = players;
        this.playerTurn = players[Math.floor(Math.random()*2)];
        this.humanPlayer = humanPlayer;
        this.winner = undefined;
    }

    playNextTurn = () => {
        const dividerMessage = document.querySelector('.divider-message');
        const gameButton = document.querySelector('.game-button');
        const opponentBoardOverlay = document.querySelector('.board-overlay');
        const opponentBoard = document.querySelector('.opponent.board');
        if (this.humanPlayer.board.allShipsSunk()){
            dividerMessage.textContent = 'OPPONENT HAS WON! ALL YOUR SHIPS WERE SUNK!';
            this.winner = this.humanPlayer.opponent;
            return null
        }
        if (this.playerTurn === this.humanPlayer){
            document.querySelector('.game-message').textContent = window.opponentShotResults;
            dividerMessage.textContent = 'IT IS NOW YOUR TURN!';
            opponentBoard.removeChild(opponentBoardOverlay);
            gameButton.style.display = 'none';
            this.playerTurn = this.players[1];
            return undefined;
        } else {
            dividerMessage.textContent = 'IT IS NOW OPPONENT\'S TURN!';
            this.playerTurn = this.players[0];
            gameButton.style.display = '';
            let shot = this.humanPlayer.opponent.makeMove();
            window.opponentShotResults = `Opponent\'s shot has ${shot ? 'shot your ship!' : 'missed!'}`;
        }
    }
}

/***/ }),

/***/ "./src/images/battleship-background.jpg":
/*!**********************************************!*\
  !*** ./src/images/battleship-background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86eed5c4020633a90369.jpg";

/***/ }),

/***/ "./src/images/enemy-battleship-background.jpg":
/*!****************************************************!*\
  !*** ./src/images/enemy-battleship-background.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21f1fbdc91fe7829f77e.jpg";

/***/ }),

/***/ "./src/images/ocean.jpg":
/*!******************************!*\
  !*** ./src/images/ocean.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5acb2e169279162362c6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dom": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   designBoards: () => (/* binding */ designBoards),
/* harmony export */   updateOpponentBoard: () => (/* binding */ updateOpponentBoard),
/* harmony export */   updatePlayerBoard: () => (/* binding */ updatePlayerBoard)
/* harmony export */ });
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ "./src/battleship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const gameContainer = document.querySelector('.game-container');
const mainContainer = document.querySelector('.main-container');
const gameMessage = document.querySelector('.game-message');


function designStartScreen(){
    let startOverlay = createElement('div', 'start-overlay','');
    let startScreen = createElement('div','start-screen','')
    let startMessage = createElement('p','start-message','CLICK THE BUTTON TO BEGIN THE GAME!');
    let startButton = createElement('button','start-button','START GAME!');
    startButton.addEventListener('click',()=>{
        let newGame = designGame();
        window.currentGame = newGame;
    });
    startOverlay.appendChild(startScreen);
    startScreen.appendChild(startMessage);
    startScreen.appendChild(startButton);
    mainContainer.appendChild(startOverlay);
}

function designGame(){
    const startOverlay = document.querySelector('.start-overlay');
    startOverlay.style.display = 'none';
    const boardOne = new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    const boardTwo = new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    let playerOne = new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Player(boardOne);
    let playerTwo = new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Player(boardTwo, playerOne);
    gameContainer.innerHTML = '';
    document.querySelector('.game-message').textContent = '';
    designBoards(playerOne);
    return new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Game([playerOne, playerTwo], playerOne)
}

function designBoards(player){
    let playerBoard = createPlayerBoard();
    playerBoard.classList.add('player')
    gameContainer.appendChild(playerBoard);
    gameContainer.appendChild(designDividerContainer(player));
    let opponentBoard = createPlayerBoard();
    opponentBoard.classList.add('opponent');
    gameContainer.appendChild(opponentBoard);
    addEventListenersOnOpponentBoard(player);
    createOverlayOnOpponentBoard();
}

function designDividerContainer(player){
    let dividerContainer = createElement('div','divider-container','');
    let dividerMessageBox = createElement('p','divider-message','PLACE YOUR SHIPS!');
    let placeShipsDiv = createPlaceShipForm(player);
    dividerContainer.appendChild(dividerMessageBox);
    dividerContainer.appendChild(placeShipsDiv);
    let gameButton = createElement('button','game-button','FINISH PLACING SHIPS');
    let errorMessage = createElement('p','form-error','');
    dividerContainer.appendChild(errorMessage);
    gameButton.addEventListener('click',()=>{
        if (player.board.shipsList.length === 0){
            errorMessage.textContent = 'No ships were placed!';
            return;
        } else {
            dividerMessageBox.textContent = window.currentGame.playerTurn === player ? `YOU GO FIRST. PRESS CONTINUE TO START` : 'OPPONENT GOES FIRST.';
            replaceGameButton(gameButton, 'CONTINUE', ()=>{
                window.currentGame.playNextTurn();
                updatePlayerBoard(player.board);
            })
            errorMessage.textContent = '';
            placeShipsDiv.style.display = 'none';
            
        }
    })
    dividerContainer.appendChild(gameButton);
    return dividerContainer;
}

function replaceGameButton(original, text, eventListenerCallback){
    original.style.display = '';
    original.textContent = text;
    let newGameButton = original.cloneNode(true);
    original.parentNode.replaceChild(newGameButton, original);
    if (eventListenerCallback){
        newGameButton.addEventListener('click',eventListenerCallback)
    }
    return newGameButton
}


function createPlaceShipForm(player){
    let placeShipDiv = createElement('div','place-ship-form-container','');
    let placeShipForm = createElement('form','place-ship-form','');
    let shipLength = createFormDropdown('length-dropdown', 'Ship Length:', true, [1,2,3,4,5]);
    let xCoords = createFormDropdown('x-coords-dropdown', 'X-Axis Location:', true, [0,1,2,3,4,5,6,7,8,9]);
    let yCoords = createFormDropdown('y-coords-dropdown', 'Y-Axis Location:', true, [0,1,2,3,4,5,6,7,8,9]);
    let direction = createFormDropdown('direction-dropdown', 'Direction:', true, ['right','down','left','up']);
    placeShipForm.appendChild(shipLength);
    placeShipForm.appendChild(xCoords);
    placeShipForm.appendChild(yCoords);
    placeShipForm.appendChild(direction);
    let placeShipButton = createElement('button','place-ship-button','PLACE SHIP!');
    placeShipButton.addEventListener('click',(e)=>{
        e.preventDefault();
        placeShipOnPlayerBoard(player);
        updatePlayerBoard(player.board);
    })
    placeShipForm.appendChild(placeShipButton);
    placeShipDiv.appendChild(placeShipForm);
    return placeShipDiv
}

function placeShipOnPlayerBoard(player){
    let xCoords = Number(document.getElementById('x-coords-dropdown').value);
    let yCoords = Number(document.getElementById('y-coords-dropdown').value);
    let direction = document.getElementById('direction-dropdown').value;
    let shipLength = Number(document.getElementById('length-dropdown').value);
    let newShip = new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipLength);
    let errorMessage = player.board.placeShip(newShip, [yCoords, xCoords], direction)
    let errorMessageElement = document.querySelector('.form-error');
    errorMessageElement.textContent = errorMessage ? errorMessage : '';
    if (!errorMessage){
        let newOpponentShip = new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(shipLength);
        do {
            xCoords = Math.floor(Math.random()*10);
            yCoords = Math.floor(Math.random()*10);
            direction = ['right','down','left','up'][Math.floor(Math.random()*4)];
        } while (player.opponent.board.placeShip(newOpponentShip,[yCoords, xCoords], direction))
    }

}

function addEventListenersOnOpponentBoard(player){
    let allOpponentGameTiles = document.querySelectorAll('.opponent.board .board-tile[class$="_gametile"]')
    allOpponentGameTiles.forEach((tileElement)=>{
        let tileCoordsString = tileElement.classList.toString().match(/xcoords-\d-ycoords-\d/)[0];
        let xCoords = Number(tileCoordsString.slice(8,9));
        let yCoords = Number(tileCoordsString.slice(18,19));
        let coords = [yCoords, xCoords];
        tileElement.addEventListener('click', ()=>{
            let shot = player.makeMove(coords);
            gameMessage.textContent = `Your shot at (${[xCoords, yCoords]}) has ${shot ? 'hit the opponent\'s ship!' : 'missed!'}`
            updateOpponentBoard(player.opponent);
            createOverlayOnOpponentBoard();
            if (player.opponent.board.allShipsSunk()){
                window.currentGame.winner = player;
                document.querySelector('.divider-message').textContent = 'YOU HAVE WON! YOU HAVE SUNK ALL OF YOUR OPPONENT\'S SHIPS!';
                const gameButton = document.querySelector('.game-button');
                replaceGameButton(gameButton, 'RESTART', designGame);
            } else { 
                window.currentGame.playNextTurn();
            }
            
        }, {
            once: true
        })
    })
}

function createOverlayOnOpponentBoard(){
    const opponentBoard = document.querySelector('.board.opponent');
    opponentBoard.appendChild(createElement('div','board-overlay',''));
}

function updateOpponentBoard(opponent){
    let newBoard = (new _battleship_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard()).tiles;
    for (let shotCoords of opponent.board.shotTiles){
        newBoard[shotCoords[0]][shotCoords[1]] = 'X';
    }
    for (let opponentShip of opponent.board.shipsList){
        for (let shotOpponentShipTiles of opponentShip.hitTiles){
            newBoard[shotOpponentShipTiles[0]][shotOpponentShipTiles[1]] = '*';
        }
    }
    for (let rowIdx in newBoard){
        let row = newBoard[rowIdx]
        for (let colIdx in row){
            let tile = row[colIdx]
            if (tile === 'X') {
                let tileDom = document.querySelector(`.board.opponent .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('missed-tile');
                tileDom.textContent = 'X';
            } else if (tile === '*') {
                let tileDom = document.querySelector(`.board.opponent .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('shot-tile');
                tileDom.textContent = '*';
            }
        }
    }
    return newBoard
}

function updatePlayerBoard(board){
    let iconBoard = convertPlayerBoardToIcons(board);
    for (let rowIdx in iconBoard){
        let row = iconBoard[rowIdx]
        for (let colIdx in row){
            let tile = row[colIdx]
            if (tile === 'O'){
                let tileDom = document.querySelector(`.board.player .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('ship-tile');
                tileDom.textContent = 'O';
            } else if (tile === 'X') {
                let tileDom = document.querySelector(`.board.player .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('missed-tile');
                tileDom.textContent = 'X';
            } else if (tile === '*') {
                let tileDom = document.querySelector(`.board.player .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('shot-tile');
                tileDom.classList.remove('ship-tile');
                tileDom.textContent = '*';
            }
        }
    }
    return iconBoard
}


function createPlayerBoard(){
    let domBoard = createElement('div','board','');
    for (let i=0; i<11;i++){
        let row = createElement('div','board-row','');
        for (let j=0; j<11; j++){
            if (i === 0 & j !== 0){
                var coords = `${j-1}`;
            } else if (i !== 0 && j === 0){
                var coords = `${i-1}`;
            } else {
                var coords = '';
            }
            let tile = createElement('div','board-tile', coords);
            if (coords === '' && i !== 0 & j !== 0){
                tile.classList.add(`xcoords-${j-1}-ycoords-${i-1}_gametile`);
            }
            let verticalLine = createElement('div','vertical-line','');
            row.appendChild(tile)
            if (j !== 10){
                row.appendChild(verticalLine)
            }
        }
        domBoard.appendChild(row);
        let horizontalLine = createElement('div','horizontal-line','');
        if (i !== 10){
            domBoard.appendChild(horizontalLine);
        }   
    }
    return domBoard
}

function convertPlayerBoardToIcons(board){
    let iconBoard = board.tiles.map((tileRow)=>{
        let iconTileRow = tileRow.map((tile)=>{
            return tile.toString();
        })
        return iconTileRow
    })
    for (let ship of board.shipsList){
        for (let hitCoords of ship.hitTiles){
            iconBoard[hitCoords[0]][hitCoords[1]] = '*';
        }
    }
    return iconBoard
}

function createElement(type, classes, text){
    let element = document.createElement(type);
    if (classes.length !== 0){
        typeof(classes) === 'object' ? element.classList.add(...classes) : element.classList.add(classes);
    }
    element.textContent = text ? text : '';
    return element;
}

function createFormDropdown(id='',name='',required=false, optionValues=[], optionTextList=[]){
    let formInputDiv = createElement('div','form-input','');
    let formLabel = createElement('label','',name);
    formLabel.for = id;
    let formDropdown = createElement('select','','');
    formDropdown.id = id;
    formDropdown.required = required;
    if (optionValues.length > 0 && optionTextList.length === 0){
        optionTextList = optionValues;
    }
    if (optionValues.length !== optionTextList.length){
        throw Error('Options value list and option text list must be the same size!');
    }
    for (let optionIdx in optionValues){
        let option = createElement('option','',optionTextList[optionIdx].toString());
        option.value = optionValues[optionIdx];
        formDropdown.appendChild(option);
    }
    formInputDiv.appendChild(formLabel);
    formInputDiv.appendChild(formDropdown);
    return formInputDiv;
}

designStartScreen();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGNBQWM7QUFDZCxrR0FBa0csT0FBTyxXQUFXLE9BQU87QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQSxnQ0FBZ0MsSUFBSTtBQUNwQyxjQUFjO0FBQ2QsZ0NBQWdDLElBQUk7QUFDcEMsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksV0FBVyxJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvb2NlYW4uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmF0dGxlc2hpcC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2VuZW15LWJhdHRsZXNoaXAtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC45MTEpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubWVzc2FnZS1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDc7IFxcbn1cXG5cXG4uZ2FtZS1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDAuNDE4KTtcXG59XFxuXFxuLmRpdmlkZXItY29udGFpbmVye1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5kaXZpZGVyLW1lc3NhZ2UsIC5zdGFydC1tZXNzYWdle1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2JhKDMsIDI2LCAyNiwgMC44MDEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaXZpZGVyLWNvbnRhaW5lciA+IGJ1dHRvbiwgLnN0YXJ0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBjb2xvcjogcmdiYSgxMzksIDAsIDAsIDAuODQ5KTtcXG59XFxuXFxucC5zdGFydC1tZXNzYWdlLCBidXR0b24uc3RhcnQtYnV0dG9ue1xcbiAgICBjb2xvcjogcmdiYSgxNywgMjAsIDE5MiwgMC45NTkpO1xcbn0gXFxuXFxuLmJvYXJke1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2NSwgMWZyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIwLCAyMCwgMjAxKTtcXG59XFxuXFxuLnBsYXllci5ib2FyZHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJvYXJkLXJvd3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNjUsIDFmcik7XFxuICAgIGdyaWQtcm93OiBzcGFuIDU7XFxufVxcblxcbi5ib2FyZC10aWxle1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiA1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuNTU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgY2FsYyg1dmggLSAxNHB4KSwgNDBweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ub3Bwb25lbnQuYm9hcmQgLmJvYXJkLXRpbGVbY2xhc3MkPVxcXCJfZ2FtZXRpbGVcXFwiXXtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJkIC5ib2FyZC10aWxlLnNoaXAtdGlsZXtcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5wbGF5ZXIuYm9hcmQgLmJvYXJkLXRpbGUubWlzc2VkLXRpbGUsXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlLnNob3QtdGlsZXtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJkIC5ib2FyZC10aWxlLnNob3QtdGlsZSxcXG4ub3Bwb25lbnQuYm9hcmQgLmJvYXJkLXRpbGUubWlzc2VkLXRpbGV7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi52ZXJ0aWNhbC1saW5lLCAuaG9yaXpvbnRhbC1saW5le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQxLCA0MSk7XFxufVxcblxcbi5vcHBvbmVudC5ib2FyZHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uYm9hcmQtb3ZlcmxheSwgLnN0YXJ0LW92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzYsIDEyMywgMTIzLCAwLjUyNyk7XFxufVxcblxcbi5zdGFydC1vdmVybGF5e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc3RhcnQtc2NyZWVue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA5MiwgNTMsIDAuNjU4KTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDJweCAycHggbGlnaHRjb3JhbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XFxufVxcblxcbi5wbGFjZS1zaGlwLWZvcm0tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzYsIDg0LCA4NCwgMC41ODkpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigzMCwgMzMsIDIwNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0taW5wdXQgPiBzZWxlY3R7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuXFxuLmZvcm0tZXJyb3J7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYigxMTcsIDgsIDgpO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmdhbWUtbWVzc2FnZSwgLnRpdGxle1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoMzksIDQwLCA2Myk7XFxufVxcblxcbi5tZXNzYWdlLWNvbnRhaW5lciwgLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC40MTgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUNBQXFDO0lBQ3JDLHlEQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5REFBK0Q7SUFDL0Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOTExKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL29jZWFuLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi5tZXNzYWdlLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbiAgICBncmlkLXJvdzogNzsgXFxufVxcblxcbi5nYW1lLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbiAgICBncmlkLXJvdzogMiAvIDc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMzUsIDIxNSwgMC40MTgpO1xcbn1cXG5cXG4uZGl2aWRlci1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmRpdmlkZXItbWVzc2FnZSwgLnN0YXJ0LW1lc3NhZ2V7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYmEoMywgMjYsIDI2LCAwLjgwMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpdmlkZXItY29udGFpbmVyID4gYnV0dG9uLCAuc3RhcnQtYnV0dG9ue1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGNvbG9yOiByZ2JhKDEzOSwgMCwgMCwgMC44NDkpO1xcbn1cXG5cXG5wLnN0YXJ0LW1lc3NhZ2UsIGJ1dHRvbi5zdGFydC1idXR0b257XFxuICAgIGNvbG9yOiByZ2JhKDE3LCAyMCwgMTkyLCAwLjk1OSk7XFxufSBcXG5cXG4uYm9hcmR7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDY1LCAxZnIpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjAsIDIwLCAyMDEpO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJke1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmF0dGxlc2hpcC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ib2FyZC1yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDY1LCAxZnIpO1xcbiAgICBncmlkLXJvdzogc3BhbiA1O1xcbn1cXG5cXG4uYm9hcmQtdGlsZXtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjU1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoNXZoIC0gMTRweCksIDQwcHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlW2NsYXNzJD1cXFwiX2dhbWV0aWxlXFxcIl17XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaGlwLXRpbGV7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxlLFxcbi5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGV7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGUsXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxle1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udmVydGljYWwtbGluZSwgLmhvcml6b250YWwtbGluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MSwgNDEpO1xcbn1cXG5cXG4ub3Bwb25lbnQuYm9hcmR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2VuZW15LWJhdHRsZXNoaXAtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uYm9hcmQtb3ZlcmxheSwgLnN0YXJ0LW92ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzYsIDEyMywgMTIzLCAwLjUyNyk7XFxufVxcblxcbi5zdGFydC1vdmVybGF5e1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmF0dGxlc2hpcC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zdGFydC1zY3JlZW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDkyLCA1MywgMC42NTgpO1xcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDJweCBsaWdodGNvcmFsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcXG59XFxuXFxuLnBsYWNlLXNoaXAtZm9ybS1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNiwgODQsIDg0LCAwLjU4OSk7XFxufVxcblxcbi5wbGFjZS1zaGlwLWZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wbGFjZS1zaGlwLWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybS1pbnB1dHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogcmdiKDMwLCAzMywgMjA3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCA+IHNlbGVjdHtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5cXG4uZm9ybS1lcnJvcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDExNywgOCwgOCk7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZ2FtZS1tZXNzYWdlLCAudGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYigzOSwgNDAsIDYzKTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGFpbmVyLCAuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjQxOCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIG51bUhpdHMpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1IaXRzID0gbnVtSGl0cyA/IG51bUhpdHMgOiAwO1xuICAgICAgICB0aGlzLmhpdFRpbGVzID0gW11cbiAgICB9XG5cbiAgICBoaXQgPSAoKT0+IHtcbiAgICAgICAgdGhpcy5udW1IaXRzICs9IDE7XG4gICAgfVxuXG4gICAgZ2V0IHN1bmsoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtSGl0cyA+PSB0aGlzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgdGlsZUljb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiA/IHRoaXMuaWNvbiA6ICdPJztcbiAgICB9XG5cbiAgICBzZXQgdGlsZUljb24obmV3SWNvbil7XG4gICAgICAgIHRoaXMuaWNvbiA9IG5ld0ljb247XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUljb247XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnRpbGVzID0gdGhpcy4jY3JlYXRlVGlsZXMoKTtcbiAgICAgICAgdGhpcy5zaG90VGlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwc0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICAjY3JlYXRlVGlsZXMgPSAoKT0+e1xuICAgICAgICBsZXQgdGlsZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7aSsrKXtcbiAgICAgICAgICAgIGxldCB0aWxlUm93ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICB0aWxlUm93LnB1c2goJy4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZXMucHVzaCh0aWxlUm93KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aWxlc1xuICAgIH1cblxuICAgICNzaGlwUGxhY2VtZW50T3V0T2ZCb3VuZHMgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMV0gKyAoc2hpcC5sZW5ndGgtMSkgPj0gMTApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgaWYgKGNvb3Jkc1sxXSAtIChzaGlwLmxlbmd0aC0xKSA8IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndXAnKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMF0gLSAoc2hpcC5sZW5ndGgtMSkgPCAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMF0gKyAoc2hpcC5sZW5ndGgtMSkgPj0gMTApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgI2ludGVyc2VjdHNBbm90aGVyU2hpcCA9IChzaGlwLCBjb29yZHMsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXSttb3ZlbWVudF0gaW5zdGFuY2VvZiBTaGlwKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3VwJyB8fCBkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKXtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnQgPSAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbY29vcmRzWzBdK21vdmVtZW50XVtjb29yZHNbMV1dIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZHMsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBpZiAoICEoZGlyZWN0aW9uKSB8fCAhKGNvb3JkcykgfHwgIShzaGlwKSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTWlzc2luZyBwYXJhbWV0ZXJzLiBQYXNzIGluIHNoaXAgb2JqZWN0LCBjb29yZGluYXRlcywgYW5kIGEgZGlyZWN0aW9uIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29vcmRzLm1hcCgoYXhpcyk9PntyZXR1cm4gKGF4aXMgPCAxMCAmJiBheGlzID49IDApfSkuZmlsdGVyKChzaGlwVmFsaWQpPT57IXNoaXBWYWxpZH0pKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdTaGlwIGNhblxcJ3QgYmUgcGxhY2VkIG91dCBvZiBib3VuZHMhJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuI3NoaXBQbGFjZW1lbnRPdXRPZkJvdW5kcyhzaGlwLCBjb29yZHMsIGRpcmVjdGlvbikpe1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJ0IG9mIHNoaXAgaXMgb3V0IG9mIGJvdW5kcyEnKVxuICAgICAgICAgICAgcmV0dXJuICdQYXJ0IG9mIHNoaXAgaXMgb3V0IG9mIGJvdW5kcyEnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuI2ludGVyc2VjdHNBbm90aGVyU2hpcChzaGlwLCBjb29yZHMsIGRpcmVjdGlvbikpe1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdTaGlwIGNhbm5vdCBiZSBwbGFjZWQgb24gYW5vdGhlciBzaGlwIScpXG4gICAgICAgICAgICByZXR1cm4gJ1NoaXAgY2Fubm90IGJlIHBsYWNlZCBvbiBhbm90aGVyIHNoaXAhJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaGlwc0xpc3QubGVuZ3RoID49IDcpe1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUb28gbWFueSBzaGlwcyEgTWF4aW11bSBvZiA3IHNoaXBzIGNhbiBiZSBwbGFjZWQhJylcbiAgICAgICAgICAgIHJldHVybiAnVG9vIG1hbnkgc2hpcHMhIE1heGltdW0gb2YgNyBzaGlwcyBjYW4gYmUgcGxhY2VkISc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JyB8fCBkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnQgPSAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV0rbW92ZW1lbnRdID0gc2hpcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd1cCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZXNbY29vcmRzWzBdK21vdmVtZW50XVtjb29yZHNbMV1dID0gc2hpcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hpcHNMaXN0LnB1c2goc2hpcClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBsZXQgdGlsZSA9IHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV1dXG4gICAgICAgIGlmICghdGlsZSl7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb29yZGluYXRlcyB3ZXJlIG5vdCB2YWxpZCEnKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0UG9zc2libGVNb3ZlcygpKS5pbmRleE9mKEpTT04uc3RyaW5naWZ5KGNvb3JkcykpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhpcyB0aWxlIHdhcyBhbHJlYWR5IHNob3QhJylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRpbGUgaW5zdGFuY2VvZiBTaGlwKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaG90IGhpdCBhIHNoaXAhJywgY29vcmRzKVxuICAgICAgICAgICAgdGlsZS5oaXQoKVxuICAgICAgICAgICAgdGhpcy5zaG90VGlsZXMucHVzaChjb29yZHMpO1xuICAgICAgICAgICAgdGlsZS5oaXRUaWxlcy5wdXNoKGNvb3Jkcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaG90IG1pc3NlZCEnLCBjb29yZHMpXG4gICAgICAgICAgICB0aGlzLnNob3RUaWxlcy5wdXNoKGNvb3JkcylcbiAgICAgICAgICAgIHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gJ1gnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHNMaXN0KXtcbiAgICAgICAgICAgIGlmICghc2hpcC5zdW5rKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwc0xpc3QubGVuZ3RoICE9PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFBvc3NpYmxlTW92ZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwb3NzaWJsZU1vdmVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gW2ksal1cbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5zaG90VGlsZXMpLmluZGV4T2YoSlNPTi5zdHJpbmdpZnkodGlsZSkpID09PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaCh0aWxlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3Zlc1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3Rvcihib2FyZCwgb3Bwb25lbnQpe1xuICAgICAgICBpZiAoIWJvYXJkKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQbGF5ZXIgbXVzdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCBhIGdhbWVib2FyZCBvYmplY3QhJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgICAgIGlmIChvcHBvbmVudCAmJiB0aGlzLmJvYXJkICE9PSBvcHBvbmVudC5ib2FyZCl7XG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50ID0gb3Bwb25lbnQ7XG4gICAgICAgICAgICBvcHBvbmVudC5vcHBvbmVudCA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSAoXG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50ID0gdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBtYWtlTW92ZSA9IChjb29yZHMpID0+IHtcbiAgICAgICAgaWYgKCFjb29yZHMpe1xuICAgICAgICAgICAgbGV0IHBvc3NpYmxlTW92ZXMgPSB0aGlzLm9wcG9uZW50LmJvYXJkLmdldFBvc3NpYmxlTW92ZXMoKVxuICAgICAgICAgICAgY29vcmRzID0gcG9zc2libGVNb3Zlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcG9zc2libGVNb3Zlcy5sZW5ndGgpXVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaG90ID0gdGhpcy5vcHBvbmVudC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICAgIHJldHVybiBzaG90O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IocGxheWVycywgaHVtYW5QbGF5ZXIpe1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzO1xuICAgICAgICB0aGlzLnBsYXllclR1cm4gPSBwbGF5ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgICAgIHRoaXMuaHVtYW5QbGF5ZXIgPSBodW1hblBsYXllcjtcbiAgICAgICAgdGhpcy53aW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcGxheU5leHRUdXJuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZpZGVyTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZpZGVyLW1lc3NhZ2UnKTtcbiAgICAgICAgY29uc3QgZ2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBvcHBvbmVudEJvYXJkT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1vdmVybGF5Jyk7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQuYm9hcmQnKTtcbiAgICAgICAgaWYgKHRoaXMuaHVtYW5QbGF5ZXIuYm9hcmQuYWxsU2hpcHNTdW5rKCkpe1xuICAgICAgICAgICAgZGl2aWRlck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnT1BQT05FTlQgSEFTIFdPTiEgQUxMIFlPVVIgU0hJUFMgV0VSRSBTVU5LISc7XG4gICAgICAgICAgICB0aGlzLndpbm5lciA9IHRoaXMuaHVtYW5QbGF5ZXIub3Bwb25lbnQ7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllclR1cm4gPT09IHRoaXMuaHVtYW5QbGF5ZXIpe1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbWVzc2FnZScpLnRleHRDb250ZW50ID0gd2luZG93Lm9wcG9uZW50U2hvdFJlc3VsdHM7XG4gICAgICAgICAgICBkaXZpZGVyTWVzc2FnZS50ZXh0Q29udGVudCA9ICdJVCBJUyBOT1cgWU9VUiBUVVJOISc7XG4gICAgICAgICAgICBvcHBvbmVudEJvYXJkLnJlbW92ZUNoaWxkKG9wcG9uZW50Qm9hcmRPdmVybGF5KTtcbiAgICAgICAgICAgIGdhbWVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRoaXMucGxheWVyVHVybiA9IHRoaXMucGxheWVyc1sxXTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXZpZGVyTWVzc2FnZS50ZXh0Q29udGVudCA9ICdJVCBJUyBOT1cgT1BQT05FTlRcXCdTIFRVUk4hJztcbiAgICAgICAgICAgIHRoaXMucGxheWVyVHVybiA9IHRoaXMucGxheWVyc1swXTtcbiAgICAgICAgICAgIGdhbWVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgbGV0IHNob3QgPSB0aGlzLmh1bWFuUGxheWVyLm9wcG9uZW50Lm1ha2VNb3ZlKCk7XG4gICAgICAgICAgICB3aW5kb3cub3Bwb25lbnRTaG90UmVzdWx0cyA9IGBPcHBvbmVudFxcJ3Mgc2hvdCBoYXMgJHtzaG90ID8gJ3Nob3QgeW91ciBzaGlwIScgOiAnbWlzc2VkISd9YDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJkb21cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIsIEdhbWUgfSBmcm9tICcuL2JhdHRsZXNoaXAuanMnXG5jb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG5jb25zdCBnYW1lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1lc3NhZ2UnKTtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBkZXNpZ25TdGFydFNjcmVlbigpe1xuICAgIGxldCBzdGFydE92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc3RhcnQtb3ZlcmxheScsJycpO1xuICAgIGxldCBzdGFydFNjcmVlbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3N0YXJ0LXNjcmVlbicsJycpXG4gICAgbGV0IHN0YXJ0TWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCdzdGFydC1tZXNzYWdlJywnQ0xJQ0sgVEhFIEJVVFRPTiBUTyBCRUdJTiBUSEUgR0FNRSEnKTtcbiAgICBsZXQgc3RhcnRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCdzdGFydC1idXR0b24nLCdTVEFSVCBHQU1FIScpO1xuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBsZXQgbmV3R2FtZSA9IGRlc2lnbkdhbWUoKTtcbiAgICAgICAgd2luZG93LmN1cnJlbnRHYW1lID0gbmV3R2FtZTtcbiAgICB9KTtcbiAgICBzdGFydE92ZXJsYXkuYXBwZW5kQ2hpbGQoc3RhcnRTY3JlZW4pO1xuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0TWVzc2FnZSk7XG4gICAgc3RhcnRTY3JlZW4uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRPdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gZGVzaWduR2FtZSgpe1xuICAgIGNvbnN0IHN0YXJ0T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1vdmVybGF5Jyk7XG4gICAgc3RhcnRPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgYm9hcmRPbmUgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgYm9hcmRUd28gPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgbGV0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoYm9hcmRPbmUpO1xuICAgIGxldCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGJvYXJkVHdvLCBwbGF5ZXJPbmUpO1xuICAgIGdhbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtbWVzc2FnZScpLnRleHRDb250ZW50ID0gJyc7XG4gICAgZGVzaWduQm9hcmRzKHBsYXllck9uZSk7XG4gICAgcmV0dXJuIG5ldyBHYW1lKFtwbGF5ZXJPbmUsIHBsYXllclR3b10sIHBsYXllck9uZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2lnbkJvYXJkcyhwbGF5ZXIpe1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZVBsYXllckJvYXJkKCk7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyJylcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2lnbkRpdmlkZXJDb250YWluZXIocGxheWVyKSk7XG4gICAgbGV0IG9wcG9uZW50Qm9hcmQgPSBjcmVhdGVQbGF5ZXJCb2FyZCgpO1xuICAgIG9wcG9uZW50Qm9hcmQuY2xhc3NMaXN0LmFkZCgnb3Bwb25lbnQnKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wcG9uZW50Qm9hcmQpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzT25PcHBvbmVudEJvYXJkKHBsYXllcik7XG4gICAgY3JlYXRlT3ZlcmxheU9uT3Bwb25lbnRCb2FyZCgpO1xufVxuXG5mdW5jdGlvbiBkZXNpZ25EaXZpZGVyQ29udGFpbmVyKHBsYXllcil7XG4gICAgbGV0IGRpdmlkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdkaXZpZGVyLWNvbnRhaW5lcicsJycpO1xuICAgIGxldCBkaXZpZGVyTWVzc2FnZUJveCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCdkaXZpZGVyLW1lc3NhZ2UnLCdQTEFDRSBZT1VSIFNISVBTIScpO1xuICAgIGxldCBwbGFjZVNoaXBzRGl2ID0gY3JlYXRlUGxhY2VTaGlwRm9ybShwbGF5ZXIpO1xuICAgIGRpdmlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2aWRlck1lc3NhZ2VCb3gpO1xuICAgIGRpdmlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwc0Rpdik7XG4gICAgbGV0IGdhbWVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCdnYW1lLWJ1dHRvbicsJ0ZJTklTSCBQTEFDSU5HIFNISVBTJyk7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCdmb3JtLWVycm9yJywnJyk7XG4gICAgZGl2aWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgIGdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuc2hpcHNMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gc2hpcHMgd2VyZSBwbGFjZWQhJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdmlkZXJNZXNzYWdlQm94LnRleHRDb250ZW50ID0gd2luZG93LmN1cnJlbnRHYW1lLnBsYXllclR1cm4gPT09IHBsYXllciA/IGBZT1UgR08gRklSU1QuIFBSRVNTIENPTlRJTlVFIFRPIFNUQVJUYCA6ICdPUFBPTkVOVCBHT0VTIEZJUlNULic7XG4gICAgICAgICAgICByZXBsYWNlR2FtZUJ1dHRvbihnYW1lQnV0dG9uLCAnQ09OVElOVUUnLCAoKT0+e1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50R2FtZS5wbGF5TmV4dFR1cm4oKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIuYm9hcmQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgcGxhY2VTaGlwc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGRpdmlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJ1dHRvbik7XG4gICAgcmV0dXJuIGRpdmlkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VHYW1lQnV0dG9uKG9yaWdpbmFsLCB0ZXh0LCBldmVudExpc3RlbmVyQ2FsbGJhY2spe1xuICAgIG9yaWdpbmFsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICBvcmlnaW5hbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbGV0IG5ld0dhbWVCdXR0b24gPSBvcmlnaW5hbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgb3JpZ2luYWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3R2FtZUJ1dHRvbiwgb3JpZ2luYWwpO1xuICAgIGlmIChldmVudExpc3RlbmVyQ2FsbGJhY2spe1xuICAgICAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudExpc3RlbmVyQ2FsbGJhY2spXG4gICAgfVxuICAgIHJldHVybiBuZXdHYW1lQnV0dG9uXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUGxhY2VTaGlwRm9ybShwbGF5ZXIpe1xuICAgIGxldCBwbGFjZVNoaXBEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdwbGFjZS1zaGlwLWZvcm0tY29udGFpbmVyJywnJyk7XG4gICAgbGV0IHBsYWNlU2hpcEZvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywncGxhY2Utc2hpcC1mb3JtJywnJyk7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBjcmVhdGVGb3JtRHJvcGRvd24oJ2xlbmd0aC1kcm9wZG93bicsICdTaGlwIExlbmd0aDonLCB0cnVlLCBbMSwyLDMsNCw1XSk7XG4gICAgbGV0IHhDb29yZHMgPSBjcmVhdGVGb3JtRHJvcGRvd24oJ3gtY29vcmRzLWRyb3Bkb3duJywgJ1gtQXhpcyBMb2NhdGlvbjonLCB0cnVlLCBbMCwxLDIsMyw0LDUsNiw3LDgsOV0pO1xuICAgIGxldCB5Q29vcmRzID0gY3JlYXRlRm9ybURyb3Bkb3duKCd5LWNvb3Jkcy1kcm9wZG93bicsICdZLUF4aXMgTG9jYXRpb246JywgdHJ1ZSwgWzAsMSwyLDMsNCw1LDYsNyw4LDldKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gY3JlYXRlRm9ybURyb3Bkb3duKCdkaXJlY3Rpb24tZHJvcGRvd24nLCAnRGlyZWN0aW9uOicsIHRydWUsIFsncmlnaHQnLCdkb3duJywnbGVmdCcsJ3VwJ10pO1xuICAgIHBsYWNlU2hpcEZvcm0uYXBwZW5kQ2hpbGQoc2hpcExlbmd0aCk7XG4gICAgcGxhY2VTaGlwRm9ybS5hcHBlbmRDaGlsZCh4Q29vcmRzKTtcbiAgICBwbGFjZVNoaXBGb3JtLmFwcGVuZENoaWxkKHlDb29yZHMpO1xuICAgIHBsYWNlU2hpcEZvcm0uYXBwZW5kQ2hpbGQoZGlyZWN0aW9uKTtcbiAgICBsZXQgcGxhY2VTaGlwQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywncGxhY2Utc2hpcC1idXR0b24nLCdQTEFDRSBTSElQIScpO1xuICAgIHBsYWNlU2hpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGxhY2VTaGlwT25QbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgICB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIuYm9hcmQpO1xuICAgIH0pXG4gICAgcGxhY2VTaGlwRm9ybS5hcHBlbmRDaGlsZChwbGFjZVNoaXBCdXR0b24pO1xuICAgIHBsYWNlU2hpcERpdi5hcHBlbmRDaGlsZChwbGFjZVNoaXBGb3JtKTtcbiAgICByZXR1cm4gcGxhY2VTaGlwRGl2XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcE9uUGxheWVyQm9hcmQocGxheWVyKXtcbiAgICBsZXQgeENvb3JkcyA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneC1jb29yZHMtZHJvcGRvd24nKS52YWx1ZSk7XG4gICAgbGV0IHlDb29yZHMgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ktY29vcmRzLWRyb3Bkb3duJykudmFsdWUpO1xuICAgIGxldCBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlyZWN0aW9uLWRyb3Bkb3duJykudmFsdWU7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbmd0aC1kcm9wZG93bicpLnZhbHVlKTtcbiAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBMZW5ndGgpO1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIFt5Q29vcmRzLCB4Q29vcmRzXSwgZGlyZWN0aW9uKVxuICAgIGxldCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZXJyb3InKTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlID8gZXJyb3JNZXNzYWdlIDogJyc7XG4gICAgaWYgKCFlcnJvck1lc3NhZ2Upe1xuICAgICAgICBsZXQgbmV3T3Bwb25lbnRTaGlwID0gbmV3IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHhDb29yZHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgeUNvb3JkcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBbJ3JpZ2h0JywnZG93bicsJ2xlZnQnLCd1cCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KV07XG4gICAgICAgIH0gd2hpbGUgKHBsYXllci5vcHBvbmVudC5ib2FyZC5wbGFjZVNoaXAobmV3T3Bwb25lbnRTaGlwLFt5Q29vcmRzLCB4Q29vcmRzXSwgZGlyZWN0aW9uKSlcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnNPbk9wcG9uZW50Qm9hcmQocGxheWVyKXtcbiAgICBsZXQgYWxsT3Bwb25lbnRHYW1lVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnQuYm9hcmQgLmJvYXJkLXRpbGVbY2xhc3MkPVwiX2dhbWV0aWxlXCJdJylcbiAgICBhbGxPcHBvbmVudEdhbWVUaWxlcy5mb3JFYWNoKCh0aWxlRWxlbWVudCk9PntcbiAgICAgICAgbGV0IHRpbGVDb29yZHNTdHJpbmcgPSB0aWxlRWxlbWVudC5jbGFzc0xpc3QudG9TdHJpbmcoKS5tYXRjaCgveGNvb3Jkcy1cXGQteWNvb3Jkcy1cXGQvKVswXTtcbiAgICAgICAgbGV0IHhDb29yZHMgPSBOdW1iZXIodGlsZUNvb3Jkc1N0cmluZy5zbGljZSg4LDkpKTtcbiAgICAgICAgbGV0IHlDb29yZHMgPSBOdW1iZXIodGlsZUNvb3Jkc1N0cmluZy5zbGljZSgxOCwxOSkpO1xuICAgICAgICBsZXQgY29vcmRzID0gW3lDb29yZHMsIHhDb29yZHNdO1xuICAgICAgICB0aWxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBsZXQgc2hvdCA9IHBsYXllci5tYWtlTW92ZShjb29yZHMpO1xuICAgICAgICAgICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBgWW91ciBzaG90IGF0ICgke1t4Q29vcmRzLCB5Q29vcmRzXX0pIGhhcyAke3Nob3QgPyAnaGl0IHRoZSBvcHBvbmVudFxcJ3Mgc2hpcCEnIDogJ21pc3NlZCEnfWBcbiAgICAgICAgICAgIHVwZGF0ZU9wcG9uZW50Qm9hcmQocGxheWVyLm9wcG9uZW50KTtcbiAgICAgICAgICAgIGNyZWF0ZU92ZXJsYXlPbk9wcG9uZW50Qm9hcmQoKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIub3Bwb25lbnQuYm9hcmQuYWxsU2hpcHNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50R2FtZS53aW5uZXIgPSBwbGF5ZXI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdmlkZXItbWVzc2FnZScpLnRleHRDb250ZW50ID0gJ1lPVSBIQVZFIFdPTiEgWU9VIEhBVkUgU1VOSyBBTEwgT0YgWU9VUiBPUFBPTkVOVFxcJ1MgU0hJUFMhJztcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgcmVwbGFjZUdhbWVCdXR0b24oZ2FtZUJ1dHRvbiwgJ1JFU1RBUlQnLCBkZXNpZ25HYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50R2FtZS5wbGF5TmV4dFR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheU9uT3Bwb25lbnRCb2FyZCgpe1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQub3Bwb25lbnQnKTtcbiAgICBvcHBvbmVudEJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JvYXJkLW92ZXJsYXknLCcnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcHBvbmVudEJvYXJkKG9wcG9uZW50KXtcbiAgICBsZXQgbmV3Qm9hcmQgPSAobmV3IEdhbWVib2FyZCgpKS50aWxlcztcbiAgICBmb3IgKGxldCBzaG90Q29vcmRzIG9mIG9wcG9uZW50LmJvYXJkLnNob3RUaWxlcyl7XG4gICAgICAgIG5ld0JvYXJkW3Nob3RDb29yZHNbMF1dW3Nob3RDb29yZHNbMV1dID0gJ1gnO1xuICAgIH1cbiAgICBmb3IgKGxldCBvcHBvbmVudFNoaXAgb2Ygb3Bwb25lbnQuYm9hcmQuc2hpcHNMaXN0KXtcbiAgICAgICAgZm9yIChsZXQgc2hvdE9wcG9uZW50U2hpcFRpbGVzIG9mIG9wcG9uZW50U2hpcC5oaXRUaWxlcyl7XG4gICAgICAgICAgICBuZXdCb2FyZFtzaG90T3Bwb25lbnRTaGlwVGlsZXNbMF1dW3Nob3RPcHBvbmVudFNoaXBUaWxlc1sxXV0gPSAnKic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcm93SWR4IGluIG5ld0JvYXJkKXtcbiAgICAgICAgbGV0IHJvdyA9IG5ld0JvYXJkW3Jvd0lkeF1cbiAgICAgICAgZm9yIChsZXQgY29sSWR4IGluIHJvdyl7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHJvd1tjb2xJZHhdXG4gICAgICAgICAgICBpZiAodGlsZSA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQub3Bwb25lbnQgLmJvYXJkLXRpbGVbY2xhc3MqPVwieGNvb3Jkcy0ke2NvbElkeH0teWNvb3Jkcy0ke3Jvd0lkeH1cIl1gKVxuICAgICAgICAgICAgICAgIHRpbGVEb20uY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aWxlID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC5vcHBvbmVudCAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdzaG90LXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJyonO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdCb2FyZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQoYm9hcmQpe1xuICAgIGxldCBpY29uQm9hcmQgPSBjb252ZXJ0UGxheWVyQm9hcmRUb0ljb25zKGJvYXJkKTtcbiAgICBmb3IgKGxldCByb3dJZHggaW4gaWNvbkJvYXJkKXtcbiAgICAgICAgbGV0IHJvdyA9IGljb25Cb2FyZFtyb3dJZHhdXG4gICAgICAgIGZvciAobGV0IGNvbElkeCBpbiByb3cpe1xuICAgICAgICAgICAgbGV0IHRpbGUgPSByb3dbY29sSWR4XVxuICAgICAgICAgICAgaWYgKHRpbGUgPT09ICdPJyl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyIC5ib2FyZC10aWxlW2NsYXNzKj1cInhjb29yZHMtJHtjb2xJZHh9LXljb29yZHMtJHtyb3dJZHh9XCJdYClcbiAgICAgICAgICAgICAgICB0aWxlRG9tLmNsYXNzTGlzdC5hZGQoJ3NoaXAtdGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGVEb20udGV4dENvbnRlbnQgPSAnTyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbGUgPT09ICdYJykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtdGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGVEb20udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbGUgPT09ICcqJykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdzaG90LXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtdGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGVEb20udGV4dENvbnRlbnQgPSAnKic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGljb25Cb2FyZFxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKCl7XG4gICAgbGV0IGRvbUJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywnYm9hcmQnLCcnKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTE7aSsrKXtcbiAgICAgICAgbGV0IHJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JvYXJkLXJvdycsJycpO1xuICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTE7IGorKyl7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmIGogIT09IDApe1xuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBgJHtqLTF9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gMCAmJiBqID09PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gYCR7aS0xfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0aWxlID0gY3JlYXRlRWxlbWVudCgnZGl2JywnYm9hcmQtdGlsZScsIGNvb3Jkcyk7XG4gICAgICAgICAgICBpZiAoY29vcmRzID09PSAnJyAmJiBpICE9PSAwICYgaiAhPT0gMCl7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGB4Y29vcmRzLSR7ai0xfS15Y29vcmRzLSR7aS0xfV9nYW1ldGlsZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3ZlcnRpY2FsLWxpbmUnLCcnKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aWxlKVxuICAgICAgICAgICAgaWYgKGogIT09IDEwKXtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodmVydGljYWxMaW5lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIGxldCBob3Jpem9udGFsTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2hvcml6b250YWwtbGluZScsJycpO1xuICAgICAgICBpZiAoaSAhPT0gMTApe1xuICAgICAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExpbmUpO1xuICAgICAgICB9ICAgXG4gICAgfVxuICAgIHJldHVybiBkb21Cb2FyZFxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UGxheWVyQm9hcmRUb0ljb25zKGJvYXJkKXtcbiAgICBsZXQgaWNvbkJvYXJkID0gYm9hcmQudGlsZXMubWFwKCh0aWxlUm93KT0+e1xuICAgICAgICBsZXQgaWNvblRpbGVSb3cgPSB0aWxlUm93Lm1hcCgodGlsZSk9PntcbiAgICAgICAgICAgIHJldHVybiB0aWxlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpY29uVGlsZVJvd1xuICAgIH0pXG4gICAgZm9yIChsZXQgc2hpcCBvZiBib2FyZC5zaGlwc0xpc3Qpe1xuICAgICAgICBmb3IgKGxldCBoaXRDb29yZHMgb2Ygc2hpcC5oaXRUaWxlcyl7XG4gICAgICAgICAgICBpY29uQm9hcmRbaGl0Q29vcmRzWzBdXVtoaXRDb29yZHNbMV1dID0gJyonO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpY29uQm9hcmRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NlcywgdGV4dCl7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChjbGFzc2VzLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgIHR5cGVvZihjbGFzc2VzKSA9PT0gJ29iamVjdCcgPyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NlcykgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgfVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0ID8gdGV4dCA6ICcnO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRHJvcGRvd24oaWQ9JycsbmFtZT0nJyxyZXF1aXJlZD1mYWxzZSwgb3B0aW9uVmFsdWVzPVtdLCBvcHRpb25UZXh0TGlzdD1bXSl7XG4gICAgbGV0IGZvcm1JbnB1dERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2Zvcm0taW5wdXQnLCcnKTtcbiAgICBsZXQgZm9ybUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCcnLG5hbWUpO1xuICAgIGZvcm1MYWJlbC5mb3IgPSBpZDtcbiAgICBsZXQgZm9ybURyb3Bkb3duID0gY3JlYXRlRWxlbWVudCgnc2VsZWN0JywnJywnJyk7XG4gICAgZm9ybURyb3Bkb3duLmlkID0gaWQ7XG4gICAgZm9ybURyb3Bkb3duLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgaWYgKG9wdGlvblZhbHVlcy5sZW5ndGggPiAwICYmIG9wdGlvblRleHRMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIG9wdGlvblRleHRMaXN0ID0gb3B0aW9uVmFsdWVzO1xuICAgIH1cbiAgICBpZiAob3B0aW9uVmFsdWVzLmxlbmd0aCAhPT0gb3B0aW9uVGV4dExpc3QubGVuZ3RoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ09wdGlvbnMgdmFsdWUgbGlzdCBhbmQgb3B0aW9uIHRleHQgbGlzdCBtdXN0IGJlIHRoZSBzYW1lIHNpemUhJyk7XG4gICAgfVxuICAgIGZvciAobGV0IG9wdGlvbklkeCBpbiBvcHRpb25WYWx1ZXMpe1xuICAgICAgICBsZXQgb3B0aW9uID0gY3JlYXRlRWxlbWVudCgnb3B0aW9uJywnJyxvcHRpb25UZXh0TGlzdFtvcHRpb25JZHhdLnRvU3RyaW5nKCkpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZXNbb3B0aW9uSWR4XTtcbiAgICAgICAgZm9ybURyb3Bkb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuICAgIGZvcm1JbnB1dERpdi5hcHBlbmRDaGlsZChmb3JtRHJvcGRvd24pO1xuICAgIHJldHVybiBmb3JtSW5wdXREaXY7XG59XG5cbmRlc2lnblN0YXJ0U2NyZWVuKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9