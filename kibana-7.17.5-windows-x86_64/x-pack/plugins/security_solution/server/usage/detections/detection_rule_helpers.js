"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDetectionRuleUsage = exports.initialDetectionRulesUsage = exports.getInitialDetectionMetrics = exports.getDetectionRuleMetrics = void 0;

var _constants = require("../../../common/constants");

var _index = require("./index");

var _legacy_saved_object_mappings = require("../../lib/detection_engine/rule_actions/legacy_saved_object_mappings");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// eslint-disable-next-line no-restricted-imports

/**
 * Initial detection metrics initialized.
 */


const getInitialDetectionMetrics = () => ({
  ml_jobs: {
    ml_job_usage: {
      custom: {
        enabled: 0,
        disabled: 0
      },
      elastic: {
        enabled: 0,
        disabled: 0
      }
    },
    ml_job_metrics: []
  },
  detection_rules: {
    detection_rule_detail: [],
    detection_rule_usage: initialDetectionRulesUsage
  }
});
/**
 * Default detection rule usage count, split by type + elastic/custom
 */


exports.getInitialDetectionMetrics = getInitialDetectionMetrics;
const initialDetectionRulesUsage = {
  query: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  },
  threshold: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  },
  eql: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  },
  machine_learning: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  },
  threat_match: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  },
  elastic_total: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  },
  custom_total: {
    enabled: 0,
    disabled: 0,
    alerts: 0,
    cases: 0,
    legacy_notifications_enabled: 0,
    legacy_notifications_disabled: 0,
    notifications_enabled: 0,
    notifications_disabled: 0
  }
};
/* eslint-disable complexity */

exports.initialDetectionRulesUsage = initialDetectionRulesUsage;

