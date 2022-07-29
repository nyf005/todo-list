/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/The Brooklyn Smooth Bold.ttf */ \"./src/assets/fonts/The Brooklyn Smooth Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/The Brooklyn Smooth.otf */ \"./src/assets/fonts/The Brooklyn Smooth.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n}\\n\\n@font-face {\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: \\\"The Brooklyn Smooth Regular\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  margin: 2rem;\\n  font-family: \\\"The Brooklyn Smooth Regular\\\";\\n  font-size: 16px;\\n  line-height: 1.3rem;\\n}\\n\\n#content {\\n  height: 90vh;\\n  width: 90vw;\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: 1fr 4fr;\\n  grid-template-rows: 1fr 10fr;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"aside main\\\";\\n}\\n\\nheader {\\n  grid-area: header;\\n  display: grid;\\n  place-content: center;\\n  text-transform: uppercase;\\n}\\n\\naside {\\n  grid-area: aside;\\n  display: flex;\\n  flex-direction: column;\\n  position: relative;\\n}\\n\\n#bottom-section {\\n  margin: 1rem 0;\\n}\\n\\n#bottom-section h3 {\\n  margin: 0.5rem 1rem;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n.project-name {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  width: 100%;\\n  height: 3rem;\\n  padding: 0 1rem;\\n  background-color: #fff;\\n  border: none;\\n}\\n\\n.dot {\\n  width: 1rem;\\n  aspect-ratio: 1/1;\\n  border: 5px solid #e00c52;\\n  border-radius: 50%;\\n}\\n\\nmain {\\n  grid-area: main;\\n  display: grid;\\n  grid-template-columns: 1.5fr 3fr;\\n  grid-template-rows: 1fr 9fr;\\n  grid-template-areas:\\n    \\\"project-title task-actions\\\"\\n    \\\"tasks task-details\\\";\\n\\n  position: relative;\\n}\\n\\n#project-title,\\n.task,\\n#task-actions {\\n  padding: 0.5rem 1rem;\\n}\\n\\n#project-title {\\n  grid-area: project-title;\\n  border-left: 0.5rem solid #e00c52;\\n  border-bottom: 1px solid #ccc;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n#task-actions {\\n  grid-area: task-actions;\\n  display: flex;\\n  align-items: center;\\n  justify-content: end;\\n  gap: 1rem;\\n}\\n\\n.actionBtn {\\n  aspect-ratio: 1/1;\\n  width: 2.5rem;\\n  border: none;\\n  border-radius: 50%;\\n  background-color: #eee;\\n\\n  display: grid;\\n  place-content: center;\\n}\\n\\n#tasks {\\n  grid-area: tasks;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #fff;\\n\\n  position: relative;\\n}\\n\\n.task {\\n  display: flex;\\n  align-items: center;\\n  align-items: space-between;\\n  gap: 1rem;\\n  min-height: 4rem;\\n  box-shadow: 0 0.1rem 0.1rem 0 rgba(233, 233, 233, 0.3);\\n  background-color: #e9e9e9;\\n  border: 1px solid #ccc;\\n}\\n\\n.task-infos {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.3rem;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n.subtitle {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n  font-family: \\\"The Brooklyn Smooth Regular\\\";\\n}\\n\\n.active {\\n  background-color: #0a8df9;\\n  color: #fff;\\n}\\n\\n.addBtn,\\n.actionBtn {\\n  background-color: #fff;\\n  box-shadow: 0 0.1rem rgba(10, 141, 249, 0.2);\\n  font-weight: bold;\\n  cursor: pointer;\\n  outline: none;\\n}\\n\\n.addBtn {\\n  position: absolute;\\n  bottom: 0.5rem;\\n  align-self: center;\\n  width: 8rem;\\n  height: 2.5rem;\\n  border: none;\\n  border-radius: 25px;\\n}\\n\\n.addBtn:hover,\\n.actionBtn:hover {\\n  background-color: #0a8df9;\\n  box-shadow: 0 0.1rem #0a8df966;\\n  color: #fff;\\n}\\n\\n.actionBtn:hover img {\\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(36deg) brightness(103%)\\n    contrast(103%);\\n}\\n\\n.actionBtn:first-child:hover {\\n  background-color: red;\\n}\\n\\n#task-details {\\n  grid-area: task-details;\\n  padding: 2rem 1rem;\\n  display: grid;\\n  grid-template-columns: 3rem 1fr;\\n  grid-template-rows: auto auto 1fr;\\n  grid-template-areas:\\n    \\\"checkmark title\\\"\\n    \\\". description\\\"\\n    \\\". items\\\";\\n  gap: 1rem 0;\\n}\\n\\n#checkmark {\\n  grid-area: checkmark;\\n  display: grid;\\n  place-content: center;\\n}\\n\\n#task-title {\\n  grid-area: title;\\n  display: flex;\\n  flex-direction: column;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n#details-due-date {\\n  display: flex;\\n  align-items: flex-end;\\n\\n  gap: 0.3rem;\\n}\\n\\n#task-description {\\n  grid-area: description;\\n  padding: 0.5rem 0;\\n  text-align: justify;\\n}\\n\\n#task-items {\\n  grid-area: items;\\n}\\n\\n#addItemBtn {\\n  position: absolute;\\n  bottom: 1rem;\\n  right: 1rem;\\n}\\n\\n.item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  margin-bottom: 1rem;\\n}\\n\\n.item-content {\\n  display: flex;\\n  align-items: baseline;\\n  gap: 0.5rem;\\n}\\n\\n.item-actions {\\n  display: flex;\\n  gap: 0.25rem;\\n}\\n\\n#task-items .actionBtn {\\n  width: 1.5rem;\\n  background-color: transparent;\\n  box-shadow: none;\\n  cursor: pointer;\\n  outline: none;\\n}\\n\\n#task-items .actionBtn:hover img {\\n  filter: invert(56%) sepia(96%) saturate(4219%) hue-rotate(188deg)\\n    brightness(97%) contrast(105%);\\n}\\n\\n#task-items .actionBtn:last-child:hover img {\\n  filter: invert(20%) sepia(44%) saturate(4278%) hue-rotate(346deg)\\n    brightness(116%) contrast(144%);\\n}\\n\\nheader,\\naside,\\n#tasks,\\n#task-details,\\n#task-actions {\\n  border: 1px solid #ccc;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/project_button.js":
/*!******************************************!*\
  !*** ./src/components/project_button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectButton)\n/* harmony export */ });\nfunction ProjectButton(project) {\n  const button = document.createElement(\"button\");\n  button.className = \"project-name\";\n  button.setAttribute(\"data\", project.name);\n\n  const dot = document.createElement(\"div\");\n  dot.className = \"dot\";\n\n  const span = document.createElement(\"span\");\n  span.textContent = project.name;\n\n  button.append(dot, span);\n\n  return button;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/project_button.js?");

/***/ }),

