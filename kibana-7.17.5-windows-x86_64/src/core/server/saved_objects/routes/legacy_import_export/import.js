"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLegacyImportRoute = void 0;

var _configSchema = require("@kbn/config-schema");

var _lib = require("./lib");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const registerLegacyImportRoute = (router, {
  maxImportPayloadBytes,
  coreUsageData,
  logger
}) => {
  router.post({
    path: '/api/kibana/dashboards/import',
    validate: {
      body: _configSchema.schema.object({
        objects: _configSchema.schema.arrayOf(_configSchema.schema.recordOf(_configSchema.schema.string(), _configSchema.schema.any())),
        version: _configSchema.schema.maybe(_configSchema.schema.string())
      }),
      query: _configSchema.schema.object({
        force: _configSchema.schema.boolean({
          defaultValue: false
        }),
        exclude: _configSchema.schema.oneOf([_configSchema.schema.string(), _configSchema.schema.arrayOf(_configSchema.schema.string())], {
          defaultValue: []
        })
      })
    },
    options: {
      tags: ['api'],
      body: {
        maxBytes: maxImportPayloadBytes
      }
    }
  }, async (ctx, req, res) => {
    logger.warn("The import dashboard API '/api/kibana/dashboards/import' is deprecated. Use the saved objects import objects API '/api/saved_objects/_import' instead.");
    const {
      client
    } = ctx.core.savedObjects;
    const objects = req.body.objects;
    const {
      force,
      exclude
    } = req.query;
    const usageStatsClient = coreUsageData.getClient();
    usageStatsClient.incrementLegacyDashboardsImport({
      request: req
    }).catch(() => {});
    const result = await (0, _lib.importDashboards)(client, objects, {
      overwrite: force,
      exclude: Array.isArray(exclude) ? exclude : [exclude]
    });
    return res.ok({
      body: result
    });
  });
};

exports.registerLegacyImportRoute = registerLegacyImportRoute;