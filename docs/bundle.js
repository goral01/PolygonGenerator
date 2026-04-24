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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/index.css"
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/index.css ***!
  \*******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;\r\n    background: radial-gradient(1200px 600px at 20% 0%, rgba(120, 131, 255, 0.14), transparent 60%),\r\n        radial-gradient(900px 500px at 90% 10%, rgba(255, 255, 255, 0.06), transparent 55%),\r\n        #0b0f14;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#app {\r\n    padding: 18px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    align-items: center;\r\n}\r\n\r\ncanvas {\r\n    border-radius: 14px;\r\n    background: rgba(255, 255, 255, 0.12);\r\n    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 22px 60px rgba(0, 0, 0, 0.55);\r\n    width: min(720px, calc(100vw - 60px));\r\n    height: auto;\r\n}\r\n\r\n.btn {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n\r\n    padding: 10px 16px;\r\n\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n\r\n    border: 1px solid rgba(255, 255, 255, 0.22);\r\n    border-radius: 10px;\r\n\r\n    cursor: pointer;\r\n\r\n    background: linear-gradient(180deg, rgba(99, 102, 241, 0.92), rgba(79, 70, 229, 0.92));\r\n    color: rgba(255, 255, 255, 0.95);\r\n\r\n    /* белая подсветка по дефолту */\r\n    box-shadow: 0 0 16px rgba(255, 255, 255, 0.14), 0 12px 30px rgba(0, 0, 0, 0.55);\r\n\r\n    transition:\r\n        transform 0.12s ease,\r\n        box-shadow 0.2s ease,\r\n        filter 0.2s ease,\r\n        background 0.2s ease,\r\n        opacity 0.2s ease;\r\n    user-select: none;\r\n}\r\n\r\n/* hover */\r\n.btn:hover {\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 0 18px rgba(255, 255, 255, 0.18), 0 16px 38px rgba(0, 0, 0, 0.6);\r\n    filter: brightness(1.05);\r\n}\r\n\r\n/* active */\r\n.btn:active {\r\n    transform: translateY(1px) scale(0.98);\r\n    box-shadow: 0 0 14px rgba(255, 255, 255, 0.12), 0 10px 24px rgba(0, 0, 0, 0.6);\r\n    filter: brightness(0.98);\r\n}\r\n\r\n.btn:focus-visible {\r\n    outline: none;\r\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35), 0 0 0 5px rgba(99, 102, 241, 0.35),\r\n        0 14px 34px rgba(0, 0, 0, 0.55);\r\n}\r\n\r\n.btn:disabled {\r\n    cursor: not-allowed;\r\n    opacity: 0.45;\r\n    transform: none;\r\n    filter: none;\r\n    background: linear-gradient(180deg, rgba(148, 163, 184, 0.26), rgba(148, 163, 184, 0.18));\r\n    border-color: rgba(255, 255, 255, 0.12);\r\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.08), 0 10px 28px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n/* иконка */\r\n.btn__icon {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.toolbar {\r\n    display: flex;\r\n    gap: 10px;\r\n\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n\r\n    background: rgba(17, 24, 39, 0.55);\r\n    border: 1px solid rgba(255, 255, 255, 0.08);\r\n    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), 0 18px 50px rgba(0, 0, 0, 0.45);\r\n    backdrop-filter: blur(8px);\r\n    border-radius: 12px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mycanvas/./src/style/index.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mycanvas/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mycanvas/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style/index.css"
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mycanvas/./src/style/index.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mycanvas/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mycanvas/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mycanvas/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mycanvas/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mycanvas/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mycanvas/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.css */ \"./src/style/index.css\");\n/* harmony import */ var _ui_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/canvas.js */ \"./src/ui/canvas.js\");\n/* harmony import */ var _ui_toolbars_actionToolbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/toolbars/actionToolbar.js */ \"./src/ui/toolbars/actionToolbar.js\");\n/* harmony import */ var _ui_toolbars_timelineToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/toolbars/timelineToolbar.js */ \"./src/ui/toolbars/timelineToolbar.js\");\n/* harmony import */ var _ui_polygon_polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/polygon/polygon.js */ \"./src/ui/polygon/polygon.js\");\n/* harmony import */ var _utils_polygonSafe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/polygonSafe.js */ \"./src/utils/polygonSafe.js\");\n/* harmony import */ var _utils_geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/geometry.js */ \"./src/utils/geometry.js\");\n/* harmony import */ var _utils_move_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/move.js */ \"./src/utils/move.js\");\n/* harmony import */ var _state_state_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/state.js */ \"./src/state/state.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// --------------------\r\n// CORE\r\n// --------------------\r\nconst state = new _state_state_js__WEBPACK_IMPORTED_MODULE_8__.State((data) => {\r\n    const p = new _ui_polygon_polygon_js__WEBPACK_IMPORTED_MODULE_4__.Polygon(data.n);\r\n    p.points = data.points;\r\n    p.color = data.color;\r\n    return p;\r\n});\r\n\r\n// --------------------\r\n// UI\r\n// --------------------\r\nconst app = document.getElementById('app');\r\n\r\nconst getCanvasSize = () => {\r\n    // делаем канвас больше на десктопе, но адекватным на мобилках\r\n    const padding = 36; // #app padding left+right (18*2)\r\n    const safety = 24; // небольшой запас под тени/скролл\r\n\r\n    const maxSize = 720;\r\n    const minSize = 320;\r\n\r\n    return Math.floor(Math.max(minSize, Math.min(maxSize, window.innerWidth - padding - safety)));\r\n};\r\n\r\nconst canvasUI = new _ui_canvas_js__WEBPACK_IMPORTED_MODULE_1__.CanvasUI(getCanvasSize(), getCanvasSize());\r\nconst canvas = canvasUI.getElement();\r\nconst ctx = canvasUI.getContext();\r\n\r\n// 🔥 Toolbar теперь получает emitter, а не state/классы\r\nconst toolbarActions = new _ui_toolbars_actionToolbar_js__WEBPACK_IMPORTED_MODULE_2__.ActionToolbarUI({\r\n    state,\r\n    canvas,\r\n});\r\nconst toolbarTimeline = new _ui_toolbars_timelineToolbar_js__WEBPACK_IMPORTED_MODULE_3__.TimelineToolbarUI({\r\n    state,\r\n});\r\n\r\ntoolbarTimeline.add(app);\r\ncanvasUI.add(app);\r\ntoolbarActions.add(app);\r\n\r\n// --------------------\r\n// RENDER (state → canvas)\r\n// --------------------\r\nstate.on(() => {\r\n    canvasUI.clear();\r\n\r\n    for (const p of state.getPolygons()) {\r\n        p.selected = p === state.getSelected();\r\n        p.draw(ctx);\r\n    }\r\n});\r\n\r\n// responsive resize (масштабируем существующие полигоны вместе с canvas)\r\nwindow.addEventListener('resize', () => {\r\n    const newSize = getCanvasSize();\r\n    const oldSize = canvas.width;\r\n\r\n    if (newSize === oldSize) return;\r\n\r\n    const k = newSize / oldSize;\r\n\r\n    for (const p of state.getPolygons()) {\r\n        p.points = p.points.map((pt) => ({ x: pt.x * k, y: pt.y * k }));\r\n    }\r\n\r\n    canvasUI.setSize(newSize, newSize);\r\n    state.notify();\r\n});\r\n\r\n// --------------------\r\n// CANVAS INTERACTION\r\n// --------------------\r\ncanvas.addEventListener('mousedown', (e) => {\r\n    const rect = canvas.getBoundingClientRect();\r\n\r\n    const mouse = {\r\n        x: e.clientX - rect.left,\r\n        y: e.clientY - rect.top,\r\n    };\r\n\r\n    let found = null;\r\n    const polygons = state.getPolygons();\r\n\r\n    // ищем сверху вниз\r\n    for (let i = polygons.length - 1; i >= 0; i--) {\r\n        if ((0,_utils_geometry_js__WEBPACK_IMPORTED_MODULE_6__.pointInPolygon)(mouse, polygons[i])) {\r\n            found = polygons[i];\r\n            break;\r\n        }\r\n    }\r\n\r\n    if (found) {\r\n        state.select(found);\r\n    } else {\r\n        state.clearSelection();\r\n    }\r\n\r\n    if (!found) return;\r\n\r\n    const startSnapshot = state.snapshot();\r\n    let moved = false;\r\n    let last = mouse;\r\n\r\n    const onMove = (ev) => {\r\n        const r = canvas.getBoundingClientRect();\r\n        const cur = { x: ev.clientX - r.left, y: ev.clientY - r.top };\r\n\r\n        const dx = cur.x - last.x;\r\n        const dy = cur.y - last.y;\r\n\r\n        const selected = state.getSelected();\r\n        if (selected) {\r\n            const clamped = (0,_utils_move_js__WEBPACK_IMPORTED_MODULE_7__.clampDeltaToCanvas)(selected.points, canvas, dx, dy);\r\n            selected.points = (0,_utils_move_js__WEBPACK_IMPORTED_MODULE_7__.translatePoints)(selected.points, clamped.dx, clamped.dy);\r\n\r\n            moved = moved || Math.abs(clamped.dx) > 0.000001 || Math.abs(clamped.dy) > 0.000001;\r\n            state.notify();\r\n        }\r\n\r\n        last = cur;\r\n    };\r\n\r\n    const onUp = () => {\r\n        if (moved) {\r\n            const selected = state.getSelected();\r\n            const polys = state.getPolygons();\r\n\r\n            let valid = true;\r\n            if (selected) {\r\n                if (!(0,_utils_polygonSafe_js__WEBPACK_IMPORTED_MODULE_5__.isInsideCanvas)(selected, canvas)) {\r\n                    valid = false;\r\n                } else {\r\n                    for (const p of polys) {\r\n                        if (p === selected) continue;\r\n                        if ((0,_utils_polygonSafe_js__WEBPACK_IMPORTED_MODULE_5__.polygonsIntersectSAT)(selected.points, p.points)) {\r\n                            valid = false;\r\n                            break;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n\r\n            if (!valid) {\r\n                state.restore(startSnapshot);\r\n                state.notify();\r\n            } else {\r\n                state.commitHistory(startSnapshot);\r\n                state.notify();\r\n            }\r\n        }\r\n        window.removeEventListener('mousemove', onMove);\r\n        window.removeEventListener('mouseup', onUp);\r\n    };\r\n\r\n    window.addEventListener('mousemove', onMove);\r\n    window.addEventListener('mouseup', onUp);\r\n});\r\n\n\n//# sourceURL=webpack://mycanvas/./src/index.js?\n}");

