"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruleTypesRoute = void 0;

var _lib = require("./lib");

var _types = require("../types");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const rewriteBodyRes = results => {
  return results.map(({
    enabledInLicense,
    recoveryActionGroup,
    actionGroups,
    defaultActionGroupId,
    minimumLicenseRequired,
    isExportable,
    ruleTaskTimeout,
    actionVariables,
    authorizedConsumers,
    minimumScheduleInterval,
    defaultScheduleInterval,
    ...rest
  }) => ({ ...rest,
    enabled_in_license: enabledInLicense,
    recovery_action_group: recoveryActionGroup,
    action_groups: actionGroups,
    default_action_group_id: defaultActionGroupId,
    minimum_license_required: minimumLicenseRequired,
    is_exportable: isExportable,
    rule_task_timeout: ruleTaskTimeout,
    action_variables: actionVariables,
    authorized_consumers: authorizedConsumers,
    minimum_schedule_interval: minimumScheduleInterval,
    default_schedule_interval: defaultScheduleInterval
  }));
};

const ruleTypesRoute = (router, licenseState) => {
  router.get({
    path: `${_types.BASE_ALERTING_API_PATH}/rule_types`,
    validate: {}
  }, router.handleLegacyErrors((0, _lib.verifyAccessAndContext)(licenseState, async function (context, req, res) {
    const ruleTypes = Array.from(await context.alerting.getRulesClient().listAlertTypes());
    return res.ok({
      body: rewriteBodyRes(ruleTypes)
    });
  })));
};

exports.ruleTypesRoute = ruleTypesRoute;