"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertEsError = convertEsError;
exports.createNoMatchingIndicesError = createNoMatchingIndicesError;
exports.isEsIndexNotFoundError = isEsIndexNotFoundError;
exports.isNoMatchingIndicesError = isNoMatchingIndicesError;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _lodash = require("lodash");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const ERR_ES_INDEX_NOT_FOUND = 'index_not_found_exception';
const ERR_NO_MATCHING_INDICES = 'no_matching_indices';
/**
 *  Determines if an error is an elasticsearch error that's
 *  describing a failure caused by missing index/indices
 *  @param  {Any}  err
 *  @return {Boolean}
 */

function isEsIndexNotFoundError(err) {
  return (0, _lodash.get)(err, ['body', 'error', 'type']) === ERR_ES_INDEX_NOT_FOUND;
}
/**
 *  Creates an error that informs that no indices match the given pattern.
 *
 *  @param  {String} pattern the pattern which indexes were supposed to match
 *  @return {Boom}
 */


function createNoMatchingIndicesError(pattern) {
  const err = _boom.default.notFound(`No indices match pattern "${pattern}"`);

  err.output.payload.code = ERR_NO_MATCHING_INDICES;
  return err;
}
/**
 *  Determines if an error is produced by `createNoMatchingIndicesError()`
 *
 *  @param  {Any} err
 *  @return {Boolean}
 */


function isNoMatchingIndicesError(err) {
  return (0, _lodash.get)(err, ['output', 'payload', 'code']) === ERR_NO_MATCHING_INDICES;
}
/**
 *  Wrap "index_not_found_exception" errors in custom Boom errors
 *  automatically
 *  @param  {Array<String>|String} indices
 *  @return {Boom}
 */


function convertEsError(indices, error) {
  if (isEsIndexNotFoundError(error)) {
    return createNoMatchingIndicesError(indices);
  }

  if (error.isBoom) {
    return error;
  }

  const statusCode = error.statusCode;
  const message = error.body ? error.body.error : undefined;
  return _boom.default.boomify(error, {
    statusCode,
    message
  });
}