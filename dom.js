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
            gameMessage.textContent = `Your shot at (${coords}) has ${shot ? 'hit the opponent\'s ship!' : 'missed!'}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxjQUFjO0FBQ2Qsa0dBQWtHLE9BQU8sV0FBVyxPQUFPO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSztBQUN2QjtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0EsZ0NBQWdDLElBQUk7QUFDcEMsY0FBYztBQUNkLGdDQUFnQyxJQUFJO0FBQ3BDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLFdBQVcsSUFBSTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL29jZWFuLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhdHRsZXNoaXAtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9lbmVteS1iYXR0bGVzaGlwLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOTExKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGFpbmVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiA3OyBcXG59XFxuXFxuLmdhbWUtY29udGFpbmVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiAyIC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDIzNSwgMjE1LCAwLjQxOCk7XFxufVxcblxcbi5kaXZpZGVyLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGdyZWVuOyovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZGl2aWRlci1tZXNzYWdlLCAuc3RhcnQtbWVzc2FnZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDIuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiYSgzLCAyNiwgMjYsIDAuODAxKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGl2aWRlci1jb250YWluZXIgPiBidXR0b24sIC5zdGFydC1idXR0b257XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgY29sb3I6IHJnYmEoMTM5LCAwLCAwLCAwLjg0OSk7XFxufVxcblxcbnAuc3RhcnQtbWVzc2FnZSwgYnV0dG9uLnN0YXJ0LWJ1dHRvbntcXG4gICAgY29sb3I6IHJnYmEoMTcsIDIwLCAxOTIsIDAuOTU5KTtcXG59IFxcblxcbi5ib2FyZHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNjUsIDFmcik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMCwgMjAsIDIwMSk7XFxufVxcblxcbi5wbGF5ZXIuYm9hcmR7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ib2FyZC1yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDY1LCAxZnIpO1xcbiAgICBncmlkLXJvdzogc3BhbiA1O1xcbn1cXG5cXG4uYm9hcmQtdGlsZXtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjU1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoNXZoIC0gMTRweCksIDQwcHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlW2NsYXNzJD1cXFwiX2dhbWV0aWxlXFxcIl17XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaGlwLXRpbGV7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxlLFxcbi5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGV7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGUsXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxle1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udmVydGljYWwtbGluZSwgLmhvcml6b250YWwtbGluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MSwgNDEpO1xcbn1cXG5cXG4ub3Bwb25lbnQuYm9hcmR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJvYXJkLW92ZXJsYXksIC5zdGFydC1vdmVybGF5e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCAxMjMsIDEyMywgMC41MjcpO1xcbn1cXG5cXG4uc3RhcnQtb3ZlcmxheXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnN0YXJ0LXNjcmVlbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgOTIsIDUzLCAwLjY1OCk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAycHggMnB4IGxpZ2h0Y29yYWw7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1mb3JtLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCA4NCwgODQsIDAuNTg5KTtcXG59XFxuXFxuLnBsYWNlLXNoaXAtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYWNlLXNoaXAtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWlucHV0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMzAsIDMzLCAyMDcpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JtLWlucHV0ID4gc2VsZWN0e1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5mb3JtLWVycm9ye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoMTE3LCA4LCA4KTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5nYW1lLW1lc3NhZ2UsIC50aXRsZXtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogcmdiKDM5LCA0MCwgNjMpO1xcbn1cXG5cXG4ubWVzc2FnZS1jb250YWluZXIsIC5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNDE4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyx5REFBeUM7SUFDekMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseURBQStEO0lBQy9ELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1Qyx1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjkxMSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9vY2Vhbi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubWVzc2FnZS1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDc7IFxcbn1cXG5cXG4uZ2FtZS1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDAuNDE4KTtcXG59XFxuXFxuLmRpdmlkZXItY29udGFpbmVye1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5kaXZpZGVyLW1lc3NhZ2UsIC5zdGFydC1tZXNzYWdle1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2JhKDMsIDI2LCAyNiwgMC44MDEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaXZpZGVyLWNvbnRhaW5lciA+IGJ1dHRvbiwgLnN0YXJ0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBjb2xvcjogcmdiYSgxMzksIDAsIDAsIDAuODQ5KTtcXG59XFxuXFxucC5zdGFydC1tZXNzYWdlLCBidXR0b24uc3RhcnQtYnV0dG9ue1xcbiAgICBjb2xvcjogcmdiYSgxNywgMjAsIDE5MiwgMC45NTkpO1xcbn0gXFxuXFxuLmJvYXJke1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2NSwgMWZyKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIwLCAyMCwgMjAxKTtcXG59XFxuXFxuLnBsYXllci5ib2FyZHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JhdHRsZXNoaXAtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uYm9hcmQtcm93e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2NSwgMWZyKTtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gNTtcXG59XFxuXFxuLmJvYXJkLXRpbGV7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC41NTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCBjYWxjKDV2aCAtIDE0cHgpLCA0MHB4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZVtjbGFzcyQ9XFxcIl9nYW1ldGlsZVxcXCJde1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGF5ZXIuYm9hcmQgLmJvYXJkLXRpbGUuc2hpcC10aWxle1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5taXNzZWQtdGlsZSxcXG4ub3Bwb25lbnQuYm9hcmQgLmJvYXJkLXRpbGUuc2hvdC10aWxle1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5wbGF5ZXIuYm9hcmQgLmJvYXJkLXRpbGUuc2hvdC10aWxlLFxcbi5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZS5taXNzZWQtdGlsZXtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnZlcnRpY2FsLWxpbmUsIC5ob3Jpem9udGFsLWxpbmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDEsIDQxKTtcXG59XFxuXFxuLm9wcG9uZW50LmJvYXJke1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9lbmVteS1iYXR0bGVzaGlwLWJhY2tncm91bmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmJvYXJkLW92ZXJsYXksIC5zdGFydC1vdmVybGF5e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCAxMjMsIDEyMywgMC41MjcpO1xcbn1cXG5cXG4uc3RhcnQtb3ZlcmxheXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JhdHRsZXNoaXAtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc3RhcnQtc2NyZWVue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA5MiwgNTMsIDAuNjU4KTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDJweCAycHggbGlnaHRjb3JhbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XFxufVxcblxcbi5wbGFjZS1zaGlwLWZvcm0tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzYsIDg0LCA4NCwgMC41ODkpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigzMCwgMzMsIDIwNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0taW5wdXQgPiBzZWxlY3R7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuXFxuLmZvcm0tZXJyb3J7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYigxMTcsIDgsIDgpO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmdhbWUtbWVzc2FnZSwgLnRpdGxle1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoMzksIDQwLCA2Myk7XFxufVxcblxcbi5tZXNzYWdlLWNvbnRhaW5lciwgLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC40MTgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBudW1IaXRzKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtSGl0cyA9IG51bUhpdHMgPyBudW1IaXRzIDogMDtcbiAgICAgICAgdGhpcy5oaXRUaWxlcyA9IFtdXG4gICAgfVxuXG4gICAgaGl0ID0gKCk9PiB7XG4gICAgICAgIHRoaXMubnVtSGl0cyArPSAxO1xuICAgIH1cblxuICAgIGdldCBzdW5rKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm51bUhpdHMgPj0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHRpbGVJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmljb24gPyB0aGlzLmljb24gOiAnTyc7XG4gICAgfVxuXG4gICAgc2V0IHRpbGVJY29uKG5ld0ljb24pe1xuICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVJY29uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50aWxlcyA9IHRoaXMuI2NyZWF0ZVRpbGVzKCk7XG4gICAgICAgIHRoaXMuc2hvdFRpbGVzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHNMaXN0ID0gW107XG4gICAgfVxuXG4gICAgI2NyZWF0ZVRpbGVzID0gKCk9PntcbiAgICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwO2krKyl7XG4gICAgICAgICAgICBsZXQgdGlsZVJvdyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGlsZVJvdy5wdXNoKCcuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZVJvdylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZXNcbiAgICB9XG5cbiAgICAjc2hpcFBsYWNlbWVudE91dE9mQm91bmRzID0gKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzFdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMV0gLSAoc2hpcC5sZW5ndGgtMSkgPCAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3VwJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdIC0gKHNoaXAubGVuZ3RoLTEpIDwgMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgICNpbnRlcnNlY3RzQW5vdGhlclNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV0rbW92ZW1lbnRdIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd1cCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCAhKGRpcmVjdGlvbikgfHwgIShjb29yZHMpIHx8ICEoc2hpcCkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVycy4gUGFzcyBpbiBzaGlwIG9iamVjdCwgY29vcmRpbmF0ZXMsIGFuZCBhIGRpcmVjdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvb3Jkcy5tYXAoKGF4aXMpPT57cmV0dXJuIChheGlzIDwgMTAgJiYgYXhpcyA+PSAwKX0pLmZpbHRlcigoc2hpcFZhbGlkKT0+eyFzaGlwVmFsaWR9KSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2hpcCBjYW5cXCd0IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiNzaGlwUGxhY2VtZW50T3V0T2ZCb3VuZHMoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJylcbiAgICAgICAgICAgIHJldHVybiAnUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNpbnRlcnNlY3RzQW5vdGhlclNoaXAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hpcCBjYW5ub3QgYmUgcGxhY2VkIG9uIGFub3RoZXIgc2hpcCEnKVxuICAgICAgICAgICAgcmV0dXJuICdTaGlwIGNhbm5vdCBiZSBwbGFjZWQgb24gYW5vdGhlciBzaGlwISc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpcHNMaXN0Lmxlbmd0aCA+PSA3KXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVG9vIG1hbnkgc2hpcHMhIE1heGltdW0gb2YgNyBzaGlwcyBjYW4gYmUgcGxhY2VkIScpXG4gICAgICAgICAgICByZXR1cm4gJ1RvbyBtYW55IHNoaXBzISBNYXhpbXVtIG9mIDcgc2hpcHMgY2FuIGJlIHBsYWNlZCEnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdK21vdmVtZW50XSA9IHNoaXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndXAnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSA9IHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGlzdC5wdXNoKHNoaXApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXVxuICAgICAgICBpZiAoIXRpbGUpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ29vcmRpbmF0ZXMgd2VyZSBub3QgdmFsaWQhJylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLmdldFBvc3NpYmxlTW92ZXMoKSkuaW5kZXhPZihKU09OLnN0cmluZ2lmeShjb29yZHMpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgdGlsZSB3YXMgYWxyZWFkeSBzaG90IScpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aWxlIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdCBoaXQgYSBzaGlwIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRpbGUuaGl0KClcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKTtcbiAgICAgICAgICAgIHRpbGUuaGl0VGlsZXMucHVzaChjb29yZHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdCBtaXNzZWQhJywgY29vcmRzKVxuICAgICAgICAgICAgdGhpcy5zaG90VGlsZXMucHVzaChjb29yZHMpXG4gICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9ICdYJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzTGlzdCl7XG4gICAgICAgICAgICBpZiAoIXNoaXAuc3Vuayl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNMaXN0Lmxlbmd0aCAhPT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRQb3NzaWJsZU1vdmVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IFtpLGpdXG4gICAgICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuc2hvdFRpbGVzKS5pbmRleE9mKEpTT04uc3RyaW5naWZ5KHRpbGUpKSA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlTW92ZXNcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoYm9hcmQsIG9wcG9uZW50KXtcbiAgICAgICAgaWYgKCFib2FyZCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUGxheWVyIG11c3QgYmUgaW5zdGFudGlhdGVkIHdpdGggYSBnYW1lYm9hcmQgb2JqZWN0IScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICBpZiAob3Bwb25lbnQgJiYgdGhpcy5ib2FyZCAhPT0gb3Bwb25lbnQuYm9hcmQpe1xuICAgICAgICAgICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50O1xuICAgICAgICAgICAgb3Bwb25lbnQub3Bwb25lbnQgPSB0aGlzO1xuICAgICAgICB9IGVsc2UgKFxuICAgICAgICAgICAgdGhpcy5vcHBvbmVudCA9IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgfVxuXG4gICAgbWFrZU1vdmUgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGlmICghY29vcmRzKXtcbiAgICAgICAgICAgIGxldCBwb3NzaWJsZU1vdmVzID0gdGhpcy5vcHBvbmVudC5ib2FyZC5nZXRQb3NzaWJsZU1vdmVzKClcbiAgICAgICAgICAgIGNvb3JkcyA9IHBvc3NpYmxlTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBvc3NpYmxlTW92ZXMubGVuZ3RoKV1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdCA9IHRoaXMub3Bwb25lbnQuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgICByZXR1cm4gc2hvdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcnMsIGh1bWFuUGxheWVyKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gcGxheWVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xuICAgICAgICB0aGlzLmh1bWFuUGxheWVyID0gaHVtYW5QbGF5ZXI7XG4gICAgICAgIHRoaXMud2lubmVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHBsYXlOZXh0VHVybiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2aWRlck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2aWRlci1tZXNzYWdlJyk7XG4gICAgICAgIGNvbnN0IGdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1idXR0b24nKTtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRCb2FyZE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LmJvYXJkJyk7XG4gICAgICAgIGlmICh0aGlzLmh1bWFuUGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKXtcbiAgICAgICAgICAgIGRpdmlkZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ09QUE9ORU5UIEhBUyBXT04hIEFMTCBZT1VSIFNISVBTIFdFUkUgU1VOSyEnO1xuICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLmh1bWFuUGxheWVyLm9wcG9uZW50O1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJUdXJuID09PSB0aGlzLmh1bWFuUGxheWVyKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IHdpbmRvdy5vcHBvbmVudFNob3RSZXN1bHRzO1xuICAgICAgICAgICAgZGl2aWRlck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnSVQgSVMgTk9XIFlPVVIgVFVSTiEnO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZC5yZW1vdmVDaGlsZChvcHBvbmVudEJvYXJkT3ZlcmxheSk7XG4gICAgICAgICAgICBnYW1lQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLnBsYXllcnNbMV07XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2aWRlck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnSVQgSVMgTk9XIE9QUE9ORU5UXFwnUyBUVVJOISc7XG4gICAgICAgICAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICAgICAgICBnYW1lQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGxldCBzaG90ID0gdGhpcy5odW1hblBsYXllci5vcHBvbmVudC5tYWtlTW92ZSgpO1xuICAgICAgICAgICAgd2luZG93Lm9wcG9uZW50U2hvdFJlc3VsdHMgPSBgT3Bwb25lbnRcXCdzIHNob3QgaGFzICR7c2hvdCA/ICdzaG90IHlvdXIgc2hpcCEnIDogJ21pc3NlZCEnfWA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZG9tXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyLCBHYW1lIH0gZnJvbSAnLi9iYXR0bGVzaGlwLmpzJ1xuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpO1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuY29uc3QgZ2FtZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tZXNzYWdlJyk7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gZGVzaWduU3RhcnRTY3JlZW4oKXtcbiAgICBsZXQgc3RhcnRPdmVybGF5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ3N0YXJ0LW92ZXJsYXknLCcnKTtcbiAgICBsZXQgc3RhcnRTY3JlZW4gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdzdGFydC1zY3JlZW4nLCcnKVxuICAgIGxldCBzdGFydE1lc3NhZ2UgPSBjcmVhdGVFbGVtZW50KCdwJywnc3RhcnQtbWVzc2FnZScsJ0NMSUNLIFRIRSBCVVRUT04gVE8gQkVHSU4gVEhFIEdBTUUhJyk7XG4gICAgbGV0IHN0YXJ0QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywnc3RhcnQtYnV0dG9uJywnU1RBUlQgR0FNRSEnKTtcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IG5ld0dhbWUgPSBkZXNpZ25HYW1lKCk7XG4gICAgICAgIHdpbmRvdy5jdXJyZW50R2FtZSA9IG5ld0dhbWU7XG4gICAgfSk7XG4gICAgc3RhcnRPdmVybGF5LmFwcGVuZENoaWxkKHN0YXJ0U2NyZWVuKTtcbiAgICBzdGFydFNjcmVlbi5hcHBlbmRDaGlsZChzdGFydE1lc3NhZ2UpO1xuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0T3ZlcmxheSk7XG59XG5cbmZ1bmN0aW9uIGRlc2lnbkdhbWUoKXtcbiAgICBjb25zdCBzdGFydE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtb3ZlcmxheScpO1xuICAgIHN0YXJ0T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IGJvYXJkT25lID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGJvYXJkVHdvID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIGxldCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGJvYXJkT25lKTtcbiAgICBsZXQgcGxheWVyVHdvID0gbmV3IFBsYXllcihib2FyZFR3bywgcGxheWVyT25lKTtcbiAgICBnYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRlc2lnbkJvYXJkcyhwbGF5ZXJPbmUpO1xuICAgIHJldHVybiBuZXcgR2FtZShbcGxheWVyT25lLCBwbGF5ZXJUd29dLCBwbGF5ZXJPbmUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNpZ25Cb2FyZHMocGxheWVyKXtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVQbGF5ZXJCb2FyZCgpO1xuICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicpXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNpZ25EaXZpZGVyQ29udGFpbmVyKHBsYXllcikpO1xuICAgIGxldCBvcHBvbmVudEJvYXJkID0gY3JlYXRlUGxheWVyQm9hcmQoKTtcbiAgICBvcHBvbmVudEJvYXJkLmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50Jyk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHBvbmVudEJvYXJkKTtcbiAgICBhZGRFdmVudExpc3RlbmVyc09uT3Bwb25lbnRCb2FyZChwbGF5ZXIpO1xuICAgIGNyZWF0ZU92ZXJsYXlPbk9wcG9uZW50Qm9hcmQoKTtcbn1cblxuZnVuY3Rpb24gZGVzaWduRGl2aWRlckNvbnRhaW5lcihwbGF5ZXIpe1xuICAgIGxldCBkaXZpZGVyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZGl2aWRlci1jb250YWluZXInLCcnKTtcbiAgICBsZXQgZGl2aWRlck1lc3NhZ2VCb3ggPSBjcmVhdGVFbGVtZW50KCdwJywnZGl2aWRlci1tZXNzYWdlJywnUExBQ0UgWU9VUiBTSElQUyEnKTtcbiAgICBsZXQgcGxhY2VTaGlwc0RpdiA9IGNyZWF0ZVBsYWNlU2hpcEZvcm0ocGxheWVyKTtcbiAgICBkaXZpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdmlkZXJNZXNzYWdlQm94KTtcbiAgICBkaXZpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNEaXYpO1xuICAgIGxldCBnYW1lQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywnZ2FtZS1idXR0b24nLCdGSU5JU0ggUExBQ0lORyBTSElQUycpO1xuICAgIGxldCBlcnJvck1lc3NhZ2UgPSBjcmVhdGVFbGVtZW50KCdwJywnZm9ybS1lcnJvcicsJycpO1xuICAgIGRpdmlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcbiAgICBnYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBpZiAocGxheWVyLmJvYXJkLnNoaXBzTGlzdC5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHNoaXBzIHdlcmUgcGxhY2VkISc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXZpZGVyTWVzc2FnZUJveC50ZXh0Q29udGVudCA9IHdpbmRvdy5jdXJyZW50R2FtZS5wbGF5ZXJUdXJuID09PSBwbGF5ZXIgPyBgWU9VIEdPIEZJUlNULiBQUkVTUyBDT05USU5VRSBUTyBTVEFSVGAgOiAnT1BQT05FTlQgR09FUyBGSVJTVC4nO1xuICAgICAgICAgICAgcmVwbGFjZUdhbWVCdXR0b24oZ2FtZUJ1dHRvbiwgJ0NPTlRJTlVFJywgKCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudEdhbWUucGxheU5leHRUdXJuKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyLmJvYXJkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIHBsYWNlU2hpcHNEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcbiAgICBkaXZpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCdXR0b24pO1xuICAgIHJldHVybiBkaXZpZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlR2FtZUJ1dHRvbihvcmlnaW5hbCwgdGV4dCwgZXZlbnRMaXN0ZW5lckNhbGxiYWNrKXtcbiAgICBvcmlnaW5hbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgb3JpZ2luYWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxldCBuZXdHYW1lQnV0dG9uID0gb3JpZ2luYWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIG9yaWdpbmFsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0dhbWVCdXR0b24sIG9yaWdpbmFsKTtcbiAgICBpZiAoZXZlbnRMaXN0ZW5lckNhbGxiYWNrKXtcbiAgICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRMaXN0ZW5lckNhbGxiYWNrKVxuICAgIH1cbiAgICByZXR1cm4gbmV3R2FtZUJ1dHRvblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYWNlU2hpcEZvcm0ocGxheWVyKXtcbiAgICBsZXQgcGxhY2VTaGlwRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywncGxhY2Utc2hpcC1mb3JtLWNvbnRhaW5lcicsJycpO1xuICAgIGxldCBwbGFjZVNoaXBGb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsJ3BsYWNlLXNoaXAtZm9ybScsJycpO1xuICAgIGxldCBzaGlwTGVuZ3RoID0gY3JlYXRlRm9ybURyb3Bkb3duKCdsZW5ndGgtZHJvcGRvd24nLCAnU2hpcCBMZW5ndGg6JywgdHJ1ZSwgWzEsMiwzLDQsNV0pO1xuICAgIGxldCB4Q29vcmRzID0gY3JlYXRlRm9ybURyb3Bkb3duKCd4LWNvb3Jkcy1kcm9wZG93bicsICdYLUF4aXMgTG9jYXRpb246JywgdHJ1ZSwgWzAsMSwyLDMsNCw1LDYsNyw4LDldKTtcbiAgICBsZXQgeUNvb3JkcyA9IGNyZWF0ZUZvcm1Ecm9wZG93bigneS1jb29yZHMtZHJvcGRvd24nLCAnWS1BeGlzIExvY2F0aW9uOicsIHRydWUsIFswLDEsMiwzLDQsNSw2LDcsOCw5XSk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGNyZWF0ZUZvcm1Ecm9wZG93bignZGlyZWN0aW9uLWRyb3Bkb3duJywgJ0RpcmVjdGlvbjonLCB0cnVlLCBbJ3JpZ2h0JywnZG93bicsJ2xlZnQnLCd1cCddKTtcbiAgICBwbGFjZVNoaXBGb3JtLmFwcGVuZENoaWxkKHNoaXBMZW5ndGgpO1xuICAgIHBsYWNlU2hpcEZvcm0uYXBwZW5kQ2hpbGQoeENvb3Jkcyk7XG4gICAgcGxhY2VTaGlwRm9ybS5hcHBlbmRDaGlsZCh5Q29vcmRzKTtcbiAgICBwbGFjZVNoaXBGb3JtLmFwcGVuZENoaWxkKGRpcmVjdGlvbik7XG4gICAgbGV0IHBsYWNlU2hpcEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsJ3BsYWNlLXNoaXAtYnV0dG9uJywnUExBQ0UgU0hJUCEnKTtcbiAgICBwbGFjZVNoaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBsYWNlU2hpcE9uUGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgICAgdXBkYXRlUGxheWVyQm9hcmQocGxheWVyLmJvYXJkKTtcbiAgICB9KVxuICAgIHBsYWNlU2hpcEZvcm0uYXBwZW5kQ2hpbGQocGxhY2VTaGlwQnV0dG9uKTtcbiAgICBwbGFjZVNoaXBEaXYuYXBwZW5kQ2hpbGQocGxhY2VTaGlwRm9ybSk7XG4gICAgcmV0dXJuIHBsYWNlU2hpcERpdlxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBPblBsYXllckJvYXJkKHBsYXllcil7XG4gICAgbGV0IHhDb29yZHMgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3gtY29vcmRzLWRyb3Bkb3duJykudmFsdWUpO1xuICAgIGxldCB5Q29vcmRzID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5LWNvb3Jkcy1kcm9wZG93bicpLnZhbHVlKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbi1kcm9wZG93bicpLnZhbHVlO1xuICAgIGxldCBzaGlwTGVuZ3RoID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW5ndGgtZHJvcGRvd24nKS52YWx1ZSk7XG4gICAgbGV0IG5ld1NoaXAgPSBuZXcgU2hpcChzaGlwTGVuZ3RoKTtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gcGxheWVyLmJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBbeUNvb3JkcywgeENvb3Jkc10sIGRpcmVjdGlvbilcbiAgICBsZXQgZXJyb3JNZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWVycm9yJyk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZSA/IGVycm9yTWVzc2FnZSA6ICcnO1xuICAgIGlmICghZXJyb3JNZXNzYWdlKXtcbiAgICAgICAgbGV0IG5ld09wcG9uZW50U2hpcCA9IG5ldyBTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB4Q29vcmRzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIHlDb29yZHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gWydyaWdodCcsJ2Rvd24nLCdsZWZ0JywndXAnXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCldO1xuICAgICAgICB9IHdoaWxlIChwbGF5ZXIub3Bwb25lbnQuYm9hcmQucGxhY2VTaGlwKG5ld09wcG9uZW50U2hpcCxbeUNvb3JkcywgeENvb3Jkc10sIGRpcmVjdGlvbikpXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzT25PcHBvbmVudEJvYXJkKHBsYXllcil7XG4gICAgbGV0IGFsbE9wcG9uZW50R2FtZVRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlW2NsYXNzJD1cIl9nYW1ldGlsZVwiXScpXG4gICAgYWxsT3Bwb25lbnRHYW1lVGlsZXMuZm9yRWFjaCgodGlsZUVsZW1lbnQpPT57XG4gICAgICAgIGxldCB0aWxlQ29vcmRzU3RyaW5nID0gdGlsZUVsZW1lbnQuY2xhc3NMaXN0LnRvU3RyaW5nKCkubWF0Y2goL3hjb29yZHMtXFxkLXljb29yZHMtXFxkLylbMF07XG4gICAgICAgIGxldCB4Q29vcmRzID0gTnVtYmVyKHRpbGVDb29yZHNTdHJpbmcuc2xpY2UoOCw5KSk7XG4gICAgICAgIGxldCB5Q29vcmRzID0gTnVtYmVyKHRpbGVDb29yZHNTdHJpbmcuc2xpY2UoMTgsMTkpKTtcbiAgICAgICAgbGV0IGNvb3JkcyA9IFt5Q29vcmRzLCB4Q29vcmRzXTtcbiAgICAgICAgdGlsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgbGV0IHNob3QgPSBwbGF5ZXIubWFrZU1vdmUoY29vcmRzKTtcbiAgICAgICAgICAgIGdhbWVNZXNzYWdlLnRleHRDb250ZW50ID0gYFlvdXIgc2hvdCBhdCAoJHtjb29yZHN9KSBoYXMgJHtzaG90ID8gJ2hpdCB0aGUgb3Bwb25lbnRcXCdzIHNoaXAhJyA6ICdtaXNzZWQhJ31gXG4gICAgICAgICAgICB1cGRhdGVPcHBvbmVudEJvYXJkKHBsYXllci5vcHBvbmVudCk7XG4gICAgICAgICAgICBjcmVhdGVPdmVybGF5T25PcHBvbmVudEJvYXJkKCk7XG4gICAgICAgICAgICBpZiAocGxheWVyLm9wcG9uZW50LmJvYXJkLmFsbFNoaXBzU3VuaygpKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudEdhbWUud2lubmVyID0gcGxheWVyO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZpZGVyLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9ICdZT1UgSEFWRSBXT04hIFlPVSBIQVZFIFNVTksgQUxMIE9GIFlPVVIgT1BQT05FTlRcXCdTIFNISVBTISc7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIHJlcGxhY2VHYW1lQnV0dG9uKGdhbWVCdXR0b24sICdSRVNUQVJUJywgZGVzaWduR2FtZSk7XG4gICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudEdhbWUucGxheU5leHRUdXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXlPbk9wcG9uZW50Qm9hcmQoKXtcbiAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLm9wcG9uZW50Jyk7XG4gICAgb3Bwb25lbnRCb2FyZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCdib2FyZC1vdmVybGF5JywnJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3Bwb25lbnRCb2FyZChvcHBvbmVudCl7XG4gICAgbGV0IG5ld0JvYXJkID0gKG5ldyBHYW1lYm9hcmQoKSkudGlsZXM7XG4gICAgZm9yIChsZXQgc2hvdENvb3JkcyBvZiBvcHBvbmVudC5ib2FyZC5zaG90VGlsZXMpe1xuICAgICAgICBuZXdCb2FyZFtzaG90Q29vcmRzWzBdXVtzaG90Q29vcmRzWzFdXSA9ICdYJztcbiAgICB9XG4gICAgZm9yIChsZXQgb3Bwb25lbnRTaGlwIG9mIG9wcG9uZW50LmJvYXJkLnNoaXBzTGlzdCl7XG4gICAgICAgIGZvciAobGV0IHNob3RPcHBvbmVudFNoaXBUaWxlcyBvZiBvcHBvbmVudFNoaXAuaGl0VGlsZXMpe1xuICAgICAgICAgICAgbmV3Qm9hcmRbc2hvdE9wcG9uZW50U2hpcFRpbGVzWzBdXVtzaG90T3Bwb25lbnRTaGlwVGlsZXNbMV1dID0gJyonO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IHJvd0lkeCBpbiBuZXdCb2FyZCl7XG4gICAgICAgIGxldCByb3cgPSBuZXdCb2FyZFtyb3dJZHhdXG4gICAgICAgIGZvciAobGV0IGNvbElkeCBpbiByb3cpe1xuICAgICAgICAgICAgbGV0IHRpbGUgPSByb3dbY29sSWR4XVxuICAgICAgICAgICAgaWYgKHRpbGUgPT09ICdYJykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLm9wcG9uZW50IC5ib2FyZC10aWxlW2NsYXNzKj1cInhjb29yZHMtJHtjb2xJZHh9LXljb29yZHMtJHtyb3dJZHh9XCJdYClcbiAgICAgICAgICAgICAgICB0aWxlRG9tLmNsYXNzTGlzdC5hZGQoJ21pc3NlZC10aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZURvbS50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGlsZSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQub3Bwb25lbnQgLmJvYXJkLXRpbGVbY2xhc3MqPVwieGNvb3Jkcy0ke2NvbElkeH0teWNvb3Jkcy0ke3Jvd0lkeH1cIl1gKVxuICAgICAgICAgICAgICAgIHRpbGVEb20uY2xhc3NMaXN0LmFkZCgnc2hvdC10aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZURvbS50ZXh0Q29udGVudCA9ICcqJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3Qm9hcmRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKGJvYXJkKXtcbiAgICBsZXQgaWNvbkJvYXJkID0gY29udmVydFBsYXllckJvYXJkVG9JY29ucyhib2FyZCk7XG4gICAgZm9yIChsZXQgcm93SWR4IGluIGljb25Cb2FyZCl7XG4gICAgICAgIGxldCByb3cgPSBpY29uQm9hcmRbcm93SWR4XVxuICAgICAgICBmb3IgKGxldCBjb2xJZHggaW4gcm93KXtcbiAgICAgICAgICAgIGxldCB0aWxlID0gcm93W2NvbElkeF1cbiAgICAgICAgICAgIGlmICh0aWxlID09PSAnTycpe1xuICAgICAgICAgICAgICAgIGxldCB0aWxlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdzaGlwLXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJ08nO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aWxlID09PSAnWCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC5wbGF5ZXIgLmJvYXJkLXRpbGVbY2xhc3MqPVwieGNvb3Jkcy0ke2NvbElkeH0teWNvb3Jkcy0ke3Jvd0lkeH1cIl1gKVxuICAgICAgICAgICAgICAgIHRpbGVEb20uY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aWxlID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC5wbGF5ZXIgLmJvYXJkLXRpbGVbY2xhc3MqPVwieGNvb3Jkcy0ke2NvbElkeH0teWNvb3Jkcy0ke3Jvd0lkeH1cIl1gKVxuICAgICAgICAgICAgICAgIHRpbGVEb20uY2xhc3NMaXN0LmFkZCgnc2hvdC10aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJyonO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpY29uQm9hcmRcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZCgpe1xuICAgIGxldCBkb21Cb2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JvYXJkJywnJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpPDExO2krKyl7XG4gICAgICAgIGxldCByb3cgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdib2FyZC1yb3cnLCcnKTtcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqPDExOyBqKyspe1xuICAgICAgICAgICAgaWYgKGkgPT09IDAgJiBqICE9PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gYCR7ai0xfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgIT09IDAgJiYgaiA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IGAke2ktMX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGlsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JvYXJkLXRpbGUnLCBjb29yZHMpO1xuICAgICAgICAgICAgaWYgKGNvb3JkcyA9PT0gJycgJiYgaSAhPT0gMCAmIGogIT09IDApe1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChgeGNvb3Jkcy0ke2otMX0teWNvb3Jkcy0ke2ktMX1fZ2FtZXRpbGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbExpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCd2ZXJ0aWNhbC1saW5lJywnJyk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGlsZSlcbiAgICAgICAgICAgIGlmIChqICE9PSAxMCl7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHZlcnRpY2FsTGluZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbExpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdob3Jpem9udGFsLWxpbmUnLCcnKTtcbiAgICAgICAgaWYgKGkgIT09IDEwKXtcbiAgICAgICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKGhvcml6b250YWxMaW5lKTtcbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICByZXR1cm4gZG9tQm9hcmRcbn1cblxuZnVuY3Rpb24gY29udmVydFBsYXllckJvYXJkVG9JY29ucyhib2FyZCl7XG4gICAgbGV0IGljb25Cb2FyZCA9IGJvYXJkLnRpbGVzLm1hcCgodGlsZVJvdyk9PntcbiAgICAgICAgbGV0IGljb25UaWxlUm93ID0gdGlsZVJvdy5tYXAoKHRpbGUpPT57XG4gICAgICAgICAgICByZXR1cm4gdGlsZS50b1N0cmluZygpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaWNvblRpbGVSb3dcbiAgICB9KVxuICAgIGZvciAobGV0IHNoaXAgb2YgYm9hcmQuc2hpcHNMaXN0KXtcbiAgICAgICAgZm9yIChsZXQgaGl0Q29vcmRzIG9mIHNoaXAuaGl0VGlsZXMpe1xuICAgICAgICAgICAgaWNvbkJvYXJkW2hpdENvb3Jkc1swXV1baGl0Q29vcmRzWzFdXSA9ICcqJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWNvbkJvYXJkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzZXMsIHRleHQpe1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBpZiAoY2xhc3Nlcy5sZW5ndGggIT09IDApe1xuICAgICAgICB0eXBlb2YoY2xhc3NlcykgPT09ICdvYmplY3QnID8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpIDogZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIH1cbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dCA/IHRleHQgOiAnJztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybURyb3Bkb3duKGlkPScnLG5hbWU9JycscmVxdWlyZWQ9ZmFsc2UsIG9wdGlvblZhbHVlcz1bXSwgb3B0aW9uVGV4dExpc3Q9W10pe1xuICAgIGxldCBmb3JtSW5wdXREaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdmb3JtLWlucHV0JywnJyk7XG4gICAgbGV0IGZvcm1MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywnJyxuYW1lKTtcbiAgICBmb3JtTGFiZWwuZm9yID0gaWQ7XG4gICAgbGV0IGZvcm1Ecm9wZG93biA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsJycsJycpO1xuICAgIGZvcm1Ecm9wZG93bi5pZCA9IGlkO1xuICAgIGZvcm1Ecm9wZG93bi5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgIGlmIChvcHRpb25WYWx1ZXMubGVuZ3RoID4gMCAmJiBvcHRpb25UZXh0TGlzdC5sZW5ndGggPT09IDApe1xuICAgICAgICBvcHRpb25UZXh0TGlzdCA9IG9wdGlvblZhbHVlcztcbiAgICB9XG4gICAgaWYgKG9wdGlvblZhbHVlcy5sZW5ndGggIT09IG9wdGlvblRleHRMaXN0Lmxlbmd0aCl7XG4gICAgICAgIHRocm93IEVycm9yKCdPcHRpb25zIHZhbHVlIGxpc3QgYW5kIG9wdGlvbiB0ZXh0IGxpc3QgbXVzdCBiZSB0aGUgc2FtZSBzaXplIScpO1xuICAgIH1cbiAgICBmb3IgKGxldCBvcHRpb25JZHggaW4gb3B0aW9uVmFsdWVzKXtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsJycsb3B0aW9uVGV4dExpc3Rbb3B0aW9uSWR4XS50b1N0cmluZygpKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWVzW29wdGlvbklkeF07XG4gICAgICAgIGZvcm1Ecm9wZG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBmb3JtSW5wdXREaXYuYXBwZW5kQ2hpbGQoZm9ybUxhYmVsKTtcbiAgICBmb3JtSW5wdXREaXYuYXBwZW5kQ2hpbGQoZm9ybURyb3Bkb3duKTtcbiAgICByZXR1cm4gZm9ybUlucHV0RGl2O1xufVxuXG5kZXNpZ25TdGFydFNjcmVlbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==