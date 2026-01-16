"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/splash/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./src/pages/splash/index.tsx":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./src/pages/splash/index.tsx ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Splash; }
/* harmony export */ });
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.31_@tarojs+components@3.6.31_@tarojs+helper@3.6.31_@t_292182ebaf97f21d77222c1146e9330d/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.31_@tarojs+helper@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__6625a75cd3c8524043bddd6a131c5a64/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");






function Splash() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
    _useState2 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    progress = _useState2[0],
    setProgress = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var interval = setInterval(function () {
      setProgress(function (prev) {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(function () {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().switchTab({
              url: '/pages/home/index'
            });
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "h-screen w-full bg-background-dark flex flex-col items-center justify-center p-8 relative overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "absolute inset-0 z-0 opacity-20 pointer-events-none",
      style: {
        backgroundImage: 'radial-gradient(#888 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "z-10 flex flex-col items-center justify-center w-full flex-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "relative mb-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "absolute inset-0 bg-primary blur-2xl opacity-10 rounded-full scale-150"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "relative w-32 h-32 bg-_b_h1c2e24_B shadow-xl rounded-3xl flex items-center justify-center border border-white_f5 p-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "material-symbols-outlined text-primary text-_b56px_B font-bold",
            children: "menu_book"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "text-white tracking-tight text-_b40px_B font-extrabold leading-tight text-center block",
        children: "WordGit"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "text-_b_h9db9a8_B text-sm font-medium opacity-80 mt-1 block",
        children: "v1.0.0"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "z-10 w-full max-w-xs pb-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "flex flex-col gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "flex flex-row justify-between items-end px-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "text-_b_h9db9a8_B text-_b10px_B font-bold uppercase tracking-widest",
            children: "Committing to Repo..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
            className: "material-symbols-outlined text-primary text-sm animate-spin",
            children: "sync"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
          className: "flex flex-row gap-1_d5 h-2",
          children: (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(7)).map(function (_, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
              className: "flex-1 rounded-full transition-all duration-300 ".concat(i * 15 < progress ? 'bg-primary' : 'bg-white_f10')
            }, i);
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/splash/index.tsx":
/*!************************************!*\
  !*** ./src/pages/splash/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_splash_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/splash/index!./src/pages/splash/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_splash_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/splash/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_splash_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/splash/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map