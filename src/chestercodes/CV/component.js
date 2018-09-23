/*!
 * component v1.0.0 - https://chestercodes.github.com/CV/
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["chestercodescv"] = factory(require("react"));
	else
		root["chestercodescv"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var iconSize = 50;
var iconSizePad = 30;
var leftRightDiff = 40;

module.exports.iconSize = iconSize;

var isMobile = function isMobile(cvWidth) {
  return cvWidth < 640;
};

module.exports.isMobile = isMobile;

module.exports.getLeftSideDivStyle = function (cvWidth) {
  var width = isMobile(cvWidth) ? "100%" : iconSize + iconSizePad;
  return {
    width: width,
    display: "inline-block",
    textAlign: "center"
  };
};

module.exports.getRightSideDivStyle = function (cvWidth) {
  var width = isMobile(cvWidth) ? "100%" : cvWidth - iconSize - iconSizePad - leftRightDiff;
  return {
    width: width,
    display: "inline-block"
  };
};

var mixWithBorder = function mixWithBorder(style) {
  return Object.assign({
    borderLeft: "3px solid black",
    borderBottom: "1px solid black"
  }, style);
};
module.exports.mixWithBorder = mixWithBorder;

module.exports.mixWithBorderAndPadding = function (style) {
  var borderAndPadding = mixWithBorder({
    //padding: "2px 8px 8px 8px" 
  });
  return Object.assign(borderAndPadding, style);
};

var mixWithBorder2 = function mixWithBorder2(style) {
  return Object.assign({
    borderRight: "3px solid black",
    borderBottom: "1px solid black"
  }, style);
};
module.exports.mixWithBorder2 = mixWithBorder2;

module.exports.mixWithBorder2AndPadding = function (style) {
  var borderAndPadding = mixWithBorder2({
    //padding: "2px 8px 8px 8px" 
  });
  return Object.assign(borderAndPadding, style);
};

var mixWithBorder3 = function mixWithBorder3(style) {
  return Object.assign({
    borderRight: "3px solid black",
    borderTop: "1px solid black"
  }, style);
};
module.exports.mixWithBorder3 = mixWithBorder3;

module.exports.mixWithBorder3AndPadding = function (style) {
  var borderAndPadding = mixWithBorder3({
    //padding: "2px 8px 8px 8px" 
  });
  return Object.assign(borderAndPadding, style);
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Interests = function Interests(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ x: "0px", y: "0px", width: props.size + "px", height: props.size + "px", viewBox: "0 0 72.371 72.372" },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M22.57,2.648c-4.489,1.82-8.517,4.496-11.971,7.949C7.144,14.051,4.471,18.08,2.65,22.568C0.892,26.904,0,31.486,0,36.186 \t\tc0,4.699,0.892,9.281,2.65,13.615c1.821,4.489,4.495,8.518,7.949,11.971c3.454,3.455,7.481,6.129,11.971,7.949 \t\tc4.336,1.76,8.917,2.649,13.617,2.649c4.7,0,9.28-0.892,13.616-2.649c4.488-1.82,8.518-4.494,11.971-7.949 \t\tc3.455-3.453,6.129-7.48,7.949-11.971c1.758-4.334,2.648-8.916,2.648-13.615c0-4.7-0.891-9.282-2.648-13.618 \t\tc-1.82-4.488-4.496-8.518-7.949-11.971s-7.479-6.129-11.971-7.949C45.467,0.891,40.887,0,36.187,0 \t\tC31.487,0,26.906,0.891,22.57,2.648z M9.044,51.419c-1.743-1.094-3.349-2.354-4.771-3.838c-2.172-6.112-2.54-12.729-1.101-19.01 \t\tc0.677-1.335,1.447-2.617,2.318-3.845c0.269-0.379,0.518-0.774,0.806-1.142l8.166,4.832c0,0.064,0,0.134,0,0.205 \t\tc-0.021,4.392,0.425,8.752,1.313,13.049c0.003,0.02,0.006,0.031,0.01,0.049l-6.333,9.93C9.314,51.579,9.177,51.503,9.044,51.419z \t\t M33.324,68.206c1.409,0.719,2.858,1.326,4.347,1.82c-6.325,0.275-12.713-1.207-18.36-4.447L33,68.018 \t\tC33.105,68.085,33.212,68.149,33.324,68.206z M33.274,65.735L17.12,62.856c-1.89-2.295-3.59-4.723-5.051-7.318 \t\tc-0.372-0.66-0.787-1.301-1.102-1.99l6.327-9.92c0.14,0.035,0.296,0.072,0.473,0.119c3.958,1.059,7.986,1.812,12.042,2.402 \t\tc0.237,0.033,0.435,0.062,0.604,0.08l7.584,13.113c-1.316,1.85-2.647,3.69-4.007,5.51C33.764,65.155,33.524,65.446,33.274,65.735z \t\t M60.15,60.149c-1.286,1.287-2.651,2.447-4.08,3.481c-0.237-1.894-0.646-3.75-1.223-5.563l8.092-15.096 \t\tc2.229-1.015,4.379-2.166,6.375-3.593c0.261-0.185,0.478-0.392,0.646-0.618C69.374,46.561,66.104,54.196,60.15,60.149z \t\t M59.791,40.571c0.301,0.574,0.598,1.154,0.896,1.742l-7.816,14.58c-0.045,0.01-0.088,0.02-0.133,0.026 \t\tc-4.225,0.789-8.484,1.209-12.779,1.229l-7.8-13.487c1.214-2.254,2.417-4.517,3.61-6.781c0.81-1.536,1.606-3.082,2.401-4.627 \t\tl16.143-1.658C56.29,34.495,58.163,37.457,59.791,40.571z M56.516,23.277c-0.766,2.023-1.586,4.025-2.401,6.031l-15.726,1.615 \t\tc-0.188-0.248-0.383-0.492-0.588-0.725c-1.857-2.103-3.726-4.193-5.592-6.289c0.017-0.021,0.034-0.037,0.051-0.056 \t\tc-0.753-0.752-1.508-1.504-2.261-2.258l4.378-13.181c0.302-0.08,0.606-0.147,0.913-0.18c2.38-0.242,4.763-0.516,7.149-0.654 \t\tc1.461-0.082,2.93-0.129,4.416-0.024l10.832,12.209C57.314,20.943,56.95,22.124,56.516,23.277z M60.15,12.221 \t\tc2.988,2.99,5.302,6.402,6.938,10.047c-2.024-1.393-4.188-2.539-6.463-3.473c-0.354-0.146-0.717-0.275-1.086-0.402L48.877,6.376 \t\tc0.074-0.519,0.113-1.039,0.129-1.563C53.062,6.464,56.864,8.936,60.15,12.221z M25.334,4.182c0.042,0.031,0.062,0.057,0.086,0.064 \t\tc2.437,0.842,4.654,2.082,6.744,3.553l-4.09,12.317c-0.021,0.006-0.041,0.012-0.061,0.021c-0.837,0.346-1.69,0.656-2.514,1.031 \t\tc-3.395,1.543-6.705,3.252-9.823,5.301l-8.071-4.775c0.012-0.252,0.055-0.508,0.141-0.736c0.542-1.444,1.075-2.896,1.688-4.311 \t\tc0.472-1.09,1.01-2.143,1.597-3.172c0.384-0.424,0.782-0.844,1.192-1.254c3.833-3.832,8.363-6.553,13.186-8.162 \t\tC25.384,4.098,25.358,4.139,25.334,4.182z" })
		)
	);
};

var Education = function Education(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ x: "0px", y: "0px", width: props.size + "px", height: props.size + "px", viewBox: "0 0 398.97 398.97" },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ id: "Layer_5_59_" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M225.092,276.586c-7.101,4.355-16.195,6.754-25.607,6.754c-9.412,0-18.506-2.398-25.607-6.754L57.946,205.484 c0,0-10.464-6.414-10.464,8.116c0,16.5,0,66,0,66c0,0.66,0,3.973,0,5c0,37.402,68.053,77.723,152,77.723s152-40.32,152-77.723 c0-1.027,0-4.34,0-5c0,0,0-52.502,0-70.003c0-11.663-7.439-5.964-7.439-5.964L225.092,276.586z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M392.289,148.927c8.908-5.463,8.908-14.403,0-19.867L215.681,40.745c-8.908-5.463-23.485-5.463-32.393,0L6.681,129.06 c-8.908,5.463-8.908,14.403,0,19.867l176.607,108.315c8.908,5.463,23.485,5.463,32.393,0" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M384.985,309.475c0-29.906,0-119.625,0-119.625s0.083-5.666-3.279-3.795c-2.697,1.501-9.308,5.186-11.637,7.212 c-2.689,2.337-2.083,7.583-2.083,7.583s0,81.469,0,108.625c0,1.542-1.325,2.278-1.957,2.65 c-6.105,3.589-10.21,10.214-10.21,17.809c0,11.414,9.252,20.667,20.667,20.667c11.414,0,20.666-9.253,20.666-20.667 c0-7.624-4.135-14.27-10.279-17.85C386.262,311.728,384.985,311.016,384.985,309.475z" })
				)
			)
		)
	);
};

var TeamWork = function TeamWork(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ x: "0px", y: "0px", viewBox: "0 0 512 512", width: props.size + "px", height: props.size + "px"
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M179.2,341.333c-2.475,0-9.472-7.68-14.106-12.774c-13.935-15.3-34.995-38.426-71.228-38.426 c-35.268,0-42.667,9.276-42.667,17.067c0,4.71,3.814,8.533,8.533,8.533c3.447,0,6.426-2.048,7.765-4.992 c1.681-0.93,8.055-3.541,26.368-3.541c28.689,0,45.286,18.219,58.607,32.853c9.335,10.249,16.708,18.347,26.726,18.347h110.933 c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H179.2z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M201.267,67.499c0.922,1.69,3.533,8.055,3.533,26.368c0,28.689-18.219,45.278-32.862,58.607 C161.69,161.809,153.6,169.182,153.6,179.2v110.933c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V179.2 c0-2.475,7.68-9.472,12.766-14.106c15.309-13.935,38.434-34.995,38.434-71.228c0-35.26-9.284-42.667-17.067-42.667 c-4.719,0-8.533,3.823-8.533,8.533C196.267,63.181,198.315,66.159,201.267,67.499z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M0,162.133c0,4.71,3.814,8.533,8.533,8.533h41.421c0.708,3.243,1.246,6.238,1.246,8.533v85.333 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V179.2c0-8.96-3.533-20.361-7.629-33.562 \t\t\t\tC56.218,131.371,51.2,115.2,51.2,102.4V25.6c0-4.702,3.823-8.533,8.533-8.533s8.533,3.831,8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533c0-4.702,3.823-8.533,8.533-8.533s8.533,3.831,8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533S153.6,30.31,153.6,25.6c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533v68.267 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533V25.6c0-14.114-11.486-25.6-25.6-25.6 \t\t\t\tc-6.554,0-12.535,2.475-17.067,6.537C140.535,2.475,134.554,0,128,0s-12.535,2.475-17.067,6.537C106.402,2.475,100.42,0,93.867,0 \t\t\t\tC87.313,0,81.331,2.475,76.8,6.537C72.269,2.475,66.287,0,59.733,0c-14.114,0-25.6,11.486-25.6,25.6v25.6h-25.6 \t\t\t\tC3.814,51.2,0,55.023,0,59.733s3.814,8.533,8.533,8.533h25.6V102.4c0,15.386,5.427,32.87,10.206,48.299 \t\t\t\tc0.307,0.981,0.597,1.929,0.896,2.901H8.533C3.814,153.6,0,157.423,0,162.133z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M346.906,183.441c13.935,15.3,34.995,38.426,71.228,38.426c35.268,0,42.667-9.276,42.667-17.067 \t\t\t\tc0-4.71-3.814-8.533-8.533-8.533c-3.447,0-6.426,2.048-7.765,4.992c-1.681,0.93-8.055,3.541-26.368,3.541 \t\t\t\tc-28.689,0-45.286-18.219-58.607-32.853c-9.336-10.249-16.708-18.347-26.726-18.347H221.867c-4.719,0-8.533,3.823-8.533,8.533 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533H332.8C335.275,170.667,342.272,178.347,346.906,183.441z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M264.533,443.733H179.2c-8.969,0-20.369,3.533-33.562,7.629c-14.259,4.42-30.438,9.438-43.238,9.438H25.6 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533c0-4.702,3.823-8.533,8.533-8.533c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533S20.89,409.6,25.6,409.6c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533c0-4.702,3.823-8.533,8.533-8.533c4.719,0,8.533-3.823,8.533-8.533S30.319,358.4,25.6,358.4 \t\t\t\tc-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h68.267c4.719,0,8.533-3.823,8.533-8.533 \t\t\t\tc0-4.71-3.814-8.533-8.533-8.533H25.6c-14.114,0-25.6,11.486-25.6,25.6c0,6.554,2.475,12.535,6.537,17.067 \t\t\t\tC2.475,371.465,0,377.446,0,384c0,6.554,2.475,12.536,6.537,17.067C2.475,405.598,0,411.58,0,418.133 \t\t\t\tc0,6.554,2.475,12.535,6.537,17.067C2.475,439.731,0,445.713,0,452.267c0,14.114,11.486,25.6,25.6,25.6h25.6v25.6 \t\t\t\tc0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-25.6H102.4c15.386,0,32.87-5.419,48.29-10.206 \t\t\t\tc0.99-0.307,1.937-0.589,2.91-0.887v36.693c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-41.421 \t\t\t\tc3.251-0.717,6.238-1.246,8.533-1.246h85.333c4.719,0,8.533-3.823,8.533-8.533C273.067,447.556,269.252,443.733,264.533,443.733z \t\t\t\t" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M505.464,76.8C509.525,72.269,512,66.287,512,59.733c0-14.114-11.486-25.6-25.6-25.6h-25.6v-25.6 \t\t\t\tc0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533v25.6H409.6c-15.386,0-32.87,5.419-48.29,10.206 \t\t\t\tc-0.99,0.307-1.937,0.589-2.91,0.887V8.533c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v41.421 \t\t\t\tc-3.251,0.717-6.238,1.246-8.533,1.246h-85.333c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H332.8 \t\t\t\tc8.969,0,20.369-3.533,33.562-7.629C380.621,56.218,396.8,51.2,409.6,51.2h76.8c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\ts-3.823,8.533-8.533,8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\tc0,4.702-3.823,8.533-8.533,8.533c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\ts-3.823,8.533-8.533,8.533c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533 \t\t\t\tc0,4.702-3.823,8.533-8.533,8.533h-68.267c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533H486.4 \t\t\t\tc14.114,0,25.6-11.486,25.6-25.6c0-6.554-2.475-12.535-6.536-17.067C509.525,140.535,512,134.554,512,128 \t\t\t\ts-2.475-12.535-6.536-17.067c4.062-4.531,6.536-10.513,6.536-17.067C512,87.313,509.525,81.331,505.464,76.8z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M310.733,444.501c-0.922-1.69-3.533-8.055-3.533-26.368c0-28.689,18.219-45.278,32.862-58.607 c10.249-9.336,18.338-16.708,18.338-26.726V221.867c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533V332.8 c0,2.475-7.68,9.472-12.766,14.106c-15.309,13.935-38.434,34.995-38.434,71.228c0,35.26,9.284,42.667,17.067,42.667 c4.719,0,8.533-3.823,8.533-8.533C315.733,448.819,313.685,445.841,310.733,444.501z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M512,349.867c0-4.71-3.814-8.533-8.533-8.533h-41.421c-0.708-3.243-1.246-6.238-1.246-8.533v-85.333 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533V332.8c0,8.96,3.533,20.361,7.629,33.562 c4.42,14.268,9.438,30.438,9.438,43.238v76.8c0,4.702-3.823,8.533-8.533,8.533c-4.71,0-8.533-3.831-8.533-8.533 c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533 c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533v-68.267 c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533V486.4c0,14.114,11.486,25.6,25.6,25.6 c6.554,0,12.535-2.475,17.067-6.536C371.465,509.525,377.446,512,384,512c6.554,0,12.536-2.475,17.067-6.536 c4.531,4.062,10.513,6.536,17.067,6.536c6.554,0,12.535-2.475,17.067-6.536c4.531,4.062,10.513,6.536,17.067,6.536 c14.114,0,25.6-11.486,25.6-25.6v-25.6h25.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-25.6V409.6 c0-15.386-5.427-32.87-10.206-48.299c-0.307-0.981-0.597-1.929-0.896-2.901h36.702C508.186,358.4,512,354.577,512,349.867z" })
				)
			)
		)
	);
};

var Tools = function Tools(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ x: "0px", y: "0px", width: props.size + "px", height: props.size + "px",
			viewBox: "0 0 486.924 486.924" },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"g",
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M13.361,409.063c-17.814,17.814-17.814,46.663,0,64.477c8.907,8.907,20.58,13.345,32.254,13.345 \t\t\t\t\ts23.347-4.438,32.254-13.345l149.717-149.748l-64.508-64.447L13.361,409.063z" }),
						"     ",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", { points: "387.548,131.577 452.755,97.863 486.893,31.866 455.065,0.038 389.098,34.207  \t\t\t\t\t355.324,99.353 276.012,178.756 308.175,210.98 \t\t\t\t" }),
						"     ",
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M401.835,304.641l-6.141-0.608c-11.126,0-21.675,2.28-31.524,5.928l-187.17-187.2 \t\t\t\t\tc3.648-9.849,5.928-20.398,5.928-31.524l-0.608-6.141c-3.222-47.454-42.316-85.058-90.59-85.058 \t\t\t\t\tc-14.045,0-27.208,3.435-39.094,9.12l60.586,60.586c3.192,3.192,5.381,6.961,6.84,10.944c3.982,10.761,1.824,23.347-6.84,32.041 \t\t\t\t\tc-5.928,5.928-13.71,8.907-21.492,8.907c-3.587,0-7.144-0.79-10.549-2.067c-3.982-1.52-7.752-3.648-10.944-6.87L9.652,52.143 \t\t\t\t\tc-5.685,11.886-9.12,25.049-9.12,39.094c0,48.274,37.604,87.368,85.058,90.59l6.141,0.608c11.126,0,21.675-2.28,31.524-5.897 \t\t\t\t\tl187.139,187.17c-3.587,9.849-5.867,20.398-5.867,31.524l0.638,6.141c3.162,47.484,42.286,85.058,90.56,85.058 \t\t\t\t\tc14.045,0,27.238-3.374,39.094-9.12l-60.586-60.586c-3.162-3.162-5.381-6.961-6.901-10.913 \t\t\t\t\tc-3.982-10.761-1.824-23.377,6.901-32.071c5.867-5.928,13.71-8.907,21.492-8.907c3.587,0,7.113,0.76,10.579,2.067 \t\t\t\t\tc3.982,1.49,7.782,3.618,10.913,6.84l60.586,60.586c5.715-11.917,9.12-25.049,9.12-39.094 \t\t\t\t\tC486.893,346.957,449.289,307.863,401.835,304.641z" })
					)
				)
			)
		)
	);
};

var BriefCase = function BriefCase(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ version: "1.1", x: "0px", y: "0px", width: props.size + "px", height: props.size + "px", viewBox: "0 0 512 512" },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M488.727,279.273c-6.982,0-11.636,4.655-11.636,11.636v151.273c0,6.982-4.655,11.636-11.636,11.636H46.545 \t\t\tc-6.982,0-11.636-4.655-11.636-11.636V290.909c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v151.273 \t\t\tc0,19.782,15.127,34.909,34.909,34.909h418.909c19.782,0,34.909-15.127,34.909-34.909V290.909 \t\t\tC500.364,283.927,495.709,279.273,488.727,279.273z" })
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M477.091,116.364H34.909C15.127,116.364,0,131.491,0,151.273v74.473C0,242.036,11.636,256,26.764,259.491l182.691,40.727 \t\t\tv37.236c0,6.982,4.655,11.636,11.636,11.636h69.818c6.982,0,11.636-4.655,11.636-11.636v-37.236l182.691-40.727 \t\t\tC500.364,256,512,242.036,512,225.745v-74.473C512,131.491,496.873,116.364,477.091,116.364z M279.273,325.818h-46.545v-46.545 \t\t\th46.545V325.818z M488.727,225.745c0,5.818-3.491,10.473-9.309,11.636l-176.873,39.564v-9.309c0-6.982-4.655-11.636-11.636-11.636 \t\t\th-69.818c-6.982,0-11.636,4.655-11.636,11.636v9.309L32.582,237.382c-5.818-1.164-9.309-5.818-9.309-11.636v-74.473 \t\t\tc0-6.982,4.655-11.636,11.636-11.636h442.182c6.982,0,11.636,4.655,11.636,11.636V225.745z" })
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M314.182,34.909H197.818c-19.782,0-34.909,15.127-34.909,34.909v11.636c0,6.982,4.655,11.636,11.636,11.636 s11.636-4.655,11.636-11.636V69.818c0-6.982,4.655-11.636,11.636-11.636h116.364c6.982,0,11.636,4.655,11.636,11.636v11.636 c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636V69.818C349.091,50.036,333.964,34.909,314.182,34.909z" })
			)
		)
	);
};

var ExperienceIcon = function ExperienceIcon(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"svg",
		{ x: "0px", y: "0px", width: props.size + "px", height: props.size + "px", viewBox: "0 0 481.291 481.291" },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"g",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"g",
				{ id: "Layer_2_16_" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"g",
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M138.814,146.22c3.12,40.976,19.417,23.314,22.779,41.27c5.59,29.848,32.016,51.436,48.466,58.893 c9.597,4.348,19.48,6.53,29.871,6.704v0.009c0.036,0,0.072-0.004,0.108-0.004s0.072,0.004,0.108,0.004v-0.009 c10.39-0.174,20.272-2.355,29.871-6.704c16.45-7.457,42.876-29.045,48.466-58.893c3.362-17.955,19.659-0.294,22.779-41.27 c0-16.33-8.898-20.394-8.898-20.394s4.523-24.171,6.295-42.77C340.854,59.877,325.129,0,241.25,0 c-0.367,0-0.707,0.02-1.065,0.024c-0.013,0-0.025,0-0.038-0.001V0.019c-0.036,0.001-0.072,0.002-0.108,0.002 s-0.072-0.001-0.108-0.002v0.005c-0.013,0.001-0.025,0.001-0.038,0.001c-0.358-0.005-0.698-0.024-1.065-0.024 c-83.878,0-99.604,59.877-97.409,83.056c1.771,18.599,6.295,42.77,6.295,42.77S138.814,129.89,138.814,146.22z" }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M430.313,347.371c-42.308-21.523-103.63-48.406-106.573-49.355c-0.033-0.012-0.058-0.014-0.09-0.024 \t\t\t\tc-1.721-0.613-3.571-0.953-5.504-0.953c-7.188,0-13.285,4.604-15.547,11.021c-0.012-0.008-0.024-0.013-0.036-0.021 \t\t\t\tc-10.92,26.315-30.979,73.223-43.434,95.842l-3-63.413c0,0,18.705-39.699,20.752-43.336c4.82-8.525,0.479-15.783-8.557-15.783 \t\t\t\tc-4.482,0-15.695,0-26.926,0c-0.013,0-0.025,0-0.038,0c-0.072,0-0.144,0-0.216,0c-0.013,0-0.025,0-0.038,0 \t\t\t\tc-0.154,0-0.308,0-0.462,0s-0.308,0-0.462,0c-0.013,0-0.025,0-0.038,0c-0.072,0-0.144,0-0.216,0c-0.013,0-0.025,0-0.038,0 \t\t\t\tc-11.23,0-22.442,0-26.926,0c-9.036,0-13.376,7.258-8.557,15.783c2.048,3.637,20.752,43.336,20.752,43.336l-2.999,63.413 \t\t\t\tc-12.455-22.619-32.514-69.524-43.434-95.842c-0.012,0.008-0.024,0.013-0.036,0.021c-2.262-6.414-8.359-11.021-15.547-11.021 \t\t\t\tc-1.933,0-3.783,0.34-5.504,0.953c-0.032,0.012-0.057,0.015-0.09,0.024c-2.942,0.949-64.265,27.832-106.573,49.355 \t\t\t\tc-19,9.666-30.467,21.688-30.467,34.34c0,41.826,0,99.58,0,99.58h219.227h0.191h0.105h0.006h0.107h0.191h0.309h0.309h0.191h0.105 \t\t\t\th0.006h0.105h0.191H460.78c0,0,0-57.754,0-99.58C460.779,369.059,449.313,357.037,430.313,347.371z" })
				)
			)
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = ({
	ExperienceIcon: ExperienceIcon,
	BriefCase: BriefCase,
	Tools: Tools,
	TeamWork: TeamWork,
	Education: Education,
	Interests: Interests
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(13)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Experience = function (_React$Component) {
  _inherits(Experience, _React$Component);

  function Experience() {
    _classCallCheck(this, Experience);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Experience.prototype.render = function render() {
    var rightStyle = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getRightSideDivStyle"])(this.props.cvWidth);
    var isMob = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(this.props.cvWidth);
    var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {};
    var leftSide = isMob ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'Experience'
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* default */].BriefCase, { size: __WEBPACK_IMPORTED_MODULE_1__styles_common__["iconSize"] });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: Object.assign(initialLeftStyle, Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getLeftSideDivStyle"])(this.props.cvWidth)) },
        leftSide
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorderAndPadding"])(rightStyle) },
        this.props.work.map(function (x) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkPlace, { key: x.company, work: x });
        })
      )
    );
  };

  return Experience;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