/***/ "./src/components/task-details.js":
/*!****************************************!*\
  !*** ./src/components/task-details.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskDetails)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/clock.svg */ \"./src/assets/icons/clock.svg\");\n\n\nfunction createTaskDetails(task) {\n  const checkmark = document.createElement(\"div\");\n  checkmark.setAttribute(\"id\", \"checkmark\");\n\n  const detailsStatusCheckbox = document.createElement(\"input\");\n  detailsStatusCheckbox.setAttribute(\"type\", \"checkbox\");\n  detailsStatusCheckbox.setAttribute(\"id\", \"task-status\");\n\n  const detailsStatusLabel = document.createElement(\"label\");\n  detailsStatusLabel.setAttribute(\"for\", \"task-status\");\n\n  detailsStatusCheckbox.checked = task.completed;\n\n  checkmark.append(detailsStatusCheckbox, detailsStatusLabel);\n\n  const taskTitle = document.createElement(\"div\");\n  taskTitle.setAttribute(\"id\", \"task-title\");\n\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = task.title;\n\n  const subtitle = document.createElement(\"div\");\n  subtitle.classList.add(\"subtitle\");\n\n  const detailsDueDate = document.createElement(\"div\");\n  detailsDueDate.setAttribute(\"id\", \"details-due-date\");\n\n  const clockIcon = document.createElement(\"img\");\n  clockIcon.src = _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_0__;\n  clockIcon.setAttribute(\"alt\", \"clock\");\n\n  const date = document.createElement(\"p\");\n  date.textContent = task.dueDate;\n\n  detailsDueDate.append(clockIcon, date);\n\n  const priority = document.createElement(\"p\");\n  priority.setAttribute(\"id\", \"priority\");\n  priority.textContent = task.priority;\n\n  subtitle.append(detailsDueDate, priority);\n\n  taskTitle.append(h2, subtitle);\n\n  const taskDescription = document.createElement(\"div\");\n  taskDescription.setAttribute(\"id\", \"task-description\");\n  taskDescription.textContent = task.description;\n\n  const taskItems = document.createElement(\"div\");\n  taskItems.setAttribute(\"id\", \"task-items\");\n\n  return { checkmark, taskTitle, taskDescription, taskItems };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/task-details.js?");

