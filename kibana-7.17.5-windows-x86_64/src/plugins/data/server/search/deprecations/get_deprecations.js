"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeprecations = getDeprecations;

var _i18n = require("@kbn/i18n");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
async function getDeprecations(ctx) {
  const response = await ctx.savedObjectsClient.find({
    type: 'config'
  });
  const isCourierBatchSearchesUsed = response.saved_objects.some(config => config.attributes.hasOwnProperty('courier:batchSearches') && config.attributes['courier:batchSearches'] === true);
  if (!isCourierBatchSearchesUsed) return [];
  return [{
    title: _i18n.i18n.translate('data.deprecations.courierBatchSearchesSettingTitle', {
      defaultMessage: 'courier:batchSearches is deprecated'
    }),
    message: _i18n.i18n.translate('data.deprecations.courierBatchSearchesSettingMessage', {
      defaultMessage: 'courier:batchSearches is currently enabled, and search requests use the legacy _search behavior.'
    }),
    level: 'warning',
    deprecationType: 'feature',
    correctiveActions: {
      manualSteps: [_i18n.i18n.translate('data.deprecations.manualStepOneMessage', {
        defaultMessage: 'Set courier:batchSearches to false to use _async_search instead.'
      })]
    }
  }];
}