/***/ },

/***/ "./src/state/state.js"
/*!****************************!*\
  !*** ./src/state/state.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   State: () => (/* binding */ State)\n/* harmony export */ });\nclass State {\r\n    constructor(factory) {\r\n        this.factory = factory ?? ((p) => p);\r\n\r\n        this.polygons = [];\r\n        this.selected = null;\r\n\r\n        this.listeners = [];\r\n\r\n        this.history = [];\r\n        this.future = [];\r\n    }\r\n\r\n    // --------------------\r\n    // EVENTS\r\n    // --------------------\r\n    on(fn) {\r\n        this.listeners.push(fn);\r\n    }\r\n\r\n    notify() {\r\n        this.listeners.forEach((fn) => fn());\r\n    }\r\n\r\n    // --------------------\r\n    // SNAPSHOT (только данные)\r\n    // --------------------\r\n    snapshot() {\r\n        return JSON.stringify({\r\n            polygons: this.polygons.map((p) => ({\r\n                n: p.n,\r\n                points: p.points,\r\n                color: p.color,\r\n            })),\r\n        });\r\n    }\r\n\r\n    // --------------------\r\n    // RESTORE (через factory)\r\n    // --------------------\r\n    restore(snapshot) {\r\n        const data = JSON.parse(snapshot);\r\n\r\n        this.polygons = data.polygons.map((p) => this.factory(p));\r\n        this.selected = null;\r\n    }\r\n\r\n    // --------------------\r\n    // HISTORY\r\n    // --------------------\r\n    saveHistory() {\r\n        this.history.push(this.snapshot());\r\n        this.future = [];\r\n    }\r\n\r\n    commitHistory(snapshotBeforeChange) {\r\n        this.history.push(snapshotBeforeChange);\r\n        this.future = [];\r\n    }\r\n\r\n    // --------------------\r\n    // ACTIONS\r\n    // --------------------\r\n    addPolygon(poly) {\r\n        this.saveHistory();\r\n\r\n        this.polygons.push(poly);\r\n        this.notify();\r\n    }\r\n\r\n    removeSelected() {\r\n        if (!this.selected) return;\r\n\r\n        this.saveHistory();\r\n\r\n        const idx = this.polygons.indexOf(this.selected);\r\n        if (idx !== -1) {\r\n            this.polygons.splice(idx, 1);\r\n        }\r\n\r\n        this.selected = null;\r\n        this.notify();\r\n    }\r\n\r\n    clear() {\r\n        this.saveHistory();\r\n\r\n        this.polygons = [];\r\n        this.selected = null;\r\n\r\n        this.notify();\r\n    }\r\n\r\n    select(poly) {\r\n        this.selected = poly;\r\n        this.notify();\r\n    }\r\n\r\n    clearSelection() {\r\n        this.selected = null;\r\n        this.notify();\r\n    }\r\n\r\n    // --------------------\r\n    // UNDO / REDO\r\n    // --------------------\r\n    undo() {\r\n        if (this.history.length === 0) return;\r\n\r\n        const current = this.snapshot();\r\n        this.future.push(current);\r\n\r\n        const prev = this.history.pop();\r\n        this.restore(prev);\r\n\r\n        this.notify();\r\n    }\r\n\r\n    redo() {\r\n        if (this.future.length === 0) return;\r\n\r\n        const next = this.future.pop();\r\n        this.history.push(this.snapshot());\r\n\r\n        this.restore(next);\r\n\r\n        this.notify();\r\n    }\r\n\r\n    // --------------------\r\n    // GETTERS\r\n    // --------------------\r\n    getPolygons() {\r\n        return this.polygons;\r\n    }\r\n\r\n    getSelected() {\r\n        return this.selected;\r\n    }\r\n\r\n    canUndo() {\r\n        return this.history.length > 0;\r\n    }\r\n\r\n    canRedo() {\r\n        return this.future.length > 0;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/state/state.js?\n}");

/***/ },

