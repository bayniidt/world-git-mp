"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/learn/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/learn/index!./src/pages/learn/index.tsx":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/learn/index!./src/pages/learn/index.tsx ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Learn; }
/* harmony export */ });
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.31_@tarojs+components@3.6.31_@tarojs+helper@3.6.31_@t_292182ebaf97f21d77222c1146e9330d/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.31_@tarojs+helper@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__6625a75cd3c8524043bddd6a131c5a64/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations */ "./src/translations.ts");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage */ "./src/services/storage.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");







// ...

function Learn() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    words = _useState2[0],
    setWords = _useState2[1];
  // Default to English for now, ideally from global store
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('en'),
    _useState4 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    language = _useState4[0],
    setLanguage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState6 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    activeId = _useState6[0],
    setActiveId = _useState6[1];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(function () {
    var stored = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('language');
    if (stored) {
      setLanguage(stored);
      var currentT = _translations__WEBPACK_IMPORTED_MODULE_4__.translations[stored];
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setNavigationBarTitle({
        title: currentT.learn
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setNavigationBarTitle({
        title: _translations__WEBPACK_IMPORTED_MODULE_4__.translations['en'].learn
      });
    }
    setWords(_services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.getWords());
  });
  var t = _translations__WEBPACK_IMPORTED_MODULE_4__.translations[language];
  var playAudio = function playAudio(text, id) {
    setActiveId(id);
    var innerAudioContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = "https://dict.youdao.com/dictvoice?audio=".concat(text, "&type=2");
    setTimeout(function () {
      setActiveId(null);
    }, 2000);
    innerAudioContext.onPlay(function () {
      console.log('Start playing audio');
    });
    innerAudioContext.onError(function (res) {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "p-4 space-y-6 pb-24 text-white min-h-screen bg-background-dark",
    style: {
      padding: '16px',
      paddingBottom: '96px',
      minHeight: '100vh',
      backgroundColor: '#0d1117'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "grid grid-cols-2 gap-4",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '24px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "p-4 rounded-lg bg-surface-dark border border-border-dark",
        style: {
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#161b22',
          border: '1px solid #30363d'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1",
          style: {
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#8b949e',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '4px'
          },
          children: t.accuracy
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "flex items-end gap-2",
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-2xl font-bold text-white",
            style: {
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#fff'
            },
            children: "94%"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-xs text-primary font-medium mb-1",
            style: {
              fontSize: '12px',
              color: '#13ec6d',
              fontWeight: '500',
              marginBottom: '4px'
            },
            children: "+2%"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "p-4 rounded-lg bg-surface-dark border border-border-dark",
        style: {
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#161b22',
          border: '1px solid #30363d'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1",
          style: {
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#8b949e',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '4px'
          },
          children: t.level
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "flex items-end gap-2",
          style: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-2xl font-bold text-white",
            style: {
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#fff'
            },
            children: "B2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-xs text-gray-400 mb-1",
            style: {
              fontSize: '12px',
              color: '#8b949e',
              marginBottom: '4px'
            },
            children: "Adv."
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "space-y-3",
      style: {
        marginBottom: '12px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex items-center justify-between px-1",
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '4px',
          paddingRight: '4px',
          marginBottom: '12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-lg font-bold text-white",
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#fff'
          },
          children: t.review
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "flex items-center gap-1_d5 px-2 py-1 rounded-full bg-gray-800 border border-border-dark",
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 8px',
            borderRadius: '999px',
            backgroundColor: '#1f2937',
            border: '1px solid #30363d'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-gray-400 text-xs font-bold uppercase",
            style: {
              color: '#9ca3af',
              fontSize: '10px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            },
            children: t.dailyMix
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-col gap-3",
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        },
        children: words.map(function (word) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            onClick: function onClick() {
              return playAudio(word.word, word.id);
            },
            className: "flex flex-col gap-2 rounded-xl border p-4 transition-all duration-300 ".concat(activeId === word.id ? 'bg-primary-10 border-primary' : 'bg-surface-dark border-white_f5'),
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              borderRadius: '12px',
              padding: '16px',
              backgroundColor: activeId === word.id ? 'rgba(19, 236, 109, 0.1)' : '#161b22',
              border: activeId === word.id ? '1px solid #13ec6d' : '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
              className: "flex flex-row items-start justify-between",
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "text-lg font-bold mb-0_d5 block ".concat(activeId === word.id ? 'text-primary' : 'text-white'),
                  style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '2px',
                    display: 'block',
                    color: activeId === word.id ? '#13ec6d' : '#fff'
                  },
                  children: word.word
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "font-mono text-xs text-gray-400 block",
                  style: {
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#8b949e',
                    display: 'block'
                  },
                  children: word.phonetic
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
                onClick: function onClick(e) {
                  e.stopPropagation();
                  playAudio(word.word, word.id);
                },
                className: "flex items-center justify-center size-7 rounded-full ".concat(activeId === word.id ? 'bg-primary text-background-dark' : 'bg-white_f5 text-gray-400'),
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: activeId === word.id ? '#13ec6d' : 'rgba(255,255,255,0.05)',
                  color: activeId === word.id ? '#0d1117' : '#8b949e'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "text-sm",
                  style: {
                    fontSize: '14px',
                    color: 'inherit'
                  },
                  children: "\uD83D\uDD0A"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
              className: "text-xs text-gray-300 mt-1",
              style: {
                fontSize: '12px',
                color: '#d0d7de',
                marginTop: '4px',
                lineHeight: '1.5'
              },
              children: word.definition
            })]
          }, word.id);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/learn/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/learn/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_learn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/learn/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/learn/index!./src/pages/learn/index.tsx");


var config = {"navigationBarTitleText":"Learn","enableShareAppMessage":true};

_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_learn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].enableShareAppMessage = true
var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_learn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/learn/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_learn_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/learn/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map