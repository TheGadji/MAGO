"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAndTransformGcMetrics = fetchAndTransformGcMetrics;

var _lodash = require("lodash");

var _theme = require("@kbn/ui-shared-deps-src/theme");

var _is_finite_number = require("../../../../../../common/utils/is_finite_number");

var _metrics = require("../../../../helpers/metrics");

var _metrics2 = require("../../../../../projections/metrics");

var _merge_projection = require("../../../../../projections/util/merge_projection");

var _elasticsearch_fieldnames = require("../../../../../../common/elasticsearch_fieldnames");

var _get_bucket_size = require("../../../../helpers/get_bucket_size");

var _viz_colors = require("../../../../../../common/viz_colors");

var _agent_name = require("../../../../../../common/agent_name");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function fetchAndTransformGcMetrics({
  environment,
  kuery,
  setup,
  serviceName,
  serviceNodeName,
  chartBase,
  fieldName,
  operationName,
  start,
  end
}) {
  const {
    apmEventClient,
    config
  } = setup;
  const {
    bucketSize
  } = (0, _get_bucket_size.getBucketSize)({
    start,
    end
  });
  const projection = (0, _metrics2.getMetricsProjection)({
    environment,
    kuery,
    serviceName,
    serviceNodeName,
    start,
    end
  }); // GC rate and time are reported by the agents as monotonically
  // increasing counters, which means that we have to calculate
  // the delta in an es query. In the future agent might start
  // reporting deltas.

  const params = (0, _merge_projection.mergeProjection)(projection, {
    body: {
      size: 0,
      query: {
        bool: {
          filter: [...projection.body.query.bool.filter, {
            exists: {
              field: fieldName
            }
          }, {
            terms: {
              [_elasticsearch_fieldnames.AGENT_NAME]: _agent_name.JAVA_AGENT_NAMES
            }
          }]
        }
      },
      aggs: {
        per_pool: {
          terms: {
            field: `${_elasticsearch_fieldnames.LABEL_NAME}`
          },
          aggs: {
            timeseries: {
              date_histogram: (0, _metrics.getMetricsDateHistogramParams)({
                start,
                end,
                metricsInterval: config.metricsInterval
              }),
              aggs: {
                // get the max value
                max: {
                  max: {
                    field: fieldName
                  }
                },
                // get the derivative, which is the delta y
                derivative: {
                  derivative: {
                    buckets_path: 'max'
                  }
                },
                // if a gc counter is reset, the delta will be >0 and
                // needs to be excluded
                value: {
                  bucket_script: {
                    buckets_path: {
                      value: 'derivative'
                    },
                    script: 'params.value > 0.0 ? params.value : 0.0'
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  const response = await apmEventClient.search(operationName, params);
  const {
    aggregations
  } = response;

  if (!aggregations) {
    return { ...chartBase,
      noHits: true,
      series: []
    };
  }

  const series = aggregations.per_pool.buckets.map((poolBucket, i) => {
    const label = poolBucket.key;
    const timeseriesData = poolBucket.timeseries;
    const data = timeseriesData.buckets.map(bucket => {
      var _bucket$value; // derivative/value will be undefined for the first hit and if the `max` value is null


      const bucketValue = (_bucket$value = bucket.value) === null || _bucket$value === void 0 ? void 0 : _bucket$value.value;
      const unconvertedY = (0, _is_finite_number.isFiniteNumber)(bucketValue) ? (0, _lodash.round)(bucketValue * (60 / bucketSize), 1) : null; // convert to milliseconds if we're calculating time, but not for rate

      const y = unconvertedY !== null && fieldName === _elasticsearch_fieldnames.METRIC_JAVA_GC_TIME ? unconvertedY * 1000 : unconvertedY;
      return {
        y,
        x: bucket.key
      };
    });
    const values = data.map(coordinate => coordinate.y).filter(y => y !== null);
    const overallValue = (0, _lodash.sum)(values) / values.length;
    return {
      title: label,
      key: label,
      type: chartBase.type,
      color: (0, _viz_colors.getVizColorForIndex)(i, _theme.euiLightVars),
      overallValue,
      data
    };
  });
  return { ...chartBase,
    noHits: response.hits.total.value === 0,
    series
  };
}