/***/ }),

/***/ "./src/components/task-item.js":
/*!*************************************!*\
  !*** ./src/components/task-item.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskItem)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_create_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/create.svg */ \"./src/assets/icons/create.svg\");\n/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/trash.svg */ \"./src/assets/icons/trash.svg\");\n\n\n\nfunction TaskItem(taskItem) {\n  const item = document.createElement(\"div\");\n  item.className = \"item\";\n\n  const itemContent = document.createElement(\"div\");\n  itemContent.className = \"item-content\";\n\n  const checkbox = document.createElement(\"input\");\n  checkbox.setAttribute(\"type\", \"checkbox\");\n  // checkbox.setAttribute(\"id\", taskItem);\n\n  const label = document.createElement(\"label\");\n  // label.setAttribute(\"for\", taskItem);\n  label.textContent = taskItem.value;\n\n  itemContent.append(checkbox, label);\n\n  const itemActions = document.createElement(\"div\");\n  itemActions.className = \"item-actions\";\n\n  const editBtn = document.createElement(\"button\");\n  editBtn.className = \"actionBtn\";\n  const createIcon = document.createElement(\"img\");\n  createIcon.setAttribute(\"src\", _assets_icons_create_svg__WEBPACK_IMPORTED_MODULE_0__);\n  editBtn.appendChild(createIcon);\n\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.className = \"actionBtn\";\n  const trashIcon = document.createElement(\"img\");\n  trashIcon.setAttribute(\"src\", _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__);\n  deleteBtn.appendChild(trashIcon);\n\n  itemActions.append(editBtn, deleteBtn);\n\n  item.append(itemContent, itemActions);\n\n  return item;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/task-item.js?");

/***/ }),

