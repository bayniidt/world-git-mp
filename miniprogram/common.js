"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/services/storage.ts":
/*!*********************************!*\
  !*** ./src/services/storage.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/.pnpm/@tarojs+taro@3.6.31_@tarojs+helper@3.6.31_@tarojs+runtime@3.6.31_@tarojs+shared@3.6.31__6625a75cd3c8524043bddd6a131c5a64/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);





var KEYS = {
  WORDS: 'words',
  USER_INFO: 'user_info',
  LANGUAGE: 'language',
  ACTIVITY: 'activity' // Store as Object { 'YYYY-MM-DD': count }
};
var DEFAULT_USER = {
  avatarUrl: 'https://picsum.photos/seed/learner/100',
  nickName: 'Learner'
};
var MOCK_WORDS_INIT = [{
  id: '1',
  word: 'Ephemeral',
  phonetic: '/əˈfem(ə)rəl/',
  definition: 'Lasting for a very short time.',
  example: 'Fashions are ephemeral, changing with every season.',
  partOfSpeech: 'Adjective',
  labels: ['vocabulary', 'essential'],
  createdAt: new Date().toISOString(),
  lastReviewed: null,
  mastery: 0
}, {
  id: '2',
  word: 'Serendipity',
  phonetic: '/ˌserənˈdipədē/',
  definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
  example: 'We found the restaurant by pure serendipity.',
  partOfSpeech: 'Noun',
  labels: ['vocabulary', 'positive'],
  createdAt: new Date(Date.now() - 86400000).toISOString(),
  lastReviewed: null,
  mastery: 0
}, {
  id: '3',
  word: 'Petrichor',
  phonetic: '/ˈpeˌtrīkôr/',
  definition: 'A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.',
  example: 'I love the petrichor of a summer storm.',
  partOfSpeech: 'Noun',
  labels: ['vocabulary', 'nature'],
  createdAt: new Date(Date.now() - 172800000).toISOString(),
  lastReviewed: null,
  mastery: 0
}];
var StorageService = {
  getWords: function getWords() {
    var stored = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageSync(KEYS.WORDS);
    if (!stored) {
      // Initialize with mocks if empty
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().setStorageSync(KEYS.WORDS, MOCK_WORDS_INIT);
      return MOCK_WORDS_INIT;
    }
    return stored;
  },
  addWord: function () {
    var _addWord = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/(0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(word) {
      var words, newEntry, updated, _t;
      return (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            words = StorageService.getWords();
            newEntry = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, word), {}, {
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              lastReviewed: null,
              mastery: 0
            }); // Cloud Persistence
            _context.p = 1;
            _context.n = 2;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().cloud.callFunction({
              name: 'addWord',
              data: {
                word: word.word,
                definition: word.definition,
                phonetic: word.phonetic,
                example: word.example,
                partOfSpeech: word.partOfSpeech,
                labels: word.labels
              }
            });
          case 2:
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error('Failed to save to cloud:', _t);
            // Continue to save locally even if cloud fails
          case 4:
            // Unshift to add to top
            updated = [newEntry].concat((0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(words));
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().setStorageSync(KEYS.WORDS, updated);

            // Update activity
            StorageService.recordActivity();
            return _context.a(2, newEntry);
        }
      }, _callee, null, [[1, 3]]);
    }));
    function addWord(_x) {
      return _addWord.apply(this, arguments);
    }
    return addWord;
  }(),
  getUserInfo: function getUserInfo() {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageSync(KEYS.USER_INFO) || DEFAULT_USER;
  },
  updateUserInfo: function updateUserInfo(info) {
    var current = StorageService.getUserInfo();
    var updated = (0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_cc_Repository_world_git_mp_node_modules_pnpm_babel_runtime_7_28_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, current), info);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().setStorageSync(KEYS.USER_INFO, updated);
    return updated;
  },
  recordActivity: function recordActivity() {
    var activity = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageSync(KEYS.ACTIVITY) || {};
    var today = new Date().toISOString().split('T')[0];
    activity[today] = (activity[today] || 0) + 1;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().setStorageSync(KEYS.ACTIVITY, activity);
  },
  getActivityData: function getActivityData() {
    var activity = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageSync(KEYS.ACTIVITY) || {};
    // Generate 7 columns x 5 rows matrix (last 35 days) or just last 7 weeks
    // For simplicity, let's map last 35 days to matrix
    // Returns columns (weeks)
    var columns = 15;
    var rows = 5;
    var matrix = [];

    // We want to show history from left (old) to right (today/new)? 
    // Usually GitHub graph is left-to-right, top-to-bottom or bottom-to-top week based.
    // The component expects number[][].
    // Let's assume input to ContributionGraph is Array of Columns, where each Column is Array of Rows (days).

    var today = new Date();

    // Fill backwards
    for (var c = 0; c < columns; c++) {
      var colData = [];
      for (var r = 0; r < rows; r++) {
        // Calculate date: (columns - 1 - c) * rows + (rows - 1 - r) days ago? 
        // Standard GitHub: Columns are weeks. Rows are Mon/Tue/Wed...
        // Let's simplify: Just last 35 days.
        // visual layout: 
        // Col 0: Day -34 to -30
        // ...
        // Col 6: Day -4 to Today

        // To make it look "flowing", let's just linearly map days back.
        // dayOffset = (columns - 1 - c) * rows + (rows - 1 - r)
        // actually simpler: just map consistently.
        // Let's iterate c from 0 to 6 (weeks/cols). r from 0 to 4 (days).
        // A bit arbitrary.

        // Re-reading component:
        // .map works on columns.

        var daysAgo = (columns - 1 - c) * rows + (rows - 1 - r);
        var d = new Date(today);
        d.setDate(d.getDate() - daysAgo);
        var dateStr = d.toISOString().split('T')[0];
        var count = activity[dateStr] || 0;

        // Normalize level 0-3
        var level = 0;
        if (count > 0) level = 1;
        if (count > 3) level = 2;
        if (count > 6) level = 3;
        colData.push(level);
      }
      matrix.push(colData);
    }
    return matrix;
  }
};

/***/ }),

