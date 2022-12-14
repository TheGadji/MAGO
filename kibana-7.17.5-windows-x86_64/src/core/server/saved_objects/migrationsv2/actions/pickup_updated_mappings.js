"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickupUpdatedMappings = void 0;

var Either = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _catch_retryable_es_client_errors = require("./catch_retryable_es_client_errors");

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Pickup updated mappings by performing an update by query operation on all
 * documents in the index. Returns a task ID which can be
 * tracked for progress.
 *
 * @remarks When mappings are updated to add a field which previously wasn't
 * mapped Elasticsearch won't automatically add existing documents to it's
 * internal search indices. So search results on this field won't return any
 * existing documents. By running an update by query we essentially refresh
 * these the internal search indices for all existing documents.
 * This action uses `conflicts: 'proceed'` allowing several Kibana instances
 * to run this in parallel.
 */
const pickupUpdatedMappings = (client, index) => () => {
  return client.updateByQuery({
    // Ignore version conflicts that can occur from parallel update by query operations
    conflicts: 'proceed',
    // Return an error when targeting missing or closed indices
    allow_no_indices: false,
    index,
    // How many documents to update per batch
    scroll_size: _constants.BATCH_SIZE,
    // force a refresh so that we can query the updated index immediately
    // after the operation completes
    refresh: true,
    // Create a task and return task id instead of blocking until complete
    wait_for_completion: false
  }).then(({
    body: {
      task: taskId
    }
  }) => {
    return Either.right({
      taskId: String(taskId)
    });
  }).catch(_catch_retryable_es_client_errors.catchRetryableEsClientErrors);
};

exports.pickupUpdatedMappings = pickupUpdatedMappings;