/***/ "./src/ui/button.js"
/*!**************************!*\
  !*** ./src/ui/button.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ButtonUI: () => (/* binding */ ButtonUI)\n/* harmony export */ });\nclass ButtonUI {\r\n    constructor({ text = '', icon = '', handler }) {\r\n        this.el = document.createElement('button');\r\n        this.el.classList.add('btn');\r\n\r\n        if (icon) {\r\n            const iconSpan = document.createElement('span');\r\n            iconSpan.classList.add('btn__icon');\r\n            iconSpan.innerHTML = icon;\r\n            this.el.appendChild(iconSpan);\r\n        }\r\n\r\n        const textSpan = document.createElement('span');\r\n        textSpan.textContent = text;\r\n        this.el.appendChild(textSpan);\r\n\r\n        // 🔥 ВОТ ЭТОГО НЕ ХВАТАЛО\r\n        if (handler) {\r\n            this.el.addEventListener('click', handler);\r\n        }\r\n    }\r\n\r\n    add(parent) {\r\n        parent.appendChild(this.el);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/button.js?\n}");

/***/ },

/***/ "./src/ui/canvas.js"
/*!**************************!*\
  !*** ./src/ui/canvas.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CanvasUI: () => (/* binding */ CanvasUI)\n/* harmony export */ });\nclass CanvasUI {\r\n    constructor(width = 500, height = 500) {\r\n        this.canvas = document.createElement('canvas');\r\n        this.canvas.width = width;\r\n        this.canvas.height = height;\r\n\r\n        this.ctx = this.canvas.getContext('2d');\r\n    }\r\n\r\n    setSize(width, height) {\r\n        this.canvas.width = width;\r\n        this.canvas.height = height;\r\n    }\r\n\r\n    add(parent) {\r\n        parent.appendChild(this.canvas);\r\n    }\r\n\r\n    clear() {\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n\r\n    getContext() {\r\n        return this.ctx;\r\n    }\r\n\r\n    getElement() {\r\n        return this.canvas;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/canvas.js?\n}");

/***/ },

/***/ "./src/ui/polygon/concavePolygon.js"
/*!******************************************!*\
  !*** ./src/ui/polygon/concavePolygon.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConcavePolygon: () => (/* binding */ ConcavePolygon)\n/* harmony export */ });\n/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon.js */ \"./src/ui/polygon/polygon.js\");\n\r\n\r\nclass ConcavePolygon extends _polygon_js__WEBPACK_IMPORTED_MODULE_0__.Polygon {\r\n    constructor(n, canvas) {\r\n        super(n);\r\n        this.canvas = canvas;\r\n        this.generate();\r\n    }\r\n\r\n    generate() {\r\n        const centerX = Math.random() * this.canvas.width;\r\n        const centerY = Math.random() * this.canvas.height;\r\n\r\n        const spread = 60; // 🔥 маленький разброс\r\n\r\n        const points = [];\r\n\r\n        for (let i = 0; i < this.n; i++) {\r\n            points.push({\r\n                x: centerX + (Math.random() - 0.5) * spread,\r\n                y: centerY + (Math.random() - 0.5) * spread,\r\n            });\r\n        }\r\n\r\n        const center = points.reduce(\r\n            (acc, p) => ({\r\n                x: acc.x + p.x / this.n,\r\n                y: acc.y + p.y / this.n,\r\n            }),\r\n            { x: 0, y: 0 },\r\n        );\r\n\r\n        points.sort(\r\n            (a, b) =>\r\n                Math.atan2(a.y - center.y, a.x - center.x) - Math.atan2(b.y - center.y, b.x - center.x),\r\n        );\r\n\r\n        this.points = points;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/polygon/concavePolygon.js?\n}");

