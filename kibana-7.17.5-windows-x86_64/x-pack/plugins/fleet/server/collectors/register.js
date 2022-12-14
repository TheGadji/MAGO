"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFleetUsageCollector = registerFleetUsageCollector;

var _config_collectors = require("./config_collectors");

var _agent_collectors = require("./agent_collectors");

var _helpers = require("./helpers");

var _package_collectors = require("./package_collectors");

var _fleet_server_collector = require("./fleet_server_collector");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function registerFleetUsageCollector(core, config, usageCollection) {
  // usageCollection is an optional dependency, so make sure to return if it is not registered.
  // if for any reason the saved objects client is not available, also return
  if (!usageCollection) {
    return;
  } // create usage collector


  const fleetCollector = usageCollection.makeUsageCollector({
    type: 'fleet',
    isReady: () => true,
    fetch: async () => {
      const [soClient, esClient] = await (0, _helpers.getInternalClients)(core);
      return {
        agents_enabled: (0, _config_collectors.getIsAgentsEnabled)(config),
        agents: await (0, _agent_collectors.getAgentUsage)(config, soClient, esClient),
        fleet_server: await (0, _fleet_server_collector.getFleetServerUsage)(soClient, esClient),
        packages: await (0, _package_collectors.getPackageUsage)(soClient)
      };
    },
    schema: {
      agents_enabled: {
        type: 'boolean'
      },
      agents: {
        total_enrolled: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled agents, in any state'
          }
        },
        healthy: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled agents in a healthy state'
          }
        },
        unhealthy: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled agents in an unhealthy state'
          }
        },
        updating: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled agents in an updating state'
          }
        },
        offline: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled agents currently offline'
          }
        },
        total_all_statuses: {
          type: 'long',
          _meta: {
            description: 'The total number of agents in any state, both enrolled and inactive'
          }
        }
      },
      fleet_server: {
        total_enrolled: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled Fleet Server agents, in any state'
          }
        },
        total_all_statuses: {
          type: 'long',
          _meta: {
            description: 'The total number of Fleet Server agents in any state, both enrolled and inactive.'
          }
        },
        healthy: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled Fleet Server agents in a healthy state.'
          }
        },
        unhealthy: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled Fleet Server agents in an unhealthy state'
          }
        },
        updating: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled Fleet Server agents in an updating state'
          }
        },
        offline: {
          type: 'long',
          _meta: {
            description: 'The total number of enrolled Fleet Server agents currently offline'
          }
        },
        num_host_urls: {
          type: 'long',
          _meta: {
            description: 'The number of Fleet Server hosts configured in Fleet settings.'
          }
        }
      },
      packages: {
        type: 'array',
        items: {
          name: {
            type: 'keyword'
          },
          version: {
            type: 'keyword'
          },
          enabled: {
            type: 'boolean'
          }
        }
      }
    }
  }); // register usage collector

  usageCollection.registerCollector(fleetCollector);
}