var WorkPlace = function (_React$Component2) {
  _inherits(WorkPlace, _React$Component2);

  function WorkPlace(props) {
    _classCallCheck(this, WorkPlace);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  WorkPlace.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          style: {
            padding: 10,
            borderRight: "3px solid black",
            margin: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkPlaceTitle, { work: this.props.work }),
        this.props.work.summary !== "" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkPlaceDescription, { work: this.props.work }),
        this.props.work.highlights && this.props.work.highlights.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WorkPlaceHighlights, { work: this.props.work })
      )
    );
  };

  return WorkPlace;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var WorkPlaceTitle = function (_React$Component3) {
  _inherits(WorkPlaceTitle, _React$Component3);

  function WorkPlaceTitle() {
    _classCallCheck(this, WorkPlaceTitle);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  WorkPlaceTitle.prototype.render = function render() {
    function monthDiff(d1, d2) {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth();
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    }

    var formatDate = function formatDate(date) {
      var year = date.match(/20\d\d/);
      return year;
    };
    var startDateFormatted = formatDate(this.props.work.startDate);
    var endDateFormatted = this.props.work.endDate ? formatDate(this.props.work.endDate) : "Present";

    var diffInMonths = monthDiff(new Date(this.props.work.startDate), this.props.work.endDate ? new Date(this.props.work.endDate) : new Date());

    var diffInYears = 0;
    if (diffInMonths > 11) {
      diffInYears = Math.floor(diffInMonths / 12.0);
      diffInMonths -= diffInYears * 12;
    }

    var formatDiff = function formatDiff() {
      var years = diffInYears > 0 ? diffInYears + "y" : "";
      var months = diffInMonths > 0 ? diffInMonths + "m" : "";
      if (years !== "" && months !== "") {
        return years + ", " + months;
      } else {
        return years + months;
      }
    };

    var diff = formatDiff();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: {
          display: "flex",
          justifyContent: "space-between"
        } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            this.props.work.company
          )
        ),
        ' - ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'i',
            null,
            this.props.work.position
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          startDateFormatted
        ),
        ' - ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          endDateFormatted
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'i',
            null,
            '  (',
            diff,
            ')'
          )
        )
      )
    );
  };

  return WorkPlaceTitle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var WorkPlaceDescription = function (_React$Component4) {
  _inherits(WorkPlaceDescription, _React$Component4);

  function WorkPlaceDescription() {
    _classCallCheck(this, WorkPlaceDescription);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  WorkPlaceDescription.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: {
            padding: 10,
            textAlign: "justify"
            // width: "45%",
            // display: "inline-block"
          } },
        this.props.work.summary
      )
    );
  };

  return WorkPlaceDescription;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var WorkPlaceHighlights = function (_React$Component5) {
  _inherits(WorkPlaceHighlights, _React$Component5);

  function WorkPlaceHighlights() {
    _classCallCheck(this, WorkPlaceHighlights);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  WorkPlaceHighlights.prototype.render = function render() {
    var toHighlight = function toHighlight(h, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: i },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: {
              padding: 3
            } },
          h
        )
      );
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: {
            padding: 10,
            textAlign: "justify"
            // width: "45%",
            // display: "inline-block"
          } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { type: 'square', style: {
              marginTop: 0,
              marginBottom: 0
            } },
          this.props.work.highlights.map(function (x, i) {
            return toHighlight(x, i);
          })
        )
      )
    );
  };

  return WorkPlaceHighlights;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(5);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export locationType */
