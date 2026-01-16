"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/history/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./src/pages/history/index.tsx":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./src/pages/history/index.tsx ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.31_@tarojs+components@3.6.31_@tarojs+helper@3.6.31_@t_292182ebaf97f21d77222c1146e9330d/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.31_@tarojs+helper@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__6625a75cd3c8524043bddd6a131c5a64/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data */ "./src/data.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translations */ "./src/translations.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");







function History() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_data__WEBPACK_IMPORTED_MODULE_4__.MOCK_WORDS),
    _useState2 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
    words = _useState2[0];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('en'),
    _useState4 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    language = _useState4[0],
    setLanguage = _useState4[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(function () {
    var stored = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('language');
    if (stored) setLanguage(stored);
  });
  var t = _translations__WEBPACK_IMPORTED_MODULE_5__.translations[language];
  var streak = 5; // Mock

  var goToSettings = function goToSettings() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: '/pages/settings/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "bg-background-dark min-h-screen pb-24",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "flex flex-row items-center justify-between px-4 py-3 sticky top-0 z-20 bg-background-dark border-b border-border-dark",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-row items-center gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "flex items-center justify-center size-8 rounded-full bg-surface-dark border border-border-dark text-text-secondary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-lg font-bold",
            children: "\u2630"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-base font-semibold leading-tight text-white block",
            children: ["vocab / ", t.history.toLowerCase()]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-sm text-text-secondary font-mono block",
            children: "master"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        onClick: goToSettings,
        className: "flex items-center justify-center size-8 rounded-md hover_cbg-surface-dark",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-text-secondary text-lg",
          children: "\u2699\uFE0F"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "px-4 py-6 flex flex-col gap-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "grid grid-cols-2 gap-3",
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "p-3 rounded-lg border border-border-dark bg-surface-dark",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "flex flex-row items-center gap-2 text-text-secondary mb-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-_b18px_B",
              children: "\uD83D\uDD52"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-xs font-bold uppercase tracking-wider",
              children: t.commits
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-3xl font-bold text-white block",
            children: words.length
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "p-3 rounded-lg border border-border-dark bg-surface-dark",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "flex flex-row items-center gap-2 text-text-secondary mb-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-_b18px_B",
              children: "\u26A1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-xs font-bold uppercase tracking-wider",
              children: t.streak
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-3xl font-bold text-white block",
            children: [streak, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-sm font-normal text-text-secondary",
              children: t.days
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "relative group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full justify-center",
          style: {
            top: 0,
            bottom: 0,
            left: 0,
            paddingLeft: '12px',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-text-secondary text-lg",
            children: "\uD83D\uDD0D"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Input, {
          className: "block w-full pl-10 pr-3 py-3 bg-surface-dark border border-border-dark rounded-md text-base font-mono placeholder-text-secondary text-white",
          placeholder: "Go to file...",
          placeholderStyle: "color: #8b949e",
          style: {
            paddingLeft: '36px'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "absolute inset-y-0 right-0 pr-3 flex items-center h-full justify-center",
          style: {
            top: 0,
            bottom: 0,
            right: 0,
            paddingRight: '12px',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "border border-border-dark rounded px-1_d5 py-0_d5 text-xs text-text-secondary font-mono",
            children: "\u2318K"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "border border-border-dark rounded-md overflow-hidden bg-surface-dark",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "flex flex-row items-center gap-2 px-4 py-3 bg-surface-dark border-b border-border-dark",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Image, {
            className: "size-6 rounded-full",
            src: "https://picsum.photos/seed/user/50"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-sm font-semibold text-white",
            children: "user"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-xs text-text-secondary truncate",
            children: "feat: synced memory store"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          children: words.map(function (word) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
              className: "group flex flex-row items-center gap-3 px-4 py-4 border-b border-border-dark last_cborder-0 hover_cbg-_b_h1c2128_B",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                className: "text-text-secondary text-xl",
                children: "\u25CF"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
                className: "flex-1 min-w-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
                  className: "flex flex-row items-center gap-2 mb-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    className: "text-base font-bold text-white group-hover_ctext-primary",
                    children: word.word
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
                    className: "px-2 py-0_d5 rounded-full border border-border-dark bg-background-dark",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                      className: "text-xs text-text-secondary",
                      children: word.partOfSpeech.slice(0, 3)
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "text-sm text-text-secondary truncate block",
                  children: word.definition
                })]
              })]
            }, word.id);
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/history/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/history/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_history_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/history/index!./src/pages/history/index.tsx");


var config = {"navigationBarTitleText":"History"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_history_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/history/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_history_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/history/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map