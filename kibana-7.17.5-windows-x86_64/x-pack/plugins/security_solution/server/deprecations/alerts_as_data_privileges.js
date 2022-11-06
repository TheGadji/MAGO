"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerAlertsIndexPrivilegeDeprecations = void 0;

var _i18n = require("@kbn/i18n");

var _constants = require("../../common/constants");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const ALERTS_INDEX_PREFIX = '.alerts-security.alerts';
const INTERNAL_ALERTS_INDEX_PREFIX = '.internal.alerts-security.alerts';

const buildManualSteps = roleNames => {
  const baseSteps = [_i18n.i18n.translate('xpack.securitySolution.deprecations.alertsIndexPrivileges.manualStep1', {
    defaultMessage: 'Update your roles to include read privileges for the detection alerts indices appropriate for that role and space(s).'
  }), _i18n.i18n.translate('xpack.securitySolution.deprecations.alertsIndexPrivileges.manualStep2', {
    defaultMessage: 'In 8.0, users will be unable to view alerts until those permissions are added.'
  })];

  const informationalStep = _i18n.i18n.translate('xpack.securitySolution.deprecations.alertsIndexPrivileges.manualStep3', {
    defaultMessage: 'The roles that currently have read access to detection alerts indices are: {roles}',
    values: {
      roles: roleNames.join(', ')
    }
  });

  if (roleNames.length === 0) {
    return baseSteps;
  } else {
    return [...baseSteps, informationalStep];
  }
};

const registerAlertsIndexPrivilegeDeprecations = ({
  deprecationsService,
  getKibanaRoles
}) => {
  deprecationsService.registerDeprecations({
    getDeprecations: async context => {
      let rolesWhichReadSignals = [];

      if (getKibanaRoles) {
        var _roles$filter;

        const {
          roles,
          errors
        } = await getKibanaRoles({
          context
        });

        if (errors !== null && errors !== void 0 && errors.length) {
          return errors;
        }

        rolesWhichReadSignals = (_roles$filter = roles === null || roles === void 0 ? void 0 : roles.filter(role => (0, _utils.roleIsExternal)(role) && (0, _utils.roleHasReadAccess)(role) && (!(0, _utils.roleHasReadAccess)(role, ALERTS_INDEX_PREFIX) || !(0, _utils.roleHasReadAccess)(role, INTERNAL_ALERTS_INDEX_PREFIX)))) !== null && _roles$filter !== void 0 ? _roles$filter : [];
      }

      if (rolesWhichReadSignals.length === 0) {
        return [];
      }

      const roleNamesWhichReadSignals = rolesWhichReadSignals.map(role => role.name);
      return [{
        title: _i18n.i18n.translate('xpack.securitySolution.deprecations.alertsIndexPrivileges.title', {
          defaultMessage: 'The Detection Alerts index names are changing'
        }),
        message: _i18n.i18n.translate('xpack.securitySolution.deprecations.alertsIndexPrivileges.message', {
          values: {
            alertsIndexPrefix: ALERTS_INDEX_PREFIX,
            internalAlertsIndexPrefix: INTERNAL_ALERTS_INDEX_PREFIX,
            signalsIndexPrefix: _constants.DEFAULT_SIGNALS_INDEX
          },
          defaultMessage: `In order to view detection alerts in 8.0+, users will need read privileges to new detection alerts index aliases \
({alertsIndexPrefix}-<KIBANA_SPACE>) and backing indices ({internalAlertsIndexPrefix}-<KIBANA_SPACE>-*), \
analogous to existing detection alerts indices ({signalsIndexPrefix}-<KIBANA_SPACE>). \
In addition, any enabled Detection rules will be automatically disabled during the upgrade and must be manually re-enabled after \
upgrading. Rules that are automatically disabled will also automatically be tagged to assist in manually re-enabling them post-upgrade. \
Alerts created after upgrading will use a different schema.`
        }),
        level: 'warning',
        deprecationType: 'feature',
        documentationUrl: `https://www.elastic.co/guide/en/security/8.0/upgrade-intro.html#upgrade-reqs`,
        correctiveActions: {
          manualSteps: buildManualSteps(roleNamesWhichReadSignals)
        }
      }];
    }
  });
};

exports.registerAlertsIndexPrivilegeDeprecations = registerAlertsIndexPrivilegeDeprecations;