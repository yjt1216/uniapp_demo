(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/main.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 36));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 39));\nvar _tools = __webpack_require__(/*! ./utils/tools.js */ 46);\nvar _cache = _interopRequireDefault(__webpack_require__(/*! ./utils/cache.js */ 44));\nvar _mescrollBody = _interopRequireDefault(__webpack_require__(/*! @/components/mescroll-uni/mescroll-body.vue */ 47));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.prototype.$toast = _tools.toast;\n_vue.default.prototype.$Cache = _cache.default;\n_vue.default.config.productionTip = false;\n_vue.default.component('mescroll-body', _mescrollBody.default);\n_App.default.mpType = 'app';\ntry {\n  var isPromise = function isPromise(obj) {\n    return !!obj && ((0, _typeof2.default)(obj) === \"object\" || typeof obj === \"function\") && typeof obj.then === \"function\";\n  }; // 统一 vue2 API Promise 化返回格式与 vue3 保持一致\n  uni.addInterceptor({\n    returnValue: function returnValue(res) {\n      if (!isPromise(res)) {\n        return res;\n      }\n      return new Promise(function (resolve, reject) {\n        res.then(function (res) {\n          if (res[0]) {\n            reject(res[0]);\n          } else {\n            resolve(res[1]);\n          }\n        });\n      });\n    }\n  });\n} catch (error) {}\nvar app = new _vue.default(_objectSpread(_objectSpread({}, _App.default), {}, {\n  store: _index.default\n}));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJwcm90b3R5cGUiLCIkdG9hc3QiLCJ0b2FzdCIsIiRDYWNoZSIsIkNhY2hlIiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsImNvbXBvbmVudCIsIk1lc2Nyb2xsQm9keSIsIkFwcCIsIm1wVHlwZSIsImlzUHJvbWlzZSIsIm9iaiIsInRoZW4iLCJ1bmkiLCJhZGRJbnRlcmNlcHRvciIsInJldHVyblZhbHVlIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnJvciIsImFwcCIsInN0b3JlIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQW1CO0FBS25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBc0U7QUFBQTtBQUV0RUEsWUFBRyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sR0FBR0MsWUFBSztBQUM1QkgsWUFBRyxDQUFDQyxTQUFTLENBQUNHLE1BQU0sR0FBR0MsY0FBSztBQUM1QkwsWUFBRyxDQUFDTSxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDUCxZQUFHLENBQUNRLFNBQVMsQ0FBQyxlQUFlLEVBQUVDLHFCQUFZLENBQUM7QUFDNUNDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFHbEIsSUFBSTtFQUFBLElBQ09DLFNBQVMsR0FBbEIsU0FBU0EsU0FBUyxDQUFDQyxHQUFHLEVBQUU7SUFDdEIsT0FDRSxDQUFDLENBQUNBLEdBQUcsS0FDSixzQkFBT0EsR0FBRyxNQUFLLFFBQVEsSUFBSSxPQUFPQSxHQUFHLEtBQUssVUFBVSxDQUFDLElBQ3RELE9BQU9BLEdBQUcsQ0FBQ0MsSUFBSSxLQUFLLFVBQVU7RUFFbEMsQ0FBQyxFQUVEO0VBQ0FDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDO0lBQ2pCQyxXQUFXLHVCQUFDQyxHQUFHLEVBQUU7TUFDZixJQUFJLENBQUNOLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLEVBQUU7UUFDbkIsT0FBT0EsR0FBRztNQUNaO01BQ0EsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDdENILEdBQUcsQ0FBQ0osSUFBSSxDQUFDLFVBQUNJLEdBQUcsRUFBSztVQUNoQixJQUFJQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVkcsTUFBTSxDQUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDaEIsQ0FBQyxNQUFNO1lBQ0xFLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2pCO1FBQ0YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsT0FBT0ksS0FBSyxFQUFFLENBQUU7QUFFbEIsSUFBTUMsR0FBRyxHQUFHLElBQUl2QixZQUFHLGlDQUNkVSxZQUFHO0VBQ05jLEtBQUssRUFBTEE7QUFBSyxHQUNMO0FBQ0ZELEdBQUcsQ0FBQ0UsTUFBTSxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxuXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9pbmRleC5qcydcbmltcG9ydCB7dG9hc3R9IGZyb20gJy4vdXRpbHMvdG9vbHMuanMnXG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi91dGlscy9jYWNoZS5qcydcbmltcG9ydCBNZXNjcm9sbEJvZHkgZnJvbSBcIkAvY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtYm9keS52dWVcIlxuXG5WdWUucHJvdG90eXBlLiR0b2FzdCA9IHRvYXN0XG5WdWUucHJvdG90eXBlLiRDYWNoZSA9IENhY2hlXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuXG5WdWUuY29tcG9uZW50KCdtZXNjcm9sbC1ib2R5JywgTWVzY3JvbGxCb2R5KVxuQXBwLm1wVHlwZSA9ICdhcHAnXG5cblxudHJ5IHtcbiAgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiAoXG4gICAgICAhIW9iaiAmJlxuICAgICAgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSAmJlxuICAgICAgdHlwZW9mIG9iai50aGVuID09PSBcImZ1bmN0aW9uXCJcbiAgICApO1xuICB9XG5cbiAgLy8g57uf5LiAIHZ1ZTIgQVBJIFByb21pc2Ug5YyW6L+U5Zue5qC85byP5LiOIHZ1ZTMg5L+d5oyB5LiA6Ie0XG4gIHVuaS5hZGRJbnRlcmNlcHRvcih7XG4gICAgcmV0dXJuVmFsdWUocmVzKSB7XG4gICAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc1swXSkge1xuICAgICAgICAgICAgcmVqZWN0KHJlc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG59IGNhdGNoIChlcnJvcikgeyB9XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAuLi5BcHAsXG4gIHN0b3JlXG59KVxuYXBwLiRtb3VudCgpXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!***************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages.json ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});
__definePage('pages/user/user', function () {
  return Vue.extend(__webpack_require__(/*! pages/user/user.vue?mpType=page */ 26).default);
});
__definePage('pages/text_auto/text_auto', function () {
  return Vue.extend(__webpack_require__(/*! pages/text_auto/text_auto.vue?mpType=page */ 31).default);
});

/***/ }),
/* 7 */
/*!**************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/index/index.vue?mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
          ),
        ]
      ),
      _c("view", [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.addStr)))]),
      _c(
        "view",
        { staticClass: _vm._$s(5, "sc", "now-city"), attrs: { _i: 5 } },
        [
          _c("view", {
            staticClass: _vm._$s(6, "sc", "city-tip"),
            attrs: { _i: 6 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "select-pos"), attrs: { _i: 7 } },
            [
              _c("view", {
                staticClass: _vm._$s(8, "sc", "re-pos"),
                attrs: { _i: 8 },
                on: { click: _vm.openLocationSetting },
              }),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _qqmapWxJssdkMin = _interopRequireDefault(__webpack_require__(/*! @/static/js/qqmap-wx-jssdk.min.js */ 22));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入腾讯地图jssdk文件\nvar _default = {\n  data: function data() {\n    return {\n      title: 'Hello',\n      addStr: '当前位置'\n    };\n  },\n  onReady: function onReady() {\n    this.getCity();\n  },\n  methods: {\n    getCity: function getCity() {\n      var that = this;\n      // 获取用户是否开启 授权获取当前的地理位置、速度的权限。\n      uni.getSetting({\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/index.vue:38\");\n\n          // 如果没有授权\n          if (!res.authSetting['scope.userLocation']) {\n            // 则拉起授权窗口\n            uni.authorize({\n              scope: 'scope.userLocation',\n              success: function success() {\n                var qqmapsdk = new _qqmapWxJssdkMin.default({\n                  key: 'H42BZ-XO4R3-F2L33-OQOQY-NTHSE-Y7F52'\n                });\n                //点击允许后--就一直会进入成功授权的回调 就可以使用获取的方法了\n                uni.getLocation({\n                  type: 'wgs84',\n                  success: function success(res) {\n                    that.x = res.longitude;\n                    that.y = res.latitude;\n                    __f__(\"log\", \"if\", res, \" at pages/index/index.vue:55\");\n                    __f__(\"log\", '当前位置的经度：' + res.longitude, \" at pages/index/index.vue:56\");\n                    __f__(\"log\", '当前位置的纬度：' + res.latitude, \" at pages/index/index.vue:57\");\n                    // 逆地址解析方法\n                    qqmapsdk.reverseGeocoder({\n                      location: {\n                        latitude: res.latitude,\n                        longitude: res.longitude\n                      },\n                      success: function success(res) {\n                        var newCity = '';\n                        __f__(\"log\", res, \" at pages/index/index.vue:66\");\n                        // 取到用户的定位城市，赋值传递出去\n                        newCity = res.result.address_component.city;\n                        // that.commit('m_location/newCityFun')\n                        this.addStr = res.result.address_component.city;\n                      }\n                    });\n                    uni.showToast({\n                      title: '当前位置的经纬度：' + res.longitude + ',' + res.latitude,\n                      icon: 'success',\n                      mask: true\n                    });\n                  },\n                  fail: function fail(error) {\n                    __f__(\"log\", '失败', error, \" at pages/index/index.vue:83\");\n                    this.addStr = '获取定位失败';\n                  }\n                });\n              },\n              fail: function fail(error) {\n                //点击了拒绝授权后--就一直会进入失败回调函数--此时就可以在这里重新拉起授权窗口\n                __f__(\"log\", '拒绝授权', error, \" at pages/index/index.vue:90\");\n                uni.showModal({\n                  title: '提示',\n                  content: '若点击不授权，将无法使用位置功能',\n                  cancelText: '不授权',\n                  cancelColor: '#999',\n                  confirmText: '授权',\n                  confirmColor: '#f94218',\n                  success: function success(res) {\n                    __f__(\"log\", res, \" at pages/index/index.vue:100\");\n                    if (res.confirm) {\n                      // 选择弹框内授权\n                      uni.openSetting({\n                        success: function success(res) {\n                          __f__(\"log\", res.authSetting, \" at pages/index/index.vue:105\");\n                        }\n                      });\n                    } else if (res.cancel) {\n                      // 选择弹框内 不授权\n                      __f__(\"log\", '用户点击不授权', \" at pages/index/index.vue:110\");\n                      this.addStr = '用户点击不授权';\n                    }\n                  }\n                });\n              }\n            });\n          } else {\n            var qqmapsdk = new _qqmapWxJssdkMin.default({\n              key: 'H42BZ-XO4R3-F2L33-OQOQY-NTHSE-Y7F52'\n            });\n            // 有权限则直接获取\n            uni.getLocation({\n              type: 'wgs84',\n              success: function success(res) {\n                that.x = res.longitude;\n                that.y = res.latitude;\n                __f__(\"log\", \"else\", res, \" at pages/index/index.vue:127\");\n                __f__(\"log\", '当前位置的经度：' + res.longitude, \" at pages/index/index.vue:128\");\n                __f__(\"log\", '当前位置的纬度：' + res.latitude, \" at pages/index/index.vue:129\");\n                // 逆地址解析方法\n                qqmapsdk.reverseGeocoder({\n                  location: {\n                    latitude: res.latitude,\n                    longitude: res.longitude\n                  },\n                  success: function success(res) {\n                    var newCity = '';\n                    __f__(\"log\", '获取信息： ', res, \" at pages/index/index.vue:138\");\n                    // 取到用户的定位城市，赋值传递出去\n                    newCity = res.result.address_component.city;\n                    // that.commit('m_location/newCityFun')\n                    this.addStr = res.result.address_component.city;\n                  },\n                  fail: function fail(res) {\n                    __f__(\"log\", \"错误\", res, \" at pages/index/index.vue:145\");\n                    this.addStr = '定位失败';\n                  }\n                });\n                //打开地图\n                // uni.openLocation({\n                // \tlatitude: that.y,\n                // \tlongitude: that.x,\n                // \tsuccess: function() {}\n                // });\n                uni.showToast({\n                  title: '当前位置的经纬度：' + res.longitude + ',' + res.latitude,\n                  icon: 'success',\n                  mask: true\n                });\n              },\n              fail: function fail(error) {\n                uni.showToast({\n                  title: '请勿频繁调用！',\n                  icon: 'none'\n                });\n                __f__(\"log\", '失败', error, \" at pages/index/index.vue:166\");\n                this.addStr = '定位失败';\n              }\n            });\n          }\n        }\n      });\n    },\n    // 获取用户定位授权\n    getUserLocation: function getUserLocation() {\n      wx.showModal({\n        title: '提示！',\n        confirmText: '去设置',\n        showCancel: false,\n        content: e,\n        success: function success(res) {\n          if (res.confirm) {\n            this.openLocationSetting();\n          }\n        }\n      });\n\n      // uni.authorize({\n      // \tscope:'scope.userLocation',\n      // \tsuccess() {\n      // \t\tconsole.log('用户授权定位')\n      // \t},\n      // \tfail() {\n      // \t\tconsole.log('用户拒绝授权')\n      // \t}\n\n      // })\n    },\n    openLocationSetting: function openLocationSetting() {\n      var _this = this;\n      var setting = 'scope.userLocation';\n      wx.openSetting({\n        success: function success(res) {\n          __f__(\"log\", '原生设置页回调->', res, \" at pages/index/index.vue:204\");\n          var _ref = res || {},\n            authSetting = _ref.authSetting;\n          // 已开启位置授权\n          if (authSetting.hasOwnProperty(setting) && authSetting[setting]) {\n            __f__(\"log\", '已成功开启位置服务->But这里没有返回任何位置信息相关信息', \" at pages/index/index.vue:208\");\n          }\n        },\n        fail: function fail() {\n          toast('获取位置信息失败，按“右上菜单 - 关于\\n - 右上菜单 - 设置 - 位置信息”授权');\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsImFkZFN0ciIsIm9uUmVhZHkiLCJnZXRDaXR5IiwibWV0aG9kcyIsInRoYXQiLCJ1bmkiLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwiYXV0aG9yaXplIiwic2NvcGUiLCJxcW1hcHNkayIsIlFRTWFwV1giLCJrZXkiLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJ4IiwibG9uZ2l0dWRlIiwieSIsImxhdGl0dWRlIiwicmV2ZXJzZUdlb2NvZGVyIiwibG9jYXRpb24iLCJuZXdDaXR5IiwicmVzdWx0IiwiYWRkcmVzc19jb21wb25lbnQiLCJjaXR5Iiwic2hvd1RvYXN0IiwiaWNvbiIsIm1hc2siLCJmYWlsIiwiZXJyb3IiLCJzaG93TW9kYWwiLCJjb250ZW50IiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJjb25maXJtIiwib3BlblNldHRpbmciLCJjYW5jZWwiLCJnZXRVc2VyTG9jYXRpb24iLCJ3eCIsInNob3dDYW5jZWwiLCJlIiwib3BlbkxvY2F0aW9uU2V0dGluZyIsIl90aGlzIiwic2V0dGluZyIsImhhc093blByb3BlcnR5IiwidG9hc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFtQkE7QUFuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUEsZUFHZTtFQUNkQSxJQUFJLGtCQUFHO0lBQ04sT0FBTztNQUNOQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxNQUFNLEVBQUU7SUFDVCxDQUFDO0VBQ0YsQ0FBQztFQUNEQyxPQUFPLHFCQUFHO0lBQ1QsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDZixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNSRCxPQUFPLHFCQUFHO01BQ1QsSUFBSUUsSUFBSSxHQUFHLElBQUk7TUFDZjtNQUNBQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztRQUNkQyxPQUFPLG1CQUFDQyxHQUFHLEVBQUU7VUFDWixhQUFZQSxHQUFHOztVQUVmO1VBQ0EsSUFBSSxDQUFDQSxHQUFHLENBQUNDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQzNDO1lBQ0FKLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDO2NBQ2JDLEtBQUssRUFBRSxvQkFBb0I7Y0FDM0JKLE9BQU8scUJBQUc7Z0JBQ1QsSUFBSUssUUFBUSxHQUFHLElBQUlDLHdCQUFPLENBQUM7a0JBQzFCQyxHQUFHLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDO2dCQUNGO2dCQUNBVCxHQUFHLENBQUNVLFdBQVcsQ0FBQztrQkFDZkMsSUFBSSxFQUFFLE9BQU87a0JBQ2JULE9BQU8sRUFBRSxpQkFBU0MsR0FBRyxFQUFFO29CQUN0QkosSUFBSSxDQUFDYSxDQUFDLEdBQUdULEdBQUcsQ0FBQ1UsU0FBUztvQkFDdEJkLElBQUksQ0FBQ2UsQ0FBQyxHQUFHWCxHQUFHLENBQUNZLFFBQVE7b0JBQ3JCLGFBQVksSUFBSSxFQUFFWixHQUFHO29CQUNyQixhQUFZLFVBQVUsR0FBR0EsR0FBRyxDQUFDVSxTQUFTO29CQUN0QyxhQUFZLFVBQVUsR0FBR1YsR0FBRyxDQUFDWSxRQUFRO29CQUNyQztvQkFDQVIsUUFBUSxDQUFDUyxlQUFlLENBQUM7c0JBQ3hCQyxRQUFRLEVBQUU7d0JBQ1RGLFFBQVEsRUFBRVosR0FBRyxDQUFDWSxRQUFRO3dCQUN0QkYsU0FBUyxFQUFFVixHQUFHLENBQUNVO3NCQUNoQixDQUFDO3NCQUNEWCxPQUFPLG1CQUFDQyxHQUFHLEVBQUU7d0JBQ1osSUFBSWUsT0FBTyxHQUFHLEVBQUU7d0JBQ2hCLGFBQVlmLEdBQUc7d0JBQ2Y7d0JBQ0FlLE9BQU8sR0FBR2YsR0FBRyxDQUFDZ0IsTUFBTSxDQUNsQkMsaUJBQWlCLENBQUNDLElBQUk7d0JBQ3hCO3dCQUNBLElBQUksQ0FBQzFCLE1BQU0sR0FBR1EsR0FBRyxDQUFDZ0IsTUFBTSxDQUN0QkMsaUJBQWlCLENBQUNDLElBQUk7c0JBQ3pCO29CQUNELENBQUMsQ0FBQztvQkFDRnJCLEdBQUcsQ0FBQ3NCLFNBQVMsQ0FBQztzQkFDYjVCLEtBQUssRUFBRSxXQUFXLEdBQUdTLEdBQUcsQ0FBQ1UsU0FBUyxHQUNqQyxHQUFHLEdBQUdWLEdBQUcsQ0FBQ1ksUUFBUTtzQkFDbkJRLElBQUksRUFBRSxTQUFTO3NCQUNmQyxJQUFJLEVBQUU7b0JBQ1AsQ0FBQyxDQUFDO2tCQUNILENBQUM7a0JBQ0RDLElBQUksZ0JBQUNDLEtBQUssRUFBRTtvQkFDWCxhQUFZLElBQUksRUFBRUEsS0FBSztvQkFDdkIsSUFBSSxDQUFDL0IsTUFBTSxHQUFHLFFBQVE7a0JBQ3ZCO2dCQUNELENBQUMsQ0FBQztjQUNILENBQUM7Y0FDRDhCLElBQUksZ0JBQUNDLEtBQUssRUFBRTtnQkFDWDtnQkFDQSxhQUFZLE1BQU0sRUFBRUEsS0FBSztnQkFFekIxQixHQUFHLENBQUMyQixTQUFTLENBQUM7a0JBQ2JqQyxLQUFLLEVBQUUsSUFBSTtrQkFDWGtDLE9BQU8sRUFBRSxrQkFBa0I7a0JBQzNCQyxVQUFVLEVBQUUsS0FBSztrQkFDakJDLFdBQVcsRUFBRSxNQUFNO2tCQUNuQkMsV0FBVyxFQUFFLElBQUk7a0JBQ2pCQyxZQUFZLEVBQUUsU0FBUztrQkFDdkI5QixPQUFPLG1CQUFDQyxHQUFHLEVBQUU7b0JBQ1osYUFBWUEsR0FBRztvQkFDZixJQUFJQSxHQUFHLENBQUM4QixPQUFPLEVBQUU7c0JBQ2hCO3NCQUNBakMsR0FBRyxDQUFDa0MsV0FBVyxDQUFDO3dCQUNmaEMsT0FBTyxtQkFBQ0MsR0FBRyxFQUFFOzBCQUNaLGFBQVlBLEdBQUcsQ0FBQ0MsV0FBVzt3QkFDNUI7c0JBQ0QsQ0FBQyxDQUFDO29CQUNILENBQUMsTUFBTSxJQUFJRCxHQUFHLENBQUNnQyxNQUFNLEVBQUU7c0JBQ3RCO3NCQUNBLGFBQVksU0FBUztzQkFDckIsSUFBSSxDQUFDeEMsTUFBTSxHQUFHLFNBQVM7b0JBQ3hCO2tCQUNEO2dCQUNELENBQUMsQ0FBQztjQUNIO1lBQ0QsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxNQUFNO1lBQ04sSUFBSVksUUFBUSxHQUFHLElBQUlDLHdCQUFPLENBQUM7Y0FDMUJDLEdBQUcsRUFBRTtZQUNOLENBQUMsQ0FBQztZQUNGO1lBQ0FULEdBQUcsQ0FBQ1UsV0FBVyxDQUFDO2NBQ2ZDLElBQUksRUFBRSxPQUFPO2NBQ2JULE9BQU8sRUFBRSxpQkFBU0MsR0FBRyxFQUFFO2dCQUN0QkosSUFBSSxDQUFDYSxDQUFDLEdBQUdULEdBQUcsQ0FBQ1UsU0FBUztnQkFDdEJkLElBQUksQ0FBQ2UsQ0FBQyxHQUFHWCxHQUFHLENBQUNZLFFBQVE7Z0JBQ3JCLGFBQVksTUFBTSxFQUFFWixHQUFHO2dCQUN2QixhQUFZLFVBQVUsR0FBR0EsR0FBRyxDQUFDVSxTQUFTO2dCQUN0QyxhQUFZLFVBQVUsR0FBR1YsR0FBRyxDQUFDWSxRQUFRO2dCQUNyQztnQkFDQVIsUUFBUSxDQUFDUyxlQUFlLENBQUM7a0JBQ3hCQyxRQUFRLEVBQUU7b0JBQ1RGLFFBQVEsRUFBRVosR0FBRyxDQUFDWSxRQUFRO29CQUN0QkYsU0FBUyxFQUFFVixHQUFHLENBQUNVO2tCQUNoQixDQUFDO2tCQUNEWCxPQUFPLG1CQUFDQyxHQUFHLEVBQUU7b0JBQ1osSUFBSWUsT0FBTyxHQUFHLEVBQUU7b0JBQ2hCLGFBQVksUUFBUSxFQUFDZixHQUFHO29CQUN4QjtvQkFDQWUsT0FBTyxHQUFHZixHQUFHLENBQUNnQixNQUFNLENBQUNDLGlCQUFpQixDQUFDQyxJQUFJO29CQUMzQztvQkFDQSxJQUFJLENBQUMxQixNQUFNLEdBQUdRLEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQ0MsaUJBQWlCLENBQUNDLElBQUk7a0JBQ2hELENBQUM7a0JBQ0RJLElBQUksZ0JBQUN0QixHQUFHLEVBQUU7b0JBQ1QsYUFBWSxJQUFJLEVBQUVBLEdBQUc7b0JBQ3JCLElBQUksQ0FBQ1IsTUFBTSxHQUFHLE1BQU07a0JBQ3JCO2dCQUNELENBQUMsQ0FBQztnQkFDRjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQUssR0FBRyxDQUFDc0IsU0FBUyxDQUFDO2tCQUNiNUIsS0FBSyxFQUFFLFdBQVcsR0FBR1MsR0FBRyxDQUFDVSxTQUFTLEdBQUcsR0FBRyxHQUFHVixHQUFHLENBQUNZLFFBQVE7a0JBQ3ZEUSxJQUFJLEVBQUUsU0FBUztrQkFDZkMsSUFBSSxFQUFFO2dCQUNQLENBQUMsQ0FBQztjQUNILENBQUM7Y0FDREMsSUFBSSxnQkFBQ0MsS0FBSyxFQUFFO2dCQUNYMUIsR0FBRyxDQUFDc0IsU0FBUyxDQUFDO2tCQUNiNUIsS0FBSyxFQUFFLFNBQVM7a0JBQ2hCNkIsSUFBSSxFQUFFO2dCQUNQLENBQUMsQ0FBQztnQkFDRixhQUFZLElBQUksRUFBRUcsS0FBSztnQkFDdkIsSUFBSSxDQUFDL0IsTUFBTSxHQUFHLE1BQU07Y0FDckI7WUFDRCxDQUFDLENBQUM7VUFDSDtRQUNEO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNEO0lBQ0F5QyxlQUFlLDZCQUFHO01BQ2pCQyxFQUFFLENBQUNWLFNBQVMsQ0FBQztRQUNYakMsS0FBSyxFQUFFLEtBQUs7UUFDWnFDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCTyxVQUFVLEVBQUUsS0FBSztRQUNqQlYsT0FBTyxFQUFFVyxDQUFDO1FBQ1ZyQyxPQUFPLEVBQUUsaUJBQVNDLEdBQUcsRUFBRTtVQUNyQixJQUFJQSxHQUFHLENBQUM4QixPQUFPLEVBQUU7WUFDZixJQUFJLENBQUNPLG1CQUFtQixFQUFFO1VBQzVCO1FBQ0Y7TUFDRixDQUFDLENBQUM7O01BRUY7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFFQTtJQUNELENBQUM7SUFDQ0EsbUJBQW1CLGlDQUFJO01BQ3JCLElBQU1DLEtBQUssR0FBRyxJQUFJO01BQ2xCLElBQU1DLE9BQU8sR0FBRyxvQkFBb0I7TUFDcENMLEVBQUUsQ0FBQ0gsV0FBVyxDQUFDO1FBQ2JoQyxPQUFPLG1CQUFFQyxHQUFHLEVBQUU7VUFDWixhQUFZLFdBQVcsRUFBRUEsR0FBRztVQUM1QixXQUF3QkEsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUF6QkMsV0FBVyxRQUFYQSxXQUFXO1VBQ25CO1VBQ0EsSUFBSUEsV0FBVyxDQUFDdUMsY0FBYyxDQUFDRCxPQUFPLENBQUMsSUFBSXRDLFdBQVcsQ0FBQ3NDLE9BQU8sQ0FBQyxFQUFFO1lBQy9ELGFBQVksZ0NBQWdDO1VBQzlDO1FBQ0YsQ0FBQztRQUNEakIsSUFBSSxrQkFBSTtVQUNObUIsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO1FBQ3ZEO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFHSDtBQUNELENBQUM7QUFBQSwyQiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vLyDlvJXlhaXohb7orq/lnLDlm75qc3Nka+aWh+S7tlxuaW1wb3J0IFFRTWFwV1ggZnJvbSBcIkAvc3RhdGljL2pzL3FxbWFwLXd4LWpzc2RrLm1pbi5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICdIZWxsbycsXG5cdFx0XHRhZGRTdHI6ICflvZPliY3kvY3nva4nXG5cdFx0fVxuXHR9LFxuXHRvblJlYWR5KCkge1xuXHRcdHRoaXMuZ2V0Q2l0eSgpXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRDaXR5KCkge1xuXHRcdFx0dmFyIHRoYXQgPSB0aGlzXG5cdFx0XHQvLyDojrflj5bnlKjmiLfmmK/lkKblvIDlkK8g5o6I5p2D6I635Y+W5b2T5YmN55qE5Zyw55CG5L2N572u44CB6YCf5bqm55qE5p2D6ZmQ44CCXG5cdFx0XHR1bmkuZ2V0U2V0dGluZyh7XG5cdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFxuXHRcdFx0XHRcdC8vIOWmguaenOayoeacieaOiOadg1xuXHRcdFx0XHRcdGlmICghcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSkge1xuXHRcdFx0XHRcdFx0Ly8g5YiZ5ouJ6LW35o6I5p2D56qX5Y+jXG5cdFx0XHRcdFx0XHR1bmkuYXV0aG9yaXplKHtcblx0XHRcdFx0XHRcdFx0c2NvcGU6ICdzY29wZS51c2VyTG9jYXRpb24nLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xuXHRcdFx0XHRcdFx0XHRcdGxldCBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHtcblx0XHRcdFx0XHRcdFx0XHRcdGtleTogJ0g0MkJaLVhPNFIzLUYyTDMzLU9RT1FZLU5USFNFLVk3RjUyJ1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdC8v54K55Ye75YWB6K645ZCOLS3lsLHkuIDnm7TkvJrov5vlhaXmiJDlip/mjojmnYPnmoTlm57osIMg5bCx5Y+v5Lul5L2/55So6I635Y+W55qE5pa55rOV5LqGXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmdldExvY2F0aW9uKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICd3Z3M4NCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC54ID0gcmVzLmxvbmdpdHVkZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LnkgPSByZXMubGF0aXR1ZGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJpZlwiLCByZXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflvZPliY3kvY3nva7nmoTnu4/luqbvvJonICsgcmVzLmxvbmdpdHVkZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+W9k+WJjeS9jee9rueahOe6rOW6pu+8micgKyByZXMubGF0aXR1ZGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIOmAhuWcsOWdgOino+aekOaWueazlVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxcW1hcHNkay5yZXZlcnNlR2VvY29kZXIoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYXRpdHVkZTogcmVzLmxhdGl0dWRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9uZ2l0dWRlOiByZXMubG9uZ2l0dWRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5ld0NpdHkgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g5Y+W5Yiw55So5oi355qE5a6a5L2N5Z+O5biC77yM6LWL5YC85Lyg6YCS5Ye65Y67XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdDaXR5ID0gcmVzLnJlc3VsdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYWRkcmVzc19jb21wb25lbnQuY2l0eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdGhhdC5jb21taXQoJ21fbG9jYXRpb24vbmV3Q2l0eUZ1bicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZFN0ciA9IHJlcy5yZXN1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZHJlc3NfY29tcG9uZW50LmNpdHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5b2T5YmN5L2N572u55qE57uP57qs5bqm77yaJyArIHJlcy5sb25naXR1ZGUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JywnICsgcmVzLmxhdGl0dWRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0ZmFpbChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5aSx6LSlJywgZXJyb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkU3RyID0gJ+iOt+WPluWumuS9jeWksei0pSdcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly/ngrnlh7vkuobmi5Lnu53mjojmnYPlkI4tLeWwseS4gOebtOS8mui/m+WFpeWksei0peWbnuiwg+WHveaVsC0t5q2k5pe25bCx5Y+v5Lul5Zyo6L+Z6YeM6YeN5paw5ouJ6LW35o6I5p2D56qX5Y+jXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aLkue7neaOiOadgycsIGVycm9yKVxuXHRcdCBcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfoi6Xngrnlh7vkuI3mjojmnYPvvIzlsIbml6Dms5Xkvb/nlKjkvY3nva7lip/og70nLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FuY2VsVGV4dDogJ+S4jeaOiOadgycsXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW5jZWxDb2xvcjogJyM5OTknLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICfmjojmnYMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybUNvbG9yOiAnI2Y5NDIxOCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIOmAieaLqeW8ueahhuWGheaOiOadg1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5vcGVuU2V0dGluZyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuYXV0aFNldHRpbmcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g6YCJ5oup5by55qGG5YaFIOS4jeaOiOadg1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vkuI3mjojmnYMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkU3RyID0gJ+eUqOaIt+eCueWHu+S4jeaOiOadgydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHtcblx0XHRcdFx0XHRcdFx0a2V5OiAnSDQyQlotWE80UjMtRjJMMzMtT1FPUVktTlRIU0UtWTdGNTInXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdC8vIOacieadg+mZkOWImeebtOaOpeiOt+WPllxuXHRcdFx0XHRcdFx0dW5pLmdldExvY2F0aW9uKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3dnczg0Jyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhhdC54ID0gcmVzLmxvbmdpdHVkZVxuXHRcdFx0XHRcdFx0XHRcdHRoYXQueSA9IHJlcy5sYXRpdHVkZVxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZWxzZVwiLCByZXMpXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+W9k+WJjeS9jee9rueahOe7j+W6pu+8micgKyByZXMubG9uZ2l0dWRlKVxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCflvZPliY3kvY3nva7nmoTnuqzluqbvvJonICsgcmVzLmxhdGl0dWRlKVxuXHRcdFx0XHRcdFx0XHRcdC8vIOmAhuWcsOWdgOino+aekOaWueazlVxuXHRcdFx0XHRcdFx0XHRcdHFxbWFwc2RrLnJldmVyc2VHZW9jb2Rlcih7XG5cdFx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYXRpdHVkZTogcmVzLmxhdGl0dWRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb25naXR1ZGU6IHJlcy5sb25naXR1ZGVcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgbmV3Q2l0eSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfojrflj5bkv6Hmga/vvJogJyxyZXMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIOWPluWIsOeUqOaIt+eahOWumuS9jeWfjuW4gu+8jOi1i+WAvOS8oOmAkuWHuuWOu1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdDaXR5ID0gcmVzLnJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5jaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRoYXQuY29tbWl0KCdtX2xvY2F0aW9uL25ld0NpdHlGdW4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZFN0ciA9IHJlcy5yZXN1bHQuYWRkcmVzc19jb21wb25lbnQuY2l0eVxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGZhaWwocmVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6ZSZ6K+vXCIsIHJlcylcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRTdHIgPSAn5a6a5L2N5aSx6LSlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0Ly/miZPlvIDlnLDlm75cblx0XHRcdFx0XHRcdFx0XHQvLyB1bmkub3BlbkxvY2F0aW9uKHtcblx0XHRcdFx0XHRcdFx0XHQvLyBcdGxhdGl0dWRlOiB0aGF0LnksXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRsb25naXR1ZGU6IHRoYXQueCxcblx0XHRcdFx0XHRcdFx0XHQvLyBcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cblx0XHRcdFx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5b2T5YmN5L2N572u55qE57uP57qs5bqm77yaJyArIHJlcy5sb25naXR1ZGUgKyAnLCcgKyByZXMubGF0aXR1ZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZmFpbChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfor7fli7/popHnuYHosIPnlKjvvIEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+Wksei0pScsIGVycm9yKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkU3RyID0gJ+WumuS9jeWksei0pSdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDojrflj5bnlKjmiLflrprkvY3mjojmnYNcblx0XHRnZXRVc2VyTG9jYXRpb24oKSB7XG5cdFx0XHR3eC5zaG93TW9kYWwoe1xuXHRcdFx0ICB0aXRsZTogJ+aPkOekuu+8gScsXG5cdFx0XHQgIGNvbmZpcm1UZXh0OiAn5Y676K6+572uJyxcblx0XHRcdCAgc2hvd0NhbmNlbDogZmFsc2UsXG5cdFx0XHQgIGNvbnRlbnQ6IGUsXG5cdFx0XHQgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0ICAgIGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0ICAgICAgdGhpcy5vcGVuTG9jYXRpb25TZXR0aW5nKClcblx0XHRcdCAgICB9XG5cdFx0XHQgIH1cblx0XHRcdH0pXG5cdFx0XHRcblx0XHRcdC8vIHVuaS5hdXRob3JpemUoe1xuXHRcdFx0Ly8gXHRzY29wZTonc2NvcGUudXNlckxvY2F0aW9uJyxcblx0XHRcdC8vIFx0c3VjY2VzcygpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygn55So5oi35o6I5p2D5a6a5L2NJylcblx0XHRcdC8vIFx0fSxcblx0XHRcdC8vIFx0ZmFpbCgpIHtcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZygn55So5oi35ouS57ud5o6I5p2DJylcblx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcblx0XHRcdC8vIH0pXG5cdFx0fSxcblx0XHQgIG9wZW5Mb2NhdGlvblNldHRpbmcgKCkge1xuXHRcdCAgICBjb25zdCBfdGhpcyA9IHRoaXNcblx0XHQgICAgY29uc3Qgc2V0dGluZyA9ICdzY29wZS51c2VyTG9jYXRpb24nXG5cdFx0ICAgIHd4Lm9wZW5TZXR0aW5nKHtcblx0XHQgICAgICBzdWNjZXNzIChyZXMpIHtcblx0XHQgICAgICAgIGNvbnNvbGUubG9nKCfljp/nlJ/orr7nva7pobXlm57osIMtPicsIHJlcylcblx0XHQgICAgICAgIGNvbnN0IHsgYXV0aFNldHRpbmcgfSA9IHJlcyB8fCB7fVxuXHRcdCAgICAgICAgLy8g5bey5byA5ZCv5L2N572u5o6I5p2DXG5cdFx0ICAgICAgICBpZiAoYXV0aFNldHRpbmcuaGFzT3duUHJvcGVydHkoc2V0dGluZykgJiYgYXV0aFNldHRpbmdbc2V0dGluZ10pIHtcblx0XHQgICAgICAgICAgY29uc29sZS5sb2coJ+W3suaIkOWKn+W8gOWQr+S9jee9ruacjeWKoS0+QnV06L+Z6YeM5rKh5pyJ6L+U5Zue5Lu75L2V5L2N572u5L+h5oGv55u45YWz5L+h5oGvJylcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LFxuXHRcdCAgICAgIGZhaWwgKCkge1xuXHRcdCAgICAgICAgdG9hc3QoJ+iOt+WPluS9jee9ruS/oeaBr+Wksei0pe+8jOaMieKAnOWPs+S4iuiPnOWNlSAtIOWFs+S6jlxcbiAtIOWPs+S4iuiPnOWNlSAtIOiuvue9riAtIOS9jee9ruS/oeaBr+KAneaOiOadgycpXG5cdFx0ICAgICAgfVxuXHRcdCAgICB9KVxuXHRcdCAgfVxuXHRcdFxuXHRcdFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 15));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 14)))

/***/ }),
/* 14 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 16);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 17);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 18);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 20);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 19);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 22 */
/*!************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/static/js/qqmap-wx-jssdk.min.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(wx) {var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);\nvar _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);\nvar ERROR_CONF = {\n  KEY_ERR: 311,\n  KEY_ERR_MSG: 'key格式错误',\n  PARAM_ERR: 310,\n  PARAM_ERR_MSG: '请求参数信息有误',\n  SYSTEM_ERR: 600,\n  SYSTEM_ERR_MSG: '系统错误',\n  WX_ERR_CODE: 1000,\n  WX_OK_CODE: 200\n};\nvar BASE_URL = 'https://apis.map.qq.com/ws/';\nvar URL_SEARCH = BASE_URL + 'place/v1/search';\nvar URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';\nvar URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';\nvar URL_CITY_LIST = BASE_URL + 'district/v1/list';\nvar URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';\nvar URL_DISTANCE = BASE_URL + 'distance/v1/';\nvar URL_DIRECTION = BASE_URL + 'direction/v1/';\nvar MODE = {\n  driving: 'driving',\n  transit: 'transit'\n};\nvar EARTH_RADIUS = 6378136.49;\nvar Utils = {\n  safeAdd: function safeAdd(x, y) {\n    var lsw = (x & 0xffff) + (y & 0xffff);\n    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n    return msw << 16 | lsw & 0xffff;\n  },\n  bitRotateLeft: function bitRotateLeft(num, cnt) {\n    return num << cnt | num >>> 32 - cnt;\n  },\n  md5cmn: function md5cmn(q, a, b, x, s, t) {\n    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);\n  },\n  md5ff: function md5ff(a, b, c, d, x, s, t) {\n    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);\n  },\n  md5gg: function md5gg(a, b, c, d, x, s, t) {\n    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);\n  },\n  md5hh: function md5hh(a, b, c, d, x, s, t) {\n    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);\n  },\n  md5ii: function md5ii(a, b, c, d, x, s, t) {\n    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);\n  },\n  binlMD5: function binlMD5(x, len) {\n    x[len >> 5] |= 0x80 << len % 32;\n    x[(len + 64 >>> 9 << 4) + 14] = len;\n    var i;\n    var olda;\n    var oldb;\n    var oldc;\n    var oldd;\n    var a = 1732584193;\n    var b = -271733879;\n    var c = -1732584194;\n    var d = 271733878;\n    for (i = 0; i < x.length; i += 16) {\n      olda = a;\n      oldb = b;\n      oldc = c;\n      oldd = d;\n      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);\n      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);\n      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);\n      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);\n      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);\n      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);\n      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n      a = this.safeAdd(a, olda);\n      b = this.safeAdd(b, oldb);\n      c = this.safeAdd(c, oldc);\n      d = this.safeAdd(d, oldd);\n    }\n    return [a, b, c, d];\n  },\n  binl2rstr: function binl2rstr(input) {\n    var i;\n    var output = '';\n    var length32 = input.length * 32;\n    for (i = 0; i < length32; i += 8) {\n      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);\n    }\n    return output;\n  },\n  rstr2binl: function rstr2binl(input) {\n    var i;\n    var output = [];\n    output[(input.length >> 2) - 1] = undefined;\n    for (i = 0; i < output.length; i += 1) {\n      output[i] = 0;\n    }\n    var length8 = input.length * 8;\n    for (i = 0; i < length8; i += 8) {\n      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;\n    }\n    return output;\n  },\n  rstrMD5: function rstrMD5(s) {\n    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));\n  },\n  rstrHMACMD5: function rstrHMACMD5(key, data) {\n    var i;\n    var bkey = this.rstr2binl(key);\n    var ipad = [];\n    var opad = [];\n    var hash;\n    ipad[15] = opad[15] = undefined;\n    if (bkey.length > 16) {\n      bkey = this.binlMD5(bkey, key.length * 8);\n    }\n    for (i = 0; i < 16; i += 1) {\n      ipad[i] = bkey[i] ^ 0x36363636;\n      opad[i] = bkey[i] ^ 0x5c5c5c5c;\n    }\n    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);\n    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));\n  },\n  rstr2hex: function rstr2hex(input) {\n    var hexTab = '0123456789abcdef';\n    var output = '';\n    var x;\n    var i;\n    for (i = 0; i < input.length; i += 1) {\n      x = input.charCodeAt(i);\n      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);\n    }\n    return output;\n  },\n  str2rstrUTF8: function str2rstrUTF8(input) {\n    return unescape(encodeURIComponent(input));\n  },\n  rawMD5: function rawMD5(s) {\n    return this.rstrMD5(this.str2rstrUTF8(s));\n  },\n  hexMD5: function hexMD5(s) {\n    return this.rstr2hex(this.rawMD5(s));\n  },\n  rawHMACMD5: function rawHMACMD5(k, d) {\n    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));\n  },\n  hexHMACMD5: function hexHMACMD5(k, d) {\n    return this.rstr2hex(this.rawHMACMD5(k, d));\n  },\n  md5: function md5(string, key, raw) {\n    if (!key) {\n      if (!raw) {\n        return this.hexMD5(string);\n      }\n      return this.rawMD5(string);\n    }\n    if (!raw) {\n      return this.hexHMACMD5(key, string);\n    }\n    return this.rawHMACMD5(key, string);\n  },\n  getSig: function getSig(requestParam, sk, feature, mode) {\n    var sig = null;\n    var requestArr = [];\n    Object.keys(requestParam).sort().forEach(function (key) {\n      requestArr.push(key + '=' + requestParam[key]);\n    });\n    if (feature == 'search') {\n      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'suggest') {\n      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'reverseGeocoder') {\n      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'geocoder') {\n      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'getCityList') {\n      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'getDistrictByCityId') {\n      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'calculateDistance') {\n      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;\n    }\n    if (feature == 'direction') {\n      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;\n    }\n    sig = this.md5(sig);\n    return sig;\n  },\n  location2query: function location2query(data) {\n    if (typeof data == 'string') {\n      return data;\n    }\n    var query = '';\n    for (var i = 0; i < data.length; i++) {\n      var d = data[i];\n      if (!!query) {\n        query += ';';\n      }\n      if (d.location) {\n        query = query + d.location.lat + ',' + d.location.lng;\n      }\n      if (d.latitude && d.longitude) {\n        query = query + d.latitude + ',' + d.longitude;\n      }\n    }\n    return query;\n  },\n  rad: function rad(d) {\n    return d * Math.PI / 180.0;\n  },\n  getEndLocation: function getEndLocation(location) {\n    var to = location.split(';');\n    var endLocation = [];\n    for (var i = 0; i < to.length; i++) {\n      endLocation.push({\n        lat: parseFloat(to[i].split(',')[0]),\n        lng: parseFloat(to[i].split(',')[1])\n      });\n    }\n    return endLocation;\n  },\n  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {\n    var radLatFrom = this.rad(latFrom);\n    var radLatTo = this.rad(latTo);\n    var a = radLatFrom - radLatTo;\n    var b = this.rad(lngFrom) - this.rad(lngTo);\n    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));\n    distance = distance * EARTH_RADIUS;\n    distance = Math.round(distance * 10000) / 10000;\n    return parseFloat(distance.toFixed(0));\n  },\n  getWXLocation: function getWXLocation(success, fail, complete) {\n    wx.getLocation({\n      type: 'gcj02',\n      success: success,\n      fail: fail,\n      complete: complete\n    });\n  },\n  getLocationParam: function getLocationParam(location) {\n    if (typeof location == 'string') {\n      var locationArr = location.split(',');\n      if (locationArr.length === 2) {\n        location = {\n          latitude: location.split(',')[0],\n          longitude: location.split(',')[1]\n        };\n      } else {\n        location = {};\n      }\n    }\n    return location;\n  },\n  polyfillParam: function polyfillParam(param) {\n    param.success = param.success || function () {};\n    param.fail = param.fail || function () {};\n    param.complete = param.complete || function () {};\n  },\n  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {\n    if (!param[key]) {\n      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');\n      param.fail(errconf);\n      param.complete(errconf);\n      return true;\n    }\n    return false;\n  },\n  checkKeyword: function checkKeyword(param) {\n    return !this.checkParamKeyEmpty(param, 'keyword');\n  },\n  checkLocation: function checkLocation(param) {\n    var location = this.getLocationParam(param.location);\n    if (!location || !location.latitude || !location.longitude) {\n      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');\n      param.fail(errconf);\n      param.complete(errconf);\n      return false;\n    }\n    return true;\n  },\n  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {\n    return {\n      status: errCode,\n      message: errMsg\n    };\n  },\n  handleData: function handleData(param, data, feature) {\n    if (feature == 'search') {\n      var searchResult = data.data;\n      var searchSimplify = [];\n      for (var i = 0; i < searchResult.length; i++) {\n        searchSimplify.push({\n          id: searchResult[i].id || null,\n          title: searchResult[i].title || null,\n          latitude: searchResult[i].location && searchResult[i].location.lat || null,\n          longitude: searchResult[i].location && searchResult[i].location.lng || null,\n          address: searchResult[i].address || null,\n          category: searchResult[i].category || null,\n          tel: searchResult[i].tel || null,\n          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,\n          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,\n          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,\n          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null\n        });\n      }\n      param.success(data, {\n        searchResult: searchResult,\n        searchSimplify: searchSimplify\n      });\n    } else if (feature == 'suggest') {\n      var suggestResult = data.data;\n      var suggestSimplify = [];\n      for (var i = 0; i < suggestResult.length; i++) {\n        suggestSimplify.push({\n          adcode: suggestResult[i].adcode || null,\n          address: suggestResult[i].address || null,\n          category: suggestResult[i].category || null,\n          city: suggestResult[i].city || null,\n          district: suggestResult[i].district || null,\n          id: suggestResult[i].id || null,\n          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,\n          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,\n          province: suggestResult[i].province || null,\n          title: suggestResult[i].title || null,\n          type: suggestResult[i].type || null\n        });\n      }\n      param.success(data, {\n        suggestResult: suggestResult,\n        suggestSimplify: suggestSimplify\n      });\n    } else if (feature == 'reverseGeocoder') {\n      var reverseGeocoderResult = data.result;\n      var reverseGeocoderSimplify = {\n        address: reverseGeocoderResult.address || null,\n        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,\n        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,\n        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,\n        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,\n        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,\n        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,\n        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,\n        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,\n        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,\n        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,\n        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null\n      };\n      if (reverseGeocoderResult.pois) {\n        var pois = reverseGeocoderResult.pois;\n        var poisSimplify = [];\n        for (var i = 0; i < pois.length; i++) {\n          poisSimplify.push({\n            id: pois[i].id || null,\n            title: pois[i].title || null,\n            latitude: pois[i].location && pois[i].location.lat || null,\n            longitude: pois[i].location && pois[i].location.lng || null,\n            address: pois[i].address || null,\n            category: pois[i].category || null,\n            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,\n            city: pois[i].ad_info && pois[i].ad_info.city || null,\n            district: pois[i].ad_info && pois[i].ad_info.district || null,\n            province: pois[i].ad_info && pois[i].ad_info.province || null\n          });\n        }\n        param.success(data, {\n          reverseGeocoderResult: reverseGeocoderResult,\n          reverseGeocoderSimplify: reverseGeocoderSimplify,\n          pois: pois,\n          poisSimplify: poisSimplify\n        });\n      } else {\n        param.success(data, {\n          reverseGeocoderResult: reverseGeocoderResult,\n          reverseGeocoderSimplify: reverseGeocoderSimplify\n        });\n      }\n    } else if (feature == 'geocoder') {\n      var geocoderResult = data.result;\n      var geocoderSimplify = {\n        title: geocoderResult.title || null,\n        latitude: geocoderResult.location && geocoderResult.location.lat || null,\n        longitude: geocoderResult.location && geocoderResult.location.lng || null,\n        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,\n        province: geocoderResult.address_components && geocoderResult.address_components.province || null,\n        city: geocoderResult.address_components && geocoderResult.address_components.city || null,\n        district: geocoderResult.address_components && geocoderResult.address_components.district || null,\n        street: geocoderResult.address_components && geocoderResult.address_components.street || null,\n        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,\n        level: geocoderResult.level || null\n      };\n      param.success(data, {\n        geocoderResult: geocoderResult,\n        geocoderSimplify: geocoderSimplify\n      });\n    } else if (feature == 'getCityList') {\n      var provinceResult = data.result[0];\n      var cityResult = data.result[1];\n      var districtResult = data.result[2];\n      param.success(data, {\n        provinceResult: provinceResult,\n        cityResult: cityResult,\n        districtResult: districtResult\n      });\n    } else if (feature == 'getDistrictByCityId') {\n      var districtByCity = data.result[0];\n      param.success(data, districtByCity);\n    } else if (feature == 'calculateDistance') {\n      var calculateDistanceResult = data.result.elements;\n      var distance = [];\n      for (var i = 0; i < calculateDistanceResult.length; i++) {\n        distance.push(calculateDistanceResult[i].distance);\n      }\n      param.success(data, {\n        calculateDistanceResult: calculateDistanceResult,\n        distance: distance\n      });\n    } else if (feature == 'direction') {\n      var direction = data.result.routes;\n      param.success(data, direction);\n    } else {\n      param.success(data);\n    }\n  },\n  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {\n    var that = this;\n    options.header = {\n      \"content-type\": \"application/json\"\n    };\n    options.method = 'GET';\n    options.success = function (res) {\n      var data = res.data;\n      if (data.status === 0) {\n        that.handleData(param, data, feature);\n      } else {\n        param.fail(data);\n      }\n    };\n    options.fail = function (res) {\n      res.statusCode = ERROR_CONF.WX_ERR_CODE;\n      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));\n    };\n    options.complete = function (res) {\n      var statusCode = +res.statusCode;\n      switch (statusCode) {\n        case ERROR_CONF.WX_ERR_CODE:\n          {\n            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));\n            break;\n          }\n        case ERROR_CONF.WX_OK_CODE:\n          {\n            var data = res.data;\n            if (data.status === 0) {\n              param.complete(data);\n            } else {\n              param.complete(that.buildErrorConfig(data.status, data.message));\n            }\n            break;\n          }\n        default:\n          {\n            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));\n          }\n      }\n    };\n    return options;\n  },\n  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {\n    var that = this;\n    locationfail = locationfail || function (res) {\n      res.statusCode = ERROR_CONF.WX_ERR_CODE;\n      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));\n    };\n    locationcomplete = locationcomplete || function (res) {\n      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {\n        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));\n      }\n    };\n    if (!param.location) {\n      that.getWXLocation(locationsuccess, locationfail, locationcomplete);\n    } else if (that.checkLocation(param)) {\n      var location = Utils.getLocationParam(param.location);\n      locationsuccess(location);\n    }\n  }\n};\nvar QQMapWX = /*#__PURE__*/function () {\n  \"use strict\";\n\n  function QQMapWX(options) {\n    _classCallCheck(this, QQMapWX);\n    if (!options.key) {\n      throw Error('key值不能为空');\n    }\n    this.key = options.key;\n  }\n  _createClass(QQMapWX, [{\n    key: \"search\",\n    value: function search(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      if (!Utils.checkKeyword(options)) {\n        return;\n      }\n      var requestParam = {\n        keyword: options.keyword,\n        orderby: options.orderby || '_distance',\n        page_size: options.page_size || 10,\n        page_index: options.page_index || 1,\n        output: 'json',\n        key: that.key\n      };\n      if (options.address_format) {\n        requestParam.address_format = options.address_format;\n      }\n      if (options.filter) {\n        requestParam.filter = options.filter;\n      }\n      var distance = options.distance || \"1000\";\n      var auto_extend = options.auto_extend || 1;\n      var region = null;\n      var rectangle = null;\n      if (options.region) {\n        region = options.region;\n      }\n      if (options.rectangle) {\n        rectangle = options.rectangle;\n      }\n      var locationsuccess = function locationsuccess(result) {\n        if (region && !rectangle) {\n          requestParam.boundary = \"region(\" + region + \",\" + auto_extend + \",\" + result.latitude + \",\" + result.longitude + \")\";\n          if (options.sig) {\n            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');\n          }\n        } else if (rectangle && !region) {\n          requestParam.boundary = \"rectangle(\" + rectangle + \")\";\n          if (options.sig) {\n            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');\n          }\n        } else {\n          requestParam.boundary = \"nearby(\" + result.latitude + \",\" + result.longitude + \",\" + distance + \",\" + auto_extend + \")\";\n          if (options.sig) {\n            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');\n          }\n        }\n        wx.request(Utils.buildWxRequestConfig(options, {\n          url: URL_SEARCH,\n          data: requestParam\n        }, 'search'));\n      };\n      Utils.locationProcess(options, locationsuccess);\n    }\n  }, {\n    key: \"getSuggestion\",\n    value: function getSuggestion(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      if (!Utils.checkKeyword(options)) {\n        return;\n      }\n      var requestParam = {\n        keyword: options.keyword,\n        region: options.region || '全国',\n        region_fix: options.region_fix || 0,\n        policy: options.policy || 0,\n        page_size: options.page_size || 10,\n        page_index: options.page_index || 1,\n        get_subpois: options.get_subpois || 0,\n        output: 'json',\n        key: that.key\n      };\n      if (options.address_format) {\n        requestParam.address_format = options.address_format;\n      }\n      if (options.filter) {\n        requestParam.filter = options.filter;\n      }\n      if (options.location) {\n        var locationsuccess = function locationsuccess(result) {\n          requestParam.location = result.latitude + ',' + result.longitude;\n          if (options.sig) {\n            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');\n          }\n          wx.request(Utils.buildWxRequestConfig(options, {\n            url: URL_SUGGESTION,\n            data: requestParam\n          }, \"suggest\"));\n        };\n        Utils.locationProcess(options, locationsuccess);\n      } else {\n        if (options.sig) {\n          requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');\n        }\n        wx.request(Utils.buildWxRequestConfig(options, {\n          url: URL_SUGGESTION,\n          data: requestParam\n        }, \"suggest\"));\n      }\n    }\n  }, {\n    key: \"reverseGeocoder\",\n    value: function reverseGeocoder(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      var requestParam = {\n        coord_type: options.coord_type || 5,\n        get_poi: options.get_poi || 0,\n        output: 'json',\n        key: that.key\n      };\n      if (options.poi_options) {\n        requestParam.poi_options = options.poi_options;\n      }\n      var locationsuccess = function locationsuccess(result) {\n        requestParam.location = result.latitude + ',' + result.longitude;\n        if (options.sig) {\n          requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');\n        }\n        wx.request(Utils.buildWxRequestConfig(options, {\n          url: URL_GET_GEOCODER,\n          data: requestParam\n        }, 'reverseGeocoder'));\n      };\n      Utils.locationProcess(options, locationsuccess);\n    }\n  }, {\n    key: \"geocoder\",\n    value: function geocoder(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      if (Utils.checkParamKeyEmpty(options, 'address')) {\n        return;\n      }\n      var requestParam = {\n        address: options.address,\n        output: 'json',\n        key: that.key\n      };\n      if (options.region) {\n        requestParam.region = options.region;\n      }\n      if (options.sig) {\n        requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');\n      }\n      wx.request(Utils.buildWxRequestConfig(options, {\n        url: URL_GET_GEOCODER,\n        data: requestParam\n      }, 'geocoder'));\n    }\n  }, {\n    key: \"getCityList\",\n    value: function getCityList(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      var requestParam = {\n        output: 'json',\n        key: that.key\n      };\n      if (options.sig) {\n        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');\n      }\n      wx.request(Utils.buildWxRequestConfig(options, {\n        url: URL_CITY_LIST,\n        data: requestParam\n      }, 'getCityList'));\n    }\n  }, {\n    key: \"getDistrictByCityId\",\n    value: function getDistrictByCityId(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      if (Utils.checkParamKeyEmpty(options, 'id')) {\n        return;\n      }\n      var requestParam = {\n        id: options.id || '',\n        output: 'json',\n        key: that.key\n      };\n      if (options.sig) {\n        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');\n      }\n      wx.request(Utils.buildWxRequestConfig(options, {\n        url: URL_AREA_LIST,\n        data: requestParam\n      }, 'getDistrictByCityId'));\n    }\n  }, {\n    key: \"calculateDistance\",\n    value: function calculateDistance(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      if (Utils.checkParamKeyEmpty(options, 'to')) {\n        return;\n      }\n      var requestParam = {\n        mode: options.mode || 'walking',\n        to: Utils.location2query(options.to),\n        output: 'json',\n        key: that.key\n      };\n      if (options.from) {\n        options.location = options.from;\n      }\n      if (requestParam.mode == 'straight') {\n        var locationsuccess = function locationsuccess(result) {\n          var locationTo = Utils.getEndLocation(requestParam.to);\n          var data = {\n            message: \"query ok\",\n            result: {\n              elements: []\n            },\n            status: 0\n          };\n          for (var i = 0; i < locationTo.length; i++) {\n            data.result.elements.push({\n              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),\n              duration: 0,\n              from: {\n                lat: result.latitude,\n                lng: result.longitude\n              },\n              to: {\n                lat: locationTo[i].lat,\n                lng: locationTo[i].lng\n              }\n            });\n          }\n          var calculateResult = data.result.elements;\n          var distanceResult = [];\n          for (var i = 0; i < calculateResult.length; i++) {\n            distanceResult.push(calculateResult[i].distance);\n          }\n          return options.success(data, {\n            calculateResult: calculateResult,\n            distanceResult: distanceResult\n          });\n        };\n        Utils.locationProcess(options, locationsuccess);\n      } else {\n        var locationsuccess = function locationsuccess(result) {\n          requestParam.from = result.latitude + ',' + result.longitude;\n          if (options.sig) {\n            requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');\n          }\n          wx.request(Utils.buildWxRequestConfig(options, {\n            url: URL_DISTANCE,\n            data: requestParam\n          }, 'calculateDistance'));\n        };\n        Utils.locationProcess(options, locationsuccess);\n      }\n    }\n  }, {\n    key: \"direction\",\n    value: function direction(options) {\n      var that = this;\n      options = options || {};\n      Utils.polyfillParam(options);\n      if (Utils.checkParamKeyEmpty(options, 'to')) {\n        return;\n      }\n      var requestParam = {\n        output: 'json',\n        key: that.key\n      };\n      if (typeof options.to == 'string') {\n        requestParam.to = options.to;\n      } else {\n        requestParam.to = options.to.latitude + ',' + options.to.longitude;\n      }\n      var SET_URL_DIRECTION = null;\n      options.mode = options.mode || MODE.driving;\n      SET_URL_DIRECTION = URL_DIRECTION + options.mode;\n      if (options.from) {\n        options.location = options.from;\n      }\n      if (options.mode == MODE.driving) {\n        if (options.from_poi) {\n          requestParam.from_poi = options.from_poi;\n        }\n        if (options.heading) {\n          requestParam.heading = options.heading;\n        }\n        if (options.speed) {\n          requestParam.speed = options.speed;\n        }\n        if (options.accuracy) {\n          requestParam.accuracy = options.accuracy;\n        }\n        if (options.road_type) {\n          requestParam.road_type = options.road_type;\n        }\n        if (options.to_poi) {\n          requestParam.to_poi = options.to_poi;\n        }\n        if (options.from_track) {\n          requestParam.from_track = options.from_track;\n        }\n        if (options.waypoints) {\n          requestParam.waypoints = options.waypoints;\n        }\n        if (options.policy) {\n          requestParam.policy = options.policy;\n        }\n        if (options.plate_number) {\n          requestParam.plate_number = options.plate_number;\n        }\n      }\n      if (options.mode == MODE.transit) {\n        if (options.departure_time) {\n          requestParam.departure_time = options.departure_time;\n        }\n        if (options.policy) {\n          requestParam.policy = options.policy;\n        }\n      }\n      var locationsuccess = function locationsuccess(result) {\n        requestParam.from = result.latitude + ',' + result.longitude;\n        if (options.sig) {\n          requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);\n        }\n        wx.request(Utils.buildWxRequestConfig(options, {\n          url: SET_URL_DIRECTION,\n          data: requestParam\n        }, 'direction'));\n      };\n      Utils.locationProcess(options, locationsuccess);\n    }\n  }]);\n  return QQMapWX;\n}();\n;\nmodule.exports = QQMapWX;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 13)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RhdGljL2pzL3FxbWFwLXd4LWpzc2RrLm1pbi5qcyJdLCJuYW1lcyI6WyJFUlJPUl9DT05GIiwiS0VZX0VSUiIsIktFWV9FUlJfTVNHIiwiUEFSQU1fRVJSIiwiUEFSQU1fRVJSX01TRyIsIlNZU1RFTV9FUlIiLCJTWVNURU1fRVJSX01TRyIsIldYX0VSUl9DT0RFIiwiV1hfT0tfQ09ERSIsIkJBU0VfVVJMIiwiVVJMX1NFQVJDSCIsIlVSTF9TVUdHRVNUSU9OIiwiVVJMX0dFVF9HRU9DT0RFUiIsIlVSTF9DSVRZX0xJU1QiLCJVUkxfQVJFQV9MSVNUIiwiVVJMX0RJU1RBTkNFIiwiVVJMX0RJUkVDVElPTiIsIk1PREUiLCJkcml2aW5nIiwidHJhbnNpdCIsIkVBUlRIX1JBRElVUyIsIlV0aWxzIiwic2FmZUFkZCIsIngiLCJ5IiwibHN3IiwibXN3IiwiYml0Um90YXRlTGVmdCIsIm51bSIsImNudCIsIm1kNWNtbiIsInEiLCJhIiwiYiIsInMiLCJ0IiwibWQ1ZmYiLCJjIiwiZCIsIm1kNWdnIiwibWQ1aGgiLCJtZDVpaSIsImJpbmxNRDUiLCJsZW4iLCJpIiwib2xkYSIsIm9sZGIiLCJvbGRjIiwib2xkZCIsImxlbmd0aCIsImJpbmwycnN0ciIsImlucHV0Iiwib3V0cHV0IiwibGVuZ3RoMzIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyc3RyMmJpbmwiLCJ1bmRlZmluZWQiLCJsZW5ndGg4IiwiY2hhckNvZGVBdCIsInJzdHJNRDUiLCJyc3RySE1BQ01ENSIsImtleSIsImRhdGEiLCJia2V5IiwiaXBhZCIsIm9wYWQiLCJoYXNoIiwiY29uY2F0IiwicnN0cjJoZXgiLCJoZXhUYWIiLCJjaGFyQXQiLCJzdHIycnN0clVURjgiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJhd01ENSIsImhleE1ENSIsInJhd0hNQUNNRDUiLCJrIiwiaGV4SE1BQ01ENSIsIm1kNSIsInN0cmluZyIsInJhdyIsImdldFNpZyIsInJlcXVlc3RQYXJhbSIsInNrIiwiZmVhdHVyZSIsIm1vZGUiLCJzaWciLCJyZXF1ZXN0QXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJmb3JFYWNoIiwicHVzaCIsImpvaW4iLCJsb2NhdGlvbjJxdWVyeSIsInF1ZXJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJhZCIsIk1hdGgiLCJQSSIsImdldEVuZExvY2F0aW9uIiwidG8iLCJzcGxpdCIsImVuZExvY2F0aW9uIiwicGFyc2VGbG9hdCIsImdldERpc3RhbmNlIiwibGF0RnJvbSIsImxuZ0Zyb20iLCJsYXRUbyIsImxuZ1RvIiwicmFkTGF0RnJvbSIsInJhZExhdFRvIiwiZGlzdGFuY2UiLCJhc2luIiwic3FydCIsInBvdyIsInNpbiIsImNvcyIsInJvdW5kIiwidG9GaXhlZCIsImdldFdYTG9jYXRpb24iLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwid3giLCJnZXRMb2NhdGlvbiIsInR5cGUiLCJnZXRMb2NhdGlvblBhcmFtIiwibG9jYXRpb25BcnIiLCJwb2x5ZmlsbFBhcmFtIiwicGFyYW0iLCJjaGVja1BhcmFtS2V5RW1wdHkiLCJlcnJjb25mIiwiYnVpbGRFcnJvckNvbmZpZyIsImNoZWNrS2V5d29yZCIsImNoZWNrTG9jYXRpb24iLCJlcnJDb2RlIiwiZXJyTXNnIiwic3RhdHVzIiwibWVzc2FnZSIsImhhbmRsZURhdGEiLCJzZWFyY2hSZXN1bHQiLCJzZWFyY2hTaW1wbGlmeSIsImlkIiwidGl0bGUiLCJhZGRyZXNzIiwiY2F0ZWdvcnkiLCJ0ZWwiLCJhZGNvZGUiLCJhZF9pbmZvIiwiY2l0eSIsImRpc3RyaWN0IiwicHJvdmluY2UiLCJzdWdnZXN0UmVzdWx0Iiwic3VnZ2VzdFNpbXBsaWZ5IiwicmV2ZXJzZUdlb2NvZGVyUmVzdWx0IiwicmVzdWx0IiwicmV2ZXJzZUdlb2NvZGVyU2ltcGxpZnkiLCJhZGRyZXNzX2NvbXBvbmVudCIsIm5hdGlvbiIsInN0cmVldCIsInN0cmVldF9udW1iZXIiLCJyZWNvbW1lbmQiLCJmb3JtYXR0ZWRfYWRkcmVzc2VzIiwicm91Z2giLCJwb2lzIiwicG9pc1NpbXBsaWZ5IiwiZ2VvY29kZXJSZXN1bHQiLCJnZW9jb2RlclNpbXBsaWZ5IiwiYWRkcmVzc19jb21wb25lbnRzIiwibGV2ZWwiLCJwcm92aW5jZVJlc3VsdCIsImNpdHlSZXN1bHQiLCJkaXN0cmljdFJlc3VsdCIsImRpc3RyaWN0QnlDaXR5IiwiY2FsY3VsYXRlRGlzdGFuY2VSZXN1bHQiLCJlbGVtZW50cyIsImRpcmVjdGlvbiIsInJvdXRlcyIsImJ1aWxkV3hSZXF1ZXN0Q29uZmlnIiwib3B0aW9ucyIsInRoYXQiLCJoZWFkZXIiLCJtZXRob2QiLCJyZXMiLCJzdGF0dXNDb2RlIiwibG9jYXRpb25Qcm9jZXNzIiwibG9jYXRpb25zdWNjZXNzIiwibG9jYXRpb25mYWlsIiwibG9jYXRpb25jb21wbGV0ZSIsIlFRTWFwV1giLCJFcnJvciIsImtleXdvcmQiLCJvcmRlcmJ5IiwicGFnZV9zaXplIiwicGFnZV9pbmRleCIsImFkZHJlc3NfZm9ybWF0IiwiZmlsdGVyIiwiYXV0b19leHRlbmQiLCJyZWdpb24iLCJyZWN0YW5nbGUiLCJib3VuZGFyeSIsInJlcXVlc3QiLCJ1cmwiLCJyZWdpb25fZml4IiwicG9saWN5IiwiZ2V0X3N1YnBvaXMiLCJjb29yZF90eXBlIiwiZ2V0X3BvaSIsInBvaV9vcHRpb25zIiwiZnJvbSIsImxvY2F0aW9uVG8iLCJkdXJhdGlvbiIsImNhbGN1bGF0ZVJlc3VsdCIsImRpc3RhbmNlUmVzdWx0IiwiU0VUX1VSTF9ESVJFQ1RJT04iLCJmcm9tX3BvaSIsImhlYWRpbmciLCJzcGVlZCIsImFjY3VyYWN5Iiwicm9hZF90eXBlIiwidG9fcG9pIiwiZnJvbV90cmFjayIsIndheXBvaW50cyIsInBsYXRlX251bWJlciIsImRlcGFydHVyZV90aW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLEdBQUc7RUFBRUMsT0FBTyxF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R0FBR1YsQ0FBQztNQUFFVyxJQUFJLEdBQUdWLENBQUM7TUFBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDSixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVmLENBQUMsQ0FBQ3FCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNFLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFUCxDQUFDLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRVYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUM7TUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVULENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7TUFBRVosQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDSixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVmLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7TUFBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVkLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDO01BQUVQLENBQUMsR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFVixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDO01BQUVYLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQ0gsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFVCxDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO01BQUVaLENBQUMsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQ0osQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFZixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNFLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztNQUFFUCxDQUFDLEdBQUcsSUFBSSxDQUFDRCxLQUFLLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRVYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztNQUFFWCxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNILENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRVQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztNQUFFWixDQUFDLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUNKLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRWYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUM7TUFBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVkLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7TUFBRVAsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVWLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7TUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVULENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDO01BQUVaLENBQUMsR0FBRyxJQUFJLENBQUNPLEtBQUssQ0FBQ1AsQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFZixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO01BQUVOLENBQUMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFZCxDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO01BQUVQLENBQUMsR0FBRyxJQUFJLENBQUNFLEtBQUssQ0FBQ0YsQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFVixDQUFDLENBQUNxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQztNQUFFWCxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLLENBQUNOLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRVQsQ0FBQyxDQUFDcUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO01BQUVaLENBQUMsR0FBRyxJQUFJLENBQUNPLEtBQUssQ0FBQ1AsQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFZixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO01BQUVOLENBQUMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFZCxDQUFDLENBQUNxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQztNQUFFUCxDQUFDLEdBQUcsSUFBSSxDQUFDRSxLQUFLLENBQUNGLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRVYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFWCxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLLENBQUNOLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRVQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFWixDQUFDLEdBQUcsSUFBSSxDQUFDTyxLQUFLLENBQUNQLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRWYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUM7TUFBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVkLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7TUFBRVAsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsS0FBSyxDQUFDRixDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVWLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUM7TUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ00sS0FBSyxDQUFDTixDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVULENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDO01BQUVaLENBQUMsR0FBRyxJQUFJLENBQUNPLEtBQUssQ0FBQ1AsQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFZixDQUFDLENBQUNxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO01BQUVOLENBQUMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFZCxDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO01BQUVQLENBQUMsR0FBRyxJQUFJLENBQUNFLEtBQUssQ0FBQ0YsQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFVixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQztNQUFFWCxDQUFDLEdBQUcsSUFBSSxDQUFDTSxLQUFLLENBQUNOLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRVQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztNQUFFWixDQUFDLEdBQUcsSUFBSSxDQUFDUSxLQUFLLENBQUNSLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRWYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRSxLQUFLLENBQUNGLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztNQUFFUCxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNILENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRVYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUM7TUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ08sS0FBSyxDQUFDUCxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVULENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7TUFBRVosQ0FBQyxHQUFHLElBQUksQ0FBQ1EsS0FBSyxDQUFDUixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVmLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7TUFBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQ0UsS0FBSyxDQUFDRixDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVkLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDO01BQUVQLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQ0gsQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFVixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO01BQUVYLENBQUMsR0FBRyxJQUFJLENBQUNPLEtBQUssQ0FBQ1AsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFVCxDQUFDLENBQUNxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDO01BQUVaLENBQUMsR0FBRyxJQUFJLENBQUNRLEtBQUssQ0FBQ1IsQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFZixDQUFDLENBQUNxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRSxLQUFLLENBQUNGLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO01BQUVQLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQ0gsQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFVixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDO01BQUVYLENBQUMsR0FBRyxJQUFJLENBQUNPLEtBQUssQ0FBQ1AsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFVCxDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztNQUFFWixDQUFDLEdBQUcsSUFBSSxDQUFDUSxLQUFLLENBQUNSLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRWYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRSxLQUFLLENBQUNGLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFUCxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNILENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRVYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUM7TUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ08sS0FBSyxDQUFDUCxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVULENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUM7TUFBRVosQ0FBQyxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDVCxDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVmLENBQUMsQ0FBQ3FCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNILENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUM7TUFBRVAsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDSixDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVWLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7TUFBRVgsQ0FBQyxHQUFHLElBQUksQ0FBQ1EsS0FBSyxDQUFDUixDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVULENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7TUFBRVosQ0FBQyxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDVCxDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVmLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO01BQUVOLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQ0gsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFZCxDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDO01BQUVQLENBQUMsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQ0osQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFVixDQUFDLENBQUNxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDO01BQUVYLENBQUMsR0FBRyxJQUFJLENBQUNRLEtBQUssQ0FBQ1IsQ0FBQyxFQUFFSSxDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFVCxDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDO01BQUVaLENBQUMsR0FBRyxJQUFJLENBQUNTLEtBQUssQ0FBQ1QsQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRUMsQ0FBQyxFQUFFZixDQUFDLENBQUNxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQztNQUFFTixDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUNILENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVJLENBQUMsRUFBRWQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztNQUFFUCxDQUFDLEdBQUcsSUFBSSxDQUFDSSxLQUFLLENBQUNKLENBQUMsRUFBRUMsQ0FBQyxFQUFFTixDQUFDLEVBQUVDLENBQUMsRUFBRVYsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztNQUFFWCxDQUFDLEdBQUcsSUFBSSxDQUFDUSxLQUFLLENBQUNSLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVOLENBQUMsRUFBRVQsQ0FBQyxDQUFDcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUM7TUFBRVosQ0FBQyxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDVCxDQUFDLEVBQUVDLENBQUMsRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUVmLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7TUFBRU4sQ0FBQyxHQUFHLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxDQUFDLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFSSxDQUFDLEVBQUVkLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUM7TUFBRVAsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDSixDQUFDLEVBQUVDLENBQUMsRUFBRU4sQ0FBQyxFQUFFQyxDQUFDLEVBQUVWLENBQUMsQ0FBQ3FCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDO01BQUVYLENBQUMsR0FBRyxJQUFJLENBQUNRLEtBQUssQ0FB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LE9BQU8sRUFBRTtVQUFFdUIsR0FBRyxFQUFFWSxpQkFBaUI7VUFBRTlKLElBQUksRUFBRXFCO1FBQWEsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO01BQUMsQ0FBQztNQUFFL0QsS0FBSyxDQUFDMkssZUFBZSxDQUFDTixPQUFPLEVBQUVPLGVBQWUsQ0FBQztJQUFDO0VBQUM7RUFBQTtBQUFBO0FBQUU7QUFBRXVDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHckMsT0FBTyxDIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEVSUk9SX0NPTkYgPSB7IEtFWV9FUlI6IDMxMSwgS0VZX0VSUl9NU0c6ICdrZXnmoLzlvI/plJnor68nLCBQQVJBTV9FUlI6IDMxMCwgUEFSQU1fRVJSX01TRzogJ+ivt+axguWPguaVsOS/oeaBr+acieivrycsIFNZU1RFTV9FUlI6IDYwMCwgU1lTVEVNX0VSUl9NU0c6ICfns7vnu5/plJnor68nLCBXWF9FUlJfQ09ERTogMTAwMCwgV1hfT0tfQ09ERTogMjAwIH07IHZhciBCQVNFX1VSTCA9ICdodHRwczovL2FwaXMubWFwLnFxLmNvbS93cy8nOyB2YXIgVVJMX1NFQVJDSCA9IEJBU0VfVVJMICsgJ3BsYWNlL3YxL3NlYXJjaCc7IHZhciBVUkxfU1VHR0VTVElPTiA9IEJBU0VfVVJMICsgJ3BsYWNlL3YxL3N1Z2dlc3Rpb24nOyB2YXIgVVJMX0dFVF9HRU9DT0RFUiA9IEJBU0VfVVJMICsgJ2dlb2NvZGVyL3YxLyc7IHZhciBVUkxfQ0lUWV9MSVNUID0gQkFTRV9VUkwgKyAnZGlzdHJpY3QvdjEvbGlzdCc7IHZhciBVUkxfQVJFQV9MSVNUID0gQkFTRV9VUkwgKyAnZGlzdHJpY3QvdjEvZ2V0Y2hpbGRyZW4nOyB2YXIgVVJMX0RJU1RBTkNFID0gQkFTRV9VUkwgKyAnZGlzdGFuY2UvdjEvJzsgdmFyIFVSTF9ESVJFQ1RJT04gPSBCQVNFX1VSTCArICdkaXJlY3Rpb24vdjEvJzsgdmFyIE1PREUgPSB7IGRyaXZpbmc6ICdkcml2aW5nJywgdHJhbnNpdDogJ3RyYW5zaXQnIH07IHZhciBFQVJUSF9SQURJVVMgPSA2Mzc4MTM2LjQ5OyB2YXIgVXRpbHMgPSB7IHNhZmVBZGQoeCwgeSkgeyB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpOyB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7IHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweGZmZmYpIH0sIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHsgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpIH0sIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7IHJldHVybiB0aGlzLnNhZmVBZGQodGhpcy5iaXRSb3RhdGVMZWZ0KHRoaXMuc2FmZUFkZCh0aGlzLnNhZmVBZGQoYSwgcSksIHRoaXMuc2FmZUFkZCh4LCB0KSksIHMpLCBiKSB9LCBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7IHJldHVybiB0aGlzLm1kNWNtbigoYiAmIGMpIHwgKH5iICYgZCksIGEsIGIsIHgsIHMsIHQpIH0sIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHsgcmV0dXJuIHRoaXMubWQ1Y21uKChiICYgZCkgfCAoYyAmIH5kKSwgYSwgYiwgeCwgcywgdCkgfSwgbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkgeyByZXR1cm4gdGhpcy5tZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KSB9LCBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7IHJldHVybiB0aGlzLm1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpIH0sIGJpbmxNRDUoeCwgbGVuKSB7IHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgKGxlbiAlIDMyKTsgeFsoKGxlbiArIDY0KSA+Pj4gOSA8PCA0KSArIDE0XSA9IGxlbjsgdmFyIGk7IHZhciBvbGRhOyB2YXIgb2xkYjsgdmFyIG9sZGM7IHZhciBvbGRkOyB2YXIgYSA9IDE3MzI1ODQxOTM7IHZhciBiID0gLTI3MTczMzg3OTsgdmFyIGMgPSAtMTczMjU4NDE5NDsgdmFyIGQgPSAyNzE3MzM4Nzg7IGZvciAoaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikgeyBvbGRhID0gYTsgb2xkYiA9IGI7IG9sZGMgPSBjOyBvbGRkID0gZDsgYSA9IHRoaXMubWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7IGQgPSB0aGlzLm1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7IGMgPSB0aGlzLm1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTsgYiA9IHRoaXMubWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7IGEgPSB0aGlzLm1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTsgZCA9IHRoaXMubWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTsgYyA9IHRoaXMubWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7IGIgPSB0aGlzLm1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTsgYSA9IHRoaXMubWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpOyBkID0gdGhpcy5tZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTsgYyA9IHRoaXMubWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTsgYiA9IHRoaXMubWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpOyBhID0gdGhpcy5tZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpOyBkID0gdGhpcy5tZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpOyBjID0gdGhpcy5tZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7IGIgPSB0aGlzLm1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpOyBhID0gdGhpcy5tZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7IGQgPSB0aGlzLm1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7IGMgPSB0aGlzLm1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7IGIgPSB0aGlzLm1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTsgYSA9IHRoaXMubWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpOyBkID0gdGhpcy5tZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTsgYyA9IHRoaXMubWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7IGIgPSB0aGlzLm1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7IGEgPSB0aGlzLm1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpOyBkID0gdGhpcy5tZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTsgYyA9IHRoaXMubWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTsgYiA9IHRoaXMubWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTsgYSA9IHRoaXMubWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7IGQgPSB0aGlzLm1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpOyBjID0gdGhpcy5tZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpOyBiID0gdGhpcy5tZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7IGEgPSB0aGlzLm1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTsgZCA9IHRoaXMubWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7IGMgPSB0aGlzLm1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpOyBiID0gdGhpcy5tZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpOyBhID0gdGhpcy5tZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApOyBkID0gdGhpcy5tZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpOyBjID0gdGhpcy5tZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpOyBiID0gdGhpcy5tZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7IGEgPSB0aGlzLm1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTsgZCA9IHRoaXMubWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpOyBjID0gdGhpcy5tZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpOyBiID0gdGhpcy5tZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTsgYSA9IHRoaXMubWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpOyBkID0gdGhpcy5tZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTsgYyA9IHRoaXMubWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTsgYiA9IHRoaXMubWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTsgYSA9IHRoaXMubWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7IGQgPSB0aGlzLm1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7IGMgPSB0aGlzLm1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTsgYiA9IHRoaXMubWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpOyBhID0gdGhpcy5tZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpOyBkID0gdGhpcy5tZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTsgYyA9IHRoaXMubWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpOyBiID0gdGhpcy5tZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTsgYSA9IHRoaXMubWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpOyBkID0gdGhpcy5tZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpOyBjID0gdGhpcy5tZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTsgYiA9IHRoaXMubWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7IGEgPSB0aGlzLm1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTsgZCA9IHRoaXMubWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpOyBjID0gdGhpcy5tZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7IGIgPSB0aGlzLm1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7IGEgPSB0aGlzLnNhZmVBZGQoYSwgb2xkYSk7IGIgPSB0aGlzLnNhZmVBZGQoYiwgb2xkYik7IGMgPSB0aGlzLnNhZmVBZGQoYywgb2xkYyk7IGQgPSB0aGlzLnNhZmVBZGQoZCwgb2xkZCkgfSByZXR1cm4gW2EsIGIsIGMsIGRdIH0sIGJpbmwycnN0cihpbnB1dCkgeyB2YXIgaTsgdmFyIG91dHB1dCA9ICcnOyB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjsgZm9yIChpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHsgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGlucHV0W2kgPj4gNV0gPj4+IChpICUgMzIpKSAmIDB4ZmYpIH0gcmV0dXJuIG91dHB1dCB9LCByc3RyMmJpbmwoaW5wdXQpIHsgdmFyIGk7IHZhciBvdXRwdXQgPSBbXTsgb3V0cHV0WyhpbnB1dC5sZW5ndGggPj4gMikgLSAxXSA9IHVuZGVmaW5lZDsgZm9yIChpID0gMDsgaSA8IG91dHB1dC5sZW5ndGg7IGkgKz0gMSkgeyBvdXRwdXRbaV0gPSAwIH0gdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4OyBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7IG91dHB1dFtpID4+IDVdIHw9IChpbnB1dC5jaGFyQ29kZUF0KGkgLyA4KSAmIDB4ZmYpIDw8IChpICUgMzIpIH0gcmV0dXJuIG91dHB1dCB9LCByc3RyTUQ1KHMpIHsgcmV0dXJuIHRoaXMuYmlubDJyc3RyKHRoaXMuYmlubE1ENSh0aGlzLnJzdHIyYmlubChzKSwgcy5sZW5ndGggKiA4KSkgfSwgcnN0ckhNQUNNRDUoa2V5LCBkYXRhKSB7IHZhciBpOyB2YXIgYmtleSA9IHRoaXMucnN0cjJiaW5sKGtleSk7IHZhciBpcGFkID0gW107IHZhciBvcGFkID0gW107IHZhciBoYXNoOyBpcGFkWzE1XSA9IG9wYWRbMTVdID0gdW5kZWZpbmVkOyBpZiAoYmtleS5sZW5ndGggPiAxNikgeyBia2V5ID0gdGhpcy5iaW5sTUQ1KGJrZXksIGtleS5sZW5ndGggKiA4KSB9IGZvciAoaSA9IDA7IGkgPCAxNjsgaSArPSAxKSB7IGlwYWRbaV0gPSBia2V5W2ldIF4gMHgzNjM2MzYzNjsgb3BhZFtpXSA9IGJrZXlbaV0gXiAweDVjNWM1YzVjIH0gaGFzaCA9IHRoaXMuYmlubE1ENShpcGFkLmNvbmNhdCh0aGlzLnJzdHIyYmlubChkYXRhKSksIDUxMiArIGRhdGEubGVuZ3RoICogOCk7IHJldHVybiB0aGlzLmJpbmwycnN0cih0aGlzLmJpbmxNRDUob3BhZC5jb25jYXQoaGFzaCksIDUxMiArIDEyOCkpIH0sIHJzdHIyaGV4KGlucHV0KSB7IHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7IHZhciBvdXRwdXQgPSAnJzsgdmFyIHg7IHZhciBpOyBmb3IgKGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpICs9IDEpIHsgeCA9IGlucHV0LmNoYXJDb2RlQXQoaSk7IG91dHB1dCArPSBoZXhUYWIuY2hhckF0KCh4ID4+PiA0KSAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZikgfSByZXR1cm4gb3V0cHV0IH0sIHN0cjJyc3RyVVRGOChpbnB1dCkgeyByZXR1cm4gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KSkgfSwgcmF3TUQ1KHMpIHsgcmV0dXJuIHRoaXMucnN0ck1ENSh0aGlzLnN0cjJyc3RyVVRGOChzKSkgfSwgaGV4TUQ1KHMpIHsgcmV0dXJuIHRoaXMucnN0cjJoZXgodGhpcy5yYXdNRDUocykpIH0sIHJhd0hNQUNNRDUoaywgZCkgeyByZXR1cm4gdGhpcy5yc3RySE1BQ01ENSh0aGlzLnN0cjJyc3RyVVRGOChrKSwgc3RyMnJzdHJVVEY4KGQpKSB9LCBoZXhITUFDTUQ1KGssIGQpIHsgcmV0dXJuIHRoaXMucnN0cjJoZXgodGhpcy5yYXdITUFDTUQ1KGssIGQpKSB9LCBtZDUoc3RyaW5nLCBrZXksIHJhdykgeyBpZiAoIWtleSkgeyBpZiAoIXJhdykgeyByZXR1cm4gdGhpcy5oZXhNRDUoc3RyaW5nKSB9IHJldHVybiB0aGlzLnJhd01ENShzdHJpbmcpIH0gaWYgKCFyYXcpIHsgcmV0dXJuIHRoaXMuaGV4SE1BQ01ENShrZXksIHN0cmluZykgfSByZXR1cm4gdGhpcy5yYXdITUFDTUQ1KGtleSwgc3RyaW5nKSB9LCBnZXRTaWcocmVxdWVzdFBhcmFtLCBzaywgZmVhdHVyZSwgbW9kZSkgeyB2YXIgc2lnID0gbnVsbDsgdmFyIHJlcXVlc3RBcnIgPSBbXTsgT2JqZWN0LmtleXMocmVxdWVzdFBhcmFtKS5zb3J0KCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJlcXVlc3RBcnIucHVzaChrZXkgKyAnPScgKyByZXF1ZXN0UGFyYW1ba2V5XSkgfSk7IGlmIChmZWF0dXJlID09ICdzZWFyY2gnKSB7IHNpZyA9ICcvd3MvcGxhY2UvdjEvc2VhcmNoPycgKyByZXF1ZXN0QXJyLmpvaW4oJyYnKSArIHNrIH0gaWYgKGZlYXR1cmUgPT0gJ3N1Z2dlc3QnKSB7IHNpZyA9ICcvd3MvcGxhY2UvdjEvc3VnZ2VzdGlvbj8nICsgcmVxdWVzdEFyci5qb2luKCcmJykgKyBzayB9IGlmIChmZWF0dXJlID09ICdyZXZlcnNlR2VvY29kZXInKSB7IHNpZyA9ICcvd3MvZ2VvY29kZXIvdjEvPycgKyByZXF1ZXN0QXJyLmpvaW4oJyYnKSArIHNrIH0gaWYgKGZlYXR1cmUgPT0gJ2dlb2NvZGVyJykgeyBzaWcgPSAnL3dzL2dlb2NvZGVyL3YxLz8nICsgcmVxdWVzdEFyci5qb2luKCcmJykgKyBzayB9IGlmIChmZWF0dXJlID09ICdnZXRDaXR5TGlzdCcpIHsgc2lnID0gJy93cy9kaXN0cmljdC92MS9saXN0PycgKyByZXF1ZXN0QXJyLmpvaW4oJyYnKSArIHNrIH0gaWYgKGZlYXR1cmUgPT0gJ2dldERpc3RyaWN0QnlDaXR5SWQnKSB7IHNpZyA9ICcvd3MvZGlzdHJpY3QvdjEvZ2V0Y2hpbGRyZW4/JyArIHJlcXVlc3RBcnIuam9pbignJicpICsgc2sgfSBpZiAoZmVhdHVyZSA9PSAnY2FsY3VsYXRlRGlzdGFuY2UnKSB7IHNpZyA9ICcvd3MvZGlzdGFuY2UvdjEvPycgKyByZXF1ZXN0QXJyLmpvaW4oJyYnKSArIHNrIH0gaWYgKGZlYXR1cmUgPT0gJ2RpcmVjdGlvbicpIHsgc2lnID0gJy93cy9kaXJlY3Rpb24vdjEvJyArIG1vZGUgKyAnPycgKyByZXF1ZXN0QXJyLmpvaW4oJyYnKSArIHNrIH0gc2lnID0gdGhpcy5tZDUoc2lnKTsgcmV0dXJuIHNpZyB9LCBsb2NhdGlvbjJxdWVyeShkYXRhKSB7IGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykgeyByZXR1cm4gZGF0YSB9IHZhciBxdWVyeSA9ICcnOyBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHsgdmFyIGQgPSBkYXRhW2ldOyBpZiAoISFxdWVyeSkgeyBxdWVyeSArPSAnOycgfSBpZiAoZC5sb2NhdGlvbikgeyBxdWVyeSA9IHF1ZXJ5ICsgZC5sb2NhdGlvbi5sYXQgKyAnLCcgKyBkLmxvY2F0aW9uLmxuZyB9IGlmIChkLmxhdGl0dWRlICYmIGQubG9uZ2l0dWRlKSB7IHF1ZXJ5ID0gcXVlcnkgKyBkLmxhdGl0dWRlICsgJywnICsgZC5sb25naXR1ZGUgfSB9IHJldHVybiBxdWVyeSB9LCByYWQoZCkgeyByZXR1cm4gZCAqIE1hdGguUEkgLyAxODAuMCB9LCBnZXRFbmRMb2NhdGlvbihsb2NhdGlvbikgeyB2YXIgdG8gPSBsb2NhdGlvbi5zcGxpdCgnOycpOyB2YXIgZW5kTG9jYXRpb24gPSBbXTsgZm9yICh2YXIgaSA9IDA7IGkgPCB0by5sZW5ndGg7IGkrKykgeyBlbmRMb2NhdGlvbi5wdXNoKHsgbGF0OiBwYXJzZUZsb2F0KHRvW2ldLnNwbGl0KCcsJylbMF0pLCBsbmc6IHBhcnNlRmxvYXQodG9baV0uc3BsaXQoJywnKVsxXSkgfSkgfSByZXR1cm4gZW5kTG9jYXRpb24gfSwgZ2V0RGlzdGFuY2UobGF0RnJvbSwgbG5nRnJvbSwgbGF0VG8sIGxuZ1RvKSB7IHZhciByYWRMYXRGcm9tID0gdGhpcy5yYWQobGF0RnJvbSk7IHZhciByYWRMYXRUbyA9IHRoaXMucmFkKGxhdFRvKTsgdmFyIGEgPSByYWRMYXRGcm9tIC0gcmFkTGF0VG87IHZhciBiID0gdGhpcy5yYWQobG5nRnJvbSkgLSB0aGlzLnJhZChsbmdUbyk7IHZhciBkaXN0YW5jZSA9IDIgKiBNYXRoLmFzaW4oTWF0aC5zcXJ0KE1hdGgucG93KE1hdGguc2luKGEgLyAyKSwgMikgKyBNYXRoLmNvcyhyYWRMYXRGcm9tKSAqIE1hdGguY29zKHJhZExhdFRvKSAqIE1hdGgucG93KE1hdGguc2luKGIgLyAyKSwgMikpKTsgZGlzdGFuY2UgPSBkaXN0YW5jZSAqIEVBUlRIX1JBRElVUzsgZGlzdGFuY2UgPSBNYXRoLnJvdW5kKGRpc3RhbmNlICogMTAwMDApIC8gMTAwMDA7IHJldHVybiBwYXJzZUZsb2F0KGRpc3RhbmNlLnRvRml4ZWQoMCkpIH0sIGdldFdYTG9jYXRpb24oc3VjY2VzcywgZmFpbCwgY29tcGxldGUpIHsgd3guZ2V0TG9jYXRpb24oeyB0eXBlOiAnZ2NqMDInLCBzdWNjZXNzOiBzdWNjZXNzLCBmYWlsOiBmYWlsLCBjb21wbGV0ZTogY29tcGxldGUgfSkgfSwgZ2V0TG9jYXRpb25QYXJhbShsb2NhdGlvbikgeyBpZiAodHlwZW9mIGxvY2F0aW9uID09ICdzdHJpbmcnKSB7IHZhciBsb2NhdGlvbkFyciA9IGxvY2F0aW9uLnNwbGl0KCcsJyk7IGlmIChsb2NhdGlvbkFyci5sZW5ndGggPT09IDIpIHsgbG9jYXRpb24gPSB7IGxhdGl0dWRlOiBsb2NhdGlvbi5zcGxpdCgnLCcpWzBdLCBsb25naXR1ZGU6IGxvY2F0aW9uLnNwbGl0KCcsJylbMV0gfSB9IGVsc2UgeyBsb2NhdGlvbiA9IHt9IH0gfSByZXR1cm4gbG9jYXRpb24gfSwgcG9seWZpbGxQYXJhbShwYXJhbSkgeyBwYXJhbS5zdWNjZXNzID0gcGFyYW0uc3VjY2VzcyB8fCBmdW5jdGlvbiAoKSB7IH07IHBhcmFtLmZhaWwgPSBwYXJhbS5mYWlsIHx8IGZ1bmN0aW9uICgpIHsgfTsgcGFyYW0uY29tcGxldGUgPSBwYXJhbS5jb21wbGV0ZSB8fCBmdW5jdGlvbiAoKSB7IH0gfSwgY2hlY2tQYXJhbUtleUVtcHR5KHBhcmFtLCBrZXkpIHsgaWYgKCFwYXJhbVtrZXldKSB7IHZhciBlcnJjb25mID0gdGhpcy5idWlsZEVycm9yQ29uZmlnKEVSUk9SX0NPTkYuUEFSQU1fRVJSLCBFUlJPUl9DT05GLlBBUkFNX0VSUl9NU0cgKyBrZXkgKyAn5Y+C5pWw5qC85byP5pyJ6K+vJyk7IHBhcmFtLmZhaWwoZXJyY29uZik7IHBhcmFtLmNvbXBsZXRlKGVycmNvbmYpOyByZXR1cm4gdHJ1ZSB9IHJldHVybiBmYWxzZSB9LCBjaGVja0tleXdvcmQocGFyYW0pIHsgcmV0dXJuICF0aGlzLmNoZWNrUGFyYW1LZXlFbXB0eShwYXJhbSwgJ2tleXdvcmQnKSB9LCBjaGVja0xvY2F0aW9uKHBhcmFtKSB7IHZhciBsb2NhdGlvbiA9IHRoaXMuZ2V0TG9jYXRpb25QYXJhbShwYXJhbS5sb2NhdGlvbik7IGlmICghbG9jYXRpb24gfHwgIWxvY2F0aW9uLmxhdGl0dWRlIHx8ICFsb2NhdGlvbi5sb25naXR1ZGUpIHsgdmFyIGVycmNvbmYgPSB0aGlzLmJ1aWxkRXJyb3JDb25maWcoRVJST1JfQ09ORi5QQVJBTV9FUlIsIEVSUk9SX0NPTkYuUEFSQU1fRVJSX01TRyArICcgbG9jYXRpb27lj4LmlbDmoLzlvI/mnInor68nKTsgcGFyYW0uZmFpbChlcnJjb25mKTsgcGFyYW0uY29tcGxldGUoZXJyY29uZik7IHJldHVybiBmYWxzZSB9IHJldHVybiB0cnVlIH0sIGJ1aWxkRXJyb3JDb25maWcoZXJyQ29kZSwgZXJyTXNnKSB7IHJldHVybiB7IHN0YXR1czogZXJyQ29kZSwgbWVzc2FnZTogZXJyTXNnIH0gfSwgaGFuZGxlRGF0YShwYXJhbSwgZGF0YSwgZmVhdHVyZSkgeyBpZiAoZmVhdHVyZSA9PSAnc2VhcmNoJykgeyB2YXIgc2VhcmNoUmVzdWx0ID0gZGF0YS5kYXRhOyB2YXIgc2VhcmNoU2ltcGxpZnkgPSBbXTsgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2hSZXN1bHQubGVuZ3RoOyBpKyspIHsgc2VhcmNoU2ltcGxpZnkucHVzaCh7IGlkOiBzZWFyY2hSZXN1bHRbaV0uaWQgfHwgbnVsbCwgdGl0bGU6IHNlYXJjaFJlc3VsdFtpXS50aXRsZSB8fCBudWxsLCBsYXRpdHVkZTogc2VhcmNoUmVzdWx0W2ldLmxvY2F0aW9uICYmIHNlYXJjaFJlc3VsdFtpXS5sb2NhdGlvbi5sYXQgfHwgbnVsbCwgbG9uZ2l0dWRlOiBzZWFyY2hSZXN1bHRbaV0ubG9jYXRpb24gJiYgc2VhcmNoUmVzdWx0W2ldLmxvY2F0aW9uLmxuZyB8fCBudWxsLCBhZGRyZXNzOiBzZWFyY2hSZXN1bHRbaV0uYWRkcmVzcyB8fCBudWxsLCBjYXRlZ29yeTogc2VhcmNoUmVzdWx0W2ldLmNhdGVnb3J5IHx8IG51bGwsIHRlbDogc2VhcmNoUmVzdWx0W2ldLnRlbCB8fCBudWxsLCBhZGNvZGU6IHNlYXJjaFJlc3VsdFtpXS5hZF9pbmZvICYmIHNlYXJjaFJlc3VsdFtpXS5hZF9pbmZvLmFkY29kZSB8fCBudWxsLCBjaXR5OiBzZWFyY2hSZXN1bHRbaV0uYWRfaW5mbyAmJiBzZWFyY2hSZXN1bHRbaV0uYWRfaW5mby5jaXR5IHx8IG51bGwsIGRpc3RyaWN0OiBzZWFyY2hSZXN1bHRbaV0uYWRfaW5mbyAmJiBzZWFyY2hSZXN1bHRbaV0uYWRfaW5mby5kaXN0cmljdCB8fCBudWxsLCBwcm92aW5jZTogc2VhcmNoUmVzdWx0W2ldLmFkX2luZm8gJiYgc2VhcmNoUmVzdWx0W2ldLmFkX2luZm8ucHJvdmluY2UgfHwgbnVsbCB9KSB9IHBhcmFtLnN1Y2Nlc3MoZGF0YSwgeyBzZWFyY2hSZXN1bHQ6IHNlYXJjaFJlc3VsdCwgc2VhcmNoU2ltcGxpZnk6IHNlYXJjaFNpbXBsaWZ5IH0pIH0gZWxzZSBpZiAoZmVhdHVyZSA9PSAnc3VnZ2VzdCcpIHsgdmFyIHN1Z2dlc3RSZXN1bHQgPSBkYXRhLmRhdGE7IHZhciBzdWdnZXN0U2ltcGxpZnkgPSBbXTsgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWdnZXN0UmVzdWx0Lmxlbmd0aDsgaSsrKSB7IHN1Z2dlc3RTaW1wbGlmeS5wdXNoKHsgYWRjb2RlOiBzdWdnZXN0UmVzdWx0W2ldLmFkY29kZSB8fCBudWxsLCBhZGRyZXNzOiBzdWdnZXN0UmVzdWx0W2ldLmFkZHJlc3MgfHwgbnVsbCwgY2F0ZWdvcnk6IHN1Z2dlc3RSZXN1bHRbaV0uY2F0ZWdvcnkgfHwgbnVsbCwgY2l0eTogc3VnZ2VzdFJlc3VsdFtpXS5jaXR5IHx8IG51bGwsIGRpc3RyaWN0OiBzdWdnZXN0UmVzdWx0W2ldLmRpc3RyaWN0IHx8IG51bGwsIGlkOiBzdWdnZXN0UmVzdWx0W2ldLmlkIHx8IG51bGwsIGxhdGl0dWRlOiBzdWdnZXN0UmVzdWx0W2ldLmxvY2F0aW9uICYmIHN1Z2dlc3RSZXN1bHRbaV0ubG9jYXRpb24ubGF0IHx8IG51bGwsIGxvbmdpdHVkZTogc3VnZ2VzdFJlc3VsdFtpXS5sb2NhdGlvbiAmJiBzdWdnZXN0UmVzdWx0W2ldLmxvY2F0aW9uLmxuZyB8fCBudWxsLCBwcm92aW5jZTogc3VnZ2VzdFJlc3VsdFtpXS5wcm92aW5jZSB8fCBudWxsLCB0aXRsZTogc3VnZ2VzdFJlc3VsdFtpXS50aXRsZSB8fCBudWxsLCB0eXBlOiBzdWdnZXN0UmVzdWx0W2ldLnR5cGUgfHwgbnVsbCB9KSB9IHBhcmFtLnN1Y2Nlc3MoZGF0YSwgeyBzdWdnZXN0UmVzdWx0OiBzdWdnZXN0UmVzdWx0LCBzdWdnZXN0U2ltcGxpZnk6IHN1Z2dlc3RTaW1wbGlmeSB9KSB9IGVsc2UgaWYgKGZlYXR1cmUgPT0gJ3JldmVyc2VHZW9jb2RlcicpIHsgdmFyIHJldmVyc2VHZW9jb2RlclJlc3VsdCA9IGRhdGEucmVzdWx0OyB2YXIgcmV2ZXJzZUdlb2NvZGVyU2ltcGxpZnkgPSB7IGFkZHJlc3M6IHJldmVyc2VHZW9jb2RlclJlc3VsdC5hZGRyZXNzIHx8IG51bGwsIGxhdGl0dWRlOiByZXZlcnNlR2VvY29kZXJSZXN1bHQubG9jYXRpb24gJiYgcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmxvY2F0aW9uLmxhdCB8fCBudWxsLCBsb25naXR1ZGU6IHJldmVyc2VHZW9jb2RlclJlc3VsdC5sb2NhdGlvbiAmJiByZXZlcnNlR2VvY29kZXJSZXN1bHQubG9jYXRpb24ubG5nIHx8IG51bGwsIGFkY29kZTogcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmFkX2luZm8gJiYgcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmFkX2luZm8uYWRjb2RlIHx8IG51bGwsIGNpdHk6IHJldmVyc2VHZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudCAmJiByZXZlcnNlR2VvY29kZXJSZXN1bHQuYWRkcmVzc19jb21wb25lbnQuY2l0eSB8fCBudWxsLCBkaXN0cmljdDogcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50ICYmIHJldmVyc2VHZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5kaXN0cmljdCB8fCBudWxsLCBuYXRpb246IHJldmVyc2VHZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudCAmJiByZXZlcnNlR2VvY29kZXJSZXN1bHQuYWRkcmVzc19jb21wb25lbnQubmF0aW9uIHx8IG51bGwsIHByb3ZpbmNlOiByZXZlcnNlR2VvY29kZXJSZXN1bHQuYWRkcmVzc19jb21wb25lbnQgJiYgcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50LnByb3ZpbmNlIHx8IG51bGwsIHN0cmVldDogcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50ICYmIHJldmVyc2VHZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5zdHJlZXQgfHwgbnVsbCwgc3RyZWV0X251bWJlcjogcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50ICYmIHJldmVyc2VHZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudC5zdHJlZXRfbnVtYmVyIHx8IG51bGwsIHJlY29tbWVuZDogcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmZvcm1hdHRlZF9hZGRyZXNzZXMgJiYgcmV2ZXJzZUdlb2NvZGVyUmVzdWx0LmZvcm1hdHRlZF9hZGRyZXNzZXMucmVjb21tZW5kIHx8IG51bGwsIHJvdWdoOiByZXZlcnNlR2VvY29kZXJSZXN1bHQuZm9ybWF0dGVkX2FkZHJlc3NlcyAmJiByZXZlcnNlR2VvY29kZXJSZXN1bHQuZm9ybWF0dGVkX2FkZHJlc3Nlcy5yb3VnaCB8fCBudWxsIH07IGlmIChyZXZlcnNlR2VvY29kZXJSZXN1bHQucG9pcykgeyB2YXIgcG9pcyA9IHJldmVyc2VHZW9jb2RlclJlc3VsdC5wb2lzOyB2YXIgcG9pc1NpbXBsaWZ5ID0gW107IGZvciAodmFyIGkgPSAwOyBpIDwgcG9pcy5sZW5ndGg7IGkrKykgeyBwb2lzU2ltcGxpZnkucHVzaCh7IGlkOiBwb2lzW2ldLmlkIHx8IG51bGwsIHRpdGxlOiBwb2lzW2ldLnRpdGxlIHx8IG51bGwsIGxhdGl0dWRlOiBwb2lzW2ldLmxvY2F0aW9uICYmIHBvaXNbaV0ubG9jYXRpb24ubGF0IHx8IG51bGwsIGxvbmdpdHVkZTogcG9pc1tpXS5sb2NhdGlvbiAmJiBwb2lzW2ldLmxvY2F0aW9uLmxuZyB8fCBudWxsLCBhZGRyZXNzOiBwb2lzW2ldLmFkZHJlc3MgfHwgbnVsbCwgY2F0ZWdvcnk6IHBvaXNbaV0uY2F0ZWdvcnkgfHwgbnVsbCwgYWRjb2RlOiBwb2lzW2ldLmFkX2luZm8gJiYgcG9pc1tpXS5hZF9pbmZvLmFkY29kZSB8fCBudWxsLCBjaXR5OiBwb2lzW2ldLmFkX2luZm8gJiYgcG9pc1tpXS5hZF9pbmZvLmNpdHkgfHwgbnVsbCwgZGlzdHJpY3Q6IHBvaXNbaV0uYWRfaW5mbyAmJiBwb2lzW2ldLmFkX2luZm8uZGlzdHJpY3QgfHwgbnVsbCwgcHJvdmluY2U6IHBvaXNbaV0uYWRfaW5mbyAmJiBwb2lzW2ldLmFkX2luZm8ucHJvdmluY2UgfHwgbnVsbCB9KSB9IHBhcmFtLnN1Y2Nlc3MoZGF0YSwgeyByZXZlcnNlR2VvY29kZXJSZXN1bHQ6IHJldmVyc2VHZW9jb2RlclJlc3VsdCwgcmV2ZXJzZUdlb2NvZGVyU2ltcGxpZnk6IHJldmVyc2VHZW9jb2RlclNpbXBsaWZ5LCBwb2lzOiBwb2lzLCBwb2lzU2ltcGxpZnk6IHBvaXNTaW1wbGlmeSB9KSB9IGVsc2UgeyBwYXJhbS5zdWNjZXNzKGRhdGEsIHsgcmV2ZXJzZUdlb2NvZGVyUmVzdWx0OiByZXZlcnNlR2VvY29kZXJSZXN1bHQsIHJldmVyc2VHZW9jb2RlclNpbXBsaWZ5OiByZXZlcnNlR2VvY29kZXJTaW1wbGlmeSB9KSB9IH0gZWxzZSBpZiAoZmVhdHVyZSA9PSAnZ2VvY29kZXInKSB7IHZhciBnZW9jb2RlclJlc3VsdCA9IGRhdGEucmVzdWx0OyB2YXIgZ2VvY29kZXJTaW1wbGlmeSA9IHsgdGl0bGU6IGdlb2NvZGVyUmVzdWx0LnRpdGxlIHx8IG51bGwsIGxhdGl0dWRlOiBnZW9jb2RlclJlc3VsdC5sb2NhdGlvbiAmJiBnZW9jb2RlclJlc3VsdC5sb2NhdGlvbi5sYXQgfHwgbnVsbCwgbG9uZ2l0dWRlOiBnZW9jb2RlclJlc3VsdC5sb2NhdGlvbiAmJiBnZW9jb2RlclJlc3VsdC5sb2NhdGlvbi5sbmcgfHwgbnVsbCwgYWRjb2RlOiBnZW9jb2RlclJlc3VsdC5hZF9pbmZvICYmIGdlb2NvZGVyUmVzdWx0LmFkX2luZm8uYWRjb2RlIHx8IG51bGwsIHByb3ZpbmNlOiBnZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudHMgJiYgZ2VvY29kZXJSZXN1bHQuYWRkcmVzc19jb21wb25lbnRzLnByb3ZpbmNlIHx8IG51bGwsIGNpdHk6IGdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50cyAmJiBnZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudHMuY2l0eSB8fCBudWxsLCBkaXN0cmljdDogZ2VvY29kZXJSZXN1bHQuYWRkcmVzc19jb21wb25lbnRzICYmIGdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50cy5kaXN0cmljdCB8fCBudWxsLCBzdHJlZXQ6IGdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50cyAmJiBnZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudHMuc3RyZWV0IHx8IG51bGwsIHN0cmVldF9udW1iZXI6IGdlb2NvZGVyUmVzdWx0LmFkZHJlc3NfY29tcG9uZW50cyAmJiBnZW9jb2RlclJlc3VsdC5hZGRyZXNzX2NvbXBvbmVudHMuc3RyZWV0X251bWJlciB8fCBudWxsLCBsZXZlbDogZ2VvY29kZXJSZXN1bHQubGV2ZWwgfHwgbnVsbCB9OyBwYXJhbS5zdWNjZXNzKGRhdGEsIHsgZ2VvY29kZXJSZXN1bHQ6IGdlb2NvZGVyUmVzdWx0LCBnZW9jb2RlclNpbXBsaWZ5OiBnZW9jb2RlclNpbXBsaWZ5IH0pIH0gZWxzZSBpZiAoZmVhdHVyZSA9PSAnZ2V0Q2l0eUxpc3QnKSB7IHZhciBwcm92aW5jZVJlc3VsdCA9IGRhdGEucmVzdWx0WzBdOyB2YXIgY2l0eVJlc3VsdCA9IGRhdGEucmVzdWx0WzFdOyB2YXIgZGlzdHJpY3RSZXN1bHQgPSBkYXRhLnJlc3VsdFsyXTsgcGFyYW0uc3VjY2VzcyhkYXRhLCB7IHByb3ZpbmNlUmVzdWx0OiBwcm92aW5jZVJlc3VsdCwgY2l0eVJlc3VsdDogY2l0eVJlc3VsdCwgZGlzdHJpY3RSZXN1bHQ6IGRpc3RyaWN0UmVzdWx0IH0pIH0gZWxzZSBpZiAoZmVhdHVyZSA9PSAnZ2V0RGlzdHJpY3RCeUNpdHlJZCcpIHsgdmFyIGRpc3RyaWN0QnlDaXR5ID0gZGF0YS5yZXN1bHRbMF07IHBhcmFtLnN1Y2Nlc3MoZGF0YSwgZGlzdHJpY3RCeUNpdHkpIH0gZWxzZSBpZiAoZmVhdHVyZSA9PSAnY2FsY3VsYXRlRGlzdGFuY2UnKSB7IHZhciBjYWxjdWxhdGVEaXN0YW5jZVJlc3VsdCA9IGRhdGEucmVzdWx0LmVsZW1lbnRzOyB2YXIgZGlzdGFuY2UgPSBbXTsgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxjdWxhdGVEaXN0YW5jZVJlc3VsdC5sZW5ndGg7IGkrKykgeyBkaXN0YW5jZS5wdXNoKGNhbGN1bGF0ZURpc3RhbmNlUmVzdWx0W2ldLmRpc3RhbmNlKSB9IHBhcmFtLnN1Y2Nlc3MoZGF0YSwgeyBjYWxjdWxhdGVEaXN0YW5jZVJlc3VsdDogY2FsY3VsYXRlRGlzdGFuY2VSZXN1bHQsIGRpc3RhbmNlOiBkaXN0YW5jZSB9KSB9IGVsc2UgaWYgKGZlYXR1cmUgPT0gJ2RpcmVjdGlvbicpIHsgdmFyIGRpcmVjdGlvbiA9IGRhdGEucmVzdWx0LnJvdXRlczsgcGFyYW0uc3VjY2VzcyhkYXRhLCBkaXJlY3Rpb24pIH0gZWxzZSB7IHBhcmFtLnN1Y2Nlc3MoZGF0YSkgfSB9LCBidWlsZFd4UmVxdWVzdENvbmZpZyhwYXJhbSwgb3B0aW9ucywgZmVhdHVyZSkgeyB2YXIgdGhhdCA9IHRoaXM7IG9wdGlvbnMuaGVhZGVyID0geyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9OyBvcHRpb25zLm1ldGhvZCA9ICdHRVQnOyBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzKSB7IHZhciBkYXRhID0gcmVzLmRhdGE7IGlmIChkYXRhLnN0YXR1cyA9PT0gMCkgeyB0aGF0LmhhbmRsZURhdGEocGFyYW0sIGRhdGEsIGZlYXR1cmUpIH0gZWxzZSB7IHBhcmFtLmZhaWwoZGF0YSkgfSB9OyBvcHRpb25zLmZhaWwgPSBmdW5jdGlvbiAocmVzKSB7IHJlcy5zdGF0dXNDb2RlID0gRVJST1JfQ09ORi5XWF9FUlJfQ09ERTsgcGFyYW0uZmFpbCh0aGF0LmJ1aWxkRXJyb3JDb25maWcoRVJST1JfQ09ORi5XWF9FUlJfQ09ERSwgcmVzLmVyck1zZykpIH07IG9wdGlvbnMuY29tcGxldGUgPSBmdW5jdGlvbiAocmVzKSB7IHZhciBzdGF0dXNDb2RlID0gK3Jlcy5zdGF0dXNDb2RlOyBzd2l0Y2ggKHN0YXR1c0NvZGUpIHsgY2FzZSBFUlJPUl9DT05GLldYX0VSUl9DT0RFOiB7IHBhcmFtLmNvbXBsZXRlKHRoYXQuYnVpbGRFcnJvckNvbmZpZyhFUlJPUl9DT05GLldYX0VSUl9DT0RFLCByZXMuZXJyTXNnKSk7IGJyZWFrIH0gY2FzZSBFUlJPUl9DT05GLldYX09LX0NPREU6IHsgdmFyIGRhdGEgPSByZXMuZGF0YTsgaWYgKGRhdGEuc3RhdHVzID09PSAwKSB7IHBhcmFtLmNvbXBsZXRlKGRhdGEpIH0gZWxzZSB7IHBhcmFtLmNvbXBsZXRlKHRoYXQuYnVpbGRFcnJvckNvbmZpZyhkYXRhLnN0YXR1cywgZGF0YS5tZXNzYWdlKSkgfSBicmVhayB9IGRlZmF1bHQ6IHsgcGFyYW0uY29tcGxldGUodGhhdC5idWlsZEVycm9yQ29uZmlnKEVSUk9SX0NPTkYuU1lTVEVNX0VSUiwgRVJST1JfQ09ORi5TWVNURU1fRVJSX01TRykpIH0gfSB9OyByZXR1cm4gb3B0aW9ucyB9LCBsb2NhdGlvblByb2Nlc3MocGFyYW0sIGxvY2F0aW9uc3VjY2VzcywgbG9jYXRpb25mYWlsLCBsb2NhdGlvbmNvbXBsZXRlKSB7IHZhciB0aGF0ID0gdGhpczsgbG9jYXRpb25mYWlsID0gbG9jYXRpb25mYWlsIHx8IGZ1bmN0aW9uIChyZXMpIHsgcmVzLnN0YXR1c0NvZGUgPSBFUlJPUl9DT05GLldYX0VSUl9DT0RFOyBwYXJhbS5mYWlsKHRoYXQuYnVpbGRFcnJvckNvbmZpZyhFUlJPUl9DT05GLldYX0VSUl9DT0RFLCByZXMuZXJyTXNnKSkgfTsgbG9jYXRpb25jb21wbGV0ZSA9IGxvY2F0aW9uY29tcGxldGUgfHwgZnVuY3Rpb24gKHJlcykgeyBpZiAocmVzLnN0YXR1c0NvZGUgPT0gRVJST1JfQ09ORi5XWF9FUlJfQ09ERSkgeyBwYXJhbS5jb21wbGV0ZSh0aGF0LmJ1aWxkRXJyb3JDb25maWcoRVJST1JfQ09ORi5XWF9FUlJfQ09ERSwgcmVzLmVyck1zZykpIH0gfTsgaWYgKCFwYXJhbS5sb2NhdGlvbikgeyB0aGF0LmdldFdYTG9jYXRpb24obG9jYXRpb25zdWNjZXNzLCBsb2NhdGlvbmZhaWwsIGxvY2F0aW9uY29tcGxldGUpIH0gZWxzZSBpZiAodGhhdC5jaGVja0xvY2F0aW9uKHBhcmFtKSkgeyB2YXIgbG9jYXRpb24gPSBVdGlscy5nZXRMb2NhdGlvblBhcmFtKHBhcmFtLmxvY2F0aW9uKTsgbG9jYXRpb25zdWNjZXNzKGxvY2F0aW9uKSB9IH0gfTsgY2xhc3MgUVFNYXBXWCB7IGNvbnN0cnVjdG9yKG9wdGlvbnMpIHsgaWYgKCFvcHRpb25zLmtleSkgeyB0aHJvdyBFcnJvcigna2V55YC85LiN6IO95Li656m6JykgfSB0aGlzLmtleSA9IG9wdGlvbnMua2V5IH07IHNlYXJjaChvcHRpb25zKSB7IHZhciB0aGF0ID0gdGhpczsgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IFV0aWxzLnBvbHlmaWxsUGFyYW0ob3B0aW9ucyk7IGlmICghVXRpbHMuY2hlY2tLZXl3b3JkKG9wdGlvbnMpKSB7IHJldHVybiB9IHZhciByZXF1ZXN0UGFyYW0gPSB7IGtleXdvcmQ6IG9wdGlvbnMua2V5d29yZCwgb3JkZXJieTogb3B0aW9ucy5vcmRlcmJ5IHx8ICdfZGlzdGFuY2UnLCBwYWdlX3NpemU6IG9wdGlvbnMucGFnZV9zaXplIHx8IDEwLCBwYWdlX2luZGV4OiBvcHRpb25zLnBhZ2VfaW5kZXggfHwgMSwgb3V0cHV0OiAnanNvbicsIGtleTogdGhhdC5rZXkgfTsgaWYgKG9wdGlvbnMuYWRkcmVzc19mb3JtYXQpIHsgcmVxdWVzdFBhcmFtLmFkZHJlc3NfZm9ybWF0ID0gb3B0aW9ucy5hZGRyZXNzX2Zvcm1hdCB9IGlmIChvcHRpb25zLmZpbHRlcikgeyByZXF1ZXN0UGFyYW0uZmlsdGVyID0gb3B0aW9ucy5maWx0ZXIgfSB2YXIgZGlzdGFuY2UgPSBvcHRpb25zLmRpc3RhbmNlIHx8IFwiMTAwMFwiOyB2YXIgYXV0b19leHRlbmQgPSBvcHRpb25zLmF1dG9fZXh0ZW5kIHx8IDE7IHZhciByZWdpb24gPSBudWxsOyB2YXIgcmVjdGFuZ2xlID0gbnVsbDsgaWYgKG9wdGlvbnMucmVnaW9uKSB7IHJlZ2lvbiA9IG9wdGlvbnMucmVnaW9uIH0gaWYgKG9wdGlvbnMucmVjdGFuZ2xlKSB7IHJlY3RhbmdsZSA9IG9wdGlvbnMucmVjdGFuZ2xlIH0gdmFyIGxvY2F0aW9uc3VjY2VzcyA9IGZ1bmN0aW9uIChyZXN1bHQpIHsgaWYgKHJlZ2lvbiAmJiAhcmVjdGFuZ2xlKSB7IHJlcXVlc3RQYXJhbS5ib3VuZGFyeSA9IFwicmVnaW9uKFwiICsgcmVnaW9uICsgXCIsXCIgKyBhdXRvX2V4dGVuZCArIFwiLFwiICsgcmVzdWx0LmxhdGl0dWRlICsgXCIsXCIgKyByZXN1bHQubG9uZ2l0dWRlICsgXCIpXCI7IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdzZWFyY2gnKSB9IH0gZWxzZSBpZiAocmVjdGFuZ2xlICYmICFyZWdpb24pIHsgcmVxdWVzdFBhcmFtLmJvdW5kYXJ5ID0gXCJyZWN0YW5nbGUoXCIgKyByZWN0YW5nbGUgKyBcIilcIjsgaWYgKG9wdGlvbnMuc2lnKSB7IHJlcXVlc3RQYXJhbS5zaWcgPSBVdGlscy5nZXRTaWcocmVxdWVzdFBhcmFtLCBvcHRpb25zLnNpZywgJ3NlYXJjaCcpIH0gfSBlbHNlIHsgcmVxdWVzdFBhcmFtLmJvdW5kYXJ5ID0gXCJuZWFyYnkoXCIgKyByZXN1bHQubGF0aXR1ZGUgKyBcIixcIiArIHJlc3VsdC5sb25naXR1ZGUgKyBcIixcIiArIGRpc3RhbmNlICsgXCIsXCIgKyBhdXRvX2V4dGVuZCArIFwiKVwiOyBpZiAob3B0aW9ucy5zaWcpIHsgcmVxdWVzdFBhcmFtLnNpZyA9IFV0aWxzLmdldFNpZyhyZXF1ZXN0UGFyYW0sIG9wdGlvbnMuc2lnLCAnc2VhcmNoJykgfSB9IHd4LnJlcXVlc3QoVXRpbHMuYnVpbGRXeFJlcXVlc3RDb25maWcob3B0aW9ucywgeyB1cmw6IFVSTF9TRUFSQ0gsIGRhdGE6IHJlcXVlc3RQYXJhbSB9LCAnc2VhcmNoJykpIH07IFV0aWxzLmxvY2F0aW9uUHJvY2VzcyhvcHRpb25zLCBsb2NhdGlvbnN1Y2Nlc3MpIH07IGdldFN1Z2dlc3Rpb24ob3B0aW9ucykgeyB2YXIgdGhhdCA9IHRoaXM7IG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyBVdGlscy5wb2x5ZmlsbFBhcmFtKG9wdGlvbnMpOyBpZiAoIVV0aWxzLmNoZWNrS2V5d29yZChvcHRpb25zKSkgeyByZXR1cm4gfSB2YXIgcmVxdWVzdFBhcmFtID0geyBrZXl3b3JkOiBvcHRpb25zLmtleXdvcmQsIHJlZ2lvbjogb3B0aW9ucy5yZWdpb24gfHwgJ+WFqOWbvScsIHJlZ2lvbl9maXg6IG9wdGlvbnMucmVnaW9uX2ZpeCB8fCAwLCBwb2xpY3k6IG9wdGlvbnMucG9saWN5IHx8IDAsIHBhZ2Vfc2l6ZTogb3B0aW9ucy5wYWdlX3NpemUgfHwgMTAsIHBhZ2VfaW5kZXg6IG9wdGlvbnMucGFnZV9pbmRleCB8fCAxLCBnZXRfc3VicG9pczogb3B0aW9ucy5nZXRfc3VicG9pcyB8fCAwLCBvdXRwdXQ6ICdqc29uJywga2V5OiB0aGF0LmtleSB9OyBpZiAob3B0aW9ucy5hZGRyZXNzX2Zvcm1hdCkgeyByZXF1ZXN0UGFyYW0uYWRkcmVzc19mb3JtYXQgPSBvcHRpb25zLmFkZHJlc3NfZm9ybWF0IH0gaWYgKG9wdGlvbnMuZmlsdGVyKSB7IHJlcXVlc3RQYXJhbS5maWx0ZXIgPSBvcHRpb25zLmZpbHRlciB9IGlmIChvcHRpb25zLmxvY2F0aW9uKSB7IHZhciBsb2NhdGlvbnN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzdWx0KSB7IHJlcXVlc3RQYXJhbS5sb2NhdGlvbiA9IHJlc3VsdC5sYXRpdHVkZSArICcsJyArIHJlc3VsdC5sb25naXR1ZGU7IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdzdWdnZXN0JykgfSB3eC5yZXF1ZXN0KFV0aWxzLmJ1aWxkV3hSZXF1ZXN0Q29uZmlnKG9wdGlvbnMsIHsgdXJsOiBVUkxfU1VHR0VTVElPTiwgZGF0YTogcmVxdWVzdFBhcmFtIH0sIFwic3VnZ2VzdFwiKSkgfTsgVXRpbHMubG9jYXRpb25Qcm9jZXNzKG9wdGlvbnMsIGxvY2F0aW9uc3VjY2VzcykgfSBlbHNlIHsgaWYgKG9wdGlvbnMuc2lnKSB7IHJlcXVlc3RQYXJhbS5zaWcgPSBVdGlscy5nZXRTaWcocmVxdWVzdFBhcmFtLCBvcHRpb25zLnNpZywgJ3N1Z2dlc3QnKSB9IHd4LnJlcXVlc3QoVXRpbHMuYnVpbGRXeFJlcXVlc3RDb25maWcob3B0aW9ucywgeyB1cmw6IFVSTF9TVUdHRVNUSU9OLCBkYXRhOiByZXF1ZXN0UGFyYW0gfSwgXCJzdWdnZXN0XCIpKSB9IH07IHJldmVyc2VHZW9jb2RlcihvcHRpb25zKSB7IHZhciB0aGF0ID0gdGhpczsgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IFV0aWxzLnBvbHlmaWxsUGFyYW0ob3B0aW9ucyk7IHZhciByZXF1ZXN0UGFyYW0gPSB7IGNvb3JkX3R5cGU6IG9wdGlvbnMuY29vcmRfdHlwZSB8fCA1LCBnZXRfcG9pOiBvcHRpb25zLmdldF9wb2kgfHwgMCwgb3V0cHV0OiAnanNvbicsIGtleTogdGhhdC5rZXkgfTsgaWYgKG9wdGlvbnMucG9pX29wdGlvbnMpIHsgcmVxdWVzdFBhcmFtLnBvaV9vcHRpb25zID0gb3B0aW9ucy5wb2lfb3B0aW9ucyB9IHZhciBsb2NhdGlvbnN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzdWx0KSB7IHJlcXVlc3RQYXJhbS5sb2NhdGlvbiA9IHJlc3VsdC5sYXRpdHVkZSArICcsJyArIHJlc3VsdC5sb25naXR1ZGU7IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdyZXZlcnNlR2VvY29kZXInKSB9IHd4LnJlcXVlc3QoVXRpbHMuYnVpbGRXeFJlcXVlc3RDb25maWcob3B0aW9ucywgeyB1cmw6IFVSTF9HRVRfR0VPQ09ERVIsIGRhdGE6IHJlcXVlc3RQYXJhbSB9LCAncmV2ZXJzZUdlb2NvZGVyJykpIH07IFV0aWxzLmxvY2F0aW9uUHJvY2VzcyhvcHRpb25zLCBsb2NhdGlvbnN1Y2Nlc3MpIH07IGdlb2NvZGVyKG9wdGlvbnMpIHsgdmFyIHRoYXQgPSB0aGlzOyBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgVXRpbHMucG9seWZpbGxQYXJhbShvcHRpb25zKTsgaWYgKFV0aWxzLmNoZWNrUGFyYW1LZXlFbXB0eShvcHRpb25zLCAnYWRkcmVzcycpKSB7IHJldHVybiB9IHZhciByZXF1ZXN0UGFyYW0gPSB7IGFkZHJlc3M6IG9wdGlvbnMuYWRkcmVzcywgb3V0cHV0OiAnanNvbicsIGtleTogdGhhdC5rZXkgfTsgaWYgKG9wdGlvbnMucmVnaW9uKSB7IHJlcXVlc3RQYXJhbS5yZWdpb24gPSBvcHRpb25zLnJlZ2lvbiB9IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdnZW9jb2RlcicpIH0gd3gucmVxdWVzdChVdGlscy5idWlsZFd4UmVxdWVzdENvbmZpZyhvcHRpb25zLCB7IHVybDogVVJMX0dFVF9HRU9DT0RFUiwgZGF0YTogcmVxdWVzdFBhcmFtIH0sICdnZW9jb2RlcicpKSB9OyBnZXRDaXR5TGlzdChvcHRpb25zKSB7IHZhciB0aGF0ID0gdGhpczsgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IFV0aWxzLnBvbHlmaWxsUGFyYW0ob3B0aW9ucyk7IHZhciByZXF1ZXN0UGFyYW0gPSB7IG91dHB1dDogJ2pzb24nLCBrZXk6IHRoYXQua2V5IH07IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdnZXRDaXR5TGlzdCcpIH0gd3gucmVxdWVzdChVdGlscy5idWlsZFd4UmVxdWVzdENvbmZpZyhvcHRpb25zLCB7IHVybDogVVJMX0NJVFlfTElTVCwgZGF0YTogcmVxdWVzdFBhcmFtIH0sICdnZXRDaXR5TGlzdCcpKSB9OyBnZXREaXN0cmljdEJ5Q2l0eUlkKG9wdGlvbnMpIHsgdmFyIHRoYXQgPSB0aGlzOyBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgVXRpbHMucG9seWZpbGxQYXJhbShvcHRpb25zKTsgaWYgKFV0aWxzLmNoZWNrUGFyYW1LZXlFbXB0eShvcHRpb25zLCAnaWQnKSkgeyByZXR1cm4gfSB2YXIgcmVxdWVzdFBhcmFtID0geyBpZDogb3B0aW9ucy5pZCB8fCAnJywgb3V0cHV0OiAnanNvbicsIGtleTogdGhhdC5rZXkgfTsgaWYgKG9wdGlvbnMuc2lnKSB7IHJlcXVlc3RQYXJhbS5zaWcgPSBVdGlscy5nZXRTaWcocmVxdWVzdFBhcmFtLCBvcHRpb25zLnNpZywgJ2dldERpc3RyaWN0QnlDaXR5SWQnKSB9IHd4LnJlcXVlc3QoVXRpbHMuYnVpbGRXeFJlcXVlc3RDb25maWcob3B0aW9ucywgeyB1cmw6IFVSTF9BUkVBX0xJU1QsIGRhdGE6IHJlcXVlc3RQYXJhbSB9LCAnZ2V0RGlzdHJpY3RCeUNpdHlJZCcpKSB9OyBjYWxjdWxhdGVEaXN0YW5jZShvcHRpb25zKSB7IHZhciB0aGF0ID0gdGhpczsgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IFV0aWxzLnBvbHlmaWxsUGFyYW0ob3B0aW9ucyk7IGlmIChVdGlscy5jaGVja1BhcmFtS2V5RW1wdHkob3B0aW9ucywgJ3RvJykpIHsgcmV0dXJuIH0gdmFyIHJlcXVlc3RQYXJhbSA9IHsgbW9kZTogb3B0aW9ucy5tb2RlIHx8ICd3YWxraW5nJywgdG86IFV0aWxzLmxvY2F0aW9uMnF1ZXJ5KG9wdGlvbnMudG8pLCBvdXRwdXQ6ICdqc29uJywga2V5OiB0aGF0LmtleSB9OyBpZiAob3B0aW9ucy5mcm9tKSB7IG9wdGlvbnMubG9jYXRpb24gPSBvcHRpb25zLmZyb20gfSBpZiAocmVxdWVzdFBhcmFtLm1vZGUgPT0gJ3N0cmFpZ2h0JykgeyB2YXIgbG9jYXRpb25zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3VsdCkgeyB2YXIgbG9jYXRpb25UbyA9IFV0aWxzLmdldEVuZExvY2F0aW9uKHJlcXVlc3RQYXJhbS50byk7IHZhciBkYXRhID0geyBtZXNzYWdlOiBcInF1ZXJ5IG9rXCIsIHJlc3VsdDogeyBlbGVtZW50czogW10gfSwgc3RhdHVzOiAwIH07IGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Uby5sZW5ndGg7IGkrKykgeyBkYXRhLnJlc3VsdC5lbGVtZW50cy5wdXNoKHsgZGlzdGFuY2U6IFV0aWxzLmdldERpc3RhbmNlKHJlc3VsdC5sYXRpdHVkZSwgcmVzdWx0LmxvbmdpdHVkZSwgbG9jYXRpb25Ub1tpXS5sYXQsIGxvY2F0aW9uVG9baV0ubG5nKSwgZHVyYXRpb246IDAsIGZyb206IHsgbGF0OiByZXN1bHQubGF0aXR1ZGUsIGxuZzogcmVzdWx0LmxvbmdpdHVkZSB9LCB0bzogeyBsYXQ6IGxvY2F0aW9uVG9baV0ubGF0LCBsbmc6IGxvY2F0aW9uVG9baV0ubG5nIH0gfSkgfSB2YXIgY2FsY3VsYXRlUmVzdWx0ID0gZGF0YS5yZXN1bHQuZWxlbWVudHM7IHZhciBkaXN0YW5jZVJlc3VsdCA9IFtdOyBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGN1bGF0ZVJlc3VsdC5sZW5ndGg7IGkrKykgeyBkaXN0YW5jZVJlc3VsdC5wdXNoKGNhbGN1bGF0ZVJlc3VsdFtpXS5kaXN0YW5jZSkgfSByZXR1cm4gb3B0aW9ucy5zdWNjZXNzKGRhdGEsIHsgY2FsY3VsYXRlUmVzdWx0OiBjYWxjdWxhdGVSZXN1bHQsIGRpc3RhbmNlUmVzdWx0OiBkaXN0YW5jZVJlc3VsdCB9KSB9OyBVdGlscy5sb2NhdGlvblByb2Nlc3Mob3B0aW9ucywgbG9jYXRpb25zdWNjZXNzKSB9IGVsc2UgeyB2YXIgbG9jYXRpb25zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3VsdCkgeyByZXF1ZXN0UGFyYW0uZnJvbSA9IHJlc3VsdC5sYXRpdHVkZSArICcsJyArIHJlc3VsdC5sb25naXR1ZGU7IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdjYWxjdWxhdGVEaXN0YW5jZScpIH0gd3gucmVxdWVzdChVdGlscy5idWlsZFd4UmVxdWVzdENvbmZpZyhvcHRpb25zLCB7IHVybDogVVJMX0RJU1RBTkNFLCBkYXRhOiByZXF1ZXN0UGFyYW0gfSwgJ2NhbGN1bGF0ZURpc3RhbmNlJykpIH07IFV0aWxzLmxvY2F0aW9uUHJvY2VzcyhvcHRpb25zLCBsb2NhdGlvbnN1Y2Nlc3MpIH0gfTsgZGlyZWN0aW9uKG9wdGlvbnMpIHsgdmFyIHRoYXQgPSB0aGlzOyBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgVXRpbHMucG9seWZpbGxQYXJhbShvcHRpb25zKTsgaWYgKFV0aWxzLmNoZWNrUGFyYW1LZXlFbXB0eShvcHRpb25zLCAndG8nKSkgeyByZXR1cm4gfSB2YXIgcmVxdWVzdFBhcmFtID0geyBvdXRwdXQ6ICdqc29uJywga2V5OiB0aGF0LmtleSB9OyBpZiAodHlwZW9mIG9wdGlvbnMudG8gPT0gJ3N0cmluZycpIHsgcmVxdWVzdFBhcmFtLnRvID0gb3B0aW9ucy50byB9IGVsc2UgeyByZXF1ZXN0UGFyYW0udG8gPSBvcHRpb25zLnRvLmxhdGl0dWRlICsgJywnICsgb3B0aW9ucy50by5sb25naXR1ZGUgfSB2YXIgU0VUX1VSTF9ESVJFQ1RJT04gPSBudWxsOyBvcHRpb25zLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgTU9ERS5kcml2aW5nOyBTRVRfVVJMX0RJUkVDVElPTiA9IFVSTF9ESVJFQ1RJT04gKyBvcHRpb25zLm1vZGU7IGlmIChvcHRpb25zLmZyb20pIHsgb3B0aW9ucy5sb2NhdGlvbiA9IG9wdGlvbnMuZnJvbSB9IGlmIChvcHRpb25zLm1vZGUgPT0gTU9ERS5kcml2aW5nKSB7IGlmIChvcHRpb25zLmZyb21fcG9pKSB7IHJlcXVlc3RQYXJhbS5mcm9tX3BvaSA9IG9wdGlvbnMuZnJvbV9wb2kgfSBpZiAob3B0aW9ucy5oZWFkaW5nKSB7IHJlcXVlc3RQYXJhbS5oZWFkaW5nID0gb3B0aW9ucy5oZWFkaW5nIH0gaWYgKG9wdGlvbnMuc3BlZWQpIHsgcmVxdWVzdFBhcmFtLnNwZWVkID0gb3B0aW9ucy5zcGVlZCB9IGlmIChvcHRpb25zLmFjY3VyYWN5KSB7IHJlcXVlc3RQYXJhbS5hY2N1cmFjeSA9IG9wdGlvbnMuYWNjdXJhY3kgfSBpZiAob3B0aW9ucy5yb2FkX3R5cGUpIHsgcmVxdWVzdFBhcmFtLnJvYWRfdHlwZSA9IG9wdGlvbnMucm9hZF90eXBlIH0gaWYgKG9wdGlvbnMudG9fcG9pKSB7IHJlcXVlc3RQYXJhbS50b19wb2kgPSBvcHRpb25zLnRvX3BvaSB9IGlmIChvcHRpb25zLmZyb21fdHJhY2spIHsgcmVxdWVzdFBhcmFtLmZyb21fdHJhY2sgPSBvcHRpb25zLmZyb21fdHJhY2sgfSBpZiAob3B0aW9ucy53YXlwb2ludHMpIHsgcmVxdWVzdFBhcmFtLndheXBvaW50cyA9IG9wdGlvbnMud2F5cG9pbnRzIH0gaWYgKG9wdGlvbnMucG9saWN5KSB7IHJlcXVlc3RQYXJhbS5wb2xpY3kgPSBvcHRpb25zLnBvbGljeSB9IGlmIChvcHRpb25zLnBsYXRlX251bWJlcikgeyByZXF1ZXN0UGFyYW0ucGxhdGVfbnVtYmVyID0gb3B0aW9ucy5wbGF0ZV9udW1iZXIgfSB9IGlmIChvcHRpb25zLm1vZGUgPT0gTU9ERS50cmFuc2l0KSB7IGlmIChvcHRpb25zLmRlcGFydHVyZV90aW1lKSB7IHJlcXVlc3RQYXJhbS5kZXBhcnR1cmVfdGltZSA9IG9wdGlvbnMuZGVwYXJ0dXJlX3RpbWUgfSBpZiAob3B0aW9ucy5wb2xpY3kpIHsgcmVxdWVzdFBhcmFtLnBvbGljeSA9IG9wdGlvbnMucG9saWN5IH0gfSB2YXIgbG9jYXRpb25zdWNjZXNzID0gZnVuY3Rpb24gKHJlc3VsdCkgeyByZXF1ZXN0UGFyYW0uZnJvbSA9IHJlc3VsdC5sYXRpdHVkZSArICcsJyArIHJlc3VsdC5sb25naXR1ZGU7IGlmIChvcHRpb25zLnNpZykgeyByZXF1ZXN0UGFyYW0uc2lnID0gVXRpbHMuZ2V0U2lnKHJlcXVlc3RQYXJhbSwgb3B0aW9ucy5zaWcsICdkaXJlY3Rpb24nLCBvcHRpb25zLm1vZGUpIH0gd3gucmVxdWVzdChVdGlscy5idWlsZFd4UmVxdWVzdENvbmZpZyhvcHRpb25zLCB7IHVybDogU0VUX1VSTF9ESVJFQ1RJT04sIGRhdGE6IHJlcXVlc3RQYXJhbSB9LCAnZGlyZWN0aW9uJykpIH07IFV0aWxzLmxvY2F0aW9uUHJvY2VzcyhvcHRpb25zLCBsb2NhdGlvbnN1Y2Nlc3MpIH0gfTsgbW9kdWxlLmV4cG9ydHMgPSBRUU1hcFdYOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 26 */
/*!************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/user/user.vue?mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=5bac9036&mpType=page */ 27);\n/* harmony import */ var _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user/user.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViYWM5MDM2Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi91c2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXIvdXNlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/user/user.vue?vue&type=template&id=5bac9036&mpType=page ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=5bac9036&mpType=page */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_5bac9036_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/user/user.vue?vue&type=template&id=5bac9036&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/user/user.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV2QixDQUFnQixxdEJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/user/user.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n//\n////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzMC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!**********************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/text_auto/text_auto.vue?mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_auto.vue?vue&type=template&id=4fa0d05a&mpType=page */ 32);\n/* harmony import */ var _text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_auto.vue?vue&type=script&lang=js&mpType=page */ 34);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/text_auto/text_auto.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RleHRfYXV0by52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGZhMGQwNWEmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RleHRfYXV0by52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dF9hdXRvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3RleHRfYXV0by90ZXh0X2F1dG8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/text_auto/text_auto.vue?vue&type=template&id=4fa0d05a&mpType=page ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./text_auto.vue?vue&type=template&id=4fa0d05a&mpType=page */ 33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_template_id_4fa0d05a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 33 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/text_auto/text_auto.vue?vue&type=template&id=4fa0d05a&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", { staticClass: _vm._$s(1, "sc", "Express"), attrs: { _i: 1 } }, [
      _c("view", { staticClass: _vm._$s(2, "sc", "info"), attrs: { _i: 2 } }, [
        _c("view", {
          class: _vm._$s(3, "c", { hide: !_vm.iSinfo }),
          attrs: { _i: 3 },
        }),
      ]),
      _c(
        "text",
        {
          staticClass: _vm._$s(4, "sc", "hidebtn"),
          attrs: { _i: 4 },
          on: { click: _vm.showinfo },
        },
        [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.autoShowText)))]
      ),
    ]),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 34 */
/*!**********************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/text_auto/text_auto.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./text_auto.vue?vue&type=script&lang=js&mpType=page */ 35);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_text_auto_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR2QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIzNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RleHRfYXV0by52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGV4dF9hdXRvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/pages/text_auto/text_auto.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      iSinfo: false,\n      autoShowText: '展开'\n    };\n  },\n  methods: {\n    showinfo: function showinfo() {\n      this.iSinfo = !this.iSinfo;\n      if (this.iSinfo) {\n        this.autoShowText = '收起';\n      } else {\n        this.autoShowText = '展开';\n      }\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGV4dF9hdXRvL3RleHRfYXV0by52dWUiXSwibmFtZXMiOlsiZGF0YSIsImlTaW5mbyIsImF1dG9TaG93VGV4dCIsIm1ldGhvZHMiLCJzaG93aW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTZCQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUVBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwiRXhwcmVzc1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvXCI+XG5cdFx0XHRcdDx2aWV3IDpjbGFzcz1cIntoaWRlOiFpU2luZm99XCI+XG5cdFx0XHRcdFx05ZSQ5pyd77yM5Y+v6LCT5q2M6Iie55ub5Y2O77yM5LmQ5paH6L6J54WM44CC5LiO5q2k5ZCM5pe277yM5aWz5LyO5Lus55qE6Lqr5Lu35Lmf5o6o5ZCR5LqG5beF5bOw44CC6Z2S5qW85LmL5biC54Gr54iG77yM5q2M6Iie5LyO5oiQ5LqG54Ot6Zeo5LmL5Lia44CC5rKm6JC95Li66Z2S5qW85aWz5a2Q6Jm95LiN5YWJ5b2p77yM5L2G5L6d54S25pyJ5b6I5aSa5Lq66YCJ5oup6L+Z5LiA6IGM5Lia77yM5Zyo6L+Z5Lqb5aWz5a2Q5Lit77yM55C05qOL5Lmm55S75YW85aSH55qE5Lmf5aSn5pyJ5Lq65Zyo6ZW/5a6J5Z+O5YaF77yM5pyJ5LiA6Z2S5qW877yM5ZCN5Li64oCc546J5ruh5qW84oCd77yM5Yir5ZCN4oCc546J5pyI5ruh6Iqx4oCd77yM5q2k5Lit5LmL5aWz5a2Q55qG5piv55C05qOL5Lmm55S75YW85aSH77yM55u45Lyg5ZGQ77yM6YKj6YO95piv5Y2W6Im65LiN5Y2W6Lqr55qE5a2Y5Zyo44CC5oiR5Lus55qE5pWF5LqL5bCx6KaB5LuO6L+Z546J5ruh5qW85byA5aeL6K+06LW344CC5Zyo6ZW/5a6J5Z+O5YaF77yM5pyJ5LiA6Z2S5qW877yM5ZCN5Li64oCc546J5ruh5qW84oCd77yM5Yir5ZCN4oCc546J5pyI5ruh6Iqx4oCd77yM5q2k5Lit5LmL5aWz5a2Q55qG5piv55C05qOL5Lmm55S75YW85aSH77yM55u45Lyg5ZGQ77yM6YKj6YO95piv5Y2W6Im65LiN5Y2W6Lqr55qE5a2Y5Zyo44CC5oiR5Lus55qE5pWF5LqL5bCx6KaB5LuO6L+Z546J5ruh5qW85byA5aeL6K+06LW344CCXHRcdFx0XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHRleHQgQHRhcD1cInNob3dpbmZvXCIgdi1pZj1cIiFpU2luZm9cIj7lsZXlvIA8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dGV4dCBAdGFwPVwic2hvd2luZm9cIiB2LWlmPVwiaVNpbmZvXCIgY2xhc3M9XCJoaWRlYnRuXCI+5pS26LW3PC90ZXh0PlxuXHRcdDwvdmlldz4gLS0+XG5cdFx0XG5cdFx0XG5cdFx0PHZpZXcgY2xhc3M9XCJFeHByZXNzXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImluZm9cIj5cblx0XHRcdFx0PHZpZXcgOmNsYXNzPVwie2hpZGU6IWlTaW5mb31cIj5cblx0XHRcdFx0XHTllJDmnJ3vvIzlj6/osJPmrYzoiJ7nm5vljY7vvIzkuZDmlofovonnhYzjgILkuI7mraTlkIzml7bvvIzlpbPkvI7ku6znmoTouqvku7fkuZ/mjqjlkJHkuoblt4Xls7DjgILpnZLmpbzkuYvluILngavniIbvvIzmrYzoiJ7kvI7miJDkuobng63pl6jkuYvkuJrjgILmsqbokL3kuLrpnZLmpbzlpbPlrZDomb3kuI3lhYnlvanvvIzkvYbkvp3nhLbmnInlvojlpJrkurrpgInmi6nov5nkuIDogYzkuJrvvIzlnKjov5nkupvlpbPlrZDkuK3vvIznkLTmo4vkuabnlLvlhbzlpIfnmoTkuZ/lpKfmnInkurrlnKjplb/lronln47lhoXvvIzmnInkuIDpnZLmpbzvvIzlkI3kuLrigJznjonmu6HmpbzigJ3vvIzliKvlkI3igJznjonmnIjmu6HoirHigJ3vvIzmraTkuK3kuYvlpbPlrZDnmobmmK/nkLTmo4vkuabnlLvlhbzlpIfvvIznm7jkvKDlkZDvvIzpgqPpg73mmK/ljZboibrkuI3ljZbouqvnmoTlrZjlnKjjgILmiJHku6znmoTmlYXkuovlsLHopoHku47ov5nnjonmu6HmpbzlvIDlp4vor7TotbfjgILlnKjplb/lronln47lhoXvvIzmnInkuIDpnZLmpbzvvIzlkI3kuLrigJznjonmu6HmpbzigJ3vvIzliKvlkI3igJznjonmnIjmu6HoirHigJ3vvIzmraTkuK3kuYvlpbPlrZDnmobmmK/nkLTmo4vkuabnlLvlhbzlpIfvvIznm7jkvKDlkZDvvIzpgqPpg73mmK/ljZboibrkuI3ljZbouqvnmoTlrZjlnKjjgILmiJHku6znmoTmlYXkuovlsLHopoHku47ov5nnjonmu6HmpbzlvIDlp4vor7TotbfjgIJcdFx0XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PCEtLSA8dGV4dCBAdGFwPVwic2hvd2luZm9cIiB2LWlmPVwiIWlTaW5mb1wiPuWxleW8gDwvdGV4dD4gLS0+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8IS0tIDx0ZXh0IEB0YXA9XCJzaG93aW5mb1wiIHYtaWY9XCJpU2luZm9cIiBjbGFzcz1cImhpZGVidG5cIj7mlLbotbc8L3RleHQ+IC0tPlxuXHRcdFx0PHRleHQgQHRhcD1cInNob3dpbmZvXCIgIGNsYXNzPVwiaGlkZWJ0blwiPnt7YXV0b1Nob3dUZXh0fX08L3RleHQ+XG5cdFx0PC92aWV3PlxuXHRcdFxuXHRcdFxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlTaW5mbzogZmFsc2UsXG5cdFx0XHRcdGF1dG9TaG93VGV4dDon5bGV5byAJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0c2hvd2luZm8oKSB7XG5cdFx0XHRcdHRoaXMuaVNpbmZvID0gIXRoaXMuaVNpbmZvXG5cdFx0XHRcdGlmKHRoaXMuaVNpbmZvKXtcblx0XHRcdFx0XHR0aGlzLmF1dG9TaG93VGV4dCA9ICfmlLbotbcnXG5cdFx0XHRcdH1lbHNlIHtcblx0XHRcdFx0XHR0aGlzLmF1dG9TaG93VGV4dCA9ICflsZXlvIAnXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdHBhZ2Uge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdH1cblxuXHQuRXhwcmVzcyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvLyB3aWR0aDogMTAwJTtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0cGFkZGluZzogMzB1cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0LmluZm8ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRcdHZpZXcge1xuXHRcdFx0XHR0ZXh0LWFsaWduOmp1c3RpZnkgO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDO1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRjb2xvcjogcmdiYSgxMDIsIDEwMiwgMTAyLCAxKTtcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstd29yZDsgLy/mjaLooYzmqKHlvI9cblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdH1cblxuXHRcdFx0dGV4dCB7XG5cdFx0XHRcdHdpZHRoOiA3MHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1MCUpO1xuXHRcdFx0XHRjb2xvcjogIzAwNzhGRjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDMwdXB4O1xuXHRcdFx0XHRyaWdodDogMzB1cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQuaGlkZWJ0biB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4OiAxO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0Y29sb3I6ICMwMDc4RkY7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHR9XG5cblx0LmhpZGUge1xuXHRcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IC8v5o2i6KGM5qih5byPXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLy/kv67liarmloflrZdcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDM7IC8v5q2k5aSE5Li65LiK6ZmQ6KGM5pWwXG5cdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0fVxuPC9zdHlsZT5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/App.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 37);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 38);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 21));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 40));\nvar _modules = _interopRequireDefault(__webpack_require__(/*! ./modules */ 41));\nvar _getters = _interopRequireDefault(__webpack_require__(/*! ./getters */ 45));\n_vue.default.use(_vuex.default);\nvar debug = \"development\" !== \"production\";\nvar _default = new _vuex.default.Store({\n  modules: _modules.default,\n  getters: _getters.default,\n  strict: debug\n});\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsImRlYnVnIiwicHJvY2VzcyIsIlN0b3JlIiwibW9kdWxlcyIsImdldHRlcnMiLCJzdHJpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxZQUFHLENBQUNDLEdBQUcsQ0FBQ0MsYUFBSSxDQUFDO0FBQ2IsSUFBTUMsS0FBSyxHQUFHQyxhQUFvQixLQUFLLFlBQVk7QUFBQyxlQUVyQyxJQUFJRixhQUFJLENBQUNHLEtBQUssQ0FBQztFQUM1QkMsT0FBTyxFQUFQQSxnQkFBTztFQUNQQyxPQUFPLEVBQVBBLGdCQUFPO0VBQ1BDLE1BQU0sRUFBRUw7QUFDVixDQUFDLENBQUM7QUFBQSIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFZ1ZXggZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBtb2R1bGVzIGZyb20gXCIuL21vZHVsZXNcIjtcbmltcG9ydCBnZXR0ZXJzIGZyb20gXCIuL2dldHRlcnNcIjtcblxuVnVlLnVzZShWdWV4KTtcbmNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXMsXG4gIGdldHRlcnMsXG4gIHN0cmljdDogZGVidWdcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 14)))

/***/ }),
/* 41 */
/*!***************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/modules/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app.js */ 42));\nvar _default = {\n  app: _app.default\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE0QixlQUdiO0VBQ2RBLEdBQUcsRUFBSEE7QUFDRCxDQUFDO0FBQUEiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwICBmcm9tIFwiLi9hcHAuanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGFwcFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!*************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/modules/app.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _cachekey = __webpack_require__(/*! @/config/cachekey.js */ 43);\nvar _cache = _interopRequireDefault(__webpack_require__(/*! @/utils/cache.js */ 44));\n// app 状态管理\nvar state = {\n  token: _cache.default.get(_cachekey.TOKEN) || null\n};\nvar actions = {};\nvar _default = {\n  state: state\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvbW9kdWxlcy9hcHAuanMiXSwibmFtZXMiOlsic3RhdGUiLCJ0b2tlbiIsIkNhY2hlIiwiZ2V0IiwiVE9LRU4iLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHO0VBQ2JDLEtBQUssRUFBRUMsY0FBSyxDQUFDQyxHQUFHLENBQUNDLGVBQUssQ0FBQyxJQUFJO0FBQzVCLENBQUM7QUFFRCxJQUFNQyxPQUFPLEdBQUcsQ0FFaEIsQ0FBQztBQUFBLGVBRWM7RUFDZEwsS0FBSyxFQUFMQTtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtUT0tFTn0gZnJvbSAnQC9jb25maWcvY2FjaGVrZXkuanMnO1xuaW1wb3J0IENhY2hlIGZyb20gJ0AvdXRpbHMvY2FjaGUuanMnO1xuXG5cbi8vIGFwcCDnirbmgIHnrqHnkIZcbmNvbnN0IHN0YXRlID0ge1xuXHR0b2tlbjogQ2FjaGUuZ2V0KFRPS0VOKSB8fCBudWxsXG59XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG5cdFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHN0YXRlXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!***********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/config/cachekey.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  USER_INFO: 'USER_INFO',\n  TOKEN: 'TOKEN',\n  BACK_URL: 'BACK_URL',\n  CONFIG: 'CONFIG',\n  INVITE_CODE: 'INVITE_CODE',\n  TEMP_TOKEN: 'TEMP_TOKEN'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnL2NhY2hla2V5LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJVU0VSX0lORk8iLCJUT0tFTiIsIkJBQ0tfVVJMIiwiQ09ORklHIiwiSU5WSVRFX0NPREUiLCJURU1QX1RPS0VOIl0sIm1hcHBpbmdzIjoiQUFDQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDaEJDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxLQUFLLEVBQUUsT0FBTztFQUNkQyxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLFdBQVcsRUFBRSxhQUFhO0VBQzFCQyxVQUFVLEVBQUU7QUFDYixDQUFDIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VVNFUl9JTkZPOiAnVVNFUl9JTkZPJyxcblx0VE9LRU46ICdUT0tFTicsXG5cdEJBQ0tfVVJMOiAnQkFDS19VUkwnLFxuXHRDT05GSUc6ICdDT05GSUcnLFxuXHRJTlZJVEVfQ09ERTogJ0lOVklURV9DT0RFJyxcblx0VEVNUF9UT0tFTjogJ1RFTVBfVE9LRU4nXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/utils/cache.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n/*\n* app 本地缓存\n*/\n\nvar Cache = {\n  //设置缓存(expire为缓存时效)\n  set: function set(key, value, expire) {\n    var data = {\n      expire: expire ? this.time() + expire : \"\",\n      value: value\n    };\n    if ((0, _typeof2.default)(data) === 'object') data = JSON.stringify(data);\n    try {\n      uni.setStorageSync(key, data);\n    } catch (e) {\n      return false;\n    }\n  },\n  get: function get(key) {\n    try {\n      var data = uni.getStorageSync(key);\n      var _JSON$parse = JSON.parse(data),\n        value = _JSON$parse.value,\n        expire = _JSON$parse.expire;\n      if (expire && expire < this.time()) {\n        uni.removeStorageSync(key);\n        return false;\n      } else {\n        return value;\n      }\n    } catch (e) {\n      return false;\n    }\n  },\n  //获取当前时间\n  time: function time() {\n    return Math.round(new Date() / 1000);\n  },\n  remove: function remove(key) {\n    if (key) uni.removeStorageSync(key);\n  }\n};\nvar _default = Cache;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY2FjaGUuanMiXSwibmFtZXMiOlsiQ2FjaGUiLCJzZXQiLCJrZXkiLCJ2YWx1ZSIsImV4cGlyZSIsImRhdGEiLCJ0aW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuaSIsInNldFN0b3JhZ2VTeW5jIiwiZSIsImdldCIsImdldFN0b3JhZ2VTeW5jIiwicGFyc2UiLCJyZW1vdmVTdG9yYWdlU3luYyIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRztFQUNiO0VBQ0FDLEdBQUcsZUFBQ0MsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtJQUN2QixJQUFJQyxJQUFJLEdBQUc7TUFDVkQsTUFBTSxFQUFFQSxNQUFNLEdBQUksSUFBSSxDQUFDRSxJQUFJLEVBQUUsR0FBR0YsTUFBTSxHQUFJLEVBQUU7TUFDNUNELEtBQUssRUFBTEE7SUFDRCxDQUFDO0lBRUQsSUFBSSxzQkFBT0UsSUFBSSxNQUFLLFFBQVEsRUFDM0JBLElBQUksR0FBR0UsSUFBSSxDQUFDQyxTQUFTLENBQUNILElBQUksQ0FBQztJQUM1QixJQUFJO01BQ0hJLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDUixHQUFHLEVBQUVHLElBQUksQ0FBQztJQUM5QixDQUFDLENBQUMsT0FBT00sQ0FBQyxFQUFFO01BQ1gsT0FBTyxLQUFLO0lBQ2I7RUFDRCxDQUFDO0VBQ0RDLEdBQUcsZUFBQ1YsR0FBRyxFQUFFO0lBQ1IsSUFBSTtNQUNILElBQUlHLElBQUksR0FBR0ksR0FBRyxDQUFDSSxjQUFjLENBQUNYLEdBQUcsQ0FBQztNQUNsQyxrQkFBd0JLLElBQUksQ0FBQ08sS0FBSyxDQUFDVCxJQUFJLENBQUM7UUFBakNGLEtBQUssZUFBTEEsS0FBSztRQUFFQyxNQUFNLGVBQU5BLE1BQU07TUFDcEIsSUFBR0EsTUFBTSxJQUFJQSxNQUFNLEdBQUcsSUFBSSxDQUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNsQ0csR0FBRyxDQUFDTSxpQkFBaUIsQ0FBQ2IsR0FBRyxDQUFDO1FBQzFCLE9BQU8sS0FBSztNQUNiLENBQUMsTUFBSztRQUNMLE9BQU9DLEtBQUs7TUFDYjtJQUNELENBQUMsQ0FBQyxPQUFPUSxDQUFDLEVBQUU7TUFDWCxPQUFPLEtBQUs7SUFDYjtFQUNELENBQUM7RUFDRDtFQUNBTCxJQUFJLGtCQUFHO0lBQ04sT0FBT1UsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0VBQ3JDLENBQUM7RUFDREMsTUFBTSxrQkFBQ2pCLEdBQUcsRUFBRTtJQUNYLElBQUdBLEdBQUcsRUFBRU8sR0FBRyxDQUFDTSxpQkFBaUIsQ0FBQ2IsR0FBRyxDQUFDO0VBQ25DO0FBQ0QsQ0FBQztBQUFBLGVBRWNGLEtBQUs7QUFBQSIsImZpbGUiOiI0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIGFwcCDmnKzlnLDnvJPlrZhcbiovXG5cbmNvbnN0IENhY2hlID0ge1xuXHQvL+iuvue9rue8k+WtmChleHBpcmXkuLrnvJPlrZjml7bmlYgpXG5cdHNldChrZXksIHZhbHVlLCBleHBpcmUpIHtcblx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdGV4cGlyZTogZXhwaXJlID8gKHRoaXMudGltZSgpICsgZXhwaXJlKSA6IFwiXCIsXG5cdFx0XHR2YWx1ZVxuXHRcdH1cblx0XHRcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKVxuXHRcdFx0ZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdHRyeSB7XG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoa2V5LCBkYXRhKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdGdldChrZXkpIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGRhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoa2V5KVxuXHRcdFx0Y29uc3Qge3ZhbHVlLCBleHBpcmV9ID0gSlNPTi5wYXJzZShkYXRhKVxuXHRcdFx0aWYoZXhwaXJlICYmIGV4cGlyZSA8IHRoaXMudGltZSgpKSB7XG5cdFx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1lbHNlIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0Ly/ojrflj5blvZPliY3ml7bpl7Rcblx0dGltZSgpIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZChuZXcgRGF0ZSgpIC8gMTAwMCk7XG5cdH0sXG5cdHJlbW92ZShrZXkpIHtcblx0XHRpZihrZXkpIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhrZXkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///44\n");

/***/ }),
/* 45 */
/*!*********************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/store/getters.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  token: function token(state) {\n    return state.app.token;\n  },\n  isLogin: function isLogin(state) {\n    return !!state.app.token;\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvZ2V0dGVycy5qcyJdLCJuYW1lcyI6WyJ0b2tlbiIsInN0YXRlIiwiYXBwIiwiaXNMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQWU7RUFFYkEsS0FBSyxFQUFFLGVBQUFDLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztFQUFBO0VBQy9CRyxPQUFPLEVBQUUsaUJBQUFGLEtBQUs7SUFBQSxPQUFJLENBQUMsQ0FBQ0EsS0FBSyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7RUFBQTtBQUVyQyxDQUFDO0FBQUEiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIFxuICB0b2tlbjogc3RhdGUgPT4gc3RhdGUuYXBwLnRva2VuLFxuICBpc0xvZ2luOiBzdGF0ZSA9PiAhIXN0YXRlLmFwcC50b2tlbixcbiBcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*******************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/utils/tools.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.toast = toast;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n// 提示message\n/*\n\nimport {toast} from './tools'\n\n\tthis.$toast({\n\t\ttitle: '这是示例'\n\t})\n*/\nfunction toast() {\n  var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var navigateOpt = arguments.length > 1 ? arguments[1] : undefined;\n  var title = info.title || '';\n  var icon = info.icon || 'none';\n  var endtime = info.endtime || 2000;\n  if (title) uni.showToast({\n    title: title,\n    icon: icon,\n    duration: endtime\n  });\n  if (navigateOpt != undefined) {\n    if ((0, _typeof2.default)(navigateOpt) == 'object') {\n      var tab = navigateOpt.tab || 1,\n        url = navigateOpt.url || '';\n      switch (tab) {\n        case 1:\n          //跳转至 table\n          setTimeout(function () {\n            uni.switchTab({\n              url: url\n            });\n          }, endtime);\n          break;\n        case 2:\n          //跳转至非table页面\n          setTimeout(function () {\n            uni.navigateTo({\n              url: url\n            });\n          }, endtime);\n          break;\n        case 3:\n          //返回上页面\n          setTimeout(function () {\n            uni.navigateBack({\n              delta: parseInt(url)\n            });\n          }, endtime);\n          break;\n        case 4:\n          //关闭当前所有页面跳转至非table页面\n          setTimeout(function () {\n            uni.reLaunch({\n              url: url\n            });\n          }, endtime);\n          break;\n        case 5:\n          //关闭当前页面跳转至非table页面\n          setTimeout(function () {\n            uni.redirectTo({\n              url: url\n            });\n          }, endtime);\n          break;\n      }\n    } else if (typeof navigateOpt == 'function') {\n      setTimeout(function () {\n        navigateOpt && navigateOpt();\n      }, endtime);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdG9vbHMuanMiXSwibmFtZXMiOlsidG9hc3QiLCJpbmZvIiwibmF2aWdhdGVPcHQiLCJ0aXRsZSIsImljb24iLCJlbmR0aW1lIiwidW5pIiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJ1bmRlZmluZWQiLCJ0YWIiLCJ1cmwiLCJzZXRUaW1lb3V0Iiwic3dpdGNoVGFiIiwibmF2aWdhdGVUbyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicGFyc2VJbnQiLCJyZUxhdW5jaCIsInJlZGlyZWN0VG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsS0FBSyxHQUF5QjtFQUFBLElBQXhCQyxJQUFJLHVFQUFHLENBQUMsQ0FBQztFQUFBLElBQUVDLFdBQVc7RUFDM0MsSUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNFLEtBQUssSUFBSSxFQUFFO0VBQzVCLElBQUlDLElBQUksR0FBR0gsSUFBSSxDQUFDRyxJQUFJLElBQUksTUFBTTtFQUM5QixJQUFJQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ksT0FBTyxJQUFJLElBQUk7RUFDbEMsSUFBSUYsS0FBSyxFQUFFRyxHQUFHLENBQUNDLFNBQVMsQ0FBQztJQUN4QkosS0FBSyxFQUFFQSxLQUFLO0lBQ1pDLElBQUksRUFBRUEsSUFBSTtJQUNWSSxRQUFRLEVBQUVIO0VBQ1gsQ0FBQyxDQUFDO0VBQ0YsSUFBSUgsV0FBVyxJQUFJTyxTQUFTLEVBQUU7SUFDN0IsSUFBSSxzQkFBT1AsV0FBVyxLQUFJLFFBQVEsRUFBRTtNQUNuQyxJQUFJUSxHQUFHLEdBQUdSLFdBQVcsQ0FBQ1EsR0FBRyxJQUFJLENBQUM7UUFDN0JDLEdBQUcsR0FBR1QsV0FBVyxDQUFDUyxHQUFHLElBQUksRUFBRTtNQUM1QixRQUFRRCxHQUFHO1FBQ1YsS0FBSyxDQUFDO1VBQ0w7VUFDQUUsVUFBVSxDQUFDLFlBQVc7WUFDckJOLEdBQUcsQ0FBQ08sU0FBUyxDQUFDO2NBQ2JGLEdBQUcsRUFBRUE7WUFDTixDQUFDLENBQUM7VUFDSCxDQUFDLEVBQUVOLE9BQU8sQ0FBQztVQUNYO1FBQ0QsS0FBSyxDQUFDO1VBQ0w7VUFDQU8sVUFBVSxDQUFDLFlBQVc7WUFDckJOLEdBQUcsQ0FBQ1EsVUFBVSxDQUFDO2NBQ2RILEdBQUcsRUFBRUE7WUFDTixDQUFDLENBQUM7VUFDSCxDQUFDLEVBQUVOLE9BQU8sQ0FBQztVQUNYO1FBQ0QsS0FBSyxDQUFDO1VBQ0w7VUFDQU8sVUFBVSxDQUFDLFlBQVc7WUFDckJOLEdBQUcsQ0FBQ1MsWUFBWSxDQUFDO2NBQ2hCQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQ04sR0FBRztZQUNwQixDQUFDLENBQUM7VUFDSCxDQUFDLEVBQUVOLE9BQU8sQ0FBQztVQUNYO1FBQ0QsS0FBSyxDQUFDO1VBQ0w7VUFDQU8sVUFBVSxDQUFDLFlBQVc7WUFDckJOLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDO2NBQ1pQLEdBQUcsRUFBRUE7WUFDTixDQUFDLENBQUM7VUFDSCxDQUFDLEVBQUVOLE9BQU8sQ0FBQztVQUNYO1FBQ0QsS0FBSyxDQUFDO1VBQ0w7VUFDQU8sVUFBVSxDQUFDLFlBQVc7WUFDckJOLEdBQUcsQ0FBQ2EsVUFBVSxDQUFDO2NBQ2RSLEdBQUcsRUFBRUE7WUFDTixDQUFDLENBQUM7VUFDSCxDQUFDLEVBQUVOLE9BQU8sQ0FBQztVQUNYO01BQU07SUFHVCxDQUFDLE1BQU0sSUFBSSxPQUFPSCxXQUFXLElBQUksVUFBVSxFQUFFO01BQzVDVSxVQUFVLENBQUMsWUFBVztRQUNyQlYsV0FBVyxJQUFJQSxXQUFXLEVBQUU7TUFDN0IsQ0FBQyxFQUFFRyxPQUFPLENBQUM7SUFDWjtFQUNEO0FBQ0QiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIOaPkOekum1lc3NhZ2Vcbi8qXG5cbmltcG9ydCB7dG9hc3R9IGZyb20gJy4vdG9vbHMnXG5cblx0dGhpcy4kdG9hc3Qoe1xuXHRcdHRpdGxlOiAn6L+Z5piv56S65L6LJ1xuXHR9KVxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdChpbmZvID0ge30sIG5hdmlnYXRlT3B0KSB7XG5cdGxldCB0aXRsZSA9IGluZm8udGl0bGUgfHwgJydcblx0bGV0IGljb24gPSBpbmZvLmljb24gfHwgJ25vbmUnXG5cdGxldCBlbmR0aW1lID0gaW5mby5lbmR0aW1lIHx8IDIwMDBcblx0aWYgKHRpdGxlKSB1bmkuc2hvd1RvYXN0KHtcblx0XHR0aXRsZTogdGl0bGUsXG5cdFx0aWNvbjogaWNvbixcblx0XHRkdXJhdGlvbjogZW5kdGltZVxuXHR9KVxuXHRpZiAobmF2aWdhdGVPcHQgIT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKHR5cGVvZiBuYXZpZ2F0ZU9wdCA9PSAnb2JqZWN0Jykge1xuXHRcdFx0bGV0IHRhYiA9IG5hdmlnYXRlT3B0LnRhYiB8fCAxLFxuXHRcdFx0XHR1cmwgPSBuYXZpZ2F0ZU9wdC51cmwgfHwgJyc7XG5cdFx0XHRzd2l0Y2ggKHRhYikge1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0Ly/ot7Povazoh7MgdGFibGVcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XG5cdFx0XHRcdFx0XHRcdHVybDogdXJsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sIGVuZHRpbWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0Ly/ot7Povazoh7PpnZ50YWJsZemhtemdolxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9LCBlbmR0aW1lKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdC8v6L+U5Zue5LiK6aG16Z2iXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xuXHRcdFx0XHRcdFx0XHRkZWx0YTogcGFyc2VJbnQodXJsKSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSwgZW5kdGltZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHQvL+WFs+mXreW9k+WJjeaJgOaciemhtemdoui3s+i9rOiHs+mdnnRhYmxl6aG16Z2iXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XG5cdFx0XHRcdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9LCBlbmR0aW1lKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRcdC8v5YWz6Zet5b2T5YmN6aG16Z2i6Lez6L2s6Iez6Z2edGFibGXpobXpnaJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dW5pLnJlZGlyZWN0VG8oe1xuXHRcdFx0XHRcdFx0XHR1cmw6IHVybCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSwgZW5kdGltZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBuYXZpZ2F0ZU9wdCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRuYXZpZ2F0ZU9wdCAmJiBuYXZpZ2F0ZU9wdCgpO1xuXHRcdFx0fSwgZW5kdGltZSk7XG5cdFx0fVxuXHR9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!**********************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-body.vue ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-body.vue?vue&type=template&id=5eb4c084&filter-modules=eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19& */ 48);\n/* harmony import */ var _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-body.vue?vue&type=script&lang=js& */ 50);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\n/* harmony import */ var _wxs_wxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_2FUsers_2Fwangyunzhu_2FDesktop_2Fyinjiangtao_2Funiapp_2Funiapp_demo_2Funiapp_demo_2Fcomponents_2Fmescroll_uni_2Fmescroll_body_vue_module_wxsBiz_lang_wxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wxs/wxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=%2FUsers%2Fwangyunzhu%2FDesktop%2Fyinjiangtao%2Funiapp%2Funiapp_demo%2Funiapp_demo%2Fcomponents%2Fmescroll-uni%2Fmescroll-body.vue&module=wxsBiz&lang=wxs */ 65);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\n/* custom blocks */\n\nif (typeof _wxs_wxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_2FUsers_2Fwangyunzhu_2FDesktop_2Fyinjiangtao_2Funiapp_2Funiapp_demo_2Funiapp_demo_2Fcomponents_2Fmescroll_uni_2Fmescroll_body_vue_module_wxsBiz_lang_wxs__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_wxs_wxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_2FUsers_2Fwangyunzhu_2FDesktop_2Fyinjiangtao_2Funiapp_2Funiapp_demo_2Funiapp_demo_2Fcomponents_2Fmescroll_uni_2Fmescroll_body_vue_module_wxsBiz_lang_wxs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\ncomponent.options.__file = \"components/mescroll-uni/mescroll-body.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwYztBQUMxYztBQUNpRTtBQUNMOzs7QUFHNUQ7QUFDc047QUFDdE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdhQUFNO0FBQ1IsRUFBRSxpYkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0YUFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZ1A7QUFDaFAsV0FBVyxpUUFBTSxpQkFBaUIseVFBQU07O0FBRXhDO0FBQ2UsZ0YiLCJmaWxlIjoiNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVlYjRjMDg0JmZpbHRlci1tb2R1bGVzPWV5SjNlSE5DYVhvaU9uc2lkSGx3WlNJNkluTmpjbWx3ZENJc0ltTnZiblJsYm5RaU9pSWlMQ0p6ZEdGeWRDSTZNekUxTXl3aVlYUjBjbk1pT25zaWMzSmpJam9pTGk5M2VITXZkM2h6TG5kNGN5SXNJbTF2WkhWc1pTSTZJbmQ0YzBKcGVpSXNJbXhoYm1jaU9pSjNlSE1pZlN3aVpXNWtJam96TVRVemZTd2ljbVZ1WkdWeVFtbDZJanA3SW5SNWNHVWlPaUp5Wlc1a1pYSnFjeUlzSW1OdmJuUmxiblFpT2lJaUxDSnpkR0Z5ZENJNk16STRNU3dpWVhSMGNuTWlPbnNpYlc5a2RXeGxJam9pY21WdVpHVnlRbWw2SWl3aWJHRnVaeUk2SW1wekluMHNJbVZ1WkNJNk16TTJPWDE5JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVzY3JvbGwtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG4vKiBjdXN0b20gYmxvY2tzICovXG5pbXBvcnQgYmxvY2swIGZyb20gXCIuL3d4cy93eHMud3hzP3Z1ZSZ0eXBlPWN1c3RvbSZpbmRleD0wJmJsb2NrVHlwZT1zY3JpcHQmaXNzdWVyUGF0aD0lMkZVc2VycyUyRndhbmd5dW56aHUlMkZEZXNrdG9wJTJGeWluamlhbmd0YW8lMkZ1bmlhcHAlMkZ1bmlhcHBfZGVtbyUyRnVuaWFwcF9kZW1vJTJGY29tcG9uZW50cyUyRm1lc2Nyb2xsLXVuaSUyRm1lc2Nyb2xsLWJvZHkudnVlJm1vZHVsZT13eHNCaXombGFuZz13eHNcIlxuaWYgKHR5cGVvZiBibG9jazAgPT09ICdmdW5jdGlvbicpIGJsb2NrMChjb21wb25lbnQpXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtYm9keS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-body.vue?vue&type=template&id=5eb4c084&filter-modules=eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-body.vue?vue&type=template&id=5eb4c084&filter-modules=eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19& */ 49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_template_id_5eb4c084_filter_modules_eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 49 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-body.vue?vue&type=template&id=5eb4c084&filter-modules=eyJ3eHNCaXoiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzE1MywiYXR0cnMiOnsic3JjIjoiLi93eHMvd3hzLnd4cyIsIm1vZHVsZSI6Ind4c0JpeiIsImxhbmciOiJ3eHMifSwiZW5kIjozMTUzfSwicmVuZGVyQml6Ijp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6MzI4MSwiYXR0cnMiOnsibW9kdWxlIjoicmVuZGVyQml6IiwibGFuZyI6ImpzIn0sImVuZCI6MzM2OX19& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      wxsProps: { "change:prop": "wxsProp" },
      staticClass: _vm._$s(0, "sc", "mescroll-body mescroll-render-touch"),
      class: _vm._$s(0, "c", { "mescorll-sticky": _vm.sticky }),
      style: _vm._$s(0, "s", {
        minHeight: _vm.minHeight,
        "padding-top": _vm.padTop,
        "padding-bottom": _vm.padBottom,
      }),
      attrs: { prop: _vm._$s(0, "change:wxsProp", _vm.wxsProp), _i: 0 },
      on: {},
    },
    [
      _vm._$s(1, "i", _vm.topbar && _vm.statusBarHeight)
        ? _c("view", {
            staticClass: _vm._$s(1, "sc", "mescroll-topbar"),
            style: _vm._$s(1, "s", {
              height: _vm.statusBarHeight + "px",
              background: _vm.topbar,
            }),
            attrs: { _i: 1 },
          })
        : _vm._e(),
      _c(
        "view",
        {
          wxsProps: { "change:prop": "callProp" },
          staticClass: _vm._$s(
            2,
            "sc",
            "mescroll-body-content mescroll-wxs-content"
          ),
          style: _vm._$s(2, "s", {
            transform: _vm.translateY,
            transition: _vm.transition,
          }),
          attrs: { prop: _vm._$s(2, "change:callProp", _vm.callProp), _i: 2 },
        },
        [
          _vm._$s(3, "i", _vm.mescroll.optDown.use)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "mescroll-downwarp"),
                  style: _vm._$s(3, "s", {
                    background: _vm.mescroll.optDown.bgColor,
                    color: _vm.mescroll.optDown.textColor,
                  }),
                  attrs: { _i: 3 },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(4, "sc", "downwarp-content"),
                      attrs: { _i: 4 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          5,
                          "sc",
                          "downwarp-progress mescroll-wxs-progress"
                        ),
                        class: _vm._$s(5, "c", {
                          "mescroll-rotate": _vm.isDownLoading,
                        }),
                        style: _vm._$s(5, "s", {
                          "border-color": _vm.mescroll.optDown.textColor,
                          transform: _vm.downRotate,
                        }),
                        attrs: { _i: 5 },
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(6, "sc", "downwarp-tip"),
                          attrs: { _i: 6 },
                        },
                        [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.downText)))]
                      ),
                    ]
                  ),
                ]
              )
            : _vm._e(),
          _vm._t("default", null, { _i: 7 }),
          _vm._$s(8, "i", _vm.isShowEmpty)
            ? _c("mescroll-empty", {
                attrs: { option: _vm.mescroll.optUp.empty, _i: 8 },
                on: { emptyclick: _vm.emptyClick },
              })
            : _vm._e(),
          _vm._$s(
            9,
            "i",
            _vm.mescroll.optUp.use && !_vm.isDownLoading && _vm.upLoadType !== 3
          )
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "mescroll-upwarp"),
                  style: _vm._$s(9, "s", {
                    background: _vm.mescroll.optUp.bgColor,
                    color: _vm.mescroll.optUp.textColor,
                  }),
                  attrs: { _i: 9 },
                },
                [
                  _c(
                    "view",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm._$s(10, "v-show", _vm.upLoadType === 1),
                          expression: "_$s(10,'v-show',upLoadType===1)",
                        },
                      ],
                      attrs: { _i: 10 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          11,
                          "sc",
                          "upwarp-progress mescroll-rotate"
                        ),
                        style: _vm._$s(11, "s", {
                          "border-color": _vm.mescroll.optUp.textColor,
                        }),
                        attrs: { _i: 11 },
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(12, "sc", "upwarp-tip"),
                          attrs: { _i: 12 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              12,
                              "t0-0",
                              _vm._s(_vm.mescroll.optUp.textLoading)
                            )
                          ),
                        ]
                      ),
                    ]
                  ),
                  _vm._$s(13, "i", _vm.upLoadType === 2)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(13, "sc", "upwarp-nodata"),
                          attrs: { _i: 13 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              13,
                              "t0-0",
                              _vm._s(_vm.mescroll.optUp.textNoMore)
                            )
                          ),
                        ]
                      )
                    : _vm._e(),
                ]
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._$s(14, "i", _vm.safearea)
        ? _c("view", {
            staticClass: _vm._$s(14, "sc", "mescroll-safearea"),
            attrs: { _i: 14 },
          })
        : _vm._e(),
      _c("mescroll-top", {
        attrs: { option: _vm.mescroll.optUp.toTop, _i: 15 },
        on: { click: _vm.toTopClick },
        model: {
          value: _vm._$s(15, "v-model", _vm.isShowToTop),
          callback: function ($$v) {
            _vm.isShowToTop = $$v
          },
          expression: "isShowToTop",
        },
      }),
      _c("view", {
        wxsProps: { "change:prop": "wxsProp" },
        attrs: { prop: _vm._$s(16, "change:wxsProp", _vm.wxsProp), _i: 16 },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 50 */
/*!***********************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-body.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-body.vue?vue&type=script&lang=js& */ 51);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXF2QixDQUFnQixtdEJBQUcsRUFBQyIsImZpbGUiOiI1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc2Nyb2xsLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNjcm9sbC1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-body.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _mescrollUni = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni.js */ 52));\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./mescroll-uni-option.js */ 53));\nvar _mescrollEmpty = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-empty.vue */ 54));\nvar _mescrollTop = _interopRequireDefault(__webpack_require__(/*! ./components/mescroll-top.vue */ 59));\nvar _mixins = _interopRequireDefault(__webpack_require__(/*! ./wxs/mixins.js */ 64));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入mescroll-uni.js,处理核心逻辑\n// 引入全局配置\n// 引入空布局组件\n// 引入回到顶部组件\n// 引入兼容wxs(含renderjs)写法的mixins\nvar _default = {\n  mixins: [_mixins.default],\n  components: {\n    MescrollEmpty: _mescrollEmpty.default,\n    MescrollTop: _mescrollTop.default\n  },\n  data: function data() {\n    return {\n      mescroll: {\n        optDown: {},\n        optUp: {}\n      },\n      // mescroll实例\n      downHight: 0,\n      //下拉刷新: 容器高度\n      downRate: 0,\n      // 下拉比率(inOffset: rate<1; outOffset: rate>=1)\n      downLoadType: 0,\n      // 下拉刷新状态: 0(loading前), 1(inOffset), 2(outOffset), 3(showLoading), 4(endDownScroll)\n      upLoadType: 0,\n      // 上拉加载状态：0（loading前），1（loading中），2（没有更多了,显示END文本提示），3（没有更多了,不显示END文本提示）\n      isShowEmpty: false,\n      // 是否显示空布局\n      isShowToTop: false,\n      // 是否显示回到顶部按钮\n      windowHeight: 0,\n      // 可使用窗口的高度\n      windowBottom: 0,\n      // 可使用窗口的底部位置\n      statusBarHeight: 0 // 状态栏高度\n    };\n  },\n\n  props: {\n    down: Object,\n    // 下拉刷新的参数配置\n    up: Object,\n    // 上拉加载的参数配置\n    top: [String, Number],\n    // 下拉布局往下的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    topbar: [Boolean, String],\n    // top的偏移量是否加上状态栏高度, 默认false (使用场景:取消原生导航栏时,配置此项可留出状态栏的占位, 支持传入字符串背景,如色值,背景图,渐变)\n    bottom: [String, Number],\n    // 上拉布局往上的偏移量 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight)\n    safearea: Boolean,\n    // bottom的偏移量是否加上底部安全区的距离, 默认false (需要适配iPhoneX时使用)\n    height: [String, Number],\n    // 指定mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉\n    bottombar: {\n      // 底部是否偏移TabBar的高度(默认仅在H5端的tab页生效)\n      type: Boolean,\n      default: false\n    },\n    sticky: Boolean // 是否支持sticky,默认false; 当值配置true时,需避免在mescroll-body标签前面加非定位的元素,否则下拉区域无法会隐藏\n  },\n\n  watch: {\n    downLoadType: function downLoadType(val) {\n      this.$emit('changedownloding', val);\n    }\n  },\n  computed: {\n    // mescroll最小高度,默认windowHeight,使列表不满屏仍可下拉\n    minHeight: function minHeight() {\n      return typeof this.height == 'string' ? this.height : this.toPx(this.height || '100%') + 'px';\n    },\n    // 下拉布局往下偏移的距离 (px)\n    numTop: function numTop() {\n      return this.toPx(this.top);\n    },\n    padTop: function padTop() {\n      return this.numTop + 'px';\n    },\n    // 上拉布局往上偏移 (px)\n    numBottom: function numBottom() {\n      return this.toPx(this.bottom);\n    },\n    padBottom: function padBottom() {\n      return this.numBottom + 'px';\n    },\n    // 是否为重置下拉的状态\n    isDownReset: function isDownReset() {\n      return this.downLoadType === 3 || this.downLoadType === 4;\n    },\n    // 过渡\n    transition: function transition() {\n      return this.isDownReset ? 'transform 300ms' : '';\n    },\n    translateY: function translateY() {\n      return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在mescroll之外\n    },\n    // 是否在加载中\n    isDownLoading: function isDownLoading() {\n      return this.downLoadType === 3;\n    },\n    // 旋转的角度\n    downRotate: function downRotate() {\n      return 'rotate(' + 360 * this.downRate + 'deg)';\n    },\n    // 文本提示\n    downText: function downText() {\n      if (!this.mescroll) return \"\"; // 避免头条小程序初始化时报错\n      switch (this.downLoadType) {\n        case 1:\n          return this.mescroll.optDown.textInOffset;\n        case 2:\n          return this.mescroll.optDown.textOutOffset;\n        case 3:\n          return this.mescroll.optDown.textLoading;\n        case 4:\n          return this.mescroll.isDownEndSuccess ? this.mescroll.optDown.textSuccess : this.mescroll.isDownEndSuccess == false ? this.mescroll.optDown.textErr : this.mescroll.optDown.textInOffset;\n        default:\n          return this.mescroll.optDown.textInOffset;\n      }\n    }\n  },\n  methods: {\n    //number,rpx,upx,px,% --> px的数值\n    toPx: function toPx(num) {\n      if (typeof num === 'string') {\n        if (num.indexOf('px') !== -1) {\n          if (num.indexOf('rpx') !== -1) {\n            // \"10rpx\"\n            num = num.replace('rpx', '');\n          } else if (num.indexOf('upx') !== -1) {\n            // \"10upx\"\n            num = num.replace('upx', '');\n          } else {\n            // \"10px\"\n            return Number(num.replace('px', ''));\n          }\n        } else if (num.indexOf('%') !== -1) {\n          // 传百分比,则相对于windowHeight,传\"10%\"则等于windowHeight的10%\n          var rate = Number(num.replace('%', '')) / 100;\n          return this.windowHeight * rate;\n        }\n      }\n      return num ? uni.upx2px(Number(num)) : 0;\n    },\n    // 点击空布局的按钮回调\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick', this.mescroll);\n    },\n    // 点击回到顶部的按钮回调\n    toTopClick: function toTopClick() {\n      this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration); // 执行回到顶部\n      this.$emit('topclick', this.mescroll); // 派发点击回到顶部按钮的回调\n    }\n  },\n  // 使用created初始化mescroll对象; 如果用mounted部分css样式编译到H5会失效\n  created: function created() {\n    var vm = this;\n    var diyOption = {\n      // 下拉刷新的配置\n      down: {\n        inOffset: function inOffset() {\n          vm.downLoadType = 1; // 下拉的距离进入offset范围内那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        outOffset: function outOffset() {\n          vm.downLoadType = 2; // 下拉的距离大于offset那一刻的回调 (自定义mescroll组件时,此行不可删)\n        },\n        onMoving: function onMoving(mescroll, rate, downHight) {\n          // 下拉过程中的回调,滑动过程一直在执行;\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n          vm.downRate = rate; //下拉比率 (inOffset: rate<1; outOffset: rate>=1)\n        },\n        showLoading: function showLoading(mescroll, downHight) {\n          vm.downLoadType = 3; // 显示下拉刷新进度的回调 (自定义mescroll组件时,此行不可删)\n          vm.downHight = downHight; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n        },\n        beforeEndDownScroll: function beforeEndDownScroll(mescroll) {\n          vm.downLoadType = 4;\n          return mescroll.optDown.beforeEndDelay; // 延时结束的时长\n        },\n        endDownScroll: function endDownScroll() {\n          vm.downLoadType = 4; // 结束下拉 (自定义mescroll组件时,此行不可删)\n          vm.downHight = 0; // 设置下拉区域的高度 (自定义mescroll组件时,此行不可删)\n          if (vm.downResetTimer) {\n            clearTimeout(vm.downResetTimer);\n            vm.downResetTimer = null;\n          } // 移除重置倒计时\n          vm.downResetTimer = setTimeout(function () {\n            // 过渡动画执行完毕后,需重置为0的状态,避免下次inOffset不及时显示textInOffset\n            if (vm.downLoadType === 4) vm.downLoadType = 0;\n          }, 300);\n        },\n        // 派发下拉刷新的回调\n        callback: function callback(mescroll) {\n          vm.$emit('down', mescroll);\n        }\n      },\n      // 上拉加载的配置\n      up: {\n        // 显示加载中的回调\n        showLoading: function showLoading() {\n          vm.upLoadType = 1;\n        },\n        // 显示无更多数据的回调\n        showNoMore: function showNoMore() {\n          vm.$nextTick(function () {\n            vm.upLoadType = 2;\n          });\n        },\n        // 隐藏上拉加载的回调\n        hideUpScroll: function hideUpScroll(mescroll) {\n          vm.upLoadType = mescroll.optUp.hasNext ? 0 : 3;\n        },\n        // 空布局\n        empty: {\n          onShow: function onShow(isShow) {\n            // 显示隐藏的回调\n            vm.isShowEmpty = isShow;\n          }\n        },\n        // 回到顶部\n        toTop: {\n          onShow: function onShow(isShow) {\n            // 显示隐藏的回调\n            vm.isShowToTop = isShow;\n          }\n        },\n        // 派发上拉加载的回调\n        callback: function callback(mescroll) {\n          vm.$emit('up', mescroll);\n        }\n      }\n    };\n    _mescrollUni.default.extend(diyOption, _mescrollUniOption.default); // 混入全局的配置\n    var myOption = JSON.parse(JSON.stringify({\n      down: vm.down,\n      up: vm.up\n    })); // 深拷贝,避免对props的影响\n    _mescrollUni.default.extend(myOption, diyOption); // 混入具体界面的配置\n\n    // 初始化MeScroll对象\n    vm.mescroll = new _mescrollUni.default(myOption, true); // 传入true,标记body为滚动区域\n    // init回调mescroll对象\n    vm.$emit('init', vm.mescroll);\n\n    // 设置高度\n    var sys = uni.getSystemInfoSync();\n    if (sys.windowHeight) vm.windowHeight = sys.windowHeight;\n    if (sys.windowBottom) vm.windowBottom = sys.windowBottom;\n    if (sys.statusBarHeight) vm.statusBarHeight = sys.statusBarHeight;\n    // 使down的bottomOffset生效\n    vm.mescroll.setBodyHeight(sys.windowHeight);\n\n    // 因为使用的是page的scroll,这里需自定义scrollTo\n    vm.mescroll.resetScrollTo(function (y, t) {\n      if (typeof y === 'string') {\n        // 滚动到指定view (y为css选择器)\n        setTimeout(function () {\n          // 延时确保view已渲染; 不使用$nextTick\n          var selector;\n          if (y.indexOf('#') == -1 && y.indexOf('.') == -1) {\n            selector = '#' + y; // 不带#和. 则默认为id选择器\n          } else {\n            selector = y;\n            if (y.indexOf('>>>') != -1) {\n              // 不支持跨自定义组件的后代选择器 (转为普通的选择器即可跨组件查询)\n              selector = y.split('>>>')[1].trim();\n            }\n          }\n          uni.createSelectorQuery().select(selector).boundingClientRect(function (rect) {\n            if (rect) {\n              var top = rect.top;\n              top += vm.mescroll.getScrollTop();\n              uni.pageScrollTo({\n                scrollTop: top,\n                duration: t\n              });\n            } else {\n              __f__(\"error\", selector + ' does not exist', \" at components/mescroll-uni/mescroll-body.vue:330\");\n            }\n          }).exec();\n        }, 30);\n      } else {\n        // 滚动到指定位置 (y必须为数字)\n        uni.pageScrollTo({\n          scrollTop: y,\n          duration: t\n        });\n      }\n    });\n\n    // 具体的界面如果不配置up.toTop.safearea,则取本vue的safearea值\n    if (vm.up && vm.up.toTop && vm.up.toTop.safearea != null) {} else {\n      vm.mescroll.optUp.toTop.safearea = vm.safearea;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtYm9keS52dWUiXSwibmFtZXMiOlsibWl4aW5zIiwiY29tcG9uZW50cyIsIk1lc2Nyb2xsRW1wdHkiLCJNZXNjcm9sbFRvcCIsImRhdGEiLCJtZXNjcm9sbCIsIm9wdERvd24iLCJvcHRVcCIsImRvd25IaWdodCIsImRvd25SYXRlIiwiZG93bkxvYWRUeXBlIiwidXBMb2FkVHlwZSIsImlzU2hvd0VtcHR5IiwiaXNTaG93VG9Ub3AiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dCb3R0b20iLCJzdGF0dXNCYXJIZWlnaHQiLCJwcm9wcyIsImRvd24iLCJ1cCIsInRvcCIsInRvcGJhciIsImJvdHRvbSIsInNhZmVhcmVhIiwiaGVpZ2h0IiwiYm90dG9tYmFyIiwidHlwZSIsImRlZmF1bHQiLCJzdGlja3kiLCJ3YXRjaCIsImNvbXB1dGVkIiwibWluSGVpZ2h0IiwibnVtVG9wIiwicGFkVG9wIiwibnVtQm90dG9tIiwicGFkQm90dG9tIiwiaXNEb3duUmVzZXQiLCJ0cmFuc2l0aW9uIiwidHJhbnNsYXRlWSIsImlzRG93bkxvYWRpbmciLCJkb3duUm90YXRlIiwiZG93blRleHQiLCJtZXRob2RzIiwidG9QeCIsIm51bSIsImVtcHR5Q2xpY2siLCJ0b1RvcENsaWNrIiwiY3JlYXRlZCIsImluT2Zmc2V0Iiwidm0iLCJvdXRPZmZzZXQiLCJvbk1vdmluZyIsInNob3dMb2FkaW5nIiwiYmVmb3JlRW5kRG93blNjcm9sbCIsImVuZERvd25TY3JvbGwiLCJjbGVhclRpbWVvdXQiLCJjYWxsYmFjayIsInNob3dOb01vcmUiLCJoaWRlVXBTY3JvbGwiLCJlbXB0eSIsIm9uU2hvdyIsInRvVG9wIiwiTWVTY3JvbGwiLCJzZXRUaW1lb3V0Iiwic2VsZWN0b3IiLCJ1bmkiLCJzY3JvbGxUb3AiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQStFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUEsZUFHQTtFQUNBQTtFQUNBQztJQUNBQztJQUNBQztFQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7UUFBQUM7UUFBQUM7TUFBQTtNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0FDO0lBQUE7SUFDQUM7SUFBQTtJQUNBQztJQUFBO0lBQ0FDO0lBQUE7SUFDQUM7SUFBQTtJQUNBQztJQUFBO0lBQ0FDO0lBQUE7SUFDQUM7TUFBQTtNQUNBQztNQUNBQztJQUNBO0lBQ0FDO0VBQ0E7O0VBQ0FDO0lBQ0FuQjtNQUNBO0lBQ0E7RUFDQTtFQUNBb0I7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQTtVQUFBO1FBQ0E7VUFBQTtRQUNBO1VBQUE7UUFDQTtVQUFBO1FBQ0E7VUFBQTtNQUFBO0lBRUE7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0E7UUFDQTtVQUNBO1lBQ0E7WUFDQUM7VUFDQTtZQUNBO1lBQ0FBO1VBQ0E7WUFDQTtZQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFFQTtNQUNBO01BQ0E3QjtRQUNBOEI7VUFDQUM7UUFDQTtRQUNBQztVQUNBRDtRQUNBO1FBQ0FFO1VBQ0E7VUFDQUY7VUFDQUE7UUFDQTtRQUNBRztVQUNBSDtVQUNBQTtRQUNBO1FBQ0FJO1VBQ0FKO1VBQ0E7UUFDQTtRQUNBSztVQUNBTDtVQUNBQTtVQUNBO1lBQUFNO1lBQUFOO1VBQUE7VUFDQUE7WUFBQTtZQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0FPO1VBQ0FQO1FBQ0E7TUFDQTtNQUNBO01BQ0E5QjtRQUNBO1FBQ0FpQztVQUNBSDtRQUNBO1FBQ0E7UUFDQVE7VUFDQVI7WUFDQUE7VUFDQTtRQUNBO1FBQ0E7UUFDQVM7VUFDQVQ7UUFDQTtRQUNBO1FBQ0FVO1VBQ0FDO1lBQ0E7WUFDQVg7VUFDQTtRQUNBO1FBQ0E7UUFDQVk7VUFDQUQ7WUFDQTtZQUNBWDtVQUNBO1FBQ0E7UUFDQTtRQUNBTztVQUNBUDtRQUNBO01BQ0E7SUFDQTtJQUVBYTtJQUNBO01BQUE1QztNQUFBQztJQUFBO0lBQ0EyQzs7SUFFQTtJQUNBYjtJQUNBO0lBQ0FBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQTs7SUFFQTtJQUNBQTtNQUNBO1FBQ0E7UUFDQWM7VUFBQTtVQUNBO1VBQ0E7WUFDQUM7VUFDQTtZQUNBQTtZQUVBO2NBQUE7Y0FDQUE7WUFDQTtVQUVBO1VBQ0FDO1lBQ0E7Y0FDQTtjQUNBN0M7Y0FDQTZDO2dCQUNBQztnQkFDQUM7Y0FDQTtZQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtRQUNBO1FBQ0FGO1VBQ0FDO1VBQ0FDO1FBQ0E7TUFDQTtJQUNBOztJQUVBO0lBQ0E7TUFDQWxCO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IFxuXHRjbGFzcz1cIm1lc2Nyb2xsLWJvZHkgbWVzY3JvbGwtcmVuZGVyLXRvdWNoXCIgXG5cdDpjbGFzcz1cInsnbWVzY29ybGwtc3RpY2t5Jzogc3RpY2t5fVwiXG5cdDpzdHlsZT1cInsnbWluSGVpZ2h0JzptaW5IZWlnaHQsICdwYWRkaW5nLXRvcCc6IHBhZFRvcCwgJ3BhZGRpbmctYm90dG9tJzogcGFkQm90dG9tfVwiIFxuXHRAdG91Y2hzdGFydD1cInd4c0Jpei50b3VjaHN0YXJ0RXZlbnRcIiBcblx0QHRvdWNobW92ZT1cInd4c0Jpei50b3VjaG1vdmVFdmVudFwiIFxuXHRAdG91Y2hlbmQ9XCJ3eHNCaXoudG91Y2hlbmRFdmVudFwiIFxuXHRAdG91Y2hjYW5jZWw9XCJ3eHNCaXoudG91Y2hlbmRFdmVudFwiXG5cdDpjaGFuZ2U6cHJvcD1cInd4c0Jpei5wcm9wT2JzZXJ2ZXJcIlxuXHQ6cHJvcD1cInd4c1Byb3BcIlxuXHQ+XG5cdFx0PCEtLSDnirbmgIHmoI8gLS0+XG5cdFx0PHZpZXcgdi1pZj1cInRvcGJhciYmc3RhdHVzQmFySGVpZ2h0XCIgY2xhc3M9XCJtZXNjcm9sbC10b3BiYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHQrJ3B4JywgYmFja2dyb3VuZDogdG9wYmFyfVwiPjwvdmlldz5cblx0XHRcblx0XHQ8dmlldyBjbGFzcz1cIm1lc2Nyb2xsLWJvZHktY29udGVudCBtZXNjcm9sbC13eHMtY29udGVudFwiIDpzdHlsZT1cInsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uIH1cIiA6Y2hhbmdlOnByb3A9XCJ3eHNCaXouY2FsbE9ic2VydmVyXCIgOnByb3A9XCJjYWxsUHJvcFwiPlxuXHRcdFx0PCEtLSDkuIvmi4nliqDovb3ljLrln58gKOaUr+S7mOWuneWwj+eoi+W6j+WtkOe7hOS7tuS8oOWPgue7meWtkOWtkOe7hOS7tuS7jeaKpeWNlemhueaVsOaNrua1geeahOW8guW4uCzmmoLml7bkuI3pgJrov4dtZXNjcm9sbC1kb3du57uE5Lu25a6e546wKS0tPlxuXHRcdFx0PCEtLSA8bWVzY3JvbGwtZG93biA6b3B0aW9uPVwibWVzY3JvbGwub3B0RG93blwiIDp0eXBlPVwiZG93bkxvYWRUeXBlXCIgOnJhdGU9XCJkb3duUmF0ZVwiPjwvbWVzY3JvbGwtZG93bj4gLS0+XG5cdFx0XHQ8dmlldyB2LWlmPVwibWVzY3JvbGwub3B0RG93bi51c2VcIiBjbGFzcz1cIm1lc2Nyb2xsLWRvd253YXJwXCIgOnN0eWxlPVwieydiYWNrZ3JvdW5kJzptZXNjcm9sbC5vcHREb3duLmJnQ29sb3IsJ2NvbG9yJzptZXNjcm9sbC5vcHREb3duLnRleHRDb2xvcn1cIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC1jb250ZW50XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC1wcm9ncmVzcyBtZXNjcm9sbC13eHMtcHJvZ3Jlc3NcIiA6Y2xhc3M9XCJ7J21lc2Nyb2xsLXJvdGF0ZSc6IGlzRG93bkxvYWRpbmd9XCIgOnN0eWxlPVwieydib3JkZXItY29sb3InOm1lc2Nyb2xsLm9wdERvd24udGV4dENvbG9yLCAndHJhbnNmb3JtJzogZG93blJvdGF0ZX1cIj48L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkb3dud2FycC10aXBcIj57e2Rvd25UZXh0fX08L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XG5cdFx0XHQ8IS0tIOWIl+ihqOWGheWuuSAtLT5cblx0XHRcdDxzbG90Pjwvc2xvdD5cblxuXHRcdFx0PCEtLSDnqbrluIPlsYAgLS0+XG5cdFx0XHQ8bWVzY3JvbGwtZW1wdHkgdi1pZj1cImlzU2hvd0VtcHR5XCIgOm9wdGlvbj1cIm1lc2Nyb2xsLm9wdFVwLmVtcHR5XCIgQGVtcHR5Y2xpY2s9XCJlbXB0eUNsaWNrXCI+PC9tZXNjcm9sbC1lbXB0eT5cblxuXHRcdFx0PCEtLSDkuIrmi4nliqDovb3ljLrln58gKOS4i+aLieWIt+aWsOaXtuS4jeaYvuekuiwg5pSv5LuY5a6d5bCP56iL5bqP5a2Q57uE5Lu25Lyg5Y+C57uZ5a2Q5a2Q57uE5Lu25LuN5oql5Y2V6aG55pWw5o2u5rWB55qE5byC5bi4LOaaguaXtuS4jemAmui/h21lc2Nyb2xsLXVw57uE5Lu25a6e546wKS0tPlxuXHRcdFx0PCEtLSA8bWVzY3JvbGwtdXAgdi1pZj1cIm1lc2Nyb2xsLm9wdFVwLnVzZSAmJiAhaXNEb3duTG9hZGluZyAmJiB1cExvYWRUeXBlIT09M1wiIDpvcHRpb249XCJtZXNjcm9sbC5vcHRVcFwiIDp0eXBlPVwidXBMb2FkVHlwZVwiPjwvbWVzY3JvbGwtdXA+IC0tPlxuXHRcdFx0PHZpZXcgdi1pZj1cIm1lc2Nyb2xsLm9wdFVwLnVzZSAmJiAhaXNEb3duTG9hZGluZyAmJiB1cExvYWRUeXBlIT09M1wiIGNsYXNzPVwibWVzY3JvbGwtdXB3YXJwXCIgOnN0eWxlPVwieydiYWNrZ3JvdW5kJzptZXNjcm9sbC5vcHRVcC5iZ0NvbG9yLCdjb2xvcic6bWVzY3JvbGwub3B0VXAudGV4dENvbG9yfVwiPlxuXHRcdFx0XHQ8IS0tIOWKoOi9veS4rSAo5q2k5aSE5LiN6IO955Sodi1pZizlkKbliJlhbmRyb2lk5bCP56iL5bqP5b+r6YCf5LiK5ouJ5Y+v6IO95Lya5LiN5pat6Kem5Y+R5LiK5ouJ5Zue6LCDKSAtLT5cblx0XHRcdFx0PHZpZXcgdi1zaG93PVwidXBMb2FkVHlwZT09PTFcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwd2FycC1wcm9ncmVzcyBtZXNjcm9sbC1yb3RhdGVcIiA6c3R5bGU9XCJ7J2JvcmRlci1jb2xvcic6bWVzY3JvbGwub3B0VXAudGV4dENvbG9yfVwiPjwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwd2FycC10aXBcIj57eyBtZXNjcm9sbC5vcHRVcC50ZXh0TG9hZGluZyB9fTwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOaXoOaVsOaNriAtLT5cblx0XHRcdFx0PHZpZXcgdi1pZj1cInVwTG9hZFR5cGU9PT0yXCIgY2xhc3M9XCJ1cHdhcnAtbm9kYXRhXCI+e3sgbWVzY3JvbGwub3B0VXAudGV4dE5vTW9yZSB9fTwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PCEtLSDlupXpg6jmmK/lkKblgY/np7tUYWJCYXLnmoTpq5jluqYo6buY6K6k5LuF5ZyoSDXnq6/nmoR0YWLpobXnlJ/mlYgpIC0tPlxuXHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxuXHRcdDx2aWV3IHYtaWY9XCJib3R0b21iYXIgJiYgd2luZG93Qm90dG9tPjBcIiBjbGFzcz1cIm1lc2Nyb2xsLWJvdHRvbWJhclwiIDpzdHlsZT1cIntoZWlnaHQ6IHdpbmRvd0JvdHRvbSsncHgnfVwiPjwvdmlldz5cblx0XHQ8IS0tICNlbmRpZiAtLT5cblx0XHRcblx0XHQ8IS0tIOmAgumFjWlQaG9uZVggLS0+XG5cdFx0PHZpZXcgdi1pZj1cInNhZmVhcmVhXCIgY2xhc3M9XCJtZXNjcm9sbC1zYWZlYXJlYVwiPjwvdmlldz5cblx0XHRcblx0XHQ8IS0tIOWbnuWIsOmhtumDqOaMiemSriAoZml4ZWTlhYPntKDpnIDlhpnlnKh0cmFuc2Zvcm3lpJbpnaIs6Ziy5q2i6ZmN57qn5Li6YWJzb2x1dGUpLS0+XG5cdFx0PG1lc2Nyb2xsLXRvcCB2LW1vZGVsPVwiaXNTaG93VG9Ub3BcIiA6b3B0aW9uPVwibWVzY3JvbGwub3B0VXAudG9Ub3BcIiBAY2xpY2s9XCJ0b1RvcENsaWNrXCI+PC9tZXNjcm9sbC10b3A+XG5cdFx0XG5cdFx0PCEtLSAjaWZkZWYgTVAtV0VJWElOIHx8IE1QLVFRIHx8IEFQUC1QTFVTIHx8IEg1IC0tPlxuXHRcdDwhLS0gcmVuZGVyanPnmoTmlbDmja7ovb3kvZMs5LiN5Y+v5YaZ5ZyobWVzY3JvbGwtZG93bndhcnDlhoXpg6gs6YG/5YWNdXNl5Li6ZmFsc2Xml7Ys6L295L2T5Lii5aSxLOaXoOazleabtOaWsOaVsOaNriAtLT5cblx0XHQ8dmlldyA6Y2hhbmdlOnByb3A9XCJyZW5kZXJCaXoucHJvcE9ic2VydmVyXCIgOnByb3A9XCJ3eHNQcm9wXCI+PC92aWV3PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48IS0tIOW+ruS/oeWwj+eoi+W6jywgUVHlsI/nqIvluo8sIGFwcCwgaDXkvb/nlKh3eHMgLS0+XG48IS0tICNpZmRlZiBNUC1XRUlYSU4gfHwgTVAtUVEgfHwgQVBQLVBMVVMgfHwgSDUgLS0+XG48c2NyaXB0IHNyYz1cIi4vd3hzL3d4cy53eHNcIiBtb2R1bGU9XCJ3eHNCaXpcIiBsYW5nPVwid3hzXCI+PC9zY3JpcHQ+XG48IS0tICNlbmRpZiAtLT5cblxuPCEtLSBhcHAsIGg15L2/55SocmVuZGVyanMgLS0+XG48IS0tICNpZmRlZiBBUFAtUExVUyB8fCBINSAtLT5cbjxzY3JpcHQgbW9kdWxlPVwicmVuZGVyQml6XCIgbGFuZz1cInJlbmRlcmpzXCI+XG5cdGltcG9ydCByZW5kZXJCaXogZnJvbSAnLi93eHMvcmVuZGVyanMuanMnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bWl4aW5zOiBbcmVuZGVyQml6XVxuXHR9XG48L3NjcmlwdD5cbjwhLS0gI2VuZGlmIC0tPlxuXG48c2NyaXB0PlxuXHQvLyDlvJXlhaVtZXNjcm9sbC11bmkuanMs5aSE55CG5qC45b+D6YC76L6RXG5cdGltcG9ydCBNZVNjcm9sbCBmcm9tICcuL21lc2Nyb2xsLXVuaS5qcyc7XG5cdC8vIOW8leWFpeWFqOWxgOmFjee9rlxuXHRpbXBvcnQgR2xvYmFsT3B0aW9uIGZyb20gJy4vbWVzY3JvbGwtdW5pLW9wdGlvbi5qcyc7XG5cdC8vIOW8leWFpeepuuW4g+WxgOe7hOS7tlxuXHRpbXBvcnQgTWVzY3JvbGxFbXB0eSBmcm9tICcuL2NvbXBvbmVudHMvbWVzY3JvbGwtZW1wdHkudnVlJztcblx0Ly8g5byV5YWl5Zue5Yiw6aG26YOo57uE5Lu2XG5cdGltcG9ydCBNZXNjcm9sbFRvcCBmcm9tICcuL2NvbXBvbmVudHMvbWVzY3JvbGwtdG9wLnZ1ZSc7XG5cdC8vIOW8leWFpeWFvOWuuXd4cyjlkKtyZW5kZXJqcynlhpnms5XnmoRtaXhpbnNcblx0aW1wb3J0IFd4c01peGluIGZyb20gJy4vd3hzL21peGlucy5qcyc7XG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bWl4aW5zOiBbV3hzTWl4aW5dLFxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdE1lc2Nyb2xsRW1wdHksXG5cdFx0XHRNZXNjcm9sbFRvcFxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1lc2Nyb2xsOiB7b3B0RG93bjp7fSxvcHRVcDp7fX0sIC8vIG1lc2Nyb2xs5a6e5L6LXG5cdFx0XHRcdGRvd25IaWdodDogMCwgLy/kuIvmi4nliLfmlrA6IOWuueWZqOmrmOW6plxuXHRcdFx0XHRkb3duUmF0ZTogMCwgLy8g5LiL5ouJ5q+U546HKGluT2Zmc2V0OiByYXRlPDE7IG91dE9mZnNldDogcmF0ZT49MSlcblx0XHRcdFx0ZG93bkxvYWRUeXBlOiAwLCAvLyDkuIvmi4nliLfmlrDnirbmgIE6IDAobG9hZGluZ+WJjSksIDEoaW5PZmZzZXQpLCAyKG91dE9mZnNldCksIDMoc2hvd0xvYWRpbmcpLCA0KGVuZERvd25TY3JvbGwpXG5cdFx0XHRcdHVwTG9hZFR5cGU6IDAsIC8vIOS4iuaLieWKoOi9veeKtuaAge+8mjDvvIhsb2FkaW5n5YmN77yJ77yMMe+8iGxvYWRpbmfkuK3vvInvvIwy77yI5rKh5pyJ5pu05aSa5LqGLOaYvuekukVOROaWh+acrOaPkOekuu+8ie+8jDPvvIjmsqHmnInmm7TlpJrkuoYs5LiN5pi+56S6RU5E5paH5pys5o+Q56S677yJXG5cdFx0XHRcdGlzU2hvd0VtcHR5OiBmYWxzZSwgLy8g5piv5ZCm5pi+56S656m65biD5bGAXG5cdFx0XHRcdGlzU2hvd1RvVG9wOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCwgLy8g5Y+v5L2/55So56qX5Y+j55qE6auY5bqmXG5cdFx0XHRcdHdpbmRvd0JvdHRvbTogMCwgLy8g5Y+v5L2/55So56qX5Y+j55qE5bqV6YOo5L2N572uXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCAvLyDnirbmgIHmoI/pq5jluqZcblx0XHRcdH07XG5cdFx0fSxcblx0XHRwcm9wczoge1xuXHRcdFx0ZG93bjogT2JqZWN0LCAvLyDkuIvmi4nliLfmlrDnmoTlj4LmlbDphY3nva5cblx0XHRcdHVwOiBPYmplY3QsIC8vIOS4iuaLieWKoOi9veeahOWPguaVsOmFjee9rlxuXHRcdFx0dG9wOiBbU3RyaW5nLCBOdW1iZXJdLCAvLyDkuIvmi4nluIPlsYDlvoDkuIvnmoTlgY/np7vph48gKOaUr+aMgTIwLCBcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDlhbbkuK3nuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgsIOeZvuWIhuavlOWImeebuOWvueS6jndpbmRvd0hlaWdodClcblx0XHRcdHRvcGJhcjogW0Jvb2xlYW4sIFN0cmluZ10sIC8vIHRvcOeahOWBj+enu+mHj+aYr+WQpuWKoOS4iueKtuaAgeagj+mrmOW6piwg6buY6K6kZmFsc2UgKOS9v+eUqOWcuuaZrzrlj5bmtojljp/nlJ/lr7zoiKrmoI/ml7Ys6YWN572u5q2k6aG55Y+v55WZ5Ye654q25oCB5qCP55qE5Y2g5L2NLCDmlK/mjIHkvKDlhaXlrZfnrKbkuLLog4zmma8s5aaC6Imy5YC8LOiDjOaZr+WbvizmuJDlj5gpXG5cdFx0XHRib3R0b206IFtTdHJpbmcsIE51bWJlcl0sIC8vIOS4iuaLieW4g+WxgOW+gOS4iueahOWBj+enu+mHjyAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweCwg55m+5YiG5q+U5YiZ55u45a+55LqOd2luZG93SGVpZ2h0KVxuXHRcdFx0c2FmZWFyZWE6IEJvb2xlYW4sIC8vIGJvdHRvbeeahOWBj+enu+mHj+aYr+WQpuWKoOS4iuW6lemDqOWuieWFqOWMuueahOi3neemuywg6buY6K6kZmFsc2UgKOmcgOimgemAgumFjWlQaG9uZVjml7bkvb/nlKgpXG5cdFx0XHRoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sIC8vIOaMh+Wumm1lc2Nyb2xs5pyA5bCP6auY5bqmLOm7mOiupHdpbmRvd0hlaWdodCzkvb/liJfooajkuI3mu6HlsY/ku43lj6/kuIvmi4lcblx0XHRcdGJvdHRvbWJhcjp7IC8vIOW6lemDqOaYr+WQpuWBj+enu1RhYkJhcueahOmrmOW6pijpu5jorqTku4XlnKhINeerr+eahHRhYumhteeUn+aViClcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRzdGlja3k6IEJvb2xlYW4gLy8g5piv5ZCm5pSv5oyBc3RpY2t5LOm7mOiupGZhbHNlOyDlvZPlgLzphY3nva50cnVl5pe2LOmcgOmBv+WFjeWcqG1lc2Nyb2xsLWJvZHnmoIfnrb7liY3pnaLliqDpnZ7lrprkvY3nmoTlhYPntKAs5ZCm5YiZ5LiL5ouJ5Yy65Z+f5peg5rOV5Lya6ZqQ6JePXG5cdFx0fSxcblx0XHR3YXRjaDp7XG5cdFx0XHRkb3duTG9hZFR5cGUodmFsKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZWRvd25sb2RpbmcnLCB2YWwpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Ly8gbWVzY3JvbGzmnIDlsI/pq5jluqYs6buY6K6kd2luZG93SGVpZ2h0LOS9v+WIl+ihqOS4jea7oeWxj+S7jeWPr+S4i+aLiVxuXHRcdFx0bWluSGVpZ2h0KCl7XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgdGhpcy5oZWlnaHQgPT0gJ3N0cmluZycgPyB0aGlzLmhlaWdodCA6IHRoaXMudG9QeCh0aGlzLmhlaWdodCB8fCAnMTAwJScpICsgJ3B4J1xuXHRcdFx0fSxcblx0XHRcdC8vIOS4i+aLieW4g+WxgOW+gOS4i+WBj+enu+eahOi3neemuyAocHgpXG5cdFx0XHRudW1Ub3AoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy50b3ApXG5cdFx0XHR9LFxuXHRcdFx0cGFkVG9wKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1Ub3AgKyAncHgnO1xuXHRcdFx0fSxcblx0XHRcdC8vIOS4iuaLieW4g+WxgOW+gOS4iuWBj+enuyAocHgpXG5cdFx0XHRudW1Cb3R0b20oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvUHgodGhpcy5ib3R0b20pO1xuXHRcdFx0fSxcblx0XHRcdHBhZEJvdHRvbSgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtQm90dG9tICsgJ3B4Jztcblx0XHRcdH0sXG5cdFx0XHQvLyDmmK/lkKbkuLrph43nva7kuIvmi4nnmoTnirbmgIFcblx0XHRcdGlzRG93blJlc2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kb3duTG9hZFR5cGUgPT09IDMgfHwgdGhpcy5kb3duTG9hZFR5cGUgPT09IDQ7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g6L+H5rihXG5cdFx0XHR0cmFuc2l0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5pc0Rvd25SZXNldCA/ICd0cmFuc2Zvcm0gMzAwbXMnIDogJyc7XG5cdFx0XHR9LFxuXHRcdFx0dHJhbnNsYXRlWSgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG93bkhpZ2h0ID4gMCA/ICd0cmFuc2xhdGVZKCcgKyB0aGlzLmRvd25IaWdodCArICdweCknIDogJyc7IC8vIHRyYW5zZm9ybeS8muS9v2ZpeGVk5aSx5pWILOmcgOazqOaEj+aKimZpeGVk5YWD57Sg5YaZ5ZyobWVzY3JvbGzkuYvlpJZcblx0XHRcdH0sXG5cdFx0XHQvLyDmmK/lkKblnKjliqDovb3kuK1cblx0XHRcdGlzRG93bkxvYWRpbmcoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZG93bkxvYWRUeXBlID09PSAzXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5peL6L2s55qE6KeS5bqmXG5cdFx0XHRkb3duUm90YXRlKCl7XG5cdFx0XHRcdHJldHVybiAncm90YXRlKCcgKyAzNjAgKiB0aGlzLmRvd25SYXRlICsgJ2RlZyknXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5paH5pys5o+Q56S6XG5cdFx0XHRkb3duVGV4dCgpe1xuXHRcdFx0XHRpZighdGhpcy5tZXNjcm9sbCkgcmV0dXJuIFwiXCI7IC8vIOmBv+WFjeWktOadoeWwj+eoi+W6j+WIneWni+WMluaXtuaKpemUmVxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuZG93bkxvYWRUeXBlKXtcblx0XHRcdFx0XHRjYXNlIDE6IHJldHVybiB0aGlzLm1lc2Nyb2xsLm9wdERvd24udGV4dEluT2Zmc2V0O1xuXHRcdFx0XHRcdGNhc2UgMjogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0T3V0T2Zmc2V0O1xuXHRcdFx0XHRcdGNhc2UgMzogcmV0dXJuIHRoaXMubWVzY3JvbGwub3B0RG93bi50ZXh0TG9hZGluZztcblx0XHRcdFx0XHRjYXNlIDQ6IHJldHVybiB0aGlzLm1lc2Nyb2xsLmlzRG93bkVuZFN1Y2Nlc3MgPyB0aGlzLm1lc2Nyb2xsLm9wdERvd24udGV4dFN1Y2Nlc3MgOiB0aGlzLm1lc2Nyb2xsLmlzRG93bkVuZFN1Y2Nlc3M9PWZhbHNlID8gdGhpcy5tZXNjcm9sbC5vcHREb3duLnRleHRFcnIgOiB0aGlzLm1lc2Nyb2xsLm9wdERvd24udGV4dEluT2Zmc2V0O1xuXHRcdFx0XHRcdGRlZmF1bHQ6IHJldHVybiB0aGlzLm1lc2Nyb2xsLm9wdERvd24udGV4dEluT2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvL251bWJlcixycHgsdXB4LHB4LCUgLS0+IHB455qE5pWw5YC8XG5cdFx0XHR0b1B4KG51bSkge1xuXHRcdFx0XHRpZiAodHlwZW9mIG51bSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRpZiAobnVtLmluZGV4T2YoJ3B4JykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAobnVtLmluZGV4T2YoJ3JweCcpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHQvLyBcIjEwcnB4XCJcblx0XHRcdFx0XHRcdFx0bnVtID0gbnVtLnJlcGxhY2UoJ3JweCcsICcnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobnVtLmluZGV4T2YoJ3VweCcpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0XHQvLyBcIjEwdXB4XCJcblx0XHRcdFx0XHRcdFx0bnVtID0gbnVtLnJlcGxhY2UoJ3VweCcsICcnKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFwiMTBweFwiXG5cdFx0XHRcdFx0XHRcdHJldHVybiBOdW1iZXIobnVtLnJlcGxhY2UoJ3B4JywgJycpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKG51bS5pbmRleE9mKCclJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHQvLyDkvKDnmb7liIbmr5Qs5YiZ55u45a+55LqOd2luZG93SGVpZ2h0LOS8oFwiMTAlXCLliJnnrYnkuo53aW5kb3dIZWlnaHTnmoQxMCVcblx0XHRcdFx0XHRcdGxldCByYXRlID0gTnVtYmVyKG51bS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLndpbmRvd0hlaWdodCAqIHJhdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudW0gPyB1bmkudXB4MnB4KE51bWJlcihudW0pKSA6IDA7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g54K55Ye756m65biD5bGA55qE5oyJ6ZKu5Zue6LCDXG5cdFx0XHRlbXB0eUNsaWNrKCkge1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdlbXB0eWNsaWNrJywgdGhpcy5tZXNjcm9sbCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g54K55Ye75Zue5Yiw6aG26YOo55qE5oyJ6ZKu5Zue6LCDXG5cdFx0XHR0b1RvcENsaWNrKCkge1xuXHRcdFx0XHR0aGlzLm1lc2Nyb2xsLnNjcm9sbFRvKDAsIHRoaXMubWVzY3JvbGwub3B0VXAudG9Ub3AuZHVyYXRpb24pOyAvLyDmiafooYzlm57liLDpobbpg6hcblx0XHRcdFx0dGhpcy4kZW1pdCgndG9wY2xpY2snLCB0aGlzLm1lc2Nyb2xsKTsgLy8g5rS+5Y+R54K55Ye75Zue5Yiw6aG26YOo5oyJ6ZKu55qE5Zue6LCDXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDkvb/nlKhjcmVhdGVk5Yid5aeL5YyWbWVzY3JvbGzlr7nosaE7IOWmguaenOeUqG1vdW50ZWTpg6jliIZjc3PmoLflvI/nvJbor5HliLBINeS8muWkseaViFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRsZXQgdm0gPSB0aGlzO1xuXG5cdFx0XHRsZXQgZGl5T3B0aW9uID0ge1xuXHRcdFx0XHQvLyDkuIvmi4nliLfmlrDnmoTphY3nva5cblx0XHRcdFx0ZG93bjoge1xuXHRcdFx0XHRcdGluT2Zmc2V0KCkge1xuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gMTsgLy8g5LiL5ouJ55qE6Led56a76L+b5YWlb2Zmc2V06IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvdXRPZmZzZXQoKSB7XG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSAyOyAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTpgqPkuIDliLvnmoTlm57osIMgKOiHquWumuS5iW1lc2Nyb2xs57uE5Lu25pe2LOatpOihjOS4jeWPr+WIoClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uTW92aW5nKG1lc2Nyb2xsLCByYXRlLCBkb3duSGlnaHQpIHtcblx0XHRcdFx0XHRcdC8vIOS4i+aLiei/h+eoi+S4reeahOWbnuiwgyzmu5Hliqjov4fnqIvkuIDnm7TlnKjmiafooYw7XG5cdFx0XHRcdFx0XHR2bS5kb3duSGlnaHQgPSBkb3duSGlnaHQ7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxuXHRcdFx0XHRcdFx0dm0uZG93blJhdGUgPSByYXRlOyAvL+S4i+aLieavlOeOhyAoaW5PZmZzZXQ6IHJhdGU8MTsgb3V0T2Zmc2V0OiByYXRlPj0xKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c2hvd0xvYWRpbmcobWVzY3JvbGwsIGRvd25IaWdodCkge1xuXHRcdFx0XHRcdFx0dm0uZG93bkxvYWRUeXBlID0gMzsgLy8g5pi+56S65LiL5ouJ5Yi35paw6L+b5bqm55qE5Zue6LCDICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXG5cdFx0XHRcdFx0XHR2bS5kb3duSGlnaHQgPSBkb3duSGlnaHQ7IC8vIOiuvue9ruS4i+aLieWMuuWfn+eahOmrmOW6piAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YmVmb3JlRW5kRG93blNjcm9sbChtZXNjcm9sbCl7XG5cdFx0XHRcdFx0XHR2bS5kb3duTG9hZFR5cGUgPSA0OyBcblx0XHRcdFx0XHRcdHJldHVybiBtZXNjcm9sbC5vcHREb3duLmJlZm9yZUVuZERlbGF5IC8vIOW7tuaXtue7k+adn+eahOaXtumVv1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZW5kRG93blNjcm9sbCgpIHtcblx0XHRcdFx0XHRcdHZtLmRvd25Mb2FkVHlwZSA9IDQ7IC8vIOe7k+adn+S4i+aLiSAo6Ieq5a6a5LmJbWVzY3JvbGznu4Tku7bml7Ys5q2k6KGM5LiN5Y+v5YigKVxuXHRcdFx0XHRcdFx0dm0uZG93bkhpZ2h0ID0gMDsgLy8g6K6+572u5LiL5ouJ5Yy65Z+f55qE6auY5bqmICjoh6rlrprkuYltZXNjcm9sbOe7hOS7tuaXtizmraTooYzkuI3lj6/liKApXG5cdFx0XHRcdFx0XHRpZih2bS5kb3duUmVzZXRUaW1lcikge2NsZWFyVGltZW91dCh2bS5kb3duUmVzZXRUaW1lcik7IHZtLmRvd25SZXNldFRpbWVyID0gbnVsbH0gLy8g56e76Zmk6YeN572u5YCS6K6h5pe2XG5cdFx0XHRcdFx0XHR2bS5kb3duUmVzZXRUaW1lciA9IHNldFRpbWVvdXQoKCk9PnsgLy8g6L+H5rih5Yqo55S75omn6KGM5a6M5q+V5ZCOLOmcgOmHjee9ruS4ujDnmoTnirbmgIEs6YG/5YWN5LiL5qyhaW5PZmZzZXTkuI3lj4rml7bmmL7npLp0ZXh0SW5PZmZzZXRcblx0XHRcdFx0XHRcdFx0aWYodm0uZG93bkxvYWRUeXBlID09PSA0KSB2bS5kb3duTG9hZFR5cGUgPSAwXG5cdFx0XHRcdFx0XHR9LDMwMClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdC8vIOa0vuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xuXHRcdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbihtZXNjcm9sbCkge1xuXHRcdFx0XHRcdFx0dm0uJGVtaXQoJ2Rvd24nLCBtZXNjcm9sbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyDkuIrmi4nliqDovb3nmoTphY3nva5cblx0XHRcdFx0dXA6IHtcblx0XHRcdFx0XHQvLyDmmL7npLrliqDovb3kuK3nmoTlm57osINcblx0XHRcdFx0XHRzaG93TG9hZGluZygpIHtcblx0XHRcdFx0XHRcdHZtLnVwTG9hZFR5cGUgPSAxO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Ly8g5pi+56S65peg5pu05aSa5pWw5o2u55qE5Zue6LCDXG5cdFx0XHRcdFx0c2hvd05vTW9yZSgpIHtcblx0XHRcdFx0XHRcdHZtLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZtLnVwTG9hZFR5cGUgPSAyO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdC8vIOmakOiXj+S4iuaLieWKoOi9veeahOWbnuiwg1xuXHRcdFx0XHRcdGhpZGVVcFNjcm9sbChtZXNjcm9sbCkge1xuXHRcdFx0XHRcdFx0dm0udXBMb2FkVHlwZSA9IG1lc2Nyb2xsLm9wdFVwLmhhc05leHQgPyAwIDogMztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdC8vIOepuuW4g+WxgFxuXHRcdFx0XHRcdGVtcHR5OiB7XG5cdFx0XHRcdFx0XHRvblNob3coaXNTaG93KSB7XG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuumakOiXj+eahOWbnuiwg1xuXHRcdFx0XHRcdFx0XHR2bS5pc1Nob3dFbXB0eSA9IGlzU2hvdztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdC8vIOWbnuWIsOmhtumDqFxuXHRcdFx0XHRcdHRvVG9wOiB7XG5cdFx0XHRcdFx0XHRvblNob3coaXNTaG93KSB7XG5cdFx0XHRcdFx0XHRcdC8vIOaYvuekuumakOiXj+eahOWbnuiwg1xuXHRcdFx0XHRcdFx0XHR2bS5pc1Nob3dUb1RvcCA9IGlzU2hvdztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdC8vIOa0vuWPkeS4iuaLieWKoOi9veeahOWbnuiwg1xuXHRcdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbihtZXNjcm9sbCkge1xuXHRcdFx0XHRcdFx0dm0uJGVtaXQoJ3VwJywgbWVzY3JvbGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0TWVTY3JvbGwuZXh0ZW5kKGRpeU9wdGlvbiwgR2xvYmFsT3B0aW9uKTsgLy8g5re35YWl5YWo5bGA55qE6YWN572uXG5cdFx0XHRsZXQgbXlPcHRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtkb3duOiB2bS5kb3duLHVwOiB2bS51cH0pKTsgLy8g5rex5ou36LSdLOmBv+WFjeWvuXByb3Bz55qE5b2x5ZONXG5cdFx0XHRNZVNjcm9sbC5leHRlbmQobXlPcHRpb24sIGRpeU9wdGlvbik7IC8vIOa3t+WFpeWFt+S9k+eVjOmdoueahOmFjee9rlxuXG5cdFx0XHQvLyDliJ3lp4vljJZNZVNjcm9sbOWvueixoVxuXHRcdFx0dm0ubWVzY3JvbGwgPSBuZXcgTWVTY3JvbGwobXlPcHRpb24sIHRydWUpOyAvLyDkvKDlhaV0cnVlLOagh+iusGJvZHnkuLrmu5rliqjljLrln59cblx0XHRcdC8vIGluaXTlm57osINtZXNjcm9sbOWvueixoVxuXHRcdFx0dm0uJGVtaXQoJ2luaXQnLCB2bS5tZXNjcm9sbCk7XG5cdFx0XHRcblx0XHRcdC8vIOiuvue9rumrmOW6plxuXHRcdFx0Y29uc3Qgc3lzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdFx0XHRpZiAoc3lzLndpbmRvd0hlaWdodCkgdm0ud2luZG93SGVpZ2h0ID0gc3lzLndpbmRvd0hlaWdodDtcblx0XHRcdGlmIChzeXMud2luZG93Qm90dG9tKSB2bS53aW5kb3dCb3R0b20gPSBzeXMud2luZG93Qm90dG9tO1xuXHRcdFx0aWYgKHN5cy5zdGF0dXNCYXJIZWlnaHQpIHZtLnN0YXR1c0JhckhlaWdodCA9IHN5cy5zdGF0dXNCYXJIZWlnaHQ7XG5cdFx0XHQvLyDkvb9kb3du55qEYm90dG9tT2Zmc2V055Sf5pWIXG5cdFx0XHR2bS5tZXNjcm9sbC5zZXRCb2R5SGVpZ2h0KHN5cy53aW5kb3dIZWlnaHQpO1xuXG5cdFx0XHQvLyDlm6DkuLrkvb/nlKjnmoTmmK9wYWdl55qEc2Nyb2xsLOi/memHjOmcgOiHquWumuS5iXNjcm9sbFRvXG5cdFx0XHR2bS5tZXNjcm9sbC5yZXNldFNjcm9sbFRvKCh5LCB0KSA9PiB7XG5cdFx0XHRcdGlmKHR5cGVvZiB5ID09PSAnc3RyaW5nJyl7XG5cdFx0XHRcdFx0Ly8g5rua5Yqo5Yiw5oyH5a6admlldyAoeeS4umNzc+mAieaLqeWZqClcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57IC8vIOW7tuaXtuehruS/nXZpZXflt7LmuLLmn5M7IOS4jeS9v+eUqCRuZXh0VGlja1xuXHRcdFx0XHRcdFx0bGV0IHNlbGVjdG9yO1xuXHRcdFx0XHRcdFx0aWYoeS5pbmRleE9mKCcjJyk9PS0xICYmIHkuaW5kZXhPZignLicpPT0tMSl7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdG9yID0gJyMnK3kgLy8g5LiN5bimI+WSjC4g5YiZ6buY6K6k5Li6aWTpgInmi6nlmahcblx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RvciA9IHlcblx0XHRcdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTIHx8IEg1IHx8IE1QLUFMSVBBWSB8fCBNUC1ESU5HVEFMS1xuXHRcdFx0XHRcdFx0XHRpZih5LmluZGV4T2YoJz4+PicpIT0tMSl7IC8vIOS4jeaUr+aMgei3qOiHquWumuS5iee7hOS7tueahOWQjuS7o+mAieaLqeWZqCAo6L2s5Li65pmu6YCa55qE6YCJ5oup5Zmo5Y2z5Y+v6Leo57uE5Lu25p+l6K+iKVxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdG9yID0geS5zcGxpdCgnPj4+JylbMV0udHJpbSgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdChzZWxlY3RvcikuYm91bmRpbmdDbGllbnRSZWN0KGZ1bmN0aW9uKHJlY3Qpe1xuXHRcdFx0XHRcdFx0XHRpZiAocmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGxldCB0b3AgPSByZWN0LnRvcFxuXHRcdFx0XHRcdFx0XHRcdHRvcCArPSB2bS5tZXNjcm9sbC5nZXRTY3JvbGxUb3AoKVxuXHRcdFx0XHRcdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8oe1xuXHRcdFx0XHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiB0b3AsXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogdFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKHNlbGVjdG9yICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KS5leGVjKClcblx0XHRcdFx0XHR9LDMwKVxuXHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0Ly8g5rua5Yqo5Yiw5oyH5a6a5L2N572uICh55b+F6aG75Li65pWw5a2XKVxuXHRcdFx0XHRcdHVuaS5wYWdlU2Nyb2xsVG8oe1xuXHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiB5LFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IHRcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8g5YW35L2T55qE55WM6Z2i5aaC5p6c5LiN6YWN572udXAudG9Ub3Auc2FmZWFyZWEs5YiZ5Y+W5pysdnVl55qEc2FmZWFyZWHlgLxcblx0XHRcdGlmICh2bS51cCAmJiB2bS51cC50b1RvcCAmJiB2bS51cC50b1RvcC5zYWZlYXJlYSAhPSBudWxsKSB7fSBlbHNlIHtcblx0XHRcdFx0dm0ubWVzY3JvbGwub3B0VXAudG9Ub3Auc2FmZWFyZWEgPSB2bS5zYWZlYXJlYTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRAaW1wb3J0IFwiLi9tZXNjcm9sbC1ib2R5LmNzc1wiO1xuXHRAaW1wb3J0IFwiLi9jb21wb25lbnRzL21lc2Nyb2xsLWRvd24uY3NzXCI7XG5cdEBpbXBvcnQgJy4vY29tcG9uZW50cy9tZXNjcm9sbC11cC5jc3MnO1xuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!********************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-uni.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = MeScroll;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n/* mescroll\n * version 1.3.3\n * 2020-09-15 wenju\n * https://www.mescroll.com\n */\n\nfunction MeScroll(options, isScrollBody) {\n  var me = this;\n  me.version = '1.3.3'; // mescroll版本号\n  me.options = options || {}; // 配置\n  me.isScrollBody = isScrollBody || false; // 滚动区域是否为原生页面滚动; 默认为scroll-view\n\n  me.isDownScrolling = false; // 是否在执行下拉刷新的回调\n  me.isUpScrolling = false; // 是否在执行上拉加载的回调\n  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback\n\n  // 初始化下拉刷新\n  me.initDownScroll();\n  // 初始化上拉加载,则初始化\n  me.initUpScroll();\n\n  // 自动加载\n  setTimeout(function () {\n    // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)\n    if ((me.optDown.use || me.optDown.native) && me.optDown.auto && hasDownCallback) {\n      if (me.optDown.autoShowLoading) {\n        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调\n      } else {\n        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调\n      }\n    }\n    // 自动触发上拉加载\n    if (!me.isUpAutoLoad) {\n      // 部分小程序(头条小程序)emit是异步, 会导致isUpAutoLoad判断有误, 先延时确保先执行down的callback,再执行up的callback\n      setTimeout(function () {\n        me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();\n      }, 100);\n    }\n  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行\n}\n\n/* 配置参数:下拉刷新 */\nMeScroll.prototype.extendDownScroll = function (optDown) {\n  // 下拉刷新的配置\n  MeScroll.extend(optDown, {\n    use: true,\n    // 是否启用下拉刷新; 默认true\n    auto: true,\n    // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true\n    native: false,\n    // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)\n    autoShowLoading: false,\n    // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false\n    isLock: false,\n    // 是否锁定下拉刷新,默认false;\n    offset: 80,\n    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调\n    startTop: 100,\n    // scroll-view快速滚动到顶部时,此时的scroll-top可能大于0, 此值用于控制最大的误差\n    inOffsetRate: 1,\n    // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉\n    outOffsetRate: 0.2,\n    // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉\n    bottomOffset: 20,\n    // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行\n    minAngle: 45,\n    // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;\n    textInOffset: '下拉刷新',\n    // 下拉的距离在offset范围内的提示文本\n    textOutOffset: '释放更新',\n    // 下拉的距离大于offset范围的提示文本\n    textLoading: '加载中 ...',\n    // 加载中的提示文本\n    textSuccess: '加载成功',\n    // 加载成功的文本\n    textErr: '加载失败',\n    // 加载失败的文本\n    beforeEndDelay: 100,\n    // 延时结束的时长 (显示加载成功/失败的时长)\n    bgColor: \"transparent\",\n    // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)\n    textColor: \"gray\",\n    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)\n    inited: null,\n    // 下拉刷新初始化完毕的回调\n    inOffset: null,\n    // 下拉的距离进入offset范围内那一刻的回调\n    outOffset: null,\n    // 下拉的距离大于offset那一刻的回调\n    onMoving: null,\n    // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度\n    beforeLoading: null,\n    // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】\n    showLoading: null,\n    // 显示下拉刷新进度的回调\n    afterLoading: null,\n    // 显示下拉刷新进度的回调之后,马上要执行的代码 (如: 在wxs中使用)\n    beforeEndDownScroll: null,\n    // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】\n    endDownScroll: null,\n    // 结束下拉刷新的回调\n    afterEndDownScroll: null,\n    // 结束下拉刷新的回调,马上要执行的代码 (如: 在wxs中使用)\n    callback: function callback(mescroll) {\n      // 下拉刷新的回调;默认重置上拉加载列表为第一页\n      mescroll.resetUpScroll();\n    }\n  });\n};\n\n/* 配置参数:上拉加载 */\nMeScroll.prototype.extendUpScroll = function (optUp) {\n  // 上拉加载的配置\n  MeScroll.extend(optUp, {\n    use: true,\n    // 是否启用上拉加载; 默认true\n    auto: true,\n    // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true\n    isLock: false,\n    // 是否锁定上拉加载,默认false;\n    isBoth: true,\n    // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;\n    callback: null,\n    // 上拉加载的回调;function(page,mescroll){ }\n    page: {\n      num: 0,\n      // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始\n      size: 10,\n      // 每页数据的数量\n      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;\n    },\n\n    noMoreSize: 4,\n    // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看\n    offset: 150,\n    // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )\n    textLoading: '加载中 ...',\n    // 加载中的提示文本\n    textNoMore: '-- END --',\n    // 没有更多数据的提示文本\n    bgColor: \"transparent\",\n    // 背景颜色 (建议在pages.json中再设置一下backgroundColorBottom)\n    textColor: \"gray\",\n    // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)\n    inited: null,\n    // 初始化完毕的回调\n    showLoading: null,\n    // 显示加载中的回调\n    showNoMore: null,\n    // 显示无更多数据的回调\n    hideUpScroll: null,\n    // 隐藏上拉加载的回调\n    errDistance: 60,\n    // endErr的时候需往上滑动一段距离,使其往下滑动时再次触发onReachBottom,仅mescroll-body生效\n    toTop: {\n      // 回到顶部按钮,需配置src才显示\n      src: null,\n      // 图片路径,默认null (绝对路径或网络图)\n      offset: 1000,\n      // 列表滚动多少距离才显示回到顶部按钮,默认1000\n      duration: 300,\n      // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)\n      btnClick: null,\n      // 点击按钮的回调\n      onShow: null,\n      // 是否显示的回调\n      zIndex: 9990,\n      // fixed定位z-index值\n      left: null,\n      // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      right: 20,\n      // 到右边的距离, 默认20 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      bottom: 120,\n      // 到底部的距离, 默认120 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      safearea: false,\n      // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取本vue的safearea值)\n      width: 72,\n      // 回到顶部图标的宽度, 默认72 (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n      radius: \"50%\" // 圆角, 默认\"50%\" (支持20, \"20rpx\", \"20px\", \"20%\"格式的值, 其中纯数字则默认单位rpx)\n    },\n\n    empty: {\n      use: true,\n      // 是否显示空布局\n      icon: null,\n      // 图标路径\n      tip: '~ 暂无相关数据 ~',\n      // 提示\n      btnText: '',\n      // 按钮\n      btnClick: null,\n      // 点击按钮的回调\n      onShow: null,\n      // 是否显示的回调\n      fixed: false,\n      // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)\n      top: \"100rpx\",\n      // fixed定位的top值 (完整的单位值,如 \"10%\"; \"100rpx\")\n      zIndex: 99 // fixed定位z-index值\n    },\n\n    onScroll: false // 是否监听滚动事件\n  });\n};\n\n/* 配置参数 */\nMeScroll.extend = function (userOption, defaultOption) {\n  if (!userOption) return defaultOption;\n  for (var key in defaultOption) {\n    if (userOption[key] == null) {\n      var def = defaultOption[key];\n      if (def != null && (0, _typeof2.default)(def) === 'object') {\n        userOption[key] = MeScroll.extend({}, def); // 深度匹配\n      } else {\n        userOption[key] = def;\n      }\n    } else if ((0, _typeof2.default)(userOption[key]) === 'object') {\n      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配\n    }\n  }\n\n  return userOption;\n};\n\n/* 简单判断是否配置了颜色 (非透明,非白色) */\nMeScroll.prototype.hasColor = function (color) {\n  if (!color) return false;\n  var c = color.toLowerCase();\n  return c != \"#fff\" && c != \"#ffffff\" && c != \"transparent\" && c != \"white\";\n};\n\n/* -------初始化下拉刷新------- */\nMeScroll.prototype.initDownScroll = function () {\n  var me = this;\n  // 配置参数\n  me.optDown = me.options.down || {};\n  if (!me.optDown.textColor && me.hasColor(me.optDown.bgColor)) me.optDown.textColor = \"#fff\"; // 当bgColor有值且textColor未设置,则textColor默认白色\n  me.extendDownScroll(me.optDown);\n\n  // 如果是mescroll-body且配置了native,则禁止自定义的下拉刷新\n  if (me.isScrollBody && me.optDown.native) {\n    me.optDown.use = false;\n  } else {\n    me.optDown.native = false; // 仅mescroll-body支持,mescroll-uni不支持\n  }\n\n  me.downHight = 0; // 下拉区域的高度\n\n  // 在页面中加入下拉布局\n  if (me.optDown.use && me.optDown.inited) {\n    // 初始化完毕的回调\n    setTimeout(function () {\n      // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n      me.optDown.inited(me);\n    }, 0);\n  }\n};\n\n/* 列表touchstart事件 */\nMeScroll.prototype.touchstartEvent = function (e) {\n  if (!this.optDown.use) return;\n  this.startPoint = this.getPoint(e); // 记录起点\n  this.startTop = this.getScrollTop(); // 记录此时的滚动条位置\n  this.startAngle = 0; // 初始角度\n  this.lastPoint = this.startPoint; // 重置上次move的点\n  this.maxTouchmoveY = this.getBodyHeight() - this.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)\n  this.inTouchend = false; // 标记不是touchend\n};\n\n/* 列表touchmove事件 */\nMeScroll.prototype.touchmoveEvent = function (e) {\n  if (!this.optDown.use) return;\n  var me = this;\n  var scrollTop = me.getScrollTop(); // 当前滚动条的距离\n  var curPoint = me.getPoint(e); // 当前点\n\n  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n\n  // 向下拉 && 在顶部\n  // mescroll-body,直接判定在顶部即可\n  // scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove\n  // scroll-view滚动到顶部时,scrollTop不一定为0,也有可能大于0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等\n  if (moveY > 0 && (me.isScrollBody && scrollTop <= 0 || !me.isScrollBody && (scrollTop <= 0 || scrollTop <= me.optDown.startTop && scrollTop === me.startTop))) {\n    // 可下拉的条件\n    if (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling && me.optUp.isBoth)) {\n      // 下拉的初始角度是否在配置的范围内\n      if (!me.startAngle) me.startAngle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]\n      if (me.startAngle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新\n\n      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发\n      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {\n        me.inTouchend = true; // 标记执行touchend\n        me.touchendEvent(); // 提前触发touchend\n        return;\n      }\n      me.preventDefault(e); // 阻止默认事件\n\n      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)\n\n      // 下拉距离  < 指定距离\n      if (me.downHight < me.optDown.offset) {\n        if (me.movetype !== 1) {\n          me.movetype = 1; // 加入标记,保证只执行一次\n          me.isDownEndSuccess = null; // 重置是否加载成功的状态 (wxs执行的是wxs.wxs)\n          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次\n          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n        }\n\n        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小\n\n        // 指定距离  <= 下拉距离\n      } else {\n        if (me.movetype !== 2) {\n          me.movetype = 2; // 加入标记,保证只执行一次\n          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次\n          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n        }\n\n        if (diff > 0) {\n          // 向下拉\n          me.downHight += diff * me.optDown.outOffsetRate; // 越往下,高度变化越小\n        } else {\n          // 向上收\n          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度\n        }\n      }\n\n      me.downHight = Math.round(me.downHight); // 取整\n      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值\n      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行\n    }\n  }\n\n  me.lastPoint = curPoint; // 记录本次移动的点\n};\n\n/* 列表touchend事件 */\nMeScroll.prototype.touchendEvent = function (e) {\n  if (!this.optDown.use) return;\n  // 如果下拉区域高度已改变,则需重置回来\n  if (this.isMoveDown) {\n    if (this.downHight >= this.optDown.offset) {\n      // 符合触发刷新的条件\n      this.triggerDownScroll();\n    } else {\n      // 不符合的话 则重置\n      this.downHight = 0;\n      this.endDownScrollCall(this);\n    }\n    this.movetype = 0;\n    this.isMoveDown = false;\n  } else if (!this.isScrollBody && this.getScrollTop() === this.startTop) {\n    // scroll-view到顶/左/右/底的滑动事件\n    var isScrollUp = this.getPoint(e).y - this.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n    // 上滑\n    if (isScrollUp) {\n      // 需检查滑动的角度\n      var angle = this.getAngle(this.getPoint(e), this.startPoint); // 两点之间的角度,区间 [0,90]\n      if (angle > 80) {\n        // 检查并触发上拉\n        this.triggerUpScroll(true);\n      }\n    }\n  }\n};\n\n/* 根据点击滑动事件获取第一个手指的坐标 */\nMeScroll.prototype.getPoint = function (e) {\n  if (!e) {\n    return {\n      x: 0,\n      y: 0\n    };\n  }\n  if (e.touches && e.touches[0]) {\n    return {\n      x: e.touches[0].pageX,\n      y: e.touches[0].pageY\n    };\n  } else if (e.changedTouches && e.changedTouches[0]) {\n    return {\n      x: e.changedTouches[0].pageX,\n      y: e.changedTouches[0].pageY\n    };\n  } else {\n    return {\n      x: e.clientX,\n      y: e.clientY\n    };\n  }\n};\n\n/* 计算两点之间的角度: 区间 [0,90]*/\nMeScroll.prototype.getAngle = function (p1, p2) {\n  var x = Math.abs(p1.x - p2.x);\n  var y = Math.abs(p1.y - p2.y);\n  var z = Math.sqrt(x * x + y * y);\n  var angle = 0;\n  if (z !== 0) {\n    angle = Math.asin(y / z) / Math.PI * 180;\n  }\n  return angle;\n};\n\n/* 触发下拉刷新 */\nMeScroll.prototype.triggerDownScroll = function () {\n  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {\n    //return true则处于完全自定义状态\n  } else {\n    this.showDownScroll(); // 下拉刷新中...\n    !this.optDown.native && this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据\n  }\n};\n\n/* 显示下拉进度布局 */\nMeScroll.prototype.showDownScroll = function () {\n  this.isDownScrolling = true; // 标记下拉中\n  if (this.optDown.native) {\n    uni.startPullDownRefresh(); // 系统自带的下拉刷新\n    this.showDownLoadingCall(0); // 仍触发showLoading,因为上拉加载用到\n  } else {\n    this.downHight = this.optDown.offset; // 更新下拉区域高度\n    this.showDownLoadingCall(this.downHight); // 下拉刷新中...\n  }\n};\n\nMeScroll.prototype.showDownLoadingCall = function (downHight) {\n  this.optDown.showLoading && this.optDown.showLoading(this, downHight); // 下拉刷新中...\n  this.optDown.afterLoading && this.optDown.afterLoading(this, downHight); // 下拉刷新中...触发之后马上要执行的代码\n};\n\n/* 显示系统自带的下拉刷新时需要处理的业务 */\nMeScroll.prototype.onPullDownRefresh = function () {\n  this.isDownScrolling = true; // 标记下拉中\n  this.showDownLoadingCall(0); // 仍触发showLoading,因为上拉加载用到\n  this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据\n};\n\n/* 结束下拉刷新 */\nMeScroll.prototype.endDownScroll = function () {\n  if (this.optDown.native) {\n    // 结束原生下拉刷新\n    this.isDownScrolling = false;\n    this.endDownScrollCall(this);\n    uni.stopPullDownRefresh();\n    return;\n  }\n  var me = this;\n  // 结束下拉刷新的方法\n  var endScroll = function endScroll() {\n    me.downHight = 0;\n    me.isDownScrolling = false;\n    me.endDownScrollCall(me);\n    if (!me.isScrollBody) {\n      me.setScrollHeight(0); // scroll-view重置滚动区域,使数据不满屏时仍可检查触发翻页\n      me.scrollTo(0, 0); // scroll-view需重置滚动条到顶部,避免startTop大于0时,对下拉刷新的影响\n    }\n  };\n  // 结束下拉刷新时的回调\n  var delay = 0;\n  if (me.optDown.beforeEndDownScroll) {\n    delay = me.optDown.beforeEndDownScroll(me); // 结束下拉刷新的延时,单位ms\n    if (me.isDownEndSuccess == null) delay = 0; // 没有执行加载中,则不延时\n  }\n\n  if (typeof delay === 'number' && delay > 0) {\n    setTimeout(endScroll, delay);\n  } else {\n    endScroll();\n  }\n};\nMeScroll.prototype.endDownScrollCall = function () {\n  this.optDown.endDownScroll && this.optDown.endDownScroll(this);\n  this.optDown.afterEndDownScroll && this.optDown.afterEndDownScroll(this);\n};\n\n/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */\nMeScroll.prototype.lockDownScroll = function (isLock) {\n  if (isLock == null) isLock = true;\n  this.optDown.isLock = isLock;\n};\n\n/* 锁定上拉加载:isLock=ture,null锁定;isLock=false解锁 */\nMeScroll.prototype.lockUpScroll = function (isLock) {\n  if (isLock == null) isLock = true;\n  this.optUp.isLock = isLock;\n};\n\n/* -------初始化上拉加载------- */\nMeScroll.prototype.initUpScroll = function () {\n  var me = this;\n  // 配置参数\n  me.optUp = me.options.up || {\n    use: false\n  };\n  if (!me.optUp.textColor && me.hasColor(me.optUp.bgColor)) me.optUp.textColor = \"#fff\"; // 当bgColor有值且textColor未设置,则textColor默认白色\n  me.extendUpScroll(me.optUp);\n  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局\n  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页\n  me.startNum = me.optUp.page.num + 1; // 记录page开始的页码\n\n  // 初始化完毕的回调\n  if (me.optUp.inited) {\n    setTimeout(function () {\n      // 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例\n      me.optUp.inited(me);\n    }, 0);\n  }\n};\n\n/*滚动到底部的事件 (仅mescroll-body生效)*/\nMeScroll.prototype.onReachBottom = function () {\n  if (this.isScrollBody && !this.isUpScrolling) {\n    // 只能支持下拉刷新的时候同时可以触发上拉加载,否则滚动到底部就需要上滑一点才能触发onReachBottom\n    if (!this.optUp.isLock && this.optUp.hasNext) {\n      this.triggerUpScroll();\n    }\n  }\n};\n\n/*列表滚动事件 (仅mescroll-body生效)*/\nMeScroll.prototype.onPageScroll = function (e) {\n  if (!this.isScrollBody) return;\n\n  // 更新滚动条的位置 (主要用于判断下拉刷新时,滚动条是否在顶部)\n  this.setScrollTop(e.scrollTop);\n\n  // 顶部按钮的显示隐藏\n  if (e.scrollTop >= this.optUp.toTop.offset) {\n    this.showTopBtn();\n  } else {\n    this.hideTopBtn();\n  }\n};\n\n/*列表滚动事件*/\nMeScroll.prototype.scroll = function (e, onScroll) {\n  // 更新滚动条的位置\n  this.setScrollTop(e.scrollTop);\n  // 更新滚动内容高度\n  this.setScrollHeight(e.scrollHeight);\n\n  // 向上滑还是向下滑动\n  if (this.preScrollY == null) this.preScrollY = 0;\n  this.isScrollUp = e.scrollTop - this.preScrollY > 0;\n  this.preScrollY = e.scrollTop;\n\n  // 上滑 && 检查并触发上拉\n  this.isScrollUp && this.triggerUpScroll(true);\n\n  // 顶部按钮的显示隐藏\n  if (e.scrollTop >= this.optUp.toTop.offset) {\n    this.showTopBtn();\n  } else {\n    this.hideTopBtn();\n  }\n\n  // 滑动监听\n  this.optUp.onScroll && onScroll && onScroll();\n};\n\n/* 触发上拉加载 */\nMeScroll.prototype.triggerUpScroll = function (isCheck) {\n  if (!this.isUpScrolling && this.optUp.use && this.optUp.callback) {\n    // 是否校验在底部; 默认不校验\n    if (isCheck === true) {\n      var canUp = false;\n      // 还有下一页 && 没有锁定 && 不在下拉中\n      if (this.optUp.hasNext && !this.optUp.isLock && !this.isDownScrolling) {\n        if (this.getScrollBottom() <= this.optUp.offset) {\n          // 到底部\n          canUp = true; // 标记可上拉\n        }\n      }\n\n      if (canUp === false) return;\n    }\n    this.showUpScroll(); // 上拉加载中...\n    this.optUp.page.num++; // 预先加一页,如果失败则减回\n    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调\n    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响\n    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.optUp.callback(this); // 执行回调,联网加载数据\n  }\n};\n\n/* 显示上拉加载中 */\nMeScroll.prototype.showUpScroll = function () {\n  this.isUpScrolling = true; // 标记上拉加载中\n  this.optUp.showLoading && this.optUp.showLoading(this); // 回调\n};\n\n/* 显示上拉无更多数据 */\nMeScroll.prototype.showNoMore = function () {\n  this.optUp.hasNext = false; // 标记无更多数据\n  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调\n};\n\n/* 隐藏上拉区域**/\nMeScroll.prototype.hideUpScroll = function () {\n  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调\n};\n\n/* 结束上拉加载 */\nMeScroll.prototype.endUpScroll = function (isShowNoMore) {\n  if (isShowNoMore != null) {\n    // isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用\n    if (isShowNoMore) {\n      this.showNoMore(); // isShowNoMore=true,显示无更多数据\n    } else {\n      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载\n    }\n  }\n\n  this.isUpScrolling = false; // 标记结束上拉加载\n};\n\n/* 重置上拉加载列表为第一页\n *isShowLoading 是否显示进度布局;\n * 1.默认null,不传参,则显示上拉加载的进度布局\n * 2.传参true, 则显示下拉刷新的进度布局\n * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)\n */\nMeScroll.prototype.resetUpScroll = function (isShowLoading) {\n  if (this.optUp && this.optUp.use) {\n    var page = this.optUp.page;\n    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回\n    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回\n    page.num = this.startNum; // 重置为第一页\n    page.time = null; // 重置时间为空\n    if (!this.isDownScrolling && isShowLoading !== false) {\n      // 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;\n      if (isShowLoading == null) {\n        this.removeEmpty(); // 移除空布局\n        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局\n      } else {\n        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表\n      }\n    }\n\n    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调\n    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响\n    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响\n    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调\n  }\n};\n\n/* 设置page.num的值 */\nMeScroll.prototype.setPageNum = function (num) {\n  this.optUp.page.num = num - 1;\n};\n\n/* 设置page.size的值 */\nMeScroll.prototype.setPageSize = function (size) {\n  this.optUp.page.size = size;\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\n * dataSize: 当前页的数据量(必传)\n * totalPage: 总页数(必传)\n * systime: 服务器时间 (可空)\n */\nMeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {\n  var hasNext;\n  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页\n  this.endSuccess(dataSize, hasNext, systime);\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\n * dataSize: 当前页的数据量(必传)\n * totalSize: 列表所有数据总数量(必传)\n * systime: 服务器时间 (可空)\n */\nMeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {\n  var hasNext;\n  if (this.optUp.use && totalSize != null) {\n    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数\n    hasNext = loadSize < totalSize; // 是否还有下一页\n  }\n\n  this.endSuccess(dataSize, hasNext, systime);\n};\n\n/* 联网回调成功,结束下拉刷新和上拉加载\n * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页\n * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.\n * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录\n */\nMeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {\n  var me = this;\n  // 结束下拉刷新\n  if (me.isDownScrolling) {\n    me.isDownEndSuccess = true;\n    me.endDownScroll();\n  }\n\n  // 结束上拉加载\n  if (me.optUp.use) {\n    var isShowNoMore; // 是否已无更多数据\n    if (dataSize != null) {\n      var pageNum = me.optUp.page.num; // 当前页码\n      var pageSize = me.optUp.page.size; // 每页长度\n      // 如果是第一页\n      if (pageNum === 1) {\n        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间\n      }\n\n      if (dataSize < pageSize || hasNext === false) {\n        // 返回的数据不满一页时,则说明已无更多数据\n        me.optUp.hasNext = false;\n        if (dataSize === 0 && pageNum === 1) {\n          // 如果第一页无任何数据且配置了空布局\n          isShowNoMore = false;\n          me.showEmpty();\n        } else {\n          // 总列表数少于配置的数量,则不显示无更多数据\n          var allDataSize = (pageNum - 1) * pageSize + dataSize;\n          if (allDataSize < me.optUp.noMoreSize) {\n            isShowNoMore = false;\n          } else {\n            isShowNoMore = true;\n          }\n          me.removeEmpty(); // 移除空布局\n        }\n      } else {\n        // 还有下一页\n        isShowNoMore = false;\n        me.optUp.hasNext = true;\n        me.removeEmpty(); // 移除空布局\n      }\n    }\n\n    // 隐藏上拉\n    me.endUpScroll(isShowNoMore);\n  }\n};\n\n/* 回调失败,结束下拉刷新和上拉加载 */\nMeScroll.prototype.endErr = function (errDistance) {\n  // 结束下拉,回调失败重置回原来的页码和时间\n  if (this.isDownScrolling) {\n    this.isDownEndSuccess = false;\n    var page = this.optUp.page;\n    if (page && this.prePageNum) {\n      page.num = this.prePageNum;\n      page.time = this.prePageTime;\n    }\n    this.endDownScroll();\n  }\n  // 结束上拉,回调失败重置回原来的页码\n  if (this.isUpScrolling) {\n    this.optUp.page.num--;\n    this.endUpScroll(false);\n    // 如果是mescroll-body,则需往回滚一定距离\n    if (this.isScrollBody && errDistance !== 0) {\n      // 不处理0\n      if (!errDistance) errDistance = this.optUp.errDistance; // 不传,则取默认\n      this.scrollTo(this.getScrollTop() - errDistance, 0); // 往上回滚的距离\n    }\n  }\n};\n\n/* 显示空布局 */\nMeScroll.prototype.showEmpty = function () {\n  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);\n};\n\n/* 移除空布局 */\nMeScroll.prototype.removeEmpty = function () {\n  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(false);\n};\n\n/* 显示回到顶部的按钮 */\nMeScroll.prototype.showTopBtn = function () {\n  if (!this.topBtnShow) {\n    this.topBtnShow = true;\n    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);\n  }\n};\n\n/* 隐藏回到顶部的按钮 */\nMeScroll.prototype.hideTopBtn = function () {\n  if (this.topBtnShow) {\n    this.topBtnShow = false;\n    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);\n  }\n};\n\n/* 获取滚动条的位置 */\nMeScroll.prototype.getScrollTop = function () {\n  return this.scrollTop || 0;\n};\n\n/* 记录滚动条的位置 */\nMeScroll.prototype.setScrollTop = function (y) {\n  this.scrollTop = y;\n};\n\n/* 滚动到指定位置 */\nMeScroll.prototype.scrollTo = function (y, t) {\n  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法\n};\n\n/* 自定义scrollTo */\nMeScroll.prototype.resetScrollTo = function (myScrollTo) {\n  this.myScrollTo = myScrollTo;\n};\n\n/* 滚动条到底部的距离 */\nMeScroll.prototype.getScrollBottom = function () {\n  return this.getScrollHeight() - this.getClientHeight() - this.getScrollTop();\n};\n\n/* 计步器\n star: 开始值\n end: 结束值\n callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;\n t: 计步时长,传0则直接回调end值;不传则默认300ms\n rate: 周期;不传则默认30ms计步一次\n * */\nMeScroll.prototype.getStep = function (star, end, callback, t, rate) {\n  var diff = end - star; // 差值\n  if (t === 0 || diff === 0) {\n    callback && callback(end);\n    return;\n  }\n  t = t || 300; // 时长 300ms\n  rate = rate || 30; // 周期 30ms\n  var count = t / rate; // 次数\n  var step = diff / count; // 步长\n  var i = 0; // 计数\n  var timer = setInterval(function () {\n    if (i < count - 1) {\n      star += step;\n      callback && callback(star, timer);\n      i++;\n    } else {\n      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差\n      clearInterval(timer);\n    }\n  }, rate);\n};\n\n/* 滚动容器的高度 */\nMeScroll.prototype.getClientHeight = function (isReal) {\n  var h = this.clientHeight || 0;\n  if (h === 0 && isReal !== true) {\n    // 未获取到容器的高度,可临时取body的高度 (可能会有误差)\n    h = this.getBodyHeight();\n  }\n  return h;\n};\nMeScroll.prototype.setClientHeight = function (h) {\n  this.clientHeight = h;\n};\n\n/* 滚动内容的高度 */\nMeScroll.prototype.getScrollHeight = function () {\n  return this.scrollHeight || 0;\n};\nMeScroll.prototype.setScrollHeight = function (h) {\n  this.scrollHeight = h;\n};\n\n/* body的高度 */\nMeScroll.prototype.getBodyHeight = function () {\n  return this.bodyHeight || 0;\n};\nMeScroll.prototype.setBodyHeight = function (h) {\n  this.bodyHeight = h;\n};\n\n/* 阻止浏览器默认滚动事件 */\nMeScroll.prototype.preventDefault = function (e) {\n  // 小程序不支持e.preventDefault, 已在wxs中禁止\n  // app的bounce只能通过配置pages.json的style.app-plus.bounce为\"none\"来禁止, 或使用renderjs禁止\n  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用\n  if (e && e.cancelable && !e.defaultPrevented) e.preventDefault();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLmpzIl0sIm5hbWVzIjpbIk1lU2Nyb2xsIiwib3B0aW9ucyIsImlzU2Nyb2xsQm9keSIsIm1lIiwidmVyc2lvbiIsImlzRG93blNjcm9sbGluZyIsImlzVXBTY3JvbGxpbmciLCJoYXNEb3duQ2FsbGJhY2siLCJkb3duIiwiY2FsbGJhY2siLCJpbml0RG93blNjcm9sbCIsImluaXRVcFNjcm9sbCIsInNldFRpbWVvdXQiLCJvcHREb3duIiwidXNlIiwibmF0aXZlIiwiYXV0byIsImF1dG9TaG93TG9hZGluZyIsInRyaWdnZXJEb3duU2Nyb2xsIiwiaXNVcEF1dG9Mb2FkIiwib3B0VXAiLCJ0cmlnZ2VyVXBTY3JvbGwiLCJwcm90b3R5cGUiLCJleHRlbmREb3duU2Nyb2xsIiwiZXh0ZW5kIiwiaXNMb2NrIiwib2Zmc2V0Iiwic3RhcnRUb3AiLCJpbk9mZnNldFJhdGUiLCJvdXRPZmZzZXRSYXRlIiwiYm90dG9tT2Zmc2V0IiwibWluQW5nbGUiLCJ0ZXh0SW5PZmZzZXQiLCJ0ZXh0T3V0T2Zmc2V0IiwidGV4dExvYWRpbmciLCJ0ZXh0U3VjY2VzcyIsInRleHRFcnIiLCJiZWZvcmVFbmREZWxheSIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJpbml0ZWQiLCJpbk9mZnNldCIsIm91dE9mZnNldCIsIm9uTW92aW5nIiwiYmVmb3JlTG9hZGluZyIsInNob3dMb2FkaW5nIiwiYWZ0ZXJMb2FkaW5nIiwiYmVmb3JlRW5kRG93blNjcm9sbCIsImVuZERvd25TY3JvbGwiLCJhZnRlckVuZERvd25TY3JvbGwiLCJtZXNjcm9sbCIsInJlc2V0VXBTY3JvbGwiLCJleHRlbmRVcFNjcm9sbCIsImlzQm90aCIsInBhZ2UiLCJudW0iLCJzaXplIiwidGltZSIsIm5vTW9yZVNpemUiLCJ0ZXh0Tm9Nb3JlIiwic2hvd05vTW9yZSIsImhpZGVVcFNjcm9sbCIsImVyckRpc3RhbmNlIiwidG9Ub3AiLCJzcmMiLCJkdXJhdGlvbiIsImJ0bkNsaWNrIiwib25TaG93IiwiekluZGV4IiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwic2FmZWFyZWEiLCJ3aWR0aCIsInJhZGl1cyIsImVtcHR5IiwiaWNvbiIsInRpcCIsImJ0blRleHQiLCJmaXhlZCIsInRvcCIsIm9uU2Nyb2xsIiwidXNlck9wdGlvbiIsImRlZmF1bHRPcHRpb24iLCJrZXkiLCJkZWYiLCJoYXNDb2xvciIsImNvbG9yIiwiYyIsInRvTG93ZXJDYXNlIiwiZG93bkhpZ2h0IiwidG91Y2hzdGFydEV2ZW50IiwiZSIsInN0YXJ0UG9pbnQiLCJnZXRQb2ludCIsImdldFNjcm9sbFRvcCIsInN0YXJ0QW5nbGUiLCJsYXN0UG9pbnQiLCJtYXhUb3VjaG1vdmVZIiwiZ2V0Qm9keUhlaWdodCIsImluVG91Y2hlbmQiLCJ0b3VjaG1vdmVFdmVudCIsInNjcm9sbFRvcCIsImN1clBvaW50IiwibW92ZVkiLCJ5IiwiZ2V0QW5nbGUiLCJ0b3VjaGVuZEV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaWZmIiwibW92ZXR5cGUiLCJpc0Rvd25FbmRTdWNjZXNzIiwiaXNNb3ZlRG93biIsIk1hdGgiLCJyb3VuZCIsInJhdGUiLCJlbmREb3duU2Nyb2xsQ2FsbCIsImlzU2Nyb2xsVXAiLCJhbmdsZSIsIngiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJwMSIsInAyIiwiYWJzIiwieiIsInNxcnQiLCJhc2luIiwiUEkiLCJzaG93RG93blNjcm9sbCIsInVuaSIsInN0YXJ0UHVsbERvd25SZWZyZXNoIiwic2hvd0Rvd25Mb2FkaW5nQ2FsbCIsIm9uUHVsbERvd25SZWZyZXNoIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImVuZFNjcm9sbCIsInNldFNjcm9sbEhlaWdodCIsInNjcm9sbFRvIiwiZGVsYXkiLCJsb2NrRG93blNjcm9sbCIsImxvY2tVcFNjcm9sbCIsInVwIiwiaGFzTmV4dCIsInN0YXJ0TnVtIiwib25SZWFjaEJvdHRvbSIsIm9uUGFnZVNjcm9sbCIsInNldFNjcm9sbFRvcCIsInNob3dUb3BCdG4iLCJoaWRlVG9wQnRuIiwic2Nyb2xsIiwic2Nyb2xsSGVpZ2h0IiwicHJlU2Nyb2xsWSIsImlzQ2hlY2siLCJjYW5VcCIsImdldFNjcm9sbEJvdHRvbSIsInNob3dVcFNjcm9sbCIsImVuZFVwU2Nyb2xsIiwiaXNTaG93Tm9Nb3JlIiwiaXNTaG93TG9hZGluZyIsInByZVBhZ2VOdW0iLCJwcmVQYWdlVGltZSIsInJlbW92ZUVtcHR5Iiwic2V0UGFnZU51bSIsInNldFBhZ2VTaXplIiwiZW5kQnlQYWdlIiwiZGF0YVNpemUiLCJ0b3RhbFBhZ2UiLCJzeXN0aW1lIiwiZW5kU3VjY2VzcyIsImVuZEJ5U2l6ZSIsInRvdGFsU2l6ZSIsImxvYWRTaXplIiwicGFnZU51bSIsInBhZ2VTaXplIiwic2hvd0VtcHR5IiwiYWxsRGF0YVNpemUiLCJlbmRFcnIiLCJ0b3BCdG5TaG93IiwidCIsIm15U2Nyb2xsVG8iLCJyZXNldFNjcm9sbFRvIiwiZ2V0U2Nyb2xsSGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0IiwiZ2V0U3RlcCIsInN0YXIiLCJlbmQiLCJjb3VudCIsInN0ZXAiLCJpIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpc1JlYWwiLCJoIiwiY2xpZW50SGVpZ2h0Iiwic2V0Q2xpZW50SGVpZ2h0IiwiYm9keUhlaWdodCIsInNldEJvZHlIZWlnaHQiLCJjYW5jZWxhYmxlIiwiZGVmYXVsdFByZXZlbnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFFBQVEsQ0FBQ0MsT0FBTyxFQUFFQyxZQUFZLEVBQUU7RUFDdkQsSUFBSUMsRUFBRSxHQUFHLElBQUk7RUFDYkEsRUFBRSxDQUFDQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7RUFDdEJELEVBQUUsQ0FBQ0YsT0FBTyxHQUFHQSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1QkUsRUFBRSxDQUFDRCxZQUFZLEdBQUdBLFlBQVksSUFBSSxLQUFLLENBQUMsQ0FBQzs7RUFFekNDLEVBQUUsQ0FBQ0UsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQzVCRixFQUFFLENBQUNHLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztFQUMxQixJQUFJQyxlQUFlLEdBQUdKLEVBQUUsQ0FBQ0YsT0FBTyxDQUFDTyxJQUFJLElBQUlMLEVBQUUsQ0FBQ0YsT0FBTyxDQUFDTyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDOztFQUVuRTtFQUNBTixFQUFFLENBQUNPLGNBQWMsRUFBRTtFQUNuQjtFQUNBUCxFQUFFLENBQUNRLFlBQVksRUFBRTs7RUFFakI7RUFDQUMsVUFBVSxDQUFDLFlBQVc7SUFBRTtJQUN2QjtJQUNBLElBQUksQ0FBQ1QsRUFBRSxDQUFDVSxPQUFPLENBQUNDLEdBQUcsSUFBSVgsRUFBRSxDQUFDVSxPQUFPLENBQUNFLE1BQU0sS0FBS1osRUFBRSxDQUFDVSxPQUFPLENBQUNHLElBQUksSUFBSVQsZUFBZSxFQUFFO01BQ2hGLElBQUlKLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDSSxlQUFlLEVBQUU7UUFDL0JkLEVBQUUsQ0FBQ2UsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO01BQ3pCLENBQUMsTUFBTTtRQUNOZixFQUFFLENBQUNVLE9BQU8sQ0FBQ0osUUFBUSxJQUFJTixFQUFFLENBQUNVLE9BQU8sQ0FBQ0osUUFBUSxDQUFDTixFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ2pEO0lBQ0Q7SUFDQTtJQUNBLElBQUcsQ0FBQ0EsRUFBRSxDQUFDZ0IsWUFBWSxFQUFDO01BQUU7TUFDckJQLFVBQVUsQ0FBQyxZQUFVO1FBQ3BCVCxFQUFFLENBQUNpQixLQUFLLENBQUNOLEdBQUcsSUFBSVgsRUFBRSxDQUFDaUIsS0FBSyxDQUFDSixJQUFJLElBQUksQ0FBQ2IsRUFBRSxDQUFDZ0IsWUFBWSxJQUFJaEIsRUFBRSxDQUFDa0IsZUFBZSxFQUFFO01BQzFFLENBQUMsRUFBQyxHQUFHLENBQUM7SUFDUDtFQUNELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1Q7O0FBRUE7QUFDQXJCLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ0MsZ0JBQWdCLEdBQUcsVUFBU1YsT0FBTyxFQUFFO0VBQ3ZEO0VBQ0FiLFFBQVEsQ0FBQ3dCLE1BQU0sQ0FBQ1gsT0FBTyxFQUFFO0lBQ3hCQyxHQUFHLEVBQUUsSUFBSTtJQUFFO0lBQ1hFLElBQUksRUFBRSxJQUFJO0lBQUU7SUFDWkQsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmRSxlQUFlLEVBQUUsS0FBSztJQUFFO0lBQ3hCUSxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLE1BQU0sRUFBRSxFQUFFO0lBQUU7SUFDWkMsUUFBUSxFQUFFLEdBQUc7SUFBRTtJQUNmQyxZQUFZLEVBQUUsQ0FBQztJQUFFO0lBQ2pCQyxhQUFhLEVBQUUsR0FBRztJQUFFO0lBQ3BCQyxZQUFZLEVBQUUsRUFBRTtJQUFFO0lBQ2xCQyxRQUFRLEVBQUUsRUFBRTtJQUFFO0lBQ2RDLFlBQVksRUFBRSxNQUFNO0lBQUU7SUFDdEJDLGFBQWEsRUFBRSxNQUFNO0lBQUU7SUFDdkJDLFdBQVcsRUFBRSxTQUFTO0lBQUU7SUFDeEJDLFdBQVcsRUFBRSxNQUFNO0lBQUU7SUFDckJDLE9BQU8sRUFBRSxNQUFNO0lBQUU7SUFDakJDLGNBQWMsRUFBRSxHQUFHO0lBQUU7SUFDckJDLE9BQU8sRUFBRSxhQUFhO0lBQUU7SUFDeEJDLFNBQVMsRUFBRSxNQUFNO0lBQUU7SUFDbkJDLE1BQU0sRUFBRSxJQUFJO0lBQUU7SUFDZEMsUUFBUSxFQUFFLElBQUk7SUFBRTtJQUNoQkMsU0FBUyxFQUFFLElBQUk7SUFBRTtJQUNqQkMsUUFBUSxFQUFFLElBQUk7SUFBRTtJQUNoQkMsYUFBYSxFQUFFLElBQUk7SUFBRTtJQUNyQkMsV0FBVyxFQUFFLElBQUk7SUFBRTtJQUNuQkMsWUFBWSxFQUFFLElBQUk7SUFBRTtJQUNwQkMsbUJBQW1CLEVBQUUsSUFBSTtJQUFFO0lBQzNCQyxhQUFhLEVBQUUsSUFBSTtJQUFFO0lBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQUU7SUFDMUJ4QyxRQUFRLEVBQUUsa0JBQVN5QyxRQUFRLEVBQUU7TUFDNUI7TUFDQUEsUUFBUSxDQUFDQyxhQUFhLEVBQUU7SUFDekI7RUFDRCxDQUFDLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0FuRCxRQUFRLENBQUNzQixTQUFTLENBQUM4QixjQUFjLEdBQUcsVUFBU2hDLEtBQUssRUFBRTtFQUNuRDtFQUNBcEIsUUFBUSxDQUFDd0IsTUFBTSxDQUFDSixLQUFLLEVBQUU7SUFDdEJOLEdBQUcsRUFBRSxJQUFJO0lBQUU7SUFDWEUsSUFBSSxFQUFFLElBQUk7SUFBRTtJQUNaUyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2Y0QixNQUFNLEVBQUUsSUFBSTtJQUFFO0lBQ2Q1QyxRQUFRLEVBQUUsSUFBSTtJQUFFO0lBQ2hCNkMsSUFBSSxFQUFFO01BQ0xDLEdBQUcsRUFBRSxDQUFDO01BQUU7TUFDUkMsSUFBSSxFQUFFLEVBQUU7TUFBRTtNQUNWQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ1osQ0FBQzs7SUFDREMsVUFBVSxFQUFFLENBQUM7SUFBRTtJQUNmaEMsTUFBTSxFQUFFLEdBQUc7SUFBRTtJQUNiUSxXQUFXLEVBQUUsU0FBUztJQUFFO0lBQ3hCeUIsVUFBVSxFQUFFLFdBQVc7SUFBRTtJQUN6QnJCLE9BQU8sRUFBRSxhQUFhO0lBQUU7SUFDeEJDLFNBQVMsRUFBRSxNQUFNO0lBQUU7SUFDbkJDLE1BQU0sRUFBRSxJQUFJO0lBQUU7SUFDZEssV0FBVyxFQUFFLElBQUk7SUFBRTtJQUNuQmUsVUFBVSxFQUFFLElBQUk7SUFBRTtJQUNsQkMsWUFBWSxFQUFFLElBQUk7SUFBRTtJQUNwQkMsV0FBVyxFQUFFLEVBQUU7SUFBRTtJQUNqQkMsS0FBSyxFQUFFO01BQ047TUFDQUMsR0FBRyxFQUFFLElBQUk7TUFBRTtNQUNYdEMsTUFBTSxFQUFFLElBQUk7TUFBRTtNQUNkdUMsUUFBUSxFQUFFLEdBQUc7TUFBRTtNQUNmQyxRQUFRLEVBQUUsSUFBSTtNQUFFO01BQ2hCQyxNQUFNLEVBQUUsSUFBSTtNQUFFO01BQ2RDLE1BQU0sRUFBRSxJQUFJO01BQUU7TUFDZEMsSUFBSSxFQUFFLElBQUk7TUFBRTtNQUNaQyxLQUFLLEVBQUUsRUFBRTtNQUFFO01BQ1hDLE1BQU0sRUFBRSxHQUFHO01BQUU7TUFDYkMsUUFBUSxFQUFFLEtBQUs7TUFBRTtNQUNqQkMsS0FBSyxFQUFFLEVBQUU7TUFBRTtNQUNYQyxNQUFNLEVBQUUsS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7SUFDREMsS0FBSyxFQUFFO01BQ043RCxHQUFHLEVBQUUsSUFBSTtNQUFFO01BQ1g4RCxJQUFJLEVBQUUsSUFBSTtNQUFFO01BQ1pDLEdBQUcsRUFBRSxZQUFZO01BQUU7TUFDbkJDLE9BQU8sRUFBRSxFQUFFO01BQUU7TUFDYlosUUFBUSxFQUFFLElBQUk7TUFBRTtNQUNoQkMsTUFBTSxFQUFFLElBQUk7TUFBRTtNQUNkWSxLQUFLLEVBQUUsS0FBSztNQUFFO01BQ2RDLEdBQUcsRUFBRSxRQUFRO01BQUU7TUFDZlosTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUNaLENBQUM7O0lBQ0RhLFFBQVEsRUFBRSxLQUFLLENBQUM7RUFDakIsQ0FBQyxDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBakYsUUFBUSxDQUFDd0IsTUFBTSxHQUFHLFVBQVMwRCxVQUFVLEVBQUVDLGFBQWEsRUFBRTtFQUNyRCxJQUFJLENBQUNELFVBQVUsRUFBRSxPQUFPQyxhQUFhO0VBQ3JDLEtBQUssSUFBSUMsR0FBRyxJQUFJRCxhQUFhLEVBQUU7SUFDOUIsSUFBSUQsVUFBVSxDQUFDRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7TUFDNUIsSUFBSUMsR0FBRyxHQUFHRixhQUFhLENBQUNDLEdBQUcsQ0FBQztNQUM1QixJQUFJQyxHQUFHLElBQUksSUFBSSxJQUFJLHNCQUFPQSxHQUFHLE1BQUssUUFBUSxFQUFFO1FBQzNDSCxVQUFVLENBQUNFLEdBQUcsQ0FBQyxHQUFHcEYsUUFBUSxDQUFDd0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFNkQsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUM3QyxDQUFDLE1BQU07UUFDTkgsVUFBVSxDQUFDRSxHQUFHLENBQUMsR0FBR0MsR0FBRztNQUN0QjtJQUNELENBQUMsTUFBTSxJQUFJLHNCQUFPSCxVQUFVLENBQUNFLEdBQUcsQ0FBQyxNQUFLLFFBQVEsRUFBRTtNQUMvQ3BGLFFBQVEsQ0FBQ3dCLE1BQU0sQ0FBQzBELFVBQVUsQ0FBQ0UsR0FBRyxDQUFDLEVBQUVELGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZEO0VBQ0Q7O0VBQ0EsT0FBT0YsVUFBVTtBQUNsQixDQUFDOztBQUVEO0FBQ0FsRixRQUFRLENBQUNzQixTQUFTLENBQUNnRSxRQUFRLEdBQUcsVUFBU0MsS0FBSyxFQUFFO0VBQzdDLElBQUcsQ0FBQ0EsS0FBSyxFQUFFLE9BQU8sS0FBSztFQUN2QixJQUFJQyxDQUFDLEdBQUdELEtBQUssQ0FBQ0UsV0FBVyxFQUFFO0VBQzNCLE9BQU9ELENBQUMsSUFBSSxNQUFNLElBQUlBLENBQUMsSUFBSSxTQUFTLElBQUlBLENBQUMsSUFBSSxhQUFhLElBQUlBLENBQUMsSUFBSSxPQUFPO0FBQzNFLENBQUM7O0FBRUQ7QUFDQXhGLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ1osY0FBYyxHQUFHLFlBQVc7RUFDOUMsSUFBSVAsRUFBRSxHQUFHLElBQUk7RUFDYjtFQUNBQSxFQUFFLENBQUNVLE9BQU8sR0FBR1YsRUFBRSxDQUFDRixPQUFPLENBQUNPLElBQUksSUFBSSxDQUFDLENBQUM7RUFDbEMsSUFBRyxDQUFDTCxFQUFFLENBQUNVLE9BQU8sQ0FBQzBCLFNBQVMsSUFBSXBDLEVBQUUsQ0FBQ21GLFFBQVEsQ0FBQ25GLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDeUIsT0FBTyxDQUFDLEVBQUVuQyxFQUFFLENBQUNVLE9BQU8sQ0FBQzBCLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztFQUM1RnBDLEVBQUUsQ0FBQ29CLGdCQUFnQixDQUFDcEIsRUFBRSxDQUFDVSxPQUFPLENBQUM7O0VBRS9CO0VBQ0EsSUFBR1YsRUFBRSxDQUFDRCxZQUFZLElBQUlDLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDRSxNQUFNLEVBQUM7SUFDdkNaLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDQyxHQUFHLEdBQUcsS0FBSztFQUN2QixDQUFDLE1BQUk7SUFDSlgsRUFBRSxDQUFDVSxPQUFPLENBQUNFLE1BQU0sR0FBRyxLQUFLLEVBQUM7RUFDM0I7O0VBRUFaLEVBQUUsQ0FBQ3VGLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7RUFFbEI7RUFDQSxJQUFJdkYsRUFBRSxDQUFDVSxPQUFPLENBQUNDLEdBQUcsSUFBSVgsRUFBRSxDQUFDVSxPQUFPLENBQUMyQixNQUFNLEVBQUU7SUFDeEM7SUFDQTVCLFVBQVUsQ0FBQyxZQUFXO01BQUU7TUFDdkJULEVBQUUsQ0FBQ1UsT0FBTyxDQUFDMkIsTUFBTSxDQUFDckMsRUFBRSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTjtBQUNELENBQUM7O0FBRUQ7QUFDQUgsUUFBUSxDQUFDc0IsU0FBUyxDQUFDcUUsZUFBZSxHQUFHLFVBQVNDLENBQUMsRUFBRTtFQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDL0UsT0FBTyxDQUFDQyxHQUFHLEVBQUU7RUFFdkIsSUFBSSxDQUFDK0UsVUFBVSxHQUFHLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BDLElBQUksQ0FBQ2pFLFFBQVEsR0FBRyxJQUFJLENBQUNvRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0VBQ3JDLElBQUksQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3JCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0osVUFBVSxDQUFDLENBQUM7RUFDbEMsSUFBSSxDQUFDSyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUN0RixPQUFPLENBQUNpQixZQUFZLENBQUMsQ0FBQztFQUN2RSxJQUFJLENBQUNzRSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQzs7QUFFRDtBQUNBcEcsUUFBUSxDQUFDc0IsU0FBUyxDQUFDK0UsY0FBYyxHQUFHLFVBQVNULENBQUMsRUFBRTtFQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDL0UsT0FBTyxDQUFDQyxHQUFHLEVBQUU7RUFDdkIsSUFBSVgsRUFBRSxHQUFHLElBQUk7RUFFYixJQUFJbUcsU0FBUyxHQUFHbkcsRUFBRSxDQUFDNEYsWUFBWSxFQUFFLENBQUMsQ0FBQztFQUNuQyxJQUFJUSxRQUFRLEdBQUdwRyxFQUFFLENBQUMyRixRQUFRLENBQUNGLENBQUMsQ0FBQyxDQUFDLENBQUM7O0VBRS9CLElBQUlZLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxDQUFDLEdBQUd0RyxFQUFFLENBQUMwRixVQUFVLENBQUNZLENBQUMsQ0FBQyxDQUFDOztFQUUxQztFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUlELEtBQUssR0FBRyxDQUFDLEtBQ1ZyRyxFQUFFLENBQUNELFlBQVksSUFBSW9HLFNBQVMsSUFBSSxDQUFDLElBRWpDLENBQUNuRyxFQUFFLENBQUNELFlBQVksS0FBS29HLFNBQVMsSUFBSSxDQUFDLElBQUtBLFNBQVMsSUFBSW5HLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDYyxRQUFRLElBQUkyRSxTQUFTLEtBQUtuRyxFQUFFLENBQUN3QixRQUFTLENBQUcsQ0FDMUcsRUFBRTtJQUNIO0lBQ0EsSUFBSSxDQUFDeEIsRUFBRSxDQUFDaUcsVUFBVSxJQUFJLENBQUNqRyxFQUFFLENBQUNFLGVBQWUsSUFBSSxDQUFDRixFQUFFLENBQUNVLE9BQU8sQ0FBQ1ksTUFBTSxLQUFLLENBQUN0QixFQUFFLENBQUNHLGFBQWEsSUFBS0gsRUFBRSxDQUFDRyxhQUFhLElBQ3hHSCxFQUFFLENBQUNpQixLQUFLLENBQUNpQyxNQUFPLENBQUMsRUFBRTtNQUVwQjtNQUNBLElBQUcsQ0FBQ2xELEVBQUUsQ0FBQzZGLFVBQVUsRUFBRTdGLEVBQUUsQ0FBQzZGLFVBQVUsR0FBRzdGLEVBQUUsQ0FBQ3VHLFFBQVEsQ0FBQ3ZHLEVBQUUsQ0FBQzhGLFNBQVMsRUFBRU0sUUFBUSxDQUFDLENBQUMsQ0FBQztNQUN4RSxJQUFJcEcsRUFBRSxDQUFDNkYsVUFBVSxHQUFHN0YsRUFBRSxDQUFDVSxPQUFPLENBQUNrQixRQUFRLEVBQUUsT0FBTyxDQUFDOztNQUVqRDtNQUNBLElBQUk1QixFQUFFLENBQUMrRixhQUFhLEdBQUcsQ0FBQyxJQUFJSyxRQUFRLENBQUNFLENBQUMsSUFBSXRHLEVBQUUsQ0FBQytGLGFBQWEsRUFBRTtRQUMzRC9GLEVBQUUsQ0FBQ2lHLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QmpHLEVBQUUsQ0FBQ3dHLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEI7TUFDRDtNQUVBeEcsRUFBRSxDQUFDeUcsY0FBYyxDQUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFdEIsSUFBSWlCLElBQUksR0FBR04sUUFBUSxDQUFDRSxDQUFDLEdBQUd0RyxFQUFFLENBQUM4RixTQUFTLENBQUNRLENBQUMsQ0FBQyxDQUFDOztNQUV4QztNQUNBLElBQUl0RyxFQUFFLENBQUN1RixTQUFTLEdBQUd2RixFQUFFLENBQUNVLE9BQU8sQ0FBQ2EsTUFBTSxFQUFFO1FBQ3JDLElBQUl2QixFQUFFLENBQUMyRyxRQUFRLEtBQUssQ0FBQyxFQUFFO1VBQ3RCM0csRUFBRSxDQUFDMkcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQ2pCM0csRUFBRSxDQUFDNEcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUM7VUFDNUI1RyxFQUFFLENBQUNVLE9BQU8sQ0FBQzRCLFFBQVEsSUFBSXRDLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDNEIsUUFBUSxDQUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUNoREEsRUFBRSxDQUFDNkcsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZCOztRQUNBN0csRUFBRSxDQUFDdUYsU0FBUyxJQUFJbUIsSUFBSSxHQUFHMUcsRUFBRSxDQUFDVSxPQUFPLENBQUNlLFlBQVksQ0FBQyxDQUFDOztRQUVoRDtNQUNELENBQUMsTUFBTTtRQUNOLElBQUl6QixFQUFFLENBQUMyRyxRQUFRLEtBQUssQ0FBQyxFQUFFO1VBQ3RCM0csRUFBRSxDQUFDMkcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1VBQ2pCM0csRUFBRSxDQUFDVSxPQUFPLENBQUM2QixTQUFTLElBQUl2QyxFQUFFLENBQUNVLE9BQU8sQ0FBQzZCLFNBQVMsQ0FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUM7VUFDbERBLEVBQUUsQ0FBQzZHLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2Qjs7UUFDQSxJQUFJSCxJQUFJLEdBQUcsQ0FBQyxFQUFFO1VBQUU7VUFDZjFHLEVBQUUsQ0FBQ3VGLFNBQVMsSUFBSW1CLElBQUksR0FBRzFHLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxNQUFNO1VBQUU7VUFDUjFCLEVBQUUsQ0FBQ3VGLFNBQVMsSUFBSW1CLElBQUksQ0FBQyxDQUFDO1FBQ3ZCO01BQ0Q7O01BRUExRyxFQUFFLENBQUN1RixTQUFTLEdBQUd1QixJQUFJLENBQUNDLEtBQUssQ0FBQy9HLEVBQUUsQ0FBQ3VGLFNBQVMsQ0FBQyxFQUFDO01BQ3hDLElBQUl5QixJQUFJLEdBQUdoSCxFQUFFLENBQUN1RixTQUFTLEdBQUd2RixFQUFFLENBQUNVLE9BQU8sQ0FBQ2EsTUFBTSxDQUFDLENBQUM7TUFDN0N2QixFQUFFLENBQUNVLE9BQU8sQ0FBQzhCLFFBQVEsSUFBSXhDLEVBQUUsQ0FBQ1UsT0FBTyxDQUFDOEIsUUFBUSxDQUFDeEMsRUFBRSxFQUFFZ0gsSUFBSSxFQUFFaEgsRUFBRSxDQUFDdUYsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRTtFQUNEOztFQUVBdkYsRUFBRSxDQUFDOEYsU0FBUyxHQUFHTSxRQUFRLENBQUMsQ0FBQztBQUMxQixDQUFDOztBQUVEO0FBQ0F2RyxRQUFRLENBQUNzQixTQUFTLENBQUNxRixhQUFhLEdBQUcsVUFBU2YsQ0FBQyxFQUFFO0VBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMvRSxPQUFPLENBQUNDLEdBQUcsRUFBRTtFQUN2QjtFQUNBLElBQUksSUFBSSxDQUFDa0csVUFBVSxFQUFFO0lBQ3BCLElBQUksSUFBSSxDQUFDdEIsU0FBUyxJQUFJLElBQUksQ0FBQzdFLE9BQU8sQ0FBQ2EsTUFBTSxFQUFFO01BQzFDO01BQ0EsSUFBSSxDQUFDUixpQkFBaUIsRUFBRTtJQUN6QixDQUFDLE1BQU07TUFDTjtNQUNBLElBQUksQ0FBQ3dFLFNBQVMsR0FBRyxDQUFDO01BQ2xCLElBQUksQ0FBQzBCLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUM3QjtJQUNBLElBQUksQ0FBQ04sUUFBUSxHQUFHLENBQUM7SUFDakIsSUFBSSxDQUFDRSxVQUFVLEdBQUcsS0FBSztFQUN4QixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQzlHLFlBQVksSUFBSSxJQUFJLENBQUM2RixZQUFZLEVBQUUsS0FBSyxJQUFJLENBQUNwRSxRQUFRLEVBQUU7SUFBRTtJQUN6RSxJQUFJMEYsVUFBVSxHQUFHLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDLENBQUNhLENBQUMsR0FBRyxJQUFJLENBQUNaLFVBQVUsQ0FBQ1ksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdEO0lBQ0EsSUFBSVksVUFBVSxFQUFFO01BQ2Y7TUFDQSxJQUFJQyxLQUFLLEdBQUcsSUFBSSxDQUFDWixRQUFRLENBQUMsSUFBSSxDQUFDWixRQUFRLENBQUNGLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUMsQ0FBQztNQUM5RCxJQUFJeUIsS0FBSyxHQUFHLEVBQUUsRUFBRTtRQUNmO1FBQ0EsSUFBSSxDQUFDakcsZUFBZSxDQUFDLElBQUksQ0FBQztNQUMzQjtJQUNEO0VBQ0Q7QUFDRCxDQUFDOztBQUVEO0FBQ0FyQixRQUFRLENBQUNzQixTQUFTLENBQUN3RSxRQUFRLEdBQUcsVUFBU0YsQ0FBQyxFQUFFO0VBQ3pDLElBQUksQ0FBQ0EsQ0FBQyxFQUFFO0lBQ1AsT0FBTztNQUNOMkIsQ0FBQyxFQUFFLENBQUM7TUFDSmQsQ0FBQyxFQUFFO0lBQ0osQ0FBQztFQUNGO0VBQ0EsSUFBSWIsQ0FBQyxDQUFDNEIsT0FBTyxJQUFJNUIsQ0FBQyxDQUFDNEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQzlCLE9BQU87TUFDTkQsQ0FBQyxFQUFFM0IsQ0FBQyxDQUFDNEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLO01BQ3JCaEIsQ0FBQyxFQUFFYixDQUFDLENBQUM0QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNFO0lBQ2pCLENBQUM7RUFDRixDQUFDLE1BQU0sSUFBSTlCLENBQUMsQ0FBQytCLGNBQWMsSUFBSS9CLENBQUMsQ0FBQytCLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNuRCxPQUFPO01BQ05KLENBQUMsRUFBRTNCLENBQUMsQ0FBQytCLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0YsS0FBSztNQUM1QmhCLENBQUMsRUFBRWIsQ0FBQyxDQUFDK0IsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDRDtJQUN4QixDQUFDO0VBQ0YsQ0FBQyxNQUFNO0lBQ04sT0FBTztNQUNOSCxDQUFDLEVBQUUzQixDQUFDLENBQUNnQyxPQUFPO01BQ1puQixDQUFDLEVBQUViLENBQUMsQ0FBQ2lDO0lBQ04sQ0FBQztFQUNGO0FBQ0QsQ0FBQzs7QUFFRDtBQUNBN0gsUUFBUSxDQUFDc0IsU0FBUyxDQUFDb0YsUUFBUSxHQUFHLFVBQVNvQixFQUFFLEVBQUVDLEVBQUUsRUFBRTtFQUM5QyxJQUFJUixDQUFDLEdBQUdOLElBQUksQ0FBQ2UsR0FBRyxDQUFDRixFQUFFLENBQUNQLENBQUMsR0FBR1EsRUFBRSxDQUFDUixDQUFDLENBQUM7RUFDN0IsSUFBSWQsQ0FBQyxHQUFHUSxJQUFJLENBQUNlLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDckIsQ0FBQyxHQUFHc0IsRUFBRSxDQUFDdEIsQ0FBQyxDQUFDO0VBQzdCLElBQUl3QixDQUFDLEdBQUdoQixJQUFJLENBQUNpQixJQUFJLENBQUNYLENBQUMsR0FBR0EsQ0FBQyxHQUFHZCxDQUFDLEdBQUdBLENBQUMsQ0FBQztFQUNoQyxJQUFJYSxLQUFLLEdBQUcsQ0FBQztFQUNiLElBQUlXLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDWlgsS0FBSyxHQUFHTCxJQUFJLENBQUNrQixJQUFJLENBQUMxQixDQUFDLEdBQUd3QixDQUFDLENBQUMsR0FBR2hCLElBQUksQ0FBQ21CLEVBQUUsR0FBRyxHQUFHO0VBQ3pDO0VBQ0EsT0FBT2QsS0FBSztBQUNiLENBQUM7O0FBRUQ7QUFDQXRILFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ0osaUJBQWlCLEdBQUcsWUFBVztFQUNqRCxJQUFJLElBQUksQ0FBQ0wsT0FBTyxDQUFDK0IsYUFBYSxJQUFJLElBQUksQ0FBQy9CLE9BQU8sQ0FBQytCLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuRTtFQUFBLENBQ0EsTUFBTTtJQUNOLElBQUksQ0FBQ3lGLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxJQUFJLENBQUN4SCxPQUFPLENBQUNFLE1BQU0sSUFBSSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0osUUFBUSxJQUFJLElBQUksQ0FBQ0ksT0FBTyxDQUFDSixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUMvRTtBQUNELENBQUM7O0FBRUQ7QUFDQVQsUUFBUSxDQUFDc0IsU0FBUyxDQUFDK0csY0FBYyxHQUFHLFlBQVc7RUFDOUMsSUFBSSxDQUFDaEksZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO0VBQzdCLElBQUksSUFBSSxDQUFDUSxPQUFPLENBQUNFLE1BQU0sRUFBRTtJQUN4QnVILEdBQUcsQ0FBQ0Msb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM5QixDQUFDLE1BQUs7SUFDTCxJQUFJLENBQUM5QyxTQUFTLEdBQUcsSUFBSSxDQUFDN0UsT0FBTyxDQUFDYSxNQUFNLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUM4RyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM5QyxTQUFTLENBQUMsQ0FBQyxDQUFDO0VBQzNDO0FBQ0QsQ0FBQzs7QUFFRDFGLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ2tILG1CQUFtQixHQUFHLFVBQVM5QyxTQUFTLEVBQUU7RUFDNUQsSUFBSSxDQUFDN0UsT0FBTyxDQUFDZ0MsV0FBVyxJQUFJLElBQUksQ0FBQ2hDLE9BQU8sQ0FBQ2dDLFdBQVcsQ0FBQyxJQUFJLEVBQUU2QyxTQUFTLENBQUMsQ0FBQyxDQUFDO0VBQ3ZFLElBQUksQ0FBQzdFLE9BQU8sQ0FBQ2lDLFlBQVksSUFBSSxJQUFJLENBQUNqQyxPQUFPLENBQUNpQyxZQUFZLENBQUMsSUFBSSxFQUFFNEMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUMxRSxDQUFDOztBQUVEO0FBQ0ExRixRQUFRLENBQUNzQixTQUFTLENBQUNtSCxpQkFBaUIsR0FBRyxZQUFXO0VBQ2pELElBQUksQ0FBQ3BJLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztFQUM3QixJQUFJLENBQUNtSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCLElBQUksQ0FBQzNILE9BQU8sQ0FBQ0osUUFBUSxJQUFJLElBQUksQ0FBQ0ksT0FBTyxDQUFDSixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDOztBQUVEO0FBQ0FULFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQzBCLGFBQWEsR0FBRyxZQUFXO0VBQzdDLElBQUksSUFBSSxDQUFDbkMsT0FBTyxDQUFDRSxNQUFNLEVBQUU7SUFBRTtJQUMxQixJQUFJLENBQUNWLGVBQWUsR0FBRyxLQUFLO0lBQzVCLElBQUksQ0FBQytHLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUM1QmtCLEdBQUcsQ0FBQ0ksbUJBQW1CLEVBQUU7SUFDekI7RUFDRDtFQUNBLElBQUl2SSxFQUFFLEdBQUcsSUFBSTtFQUNiO0VBQ0EsSUFBSXdJLFNBQVMsR0FBRyxTQUFaQSxTQUFTLEdBQWM7SUFDMUJ4SSxFQUFFLENBQUN1RixTQUFTLEdBQUcsQ0FBQztJQUNoQnZGLEVBQUUsQ0FBQ0UsZUFBZSxHQUFHLEtBQUs7SUFDMUJGLEVBQUUsQ0FBQ2lILGlCQUFpQixDQUFDakgsRUFBRSxDQUFDO0lBQ3hCLElBQUcsQ0FBQ0EsRUFBRSxDQUFDRCxZQUFZLEVBQUM7TUFDbkJDLEVBQUUsQ0FBQ3lJLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQztNQUN0QnpJLEVBQUUsQ0FBQzBJLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUM7SUFDbEI7RUFDRCxDQUFDO0VBQ0Q7RUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBQztFQUNiLElBQUkzSSxFQUFFLENBQUNVLE9BQU8sQ0FBQ2tDLG1CQUFtQixFQUFFO0lBQ25DK0YsS0FBSyxHQUFHM0ksRUFBRSxDQUFDVSxPQUFPLENBQUNrQyxtQkFBbUIsQ0FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsSUFBR0EsRUFBRSxDQUFDNEcsZ0JBQWdCLElBQUksSUFBSSxFQUFFK0IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzVDOztFQUNBLElBQUksT0FBT0EsS0FBSyxLQUFLLFFBQVEsSUFBSUEsS0FBSyxHQUFHLENBQUMsRUFBRTtJQUMzQ2xJLFVBQVUsQ0FBQytILFNBQVMsRUFBRUcsS0FBSyxDQUFDO0VBQzdCLENBQUMsTUFBTTtJQUNOSCxTQUFTLEVBQUU7RUFDWjtBQUNELENBQUM7QUFFRDNJLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQzhGLGlCQUFpQixHQUFHLFlBQVc7RUFDakQsSUFBSSxDQUFDdkcsT0FBTyxDQUFDbUMsYUFBYSxJQUFJLElBQUksQ0FBQ25DLE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDOUQsSUFBSSxDQUFDbkMsT0FBTyxDQUFDb0Msa0JBQWtCLElBQUksSUFBSSxDQUFDcEMsT0FBTyxDQUFDb0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDO0FBQ3pFLENBQUM7O0FBRUQ7QUFDQWpELFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ3lILGNBQWMsR0FBRyxVQUFTdEgsTUFBTSxFQUFFO0VBQ3BELElBQUlBLE1BQU0sSUFBSSxJQUFJLEVBQUVBLE1BQU0sR0FBRyxJQUFJO0VBQ2pDLElBQUksQ0FBQ1osT0FBTyxDQUFDWSxNQUFNLEdBQUdBLE1BQU07QUFDN0IsQ0FBQzs7QUFFRDtBQUNBekIsUUFBUSxDQUFDc0IsU0FBUyxDQUFDMEgsWUFBWSxHQUFHLFVBQVN2SCxNQUFNLEVBQUU7RUFDbEQsSUFBSUEsTUFBTSxJQUFJLElBQUksRUFBRUEsTUFBTSxHQUFHLElBQUk7RUFDakMsSUFBSSxDQUFDTCxLQUFLLENBQUNLLE1BQU0sR0FBR0EsTUFBTTtBQUMzQixDQUFDOztBQUVEO0FBQ0F6QixRQUFRLENBQUNzQixTQUFTLENBQUNYLFlBQVksR0FBRyxZQUFXO0VBQzVDLElBQUlSLEVBQUUsR0FBRyxJQUFJO0VBQ2I7RUFDQUEsRUFBRSxDQUFDaUIsS0FBSyxHQUFHakIsRUFBRSxDQUFDRixPQUFPLENBQUNnSixFQUFFLElBQUk7SUFBQ25JLEdBQUcsRUFBRTtFQUFLLENBQUM7RUFDeEMsSUFBRyxDQUFDWCxFQUFFLENBQUNpQixLQUFLLENBQUNtQixTQUFTLElBQUlwQyxFQUFFLENBQUNtRixRQUFRLENBQUNuRixFQUFFLENBQUNpQixLQUFLLENBQUNrQixPQUFPLENBQUMsRUFBRW5DLEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQ21CLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztFQUN0RnBDLEVBQUUsQ0FBQ2lELGNBQWMsQ0FBQ2pELEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQztFQUUzQixJQUFJakIsRUFBRSxDQUFDaUIsS0FBSyxDQUFDTixHQUFHLEtBQUssS0FBSyxFQUFFLE9BQU8sQ0FBQztFQUNwQ1gsRUFBRSxDQUFDaUIsS0FBSyxDQUFDOEgsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0VBQ3pCL0ksRUFBRSxDQUFDZ0osUUFBUSxHQUFHaEosRUFBRSxDQUFDaUIsS0FBSyxDQUFDa0MsSUFBSSxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXJDO0VBQ0EsSUFBSXBELEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQ29CLE1BQU0sRUFBRTtJQUNwQjVCLFVBQVUsQ0FBQyxZQUFXO01BQUU7TUFDdkJULEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQ3JDLEVBQUUsQ0FBQztJQUNwQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ047QUFDRCxDQUFDOztBQUVEO0FBQ0FILFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQzhILGFBQWEsR0FBRyxZQUFXO0VBQzdDLElBQUksSUFBSSxDQUFDbEosWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDSSxhQUFhLEVBQUU7SUFBRTtJQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDYyxLQUFLLENBQUNLLE1BQU0sSUFBSSxJQUFJLENBQUNMLEtBQUssQ0FBQzhILE9BQU8sRUFBRTtNQUM3QyxJQUFJLENBQUM3SCxlQUFlLEVBQUU7SUFDdkI7RUFDRDtBQUNELENBQUM7O0FBRUQ7QUFDQXJCLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQytILFlBQVksR0FBRyxVQUFTekQsQ0FBQyxFQUFFO0VBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMxRixZQUFZLEVBQUU7O0VBRXhCO0VBQ0EsSUFBSSxDQUFDb0osWUFBWSxDQUFDMUQsQ0FBQyxDQUFDVSxTQUFTLENBQUM7O0VBRTlCO0VBQ0EsSUFBSVYsQ0FBQyxDQUFDVSxTQUFTLElBQUksSUFBSSxDQUFDbEYsS0FBSyxDQUFDMkMsS0FBSyxDQUFDckMsTUFBTSxFQUFFO0lBQzNDLElBQUksQ0FBQzZILFVBQVUsRUFBRTtFQUNsQixDQUFDLE1BQU07SUFDTixJQUFJLENBQUNDLFVBQVUsRUFBRTtFQUNsQjtBQUNELENBQUM7O0FBRUQ7QUFDQXhKLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ21JLE1BQU0sR0FBRyxVQUFTN0QsQ0FBQyxFQUFFWCxRQUFRLEVBQUU7RUFDakQ7RUFDQSxJQUFJLENBQUNxRSxZQUFZLENBQUMxRCxDQUFDLENBQUNVLFNBQVMsQ0FBQztFQUM5QjtFQUNBLElBQUksQ0FBQ3NDLGVBQWUsQ0FBQ2hELENBQUMsQ0FBQzhELFlBQVksQ0FBQzs7RUFFcEM7RUFDQSxJQUFJLElBQUksQ0FBQ0MsVUFBVSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUNBLFVBQVUsR0FBRyxDQUFDO0VBQ2hELElBQUksQ0FBQ3RDLFVBQVUsR0FBR3pCLENBQUMsQ0FBQ1UsU0FBUyxHQUFHLElBQUksQ0FBQ3FELFVBQVUsR0FBRyxDQUFDO0VBQ25ELElBQUksQ0FBQ0EsVUFBVSxHQUFHL0QsQ0FBQyxDQUFDVSxTQUFTOztFQUU3QjtFQUNBLElBQUksQ0FBQ2UsVUFBVSxJQUFJLElBQUksQ0FBQ2hHLGVBQWUsQ0FBQyxJQUFJLENBQUM7O0VBRTdDO0VBQ0EsSUFBSXVFLENBQUMsQ0FBQ1UsU0FBUyxJQUFJLElBQUksQ0FBQ2xGLEtBQUssQ0FBQzJDLEtBQUssQ0FBQ3JDLE1BQU0sRUFBRTtJQUMzQyxJQUFJLENBQUM2SCxVQUFVLEVBQUU7RUFDbEIsQ0FBQyxNQUFNO0lBQ04sSUFBSSxDQUFDQyxVQUFVLEVBQUU7RUFDbEI7O0VBRUE7RUFDQSxJQUFJLENBQUNwSSxLQUFLLENBQUM2RCxRQUFRLElBQUlBLFFBQVEsSUFBSUEsUUFBUSxFQUFFO0FBQzlDLENBQUM7O0FBRUQ7QUFDQWpGLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ0QsZUFBZSxHQUFHLFVBQVN1SSxPQUFPLEVBQUU7RUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQ3RKLGFBQWEsSUFBSSxJQUFJLENBQUNjLEtBQUssQ0FBQ04sR0FBRyxJQUFJLElBQUksQ0FBQ00sS0FBSyxDQUFDWCxRQUFRLEVBQUU7SUFDakU7SUFDQSxJQUFJbUosT0FBTyxLQUFLLElBQUksRUFBRTtNQUNyQixJQUFJQyxLQUFLLEdBQUcsS0FBSztNQUNqQjtNQUNBLElBQUksSUFBSSxDQUFDekksS0FBSyxDQUFDOEgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDOUgsS0FBSyxDQUFDSyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUNwQixlQUFlLEVBQUU7UUFDdEUsSUFBSSxJQUFJLENBQUN5SixlQUFlLEVBQUUsSUFBSSxJQUFJLENBQUMxSSxLQUFLLENBQUNNLE1BQU0sRUFBRTtVQUFFO1VBQ2xEbUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2Y7TUFDRDs7TUFDQSxJQUFJQSxLQUFLLEtBQUssS0FBSyxFQUFFO0lBQ3RCO0lBQ0EsSUFBSSxDQUFDRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQzNJLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0MsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDb0MsR0FBRyxHQUFHLElBQUksQ0FBQ25DLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSSxDQUFDcEMsS0FBSyxDQUFDa0MsSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNyQyxLQUFLLENBQUNrQyxJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDNUI7QUFDRCxDQUFDOztBQUVEO0FBQ0FULFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ3lJLFlBQVksR0FBRyxZQUFXO0VBQzVDLElBQUksQ0FBQ3pKLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztFQUMzQixJQUFJLENBQUNjLEtBQUssQ0FBQ3lCLFdBQVcsSUFBSSxJQUFJLENBQUN6QixLQUFLLENBQUN5QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDOztBQUVEO0FBQ0E3QyxRQUFRLENBQUNzQixTQUFTLENBQUNzQyxVQUFVLEdBQUcsWUFBVztFQUMxQyxJQUFJLENBQUN4QyxLQUFLLENBQUM4SCxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7RUFDNUIsSUFBSSxDQUFDOUgsS0FBSyxDQUFDd0MsVUFBVSxJQUFJLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ3dDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7O0FBRUQ7QUFDQTVELFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ3VDLFlBQVksR0FBRyxZQUFXO0VBQzVDLElBQUksQ0FBQ3pDLEtBQUssQ0FBQ3lDLFlBQVksSUFBSSxJQUFJLENBQUN6QyxLQUFLLENBQUN5QyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDOztBQUVEO0FBQ0E3RCxRQUFRLENBQUNzQixTQUFTLENBQUMwSSxXQUFXLEdBQUcsVUFBU0MsWUFBWSxFQUFFO0VBQ3ZELElBQUlBLFlBQVksSUFBSSxJQUFJLEVBQUU7SUFBRTtJQUMzQixJQUFJQSxZQUFZLEVBQUU7TUFDakIsSUFBSSxDQUFDckcsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDLE1BQU07TUFDTixJQUFJLENBQUNDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDdEI7RUFDRDs7RUFDQSxJQUFJLENBQUN2RCxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU4sUUFBUSxDQUFDc0IsU0FBUyxDQUFDNkIsYUFBYSxHQUFHLFVBQVMrRyxhQUFhLEVBQUU7RUFDMUQsSUFBSSxJQUFJLENBQUM5SSxLQUFLLElBQUksSUFBSSxDQUFDQSxLQUFLLENBQUNOLEdBQUcsRUFBRTtJQUNqQyxJQUFJd0MsSUFBSSxHQUFHLElBQUksQ0FBQ2xDLEtBQUssQ0FBQ2tDLElBQUk7SUFDMUIsSUFBSSxDQUFDNkcsVUFBVSxHQUFHN0csSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLENBQUM2RyxXQUFXLEdBQUc5RyxJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQzlCSCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUM0RixRQUFRLENBQUMsQ0FBQztJQUMxQjdGLElBQUksQ0FBQ0csSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUNwRCxlQUFlLElBQUk2SixhQUFhLEtBQUssS0FBSyxFQUFFO01BQUU7TUFDdkQsSUFBSUEsYUFBYSxJQUFJLElBQUksRUFBRTtRQUMxQixJQUFJLENBQUNHLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDTixZQUFZLEVBQUUsQ0FBQyxDQUFDO01BQ3RCLENBQUMsTUFBTTtRQUNOLElBQUksQ0FBQzFCLGNBQWMsRUFBRSxDQUFDLENBQUM7TUFDeEI7SUFDRDs7SUFDQSxJQUFJLENBQUNsSCxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDb0MsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ1gsUUFBUSxJQUFJLElBQUksQ0FBQ1csS0FBSyxDQUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNuRDtBQUNELENBQUM7O0FBRUQ7QUFDQVQsUUFBUSxDQUFDc0IsU0FBUyxDQUFDZ0osVUFBVSxHQUFHLFVBQVMvRyxHQUFHLEVBQUU7RUFDN0MsSUFBSSxDQUFDbkMsS0FBSyxDQUFDa0MsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUcsR0FBRyxDQUFDO0FBQzlCLENBQUM7O0FBRUQ7QUFDQXZELFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ2lKLFdBQVcsR0FBRyxVQUFTL0csSUFBSSxFQUFFO0VBQy9DLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0UsSUFBSSxHQUFHQSxJQUFJO0FBQzVCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBeEQsUUFBUSxDQUFDc0IsU0FBUyxDQUFDa0osU0FBUyxHQUFHLFVBQVNDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7RUFDckUsSUFBSXpCLE9BQU87RUFDWCxJQUFJLElBQUksQ0FBQzlILEtBQUssQ0FBQ04sR0FBRyxJQUFJNEosU0FBUyxJQUFJLElBQUksRUFBRXhCLE9BQU8sR0FBRyxJQUFJLENBQUM5SCxLQUFLLENBQUNrQyxJQUFJLENBQUNDLEdBQUcsR0FBR21ILFNBQVMsQ0FBQyxDQUFDO0VBQ3BGLElBQUksQ0FBQ0UsVUFBVSxDQUFDSCxRQUFRLEVBQUV2QixPQUFPLEVBQUV5QixPQUFPLENBQUM7QUFDNUMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EzSyxRQUFRLENBQUNzQixTQUFTLENBQUN1SixTQUFTLEdBQUcsVUFBU0osUUFBUSxFQUFFSyxTQUFTLEVBQUVILE9BQU8sRUFBRTtFQUNyRSxJQUFJekIsT0FBTztFQUNYLElBQUksSUFBSSxDQUFDOUgsS0FBSyxDQUFDTixHQUFHLElBQUlnSyxTQUFTLElBQUksSUFBSSxFQUFFO0lBQ3hDLElBQUlDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQzNKLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0MsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNuQyxLQUFLLENBQUNrQyxJQUFJLENBQUNFLElBQUksR0FBR2lILFFBQVEsQ0FBQyxDQUFDO0lBQzVFdkIsT0FBTyxHQUFHNkIsUUFBUSxHQUFHRCxTQUFTLENBQUMsQ0FBQztFQUNqQzs7RUFDQSxJQUFJLENBQUNGLFVBQVUsQ0FBQ0gsUUFBUSxFQUFFdkIsT0FBTyxFQUFFeUIsT0FBTyxDQUFDO0FBQzVDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBM0ssUUFBUSxDQUFDc0IsU0FBUyxDQUFDc0osVUFBVSxHQUFHLFVBQVNILFFBQVEsRUFBRXZCLE9BQU8sRUFBRXlCLE9BQU8sRUFBRTtFQUNwRSxJQUFJeEssRUFBRSxHQUFHLElBQUk7RUFDYjtFQUNBLElBQUlBLEVBQUUsQ0FBQ0UsZUFBZSxFQUFFO0lBQ3ZCRixFQUFFLENBQUM0RyxnQkFBZ0IsR0FBRyxJQUFJO0lBQzFCNUcsRUFBRSxDQUFDNkMsYUFBYSxFQUFFO0VBQ25COztFQUVBO0VBQ0EsSUFBSTdDLEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQ04sR0FBRyxFQUFFO0lBQ2pCLElBQUltSixZQUFZLENBQUMsQ0FBQztJQUNsQixJQUFJUSxRQUFRLElBQUksSUFBSSxFQUFFO01BQ3JCLElBQUlPLE9BQU8sR0FBRzdLLEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUM7TUFDakMsSUFBSTBILFFBQVEsR0FBRzlLLEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUM7TUFDbkM7TUFDQSxJQUFJd0gsT0FBTyxLQUFLLENBQUMsRUFBRTtRQUNsQixJQUFJTCxPQUFPLEVBQUV4SyxFQUFFLENBQUNpQixLQUFLLENBQUNrQyxJQUFJLENBQUNHLElBQUksR0FBR2tILE9BQU8sQ0FBQyxDQUFDO01BQzVDOztNQUNBLElBQUlGLFFBQVEsR0FBR1EsUUFBUSxJQUFJL0IsT0FBTyxLQUFLLEtBQUssRUFBRTtRQUM3QztRQUNBL0ksRUFBRSxDQUFDaUIsS0FBSyxDQUFDOEgsT0FBTyxHQUFHLEtBQUs7UUFDeEIsSUFBSXVCLFFBQVEsS0FBSyxDQUFDLElBQUlPLE9BQU8sS0FBSyxDQUFDLEVBQUU7VUFDcEM7VUFDQWYsWUFBWSxHQUFHLEtBQUs7VUFDcEI5SixFQUFFLENBQUMrSyxTQUFTLEVBQUU7UUFDZixDQUFDLE1BQU07VUFDTjtVQUNBLElBQUlDLFdBQVcsR0FBRyxDQUFDSCxPQUFPLEdBQUcsQ0FBQyxJQUFJQyxRQUFRLEdBQUdSLFFBQVE7VUFDckQsSUFBSVUsV0FBVyxHQUFHaEwsRUFBRSxDQUFDaUIsS0FBSyxDQUFDc0MsVUFBVSxFQUFFO1lBQ3RDdUcsWUFBWSxHQUFHLEtBQUs7VUFDckIsQ0FBQyxNQUFNO1lBQ05BLFlBQVksR0FBRyxJQUFJO1VBQ3BCO1VBQ0E5SixFQUFFLENBQUNrSyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ25CO01BQ0QsQ0FBQyxNQUFNO1FBQ047UUFDQUosWUFBWSxHQUFHLEtBQUs7UUFDcEI5SixFQUFFLENBQUNpQixLQUFLLENBQUM4SCxPQUFPLEdBQUcsSUFBSTtRQUN2Qi9JLEVBQUUsQ0FBQ2tLLFdBQVcsRUFBRSxDQUFDLENBQUM7TUFDbkI7SUFDRDs7SUFFQTtJQUNBbEssRUFBRSxDQUFDNkosV0FBVyxDQUFDQyxZQUFZLENBQUM7RUFDN0I7QUFDRCxDQUFDOztBQUVEO0FBQ0FqSyxRQUFRLENBQUNzQixTQUFTLENBQUM4SixNQUFNLEdBQUcsVUFBU3RILFdBQVcsRUFBRTtFQUNqRDtFQUNBLElBQUksSUFBSSxDQUFDekQsZUFBZSxFQUFFO0lBQ3pCLElBQUksQ0FBQzBHLGdCQUFnQixHQUFHLEtBQUs7SUFDN0IsSUFBSXpELElBQUksR0FBRyxJQUFJLENBQUNsQyxLQUFLLENBQUNrQyxJQUFJO0lBQzFCLElBQUlBLElBQUksSUFBSSxJQUFJLENBQUM2RyxVQUFVLEVBQUU7TUFDNUI3RyxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUM0RyxVQUFVO01BQzFCN0csSUFBSSxDQUFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDMkcsV0FBVztJQUM3QjtJQUNBLElBQUksQ0FBQ3BILGFBQWEsRUFBRTtFQUNyQjtFQUNBO0VBQ0EsSUFBSSxJQUFJLENBQUMxQyxhQUFhLEVBQUU7SUFDdkIsSUFBSSxDQUFDYyxLQUFLLENBQUNrQyxJQUFJLENBQUNDLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUN5RyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBRyxJQUFJLENBQUM5SixZQUFZLElBQUk0RCxXQUFXLEtBQUssQ0FBQyxFQUFDO01BQUU7TUFDM0MsSUFBRyxDQUFDQSxXQUFXLEVBQUVBLFdBQVcsR0FBRyxJQUFJLENBQUMxQyxLQUFLLENBQUMwQyxXQUFXLENBQUMsQ0FBQztNQUN2RCxJQUFJLENBQUMrRSxRQUFRLENBQUMsSUFBSSxDQUFDOUMsWUFBWSxFQUFFLEdBQUdqQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUM7SUFDckQ7RUFDRDtBQUNELENBQUM7O0FBRUQ7QUFDQTlELFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQzRKLFNBQVMsR0FBRyxZQUFXO0VBQ3pDLElBQUksQ0FBQzlKLEtBQUssQ0FBQ3VELEtBQUssQ0FBQzdELEdBQUcsSUFBSSxJQUFJLENBQUNNLEtBQUssQ0FBQ3VELEtBQUssQ0FBQ1IsTUFBTSxJQUFJLElBQUksQ0FBQy9DLEtBQUssQ0FBQ3VELEtBQUssQ0FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNqRixDQUFDOztBQUVEO0FBQ0FuRSxRQUFRLENBQUNzQixTQUFTLENBQUMrSSxXQUFXLEdBQUcsWUFBVztFQUMzQyxJQUFJLENBQUNqSixLQUFLLENBQUN1RCxLQUFLLENBQUM3RCxHQUFHLElBQUksSUFBSSxDQUFDTSxLQUFLLENBQUN1RCxLQUFLLENBQUNSLE1BQU0sSUFBSSxJQUFJLENBQUMvQyxLQUFLLENBQUN1RCxLQUFLLENBQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDbEYsQ0FBQzs7QUFFRDtBQUNBbkUsUUFBUSxDQUFDc0IsU0FBUyxDQUFDaUksVUFBVSxHQUFHLFlBQVc7RUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQzhCLFVBQVUsRUFBRTtJQUNyQixJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO0lBQ3RCLElBQUksQ0FBQ2pLLEtBQUssQ0FBQzJDLEtBQUssQ0FBQ0ksTUFBTSxJQUFJLElBQUksQ0FBQy9DLEtBQUssQ0FBQzJDLEtBQUssQ0FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQztFQUN6RDtBQUNELENBQUM7O0FBRUQ7QUFDQW5FLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ2tJLFVBQVUsR0FBRyxZQUFXO0VBQzFDLElBQUksSUFBSSxDQUFDNkIsVUFBVSxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLEtBQUs7SUFDdkIsSUFBSSxDQUFDakssS0FBSyxDQUFDMkMsS0FBSyxDQUFDSSxNQUFNLElBQUksSUFBSSxDQUFDL0MsS0FBSyxDQUFDMkMsS0FBSyxDQUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0VBQzFEO0FBQ0QsQ0FBQzs7QUFFRDtBQUNBbkUsUUFBUSxDQUFDc0IsU0FBUyxDQUFDeUUsWUFBWSxHQUFHLFlBQVc7RUFDNUMsT0FBTyxJQUFJLENBQUNPLFNBQVMsSUFBSSxDQUFDO0FBQzNCLENBQUM7O0FBRUQ7QUFDQXRHLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ2dJLFlBQVksR0FBRyxVQUFTN0MsQ0FBQyxFQUFFO0VBQzdDLElBQUksQ0FBQ0gsU0FBUyxHQUFHRyxDQUFDO0FBQ25CLENBQUM7O0FBRUQ7QUFDQXpHLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ3VILFFBQVEsR0FBRyxVQUFTcEMsQ0FBQyxFQUFFNkUsQ0FBQyxFQUFFO0VBQzVDLElBQUksQ0FBQ0MsVUFBVSxJQUFJLElBQUksQ0FBQ0EsVUFBVSxDQUFDOUUsQ0FBQyxFQUFFNkUsQ0FBQyxDQUFDLEVBQUM7QUFDMUMsQ0FBQzs7QUFFRDtBQUNBdEwsUUFBUSxDQUFDc0IsU0FBUyxDQUFDa0ssYUFBYSxHQUFHLFVBQVNELFVBQVUsRUFBRTtFQUN2RCxJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBVTtBQUM3QixDQUFDOztBQUVEO0FBQ0F2TCxRQUFRLENBQUNzQixTQUFTLENBQUN3SSxlQUFlLEdBQUcsWUFBVztFQUMvQyxPQUFPLElBQUksQ0FBQzJCLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQ0MsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDM0YsWUFBWSxFQUFFO0FBQzdFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQS9GLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ3FLLE9BQU8sR0FBRyxVQUFTQyxJQUFJLEVBQUVDLEdBQUcsRUFBRXBMLFFBQVEsRUFBRTZLLENBQUMsRUFBRW5FLElBQUksRUFBRTtFQUNuRSxJQUFJTixJQUFJLEdBQUdnRixHQUFHLEdBQUdELElBQUksQ0FBQyxDQUFDO0VBQ3ZCLElBQUlOLENBQUMsS0FBSyxDQUFDLElBQUl6RSxJQUFJLEtBQUssQ0FBQyxFQUFFO0lBQzFCcEcsUUFBUSxJQUFJQSxRQUFRLENBQUNvTCxHQUFHLENBQUM7SUFDekI7RUFDRDtFQUNBUCxDQUFDLEdBQUdBLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNkbkUsSUFBSSxHQUFHQSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7RUFDbkIsSUFBSTJFLEtBQUssR0FBR1IsQ0FBQyxHQUFHbkUsSUFBSSxDQUFDLENBQUM7RUFDdEIsSUFBSTRFLElBQUksR0FBR2xGLElBQUksR0FBR2lGLEtBQUssQ0FBQyxDQUFDO0VBQ3pCLElBQUlFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNYLElBQUlDLEtBQUssR0FBR0MsV0FBVyxDQUFDLFlBQVc7SUFDbEMsSUFBSUYsQ0FBQyxHQUFHRixLQUFLLEdBQUcsQ0FBQyxFQUFFO01BQ2xCRixJQUFJLElBQUlHLElBQUk7TUFDWnRMLFFBQVEsSUFBSUEsUUFBUSxDQUFDbUwsSUFBSSxFQUFFSyxLQUFLLENBQUM7TUFDakNELENBQUMsRUFBRTtJQUNKLENBQUMsTUFBTTtNQUNOdkwsUUFBUSxJQUFJQSxRQUFRLENBQUNvTCxHQUFHLEVBQUVJLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDbENFLGFBQWEsQ0FBQ0YsS0FBSyxDQUFDO0lBQ3JCO0VBQ0QsQ0FBQyxFQUFFOUUsSUFBSSxDQUFDO0FBQ1QsQ0FBQzs7QUFFRDtBQUNBbkgsUUFBUSxDQUFDc0IsU0FBUyxDQUFDb0ssZUFBZSxHQUFHLFVBQVNVLE1BQU0sRUFBRTtFQUNyRCxJQUFJQyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxZQUFZLElBQUksQ0FBQztFQUM5QixJQUFJRCxDQUFDLEtBQUssQ0FBQyxJQUFJRCxNQUFNLEtBQUssSUFBSSxFQUFFO0lBQUU7SUFDakNDLENBQUMsR0FBRyxJQUFJLENBQUNsRyxhQUFhLEVBQUU7RUFDekI7RUFDQSxPQUFPa0csQ0FBQztBQUNULENBQUM7QUFDRHJNLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ2lMLGVBQWUsR0FBRyxVQUFTRixDQUFDLEVBQUU7RUFDaEQsSUFBSSxDQUFDQyxZQUFZLEdBQUdELENBQUM7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBck0sUUFBUSxDQUFDc0IsU0FBUyxDQUFDbUssZUFBZSxHQUFHLFlBQVc7RUFDL0MsT0FBTyxJQUFJLENBQUMvQixZQUFZLElBQUksQ0FBQztBQUM5QixDQUFDO0FBQ0QxSixRQUFRLENBQUNzQixTQUFTLENBQUNzSCxlQUFlLEdBQUcsVUFBU3lELENBQUMsRUFBRTtFQUNoRCxJQUFJLENBQUMzQyxZQUFZLEdBQUcyQyxDQUFDO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQXJNLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQzZFLGFBQWEsR0FBRyxZQUFXO0VBQzdDLE9BQU8sSUFBSSxDQUFDcUcsVUFBVSxJQUFJLENBQUM7QUFDNUIsQ0FBQztBQUNEeE0sUUFBUSxDQUFDc0IsU0FBUyxDQUFDbUwsYUFBYSxHQUFHLFVBQVNKLENBQUMsRUFBRTtFQUM5QyxJQUFJLENBQUNHLFVBQVUsR0FBR0gsQ0FBQztBQUNwQixDQUFDOztBQUVEO0FBQ0FyTSxRQUFRLENBQUNzQixTQUFTLENBQUNzRixjQUFjLEdBQUcsVUFBU2hCLENBQUMsRUFBRTtFQUMvQztFQUNBO0VBQ0E7RUFDQSxJQUFJQSxDQUFDLElBQUlBLENBQUMsQ0FBQzhHLFVBQVUsSUFBSSxDQUFDOUcsQ0FBQyxDQUFDK0csZ0JBQWdCLEVBQUUvRyxDQUFDLENBQUNnQixjQUFjLEVBQUU7QUFDakUsQ0FBQyIsImZpbGUiOiI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1lc2Nyb2xsXG4gKiB2ZXJzaW9uIDEuMy4zXG4gKiAyMDIwLTA5LTE1IHdlbmp1XG4gKiBodHRwczovL3d3dy5tZXNjcm9sbC5jb21cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZVNjcm9sbChvcHRpb25zLCBpc1Njcm9sbEJvZHkpIHtcblx0bGV0IG1lID0gdGhpcztcblx0bWUudmVyc2lvbiA9ICcxLjMuMyc7IC8vIG1lc2Nyb2xs54mI5pys5Y+3XG5cdG1lLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyDphY3nva5cblx0bWUuaXNTY3JvbGxCb2R5ID0gaXNTY3JvbGxCb2R5IHx8IGZhbHNlOyAvLyDmu5rliqjljLrln5/mmK/lkKbkuLrljp/nlJ/pobXpnaLmu5rliqg7IOm7mOiupOS4unNjcm9sbC12aWV3XG5cblx0bWUuaXNEb3duU2Nyb2xsaW5nID0gZmFsc2U7IC8vIOaYr+WQpuWcqOaJp+ihjOS4i+aLieWIt+aWsOeahOWbnuiwg1xuXHRtZS5pc1VwU2Nyb2xsaW5nID0gZmFsc2U7IC8vIOaYr+WQpuWcqOaJp+ihjOS4iuaLieWKoOi9veeahOWbnuiwg1xuXHRsZXQgaGFzRG93bkNhbGxiYWNrID0gbWUub3B0aW9ucy5kb3duICYmIG1lLm9wdGlvbnMuZG93bi5jYWxsYmFjazsgLy8g5piv5ZCm6YWN572u5LqGZG93bueahGNhbGxiYWNrXG5cblx0Ly8g5Yid5aeL5YyW5LiL5ouJ5Yi35pawXG5cdG1lLmluaXREb3duU2Nyb2xsKCk7XG5cdC8vIOWIneWni+WMluS4iuaLieWKoOi9vSzliJnliJ3lp4vljJZcblx0bWUuaW5pdFVwU2Nyb2xsKCk7XG5cblx0Ly8g6Ieq5Yqo5Yqg6L29XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IC8vIOW+heS4u+e6v+eoi+aJp+ihjOWujOavleWGjeaJp+ihjCzpgb/lhY1uZXcgTWVTY3JvbGzmnKrliJ3lp4vljJYs5Zyo5Zue6LCD6I635Y+W5LiN5YiwbWVzY3JvbGznmoTlrp7kvotcblx0XHQvLyDoh6rliqjop6blj5HkuIvmi4nliLfmlrAgKOWPquaciemFjee9ruS6hmRvd27nmoRjYWxsYmFja+aJjeiHquWKqOinpuWPkeS4i+aLieWIt+aWsClcblx0XHRpZiAoKG1lLm9wdERvd24udXNlIHx8IG1lLm9wdERvd24ubmF0aXZlKSAmJiBtZS5vcHREb3duLmF1dG8gJiYgaGFzRG93bkNhbGxiYWNrKSB7XG5cdFx0XHRpZiAobWUub3B0RG93bi5hdXRvU2hvd0xvYWRpbmcpIHtcblx0XHRcdFx0bWUudHJpZ2dlckRvd25TY3JvbGwoKTsgLy8g5pi+56S65LiL5ouJ6L+b5bqmLOaJp+ihjOS4i+aLieWbnuiwg1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWUub3B0RG93bi5jYWxsYmFjayAmJiBtZS5vcHREb3duLmNhbGxiYWNrKG1lKTsgLy8g5LiN5pi+56S65LiL5ouJ6L+b5bqmLOebtOaOpeaJp+ihjOS4i+aLieWbnuiwg1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyDoh6rliqjop6blj5HkuIrmi4nliqDovb1cblx0XHRpZighbWUuaXNVcEF1dG9Mb2FkKXsgLy8g6YOo5YiG5bCP56iL5bqPKOWktOadoeWwj+eoi+W6jyllbWl05piv5byC5q2lLCDkvJrlr7zoh7Rpc1VwQXV0b0xvYWTliKTmlq3mnInor68sIOWFiOW7tuaXtuehruS/neWFiOaJp+ihjGRvd27nmoRjYWxsYmFjayzlho3miafooYx1cOeahGNhbGxiYWNrXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdG1lLm9wdFVwLnVzZSAmJiBtZS5vcHRVcC5hdXRvICYmICFtZS5pc1VwQXV0b0xvYWQgJiYgbWUudHJpZ2dlclVwU2Nyb2xsKCk7XG5cdFx0XHR9LDEwMClcblx0XHR9XG5cdH0sIDMwKTsgLy8g6ZyA6K6pbWUub3B0RG93bi5pbml0ZWTlkoxtZS5vcHRVcC5pbml0ZWTlhYjmiafooYxcbn1cblxuLyog6YWN572u5Y+C5pWwOuS4i+aLieWIt+aWsCAqL1xuTWVTY3JvbGwucHJvdG90eXBlLmV4dGVuZERvd25TY3JvbGwgPSBmdW5jdGlvbihvcHREb3duKSB7XG5cdC8vIOS4i+aLieWIt+aWsOeahOmFjee9rlxuXHRNZVNjcm9sbC5leHRlbmQob3B0RG93biwge1xuXHRcdHVzZTogdHJ1ZSwgLy8g5piv5ZCm5ZCv55So5LiL5ouJ5Yi35pawOyDpu5jorqR0cnVlXG5cdFx0YXV0bzogdHJ1ZSwgLy8g5piv5ZCm5Zyo5Yid5aeL5YyW5a6M5q+V5LmL5ZCO6Ieq5Yqo5omn6KGM5LiL5ouJ5Yi35paw55qE5Zue6LCDOyDpu5jorqR0cnVlXG5cdFx0bmF0aXZlOiBmYWxzZSwgLy8g5piv5ZCm5L2/55So57O757uf6Ieq5bim55qE5LiL5ouJ5Yi35pawOyDpu5jorqRmYWxzZTsg5LuFbWVzY3JvbGwtYm9keeeUn+aViCAo5YC85Li6dHJ1ZeaXtizov5jpnIDlnKhwYWdlc+mFjee9rmVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlO+ivpuivt+WPguiAg21lc2Nyb2xsLW5hdGl2ZeeahOahiOS+iylcblx0XHRhdXRvU2hvd0xvYWRpbmc6IGZhbHNlLCAvLyDlpoLmnpzorr7nva5hdXRvPXRydWUo5Zyo5Yid5aeL5YyW5a6M5q+V5LmL5ZCO6Ieq5Yqo5omn6KGM5LiL5ouJ5Yi35paw55qE5Zue6LCDKSzpgqPkuYjmmK/lkKbmmL7npLrkuIvmi4nliLfmlrDnmoTov5vluqY7IOm7mOiupGZhbHNlXG5cdFx0aXNMb2NrOiBmYWxzZSwgLy8g5piv5ZCm6ZSB5a6a5LiL5ouJ5Yi35pawLOm7mOiupGZhbHNlO1xuXHRcdG9mZnNldDogODAsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nlpKfkuo44MHB4LOadvuaJi+WNs+WPr+inpuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xuXHRcdHN0YXJ0VG9wOiAxMDAsIC8vIHNjcm9sbC12aWV35b+r6YCf5rua5Yqo5Yiw6aG26YOo5pe2LOatpOaXtueahHNjcm9sbC10b3Dlj6/og73lpKfkuo4wLCDmraTlgLznlKjkuo7mjqfliLbmnIDlpKfnmoTor6/lt65cblx0XHRpbk9mZnNldFJhdGU6IDEsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nnmoTot53nprvlsI/kuo5vZmZzZXTml7Ys5pS55Y+Y5LiL5ouJ5Yy65Z+f6auY5bqm5q+U5L6LO+WAvOWwj+S6jjHkuJTotormjqXov5EwLOmrmOW6puWPmOWMlui2iuWwjyzooajnjrDkuLrotorlvoDkuIvotorpmr7mi4lcblx0XHRvdXRPZmZzZXRSYXRlOiAwLjIsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTml7Ys5pS55Y+Y5LiL5ouJ5Yy65Z+f6auY5bqm5q+U5L6LO+WAvOWwj+S6jjHkuJTotormjqXov5EwLOmrmOW6puWPmOWMlui2iuWwjyzooajnjrDkuLrotorlvoDkuIvotorpmr7mi4lcblx0XHRib3R0b21PZmZzZXQ6IDIwLCAvLyDlvZPmiYvmjId0b3VjaG1vdmXkvY3nva7lnKjot53nprtib2R55bqV6YOoMjBweOiMg+WbtOWGheeahOaXtuWAmee7k+adn+S4iuaLieWIt+aWsCzpgb/lhY1XZWJ2aWV35bWM5aWX5a+86Ie0dG91Y2hlbmTkuovku7bkuI3miafooYxcblx0XHRtaW5BbmdsZTogNDUsIC8vIOWQkeS4i+a7keWKqOacgOWwkeWBj+enu+eahOinkuW6pizlj5blgLzljLrpl7QgIFswLDkwXTvpu5jorqQ0NeW6pizljbPlkJHkuIvmu5HliqjnmoTop5LluqblpKfkuo40NeW6puWImeinpuWPkeS4i+aLiTvogIzlsI/kuo40NeW6pizlsIbkuI3op6blj5HkuIvmi4ks6YG/5YWN5LiO5bem5Y+z5ruR5Yqo55qE6L2u5pKt562J57uE5Lu25Yay56qBO1xuXHRcdHRleHRJbk9mZnNldDogJ+S4i+aLieWIt+aWsCcsIC8vIOS4i+aLieeahOi3neemu+WcqG9mZnNldOiMg+WbtOWGheeahOaPkOekuuaWh+acrFxuXHRcdHRleHRPdXRPZmZzZXQ6ICfph4rmlL7mm7TmlrAnLCAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTojIPlm7TnmoTmj5DnpLrmlofmnKxcblx0XHR0ZXh0TG9hZGluZzogJ+WKoOi9veS4rSAuLi4nLCAvLyDliqDovb3kuK3nmoTmj5DnpLrmlofmnKxcblx0XHR0ZXh0U3VjY2VzczogJ+WKoOi9veaIkOWKnycsIC8vIOWKoOi9veaIkOWKn+eahOaWh+acrFxuXHRcdHRleHRFcnI6ICfliqDovb3lpLHotKUnLCAvLyDliqDovb3lpLHotKXnmoTmlofmnKxcblx0XHRiZWZvcmVFbmREZWxheTogMTAwLCAvLyDlu7bml7bnu5PmnZ/nmoTml7bplb8gKOaYvuekuuWKoOi9veaIkOWKny/lpLHotKXnmoTml7bplb8pXG5cdFx0YmdDb2xvcjogXCJ0cmFuc3BhcmVudFwiLCAvLyDog4zmma/popzoibIgKOW7uuiuruWcqHBhZ2VzLmpzb27kuK3lho3orr7nva7kuIDkuItiYWNrZ3JvdW5kQ29sb3JUb3ApXG5cdFx0dGV4dENvbG9yOiBcImdyYXlcIiwgLy8g5paH5pys6aKc6ImyICjlvZNiZ0NvbG9y6YWN572u5LqG6aKc6ImyLOiAjHRleHRDb2xvcuacqumFjee9ruaXtizliJl0ZXh0Q29sb3LkvJrpu5jorqTkuLrnmb3oibIpXG5cdFx0aW5pdGVkOiBudWxsLCAvLyDkuIvmi4nliLfmlrDliJ3lp4vljJblrozmr5XnmoTlm57osINcblx0XHRpbk9mZnNldDogbnVsbCwgLy8g5LiL5ouJ55qE6Led56a76L+b5YWlb2Zmc2V06IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDXG5cdFx0b3V0T2Zmc2V0OiBudWxsLCAvLyDkuIvmi4nnmoTot53nprvlpKfkuo5vZmZzZXTpgqPkuIDliLvnmoTlm57osINcblx0XHRvbk1vdmluZzogbnVsbCwgLy8g5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOa7keWKqOi/h+eoi+S4gOebtOWcqOaJp+ihjDsgcmF0ZeS4i+aLieWMuuWfn+W9k+WJjemrmOW6puS4juaMh+Wumui3neemu+eahOavlOWAvChpbk9mZnNldDogcmF0ZTwxOyBvdXRPZmZzZXQ6IHJhdGU+PTEpOyBkb3duSGlnaHTlvZPliY3kuIvmi4nljLrln5/nmoTpq5jluqZcblx0XHRiZWZvcmVMb2FkaW5nOiBudWxsLCAvLyDlh4blpIfop6blj5HkuIvmi4nliLfmlrDnmoTlm57osIM6IOWmguaenHJldHVybiB0cnVlLOWwhuS4jeinpuWPkXNob3dMb2FkaW5n5ZKMY2FsbGJhY2vlm57osIM7IOW4uOeUqOadpeWujOWFqOiHquWumuS5ieS4i+aLieWIt+aWsCwg5Y+C6ICD5qGI5L6L44CQ5reY5a6dIHY2LjguMOOAkVxuXHRcdHNob3dMb2FkaW5nOiBudWxsLCAvLyDmmL7npLrkuIvmi4nliLfmlrDov5vluqbnmoTlm57osINcblx0XHRhZnRlckxvYWRpbmc6IG51bGwsIC8vIOaYvuekuuS4i+aLieWIt+aWsOi/m+W6pueahOWbnuiwg+S5i+WQjizpqazkuIropoHmiafooYznmoTku6PnoIEgKOWmgjog5Zyod3hz5Lit5L2/55SoKVxuXHRcdGJlZm9yZUVuZERvd25TY3JvbGw6IG51bGwsIC8vIOWHhuWkh+e7k+adn+S4i+aLieeahOWbnuiwgy4g6L+U5Zue57uT5p2f5LiL5ouJ55qE5bu25pe25omn6KGM5pe26Ze0LOm7mOiupDBtczsg5bi455So5LqO57uT5p2f5LiL5ouJ5LmL5YmN5YaN5pi+56S65Y+m5aSW5LiA5bCP5q615Yqo55S7LOaJjeWOu+makOiXj+S4i+aLieWIt+aWsOeahOWcuuaZrywg5Y+C6ICD5qGI5L6L44CQZG90SnVtcOOAkVxuXHRcdGVuZERvd25TY3JvbGw6IG51bGwsIC8vIOe7k+adn+S4i+aLieWIt+aWsOeahOWbnuiwg1xuXHRcdGFmdGVyRW5kRG93blNjcm9sbDogbnVsbCwgLy8g57uT5p2f5LiL5ouJ5Yi35paw55qE5Zue6LCDLOmprOS4iuimgeaJp+ihjOeahOS7o+eggSAo5aaCOiDlnKh3eHPkuK3kvb/nlKgpXG5cdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uKG1lc2Nyb2xsKSB7XG5cdFx0XHQvLyDkuIvmi4nliLfmlrDnmoTlm57osIM76buY6K6k6YeN572u5LiK5ouJ5Yqg6L295YiX6KGo5Li656ys5LiA6aG1XG5cdFx0XHRtZXNjcm9sbC5yZXNldFVwU2Nyb2xsKCk7XG5cdFx0fVxuXHR9KVxufVxuXG4vKiDphY3nva7lj4LmlbA65LiK5ouJ5Yqg6L29ICovXG5NZVNjcm9sbC5wcm90b3R5cGUuZXh0ZW5kVXBTY3JvbGwgPSBmdW5jdGlvbihvcHRVcCkge1xuXHQvLyDkuIrmi4nliqDovb3nmoTphY3nva5cblx0TWVTY3JvbGwuZXh0ZW5kKG9wdFVwLCB7XG5cdFx0dXNlOiB0cnVlLCAvLyDmmK/lkKblkK/nlKjkuIrmi4nliqDovb07IOm7mOiupHRydWVcblx0XHRhdXRvOiB0cnVlLCAvLyDmmK/lkKblnKjliJ3lp4vljJblrozmr5XkuYvlkI7oh6rliqjmiafooYzkuIrmi4nliqDovb3nmoTlm57osIM7IOm7mOiupHRydWVcblx0XHRpc0xvY2s6IGZhbHNlLCAvLyDmmK/lkKbplIHlrprkuIrmi4nliqDovb0s6buY6K6kZmFsc2U7XG5cdFx0aXNCb3RoOiB0cnVlLCAvLyDkuIrmi4nliqDovb3ml7Ys5aaC5p6c5ruR5Yqo5Yiw5YiX6KGo6aG26YOo5piv5ZCm5Y+v5Lul5ZCM5pe26Kem5Y+R5LiL5ouJ5Yi35pawO+m7mOiupHRydWUs5Lik6ICF5Y+v5ZCM5pe26Kem5Y+RO1xuXHRcdGNhbGxiYWNrOiBudWxsLCAvLyDkuIrmi4nliqDovb3nmoTlm57osIM7ZnVuY3Rpb24ocGFnZSxtZXNjcm9sbCl7IH1cblx0XHRwYWdlOiB7XG5cdFx0XHRudW06IDAsIC8vIOW9k+WJjemhteeggSzpu5jorqQwLOWbnuiwg+S5i+WJjeS8muWKoDEs5Y2zY2FsbGJhY2socGFnZSnkvJrku44x5byA5aeLXG5cdFx0XHRzaXplOiAxMCwgLy8g5q+P6aG15pWw5o2u55qE5pWw6YePXG5cdFx0XHR0aW1lOiBudWxsIC8vIOWKoOi9veesrOS4gOmhteaVsOaNruacjeWKoeWZqOi/lOWbnueahOaXtumXtDsg6Ziy5q2i55So5oi357+76aG15pe2LOWQjuWPsOaWsOWinuS6huaVsOaNruS7juiAjOWvvOiHtOS4i+S4gOmhteaVsOaNrumHjeWkjTtcblx0XHR9LFxuXHRcdG5vTW9yZVNpemU6IDQsIC8vIOWmguaenOWIl+ihqOW3suaXoOaVsOaNrizlj6/orr7nva7liJfooajnmoTmgLvmlbDph4/opoHlpKfkuo7nrYnkuo415p2h5omN5pi+56S65peg5pu05aSa5pWw5o2uO+mBv+WFjeWIl+ihqOaVsOaNrui/h+WwkSjmr5TlpoLlj6rmnInkuIDmnaHmlbDmja4pLOaYvuekuuaXoOabtOWkmuaVsOaNruS8muS4jeWlveeci1xuXHRcdG9mZnNldDogMTUwLCAvLyDot53lupXpg6jlpJrov5zml7Ys6Kem5Y+RdXBDYWxsYmFjayzku4VtZXNjcm9sbC11bmnnlJ/mlYggKCBtZXNjcm9sbC1ib2R56YWN572u55qE5pivcGFnZXMuanNvbueahCBvblJlYWNoQm90dG9tRGlzdGFuY2UgKVxuXHRcdHRleHRMb2FkaW5nOiAn5Yqg6L295LitIC4uLicsIC8vIOWKoOi9veS4reeahOaPkOekuuaWh+acrFxuXHRcdHRleHROb01vcmU6ICctLSBFTkQgLS0nLCAvLyDmsqHmnInmm7TlpJrmlbDmja7nmoTmj5DnpLrmlofmnKxcblx0XHRiZ0NvbG9yOiBcInRyYW5zcGFyZW50XCIsIC8vIOiDjOaZr+minOiJsiAo5bu66K6u5ZyocGFnZXMuanNvbuS4reWGjeiuvue9ruS4gOS4i2JhY2tncm91bmRDb2xvckJvdHRvbSlcblx0XHR0ZXh0Q29sb3I6IFwiZ3JheVwiLCAvLyDmlofmnKzpopzoibIgKOW9k2JnQ29sb3LphY3nva7kuobpopzoibIs6ICMdGV4dENvbG9y5pyq6YWN572u5pe2LOWImXRleHRDb2xvcuS8mum7mOiupOS4uueZveiJsilcblx0XHRpbml0ZWQ6IG51bGwsIC8vIOWIneWni+WMluWujOavleeahOWbnuiwg1xuXHRcdHNob3dMb2FkaW5nOiBudWxsLCAvLyDmmL7npLrliqDovb3kuK3nmoTlm57osINcblx0XHRzaG93Tm9Nb3JlOiBudWxsLCAvLyDmmL7npLrml6Dmm7TlpJrmlbDmja7nmoTlm57osINcblx0XHRoaWRlVXBTY3JvbGw6IG51bGwsIC8vIOmakOiXj+S4iuaLieWKoOi9veeahOWbnuiwg1xuXHRcdGVyckRpc3RhbmNlOiA2MCwgLy8gZW5kRXJy55qE5pe25YCZ6ZyA5b6A5LiK5ruR5Yqo5LiA5q616Led56a7LOS9v+WFtuW+gOS4i+a7keWKqOaXtuWGjeasoeinpuWPkW9uUmVhY2hCb3R0b20s5LuFbWVzY3JvbGwtYm9keeeUn+aViFxuXHRcdHRvVG9wOiB7XG5cdFx0XHQvLyDlm57liLDpobbpg6jmjInpkq4s6ZyA6YWN572uc3Jj5omN5pi+56S6XG5cdFx0XHRzcmM6IG51bGwsIC8vIOWbvueJh+i3r+W+hCzpu5jorqRudWxsICjnu53lr7not6/lvoTmiJbnvZHnu5zlm74pXG5cdFx0XHRvZmZzZXQ6IDEwMDAsIC8vIOWIl+ihqOa7muWKqOWkmuWwkei3neemu+aJjeaYvuekuuWbnuWIsOmhtumDqOaMiemSrizpu5jorqQxMDAwXG5cdFx0XHRkdXJhdGlvbjogMzAwLCAvLyDlm57liLDpobbpg6jnmoTliqjnlLvml7bplb8s6buY6K6kMzAwbXMgKOW9k+WAvOS4ujDmiJYzMDDliJnkvb/nlKjns7vnu5/oh6rluKblm57liLDpobbpg6gs5pu05rWB55WFOyDlhbbku5blgLzliJnpgJrov4dzdGVw5qih5oufLOmDqOWIhuacuuWei+WPr+iDveS4jeWkn+a1geeVhSzmiYDku6XpnZ7nibnmrormg4XlhrXkuI3lu7rorq7kv67mlLnmraTpobkpXG5cdFx0XHRidG5DbGljazogbnVsbCwgLy8g54K55Ye75oyJ6ZKu55qE5Zue6LCDXG5cdFx0XHRvblNob3c6IG51bGwsIC8vIOaYr+WQpuaYvuekuueahOWbnuiwg1xuXHRcdFx0ekluZGV4OiA5OTkwLCAvLyBmaXhlZOWumuS9jXotaW5kZXjlgLxcblx0XHRcdGxlZnQ6IG51bGwsIC8vIOWIsOW3pui+ueeahOi3neemuywg6buY6K6kbnVsbC4g5q2k6aG55pyJ5YC85pe2LHJpZ2h05LiN55Sf5pWILiAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcblx0XHRcdHJpZ2h0OiAyMCwgLy8g5Yiw5Y+z6L6555qE6Led56a7LCDpu5jorqQyMCAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcblx0XHRcdGJvdHRvbTogMTIwLCAvLyDliLDlupXpg6jnmoTot53nprssIOm7mOiupDEyMCAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcblx0XHRcdHNhZmVhcmVhOiBmYWxzZSwgLy8gYm90dG9t55qE5YGP56e76YeP5piv5ZCm5Yqg5LiK5bqV6YOo5a6J5YWo5Yy655qE6Led56a7LCDpu5jorqRmYWxzZSwg6ZyA6KaB6YCC6YWNaVBob25lWOaXtuS9v+eUqCAo5YW35L2T55qE55WM6Z2i5aaC5p6c5LiN6YWN572u5q2k6aG5LOWImeWPluacrHZ1ZeeahHNhZmVhcmVh5YC8KVxuXHRcdFx0d2lkdGg6IDcyLCAvLyDlm57liLDpobbpg6jlm77moIfnmoTlrr3luqYsIOm7mOiupDcyICjmlK/mjIEyMCwgXCIyMHJweFwiLCBcIjIwcHhcIiwgXCIyMCVcIuagvOW8j+eahOWAvCwg5YW25Lit57qv5pWw5a2X5YiZ6buY6K6k5Y2V5L2NcnB4KVxuXHRcdFx0cmFkaXVzOiBcIjUwJVwiIC8vIOWchuinkiwg6buY6K6kXCI1MCVcIiAo5pSv5oyBMjAsIFwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOWFtuS4ree6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcblx0XHR9LFxuXHRcdGVtcHR5OiB7XG5cdFx0XHR1c2U6IHRydWUsIC8vIOaYr+WQpuaYvuekuuepuuW4g+WxgFxuXHRcdFx0aWNvbjogbnVsbCwgLy8g5Zu+5qCH6Lev5b6EXG5cdFx0XHR0aXA6ICd+IOaaguaXoOebuOWFs+aVsOaNriB+JywgLy8g5o+Q56S6XG5cdFx0XHRidG5UZXh0OiAnJywgLy8g5oyJ6ZKuXG5cdFx0XHRidG5DbGljazogbnVsbCwgLy8g54K55Ye75oyJ6ZKu55qE5Zue6LCDXG5cdFx0XHRvblNob3c6IG51bGwsIC8vIOaYr+WQpuaYvuekuueahOWbnuiwg1xuXHRcdFx0Zml4ZWQ6IGZhbHNlLCAvLyDmmK/lkKbkvb/nlKhmaXhlZOWumuS9jSzpu5jorqRmYWxzZTsg6YWN572uZml4ZWTkuLp0cnVlLOS7peS4i+eahHRvcOWSjHpJbmRleOaJjeeUn+aViCAodHJhbnNmb3Jt5Lya5L2/Zml4ZWTlpLHmlYgs5pyA57uI5Lya6ZmN57qn5Li6YWJzb2x1dGUpXG5cdFx0XHR0b3A6IFwiMTAwcnB4XCIsIC8vIGZpeGVk5a6a5L2N55qEdG9w5YC8ICjlrozmlbTnmoTljZXkvY3lgLws5aaCIFwiMTAlXCI7IFwiMTAwcnB4XCIpXG5cdFx0XHR6SW5kZXg6IDk5IC8vIGZpeGVk5a6a5L2Nei1pbmRleOWAvFxuXHRcdH0sXG5cdFx0b25TY3JvbGw6IGZhbHNlIC8vIOaYr+WQpuebkeWQrOa7muWKqOS6i+S7tlxuXHR9KVxufVxuXG4vKiDphY3nva7lj4LmlbAgKi9cbk1lU2Nyb2xsLmV4dGVuZCA9IGZ1bmN0aW9uKHVzZXJPcHRpb24sIGRlZmF1bHRPcHRpb24pIHtcblx0aWYgKCF1c2VyT3B0aW9uKSByZXR1cm4gZGVmYXVsdE9wdGlvbjtcblx0Zm9yIChsZXQga2V5IGluIGRlZmF1bHRPcHRpb24pIHtcblx0XHRpZiAodXNlck9wdGlvbltrZXldID09IG51bGwpIHtcblx0XHRcdGxldCBkZWYgPSBkZWZhdWx0T3B0aW9uW2tleV07XG5cdFx0XHRpZiAoZGVmICE9IG51bGwgJiYgdHlwZW9mIGRlZiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0dXNlck9wdGlvbltrZXldID0gTWVTY3JvbGwuZXh0ZW5kKHt9LCBkZWYpOyAvLyDmt7HluqbljLnphY1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVzZXJPcHRpb25ba2V5XSA9IGRlZjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB1c2VyT3B0aW9uW2tleV0gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRNZVNjcm9sbC5leHRlbmQodXNlck9wdGlvbltrZXldLCBkZWZhdWx0T3B0aW9uW2tleV0pOyAvLyDmt7HluqbljLnphY1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHVzZXJPcHRpb247XG59XG5cbi8qIOeugOWNleWIpOaWreaYr+WQpumFjee9ruS6huminOiJsiAo6Z2e6YCP5piOLOmdnueZveiJsikgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5oYXNDb2xvciA9IGZ1bmN0aW9uKGNvbG9yKSB7XG5cdGlmKCFjb2xvcikgcmV0dXJuIGZhbHNlO1xuXHRsZXQgYyA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiBjICE9IFwiI2ZmZlwiICYmIGMgIT0gXCIjZmZmZmZmXCIgJiYgYyAhPSBcInRyYW5zcGFyZW50XCIgJiYgYyAhPSBcIndoaXRlXCJcbn1cblxuLyogLS0tLS0tLeWIneWni+WMluS4i+aLieWIt+aWsC0tLS0tLS0gKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5pbml0RG93blNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgbWUgPSB0aGlzO1xuXHQvLyDphY3nva7lj4LmlbBcblx0bWUub3B0RG93biA9IG1lLm9wdGlvbnMuZG93biB8fCB7fTtcblx0aWYoIW1lLm9wdERvd24udGV4dENvbG9yICYmIG1lLmhhc0NvbG9yKG1lLm9wdERvd24uYmdDb2xvcikpIG1lLm9wdERvd24udGV4dENvbG9yID0gXCIjZmZmXCI7IC8vIOW9k2JnQ29sb3LmnInlgLzkuJR0ZXh0Q29sb3LmnKrorr7nva4s5YiZdGV4dENvbG9y6buY6K6k55m96ImyXG5cdG1lLmV4dGVuZERvd25TY3JvbGwobWUub3B0RG93bik7XG5cdFxuXHQvLyDlpoLmnpzmmK9tZXNjcm9sbC1ib2R55LiU6YWN572u5LqGbmF0aXZlLOWImeemgeatouiHquWumuS5ieeahOS4i+aLieWIt+aWsFxuXHRpZihtZS5pc1Njcm9sbEJvZHkgJiYgbWUub3B0RG93bi5uYXRpdmUpe1xuXHRcdG1lLm9wdERvd24udXNlID0gZmFsc2Vcblx0fWVsc2V7XG5cdFx0bWUub3B0RG93bi5uYXRpdmUgPSBmYWxzZSAvLyDku4VtZXNjcm9sbC1ib2R55pSv5oyBLG1lc2Nyb2xsLXVuaeS4jeaUr+aMgVxuXHR9XG5cdFxuXHRtZS5kb3duSGlnaHQgPSAwOyAvLyDkuIvmi4nljLrln5/nmoTpq5jluqZcblxuXHQvLyDlnKjpobXpnaLkuK3liqDlhaXkuIvmi4nluIPlsYBcblx0aWYgKG1lLm9wdERvd24udXNlICYmIG1lLm9wdERvd24uaW5pdGVkKSB7XG5cdFx0Ly8g5Yid5aeL5YyW5a6M5q+V55qE5Zue6LCDXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgLy8g5b6F5Li757q/56iL5omn6KGM5a6M5q+V5YaN5omn6KGMLOmBv+WFjW5ldyBNZVNjcm9sbOacquWIneWni+WMlizlnKjlm57osIPojrflj5bkuI3liLBtZXNjcm9sbOeahOWunuS+i1xuXHRcdFx0bWUub3B0RG93bi5pbml0ZWQobWUpO1xuXHRcdH0sIDApXG5cdH1cbn1cblxuLyog5YiX6KGodG91Y2hzdGFydOS6i+S7tiAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnRvdWNoc3RhcnRFdmVudCA9IGZ1bmN0aW9uKGUpIHtcblx0aWYgKCF0aGlzLm9wdERvd24udXNlKSByZXR1cm47XG5cblx0dGhpcy5zdGFydFBvaW50ID0gdGhpcy5nZXRQb2ludChlKTsgLy8g6K6w5b2V6LW354K5XG5cdHRoaXMuc3RhcnRUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpOyAvLyDorrDlvZXmraTml7bnmoTmu5rliqjmnaHkvY3nva5cblx0dGhpcy5zdGFydEFuZ2xlID0gMDsgLy8g5Yid5aeL6KeS5bqmXG5cdHRoaXMubGFzdFBvaW50ID0gdGhpcy5zdGFydFBvaW50OyAvLyDph43nva7kuIrmrKFtb3Zl55qE54K5XG5cdHRoaXMubWF4VG91Y2htb3ZlWSA9IHRoaXMuZ2V0Qm9keUhlaWdodCgpIC0gdGhpcy5vcHREb3duLmJvdHRvbU9mZnNldDsgLy8g5omL5oyH6Kem5pG455qE5pyA5aSn6IyD5Zu0KOWGmeWcqHRvdWNoc3RhcnTpgb/lhY1ib2R56I635Y+W6auY5bqm5Li6MOeahOaDheWGtSlcblx0dGhpcy5pblRvdWNoZW5kID0gZmFsc2U7IC8vIOagh+iusOS4jeaYr3RvdWNoZW5kXG59XG5cbi8qIOWIl+ihqHRvdWNobW92ZeS6i+S7tiAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnRvdWNobW92ZUV2ZW50ID0gZnVuY3Rpb24oZSkge1xuXHRpZiAoIXRoaXMub3B0RG93bi51c2UpIHJldHVybjtcblx0bGV0IG1lID0gdGhpcztcblxuXHRsZXQgc2Nyb2xsVG9wID0gbWUuZ2V0U2Nyb2xsVG9wKCk7IC8vIOW9k+WJjea7muWKqOadoeeahOi3neemu1xuXHRsZXQgY3VyUG9pbnQgPSBtZS5nZXRQb2ludChlKTsgLy8g5b2T5YmN54K5XG5cblx0bGV0IG1vdmVZID0gY3VyUG9pbnQueSAtIG1lLnN0YXJ0UG9pbnQueTsgLy8g5ZKM6LW354K55q+ULOenu+WKqOeahOi3neemuyzlpKfkuo4w5ZCR5LiL5ouJLOWwj+S6jjDlkJHkuIrmi4lcblxuXHQvLyDlkJHkuIvmi4kgJiYg5Zyo6aG26YOoXG5cdC8vIG1lc2Nyb2xsLWJvZHks55u05o6l5Yik5a6a5Zyo6aG26YOo5Y2z5Y+vXG5cdC8vIHNjcm9sbC12aWV35Zyo5rua5Yqo5pe25LiN5Lya6Kem5Y+RdG91Y2htb3ZlLOW9k+inpumhti/lupUv5bemL+WPs+aXtizmiY3kvJrop6blj5F0b3VjaG1vdmVcblx0Ly8gc2Nyb2xsLXZpZXfmu5rliqjliLDpobbpg6jml7Ysc2Nyb2xsVG9w5LiN5LiA5a6a5Li6MCzkuZ/mnInlj6/og73lpKfkuo4wOyDlnKhpT1PnmoRBUFDkuK1zY3JvbGxUb3Dlj6/og73kuLrotJ/mlbAs5LiN5LiA5a6a5ZKMc3RhcnRUb3Dnm7jnrYlcblx0aWYgKG1vdmVZID4gMCAmJiAoXG5cdFx0XHQobWUuaXNTY3JvbGxCb2R5ICYmIHNjcm9sbFRvcCA8PSAwKVxuXHRcdFx0fHxcblx0XHRcdCghbWUuaXNTY3JvbGxCb2R5ICYmIChzY3JvbGxUb3AgPD0gMCB8fCAoc2Nyb2xsVG9wIDw9IG1lLm9wdERvd24uc3RhcnRUb3AgJiYgc2Nyb2xsVG9wID09PSBtZS5zdGFydFRvcCkpIClcblx0XHQpKSB7XG5cdFx0Ly8g5Y+v5LiL5ouJ55qE5p2h5Lu2XG5cdFx0aWYgKCFtZS5pblRvdWNoZW5kICYmICFtZS5pc0Rvd25TY3JvbGxpbmcgJiYgIW1lLm9wdERvd24uaXNMb2NrICYmICghbWUuaXNVcFNjcm9sbGluZyB8fCAobWUuaXNVcFNjcm9sbGluZyAmJlxuXHRcdFx0XHRtZS5vcHRVcC5pc0JvdGgpKSkge1xuXG5cdFx0XHQvLyDkuIvmi4nnmoTliJ3lp4vop5LluqbmmK/lkKblnKjphY3nva7nmoTojIPlm7TlhoVcblx0XHRcdGlmKCFtZS5zdGFydEFuZ2xlKSBtZS5zdGFydEFuZ2xlID0gbWUuZ2V0QW5nbGUobWUubGFzdFBvaW50LCBjdXJQb2ludCk7IC8vIOS4pOeCueS5i+mXtOeahOinkuW6pizljLrpl7QgWzAsOTBdXG5cdFx0XHRpZiAobWUuc3RhcnRBbmdsZSA8IG1lLm9wdERvd24ubWluQW5nbGUpIHJldHVybjsgLy8g5aaC5p6c5bCP5LqO6YWN572u55qE6KeS5bqmLOWImeS4jeW+gOS4i+aJp+ihjOS4i+aLieWIt+aWsFxuXG5cdFx0XHQvLyDlpoLmnpzmiYvmjIfnmoTkvY3nva7otoXov4fphY3nva7nmoTot53nprss5YiZ5o+Q5YmN57uT5p2f5LiL5ouJLOmBv+WFjVdlYnZpZXfltYzlpZflr7zoh7R0b3VjaGVuZOaXoOazleinpuWPkVxuXHRcdFx0aWYgKG1lLm1heFRvdWNobW92ZVkgPiAwICYmIGN1clBvaW50LnkgPj0gbWUubWF4VG91Y2htb3ZlWSkge1xuXHRcdFx0XHRtZS5pblRvdWNoZW5kID0gdHJ1ZTsgLy8g5qCH6K6w5omn6KGMdG91Y2hlbmRcblx0XHRcdFx0bWUudG91Y2hlbmRFdmVudCgpOyAvLyDmj5DliY3op6blj5F0b3VjaGVuZFxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdG1lLnByZXZlbnREZWZhdWx0KGUpOyAvLyDpmLvmraLpu5jorqTkuovku7ZcblxuXHRcdFx0bGV0IGRpZmYgPSBjdXJQb2ludC55IC0gbWUubGFzdFBvaW50Lnk7IC8vIOWSjOS4iuasoeavlCznp7vliqjnmoTot53nprsgKOWkp+S6jjDlkJHkuIss5bCP5LqOMOWQkeS4iilcblxuXHRcdFx0Ly8g5LiL5ouJ6Led56a7ICA8IOaMh+Wumui3neemu1xuXHRcdFx0aWYgKG1lLmRvd25IaWdodCA8IG1lLm9wdERvd24ub2Zmc2V0KSB7XG5cdFx0XHRcdGlmIChtZS5tb3ZldHlwZSAhPT0gMSkge1xuXHRcdFx0XHRcdG1lLm1vdmV0eXBlID0gMTsgLy8g5Yqg5YWl5qCH6K6wLOS/neivgeWPquaJp+ihjOS4gOasoVxuXHRcdFx0XHRcdG1lLmlzRG93bkVuZFN1Y2Nlc3MgPSBudWxsOyAvLyDph43nva7mmK/lkKbliqDovb3miJDlip/nmoTnirbmgIEgKHd4c+aJp+ihjOeahOaYr3d4cy53eHMpXG5cdFx0XHRcdFx0bWUub3B0RG93bi5pbk9mZnNldCAmJiBtZS5vcHREb3duLmluT2Zmc2V0KG1lKTsgLy8g6L+b5YWl5oyH5a6a6Led56a76IyD5Zu05YaF6YKj5LiA5Yi755qE5Zue6LCDLOWPquaJp+ihjOS4gOasoVxuXHRcdFx0XHRcdG1lLmlzTW92ZURvd24gPSB0cnVlOyAvLyDmoIforrDkuIvmi4nljLrln5/pq5jluqbmlLnlj5gs5ZyodG91Y2hlbmTph43nva7lm57mnaVcblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5kb3duSGlnaHQgKz0gZGlmZiAqIG1lLm9wdERvd24uaW5PZmZzZXRSYXRlOyAvLyDotorlvoDkuIss6auY5bqm5Y+Y5YyW6LaK5bCPXG5cblx0XHRcdFx0Ly8g5oyH5a6a6Led56a7ICA8PSDkuIvmi4not53nprtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChtZS5tb3ZldHlwZSAhPT0gMikge1xuXHRcdFx0XHRcdG1lLm1vdmV0eXBlID0gMjsgLy8g5Yqg5YWl5qCH6K6wLOS/neivgeWPquaJp+ihjOS4gOasoVxuXHRcdFx0XHRcdG1lLm9wdERvd24ub3V0T2Zmc2V0ICYmIG1lLm9wdERvd24ub3V0T2Zmc2V0KG1lKTsgLy8g5LiL5ouJ6LaF6L+H5oyH5a6a6Led56a76YKj5LiA5Yi755qE5Zue6LCDLOWPquaJp+ihjOS4gOasoVxuXHRcdFx0XHRcdG1lLmlzTW92ZURvd24gPSB0cnVlOyAvLyDmoIforrDkuIvmi4nljLrln5/pq5jluqbmlLnlj5gs5ZyodG91Y2hlbmTph43nva7lm57mnaVcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGlmZiA+IDApIHsgLy8g5ZCR5LiL5ouJXG5cdFx0XHRcdFx0bWUuZG93bkhpZ2h0ICs9IGRpZmYgKiBtZS5vcHREb3duLm91dE9mZnNldFJhdGU7IC8vIOi2iuW+gOS4iyzpq5jluqblj5jljJbotorlsI9cblx0XHRcdFx0fSBlbHNlIHsgLy8g5ZCR5LiK5pS2XG5cdFx0XHRcdFx0bWUuZG93bkhpZ2h0ICs9IGRpZmY7IC8vIOWQkeS4iuaUtuWbnumrmOW6pizliJnlkJHkuIrmu5HlpJrlsJHmlLblpJrlsJHpq5jluqZcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRtZS5kb3duSGlnaHQgPSBNYXRoLnJvdW5kKG1lLmRvd25IaWdodCkgLy8g5Y+W5pW0XG5cdFx0XHRsZXQgcmF0ZSA9IG1lLmRvd25IaWdodCAvIG1lLm9wdERvd24ub2Zmc2V0OyAvLyDkuIvmi4nljLrln5/lvZPliY3pq5jluqbkuI7mjIflrprot53nprvnmoTmr5TlgLxcblx0XHRcdG1lLm9wdERvd24ub25Nb3ZpbmcgJiYgbWUub3B0RG93bi5vbk1vdmluZyhtZSwgcmF0ZSwgbWUuZG93bkhpZ2h0KTsgLy8g5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOS4gOebtOWcqOaJp+ihjFxuXHRcdH1cblx0fVxuXG5cdG1lLmxhc3RQb2ludCA9IGN1clBvaW50OyAvLyDorrDlvZXmnKzmrKHnp7vliqjnmoTngrlcbn1cblxuLyog5YiX6KGodG91Y2hlbmTkuovku7YgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS50b3VjaGVuZEV2ZW50ID0gZnVuY3Rpb24oZSkge1xuXHRpZiAoIXRoaXMub3B0RG93bi51c2UpIHJldHVybjtcblx0Ly8g5aaC5p6c5LiL5ouJ5Yy65Z+f6auY5bqm5bey5pS55Y+YLOWImemcgOmHjee9ruWbnuadpVxuXHRpZiAodGhpcy5pc01vdmVEb3duKSB7XG5cdFx0aWYgKHRoaXMuZG93bkhpZ2h0ID49IHRoaXMub3B0RG93bi5vZmZzZXQpIHtcblx0XHRcdC8vIOespuWQiOinpuWPkeWIt+aWsOeahOadoeS7tlxuXHRcdFx0dGhpcy50cmlnZ2VyRG93blNjcm9sbCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDkuI3nrKblkIjnmoTor50g5YiZ6YeN572uXG5cdFx0XHR0aGlzLmRvd25IaWdodCA9IDA7XG5cdFx0XHR0aGlzLmVuZERvd25TY3JvbGxDYWxsKHRoaXMpO1xuXHRcdH1cblx0XHR0aGlzLm1vdmV0eXBlID0gMDtcblx0XHR0aGlzLmlzTW92ZURvd24gPSBmYWxzZTtcblx0fSBlbHNlIGlmICghdGhpcy5pc1Njcm9sbEJvZHkgJiYgdGhpcy5nZXRTY3JvbGxUb3AoKSA9PT0gdGhpcy5zdGFydFRvcCkgeyAvLyBzY3JvbGwtdmlld+WIsOmhti/lt6Yv5Y+zL+W6leeahOa7keWKqOS6i+S7tlxuXHRcdGxldCBpc1Njcm9sbFVwID0gdGhpcy5nZXRQb2ludChlKS55IC0gdGhpcy5zdGFydFBvaW50LnkgPCAwOyAvLyDlkozotbfngrnmr5Qs56e75Yqo55qE6Led56a7LOWkp+S6jjDlkJHkuIvmi4ks5bCP5LqOMOWQkeS4iuaLiVxuXHRcdC8vIOS4iua7kVxuXHRcdGlmIChpc1Njcm9sbFVwKSB7XG5cdFx0XHQvLyDpnIDmo4Dmn6Xmu5HliqjnmoTop5LluqZcblx0XHRcdGxldCBhbmdsZSA9IHRoaXMuZ2V0QW5nbGUodGhpcy5nZXRQb2ludChlKSwgdGhpcy5zdGFydFBvaW50KTsgLy8g5Lik54K55LmL6Ze055qE6KeS5bqmLOWMuumXtCBbMCw5MF1cblx0XHRcdGlmIChhbmdsZSA+IDgwKSB7XG5cdFx0XHRcdC8vIOajgOafpeW5tuinpuWPkeS4iuaLiVxuXHRcdFx0XHR0aGlzLnRyaWdnZXJVcFNjcm9sbCh0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyog5qC55o2u54K55Ye75ruR5Yqo5LqL5Lu26I635Y+W56ys5LiA5Liq5omL5oyH55qE5Z2Q5qCHICovXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0UG9pbnQgPSBmdW5jdGlvbihlKSB7XG5cdGlmICghZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMFxuXHRcdH1cblx0fVxuXHRpZiAoZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBlLnRvdWNoZXNbMF0ucGFnZVgsXG5cdFx0XHR5OiBlLnRvdWNoZXNbMF0ucGFnZVlcblx0XHR9XG5cdH0gZWxzZSBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsXG5cdFx0XHR5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBlLmNsaWVudFgsXG5cdFx0XHR5OiBlLmNsaWVudFlcblx0XHR9XG5cdH1cbn1cblxuLyog6K6h566X5Lik54K55LmL6Ze055qE6KeS5bqmOiDljLrpl7QgWzAsOTBdKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uKHAxLCBwMikge1xuXHRsZXQgeCA9IE1hdGguYWJzKHAxLnggLSBwMi54KTtcblx0bGV0IHkgPSBNYXRoLmFicyhwMS55IC0gcDIueSk7XG5cdGxldCB6ID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuXHRsZXQgYW5nbGUgPSAwO1xuXHRpZiAoeiAhPT0gMCkge1xuXHRcdGFuZ2xlID0gTWF0aC5hc2luKHkgLyB6KSAvIE1hdGguUEkgKiAxODA7XG5cdH1cblx0cmV0dXJuIGFuZ2xlXG59XG5cbi8qIOinpuWPkeS4i+aLieWIt+aWsCAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnRyaWdnZXJEb3duU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLm9wdERvd24uYmVmb3JlTG9hZGluZyAmJiB0aGlzLm9wdERvd24uYmVmb3JlTG9hZGluZyh0aGlzKSkge1xuXHRcdC8vcmV0dXJuIHRydWXliJnlpITkuo7lrozlhajoh6rlrprkuYnnirbmgIFcblx0fSBlbHNlIHtcblx0XHR0aGlzLnNob3dEb3duU2Nyb2xsKCk7IC8vIOS4i+aLieWIt+aWsOS4rS4uLlxuXHRcdCF0aGlzLm9wdERvd24ubmF0aXZlICYmIHRoaXMub3B0RG93bi5jYWxsYmFjayAmJiB0aGlzLm9wdERvd24uY2FsbGJhY2sodGhpcyk7IC8vIOaJp+ihjOWbnuiwgyzogZTnvZHliqDovb3mlbDmja5cblx0fVxufVxuXG4vKiDmmL7npLrkuIvmi4nov5vluqbluIPlsYAgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5zaG93RG93blNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmlzRG93blNjcm9sbGluZyA9IHRydWU7IC8vIOagh+iusOS4i+aLieS4rVxuXHRpZiAodGhpcy5vcHREb3duLm5hdGl2ZSkge1xuXHRcdHVuaS5zdGFydFB1bGxEb3duUmVmcmVzaCgpOyAvLyDns7vnu5/oh6rluKbnmoTkuIvmi4nliLfmlrBcblx0XHR0aGlzLnNob3dEb3duTG9hZGluZ0NhbGwoMCk7IC8vIOS7jeinpuWPkXNob3dMb2FkaW5nLOWboOS4uuS4iuaLieWKoOi9veeUqOWIsFxuXHR9IGVsc2V7XG5cdFx0dGhpcy5kb3duSGlnaHQgPSB0aGlzLm9wdERvd24ub2Zmc2V0OyAvLyDmm7TmlrDkuIvmi4nljLrln5/pq5jluqZcblx0XHR0aGlzLnNob3dEb3duTG9hZGluZ0NhbGwodGhpcy5kb3duSGlnaHQpOyAvLyDkuIvmi4nliLfmlrDkuK0uLi5cblx0fVxufVxuXG5NZVNjcm9sbC5wcm90b3R5cGUuc2hvd0Rvd25Mb2FkaW5nQ2FsbCA9IGZ1bmN0aW9uKGRvd25IaWdodCkge1xuXHR0aGlzLm9wdERvd24uc2hvd0xvYWRpbmcgJiYgdGhpcy5vcHREb3duLnNob3dMb2FkaW5nKHRoaXMsIGRvd25IaWdodCk7IC8vIOS4i+aLieWIt+aWsOS4rS4uLlxuXHR0aGlzLm9wdERvd24uYWZ0ZXJMb2FkaW5nICYmIHRoaXMub3B0RG93bi5hZnRlckxvYWRpbmcodGhpcywgZG93bkhpZ2h0KTsgLy8g5LiL5ouJ5Yi35paw5LitLi4u6Kem5Y+R5LmL5ZCO6ams5LiK6KaB5omn6KGM55qE5Luj56CBXG59XG5cbi8qIOaYvuekuuezu+e7n+iHquW4pueahOS4i+aLieWIt+aWsOaXtumcgOimgeWkhOeQhueahOS4muWKoSAqL1xuTWVTY3JvbGwucHJvdG90eXBlLm9uUHVsbERvd25SZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuaXNEb3duU2Nyb2xsaW5nID0gdHJ1ZTsgLy8g5qCH6K6w5LiL5ouJ5LitXG5cdHRoaXMuc2hvd0Rvd25Mb2FkaW5nQ2FsbCgwKTsgLy8g5LuN6Kem5Y+Rc2hvd0xvYWRpbmcs5Zug5Li65LiK5ouJ5Yqg6L2955So5YiwXG5cdHRoaXMub3B0RG93bi5jYWxsYmFjayAmJiB0aGlzLm9wdERvd24uY2FsbGJhY2sodGhpcyk7IC8vIOaJp+ihjOWbnuiwgyzogZTnvZHliqDovb3mlbDmja5cbn1cblxuLyog57uT5p2f5LiL5ouJ5Yi35pawICovXG5NZVNjcm9sbC5wcm90b3R5cGUuZW5kRG93blNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5vcHREb3duLm5hdGl2ZSkgeyAvLyDnu5PmnZ/ljp/nlJ/kuIvmi4nliLfmlrBcblx0XHR0aGlzLmlzRG93blNjcm9sbGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZW5kRG93blNjcm9sbENhbGwodGhpcyk7XG5cdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcblx0XHRyZXR1cm5cblx0fVxuXHRsZXQgbWUgPSB0aGlzO1xuXHQvLyDnu5PmnZ/kuIvmi4nliLfmlrDnmoTmlrnms5Vcblx0bGV0IGVuZFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHRcdG1lLmRvd25IaWdodCA9IDA7XG5cdFx0bWUuaXNEb3duU2Nyb2xsaW5nID0gZmFsc2U7XG5cdFx0bWUuZW5kRG93blNjcm9sbENhbGwobWUpO1xuXHRcdGlmKCFtZS5pc1Njcm9sbEJvZHkpe1xuXHRcdFx0bWUuc2V0U2Nyb2xsSGVpZ2h0KDApIC8vIHNjcm9sbC12aWV36YeN572u5rua5Yqo5Yy65Z+fLOS9v+aVsOaNruS4jea7oeWxj+aXtuS7jeWPr+ajgOafpeinpuWPkee/u+mhtVxuXHRcdFx0bWUuc2Nyb2xsVG8oMCwwKSAvLyBzY3JvbGwtdmlld+mcgOmHjee9rua7muWKqOadoeWIsOmhtumDqCzpgb/lhY1zdGFydFRvcOWkp+S6jjDml7Ys5a+55LiL5ouJ5Yi35paw55qE5b2x5ZONXG5cdFx0fVxuXHR9XG5cdC8vIOe7k+adn+S4i+aLieWIt+aWsOaXtueahOWbnuiwg1xuXHRsZXQgZGVsYXkgPSAwO1xuXHRpZiAobWUub3B0RG93bi5iZWZvcmVFbmREb3duU2Nyb2xsKSB7XG5cdFx0ZGVsYXkgPSBtZS5vcHREb3duLmJlZm9yZUVuZERvd25TY3JvbGwobWUpOyAvLyDnu5PmnZ/kuIvmi4nliLfmlrDnmoTlu7bml7Ys5Y2V5L2NbXNcblx0XHRpZihtZS5pc0Rvd25FbmRTdWNjZXNzID09IG51bGwpIGRlbGF5ID0gMDsgLy8g5rKh5pyJ5omn6KGM5Yqg6L295LitLOWImeS4jeW7tuaXtlxuXHR9XG5cdGlmICh0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInICYmIGRlbGF5ID4gMCkge1xuXHRcdHNldFRpbWVvdXQoZW5kU2Nyb2xsLCBkZWxheSk7XG5cdH0gZWxzZSB7XG5cdFx0ZW5kU2Nyb2xsKCk7XG5cdH1cbn1cblxuTWVTY3JvbGwucHJvdG90eXBlLmVuZERvd25TY3JvbGxDYWxsID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMub3B0RG93bi5lbmREb3duU2Nyb2xsICYmIHRoaXMub3B0RG93bi5lbmREb3duU2Nyb2xsKHRoaXMpO1xuXHR0aGlzLm9wdERvd24uYWZ0ZXJFbmREb3duU2Nyb2xsICYmIHRoaXMub3B0RG93bi5hZnRlckVuZERvd25TY3JvbGwodGhpcyk7XG59XG5cbi8qIOmUgeWumuS4i+aLieWIt+aWsDppc0xvY2s9dHVyZSxudWxs6ZSB5a6aO2lzTG9jaz1mYWxzZeino+mUgSAqL1xuTWVTY3JvbGwucHJvdG90eXBlLmxvY2tEb3duU2Nyb2xsID0gZnVuY3Rpb24oaXNMb2NrKSB7XG5cdGlmIChpc0xvY2sgPT0gbnVsbCkgaXNMb2NrID0gdHJ1ZTtcblx0dGhpcy5vcHREb3duLmlzTG9jayA9IGlzTG9jaztcbn1cblxuLyog6ZSB5a6a5LiK5ouJ5Yqg6L29OmlzTG9jaz10dXJlLG51bGzplIHlrpo7aXNMb2NrPWZhbHNl6Kej6ZSBICovXG5NZVNjcm9sbC5wcm90b3R5cGUubG9ja1VwU2Nyb2xsID0gZnVuY3Rpb24oaXNMb2NrKSB7XG5cdGlmIChpc0xvY2sgPT0gbnVsbCkgaXNMb2NrID0gdHJ1ZTtcblx0dGhpcy5vcHRVcC5pc0xvY2sgPSBpc0xvY2s7XG59XG5cbi8qIC0tLS0tLS3liJ3lp4vljJbkuIrmi4nliqDovb0tLS0tLS0tICovXG5NZVNjcm9sbC5wcm90b3R5cGUuaW5pdFVwU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG5cdGxldCBtZSA9IHRoaXM7XG5cdC8vIOmFjee9ruWPguaVsFxuXHRtZS5vcHRVcCA9IG1lLm9wdGlvbnMudXAgfHwge3VzZTogZmFsc2V9XG5cdGlmKCFtZS5vcHRVcC50ZXh0Q29sb3IgJiYgbWUuaGFzQ29sb3IobWUub3B0VXAuYmdDb2xvcikpIG1lLm9wdFVwLnRleHRDb2xvciA9IFwiI2ZmZlwiOyAvLyDlvZNiZ0NvbG9y5pyJ5YC85LiUdGV4dENvbG9y5pyq6K6+572uLOWImXRleHRDb2xvcum7mOiupOeZveiJslxuXHRtZS5leHRlbmRVcFNjcm9sbChtZS5vcHRVcCk7XG5cblx0aWYgKG1lLm9wdFVwLnVzZSA9PT0gZmFsc2UpIHJldHVybjsgLy8g6YWN572u5LiN5L2/55So5LiK5ouJ5Yqg6L295pe2LOWImeS4jeWIneWni+WMluS4iuaLieW4g+WxgFxuXHRtZS5vcHRVcC5oYXNOZXh0ID0gdHJ1ZTsgLy8g5aaC5p6c5L2/55So5LiK5ouJLOWImem7mOiupOacieS4i+S4gOmhtVxuXHRtZS5zdGFydE51bSA9IG1lLm9wdFVwLnBhZ2UubnVtICsgMTsgLy8g6K6w5b2VcGFnZeW8gOWni+eahOmhteeggVxuXG5cdC8vIOWIneWni+WMluWujOavleeahOWbnuiwg1xuXHRpZiAobWUub3B0VXAuaW5pdGVkKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgLy8g5b6F5Li757q/56iL5omn6KGM5a6M5q+V5YaN5omn6KGMLOmBv+WFjW5ldyBNZVNjcm9sbOacquWIneWni+WMlizlnKjlm57osIPojrflj5bkuI3liLBtZXNjcm9sbOeahOWunuS+i1xuXHRcdFx0bWUub3B0VXAuaW5pdGVkKG1lKTtcblx0XHR9LCAwKVxuXHR9XG59XG5cbi8q5rua5Yqo5Yiw5bqV6YOo55qE5LqL5Lu2ICjku4VtZXNjcm9sbC1ib2R555Sf5pWIKSovXG5NZVNjcm9sbC5wcm90b3R5cGUub25SZWFjaEJvdHRvbSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5pc1Njcm9sbEJvZHkgJiYgIXRoaXMuaXNVcFNjcm9sbGluZykgeyAvLyDlj6rog73mlK/mjIHkuIvmi4nliLfmlrDnmoTml7blgJnlkIzml7blj6/ku6Xop6blj5HkuIrmi4nliqDovb0s5ZCm5YiZ5rua5Yqo5Yiw5bqV6YOo5bCx6ZyA6KaB5LiK5ruR5LiA54K55omN6IO96Kem5Y+Rb25SZWFjaEJvdHRvbVxuXHRcdGlmICghdGhpcy5vcHRVcC5pc0xvY2sgJiYgdGhpcy5vcHRVcC5oYXNOZXh0KSB7XG5cdFx0XHR0aGlzLnRyaWdnZXJVcFNjcm9sbCgpO1xuXHRcdH1cblx0fVxufVxuXG4vKuWIl+ihqOa7muWKqOS6i+S7tiAo5LuFbWVzY3JvbGwtYm9keeeUn+aViCkqL1xuTWVTY3JvbGwucHJvdG90eXBlLm9uUGFnZVNjcm9sbCA9IGZ1bmN0aW9uKGUpIHtcblx0aWYgKCF0aGlzLmlzU2Nyb2xsQm9keSkgcmV0dXJuO1xuXHRcblx0Ly8g5pu05paw5rua5Yqo5p2h55qE5L2N572uICjkuLvopoHnlKjkuo7liKTmlq3kuIvmi4nliLfmlrDml7Ys5rua5Yqo5p2h5piv5ZCm5Zyo6aG26YOoKVxuXHR0aGlzLnNldFNjcm9sbFRvcChlLnNjcm9sbFRvcCk7XG5cblx0Ly8g6aG26YOo5oyJ6ZKu55qE5pi+56S66ZqQ6JePXG5cdGlmIChlLnNjcm9sbFRvcCA+PSB0aGlzLm9wdFVwLnRvVG9wLm9mZnNldCkge1xuXHRcdHRoaXMuc2hvd1RvcEJ0bigpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuaGlkZVRvcEJ0bigpO1xuXHR9XG59XG5cbi8q5YiX6KGo5rua5Yqo5LqL5Lu2Ki9cbk1lU2Nyb2xsLnByb3RvdHlwZS5zY3JvbGwgPSBmdW5jdGlvbihlLCBvblNjcm9sbCkge1xuXHQvLyDmm7TmlrDmu5rliqjmnaHnmoTkvY3nva5cblx0dGhpcy5zZXRTY3JvbGxUb3AoZS5zY3JvbGxUb3ApO1xuXHQvLyDmm7TmlrDmu5rliqjlhoXlrrnpq5jluqZcblx0dGhpcy5zZXRTY3JvbGxIZWlnaHQoZS5zY3JvbGxIZWlnaHQpO1xuXG5cdC8vIOWQkeS4iua7kei/mOaYr+WQkeS4i+a7keWKqFxuXHRpZiAodGhpcy5wcmVTY3JvbGxZID09IG51bGwpIHRoaXMucHJlU2Nyb2xsWSA9IDA7XG5cdHRoaXMuaXNTY3JvbGxVcCA9IGUuc2Nyb2xsVG9wIC0gdGhpcy5wcmVTY3JvbGxZID4gMDtcblx0dGhpcy5wcmVTY3JvbGxZID0gZS5zY3JvbGxUb3A7XG5cblx0Ly8g5LiK5ruRICYmIOajgOafpeW5tuinpuWPkeS4iuaLiVxuXHR0aGlzLmlzU2Nyb2xsVXAgJiYgdGhpcy50cmlnZ2VyVXBTY3JvbGwodHJ1ZSk7XG5cblx0Ly8g6aG26YOo5oyJ6ZKu55qE5pi+56S66ZqQ6JePXG5cdGlmIChlLnNjcm9sbFRvcCA+PSB0aGlzLm9wdFVwLnRvVG9wLm9mZnNldCkge1xuXHRcdHRoaXMuc2hvd1RvcEJ0bigpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuaGlkZVRvcEJ0bigpO1xuXHR9XG5cblx0Ly8g5ruR5Yqo55uR5ZCsXG5cdHRoaXMub3B0VXAub25TY3JvbGwgJiYgb25TY3JvbGwgJiYgb25TY3JvbGwoKVxufVxuXG4vKiDop6blj5HkuIrmi4nliqDovb0gKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS50cmlnZ2VyVXBTY3JvbGwgPSBmdW5jdGlvbihpc0NoZWNrKSB7XG5cdGlmICghdGhpcy5pc1VwU2Nyb2xsaW5nICYmIHRoaXMub3B0VXAudXNlICYmIHRoaXMub3B0VXAuY2FsbGJhY2spIHtcblx0XHQvLyDmmK/lkKbmoKHpqozlnKjlupXpg6g7IOm7mOiupOS4jeagoemqjFxuXHRcdGlmIChpc0NoZWNrID09PSB0cnVlKSB7XG5cdFx0XHRsZXQgY2FuVXAgPSBmYWxzZTtcblx0XHRcdC8vIOi/mOacieS4i+S4gOmhtSAmJiDmsqHmnInplIHlrpogJiYg5LiN5Zyo5LiL5ouJ5LitXG5cdFx0XHRpZiAodGhpcy5vcHRVcC5oYXNOZXh0ICYmICF0aGlzLm9wdFVwLmlzTG9jayAmJiAhdGhpcy5pc0Rvd25TY3JvbGxpbmcpIHtcblx0XHRcdFx0aWYgKHRoaXMuZ2V0U2Nyb2xsQm90dG9tKCkgPD0gdGhpcy5vcHRVcC5vZmZzZXQpIHsgLy8g5Yiw5bqV6YOoXG5cdFx0XHRcdFx0Y2FuVXAgPSB0cnVlOyAvLyDmoIforrDlj6/kuIrmi4lcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNhblVwID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNob3dVcFNjcm9sbCgpOyAvLyDkuIrmi4nliqDovb3kuK0uLi5cblx0XHR0aGlzLm9wdFVwLnBhZ2UubnVtKys7IC8vIOmihOWFiOWKoOS4gOmhtSzlpoLmnpzlpLHotKXliJnlh4/lm55cblx0XHR0aGlzLmlzVXBBdXRvTG9hZCA9IHRydWU7IC8vIOagh+iusOS4iuaLieW3sue7j+iHquWKqOaJp+ihjOi/hyzpgb/lhY3liJ3lp4vljJbml7blpJrmrKHop6blj5HkuIrmi4nlm57osINcblx0XHR0aGlzLm51bSA9IHRoaXMub3B0VXAucGFnZS5udW07IC8vIOaKiuacgOaWsOeahOmhteaVsOi1i+WAvOWcqG1lc2Nyb2xs5LiKLOmBv+WFjeWvuXBhZ2XnmoTlvbHlk41cblx0XHR0aGlzLnNpemUgPSB0aGlzLm9wdFVwLnBhZ2Uuc2l6ZTsgLy8g5oqK5pyA5paw55qE6aG156CB6LWL5YC85ZyobWVzY3JvbGzkuIos6YG/5YWN5a+5cGFnZeeahOW9seWTjVxuXHRcdHRoaXMudGltZSA9IHRoaXMub3B0VXAucGFnZS50aW1lOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXG5cdFx0dGhpcy5vcHRVcC5jYWxsYmFjayh0aGlzKTsgLy8g5omn6KGM5Zue6LCDLOiBlOe9keWKoOi9veaVsOaNrlxuXHR9XG59XG5cbi8qIOaYvuekuuS4iuaLieWKoOi9veS4rSAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnNob3dVcFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLmlzVXBTY3JvbGxpbmcgPSB0cnVlOyAvLyDmoIforrDkuIrmi4nliqDovb3kuK1cblx0dGhpcy5vcHRVcC5zaG93TG9hZGluZyAmJiB0aGlzLm9wdFVwLnNob3dMb2FkaW5nKHRoaXMpOyAvLyDlm57osINcbn1cblxuLyog5pi+56S65LiK5ouJ5peg5pu05aSa5pWw5o2uICovXG5NZVNjcm9sbC5wcm90b3R5cGUuc2hvd05vTW9yZSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm9wdFVwLmhhc05leHQgPSBmYWxzZTsgLy8g5qCH6K6w5peg5pu05aSa5pWw5o2uXG5cdHRoaXMub3B0VXAuc2hvd05vTW9yZSAmJiB0aGlzLm9wdFVwLnNob3dOb01vcmUodGhpcyk7IC8vIOWbnuiwg1xufVxuXG4vKiDpmpDol4/kuIrmi4nljLrln58qKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5oaWRlVXBTY3JvbGwgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5vcHRVcC5oaWRlVXBTY3JvbGwgJiYgdGhpcy5vcHRVcC5oaWRlVXBTY3JvbGwodGhpcyk7IC8vIOWbnuiwg1xufVxuXG4vKiDnu5PmnZ/kuIrmi4nliqDovb0gKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmRVcFNjcm9sbCA9IGZ1bmN0aW9uKGlzU2hvd05vTW9yZSkge1xuXHRpZiAoaXNTaG93Tm9Nb3JlICE9IG51bGwpIHsgLy8gaXNTaG93Tm9Nb3JlPW51bGws5LiN5aSE55CG5LiL5ouJ54q25oCBLOS4i+aLieWIt+aWsOeahOaXtuWAmeiwg+eUqFxuXHRcdGlmIChpc1Nob3dOb01vcmUpIHtcblx0XHRcdHRoaXMuc2hvd05vTW9yZSgpOyAvLyBpc1Nob3dOb01vcmU9dHJ1ZSzmmL7npLrml6Dmm7TlpJrmlbDmja5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5oaWRlVXBTY3JvbGwoKTsgLy8gaXNTaG93Tm9Nb3JlPWZhbHNlLOmakOiXj+S4iuaLieWKoOi9vVxuXHRcdH1cblx0fVxuXHR0aGlzLmlzVXBTY3JvbGxpbmcgPSBmYWxzZTsgLy8g5qCH6K6w57uT5p2f5LiK5ouJ5Yqg6L29XG59XG5cbi8qIOmHjee9ruS4iuaLieWKoOi9veWIl+ihqOS4uuesrOS4gOmhtVxuICppc1Nob3dMb2FkaW5nIOaYr+WQpuaYvuekuui/m+W6puW4g+WxgDtcbiAqIDEu6buY6K6kbnVsbCzkuI3kvKDlj4Is5YiZ5pi+56S65LiK5ouJ5Yqg6L2955qE6L+b5bqm5biD5bGAXG4gKiAyLuS8oOWPgnRydWUsIOWImeaYvuekuuS4i+aLieWIt+aWsOeahOi/m+W6puW4g+WxgFxuICogMy7kvKDlj4JmYWxzZSzliJnkuI3mmL7npLrkuIrmi4nlkozkuIvmi4nnmoTov5vluqYgKOW4uOeUqOS6jumdmem7mOabtOaWsOWIl+ihqOaVsOaNrilcbiAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnJlc2V0VXBTY3JvbGwgPSBmdW5jdGlvbihpc1Nob3dMb2FkaW5nKSB7XG5cdGlmICh0aGlzLm9wdFVwICYmIHRoaXMub3B0VXAudXNlKSB7XG5cdFx0bGV0IHBhZ2UgPSB0aGlzLm9wdFVwLnBhZ2U7XG5cdFx0dGhpcy5wcmVQYWdlTnVtID0gcGFnZS5udW07IC8vIOe8k+WtmOmHjee9ruWJjeeahOmhteeggSzliqDovb3lpLHotKXlj6/pgIDlm55cblx0XHR0aGlzLnByZVBhZ2VUaW1lID0gcGFnZS50aW1lOyAvLyDnvJPlrZjph43nva7liY3nmoTml7bpl7Qs5Yqg6L295aSx6LSl5Y+v6YCA5ZueXG5cdFx0cGFnZS5udW0gPSB0aGlzLnN0YXJ0TnVtOyAvLyDph43nva7kuLrnrKzkuIDpobVcblx0XHRwYWdlLnRpbWUgPSBudWxsOyAvLyDph43nva7ml7bpl7TkuLrnqbpcblx0XHRpZiAoIXRoaXMuaXNEb3duU2Nyb2xsaW5nICYmIGlzU2hvd0xvYWRpbmcgIT09IGZhbHNlKSB7IC8vIOWmguaenOS4jeaYr+S4i+aLieWIt+aWsOinpuWPkeeahHJlc2V0VXBTY3JvbGzlubbkuJTkuI3phY3nva7liJfooajpnZnpu5jmm7TmlrAs5YiZ5pi+56S66L+b5bqmO1xuXHRcdFx0aWYgKGlzU2hvd0xvYWRpbmcgPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVtcHR5KCk7IC8vIOenu+mZpOepuuW4g+WxgFxuXHRcdFx0XHR0aGlzLnNob3dVcFNjcm9sbCgpOyAvLyDkuI3kvKDlj4Is6buY6K6k5pi+56S65LiK5ouJ5Yqg6L2955qE6L+b5bqm5biD5bGAXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNob3dEb3duU2Nyb2xsKCk7IC8vIOS8oHRydWUs5pi+56S65LiL5ouJ5Yi35paw55qE6L+b5bqm5biD5bGALOS4jea4heepuuWIl+ihqFxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmlzVXBBdXRvTG9hZCA9IHRydWU7IC8vIOagh+iusOS4iuaLieW3sue7j+iHquWKqOaJp+ihjOi/hyzpgb/lhY3liJ3lp4vljJbml7blpJrmrKHop6blj5HkuIrmi4nlm57osINcblx0XHR0aGlzLm51bSA9IHBhZ2UubnVtOyAvLyDmiormnIDmlrDnmoTpobXmlbDotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXG5cdFx0dGhpcy5zaXplID0gcGFnZS5zaXplOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXG5cdFx0dGhpcy50aW1lID0gcGFnZS50aW1lOyAvLyDmiormnIDmlrDnmoTpobXnoIHotYvlgLzlnKhtZXNjcm9sbOS4iizpgb/lhY3lr7lwYWdl55qE5b2x5ZONXG5cdFx0dGhpcy5vcHRVcC5jYWxsYmFjayAmJiB0aGlzLm9wdFVwLmNhbGxiYWNrKHRoaXMpOyAvLyDmiafooYzkuIrmi4nlm57osINcblx0fVxufVxuXG4vKiDorr7nva5wYWdlLm51beeahOWAvCAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnNldFBhZ2VOdW0gPSBmdW5jdGlvbihudW0pIHtcblx0dGhpcy5vcHRVcC5wYWdlLm51bSA9IG51bSAtIDE7XG59XG5cbi8qIOiuvue9rnBhZ2Uuc2l6ZeeahOWAvCAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnNldFBhZ2VTaXplID0gZnVuY3Rpb24oc2l6ZSkge1xuXHR0aGlzLm9wdFVwLnBhZ2Uuc2l6ZSA9IHNpemU7XG59XG5cbi8qIOiBlOe9keWbnuiwg+aIkOWKnyznu5PmnZ/kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb1cbiAqIGRhdGFTaXplOiDlvZPliY3pobXnmoTmlbDmja7ph48o5b+F5LygKVxuICogdG90YWxQYWdlOiDmgLvpobXmlbAo5b+F5LygKVxuICogc3lzdGltZTog5pyN5Yqh5Zmo5pe26Ze0ICjlj6/nqbopXG4gKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmRCeVBhZ2UgPSBmdW5jdGlvbihkYXRhU2l6ZSwgdG90YWxQYWdlLCBzeXN0aW1lKSB7XG5cdGxldCBoYXNOZXh0O1xuXHRpZiAodGhpcy5vcHRVcC51c2UgJiYgdG90YWxQYWdlICE9IG51bGwpIGhhc05leHQgPSB0aGlzLm9wdFVwLnBhZ2UubnVtIDwgdG90YWxQYWdlOyAvLyDmmK/lkKbov5jmnInkuIvkuIDpobVcblx0dGhpcy5lbmRTdWNjZXNzKGRhdGFTaXplLCBoYXNOZXh0LCBzeXN0aW1lKTtcbn1cblxuLyog6IGU572R5Zue6LCD5oiQ5YqfLOe7k+adn+S4i+aLieWIt+aWsOWSjOS4iuaLieWKoOi9vVxuICogZGF0YVNpemU6IOW9k+WJjemhteeahOaVsOaNrumHjyjlv4XkvKApXG4gKiB0b3RhbFNpemU6IOWIl+ihqOaJgOacieaVsOaNruaAu+aVsOmHjyjlv4XkvKApXG4gKiBzeXN0aW1lOiDmnI3liqHlmajml7bpl7QgKOWPr+epuilcbiAqL1xuTWVTY3JvbGwucHJvdG90eXBlLmVuZEJ5U2l6ZSA9IGZ1bmN0aW9uKGRhdGFTaXplLCB0b3RhbFNpemUsIHN5c3RpbWUpIHtcblx0bGV0IGhhc05leHQ7XG5cdGlmICh0aGlzLm9wdFVwLnVzZSAmJiB0b3RhbFNpemUgIT0gbnVsbCkge1xuXHRcdGxldCBsb2FkU2l6ZSA9ICh0aGlzLm9wdFVwLnBhZ2UubnVtIC0gMSkgKiB0aGlzLm9wdFVwLnBhZ2Uuc2l6ZSArIGRhdGFTaXplOyAvLyDlt7LliqDovb3nmoTmlbDmja7mgLvmlbBcblx0XHRoYXNOZXh0ID0gbG9hZFNpemUgPCB0b3RhbFNpemU7IC8vIOaYr+WQpui/mOacieS4i+S4gOmhtVxuXHR9XG5cdHRoaXMuZW5kU3VjY2VzcyhkYXRhU2l6ZSwgaGFzTmV4dCwgc3lzdGltZSk7XG59XG5cbi8qIOiBlOe9keWbnuiwg+aIkOWKnyznu5PmnZ/kuIvmi4nliLfmlrDlkozkuIrmi4nliqDovb1cbiAqIGRhdGFTaXplOiDlvZPliY3pobXnmoTmlbDmja7kuKrmlbAo5LiN5piv5omA5pyJ6aG155qE5pWw5o2u5oC75ZKMKSznlKjkuo7kuIrmi4nliqDovb3liKTmlq3mmK/lkKbov5jmnInkuIvkuIDpobUu5aaC5p6c5LiN5LygLOWImeS8muWIpOaWrei/mOacieS4i+S4gOmhtVxuICogaGFzTmV4dDog5piv5ZCm6L+Y5pyJ5LiL5LiA6aG1LOW4g+WwlOexu+WeizvnlKjmnaXop6PlhrPov5nkuKrlsI/pl67popg65q+U5aaC5YiX6KGo5YWx5pyJMjDmnaHmlbDmja4s5q+P6aG15Yqg6L29MTDmnaEs5YWxMumhtS7lpoLmnpzlj6rmoLnmja5kYXRhU2l6ZeWIpOaWrSzliJnpnIDnv7vliLDnrKzkuInpobXmiY3kvJrnn6XpgZPml6Dmm7TlpJrmlbDmja4s5aaC5p6c5Lyg5LqGaGFzTmV4dCzliJnnv7vliLDnrKzkuozpobXljbPlj6/mmL7npLrml6Dmm7TlpJrmlbDmja4uXG4gKiBzeXN0aW1lOiDmnI3liqHlmajml7bpl7Qo5Y+v56m6KTvnlKjmnaXop6PlhrPov5nkuKrlsI/pl67popg65b2T5YeG5aSH57+75LiL5LiA6aG15pe2LOaVsOaNruW6k+aWsOWinuS6huWHoOadoeiusOW9lSzmraTml7bnv7vkuIvkuIDpobUs5YmN6Z2i55qE5Yeg5p2h5pWw5o2u5Lya5ZKM5LiK5LiA6aG155qE6YeN5aSNO+i/memHjOS8oOWFpeS6hnN5c3RpbWUs6YKj5LmIdXBDYWxsYmFja+eahHBhZ2UudGltZeWwseS8muacieWAvCzmiopwYWdlLnRpbWXkvKDnu5nmnI3liqHlmags6K6p5ZCO5Y+w6L+H5ruk5paw5Yqg5YWl55qE6YKj5Yeg5p2h6K6w5b2VXG4gKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5lbmRTdWNjZXNzID0gZnVuY3Rpb24oZGF0YVNpemUsIGhhc05leHQsIHN5c3RpbWUpIHtcblx0bGV0IG1lID0gdGhpcztcblx0Ly8g57uT5p2f5LiL5ouJ5Yi35pawXG5cdGlmIChtZS5pc0Rvd25TY3JvbGxpbmcpIHtcblx0XHRtZS5pc0Rvd25FbmRTdWNjZXNzID0gdHJ1ZVxuXHRcdG1lLmVuZERvd25TY3JvbGwoKTtcblx0fVxuXG5cdC8vIOe7k+adn+S4iuaLieWKoOi9vVxuXHRpZiAobWUub3B0VXAudXNlKSB7XG5cdFx0bGV0IGlzU2hvd05vTW9yZTsgLy8g5piv5ZCm5bey5peg5pu05aSa5pWw5o2uXG5cdFx0aWYgKGRhdGFTaXplICE9IG51bGwpIHtcblx0XHRcdGxldCBwYWdlTnVtID0gbWUub3B0VXAucGFnZS5udW07IC8vIOW9k+WJjemhteeggVxuXHRcdFx0bGV0IHBhZ2VTaXplID0gbWUub3B0VXAucGFnZS5zaXplOyAvLyDmr4/pobXplb/luqZcblx0XHRcdC8vIOWmguaenOaYr+esrOS4gOmhtVxuXHRcdFx0aWYgKHBhZ2VOdW0gPT09IDEpIHtcblx0XHRcdFx0aWYgKHN5c3RpbWUpIG1lLm9wdFVwLnBhZ2UudGltZSA9IHN5c3RpbWU7IC8vIOiuvue9ruWKoOi9veWIl+ihqOaVsOaNruesrOS4gOmhteeahOaXtumXtFxuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGFTaXplIDwgcGFnZVNpemUgfHwgaGFzTmV4dCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0Ly8g6L+U5Zue55qE5pWw5o2u5LiN5ruh5LiA6aG15pe2LOWImeivtOaYjuW3suaXoOabtOWkmuaVsOaNrlxuXHRcdFx0XHRtZS5vcHRVcC5oYXNOZXh0ID0gZmFsc2U7XG5cdFx0XHRcdGlmIChkYXRhU2l6ZSA9PT0gMCAmJiBwYWdlTnVtID09PSAxKSB7XG5cdFx0XHRcdFx0Ly8g5aaC5p6c56ys5LiA6aG15peg5Lu75L2V5pWw5o2u5LiU6YWN572u5LqG56m65biD5bGAXG5cdFx0XHRcdFx0aXNTaG93Tm9Nb3JlID0gZmFsc2U7XG5cdFx0XHRcdFx0bWUuc2hvd0VtcHR5KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8g5oC75YiX6KGo5pWw5bCR5LqO6YWN572u55qE5pWw6YePLOWImeS4jeaYvuekuuaXoOabtOWkmuaVsOaNrlxuXHRcdFx0XHRcdGxldCBhbGxEYXRhU2l6ZSA9IChwYWdlTnVtIC0gMSkgKiBwYWdlU2l6ZSArIGRhdGFTaXplO1xuXHRcdFx0XHRcdGlmIChhbGxEYXRhU2l6ZSA8IG1lLm9wdFVwLm5vTW9yZVNpemUpIHtcblx0XHRcdFx0XHRcdGlzU2hvd05vTW9yZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpc1Nob3dOb01vcmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtZS5yZW1vdmVFbXB0eSgpOyAvLyDnp7vpmaTnqbrluIPlsYBcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8g6L+Y5pyJ5LiL5LiA6aG1XG5cdFx0XHRcdGlzU2hvd05vTW9yZSA9IGZhbHNlO1xuXHRcdFx0XHRtZS5vcHRVcC5oYXNOZXh0ID0gdHJ1ZTtcblx0XHRcdFx0bWUucmVtb3ZlRW1wdHkoKTsgLy8g56e76Zmk56m65biD5bGAXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8g6ZqQ6JeP5LiK5ouJXG5cdFx0bWUuZW5kVXBTY3JvbGwoaXNTaG93Tm9Nb3JlKTtcblx0fVxufVxuXG4vKiDlm57osIPlpLHotKUs57uT5p2f5LiL5ouJ5Yi35paw5ZKM5LiK5ouJ5Yqg6L29ICovXG5NZVNjcm9sbC5wcm90b3R5cGUuZW5kRXJyID0gZnVuY3Rpb24oZXJyRGlzdGFuY2UpIHtcblx0Ly8g57uT5p2f5LiL5ouJLOWbnuiwg+Wksei0pemHjee9ruWbnuWOn+adpeeahOmhteeggeWSjOaXtumXtFxuXHRpZiAodGhpcy5pc0Rvd25TY3JvbGxpbmcpIHtcblx0XHR0aGlzLmlzRG93bkVuZFN1Y2Nlc3MgPSBmYWxzZVxuXHRcdGxldCBwYWdlID0gdGhpcy5vcHRVcC5wYWdlO1xuXHRcdGlmIChwYWdlICYmIHRoaXMucHJlUGFnZU51bSkge1xuXHRcdFx0cGFnZS5udW0gPSB0aGlzLnByZVBhZ2VOdW07XG5cdFx0XHRwYWdlLnRpbWUgPSB0aGlzLnByZVBhZ2VUaW1lO1xuXHRcdH1cblx0XHR0aGlzLmVuZERvd25TY3JvbGwoKTtcblx0fVxuXHQvLyDnu5PmnZ/kuIrmi4ks5Zue6LCD5aSx6LSl6YeN572u5Zue5Y6f5p2l55qE6aG156CBXG5cdGlmICh0aGlzLmlzVXBTY3JvbGxpbmcpIHtcblx0XHR0aGlzLm9wdFVwLnBhZ2UubnVtLS07XG5cdFx0dGhpcy5lbmRVcFNjcm9sbChmYWxzZSk7XG5cdFx0Ly8g5aaC5p6c5pivbWVzY3JvbGwtYm9keSzliJnpnIDlvoDlm57mu5rkuIDlrprot53nprtcblx0XHRpZih0aGlzLmlzU2Nyb2xsQm9keSAmJiBlcnJEaXN0YW5jZSAhPT0gMCl7IC8vIOS4jeWkhOeQhjBcblx0XHRcdGlmKCFlcnJEaXN0YW5jZSkgZXJyRGlzdGFuY2UgPSB0aGlzLm9wdFVwLmVyckRpc3RhbmNlOyAvLyDkuI3kvKAs5YiZ5Y+W6buY6K6kXG5cdFx0XHR0aGlzLnNjcm9sbFRvKHRoaXMuZ2V0U2Nyb2xsVG9wKCkgLSBlcnJEaXN0YW5jZSwgMCkgLy8g5b6A5LiK5Zue5rua55qE6Led56a7XG5cdFx0fVxuXHR9XG59XG5cbi8qIOaYvuekuuepuuW4g+WxgCAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnNob3dFbXB0eSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm9wdFVwLmVtcHR5LnVzZSAmJiB0aGlzLm9wdFVwLmVtcHR5Lm9uU2hvdyAmJiB0aGlzLm9wdFVwLmVtcHR5Lm9uU2hvdyh0cnVlKVxufVxuXG4vKiDnp7vpmaTnqbrluIPlsYAgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm9wdFVwLmVtcHR5LnVzZSAmJiB0aGlzLm9wdFVwLmVtcHR5Lm9uU2hvdyAmJiB0aGlzLm9wdFVwLmVtcHR5Lm9uU2hvdyhmYWxzZSlcbn1cblxuLyog5pi+56S65Zue5Yiw6aG26YOo55qE5oyJ6ZKuICovXG5NZVNjcm9sbC5wcm90b3R5cGUuc2hvd1RvcEJ0biA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMudG9wQnRuU2hvdykge1xuXHRcdHRoaXMudG9wQnRuU2hvdyA9IHRydWU7XG5cdFx0dGhpcy5vcHRVcC50b1RvcC5vblNob3cgJiYgdGhpcy5vcHRVcC50b1RvcC5vblNob3codHJ1ZSk7XG5cdH1cbn1cblxuLyog6ZqQ6JeP5Zue5Yiw6aG26YOo55qE5oyJ6ZKuICovXG5NZVNjcm9sbC5wcm90b3R5cGUuaGlkZVRvcEJ0biA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy50b3BCdG5TaG93KSB7XG5cdFx0dGhpcy50b3BCdG5TaG93ID0gZmFsc2U7XG5cdFx0dGhpcy5vcHRVcC50b1RvcC5vblNob3cgJiYgdGhpcy5vcHRVcC50b1RvcC5vblNob3coZmFsc2UpO1xuXHR9XG59XG5cbi8qIOiOt+WPlua7muWKqOadoeeahOS9jee9riAqL1xuTWVTY3JvbGwucHJvdG90eXBlLmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5zY3JvbGxUb3AgfHwgMFxufVxuXG4vKiDorrDlvZXmu5rliqjmnaHnmoTkvY3nva4gKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5zZXRTY3JvbGxUb3AgPSBmdW5jdGlvbih5KSB7XG5cdHRoaXMuc2Nyb2xsVG9wID0geTtcbn1cblxuLyog5rua5Yqo5Yiw5oyH5a6a5L2N572uICovXG5NZVNjcm9sbC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbih5LCB0KSB7XG5cdHRoaXMubXlTY3JvbGxUbyAmJiB0aGlzLm15U2Nyb2xsVG8oeSwgdCkgLy8gc2Nyb2xsdmlld+mcgOiHquWumuS5ieWbnuWIsOmhtumDqOaWueazlVxufVxuXG4vKiDoh6rlrprkuYlzY3JvbGxUbyAqL1xuTWVTY3JvbGwucHJvdG90eXBlLnJlc2V0U2Nyb2xsVG8gPSBmdW5jdGlvbihteVNjcm9sbFRvKSB7XG5cdHRoaXMubXlTY3JvbGxUbyA9IG15U2Nyb2xsVG9cbn1cblxuLyog5rua5Yqo5p2h5Yiw5bqV6YOo55qE6Led56a7ICovXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0U2Nyb2xsQm90dG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFNjcm9sbEhlaWdodCgpIC0gdGhpcy5nZXRDbGllbnRIZWlnaHQoKSAtIHRoaXMuZ2V0U2Nyb2xsVG9wKClcbn1cblxuLyog6K6h5q2l5ZmoXG4gc3Rhcjog5byA5aeL5YC8XG4gZW5kOiDnu5PmnZ/lgLxcbiBjYWxsYmFjayhzdGVwLHRpbWVyKTog5Zue6LCDc3RlcOWAvCzorqHmraXlmah0aW1lcizlj6/oh6rooYzpgJrov4d3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcinnu5PmnZ/orqHmraXlmag7XG4gdDog6K6h5q2l5pe26ZW/LOS8oDDliJnnm7TmjqXlm57osINlbmTlgLw75LiN5Lyg5YiZ6buY6K6kMzAwbXNcbiByYXRlOiDlkajmnJ875LiN5Lyg5YiZ6buY6K6kMzBtc+iuoeatpeS4gOasoVxuICogKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRTdGVwID0gZnVuY3Rpb24oc3RhciwgZW5kLCBjYWxsYmFjaywgdCwgcmF0ZSkge1xuXHRsZXQgZGlmZiA9IGVuZCAtIHN0YXI7IC8vIOW3ruWAvFxuXHRpZiAodCA9PT0gMCB8fCBkaWZmID09PSAwKSB7XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soZW5kKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dCA9IHQgfHwgMzAwOyAvLyDml7bplb8gMzAwbXNcblx0cmF0ZSA9IHJhdGUgfHwgMzA7IC8vIOWRqOacnyAzMG1zXG5cdGxldCBjb3VudCA9IHQgLyByYXRlOyAvLyDmrKHmlbBcblx0bGV0IHN0ZXAgPSBkaWZmIC8gY291bnQ7IC8vIOatpemVv1xuXHRsZXQgaSA9IDA7IC8vIOiuoeaVsFxuXHRsZXQgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRpZiAoaSA8IGNvdW50IC0gMSkge1xuXHRcdFx0c3RhciArPSBzdGVwO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soc3RhciwgdGltZXIpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhlbmQsIHRpbWVyKTsgLy8g5pyA5ZCO5LiA5qyh55u05o6l6K6+572uZW5kLOmBv+WFjeiuoeeul+ivr+W3rlxuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0fVxuXHR9LCByYXRlKTtcbn1cblxuLyog5rua5Yqo5a655Zmo55qE6auY5bqmICovXG5NZVNjcm9sbC5wcm90b3R5cGUuZ2V0Q2xpZW50SGVpZ2h0ID0gZnVuY3Rpb24oaXNSZWFsKSB7XG5cdGxldCBoID0gdGhpcy5jbGllbnRIZWlnaHQgfHwgMFxuXHRpZiAoaCA9PT0gMCAmJiBpc1JlYWwgIT09IHRydWUpIHsgLy8g5pyq6I635Y+W5Yiw5a655Zmo55qE6auY5bqmLOWPr+S4tOaXtuWPlmJvZHnnmoTpq5jluqYgKOWPr+iDveS8muacieivr+W3rilcblx0XHRoID0gdGhpcy5nZXRCb2R5SGVpZ2h0KClcblx0fVxuXHRyZXR1cm4gaFxufVxuTWVTY3JvbGwucHJvdG90eXBlLnNldENsaWVudEhlaWdodCA9IGZ1bmN0aW9uKGgpIHtcblx0dGhpcy5jbGllbnRIZWlnaHQgPSBoO1xufVxuXG4vKiDmu5rliqjlhoXlrrnnmoTpq5jluqYgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuc2Nyb2xsSGVpZ2h0IHx8IDA7XG59XG5NZVNjcm9sbC5wcm90b3R5cGUuc2V0U2Nyb2xsSGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xuXHR0aGlzLnNjcm9sbEhlaWdodCA9IGg7XG59XG5cbi8qIGJvZHnnmoTpq5jluqYgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5nZXRCb2R5SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmJvZHlIZWlnaHQgfHwgMDtcbn1cbk1lU2Nyb2xsLnByb3RvdHlwZS5zZXRCb2R5SGVpZ2h0ID0gZnVuY3Rpb24oaCkge1xuXHR0aGlzLmJvZHlIZWlnaHQgPSBoO1xufVxuXG4vKiDpmLvmraLmtY/op4jlmajpu5jorqTmu5rliqjkuovku7YgKi9cbk1lU2Nyb2xsLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcblx0Ly8g5bCP56iL5bqP5LiN5pSv5oyBZS5wcmV2ZW50RGVmYXVsdCwg5bey5Zyod3hz5Lit56aB5q2iXG5cdC8vIGFwcOeahGJvdW5jZeWPquiDvemAmui/h+mFjee9rnBhZ2VzLmpzb27nmoRzdHlsZS5hcHAtcGx1cy5ib3VuY2XkuLpcIm5vbmVcIuadpeemgeatoiwg5oiW5L2/55SocmVuZGVyanPnpoHmraJcblx0Ly8gY2FuY2VsYWJsZTrmmK/lkKblj6/ku6XooqvnpoHnlKg7IGRlZmF1bHRQcmV2ZW50ZWQ65piv5ZCm5bey57uP6KKr56aB55SoXG5cdGlmIChlICYmIGUuY2FuY2VsYWJsZSAmJiAhZS5kZWZhdWx0UHJldmVudGVkKSBlLnByZXZlbnREZWZhdWx0KClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n");

/***/ }),
/* 53 */
/*!***************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/mescroll-uni-option.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// 全局配置\n// mescroll-body 和 mescroll-uni 通用\nvar GlobalOption = {\n  down: {\n    // 其他down的配置参数也可以写,这里只展示了常用的配置:\n    textInOffset: '下拉刷新',\n    // 下拉的距离在offset范围内的提示文本\n    textOutOffset: '释放更新',\n    // 下拉的距离大于offset范围的提示文本\n    textLoading: '加载中 ...',\n    // 加载中的提示文本\n    textSuccess: '加载成功',\n    // 加载成功的文本\n    textErr: '加载失败',\n    // 加载失败的文本\n    beforeEndDelay: 100,\n    // 延时结束的时长 (显示加载成功/失败的时长)\n    offset: 80,\n    // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调\n    native: false // 是否使用系统自带的下拉刷新; 默认false; 仅在mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)\n  },\n\n  up: {\n    // 其他up的配置参数也可以写,这里只展示了常用的配置:\n    textLoading: '加载中 ...',\n    // 加载中的提示文本\n    textNoMore: '没有更多了~',\n    // 没有更多数据的提示文本\n    offset: 150,\n    // 距底部多远时,触发upCallback,仅mescroll-uni生效 ( mescroll-body配置的是pages.json的 onReachBottomDistance )\n    toTop: {\n      // 回到顶部按钮,需配置src才显示\n      src: \"https://www.mescroll.com/img/mescroll-totop.png\",\n      // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )\n      offset: 1000,\n      // 列表滚动多少距离才显示回到顶部按钮,默认1000px\n      right: 20,\n      // 到右边的距离, 默认20 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n      bottom: 100,\n      // 到底部的距离, 默认120 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n      width: 84 // 回到顶部图标的宽度, 默认72 (支持\"20rpx\", \"20px\", \"20%\"格式的值, 纯数字则默认单位rpx)\n    },\n\n    empty: {\n      use: true,\n      // 是否显示空布局\n      icon: \"https://www.mescroll.com/img/mescroll-empty.png\",\n      // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )\n      tip: '空空如也' // 提示\n    }\n  }\n};\nvar _default = GlobalOption;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvbWVzY3JvbGwtdW5pLW9wdGlvbi5qcyJdLCJuYW1lcyI6WyJHbG9iYWxPcHRpb24iLCJkb3duIiwidGV4dEluT2Zmc2V0IiwidGV4dE91dE9mZnNldCIsInRleHRMb2FkaW5nIiwidGV4dFN1Y2Nlc3MiLCJ0ZXh0RXJyIiwiYmVmb3JlRW5kRGVsYXkiLCJvZmZzZXQiLCJuYXRpdmUiLCJ1cCIsInRleHROb01vcmUiLCJ0b1RvcCIsInNyYyIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJlbXB0eSIsInVzZSIsImljb24iLCJ0aXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUc7RUFDcEJDLElBQUksRUFBRTtJQUNMO0lBQ0FDLFlBQVksRUFBRSxNQUFNO0lBQUU7SUFDdEJDLGFBQWEsRUFBRSxNQUFNO0lBQUU7SUFDdkJDLFdBQVcsRUFBRSxTQUFTO0lBQUU7SUFDeEJDLFdBQVcsRUFBRSxNQUFNO0lBQUU7SUFDckJDLE9BQU8sRUFBRSxNQUFNO0lBQUU7SUFDakJDLGNBQWMsRUFBRSxHQUFHO0lBQUU7SUFDckJDLE1BQU0sRUFBRSxFQUFFO0lBQUU7SUFDWkMsTUFBTSxFQUFFLEtBQUssQ0FBQztFQUNmLENBQUM7O0VBQ0RDLEVBQUUsRUFBRTtJQUNIO0lBQ0FOLFdBQVcsRUFBRSxTQUFTO0lBQUU7SUFDeEJPLFVBQVUsRUFBRSxRQUFRO0lBQUU7SUFDdEJILE1BQU0sRUFBRSxHQUFHO0lBQUU7SUFDYkksS0FBSyxFQUFFO01BQ047TUFDQUMsR0FBRyxFQUFFLGlEQUFpRDtNQUFFO01BQ3hETCxNQUFNLEVBQUUsSUFBSTtNQUFFO01BQ2RNLEtBQUssRUFBRSxFQUFFO01BQUU7TUFDWEMsTUFBTSxFQUFFLEdBQUc7TUFBRTtNQUNiQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7SUFDREMsS0FBSyxFQUFFO01BQ05DLEdBQUcsRUFBRSxJQUFJO01BQUU7TUFDWEMsSUFBSSxFQUFFLGlEQUFpRDtNQUFFO01BQ3pEQyxHQUFHLEVBQUUsTUFBTSxDQUFDO0lBQ2I7RUFDRDtBQUNELENBQUM7QUFBQSxlQUVjcEIsWUFBWTtBQUFBIiwiZmlsZSI6IjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5YWo5bGA6YWN572uXG4vLyBtZXNjcm9sbC1ib2R5IOWSjCBtZXNjcm9sbC11bmkg6YCa55SoXG5jb25zdCBHbG9iYWxPcHRpb24gPSB7XG5cdGRvd246IHtcblx0XHQvLyDlhbbku5Zkb3du55qE6YWN572u5Y+C5pWw5Lmf5Y+v5Lul5YaZLOi/memHjOWPquWxleekuuS6huW4uOeUqOeahOmFjee9rjpcblx0XHR0ZXh0SW5PZmZzZXQ6ICfkuIvmi4nliLfmlrAnLCAvLyDkuIvmi4nnmoTot53nprvlnKhvZmZzZXTojIPlm7TlhoXnmoTmj5DnpLrmlofmnKxcblx0XHR0ZXh0T3V0T2Zmc2V0OiAn6YeK5pS+5pu05pawJywgLy8g5LiL5ouJ55qE6Led56a75aSn5LqOb2Zmc2V06IyD5Zu055qE5o+Q56S65paH5pysXG5cdFx0dGV4dExvYWRpbmc6ICfliqDovb3kuK0gLi4uJywgLy8g5Yqg6L295Lit55qE5o+Q56S65paH5pysXG5cdFx0dGV4dFN1Y2Nlc3M6ICfliqDovb3miJDlip8nLCAvLyDliqDovb3miJDlip/nmoTmlofmnKxcblx0XHR0ZXh0RXJyOiAn5Yqg6L295aSx6LSlJywgLy8g5Yqg6L295aSx6LSl55qE5paH5pysXG5cdFx0YmVmb3JlRW5kRGVsYXk6IDEwMCwgLy8g5bu25pe257uT5p2f55qE5pe26ZW/ICjmmL7npLrliqDovb3miJDlip8v5aSx6LSl55qE5pe26ZW/KVxuXHRcdG9mZnNldDogODAsIC8vIOWcqOWIl+ihqOmhtumDqCzkuIvmi4nlpKfkuo44MHB4LOadvuaJi+WNs+WPr+inpuWPkeS4i+aLieWIt+aWsOeahOWbnuiwg1xuXHRcdG5hdGl2ZTogZmFsc2UgLy8g5piv5ZCm5L2/55So57O757uf6Ieq5bim55qE5LiL5ouJ5Yi35pawOyDpu5jorqRmYWxzZTsg5LuF5ZyobWVzY3JvbGwtYm9keeeUn+aViCAo5YC85Li6dHJ1ZeaXtizov5jpnIDlnKhwYWdlc+mFjee9rmVuYWJsZVB1bGxEb3duUmVmcmVzaDp0cnVlO+ivpuivt+WPguiAg21lc2Nyb2xsLW5hdGl2ZeeahOahiOS+iylcblx0fSxcblx0dXA6IHtcblx0XHQvLyDlhbbku5Z1cOeahOmFjee9ruWPguaVsOS5n+WPr+S7peWGmSzov5nph4zlj6rlsZXnpLrkuobluLjnlKjnmoTphY3nva46XG5cdFx0dGV4dExvYWRpbmc6ICfliqDovb3kuK0gLi4uJywgLy8g5Yqg6L295Lit55qE5o+Q56S65paH5pysXG5cdFx0dGV4dE5vTW9yZTogJ+ayoeacieabtOWkmuS6hn4nLCAvLyDmsqHmnInmm7TlpJrmlbDmja7nmoTmj5DnpLrmlofmnKxcblx0XHRvZmZzZXQ6IDE1MCwgLy8g6Led5bqV6YOo5aSa6L+c5pe2LOinpuWPkXVwQ2FsbGJhY2ss5LuFbWVzY3JvbGwtdW5p55Sf5pWIICggbWVzY3JvbGwtYm9keemFjee9rueahOaYr3BhZ2VzLmpzb27nmoQgb25SZWFjaEJvdHRvbURpc3RhbmNlIClcblx0XHR0b1RvcDoge1xuXHRcdFx0Ly8g5Zue5Yiw6aG26YOo5oyJ6ZKuLOmcgOmFjee9rnNyY+aJjeaYvuekulxuXHRcdFx0c3JjOiBcImh0dHBzOi8vd3d3Lm1lc2Nyb2xsLmNvbS9pbWcvbWVzY3JvbGwtdG90b3AucG5nXCIsIC8vIOWbvueJh+i3r+W+hCAo5bu66K6u5pS+5YWlc3RhdGlj55uu5b2VLCDlpoIgL3N0YXRpYy9pbWcvbWVzY3JvbGwtdG90b3AucG5nIClcblx0XHRcdG9mZnNldDogMTAwMCwgLy8g5YiX6KGo5rua5Yqo5aSa5bCR6Led56a75omN5pi+56S65Zue5Yiw6aG26YOo5oyJ6ZKuLOm7mOiupDEwMDBweFxuXHRcdFx0cmlnaHQ6IDIwLCAvLyDliLDlj7PovrnnmoTot53nprssIOm7mOiupDIwICjmlK/mjIFcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDnuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXG5cdFx0XHRib3R0b206IDEwMCwgLy8g5Yiw5bqV6YOo55qE6Led56a7LCDpu5jorqQxMjAgKOaUr+aMgVwiMjBycHhcIiwgXCIyMHB4XCIsIFwiMjAlXCLmoLzlvI/nmoTlgLwsIOe6r+aVsOWtl+WImem7mOiupOWNleS9jXJweClcblx0XHRcdHdpZHRoOiA4NCAvLyDlm57liLDpobbpg6jlm77moIfnmoTlrr3luqYsIOm7mOiupDcyICjmlK/mjIFcIjIwcnB4XCIsIFwiMjBweFwiLCBcIjIwJVwi5qC85byP55qE5YC8LCDnuq/mlbDlrZfliJnpu5jorqTljZXkvY1ycHgpXG5cdFx0fSxcblx0XHRlbXB0eToge1xuXHRcdFx0dXNlOiB0cnVlLCAvLyDmmK/lkKbmmL7npLrnqbrluIPlsYBcblx0XHRcdGljb246IFwiaHR0cHM6Ly93d3cubWVzY3JvbGwuY29tL2ltZy9tZXNjcm9sbC1lbXB0eS5wbmdcIiwgLy8g5Zu+5qCH6Lev5b6EICjlu7rorq7mlL7lhaVzdGF0aWPnm67lvZUsIOWmgiAvc3RhdGljL2ltZy9tZXNjcm9sbC1lbXB0eS5wbmcgKVxuXHRcdFx0dGlwOiAn56m656m65aaC5LmfJyAvLyDmj5DnpLpcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsT3B0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!**********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-empty.vue ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-empty.vue?vue&type=template&id=0d51d09c& */ 55);\n/* harmony import */ var _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-empty.vue?vue&type=script&lang=js& */ 57);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mescroll-uni/components/mescroll-empty.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ3lOO0FBQ3pOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDUxZDA5YyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVzY3JvbGwtZW1wdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtZW1wdHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-empty.vue?vue&type=template&id=0d51d09c& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-empty.vue?vue&type=template&id=0d51d09c& */ 56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_template_id_0d51d09c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 56 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-empty.vue?vue&type=template&id=0d51d09c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "mescroll-empty"),
      class: _vm._$s(0, "c", { "empty-fixed": _vm.option.fixed }),
      style: _vm._$s(0, "s", {
        "z-index": _vm.option.zIndex,
        top: _vm.option.top,
      }),
      attrs: { _i: 0 },
    },
    [
      _c("view", [
        _vm._$s(2, "i", _vm.icon)
          ? _c("image", {
              staticClass: _vm._$s(2, "sc", "empty-icon"),
              attrs: { src: _vm._$s(2, "a-src", _vm.icon), _i: 2 },
            })
          : _vm._e(),
      ]),
      _vm._$s(3, "i", _vm.tip)
        ? _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "empty-tip"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.tip)))]
          )
        : _vm._e(),
      _vm._$s(4, "i", _vm.option.btnText)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(4, "sc", "empty-btn"),
              attrs: { _i: 4 },
              on: { click: _vm.emptyClick },
            },
            [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.option.btnText)))]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 57 */
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-empty.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-empty.vue?vue&type=script&lang=js& */ 58);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_empty_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWt3QixDQUFnQixvdEJBQUcsRUFBQyIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc2Nyb2xsLWVtcHR5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVzY3JvbGwtZW1wdHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-empty.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _mescrollUniOption = _interopRequireDefault(__webpack_require__(/*! ./../mescroll-uni-option.js */ 53));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 引入全局配置\nvar _default2 = {\n  props: {\n    // empty的配置项: 默认为GlobalOption.up.empty\n    option: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  // 使用computed获取配置,用于支持option的动态配置\n  computed: {\n    // 图标\n    icon: function icon() {\n      return this.option.icon == null ? _mescrollUniOption.default.up.empty.icon : this.option.icon; // 此处不使用短路求值, 用于支持传空串不显示图标\n    },\n    // 文本提示\n    tip: function tip() {\n      return this.option.tip == null ? _mescrollUniOption.default.up.empty.tip : this.option.tip; // 此处不使用短路求值, 用于支持传空串不显示文本提示\n    }\n  },\n\n  methods: {\n    // 点击按钮\n    emptyClick: function emptyClick() {\n      this.$emit('emptyclick');\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC1lbXB0eS52dWUiXSwibmFtZXMiOlsicHJvcHMiLCJvcHRpb24iLCJ0eXBlIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwiaWNvbiIsInRpcCIsIm1ldGhvZHMiLCJlbXB0eUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFBQSxnQkFFQTtFQUNBQTtJQUNBO0lBQ0FDO01BQ0FDO01BQ0FDO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBOztFQUNBQztJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiI1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS3nqbrluIPlsYBcblxu5Y+v5L2c5Li654us56uL55qE57uE5Lu2LCDkuI3kvb/nlKhtZXNjcm9sbOeahOmhtemdouS5n+iDveWNleeLrOW8leWFpSwg5Lul5L6/QVBQ5YWo5bGA57uf5LiA566h55CGOlxuaW1wb3J0IE1lc2Nyb2xsRW1wdHkgZnJvbSAnQC9jb21wb25lbnRzL21lc2Nyb2xsLXVuaS9jb21wb25lbnRzL21lc2Nyb2xsLWVtcHR5LnZ1ZSc7XG48bWVzY3JvbGwtZW1wdHkgdi1pZj1cImlzU2hvd0VtcHR5XCIgOm9wdGlvbj1cIm9wdEVtcHR5XCIgQGVtcHR5Y2xpY2s9XCJlbXB0eUNsaWNrXCI+PC9tZXNjcm9sbC1lbXB0eT5cblxuLS0+XG48dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwibWVzY3JvbGwtZW1wdHlcIiA6Y2xhc3M9XCJ7ICdlbXB0eS1maXhlZCc6IG9wdGlvbi5maXhlZCB9XCIgOnN0eWxlPVwieyAnei1pbmRleCc6IG9wdGlvbi56SW5kZXgsIHRvcDogb3B0aW9uLnRvcCB9XCI+XG5cdFx0PHZpZXc+IDxpbWFnZSB2LWlmPVwiaWNvblwiIGNsYXNzPVwiZW1wdHktaWNvblwiIDpzcmM9XCJpY29uXCIgbW9kZT1cIndpZHRoRml4XCIgLz4gPC92aWV3PlxuXHRcdDx2aWV3IHYtaWY9XCJ0aXBcIiBjbGFzcz1cImVtcHR5LXRpcFwiPnt7IHRpcCB9fTwvdmlldz5cblx0XHQ8dmlldyB2LWlmPVwib3B0aW9uLmJ0blRleHRcIiBjbGFzcz1cImVtcHR5LWJ0blwiIEBjbGljaz1cImVtcHR5Q2xpY2tcIj57eyBvcHRpb24uYnRuVGV4dCB9fTwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIOW8leWFpeWFqOWxgOmFjee9rlxuaW1wb3J0IEdsb2JhbE9wdGlvbiBmcm9tICcuLy4uL21lc2Nyb2xsLXVuaS1vcHRpb24uanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuXHRcdC8vIGVtcHR555qE6YWN572u6aG5OiDpu5jorqTkuLpHbG9iYWxPcHRpb24udXAuZW1wdHlcblx0XHRvcHRpb246IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdC8vIOS9v+eUqGNvbXB1dGVk6I635Y+W6YWN572uLOeUqOS6juaUr+aMgW9wdGlvbueahOWKqOaAgemFjee9rlxuXHRjb21wdXRlZDoge1xuXHRcdC8vIOWbvuagh1xuXHRcdGljb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb24uaWNvbiA9PSBudWxsID8gR2xvYmFsT3B0aW9uLnVwLmVtcHR5Lmljb24gOiB0aGlzLm9wdGlvbi5pY29uOyAvLyDmraTlpITkuI3kvb/nlKjnn63ot6/msYLlgLwsIOeUqOS6juaUr+aMgeS8oOepuuS4suS4jeaYvuekuuWbvuagh1xuXHRcdH0sXG5cdFx0Ly8g5paH5pys5o+Q56S6XG5cdFx0dGlwKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uLnRpcCA9PSBudWxsID8gR2xvYmFsT3B0aW9uLnVwLmVtcHR5LnRpcCA6IHRoaXMub3B0aW9uLnRpcDsgLy8g5q2k5aSE5LiN5L2/55So55+t6Lev5rGC5YC8LCDnlKjkuo7mlK/mjIHkvKDnqbrkuLLkuI3mmL7npLrmlofmnKzmj5DnpLpcblx0XHR9XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvLyDngrnlh7vmjInpkq5cblx0XHRlbXB0eUNsaWNrKCkge1xuXHRcdFx0dGhpcy4kZW1pdCgnZW1wdHljbGljaycpO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4vKiDml6Dku7vkvZXmlbDmja7nmoTnqbrluIPlsYAgKi9cbi5tZXNjcm9sbC1lbXB0eSB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAyMDBycHggNTBycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lc2Nyb2xsLWVtcHR5LmVtcHR5LWZpeGVkIHtcblx0ei1pbmRleDogOTk7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyp0cmFuc2Zvcm3kvJrkvb9maXhlZOWkseaViCzmnIDnu4jkvJrpmY3nuqfkuLphYnNvbHV0ZSAqL1xuXHR0b3A6IDEwMHJweDtcblx0bGVmdDogMDtcbn1cblxuLm1lc2Nyb2xsLWVtcHR5IC5lbXB0eS1pY29uIHtcblx0d2lkdGg6IDMwMHJweDtcblx0aGVpZ2h0OiAzMDBycHg7XG59XG5cbi5tZXNjcm9sbC1lbXB0eSAuZW1wdHktdGlwIHtcblx0bWFyZ2luLXRvcDogMjBycHg7XG5cdGZvbnQtc2l6ZTogMjZycHg7XG5cdGNvbG9yOiBncmF5O1xufVxuXG4ubWVzY3JvbGwtZW1wdHkgLmVtcHR5LWJ0biB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLXRvcDogNDBycHg7XG5cdG1pbi13aWR0aDogMjAwcnB4O1xuXHRwYWRkaW5nOiAxOHJweDtcblx0Zm9udC1zaXplOiAyOHJweDtcblx0Ym9yZGVyOiAxcnB4IHNvbGlkICNlMDRiMjg7XG5cdGJvcmRlci1yYWRpdXM6IDYwcnB4O1xuXHRjb2xvcjogI2UwNGIyODtcbn1cblxuLm1lc2Nyb2xsLWVtcHR5IC5lbXB0eS1idG46YWN0aXZlIHtcblx0b3BhY2l0eTogMC43NTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!********************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-top.vue ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mescroll-top.vue?vue&type=template&id=f59b820c& */ 60);\n/* harmony import */ var _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mescroll-top.vue?vue&type=script&lang=js& */ 62);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 25);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/mescroll-uni/components/mescroll-top.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDekg7QUFDZ0U7QUFDTDs7O0FBRzNEO0FBQ3lOO0FBQ3pOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lc2Nyb2xsLXRvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjU5YjgyMGMmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNjcm9sbC10b3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVzY3JvbGwtdW5pL2NvbXBvbmVudHMvbWVzY3JvbGwtdG9wLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-top.vue?vue&type=template&id=f59b820c& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-top.vue?vue&type=template&id=f59b820c& */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_template_id_f59b820c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 61 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-top.vue?vue&type=template&id=f59b820c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.mOption.src)
    ? _c("image", {
        staticClass: _vm._$s(0, "sc", "mescroll-totop"),
        class: _vm._$s(0, "c", [
          _vm.value ? "mescroll-totop-in" : "mescroll-totop-out",
          { "mescroll-totop-safearea": _vm.mOption.safearea },
        ]),
        style: _vm._$s(0, "s", {
          "z-index": _vm.mOption.zIndex,
          left: _vm.left,
          right: _vm.right,
          bottom: _vm.addUnit(_vm.mOption.bottom),
          width: _vm.addUnit(_vm.mOption.width),
          "border-radius": _vm.addUnit(_vm.mOption.radius),
        }),
        attrs: { src: _vm._$s(0, "a-src", _vm.mOption.src), _i: 0 },
        on: { click: _vm.toTopClick },
      })
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 62 */
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-top.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mescroll-top.vue?vue&type=script&lang=js& */ 63);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mescroll_top_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd3QixDQUFnQixrdEJBQUcsRUFBQyIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc2Nyb2xsLXRvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc2Nyb2xsLXRvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/components/mescroll-top.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  props: {\n    // up.toTop的配置项\n    option: Object,\n    // 是否显示\n    value: false\n  },\n  computed: {\n    // 支付宝小程序需写成计算属性,prop定义default仍报错\n    mOption: function mOption() {\n      return this.option || {};\n    },\n    // 优先显示左边\n    left: function left() {\n      return this.mOption.left ? this.addUnit(this.mOption.left) : 'auto';\n    },\n    // 右边距离 (优先显示左边)\n    right: function right() {\n      return this.mOption.left ? 'auto' : this.addUnit(this.mOption.right);\n    }\n  },\n  methods: {\n    addUnit: function addUnit(num) {\n      if (!num) return 0;\n      if (typeof num === 'number') return num + 'rpx';\n      return num;\n    },\n    toTopClick: function toTopClick() {\n      this.$emit('input', false); // 使v-model生效\n      this.$emit('click'); // 派发点击事件\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvY29tcG9uZW50cy9tZXNjcm9sbC10b3AudnVlIl0sIm5hbWVzIjpbInByb3BzIiwib3B0aW9uIiwidmFsdWUiLCJjb21wdXRlZCIsIm1PcHRpb24iLCJsZWZ0IiwicmlnaHQiLCJtZXRob2RzIiwiYWRkVW5pdCIsInRvVG9wQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFjQTtFQUNBQTtJQUNBO0lBQ0FDO0lBQ0E7SUFDQUM7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIOWbnuWIsOmhtumDqOeahOaMiemSriAtLT5cbjx0ZW1wbGF0ZT5cblx0PGltYWdlXG5cdFx0di1pZj1cIm1PcHRpb24uc3JjXCJcblx0XHRjbGFzcz1cIm1lc2Nyb2xsLXRvdG9wXCJcblx0XHQ6Y2xhc3M9XCJbdmFsdWUgPyAnbWVzY3JvbGwtdG90b3AtaW4nIDogJ21lc2Nyb2xsLXRvdG9wLW91dCcsIHsnbWVzY3JvbGwtdG90b3Atc2FmZWFyZWEnOiBtT3B0aW9uLnNhZmVhcmVhfV1cIlxuXHRcdDpzdHlsZT1cInsnei1pbmRleCc6bU9wdGlvbi56SW5kZXgsICdsZWZ0JzogbGVmdCwgJ3JpZ2h0JzogcmlnaHQsICdib3R0b20nOmFkZFVuaXQobU9wdGlvbi5ib3R0b20pLCAnd2lkdGgnOmFkZFVuaXQobU9wdGlvbi53aWR0aCksICdib3JkZXItcmFkaXVzJzphZGRVbml0KG1PcHRpb24ucmFkaXVzKX1cIlxuXHRcdDpzcmM9XCJtT3B0aW9uLnNyY1wiXG5cdFx0bW9kZT1cIndpZHRoRml4XCJcblx0XHRAY2xpY2s9XCJ0b1RvcENsaWNrXCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG5cdFx0Ly8gdXAudG9Ub3DnmoTphY3nva7poblcblx0XHRvcHRpb246IE9iamVjdCxcblx0XHQvLyDmmK/lkKbmmL7npLpcblx0XHR2YWx1ZTogZmFsc2Vcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHQvLyDmlK/ku5jlrp3lsI/nqIvluo/pnIDlhpnmiJDorqHnrpflsZ7mgKcscHJvcOWumuS5iWRlZmF1bHTku43miqXplJlcblx0XHRtT3B0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb24gfHwge31cblx0XHR9LFxuXHRcdC8vIOS8mOWFiOaYvuekuuW3pui+uVxuXHRcdGxlZnQoKXtcblx0XHRcdHJldHVybiB0aGlzLm1PcHRpb24ubGVmdCA/IHRoaXMuYWRkVW5pdCh0aGlzLm1PcHRpb24ubGVmdCkgOiAnYXV0byc7XG5cdFx0fSxcblx0XHQvLyDlj7Povrnot53nprsgKOS8mOWFiOaYvuekuuW3pui+uSlcblx0XHRyaWdodCgpIHtcblx0XHRcdHJldHVybiB0aGlzLm1PcHRpb24ubGVmdCA/ICdhdXRvJyA6IHRoaXMuYWRkVW5pdCh0aGlzLm1PcHRpb24ucmlnaHQpO1xuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGFkZFVuaXQobnVtKXtcblx0XHRcdGlmKCFudW0pIHJldHVybiAwO1xuXHRcdFx0aWYodHlwZW9mIG51bSA9PT0gJ251bWJlcicpIHJldHVybiBudW0gKyAncnB4Jztcblx0XHRcdHJldHVybiBudW1cblx0XHR9LFxuXHRcdHRvVG9wQ2xpY2soKSB7XG5cdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIGZhbHNlKTsgLy8g5L2/di1tb2RlbOeUn+aViFxuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTsgLy8g5rS+5Y+R54K55Ye75LqL5Lu2XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi8qIOWbnuWIsOmhtumDqOeahOaMiemSriAqL1xuLm1lc2Nyb2xsLXRvdG9wIHtcblx0ei1pbmRleDogOTk5MDtcblx0cG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7IC8qIOWKoOS4imltcG9ydGFudOmBv+WFjee8luivkeWIsEg1LOWcqOWkmm1lc2Nyb2xs5Lit5a6a5L2N5aSx5pWIICovXG5cdHJpZ2h0OiAyMHJweDtcblx0Ym90dG9tOiAxMjBycHg7XG5cdHdpZHRoOiA4NHJweDtcblx0aGVpZ2h0OiBhdXRvO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdG9wYWNpdHk6IDA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC41czsgLyog6L+H5rihICovXG5cdG1hcmdpbi1ib3R0b206IHZhcigtLXdpbmRvdy1ib3R0b20pOyAvKiBjc3Plj5jph48gKi9cbn1cblxuLyog6YCC6YWNIGlQaG9uZVggKi9cbkBzdXBwb3J0cyAoYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSkgb3IgKGJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKSB7XG5cdC5tZXNjcm9sbC10b3RvcC1zYWZlYXJlYSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS13aW5kb3ctYm90dG9tKSArIGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTsgLyogd2luZG93LWJvdHRvbSArIOmAgumFjSBpUGhvbmVYICovXG5cdFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS13aW5kb3ctYm90dG9tKSArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSk7XG5cdH1cbn1cblxuLyog5pi+56S6IC0tIOa3oeWFpSAqL1xuLm1lc2Nyb2xsLXRvdG9wLWluIHtcblx0b3BhY2l0eTogMTtcbn1cblxuLyog6ZqQ6JePIC0tIOa3oeWHuuS4lOS4jeaOpeaUtuS6i+S7tiovXG4ubWVzY3JvbGwtdG90b3Atb3V0IHtcblx0b3BhY2l0eTogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///63\n");

/***/ }),
/* 64 */
/*!******************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/wxs/mixins.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// 定义在wxs (含renderjs) 逻辑层的数据和方法, 与视图层相互通信\nvar WxsMixin = {\n  data: function data() {\n    return {\n      // 传入wxs视图层的数据 (响应式)\n      wxsProp: {\n        optDown: {},\n        // 下拉刷新的配置\n        scrollTop: 0,\n        // 滚动条的距离\n        bodyHeight: 0,\n        // body的高度\n        isDownScrolling: false,\n        // 是否正在下拉刷新中\n        isUpScrolling: false,\n        // 是否正在上拉加载中\n        isScrollBody: true,\n        // 是否为mescroll-body滚动\n        isUpBoth: true,\n        // 上拉加载时,是否同时可以下拉刷新\n        t: 0 // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)\n      },\n\n      // 标记调用wxs视图层的方法\n      callProp: {\n        callType: '',\n        // 方法名\n        t: 0 // 数据更新的标记 (只有数据更新了,才会触发wxs的Observer)\n      }\n\n      // 不用wxs的平台使用此处的wxsBiz对象,抹平wxs的写法 (微信小程序和APP使用的wxsBiz对象是./wxs/wxs.wxs)\n\n      // 不用renderjs的平台使用此处的renderBiz对象,抹平renderjs的写法 (app 和 h5 使用的renderBiz对象是./wxs/renderjs.js)\n    };\n  },\n\n  methods: {\n    // wxs视图层调用逻辑层的回调\n    wxsCall: function wxsCall(msg) {\n      if (msg.type === 'setWxsProp') {\n        // 更新wxsProp数据 (值改变才触发更新)\n        this.wxsProp = {\n          optDown: this.mescroll.optDown,\n          scrollTop: this.mescroll.getScrollTop(),\n          bodyHeight: this.mescroll.getBodyHeight(),\n          isDownScrolling: this.mescroll.isDownScrolling,\n          isUpScrolling: this.mescroll.isUpScrolling,\n          isUpBoth: this.mescroll.optUp.isBoth,\n          isScrollBody: this.mescroll.isScrollBody,\n          t: Date.now()\n        };\n      } else if (msg.type === 'setLoadType') {\n        // 设置inOffset,outOffset的状态\n        this.downLoadType = msg.downLoadType;\n        // 状态挂载到mescroll对象, 以便在其他组件中使用, 比如<me-video>中\n        this.$set(this.mescroll, 'downLoadType', this.downLoadType);\n        // 重置是否加载成功的状态\n        this.$set(this.mescroll, 'isDownEndSuccess', null);\n      } else if (msg.type === 'triggerDownScroll') {\n        // 主动触发下拉刷新\n        this.mescroll.triggerDownScroll();\n      } else if (msg.type === 'endDownScroll') {\n        // 结束下拉刷新\n        this.mescroll.endDownScroll();\n      } else if (msg.type === 'triggerUpScroll') {\n        // 主动触发上拉加载\n        this.mescroll.triggerUpScroll(true);\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    // 配置主动触发wxs显示加载进度的回调\n    this.mescroll.optDown.afterLoading = function () {\n      _this.callProp = {\n        callType: \"showLoading\",\n        t: Date.now()\n      }; // 触发wxs的方法 (值改变才触发更新)\n    };\n    // 配置主动触发wxs隐藏加载进度的回调\n    this.mescroll.optDown.afterEndDownScroll = function () {\n      _this.callProp = {\n        callType: \"endDownScroll\",\n        t: Date.now()\n      }; // 触发wxs的方法 (值改变才触发更新)\n      var delay = 300 + (_this.mescroll.optDown.beforeEndDelay || 0);\n      setTimeout(function () {\n        if (_this.downLoadType === 4 || _this.downLoadType === 0) {\n          _this.callProp = {\n            callType: \"clearTransform\",\n            t: Date.now()\n          }; // 触发wxs的方法 (值改变才触发更新)\n        }\n        // 状态挂载到mescroll对象, 以便在其他组件中使用, 比如<me-video>中\n        _this.$set(_this.mescroll, 'downLoadType', _this.downLoadType);\n      }, delay);\n    };\n    // 初始化wxs的数据\n    this.wxsCall({\n      type: 'setWxsProp'\n    });\n  }\n};\nvar _default = WxsMixin;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9tZXNjcm9sbC11bmkvd3hzL21peGlucy5qcyJdLCJuYW1lcyI6WyJXeHNNaXhpbiIsImRhdGEiLCJ3eHNQcm9wIiwib3B0RG93biIsInNjcm9sbFRvcCIsImJvZHlIZWlnaHQiLCJpc0Rvd25TY3JvbGxpbmciLCJpc1VwU2Nyb2xsaW5nIiwiaXNTY3JvbGxCb2R5IiwiaXNVcEJvdGgiLCJ0IiwiY2FsbFByb3AiLCJjYWxsVHlwZSIsIm1ldGhvZHMiLCJ3eHNDYWxsIiwibXNnIiwidHlwZSIsIm1lc2Nyb2xsIiwiZ2V0U2Nyb2xsVG9wIiwiZ2V0Qm9keUhlaWdodCIsIm9wdFVwIiwiaXNCb3RoIiwiRGF0ZSIsIm5vdyIsImRvd25Mb2FkVHlwZSIsIiRzZXQiLCJ0cmlnZ2VyRG93blNjcm9sbCIsImVuZERvd25TY3JvbGwiLCJ0cmlnZ2VyVXBTY3JvbGwiLCJtb3VudGVkIiwiYWZ0ZXJMb2FkaW5nIiwiYWZ0ZXJFbmREb3duU2Nyb2xsIiwiZGVsYXkiLCJiZWZvcmVFbmREZWxheSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsUUFBUSxHQUFHO0VBQ2hCQyxJQUFJLGtCQUFHO0lBQ04sT0FBTztNQUNOO01BQ0FDLE9BQU8sRUFBRTtRQUNSQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQUU7UUFDWkMsU0FBUyxFQUFDLENBQUM7UUFBRTtRQUNiQyxVQUFVLEVBQUMsQ0FBQztRQUFFO1FBQ2RDLGVBQWUsRUFBQyxLQUFLO1FBQUU7UUFDdkJDLGFBQWEsRUFBQyxLQUFLO1FBQUU7UUFDckJDLFlBQVksRUFBQyxJQUFJO1FBQUU7UUFDbkJDLFFBQVEsRUFBQyxJQUFJO1FBQUU7UUFDZkMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNOLENBQUM7O01BRUQ7TUFDQUMsUUFBUSxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxFQUFFO1FBQUU7UUFDZEYsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNOOztN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RUFBRSxLQUFJLENBQUNPLFlBQVksQ0FBQztNQUM1RCxDQUFDLEVBQUVRLEtBQUssQ0FBQztJQUNWLENBQUM7SUFDRDtJQUNBLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQztNQUFDRSxJQUFJLEVBQUU7SUFBWSxDQUFDLENBQUM7RUFFbkM7QUFDRCxDQUFDO0FBQUEsZUFFY2hCLFFBQVE7QUFBQSIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWumuS5ieWcqHd4cyAo5ZCrcmVuZGVyanMpIOmAu+i+keWxgueahOaVsOaNruWSjOaWueazlSwg5LiO6KeG5Zu+5bGC55u45LqS6YCa5L+hXG5jb25zdCBXeHNNaXhpbiA9IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Ly8g5Lyg5YWld3hz6KeG5Zu+5bGC55qE5pWw5o2uICjlk43lupTlvI8pXG5cdFx0XHR3eHNQcm9wOiB7XG5cdFx0XHRcdG9wdERvd246e30sIC8vIOS4i+aLieWIt+aWsOeahOmFjee9rlxuXHRcdFx0XHRzY3JvbGxUb3A6MCwgLy8g5rua5Yqo5p2h55qE6Led56a7XG5cdFx0XHRcdGJvZHlIZWlnaHQ6MCwgLy8gYm9keeeahOmrmOW6plxuXHRcdFx0XHRpc0Rvd25TY3JvbGxpbmc6ZmFsc2UsIC8vIOaYr+WQpuato+WcqOS4i+aLieWIt+aWsOS4rVxuXHRcdFx0XHRpc1VwU2Nyb2xsaW5nOmZhbHNlLCAvLyDmmK/lkKbmraPlnKjkuIrmi4nliqDovb3kuK1cblx0XHRcdFx0aXNTY3JvbGxCb2R5OnRydWUsIC8vIOaYr+WQpuS4um1lc2Nyb2xsLWJvZHnmu5rliqhcblx0XHRcdFx0aXNVcEJvdGg6dHJ1ZSwgLy8g5LiK5ouJ5Yqg6L295pe2LOaYr+WQpuWQjOaXtuWPr+S7peS4i+aLieWIt+aWsFxuXHRcdFx0XHR0OiAwIC8vIOaVsOaNruabtOaWsOeahOagh+iusCAo5Y+q5pyJ5pWw5o2u5pu05paw5LqGLOaJjeS8muinpuWPkXd4c+eahE9ic2VydmVyKVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5qCH6K6w6LCD55Sod3hz6KeG5Zu+5bGC55qE5pa55rOVXG5cdFx0XHRjYWxsUHJvcDoge1xuXHRcdFx0XHRjYWxsVHlwZTogJycsIC8vIOaWueazleWQjVxuXHRcdFx0XHR0OiAwIC8vIOaVsOaNruabtOaWsOeahOagh+iusCAo5Y+q5pyJ5pWw5o2u5pu05paw5LqGLOaJjeS8muinpuWPkXd4c+eahE9ic2VydmVyKVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5LiN55Sod3hz55qE5bmz5Y+w5L2/55So5q2k5aSE55qEd3hzQml65a+56LGhLOaKueW5s3d4c+eahOWGmeazlSAo5b6u5L+h5bCP56iL5bqP5ZKMQVBQ5L2/55So55qEd3hzQml65a+56LGh5pivLi93eHMvd3hzLnd4cylcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0XHRcdFxuXHRcdFx0Ly8g5LiN55SocmVuZGVyanPnmoTlubPlj7Dkvb/nlKjmraTlpITnmoRyZW5kZXJCaXrlr7nosaEs5oq55bmzcmVuZGVyanPnmoTlhpnms5UgKGFwcCDlkowgaDUg5L2/55So55qEcmVuZGVyQml65a+56LGh5pivLi93eHMvcmVuZGVyanMuanMpXG5cblxuXG5cblxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8vIHd4c+inhuWbvuWxguiwg+eUqOmAu+i+keWxgueahOWbnuiwg1xuXHRcdHd4c0NhbGwobXNnKXtcblx0XHRcdGlmKG1zZy50eXBlID09PSAnc2V0V3hzUHJvcCcpe1xuXHRcdFx0XHQvLyDmm7TmlrB3eHNQcm9w5pWw5o2uICjlgLzmlLnlj5jmiY3op6blj5Hmm7TmlrApXG5cdFx0XHRcdHRoaXMud3hzUHJvcCA9IHtcblx0XHRcdFx0XHRvcHREb3duOiB0aGlzLm1lc2Nyb2xsLm9wdERvd24sXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiB0aGlzLm1lc2Nyb2xsLmdldFNjcm9sbFRvcCgpLFxuXHRcdFx0XHRcdGJvZHlIZWlnaHQ6IHRoaXMubWVzY3JvbGwuZ2V0Qm9keUhlaWdodCgpLFxuXHRcdFx0XHRcdGlzRG93blNjcm9sbGluZzogdGhpcy5tZXNjcm9sbC5pc0Rvd25TY3JvbGxpbmcsXG5cdFx0XHRcdFx0aXNVcFNjcm9sbGluZzogdGhpcy5tZXNjcm9sbC5pc1VwU2Nyb2xsaW5nLFxuXHRcdFx0XHRcdGlzVXBCb3RoOiB0aGlzLm1lc2Nyb2xsLm9wdFVwLmlzQm90aCxcblx0XHRcdFx0XHRpc1Njcm9sbEJvZHk6dGhpcy5tZXNjcm9sbC5pc1Njcm9sbEJvZHksXG5cdFx0XHRcdFx0dDogRGF0ZS5ub3coKVxuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZSBpZihtc2cudHlwZSA9PT0gJ3NldExvYWRUeXBlJyl7XG5cdFx0XHRcdC8vIOiuvue9rmluT2Zmc2V0LG91dE9mZnNldOeahOeKtuaAgVxuXHRcdFx0XHR0aGlzLmRvd25Mb2FkVHlwZSA9IG1zZy5kb3duTG9hZFR5cGVcblx0XHRcdFx0Ly8g54q25oCB5oyC6L295YiwbWVzY3JvbGzlr7nosaEsIOS7peS+v+WcqOWFtuS7lue7hOS7tuS4reS9v+eUqCwg5q+U5aaCPG1lLXZpZGVvPuS4rVxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXNjcm9sbCwgJ2Rvd25Mb2FkVHlwZScsIHRoaXMuZG93bkxvYWRUeXBlKVxuXHRcdFx0XHQvLyDph43nva7mmK/lkKbliqDovb3miJDlip/nmoTnirbmgIFcblx0XHRcdFx0dGhpcy4kc2V0KHRoaXMubWVzY3JvbGwsICdpc0Rvd25FbmRTdWNjZXNzJywgbnVsbClcblx0XHRcdH1lbHNlIGlmKG1zZy50eXBlID09PSAndHJpZ2dlckRvd25TY3JvbGwnKXtcblx0XHRcdFx0Ly8g5Li75Yqo6Kem5Y+R5LiL5ouJ5Yi35pawXG5cdFx0XHRcdHRoaXMubWVzY3JvbGwudHJpZ2dlckRvd25TY3JvbGwoKTtcblx0XHRcdH1lbHNlIGlmKG1zZy50eXBlID09PSAnZW5kRG93blNjcm9sbCcpe1xuXHRcdFx0XHQvLyDnu5PmnZ/kuIvmi4nliLfmlrBcblx0XHRcdFx0dGhpcy5tZXNjcm9sbC5lbmREb3duU2Nyb2xsKCk7XG5cdFx0XHR9ZWxzZSBpZihtc2cudHlwZSA9PT0gJ3RyaWdnZXJVcFNjcm9sbCcpe1xuXHRcdFx0XHQvLyDkuLvliqjop6blj5HkuIrmi4nliqDovb1cblx0XHRcdFx0dGhpcy5tZXNjcm9sbC50cmlnZ2VyVXBTY3JvbGwodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRtb3VudGVkKCkge1xuXG5cdFx0Ly8g6YWN572u5Li75Yqo6Kem5Y+Rd3hz5pi+56S65Yqg6L296L+b5bqm55qE5Zue6LCDXG5cdFx0dGhpcy5tZXNjcm9sbC5vcHREb3duLmFmdGVyTG9hZGluZyA9ICgpPT57XG5cdFx0XHR0aGlzLmNhbGxQcm9wID0ge2NhbGxUeXBlOiBcInNob3dMb2FkaW5nXCIsIHQ6IERhdGUubm93KCl9IC8vIOinpuWPkXd4c+eahOaWueazlSAo5YC85pS55Y+Y5omN6Kem5Y+R5pu05pawKVxuXHRcdH1cblx0XHQvLyDphY3nva7kuLvliqjop6blj5F3eHPpmpDol4/liqDovb3ov5vluqbnmoTlm57osINcblx0XHR0aGlzLm1lc2Nyb2xsLm9wdERvd24uYWZ0ZXJFbmREb3duU2Nyb2xsID0gKCk9Pntcblx0XHRcdHRoaXMuY2FsbFByb3AgPSB7Y2FsbFR5cGU6IFwiZW5kRG93blNjcm9sbFwiLCB0OiBEYXRlLm5vdygpfSAvLyDop6blj5F3eHPnmoTmlrnms5UgKOWAvOaUueWPmOaJjeinpuWPkeabtOaWsClcblx0XHRcdGxldCBkZWxheSA9IDMwMCArICh0aGlzLm1lc2Nyb2xsLm9wdERvd24uYmVmb3JlRW5kRGVsYXkgfHwgMClcblx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0aWYodGhpcy5kb3duTG9hZFR5cGUgPT09IDQgfHwgdGhpcy5kb3duTG9hZFR5cGUgPT09IDApe1xuXHRcdFx0XHRcdHRoaXMuY2FsbFByb3AgPSB7Y2FsbFR5cGU6IFwiY2xlYXJUcmFuc2Zvcm1cIiwgdDogRGF0ZS5ub3coKX0gLy8g6Kem5Y+Rd3hz55qE5pa55rOVICjlgLzmlLnlj5jmiY3op6blj5Hmm7TmlrApXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8g54q25oCB5oyC6L295YiwbWVzY3JvbGzlr7nosaEsIOS7peS+v+WcqOWFtuS7lue7hOS7tuS4reS9v+eUqCwg5q+U5aaCPG1lLXZpZGVvPuS4rVxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5tZXNjcm9sbCwgJ2Rvd25Mb2FkVHlwZScsIHRoaXMuZG93bkxvYWRUeXBlKVxuXHRcdFx0fSwgZGVsYXkpXG5cdFx0fVxuXHRcdC8vIOWIneWni+WMlnd4c+eahOaVsOaNrlxuXHRcdHRoaXMud3hzQ2FsbCh7dHlwZTogJ3NldFd4c1Byb3AnfSlcblxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFd4c01peGluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/wxs/wxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=%2FUsers%2Fwangyunzhu%2FDesktop%2Fyinjiangtao%2Funiapp%2Funiapp_demo%2Funiapp_demo%2Fcomponents%2Fmescroll-uni%2Fmescroll-body.vue&module=wxsBiz&lang=wxs ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_wxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_2FUsers_2Fwangyunzhu_2FDesktop_2Fyinjiangtao_2Funiapp_2Funiapp_demo_2Funiapp_demo_2Fcomponents_2Fmescroll_uni_2Fmescroll_body_vue_module_wxsBiz_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./wxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=%2FUsers%2Fwangyunzhu%2FDesktop%2Fyinjiangtao%2Funiapp%2Funiapp_demo%2Funiapp_demo%2Fcomponents%2Fmescroll-uni%2Fmescroll-body.vue&module=wxsBiz&lang=wxs */ 66);\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_wxs_wxs_vue_type_custom_index_0_blockType_script_issuerPath_2FUsers_2Fwangyunzhu_2FDesktop_2Fyinjiangtao_2Funiapp_2Funiapp_demo_2Funiapp_demo_2Fcomponents_2Fmescroll_uni_2Fmescroll_body_vue_module_wxsBiz_lang_wxs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBaWEsQ0FBZ0Isa2RBQUcsRUFBQyIsImZpbGUiOiI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1maWx0ZXItbG9hZGVyL2luZGV4LmpzIS4vd3hzLnd4cz92dWUmdHlwZT1jdXN0b20maW5kZXg9MCZibG9ja1R5cGU9c2NyaXB0Jmlzc3VlclBhdGg9JTJGVXNlcnMlMkZ3YW5neXVuemh1JTJGRGVza3RvcCUyRnlpbmppYW5ndGFvJTJGdW5pYXBwJTJGdW5pYXBwX2RlbW8lMkZ1bmlhcHBfZGVtbyUyRmNvbXBvbmVudHMlMkZtZXNjcm9sbC11bmklMkZtZXNjcm9sbC1ib2R5LnZ1ZSZtb2R1bGU9d3hzQml6Jmxhbmc9d3hzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1maWx0ZXItbG9hZGVyL2luZGV4LmpzIS4vd3hzLnd4cz92dWUmdHlwZT1jdXN0b20maW5kZXg9MCZibG9ja1R5cGU9c2NyaXB0Jmlzc3VlclBhdGg9JTJGVXNlcnMlMkZ3YW5neXVuemh1JTJGRGVza3RvcCUyRnlpbmppYW5ndGFvJTJGdW5pYXBwJTJGdW5pYXBwX2RlbW8lMkZ1bmlhcHBfZGVtbyUyRmNvbXBvbmVudHMlMkZtZXNjcm9sbC11bmklMkZtZXNjcm9sbC1ib2R5LnZ1ZSZtb2R1bGU9d3hzQml6Jmxhbmc9d3hzXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!/Users/wangyunzhu/Desktop/yinjiangtao/uniapp/uniapp_demo/uniapp_demo/components/mescroll-uni/wxs/wxs.wxs?vue&type=custom&index=0&blockType=script&issuerPath=%2FUsers%2Fwangyunzhu%2FDesktop%2Fyinjiangtao%2Funiapp%2Funiapp_demo%2Funiapp_demo%2Fcomponents%2Fmescroll-uni%2Fmescroll-body.vue&module=wxsBiz&lang=wxs ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n       (Component.options.wxs||(Component.options.wxs={}))['wxsBiz'] = (function(module){\n       // 使用wxs处理交互动画, 提高性能, 同时避免小程序bounce对下拉刷新的影响\n// https://uniapp.dcloud.io/frame?id=wxs\n// https://developers.weixin.qq.com/miniprogram/dev/framework/view/interactive-animation.html \n\n// 模拟mescroll实例, 与mescroll.js的写法尽量保持一致\nvar me = {}\n\n// ------ 自定义下拉刷新动画 start ------\n\n/* 下拉过程中的回调,滑动过程一直在执行 (rate<1为inOffset; rate>1为outOffset) */\nme.onMoving = function (ins, rate, downHight){\n\tins.requestAnimationFrame(function () {\n\t\tins.selectComponent('.mescroll-wxs-content').setStyle({\n\t\t\t'will-change': 'transform', // 可解决下拉过程中, image和swiper脱离文档流的问题\n\t\t\t'transform': 'translateY(' + downHight + 'px)',\n\t\t\t'transition': ''\n\t\t})\n\t\t// 环形进度条\n\t\tvar progress = ins.selectComponent('.mescroll-wxs-progress')\n\t\tprogress && progress.setStyle({transform: 'rotate(' + 360 * rate + 'deg)'})\n\t})\n}\n\n/* 显示下拉刷新进度 */\nme.showLoading = function (ins){\n\tme.downHight = me.optDown.offset\n\tins.requestAnimationFrame(function () {\n\t\tins.selectComponent('.mescroll-wxs-content').setStyle({\n\t\t\t'will-change': 'auto',\n\t\t\t'transform': 'translateY(' + me.downHight + 'px)',\n\t\t\t'transition': 'transform 300ms'\n\t\t})\n\t})\n}\n\n/* 结束下拉 */\nme.endDownScroll = function (ins){\n\tme.downHight = 0;\n\tme.isDownScrolling = false;\n\tins.requestAnimationFrame(function () {\n\t\tins.selectComponent('.mescroll-wxs-content').setStyle({\n\t\t\t'will-change': 'auto',\n\t\t\t'transform': 'translateY(0)', // 不可以写空串,否则scroll-view渲染不完整 (延时350ms会调clearTransform置空)\n\t\t\t'transition': 'transform 300ms'\n\t\t})\n\t})\n}\n\n/* 结束下拉动画执行完毕后, 清除transform和transition, 避免对列表内容样式造成影响, 如: h5的list-msg示例下拉进度条漏出来等 */\nme.clearTransform = function (ins){\n\tins.requestAnimationFrame(function () {\n\t\tins.selectComponent('.mescroll-wxs-content').setStyle({\n\t\t\t'will-change': '',\n\t\t\t'transform': '',\n\t\t\t'transition': ''\n\t\t})\n\t})\n}\n\n// ------ 自定义下拉刷新动画 end ------\n\n/**\n * 监听逻辑层数据的变化 (实时更新数据)\n */\nfunction propObserver(wxsProp) {\n\tme.optDown = wxsProp.optDown\n\tme.scrollTop = wxsProp.scrollTop\n\tme.bodyHeight = wxsProp.bodyHeight\n\tme.isDownScrolling = wxsProp.isDownScrolling\n\tme.isUpScrolling = wxsProp.isUpScrolling\n\tme.isUpBoth = wxsProp.isUpBoth\n\tme.isScrollBody = wxsProp.isScrollBody\n\tme.startTop = wxsProp.scrollTop // 及时更新touchstart触发的startTop, 避免scroll-view快速惯性滚动到顶部取值不准确\n}\n\n/**\n * 监听逻辑层数据的变化 (调用wxs的方法)\n */\nfunction callObserver(callProp, oldValue, ins) {\n\tif (me.disabled()) return;\n\tif(callProp.callType){\n\t\t// 逻辑层（App Service）的style已失效,需在视图层（Webview）设置style\n\t\tif(callProp.callType === 'showLoading'){\n\t\t\tme.showLoading(ins)\n\t\t}else if(callProp.callType === 'endDownScroll'){\n\t\t\tme.endDownScroll(ins)\n\t\t}else if(callProp.callType === 'clearTransform'){\n\t\t\tme.clearTransform(ins)\n\t\t}\n\t}\n}\n\n/**\n * touch事件\n */\nfunction touchstartEvent(e, ins) {\n\tme.downHight = 0; // 下拉的距离\n\tme.startPoint = me.getPoint(e); // 记录起点\n\tme.startTop = me.getScrollTop(); // 记录此时的滚动条位置\n\tme.startAngle = 0; // 初始角度\n\tme.lastPoint = me.startPoint; // 重置上次move的点\n\tme.maxTouchmoveY = me.getBodyHeight() - me.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)\n\tme.inTouchend = false; // 标记不是touchend\n\t\n\tme.callMethod(ins, {type: 'setWxsProp'}) // 同步更新wxsProp的数据 (小程序是异步的,可能touchmove先执行,才到propObserver; h5和app是同步)\n}\n\nfunction touchmoveEvent(e, ins) {\n\tvar isPrevent = true // false表示不往上冒泡，相当于调用了同时调用了stopPropagation和preventDefault (对小程序生效, h5和app无效)\n\t\n\tif (me.disabled()) return isPrevent;\n\t\n\tvar scrollTop = me.getScrollTop(); // 当前滚动条的距离\n\tvar curPoint = me.getPoint(e); // 当前点\n\t\n\tvar moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n\t\n\t// 向下拉 && 在顶部\n\t// mescroll-body,直接判定在顶部即可\n\t// scroll-view在滚动时不会触发touchmove,当触顶/底/左/右时,才会触发touchmove\n\t// scroll-view滚动到顶部时,scrollTop不一定为0,也有可能大于0; 在iOS的APP中scrollTop可能为负数,不一定和startTop相等\n\tif (moveY > 0 && (\n\t\t\t(me.isScrollBody && scrollTop <= 0)\n\t\t\t||\n\t\t\t(!me.isScrollBody && (scrollTop <= 0 || (scrollTop <= me.optDown.startTop && scrollTop === me.startTop)) )\n\t\t)) {\n\t\t// 可下拉的条件\n\t\tif (!me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || (me.isUpScrolling &&\n\t\t\t\tme.isUpBoth))) {\n\t\n\t\t\t// 下拉的角度是否在配置的范围内\n\t\t\tif(!me.startAngle) me.startAngle = me.getAngle(me.lastPoint, curPoint); // 两点之间的角度,区间 [0,90]\n\t\t\tif (me.startAngle < me.optDown.minAngle) return isPrevent; // 如果小于配置的角度,则不往下执行下拉刷新\n\t\n\t\t\t// 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发\n\t\t\tif (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {\n\t\t\t\tme.inTouchend = true; // 标记执行touchend\n\t\t\t\ttouchendEvent(e, ins); // 提前触发touchend\n\t\t\t\treturn isPrevent;\n\t\t\t}\n\t\t\t\n\t\t\tisPrevent = false // 小程序是return false\n\t\n\t\t\tvar diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)\n\t\n\t\t\t// 下拉距离  < 指定距离\n\t\t\tif (me.downHight < me.optDown.offset) {\n\t\t\t\tif (me.movetype !== 1) {\n\t\t\t\t\tme.movetype = 1; // 加入标记,保证只执行一次\n\t\t\t\t\t// me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次\n\t\t\t\t\tme.callMethod(ins, {type: 'setLoadType', downLoadType: 1})\n\t\t\t\t\tme.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n\t\t\t\t}\n\t\t\t\tme.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小\n\t\n\t\t\t\t// 指定距离  <= 下拉距离\n\t\t\t} else {\n\t\t\t\tif (me.movetype !== 2) {\n\t\t\t\t\tme.movetype = 2; // 加入标记,保证只执行一次\n\t\t\t\t\t// me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次\n\t\t\t\t\tme.callMethod(ins, {type: 'setLoadType', downLoadType: 2})\n\t\t\t\t\tme.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来\n\t\t\t\t}\n\t\t\t\tif (diff > 0) { // 向下拉\n\t\t\t\t\tme.downHight += diff * me.optDown.outOffsetRate; // 越往下,高度变化越小\n\t\t\t\t} else { // 向上收\n\t\t\t\t\tme.downHight += diff; // 向上收回高度,则向上滑多少收多少高度\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tme.downHight = Math.round(me.downHight) // 取整\n\t\t\tvar rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值\n\t\t\t// me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行\n\t\t\tme.onMoving(ins, rate, me.downHight)\n\t\t}\n\t}\n\t\n\tme.lastPoint = curPoint; // 记录本次移动的点\n\t\n\treturn isPrevent // false表示不往上冒泡，相当于调用了同时调用了stopPropagation和preventDefault (对小程序生效, h5和app无效)\n}\n\nfunction touchendEvent(e, ins) {\n\t// 如果下拉区域高度已改变,则需重置回来\n\tif (me.isMoveDown) {\n\t\tif (me.downHight >= me.optDown.offset) {\n\t\t\t// 符合触发刷新的条件\n\t\t\tme.downHight = me.optDown.offset; // 更新下拉区域高度\n\t\t\t// me.triggerDownScroll();\n\t\t\tme.callMethod(ins, {type: 'triggerDownScroll'})\n\t\t} else {\n\t\t\t// 不符合的话 则重置\n\t\t\tme.downHight = 0;\n\t\t\t// me.optDown.endDownScroll && me.optDown.endDownScroll(me);\n\t\t\tme.callMethod(ins, {type: 'endDownScroll'})\n\t\t}\n\t\tme.movetype = 0;\n\t\tme.isMoveDown = false;\n\t} else if (!me.isScrollBody && me.getScrollTop() === me.startTop) { // scroll-view到顶/左/右/底的滑动事件\n\t\tvar isScrollUp = me.getPoint(e).y - me.startPoint.y < 0; // 和起点比,移动的距离,大于0向下拉,小于0向上拉\n\t\t// 上滑\n\t\tif (isScrollUp) {\n\t\t\t// 需检查滑动的角度\n\t\t\tvar angle = me.getAngle(me.getPoint(e), me.startPoint); // 两点之间的角度,区间 [0,90]\n\t\t\tif (angle > 80) {\n\t\t\t\t// 检查并触发上拉\n\t\t\t\t// me.triggerUpScroll(true);\n\t\t\t\tme.callMethod(ins, {type: 'triggerUpScroll'})\n\t\t\t}\n\t\t}\n\t}\n\tme.callMethod(ins, {type: 'setWxsProp'}) // 同步更新wxsProp的数据 (小程序是异步的,可能touchmove先执行,才到propObserver; h5和app是同步)\n}\n\n/* 是否禁用下拉刷新 */\nme.disabled = function(){\n\treturn !me.optDown || !me.optDown.use || me.optDown.native\n}\n\n/* 根据点击滑动事件获取第一个手指的坐标 */\nme.getPoint = function(e) {\n\tif (!e) {\n\t\treturn {x: 0,y: 0}\n\t}\n\tif (e.touches && e.touches[0]) {\n\t\treturn {x: e.touches[0].pageX,y: e.touches[0].pageY}\n\t} else if (e.changedTouches && e.changedTouches[0]) {\n\t\treturn {x: e.changedTouches[0].pageX,y: e.changedTouches[0].pageY}\n\t} else {\n\t\treturn {x: e.clientX,y: e.clientY}\n\t}\n}\n\n/* 计算两点之间的角度: 区间 [0,90]*/\nme.getAngle = function (p1, p2) {\n\tvar x = Math.abs(p1.x - p2.x);\n\tvar y = Math.abs(p1.y - p2.y);\n\tvar z = Math.sqrt(x * x + y * y);\n\tvar angle = 0;\n\tif (z !== 0) {\n\t\tangle = Math.asin(y / z) / Math.PI * 180;\n\t}\n\treturn angle\n}\n\n/* 获取滚动条的位置 */\nme.getScrollTop = function() {\n\treturn me.scrollTop || 0\n}\n\n/* 获取body的高度 */\nme.getBodyHeight = function() {\n\treturn me.bodyHeight || 0;\n}\n\n/* 调用逻辑层的方法 */\nme.callMethod = function(ins, param) {\n\tif(ins) ins.callMethod('wxsCall', param)\n}\n\n/* 导出模块 */\nmodule.exports = {\n\tpropObserver: propObserver,\n\tcallObserver: callObserver,\n\ttouchstartEvent: touchstartEvent,\n\ttouchmoveEvent: touchmoveEvent,\n\ttouchendEvent: touchendEvent\n}\n       return module.exports\n       })({exports:{}});\n     });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxRQUFRLEdBQUcsV0FBVztBQUN0QixNIiwiZmlsZSI6IjY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgICAgIChDb21wb25lbnQub3B0aW9ucy53eHN8fChDb21wb25lbnQub3B0aW9ucy53eHM9e30pKVsnd3hzQml6J10gPSAoZnVuY3Rpb24obW9kdWxlKXtcbiAgICAgICAvLyDkvb/nlKh3eHPlpITnkIbkuqTkupLliqjnlLssIOaPkOmrmOaAp+iDvSwg5ZCM5pe26YG/5YWN5bCP56iL5bqPYm91bmNl5a+55LiL5ouJ5Yi35paw55qE5b2x5ZONXG4vLyBodHRwczovL3VuaWFwcC5kY2xvdWQuaW8vZnJhbWU/aWQ9d3hzXG4vLyBodHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9taW5pcHJvZ3JhbS9kZXYvZnJhbWV3b3JrL3ZpZXcvaW50ZXJhY3RpdmUtYW5pbWF0aW9uLmh0bWwgXG5cbi8vIOaooeaLn21lc2Nyb2xs5a6e5L6LLCDkuI5tZXNjcm9sbC5qc+eahOWGmeazleWwvemHj+S/neaMgeS4gOiHtFxudmFyIG1lID0ge31cblxuLy8gLS0tLS0tIOiHquWumuS5ieS4i+aLieWIt+aWsOWKqOeUuyBzdGFydCAtLS0tLS1cblxuLyog5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOa7keWKqOi/h+eoi+S4gOebtOWcqOaJp+ihjCAocmF0ZTwx5Li6aW5PZmZzZXQ7IHJhdGU+MeS4um91dE9mZnNldCkgKi9cbm1lLm9uTW92aW5nID0gZnVuY3Rpb24gKGlucywgcmF0ZSwgZG93bkhpZ2h0KXtcblx0aW5zLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0aW5zLnNlbGVjdENvbXBvbmVudCgnLm1lc2Nyb2xsLXd4cy1jb250ZW50Jykuc2V0U3R5bGUoe1xuXHRcdFx0J3dpbGwtY2hhbmdlJzogJ3RyYW5zZm9ybScsIC8vIOWPr+ino+WGs+S4i+aLiei/h+eoi+S4rSwgaW1hZ2Xlkoxzd2lwZXLohLHnprvmlofmoaPmtYHnmoTpl67pophcblx0XHRcdCd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgZG93bkhpZ2h0ICsgJ3B4KScsXG5cdFx0XHQndHJhbnNpdGlvbic6ICcnXG5cdFx0fSlcblx0XHQvLyDnjq/lvaLov5vluqbmnaFcblx0XHR2YXIgcHJvZ3Jlc3MgPSBpbnMuc2VsZWN0Q29tcG9uZW50KCcubWVzY3JvbGwtd3hzLXByb2dyZXNzJylcblx0XHRwcm9ncmVzcyAmJiBwcm9ncmVzcy5zZXRTdHlsZSh7dHJhbnNmb3JtOiAncm90YXRlKCcgKyAzNjAgKiByYXRlICsgJ2RlZyknfSlcblx0fSlcbn1cblxuLyog5pi+56S65LiL5ouJ5Yi35paw6L+b5bqmICovXG5tZS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uIChpbnMpe1xuXHRtZS5kb3duSGlnaHQgPSBtZS5vcHREb3duLm9mZnNldFxuXHRpbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRpbnMuc2VsZWN0Q29tcG9uZW50KCcubWVzY3JvbGwtd3hzLWNvbnRlbnQnKS5zZXRTdHlsZSh7XG5cdFx0XHQnd2lsbC1jaGFuZ2UnOiAnYXV0bycsXG5cdFx0XHQndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoJyArIG1lLmRvd25IaWdodCArICdweCknLFxuXHRcdFx0J3RyYW5zaXRpb24nOiAndHJhbnNmb3JtIDMwMG1zJ1xuXHRcdH0pXG5cdH0pXG59XG5cbi8qIOe7k+adn+S4i+aLiSAqL1xubWUuZW5kRG93blNjcm9sbCA9IGZ1bmN0aW9uIChpbnMpe1xuXHRtZS5kb3duSGlnaHQgPSAwO1xuXHRtZS5pc0Rvd25TY3JvbGxpbmcgPSBmYWxzZTtcblx0aW5zLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0aW5zLnNlbGVjdENvbXBvbmVudCgnLm1lc2Nyb2xsLXd4cy1jb250ZW50Jykuc2V0U3R5bGUoe1xuXHRcdFx0J3dpbGwtY2hhbmdlJzogJ2F1dG8nLFxuXHRcdFx0J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDApJywgLy8g5LiN5Y+v5Lul5YaZ56m65LiyLOWQpuWImXNjcm9sbC12aWV35riy5p+T5LiN5a6M5pW0ICjlu7bml7YzNTBtc+S8muiwg2NsZWFyVHJhbnNmb3Jt572u56m6KVxuXHRcdFx0J3RyYW5zaXRpb24nOiAndHJhbnNmb3JtIDMwMG1zJ1xuXHRcdH0pXG5cdH0pXG59XG5cbi8qIOe7k+adn+S4i+aLieWKqOeUu+aJp+ihjOWujOavleWQjiwg5riF6ZmkdHJhbnNmb3Jt5ZKMdHJhbnNpdGlvbiwg6YG/5YWN5a+55YiX6KGo5YaF5a655qC35byP6YCg5oiQ5b2x5ZONLCDlpoI6IGg155qEbGlzdC1tc2fnpLrkvovkuIvmi4nov5vluqbmnaHmvI/lh7rmnaXnrYkgKi9cbm1lLmNsZWFyVHJhbnNmb3JtID0gZnVuY3Rpb24gKGlucyl7XG5cdGlucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdGlucy5zZWxlY3RDb21wb25lbnQoJy5tZXNjcm9sbC13eHMtY29udGVudCcpLnNldFN0eWxlKHtcblx0XHRcdCd3aWxsLWNoYW5nZSc6ICcnLFxuXHRcdFx0J3RyYW5zZm9ybSc6ICcnLFxuXHRcdFx0J3RyYW5zaXRpb24nOiAnJ1xuXHRcdH0pXG5cdH0pXG59XG5cbi8vIC0tLS0tLSDoh6rlrprkuYnkuIvmi4nliLfmlrDliqjnlLsgZW5kIC0tLS0tLVxuXG4vKipcbiAqIOebkeWQrOmAu+i+keWxguaVsOaNrueahOWPmOWMliAo5a6e5pe25pu05paw5pWw5o2uKVxuICovXG5mdW5jdGlvbiBwcm9wT2JzZXJ2ZXIod3hzUHJvcCkge1xuXHRtZS5vcHREb3duID0gd3hzUHJvcC5vcHREb3duXG5cdG1lLnNjcm9sbFRvcCA9IHd4c1Byb3Auc2Nyb2xsVG9wXG5cdG1lLmJvZHlIZWlnaHQgPSB3eHNQcm9wLmJvZHlIZWlnaHRcblx0bWUuaXNEb3duU2Nyb2xsaW5nID0gd3hzUHJvcC5pc0Rvd25TY3JvbGxpbmdcblx0bWUuaXNVcFNjcm9sbGluZyA9IHd4c1Byb3AuaXNVcFNjcm9sbGluZ1xuXHRtZS5pc1VwQm90aCA9IHd4c1Byb3AuaXNVcEJvdGhcblx0bWUuaXNTY3JvbGxCb2R5ID0gd3hzUHJvcC5pc1Njcm9sbEJvZHlcblx0bWUuc3RhcnRUb3AgPSB3eHNQcm9wLnNjcm9sbFRvcCAvLyDlj4rml7bmm7TmlrB0b3VjaHN0YXJ06Kem5Y+R55qEc3RhcnRUb3AsIOmBv+WFjXNjcm9sbC12aWV35b+r6YCf5oOv5oCn5rua5Yqo5Yiw6aG26YOo5Y+W5YC85LiN5YeG56GuXG59XG5cbi8qKlxuICog55uR5ZCs6YC76L6R5bGC5pWw5o2u55qE5Y+Y5YyWICjosIPnlKh3eHPnmoTmlrnms5UpXG4gKi9cbmZ1bmN0aW9uIGNhbGxPYnNlcnZlcihjYWxsUHJvcCwgb2xkVmFsdWUsIGlucykge1xuXHRpZiAobWUuZGlzYWJsZWQoKSkgcmV0dXJuO1xuXHRpZihjYWxsUHJvcC5jYWxsVHlwZSl7XG5cdFx0Ly8g6YC76L6R5bGC77yIQXBwIFNlcnZpY2XvvInnmoRzdHlsZeW3suWkseaViCzpnIDlnKjop4blm77lsYLvvIhXZWJ2aWV377yJ6K6+572uc3R5bGVcblx0XHRpZihjYWxsUHJvcC5jYWxsVHlwZSA9PT0gJ3Nob3dMb2FkaW5nJyl7XG5cdFx0XHRtZS5zaG93TG9hZGluZyhpbnMpXG5cdFx0fWVsc2UgaWYoY2FsbFByb3AuY2FsbFR5cGUgPT09ICdlbmREb3duU2Nyb2xsJyl7XG5cdFx0XHRtZS5lbmREb3duU2Nyb2xsKGlucylcblx0XHR9ZWxzZSBpZihjYWxsUHJvcC5jYWxsVHlwZSA9PT0gJ2NsZWFyVHJhbnNmb3JtJyl7XG5cdFx0XHRtZS5jbGVhclRyYW5zZm9ybShpbnMpXG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogdG91Y2jkuovku7ZcbiAqL1xuZnVuY3Rpb24gdG91Y2hzdGFydEV2ZW50KGUsIGlucykge1xuXHRtZS5kb3duSGlnaHQgPSAwOyAvLyDkuIvmi4nnmoTot53nprtcblx0bWUuc3RhcnRQb2ludCA9IG1lLmdldFBvaW50KGUpOyAvLyDorrDlvZXotbfngrlcblx0bWUuc3RhcnRUb3AgPSBtZS5nZXRTY3JvbGxUb3AoKTsgLy8g6K6w5b2V5q2k5pe255qE5rua5Yqo5p2h5L2N572uXG5cdG1lLnN0YXJ0QW5nbGUgPSAwOyAvLyDliJ3lp4vop5LluqZcblx0bWUubGFzdFBvaW50ID0gbWUuc3RhcnRQb2ludDsgLy8g6YeN572u5LiK5qyhbW92ZeeahOeCuVxuXHRtZS5tYXhUb3VjaG1vdmVZID0gbWUuZ2V0Qm9keUhlaWdodCgpIC0gbWUub3B0RG93bi5ib3R0b21PZmZzZXQ7IC8vIOaJi+aMh+inpuaRuOeahOacgOWkp+iMg+WbtCjlhpnlnKh0b3VjaHN0YXJ06YG/5YWNYm9keeiOt+WPlumrmOW6puS4ujDnmoTmg4XlhrUpXG5cdG1lLmluVG91Y2hlbmQgPSBmYWxzZTsgLy8g5qCH6K6w5LiN5pivdG91Y2hlbmRcblx0XG5cdG1lLmNhbGxNZXRob2QoaW5zLCB7dHlwZTogJ3NldFd4c1Byb3AnfSkgLy8g5ZCM5q2l5pu05pawd3hzUHJvcOeahOaVsOaNriAo5bCP56iL5bqP5piv5byC5q2l55qELOWPr+iDvXRvdWNobW92ZeWFiOaJp+ihjCzmiY3liLBwcm9wT2JzZXJ2ZXI7IGg15ZKMYXBw5piv5ZCM5q2lKVxufVxuXG5mdW5jdGlvbiB0b3VjaG1vdmVFdmVudChlLCBpbnMpIHtcblx0dmFyIGlzUHJldmVudCA9IHRydWUgLy8gZmFsc2XooajnpLrkuI3lvoDkuIrlhpLms6HvvIznm7jlvZPkuo7osIPnlKjkuoblkIzml7bosIPnlKjkuoZzdG9wUHJvcGFnYXRpb27lkoxwcmV2ZW50RGVmYXVsdCAo5a+55bCP56iL5bqP55Sf5pWILCBoNeWSjGFwcOaXoOaViClcblx0XG5cdGlmIChtZS5kaXNhYmxlZCgpKSByZXR1cm4gaXNQcmV2ZW50O1xuXHRcblx0dmFyIHNjcm9sbFRvcCA9IG1lLmdldFNjcm9sbFRvcCgpOyAvLyDlvZPliY3mu5rliqjmnaHnmoTot53nprtcblx0dmFyIGN1clBvaW50ID0gbWUuZ2V0UG9pbnQoZSk7IC8vIOW9k+WJjeeCuVxuXHRcblx0dmFyIG1vdmVZID0gY3VyUG9pbnQueSAtIG1lLnN0YXJ0UG9pbnQueTsgLy8g5ZKM6LW354K55q+ULOenu+WKqOeahOi3neemuyzlpKfkuo4w5ZCR5LiL5ouJLOWwj+S6jjDlkJHkuIrmi4lcblx0XG5cdC8vIOWQkeS4i+aLiSAmJiDlnKjpobbpg6hcblx0Ly8gbWVzY3JvbGwtYm9keSznm7TmjqXliKTlrprlnKjpobbpg6jljbPlj69cblx0Ly8gc2Nyb2xsLXZpZXflnKjmu5rliqjml7bkuI3kvJrop6blj5F0b3VjaG1vdmUs5b2T6Kem6aG2L+W6lS/lt6Yv5Y+z5pe2LOaJjeS8muinpuWPkXRvdWNobW92ZVxuXHQvLyBzY3JvbGwtdmlld+a7muWKqOWIsOmhtumDqOaXtixzY3JvbGxUb3DkuI3kuIDlrprkuLowLOS5n+acieWPr+iDveWkp+S6jjA7IOWcqGlPU+eahEFQUOS4rXNjcm9sbFRvcOWPr+iDveS4uui0n+aVsCzkuI3kuIDlrprlkoxzdGFydFRvcOebuOetiVxuXHRpZiAobW92ZVkgPiAwICYmIChcblx0XHRcdChtZS5pc1Njcm9sbEJvZHkgJiYgc2Nyb2xsVG9wIDw9IDApXG5cdFx0XHR8fFxuXHRcdFx0KCFtZS5pc1Njcm9sbEJvZHkgJiYgKHNjcm9sbFRvcCA8PSAwIHx8IChzY3JvbGxUb3AgPD0gbWUub3B0RG93bi5zdGFydFRvcCAmJiBzY3JvbGxUb3AgPT09IG1lLnN0YXJ0VG9wKSkgKVxuXHRcdCkpIHtcblx0XHQvLyDlj6/kuIvmi4nnmoTmnaHku7Zcblx0XHRpZiAoIW1lLmluVG91Y2hlbmQgJiYgIW1lLmlzRG93blNjcm9sbGluZyAmJiAhbWUub3B0RG93bi5pc0xvY2sgJiYgKCFtZS5pc1VwU2Nyb2xsaW5nIHx8IChtZS5pc1VwU2Nyb2xsaW5nICYmXG5cdFx0XHRcdG1lLmlzVXBCb3RoKSkpIHtcblx0XG5cdFx0XHQvLyDkuIvmi4nnmoTop5LluqbmmK/lkKblnKjphY3nva7nmoTojIPlm7TlhoVcblx0XHRcdGlmKCFtZS5zdGFydEFuZ2xlKSBtZS5zdGFydEFuZ2xlID0gbWUuZ2V0QW5nbGUobWUubGFzdFBvaW50LCBjdXJQb2ludCk7IC8vIOS4pOeCueS5i+mXtOeahOinkuW6pizljLrpl7QgWzAsOTBdXG5cdFx0XHRpZiAobWUuc3RhcnRBbmdsZSA8IG1lLm9wdERvd24ubWluQW5nbGUpIHJldHVybiBpc1ByZXZlbnQ7IC8vIOWmguaenOWwj+S6jumFjee9rueahOinkuW6pizliJnkuI3lvoDkuIvmiafooYzkuIvmi4nliLfmlrBcblx0XG5cdFx0XHQvLyDlpoLmnpzmiYvmjIfnmoTkvY3nva7otoXov4fphY3nva7nmoTot53nprss5YiZ5o+Q5YmN57uT5p2f5LiL5ouJLOmBv+WFjVdlYnZpZXfltYzlpZflr7zoh7R0b3VjaGVuZOaXoOazleinpuWPkVxuXHRcdFx0aWYgKG1lLm1heFRvdWNobW92ZVkgPiAwICYmIGN1clBvaW50LnkgPj0gbWUubWF4VG91Y2htb3ZlWSkge1xuXHRcdFx0XHRtZS5pblRvdWNoZW5kID0gdHJ1ZTsgLy8g5qCH6K6w5omn6KGMdG91Y2hlbmRcblx0XHRcdFx0dG91Y2hlbmRFdmVudChlLCBpbnMpOyAvLyDmj5DliY3op6blj5F0b3VjaGVuZFxuXHRcdFx0XHRyZXR1cm4gaXNQcmV2ZW50O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpc1ByZXZlbnQgPSBmYWxzZSAvLyDlsI/nqIvluo/mmK9yZXR1cm4gZmFsc2Vcblx0XG5cdFx0XHR2YXIgZGlmZiA9IGN1clBvaW50LnkgLSBtZS5sYXN0UG9pbnQueTsgLy8g5ZKM5LiK5qyh5q+ULOenu+WKqOeahOi3neemuyAo5aSn5LqOMOWQkeS4iyzlsI/kuo4w5ZCR5LiKKVxuXHRcblx0XHRcdC8vIOS4i+aLiei3neemuyAgPCDmjIflrprot53nprtcblx0XHRcdGlmIChtZS5kb3duSGlnaHQgPCBtZS5vcHREb3duLm9mZnNldCkge1xuXHRcdFx0XHRpZiAobWUubW92ZXR5cGUgIT09IDEpIHtcblx0XHRcdFx0XHRtZS5tb3ZldHlwZSA9IDE7IC8vIOWKoOWFpeagh+iusCzkv53or4Hlj6rmiafooYzkuIDmrKFcblx0XHRcdFx0XHQvLyBtZS5vcHREb3duLmluT2Zmc2V0ICYmIG1lLm9wdERvd24uaW5PZmZzZXQobWUpOyAvLyDov5vlhaXmjIflrprot53nprvojIPlm7TlhoXpgqPkuIDliLvnmoTlm57osIMs5Y+q5omn6KGM5LiA5qyhXG5cdFx0XHRcdFx0bWUuY2FsbE1ldGhvZChpbnMsIHt0eXBlOiAnc2V0TG9hZFR5cGUnLCBkb3duTG9hZFR5cGU6IDF9KVxuXHRcdFx0XHRcdG1lLmlzTW92ZURvd24gPSB0cnVlOyAvLyDmoIforrDkuIvmi4nljLrln5/pq5jluqbmlLnlj5gs5ZyodG91Y2hlbmTph43nva7lm57mnaVcblx0XHRcdFx0fVxuXHRcdFx0XHRtZS5kb3duSGlnaHQgKz0gZGlmZiAqIG1lLm9wdERvd24uaW5PZmZzZXRSYXRlOyAvLyDotorlvoDkuIss6auY5bqm5Y+Y5YyW6LaK5bCPXG5cdFxuXHRcdFx0XHQvLyDmjIflrprot53nprsgIDw9IOS4i+aLiei3neemu1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1lLm1vdmV0eXBlICE9PSAyKSB7XG5cdFx0XHRcdFx0bWUubW92ZXR5cGUgPSAyOyAvLyDliqDlhaXmoIforrAs5L+d6K+B5Y+q5omn6KGM5LiA5qyhXG5cdFx0XHRcdFx0Ly8gbWUub3B0RG93bi5vdXRPZmZzZXQgJiYgbWUub3B0RG93bi5vdXRPZmZzZXQobWUpOyAvLyDkuIvmi4notoXov4fmjIflrprot53nprvpgqPkuIDliLvnmoTlm57osIMs5Y+q5omn6KGM5LiA5qyhXG5cdFx0XHRcdFx0bWUuY2FsbE1ldGhvZChpbnMsIHt0eXBlOiAnc2V0TG9hZFR5cGUnLCBkb3duTG9hZFR5cGU6IDJ9KVxuXHRcdFx0XHRcdG1lLmlzTW92ZURvd24gPSB0cnVlOyAvLyDmoIforrDkuIvmi4nljLrln5/pq5jluqbmlLnlj5gs5ZyodG91Y2hlbmTph43nva7lm57mnaVcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGlmZiA+IDApIHsgLy8g5ZCR5LiL5ouJXG5cdFx0XHRcdFx0bWUuZG93bkhpZ2h0ICs9IGRpZmYgKiBtZS5vcHREb3duLm91dE9mZnNldFJhdGU7IC8vIOi2iuW+gOS4iyzpq5jluqblj5jljJbotorlsI9cblx0XHRcdFx0fSBlbHNlIHsgLy8g5ZCR5LiK5pS2XG5cdFx0XHRcdFx0bWUuZG93bkhpZ2h0ICs9IGRpZmY7IC8vIOWQkeS4iuaUtuWbnumrmOW6pizliJnlkJHkuIrmu5HlpJrlsJHmlLblpJrlsJHpq5jluqZcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRtZS5kb3duSGlnaHQgPSBNYXRoLnJvdW5kKG1lLmRvd25IaWdodCkgLy8g5Y+W5pW0XG5cdFx0XHR2YXIgcmF0ZSA9IG1lLmRvd25IaWdodCAvIG1lLm9wdERvd24ub2Zmc2V0OyAvLyDkuIvmi4nljLrln5/lvZPliY3pq5jluqbkuI7mjIflrprot53nprvnmoTmr5TlgLxcblx0XHRcdC8vIG1lLm9wdERvd24ub25Nb3ZpbmcgJiYgbWUub3B0RG93bi5vbk1vdmluZyhtZSwgcmF0ZSwgbWUuZG93bkhpZ2h0KTsgLy8g5LiL5ouJ6L+H56iL5Lit55qE5Zue6LCDLOS4gOebtOWcqOaJp+ihjFxuXHRcdFx0bWUub25Nb3ZpbmcoaW5zLCByYXRlLCBtZS5kb3duSGlnaHQpXG5cdFx0fVxuXHR9XG5cdFxuXHRtZS5sYXN0UG9pbnQgPSBjdXJQb2ludDsgLy8g6K6w5b2V5pys5qyh56e75Yqo55qE54K5XG5cdFxuXHRyZXR1cm4gaXNQcmV2ZW50IC8vIGZhbHNl6KGo56S65LiN5b6A5LiK5YaS5rOh77yM55u45b2T5LqO6LCD55So5LqG5ZCM5pe26LCD55So5LqGc3RvcFByb3BhZ2F0aW9u5ZKMcHJldmVudERlZmF1bHQgKOWvueWwj+eoi+W6j+eUn+aViCwgaDXlkoxhcHDml6DmlYgpXG59XG5cbmZ1bmN0aW9uIHRvdWNoZW5kRXZlbnQoZSwgaW5zKSB7XG5cdC8vIOWmguaenOS4i+aLieWMuuWfn+mrmOW6puW3suaUueWPmCzliJnpnIDph43nva7lm57mnaVcblx0aWYgKG1lLmlzTW92ZURvd24pIHtcblx0XHRpZiAobWUuZG93bkhpZ2h0ID49IG1lLm9wdERvd24ub2Zmc2V0KSB7XG5cdFx0XHQvLyDnrKblkIjop6blj5HliLfmlrDnmoTmnaHku7Zcblx0XHRcdG1lLmRvd25IaWdodCA9IG1lLm9wdERvd24ub2Zmc2V0OyAvLyDmm7TmlrDkuIvmi4nljLrln5/pq5jluqZcblx0XHRcdC8vIG1lLnRyaWdnZXJEb3duU2Nyb2xsKCk7XG5cdFx0XHRtZS5jYWxsTWV0aG9kKGlucywge3R5cGU6ICd0cmlnZ2VyRG93blNjcm9sbCd9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyDkuI3nrKblkIjnmoTor50g5YiZ6YeN572uXG5cdFx0XHRtZS5kb3duSGlnaHQgPSAwO1xuXHRcdFx0Ly8gbWUub3B0RG93bi5lbmREb3duU2Nyb2xsICYmIG1lLm9wdERvd24uZW5kRG93blNjcm9sbChtZSk7XG5cdFx0XHRtZS5jYWxsTWV0aG9kKGlucywge3R5cGU6ICdlbmREb3duU2Nyb2xsJ30pXG5cdFx0fVxuXHRcdG1lLm1vdmV0eXBlID0gMDtcblx0XHRtZS5pc01vdmVEb3duID0gZmFsc2U7XG5cdH0gZWxzZSBpZiAoIW1lLmlzU2Nyb2xsQm9keSAmJiBtZS5nZXRTY3JvbGxUb3AoKSA9PT0gbWUuc3RhcnRUb3ApIHsgLy8gc2Nyb2xsLXZpZXfliLDpobYv5bemL+WPsy/lupXnmoTmu5Hliqjkuovku7Zcblx0XHR2YXIgaXNTY3JvbGxVcCA9IG1lLmdldFBvaW50KGUpLnkgLSBtZS5zdGFydFBvaW50LnkgPCAwOyAvLyDlkozotbfngrnmr5Qs56e75Yqo55qE6Led56a7LOWkp+S6jjDlkJHkuIvmi4ks5bCP5LqOMOWQkeS4iuaLiVxuXHRcdC8vIOS4iua7kVxuXHRcdGlmIChpc1Njcm9sbFVwKSB7XG5cdFx0XHQvLyDpnIDmo4Dmn6Xmu5HliqjnmoTop5LluqZcblx0XHRcdHZhciBhbmdsZSA9IG1lLmdldEFuZ2xlKG1lLmdldFBvaW50KGUpLCBtZS5zdGFydFBvaW50KTsgLy8g5Lik54K55LmL6Ze055qE6KeS5bqmLOWMuumXtCBbMCw5MF1cblx0XHRcdGlmIChhbmdsZSA+IDgwKSB7XG5cdFx0XHRcdC8vIOajgOafpeW5tuinpuWPkeS4iuaLiVxuXHRcdFx0XHQvLyBtZS50cmlnZ2VyVXBTY3JvbGwodHJ1ZSk7XG5cdFx0XHRcdG1lLmNhbGxNZXRob2QoaW5zLCB7dHlwZTogJ3RyaWdnZXJVcFNjcm9sbCd9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRtZS5jYWxsTWV0aG9kKGlucywge3R5cGU6ICdzZXRXeHNQcm9wJ30pIC8vIOWQjOatpeabtOaWsHd4c1Byb3DnmoTmlbDmja4gKOWwj+eoi+W6j+aYr+W8guatpeeahCzlj6/og710b3VjaG1vdmXlhYjmiafooYws5omN5YiwcHJvcE9ic2VydmVyOyBoNeWSjGFwcOaYr+WQjOatpSlcbn1cblxuLyog5piv5ZCm56aB55So5LiL5ouJ5Yi35pawICovXG5tZS5kaXNhYmxlZCA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiAhbWUub3B0RG93biB8fCAhbWUub3B0RG93bi51c2UgfHwgbWUub3B0RG93bi5uYXRpdmVcbn1cblxuLyog5qC55o2u54K55Ye75ruR5Yqo5LqL5Lu26I635Y+W56ys5LiA5Liq5omL5oyH55qE5Z2Q5qCHICovXG5tZS5nZXRQb2ludCA9IGZ1bmN0aW9uKGUpIHtcblx0aWYgKCFlKSB7XG5cdFx0cmV0dXJuIHt4OiAwLHk6IDB9XG5cdH1cblx0aWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0pIHtcblx0XHRyZXR1cm4ge3g6IGUudG91Y2hlc1swXS5wYWdlWCx5OiBlLnRvdWNoZXNbMF0ucGFnZVl9XG5cdH0gZWxzZSBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XG5cdFx0cmV0dXJuIHt4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVl9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHt4OiBlLmNsaWVudFgseTogZS5jbGllbnRZfVxuXHR9XG59XG5cbi8qIOiuoeeul+S4pOeCueS5i+mXtOeahOinkuW6pjog5Yy66Ze0IFswLDkwXSovXG5tZS5nZXRBbmdsZSA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcblx0dmFyIHggPSBNYXRoLmFicyhwMS54IC0gcDIueCk7XG5cdHZhciB5ID0gTWF0aC5hYnMocDEueSAtIHAyLnkpO1xuXHR2YXIgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcblx0dmFyIGFuZ2xlID0gMDtcblx0aWYgKHogIT09IDApIHtcblx0XHRhbmdsZSA9IE1hdGguYXNpbih5IC8geikgLyBNYXRoLlBJICogMTgwO1xuXHR9XG5cdHJldHVybiBhbmdsZVxufVxuXG4vKiDojrflj5bmu5rliqjmnaHnmoTkvY3nva4gKi9cbm1lLmdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gbWUuc2Nyb2xsVG9wIHx8IDBcbn1cblxuLyog6I635Y+WYm9keeeahOmrmOW6piAqL1xubWUuZ2V0Qm9keUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gbWUuYm9keUhlaWdodCB8fCAwO1xufVxuXG4vKiDosIPnlKjpgLvovpHlsYLnmoTmlrnms5UgKi9cbm1lLmNhbGxNZXRob2QgPSBmdW5jdGlvbihpbnMsIHBhcmFtKSB7XG5cdGlmKGlucykgaW5zLmNhbGxNZXRob2QoJ3d4c0NhbGwnLCBwYXJhbSlcbn1cblxuLyog5a+85Ye65qih5Z2XICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cHJvcE9ic2VydmVyOiBwcm9wT2JzZXJ2ZXIsXG5cdGNhbGxPYnNlcnZlcjogY2FsbE9ic2VydmVyLFxuXHR0b3VjaHN0YXJ0RXZlbnQ6IHRvdWNoc3RhcnRFdmVudCxcblx0dG91Y2htb3ZlRXZlbnQ6IHRvdWNobW92ZUV2ZW50LFxuXHR0b3VjaGVuZEV2ZW50OiB0b3VjaGVuZEV2ZW50XG59XG4gICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzXG4gICAgICAgfSkoe2V4cG9ydHM6e319KTtcbiAgICAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///66\n");

/***/ })
],[[0,"app-config"]]]);