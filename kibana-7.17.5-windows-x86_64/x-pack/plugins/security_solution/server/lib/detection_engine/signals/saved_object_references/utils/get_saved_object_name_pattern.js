"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSavedObjectNamePattern = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Given a name and index this will return the pattern of "${name}_${index}"
 * @param name The name to suffix the string
 * @param index The index to suffix the string
 * @returns The pattern "${name_${index}"
 */

const getSavedObjectNamePattern = ({
  name,
  index
}) => {
  if (!(index >= 0)) {
    throw new TypeError(`"index" should alway be >= 0 instead of: ${index}`);
  } else {
    return `${name}_${index}`;
  }
};

exports.getSavedObjectNamePattern = getSavedObjectNamePattern;