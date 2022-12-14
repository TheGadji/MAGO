"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeaturePrivilegeCasesBuilder = void 0;

var _lodash = require("lodash");

var _feature_privilege_builder = require("./feature_privilege_builder");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// if you add a value here you'll likely also need to make changes here:
// x-pack/plugins/cases/server/authorization/index.ts


const readOperations = ['getCase', 'getComment', 'getTags', 'getReporters', 'getUserActions', 'findConfigurations'];
const writeOperations = ['createCase', 'deleteCase', 'updateCase', 'pushCase', 'createComment', 'deleteComment', 'updateComment', 'createConfiguration', 'updateConfiguration'];
const allOperations = [...readOperations, ...writeOperations];

class FeaturePrivilegeCasesBuilder extends _feature_privilege_builder.BaseFeaturePrivilegeBuilder {
  getActions(privilegeDefinition, feature) {
    var _privilegeDefinition$, _privilegeDefinition$2, _privilegeDefinition$3, _privilegeDefinition$4;

    const getCasesPrivilege = (operations, owners) => {
      return owners.flatMap(owner => operations.map(operation => this.actions.cases.get(owner, operation)));
    };

    return (0, _lodash.uniq)([...getCasesPrivilege(allOperations, (_privilegeDefinition$ = (_privilegeDefinition$2 = privilegeDefinition.cases) === null || _privilegeDefinition$2 === void 0 ? void 0 : _privilegeDefinition$2.all) !== null && _privilegeDefinition$ !== void 0 ? _privilegeDefinition$ : []), ...getCasesPrivilege(readOperations, (_privilegeDefinition$3 = (_privilegeDefinition$4 = privilegeDefinition.cases) === null || _privilegeDefinition$4 === void 0 ? void 0 : _privilegeDefinition$4.read) !== null && _privilegeDefinition$3 !== void 0 ? _privilegeDefinition$3 : [])]);
  }

}

exports.FeaturePrivilegeCasesBuilder = FeaturePrivilegeCasesBuilder;