"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.securitySolutionSearchStrategyProvider = void 0;

var _operators = require("rxjs/operators");

var _server = require("../../../../../../src/plugins/data/server");

var _common = require("../../../../../../src/plugins/data/common");

var _factory = require("./factory");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const securitySolutionSearchStrategyProvider = (data, endpointContext) => {
  const es = data.search.getSearchStrategy(_common.ENHANCED_ES_SEARCH_STRATEGY);
  return {
    search: (request, options, deps) => {
      if (request.factoryQueryType == null) {
        throw new Error('factoryQueryType is required');
      }

      const queryFactory = _factory.securitySolutionFactory[request.factoryQueryType];
      const dsl = queryFactory.buildDsl(request);
      return es.search({ ...request,
        params: dsl
      }, options, deps).pipe((0, _operators.map)(response => {
        return { ...response,
          ...{
            rawResponse: (0, _server.shimHitsTotal)(response.rawResponse, options)
          }
        };
      }), (0, _operators.mergeMap)(esSearchRes => queryFactory.parse(request, esSearchRes, {
        esClient: deps.esClient,
        savedObjectsClient: deps.savedObjectsClient,
        endpointContext
      })));
    },
    cancel: async (id, options, deps) => {
      if (es.cancel) {
        return es.cancel(id, options, deps);
      }
    }
  };
};

exports.securitySolutionSearchStrategyProvider = securitySolutionSearchStrategyProvider;