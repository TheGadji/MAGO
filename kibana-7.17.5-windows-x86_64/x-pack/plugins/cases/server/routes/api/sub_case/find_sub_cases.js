"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFindSubCasesApi = initFindSubCasesApi;

var _configSchema = require("@kbn/config-schema");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _common = require("../../../../common");

var _utils = require("../utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function initFindSubCasesApi({
  router,
  logger
}) {
  router.get({
    path: `${_common.SUB_CASES_URL}/_find`,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string()
      }),
      query: _utils.escapeHatch
    }
  }, async (context, request, response) => {
    try {
      const queryParams = (0, _pipeable.pipe)(_common.SubCasesFindRequestRt.decode(request.query), (0, _Either.fold)((0, _common.throwErrors)(_boom.default.badRequest), _function.identity));
      const client = await context.cases.getCasesClient();
      return response.ok({
        body: await client.subCases.find({
          caseID: request.params.case_id,
          queryParams
        })
      });
    } catch (error) {
      logger.error(`Failed to find sub cases in route case id: ${request.params.case_id}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}