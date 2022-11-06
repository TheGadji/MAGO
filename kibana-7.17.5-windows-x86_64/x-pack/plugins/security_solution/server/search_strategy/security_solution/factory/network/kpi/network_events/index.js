"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.networkKpiNetworkEventsEntities = exports.networkKpiNetworkEvents = void 0;

var _build_query = require("../../../../../../utils/build_query");

var _queryNetwork_kpi_network_events = require("./query.network_kpi_network_events.dsl");

var _queryNetwork_kpi_network_events_entities = require("./query.network_kpi_network_events_entities.dsl");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const networkKpiNetworkEvents = {
  buildDsl: options => (0, _queryNetwork_kpi_network_events.buildNetworkEventsQuery)(options),
  parse: async (options, response) => {
    const inspect = {
      dsl: [(0, _build_query.inspectStringifyObject)((0, _queryNetwork_kpi_network_events.buildNetworkEventsQuery)(options))]
    };
    return { ...response,
      inspect,
      // @ts-expect-error code doesn't handle TotalHits
      networkEvents: response.rawResponse.hits.total
    };
  }
};
exports.networkKpiNetworkEvents = networkKpiNetworkEvents;
const networkKpiNetworkEventsEntities = {
  buildDsl: options => (0, _queryNetwork_kpi_network_events_entities.buildNetworkEventsQueryEntities)(options),
  parse: async (options, response) => {
    var _response$rawResponse, _response$rawResponse2, _response$rawResponse3;

    const inspect = {
      dsl: [(0, _build_query.inspectStringifyObject)((0, _queryNetwork_kpi_network_events_entities.buildNetworkEventsQueryEntities)(options))]
    };
    return { ...response,
      inspect,
      // @ts-expect-error code doesn't handle TotalHits
      networkEvents: (_response$rawResponse = (_response$rawResponse2 = response.rawResponse.aggregations) === null || _response$rawResponse2 === void 0 ? void 0 : (_response$rawResponse3 = _response$rawResponse2.events) === null || _response$rawResponse3 === void 0 ? void 0 : _response$rawResponse3.value) !== null && _response$rawResponse !== void 0 ? _response$rawResponse : null
    };
  }
};
exports.networkKpiNetworkEventsEntities = networkKpiNetworkEventsEntities;