"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {
    tweets: []
  },
  mutations: {
    initApp: function initApp(state, pTweets) {
      state.tweets = pTweets;
    }
  },
  actions: {
    initApp: function initApp(_ref) {
      var commit = _ref.commit;

      _axios["default"].get("http://localhost:3000/tweets").then(function (response) {
        commit("initApp", response.data || []);
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  },
  getters: {
    tweets: function tweets(state) {
      return state.tweets;
    }
  },
  modules: {}
});

exports["default"] = _default;