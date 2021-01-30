"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("@/assets/main.scss");

require("@/assets/variable.scss");

var _LeftSidebar = _interopRequireDefault(require("@/components/shared/sidebars/LeftSidebar.vue"));

var _RightSidebar = _interopRequireDefault(require("@/components/shared/sidebars/RightSidebar.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Global component reg.
(0, _vue.createApp)(_App["default"]).use(_store["default"]).use(_router["default"]).component("left-sidebar", _LeftSidebar["default"]).component("right-sidebar", _RightSidebar["default"]).mount('#app');