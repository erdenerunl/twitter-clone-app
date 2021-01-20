"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("@/assets/main.scss");

require("@/assets/variable.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _vue.createApp)(_App["default"]).use(_store["default"]).use(_router["default"]).mount('#app');