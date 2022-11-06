"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uptime = require("./uptime.journey");

Object.keys(_uptime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _uptime[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _uptime[key];
    }
  });
});

var _alerts = require("./alerts");

Object.keys(_alerts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alerts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _alerts[key];
    }
  });
});

var _monitor_details = require("./monitor_details");

Object.keys(_monitor_details).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _monitor_details[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _monitor_details[key];
    }
  });
});