"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eqlSearchStrategyProvider = void 0;

var _operators = require("rxjs/operators");

var _common = require("../../../../common");

var _response_utils = require("./response_utils");

var _es_search = require("../es_search");

var _request_utils = require("../ese_search/request_utils");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const eqlSearchStrategyProvider = logger => {
  async function cancelAsyncSearch(id, esClient) {
    const client = esClient.asCurrentUser.eql;
    await client.delete({
      id
    });
  }

  return {
    cancel: async (id, options, {
      esClient
    }) => {
      logger.debug(`_eql/delete ${id}`);
      await cancelAsyncSearch(id, esClient);
    },
    search: ({
      id,
      ...request
    }, options, {
      esClient,
      uiSettingsClient
    }) => {
      logger.debug(`_eql/search ${JSON.stringify(request.params) || id}`);
      const client = esClient.asCurrentUser.eql;

      const search = async () => {
        var _request$params;

        // track_total_hits/enable_fields_emulation are not supported by _eql/search
        const {
          track_total_hits: tth,
          enable_fields_emulation: efe,
          ...defaultParams
        } = await (0, _es_search.getDefaultSearchParams)(uiSettingsClient, (_request$params = request.params) === null || _request$params === void 0 ? void 0 : _request$params.body);
        const params = id ? (0, _request_utils.getDefaultAsyncGetParams)(null, options) : { ...(await (0, _request_utils.getIgnoreThrottled)(uiSettingsClient)),
          ...defaultParams,
          ...(0, _request_utils.getDefaultAsyncGetParams)(null, options),
          ...request.params
        };
        const promise = id ? client.get({ ...params,
          id
        }, request.options) : // @ts-expect-error EqlRequestParams | undefined is not assignable to EqlRequestParams
        client.search(params, request.options);
        const response = await (0, _es_search.shimAbortSignal)(promise, options.abortSignal);
        return (0, _response_utils.toEqlKibanaSearchResponse)(response);
      };

      const cancel = async () => {
        if (id) {
          await cancelAsyncSearch(id, esClient);
        }
      };

      return (0, _common.pollSearch)(search, cancel, options).pipe((0, _operators.tap)(response => id = response.id));
    },
    extend: async (id, keepAlive, options, {
      esClient
    }) => {
      logger.debug(`_eql/extend ${id} by ${keepAlive}`);
      await esClient.asCurrentUser.eql.get({
        id,
        keep_alive: keepAlive
      });
    }
  };
};

exports.eqlSearchStrategyProvider = eqlSearchStrategyProvider;