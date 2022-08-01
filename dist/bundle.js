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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/The Brooklyn Smooth Bold.ttf */ \"./src/assets/fonts/The Brooklyn Smooth Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/The Brooklyn Smooth.otf */ \"./src/assets/fonts/The Brooklyn Smooth.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: \\\"The Brooklyn Smooth Regular\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  margin: 2rem;\\n  font-family: \\\"The Brooklyn Smooth Regular\\\";\\n  font-size: 16px;\\n  line-height: 1.3rem;\\n}\\n\\n#content {\\n  height: 90vh;\\n  width: 90vw;\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: 1fr 4fr;\\n  grid-template-rows: 1fr 10fr;\\n  grid-template-areas:\\n    \\\"header header\\\"\\n    \\\"aside main\\\";\\n}\\n\\nheader {\\n  grid-area: header;\\n  display: grid;\\n  place-content: center;\\n  text-transform: uppercase;\\n}\\n\\naside {\\n  grid-area: aside;\\n  display: flex;\\n  flex-direction: column;\\n  position: relative;\\n}\\n\\n#bottom-section {\\n  margin: 1rem 0;\\n}\\n\\n#bottom-section h3 {\\n  margin: 0.5rem 1rem;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n#addProject,\\n#bottom-section form {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.2rem;\\n  width: 100%;\\n  height: 2rem;\\n  padding: 0 1rem;\\n  background-color: #fff;\\n  border: none;\\n}\\n\\n#addProject:hover {\\n  background-color: #eee;\\n}\\n\\n.project-name {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n  width: 100%;\\n  height: 3rem;\\n  padding: 0.5rem 2.5rem;\\n  background-color: #fff;\\n  border: none;\\n}\\n\\n.dot {\\n  width: 0.75rem;\\n  aspect-ratio: 1/1;\\n  border: 4px solid;\\n  /* border-color: #e00c52; */\\n  border-radius: 50%;\\n}\\n\\nmain {\\n  grid-area: main;\\n  display: grid;\\n  grid-template-columns: 1.5fr 3fr;\\n  grid-template-rows: 1fr 9fr;\\n  grid-template-areas:\\n    \\\"project-title task-actions\\\"\\n    \\\"tasks task-details\\\";\\n\\n  position: relative;\\n}\\n\\n#project-title,\\n.task,\\n#task-actions {\\n  padding: 0.5rem 1rem;\\n}\\n\\n#project-title {\\n  grid-area: project-title;\\n  border-left: 0.5rem solid;\\n  border-bottom: 1px solid #ccc;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n#task-actions {\\n  grid-area: task-actions;\\n  display: flex;\\n  align-items: center;\\n  justify-content: end;\\n  gap: 1rem;\\n}\\n\\n#tasks {\\n  grid-area: tasks;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #fff;\\n\\n  position: relative;\\n}\\n\\n.task {\\n  display: flex;\\n  align-items: center;\\n  align-items: space-between;\\n  gap: 1rem;\\n  min-height: 4rem;\\n  box-shadow: 0 0.1rem 0.1rem 0 rgba(233, 233, 233, 0.3);\\n  background-color: #e9e9e9;\\n  border: 1px solid #ccc;\\n}\\n\\n.task-infos {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.3rem;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n.subtitle {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n  font-family: \\\"The Brooklyn Smooth Regular\\\";\\n}\\n\\n.active {\\n  background-color: #0a8df9;\\n  color: #fff;\\n}\\n\\n.actionBtn {\\n  aspect-ratio: 1/1;\\n  width: 2.5rem;\\n  border: none;\\n  border-radius: 50%;\\n  background-color: #eee;\\n\\n  display: grid;\\n  place-content: center;\\n}\\n\\n.addBtn,\\n.actionBtn {\\n  background-color: #fff;\\n  box-shadow: 0 0.1rem rgba(10, 141, 249, 0.2);\\n  border: 0.5px solid #ccc;\\n  font-weight: bold;\\n  cursor: pointer;\\n  outline: none;\\n}\\n\\n.addBtn {\\n  position: absolute;\\n  bottom: 0.5rem;\\n  align-self: center;\\n  width: 8rem;\\n  height: 2.5rem;\\n  border-radius: 25px;\\n}\\n\\n.addBtn:hover,\\n.actionBtn:hover {\\n  background-color: #000;\\n  color: #fff;\\n}\\n\\n.actionBtn:hover img {\\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(36deg) brightness(103%)\\n    contrast(103%);\\n}\\n\\n.actionBtn:nth-child(2):hover {\\n  background-color: red;\\n}\\n\\n#project-form {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\ninput,\\nselect,\\ntextarea {\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n  font-size: 1rem;\\n  background-color: #eee;\\n  border: 1px solid #ccc;\\n  padding: 0.2rem 0.5rem;\\n}\\n\\ninput,\\nselect {\\n  height: 2rem;\\n}\\n\\ninput[type=\\\"date\\\"] {\\n  padding-left: 0.25rem;\\n}\\n\\n#project-form input {\\n  width: 75%;\\n}\\n\\n#project-form input:focus,\\n.form-element input:focus,\\n.form-element select:focus,\\n.form-element textarea:focus {\\n  outline: none;\\n  border-bottom: 2px solid #000;\\n}\\n\\n#project-form-actions {\\n  display: flex;\\n  gap: 0.2rem;\\n}\\n\\n#project-form-actions .actionBtn {\\n  width: 1.5rem;\\n  border: 1.5px solid green;\\n}\\n\\n#project-form-actions .actionBtn:first-child:hover {\\n  background-color: green;\\n}\\n\\n#project-form-actions .actionBtn:nth-child(2) {\\n  border: 1.5px solid red;\\n}\\n\\n#form-modal {\\n  display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 1; /* Sit on top */\\n  padding-top: 15vh;\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /* Enable scroll if needed */\\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\\n}\\n\\n#task-form {\\n  width: 25rem;\\n  margin: auto;\\n  background-color: #fff;\\n  padding: 1rem;\\n  border: 1px solid #ccc;\\n  display: grid;\\n  place-content: center;\\n  gap: 0.5rem;\\n}\\n\\n#task-form h3 {\\n  text-align: center;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n  margin-bottom: 1rem;\\n}\\n\\n.form-element {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\n\\n.form-element label {\\n  width: 5rem;\\n  text-align: right;\\n}\\n\\n.form-element:nth-child(4) label {\\n  align-self: flex-start;\\n  padding-top: 0.4rem;\\n}\\n\\n.form-element input,\\n.form-element select,\\n.form-element textarea {\\n  width: 15rem;\\n}\\n\\n.form-element select {\\n  padding-left: 0.25rem;\\n  padding-right: 0.25rem;\\n}\\n\\n.form-element textarea {\\n  resize: none;\\n  padding: 0.5rem;\\n}\\n\\n#task-form-actions {\\n  margin-left: 5.5rem;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n#task-form-actions button {\\n  width: 7.25rem;\\n  height: 2rem;\\n  padding: 0.25rem 1rem;\\n  background-color: #fff;\\n  outline: none;\\n  border: 1.5px solid;\\n  border-radius: 0.3rem;\\n}\\n\\n#task-form-actions button:first-child {\\n  border-color: green;\\n}\\n\\n#task-form-actions button:last-child {\\n  border-color: red;\\n}\\n\\n#task-form-actions button:hover {\\n  color: #fff;\\n}\\n\\n#task-form-actions button:first-child:hover {\\n  background-color: green;\\n}\\n\\n#task-form-actions button:last-child:hover {\\n  background-color: red;\\n}\\n\\n#task-details {\\n  grid-area: task-details;\\n  padding: 2rem 1rem;\\n  display: grid;\\n  grid-template-columns: 3rem 1fr;\\n  grid-template-rows: auto auto 1fr;\\n  grid-template-areas:\\n    \\\"checkmark title\\\"\\n    \\\". description\\\"\\n    \\\". items\\\";\\n  gap: 1rem 0;\\n}\\n\\n#checkmark {\\n  grid-area: checkmark;\\n  display: grid;\\n  place-content: center;\\n}\\n\\n#task-title {\\n  grid-area: title;\\n  display: flex;\\n  flex-direction: column;\\n  font-family: \\\"The Brooklyn Smooth Bold\\\";\\n}\\n\\n#details-due-date {\\n  display: flex;\\n  align-items: flex-end;\\n\\n  gap: 0.3rem;\\n}\\n\\n#task-description {\\n  grid-area: description;\\n  padding: 0.5rem 0;\\n  text-align: justify;\\n}\\n\\n#task-items {\\n  grid-area: items;\\n}\\n\\n#addItemBtn {\\n  position: absolute;\\n  bottom: 1rem;\\n  right: 1rem;\\n}\\n\\n.item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  margin-bottom: 1rem;\\n}\\n\\n.item-content {\\n  display: flex;\\n  align-items: baseline;\\n  gap: 0.5rem;\\n}\\n\\n.item-actions {\\n  display: flex;\\n  gap: 0.25rem;\\n}\\n\\n#task-items .actionBtn {\\n  width: 1.5rem;\\n  background-color: transparent;\\n  box-shadow: none;\\n  cursor: pointer;\\n  outline: none;\\n}\\n\\n#task-items .actionBtn:hover img {\\n  filter: invert(56%) sepia(96%) saturate(4219%) hue-rotate(188deg)\\n    brightness(97%) contrast(105%);\\n}\\n\\n#task-items .actionBtn:last-child:hover img {\\n  filter: invert(20%) sepia(44%) saturate(4278%) hue-rotate(346deg)\\n    brightness(116%) contrast(144%);\\n}\\n\\nheader,\\naside,\\n#tasks,\\n#task-details,\\n#task-actions {\\n  border: 1px solid #ccc;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/assets/icons/check.svg":
/*!************************************!*\
  !*** ./src/assets/icons/check.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/fd81acef79f6448864ef1fc09081a55c.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/check.svg?");

/***/ }),