/* unused harmony export profileType */
/* unused harmony export basicsType */
/* unused harmony export workType */
/* unused harmony export volunteerType */
/* unused harmony export educationType */
/* unused harmony export awardsType */
/* unused harmony export publicationsType */
/* unused harmony export skillsType */
/* unused harmony export languagesType */
/* unused harmony export interestsType */
/* unused harmony export referencesType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resumeType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


// https://github.com/deltaskelta/react-awesome-resume/blob/master/src/person.js

var locationType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  address: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  postalCode: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  city: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  countryCode: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  region: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
}).isRequired;

var profileType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  network: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  username: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  url: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
}).isRequired;

var basicsType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  label: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  picture: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  email: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  phone: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  website: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  summary: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  location: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape(locationType),
  profiles: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(profileType)
}).isRequired;

var workType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  company: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  position: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  website: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  startDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  endDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  summary: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  highlights: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
})).isRequired;

var volunteerType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  organization: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  position: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  website: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  startDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  endDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  summary: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  highlights: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
})).isRequired;

var educationType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  institution: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  area: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  studyType: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  startDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  endDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  gpa: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  courses: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
})).isRequired;

var awardsType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  title: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  date: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  awarder: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  summary: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
})).isRequired;

var publicationsType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  publisher: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  releaseDate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  website: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  summary: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
})).isRequired;

var skillsType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  level: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  keywords: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
})).isRequired;

var languagesType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  level: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
})).isRequired;

var interestsType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  keywords: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
})).isRequired;

var referencesType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  reference: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
})).isRequired;

var resumeType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CV__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_json__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__resume_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skills_json__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skills_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__skills_json__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  _default.prototype.render = function render() {
    var theme = "default";
    var print = this.props.print === "true" || this.props.print === true;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_CV__["a" /* default */], {
      jsonResume: __WEBPACK_IMPORTED_MODULE_2__resume_json___default.a,
      skills: __WEBPACK_IMPORTED_MODULE_3__skills_json___default.a,
      theme: theme,
      print: print,
      divId: this.props.divId,
      cvType: this.props.cvType,
      logoPrefix: this.props.logoPrefix
    });
  };

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumeType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CVStateless__ = __webpack_require__(16);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CV = function (_Component) {
  _inherits(CV, _Component);

  function CV(props) {
    _classCallCheck(this, CV);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var print = props.print;

    _this.state = {
      cvWidth: 100,
      print: print
    };
    _this.handleResize = _this.handleResize.bind(_this);
    _this.getCVWidth = _this.getCVWidth.bind(_this);
    return _this;
  }

  CV.prototype.getCVWidth = function getCVWidth() {
    var maxWidth = 1200;
    var width = document.getElementById(this.props.divId).offsetWidth;
    return width > maxWidth ? maxWidth : width;
  };

  CV.prototype.componentDidMount = function componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  };

  CV.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  };

  CV.prototype.componentWillMount = function componentWillMount() {
    // http://odinodin.no/2015-11-06-react-print/
    // Run a media query through the matchMedia API

    // won't have window during gatsby build
    if (typeof window !== "undefined") {
      var query = window.matchMedia('print');
      var queryListener = function (m) {
        this.setState(Object.assign({}, this.state, {
          print: m.matches,
          cvWidth: 600 // force to be smaller layout
        }));
      }.bind(this);

      query.addListener(queryListener);
    }
  };

  CV.prototype.handleResize = function handleResize() {
    this.setState(Object.assign({}, this.state, {
      cvWidth: this.getCVWidth()
    }));
  };

  CV.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CVStateless__["a" /* default */], {
      jsonResume: this.props.jsonResume,
      skills: this.props.skills,
      print: this.state.print,
      cvWidth: this.state.cvWidth,
      cvType: this.props.cvType,
      logoPrefix: this.props.logoPrefix
    });
  };

  return CV;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CV.propTypes = {
  jsonResume: __WEBPACK_IMPORTED_MODULE_2__resumeType__["a" /* resumeType */].isRequired,
  divId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  skills: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  print: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (CV);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(7);
var assign = __webpack_require__(14);

var ReactPropTypesSecret = __webpack_require__(8);
var checkPropTypes = __webpack_require__(15);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(6);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(8);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__themes_default__ = __webpack_require__(17);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: { margin: 15 } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__themes_default__["a" /* default */], {
      jsonResume: props.jsonResume,
      skills: props.skills,
      print: props.print,
      cvWidth: props.cvWidth,
      cvType: props.cvType,
      logoPrefix: props.logoPrefix
    })
  );
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumeType__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Name__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Profile__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_WorkAndSkills__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_WorkAndSkillsPrint__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Volunteer__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Education__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Experience__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Awards__ = __webpack_require__(26);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var Default = function (_Component) {
  _inherits(Default, _Component);

  function Default() {
    _classCallCheck(this, Default);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Default.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      null,
      this.props.jsonResume.basics && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Name__["a" /* default */], { basics: this.props.jsonResume.basics, print: this.props.print, cvWidth: this.props.cvWidth }),
      this.props.jsonResume.basics && this.props.jsonResume.basics.summary && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Profile__["a" /* default */], { basics: this.props.jsonResume.basics, cvWidth: this.props.cvWidth, cvType: this.props.cvType }),
      this.props.jsonResume.work.length > 0 && this.props.print && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__skills_WorkAndSkillsPrint__["a" /* default */], { work: this.props.jsonResume.work, skills: this.props.jsonResume.skills, skillsObj: this.props.skills, cvWidth: this.props.cvWidth }),
      this.props.jsonResume.work.length > 0 && this.props.print && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Experience__["a" /* default */], { work: this.props.jsonResume.work, clickSelect: function clickSelect(t, v) {
          return null;
        }, isSelected: function isSelected(t, v) {
          return null;
        }, selected: "", cvWidth: this.props.cvWidth }),
      this.props.jsonResume.work.length > 0 && !this.props.print && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__skills_WorkAndSkills__["a" /* default */], { work: this.props.jsonResume.work, skills: this.props.jsonResume.skills, skillsObj: this.props.skills, cvWidth: this.props.cvWidth, logoPrefix: this.props.logoPrefix }),
      this.props.jsonResume.education.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Education__["a" /* default */], { education: this.props.jsonResume.education, cvWidth: this.props.cvWidth }),
      this.props.jsonResume.awards.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Awards__["a" /* default */], { awards: this.props.jsonResume.awards, cvWidth: this.props.cvWidth }),
      this.props.jsonResume.volunteer.length > 0 && !this.props.print && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Volunteer__["a" /* default */], { volunteer: this.props.jsonResume.volunteer, cvWidth: this.props.cvWidth })
    );
  };

  return Default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Default.propTypes = {
  jsonResume: __WEBPACK_IMPORTED_MODULE_2__resumeType__["a" /* resumeType */].isRequired,
  skills: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  cvWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  print: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Default);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    props.print && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Name, { basics: props.basics })
  );
});

