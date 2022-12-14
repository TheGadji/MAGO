"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDataToMetricsChart = transformDataToMetricsChart;

var _theme = require("@kbn/ui-shared-deps-src/theme");

var _viz_colors = require("../../../common/viz_colors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function transformDataToMetricsChart(result, chartBase) {
  const {
    aggregations,
    hits
  } = result;
  const timeseriesData = aggregations === null || aggregations === void 0 ? void 0 : aggregations.timeseriesData;
  return {
    title: chartBase.title,
    key: chartBase.key,
    yUnit: chartBase.yUnit,
    noHits: hits.total.value === 0,
    series: hits.total.value > 0 ? Object.keys(chartBase.series).map((seriesKey, i) => {
      var _aggregations$seriesK;

      const overallValue = aggregations === null || aggregations === void 0 ? void 0 : (_aggregations$seriesK = aggregations[seriesKey]) === null || _aggregations$seriesK === void 0 ? void 0 : _aggregations$seriesK.value;
      return {
        title: chartBase.series[seriesKey].title,
        key: seriesKey,
        type: chartBase.type,
        color: chartBase.series[seriesKey].color || (0, _viz_colors.getVizColorForIndex)(i, _theme.euiLightVars),
        overallValue,
        data: (timeseriesData === null || timeseriesData === void 0 ? void 0 : timeseriesData.buckets.map(bucket => {
          const {
            value
          } = bucket[seriesKey];
          const y = value === null || isNaN(value) ? null : value;
          return {
            x: bucket.key,
            y
          };
        })) || []
      };
    }) : []
  };
}