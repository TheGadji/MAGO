"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AgentNotFoundError", {
  enumerable: true,
  get: function () {
    return _errors.AgentNotFoundError;
  }
});
Object.defineProperty(exports, "apm", {
  enumerable: true,
  get: function () {
    return _elasticApmNode.default;
  }
});
exports.config = void 0;
Object.defineProperty(exports, "getRegistryUrl", {
  enumerable: true,
  get: function () {
    return _services.getRegistryUrl;
  }
});
exports.plugin = void 0;
Object.defineProperty(exports, "relativeDownloadUrlFromArtifact", {
  enumerable: true,
  get: function () {
    return _mappings.relativeDownloadUrlFromArtifact;
  }
});

var _configSchema = require("@kbn/config-schema");

var _types = require("./types");

var _plugin = require("./plugin");

var _elasticApmNode = _interopRequireDefault(require("elastic-apm-node"));

var _services = require("./services");

var _errors = require("./errors");

var _mappings = require("./services/artifacts/mappings");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const config = {
  exposeToBrowser: {
    epm: true,
    agents: {
      enabled: true
    }
  },
  deprecations: ({
    deprecate,
    renameFromRoot,
    unused,
    unusedFromRoot
  }) => [deprecate('enabled', '8.0.0'), // Fleet plugin was named ingestManager before
  renameFromRoot('xpack.ingestManager.enabled', 'xpack.fleet.enabled', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.registryUrl', 'xpack.fleet.registryUrl', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.registryProxyUrl', 'xpack.fleet.registryProxyUrl', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.fleet', 'xpack.ingestManager.agents', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.enabled', 'xpack.fleet.agents.enabled', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.elasticsearch', 'xpack.fleet.agents.elasticsearch', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.tlsCheckDisabled', 'xpack.fleet.agents.tlsCheckDisabled', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.pollingRequestTimeout', 'xpack.fleet.agents.pollingRequestTimeout', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.maxConcurrentConnections', 'xpack.fleet.agents.maxConcurrentConnections', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.kibana', 'xpack.fleet.agents.kibana', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.agentPolicyRolloutRateLimitIntervalMs', 'xpack.fleet.agents.agentPolicyRolloutRateLimitIntervalMs', {
    level: 'critical'
  }), renameFromRoot('xpack.ingestManager.agents.agentPolicyRolloutRateLimitRequestPerInterval', 'xpack.fleet.agents.agentPolicyRolloutRateLimitRequestPerInterval', {
    level: 'critical'
  }), unusedFromRoot('xpack.ingestManager', {
    level: 'critical'
  }), // Unused settings before Fleet server exists
  unused('agents.kibana', {
    level: 'critical'
  }), unused('agents.maxConcurrentConnections', {
    level: 'critical'
  }), unused('agents.agentPolicyRolloutRateLimitIntervalMs', {
    level: 'critical'
  }), unused('agents.agentPolicyRolloutRateLimitRequestPerInterval', {
    level: 'critical'
  }), unused('agents.pollingRequestTimeout', {
    level: 'critical'
  }), unused('agents.tlsCheckDisabled', {
    level: 'critical'
  }), unused('agents.fleetServerEnabled', {
    level: 'critical'
  }), // Renaming elasticsearch.host => elasticsearch.hosts
  (fullConfig, fromPath, addDeprecation) => {
    var _fullConfig$xpack, _fullConfig$xpack$fle, _fullConfig$xpack$fle2, _fullConfig$xpack$fle3;

    const oldValue = fullConfig === null || fullConfig === void 0 ? void 0 : (_fullConfig$xpack = fullConfig.xpack) === null || _fullConfig$xpack === void 0 ? void 0 : (_fullConfig$xpack$fle = _fullConfig$xpack.fleet) === null || _fullConfig$xpack$fle === void 0 ? void 0 : (_fullConfig$xpack$fle2 = _fullConfig$xpack$fle.agents) === null || _fullConfig$xpack$fle2 === void 0 ? void 0 : (_fullConfig$xpack$fle3 = _fullConfig$xpack$fle2.elasticsearch) === null || _fullConfig$xpack$fle3 === void 0 ? void 0 : _fullConfig$xpack$fle3.host;

    if (oldValue) {
      delete fullConfig.xpack.fleet.agents.elasticsearch.host;
      fullConfig.xpack.fleet.agents.elasticsearch.hosts = [oldValue];
      addDeprecation({
        configPath: 'xpack.fleet.agents.elasticsearch.host',
        message: `Config key [xpack.fleet.agents.elasticsearch.host] is deprecated and replaced by [xpack.fleet.agents.elasticsearch.hosts]`,
        correctiveActions: {
          manualSteps: [`Use [xpack.fleet.agents.elasticsearch.hosts] with an array of host instead.`]
        },
        level: 'critical'
      });
    }

    return fullConfig;
  }],
  schema: _configSchema.schema.object({
    enabled: _configSchema.schema.boolean({
      defaultValue: true
    }),
    registryUrl: _configSchema.schema.maybe(_configSchema.schema.uri({
      scheme: ['http', 'https']
    })),
    registryProxyUrl: _configSchema.schema.maybe(_configSchema.schema.uri({
      scheme: ['http', 'https']
    })),
    agents: _configSchema.schema.object({
      enabled: _configSchema.schema.boolean({
        defaultValue: true
      }),
      elasticsearch: _configSchema.schema.object({
        hosts: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.uri({
          scheme: ['http', 'https']
        }))),
        ca_sha256: _configSchema.schema.maybe(_configSchema.schema.string())
      }),
      fleet_server: _configSchema.schema.maybe(_configSchema.schema.object({
        hosts: _configSchema.schema.maybe(_configSchema.schema.arrayOf(_configSchema.schema.uri({
          scheme: ['http', 'https']
        })))
      }))
    }),
    packages: _types.PreconfiguredPackagesSchema,
    agentPolicies: _types.PreconfiguredAgentPoliciesSchema,
    outputs: _types.PreconfiguredOutputsSchema,
    agentIdVerificationEnabled: _configSchema.schema.boolean({
      defaultValue: true
    }),
    developer: _configSchema.schema.object({
      allowAgentUpgradeSourceUri: _configSchema.schema.boolean({
        defaultValue: false
      })
    })
  })
};
exports.config = config;

const plugin = initializerContext => {
  return new _plugin.FleetPlugin(initializerContext);
};

exports.plugin = plugin;