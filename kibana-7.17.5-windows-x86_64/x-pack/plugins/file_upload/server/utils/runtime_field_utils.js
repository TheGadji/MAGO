"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPopulatedObject = void 0;
exports.isRuntimeField = isRuntimeField;
exports.isRuntimeMappings = isRuntimeMappings;

var _common = require("../../../../../src/plugins/data/common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const isPopulatedObject = (arg, requiredAttributes = []) => {
  return typeof arg === 'object' && arg !== null && Object.keys(arg).length > 0 && (requiredAttributes.length === 0 || requiredAttributes.every(d => ({}).hasOwnProperty.call(arg, d)));
};

exports.isPopulatedObject = isPopulatedObject;

function isRuntimeField(arg) {
  return (isPopulatedObject(arg, ['type']) && Object.keys(arg).length === 1 || isPopulatedObject(arg, ['type', 'script']) && ( // Can be a string
  typeof arg.script === 'string' || // Can be InlineScript
  isPopulatedObject(arg.script, ['source']) && typeof arg.script.source === 'string' || // Can be StoredScriptId
  isPopulatedObject(arg.script, ['id']) && typeof arg.script.id === 'string')) && _common.RUNTIME_FIELD_TYPES.includes(arg.type);
}

function isRuntimeMappings(arg) {
  return isPopulatedObject(arg) && Object.values(arg).every(d => isRuntimeField(d));
}