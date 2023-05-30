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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/battleship-background.jpg */ "./src/images/battleship-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    background-size:100% 100%;\n}\n\n.main-container{\n    background-color: rgba(128, 128, 128, 0.911);\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    grid-template-columns: repeat(5, 1fr);\n}\n\n.header{\n    grid-column: 1 / 6;\n    grid-row: 1;\n}\n\n.message-container{\n    grid-column: 1 / 6;\n    grid-row: 7; \n}\n\n.game-container{\n    grid-column: 1 / 6;\n    grid-row: 2 / 7;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.divider-container{\n    width: 20%;\n    height: 100%;\n    /*background-color: green;*/\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.divider-message, .start-message{\n    margin: 0;\n    font-size: 3.5rem;\n    font-weight: bold;\n    color: rgba(14, 228, 228, 0.801);\n    text-align: center;\n}\n\n.divider-container > button, .start-button{\n    width: 75%;\n    height: 45px;\n    border-radius: 5px;\n    font-size: 2vh;\n    font-weight: bold;\n    background-color: rgb(14, 228, 228);\n    color: rgba(139, 0, 0, 0.849);\n}\n\np.start-message, button.start-button{\n    color: rgba(17, 20, 192, 0.959);\n} \n\n.board{\n    aspect-ratio: 1 / 1;\n    width: 35%;\n    display: grid;\n    grid-template-rows: repeat(65, 1fr);\n    border: 3px solid rgb(20, 20, 201);\n}\n\n.player.board{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.board-row{\n    display: grid;\n    grid-template-columns: repeat(65, 1fr);\n    grid-row: span 5;\n}\n\n.board-tile{\n    grid-column: span 5;\n    background-color: rgba(173, 216, 230, 0.555);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(12px, calc(5vh - 14px), 40px);\n    font-weight: bold;\n}\n\n.opponent.board .board-tile[class$=\"_gametile\"]{\n    cursor: pointer;\n}\n\n.player.board .board-tile.ship-tile{\n    color: blue;\n}\n\n.player.board .board-tile.missed-tile,\n.opponent.board .board-tile.shot-tile{\n    color: green;\n}\n\n.player.board .board-tile.shot-tile,\n.opponent.board .board-tile.missed-tile{\n    color: red;\n}\n\n.vertical-line, .horizontal-line{\n    background-color: rgb(44, 41, 41);\n}\n\n.opponent.board{\n    position: relative;\n}\n\n.board-overlay, .start-overlay{\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(136, 123, 123, 0.527);\n}\n\n.start-overlay{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.start-screen{\n    position: absolute;\n    height: 60%;\n    width: 40%;\n    top: 20%;\n    left: 30%;\n    background-color: rgba(64, 92, 53, 0.658);\n    box-shadow: 3px 2px 2px lightcoral;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10px 30px 10px 30px;\n}\n\n.place-ship-form-container{\n    width: 100%;\n    padding: 30px 10px;\n    border: 3px solid black;\n    background-color: rgba(136, 84, 84, 0.589);\n}\n\n.place-ship-form{\n    display: flex;\n    flex-direction: column;\n}\n\n.place-ship-button{\n    margin-top: 30px;\n    align-self: center;\n    height: 30px;\n    width: 90%;\n    font-weight: bold;\n}\n\n.form-input{\n    display: flex;\n    gap: 6px;\n    font-size: 1.5rem;\n    color: rgb(30, 33, 207);\n    font-weight: 600;\n    justify-content: space-between;\n}\n\n.form-input > select{\n    font-size: 1.15rem;\n}\n\n.form-error{\n    text-align: center;\n    align-self: center;\n    font-weight: bold;\n    color: rgb(117, 8, 8);\n    font-size: 1.75rem;\n    margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;IACZ,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,yDAAyD;IACzD,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;IAC5C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8CAA8C;IAC9C,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,4CAA4C;AAChD;;AAEA;IACI,yDAAyD;IACzD,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;AACb","sourcesContent":["body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    background-size:100% 100%;\n}\n\n.main-container{\n    background-color: rgba(128, 128, 128, 0.911);\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-rows: repeat(7, 1fr);\n    grid-template-columns: repeat(5, 1fr);\n}\n\n.header{\n    grid-column: 1 / 6;\n    grid-row: 1;\n}\n\n.message-container{\n    grid-column: 1 / 6;\n    grid-row: 7; \n}\n\n.game-container{\n    grid-column: 1 / 6;\n    grid-row: 2 / 7;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.divider-container{\n    width: 20%;\n    height: 100%;\n    /*background-color: green;*/\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.divider-message, .start-message{\n    margin: 0;\n    font-size: 3.5rem;\n    font-weight: bold;\n    color: rgba(14, 228, 228, 0.801);\n    text-align: center;\n}\n\n.divider-container > button, .start-button{\n    width: 75%;\n    height: 45px;\n    border-radius: 5px;\n    font-size: 2vh;\n    font-weight: bold;\n    background-color: rgb(14, 228, 228);\n    color: rgba(139, 0, 0, 0.849);\n}\n\np.start-message, button.start-button{\n    color: rgba(17, 20, 192, 0.959);\n} \n\n.board{\n    aspect-ratio: 1 / 1;\n    width: 35%;\n    display: grid;\n    grid-template-rows: repeat(65, 1fr);\n    border: 3px solid rgb(20, 20, 201);\n}\n\n.player.board{\n    background-image: url(./images/battleship-background.jpg);\n    background-size: cover;\n}\n\n.board-row{\n    display: grid;\n    grid-template-columns: repeat(65, 1fr);\n    grid-row: span 5;\n}\n\n.board-tile{\n    grid-column: span 5;\n    background-color: rgba(173, 216, 230, 0.555);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(12px, calc(5vh - 14px), 40px);\n    font-weight: bold;\n}\n\n.opponent.board .board-tile[class$=\"_gametile\"]{\n    cursor: pointer;\n}\n\n.player.board .board-tile.ship-tile{\n    color: blue;\n}\n\n.player.board .board-tile.missed-tile,\n.opponent.board .board-tile.shot-tile{\n    color: green;\n}\n\n.player.board .board-tile.shot-tile,\n.opponent.board .board-tile.missed-tile{\n    color: red;\n}\n\n.vertical-line, .horizontal-line{\n    background-color: rgb(44, 41, 41);\n}\n\n.opponent.board{\n    position: relative;\n}\n\n.board-overlay, .start-overlay{\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(136, 123, 123, 0.527);\n}\n\n.start-overlay{\n    background-image: url(./images/battleship-background.jpg);\n    background-size: cover;\n}\n\n.start-screen{\n    position: absolute;\n    height: 60%;\n    width: 40%;\n    top: 20%;\n    left: 30%;\n    background-color: rgba(64, 92, 53, 0.658);\n    box-shadow: 3px 2px 2px lightcoral;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10px 30px 10px 30px;\n}\n\n.place-ship-form-container{\n    width: 100%;\n    padding: 30px 10px;\n    border: 3px solid black;\n    background-color: rgba(136, 84, 84, 0.589);\n}\n\n.place-ship-form{\n    display: flex;\n    flex-direction: column;\n}\n\n.place-ship-button{\n    margin-top: 30px;\n    align-self: center;\n    height: 30px;\n    width: 90%;\n    font-weight: bold;\n}\n\n.form-input{\n    display: flex;\n    gap: 6px;\n    font-size: 1.5rem;\n    color: rgb(30, 33, 207);\n    font-weight: 600;\n    justify-content: space-between;\n}\n\n.form-input > select{\n    font-size: 1.15rem;\n}\n\n.form-error{\n    text-align: center;\n    align-self: center;\n    font-weight: bold;\n    color: rgb(117, 8, 8);\n    font-size: 1.75rem;\n    margin: 0;\n}"],"sourceRoot":""}]);
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
            return false
        }
        if (JSON.stringify(this.getPossibleMoves()).indexOf(JSON.stringify(coords)) === -1) {
            console.error('This tile was already shot!')
            return false
        } else if (tile instanceof Ship){
            console.log('Shot hit a ship!', coords)
            tile.hit()
            this.shotTiles.push(coords);
            tile.hitTiles.push(coords);
        } else {
            console.log('Shot missed!', coords)
            this.shotTiles.push(coords)
            this.tiles[coords[0]][coords[1]] = 'X';
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
        this.opponent.board.receiveAttack(coords);
        return this.opponent;
    }
}

