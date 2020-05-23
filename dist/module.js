define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./GraphPanel.tsx":
/*!************************!*\
  !*** ./GraphPanel.tsx ***!
  \************************/
/*! exports provided: GraphPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphPanel", function() { return GraphPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GraphPanelController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphPanelController */ "./GraphPanelController.tsx");




var GraphPanel = function GraphPanel(_a) {
  var data = _a.data,
      timeRange = _a.timeRange,
      timeZone = _a.timeZone,
      width = _a.width,
      height = _a.height,
      options = _a.options,
      fieldConfig = _a.fieldConfig,
      onOptionsChange = _a.onOptionsChange,
      onChangeTimeRange = _a.onChangeTimeRange;

  if (!data) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "panel-empty"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "No data found in response"));
  }

  var _b = options.graph,
      showLines = _b.showLines,
      showBars = _b.showBars,
      showPoints = _b.showPoints,
      legendOptions = options.legend,
      tooltipOptions = options.tooltipOptions;
  var graphProps = {
    showBars: showBars,
    showLines: showLines,
    showPoints: showPoints,
    tooltipOptions: tooltipOptions
  };

  var asTable = legendOptions.asTable,
      isVisible = legendOptions.isVisible,
      legendProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(legendOptions, ["asTable", "isVisible"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GraphPanelController__WEBPACK_IMPORTED_MODULE_3__["GraphPanelController"], {
    data: data,
    timeZone: timeZone,
    options: options,
    fieldConfig: fieldConfig,
    onOptionsChange: onOptionsChange,
    onChangeTimeRange: onChangeTimeRange
  }, function (_a) {
    var onSeriesToggle = _a.onSeriesToggle,
        onHorizontalRegionSelected = _a.onHorizontalRegionSelected,
        controllerApi = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["onSeriesToggle", "onHorizontalRegionSelected"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Graph"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      timeRange: timeRange,
      timeZone: timeZone,
      width: width,
      height: height,
      onHorizontalRegionSelected: onHorizontalRegionSelected
    }, graphProps, legendProps, controllerApi), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Chart"].Tooltip, {
      mode: tooltipOptions.mode
    }));
  });
};

/***/ }),

/***/ "./GraphPanelController.tsx":
/*!**********************************!*\
  !*** ./GraphPanelController.tsx ***!
  \**********************************/
/*! exports provided: GraphPanelController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphPanelController", function() { return GraphPanelController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getGraphSeriesModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getGraphSeriesModel */ "./getGraphSeriesModel.tsx");





