"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchIndices = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

async function fetchIndicesCall(client, indexNames) {
  const indexNamesString = indexNames && indexNames.length ? indexNames.join(',') : '*'; // This call retrieves alias and settings (incl. hidden status) information about indices

  const {
    body: indices
  } = await client.asCurrentUser.indices.get({
    index: indexNamesString,
    expand_wildcards: ['hidden', 'all'],
    // only get specified properties in the response
    filter_path: ['*.aliases', '*.settings.index.hidden', '*.data_stream']
  });

  if (!Object.keys(indices).length) {
    return [];
  }

  const {
    body: catHits
  } = await client.asCurrentUser.cat.indices({
    format: 'json',
    h: 'health,status,index,uuid,pri,rep,docs.count,sth,store.size',
    expand_wildcards: ['hidden', 'all'],
    index: indexNamesString
  }); // System indices may show up in _cat APIs, as these APIs are primarily used for troubleshooting
  // For now, we filter them out and only return index information for the indices we have
  // In the future, we should migrate away from using cat APIs (https://github.com/elastic/kibana/issues/57286)

  return catHits.reduce((decoratedIndices, hit) => {
    const index = indices[hit.index];

    if (typeof index !== 'undefined') {
      var _index$settings;

      const aliases = Object.keys(index.aliases);
      decoratedIndices.push({
        health: hit.health,
        status: hit.status,
        name: hit.index,
        uuid: hit.uuid,
        primary: hit.pri,
        replica: hit.rep,
        documents: hit['docs.count'],
        size: hit['store.size'],
        isFrozen: hit.sth === 'true',
        // sth value coming back as a string from ES
        aliases: aliases.length ? aliases : 'none',
        // @ts-expect-error @elastic/elasticsearch https://github.com/elastic/elasticsearch-specification/issues/532
        hidden: ((_index$settings = index.settings) === null || _index$settings === void 0 ? void 0 : _index$settings.index.hidden) === 'true',
        data_stream: index.data_stream
      });
    }

    return decoratedIndices;
  }, []);
}

const fetchIndices = async (client, indexDataEnricher, indexNames) => {
  const indices = await fetchIndicesCall(client, indexNames);
  return await indexDataEnricher.enrichIndices(indices, client);
};

exports.fetchIndices = fetchIndices;