"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAndTransformMetrics = fetchAndTransformMetrics;

var _metrics = require("../../projections/metrics");

var _merge_projection = require("../../projections/util/merge_projection");

var _metrics2 = require("../helpers/metrics");

var _transform_metrics_chart = require("./transform_metrics_chart");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function fetchAndTransformMetrics({
  environment,
  kuery,
  setup,
  serviceName,
  serviceNodeName,
  start,
  end,
  chartBase,
  aggs,
  additionalFilters = [],
  operationName
}) {
  const {
    apmEventClient,
    config
  } = setup;
  const projection = (0, _metrics.getMetricsProjection)({
    environment,
    kuery,
    serviceName,
    serviceNodeName,
    start,
    end
  });
  const params = (0, _merge_projection.mergeProjection)(projection, {
    body: {
      size: 0,
      query: {
        bool: {
          filter: [...projection.body.query.bool.filter, ...additionalFilters]
        }
      },
      aggs: {
        timeseriesData: {
          date_histogram: (0, _metrics2.getMetricsDateHistogramParams)({
            start,
            end,
            metricsInterval: config.metricsInterval
          }),
          aggs
        },
        ...aggs
      }
    }
  });
  const response = await apmEventClient.search(operationName, params);
  return (0, _transform_metrics_chart.transformDataToMetricsChart)(response, chartBase);
}