/***/ "./src/components/task_card.js":
/*!*************************************!*\
  !*** ./src/components/task_card.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCard)\n/* harmony export */ });\nfunction TaskCard(task) {\n  const card = document.createElement(\"div\");\n  card.className = \"task\";\n  card.setAttribute(\"data\", task.title);\n\n  const checkbox = document.createElement(\"div\");\n  checkbox.className = \"checkbox\";\n\n  const checkboxInput = document.createElement(\"input\");\n  checkboxInput.setAttribute(\"type\", \"checkbox\");\n  checkboxInput.setAttribute(\"id\", task.title);\n  checkboxInput.checked = task.completed;\n\n  const checkboxLabel = document.createElement(\"label\");\n  checkboxLabel.setAttribute(\"for\", task.title);\n\n  checkbox.append(checkboxInput, checkboxLabel);\n\n  const taskInfos = document.createElement(\"div\");\n  taskInfos.className = \"task-infos\";\n\n  const h4 = document.createElement(\"h4\");\n  h4.textContent = task.title;\n\n  const additionalInfos = document.createElement(\"div\");\n  additionalInfos.className = \"subtitle\";\n\n  const dueDate = document.createElement(\"p\");\n  dueDate.className = \"task-due-date\";\n  dueDate.textContent = task.dueDate;\n\n  const priority = document.createElement(\"p\");\n  priority.className = \"priority\";\n  priority.textContent = task.priority;\n\n  additionalInfos.append(dueDate, priority);\n  taskInfos.append(h4, additionalInfos);\n\n  card.append(checkbox, taskInfos);\n\n  return card;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/task_card.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\n\n\n\nconst DOM = (0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst projects = [\n  {\n    name: \"AdWord\",\n  },\n];\n\nconst tasks = [\n  {\n    title: \"Create AdWords new campain\",\n    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, officia iste\n    doloribus adipisci odit nulla expedita saepe cupiditate praesentium ipsum, eos\n    et corporis in enim tenetur aut at. Laborum esse facilis ex similique suscipit\n    nulla optio blanditiis deserunt, molestias earum? `,\n    dueDate: \"10/09/2022\",\n    priority: \"high\",\n    completed: true,\n    projectName: \"AdWord\",\n  },\n  {\n    title: \"Create Facebook Ads\",\n    description: `Eligendi ad recusandae illum\n    blanditiis, rem animi aliquid laborum quaerat quibusdam pariatur inventore!\n    Quisquam consequuntur animi ratione sapiente repellat at unde quibusdam\n    mollitia, obcaecati ea iure iste ut molestias nihil omnis possimus eveniet hic\n    alias architecto, tenetur beatae quam illum. `,\n    dueDate: \"12/10/2022\",\n    priority: \"moderate\",\n    completed: false,\n    projectName: \"AdWord\",\n  },\n  {\n    title: \"Create Instagram Ads\",\n    description: `Similique temporibus quibusdam qui\n    mollitia ipsum necessitatibus asperiores voluptatem atque accusantium ducimus\n    repudiandae incidunt laborum voluptatum facere sunt nemo quidem magni ipsam\n    maxime, error quaerat cumque laboriosam. Natus unde illo, fugit doloremque\n    corporis voluptatum minima porro numquam repellat excepturi omnis! `,\n    dueDate: \"11/11/2022\",\n    priority: \"normal\",\n    completed: false,\n    projectName: \"Index\",\n  },\n  {\n    title: \"Create Tiktok Ads\",\n    description: `In, esse eum\n    corporis ipsam veniam amet magnam sapiente. Iste sequi voluptas in beatae fugiat\n    distinctio vero! Illum expedita voluptatum fugiat labore quidem saepe odio\n    molestiae nisi. Velit dolorum iusto nulla rem corporis aperiam saepe architecto\n    blanditiis debitis fuga? Magni.`,\n    dueDate: \"12/01/2023\",\n    priority: \"low\",\n    completed: false,\n    projectName: \"Index\",\n  },\n];\n\n(0,_initialize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DOM, projects, tasks);\n\n// Add click event to projectBtns\nDOM.getProjectsBtns().forEach((projectBtn) => {\n  projectBtn.addEventListener(\"click\", () => {\n    DOM.setActiveProject(projectBtn);\n\n    // Load all tasks related to default project\n    tasks.forEach((task) => {\n      if (task.projectName == projectBtn.getAttribute(\"data\")) {\n        let taskCard = DOM.createTaskCard(task);\n\n        // Add click event to individual tasks\n        taskCard.addEventListener(\"click\", () => {\n          DOM.setActiveTask(taskCard);\n          DOM.showTaskDetails(task);\n        });\n      }\n    });\n  });\n});\n\n// .addEventListener(\"click\", (taskCard) => {\n//   DOM.setActiveTask(taskCard);\n//   DOM.showTaskDetails(taskCard.getAttribute(\"data\"));\n//   // DOM.setTaskActionBtnIndex(e.target[\"data\"]);\n// });\n\n// Add selected project tasks to DOM\n// DOM.getProjectsBtns().forEach((projectBtn, index) => {\n//   projectBtn.addEventListener(\"click\", () => {\n//     DOM.setActiveProject(projectBtn);\n\n//     tasks.forEach((newTask) => {\n//       if (newTask.projectName == projectBtn.outerText) {\n//         DOM.createTaskCard(newTask);\n//       }\n//     });\n\n//     DOM.getTaskCards().forEach((taskCard, index) => {\n//       taskCard.addEventListener(\"click\", () => {\n//         DOM.setActiveTask(taskCard);\n//         DOM.showTaskDetails(tasks[index]);\n//         DOM.setTaskActionBtnIndex(index);\n//       });\n//     });\n//   });\n// });\n\n// const addProjectBtn = document.getElementById(\"addProject\");\n// addProjectBtn.addEventListener(\"click\", () => {\n//   let newProject = {\n//     name: \"New Project\",\n//   };\n//   projects.push(newProject);\n\n//   // Add new project to DOM\n//   DOM.createProjectButton(newProject);\n\n//   DOM.getProjectsBtns().forEach((projectBtn, index) => {\n//     projectBtn.addEventListener(\"click\", () => {\n//       DOM.setActiveProject(projectBtn);\n//       tasks.forEach((newTask) => {\n//         if (newTask.projectName == projectBtn.outerText) {\n//           DOM.createTaskCard(newTask);\n//         }\n//       });\n//     });\n//   });\n\n//   DOM.getTaskCards().forEach((taskCard, index) => {\n//     taskCard.addEventListener(\"click\", () => {\n//       DOM.setActiveTask(taskCard);\n//       DOM.showTaskDetails(tasks[index]);\n//       DOM.setTaskActionBtnIndex(index);\n//     });\n//   });\n// });\n\n// const addTaskBtn = document.getElementById(\"addTaskBtn\");\n// addTaskBtn.addEventListener(\"click\", () => {\n//   let newTask = {\n//     title: \"Create Tiktok Ads\",\n//     description: `In, esse eum\n//     corporis ipsam veniam amet magnam sapiente. Iste sequi voluptas in beatae fugiat\n//     distinctio vero! Illum expedita voluptatum fugiat labore quidem saepe odio\n//     molestiae nisi. Velit dolorum iusto nulla rem corporis aperiam saepe architecto\n//     blanditiis debitis fuga? Magni.`,\n//     dueDate: \"12/01/2023\",\n//     priority: \"low\",\n//     completed: false,\n//   };\n//   tasks.push(newTask);\n//   DOM.createTaskCard(newTask);\n\n//   DOM.getTaskCards().forEach((taskCard, index) => {\n//     taskCard.addEventListener(\"click\", () => {\n//       DOM.setActiveTask(taskCard);\n//       DOM.showTaskDetails(tasks[index]);\n//       DOM.setTaskActionBtn(index);\n//     });\n//   });\n// });\n\n// DOM.getTaskCards().forEach((taskCard, index) => {\n//   taskCard.addEventListener(\"click\", () => {\n//     DOM.setActiveTask(taskCard);\n//     DOM.showTaskDetails(tasks[index]);\n//     DOM.setTaskActionBtnIndex(index);\n//   });\n// });\n\n// // Should be done when selecting a task\n// // DOM.setActiveTask(DOM.getTaskCards()[0]);\n// // DOM.showTaskDetails(tasks[0]);\n// // DOM.setTaskActionBtnIndex(0);\n\n// const editTaskBtn = document.getElementById(\"editTaskBtn\");\n// const addItemBtn = document.getElementById(\"addItemBtn\");\n\n// addItemBtn.addEventListener(\"click\", () => {\n//   DOM.createTaskItem({\n//     value: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,\n//   });\n// });\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initializeTodo = (DOM, projects, tasks) => {\n  const projectBtns = DOM.getProjectsBtns();\n\n  // Set default Selected Project\n  DOM.setActiveProject(projectBtns[0]);\n\n  // Load all tasks related to default project\n  tasks.forEach((task) => {\n    if (task.projectName == \"Index\") {\n      // Add click event to individual tasks\n      let taskCard = DOM.createTaskCard(task);\n\n      taskCard.addEventListener(\"click\", () => {\n        DOM.setActiveTask(taskCard);\n        DOM.showTaskDetails(task);\n      });\n    }\n  });\n\n  // Load all projects\n  projects.forEach((project) => {\n    DOM.createProjectButton(project);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeTodo);\n\n\n//# sourceURL=webpack://todo-list/./src/initialize.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_project_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/project_button */ \"./src/components/project_button.js\");\n/* harmony import */ var _components_task_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/task_card */ \"./src/components/task_card.js\");\n/* harmony import */ var _components_task_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/task-item */ \"./src/components/task-item.js\");\n/* harmony import */ var _components_task_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task-details */ \"./src/components/task-details.js\");\n\n\n\n\n\nconst DOMTools = () => {\n  const projectsDiv = document.getElementById(\"projects\");\n  const projectName = document.querySelector(\"#project-title h3\");\n\n  const taskCardsDiv = document.getElementById(\"task-cards\");\n\n  const taskDetailsDiv = document.getElementById(\"task-details\");\n  const checkmark = document.getElementById(\"checkmark\");\n  const taskTitleDiv = document.getElementById(\"task-title\");\n  const taskDescriptionDiv = document.getElementById(\"task-description\");\n  const taskItemsDiv = document.getElementById(\"task-items\");\n\n  const deleteTaskBtn = document.getElementById(\"deleteTaskBtn\");\n  const editTaskBtn = document.getElementById(\"editTaskBtn\");\n  const addItemBtn = document.getElementById(\"addItemBtn\");\n\n  const createProjectButton = (project) => {\n    let projectBtn = (0,_components_project_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project);\n    projectsDiv.append(projectBtn);\n    return projectBtn;\n  };\n\n  const createTaskCard = (task) => {\n    let taskCard = (0,_components_task_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task);\n    taskCardsDiv.appendChild(taskCard);\n    return taskCard;\n  };\n\n  const showTaskDetails = (task) => {\n    const { checkmark, taskTitle, taskDescription, taskItems } =\n      (0,_components_task_details__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(task);\n\n    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);\n  };\n\n  const createTaskItem = (taskItem) => {\n    const item = (0,_components_task_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskItem);\n    taskItemsDiv.appendChild(item);\n    taskDetailsDiv.appendChild(taskItemsDiv);\n  };\n\n  const setTaskActionBtnIndex = (index) => {\n    deleteTaskBtn.setAttribute(\"data-index\", index);\n    editTaskBtn.setAttribute(\"data-index\", index);\n    addItemBtn.setAttribute(\"data-index\", index);\n  };\n\n  const setTasksHeader = (name) => {\n    projectName.textContent = `${name} Tasks`;\n  };\n\n  const setActiveProject = (selectedProject) => {\n    getProjectsBtns().forEach((projectBtn) => {\n      projectBtn.classList.remove(\"active\");\n    });\n\n    selectedProject.classList.add(\"active\");\n    setTasksHeader(\n      selectedProject.getAttribute(\"data\") ?? selectedProject.outerText\n    );\n\n    taskCardsDiv.innerHTML = \"\";\n    taskDetailsDiv.innerHTML = \"\";\n  };\n\n  const setActiveTask = (selectedTask) => {\n    getTaskCards().forEach((taskCard) => {\n      taskCard.classList.remove(\"active\");\n    });\n\n    selectedTask.classList.add(\"active\");\n    taskDetailsDiv.innerHTML = \"\";\n  };\n\n  const getProjectsBtns = () => {\n    return document.querySelectorAll(\".project-name\");\n  };\n\n  const getTaskCards = () => {\n    return document.querySelectorAll(\".task\");\n  };\n\n  const _emptyTaskDetails = () => {\n    taskDetailsDiv.remove(checkmark);\n  };\n\n  return {\n    createProjectButton,\n    createTaskCard,\n    createTaskItem,\n    getProjectsBtns,\n    getTaskCards,\n    setTasksHeader,\n    setActiveProject,\n    setActiveTask,\n    setTaskActionBtnIndex,\n    showTaskDetails,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMTools);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/assets/fonts/The Brooklyn Smooth Bold.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/The Brooklyn Smooth Bold.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92e22018d2638f164dc3.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/fonts/The_Brooklyn_Smooth_Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/The Brooklyn Smooth.otf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/The Brooklyn Smooth.otf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21a47448a89dc92ba3bd.otf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/fonts/The_Brooklyn_Smooth.otf?");

/***/ }),

/***/ "./src/assets/icons/clock.svg":
/*!************************************!*\
  !*** ./src/assets/icons/clock.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ea6384a6e26a7565bdc.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/clock.svg?");

/***/ }),

/***/ "./src/assets/icons/create.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/create.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc734d0342b2910622e9.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/create.svg?");

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"16047d16d3f9d9c36b55.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/trash.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"bundle": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;