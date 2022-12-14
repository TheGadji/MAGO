"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeDependencies = void 0;

var _services = require("../../services");

var _shared_imports = require("../../shared_imports");

var _lib = require("../../lib");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const license = new _services.License();
license.getStatus = jest.fn().mockReturnValue({
  isValid: true
});
const routeDependencies = {
  license,
  config: {
    isSecurityEnabled: jest.fn().mockReturnValue(true),
    isCloudEnabled: false,
    isSlmEnabled: true
  },
  lib: {
    wrapEsError: _lib.wrapEsError,
    handleEsError: _shared_imports.handleEsError
  }
};
exports.routeDependencies = routeDependencies;