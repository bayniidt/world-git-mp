"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/settings/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./src/pages/settings/index.tsx":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./src/pages/settings/index.tsx ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Settings; }
/* harmony export */ });
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.31_@tarojs+components@3.6.31_@tarojs+helper@3.6.31_@t_292182ebaf97f21d77222c1146e9330d/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.31_@tarojs+helper@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__6625a75cd3c8524043bddd6a131c5a64/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations */ "./src/translations.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");






function Settings() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('en'),
    _useState2 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    language = _useState2[0],
    setLanguageState = _useState2[1];
  var updateLanguageFromStorage = function updateLanguageFromStorage() {
    var stored = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('language');
    if (stored) {
      console.log('Settings: syncing language from storage:', stored);
      setLanguageState(stored);
      updatePage(stored);
    }
  };
  var updatePage = function updatePage(lang) {
    var t = _translations__WEBPACK_IMPORTED_MODULE_4__.translations[lang];
    if (!t) return;

    // Update Title
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setNavigationBarTitle({
      title: t.settings
    });

    // Update TabBar
    var tabs = [{
      index: 0,
      text: t.home
    }, {
      index: 1,
      text: t.learn
    }, {
      index: 2,
      text: t.history
    }, {
      index: 3,
      text: t.settings
    }];
    tabs.forEach(function (tab) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setTabBarItem({
        index: tab.index,
        text: tab.text,
        success: function success() {
          return console.log("Updated tab ".concat(tab.index, " to ").concat(tab.text));
        },
        fail: function fail(err) {
          return console.error("Failed to update tab ".concat(tab.index, ":"), err);
        }
      });
    });
  };
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(function () {
    updateLanguageFromStorage();
  });

  // Also update when language is manually set
  var setLanguage = function setLanguage(l) {
    console.log('Settings: setting language to', l);
    setLanguageState(l);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setStorageSync('language', l);
    updatePage(l);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
      title: 'Language updated',
      icon: 'success',
      duration: 1000
    });
  };
  var t = _translations__WEBPACK_IMPORTED_MODULE_4__.translations[language];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "bg-background-dark min-h-screen pb-24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "px-4 py-6 flex flex-col gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "space-y-4 flex flex-col gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-xs font-bold text-text-secondary uppercase tracking-wider px-1",
          children: t.language
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "bg-surface-dark border border-border-dark rounded-xl overflow-hidden divide-y divide-border-dark flex flex-col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            onClick: function onClick() {
              return setLanguage('en');
            },
            className: "w-full flex flex-row items-center justify-between px-4 py-4 hover_cbg-white_f5 transition-colors border-b border-border-dark last_cborder-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
              className: "flex flex-row items-center gap-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "text-sm font-medium text-white",
                children: t.english
              })
            }), language === 'en' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-primary text-xl font-bold",
              children: "\u2713"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            onClick: function onClick() {
              return setLanguage('zh');
            },
            className: "w-full flex flex-row items-center justify-between px-4 py-4 hover_cbg-white_f5 transition-colors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
              className: "flex flex-row items-center gap-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "text-sm font-medium text-white",
                children: t.chinese
              })
            }), language === 'zh' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-primary text-xl font-bold",
              children: "\u2713"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "space-y-4 flex flex-col gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-xs font-bold text-text-secondary uppercase tracking-wider px-1",
          children: "About"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "bg-surface-dark border border-border-dark rounded-xl px-4 py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "flex flex-row justify-between items-center text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-text-secondary",
              children: "Version"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "font-mono text-xs text-white",
              children: "1.0.0-mp"
            })]
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/settings/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/settings/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/index!./src/pages/settings/index.tsx");


var config = {"navigationBarTitleText":"Settings"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/settings/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/settings/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map