/***/ "./src/assets/icons/checkbox-checked.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/checkbox-checked.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/1354742bbdb1d8d90763d51083f49ac1.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/checkbox-checked.svg?");

/***/ }),

/***/ "./src/assets/icons/clock.svg":
/*!************************************!*\
  !*** ./src/assets/icons/clock.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/4ea6384a6e26a7565bdc656164efa5dd.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/clock.svg?");

/***/ }),

/***/ "./src/assets/icons/create.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/create.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/dc734d0342b2910622e9c0d0b5135b35.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/create.svg?");

/***/ }),

/***/ "./src/assets/icons/cross.svg":
/*!************************************!*\
  !*** ./src/assets/icons/cross.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/8481daf585af6dffbafd3e1a608afc04.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/cross.svg?");

/***/ }),

/***/ "./src/assets/icons/pen.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/pen.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/d5705c915d6a8fdd1921885ee642e6ac.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/pen.svg?");

/***/ }),

/***/ "./src/assets/icons/plus.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/plus.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/16f96a4f5695979b551d059238a9e263.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/plus.svg?");

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/images/16047d16d3f9d9c36b5561f0e112e031.svg\");\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/trash.svg?");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_dom_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom_ui */ \"./src/modules/dom_ui.js\");\n/* harmony import */ var _modules_project_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project_list */ \"./src/modules/project_list.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\n\n\n\n\n\nconst Controller = (() => {\n  const projectsList = (0,_modules_project_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  const testProject = (0,_modules_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"Adwords\");\n  projectsList.add(testProject);\n\n  (0,_initialize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(projectsList);\n  const DOM = (0,_modules_dom_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const submitProjectForm = (e) => {\n    e.preventDefault();\n    const newProject = (0,_modules_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target.childNodes[0].value);\n    projectsList.add(newProject);\n    DOM.createProjectButton(newProject);\n    DOM.hideProjectForm();\n  };\n\n  return { submitProjectForm };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_dom_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom_ui */ \"./src/modules/dom_ui.js\");\n\n\nconst initializeTodo = (projectList) => {\n  const DOM = (0,_modules_dom_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const projectBtns = DOM.getProjectsBtns();\n  // Set default Selected Project\n  DOM.setActiveProject(projectBtns[0]);\n\n  const defaultProjects = projectList\n    .getAll()\n    .find((project) => project.name == \"Inbox\");\n\n  if (defaultProjects) {\n    // Load all tasks related to default project\n    defaultProjects.tasks.forEach((task) => {\n      // Add click event to individual tasks\n      DOM.createTaskCard(task);\n    });\n  }\n\n  DOM.createAddProjectButton();\n  DOM.displayDefaultProjectsBtns(projectList);\n  DOM.displayTaskForm(projectList.getAll());\n\n  // Load all projects\n  projectList.getAll().forEach((project) => {\n    if (\n      project.name != \"Inbox\" ||\n      project.name != \"Today\" ||\n      project.name != \"Upcoming\"\n    ) {\n      DOM.createProjectButton(project);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeTodo);\n\n\n//# sourceURL=webpack://todo-list/./src/initialize.js?");

