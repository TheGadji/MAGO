"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exactly = exactly;
exports.luceneQueryString = luceneQueryString;
exports.time = time;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 TODO: This could be pluggable
*/

function time(filter) {
  if (!filter.column) {
    throw new Error('column is required for Elasticsearch range filters');
  }

  return {
    range: {
      [filter.column]: {
        gte: filter.from,
        lte: filter.to
      }
    }
  };
}

function luceneQueryString(filter) {
  return {
    query_string: {
      query: filter.query || '*'
    }
  };
}

function exactly(filter) {
  return {
    term: {
      [filter.column]: {
        value: filter.value
      }
    }
  };
}