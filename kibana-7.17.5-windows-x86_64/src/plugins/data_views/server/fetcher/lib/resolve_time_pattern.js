"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveTimePattern = resolveTimePattern;

var _lodash = require("lodash");

var _moment = _interopRequireDefault(require("moment"));

var _time_pattern_to_wildcard = require("./time_pattern_to_wildcard");

var _es_api = require("./es_api");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 *  Convert a time pattern into a list of indexes it could
 *  have matched and ones it did match.
 *
 *  @param  {Function} callCluster bound function for accessing an es client
 *  @param  {String} timePattern
 *  @return {Promise<Object>} object that lists the indices that match based
 *                            on a wildcard version of the time pattern (all)
 *                            and the indices that actually match the time
 *                            pattern (matches);
 */
async function resolveTimePattern(callCluster, timePattern) {
  const aliases = await (0, _es_api.callIndexAliasApi)(callCluster, (0, _time_pattern_to_wildcard.timePatternToWildcard)(timePattern));
  const allIndexDetails = (0, _lodash.chain)(aliases.body).reduce((acc, index, indexName) => acc.concat(indexName, Object.keys(index.aliases || {})), []).sortBy(indexName => indexName).sortedUniq().map(indexName => {
    const parsed = (0, _moment.default)(indexName, timePattern, true);

    if (!parsed.isValid()) {
      return {
        valid: false,
        indexName,
        order: indexName,
        isMatch: false
      };
    }

    return {
      valid: true,
      indexName,
      order: parsed,
      isMatch: indexName === parsed.format(timePattern)
    };
  }).orderBy(['valid', 'order'], ['desc', 'desc']).value();
  return {
    all: allIndexDetails.map(details => details.indexName),
    matches: allIndexDetails.filter(details => details.isMatch).map(details => details.indexName)
  };
}