/***/ }),

/***/ "./src/modules/dom_ui.js":
/*!*******************************!*\
  !*** ./src/modules/dom_ui.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _ui_components_project_name_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui_components/project_name_button */ \"./src/ui_components/project_name_button.js\");\n/* harmony import */ var _ui_components_task_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui_components/task_card */ \"./src/ui_components/task_card.js\");\n/* harmony import */ var _ui_components_task_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui_components/task-item */ \"./src/ui_components/task-item.js\");\n/* harmony import */ var _ui_components_task_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui_components/task-details */ \"./src/ui_components/task-details.js\");\n/* harmony import */ var _ui_components_project_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui_components/project_form */ \"./src/ui_components/project_form.js\");\n/* harmony import */ var _ui_components_new_project_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui_components/new_project_button */ \"./src/ui_components/new_project_button.js\");\n/* harmony import */ var _ui_components_task_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui_components/task_form */ \"./src/ui_components/task_form.js\");\n\n\n\n\n\n\n\n\n\nconst DomUI = () => {\n  const projectsDiv = document.getElementById(\"projects\");\n  const projectTitle = document.getElementById(\"project-title\");\n  const projectName = document.querySelector(\"#project-title h3\");\n\n  const taskCardsDiv = document.getElementById(\"task-cards\");\n  const addTaskBtn = document.getElementById(\"addTaskBtn\");\n  const formModal = document.getElementById(\"form-modal\");\n\n  const taskActionsDiv = document.getElementById(\"task-actions\");\n  const taskDetailsDiv = document.getElementById(\"task-details\");\n  const taskItemsDiv = document.getElementById(\"task-items\");\n\n  const deleteTaskBtn = document.getElementById(\"deleteTaskBtn\");\n  const editTaskBtn = document.getElementById(\"editTaskBtn\");\n  const addItemBtn = document.getElementById(\"addItemBtn\");\n\n  const createAddProjectButton = () => {\n    projectsDiv.parentNode.insertBefore((0,_ui_components_new_project_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), projectsDiv);\n    const addProjectBtn = document.getElementById(\"addProject\");\n\n    addProjectBtn.addEventListener(\"click\", () => {\n      const projectForm = (0,_ui_components_project_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n      displayProjectForm();\n\n      projectForm.addEventListener(\"submit\", (e) =>\n        _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submitProjectForm(e)\n      );\n    });\n  };\n\n  const createProjectButton = (project) => {\n    let projectBtn = (0,_ui_components_project_name_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project.getProjectName());\n\n    // Add click event to individual projects\n    projectBtn.addEventListener(\"click\", () => {\n      setActiveProject(projectBtn);\n      showProjectTaskCards(project);\n    });\n\n    projectsDiv.append(projectBtn);\n    return projectBtn;\n  };\n\n  const showProjectTaskCards = (project) => {\n    const tasks = project.getTasks();\n    if (tasks) {\n      tasks.forEach((task) => {\n        const taskCard = createTaskCard(task);\n        taskCardsDiv.append(taskCard);\n      });\n    }\n  };\n\n  const displayProjectForm = () => {\n    const addProjectBtn = document.getElementById(\"addProject\");\n    const projectForm = (0,_ui_components_project_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    addProjectBtn.parentNode.replaceChild(projectForm, addProjectBtn);\n\n    projectForm.addEventListener(\"submit\", (e) =>\n      _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submitProjectForm(e)\n    );\n\n    const cancelBtn = document.getElementById(\"cancelBtn\");\n    cancelBtn.addEventListener(\"click\", hideProjectForm);\n  };\n\n  const hideProjectForm = () => {\n    const projectForm = document.getElementById(\"project-form\");\n    projectForm.parentNode.replaceChild((0,_ui_components_new_project_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), projectForm);\n\n    const addProjectBtn = document.getElementById(\"addProject\");\n    addProjectBtn.addEventListener(\"click\", displayProjectForm);\n  };\n\n  const displayTaskForm = (projectsList) => {\n    addTaskBtn.addEventListener(\"click\", () => {\n      const taskForm = (0,_ui_components_task_form__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(projectsList);\n      formModal.appendChild(taskForm);\n      formModal.style.display = \"block\";\n    });\n  };\n\n  const createTaskCard = (task) => {\n    let taskCard = (0,_ui_components_task_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n\n    // Add click event to individual tasks\n    taskCard.addEventListener(\"click\", () => {\n      setActiveTask(taskCard);\n      showTaskDetails(task);\n    });\n\n    taskCardsDiv.appendChild(taskCard);\n    return taskCard;\n  };\n\n  const showTaskDetails = (task) => {\n    const {\n      checkmark,\n      taskTitle,\n      taskDescription,\n      taskItems,\n      deleteTaskBtn,\n      editTaskBtn,\n      addItemBtn,\n    } = (0,_ui_components_task_details__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(task);\n\n    taskActionsDiv.append(editTaskBtn, deleteTaskBtn, addItemBtn);\n    taskDetailsDiv.append(checkmark, taskTitle, taskDescription, taskItems);\n  };\n\n  const createTaskItem = (taskItem) => {\n    const item = (0,_ui_components_task_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(taskItem);\n    taskItemsDiv.appendChild(item);\n    taskDetailsDiv.appendChild(taskItemsDiv);\n  };\n\n  const setTaskActionBtnIndex = (index) => {\n    deleteTaskBtn.setAttribute(\"data-index\", index);\n    editTaskBtn.setAttribute(\"data-index\", index);\n    addItemBtn.setAttribute(\"data-index\", index);\n  };\n\n  const _setTasksHeader = (projectBtn) => {\n    const name = projectBtn.getAttribute(\"data-name\");\n    projectName.textContent = `${name} Tasks`;\n    if (projectBtn.firstChild.style) {\n      projectTitle.style.borderLeftColor =\n        projectBtn.firstChild.style.borderColor;\n    } else {\n      projectTitle.style.borderLeftColor = \"#fff\";\n    }\n  };\n\n  const setActiveProject = (selectedProject) => {\n    getProjectsBtns().forEach((projectBtn) => {\n      projectBtn.classList.remove(\"active\");\n    });\n\n    selectedProject.classList.add(\"active\");\n    _setTasksHeader(selectedProject);\n\n    taskCardsDiv.innerHTML = \"\";\n    taskActionsDiv.innerHTML = \"\";\n    taskDetailsDiv.innerHTML = \"\";\n  };\n\n  const setActiveTask = (selectedTask) => {\n    getTaskCards().forEach((taskCard) => {\n      taskCard.classList.remove(\"active\");\n    });\n\n    selectedTask.classList.add(\"active\");\n    taskActionsDiv.innerHTML = \"\";\n    taskDetailsDiv.innerHTML = \"\";\n  };\n\n  const getProjectsBtns = () => {\n    return document.querySelectorAll(\".project-name\");\n  };\n\n  const displayDefaultProjectsBtns = (projectsList) => {\n    // Add click event to default projectBtns\n    getProjectsBtns().forEach((projectBtn) => {\n      projectBtn.addEventListener(\"click\", () => {\n        setActiveProject(projectBtn);\n\n        const project = projectsList.getProject(\n          projectBtn.getAttribute(\"data-name\")\n        );\n\n        if (project) {\n          // Load tasks related to clicked project\n          project.tasks.forEach((task) => {\n            createTaskCard(task);\n          });\n        }\n      });\n    });\n  };\n\n  const getCurrentProject = () => {\n    return document.getElementsByClassName(\"project-name active\")[0];\n  };\n\n  return {\n    displayTaskForm,\n    getCurrentProject,\n    displayDefaultProjectsBtns,\n    createAddProjectButton,\n    createProjectButton,\n    createTaskCard,\n    createTaskItem,\n    getProjectsBtns,\n    showProjectTaskCards,\n    setActiveProject,\n    setActiveTask,\n    setTaskActionBtnIndex,\n    showTaskDetails,\n    displayProjectForm,\n    hideProjectForm,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomUI);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dom_ui.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Project = (pName) => {\n  let name = pName;\n  let tasks = [];\n\n  const setProjectName = (newName) => {\n    name = newName;\n  };\n\n  const getProjectName = () => {\n    return name;\n  };\n\n  const addTask = (task) => {\n    tasks.push(task);\n  };\n\n  const getTask = (title) => {\n    return tasks.find((task) => task.title == title);\n  };\n\n  const getTasks = () => {\n    return tasks;\n  };\n\n  return {\n    setProjectName,\n    getProjectName,\n    addTask,\n    getTask,\n    getTasks,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/project_list.js":
