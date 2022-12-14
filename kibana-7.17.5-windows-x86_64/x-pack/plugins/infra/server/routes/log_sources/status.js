"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLogSourceStatusRoutes = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _log_sources = require("../../../common/http_api/log_sources");

var _runtime_types = require("../../../common/runtime_types");

var _log_sources2 = require("../../../common/log_sources");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const initLogSourceStatusRoutes = ({
  framework,
  sourceStatus,
  fields,
  sources
}) => {
  framework.registerRoute({
    method: 'get',
    path: _log_sources.LOG_SOURCE_STATUS_PATH,
    validate: {
      params: (0, _runtime_types.createValidationFunction)(_log_sources.getLogSourceStatusRequestParamsRT)
    }
  }, framework.router.handleLegacyErrors(async (requestContext, request, response) => {
    const {
      sourceId
    } = request.params;

    try {
      const sourceConfiguration = await sources.getSourceConfiguration(requestContext.core.savedObjects.client, sourceId);
      const resolvedLogSourceConfiguration = await (0, _log_sources2.resolveLogSourceConfiguration)(sourceConfiguration.configuration, await framework.getIndexPatternsServiceWithRequestContext(requestContext));
      const logIndexStatus = await sourceStatus.getLogIndexStatus(requestContext, resolvedLogSourceConfiguration);
      return response.ok({
        body: _log_sources.getLogSourceStatusSuccessResponsePayloadRT.encode({
          data: {
            logIndexStatus
          }
        })
      });
    } catch (error) {
      var _error$statusCode, _error$message;

      if (_boom.default.isBoom(error)) {
        throw error;
      }

      return response.customError({
        statusCode: (_error$statusCode = error.statusCode) !== null && _error$statusCode !== void 0 ? _error$statusCode : 500,
        body: {
          message: (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : 'An unexpected error occurred'
        }
      });
    }
  }));
};

exports.initLogSourceStatusRoutes = initLogSourceStatusRoutes;