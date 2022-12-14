"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchLogSourceConfigurationSuccessResponsePayloadRT = exports.patchLogSourceConfigurationResponsePayloadRT = exports.patchLogSourceConfigurationRequestParamsRT = exports.patchLogSourceConfigurationRequestBodyRT = void 0;

var rt = _interopRequireWildcard(require("io-ts"));

var _shared = require("../shared");

var _get_log_source_configuration = require("./get_log_source_configuration");

var _log_source_configuration = require("../../log_sources/log_source_configuration");

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

/**
 * request
 */


const patchLogSourceConfigurationRequestParamsRT = rt.type({
  // the id of the source configuration
  sourceId: rt.string
});
exports.patchLogSourceConfigurationRequestParamsRT = patchLogSourceConfigurationRequestParamsRT;
const logSourceConfigurationProperiesPatchRT = rt.partial({ ..._log_source_configuration.logSourceConfigurationPropertiesRT.type.props,
  fields: rt.partial(_log_source_configuration.logSourceConfigurationPropertiesRT.type.props.fields.type.props)
});
const patchLogSourceConfigurationRequestBodyRT = rt.type({
  data: logSourceConfigurationProperiesPatchRT
});
exports.patchLogSourceConfigurationRequestBodyRT = patchLogSourceConfigurationRequestBodyRT;
/**
 * response
 */

const patchLogSourceConfigurationSuccessResponsePayloadRT = _get_log_source_configuration.getLogSourceConfigurationSuccessResponsePayloadRT;
exports.patchLogSourceConfigurationSuccessResponsePayloadRT = patchLogSourceConfigurationSuccessResponsePayloadRT;
const patchLogSourceConfigurationResponsePayloadRT = rt.union([patchLogSourceConfigurationSuccessResponsePayloadRT, _shared.badRequestErrorRT, _shared.forbiddenErrorRT]);
exports.patchLogSourceConfigurationResponsePayloadRT = patchLogSourceConfigurationResponsePayloadRT;