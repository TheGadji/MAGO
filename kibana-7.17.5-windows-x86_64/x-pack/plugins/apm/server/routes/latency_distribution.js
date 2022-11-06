"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.latencyDistributionRouteRepository = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _to_number_rt = require("@kbn/io-ts-utils/to_number_rt");

var _get_overall_latency_distribution = require("../lib/latency/get_overall_latency_distribution");

var _setup_request = require("../lib/helpers/setup_request");

var _create_apm_server_route = require("./create_apm_server_route");

var _create_apm_server_route_repository = require("./create_apm_server_route_repository");

var _default_api_types = require("./default_api_types");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const latencyOverallDistributionRoute = (0, _create_apm_server_route.createApmServerRoute)({
  endpoint: 'POST /internal/apm/latency/overall_distribution',
  params: t.type({
    body: t.intersection([t.partial({
      serviceName: t.string,
      transactionName: t.string,
      transactionType: t.string,
      termFilters: t.array(t.type({
        fieldName: t.string,
        fieldValue: t.union([t.string, _to_number_rt.toNumberRt])
      }))
    }), _default_api_types.environmentRt, _default_api_types.kueryRt, _default_api_types.rangeRt, t.type({
      percentileThreshold: _to_number_rt.toNumberRt
    })])
  }),
  options: {
    tags: ['access:apm']
  },
  handler: async resources => {
    const setup = await (0, _setup_request.setupRequest)(resources);
    const {
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      start,
      end,
      percentileThreshold,
      termFilters
    } = resources.params.body;
    return (0, _get_overall_latency_distribution.getOverallLatencyDistribution)({
      environment,
      kuery,
      serviceName,
      transactionType,
      transactionName,
      start,
      end,
      percentileThreshold,
      termFilters,
      setup
    });
  }
});
const latencyDistributionRouteRepository = (0, _create_apm_server_route_repository.createApmServerRouteRepository)().add(latencyOverallDistributionRoute);
exports.latencyDistributionRouteRepository = latencyDistributionRouteRepository;