const updateDetectionRuleUsage = (detectionRuleMetric, usage) => {
  let updatedUsage = usage;
  const legacyNotificationEnabled = detectionRuleMetric.has_legacy_notification && detectionRuleMetric.enabled;
  const legacyNotificationDisabled = detectionRuleMetric.has_legacy_notification && !detectionRuleMetric.enabled;
  const notificationEnabled = detectionRuleMetric.has_notification && detectionRuleMetric.enabled;
  const notificationDisabled = detectionRuleMetric.has_notification && !detectionRuleMetric.enabled;

  if (detectionRuleMetric.rule_type === 'query') {
    updatedUsage = { ...usage,
      query: { ...usage.query,
        enabled: detectionRuleMetric.enabled ? usage.query.enabled + 1 : usage.query.enabled,
        disabled: !detectionRuleMetric.enabled ? usage.query.disabled + 1 : usage.query.disabled,
        alerts: usage.query.alerts + detectionRuleMetric.alert_count_daily,
        cases: usage.query.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? usage.query.legacy_notifications_enabled + 1 : usage.query.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? usage.query.legacy_notifications_disabled + 1 : usage.query.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? usage.query.notifications_enabled + 1 : usage.query.notifications_enabled,
        notifications_disabled: notificationDisabled ? usage.query.notifications_disabled + 1 : usage.query.notifications_disabled
      }
    };
  } else if (detectionRuleMetric.rule_type === 'threshold') {
    updatedUsage = { ...usage,
      threshold: { ...usage.threshold,
        enabled: detectionRuleMetric.enabled ? usage.threshold.enabled + 1 : usage.threshold.enabled,
        disabled: !detectionRuleMetric.enabled ? usage.threshold.disabled + 1 : usage.threshold.disabled,
        alerts: usage.threshold.alerts + detectionRuleMetric.alert_count_daily,
        cases: usage.threshold.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? usage.threshold.legacy_notifications_enabled + 1 : usage.threshold.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? usage.threshold.legacy_notifications_disabled + 1 : usage.threshold.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? usage.threshold.notifications_enabled + 1 : usage.threshold.notifications_enabled,
        notifications_disabled: notificationDisabled ? usage.threshold.notifications_disabled + 1 : usage.threshold.notifications_disabled
      }
    };
  } else if (detectionRuleMetric.rule_type === 'eql') {
    updatedUsage = { ...usage,
      eql: { ...usage.eql,
        enabled: detectionRuleMetric.enabled ? usage.eql.enabled + 1 : usage.eql.enabled,
        disabled: !detectionRuleMetric.enabled ? usage.eql.disabled + 1 : usage.eql.disabled,
        alerts: usage.eql.alerts + detectionRuleMetric.alert_count_daily,
        cases: usage.eql.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? usage.eql.legacy_notifications_enabled + 1 : usage.eql.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? usage.eql.legacy_notifications_disabled + 1 : usage.eql.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? usage.eql.notifications_enabled + 1 : usage.eql.notifications_enabled,
        notifications_disabled: notificationDisabled ? usage.eql.notifications_disabled + 1 : usage.eql.notifications_disabled
      }
    };
  } else if (detectionRuleMetric.rule_type === 'machine_learning') {
    updatedUsage = { ...usage,
      machine_learning: { ...usage.machine_learning,
        enabled: detectionRuleMetric.enabled ? usage.machine_learning.enabled + 1 : usage.machine_learning.enabled,
        disabled: !detectionRuleMetric.enabled ? usage.machine_learning.disabled + 1 : usage.machine_learning.disabled,
        alerts: usage.machine_learning.alerts + detectionRuleMetric.alert_count_daily,
        cases: usage.machine_learning.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? usage.machine_learning.legacy_notifications_enabled + 1 : usage.machine_learning.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? usage.machine_learning.legacy_notifications_disabled + 1 : usage.machine_learning.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? usage.machine_learning.notifications_enabled + 1 : usage.machine_learning.notifications_enabled,
        notifications_disabled: notificationDisabled ? usage.machine_learning.notifications_disabled + 1 : usage.machine_learning.notifications_disabled
      }
    };
  } else if (detectionRuleMetric.rule_type === 'threat_match') {
    updatedUsage = { ...usage,
      threat_match: { ...usage.threat_match,
        enabled: detectionRuleMetric.enabled ? usage.threat_match.enabled + 1 : usage.threat_match.enabled,
        disabled: !detectionRuleMetric.enabled ? usage.threat_match.disabled + 1 : usage.threat_match.disabled,
        alerts: usage.threat_match.alerts + detectionRuleMetric.alert_count_daily,
        cases: usage.threat_match.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? usage.threat_match.legacy_notifications_enabled + 1 : usage.threat_match.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? usage.threat_match.legacy_notifications_disabled + 1 : usage.threat_match.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? usage.threat_match.notifications_enabled + 1 : usage.threat_match.notifications_enabled,
        notifications_disabled: notificationDisabled ? usage.threat_match.notifications_disabled + 1 : usage.threat_match.notifications_disabled
      }
    };
  }

  if (detectionRuleMetric.elastic_rule) {
    updatedUsage = { ...updatedUsage,
      elastic_total: { ...updatedUsage.elastic_total,
        enabled: detectionRuleMetric.enabled ? updatedUsage.elastic_total.enabled + 1 : updatedUsage.elastic_total.enabled,
        disabled: !detectionRuleMetric.enabled ? updatedUsage.elastic_total.disabled + 1 : updatedUsage.elastic_total.disabled,
        alerts: updatedUsage.elastic_total.alerts + detectionRuleMetric.alert_count_daily,
        cases: updatedUsage.elastic_total.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? updatedUsage.elastic_total.legacy_notifications_enabled + 1 : updatedUsage.elastic_total.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? updatedUsage.elastic_total.legacy_notifications_disabled + 1 : updatedUsage.elastic_total.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? updatedUsage.elastic_total.notifications_enabled + 1 : updatedUsage.elastic_total.notifications_enabled,
        notifications_disabled: notificationDisabled ? updatedUsage.elastic_total.notifications_disabled + 1 : updatedUsage.elastic_total.notifications_disabled
      }
    };
  } else {
    updatedUsage = { ...updatedUsage,
      custom_total: { ...updatedUsage.custom_total,
        enabled: detectionRuleMetric.enabled ? updatedUsage.custom_total.enabled + 1 : updatedUsage.custom_total.enabled,
        disabled: !detectionRuleMetric.enabled ? updatedUsage.custom_total.disabled + 1 : updatedUsage.custom_total.disabled,
        alerts: updatedUsage.custom_total.alerts + detectionRuleMetric.alert_count_daily,
        cases: updatedUsage.custom_total.cases + detectionRuleMetric.cases_count_total,
        legacy_notifications_enabled: legacyNotificationEnabled ? updatedUsage.custom_total.legacy_notifications_enabled + 1 : updatedUsage.custom_total.legacy_notifications_enabled,
        legacy_notifications_disabled: legacyNotificationDisabled ? updatedUsage.custom_total.legacy_notifications_disabled + 1 : updatedUsage.custom_total.legacy_notifications_disabled,
        notifications_enabled: notificationEnabled ? updatedUsage.custom_total.notifications_enabled + 1 : updatedUsage.custom_total.notifications_enabled,
        notifications_disabled: notificationDisabled ? updatedUsage.custom_total.notifications_disabled + 1 : updatedUsage.custom_total.notifications_disabled
      }
    };
  }

  return updatedUsage;
};

