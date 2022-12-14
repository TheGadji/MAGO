"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installILMPolicy = installILMPolicy;

var _types = require("../../../../types");

var _archive = require("../../archive");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function installILMPolicy(paths, esClient) {
  const ilmPaths = paths.filter(path => isILMPolicy(path));
  if (!ilmPaths.length) return;
  await Promise.all(ilmPaths.map(async path => {
    const body = (0, _archive.getAsset)(path).toString('utf-8');
    const {
      file
    } = (0, _archive.getPathParts)(path);
    const name = file.substr(0, file.lastIndexOf('.'));

    try {
      await esClient.transport.request({
        method: 'PUT',
        path: '/_ilm/policy/' + name,
        body
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }));
}

const isILMPolicy = path => {
  const pathParts = (0, _archive.getPathParts)(path);
  return pathParts.type === _types.ElasticsearchAssetType.ilmPolicy;
};