/*!*************************************!*\
  !*** ./src/modules/project_list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectList = () => {\n  let projects = [];\n\n  const add = (project) => {\n    projects.push(project);\n  };\n\n  const getAll = () => {\n    return projects;\n  };\n\n  const getProject = (name) => {\n    return projects.find((project) => project.name == name);\n  };\n\n  const remove = (name) => {\n    const index = projects.findIndex(name);\n    projects.splice(index, 1);\n  };\n\n  return { add, getProject, getAll, remove };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project_list.js?");

/***/ }),

/***/ "./src/ui_components/new_project_button.js":
/*!*************************************************!*\
  !*** ./src/ui_components/new_project_button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNewProjectBtn)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/plus.svg */ \"./src/assets/icons/plus.svg\");\n\n\nfunction addNewProjectBtn() {\n  const button = document.createElement(\"button\");\n  button.setAttribute(\"id\", \"addProject\");\n\n  const img = document.createElement(\"img\");\n  img.src = _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  button.append(img, \"New Project\");\n\n  return button;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/new_project_button.js?");

/***/ }),

/***/ "./src/ui_components/project_form.js":
/*!*******************************************!*\
  !*** ./src/ui_components/project_form.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectForm)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/check.svg */ \"./src/assets/icons/check.svg\");\n/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/cross.svg */ \"./src/assets/icons/cross.svg\");\n\n\n\nfunction createProjectForm() {\n  const form = document.createElement(\"form\");\n  form.setAttribute(\"id\", \"project-form\");\n  form.setAttribute(\"action\", \"\");\n  form.setAttribute(\"method\", \"post\");\n\n  const nameInput = document.createElement(\"input\");\n  nameInput.setAttribute(\"id\", \"projectName\");\n  nameInput.setAttribute(\"type\", \"text\");\n  nameInput.setAttribute(\"placeholder\", \"Project name\");\n  nameInput.setAttribute(\"required\", \"required\");\n\n  const formActions = document.createElement(\"div\");\n  formActions.setAttribute(\"id\", \"project-form-actions\");\n\n  const validateBtn = document.createElement(\"button\");\n  validateBtn.setAttribute(\"type\", \"submit\");\n  validateBtn.classList.add(\"actionBtn\");\n  validateBtn.setAttribute(\"id\", \"validateBtn\");\n\n  const checkIcon = document.createElement(\"img\");\n  checkIcon.src = _assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n  validateBtn.appendChild(checkIcon);\n\n  const cancelBtn = document.createElement(\"button\");\n  cancelBtn.classList.add(\"actionBtn\");\n  cancelBtn.setAttribute(\"id\", \"cancelBtn\");\n  cancelBtn.setAttribute(\"type\", \"button\");\n\n  const crossIcon = document.createElement(\"img\");\n  crossIcon.src = _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  cancelBtn.appendChild(crossIcon);\n\n  formActions.append(validateBtn, cancelBtn);\n  form.append(nameInput, formActions);\n\n  return form;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/project_form.js?");

