"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginsStatusService = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _plugins_status = require("./plugins_status");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
class PluginsStatusService extends _plugins_status.PluginsStatusService {
  constructor(deps) {
    super(deps);
    (0, _defineProperty2.default)(this, "all$", void 0);
    (0, _defineProperty2.default)(this, "dependenciesStatuses$", void 0);
    (0, _defineProperty2.default)(this, "derivedStatuses$", void 0);
    this.dependenciesStatuses$ = {};
    this.derivedStatuses$ = {};
  }

  getAll$() {
    if (!this.all$) {
      this.all$ = super.getAll$();
    }

    return this.all$;
  }

  getDependenciesStatus$(plugin) {
    if (!this.dependenciesStatuses$[plugin]) {
      this.dependenciesStatuses$[plugin] = super.getDependenciesStatus$(plugin);
    }

    return this.dependenciesStatuses$[plugin];
  }

  getDerivedStatus$(plugin) {
    if (!this.derivedStatuses$[plugin]) {
      this.derivedStatuses$[plugin] = super.getDerivedStatus$(plugin);
    }

    return this.derivedStatuses$[plugin];
  }

}

exports.PluginsStatusService = PluginsStatusService;