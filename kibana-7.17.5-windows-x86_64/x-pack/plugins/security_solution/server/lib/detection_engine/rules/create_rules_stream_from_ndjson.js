"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRules = exports.createRulesStreamFromNdJson = void 0;

var _pipeable = require("fp-ts/lib/pipeable");

var _Either = require("fp-ts/lib/Either");

var _utils = require("@kbn/utils");

var _securitysolutionIoTsUtils = require("@kbn/securitysolution-io-ts-utils");

var _securitysolutionEsUtils = require("@kbn/securitysolution-es-utils");

var _import_rules_type_dependents = require("../../../../common/detection_engine/schemas/request/import_rules_type_dependents");

var _import_rules_schema = require("../../../../common/detection_engine/schemas/request/import_rules_schema");

var _create_stream_from_ndjson = require("../../../utils/read_stream/create_stream_from_ndjson");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const validateRules = () => {
  return (0, _utils.createMapStream)(obj => {
    if (!(obj instanceof Error)) {
      const decoded = _import_rules_schema.importRulesSchema.decode(obj);

      const checked = (0, _securitysolutionIoTsUtils.exactCheck)(obj, decoded);

      const onLeft = errors => {
        return new _securitysolutionEsUtils.BadRequestError((0, _securitysolutionIoTsUtils.formatErrors)(errors).join());
      };

      const onRight = schema => {
        const validationErrors = (0, _import_rules_type_dependents.importRuleValidateTypeDependents)(schema);

        if (validationErrors.length) {
          return new _securitysolutionEsUtils.BadRequestError(validationErrors.join());
        } else {
          return schema;
        }
      };

      return (0, _pipeable.pipe)(checked, (0, _Either.fold)(onLeft, onRight));
    } else {
      return obj;
    }
  });
}; // TODO: Capture both the line number and the rule_id if you have that information for the error message
// eventually and then pass it down so we can give error messages on the line number

/**
 * Inspiration and the pattern of code followed is from:
 * saved_objects/lib/create_saved_objects_stream_from_ndjson.ts
 */


exports.validateRules = validateRules;

const createRulesStreamFromNdJson = ruleLimit => {
  return [(0, _utils.createSplitStream)('\n'), (0, _create_stream_from_ndjson.parseNdjsonStrings)(), (0, _create_stream_from_ndjson.filterExportedCounts)(), (0, _create_stream_from_ndjson.filterExceptions)(), validateRules(), (0, _create_stream_from_ndjson.createLimitStream)(ruleLimit), (0, _utils.createConcatStream)([])];
};

exports.createRulesStreamFromNdJson = createRulesStreamFromNdJson;