/***/ },

/***/ "./src/ui/polygon/convexPolygon.js"
/*!*****************************************!*\
  !*** ./src/ui/polygon/convexPolygon.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConvexPolygon: () => (/* binding */ ConvexPolygon)\n/* harmony export */ });\n/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon.js */ \"./src/ui/polygon/polygon.js\");\n\r\n\r\nclass ConvexPolygon extends _polygon_js__WEBPACK_IMPORTED_MODULE_0__.Polygon {\r\n    constructor(n, canvas) {\r\n        super(n);\r\n        this.canvas = canvas;\r\n        this.generate();\r\n    }\r\n\r\n    generate() {\r\n        const centerX = Math.random() * this.canvas.width;\r\n        const centerY = Math.random() * this.canvas.height;\r\n\r\n        const radius = 20 + Math.random() * 40; // 🔥 маленький размер\r\n\r\n        const angles = Array.from({ length: this.n }, () => Math.random() * Math.PI * 2).sort(\r\n            (a, b) => a - b,\r\n        );\r\n\r\n        this.points = angles.map((angle) => {\r\n            const r = radius * (0.6 + Math.random() * 0.4);\r\n\r\n            return {\r\n                x: centerX + Math.cos(angle) * r,\r\n                y: centerY + Math.sin(angle) * r,\r\n            };\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/polygon/convexPolygon.js?\n}");

