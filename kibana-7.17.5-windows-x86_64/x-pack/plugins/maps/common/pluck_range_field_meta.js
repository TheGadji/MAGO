"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluckRangeFieldMeta = pluckRangeFieldMeta;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

function pluckRangeFieldMeta(features, name, parseValue) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < features.length; i++) {
    const feature = features[i];
    const newValue = feature.properties ? parseValue(feature.properties[name]) : NaN;

    if (!isNaN(newValue)) {
      min = Math.min(min, newValue);
      max = Math.max(max, newValue);
    }
  }

  return min === Infinity || max === -Infinity ? null : {
    min,
    max,
    delta: max - min
  };
}