class Game{
    constructor(players){
        this.players = players
        this.playerTurn = players[Math.floor(Math.random()*2)];
    }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   designBoards: () => (/* binding */ designBoards),
/* harmony export */   designStartScreen: () => (/* binding */ designStartScreen),
/* harmony export */   updateOpponentBoard: () => (/* binding */ updateOpponentBoard),
/* harmony export */   updatePlayerBoard: () => (/* binding */ updatePlayerBoard)
/* harmony export */ });
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ "./src/battleship.js");

const mainContainer = document.querySelector('.main-container')
const gameContainer = document.querySelector('.game-container')

function designStartScreen(){
    let startOverlay = createElement('div', 'start-overlay','');
    let startScreen = createElement('div','start-screen','')
    let startMessage = createElement('p','start-message','CLICK THE BUTTON TO BEGIN THE GAME!');
    let startButton = createElement('button','start-button','START GAME!');
    startButton.addEventListener('click',()=>{
        designGame();
    })
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
    designBoards(playerOne);
}


function designBoards(player){
    let boardObject = player.board;
    let playerBoard = createPlayerBoard();
    playerBoard.classList.add('player')
    gameContainer.appendChild(playerBoard);
    gameContainer.appendChild(designDividerContainer(player));
    let opponentBoard = createPlayerBoard();
    opponentBoard.classList.add('opponent');
    gameContainer.appendChild(opponentBoard);
    addEventListenersOnOpponentBoard(player);
    createOverlayOnOpponentBoard();
    console.log(updatePlayerBoard(boardObject));
    console.log(updateOpponentBoard(player.opponent));
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
            dividerMessageBox.textContent = `OPPONENT HAS PLACED ${player.opponent.board.shipsList.length} SHIPS!`
        }
    })
    dividerContainer.appendChild(gameButton);
    return dividerContainer;
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
            console.log(player.opponent.board)
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
            player.makeMove(coords);
            updateOpponentBoard(player.opponent);
            createOverlayOnOpponentBoard();
            triggerOpponentTurn()
        }, {
            once: true
        })
    })
}

function triggerOpponentTurn(){
    const dividerMessage = document.querySelector('p.divider-message');
    dividerMessage.textContent = 'IT IS NOW THE OPPONENT\'S TURN!';
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

/***/ }),

/***/ "./src/images/battleship-background.jpg":
/*!**********************************************!*\
  !*** ./src/images/battleship-background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86eed5c4020633a90369.jpg";

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
/******/ 			"game": 0
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
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ "./src/battleship.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function startGame(){
    /*
    const boardOne = new Gameboard();
    const boardTwo = new Gameboard();
    boardOne.placeShip(new Ship(3),[1,1],'right');
    boardOne.placeShip(new Ship(2),[6,5],'up');
    boardTwo.placeShip(new Ship(3),[8,9],'left');
    boardTwo.placeShip(new Ship(2),[3,3],'down');
    boardOne.receiveAttack([3,3]);
    boardOne.receiveAttack([1,2]);
    boardTwo.receiveAttack([1,2]);
    boardTwo.receiveAttack([3,3]);
    let playerOne = new Player(boardOne);
    let playerTwo = new Player(boardTwo, playerOne);
    designBoards(playerOne);
    */
    // window.playerToMove = playerOne;

    // while (!playerOne.board.allShipsSunk() || !playerTwo.board.allShipsSunk()){

    // }
}