/***/ },

/***/ "./src/ui/polygon/polygon.js"
/*!***********************************!*\
  !*** ./src/ui/polygon/polygon.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Polygon: () => (/* binding */ Polygon)\n/* harmony export */ });\nclass Polygon {\r\n    constructor(n) {\r\n        this.n = n;\r\n        this.points = [];\r\n        this.color = `hsla(${Math.random() * 360}, 70%, 60%, 0.4)`;\r\n    }\r\n\r\n    getBounds() {\r\n        let minX = Infinity,\r\n            minY = Infinity;\r\n        let maxX = -Infinity,\r\n            maxY = -Infinity;\r\n\r\n        for (const p of this.points) {\r\n            minX = Math.min(minX, p.x);\r\n            minY = Math.min(minY, p.y);\r\n            maxX = Math.max(maxX, p.x);\r\n            maxY = Math.max(maxY, p.y);\r\n        }\r\n\r\n        return { minX, minY, maxX, maxY };\r\n    }\r\n\r\n    draw(ctx) {\r\n        ctx.beginPath();\r\n        ctx.moveTo(this.points[0].x, this.points[0].y);\r\n\r\n        for (let i = 1; i < this.points.length; i++) {\r\n            ctx.lineTo(this.points[i].x, this.points[i].y);\r\n        }\r\n\r\n        ctx.closePath();\r\n\r\n        ctx.fillStyle = this.color;\r\n        ctx.fill();\r\n\r\n        if (this.selected) {\r\n            ctx.strokeStyle = '#e6e6e6';\r\n            ctx.lineWidth = 2;\r\n        } else {\r\n            ctx.strokeStyle = '#000000';\r\n            ctx.lineWidth = 2;\r\n        }\r\n\r\n        ctx.stroke();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/polygon/polygon.js?\n}");

/***/ },

