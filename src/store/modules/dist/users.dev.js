"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    onSave: function onSave(state, newUser) {
      state.users.push(newUser);
    }
  },
  actions: {
    onSave: function onSave(_ref, newUser) {
      var commit = _ref.commit;
      console.log(newUser);

      _axios["default"].post("http://localhost:3000/users", newUser).then(function (response) {
        commit("onSave", response.data || []);
      })["catch"](function (e) {
        return console.warn(e);
      });
    }
  }
};
exports["default"] = _default;