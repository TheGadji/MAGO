"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMLPrivilegesDeprecation = void 0;

var _i18n = require("@kbn/i18n");

var _model = require("../../common/model");

var _privilege_deprecations = require("./privilege_deprecations");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function getDeprecationTitle() {
  return _i18n.i18n.translate('xpack.security.deprecations.mlPrivileges.deprecationTitle', {
    defaultMessage: 'The Machine Learning feature is changing'
  });
}

function getDeprecationMessage() {
  return _i18n.i18n.translate('xpack.security.deprecations.mlPrivileges.deprecationMessage', {
    defaultMessage: 'Roles that use base privileges will include the Machine Learning feature in 8.0.'
  });
}

const registerMLPrivilegesDeprecation = ({
  deprecationsService,
  logger,
  license,
  packageInfo,
  applicationName
}) => {
  deprecationsService.registerDeprecations({
    getDeprecations: async context => {
      // Nothing to do if security or ml is disabled
      if (!license.isEnabled() || !license.getFeatures().allowML) {
        return [];
      }

      const privilegeDeprecationService = (0, _privilege_deprecations.getPrivilegeDeprecationsService)({
        applicationName
      }, license, logger);
      return [...(await getRolesDeprecations(context, privilegeDeprecationService, packageInfo))];
    }
  });
};

exports.registerMLPrivilegesDeprecation = registerMLPrivilegesDeprecation;

async function getRolesDeprecations(context, privilegeDeprecationService, packageInfo) {
  var _response$roles;

  const response = await privilegeDeprecationService.getKibanaRoles({
    context
  });

  if (response.errors) {
    return response.errors;
  }

  const rolesWithBasePrivileges = ((_response$roles = response.roles) !== null && _response$roles !== void 0 ? _response$roles : []).filter(role => {
    const hasBasePrivileges = role.kibana.some(kp => kp.base.includes('all') || kp.base.includes('read'));
    return !(0, _model.isRoleReserved)(role) && hasBasePrivileges;
  }).map(role => role.name);

  if (rolesWithBasePrivileges.length === 0) {
    return [];
  }

  return [{
    title: getDeprecationTitle(),
    message: getDeprecationMessage(),
    level: 'warning',
    deprecationType: 'feature',
    documentationUrl: `https://www.elastic.co/guide/en/kibana/${packageInfo.branch}/kibana-privileges.html`,
    correctiveActions: {
      manualSteps: [_i18n.i18n.translate('xpack.security.deprecations.mlPrivileges.manualSteps1', {
        defaultMessage: 'Change the affected roles to use feature privileges that grant access to only the desired features instead.'
      }), _i18n.i18n.translate('xpack.security.deprecations.mlPrivileges.manualSteps2', {
        defaultMessage: "If you don't make any changes, affected roles will grant access to the Machine Learning feature in 8.0."
      }), _i18n.i18n.translate('xpack.security.deprecations.mlPrivileges.manualSteps3', {
        defaultMessage: 'The affected roles are: {roles}',
        values: {
          roles: rolesWithBasePrivileges.join(', ')
        }
      })]
    }
  }];
}