var GraphPanelController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GraphPanelController, _super);

  function GraphPanelController(props) {
    var _this = _super.call(this, props) || this;

    _this.onSeriesColorChange = _this.onSeriesColorChange.bind(_this);
    _this.onSeriesAxisToggle = _this.onSeriesAxisToggle.bind(_this);
    _this.onToggleSort = _this.onToggleSort.bind(_this);
    _this.onHorizontalRegionSelected = _this.onHorizontalRegionSelected.bind(_this);
    _this.state = {
      graphSeriesModel: Object(_getGraphSeriesModel__WEBPACK_IMPORTED_MODULE_3__["getGraphSeriesModel"])(props.data.series, props.timeZone, props.options.series || {}, props.options.graph, props.options.legend, props.fieldConfig)
    };
    return _this;
  }

  GraphPanelController.getDerivedStateFromProps = function (props, state) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
      graphSeriesModel: Object(_getGraphSeriesModel__WEBPACK_IMPORTED_MODULE_3__["getGraphSeriesModel"])(props.data.series, props.timeZone, props.options.series || {}, props.options.graph, props.options.legend, props.fieldConfig)
    });
  };

  GraphPanelController.prototype.onSeriesOptionsUpdate = function (label, optionsUpdate) {
    var _a = this.props,
        onOptionsChange = _a.onOptionsChange,
        options = _a.options;

    var updatedSeriesOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.series);

    updatedSeriesOptions[label] = optionsUpdate;
    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      series: updatedSeriesOptions
    }));
  };

  GraphPanelController.prototype.onSeriesAxisToggle = function (label, yAxis) {
    var series = this.props.options.series;
    var seriesOptionsUpdate = series[label] ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, series[label]), {
      yAxis: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, series[label].yAxis), {
        index: yAxis
      })
    }) : {
      yAxis: {
        index: yAxis
      }
    };
    this.onSeriesOptionsUpdate(label, seriesOptionsUpdate);
  };

  GraphPanelController.prototype.onSeriesColorChange = function (label, color) {
    var series = this.props.options.series;
    var seriesOptionsUpdate = series[label] ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, series[label]), {
      color: color
    }) : {
      color: color
    };
    this.onSeriesOptionsUpdate(label, seriesOptionsUpdate);
  };

  GraphPanelController.prototype.onToggleSort = function (sortBy) {
    var _a = this.props,
        onOptionsChange = _a.onOptionsChange,
        options = _a.options;
    onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      legend: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.legend), {
        sortBy: sortBy,
        sortDesc: sortBy === options.legend.sortBy ? !options.legend.sortDesc : false
      })
    }));
  };

  GraphPanelController.prototype.onHorizontalRegionSelected = function (from, to) {
    var onChangeTimeRange = this.props.onChangeTimeRange;
    onChangeTimeRange({
      from: from,
      to: to
    });
  };

  GraphPanelController.prototype.render = function () {
    var _this = this;

    var children = this.props.children;
    var graphSeriesModel = this.state.graphSeriesModel;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["GraphSeriesToggler"], {
      series: graphSeriesModel
    }, function (_a) {
      var onSeriesToggle = _a.onSeriesToggle,
          toggledSeries = _a.toggledSeries;
      return children({
        series: toggledSeries,
        onSeriesColorChange: _this.onSeriesColorChange,
        onSeriesAxisToggle: _this.onSeriesAxisToggle,
        onToggleSort: _this.onToggleSort,
        onSeriesToggle: onSeriesToggle,
        onHorizontalRegionSelected: _this.onHorizontalRegionSelected
      });
    });
  };

  return GraphPanelController;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./getGraphSeriesModel.tsx":
/*!*********************************!*\
  !*** ./getGraphSeriesModel.tsx ***!
  \*********************************/