/***/ }),

/***/ "./src/ui_components/project_name_button.js":
/*!**************************************************!*\
  !*** ./src/ui_components/project_name_button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectButton)\n/* harmony export */ });\nfunction ProjectButton(projectName) {\n  const button = document.createElement(\"button\");\n  button.className = \"project-name\";\n  button.setAttribute(\"data-name\", projectName);\n\n  const dot = document.createElement(\"div\");\n  dot.className = \"dot\";\n  const randomColor = Math.floor(Math.random() * 16777215).toString(16);\n  dot.style.borderColor = `#${randomColor}`;\n\n  const span = document.createElement(\"span\");\n  span.textContent = projectName;\n\n  button.append(dot, span);\n\n  return button;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/project_name_button.js?");

/***/ }),

/***/ "./src/ui_components/task-details.js":
/*!*******************************************!*\
  !*** ./src/ui_components/task-details.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskDetails)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/clock.svg */ \"./src/assets/icons/clock.svg\");\n/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/trash.svg */ \"./src/assets/icons/trash.svg\");\n/* harmony import */ var _assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/pen.svg */ \"./src/assets/icons/pen.svg\");\n/* harmony import */ var _assets_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/checkbox-checked.svg */ \"./src/assets/icons/checkbox-checked.svg\");\n\n\n\n\n\nfunction createTaskDetails(task) {\n  const checkmark = document.createElement(\"div\");\n  checkmark.setAttribute(\"id\", \"checkmark\");\n\n  const detailsStatusCheckbox = document.createElement(\"input\");\n  detailsStatusCheckbox.setAttribute(\"type\", \"checkbox\");\n  detailsStatusCheckbox.setAttribute(\"id\", \"task-status\");\n  detailsStatusCheckbox.setAttribute(\"disabled\", \"disabled\");\n\n  const detailsStatusLabel = document.createElement(\"label\");\n  detailsStatusLabel.setAttribute(\"for\", \"task-status\");\n\n  detailsStatusCheckbox.checked = task.completed;\n\n  checkmark.append(detailsStatusCheckbox, detailsStatusLabel);\n\n  const taskTitle = document.createElement(\"div\");\n  taskTitle.setAttribute(\"id\", \"task-title\");\n\n  const h2 = document.createElement(\"h2\");\n  h2.textContent = task.title;\n\n  const subtitle = document.createElement(\"div\");\n  subtitle.classList.add(\"subtitle\");\n\n  const detailsDueDate = document.createElement(\"div\");\n  detailsDueDate.setAttribute(\"id\", \"details-due-date\");\n\n  const clockIcon = document.createElement(\"img\");\n  clockIcon.src = _assets_icons_clock_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  clockIcon.setAttribute(\"alt\", \"clock\");\n\n  const date = document.createElement(\"p\");\n  date.textContent = task.dueDate;\n\n  detailsDueDate.append(clockIcon, date);\n\n  const priority = document.createElement(\"p\");\n  priority.setAttribute(\"id\", \"priority\");\n  priority.textContent = task.priority;\n\n  subtitle.append(detailsDueDate, priority);\n\n  taskTitle.append(h2, subtitle);\n\n  const taskDescription = document.createElement(\"div\");\n  taskDescription.setAttribute(\"id\", \"task-description\");\n  taskDescription.textContent = task.description;\n\n  const taskItems = document.createElement(\"div\");\n  taskItems.setAttribute(\"id\", \"task-items\");\n\n  const deleteTaskBtn = document.createElement(\"button\");\n  deleteTaskBtn.setAttribute(\"id\", \"deleteTaskBtn\");\n  deleteTaskBtn.setAttribute(\"data-id\", task.title);\n  deleteTaskBtn.classList.add(\"actionBtn\");\n\n  const deleteIcon = document.createElement(\"img\");\n  deleteIcon.src = _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  deleteIcon.setAttribute(\"alt\", \"trash\");\n\n  deleteTaskBtn.appendChild(deleteIcon);\n\n  const editTaskBtn = document.createElement(\"button\");\n  editTaskBtn.setAttribute(\"id\", \"editTaskBtn\");\n  editTaskBtn.setAttribute(\"data-id\", task.title);\n  editTaskBtn.classList.add(\"actionBtn\");\n\n  const editIcon = document.createElement(\"img\");\n  editIcon.src = _assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  editIcon.setAttribute(\"alt\", \"pen\");\n\n  editTaskBtn.appendChild(editIcon);\n\n  const addItemBtn = document.createElement(\"button\");\n  addItemBtn.setAttribute(\"id\", \"addItemBtn\");\n  addItemBtn.setAttribute(\"data-id\", task.title);\n  addItemBtn.classList.add(\"actionBtn\");\n\n  const addItemIcon = document.createElement(\"img\");\n  addItemIcon.src = _assets_icons_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  addItemIcon.setAttribute(\"alt\", \"checkbox-checked\");\n\n  addItemBtn.appendChild(addItemIcon);\n\n  return {\n    checkmark,\n    taskTitle,\n    taskDescription,\n    taskItems,\n    deleteTaskBtn,\n    editTaskBtn,\n    addItemBtn,\n  };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/task-details.js?");

