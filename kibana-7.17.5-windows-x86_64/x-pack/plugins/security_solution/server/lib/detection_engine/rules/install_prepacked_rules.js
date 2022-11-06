"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installPrepackagedRules = void 0;

var _create_rules = require("./create_rules");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const installPrepackagedRules = (rulesClient, rules, outputIndex, isRuleRegistryEnabled) => rules.reduce((acc, rule) => {
  const {
    anomaly_threshold: anomalyThreshold,
    author,
    building_block_type: buildingBlockType,
    description,
    enabled,
    event_category_override: eventCategoryOverride,
    false_positives: falsePositives,
    from,
    query,
    language,
    license,
    machine_learning_job_id: machineLearningJobId,
    saved_id: savedId,
    timeline_id: timelineId,
    timeline_title: timelineTitle,
    meta,
    filters: filtersObject,
    rule_id: ruleId,
    index,
    interval,
    max_signals: maxSignals,
    risk_score: riskScore,
    risk_score_mapping: riskScoreMapping,
    rule_name_override: ruleNameOverride,
    name,
    severity,
    severity_mapping: severityMapping,
    tags,
    to,
    type,
    threat,
    threat_filters: threatFilters,
    threat_mapping: threatMapping,
    threat_language: threatLanguage,
    concurrent_searches: concurrentSearches,
    items_per_search: itemsPerSearch,
    threat_query: threatQuery,
    threat_index: threatIndex,
    threat_indicator_path: threatIndicatorPath,
    threshold,
    timestamp_override: timestampOverride,
    references,
    namespace,
    note,
    version,
    exceptions_list: exceptionsList
  } = rule; // TODO: Fix these either with an is conversion or by better typing them within io-ts

  const filters = filtersObject;
  return [...acc, (0, _create_rules.createRules)({
    isRuleRegistryEnabled,
    rulesClient,
    anomalyThreshold,
    author,
    buildingBlockType,
    description,
    enabled,
    eventCategoryOverride,
    falsePositives,
    from,
    immutable: true,
    // At the moment we force all prepackaged rules to be immutable
    query,
    language,
    license,
    machineLearningJobId,
    outputIndex,
    savedId,
    timelineId,
    timelineTitle,
    meta,
    filters,
    ruleId,
    index,
    interval,
    maxSignals,
    riskScore,
    riskScoreMapping,
    ruleNameOverride,
    name,
    severity,
    severityMapping,
    tags,
    to,
    type,
    threat,
    threatFilters,
    threatMapping,
    threatLanguage,
    concurrentSearches,
    itemsPerSearch,
    threatQuery,
    threatIndex,
    threatIndicatorPath,
    threshold,
    throttle: null,
    // At this time there is no pre-packaged actions
    timestampOverride,
    references,
    namespace,
    note,
    version,
    exceptionsList,
    actions: [] // At this time there is no pre-packaged actions

  })];
}, []);

exports.installPrepackagedRules = installPrepackagedRules;