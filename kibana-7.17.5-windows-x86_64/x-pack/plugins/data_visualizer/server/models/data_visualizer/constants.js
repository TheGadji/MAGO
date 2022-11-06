"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SAMPLER_TOP_TERMS_THRESHOLD = exports.SAMPLER_TOP_TERMS_SHARD_SIZE = exports.MAX_CHART_COLUMNS = exports.FIELDS_REQUEST_BATCH_SIZE = exports.AGGREGATABLE_EXISTS_REQUEST_BATCH_SIZE = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const SAMPLER_TOP_TERMS_THRESHOLD = 100000;
exports.SAMPLER_TOP_TERMS_THRESHOLD = SAMPLER_TOP_TERMS_THRESHOLD;
const SAMPLER_TOP_TERMS_SHARD_SIZE = 5000;
exports.SAMPLER_TOP_TERMS_SHARD_SIZE = SAMPLER_TOP_TERMS_SHARD_SIZE;
const AGGREGATABLE_EXISTS_REQUEST_BATCH_SIZE = 200;
exports.AGGREGATABLE_EXISTS_REQUEST_BATCH_SIZE = AGGREGATABLE_EXISTS_REQUEST_BATCH_SIZE;
const FIELDS_REQUEST_BATCH_SIZE = 10;
exports.FIELDS_REQUEST_BATCH_SIZE = FIELDS_REQUEST_BATCH_SIZE;
const MAX_CHART_COLUMNS = 20;
exports.MAX_CHART_COLUMNS = MAX_CHART_COLUMNS;