/***/ }),

/***/ "./src/ui_components/task-item.js":
/*!****************************************!*\
  !*** ./src/ui_components/task-item.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskItem)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_create_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/create.svg */ \"./src/assets/icons/create.svg\");\n/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/trash.svg */ \"./src/assets/icons/trash.svg\");\n\n\n\nfunction TaskItem(taskItem) {\n  const item = document.createElement(\"div\");\n  item.className = \"item\";\n\n  const itemContent = document.createElement(\"div\");\n  itemContent.className = \"item-content\";\n\n  const checkbox = document.createElement(\"input\");\n  checkbox.setAttribute(\"type\", \"checkbox\");\n  // checkbox.setAttribute(\"id\", taskItem);\n\n  const label = document.createElement(\"label\");\n  // label.setAttribute(\"for\", taskItem);\n  label.textContent = taskItem.value;\n\n  itemContent.append(checkbox, label);\n\n  const itemActions = document.createElement(\"div\");\n  itemActions.className = \"item-actions\";\n\n  const editBtn = document.createElement(\"button\");\n  editBtn.className = \"actionBtn\";\n  const createIcon = document.createElement(\"img\");\n  createIcon.setAttribute(\"src\", _assets_icons_create_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  editBtn.appendChild(createIcon);\n\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.className = \"actionBtn\";\n  const trashIcon = document.createElement(\"img\");\n  trashIcon.setAttribute(\"src\", _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  deleteBtn.appendChild(trashIcon);\n\n  itemActions.append(editBtn, deleteBtn);\n\n  item.append(itemContent, itemActions);\n\n  return item;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/task-item.js?");

