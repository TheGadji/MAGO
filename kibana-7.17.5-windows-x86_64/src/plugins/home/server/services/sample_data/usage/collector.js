"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSampleDataUsageCollector = makeSampleDataUsageCollector;

var _collector_fetch = require("./collector_fetch");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function makeSampleDataUsageCollector(usageCollection, context) {
  const config = context.config.legacy.get();
  const index = config.kibana.index;
  const collector = usageCollection.makeUsageCollector({
    type: 'sample-data',
    fetch: (0, _collector_fetch.fetchProvider)(index),
    isReady: () => true,
    schema: {
      installed: {
        type: 'array',
        items: {
          type: 'keyword'
        }
      },
      last_install_date: {
        type: 'date'
      },
      last_install_set: {
        type: 'keyword'
      },
      last_uninstall_date: {
        type: 'date'
      },
      last_uninstall_set: {
        type: 'keyword'
      },
      uninstalled: {
        type: 'array',
        items: {
          type: 'keyword'
        }
      }
    }
  });
  usageCollection.registerCollector(collector);
}