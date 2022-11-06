"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAggSupported = isAggSupported;

var _lodash = require("lodash");

var _errors = require("../../../../common/errors");

var _enums = require("../../../../common/enums");

var _ui_restrictions = require("../../../../common/ui_restrictions");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// @todo: will be removed in 8.1
// That logic was moved into common folder in that PR https://github.com/elastic/kibana/pull/119967
// isMetricEnabled method should be used instead. See check_ui_restrictions.ts file
const checkUIRestrictions = (key, restrictions, type) => {
  const isAllEnabled = (0, _lodash.get)(restrictions !== null && restrictions !== void 0 ? restrictions : _ui_restrictions.DEFAULT_UI_RESTRICTION, `${type}.*`, true);
  return isAllEnabled || Boolean((0, _lodash.get)(restrictions !== null && restrictions !== void 0 ? restrictions : _ui_restrictions.DEFAULT_UI_RESTRICTION, [type, key], false));
};

function isAggSupported(metrics, capabilities) {
  const metricTypes = metrics.filter(metric => !checkUIRestrictions(metric.type, capabilities.uiRestrictions, _ui_restrictions.RESTRICTIONS_KEYS.WHITE_LISTED_METRICS));

  if (metricTypes.length) {
    throw new _errors.AggNotSupportedInMode(metricTypes.map(metric => `"${metric.type}"`).join(', '), _enums.TIME_RANGE_DATA_MODES.ENTIRE_TIME_RANGE);
  }
}