(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.designStartScreen)();


// startGame()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmF0dGxlc2hpcC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC45MTEpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4ubWVzc2FnZS1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDc7IFxcbn1cXG5cXG4uZ2FtZS1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmRpdmlkZXItY29udGFpbmVye1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5kaXZpZGVyLW1lc3NhZ2UsIC5zdGFydC1tZXNzYWdle1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYmEoMTQsIDIyOCwgMjI4LCAwLjgwMSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpdmlkZXItY29udGFpbmVyID4gYnV0dG9uLCAuc3RhcnQtYnV0dG9ue1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQsIDIyOCwgMjI4KTtcXG4gICAgY29sb3I6IHJnYmEoMTM5LCAwLCAwLCAwLjg0OSk7XFxufVxcblxcbnAuc3RhcnQtbWVzc2FnZSwgYnV0dG9uLnN0YXJ0LWJ1dHRvbntcXG4gICAgY29sb3I6IHJnYmEoMTcsIDIwLCAxOTIsIDAuOTU5KTtcXG59IFxcblxcbi5ib2FyZHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNjUsIDFmcik7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMCwgMjAsIDIwMSk7XFxufVxcblxcbi5wbGF5ZXIuYm9hcmR7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ib2FyZC1yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDY1LCAxZnIpO1xcbiAgICBncmlkLXJvdzogc3BhbiA1O1xcbn1cXG5cXG4uYm9hcmQtdGlsZXtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjU1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoNXZoIC0gMTRweCksIDQwcHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlW2NsYXNzJD1cXFwiX2dhbWV0aWxlXFxcIl17XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaGlwLXRpbGV7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxlLFxcbi5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGV7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGUsXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxle1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udmVydGljYWwtbGluZSwgLmhvcml6b250YWwtbGluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MSwgNDEpO1xcbn1cXG5cXG4ub3Bwb25lbnQuYm9hcmR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLW92ZXJsYXksIC5zdGFydC1vdmVybGF5e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCAxMjMsIDEyMywgMC41MjcpO1xcbn1cXG5cXG4uc3RhcnQtb3ZlcmxheXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnN0YXJ0LXNjcmVlbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgOTIsIDUzLCAwLjY1OCk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAycHggMnB4IGxpZ2h0Y29yYWw7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAzMHB4O1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1mb3JtLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCA4NCwgODQsIDAuNTg5KTtcXG59XFxuXFxuLnBsYWNlLXNoaXAtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBsYWNlLXNoaXAtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWlucHV0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiByZ2IoMzAsIDMzLCAyMDcpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JtLWlucHV0ID4gc2VsZWN0e1xcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxufVxcblxcbi5mb3JtLWVycm9ye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2IoMTE3LCA4LCA4KTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULHlDQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuOTExKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGFpbmVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiA3OyBcXG59XFxuXFxuLmdhbWUtY29udGFpbmVye1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxuICAgIGdyaWQtcm93OiAyIC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kaXZpZGVyLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGdyZWVuOyovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZGl2aWRlci1tZXNzYWdlLCAuc3RhcnQtbWVzc2FnZXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiByZ2JhKDE0LCAyMjgsIDIyOCwgMC44MDEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kaXZpZGVyLWNvbnRhaW5lciA+IGJ1dHRvbiwgLnN0YXJ0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAyMjgsIDIyOCk7XFxuICAgIGNvbG9yOiByZ2JhKDEzOSwgMCwgMCwgMC44NDkpO1xcbn1cXG5cXG5wLnN0YXJ0LW1lc3NhZ2UsIGJ1dHRvbi5zdGFydC1idXR0b257XFxuICAgIGNvbG9yOiByZ2JhKDE3LCAyMCwgMTkyLCAwLjk1OSk7XFxufSBcXG5cXG4uYm9hcmR7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDY1LCAxZnIpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjAsIDIwLCAyMDEpO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJke1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmF0dGxlc2hpcC1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ib2FyZC1yb3d7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDY1LCAxZnIpO1xcbiAgICBncmlkLXJvdzogc3BhbiA1O1xcbn1cXG5cXG4uYm9hcmQtdGlsZXtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjU1NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIGNhbGMoNXZoIC0gMTRweCksIDQwcHgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlW2NsYXNzJD1cXFwiX2dhbWV0aWxlXFxcIl17XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaGlwLXRpbGV7XFxuICAgIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucGxheWVyLmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxlLFxcbi5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGV7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnBsYXllci5ib2FyZCAuYm9hcmQtdGlsZS5zaG90LXRpbGUsXFxuLm9wcG9uZW50LmJvYXJkIC5ib2FyZC10aWxlLm1pc3NlZC10aWxle1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udmVydGljYWwtbGluZSwgLmhvcml6b250YWwtbGluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MSwgNDEpO1xcbn1cXG5cXG4ub3Bwb25lbnQuYm9hcmR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvYXJkLW92ZXJsYXksIC5zdGFydC1vdmVybGF5e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM2LCAxMjMsIDEyMywgMC41MjcpO1xcbn1cXG5cXG4uc3RhcnQtb3ZlcmxheXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2JhdHRsZXNoaXAtYmFja2dyb3VuZC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc3RhcnQtc2NyZWVue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA5MiwgNTMsIDAuNjU4KTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDJweCAycHggbGlnaHRjb3JhbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XFxufVxcblxcbi5wbGFjZS1zaGlwLWZvcm0tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzYsIDg0LCA4NCwgMC41ODkpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJnYigzMCwgMzMsIDIwNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0taW5wdXQgPiBzZWxlY3R7XFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuXFxuLmZvcm0tZXJyb3J7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYigxMTcsIDgsIDgpO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIG1hcmdpbjogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBudW1IaXRzKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtSGl0cyA9IG51bUhpdHMgPyBudW1IaXRzIDogMDtcbiAgICAgICAgdGhpcy5oaXRUaWxlcyA9IFtdXG4gICAgfVxuXG4gICAgaGl0ID0gKCk9PiB7XG4gICAgICAgIHRoaXMubnVtSGl0cyArPSAxO1xuICAgIH1cblxuICAgIGdldCBzdW5rKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm51bUhpdHMgPj0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHRpbGVJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmljb24gPyB0aGlzLmljb24gOiAnTyc7XG4gICAgfVxuXG4gICAgc2V0IHRpbGVJY29uKG5ld0ljb24pe1xuICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVJY29uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50aWxlcyA9IHRoaXMuI2NyZWF0ZVRpbGVzKCk7XG4gICAgICAgIHRoaXMuc2hvdFRpbGVzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHNMaXN0ID0gW107XG4gICAgfVxuXG4gICAgI2NyZWF0ZVRpbGVzID0gKCk9PntcbiAgICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwO2krKyl7XG4gICAgICAgICAgICBsZXQgdGlsZVJvdyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGlsZVJvdy5wdXNoKCcuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZVJvdylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZXNcbiAgICB9XG5cbiAgICAjc2hpcFBsYWNlbWVudE91dE9mQm91bmRzID0gKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzFdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMV0gLSAoc2hpcC5sZW5ndGgtMSkgPCAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3VwJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdIC0gKHNoaXAubGVuZ3RoLTEpIDwgMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgICNpbnRlcnNlY3RzQW5vdGhlclNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV0rbW92ZW1lbnRdIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd1cCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCAhKGRpcmVjdGlvbikgfHwgIShjb29yZHMpIHx8ICEoc2hpcCkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVycy4gUGFzcyBpbiBzaGlwIG9iamVjdCwgY29vcmRpbmF0ZXMsIGFuZCBhIGRpcmVjdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvb3Jkcy5tYXAoKGF4aXMpPT57cmV0dXJuIChheGlzIDwgMTAgJiYgYXhpcyA+PSAwKX0pLmZpbHRlcigoc2hpcFZhbGlkKT0+eyFzaGlwVmFsaWR9KSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2hpcCBjYW5cXCd0IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiNzaGlwUGxhY2VtZW50T3V0T2ZCb3VuZHMoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJylcbiAgICAgICAgICAgIHJldHVybiAnUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNpbnRlcnNlY3RzQW5vdGhlclNoaXAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hpcCBjYW5ub3QgYmUgcGxhY2VkIG9uIGFub3RoZXIgc2hpcCEnKVxuICAgICAgICAgICAgcmV0dXJuICdTaGlwIGNhbm5vdCBiZSBwbGFjZWQgb24gYW5vdGhlciBzaGlwISc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpcHNMaXN0Lmxlbmd0aCA+PSA3KXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVG9vIG1hbnkgc2hpcHMhIE1heGltdW0gb2YgNyBzaGlwcyBjYW4gYmUgcGxhY2VkIScpXG4gICAgICAgICAgICByZXR1cm4gJ1RvbyBtYW55IHNoaXBzISBNYXhpbXVtIG9mIDcgc2hpcHMgY2FuIGJlIHBsYWNlZCEnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdK21vdmVtZW50XSA9IHNoaXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndXAnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSA9IHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGlzdC5wdXNoKHNoaXApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXVxuICAgICAgICBpZiAoIXRpbGUpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ29vcmRpbmF0ZXMgd2VyZSBub3QgdmFsaWQhJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLmdldFBvc3NpYmxlTW92ZXMoKSkuaW5kZXhPZihKU09OLnN0cmluZ2lmeShjb29yZHMpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgdGlsZSB3YXMgYWxyZWFkeSBzaG90IScpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmICh0aWxlIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdCBoaXQgYSBzaGlwIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRpbGUuaGl0KClcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKTtcbiAgICAgICAgICAgIHRpbGUuaGl0VGlsZXMucHVzaChjb29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3QgbWlzc2VkIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKVxuICAgICAgICAgICAgdGhpcy50aWxlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSAnWCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwc0xpc3Qpe1xuICAgICAgICAgICAgaWYgKCFzaGlwLnN1bmspe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzTGlzdC5sZW5ndGggIT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UG9zc2libGVNb3ZlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBvc3NpYmxlTW92ZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBbaSxqXVxuICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnNob3RUaWxlcykuaW5kZXhPZihKU09OLnN0cmluZ2lmeSh0aWxlKSkgPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHRpbGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkLCBvcHBvbmVudCl7XG4gICAgICAgIGlmICghYm9hcmQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1BsYXllciBtdXN0IGJlIGluc3RhbnRpYXRlZCB3aXRoIGEgZ2FtZWJvYXJkIG9iamVjdCEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgaWYgKG9wcG9uZW50ICYmIHRoaXMuYm9hcmQgIT09IG9wcG9uZW50LmJvYXJkKXtcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudDtcbiAgICAgICAgICAgIG9wcG9uZW50Lm9wcG9uZW50ID0gdGhpcztcbiAgICAgICAgfSBlbHNlIChcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIG1ha2VNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBpZiAoIWNvb3Jkcyl7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IHRoaXMub3Bwb25lbnQuYm9hcmQuZ2V0UG9zc2libGVNb3ZlcygpXG4gICAgICAgICAgICBjb29yZHMgPSBwb3NzaWJsZU1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwb3NzaWJsZU1vdmVzLmxlbmd0aCldXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHBvbmVudC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wcG9uZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IocGxheWVycyl7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gcGxheWVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgR2FtZSB9IGZyb20gJy4vYmF0dGxlc2hpcC5qcydcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKVxuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNpZ25TdGFydFNjcmVlbigpe1xuICAgIGxldCBzdGFydE92ZXJsYXkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc3RhcnQtb3ZlcmxheScsJycpO1xuICAgIGxldCBzdGFydFNjcmVlbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3N0YXJ0LXNjcmVlbicsJycpXG4gICAgbGV0IHN0YXJ0TWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCdzdGFydC1tZXNzYWdlJywnQ0xJQ0sgVEhFIEJVVFRPTiBUTyBCRUdJTiBUSEUgR0FNRSEnKTtcbiAgICBsZXQgc3RhcnRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCdzdGFydC1idXR0b24nLCdTVEFSVCBHQU1FIScpO1xuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBkZXNpZ25HYW1lKCk7XG4gICAgfSlcbiAgICBzdGFydE92ZXJsYXkuYXBwZW5kQ2hpbGQoc3RhcnRTY3JlZW4pO1xuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0TWVzc2FnZSk7XG4gICAgc3RhcnRTY3JlZW4uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRPdmVybGF5KTtcbn1cblxuZnVuY3Rpb24gZGVzaWduR2FtZSgpe1xuICAgIGNvbnN0IHN0YXJ0T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1vdmVybGF5Jyk7XG4gICAgc3RhcnRPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgYm9hcmRPbmUgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgYm9hcmRUd28gPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgbGV0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoYm9hcmRPbmUpO1xuICAgIGxldCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGJvYXJkVHdvLCBwbGF5ZXJPbmUpO1xuICAgIGRlc2lnbkJvYXJkcyhwbGF5ZXJPbmUpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNpZ25Cb2FyZHMocGxheWVyKXtcbiAgICBsZXQgYm9hcmRPYmplY3QgPSBwbGF5ZXIuYm9hcmQ7XG4gICAgbGV0IHBsYXllckJvYXJkID0gY3JlYXRlUGxheWVyQm9hcmQoKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKVxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzaWduRGl2aWRlckNvbnRhaW5lcihwbGF5ZXIpKTtcbiAgICBsZXQgb3Bwb25lbnRCb2FyZCA9IGNyZWF0ZVBsYXllckJvYXJkKCk7XG4gICAgb3Bwb25lbnRCb2FyZC5jbGFzc0xpc3QuYWRkKCdvcHBvbmVudCcpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZCk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnNPbk9wcG9uZW50Qm9hcmQocGxheWVyKTtcbiAgICBjcmVhdGVPdmVybGF5T25PcHBvbmVudEJvYXJkKCk7XG4gICAgY29uc29sZS5sb2codXBkYXRlUGxheWVyQm9hcmQoYm9hcmRPYmplY3QpKTtcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVPcHBvbmVudEJvYXJkKHBsYXllci5vcHBvbmVudCkpO1xufVxuXG5mdW5jdGlvbiBkZXNpZ25EaXZpZGVyQ29udGFpbmVyKHBsYXllcil7XG4gICAgbGV0IGRpdmlkZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCdkaXZpZGVyLWNvbnRhaW5lcicsJycpO1xuICAgIGxldCBkaXZpZGVyTWVzc2FnZUJveCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCdkaXZpZGVyLW1lc3NhZ2UnLCdQTEFDRSBZT1VSIFNISVBTIScpO1xuICAgIGxldCBwbGFjZVNoaXBzRGl2ID0gY3JlYXRlUGxhY2VTaGlwRm9ybShwbGF5ZXIpO1xuICAgIGRpdmlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2aWRlck1lc3NhZ2VCb3gpO1xuICAgIGRpdmlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwc0Rpdik7XG4gICAgbGV0IGdhbWVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCdnYW1lLWJ1dHRvbicsJ0ZJTklTSCBQTEFDSU5HIFNISVBTJyk7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCdmb3JtLWVycm9yJywnJyk7XG4gICAgZGl2aWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgIGdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuc2hpcHNMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gc2hpcHMgd2VyZSBwbGFjZWQhJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdmlkZXJNZXNzYWdlQm94LnRleHRDb250ZW50ID0gYE9QUE9ORU5UIEhBUyBQTEFDRUQgJHtwbGF5ZXIub3Bwb25lbnQuYm9hcmQuc2hpcHNMaXN0Lmxlbmd0aH0gU0hJUFMhYFxuICAgICAgICB9XG4gICAgfSlcbiAgICBkaXZpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCdXR0b24pO1xuICAgIHJldHVybiBkaXZpZGVyQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGFjZVNoaXBGb3JtKHBsYXllcil7XG4gICAgbGV0IHBsYWNlU2hpcERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3BsYWNlLXNoaXAtZm9ybS1jb250YWluZXInLCcnKTtcbiAgICBsZXQgcGxhY2VTaGlwRm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCdwbGFjZS1zaGlwLWZvcm0nLCcnKTtcbiAgICBsZXQgc2hpcExlbmd0aCA9IGNyZWF0ZUZvcm1Ecm9wZG93bignbGVuZ3RoLWRyb3Bkb3duJywgJ1NoaXAgTGVuZ3RoOicsIHRydWUsIFsxLDIsMyw0LDVdKTtcbiAgICBsZXQgeENvb3JkcyA9IGNyZWF0ZUZvcm1Ecm9wZG93bigneC1jb29yZHMtZHJvcGRvd24nLCAnWC1BeGlzIExvY2F0aW9uOicsIHRydWUsIFswLDEsMiwzLDQsNSw2LDcsOCw5XSk7XG4gICAgbGV0IHlDb29yZHMgPSBjcmVhdGVGb3JtRHJvcGRvd24oJ3ktY29vcmRzLWRyb3Bkb3duJywgJ1ktQXhpcyBMb2NhdGlvbjonLCB0cnVlLCBbMCwxLDIsMyw0LDUsNiw3LDgsOV0pO1xuICAgIGxldCBkaXJlY3Rpb24gPSBjcmVhdGVGb3JtRHJvcGRvd24oJ2RpcmVjdGlvbi1kcm9wZG93bicsICdEaXJlY3Rpb246JywgdHJ1ZSwgWydyaWdodCcsJ2Rvd24nLCdsZWZ0JywndXAnXSk7XG4gICAgcGxhY2VTaGlwRm9ybS5hcHBlbmRDaGlsZChzaGlwTGVuZ3RoKTtcbiAgICBwbGFjZVNoaXBGb3JtLmFwcGVuZENoaWxkKHhDb29yZHMpO1xuICAgIHBsYWNlU2hpcEZvcm0uYXBwZW5kQ2hpbGQoeUNvb3Jkcyk7XG4gICAgcGxhY2VTaGlwRm9ybS5hcHBlbmRDaGlsZChkaXJlY3Rpb24pO1xuICAgIGxldCBwbGFjZVNoaXBCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCdwbGFjZS1zaGlwLWJ1dHRvbicsJ1BMQUNFIFNISVAhJyk7XG4gICAgcGxhY2VTaGlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwbGFjZVNoaXBPblBsYXllckJvYXJkKHBsYXllcik7XG4gICAgICAgIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllci5ib2FyZCk7XG4gICAgfSlcbiAgICBwbGFjZVNoaXBGb3JtLmFwcGVuZENoaWxkKHBsYWNlU2hpcEJ1dHRvbik7XG4gICAgcGxhY2VTaGlwRGl2LmFwcGVuZENoaWxkKHBsYWNlU2hpcEZvcm0pO1xuICAgIHJldHVybiBwbGFjZVNoaXBEaXZcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwT25QbGF5ZXJCb2FyZChwbGF5ZXIpe1xuICAgIGxldCB4Q29vcmRzID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd4LWNvb3Jkcy1kcm9wZG93bicpLnZhbHVlKTtcbiAgICBsZXQgeUNvb3JkcyA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneS1jb29yZHMtZHJvcGRvd24nKS52YWx1ZSk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24tZHJvcGRvd24nKS52YWx1ZTtcbiAgICBsZXQgc2hpcExlbmd0aCA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVuZ3RoLWRyb3Bkb3duJykudmFsdWUpO1xuICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IHBsYXllci5ib2FyZC5wbGFjZVNoaXAobmV3U2hpcCwgW3lDb29yZHMsIHhDb29yZHNdLCBkaXJlY3Rpb24pXG4gICAgbGV0IGVycm9yTWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2UgPyBlcnJvck1lc3NhZ2UgOiAnJztcbiAgICBpZiAoIWVycm9yTWVzc2FnZSl7XG4gICAgICAgIGxldCBuZXdPcHBvbmVudFNoaXAgPSBuZXcgU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeENvb3JkcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICB5Q29vcmRzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFsncmlnaHQnLCdkb3duJywnbGVmdCcsJ3VwJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5vcHBvbmVudC5ib2FyZClcbiAgICAgICAgfSB3aGlsZSAocGxheWVyLm9wcG9uZW50LmJvYXJkLnBsYWNlU2hpcChuZXdPcHBvbmVudFNoaXAsW3lDb29yZHMsIHhDb29yZHNdLCBkaXJlY3Rpb24pKVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyc09uT3Bwb25lbnRCb2FyZChwbGF5ZXIpe1xuICAgIGxldCBhbGxPcHBvbmVudEdhbWVUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHBvbmVudC5ib2FyZCAuYm9hcmQtdGlsZVtjbGFzcyQ9XCJfZ2FtZXRpbGVcIl0nKVxuICAgIGFsbE9wcG9uZW50R2FtZVRpbGVzLmZvckVhY2goKHRpbGVFbGVtZW50KT0+e1xuICAgICAgICBsZXQgdGlsZUNvb3Jkc1N0cmluZyA9IHRpbGVFbGVtZW50LmNsYXNzTGlzdC50b1N0cmluZygpLm1hdGNoKC94Y29vcmRzLVxcZC15Y29vcmRzLVxcZC8pWzBdO1xuICAgICAgICBsZXQgeENvb3JkcyA9IE51bWJlcih0aWxlQ29vcmRzU3RyaW5nLnNsaWNlKDgsOSkpO1xuICAgICAgICBsZXQgeUNvb3JkcyA9IE51bWJlcih0aWxlQ29vcmRzU3RyaW5nLnNsaWNlKDE4LDE5KSk7XG4gICAgICAgIGxldCBjb29yZHMgPSBbeUNvb3JkcywgeENvb3Jkc107XG4gICAgICAgIHRpbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIHBsYXllci5tYWtlTW92ZShjb29yZHMpO1xuICAgICAgICAgICAgdXBkYXRlT3Bwb25lbnRCb2FyZChwbGF5ZXIub3Bwb25lbnQpO1xuICAgICAgICAgICAgY3JlYXRlT3ZlcmxheU9uT3Bwb25lbnRCb2FyZCgpO1xuICAgICAgICAgICAgdHJpZ2dlck9wcG9uZW50VHVybigpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB0cmlnZ2VyT3Bwb25lbnRUdXJuKCl7XG4gICAgY29uc3QgZGl2aWRlck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwLmRpdmlkZXItbWVzc2FnZScpO1xuICAgIGRpdmlkZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ0lUIElTIE5PVyBUSEUgT1BQT05FTlRcXCdTIFRVUk4hJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcmxheU9uT3Bwb25lbnRCb2FyZCgpe1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQub3Bwb25lbnQnKTtcbiAgICBvcHBvbmVudEJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JvYXJkLW92ZXJsYXknLCcnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcHBvbmVudEJvYXJkKG9wcG9uZW50KXtcbiAgICBsZXQgbmV3Qm9hcmQgPSAobmV3IEdhbWVib2FyZCgpKS50aWxlcztcbiAgICBmb3IgKGxldCBzaG90Q29vcmRzIG9mIG9wcG9uZW50LmJvYXJkLnNob3RUaWxlcyl7XG4gICAgICAgIG5ld0JvYXJkW3Nob3RDb29yZHNbMF1dW3Nob3RDb29yZHNbMV1dID0gJ1gnO1xuICAgIH1cbiAgICBmb3IgKGxldCBvcHBvbmVudFNoaXAgb2Ygb3Bwb25lbnQuYm9hcmQuc2hpcHNMaXN0KXtcbiAgICAgICAgZm9yIChsZXQgc2hvdE9wcG9uZW50U2hpcFRpbGVzIG9mIG9wcG9uZW50U2hpcC5oaXRUaWxlcyl7XG4gICAgICAgICAgICBuZXdCb2FyZFtzaG90T3Bwb25lbnRTaGlwVGlsZXNbMF1dW3Nob3RPcHBvbmVudFNoaXBUaWxlc1sxXV0gPSAnKic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgcm93SWR4IGluIG5ld0JvYXJkKXtcbiAgICAgICAgbGV0IHJvdyA9IG5ld0JvYXJkW3Jvd0lkeF1cbiAgICAgICAgZm9yIChsZXQgY29sSWR4IGluIHJvdyl7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHJvd1tjb2xJZHhdXG4gICAgICAgICAgICBpZiAodGlsZSA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQub3Bwb25lbnQgLmJvYXJkLXRpbGVbY2xhc3MqPVwieGNvb3Jkcy0ke2NvbElkeH0teWNvb3Jkcy0ke3Jvd0lkeH1cIl1gKVxuICAgICAgICAgICAgICAgIHRpbGVEb20uY2xhc3NMaXN0LmFkZCgnbWlzc2VkLXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aWxlID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC5vcHBvbmVudCAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdzaG90LXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLnRleHRDb250ZW50ID0gJyonO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdCb2FyZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQoYm9hcmQpe1xuICAgIGxldCBpY29uQm9hcmQgPSBjb252ZXJ0UGxheWVyQm9hcmRUb0ljb25zKGJvYXJkKTtcbiAgICBmb3IgKGxldCByb3dJZHggaW4gaWNvbkJvYXJkKXtcbiAgICAgICAgbGV0IHJvdyA9IGljb25Cb2FyZFtyb3dJZHhdXG4gICAgICAgIGZvciAobGV0IGNvbElkeCBpbiByb3cpe1xuICAgICAgICAgICAgbGV0IHRpbGUgPSByb3dbY29sSWR4XVxuICAgICAgICAgICAgaWYgKHRpbGUgPT09ICdPJyl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQucGxheWVyIC5ib2FyZC10aWxlW2NsYXNzKj1cInhjb29yZHMtJHtjb2xJZHh9LXljb29yZHMtJHtyb3dJZHh9XCJdYClcbiAgICAgICAgICAgICAgICB0aWxlRG9tLmNsYXNzTGlzdC5hZGQoJ3NoaXAtdGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGVEb20udGV4dENvbnRlbnQgPSAnTyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbGUgPT09ICdYJykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdtaXNzZWQtdGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGVEb20udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbGUgPT09ICcqJykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLnBsYXllciAuYm9hcmQtdGlsZVtjbGFzcyo9XCJ4Y29vcmRzLSR7Y29sSWR4fS15Y29vcmRzLSR7cm93SWR4fVwiXWApXG4gICAgICAgICAgICAgICAgdGlsZURvbS5jbGFzc0xpc3QuYWRkKCdzaG90LXRpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlRG9tLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtdGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGVEb20udGV4dENvbnRlbnQgPSAnKic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGljb25Cb2FyZFxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKCl7XG4gICAgbGV0IGRvbUJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2JywnYm9hcmQnLCcnKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTE7aSsrKXtcbiAgICAgICAgbGV0IHJvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2JvYXJkLXJvdycsJycpO1xuICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTE7IGorKyl7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmIGogIT09IDApe1xuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBgJHtqLTF9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gMCAmJiBqID09PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gYCR7aS0xfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0aWxlID0gY3JlYXRlRWxlbWVudCgnZGl2JywnYm9hcmQtdGlsZScsIGNvb3Jkcyk7XG4gICAgICAgICAgICBpZiAoY29vcmRzID09PSAnJyAmJiBpICE9PSAwICYgaiAhPT0gMCl7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGB4Y29vcmRzLSR7ai0xfS15Y29vcmRzLSR7aS0xfV9nYW1ldGlsZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ3ZlcnRpY2FsLWxpbmUnLCcnKTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aWxlKVxuICAgICAgICAgICAgaWYgKGogIT09IDEwKXtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodmVydGljYWxMaW5lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIGxldCBob3Jpem9udGFsTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2hvcml6b250YWwtbGluZScsJycpO1xuICAgICAgICBpZiAoaSAhPT0gMTApe1xuICAgICAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExpbmUpO1xuICAgICAgICB9ICAgXG4gICAgfVxuICAgIHJldHVybiBkb21Cb2FyZFxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UGxheWVyQm9hcmRUb0ljb25zKGJvYXJkKXtcbiAgICBsZXQgaWNvbkJvYXJkID0gYm9hcmQudGlsZXMubWFwKCh0aWxlUm93KT0+e1xuICAgICAgICBsZXQgaWNvblRpbGVSb3cgPSB0aWxlUm93Lm1hcCgodGlsZSk9PntcbiAgICAgICAgICAgIHJldHVybiB0aWxlLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpY29uVGlsZVJvd1xuICAgIH0pXG4gICAgZm9yIChsZXQgc2hpcCBvZiBib2FyZC5zaGlwc0xpc3Qpe1xuICAgICAgICBmb3IgKGxldCBoaXRDb29yZHMgb2Ygc2hpcC5oaXRUaWxlcyl7XG4gICAgICAgICAgICBpY29uQm9hcmRbaGl0Q29vcmRzWzBdXVtoaXRDb29yZHNbMV1dID0gJyonO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpY29uQm9hcmRcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc2VzLCB0ZXh0KXtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGNsYXNzZXMubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgdHlwZW9mKGNsYXNzZXMpID09PSAnb2JqZWN0JyA/IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKSA6IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICB9XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQgPyB0ZXh0IDogJyc7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1Ecm9wZG93bihpZD0nJyxuYW1lPScnLHJlcXVpcmVkPWZhbHNlLCBvcHRpb25WYWx1ZXM9W10sIG9wdGlvblRleHRMaXN0PVtdKXtcbiAgICBsZXQgZm9ybUlucHV0RGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywnZm9ybS1pbnB1dCcsJycpO1xuICAgIGxldCBmb3JtTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsJycsbmFtZSk7XG4gICAgZm9ybUxhYmVsLmZvciA9IGlkO1xuICAgIGxldCBmb3JtRHJvcGRvd24gPSBjcmVhdGVFbGVtZW50KCdzZWxlY3QnLCcnLCcnKTtcbiAgICBmb3JtRHJvcGRvd24uaWQgPSBpZDtcbiAgICBmb3JtRHJvcGRvd24ucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICBpZiAob3B0aW9uVmFsdWVzLmxlbmd0aCA+IDAgJiYgb3B0aW9uVGV4dExpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgICAgb3B0aW9uVGV4dExpc3QgPSBvcHRpb25WYWx1ZXM7XG4gICAgfVxuICAgIGlmIChvcHRpb25WYWx1ZXMubGVuZ3RoICE9PSBvcHRpb25UZXh0TGlzdC5sZW5ndGgpe1xuICAgICAgICB0aHJvdyBFcnJvcignT3B0aW9ucyB2YWx1ZSBsaXN0IGFuZCBvcHRpb24gdGV4dCBsaXN0IG11c3QgYmUgdGhlIHNhbWUgc2l6ZSEnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgb3B0aW9uSWR4IGluIG9wdGlvblZhbHVlcyl7XG4gICAgICAgIGxldCBvcHRpb24gPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCcnLG9wdGlvblRleHRMaXN0W29wdGlvbklkeF0udG9TdHJpbmcoKSk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlc1tvcHRpb25JZHhdO1xuICAgICAgICBmb3JtRHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG4gICAgZm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1MYWJlbCk7XG4gICAgZm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1Ecm9wZG93bik7XG4gICAgcmV0dXJuIGZvcm1JbnB1dERpdjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJnYW1lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyLCBHYW1lIH0gZnJvbSAnLi9iYXR0bGVzaGlwLmpzJztcbmltcG9ydCB7IGRlc2lnbkJvYXJkcywgdXBkYXRlT3Bwb25lbnRCb2FyZCwgdXBkYXRlUGxheWVyQm9hcmQsIGRlc2lnblN0YXJ0U2NyZWVuIH0gZnJvbSAnLi9kb20uanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gc3RhcnRHYW1lKCl7XG4gICAgLypcbiAgICBjb25zdCBib2FyZE9uZSA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBib2FyZFR3byA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICBib2FyZE9uZS5wbGFjZVNoaXAobmV3IFNoaXAoMyksWzEsMV0sJ3JpZ2h0Jyk7XG4gICAgYm9hcmRPbmUucGxhY2VTaGlwKG5ldyBTaGlwKDIpLFs2LDVdLCd1cCcpO1xuICAgIGJvYXJkVHdvLnBsYWNlU2hpcChuZXcgU2hpcCgzKSxbOCw5XSwnbGVmdCcpO1xuICAgIGJvYXJkVHdvLnBsYWNlU2hpcChuZXcgU2hpcCgyKSxbMywzXSwnZG93bicpO1xuICAgIGJvYXJkT25lLnJlY2VpdmVBdHRhY2soWzMsM10pO1xuICAgIGJvYXJkT25lLnJlY2VpdmVBdHRhY2soWzEsMl0pO1xuICAgIGJvYXJkVHdvLnJlY2VpdmVBdHRhY2soWzEsMl0pO1xuICAgIGJvYXJkVHdvLnJlY2VpdmVBdHRhY2soWzMsM10pO1xuICAgIGxldCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGJvYXJkT25lKTtcbiAgICBsZXQgcGxheWVyVHdvID0gbmV3IFBsYXllcihib2FyZFR3bywgcGxheWVyT25lKTtcbiAgICBkZXNpZ25Cb2FyZHMocGxheWVyT25lKTtcbiAgICAqL1xuICAgIC8vIHdpbmRvdy5wbGF5ZXJUb01vdmUgPSBwbGF5ZXJPbmU7XG5cbiAgICAvLyB3aGlsZSAoIXBsYXllck9uZS5ib2FyZC5hbGxTaGlwc1N1bmsoKSB8fCAhcGxheWVyVHdvLmJvYXJkLmFsbFNoaXBzU3VuaygpKXtcblxuICAgIC8vIH1cbn1cblxuZGVzaWduU3RhcnRTY3JlZW4oKTtcblxuXG4vLyBzdGFydEdhbWUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==