"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METRICS_FEATURE = exports.LOGS_FEATURE = void 0;

var _i18n = require("@kbn/i18n");

var _types = require("../common/alerting/logs/log_threshold/types");

var _types2 = require("./lib/alerting/inventory_metric_threshold/types");

var _types3 = require("./lib/alerting/metric_threshold/types");

var _server = require("../../../../src/core/server");

var _constants = require("../common/constants");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const METRICS_FEATURE = {
  id: _constants.METRICS_FEATURE_ID,
  name: _i18n.i18n.translate('xpack.infra.featureRegistry.linkInfrastructureTitle', {
    defaultMessage: 'Metrics'
  }),
  order: 800,
  category: _server.DEFAULT_APP_CATEGORIES.observability,
  app: ['infra', 'metrics', 'kibana'],
  catalogue: ['infraops', 'metrics'],
  management: {
    insightsAndAlerting: ['triggersActions']
  },
  alerting: [_types3.METRIC_THRESHOLD_ALERT_TYPE_ID, _types2.METRIC_INVENTORY_THRESHOLD_ALERT_TYPE_ID],
  privileges: {
    all: {
      app: ['infra', 'metrics', 'kibana'],
      catalogue: ['infraops', 'metrics'],
      api: ['infra', 'rac'],
      savedObject: {
        all: ['infrastructure-ui-source'],
        read: ['index-pattern']
      },
      alerting: {
        rule: {
          all: [_types3.METRIC_THRESHOLD_ALERT_TYPE_ID, _types2.METRIC_INVENTORY_THRESHOLD_ALERT_TYPE_ID]
        },
        alert: {
          all: [_types3.METRIC_THRESHOLD_ALERT_TYPE_ID, _types2.METRIC_INVENTORY_THRESHOLD_ALERT_TYPE_ID]
        }
      },
      management: {
        insightsAndAlerting: ['triggersActions']
      },
      ui: ['show', 'configureSource', 'save']
    },
    read: {
      app: ['infra', 'metrics', 'kibana'],
      catalogue: ['infraops', 'metrics'],
      api: ['infra', 'rac'],
      savedObject: {
        all: [],
        read: ['infrastructure-ui-source', 'index-pattern']
      },
      alerting: {
        rule: {
          read: [_types3.METRIC_THRESHOLD_ALERT_TYPE_ID, _types2.METRIC_INVENTORY_THRESHOLD_ALERT_TYPE_ID]
        },
        alert: {
          read: [_types3.METRIC_THRESHOLD_ALERT_TYPE_ID, _types2.METRIC_INVENTORY_THRESHOLD_ALERT_TYPE_ID]
        }
      },
      management: {
        insightsAndAlerting: ['triggersActions']
      },
      ui: ['show']
    }
  }
};
exports.METRICS_FEATURE = METRICS_FEATURE;
const LOGS_FEATURE = {
  id: _constants.LOGS_FEATURE_ID,
  name: _i18n.i18n.translate('xpack.infra.featureRegistry.linkLogsTitle', {
    defaultMessage: 'Logs'
  }),
  order: 700,
  category: _server.DEFAULT_APP_CATEGORIES.observability,
  app: ['infra', 'logs', 'kibana'],
  catalogue: ['infralogging', 'logs'],
  management: {
    insightsAndAlerting: ['triggersActions']
  },
  alerting: [_types.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID],
  privileges: {
    all: {
      app: ['infra', 'logs', 'kibana'],
      catalogue: ['infralogging', 'logs'],
      api: ['infra', 'rac'],
      savedObject: {
        all: ['infrastructure-ui-source'],
        read: []
      },
      alerting: {
        rule: {
          all: [_types.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID]
        },
        alert: {
          all: [_types.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID]
        }
      },
      management: {
        insightsAndAlerting: ['triggersActions']
      },
      ui: ['show', 'configureSource', 'save']
    },
    read: {
      app: ['infra', 'logs', 'kibana'],
      catalogue: ['infralogging', 'logs'],
      api: ['infra', 'rac'],
      alerting: {
        rule: {
          read: [_types.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID]
        },
        alert: {
          read: [_types.LOG_DOCUMENT_COUNT_ALERT_TYPE_ID]
        }
      },
      management: {
        insightsAndAlerting: ['triggersActions']
      },
      savedObject: {
        all: [],
        read: ['infrastructure-ui-source']
      },
      ui: ['show']
    }
  }
};
exports.LOGS_FEATURE = LOGS_FEATURE;