var Name = function Name(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: {
        borderBottom: "1px solid black",
        display: "flex",
        justifyContent: "space-between"
      } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { style: { textAlign: "left" } },
        props.basics.name
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Profiles, { profiles: props.basics.profiles })
    )
  );
};

var Profiles = function Profiles(props) {
  var sTable = {
    textAlign: "right",
    float: "right"
  };

  var profile = function profile(prof) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tr',
      { key: prof.network },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        { style: Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorder"])({ padding: 5 }) },
        prof.network
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'td',
        { style: Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorder"])({ padding: 5 }) },
        prof.username
      )
    );
  };

  var profilesForPrintedCv = props.profiles.filter(function (x) {
    return x.network !== "Twitter";
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'table',
    { style: sTable },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      null,
      profilesForPrintedCv.map(function (x) {
        return profile(x);
      })
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Summary, { basics: props.basics, cvWidth: props.cvWidth, cvType: props.cvType });
});

var Summary = function Summary(props) {
  var isMob = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(props.cvWidth);
  var leftSide = isMob ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h4',
    null,
    'Profile'
  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* default */].ExperienceIcon, { size: __WEBPACK_IMPORTED_MODULE_1__styles_common__["iconSize"] });
  var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {};
  var summary = props.basics.summary;
  var summaryOverride = props.basics["summary-" + props.cvType];
  if (summaryOverride) {
    summary = summaryOverride;
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getLeftSideDivStyle"])(props.cvWidth), initialLeftStyle) },
      leftSide
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getRightSideDivStyle"])(props.cvWidth), Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorderAndPadding"])({})) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { style: {
            margin: 10,
            textAlign: "justify"
          } },
        summary
      )
    )
  );
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkAndSkills; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selected___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__selected__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Experience__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transitions_css__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transitions_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__transitions_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var WorkAndSkills = function (_React$Component) {
  _inherits(WorkAndSkills, _React$Component);

  function WorkAndSkills(props) {
    _classCallCheck(this, WorkAndSkills);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      selectedType: "",
      selectedValue: ""
    };

    _this.clickSelect = _this.clickSelect.bind(_this);
    _this.isSelected = _this.isSelected.bind(_this);
    return _this;
  }

  WorkAndSkills.prototype.clickSelect = function clickSelect(type, value) {
    this.setState({
      selectedType: type,
      selectedValue: value
    });
  };

  WorkAndSkills.prototype.isSelected = function isSelected(type, value) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__selected__["isSelectedFunc"])(this.state.selectedType, this.state.selectedValue, type, value, this.props.skillsObj);
  };

  WorkAndSkills.prototype.render = function render() {
    var that = this;
    var getSelectedInfo = function getSelectedInfo() {
      var headingType = "";
      var type = that.state.selectedType;
      var name = "todo";
      var description = "todo";
      switch (type) {
        case __WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Skill:
          headingType = "Skill";
          var skill = that.props.skillsObj.skills[that.state.selectedValue];
          name = skill.name;
          description = skill.description;
          break;
        case __WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Setting:
          var setting = Object.values(that.props.skillsObj.settings).filter(function (s) {
            return s.name === that.state.selectedValue;
          })[0];
          description = setting.description;
          headingType = "Work place";
          name = that.state.selectedValue;
          break;
        case __WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].SkillType:
          var skillType = Object.values(that.props.skillsObj.skillTypes).filter(function (s) {
            return s.name === that.state.selectedValue;
          })[0];
          description = skillType.description;
          headingType = "Skill type";
          name = that.state.selectedValue;
          break;
      }
      var pStyle = {
        marginTop: 5,
        marginBottom: 5
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { style: pStyle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              headingType
            )
          ),
          ": " + name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { style: pStyle },
          description
        )
      );
    };
    var getSelectedText = function getSelectedText() {
      var isInstructions = that.state.selectedValue === "";
      var text = isInstructions ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'i',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Click on a workplace, skill type or skill to start.'
            )
          )
        )
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        getSelectedInfo()
      );

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: {
            padding: 10,
            marginLeft: 20
          } },
        text
      );
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SkillTypes, { getSelectedText: getSelectedText, work: this.props.work, skills: this.props.skills, skillsObj: this.props.skillsObj, clickSelect: this.clickSelect, isSelected: this.isSelected, cvWidth: this.props.cvWidth, logoPrefix: this.props.logoPrefix }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Experience__["a" /* default */], { work: this.props.work, cvWidth: this.props.cvWidth })
    );
  };

  return WorkAndSkills;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



