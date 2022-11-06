"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStepLastSuccessfulStep = exports.getLastSuccessfulStepParams = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const getLastSuccessfulStepParams = ({
  monitorId,
  stepIndex,
  timestamp,
  location
}) => {
  return {
    size: 1,
    sort: [{
      '@timestamp': {
        order: 'desc'
      }
    }],
    query: {
      bool: {
        filter: [{
          range: {
            '@timestamp': {
              lte: timestamp
            }
          }
        }, {
          term: {
            'monitor.id': monitorId
          }
        }, {
          term: {
            'synthetics.type': 'step/end'
          }
        }, {
          term: {
            'synthetics.step.status': 'succeeded'
          }
        }, {
          term: {
            'synthetics.step.index': stepIndex
          }
        }, ...(location ? [{
          term: {
            'observer.geo.name': location
          }
        }] : [])],
        ...(!location ? {
          must_not: {
            exists: {
              field: 'observer.geo.name'
            }
          }
        } : {})
      }
    }
  };
};

exports.getLastSuccessfulStepParams = getLastSuccessfulStepParams;

const getStepLastSuccessfulStep = async ({
  uptimeEsClient,
  monitorId,
  stepIndex,
  timestamp,
  location
}) => {
  const lastSuccessCheckParams = getLastSuccessfulStepParams({
    monitorId,
    stepIndex,
    timestamp,
    location
  });
  const {
    body: result
  } = await uptimeEsClient.search({
    body: lastSuccessCheckParams
  });

  if (result.hits.total.value < 1) {
    return null;
  }

  const step = result.hits.hits[0]._source;
  return { ...step,
    timestamp: step['@timestamp']
  };
};

exports.getStepLastSuccessfulStep = getStepLastSuccessfulStep;