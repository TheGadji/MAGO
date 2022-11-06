"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDashboardUsageCollector = registerDashboardUsageCollector;

var _dashboard_telemetry = require("./dashboard_telemetry");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function registerDashboardUsageCollector(usageCollection, embeddableService) {
  const dashboardCollector = usageCollection.makeUsageCollector({
    type: 'dashboard',
    isReady: () => true,
    fetch: async ({
      soClient
    }) => {
      return await (0, _dashboard_telemetry.collectDashboardTelemetry)(soClient, embeddableService);
    },
    schema: {
      panels: {
        total: {
          type: 'long'
        },
        by_reference: {
          type: 'long'
        },
        by_value: {
          type: 'long'
        },
        by_type: {
          DYNAMIC_KEY: {
            total: {
              type: 'long',
              _meta: {
                description: 'The number of panels that have been added to all dashboards.'
              }
            },
            by_reference: {
              type: 'long',
              _meta: {
                description: 'The number of "by reference" panels that have been added to all dashboards.'
              }
            },
            by_value: {
              type: 'long',
              _meta: {
                description: 'The number of "by value" panels that have been added to all dashboards.'
              }
            },
            details: {
              DYNAMIC_KEY: {
                type: 'long',
                _meta: {
                  description: 'Collection of telemetry metrics that embeddable service reports. Embeddable service internally calls each embeddable, which in turn calls its dynamic actions, which calls each drill down attached to that embeddable.'
                }
              }
            }
          }
        }
      }
    }
  });
  usageCollection.registerCollector(dashboardCollector);
}