"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCanIsolate = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const userCanIsolate = roles => {
  // only superusers can write to the fleet index (or look up endpoint data to convert endp ID to agent ID)
  if (!roles || roles.length === 0) {
    return false;
  }

  return roles.includes('superuser');
};

exports.userCanIsolate = userCanIsolate;