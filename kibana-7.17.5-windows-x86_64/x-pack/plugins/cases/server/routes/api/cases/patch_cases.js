"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPatchCasesApi = initPatchCasesApi;

var _utils = require("../utils");

var _common = require("../../../../common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function initPatchCasesApi({
  router,
  logger
}) {
  router.patch({
    path: _common.CASES_URL,
    validate: {
      body: _utils.escapeHatch
    }
  }, async (context, request, response) => {
    try {
      if (!context.cases) {
        return response.badRequest({
          body: 'RouteHandlerContext is not registered for cases'
        });
      }

      const casesClient = await context.cases.getCasesClient();
      const cases = request.body;
      return response.ok({
        body: await casesClient.cases.update(cases)
      });
    } catch (error) {
      logger.error(`Failed to patch cases in route: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}