/***/ "./src/ui/toolbars/actionToolbar.js"
/*!******************************************!*\
  !*** ./src/ui/toolbars/actionToolbar.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActionToolbarUI: () => (/* binding */ ActionToolbarUI)\n/* harmony export */ });\n/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.js */ \"./src/ui/toolbars/toolbar.js\");\n/* harmony import */ var _utils_polygonSafe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/polygonSafe.js */ \"./src/utils/polygonSafe.js\");\n/* harmony import */ var _polygon_convexPolygon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polygon/convexPolygon.js */ \"./src/ui/polygon/convexPolygon.js\");\n/* harmony import */ var _polygon_concavePolygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polygon/concavePolygon.js */ \"./src/ui/polygon/concavePolygon.js\");\n\r\n\r\n\r\n\r\n\r\nclass ActionToolbarUI extends _toolbar_js__WEBPACK_IMPORTED_MODULE_0__.ToolbarUI {\r\n    constructor({ state, canvas }) {\r\n        super([]);\r\n\r\n        this.state = state;\r\n        this.canvas = canvas;\r\n\r\n        this.createButtons([\r\n            {\r\n                text: 'Generate polygon',\r\n                icon: '✨',\r\n                handler: () => this.generate(),\r\n            },\r\n            {\r\n                text: 'Delete polygon',\r\n                icon: '🧩',\r\n                handler: () => this.delete(),\r\n            },\r\n            {\r\n                text: 'Delete all polygons',\r\n                icon: '🎯',\r\n                handler: () => this.deleteAll(),\r\n            },\r\n        ]);\r\n    }\r\n\r\n    generate() {\r\n        const n = Math.floor(Math.random() * 5) + 3;\r\n        const isConvex = Math.random() < 0.5;\r\n\r\n        const poly = (0,_utils_polygonSafe_js__WEBPACK_IMPORTED_MODULE_1__.generatePolygonSafe)(\r\n            () => (isConvex ? new _polygon_convexPolygon_js__WEBPACK_IMPORTED_MODULE_2__.ConvexPolygon(n, this.canvas) : new _polygon_concavePolygon_js__WEBPACK_IMPORTED_MODULE_3__.ConcavePolygon(n, this.canvas)),\r\n            this.canvas,\r\n            this.state.getPolygons(),\r\n        );\r\n\r\n        if (poly) {\r\n            this.state.addPolygon(poly);\r\n        }\r\n    }\r\n\r\n    delete() {\r\n        this.state.removeSelected();\r\n    }\r\n\r\n    deleteAll() {\r\n        this.state.clear();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/toolbars/actionToolbar.js?\n}");