exports.updateDetectionRuleUsage = updateDetectionRuleUsage;
const MAX_RESULTS_WINDOW = 10_000; // elasticsearch index.max_result_window default value

const getDetectionRuleMetrics = async (kibanaIndex, signalsIndex, esClient, savedObjectClient) => {
  let rulesUsage = initialDetectionRulesUsage;
  const ruleSearchOptions = {
    body: {
      query: {
        bool: {
          filter: {
            term: {
              'alert.alertTypeId': _constants.SIGNALS_ID
            }
          }
        }
      }
    },
    filter_path: [],
    ignore_unavailable: true,
    index: kibanaIndex,
    size: MAX_RESULTS_WINDOW
  };

  try {
    var _detectionAlertsResp$, _detectionAlertsResp$2, _detectionAlertsResp$3, _ruleResults$hits, _ruleResults$hits$hit;

    const {
      body: ruleResults
    } = await esClient.search(ruleSearchOptions);
    const {
      body: detectionAlertsResp
    } = await esClient.search({
      index: `${signalsIndex}*`,
      size: MAX_RESULTS_WINDOW,
      body: {
        aggs: {
          detectionAlerts: {
            terms: {
              field: 'signal.rule.id'
            }
          }
        },
        query: {
          bool: {
            filter: [{
              range: {
                '@timestamp': {
                  gte: 'now-24h',
                  lte: 'now'
                }
              }
            }]
          }
        }
      }
    });
    const cases = await savedObjectClient.find({
      type: 'cases-comments',
      fields: [],
      page: 1,
      perPage: MAX_RESULTS_WINDOW,
      namespaces: ['*'],
      filter: 'cases-comments.attributes.type: alert'
    }); // Once we are confident all rules relying on side-car actions SO's have been migrated to SO references we should remove this function.

    const legacyRuleActions = await savedObjectClient.find({
      type: _legacy_saved_object_mappings.legacyRuleActionsSavedObjectType,
      page: 1,
      perPage: MAX_RESULTS_WINDOW,
      namespaces: ['*']
    });
    const legacyNotificationRuleIds = legacyRuleActions.saved_objects.reduce((cache, legacyNotificationsObject) => {
      const ruleRef = legacyNotificationsObject.references.find(reference => reference.name === 'alert_0' && reference.type === 'alert');

      if (ruleRef != null) {
        const enabled = legacyNotificationsObject.attributes.ruleThrottle !== 'no_actions';
        cache.set(ruleRef.id, {
          enabled
        });
      }

      return cache;
    }, new Map());
    const casesCache = cases.saved_objects.reduce((cache, {
      attributes: casesObject
    }) => {
      const ruleId = casesObject.rule.id;
      const cacheCount = cache.get(ruleId);

      if (cacheCount === undefined) {
        cache.set(ruleId, 1);
      } else {
        cache.set(ruleId, cacheCount + 1);
      }

      return cache;
    }, new Map());
    const alertBuckets = (_detectionAlertsResp$ = (_detectionAlertsResp$2 = detectionAlertsResp.aggregations) === null || _detectionAlertsResp$2 === void 0 ? void 0 : (_detectionAlertsResp$3 = _detectionAlertsResp$2.detectionAlerts) === null || _detectionAlertsResp$3 === void 0 ? void 0 : _detectionAlertsResp$3.buckets) !== null && _detectionAlertsResp$ !== void 0 ? _detectionAlertsResp$ : [];
    const alertsCache = new Map();
    alertBuckets.map(bucket => alertsCache.set(bucket.key, bucket.doc_count));

    if (((_ruleResults$hits = ruleResults.hits) === null || _ruleResults$hits === void 0 ? void 0 : (_ruleResults$hits$hit = _ruleResults$hits.hits) === null || _ruleResults$hits$hit === void 0 ? void 0 : _ruleResults$hits$hit.length) > 0) {
      const ruleObjects = ruleResults.hits.hits.map(hit => {
        var _hit$_source, _hit$_source2, _hit$_source3, _hit$_source4, _hit$_source5, _hit$_source6, _hit$_source7, _hit$_source8, _hit$_source9, _hit$_source10, _hit$_source11;

        const ruleId = hit._id.split(':')[1];

        const isElastic = (0, _index.isElasticRule)((_hit$_source = hit._source) === null || _hit$_source === void 0 ? void 0 : _hit$_source.alert.tags); // Even if the legacy notification is set to "no_actions" we still count the rule as having a legacy notification that is not migrated yet.

        const hasLegacyNotification = legacyNotificationRuleIds.get(ruleId) != null; // We only count a rule as having a notification and being "enabled" if it is _not_ set to "no_actions"/"muteAll" and it has at least one action within its array.

        const hasNotification = !hasLegacyNotification && ((_hit$_source2 = hit._source) === null || _hit$_source2 === void 0 ? void 0 : _hit$_source2.alert.actions) != null && ((_hit$_source3 = hit._source) === null || _hit$_source3 === void 0 ? void 0 : _hit$_source3.alert.actions.length) > 0 && ((_hit$_source4 = hit._source) === null || _hit$_source4 === void 0 ? void 0 : _hit$_source4.alert.muteAll) !== true;
        return {
          rule_name: (_hit$_source5 = hit._source) === null || _hit$_source5 === void 0 ? void 0 : _hit$_source5.alert.name,
          rule_id: (_hit$_source6 = hit._source) === null || _hit$_source6 === void 0 ? void 0 : _hit$_source6.alert.params.ruleId,
          rule_type: (_hit$_source7 = hit._source) === null || _hit$_source7 === void 0 ? void 0 : _hit$_source7.alert.params.type,
          rule_version: Number((_hit$_source8 = hit._source) === null || _hit$_source8 === void 0 ? void 0 : _hit$_source8.alert.params.version),
          enabled: (_hit$_source9 = hit._source) === null || _hit$_source9 === void 0 ? void 0 : _hit$_source9.alert.enabled,
          elastic_rule: isElastic,
          created_on: (_hit$_source10 = hit._source) === null || _hit$_source10 === void 0 ? void 0 : _hit$_source10.alert.createdAt,
          updated_on: (_hit$_source11 = hit._source) === null || _hit$_source11 === void 0 ? void 0 : _hit$_source11.alert.updatedAt,
          alert_count_daily: alertsCache.get(ruleId) || 0,
          cases_count_total: casesCache.get(ruleId) || 0,
          has_legacy_notification: hasLegacyNotification,
          has_notification: hasNotification
        };
      }); // Only bring back rule detail on elastic prepackaged detection rules

      const elasticRuleObjects = ruleObjects.filter(hit => hit.elastic_rule === true);
      rulesUsage = ruleObjects.reduce((usage, rule) => {
        return updateDetectionRuleUsage(rule, usage);
      }, rulesUsage);
      return {
        detection_rule_detail: elasticRuleObjects,
        detection_rule_usage: rulesUsage
      };
    }
  } catch (e) {// ignore failure, usage will be zeroed
  }

  return {
    detection_rule_detail: [],
    detection_rule_usage: rulesUsage
  };
};

exports.getDetectionRuleMetrics = getDetectionRuleMetrics;