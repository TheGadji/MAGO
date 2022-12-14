"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRootFields = getRootFields;
exports.includedFields = includedFields;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function toArray(value) {
  return typeof value === 'string' ? [value] : value;
}

const ROOT_FIELDS = ['namespace', 'namespaces', 'type', 'references', 'migrationVersion', 'coreMigrationVersion', 'updated_at', 'originId'];

function getRootFields() {
  return [...ROOT_FIELDS];
}
/**
 * Provides an array of paths for ES source filtering
 */


function includedFields(type = '*', fields) {
  if (!fields || fields.length === 0) {
    return;
  } // convert to an array


  const sourceFields = toArray(fields);
  const sourceType = toArray(type);
  return sourceType.reduce((acc, t) => {
    return [...acc, ...sourceFields.map(f => `${t}.${f}`)];
  }, []).concat(ROOT_FIELDS).concat(fields); // v5 compatibility
}