/***/ },

/***/ "./src/ui/toolbars/timelineToolbar.js"
/*!********************************************!*\
  !*** ./src/ui/toolbars/timelineToolbar.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TimelineToolbarUI: () => (/* binding */ TimelineToolbarUI)\n/* harmony export */ });\n/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.js */ \"./src/ui/toolbars/toolbar.js\");\n\r\n\r\nclass TimelineToolbarUI extends _toolbar_js__WEBPACK_IMPORTED_MODULE_0__.ToolbarUI {\r\n    constructor({ state }) {\r\n        super([]);\r\n\r\n        this.state = state;\r\n\r\n        this.createButtons([\r\n            {\r\n                text: 'Undo',\r\n                icon: '↩️',\r\n                handler: () => this.state.undo(),\r\n            },\r\n            {\r\n                text: 'Redo',\r\n                icon: '↪️',\r\n                handler: () => this.state.redo(),\r\n            },\r\n        ]);\r\n\r\n        // ссылки на кнопки\r\n        this.undoBtn = this.buttons[0].el;\r\n        this.redoBtn = this.buttons[1].el;\r\n\r\n        // обновляем состояние кнопок\r\n        this.state.on(() => this.update());\r\n        this.update();\r\n    }\r\n\r\n    update() {\r\n        this.undoBtn.disabled = !this.state.canUndo();\r\n        this.redoBtn.disabled = !this.state.canRedo();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/toolbars/timelineToolbar.js?\n}");

/***/ },

/***/ "./src/ui/toolbars/toolbar.js"
/*!************************************!*\
  !*** ./src/ui/toolbars/toolbar.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToolbarUI: () => (/* binding */ ToolbarUI)\n/* harmony export */ });\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button.js */ \"./src/ui/button.js\");\n// ui/toolbar.js\r\n\r\n\r\nclass ToolbarUI {\r\n    constructor(buttonConfigs = []) {\r\n        this.el = document.createElement('div');\r\n        this.el.classList.add('toolbar');\r\n\r\n        this.buttons = [];\r\n\r\n        this.createButtons(buttonConfigs);\r\n    }\r\n\r\n    createButtons(configs) {\r\n        configs.forEach((config) => {\r\n            const btn = new _button_js__WEBPACK_IMPORTED_MODULE_0__.ButtonUI(config);\r\n\r\n            if (config.handler) {\r\n                btn.el.addEventListener('click', config.handler);\r\n            }\r\n\r\n            this.buttons.push(btn);\r\n            this.el.appendChild(btn.el);\r\n        });\r\n    }\r\n\r\n    add(parent) {\r\n        parent.appendChild(this.el);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/ui/toolbars/toolbar.js?\n}");

/***/ },

/***/ "./src/utils/geometry.js"
/*!*******************************!*\
  !*** ./src/utils/geometry.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pointInPolygon: () => (/* binding */ pointInPolygon)\n/* harmony export */ });\nfunction pointInPolygon(point, poly) {\r\n    let inside = false;\r\n\r\n    for (let i = 0, j = poly.points.length - 1; i < poly.points.length; j = i++) {\r\n        const xi = poly.points[i].x,\r\n            yi = poly.points[i].y;\r\n        const xj = poly.points[j].x,\r\n            yj = poly.points[j].y;\r\n\r\n        const intersect =\r\n            yi > point.y !== yj > point.y &&\r\n            point.x < ((xj - xi) * (point.y - yi)) / (yj - yi + 0.00001) + xi;\r\n\r\n        if (intersect) inside = !inside;\r\n    }\r\n\r\n    return inside;\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/utils/geometry.js?\n}");

/***/ },