var SkillTypes = function (_React$Component2) {
  _inherits(SkillTypes, _React$Component2);

  function SkillTypes(props) {
    _classCallCheck(this, SkillTypes);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.clickSelect = _this2.props.clickSelect.bind(_this2);
    _this2.isSelected = _this2.props.isSelected.bind(_this2);
    _this2.getSelectedText = _this2.props.getSelectedText.bind(_this2);
    return _this2;
  }

  SkillTypes.prototype.render = function render() {
    var _this3 = this;

    var allSkills = Object.keys(this.props.skillsObj.skills);
    var isMob = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(this.props.cvWidth);
    var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {};
    var leftSide = isMob ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'Skills'
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__icons__["a" /* default */].Tools, { size: __WEBPACK_IMPORTED_MODULE_1__styles_common__["iconSize"] });

    var skillsPadding = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: 10,
      border: "2px solid black",
      padding: 10,
      borderRadius: 10
    };

    var titlePadding = {
      margin: 10
    };

    var logoPrefix = this.props.logoPrefix || "";

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: Object.assign(initialLeftStyle, Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getLeftSideDivStyle"])(this.props.cvWidth)) },
        leftSide
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorderAndPadding"])(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getRightSideDivStyle"])(this.props.cvWidth))) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          this.getSelectedText()
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: skillsPadding },
          this.props.work.map(function (x) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Setting, { key: x.company, work: x, skillsObj: _this3.props.skillsObj, cvWidth: _this3.props.cvWidth,
              clickSelect: _this3.props.clickSelect,
              isSelected: _this3.props.isSelected,
              logoPrefix: logoPrefix });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: skillsPadding },
          this.props.skills.map(function (x) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SkillType, { key: x.name, skill: x, skillsObj: _this3.props.skillsObj, cvWidth: _this3.props.cvWidth,
              clickSelect: _this3.props.clickSelect,
              isSelected: _this3.props.isSelected,
              logoPrefix: logoPrefix });
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: skillsPadding },
          allSkills.map(function (x) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Skill, { key: x, skillId: x, skillsObj: _this3.props.skillsObj, cvWidth: _this3.props.cvWidth,
              clickSelect: _this3.props.clickSelect,
              isSelected: _this3.props.isSelected });
          })
        )
      )
    );
  };

  return SkillTypes;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var SkillType = function (_React$Component3) {
  _inherits(SkillType, _React$Component3);

  function SkillType(props) {
    _classCallCheck(this, SkillType);

    var _this4 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this4.clickSelect = _this4.props.clickSelect.bind(_this4);
    _this4.isSelected = _this4.props.isSelected.bind(_this4);
    _this4.state = { hover: false };
    return _this4;
  }

  SkillType.prototype.handleMouseIn = function handleMouseIn() {
    this.setState({ hover: true });
  };

  SkillType.prototype.handleMouseOut = function handleMouseOut() {
    this.setState({ hover: false });
  };

  SkillType.prototype.render = function render() {
    var _this5 = this;

    var selected = this.isSelected(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].SkillType, this.props.skill.name);
    var skillClass = Object(__WEBPACK_IMPORTED_MODULE_2__selected__["getSkillClass"])(selected);
    var basicStyle = {
      display: "inline-block",
      padding: 3
      // if(this.state.hover){
      //   skillClass = getSkillClass(selectedValues.Visible)
      // }

    };return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: skillClass, style: basicStyle,
        onMouseOver: this.handleMouseIn.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { onClick: function onClick() {
            return _this5.clickSelect(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].SkillType, _this5.props.skill.name);
          } },
        this.props.skill.name
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SkillLogos, {
        skillIds: this.props.skill.keywords, show: this.state.hover,
        clickSelect: this.clickSelect, cvWidth: this.props.cvWidth,
        logoPrefix: this.props.logoPrefix
      })
    );
  };

  return SkillType;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Skill = function (_React$Component4) {
  _inherits(Skill, _React$Component4);

  function Skill(props) {
    _classCallCheck(this, Skill);

    var _this6 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

    _this6.clickSelect = _this6.props.clickSelect.bind(_this6);
    _this6.isSelected = _this6.props.isSelected.bind(_this6);
    return _this6;
  }

  Skill.prototype.render = function render() {
    var _this7 = this;

    var selected = this.isSelected(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Skill, this.props.skillId);
    var skillName = this.props.skillsObj.skills[this.props.skillId].name;
    var basicStyle = {
      display: "inline-block",
      padding: 3
    };
    var skillClass = Object(__WEBPACK_IMPORTED_MODULE_2__selected__["getSkillClass"])(selected);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: skillClass,
        style: basicStyle,
        onClick: function onClick() {
          return _this7.clickSelect(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Skill, _this7.props.skillId);
        } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        skillName
      )
    );
  };

  return Skill;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Setting = function (_React$Component5) {
  _inherits(Setting, _React$Component5);

  function Setting(props) {
    _classCallCheck(this, Setting);

    var _this8 = _possibleConstructorReturn(this, _React$Component5.call(this, props));

    _this8.clickSelect = _this8.props.clickSelect.bind(_this8);
    _this8.isSelected = _this8.props.isSelected.bind(_this8);
    _this8.state = { hover: false };
    return _this8;
  }

  Setting.prototype.handleMouseIn = function handleMouseIn() {
    this.setState({ hover: true });
  };

  Setting.prototype.handleMouseOut = function handleMouseOut() {
    this.setState({ hover: false });
  };

  Setting.prototype.render = function render() {
    var _this9 = this;

    var company = this.props.work.company;
    var selected = this.isSelected(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Setting, company);
    var basicStyle = {
      display: "inline-block",
      padding: 3
    };
    var settingClass = Object(__WEBPACK_IMPORTED_MODULE_2__selected__["getSettingClass"])(selected);
    if (this.state.hover) {
      settingClass = Object(__WEBPACK_IMPORTED_MODULE_2__selected__["getSettingClass"])(__WEBPACK_IMPORTED_MODULE_2__selected__["selected"].HighlightedAndSelected);
    }
    var slug = company.replace(" ", "");
    var png = this.props.logoPrefix + "/logos/settings/" + slug + ".png";
    var imgStyle = {
      width: 160

      // var addDefaultSrc = function(src){
      //   return ev => {
      //     ev.target.onerror = null;
      //     ev.target.src = src;
      //     return true;
      //   }
      // }

    };return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: settingClass,
        onMouseOver: this.handleMouseIn.bind(this), onMouseOut: this.handleMouseOut.bind(this),
        style: basicStyle },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: png,
        style: imgStyle
        //onError={addDefaultSrc("/CV" + png)}
        , onClick: function onClick() {
          return _this9.clickSelect(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Setting, company);
        } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SkillLogos, {
        skillIds: this.props.work.skills, show: this.state.hover,
        clickSelect: this.clickSelect, cvWidth: this.props.cvWidth,
        logoPrefix: this.props.logoPrefix
      })
    );
  };

  return Setting;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var SkillLogos = function (_React$Component6) {
  _inherits(SkillLogos, _React$Component6);

  function SkillLogos(props) {
    _classCallCheck(this, SkillLogos);

    var _this10 = _possibleConstructorReturn(this, _React$Component6.call(this, props));

    _this10.clickSelect = _this10.props.clickSelect.bind(_this10);
    return _this10;
  }

  SkillLogos.prototype.render = function render() {
    var _this11 = this;

    var len = 40;
    var that = this;
    var toLogo = function toLogo(skillId, clickSelect) {
      // var addDefaultSrc = function(src){
      //   return ev => {
      //     ev.target.onerror = null;
      //     ev.target.src = src;
      //     return true;
      //   }
      // }
      var png = that.props.logoPrefix + "/logos/skills/" + skillId + ".png";
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: skillId, style: {
            padding: 2
          } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
          height: len,
          width: len,
          src: png
          //onError={addDefaultSrc("/CV" + png)}
          , alt: skillId,
          onClick: function onClick() {
            return clickSelect(__WEBPACK_IMPORTED_MODULE_2__selected__["selectedTypes"].Skill, skillId);
          }
        })
      );
    };
    var dontShowComponent = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(this.props.cvWidth);

    var tooltipStyle = {
      display: this.props.show ? 'flex' : 'none',
      flexWrap: "wrap",
      position: "absolute",
      padding: 10,
      backgroundColor: "white",
      border: "1px solid black",
      borderRadius: 10,
      maxWidth: 500,
      opacity: 1.0
    };

    return dontShowComponent ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: tooltipStyle },
      this.props.skillIds.map(function (s) {
        return toLogo(s, _this11.clickSelect);
      })
    );
  };

  return SkillLogos;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var selected = {
    HighlightedAndSelected: "HighlightedAndSelected",
    Highlighted: "Highlighted",
    Visible: "Visible",
    Hidden: "Hidden"
};

module.exports.selected = selected;

var types = {
    Skill: "Skill",
    SkillType: "SkillType",
    Setting: "Setting"
};

module.exports.selectedTypes = types;

module.exports.isSelectedFunc = function (stateType, stateValue, currentType, currentValue, skillsObj) {

    if (stateType === undefined || stateType === null || stateValue === undefined || stateValue === null || !currentType || !currentValue) {
        throw new Error("Bad input - '" + stateType + "' '" + stateValue + "' '" + currentType + "' '" + currentValue + "'");
    }

    var getSettingId = function getSettingId(settingName) {
        var settingVals = Object.values(skillsObj.settings);
        var settingWithName = settingVals.filter(function (s) {
            return s.name === settingName;
        });
        if (settingWithName.length < 1) {
            throw new Error("Bad setting name - " + settingName);
        }
        return settingWithName[0].id;
    };

    var getSkillId = function getSkillId(skillName) {
        var skillVals = Object.values(skillsObj.skills);
        var skillsWithName = skillVals.filter(function (s) {
            return s.name === skillName;
        });
        if (skillsWithName.length < 1) {
            throw new Error("Bad skill name - " + skillName);
        }
        return skillsWithName[0].id;
    };

    var getSkillTypeId = function getSkillTypeId(skillTypeName) {
        var skillTypeVals = Object.values(skillsObj.skillTypes);
        var skillsTypesWithName = skillTypeVals.filter(function (s) {
            return s.name === skillTypeName;
        });
        if (skillsTypesWithName.length < 1) {
            throw new Error("Bad skill type name - " + skillTypeName);
        }
        return skillsTypesWithName[0].id;
    };

    var selectedIsBlank = function selectedIsBlank() {
        return selected.Visible;
    };

    var selectedIsSkill = function selectedIsSkill() {
        if (currentType === types.Skill) {
            if (currentValue === stateValue) {
                return selected.HighlightedAndSelected;
            } else {
                return selected.Hidden;
            }
        }
        var skill = skillsObj.skills[stateValue];
        if (currentType === types.SkillType) {
            var skillTypeId = getSkillTypeId(currentValue);
            if (skill.skillTypesIds.includes(skillTypeId)) {
                return selected.Highlighted;
            } else {
                return selected.Hidden;
            }
        }
        if (currentType === types.Setting) {
            var settingId = getSettingId(currentValue);
            if (skill.settingsIds.includes(settingId)) {
                return selected.Highlighted;
            } else {
                return selected.Hidden;
            }
        }
        throw new Error("is bad type - " + currentType);
    };

    var selectedIsWork = function selectedIsWork() {
        if (currentType === types.SkillType) {
            return selected.Hidden;
        }
        if (currentType === types.Setting) {
            if (currentValue === stateValue) {
                return selected.HighlightedAndSelected;
            } else {
                return selected.Hidden;
            }
        }
        if (currentType === types.Skill) {
            var skill = skillsObj.skills[currentValue];
            var settingId = getSettingId(stateValue);
            if (skill.settingsIds.includes(settingId)) {
                return selected.Highlighted;
            } else {
                return selected.Hidden;
            }
        }
        throw new Error("is bad type - " + currentType);
    };
    var selectedIsSkillType = function selectedIsSkillType() {
        if (currentType === types.Setting) {
            return selected.Hidden;
        }
        if (currentType === types.SkillType) {
            if (currentValue === stateValue) {
                return selected.HighlightedAndSelected;
            } else {
                return selected.Hidden;
            }
        }
        if (currentType === types.Skill) {
            var skill = skillsObj.skills[currentValue];
            var skillTypeId = getSkillTypeId(stateValue);
            if (skill.skillTypesIds.includes(skillTypeId)) {
                return selected.Highlighted;
            } else {
                return selected.Hidden;
            }
        }
        throw new Error("is bad type - " + currentType);
    };
    if (stateType === "" && stateValue === "") return selectedIsBlank();
    if (stateType === types.Skill) return selectedIsSkill();
    if (stateType === types.SkillType) return selectedIsSkillType();
    if (stateType === types.Setting) return selectedIsWork();

    return selected.Visible;
};

module.exports.getSkillClass = function (s) {
    switch (s) {
        case selected.HighlightedAndSelected:
            return "skill-to-s";
        case selected.Highlighted:
            return "skill-to-h";
        case selected.Visible:
            return "skill-to-v";
        case selected.Hidden:
            return "skill-to-i";
        default:
            throw new Error("Bad value get class - " + s);
    }
};

module.exports.getSettingClass = function (s) {
    switch (s) {
        case selected.HighlightedAndSelected:
            return "setting-to-s";
        case selected.Highlighted:
            return "setting-to-h";
        case selected.Visible:
            return "setting-to-v";
        case selected.Hidden:
            return "setting-to-i";
        default:
            throw new Error("Bad value get class - " + s);
    }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkAndSkillsPrint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Experience__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var WorkAndSkillsPrint = function (_React$Component) {
  _inherits(WorkAndSkillsPrint, _React$Component);

  function WorkAndSkillsPrint() {
    _classCallCheck(this, WorkAndSkillsPrint);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  WorkAndSkillsPrint.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Skills, { skills: this.props.skills, skillsObj: this.props.skillsObj, cvWidth: this.props.cvWidth })
    );
  };

  return WorkAndSkillsPrint;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



