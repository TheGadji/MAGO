"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listConfigurations = listConfigurations;

var _convert_settings_to_string = require("./convert_settings_to_string");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function listConfigurations({
  setup
}) {
  const {
    internalClient,
    indices
  } = setup;
  const params = {
    index: indices.apmAgentConfigurationIndex,
    size: 200
  };
  const resp = await internalClient.search('list_agent_configuration', params);
  return resp.hits.hits.map(_convert_settings_to_string.convertConfigSettingsToString).map(hit => hit._source);
}