/***/ "./src/translations.ts":
/*!*****************************!*\
  !*** ./src/translations.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translations: function() { return /* binding */ translations; }
/* harmony export */ });
var translations = {
  en: {
    welcome: "Welcome back,",
    activity: "Activity",
    last30Days: "Last 30 Days",
    recentlyAdded: "Recently Added",
    viewAll: "View All",
    addWord: "Add Word",
    history: "History",
    commits: "Commits",
    streak: "Streak",
    days: "days",
    learn: "Learn",
    review: "Review",
    accuracy: "Accuracy",
    level: "Level",
    mergeToMemory: "Merge to Memory",
    forgot: "Forgot",
    reviewLater: "Review Later",
    settings: "Settings",
    language: "Language",
    english: "English",
    chinese: "Chinese (简体中文)",
    newEntry: "New Entry",
    commitWord: "Commit Word",
    fetchingAI: "FETCH AI",
    fetching: "...",
    definition: "Definition",
    word: "Word",
    exampleSentence: "Example Sentence",
    labels: "Labels",
    home: "Home",
    profile: "Profile",
    learner: "Learner",
    dailyMix: "Daily Mix",
    write: "Write",
    preview: "Preview",
    addLabel: "Add Label"
  },
  zh: {
    welcome: "欢迎回来，",
    activity: "活跃度",
    last30Days: "最近30天",
    recentlyAdded: "最近添加",
    viewAll: "查看全部",
    addWord: "添加生词",
    history: "历史",
    commits: "提交数",
    streak: "连续天数",
    days: "天",
    learn: "学习",
    review: "复习",
    accuracy: "准确率",
    level: "等级",
    mergeToMemory: "并入记忆",
    forgot: "忘记了",
    reviewLater: "稍后复习",
    settings: "设置",
    language: "语言",
    english: "英语",
    chinese: "简体中文",
    newEntry: "新条目",
    commitWord: "提交单词",
    fetchingAI: "AI 获取",
    fetching: "获取中...",
    definition: "定义",
    word: "单词",
    exampleSentence: "例句",
    labels: "标签",
    home: "首页",
    profile: "个人",
    learner: "学习者",
    dailyMix: "每日回顾",
    write: "编辑",
    preview: "预览",
    addLabel: "添加标签"
  }
};

/***/ })

}]);
//# sourceMappingURL=common.js.map