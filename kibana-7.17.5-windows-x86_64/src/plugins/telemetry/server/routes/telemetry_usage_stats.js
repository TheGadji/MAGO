"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTelemetryUsageStatsRoutes = registerTelemetryUsageStatsRoutes;

var _configSchema = require("@kbn/config-schema");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function registerTelemetryUsageStatsRoutes(router, telemetryCollectionManager, isDev) {
  router.post({
    path: '/api/telemetry/v2/clusters/_stats',
    validate: {
      body: _configSchema.schema.object({
        unencrypted: _configSchema.schema.boolean({
          defaultValue: false
        }),
        refreshCache: _configSchema.schema.boolean({
          defaultValue: false
        })
      })
    }
  }, async (context, req, res) => {
    const {
      unencrypted,
      refreshCache
    } = req.body;

    try {
      const statsConfig = {
        request: req,
        unencrypted,
        refreshCache
      };
      const stats = await telemetryCollectionManager.getStats(statsConfig);
      return res.ok({
        body: stats
      });
    } catch (err) {
      if (isDev) {
        // don't ignore errors when running in dev mode
        throw err;
      }

      if (unencrypted && err.status === 403) {
        return res.forbidden();
      } // ignore errors and return empty set


      return res.ok({
        body: []
      });
    }
  });
}