/*! exports provided: getGraphSeriesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphSeriesModel", function() { return getGraphSeriesModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);



var getGraphSeriesModel = function getGraphSeriesModel(dataFrames, timeZone, seriesOptions, graphOptions, legendOptions, fieldOptions) {
  var e_1, _a, e_2, _b;

  var _c, _d, _e;

  var graphs = [];
  var displayProcessor = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
    field: {
      config: {
        unit: (_d = (_c = fieldOptions) === null || _c === void 0 ? void 0 : _c.defaults) === null || _d === void 0 ? void 0 : _d.unit,
        decimals: legendOptions.decimals
      }
    },
    timeZone: timeZone
  });
  var fieldColumnIndex = -1;

  try {
    for (var dataFrames_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(dataFrames), dataFrames_1_1 = dataFrames_1.next(); !dataFrames_1_1.done; dataFrames_1_1 = dataFrames_1.next()) {
      var series = dataFrames_1_1.value;
      var timeField = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getTimeField"])(series).timeField;

      if (!timeField) {
        continue;
      }

      var _loop_1 = function _loop_1(field) {
        if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].number) {
          return "continue";
        } // Storing index of series field for future inspection


        fieldColumnIndex++; // Use external calculator just to make sure it works :)

        var points = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFlotPairs"])({
          xField: timeField,
          yField: field,
          nullValueMode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["NullValueMode"].Null
        });

        if (points.length > 0) {
          var seriesStats_1 = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["reduceField"])({
            field: field,
            reducers: legendOptions.stats || []
          });
          var statsDisplayValues = [];

          if (legendOptions.stats) {
            statsDisplayValues = legendOptions.stats.map(function (stat) {
              var statDisplayValue = displayProcessor(seriesStats_1[stat]);
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, statDisplayValue), {
                title: stat
              });
            });
          }

          var color = void 0;

          if (seriesOptions[field.name] && seriesOptions[field.name].color) {
            // Case when panel has settings provided via SeriesOptions, i.e. graph panel
            color = {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldColorMode"].Fixed,
              fixedColor: seriesOptions[field.name].color
            };
          } else if (field.config && field.config.color) {
            // Case when color settings are set on field, i.e. Explore logs histogram (see makeSeriesForLogs)
            color = field.config.color;
          } else {
            color = {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldColorMode"].Fixed,
              fixedColor: _grafana_ui__WEBPACK_IMPORTED_MODULE_1__["colors"][graphs.length % _grafana_ui__WEBPACK_IMPORTED_MODULE_1__["colors"].length]
            };
          }

          field.config = fieldOptions ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, field.config), {
            unit: fieldOptions.defaults.unit,
            decimals: fieldOptions.defaults.decimals,
            color: color
          }) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, field.config), {
            color: color
          });
          field.display = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
            field: field,
            timeZone: timeZone
          }); // Time step is used to determine bars width when graph is rendered as bar chart

          var timeStep = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getSeriesTimeStep"])(timeField);
          var useMsDateFormat = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["hasMsResolution"])(timeField);
          timeField.display = Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getDisplayProcessor"])({
            timeZone: timeZone,
            field: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, timeField), {
              type: timeField.type,
              config: {
                unit: "time:" + (useMsDateFormat ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__["MS_DATE_TIME_FORMAT"] : _grafana_data__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DATE_TIME_FORMAT"])
              }
            })
          });
          graphs.push({
            label: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["getFieldDisplayName"])(field, series, dataFrames),
            data: points,
            color: (_e = field.config.color) === null || _e === void 0 ? void 0 : _e.fixedColor,
            info: statsDisplayValues,
            isVisible: true,
            yAxis: {
              index: seriesOptions[field.name] && seriesOptions[field.name].yAxis || 1
            },
            // This index is used later on to retrieve appropriate series/time for X and Y axes
            seriesIndex: fieldColumnIndex,
            timeField: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, timeField),
            valueField: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, field),
            timeStep: timeStep
          });
        }
      };

      try {
        for (var _f = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(series.fields)), _g = _f.next(); !_g.done; _g = _f.next()) {
          var field = _g.value;

          _loop_1(field);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (dataFrames_1_1 && !dataFrames_1_1.done && (_a = dataFrames_1["return"])) _a.call(dataFrames_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return graphs;
};

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GraphPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphPanel */ "./GraphPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_GraphPanel__WEBPACK_IMPORTED_MODULE_1__["GraphPanel"]).useFieldConfig({
  standardOptions: [_grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Unit, _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldConfigProperty"].Decimals]
}).setPanelOptions(function (builder) {
  builder.addBooleanSwitch({
    path: 'graph.showBars',
    name: 'Show bars',
    description: '',
    defaultValue: false
  }).addBooleanSwitch({
    path: 'graph.showLines',
    name: 'Show lines',
    description: '',
    defaultValue: true
  }).addBooleanSwitch({
    path: 'graph.showPoints',
    name: 'Show poins',
    description: '',
    defaultValue: false
  }).addBooleanSwitch({
    path: 'legend.isVisible',
    name: 'Show legend',
    description: '',
    defaultValue: true
  }).addBooleanSwitch({
    path: 'legend.asTable',
    name: 'Display legend as table',
    description: '',
    defaultValue: false
  }).addRadio({
    path: 'legend.placement',
    name: 'Legend placement',
    description: '',
    defaultValue: 'under',
    settings: {
      options: [{
        value: 'under',
        label: 'Below graph'
      }, {
        value: 'right',
        label: 'Right to the graph'
      }]
    }
  }).addRadio({
    path: 'tooltipOptions.mode',
    name: 'Tooltip mode',
    description: '',
    defaultValue: 'single',
    settings: {
      options: [{
        value: 'single',
        label: 'Single series'
      }, {
        value: 'multi',
        label: 'All series'
      }]
    }
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map