/***/ }),

/***/ "./src/ui_components/task_card.js":
/*!****************************************!*\
  !*** ./src/ui_components/task_card.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskCard)\n/* harmony export */ });\nfunction TaskCard(task) {\n  const card = document.createElement(\"div\");\n  card.className = \"task\";\n  card.setAttribute(\"data\", task.title);\n\n  const checkbox = document.createElement(\"div\");\n  checkbox.className = \"checkbox\";\n\n  const checkboxInput = document.createElement(\"input\");\n  checkboxInput.setAttribute(\"type\", \"checkbox\");\n  checkboxInput.setAttribute(\"id\", task.title);\n  checkboxInput.checked = task.completed;\n\n  const checkboxLabel = document.createElement(\"label\");\n  checkboxLabel.setAttribute(\"for\", task.title);\n\n  checkbox.append(checkboxInput, checkboxLabel);\n\n  const taskInfos = document.createElement(\"div\");\n  taskInfos.className = \"task-infos\";\n\n  const h4 = document.createElement(\"h4\");\n  h4.textContent = task.title;\n\n  const additionalInfos = document.createElement(\"div\");\n  additionalInfos.className = \"subtitle\";\n\n  const dueDate = document.createElement(\"p\");\n  dueDate.className = \"task-due-date\";\n  dueDate.textContent = task.dueDate;\n\n  const priority = document.createElement(\"p\");\n  priority.className = \"priority\";\n  priority.textContent = task.priority;\n\n  additionalInfos.append(dueDate, priority);\n  taskInfos.append(h4, additionalInfos);\n\n  card.append(checkbox, taskInfos);\n\n  return card;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/task_card.js?");

/***/ }),