var Skills = function (_React$Component2) {
  _inherits(Skills, _React$Component2);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Skills.prototype.render = function render() {
    var _this3 = this;

    var isMob = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(this.props.cvWidth);
    var initialLeftStyle = isMob ? { borderRight: "3px solid black" } : {};
    var leftStyle = Object.assign(initialLeftStyle, Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getLeftSideDivStyle"])(this.props.cvWidth));

    var leftSide = isMob ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'Skills'
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["a" /* default */].Tools, { size: __WEBPACK_IMPORTED_MODULE_1__styles_common__["iconSize"] });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: leftStyle },
        leftSide
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorder2AndPadding"])(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getRightSideDivStyle"])(this.props.cvWidth)) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { margin: 10 } },
          this.props.skills.map(function (x) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { margin: 5, paddingLeft: 10, borderLeft: "3px solid black" } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Skill, { key: x.name, skill: x, skillsObj: _this3.props.skillsObj })
            );
          })
        )
      )
    );
  };

  return Skills;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Skill = function (_React$Component3) {
  _inherits(Skill, _React$Component3);

  function Skill() {
    _classCallCheck(this, Skill);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Skill.prototype.render = function render() {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          this.props.skill.name
        ),
        ' - ',
        this.props.skill.keywords.map(function (x, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Keyword, { key: x, keywordId: x,
            skillsObj: _this5.props.skillsObj,
            isFinal: i === _this5.props.skill.keywords.length - 1 });
        })
      )
    );
  };

  return Skill;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Keyword = function (_React$Component4) {
  _inherits(Keyword, _React$Component4);

  function Keyword() {
    _classCallCheck(this, Keyword);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  Keyword.prototype.render = function render() {
    //var selectId = "keyword:" + this.props.keywordId
    var keyWordName = this.props.skillsObj.skills[this.props.keywordId].name;
    var commaOrBlank = this.props.isFinal ? "" : ",";
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      null,
      keyWordName + commaOrBlank,
      ' '
    );
  };

  return Keyword;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var toVolunteer = function toVolunteer(vol, i) {
    var key = vol.organization + i;
    var formatDate = function formatDate(date) {
      var year = date.match(/20\d\d/);
      return year;
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: key },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: {
            padding: 10,
            borderRight: "3px solid black",
            margin: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: {
              display: "flex",
              justifyContent: "space-between"
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                vol.organization
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              formatDate(vol.startDate)
            ),
            ' - ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              formatDate(vol.endDate)
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          vol.summary
        )
      )
    );
  };

  var isMob = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(props.cvWidth);
  var initialLeftStyle = isMob ? { borderLeft: "3px solid black" } : {};
  var leftSide = isMob ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h4',
    null,
    'Volunteering'
  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* default */].TeamWork, { size: __WEBPACK_IMPORTED_MODULE_1__styles_common__["iconSize"] });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getLeftSideDivStyle"])(props.cvWidth), initialLeftStyle) },
      leftSide
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorderAndPadding"])(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getRightSideDivStyle"])(props.cvWidth))) },
      props.volunteer.map(function (x, i) {
        return toVolunteer(x, i);
      })
    )
  );
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var toEducation = function toEducation(edu, i) {
    var key = edu.institution + i;
    var formatDate = function formatDate(date) {
      var year = date.match(/20\d\d/);
      return year;
    };
    var fStart = formatDate(edu.startDate);
    var fEnd = formatDate(edu.endDate);

    var eduBottomStyle = {
      maxWidth: "50%",
      padding: 10
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: key },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: {
            padding: 10,
            borderLeft: "3px solid black",
            margin: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: {
              display: "flex",
              justifyContent: "space-between"
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                edu.institution
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              fStart
            ),
            ' - ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              fEnd
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: {
              display: "flex",
              justifyContent: "space-evenly"
            } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: eduBottomStyle },
            edu.studyType
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: eduBottomStyle },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              edu.gpa
            )
          )
        )
      )
    );
  };
  var isMob = Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["isMobile"])(props.cvWidth);
  var initialLeftStyle = isMob ? { borderRight: "3px solid black" } : {};
  var leftSide = isMob ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h4',
    null,
    'Education'
  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* default */].Education, { size: __WEBPACK_IMPORTED_MODULE_1__styles_common__["iconSize"] });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getLeftSideDivStyle"])(props.cvWidth), initialLeftStyle) },
      leftSide
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["mixWithBorder2AndPadding"])(Object(__WEBPACK_IMPORTED_MODULE_1__styles_common__["getRightSideDivStyle"])(props.cvWidth))) },
      props.education.map(function (x, i) {
        return toEducation(x, i);
      })
    )
  );
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var toAward = function toAward(award, i) {
    var key = award + i;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      { key: key },
      i
    );
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'Awards'
    ),
    props.awards.map(function (x, i) {
      return toAward(x, i);
    })
  );
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {"basics":{"name":"Chester Burbidge","label":"Software Engineer","website":"https://chester.codes","picture":"","summary":"A software professional with a passion for the craft, constantly learning and improving. \n\nExperienced with various methodologies across the full software development lifecycle. I have written code for mobile, the desktop and the full web stack, using a variety of programing languages and paradigms. \n\nA regular attender, and occasional presenter, of technical talks on various topics. Interested in teaching through volunteering my time to the Code Club initiative.","summary-winops":"A software professional who is constantly learning and improving. Experienced with designing, building and deploying IAAS, PAAS and serverless cloud solutions on AWS and Azure. I have experience running .NET services and websites in a Windows Server environment. Passionate about automation and everything as code. I have used technologies for infrastructure as code (terraform and cloud specific), configuration management (Chef mostly) and general scripting (Powershell, bash, python etc).","summary-dotnet":"A passionate and capable developer with experience of a wide range of the Microsoft and .NET technologies. I have written code for a variety of 'back end' environments, including web sites and services using C# .NET framework on Windows Server and F# .NET Core on linux. Client side experience includes writing JavaScript and typescript code using different paradigms and libraries including React JS, Angular JS and jQuery. I have worked with agile methodologies across the full software development lifecycle. A regular attender, and occasional presenter, of technical talks on various topics.","location":{"address":"","postalCode":"","city":"","countryCode":"","region":""},"profiles":[{"network":"Web","username":"chester.codes","url":"https://chester.codes"},{"network":"Twitter","username":"chestercodes","url":"https://twitter.com/chestercodes"},{"network":"Github","username":"chestercodes","url":"https://github.com/chestercodes"}]},"work":[{"company":"Scott Logic","position":"Software Engineer","website":"https://www.scottlogic.com/","startDate":"2017-10-16","endDate":"2018-09-07","summary":"","highlights":["Designed and implemented ETL pipeline on Azure using Data Factory V2. Implemented data warehouse reporting solution using SQL Datawarehouse and PowerBI.","Wrote AWS infrastructure code for data engineering project using Terraform. Deployed a wide range of resources such as Kinesis, EC2 VMs and ECS containers.","Developed REST API for automated download and analysis of github repositories using .Net Core running F# on ubuntu.","Introduced SpecFlow into project to increase efficiency of test development and provide living documentation of automated tests.","Ran internal study group for advancing company knowledge on cloud computing."],"skills":["apacheSpark","aspWebApi","azureDataFactory","azureSql","azureSqlDw","azureResourceManager","azureHdInsights","awsECR","awsECS","bashScripting","bootstrap","continuousIntegration","cSharp","css","docker","dotNetCore","dotNetFramework","esSixPromises","fSharp","git","html","javascript","jira","linq","mstest","nodeJs","nunit","reactJs","resharper","restfulWebservices","sqlServerManagementStudio","specflow","terraform","tSql","visualStudio","vstest"]},{"company":"Abide Financial","position":"Software Engineer","website":"http://www.abide-financial.com/","startDate":"2015-03-01","endDate":"2017-10-15","summary":"","highlights":["Developed code to enrich and validate financial transaction data using C# and T-SQL, using 'best practices' and TDD where possible.","Developed AWS lambda functions using python and node.js for environment automation. Tasks including database setup and automated resource spin up/down.","Implemented CI and deployment solutions for AWS resources including EC2 and Lambda. This required extensive use of Teamcity and Octopus deploy. ","Created NuGet packages to promote 'best practices' in build and deployment automation.","Wrote Powershell scripts for file archival and other Windows Server administration tasks.  Automated configuration of log aggregation agents on production systems.","Spread 'best practices' in methods and technologies through organising department wide, weekly workshops."],"skills":["angularJs","akkaDotNet","aspDotNetMvc","awsCloudformation","awsDynamoDB","awsEC2","awsLambda","awsKinesis","awsOpsworks","awsRedshift","awsSqs","awsS3","bashScripting","bootstrap","cake","chef","continuousIntegration","cSharp","css","dotNetFramework","esSixPromises","fSharp","git","html","javascript","jira","linq","moq","mstest","nodeJs","nunit","octopusDeploy","packer","powershell","python","resharper","restfulWebservices","sqlServerManagementStudio","specflow","teamcity","tSql","visualStudio","vstest","xml"]},{"company":"FundsLibrary","position":"Junior Developer","website":"https://www.fundslibrary.co.uk","startDate":"2014-03-01","endDate":"2015-03-01","summary":"Maintained the Fundslibrary website in an agile environment.\nPracticed modern software development practices including TDD, CI and SOLID practices.\nBackend developement involved C#, ASP.NET MVC and SQL Server to create web services and sites.\nClient side development used typescript, LESS and libraries such as KnockoutJs and jQuery.","skills":["aspDotNetMvc","aspDotNetWebforms","bootstrap","continuousIntegration","cSharp","css","dotNetFramework","esSixPromises","git","grunt","html","jasmine","javascript","jira","jquery","karma","knockoutJs","less","linq","restfulWebservices","sqlServerManagementStudio","tSql","typescript","visualStudio","xslt","xml"]},{"company":"Toplevel Computing","position":"Graduate Developer","website":"https://www.toplev.com/","startDate":"2013-03-01","endDate":"2014-03-01","summary":"Maintained proprietary web development product and extended behaviour to customer specifications. Role involved writing specications, designs and performing the implementation of code changes.","skills":["cPlusPlus","cSharp","css","dotNetFramework","html","linq","moq","nunit","resharper","sourceSafe","sqlServerManagementStudio","tfs","tSql","visualStudio","vbDotNet","xml"]}],"volunteer":[{"organization":"Codeclub","position":"Club leader","website":"https://www.codeclub.org.uk/","startDate":"2015-10-01","endDate":"2016-04-01","summary":"After school club for primary school children. Taught scratch, HTML CSS and python."},{"organization":"Codeclub","position":"Club leader","website":"https://www.codeclub.org.uk/","startDate":"2013-09-01","endDate":"2014-04-01","summary":"After school club for primary school children. Taught scratch, HTML CSS and python."}],"education":[{"institution":"The University of Exeter","startDate":"2010-10-01","endDate":"2012-10-01","studyType":"Phd Physics: The electrical properties of cell membranes","gpa":"Degree Not Attained"},{"institution":"The University of Exeter","startDate":"2007-09-01","endDate":"2010-09-01","studyType":"BSc. (Hons.) Mathematics and Physics","gpa":"2:1"},{"institution":"Queen Mary's College","startDate":"2005-09-01","endDate":"2007-09-01","studyType":"A Levels","gpa":"Mathematics (A), Physics (B), Electronics (B), BTEC Music Practice (Distinction). AS Level: Further Mathematics AS (C)"}],"awards":[],"publications":[],"skills":[{"name":"Back End","level":"Advanced","keywords":["akkaDotNet","apacheSpark","aspDotNetMvc","aspWebApi","aspDotNetWebforms","azureDataFactory","azureSql","azureSqlDw","azureHdInsights","awsDynamoDB","awsEC2","awsLambda","awsKinesis","awsRedshift","awsSqs","awsS3","cPlusPlus","cSharp","dotNetCore","dotNetFramework","fSharp","linq","nodeJs","python","tSql","vbDotNet"]},{"name":"Devops","level":"Advanced","keywords":["azureResourceManager","awsCloudformation","awsECR","awsECS","awsOpsworks","bashScripting","cake","chef","continuousIntegration","docker","git","octopusDeploy","packer","powershell","terraform","teamcity"]},{"name":"Front End","level":"Competent","keywords":["angularJs","bootstrap","css","d3","esSixPromises","gatsbyJs","graphQl","grunt","html","javascript","jquery","knockoutJs","less","reactJs","typescript"]},{"name":"Other","level":"Advanced","keywords":["cordova","ionicFramework","jira","latex","resharper","restfulWebservices","rlanguage","sourceSafe","sqlServerManagementStudio","tfs","visualStudio","xslt","xml"]},{"name":"Testing","level":"Advanced","keywords":["jasmine","karma","moq","mstest","nunit","puppeteer","specflow","vstest"]}],"languages":[],"interests":[],"references":[]}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {"jsonResumeSkills":[{"name":"Back End","level":"Advanced","keywords":["akkaDotNet","apacheSpark","aspDotNetMvc","aspWebApi","aspDotNetWebforms","azureDataFactory","azureSql","azureSqlDw","azureHdInsights","awsDynamoDB","awsEC2","awsLambda","awsKinesis","awsRedshift","awsSqs","awsS3","cPlusPlus","cSharp","dotNetCore","dotNetFramework","fSharp","linq","nodeJs","python","tSql","vbDotNet"]},{"name":"Devops","level":"Advanced","keywords":["azureResourceManager","awsCloudformation","awsECR","awsECS","awsOpsworks","bashScripting","cake","chef","continuousIntegration","docker","git","octopusDeploy","packer","powershell","terraform","teamcity"]},{"name":"Front End","level":"Competent","keywords":["angularJs","bootstrap","css","d3","esSixPromises","gatsbyJs","graphQl","grunt","html","javascript","jquery","knockoutJs","less","reactJs","typescript"]},{"name":"Other","level":"Advanced","keywords":["cordova","ionicFramework","jira","latex","resharper","restfulWebservices","rlanguage","sourceSafe","sqlServerManagementStudio","tfs","visualStudio","xslt","xml"]},{"name":"Testing","level":"Advanced","keywords":["jasmine","karma","moq","mstest","nunit","puppeteer","specflow","vstest"]}],"jsonResumeSettings":[{"company":"Toplevel Computing","keywords":["cPlusPlus","cSharp","css","dotNetFramework","html","linq","moq","nunit","resharper","sourceSafe","sqlServerManagementStudio","tfs","tSql","visualStudio","vbDotNet","xml"]},{"company":"FundsLibrary","keywords":["aspDotNetMvc","aspDotNetWebforms","bootstrap","continuousIntegration","cSharp","css","dotNetFramework","esSixPromises","git","grunt","html","jasmine","javascript","jira","jquery","karma","knockoutJs","less","linq","restfulWebservices","sqlServerManagementStudio","tSql","typescript","visualStudio","xslt","xml"]},{"company":"Abide Financial","keywords":["angularJs","akkaDotNet","aspDotNetMvc","awsCloudformation","awsDynamoDB","awsEC2","awsLambda","awsKinesis","awsOpsworks","awsRedshift","awsSqs","awsS3","bashScripting","bootstrap","cake","chef","continuousIntegration","cSharp","css","dotNetFramework","esSixPromises","fSharp","git","html","javascript","jira","linq","moq","mstest","nodeJs","nunit","octopusDeploy","packer","powershell","python","resharper","restfulWebservices","sqlServerManagementStudio","specflow","teamcity","tSql","visualStudio","vstest","xml"]},{"company":"Scott Logic","keywords":["apacheSpark","aspWebApi","azureDataFactory","azureSql","azureSqlDw","azureResourceManager","azureHdInsights","awsECR","awsECS","bashScripting","bootstrap","continuousIntegration","cSharp","css","docker","dotNetCore","dotNetFramework","esSixPromises","fSharp","git","html","javascript","jira","linq","mstest","nodeJs","nunit","reactJs","resharper","restfulWebservices","sqlServerManagementStudio","specflow","terraform","tSql","visualStudio","vstest"]}],"skills":{"angularJs":{"id":"angularJs","name":"Angular Js","description":"AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google.","skillTypesIds":["frontend"],"settingsIds":["abide"]},"akkaDotNet":{"id":"akkaDotNet","name":"AKKA.NET","description":".NET actor system implementation framework, port of the popular scala framework.","skillTypesIds":["backend"],"settingsIds":["abide"]},"apacheSpark":{"id":"apacheSpark","name":"Apache Spark","description":"Apache Spark is an open-source cluster-computing framework. Spark provides an interface for programming entire clusters with implicit data parallelism and fault tolerance","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"aspDotNetMvc":{"id":"aspDotNetMvc","name":"ASP.NET MVC","description":"ASP.NET MVC is a web application framework developed by Microsoft, which implements the model–view–controller (MVC) pattern.","skillTypesIds":["backend"],"settingsIds":["fundslibrary","abide"]},"aspWebApi":{"id":"aspWebApi","name":"ASP.NET Web API","description":"ASP.NET Web API is a framework that makes it easy to build HTTP services that reach a broad range of clients, including browsers and mobile devices.","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"aspDotNetWebforms":{"id":"aspDotNetWebforms","name":"ASP.NET WebForms","description":"ASP.NET is a server-side web application framework designed for web development to produce dynamic web pages","skillTypesIds":["backend"],"settingsIds":["fundslibrary"]},"azureDataFactory":{"id":"azureDataFactory","name":"Azure Data Factory","description":"Azure Data Factory is a cloud-based data integration service that allows you to create data-driven workflows in the cloud for orchestrating and automating data movement and data transformation","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"azureSql":{"id":"azureSql","name":"Azure SQL","description":"Microsoft Azure SQL Database is a managed cloud database (SaaS) provided as part of Microsoft Azure","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"azureSqlDw":{"id":"azureSqlDw","name":"Azure SQL Data Warehouse","description":"SQL Data Warehouse is a cloud-based Enterprise Data Warehouse that leverages Massively Parallel Processing to quickly run complex queries across petabytes of data","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"azureResourceManager":{"id":"azureResourceManager","name":"Azure Resource Manager","description":"Azure Resource Manager is a technology used to provision resources within the Azure platform.","skillTypesIds":["devops"],"settingsIds":["scottlogic"]},"azureHdInsights":{"id":"azureHdInsights","name":"Azure HdInsights","description":"Azure HDInsight is a fully managed cloud service that makes it easy, fast and cost-effective to process massive amounts of data. Use popular open-source frameworks such as Hadoop, Spark, Hive, LLAP, Kafka, Storm, R and more.","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"awsCloudformation":{"id":"awsCloudformation","name":"AWS Cloudformation","description":"AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. This file serves as the single source of truth for your cloud environment","skillTypesIds":["devops"],"settingsIds":["abide"]},"awsDynamoDB":{"id":"awsDynamoDB","name":"AWS DynamoDB","description":"Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models","skillTypesIds":["backend"],"settingsIds":["abide"]},"awsEC2":{"id":"awsEC2","name":"AWS EC2","description":"Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.","skillTypesIds":["backend"],"settingsIds":["abide"]},"awsECR":{"id":"awsECR","name":"AWS ECR","description":"Amazon Elastic Container Registry is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.","skillTypesIds":["devops"],"settingsIds":["scottlogic"]},"awsECS":{"id":"awsECS","name":"AWS ECS","description":"Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS.","skillTypesIds":["devops"],"settingsIds":["scottlogic"]},"awsLambda":{"id":"awsLambda","name":"AWS Lambda","description":"AWS Lambda lets you run code without provisioning or managing servers.","skillTypesIds":["backend"],"settingsIds":["abide"]},"awsKinesis":{"id":"awsKinesis","name":"AWS Kinesis","description":"Amazon Kinesis Data Streams enables you to build custom applications that process or analyze streaming data for specialized needs.","skillTypesIds":["backend"],"settingsIds":["abide"]},"awsOpsworks":{"id":"awsOpsworks","name":"AWS Opsworks","description":"AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet.","skillTypesIds":["devops"],"settingsIds":["abide"]},"awsRedshift":{"id":"awsRedshift","name":"AWS Redshift","description":"Amazon Redshift is a fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence tools","skillTypesIds":["backend"],"settingsIds":["abide"]},"awsSqs":{"id":"awsSqs","name":"AWS SQS","description":"Amazon Simple Queue Service is a fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications.","skillTypesIds":["backend"],"settingsIds":["abide"]},"awsS3":{"id":"awsS3","name":"AWS S3","description":"Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices.","skillTypesIds":["backend"],"settingsIds":["abide"]},"bashScripting":{"id":"bashScripting","name":"bash scripting","description":"Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell","skillTypesIds":["devops"],"settingsIds":["abide","scottlogic"]},"bootstrap":{"id":"bootstrap","name":"Bootstrap","description":"Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.","skillTypesIds":["frontend"],"settingsIds":["abide","fundslibrary","scottlogic"]},"cake":{"id":"cake","name":"Cake","description":"Cake (C# Make) is a cross-platform build automation system with a C# DSL for tasks such as compiling code, copying files and folders, running unit tests, compressing files and building NuGet packages","skillTypesIds":["devops"],"settingsIds":["abide"]},"chef":{"id":"chef","name":"Chef","description":"Chef is a configuration management tool written in Ruby and Erlang used to streamline the task of configuring and maintaining servers.","skillTypesIds":["devops"],"settingsIds":["abide"]},"continuousIntegration":{"id":"continuousIntegration","name":"Continuous integration","description":"Continuous integration (CI) is the practice of merging all developer working copies to a shared mainline several times a day.","skillTypesIds":["devops"],"settingsIds":["abide","fundslibrary","scottlogic"]},"cordova":{"id":"cordova","name":"Apache Cordova (Phone Gap)","description":"Apache Cordova is an open-source mobile application development framework which enables software programmers to build applications for mobile devices using CSS3, HTML5, and JavaScript instead of relying on platform-specific APIs like those in Android, iOS, or Windows Phone.","skillTypesIds":["other"],"settingsIds":[]},"cPlusPlus":{"id":"cPlusPlus","name":"C++","description":"A general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation","skillTypesIds":["backend"],"settingsIds":["toplevel"]},"cSharp":{"id":"cSharp","name":"C#","description":"C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented and component-oriented programming disciplines","skillTypesIds":["backend"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"css":{"id":"css","name":"CSS","description":"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript","skillTypesIds":["frontend"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"d3":{"id":"d3","name":"D3","description":"A JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards","skillTypesIds":["frontend"],"settingsIds":[]},"docker":{"id":"docker","name":"Docker","description":"Docker is a computer program that performs operating-system-level virtualization also known as containerization.","skillTypesIds":["devops"],"settingsIds":["scottlogic"]},"dotNetCore":{"id":"dotNetCore","name":".NET Core","description":".NET Core is a free and open-source managed computer software framework for the Microsoft Windows, Apple macOS and Linux operating systems.","skillTypesIds":["backend"],"settingsIds":["scottlogic"]},"dotNetFramework":{"id":"dotNetFramework","name":".NET Framework","description":".NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows","skillTypesIds":["backend"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"esSixPromises":{"id":"esSixPromises","name":"ES6 Promises","description":"The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.","skillTypesIds":["frontend"],"settingsIds":["fundslibrary","abide","scottlogic"]},"fSharp":{"id":"fSharp","name":"F#","description":"F# is a strongly typed, multi-paradigm programming language that encompasses functional, imperative, and object-oriented programming methods.","skillTypesIds":["backend"],"settingsIds":["abide","scottlogic"]},"gatsbyJs":{"id":"gatsbyJs","name":"GatsbyJS","description":"Blazing fast modern site generator for React. Go beyond static sites: build blogs, ecommerce sites, full-blown apps, and more with Gatsby.","skillTypesIds":["frontend"],"settingsIds":[]},"git":{"id":"git","name":"git","description":"Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people","skillTypesIds":["devops"],"settingsIds":["fundslibrary","abide","scottlogic"]},"graphQl":{"id":"graphQl","name":"GraphQL","description":"GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.","skillTypesIds":["frontend"],"settingsIds":[]},"grunt":{"id":"grunt","name":"grunt","description":"Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting","skillTypesIds":["frontend"],"settingsIds":["fundslibrary"]},"html":{"id":"html","name":"HTML","description":"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.","skillTypesIds":["frontend"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"ionicFramework":{"id":"ionicFramework","name":"Ionic framework","description":"Ionic is a powerful HTML5 SDK that helps you build native-feeling mobile apps using web technologies like HTML, CSS, and Javascript.","skillTypesIds":["other"],"settingsIds":[]},"jasmine":{"id":"jasmine","name":"jasmine","description":"Jasmine is an open source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax.","skillTypesIds":["testing"],"settingsIds":["fundslibrary"]},"javascript":{"id":"javascript","name":"javascript","description":"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm","skillTypesIds":["frontend"],"settingsIds":["fundslibrary","abide","scottlogic"]},"jira":{"id":"jira","name":"JIRA","description":"Jira is a proprietary issue tracking product, developed by Atlassian. It provides bug tracking, issue tracking, and project management functions","skillTypesIds":["other"],"settingsIds":["fundslibrary","abide","scottlogic"]},"jquery":{"id":"jquery","name":"jQuery","description":"jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. It is free, open-source software using the MIT License.","skillTypesIds":["frontend"],"settingsIds":["fundslibrary"]},"karma":{"id":"karma","name":"karma","description":"Karma is a test runner for JavaScript that runs on Node.js. It is very well suited to testing AngularJS or any other JavaScript projects.","skillTypesIds":["testing"],"settingsIds":["fundslibrary"]},"knockoutJs":{"id":"knockoutJs","name":"KnockoutJs","description":"Knockout is a standalone JavaScript implementation of the Model-View-ViewModel pattern with templates.","skillTypesIds":["frontend"],"settingsIds":["fundslibrary"]},"latex":{"id":"latex","name":"LaTeX","description":"LaTeX is a document preparation system. When writing, the writer uses plain text as opposed to the formatted text found in WYSIWYG word processors like Microsoft Word.","skillTypesIds":["other"],"settingsIds":[]},"less":{"id":"less","name":"LESS","description":"Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS","skillTypesIds":["frontend"],"settingsIds":["fundslibrary"]},"linq":{"id":"linq","name":"LINQ","description":"General-purpose query facilities added to the .NET Framework apply to all sources of information, not just relational or XML data.","skillTypesIds":["backend"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"moq":{"id":"moq","name":"MoQ","description":"Moq is the one and only .NET mocking framework that allows specifying mock behavior via declarative specification queries.","skillTypesIds":["testing"],"settingsIds":["toplevel","abide"]},"mstest":{"id":"mstest","name":"MSTest","description":"The Visual Studio Unit Testing Framework describes Microsoft's suite of unit testing tools as integrated into some[1] versions of Visual Studio 2005 and later","skillTypesIds":["testing"],"settingsIds":["scottlogic","abide"]},"nodeJs":{"id":"nodeJs","name":"node.js","description":"","skillTypesIds":["backend"],"settingsIds":["abide","scottlogic"]},"nunit":{"id":"nunit","name":"NUnit","description":"NUnit is an open-source unit testing framework for Microsoft .NET. It serves the same purpose as JUnit does in the Java world, and is one of many programs in the xUnit family.","skillTypesIds":["testing"],"settingsIds":["toplevel","abide","scottlogic"]},"octopusDeploy":{"id":"octopusDeploy","name":"Octopus Deploy","description":"Octopus Deploy is an automated release management tool for modern developers and DevOps teams.","skillTypesIds":["devops"],"settingsIds":["abide"]},"packer":{"id":"packer","name":"Packer","description":"Packer is a free and open source tool for creating golden images for multiple platforms from a single source configuration.","skillTypesIds":["devops"],"settingsIds":["abide"]},"powershell":{"id":"powershell","name":"Powershell","description":"PowerShell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and associated scripting language.","skillTypesIds":["devops"],"settingsIds":["abide"]},"puppeteer":{"id":"puppeteer","name":"Puppeteer","description":"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium","skillTypesIds":["testing"],"settingsIds":[]},"python":{"id":"python","name":"python","description":"Python is an interpreted high-level programming language for general-purpose programming. Python has a design philosophy that emphasizes code readability, notably using significant whitespace.","skillTypesIds":["backend"],"settingsIds":["abide"]},"reactJs":{"id":"reactJs","name":"react.js","description":"React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.","skillTypesIds":["frontend"],"settingsIds":["scottlogic"]},"resharper":{"id":"resharper","name":"Resharper","description":"ReSharper is a popular developer productivity extension for Microsoft Visual Studio. It automates most of what can be automated in your coding routines. It finds compiler errors, runtime errors, redundancies, and code smells right as you type, suggesting intelligent corrections for them.","skillTypesIds":["other"],"settingsIds":["toplevel","abide","scottlogic"]},"restfulWebservices":{"id":"restfulWebservices","name":"RESTFul webservices","description":"REpresentational State Transfer (REST) is an architectural style that defines a set of constraints and properties based on HTTP.","skillTypesIds":["other"],"settingsIds":["fundslibrary","abide","scottlogic"]},"rlanguage":{"id":"rlanguage","name":"R","description":"R is a programming language and free software environment for statistical computing and graphics that is supported by the R Foundation for Statistical Computing. The R language is widely used among statisticians and data miners for developing statistical software","skillTypesIds":["other"],"settingsIds":[]},"sourceSafe":{"id":"sourceSafe","name":"Source safe","description":"Microsoft Visual SourceSafe (VSS) is a discontinued source control program, oriented towards small software development projects.","skillTypesIds":["other"],"settingsIds":["toplevel"]},"sqlServerManagementStudio":{"id":"sqlServerManagementStudio","name":"SQL Server Management Studio","description":"SQL Server Management Studio (SSMS) is a software application first launched with Microsoft SQL Server 2005 that is used for configuring, managing, and administering all components within Microsoft SQL Server.","skillTypesIds":["other"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"specflow":{"id":"specflow","name":"SpecFlow","description":"SpecFlow is an open source port of Cucumber for .Net.","skillTypesIds":["testing"],"settingsIds":["abide","scottlogic"]},"tfs":{"id":"tfs","name":"TFS","description":"Team Foundation Server (TFS) is a Microsoft product that provides source code management (either with Team Foundation Version Control or Git), reporting, requirements management, project management, automated builds, lab management, testing and release management capabilities","skillTypesIds":["other"],"settingsIds":["toplevel"]},"terraform":{"id":"terraform","name":"terraform","description":"Terraform is an infrastructure as code software by HashiCorp. It allows users to define a datacenter infrastructure in a high-level configuration language, from which it can create an execution plan to build the infrastructure.","skillTypesIds":["devops"],"settingsIds":["scottlogic"]},"teamcity":{"id":"teamcity","name":"TeamCity","description":"TeamCity is a Java-based build management and continuous integration server from JetBrains.","skillTypesIds":["devops"],"settingsIds":["abide"]},"tSql":{"id":"tSql","name":"T-SQL","description":"Transact-SQL (T-SQL) is Microsoft's and Sybase's proprietary extension to the SQL (Structured Query Language) used to interact with relational databases. T-SQL expands on the SQL standard to include procedural programming, local variables, various support functions for string processing, date processing, mathematics, etc.","skillTypesIds":["backend"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"typescript":{"id":"typescript","name":"Typescript","description":"TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.","skillTypesIds":["frontend"],"settingsIds":["fundslibrary"]},"visualStudio":{"id":"visualStudio","name":"Visual studio","description":"Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft.","skillTypesIds":["other"],"settingsIds":["toplevel","fundslibrary","abide","scottlogic"]},"vstest":{"id":"vstest","name":"VSTest","description":"The Visual Studio Unit Testing Framework describes Microsoft's suite of unit testing tools as integrated into some[1] versions of Visual Studio 2005 and later","skillTypesIds":["testing"],"settingsIds":["scottlogic","abide"]},"vbDotNet":{"id":"vbDotNet","name":"VB.NET","description":"Visual Basic .NET (VB.NET) is a multi-paradigm, object-oriented programming language, implemented on the .NET Framework.","skillTypesIds":["backend"],"settingsIds":["toplevel"]},"xslt":{"id":"xslt","name":"XSLT","description":"A language to transform XML into HTML","skillTypesIds":["other"],"settingsIds":["fundslibrary"]},"xml":{"id":"xml","name":"XML","description":"A heavily used markup language","skillTypesIds":["other"],"settingsIds":["toplevel","fundslibrary","abide"]}},"skillTypes":{"backend":{"id":"backend","name":"Back End","description":"Back end Development refers to the server side of development which usually consists of three parts: a server, an application, and a database. Code written by back end developers is what communicates the database information to the browser.","level":"Advanced"},"devops":{"id":"devops","name":"Devops","description":"DevOps is a software engineering culture and practice that aims at unifying software development and software operations","level":"Advanced"},"frontend":{"id":"frontend","name":"Front End","description":"Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and Javascript.","level":"Competent"},"other":{"id":"other","name":"Other","description":"Technologies which don't fit into the other categories.","level":"Advanced"},"testing":{"id":"testing","name":"Testing","description":"Software testing involves the execution of a software component or system component to evaluate one or more properties of interest. In general, these properties indicate the extent to which the component or system under test.","level":"Advanced"}},"settings":{"toplevel":{"id":"toplevel","name":"Toplevel Computing","description":"Digital case management solutions that help Government and Public Sector meet the Digital by Default Service Standard quickly, securely and cost effectively.","dateRange":{"startDate":"2013-03-31T23:00:00.000Z","endDate":"2014-03-31T23:00:00.000Z"}},"fundslibrary":{"id":"fundslibrary","name":"FundsLibrary","description":"FundsLibrary is one of the investments industry's leading providers of fund data, related regulatory services and software solutions.","dateRange":{"startDate":"2014-03-31T23:00:00.000Z","endDate":"2015-03-01T00:00:00.000Z"}},"abide":{"id":"abide","name":"Abide Financial","description":"Abide Financial is a leading transaction reporting provider with proven solutions across multiple regulatory regimes.","dateRange":{"startDate":"2015-03-31T23:00:00.000Z","endDate":"2017-11-01T00:00:00.000Z"}},"scottlogic":{"id":"scottlogic","name":"Scott Logic","description":"UK-based software consultancy working in a variety of different sectors including capital markets; energy trading; e-trading; financial services; health care; oil & gas and the public sector.","dateRange":{"startDate":"2017-11-01T00:00:00.000Z"}}}}

/***/ })
/******/ ])["default"];
});