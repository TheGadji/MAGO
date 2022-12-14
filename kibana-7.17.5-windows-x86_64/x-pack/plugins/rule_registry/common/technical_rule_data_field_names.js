"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _technical_field_names = require("@kbn/rule-data-utils/technical_field_names");

Object.keys(_technical_field_names).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _technical_field_names[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _technical_field_names[key];
    }
  });
});

var _alerts_as_data_status = require("@kbn/rule-data-utils/alerts_as_data_status");

Object.keys(_alerts_as_data_status).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alerts_as_data_status[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _alerts_as_data_status[key];
    }
  });
});

var _alerts_as_data_rbac = require("@kbn/rule-data-utils/alerts_as_data_rbac");

Object.keys(_alerts_as_data_rbac).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alerts_as_data_rbac[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _alerts_as_data_rbac[key];
    }
  });
});