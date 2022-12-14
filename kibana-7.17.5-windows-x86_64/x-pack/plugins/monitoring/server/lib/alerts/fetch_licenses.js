"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLicenses = fetchLicenses;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

async function fetchLicenses(esClient, clusters, index, filterQuery) {
  var _response$hits$hits$m, _response$hits;

  const params = {
    index,
    filter_path: ['hits.hits._source.license.*', 'hits.hits._source.cluster_uuid', 'hits.hits._index'],
    body: {
      size: clusters.length,
      sort: [{
        timestamp: {
          order: 'desc',
          unmapped_type: 'long'
        }
      }],
      query: {
        bool: {
          filter: [{
            terms: {
              cluster_uuid: clusters.map(cluster => cluster.clusterUuid)
            }
          }, {
            term: {
              type: 'cluster_stats'
            }
          }, {
            range: {
              timestamp: {
                gte: 'now-2m'
              }
            }
          }]
        }
      },
      collapse: {
        field: 'cluster_uuid'
      }
    }
  };

  try {
    if (filterQuery) {
      const filterQueryObject = JSON.parse(filterQuery);
      params.body.query.bool.filter.push(filterQueryObject);
    }
  } catch (e) {// meh
  }

  const {
    body: response
  } = await esClient.search(params);
  return (_response$hits$hits$m = response === null || response === void 0 ? void 0 : (_response$hits = response.hits) === null || _response$hits === void 0 ? void 0 : _response$hits.hits.map(hit => {
    var _license, _rawLicense$status, _rawLicense$type, _rawLicense$expiry_da;

    const rawLicense = (_license = hit._source.license) !== null && _license !== void 0 ? _license : {};
    const license = {
      status: (_rawLicense$status = rawLicense.status) !== null && _rawLicense$status !== void 0 ? _rawLicense$status : '',
      type: (_rawLicense$type = rawLicense.type) !== null && _rawLicense$type !== void 0 ? _rawLicense$type : '',
      expiryDateMS: (_rawLicense$expiry_da = rawLicense.expiry_date_in_millis) !== null && _rawLicense$expiry_da !== void 0 ? _rawLicense$expiry_da : 0,
      clusterUuid: hit._source.cluster_uuid,
      ccs: hit._index
    };
    return license;
  })) !== null && _response$hits$hits$m !== void 0 ? _response$hits$hits$m : [];
}