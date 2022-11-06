"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleIsExternal = exports.roleHasReadAccess = void 0;

var _constants = require("../../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const READ_PRIVILEGES = ['all', 'read'];

const roleHasReadAccess = (role, indexPrefix = _constants.DEFAULT_SIGNALS_INDEX) => role.elasticsearch.indices.some(index => index.names.some(indexName => indexName.startsWith(indexPrefix)) && index.privileges.some(indexPrivilege => READ_PRIVILEGES.includes(indexPrivilege)));

exports.roleHasReadAccess = roleHasReadAccess;

const roleIsExternal = role => {
  var _role$metadata;

  return ((_role$metadata = role.metadata) === null || _role$metadata === void 0 ? void 0 : _role$metadata._reserved) !== true;
};

exports.roleIsExternal = roleIsExternal;