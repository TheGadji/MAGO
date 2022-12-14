"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacySpacesAuditLogger = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * @deprecated will be removed in 8.0
 */


class LegacySpacesAuditLogger {
  /**
   * @deprecated will be removed in 8.0
   */
  constructor(auditLogger = {
    log() {}

  }) {
    (0, _defineProperty2.default)(this, "auditLogger", void 0);
    this.auditLogger = auditLogger;
  }
  /**
   * @deprecated will be removed in 8.0
   */


  spacesAuthorizationFailure(username, action, spaceIds) {
    this.auditLogger.log('spaces_authorization_failure', `${username} unauthorized to ${action}${spaceIds ? ' ' + spaceIds.join(',') : ''} spaces`, {
      username,
      action,
      spaceIds
    });
  }
  /**
   * @deprecated will be removed in 8.0
   */


  spacesAuthorizationSuccess(username, action, spaceIds) {
    this.auditLogger.log('spaces_authorization_success', `${username} authorized to ${action}${spaceIds ? ' ' + spaceIds.join(',') : ''} spaces`, {
      username,
      action,
      spaceIds
    });
  }

}

exports.LegacySpacesAuditLogger = LegacySpacesAuditLogger;