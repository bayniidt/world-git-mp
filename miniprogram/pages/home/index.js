"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./src/pages/home/index.tsx":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./src/pages/home/index.tsx ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.31_@tarojs+components@3.6.31_@tarojs+helper@3.6.31_@t_292182ebaf97f21d77222c1146e9330d/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.31_@tarojs+helper@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__6625a75cd3c8524043bddd6a131c5a64/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _components_ContributionGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContributionGraph */ "./src/components/ContributionGraph.tsx");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage */ "./src/services/storage.ts");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../translations */ "./src/translations.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");

 // Standard Taro components






function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    words = _useState2[0],
    setWords = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('en'),
    _useState4 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    language = _useState4[0],
    setLanguage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.getUserInfo()),
    _useState6 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    userInfo = _useState6[0],
    setUserInfo = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5),
    _useState8 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    streak = _useState8[0],
    setStreak = _useState8[1]; // Still mock streak for now or calculate from activity
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState0 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
    activeId = _useState0[0],
    setActiveId = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined),
    _useState10 = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState1, 2),
    graphData = _useState10[0],
    setGraphData = _useState10[1];
  var t = _translations__WEBPACK_IMPORTED_MODULE_6__.translations[language];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useLoad)(function () {
    console.log('Page loaded.');
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(function () {
    var stored = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('language');
    if (stored) {
      setLanguage(stored);
      var currentT = _translations__WEBPACK_IMPORTED_MODULE_6__.translations[stored];
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setNavigationBarTitle({
        title: currentT.home
      });
    } else {
      // fallback for default 'en' state
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setNavigationBarTitle({
        title: _translations__WEBPACK_IMPORTED_MODULE_6__.translations['en'].home
      });
    }

    // Refresh Data
    setWords(_services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.getWords());

    // Check user info
    var info = _services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.getUserInfo();
    setUserInfo(info);

    // Hint for new users
    if (info.nickName === 'WeChat User' || info.avatarUrl.includes('gray')) {
      // Simple heuristic to detect default user
      // Avoid showing every time if they just don't want to change it? 
      // For now, just show it once per session or just show it.
      // Let's use a subtle toast so it's not annoying.
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
          title: '点头像可修改资料',
          icon: 'none',
          duration: 2000
        });
      }, 500);
    }
    setGraphData(_services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.getActivityData());

    // Simple streak calc: check if today has activity? 
    // For now we keep the mock or static streak logic as it requires complex consecutive day check.
  });
  var onChooseAvatar = function onChooseAvatar(e) {
    var avatarUrl = e.detail.avatarUrl;
    if (avatarUrl) {
      var updated = _services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.updateUserInfo({
        avatarUrl: avatarUrl
      });
      setUserInfo(updated);
    }
  };
  var onNicknameBlur = function onNicknameBlur(e) {
    var val = e.detail.value;
    if (val && val !== userInfo.nickName) {
      var updated = _services_storage__WEBPACK_IMPORTED_MODULE_5__.StorageService.updateUserInfo({
        nickName: val
      });
      setUserInfo(updated);
    }
  };
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
    });
  };
  var navigateToLearn = function navigateToLearn() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().switchTab({
      url: '/pages/learn/index'
    });
  };
  var navigateToHistory = function navigateToHistory() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().switchTab({
      url: '/pages/history/index'
    });
  };
  var navigateToNewEntry = function navigateToNewEntry() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: '/pages/new-entry/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "bg-background-dark min-h-screen p-4 pb-24",
    style: {
      minHeight: '100vh',
      padding: '16px',
      paddingBottom: '96px',
      backgroundColor: '#0d1117'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "flex flex-row items-center justify-between mb-6",
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-row items-center gap-3",
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "relative",
          style: {
            position: 'relative'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            openType: "chooseAvatar",
            onChooseAvatar: onChooseAvatar,
            className: "p-0 border-0 bg-transparent flex items-center justify-center m-0",
            style: {
              width: '40px',
              height: '40px',
              padding: 0,
              backgroundColor: 'transparent',
              lineHeight: 0,
              borderRadius: '50%',
              overflow: 'hidden'
            },
            plain: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Image, {
              className: "size-10 rounded-full border-2 border-white_f10 w-full h-full",
              src: userInfo.avatarUrl,
              mode: "aspectFill",
              style: {
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.1)'
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "absolute -bottom-0_d5 -right-0_d5 size-3 rounded-full bg-primary border-2 border-background-dark",
            style: {
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#13ec6d',
              border: '2px solid #0d1117'
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
            className: "text-xs font-medium text-gray-400 block",
            style: {
              fontSize: '12px',
              color: '#8b949e',
              display: 'block'
            },
            children: t.welcome
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "nickname",
            className: "text-sm font-bold leading-tight text-white block min-w-_b60px_B",
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#fff',
              display: 'block',
              minWidth: '60px'
            },
            value: userInfo.nickName,
            onBlur: onNicknameBlur
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-row items-center gap-1 rounded-full bg-white_f5 border border-white_f5 px-3 py-1_d5",
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '999px',
          padding: '6px 12px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-orange-500 text-lg",
          style: {
            color: '#f97316',
            fontSize: '18px'
          },
          children: "\uD83D\uDD25"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-sm font-bold text-white",
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#fff'
          },
          children: streak
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "bg-surface-dark border border-white_f5 rounded-xl p-2 shadow-sm mb-4",
      style: {
        backgroundColor: '#161b22',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '8px',
        marginBottom: '16px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-row items-center justify-between mb-1 px-1",
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-xs font-bold text-gray-400 uppercase",
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#8b949e',
            textTransform: 'uppercase'
          },
          children: t.activity
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
          className: "flex flex-row items-center gap-1",
          style: {
            display: 'flex',
            flexDirection: 'row',
            gap: '4px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "size-2 rounded-sm",
            style: {
              width: 8,
              height: 8,
              backgroundColor: '#30363d'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "size-2 rounded-sm",
            style: {
              width: 8,
              height: 8,
              backgroundColor: 'rgba(19, 236, 109, 0.3)'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "size-2 rounded-sm",
            style: {
              width: 8,
              height: 8,
              backgroundColor: 'rgba(19, 236, 109, 0.6)'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
            className: "size-2 rounded-sm",
            style: {
              width: 8,
              height: 8,
              backgroundColor: '#13ec6d'
            }
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_ContributionGraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: graphData
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "mb-6",
      style: {
        marginBottom: '24px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: navigateToNewEntry,
        className: "w-full flex flex-row items-center justify-center gap-2 rounded-xl bg-primary-10 border border-primary-20 h-14 text-primary font-bold",
        style: {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          borderRadius: '12px',
          backgroundColor: 'rgba(19, 236, 109, 0.1)',
          border: '1px solid rgba(19, 236, 109, 0.2)',
          height: '56px',
          color: '#13ec6d',
          fontWeight: 'bold'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          style: {
            fontSize: '24px',
            marginRight: '4px'
          },
          children: "+"
        }), t.addWord]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-row items-center justify-between mb-4 px-1",
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          className: "text-sm font-bold uppercase tracking-wide text-gray-400",
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#8b949e',
            textTransform: 'uppercase'
          },
          children: t.recentlyAdded
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
          onClick: navigateToHistory,
          className: "text-xs text-primary font-semibold",
          style: {
            fontSize: '12px',
            color: '#13ec6d',
            fontWeight: '600'
          },
          children: t.viewAll
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
        className: "flex flex-col gap-3",
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        },
        children: words.slice(0, 3).map(function (word) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
              className: "flex flex-row items-start justify-between",
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "text-lg font-bold mb-0_d5 block ".concat(activeId === word.id ? 'text-primary' : 'text-white'),
                  style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '2px',
                    display: 'block',
                    color: activeId === word.id ? '#13ec6d' : '#fff'
                  },
                  children: word.word
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "font-mono text-xs text-gray-400 block",
                  style: {
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#8b949e',
                    display: 'block'
                  },
                  children: word.phonetic
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
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
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "text-sm",
                  style: {
                    fontSize: '14px',
                    color: 'inherit'
                  },
                  children: "\uD83D\uDD0A"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.Text, {
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

/***/ "./src/components/ContributionGraph.tsx":
/*!**********************************************!*\
  !*** ./src/components/ContributionGraph.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.31_@tarojs+components@3.6.31_@tarojs+helper@3.6.31_@t_292182ebaf97f21d77222c1146e9330d/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js");



var ContributionGraph = function ContributionGraph(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 15 : _ref$columns,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 5 : _ref$rows,
    data = _ref.data;
  // Generate random data if none provided for visual effect
  var graphData = data || Array.from({
    length: columns
  }, function () {
    return Array.from({
      length: rows
    }, function () {
      return Math.floor(Math.random() * 4);
    });
  });
  var actualColumns = graphData.length;
  var getIntensityClass = function getIntensityClass(level) {
    switch (level) {
      case 0:
        return 'bg-gray-200';
      case 1:
        return 'bg-primary-30';
      case 2:
        return 'bg-primary-60';
      case 3:
        return 'bg-primary';
      default:
        return 'bg-gray-200';
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "w-full",
    style: {
      display: 'grid',
      gridTemplateColumns: "repeat(".concat(actualColumns, ", 1fr)"),
      gap: '4px'
    },
    children: graphData.map(function (col, cIdx) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "flex flex-col gap-1",
        style: {
          gap: '4px'
        },
        children: col.map(function (level, rIdx) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
            className: "w-full aspect-square rounded-sm ".concat(getIntensityClass(level)),
            style: {
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: '2px',
              backgroundColor: level === 0 ? '#30363d' : level === 1 ? 'rgba(19, 236, 109, 0.3)' : level === 2 ? 'rgba(19, 236, 109, 0.6)' : '#13ec6d'
            }
          }, rIdx);
        })
      }, cIdx);
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ContributionGraph);

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/.pnpm/@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__@types+react@18.3.27_postcss@8.5.6/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/home/index!./src/pages/home/index.tsx");


var config = {"navigationBarTitleText":"Home","enableShareAppMessage":true};

_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].enableShareAppMessage = true
var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/home/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_3_6_31_tarojs_runtime_3_6_31_tarojs_shared_3_6_31_types_react_18_3_27_postcss_8_5_6_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_home_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/home/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map