/***/ "./src/utils/move.js"
/*!***************************!*\
  !*** ./src/utils/move.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clampDeltaToCanvas: () => (/* binding */ clampDeltaToCanvas),\n/* harmony export */   getBoundsFromPoints: () => (/* binding */ getBoundsFromPoints),\n/* harmony export */   translatePoints: () => (/* binding */ translatePoints)\n/* harmony export */ });\nfunction translatePoints(points, dx, dy) {\r\n    return points.map((p) => ({\r\n        x: p.x + dx,\r\n        y: p.y + dy,\r\n    }));\r\n}\r\n\r\nfunction getBoundsFromPoints(points) {\r\n    let minX = Infinity,\r\n        minY = Infinity;\r\n    let maxX = -Infinity,\r\n        maxY = -Infinity;\r\n\r\n    for (const p of points) {\r\n        minX = Math.min(minX, p.x);\r\n        minY = Math.min(minY, p.y);\r\n        maxX = Math.max(maxX, p.x);\r\n        maxY = Math.max(maxY, p.y);\r\n    }\r\n\r\n    return { minX, minY, maxX, maxY };\r\n}\r\n\r\nfunction clampDeltaToCanvas(points, canvas, dx, dy) {\r\n    const b = getBoundsFromPoints(points);\r\n\r\n    const minDx = -b.minX;\r\n    const maxDx = canvas.width - b.maxX;\r\n    const minDy = -b.minY;\r\n    const maxDy = canvas.height - b.maxY;\r\n\r\n    return {\r\n        dx: Math.max(minDx, Math.min(maxDx, dx)),\r\n        dy: Math.max(minDy, Math.min(maxDy, dy)),\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://mycanvas/./src/utils/move.js?\n}");

/***/ },

/***/ "./src/utils/polygonSafe.js"
/*!**********************************!*\
  !*** ./src/utils/polygonSafe.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePolygonSafe: () => (/* binding */ generatePolygonSafe),\n/* harmony export */   isInsideCanvas: () => (/* binding */ isInsideCanvas),\n/* harmony export */   polygonsIntersectSAT: () => (/* binding */ polygonsIntersectSAT)\n/* harmony export */ });\nfunction isInsideCanvas(poly, canvas) {\r\n    const b = poly.getBounds();\r\n\r\n    return b.minX >= 0 && b.minY >= 0 && b.maxX <= canvas.width && b.maxY <= canvas.height;\r\n}\r\n\r\nfunction project(points, axis) {\r\n    let min = Infinity;\r\n    let max = -Infinity;\r\n\r\n    for (const p of points) {\r\n        const dot = p.x * axis.x + p.y * axis.y;\r\n        if (dot < min) min = dot;\r\n        if (dot > max) max = dot;\r\n    }\r\n\r\n    return { min, max };\r\n}\r\n\r\nfunction getAxes(points) {\r\n    const axes = [];\r\n\r\n    for (let i = 0; i < points.length; i++) {\r\n        const p1 = points[i];\r\n        const p2 = points[(i + 1) % points.length];\r\n\r\n        const edge = { x: p2.x - p1.x, y: p2.y - p1.y };\r\n\r\n        const normal = { x: -edge.y, y: edge.x };\r\n\r\n        const len = Math.hypot(normal.x, normal.y);\r\n\r\n        axes.push({ x: normal.x / len, y: normal.y / len });\r\n    }\r\n\r\n    return axes;\r\n}\r\n\r\nfunction polygonsIntersectSAT(a, b) {\r\n    const axes = [...getAxes(a), ...getAxes(b)];\r\n\r\n    for (const axis of axes) {\r\n        const p1 = project(a, axis);\r\n        const p2 = project(b, axis);\r\n\r\n        if (p1.max < p2.min || p2.max < p1.min) {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\nfunction generatePolygonSafe(callback, canvas, polygons, maxTries = 100) {\r\n    for (let i = 0; i < maxTries; i++) {\r\n        const poly = callback();\r\n\r\n        if (!isInsideCanvas(poly, canvas)) continue;\r\n\r\n        const collision = polygons.some((p) => polygonsIntersectSAT(poly.points, p.points));\r\n\r\n        if (!collision) {\r\n            return poly;\r\n        }\r\n    }\r\n\r\n    return null;\r\n}\r\n\n\n//# sourceURL=webpack://mycanvas/./src/utils/polygonSafe.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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