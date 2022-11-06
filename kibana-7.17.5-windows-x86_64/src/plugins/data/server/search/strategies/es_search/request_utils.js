"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultSearchParams = getDefaultSearchParams;
exports.getShardTimeout = getShardTimeout;
exports.shimAbortSignal = void 0;

var _common = require("../../../../common");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function getShardTimeout(config) {
  const timeout = config.elasticsearch.shardTimeout.asMilliseconds();
  return timeout ? {
    timeout: `${timeout}ms`
  } : {};
}

async function getDefaultSearchParams(uiSettingsClient, body = {}) {
  const maxConcurrentShardRequests = await uiSettingsClient.get(_common.UI_SETTINGS.COURIER_MAX_CONCURRENT_SHARD_REQUESTS); // Specifying specific fields from both "_source" and "fields' while emulating the fields API will throw errors in ES
  // See https://github.com/elastic/elasticsearch/pull/75745

  const hasFields = Array.isArray(body === null || body === void 0 ? void 0 : body.fields) && (body === null || body === void 0 ? void 0 : body.fields.length) > 0;
  const hasSourceFields = (body === null || body === void 0 ? void 0 : body.hasOwnProperty('_source')) && typeof (body === null || body === void 0 ? void 0 : body._source) !== 'boolean';
  const enableFieldsEmulation = !(hasFields && hasSourceFields);
  return {
    max_concurrent_shard_requests: maxConcurrentShardRequests > 0 ? maxConcurrentShardRequests : undefined,
    ignore_unavailable: true,
    // Don't fail if the index/indices don't exist
    track_total_hits: true,
    enable_fields_emulation: enableFieldsEmulation
  };
}
/**
 * Temporary workaround until https://github.com/elastic/elasticsearch-js/issues/1297 is resolved.
 * Shims the `AbortSignal` behavior so that, if the given `signal` aborts, the `abort` method on the
 * `TransportRequestPromise` is called, actually performing the cancellation.
 * @internal
 */


const shimAbortSignal = (promise, signal) => {
  if (!signal) return promise;

  const abortHandler = () => {
    promise.abort();
    cleanup();
  };

  const cleanup = () => signal.removeEventListener('abort', abortHandler);

  if (signal.aborted) {
    promise.abort();
  } else {
    signal.addEventListener('abort', abortHandler);
    promise.then(cleanup, cleanup);
  }

  return promise;
};

exports.shimAbortSignal = shimAbortSignal;