/***/ "./src/ui_components/task_form.js":
/*!****************************************!*\
  !*** ./src/ui_components/task_form.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createtaskForm)\n/* harmony export */ });\nfunction createtaskForm(projectsList) {\n  const form = document.createElement(\"form\");\n  form.setAttribute(\"id\", \"task-form\");\n  form.setAttribute(\"action\", \"\");\n  form.setAttribute(\"method\", \"post\");\n\n  const header = document.createElement(\"h3\");\n  header.textContent = \"Create a task\";\n\n  const projectFormElement = document.createElement(\"div\");\n  projectFormElement.className = \"form-element\";\n\n  const projectLabel = document.createElement(\"label\");\n  projectLabel.setAttribute(\"for\", \"project\");\n  projectLabel.textContent = \"Project\";\n\n  const projectSelect = document.createElement(\"select\");\n  projectSelect.setAttribute(\"id\", \"project\");\n  const indexOption = document.createElement(\"option\");\n  indexOption.value = \"Index\";\n  indexOption.textContent = \"Index\";\n  projectSelect.appendChild(indexOption);\n\n  projectsList.forEach((project) => {\n    let option = document.createElement(\"option\");\n    option.value = project.getProjectName();\n    option.textContent = project.getProjectName();\n    projectSelect.appendChild(option);\n  });\n\n  projectFormElement.append(projectLabel, projectSelect);\n\n  const titleFormElement = document.createElement(\"div\");\n  titleFormElement.className = \"form-element\";\n\n  const titleLabel = document.createElement(\"label\");\n  titleLabel.setAttribute(\"for\", \"title\");\n  titleLabel.textContent = \"Title\";\n\n  const titleInput = document.createElement(\"input\");\n  titleInput.setAttribute(\"id\", \"title\");\n  titleInput.setAttribute(\"type\", \"text\");\n\n  titleFormElement.append(titleLabel, titleInput);\n\n  const descriptionFormElement = document.createElement(\"div\");\n  descriptionFormElement.className = \"form-element\";\n\n  const descriptionLabel = document.createElement(\"label\");\n  descriptionLabel.setAttribute(\"for\", \"description\");\n  descriptionLabel.textContent = \"Description\";\n\n  const descriptionTextarea = document.createElement(\"textarea\");\n  descriptionTextarea.setAttribute(\"id\", \"description\");\n  descriptionTextarea.setAttribute(\"cols\", \"30\");\n  descriptionTextarea.setAttribute(\"rows\", \"10\");\n\n  descriptionFormElement.append(descriptionLabel, descriptionTextarea);\n\n  const dueDateFormElement = document.createElement(\"div\");\n  dueDateFormElement.className = \"form-element\";\n\n  const dueDateLabel = document.createElement(\"label\");\n  dueDateLabel.setAttribute(\"for\", \"due-date\");\n  dueDateLabel.textContent = \"Due date\";\n\n  const dueDateInput = document.createElement(\"input\");\n  dueDateInput.setAttribute(\"id\", \"due-date\");\n  dueDateInput.setAttribute(\"type\", \"date\");\n\n  dueDateFormElement.append(dueDateLabel, dueDateInput);\n\n  const priorityFormElement = document.createElement(\"div\");\n  priorityFormElement.className = \"form-element\";\n\n  const priorityLabel = document.createElement(\"label\");\n  priorityLabel.setAttribute(\"for\", \"priority\");\n  priorityLabel.textContent = \"Priority\";\n\n  const prioritySelect = document.createElement(\"select\");\n  prioritySelect.setAttribute(\"id\", \"priority\");\n  const highOption = document.createElement(\"option\");\n  highOption.value = \"high\";\n  highOption.textContent = \"High\";\n\n  const normalOption = document.createElement(\"option\");\n  normalOption.value = \"normal\";\n  normalOption.textContent = \"Normal\";\n\n  const lowOption = document.createElement(\"option\");\n  lowOption.value = \"low\";\n  lowOption.textContent = \"Low\";\n\n  prioritySelect.append(lowOption, normalOption, highOption);\n\n  priorityFormElement.append(priorityLabel, prioritySelect);\n\n  const formActionBtns = document.createElement(\"div\");\n  formActionBtns.setAttribute(\"id\", \"task-form-actions\");\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.setAttribute(\"type\", \"submit\");\n  submitBtn.textContent = \"Create task\";\n\n  const cancelBtn = document.createElement(\"button\");\n  cancelBtn.setAttribute(\"type\", \"button\");\n  cancelBtn.textContent = \"Cancel\";\n\n  formActionBtns.append(submitBtn, cancelBtn);\n\n  form.append(\n    header,\n    projectFormElement,\n    titleFormElement,\n    descriptionFormElement,\n    dueDateFormElement,\n    priorityFormElement,\n    formActionBtns\n  );\n\n  return form;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui_components/task_form.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;